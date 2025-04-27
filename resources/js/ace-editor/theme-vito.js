ace.define(
    "ace/theme/vitus",
    ["require", "exports", "module", "ace/lib/dom"],
    function (require, exports) {
        (exports.isDark = true),
            (exports.cssClass = "ace-vitus rounded-lg w-full"),
            (exports.cssText = `
        .ace-vitus .ace_scrollbar::-webkit-scrollbar {  width: 12px;}
        .ace-vitus .ace_scrollbar::-webkit-scrollbar-track {  background: #111827;}
        .ace-vitus .ace_scrollbar::-webkit-scrollbar-thumb {  background: #374151;  border-radius: 4px;}
        .ace-vitus .ace_gutter {background: #151c27;color: rgb(128,145,160)}
        .ace-vitus .ace_print-margin {width: 1px;background: #555555}
        .ace-vitus {background-color: #0f172a;color: #F9FAFB}
        .ace-vitus .ace_cursor {color: #F9FAFB}
        .ace-vitus .ace_marker-layer .ace_selection {background: rgba(179, 101, 57, 0.75)}
        .ace-vitus.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #002240;}
        .ace-vitus .ace_marker-layer .ace_step {background: rgb(127, 111, 19)}
        .ace-vitus .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(255, 255, 255, 0.15)}
        .ace-vitus .ace_marker-layer .ace_active-line {background: rgba(24, 182, 155, 0.10)}
        .ace-vitus .ace_gutter-active-line {background-color: rgba(0, 0, 0, 0.35)}
        .ace-vitus .ace_marker-layer .ace_selected-word {border: 1px solid rgba(179, 101, 57, 0.75)}
        .ace-vitus .ace_invisible {color: rgba(255, 255, 255, 0.15)}
        .ace-vitus .ace_keyword,.ace-vitus .ace_meta {color: #FF9D00}
        .ace-vitus .ace_constant,.ace-vitus .ace_constant.ace_character,.ace-vitus .ace_constant.ace_character.ace_escape,.ace-vitus .ace_constant.ace_other {color: #FF628C}
        .ace-vitus .ace_invalid {color: #F8F8F8;background-color: #800F00}
        .ace-vitus .ace_support {color: #80FFBB}
        .ace-vitus .ace_support.ace_constant {color: #EB939A}
        .ace-vitus .ace_fold {background-color: #FF9D00;border-color: #F9FAFB}
        .ace-vitus .ace_support.ace_function {color: #FFB054}
        .ace-vitus .ace_storage {color: #FFEE80}
        .ace-vitus .ace_entity {color: #FFDD00}
        .ace-vitus .ace_string {color: #7cd827}
        .ace-vitus .ace_string.ace_regexp {color: #80FFC2}
        .ace-vitus .ace_comment {font-style: italic;color: #6B7280}
        .ace-vitus .ace_heading,.ace-vitus
        .ace_markup.ace_heading {color: #C8E4FD;background-color: #001221}
        .ace-vitus .ace_list,.ace-vitus .ace_markup.ace_list {background-color: #130D26}
        .ace-vitus .ace_variable {color: #CCCCCC}
        .ace-vitus .ace_variable.ace_language {color: #FF80E1}
        .ace-vitus .ace_meta.ace_tag {color: #9EFFFF}
        .ace-vitus .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHCLSvkPAAP3AgSDTRd4AAAAAElFTkSuQmCC) right repeat-y}
    `);

        var dom = require("../lib/dom");
        dom.importCssString(exports.cssText, exports.cssClass);
    },
);
