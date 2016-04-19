// const - 理论上说是 Chrome 49+，但是之前版本用不报错
const HOST = 'month.fe.sm.cn';

chrome.tabs.query({
	currentWindow: true,
	active: true
}, (tabs) => { // 箭头函数 - Chrome 45+ 启用
	const tab = tabs[0]; // 参数解构 - Chrome 49+ 弃用
	const url = encodeURIComponent(tab.url);
	const title = encodeURIComponent(tab.title);
	const $tip = document.querySelector('#sm-month-tip');

	// fetch - Chrome 42+ 启用
	fetch(`http://${HOST}/send?url=${url}&title=${title}`)
		.then((response) => response.json())
		.then((data) => data.text)
		.catch(() => '请求失败')
		.then((tipText) => {
			$tip.innerText = tipText;
			setTimeout(window.close, 2000);
		});
});
