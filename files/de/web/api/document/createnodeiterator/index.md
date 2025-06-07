---
title: "Dokument: createNodeIterator() Methode"
short-title: createNodeIterator()
slug: Web/API/Document/createNodeIterator
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}}

Die **`Document.createNodeIterator()`** Methode gibt ein neues [`NodeIterator`](/de/docs/Web/API/NodeIterator) Objekt zurück.

## Syntax

```js-nolint
createNodeIterator(root)
createNodeIterator(root, whatToShow)
createNodeIterator(root, whatToShow, filter)
```

### Parameter

- `root`

  - : Der Wurzelknoten, bei dem die Traversierung des [`NodeIterator`](/de/docs/Web/API/NodeIterator) beginnt.

- `whatToShow` {{optional_inline}}

  - : Ein optionales `unsigned long`, das eine Bitmaske darstellt, die durch Kombinieren der konstanten Eigenschaften von `NodeFilter` erstellt wird. Es ist eine bequeme Möglichkeit, bestimmte Knotentypen zu filtern. Standardmäßig entspricht es `0xFFFFFFFF`, was die Konstante `SHOW_ALL` darstellt.

    | Konstante                                                | Numerischer Wert                                           | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | -------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (das ist der Maximalwert von `unsigned long`) | Zeigt alle Knoten.                                                                                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | `2`                                                        | Zeigt Attributknoten [`Attr`](/de/docs/Web/API/Attr). Dies ist nur dann sinnvoll, wenn ein [`TreeWalker`](/de/docs/Web/API/TreeWalker) mit einem [`Attr`](/de/docs/Web/API/Attr)-Knoten als Wurzel erstellt wird. In diesem Fall bedeutet es, dass der Attributknoten an erster Stelle der Iteration erscheint. Da Attribute niemals Kinder anderer Knoten sind, erscheinen sie nicht bei der Traversierung des Dokumentenbaumes. |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | `8`                                                        | Zeigt [`CDATASection`](/de/docs/Web/API/CDATASection)-Knoten.                                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                      | Zeigt [`Comment`](/de/docs/Web/API/Comment)-Knoten.                                                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                      | Zeigt [`Document`](/de/docs/Web/API/Document)-Knoten.                                                                                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                     | Zeigt [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Knoten.                                                                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                      | Zeigt [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten.                                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                        | Zeigt [`Element`](/de/docs/Web/API/Element)-Knoten.                                                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                       | Veraltet, nicht mehr nutzbar.                                                                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                       | Veraltet, nicht mehr nutzbar.                                                                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                     | Veraltet, nicht mehr nutzbar.                                                                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                       | Zeigt [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten.                                                                                                                                                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                        | Zeigt [`Text`](/de/docs/Web/API/Text)-Knoten.                                                                                                                                                                                                                                                                                                                                                                                     |

- `filter` {{optional_inline}}

  - : Eine Callback-Funktion oder ein Objekt mit einer `acceptNode()`-Methode. Die Funktion oder Methode wird für jeden Knoten im Unterbaum, der bei der Wurzel basiert und durch die whatToShow-Flagge als enthalten akzeptiert wird, aufgerufen, um zu bestimmen, ob er in die Liste der durchlaufbaren Knoten aufgenommen werden soll. Die Methode sollte einen der Werte `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT` oder `NodeFilter.FILTER_SKIP` zurückgeben. Siehe das [Beispiel](#beispiele).

    Für `createNodeIterator` sind die Werte `NodeFilter.FILTER_REJECT` und `NodeFilter.FILTER_SKIP` gleichwertig. Dieser Knoten wird nicht in die Liste der durchlaufbaren Knoten aufgenommen, aber seine Kinder werden weiterhin durchlaufen.

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

Dasselbe, aber mit einem Objekt mit einer `acceptNode()`-Methode:

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
