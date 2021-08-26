/** @format */

const calculatorPage = require('../pageobjects/calculatorPage');
const elementUtil = require('../utility/elementUtil');

describe('Calculator tests', () => {
	it('addition test', async () => {
		await elementUtil.launch('https://codepen.io/todd_goco/full/MWmMOpG');
		await elementUtil.switchToFrame(0);
		await elementUtil.click(calculatorPage.number_1);
		await elementUtil.click(calculatorPage.key_addition);
		await elementUtil.click(calculatorPage.number_4);
		await elementUtil.click(calculatorPage.key_equalto);
		await elementUtil.wait(500);
		let result = await elementUtil.getResult();
		expect(result).toBe('5');
	});

	it('subtraction test', async () => {
		await elementUtil.launch('https://codepen.io/todd_goco/full/MWmMOpG');
		await elementUtil.switchToFrame(0);
		await elementUtil.click(calculatorPage.number_1);
		await elementUtil.click(calculatorPage.key_subtraction);
		await elementUtil.click(calculatorPage.number_4);
		await elementUtil.click(calculatorPage.key_equalto);
		await elementUtil.wait(500);
		let result = await elementUtil.getResult();
		expect(result).toBe('-3');
	});

	it('division test', async () => {
		await elementUtil.launch('https://codepen.io/todd_goco/full/MWmMOpG');
		await elementUtil.switchToFrame(0);
		await elementUtil.click(calculatorPage.number_9);
		await elementUtil.click(calculatorPage.key_division);
		await elementUtil.click(calculatorPage.number_3);
		await elementUtil.click(calculatorPage.key_equalto);
		await elementUtil.wait(500);
		let result = await elementUtil.getResult();
		expect(result).toBe('3');
	});

	it('multiplication test', async () => {
		await elementUtil.launch('https://codepen.io/todd_goco/full/MWmMOpG');
		await elementUtil.switchToFrame(0);
		await elementUtil.click(calculatorPage.number_3);
		await elementUtil.click(calculatorPage.key_multiplication);
		await elementUtil.click(calculatorPage.number_3);
		await elementUtil.click(calculatorPage.key_equalto);
		await elementUtil.wait(500);
		let result = await elementUtil.getResult();
		expect(result).toBe('9');
	});
});
