---
title: "Dokument: createNodeIterator() Methode"
short-title: createNodeIterator()
slug: Web/API/Document/createNodeIterator
l10n:
  sourceCommit: 30ae43a0c98ab92f750fd571d7a3a8ee8b15b4c0
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
  - : Der Stammknoten, bei dem der Durchlauf des [`NodeIterator`](/de/docs/Web/API/NodeIterator) beginnen soll.

- `whatToShow` {{optional_inline}}
  - : Ein optionaler `unsigned long`, der eine Bitmaske darstellt, erstellt durch
    das Kombinieren der Konstanten-Eigenschaften von `NodeFilter`.
    Es ist eine bequeme Möglichkeit, bestimmte Knotentypen zu filtern. Standardwert ist `0xFFFFFFFF`, das die Konstante `SHOW_ALL` darstellt.

    | Konstante                                                | Zahlenwert   | Beschreibung                                                                       |
    | -------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `0xFFFFFFFF` | Zeigt alle Knoten an.                                                              |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | `0x2`        | Zeigt [`Attr`](/de/docs/Web/API/Attr)-Knoten an.                                   |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | `0x8`        | Zeigt [`CDATASection`](/de/docs/Web/API/CDATASection)-Knoten an.                   |
    | `NodeFilter.SHOW_COMMENT`                                | `0x80`       | Zeigt [`Comment`](/de/docs/Web/API/Comment)-Knoten an.                             |
    | `NodeFilter.SHOW_DOCUMENT`                               | `0x100`      | Zeigt [`Document`](/de/docs/Web/API/Document)-Knoten an.                           |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `0x400`      | Zeigt [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Knoten an.           |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `0x200`      | Zeigt [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten an.                   |
    | `NodeFilter.SHOW_ELEMENT`                                | `0x1`        | Zeigt [`Element`](/de/docs/Web/API/Element)-Knoten an.                             |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `0x20`       | Veraltet, nicht mehr wirksam.                                                      |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `0x10`       | Veraltet, nicht mehr wirksam.                                                      |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `0x800`      | Veraltet, nicht mehr wirksam.                                                      |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `0x40`       | Zeigt [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten an. |
    | `NodeFilter.SHOW_TEXT`                                   | `0x4`        | Zeigt [`Text`](/de/docs/Web/API/Text)-Knoten an.                                   |

    > [!NOTE]
    > Die Konstante `NodeFilter.SHOW_ATTRIBUTE` ist nur wirksam, wenn der Stamm ein Attributknoten ist. Da das übergeordnete Element eines `Attr`-Knotens immer `null` ist, geben [`TreeWalker.nextNode()`](/de/docs/Web/API/TreeWalker/nextNode) und [`TreeWalker.previousNode()`](/de/docs/Web/API/TreeWalker/previousNode) niemals einen `Attr`-Knoten zurück. Um `Attr`-Knoten zu durchlaufen, verwenden Sie stattdessen [`Element.attributes`](/de/docs/Web/API/Element/attributes).

- `filter` {{optional_inline}}
  - : Eine Callback-Funktion oder ein Objekt mit einer `acceptNode()`-Methode. Die Funktion oder Methode wird für jeden Knoten im Teilbaum, der am Stamm basiert und als in die Liste der durchlaufbaren Knoten aufgenommen akzeptiert wird, aufgerufen, um zu bestimmen, ob er aufgenommen werden soll oder nicht. Die Methode sollte eines der `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT` oder `NodeFilter.FILTER_SKIP` zurückgeben. Siehe das [Beispiel](#beispiele).

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

Dasselbe, jedoch unter Verwendung eines Objekts mit einer `acceptNode()`-Methode:

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
