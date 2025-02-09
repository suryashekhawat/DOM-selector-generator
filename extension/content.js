function getDOMSnapshot() {
    let elements = document.querySelectorAll('*');
    let domData = [];

    elements.forEach((el, index) => {
        domData.push({
            tag: el.tagName.toLowerCase(),
            id: el.id || null,
            classes: Array.from(el.classList),
            attributes: Array.from(el.attributes).map(attr => ({ name: attr.name, value: attr.value })),
            innerText: el.innerText,
            xpath: getXPath(el),
            cssSelector: getCssSelector(el),
            boundingBox: el.getBoundingClientRect(),
            position: index
        });
    });

    return domData;
}

function getXPath(element) {
    if (element.id !== '') return `id("${element.id}")`;
    if (element === document.body) return '/html/body';

    let ix = 0;
    let siblings = element.parentNode.children;
    for (let i = 0; i < siblings.length; i++) {
        if (siblings[i] === element) return getXPath(element.parentNode) + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
        if (siblings[i].tagName === element.tagName) ix++;
    }
}

function getCssSelector(el) {
    let path = [];
    while (el.parentNode) {
        let tag = el.tagName.toLowerCase();
        if (el.id) {
            path.unshift('#' + el.id);
            break;
        } else {
            let sameTagSiblings = Array.from(el.parentNode.children).filter(e => e.tagName.toLowerCase() === tag);
            if (sameTagSiblings.length > 1) {
                path.unshift(`${tag}:nth-child(${sameTagSiblings.indexOf(el) + 1})`);
            } else {
                path.unshift(tag);
            }
        }
        el = el.parentNode;
    }
    return path.join(' > ');
}

// Send data to background.js
chrome.runtime.sendMessage({ action: "capture_dom", data: getDOMSnapshot() });
