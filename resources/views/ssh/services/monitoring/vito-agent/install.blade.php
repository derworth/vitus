arch=$(uname -m)

if [ "$arch" == "x86_64" ]; then
    executable="vitoagent-linux-amd64"
elif [ "$arch" == "i686" ]; then
    executable="vitoagent-linux-amd"
elif [ "$arch" == "armv7l" ]; then
    executable="vitoagent-linux-arm"
elif [ "$arch" == "aarch64" ]; then
    executable="vitoagent-linux-arm64"
else
    executable="vitoagent-linux-amd64"
fi

wget {{ $downloadUrl }}/$executable

chmod +x ./$executable

sudo mv ./$executable /usr/local/bin/vitus-agent

# create service
export VITO_AGENT_SERVICE="
[Unit]
Description=Vitus Agent
After=network.target

[Service]
Type=simple
User=root
ExecStart=/usr/local/bin/vitus-agent
Restart=on-failure

[Install]
WantedBy=multi-user.target
"
echo "${VITO_AGENT_SERVICE}" | sudo tee /etc/systemd/system/vitus-agent.service

sudo mkdir -p /etc/vitus-agent

export VITO_AGENT_CONFIG="
{
    \"url\": \"{{ $configUrl }}\",
    \"secret\": \"{{ $configSecret }}\"
}
"

echo "${VITO_AGENT_CONFIG}" | sudo tee /etc/vitus-agent/config.json

sudo systemctl daemon-reload
sudo systemctl enable vitus-agent
sudo systemctl start vitus-agent

echo "Vitus Agent installed successfully"
