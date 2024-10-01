---
title: NodeIterator
slug: Web/API/NodeIterator
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("DOM")}}

Die **`NodeIterator`**-Schnittstelle repräsentiert einen Iterator, um Knoten eines DOM-Teilbaums in Dokumentenreihenfolge zu durchlaufen.

## Syntax

Ein `NodeIterator` kann mit der Methode [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) erstellt werden, wie folgt:

```js
const nodeIterator = document.createNodeIterator(root, whatToShow, filter);
```

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- [`NodeIterator.root`](/de/docs/Web/API/NodeIterator/root) {{ReadOnlyInline}}
  - : Gibt ein [`Node`](/de/docs/Web/API/Node) zurück, das den Wurzelknoten darstellt, wie beim Erstellen des
    `NodeIterator` festgelegt wurde.
- [`NodeIterator.whatToShow`](/de/docs/Web/API/NodeIterator/whatToShow) {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` Bitmaske zurück, die die Typen von [`Node`](/de/docs/Web/API/Node)
    beschreibt, die übereinstimmen sollen. Nicht übereinstimmende Knoten werden übersprungen, aber relevante Kindknoten können enthalten sein.

    Die möglichen Bitmaskenwerte sind Konstanten aus der `NodeFilter`-Schnittstelle:

    | Konstante                                                | Zahlenwert                                                 | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                             |
    | -------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (das ist der Maximalwert von `unsigned long`) | Zeigt alle Knoten.                                                                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                        | Zeigt Attribut-[`Attr`](/de/docs/Web/API/Attr)-Knoten. Dies ist nur sinnvoll, wenn ein `NodeIterator` mit einem [`Attr`](/de/docs/Web/API/Attr)-Knoten als seine Wurzel erstellt wird; in diesem Fall bedeutet es, dass der Attributknoten in der ersten Position der Iteration oder des Durchlaufs erscheint. Da Attribute niemals Kinder anderer Knoten sind, erscheinen sie nicht beim Durchlaufen des Dokumentbaums. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                        | Zeigt [`CDATASection`](/de/docs/Web/API/CDATASection)-Knoten.                                                                                                                                                                                                                                                                                                                                                            |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                      | Zeigt [`Comment`](/de/docs/Web/API/Comment)-Knoten.                                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                      | Zeigt [`Document`](/de/docs/Web/API/Document)-Knoten.                                                                                                                                                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                     | Zeigt [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Knoten.                                                                                                                                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                      | Zeigt [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten.                                                                                                                                                                                                                                                                                                                                                            |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                        | Zeigt [`Element`](/de/docs/Web/API/Element)-Knoten.                                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                       | Veraltet, wird nicht mehr verwendet.                                                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                       | Veraltet, wird nicht mehr verwendet.                                                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                     | Veraltet, wird nicht mehr verwendet.                                                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                       | Zeigt [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten.                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                        | Zeigt [`Text`](/de/docs/Web/API/Text)-Knoten.                                                                                                                                                                                                                                                                                                                                                                            |

- [`NodeIterator.filter`](/de/docs/Web/API/NodeIterator/filter) {{ReadOnlyInline}}
  - : Gibt ein `NodeFilter` zurück, das verwendet wird, um die relevanten Knoten auszuwählen.
- [`NodeIterator.referenceNode`](/de/docs/Web/API/NodeIterator/referenceNode) {{ReadOnlyInline}}
  {{experimental_inline() }}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, an den der Iterator verankert ist.
- [`NodeIterator.pointerBeforeReferenceNode`](/de/docs/Web/API/NodeIterator/pointerBeforeReferenceNode) {{ReadOnlyInline}}
  - : Gibt ein Boolean zurück, das angibt, ob der `NodeIterator` _vor_ dem [`NodeIterator.referenceNode`](/de/docs/Web/API/NodeIterator/referenceNode) verankert ist. Wenn `false`, bedeutet das, dass der Iterator _nach_ dem Referenzknoten verankert ist.

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden._

- [`NodeIterator.detach()`](/de/docs/Web/API/NodeIterator/detach) {{deprecated_inline}}
  - : Dies ist eine veraltete Methode und hat keine Wirkung mehr. Früher diente sie dazu, einen
    `NodeIterator` als entsorgt zu markieren, sodass er durch die Speicherbereinigung wieder freigegeben werden konnte.
- [`NodeIterator.previousNode()`](/de/docs/Web/API/NodeIterator/previousNode)
  - : Gibt den vorherigen [`Node`](/de/docs/Web/API/Node) im Dokument zurück oder `null`, wenn es keinen gibt.
- [`NodeIterator.nextNode()`](/de/docs/Web/API/NodeIterator/nextNode)
  - : Gibt den nächsten [`Node`](/de/docs/Web/API/Node) im Dokument zurück oder `null`, wenn es keinen gibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Erstellermethode: [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator).
- Verwandte Schnittstelle: [`TreeWalker`](/de/docs/Web/API/TreeWalker)
