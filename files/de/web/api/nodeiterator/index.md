---
title: NodeIterator
slug: Web/API/NodeIterator
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("DOM")}}

Die **`NodeIterator`**-Schnittstelle stellt einen Iterator dar, mit dem Knoten eines DOM-Teilbaums in Dokumentenreihenfolge durchlaufen werden können.

## Syntax

Ein `NodeIterator` kann mit der Methode [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) wie folgt erstellt werden:

```js
const nodeIterator = document.createNodeIterator(root, whatToShow, filter);
```

## Instanzeigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- [`NodeIterator.root`](/de/docs/Web/API/NodeIterator/root) {{ReadOnlyInline}}
  - : Gibt einen [`Node`](/de/docs/Web/API/Node) zurück, der den Wurzelknoten darstellt, wie beim Erstellen des `NodeIterator` angegeben.
- [`NodeIterator.whatToShow`](/de/docs/Web/API/NodeIterator/whatToShow) {{ReadOnlyInline}}

  - : Gibt einen `unsigned long`-Bitmaske zurück, die die zu erfassenden Typen von [`Node`](/de/docs/Web/API/Node) beschreibt. Nicht übereinstimmende Knoten werden übersprungen, aber relevante Kindknoten können einbezogen werden.

    Die möglichen Bitmaskenwerte sind Konstanten der `NodeFilter`-Schnittstelle:

    | Konstante                                                | Numerischer Wert                                           | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                  |
    | -------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (das ist der Maximalwert von `unsigned long`) | Zeigt alle Knoten an.                                                                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                        | Zeigt Attributknoten [`Attr`](/de/docs/Web/API/Attr) an. Dies ist nur relevant, wenn ein `NodeIterator` mit einem [`Attr`](/de/docs/Web/API/Attr)-Knoten als Wurzel erstellt wird; in diesem Fall bedeutet es, dass der Attributknoten an erster Stelle der Iteration oder Traversierung erscheint. Da Attribute niemals Kinder anderer Knoten sind, erscheinen sie nicht beim Durchlaufen des Dokumentbaums. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                        | Zeigt [`CDATASection`](/de/docs/Web/API/CDATASection)-Knoten an.                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                      | Zeigt [`Comment`](/de/docs/Web/API/Comment)-Knoten an.                                                                                                                                                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                      | Zeigt [`Document`](/de/docs/Web/API/Document)-Knoten an.                                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                     | Zeigt [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Knoten an.                                                                                                                                                                                                                                                                                                                                      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                      | Zeigt [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten an.                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                        | Zeigt [`Element`](/de/docs/Web/API/Element)-Knoten an.                                                                                                                                                                                                                                                                                                                                                        |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                       | Veraltet, wird nicht mehr verwendet.                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                       | Veraltet, wird nicht mehr verwendet.                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                     | Veraltet, wird nicht mehr verwendet.                                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                       | Zeigt [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten an.                                                                                                                                                                                                                                                                                                                            |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                        | Zeigt [`Text`](/de/docs/Web/API/Text)-Knoten an.                                                                                                                                                                                                                                                                                                                                                              |

- [`NodeIterator.filter`](/de/docs/Web/API/NodeIterator/filter) {{ReadOnlyInline}}
  - : Gibt einen `NodeFilter` zurück, der zur Auswahl der relevanten Knoten verwendet wird.
- [`NodeIterator.referenceNode`](/de/docs/Web/API/NodeIterator/referenceNode) {{ReadOnlyInline}}
  {{experimental_inline() }}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, an den der Iterator verankert ist.
- [`NodeIterator.pointerBeforeReferenceNode`](/de/docs/Web/API/NodeIterator/pointerBeforeReferenceNode) {{ReadOnlyInline}}
  - : Gibt ein boolean zurück, das angibt, ob der `NodeIterator` _vor_ dem [`NodeIterator.referenceNode`](/de/docs/Web/API/NodeIterator/referenceNode) verankert ist oder nicht. Wenn `false`, zeigt es an, dass der Iterator _nach_ dem Referenzknoten verankert ist.

## Instanzmethoden

_Diese Schnittstelle erbt keine Methoden._

- [`NodeIterator.detach()`](/de/docs/Web/API/NodeIterator/detach) {{deprecated_inline}}
  - : Diese Methode ist veraltet und hat keine Wirkung mehr. Früher diente sie dazu, einen `NodeIterator` als entsorgt zu markieren, damit er von der Speicherbereinigung zurückgefordert werden konnte.
- [`NodeIterator.previousNode()`](/de/docs/Web/API/NodeIterator/previousNode)
  - : Gibt den vorherigen [`Node`](/de/docs/Web/API/Node) im Dokument zurück oder `null`, wenn es keine gibt.
- [`NodeIterator.nextNode()`](/de/docs/Web/API/NodeIterator/nextNode)
  - : Gibt den nächsten [`Node`](/de/docs/Web/API/Node) im Dokument zurück oder `null`, wenn es keine gibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Erstellermethode: [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator).
- Verwandte Schnittstelle: [`TreeWalker`](/de/docs/Web/API/TreeWalker)
