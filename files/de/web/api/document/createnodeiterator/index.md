---
title: "Document: Methode createNodeIterator()"
short-title: createNodeIterator()
slug: Web/API/Document/createNodeIterator
l10n:
  sourceCommit: d916eca45954b16ba5bf7abec777ffb778c9c805
---

{{APIRef("DOM")}}

Die **`Document.createNodeIterator()`**-Methode gibt ein neues [`NodeIterator`](https://developer.mozilla.org/de/docs/Web/API/NodeIterator)-Objekt zurück.

## Syntax

```js-nolint
createNodeIterator(root)
createNodeIterator(root, whatToShow)
createNodeIterator(root, whatToShow, filter)
```

### Parameter

- `root`

  - : Der Wurzelknoten, bei dem die Durchquerung des [`NodeIterator`](https://developer.mozilla.org/de/docs/Web/API/NodeIterator) beginnt.

- `whatToShow` {{optional_inline}}

  - : Ein optionales `unsigned long`, das eine Bitmaske darstellt, die durch
    Kombinieren der Konstanten-Eigenschaften von
    [`NodeFilter`](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/traversal.html#Traversal-NodeFilter) erstellt wurde.
    Es ist eine bequeme Möglichkeit, nach bestimmten Arten von Knoten zu filtern. Es hat als Standardwert
    `0xFFFFFFFF`, was die Konstante `SHOW_ALL` repräsentiert.

    | Konstante                                                | Numerischer Wert                                        | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                     |
    | -------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (das ist der Maximalwert von `unsigned long`) | Zeigt alle Knoten.                                                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                     | Zeigt Attributknoten [`Attr`](https://developer.mozilla.org/de/docs/Web/API/Attr). Dies ist nur sinnvoll, wenn ein [`TreeWalker`](https://developer.mozilla.org/de/docs/Web/API/TreeWalker) mit einem [`Attr`](https://developer.mozilla.org/de/docs/Web/API/Attr)-Knoten als Wurzel erstellt wird. In diesem Fall bedeutet es, dass der Attributknoten an erster Stelle der Iteration oder Durchquerung erscheint. Da Attribute nie Kinder anderer Knoten sind, erscheinen sie nicht, wenn über den Dokumentbaum traversiert wird. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                     | Zeigt [`CDATASection`](https://developer.mozilla.org/de/docs/Web/API/CDATASection)-Knoten.                                                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                   | Zeigt [`Comment`](https://developer.mozilla.org/de/docs/Web/API/Comment)-Knoten.                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                   | Zeigt [`Document`](https://developer.mozilla.org/de/docs/Web/API/Document)-Knoten.                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                  | Zeigt [`DocumentFragment`](https://developer.mozilla.org/de/docs/Web/API/DocumentFragment)-Knoten.                                                                                                                                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                   | Zeigt [`DocumentType`](https://developer.mozilla.org/de/docs/Web/API/DocumentType)-Knoten.                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                     | Zeigt [`Element`](https://developer.mozilla.org/de/docs/Web/API/Element)-Knoten.                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                    | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                    | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                  | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                    | Zeigt [`ProcessingInstruction`](https://developer.mozilla.org/de/docs/Web/API/ProcessingInstruction)-Knoten.                                                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                     | Zeigt [`Text`](https://developer.mozilla.org/de/docs/Web/API/Text)-Knoten.                                                                                                                                                                                                                                                                                                                                                                 |

- `filter` {{optional_inline}}

  - : Eine Callback-Funktion oder ein Objekt mit einer `acceptNode()`-Methode. Die Funktion oder Methode wird für jeden Knoten im Teilbaum, der an der Wurzel basiert, aufgerufen, der als im `whatToShow`-Flag enthalten akzeptiert wird, um zu bestimmen, ob er in die Liste der iterierbaren Knoten aufgenommen wird oder nicht. Die Methode sollte einen der Werte `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT` oder `NodeFilter.FILTER_SKIP` zurückgeben. Siehe das [Beispiel](#beispiele).

    Für `createNodeIterator` sind die Werte `NodeFilter.FILTER_REJECT` und `NodeFilter.FILTER_SKIP` äquivalent. Dieser Knoten wird nicht in die Liste der iterierbaren Knoten aufgenommen, aber seine Kinder werden weiterhin durchlaufen.

### Rückgabewert

Ein neues [`NodeIterator`](https://developer.mozilla.org/de/docs/Web/API/NodeIterator)-Objekt.

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

Das Gleiche, aber es wird ein Objekt mit einer `acceptNode()`-Methode verwendet:

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
