const HOST = 'month.fe.sm.cn';

chrome.tabs.getSelected(null,function(tab) {
    const url = encodeURIComponent(tab.url);
	const title = encodeURIComponent(tab.title);
	
	fetch(`http://${HOST}/send?url=${url}&title=${title}`).then(function(res) {
		if (res.ok) {
		    res.json().then(function(data) {
				document.getElementById('sm-month-tip').innerText = data.text;	
				setTimeout(function () {
					window.close();
				}, 2000);
		    });
		} else {
			document.getElementById('sm-month-tip').innerText = '请求失败';	
		}
	}, function(e) {
		document.getElementById('sm-month-tip').innerText = '请求失败';	
	});
});
