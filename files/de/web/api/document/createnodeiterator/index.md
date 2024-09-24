---
title: "Dokument: createNodeIterator() Methode"
short-title: createNodeIterator()
slug: Web/API/Document/createNodeIterator
l10n:
  sourceCommit: d916eca45954b16ba5bf7abec777ffb778c9c805
---

{{APIRef("DOM")}}

Die **`Document.createNodeIterator()`**-Methode gibt ein neues [`NodeIterator`](/de/docs/Web/API/NodeIterator)-Objekt zurück.

## Syntax

```js-nolint
createNodeIterator(root)
createNodeIterator(root, whatToShow)
createNodeIterator(root, whatToShow, filter)
```

### Parameter

- `root`

  - : Der Wurzelknoten, an dem die Durchquerung des {{ domxref("NodeIterator") }} beginnen soll.

- `whatToShow` {{optional_inline}}

  - : Ein optionales `unsigned long`, das eine Bitmaske darstellt, die durch
    Kombinieren der konstanten Eigenschaften von
    [`NodeFilter`](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter) erstellt wurde.
    Es ist eine bequeme Möglichkeit, nach bestimmten Knotentypen zu filtern. Es ist standardmäßig auf
    `0xFFFFFFFF` gesetzt, was die Konstante `SHOW_ALL` repräsentiert.

    | Konstante                                               | Zahlenwert                                              | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                    |
    | ------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                   | `4294967295` (das ist der Maximalwert von `unsigned long`) | Zeigt alle Knoten an.                                                                                                                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}       | `2`                                                     | Zeigt Attribut{{ domxref("Attr") }}-Knoten an. Dies ist nur sinnvoll, wenn ein {{ domxref("TreeWalker") }} mit einem {{ domxref("Attr") }}-Knoten als Wurzel erstellt wird. In diesem Fall bedeutet es, dass der Attributknoten an der ersten Stelle der Iteration erscheint. Da Attribute niemals untergeordnete Knoten anderer Knoten sind, erscheinen sie nicht bei der Durchquerung des Dokumentbaums. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}   | `8`                                                     | Zeigt {{ domxref("CDATASection") }}-Knoten an.                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_COMMENT`                               | `128`                                                   | Zeigt {{ domxref("Comment") }}-Knoten an.                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_DOCUMENT`                              | `256`                                                   | Zeigt {{ domxref("Document") }}-Knoten an.                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                     | `1024`                                                  | Zeigt {{ domxref("DocumentFragment") }}-Knoten an.                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                         | `512`                                                   | Zeigt {{ domxref("DocumentType") }}-Knoten an.                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_ELEMENT`                               | `1`                                                     | Zeigt {{ domxref("Element") }}-Knoten an.                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}          | `32`                                                    | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}}| `16`                                                    | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}        | `2048`                                                  | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                | `64`                                                    | Zeigt {{ domxref("ProcessingInstruction") }}-Knoten an.                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_TEXT`                                  | `4`                                                     | Zeigt {{ domxref("Text") }}-Knoten an.                                                                                                                                                                                                                                                                                                                                                          |

- `filter` {{optional_inline}}

  - : Eine Callback-Funktion oder ein Objekt mit einer `acceptNode()`-Methode. Die Funktion oder Methode wird für jeden Knoten im Teilbaum aufgerufen, der an der Wurzel basiert und als eingeschlossen durch die `whatToShow`-Flagge akzeptiert wird, um zu bestimmen, ob er in die Liste der iterierbaren Knoten aufgenommen wird oder nicht. Die Methode sollte eines von `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT` oder `NodeFilter.FILTER_SKIP` zurückgeben. Siehe das [Beispiel](#beispiele).

    Für `createNodeIterator` sind die Werte `NodeFilter.FILTER_REJECT` und `NodeFilter.FILTER_SKIP` gleichwertig. Dieser Knoten wird nicht in die Liste der iterierbaren Knoten aufgenommen, aber seine Kinder werden weiterhin durchlaufen.

### Rückgabewert

Ein neues [`NodeIterator`](/de/docs/Web/API/NodeIterator)-Objekt.

## Beispiele

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  (node) =>
    node.nodeName.toLowerCase() === "p"
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_REJECT,
);
const pars = [];
let currentNode;

while ((currentNode = nodeIterator.nextNode())) {
  pars.push(currentNode);
}
```

Dasselbe, aber unter Verwendung eines Objekts mit einer `acceptNode()`-Methode:

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return node.nodeName.toLowerCase() === "p"
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  },
);
const pars = [];
let currentNode;

while ((currentNode = nodeIterator.nextNode())) {
  pars.push(currentNode);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
