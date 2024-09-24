---
title: "Node: Methode normalize()"
short-title: normalize()
slug: Web/API/Node/normalize
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("DOM")}}

Die **`normalize()`**-Methode der {{domxref("Node")}}-Schnittstelle bringt den angegebenen Knoten und seinen gesamten Unterbaum in eine _normalisierte_ Form.
In einem normalisierten Unterbaum sind keine Textknoten leer, und es gibt keine angrenzenden Textknoten.

## Syntax

```js-nolint
normalize()
```

### Parameter

Keine.

### Rückgabewert

Keine.

## Beispiel

```html
<output id="result"></output>
```

```js
const wrapper = document.createElement("div");

wrapper.appendChild(document.createTextNode("Part 1 "));
wrapper.appendChild(document.createTextNode("Part 2 "));

let node = wrapper.firstChild;
let result = "Before normalization:\n";
while (node) {
  result += ` ${node.nodeName}: ${node.nodeValue}\n`;
  node = node.nextSibling;
}

wrapper.normalize();

node = wrapper.firstChild;
result += "\n\nAfter normalization:\n";
while (node) {
  result += ` ${node.nodeName}: ${node.nodeValue}\n`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerText = result;
```

{{ EmbedLiveSample("Example", "100%", "170")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Text.splitText()")}}, das Gegenteil.
