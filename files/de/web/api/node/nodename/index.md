---
title: "Node: nodeName Eigenschaft"
short-title: nodeName
slug: Web/API/Node/nodeName
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("DOM")}}

Die schreibgeschützte **`nodeName`** Eigenschaft des {{domxref("Node")}} gibt den Namen des aktuellen Knotens als Zeichenkette zurück.

## Wert

Eine Zeichenkette. Werte für die verschiedenen Knoten-Typen sind:

- {{domxref("Attr")}}
  - : Der Wert von {{domxref("Attr.name")}}, also der _qualifizierte Name_ des Attributs.
- {{domxref("CDATASection")}}
  - : Die Zeichenkette `"#cdata-section"`.
- {{domxref("Comment")}}
  - : Die Zeichenkette `"#comment"`.
- {{domxref("Document")}}
  - : Die Zeichenkette `"#document"`.
- {{domxref("DocumentFragment")}}
  - : Die Zeichenkette `"#document-fragment"`.
- {{domxref("DocumentType")}}
  - : Der Wert von {{domxref("DocumentType.name")}}
- {{domxref("Element")}}
  - : Der Wert von {{domxref("Element.tagName")}}, also der _großgeschriebene_ Tag-Name des Elements, wenn es sich um ein HTML-Element handelt, oder der _kleingeschriebene_ Element-Tag, wenn es sich um ein XML-Element wie ein SVG- oder MATHML-Element handelt.
- {{domxref("ProcessingInstruction")}}
  - : Der Wert von {{domxref("ProcessingInstruction.target")}}
- {{domxref("Text")}}
  - : Die Zeichenkette `"#text"`.

## Beispiel

Dieses Beispiel zeigt die Knotennamen mehrerer Knoten

```html
Dies ist etwas HTML:
<div id="d1">Hallo Welt</div>
<!-- Beispiel eines Kommentars -->
Text <span>Text</span> Text<br />
<svg height="20" width="20">
  <circle cx="10" cy="10" r="5" stroke="black" stroke-width="1" fill="red" />
</svg>
<hr />
<output id="result">Noch nicht berechnet.</output>
```

und das folgende Skript:

```js
let node = document.querySelector("body").firstChild;
let result = "Knotennamen sind:\n";
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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("Element.tagName")}}
- {{domxref("Attr.name")}}
- {{domxref("DocumentType.name")}}
- {{domxref("ProcessingInstruction.target")}}
