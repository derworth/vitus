sudo service vitus-agent stop

sudo systemctl disable vitus-agent

sudo rm -f /usr/local/bin/vitus-agent

sudo rm -f /etc/systemd/system/vitus-agent.service

sudo rm -rf /etc/vitus-agent

sudo systemctl daemon-reload

echo "Vitus Agent uninstalled successfully"
