---
title: "Node: nodeName-Eigenschaft"
short-title: nodeName
slug: Web/API/Node/nodeName
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("DOM")}}

Die schreibgeschützte **`nodeName`**-Eigenschaft von [`Node`](/de/docs/Web/API/Node) gibt den Namen des aktuellen Knotens als Zeichenfolge zurück.

## Wert

Eine Zeichenfolge. Werte für die verschiedenen Arten von Knoten sind:

- [`Attr`](/de/docs/Web/API/Attr)
  - : Der Wert von [`Attr.name`](/de/docs/Web/API/Attr/name), das heißt der _qualifizierte Name_ des Attributs.
- [`CDATASection`](/de/docs/Web/API/CDATASection)
  - : Die Zeichenfolge `"#cdata-section"`.
- [`Comment`](/de/docs/Web/API/Comment)
  - : Die Zeichenfolge `"#comment"`.
- [`Document`](/de/docs/Web/API/Document)
  - : Die Zeichenfolge `"#document"`.
- [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)
  - : Die Zeichenfolge `"#document-fragment"`.
- [`DocumentType`](/de/docs/Web/API/DocumentType)
  - : Der Wert von [`DocumentType.name`](/de/docs/Web/API/DocumentType/name)
- [`Element`](/de/docs/Web/API/Element)
  - : Der Wert von [`Element.tagName`](/de/docs/Web/API/Element/tagName), das heißt der _Großbuchstabenname_ des Element-Tags, wenn ein HTML-Element vorliegt,
    oder das _Kleinbuchstabenelement_-Tag, wenn ein XML-Element (wie ein SVG- oder MATHML-Element) vorliegt.
- [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)
  - : Der Wert von [`ProcessingInstruction.target`](/de/docs/Web/API/ProcessingInstruction/target)
- [`Text`](/de/docs/Web/API/Text)
  - : Die Zeichenfolge `"#text"`.

## Beispiel

Dieses Beispiel zeigt die Knotennamen mehrerer Knoten

```html
This is some HTML:
<div id="d1">Hello world</div>
<!-- Example of comment -->
Text <span>Text</span> Text<br />
<svg height="20" width="20">
  <circle cx="10" cy="10" r="5" stroke="black" stroke-width="1" fill="red" />
</svg>
<hr />
<output id="result">Not calculated yet.</output>
```

und das folgende Skript:

```js
let node = document.querySelector("body").firstChild;
let result = "Node names are:\n";
while (node) {
  result += `${node.nodeName}\n`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerText = result;
```

{{ EmbedLiveSample("Example", "100%", "450")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.tagName`](/de/docs/Web/API/Element/tagName)
- [`Attr.name`](/de/docs/Web/API/Attr/name)
- [`DocumentType.name`](/de/docs/Web/API/DocumentType/name)
- [`ProcessingInstruction.target`](/de/docs/Web/API/ProcessingInstruction/target)
