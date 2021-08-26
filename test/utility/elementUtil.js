/** @format */

class elementUtil {
	click = async (element) => {
		// await element.waitForClickable(5000);
		await element.click();
	};

	launch = async (url) => {
		await browser.url(url);
		await browser.fullscreenWindow();
	};

	switchToFrame = async (frameID) => {
		await this.wait(2000);
		await browser.switchToFrame(frameID);
		console.log(`switched into the frame`);
	};

	wait = async (waitTime) => {
		await browser.pause(waitTime);
	};
	getText = async (element) => {
		return await element.then((ele) => {
			return ele.getText();
		});
	};
	getAttributeValue = async (element, attributeName) => {
		return await element.then((ele) => {
			return ele.getAttribute(attributeName);
		});
	};

	getResult = async () => {
		const result = await browser.execute(() => {
			return document.getElementById('result').value;
		});
		return result;
		console.log('result is', result);
	};
}
module.exports = new elementUtil();
