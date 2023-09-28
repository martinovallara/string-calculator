class SeparatorParser {
    static patternDelimiter = /\/{2}(.*)\n/;

    constructor(input) {
        this.input = input;
    }

    is_define_custom_separator = () => SeparatorParser.patternDelimiter.test(this.input);

    parse = () => {
        let separator = ',';
        let parsedInput = this.input;

        if (this.is_define_custom_separator()) {
            separator = this.input.match(SeparatorParser.patternDelimiter)[1];
            parsedInput = this.input.replace(`//${separator}\n`, '');
        }
        return { parsedInput, separator };
    };
}
exports.SeparatorParser = SeparatorParser;
