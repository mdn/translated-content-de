---
title: "Node: nodeType-Eigenschaft"
short-title: nodeType
slug: Web/API/Node/nodeType
l10n:
  sourceCommit: 7a60da1b1ce2d80f2ab0648c5733c30d1a8ac35b
---

{{APIRef("DOM")}}

Die schreibgeschützte **`nodeType`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces ist ein Integer,
der festlegt, um welchen Knotentyp es sich handelt. Sie unterscheidet verschiedene Arten von Knoten, wie zum Beispiel [`elements`](/de/docs/Web/API/Element), [`text`](/de/docs/Web/API/Text) und [`comments`](/de/docs/Web/API/Comment).

## Wert

Ein Integer, der den Typ des Knotens angibt. Mögliche Werte sind:

- `Node.ELEMENT_NODE` (`1`)
  - : Ein [`Element`](/de/docs/Web/API/Element)-Knoten wie {{HTMLElement("p")}} oder {{HTMLElement("div")}}.
- `Node.ATTRIBUTE_NODE` (`2`)
  - : Ein [`Attribute`](/de/docs/Web/API/Attr) eines [`Element`](/de/docs/Web/API/Element).
- `Node.TEXT_NODE` (`3`)
  - : Der tatsächliche [`Text`](/de/docs/Web/API/Text) innerhalb eines [`Element`](/de/docs/Web/API/Element) oder [`Attr`](/de/docs/Web/API/Attr).
- `Node.CDATA_SECTION_NODE` (`4`)
  - : Ein [`CDATASection`](/de/docs/Web/API/CDATASection), wie `<!CDATA[[ … ]]>`
- `Node.PROCESSING_INSTRUCTION_NODE` (`7`)
  - : Eine [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) eines XML-Dokuments, wie `<?xml-stylesheet … ?>`.
- `Node.COMMENT_NODE` (`8`)
  - : Ein [`Comment`](/de/docs/Web/API/Comment)-Knoten, wie `<!-- … -->`.
- `Node.DOCUMENT_NODE` (`9`)
  - : Ein [`Document`](/de/docs/Web/API/Document)-Knoten.
- `Node.DOCUMENT_TYPE_NODE` (`10`)
  - : Ein [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten, wie `<!doctype html>`.
- `Node.DOCUMENT_FRAGMENT_NODE` (`11`)
  - : Ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Knoten.

Die folgenden Konstanten wurden veraltet und werden nicht mehr verwendet: `Node.ENTITY_REFERENCE_NODE` (`5`),
`Node.ENTITY_NODE` (`6`), und `Node.NOTATION_NODE` (`12`).

## Beispiele

### Verschiedene Knotentypen

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

Dieses Beispiel überprüft, ob der erste Knoten innerhalb des Dokumentenelements ein Kommentar ist, und
zeigt eine Nachricht an, wenn nicht.

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
