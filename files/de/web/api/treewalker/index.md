---
title: TreeWalker
slug: Web/API/TreeWalker
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{ APIRef("DOM") }}

Das **`TreeWalker`**-Objekt repräsentiert die Knoten eines Dokument-Unterbaums und eine Position innerhalb dieser.

Ein `TreeWalker` kann mit der Methode [`Document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker) erstellt werden.

## Instanz-Eigenschaften

_Dieses Interface erbt keine Eigenschaften._

- [`TreeWalker.root`](/de/docs/Web/API/TreeWalker/root) {{ReadOnlyInline}}
  - : Gibt den Wurzel-`Node` zurück, wie bei der Erstellung des `TreeWalker` spezifiziert.
- [`TreeWalker.whatToShow`](/de/docs/Web/API/TreeWalker/whatToShow) {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, das eine Bitmaske aus Konstanten ist, welche die Typen von [`Node`](/de/docs/Web/API/Node) beschreibt, die dargestellt werden müssen. Nicht übereinstimmende Knoten werden übersprungen, aber ihre Kinder können einbezogen werden, wenn relevant. Die möglichen Werte sind:

    | Konstante                                                | Numerischer Wert                                        | Beschreibung                                                                                                                                                                                                                                                                                                                                                                      |
    | -------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (das ist der Maximalwert von `unsigned long`) | Zeigt alle Knoten.                                                                                                                                                                                                                                                                                                                                                                 |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                     | Zeigt Attribute-`Attr`-Knoten. Dies ist nur sinnvoll, wenn ein `TreeWalker` mit einem `Attr`-Knoten als Wurzel erstellt wird. In diesem Fall bedeutet es, dass der Attribut-Knoten in der ersten Position der Iteration oder Traversierung erscheint. Da Attribute niemals Kinder anderer Knoten sind, erscheinen sie nicht bei der Traversierung durch den Dokument-Baum. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                     | Zeigt `CDATASection`-Knoten.                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                   | Zeigt `Comment`-Knoten.                                                                                                                                                                                                                                                                                                                                            |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                   | Zeigt `Document`-Knoten.                                                                                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                  | Zeigt `DocumentFragment`-Knoten.                                                                                                                                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                   | Zeigt `DocumentType`-Knoten.                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                     | Zeigt `Element`-Knoten.                                                                                                                                                                                                                                                                                                                                            |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                    | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                    | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                  | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                          |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                    | Zeigt `ProcessingInstruction`-Knoten.                                                                                                                                                                                                                                                                                                                              |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                     | Zeigt `Text`-Knoten.                                                                                                                                                                                                                                                                                                                                               |

- [`TreeWalker.filter`](/de/docs/Web/API/TreeWalker/filter) {{ReadOnlyInline}}
  - : Gibt den `NodeFilter` zurück, der mit diesem `TreeWalker` verbunden ist und verwendet wird, um die relevanten Knoten auszuwählen.
- [`TreeWalker.currentNode`](/de/docs/Web/API/TreeWalker/currentNode)
  - : Ist der `Node`, auf den der `TreeWalker` aktuell zeigt.

## Instanz-Methoden

_Dieses Interface erbt keine Methoden._

> [!NOTE]
> Im Kontext eines `TreeWalker` ist ein Knoten _sichtbar_, wenn er in der logischen Ansicht existiert, die durch die Argumente `whatToShow` und `filter` bestimmt wird. (Ob der Knoten auf dem Bildschirm sichtbar ist, ist irrelevant.)

- [`TreeWalker.parentNode()`](/de/docs/Web/API/TreeWalker/parentNode)
  - : Verschiebt den aktuellen `Node` zum ersten _sichtbaren_ Vorfahrenknoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Es verschiebt auch den aktuellen Knoten zu diesem. Wenn kein solcher Knoten existiert, oder wenn er vor dem bei der Objekterstellung definierten _Wurzelknoten_ liegt, wird `null` zurückgegeben und der aktuelle Knoten nicht geändert.
- [`TreeWalker.firstChild()`](/de/docs/Web/API/TreeWalker/firstChild)

  - : Verschiebt den aktuellen `Node` zum ersten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Es verschiebt auch den aktuellen Knoten zu diesem Kind. Wenn kein solches Kind existiert, wird `null` zurückgegeben und der aktuelle Knoten nicht geändert. Beachten Sie, dass der von `firstChild()` zurückgegebene Knoten vom Wert von `whatToShow` abhängt, der bei der Instanziierung des `TreeWalker`-Objekts festgelegt wurde. Angenommen, der folgende HTML-Baum, und wenn Sie `whatToShow` auf `NodeFilter.SHOW_ALL` setzen, gibt ein Aufruf von `firstChild()` einen `Text`-Knoten zurück und nicht ein `HTMLDivElement`-Objekt.

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

    Aber wenn wir:

    ```js
    let walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT,
    );
    let node = walker.firstChild(); // nodeName: "DIV"
    ```

    Das gleiche gilt für `nextSibling()`, `previousSibling()`, `firstChild()` und `lastChild()`

- [`TreeWalker.lastChild()`](/de/docs/Web/API/TreeWalker/lastChild)
  - : Verschiebt den aktuellen `Node` zum letzten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Es verschiebt auch den aktuellen Knoten zu diesem Kind. Wenn kein solches Kind existiert, wird `null` zurückgegeben und der aktuelle Knoten nicht geändert.
- [`TreeWalker.previousSibling()`](/de/docs/Web/API/TreeWalker/previousSibling)
  - : Verschiebt den aktuellen `Node` zu seinem vorherigen Geschwisterknoten, falls vorhanden, und gibt das gefundene Geschwister zurück. Wenn es keinen solchen Knoten gibt, wird `null` zurückgegeben und der aktuelle Knoten nicht geändert.
- [`TreeWalker.nextSibling()`](/de/docs/Web/API/TreeWalker/nextSibling)
  - : Verschiebt den aktuellen `Node` zu seinem nächsten Geschwisterknoten, falls vorhanden, und gibt das gefundene Geschwister zurück. Wenn es keinen solchen Knoten gibt, wird `null` zurückgegeben und der aktuelle Knoten nicht geändert.
- [`TreeWalker.previousNode()`](/de/docs/Web/API/TreeWalker/previousNode)
  - : Verschiebt den aktuellen `Node` zum vorherigen _sichtbaren_ Knoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Es verschiebt auch den aktuellen Knoten zu diesem. Wenn kein solcher Knoten existiert, oder wenn er vor dem bei der Objekterstellung definierten _Wurzelknoten_ liegt, wird `null` zurückgegeben und der aktuelle Knoten nicht geändert.
- [`TreeWalker.nextNode()`](/de/docs/Web/API/TreeWalker/nextNode)
  - : Verschiebt den aktuellen `Node` zum nächsten _sichtbaren_ Knoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Es verschiebt auch den aktuellen Knoten zu diesem. Wenn kein solcher Knoten existiert, wird `null` zurückgegeben und der aktuelle Knoten nicht geändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Erstellermethode: [`Document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker).
- Verwandtes Interface: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
