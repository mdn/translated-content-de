---
title: "Knoten: nodeType Eigenschaft"
short-title: nodeType
slug: Web/API/Node/nodeType
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{APIRef("DOM")}}

Die schreibgeschützte **`nodeType`**-Eigenschaft der {{domxref("Node")}}-Schnittstelle ist eine Ganzzahl, die identifiziert, was der Knoten ist. Sie unterscheidet verschiedene Arten von Knoten voneinander, wie etwa {{domxref("Element", "Elemente")}}, {{domxref("Text", "Text")}} und {{domxref("Comment", "Kommentare")}}.

## Wert

Eine Ganzzahl, die den Typ des Knotens angibt. Mögliche Werte sind:

- `Node.ELEMENT_NODE` (`1`)
  - : Ein {{domxref("Element")}}-Knoten wie {{HTMLElement("p")}} oder {{HTMLElement("div")}}.
- `Node.ATTRIBUTE_NODE` (`2`)
  - : Ein {{domxref("Attr", "Attribut")}} eines {{domxref("Element")}}.
- `Node.TEXT_NODE` (`3`)
  - : Der eigentliche {{domxref("Text")}} innerhalb eines {{domxref("Element")}} oder {{domxref("Attr")}}.
- `Node.CDATA_SECTION_NODE` (`4`)
  - : Eine {{domxref("CDATASection")}}, wie `<!CDATA[[ … ]]>`.
- `Node.PROCESSING_INSTRUCTION_NODE` (`7`)
  - : Eine {{domxref("ProcessingInstruction")}} eines XML-Dokuments, wie `<?xml-stylesheet … ?>`.
- `Node.COMMENT_NODE` (`8`)
  - : Ein {{domxref("Comment")}}-Knoten, wie `<!-- … -->`.
- `Node.DOCUMENT_NODE` (`9`)
  - : Ein {{domxref("Document")}}-Knoten.
- `Node.DOCUMENT_TYPE_NODE` (`10`)
  - : Ein {{domxref("DocumentType")}}-Knoten, wie `<!doctype html>`.
- `Node.DOCUMENT_FRAGMENT_NODE` (`11`)
  - : Ein {{domxref("DocumentFragment")}}-Knoten.

Die folgenden Konstanten sind veraltet und werden nicht mehr verwendet: `Node.ENTITY_REFERENCE_NODE` (`5`),
`Node.ENTITY_NODE` (`6`) und `Node.NOTATION_NODE` (`12`).

## Beispiele

### Verschiedene Arten von Knoten

```js
document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

document.createDocumentFragment().nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

const p = document.createElement("p");
p.textContent = "Once upon a time…";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true
```

### Kommentare

Dieses Beispiel überprüft, ob der erste Knoten innerhalb des Dokumentelements ein Kommentar ist und zeigt eine Nachricht an, wenn nicht.

```js
const node = document.documentElement.firstChild;
if (node.nodeType !== Node.COMMENT_NODE) {
  console.warn("You should comment your code!");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
