---
title: NodeIterator
slug: Web/API/NodeIterator
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`NodeIterator`**-Schnittstelle repräsentiert einen Iterator zum Durchlaufen von Knoten eines DOM-Teilbaums in Dokumentreihenfolge.

Ein `NodeIterator` kann mit der Methode [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) wie folgt erstellt werden:

```js
const nodeIterator = document.createNodeIterator(root, whatToShow, filter);
```

## Instanzeigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- [`NodeIterator.root`](/de/docs/Web/API/NodeIterator/root) {{ReadOnlyInline}}
  - : Gibt einen [`Node`](/de/docs/Web/API/Node) zurück, der den Wurzelknoten darstellt, wie er bei der Erstellung des `NodeIterator` angegeben wurde.
- [`NodeIterator.whatToShow`](/de/docs/Web/API/NodeIterator/whatToShow) {{ReadOnlyInline}}

  - : Gibt eine `unsigned long` Bitmaske zurück, die die Typen von [`Node`](/de/docs/Web/API/Node) beschreibt, die übereinstimmen sollen. Nicht übereinstimmende Knoten werden übersprungen, aber relevante untergeordnete Knoten können einbezogen werden.

    Die möglichen Bitmaskenwerte sind Konstanten aus der `NodeFilter`-Schnittstelle:

    | Konstante                                                | Numerischer Wert                                           | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                              |
    | -------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (das ist der Maximalwert von `unsigned long`) | Zeigt alle Knoten.                                                                                                                                                                                                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                        | Zeigt Attributknoten [`Attr`](/de/docs/Web/API/Attr) an. Dies ist nur sinnvoll, wenn ein `NodeIterator` mit einem [`Attr`](/de/docs/Web/API/Attr)-Knoten als Wurzel erstellt wird; in diesem Fall bedeutet es, dass der Attributknoten in der ersten Position der Iteration oder Durchlauf erscheint. Da Attribute niemals Kinder anderer Knoten sind, erscheinen sie nicht, wenn über den Dokumentbaum durchlaufen wird. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                        | Zeigt [`CDATASection`](/de/docs/Web/API/CDATASection)-Knoten an.                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                      | Zeigt [`Comment`](/de/docs/Web/API/Comment)-Knoten an.                                                                                                                                                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                      | Zeigt [`Document`](/de/docs/Web/API/Document)-Knoten an.                                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                     | Zeigt [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Knoten an.                                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                      | Zeigt [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten an.                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                        | Zeigt [`Element`](/de/docs/Web/API/Element)-Knoten an.                                                                                                                                                                                                                                                                                                                                                                    |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                       | Veraltet, wird nicht mehr verwendet.                                                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                       | Veraltet, wird nicht mehr verwendet.                                                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                     | Veraltet, wird nicht mehr verwendet.                                                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                       | Zeigt [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten an.                                                                                                                                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                        | Zeigt [`Text`](/de/docs/Web/API/Text)-Knoten an.                                                                                                                                                                                                                                                                                                                                                                          |

- [`NodeIterator.filter`](/de/docs/Web/API/NodeIterator/filter) {{ReadOnlyInline}}
  - : Gibt einen `NodeFilter` zurück, der verwendet wird, um die relevanten Knoten auszuwählen.
- [`NodeIterator.referenceNode`](/de/docs/Web/API/NodeIterator/referenceNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, an dem der Iterator verankert ist.
- [`NodeIterator.pointerBeforeReferenceNode`](/de/docs/Web/API/NodeIterator/pointerBeforeReferenceNode) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob der `NodeIterator` _vor_ dem [`NodeIterator.referenceNode`](/de/docs/Web/API/NodeIterator/referenceNode) verankert ist oder nicht. Wenn `false`, bedeutet es, dass der Iterator _nach_ dem Referenzknoten verankert ist.

## Instanzmethoden

_Diese Schnittstelle erbt keine Methoden._

- [`NodeIterator.detach()`](/de/docs/Web/API/NodeIterator/detach) {{deprecated_inline}}
  - : Dies ist eine veraltete Methode und hat keine Auswirkungen mehr. Früher diente sie dazu, einen `NodeIterator` als entsorgt zu kennzeichnen, sodass er vom Garbage Collector zurückgefordert werden konnte.
- [`NodeIterator.previousNode()`](/de/docs/Web/API/NodeIterator/previousNode)
  - : Gibt den vorherigen [`Node`](/de/docs/Web/API/Node) im Dokument zurück, oder `null`, wenn keiner vorhanden ist.
- [`NodeIterator.nextNode()`](/de/docs/Web/API/NodeIterator/nextNode)
  - : Gibt den nächsten [`Node`](/de/docs/Web/API/Node) im Dokument zurück, oder `null`, wenn keiner vorhanden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Erstellermethode: [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator).
- Verwandte Schnittstelle: [`TreeWalker`](/de/docs/Web/API/TreeWalker)
