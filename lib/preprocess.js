module.exports = function replacement(elem) {
  if (elem.nodeName === 'PRE' || elem.nodeName === 'CODE') return;

  Array.prototype.forEach.call(elem.childNodes, function(node) {
    // Node.ELEMENT_NODE
    if (node.nodeType === 1) {
      replacement(node);
    }
    // Node.TEXT_NODE
    if (node.nodeType === 3) {
      node.data = node.data.replace(/[*_]/g, function(s) {
        return '\\' + s;
      });
    }
  });
}
