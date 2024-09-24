---
title: TreeWalker
slug: Web/API/TreeWalker
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{ APIRef("DOM") }}

Das **`TreeWalker`**-Objekt repräsentiert die Knoten eines Dokumenten-Teilbaums und eine Position innerhalb dieser.

Ein `TreeWalker` kann mit der Methode {{domxref("Document.createTreeWalker()")}} erstellt werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- {{domxref("TreeWalker.root")}} {{ReadOnlyInline}}
  - : Gibt den Stamm-{{domxref("Node")}} zurück, wie er beim Erstellen des `TreeWalker` spezifiziert wurde.
- {{domxref("TreeWalker.whatToShow")}} {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, das eine Bitmaske aus Konstanten darstellt, die die Typen von {{domxref("Node")}} beschreiben, die dargestellt werden sollen. Nicht übereinstimmende Knoten werden übersprungen, aber ihre Kinder können, wenn relevant, eingeschlossen werden. Die möglichen Werte sind:

    | Konstante                                               | Numerischer Wert                                        | Beschreibung                                                                                                                                                                                                                                                                                                                                                                      |
    | -------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (das ist der Maximalwert von `unsigned long`) | Zeigt alle Knoten an.                                                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                     | Zeigt Attribut-{{ domxref("Attr") }}-Knoten. Dies ist nur sinnvoll, wenn ein `TreeWalker` mit einem {{ domxref("Attr") }}-Knoten als Wurzel erstellt wird. In diesem Fall bedeutet es, dass der Attributknoten an erster Stelle der Iteration oder Durchquerung erscheint. Da Attribute nie Kinder anderer Knoten sind, erscheinen sie nicht, wenn man den Dokumentenbaum durchquert. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                     | Zeigt {{ domxref("CDATASection") }}-Knoten.                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                   | Zeigt {{ domxref("Comment") }}-Knoten.                                                                                                                                                                                                                                                                                                                                            |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                   | Zeigt {{ domxref("Document") }}-Knoten.                                                                                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                  | Zeigt {{ domxref("DocumentFragment") }}-Knoten.                                                                                                                                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                   | Zeigt {{ domxref("DocumentType") }}-Knoten.                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                     | Zeigt {{ domxref("Element") }}-Knoten.                                                                                                                                                                                                                                                                                                                                            |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                    | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                    | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                  | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                    | Zeigt {{ domxref("ProcessingInstruction") }}-Knoten.                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                     | Zeigt {{ domxref("Text") }}-Knoten.                                                                                                                                                                                                                                                                                                                                               |

- {{domxref("TreeWalker.filter")}} {{ReadOnlyInline}}
  - : Gibt den `NodeFilter` zurück, der mit diesem `TreeWalker` verbunden ist und zur Auswahl der relevanten Knoten verwendet wird.
- {{domxref("TreeWalker.currentNode")}}
  - : Ist der {{domxref("Node")}}, auf den der `TreeWalker` derzeit zeigt.

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden._

> [!NOTE]
> Im Zusammenhang mit einem `TreeWalker` ist ein Knoten _sichtbar_, wenn er in der logischen Ansicht existiert, die durch die Parameterargumente `whatToShow` und `filter` bestimmt wird. (Ob der Knoten auf dem Bildschirm sichtbar ist, ist irrelevant.)

- {{domxref("TreeWalker.parentNode()")}}
  - : Verschiebt den aktuellen {{domxref("Node")}} zum ersten _sichtbaren_ Vorfahrenknoten in der Dokumentenreihenfolge und gibt den gefundenen Knoten zurück. Außerdem wird der aktuelle Knoten auf diesen verschoben. Existiert kein solcher Knoten oder befindet er sich vor dem bei der Objekterstellung definierten _Stammknoten_, wird `null` zurückgegeben und der aktuelle Knoten nicht verändert.
- {{domxref("TreeWalker.firstChild()")}}

  - : Verschiebt den aktuellen {{domxref("Node")}} zum ersten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Außerdem wird der aktuelle Knoten auf dieses Kind verschoben. Wenn kein solches Kind existiert, wird `null` zurückgegeben und der aktuelle Knoten nicht verändert. Beachten Sie, dass der Knoten, der von `firstChild()` zurückgegeben wird, vom Wert von `whatToShow` abhängt, der während der Instanziierung des `TreeWalker`-Objekts festgelegt wurde. Angenommen, wir haben den folgenden HTML-Baum, und wenn Sie `whatToShow` auf `NodeFilter.SHOW_ALL` gesetzt haben, wird ein Aufruf von `firstChild()` einen `Text`-Knoten und kein `HTMLDivElement`-Objekt zurückgeben.

    ```html
    <!doctype html>
    <html lang="en">
      <head><title>Demo</title>
      <body>
        <div id="container"></div>
      </body>
    </html>
    ```

    ```js
    let walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL);
    let node = walker.firstChild(); // nodeName: "#text"
    ```

    Aber wenn wir das tun:

    ```js
    let walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT,
    );
    let node = walker.firstChild(); // nodeName: "DIV"
    ```

    Das Gleiche gilt für `nextSibling()`, `previousSibling()`, `firstChild()` und `lastChild()`

- {{domxref("TreeWalker.lastChild()")}}
  - : Verschiebt den aktuellen {{domxref("Node")}} zum letzten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Außerdem wird der aktuelle Knoten auf dieses Kind verschoben. Wenn kein solches Kind existiert, wird `null` zurückgegeben und der aktuelle Knoten nicht verändert.
- {{domxref("TreeWalker.previousSibling()")}}
  - : Verschiebt den aktuellen {{domxref("Node")}} zu seinem vorherigen Geschwisterknoten, falls vorhanden, und gibt das gefundene Geschwisterknoten zurück. Wenn kein solcher Knoten existiert, wird `null` zurückgegeben und der aktuelle Knoten nicht verändert.
- {{domxref("TreeWalker.nextSibling()")}}
  - : Verschiebt den aktuellen {{domxref("Node")}} zu seinem nächsten Geschwisterknoten, falls vorhanden, und gibt das gefundene Geschwisterknoten zurück. Wenn kein solcher Knoten existiert, wird `null` zurückgegeben und der aktuelle Knoten nicht verändert.
- {{domxref("TreeWalker.previousNode()")}}
  - : Verschiebt den aktuellen {{domxref("Node")}} zum vorherigen _sichtbaren_ Knoten in der Dokumentenreihenfolge und gibt den gefundenen Knoten zurück. Außerdem wird der aktuelle Knoten auf diesen verschoben. Existiert kein solcher Knoten oder befindet er sich vor dem bei der Objekterstellung definierten _Stammknoten_, wird `null` zurückgegeben und der aktuelle Knoten nicht verändert.
- {{domxref("TreeWalker.nextNode()")}}
  - : Verschiebt den aktuellen {{domxref("Node")}} zum nächsten _sichtbaren_ Knoten in der Dokumentenreihenfolge und gibt den gefundenen Knoten zurück. Außerdem wird der aktuelle Knoten auf diesen verschoben. Wenn kein solcher Knoten existiert, wird `null` zurückgegeben und der aktuelle Knoten nicht verändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Erstellermethode: {{domxref("Document.createTreeWalker()")}}.
- Verwandte Schnittstelle: {{domxref("NodeIterator")}}.
