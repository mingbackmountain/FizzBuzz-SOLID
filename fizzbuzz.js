var FizzRule = /** @class */ (function () {
    function FizzRule() {
    }
    FizzRule.prototype.matches = function (number) {
        return number % 3 === 0;
    };
    FizzRule.prototype.getReplacement = function () {
        return "Fizz";
    };
    return FizzRule;
}());
var BuzzRule = /** @class */ (function () {
    function BuzzRule() {
    }
    BuzzRule.prototype.matches = function (number) {
        return number % 5 === 0;
    };
    BuzzRule.prototype.getReplacement = function () {
        return "Buzz";
    };
    return BuzzRule;
}());
var FizBuzzRule = /** @class */ (function () {
    function FizBuzzRule() {
    }
    FizBuzzRule.prototype.matches = function (number) {
        return number % 3 === 0 && number % 5 === 0;
    };
    FizBuzzRule.prototype.getReplacement = function () {
        return "FizzBuzz";
    };
    return FizBuzzRule;
}());
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz() {
        this.rule = [];
    }
    FizzBuzz.prototype.addRule = function (rule) {
        this.rule.push(rule);
    };
    FizzBuzz.prototype.getReplacement = function (number) {
        for (var _i = 0, _a = this.rule; _i < _a.length; _i++) {
            var rule = _a[_i];
            if (rule.matches(number)) {
                return rule.getReplacement();
            }
        }
        return String(number);
    };
    FizzBuzz.prototype.generate = function (number) {
        var output = [];
        for (var i = 1; i <= number; i++) {
            output.push(this.getReplacement(i));
        }
        return output;
    };
    return FizzBuzz;
}());
var fizBuzz = new FizzBuzz();
fizBuzz.addRule(new FizBuzzRule());
fizBuzz.addRule(new FizzRule());
fizBuzz.addRule(new BuzzRule());
var result = fizBuzz.generate(100);
console.log(result.join(","));
