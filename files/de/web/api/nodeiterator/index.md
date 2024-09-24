---
title: NodeIterator
slug: Web/API/NodeIterator
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("DOM")}}

Die **`NodeIterator`**-Schnittstelle repräsentiert einen Iterator, um Knoten eines DOM-Teilbaums in Dokumentreihenfolge zu durchlaufen.

## Syntax

Ein `NodeIterator` kann mit der Methode {{domxref("Document.createNodeIterator()")}} wie folgt erstellt werden:

```js
const nodeIterator = document.createNodeIterator(root, whatToShow, filter);
```

## Instanzen-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- {{domxref("NodeIterator.root")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("Node")}} zurück, der den Wurzelknoten repräsentiert, wie beim Erstellen des
    `NodeIterator` angegeben.
- {{domxref("NodeIterator.whatToShow")}} {{ReadOnlyInline}}

  - : Gibt eine `unsigned long`-Bitmaske zurück, die die Knotenarten von {{domxref("Node")}}
    beschreibt, die ausgewählt werden sollen. Nicht übereinstimmende Knoten werden übersprungen, aber relevante Kindknoten können enthalten sein.

    Die möglichen Bitmaskenwerte sind Konstanten aus der `NodeFilter`-Schnittstelle:

    | Konstante                                                | Zahlenwert                                             | Beschreibung                                                                                                                                                                                                                                                                                                                                                                        |
    | -------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (das ist der Maximalwert von `unsigned long`) | Zeigt alle Knoten an.                                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                     | Zeigt Attribut-{{ domxref("Attr") }}-Knoten an. Dies ist nur sinnvoll beim Erstellen eines `NodeIterator` mit einem {{ domxref("Attr") }}-Knoten als Wurzel; in diesem Fall bedeutet es, dass der Attributknoten an der ersten Position der Iteration oder Traversierung erscheint. Da Attribute niemals Kinder anderer Knoten sind, erscheinen sie nicht beim Durchlaufen des Dokumentbaums. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                     | Zeigt {{domxref("CDATASection")}}-Knoten an.                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                   | Zeigt {{domxref("Comment")}}-Knoten an.                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                   | Zeigt {{domxref("Document")}}-Knoten an.                                                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                  | Zeigt {{domxref("DocumentFragment")}}-Knoten an.                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                   | Zeigt {{domxref("DocumentType")}}-Knoten an.                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                     | Zeigt {{domxref("Element")}}-Knoten an.                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                    | Veraltet, wird nicht mehr verwendet.                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                    | Veraltet, wird nicht mehr verwendet.                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                  | Veraltet, wird nicht mehr verwendet.                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                    | Zeigt {{domxref("ProcessingInstruction")}}-Knoten an.                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                     | Zeigt {{domxref("Text")}}-Knoten an.                                                                                                                                                                                                                                                                                                                                                  |

- {{domxref("NodeIterator.filter")}} {{ReadOnlyInline}}
  - : Gibt einen `NodeFilter` zurück, der verwendet wird, um die relevanten Knoten auszuwählen.
- {{domxref("NodeIterator.referenceNode")}} {{ReadOnlyInline}}
  {{experimental_inline() }}
  - : Gibt den {{domxref("Node")}} zurück, an dem der Iterator verankert ist.
- {{domxref("NodeIterator.pointerBeforeReferenceNode")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der `NodeIterator` _vor_ dem {{domxref("NodeIterator.referenceNode")}} verankert ist. Wenn `false`, bedeutet dies, dass der Iterator _nach_ dem Referenzknoten verankert ist.

## Instanzen-Methoden

_Diese Schnittstelle erbt keine Methoden._

- {{domxref("NodeIterator.detach()")}} {{deprecated_inline}}
  - : Dies ist eine veraltete Methode und hat keine Wirkung mehr. Früher markierte sie einen
    `NodeIterator` als verworfen, sodass er von der Speicherbereinigung zurückgefordert werden konnte.
- {{domxref("NodeIterator.previousNode()")}}
  - : Gibt den vorherigen {{domxref("Node")}} im Dokument zurück oder `null`, wenn es keine gibt.
- {{domxref("NodeIterator.nextNode()")}}
  - : Gibt den nächsten {{domxref("Node")}} im Dokument zurück oder `null`, wenn es keine gibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Erstellermethode: {{domxref("Document.createNodeIterator()")}}.
- Verwandte Schnittstelle: {{domxref("TreeWalker")}}
