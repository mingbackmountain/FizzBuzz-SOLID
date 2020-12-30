interface RuleInterface {
    matches(number:number):boolean;
    getReplacement():string;
}

class FizzRule implements RuleInterface {
    matches(number:number):boolean {
        return number % 3 === 0;
    }

    getReplacement():string {
        return "Fizz";
    }
}

class BuzzRule implements RuleInterface {
    matches(number:number):boolean {
        return number % 5 === 0;
    }

    getReplacement():string {
        return "Buzz";
    }
}

class FizBuzzRule implements RuleInterface {
    matches(number:number):boolean {
        return number % 3 === 0 && number % 5 ===0
    }

    getReplacement():string {
        return "FizzBuzz"
    }
}

class FizzBuzz {
    rule:RuleInterface[] = [];

    addRule(rule:RuleInterface) {
        this.rule.push(rule)
    }

    getReplacement(number:number):string {
        for(const rule of this.rule) {
            if(rule.matches(number)) {
                return rule.getReplacement();
            }
        }

        return String(number)
    }

    generate(number:number) {
        const output:string[] = [];

        for(let i=1; i<= number; i++) {
            output.push(this.getReplacement(i))
        }

        return output
    }
}

const fizBuzz = new FizzBuzz();
fizBuzz.addRule(new FizBuzzRule());
fizBuzz.addRule(new FizzRule());
fizBuzz.addRule(new BuzzRule());
const result = fizBuzz.generate(100);

console.log(result.join(","))