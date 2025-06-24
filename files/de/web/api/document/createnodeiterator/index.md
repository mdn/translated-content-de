---
title: "Dokumentation: createNodeIterator() Methode"
short-title: createNodeIterator()
slug: Web/API/Document/createNodeIterator
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`Document.createNodeIterator()`** Methode gibt ein neues [`NodeIterator`](/de/docs/Web/API/NodeIterator)-Objekt zurück.

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

  - : Ein optionaler `unsigned long`, der eine Bitmaske darstellt, die durch
    Kombination der konstanten Eigenschaften von `NodeFilter` erstellt wurde.
    Es ist eine bequeme Möglichkeit, nach bestimmten Knotentypen zu filtern. Standardmäßig wird der Wert
    `0xFFFFFFFF` verwendet, der die Konstante `SHOW_ALL` repräsentiert.

    | Konstante                                                | Zahlenwert                                                 | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | -------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (das ist der Maximalwert von `unsigned long`) | Zeigt alle Knoten an.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | `2`                                                        | Zeigt Attributknoten [`Attr`](/de/docs/Web/API/Attr) an. Dies ist nur sinnvoll, wenn ein [`TreeWalker`](/de/docs/Web/API/TreeWalker) mit einem [`Attr`](/de/docs/Web/API/Attr)-Knoten als Wurzel erstellt wird. In diesem Fall bedeutet es, dass der Attributknoten an der ersten Position der Iteration oder Traversierung erscheint. Da Attribute niemals Kinder anderer Knoten sind, erscheinen sie nicht bei der Traversierung des Dokumentbaumes. |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | `8`                                                        | Zeigt [`CDATASection`](/de/docs/Web/API/CDATASection)-Knoten an.                                                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                      | Zeigt [`Comment`](/de/docs/Web/API/Comment)-Knoten an.                                                                                                                                                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                      | Zeigt [`Document`](/de/docs/Web/API/Document)-Knoten an.                                                                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                     | Zeigt [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Knoten an.                                                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                      | Zeigt [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten an.                                                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                        | Zeigt [`Element`](/de/docs/Web/API/Element)-Knoten an.                                                                                                                                                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                       | Veraltet, nicht mehr nutzbar.                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                       | Veraltet, nicht mehr nutzbar.                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                     | Veraltet, nicht mehr nutzbar.                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                       | Zeigt [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten an.                                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                        | Zeigt [`Text`](/de/docs/Web/API/Text)-Knoten an.                                                                                                                                                                                                                                                                                                                                                                                                       |

- `filter` {{optional_inline}}

  - : Eine Callback-Funktion oder ein Objekt mit einer `acceptNode()`-Methode. Die Funktion oder die Methode wird für jeden Knoten im Teilbaum, der am Wurzelknoten beginnt und als in der `whatToShow`-Markierung akzeptiert definiert ist, aufgerufen, um zu bestimmen, ob er in die Liste der iterierbaren Knoten aufgenommen wird oder nicht. Die Methode sollte einen der Werte `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT` oder `NodeFilter.FILTER_SKIP` zurückgeben. Details dazu finden Sie im [Beispiel](#beispiele).

    Für `createNodeIterator` sind die Werte `NodeFilter.FILTER_REJECT` und `NodeFilter.FILTER_SKIP` äquivalent. Dieser Knoten wird nicht in die Liste der iterierbaren Knoten aufgenommen, aber seine Kinder werden weiterhin iteriert.

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

Das gleiche, aber unter Verwendung eines Objekts mit einer `acceptNode()`-Methode:

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
