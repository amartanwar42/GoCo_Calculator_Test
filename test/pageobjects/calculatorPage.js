/** @format */

class calculatorPage {
	get number_1() {
		return $("//input[@value='1']");
	}
	get number_2() {
		return $("//input[@value='2']");
	}
	get number_3() {
		return $("//input[@value='3']");
	}
	get number_4() {
		return $("//input[@value='4']");
	}
	get number_5() {
		return $("//input[@value='5']");
	}
	get number_6() {
		return $("//input[@value='6']");
	}
	get number_7() {
		return $("//input[@value='7']");
	}
	get number_8() {
		return $("//input[@value='8']");
	}
	get number_9() {
		return $("//input[@value='9']");
	}

	get key_addition() {
		return $("//input[@value='+']");
	}
	get key_subtraction() {
		return $("//input[@value='-']");
	}
	get key_division() {
		return $("//input[@value='/']");
	}
	get key_multiplication() {
		return $("//input[@value='*']");
	}
	get key_equalto() {
		return $("//input[@value='=']");
	}

	get calcuatorResult() {
		return $('#result');
	}
}
module.exports = new calculatorPage();
