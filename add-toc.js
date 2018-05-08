// sadly phantom.js doesn't support ES6+ yet :/
function addToc(depth) {
	var toc = document.querySelector('.toc');

	if (toc) {
		var headingsSelector = 'h1 h2 h3 h4 h5 h6'
			.split(' ')
			.slice(0, depth)
			.map(function(selector) {
				return '.toc ~ ' + selector;
			})
			.join(',');

		var headings = document.querySelectorAll(headingsSelector);

		for (var i = 0; i < headings.length; i++) {
			var h = headings[i];

			var a = document.createElement('a');
			a.href = '#' + h.id;
			a.innerHTML = h.innerHTML;
			a.classList.add(h.nodeName.toLowerCase());

			toc.appendChild(a);
		}
	}
}
