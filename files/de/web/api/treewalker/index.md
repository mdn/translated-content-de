---
title: TreeWalker
slug: Web/API/TreeWalker
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{ APIRef("DOM") }}

Das **`TreeWalker`**-Objekt repräsentiert die Knoten eines Dokument-Teilbaums und eine Position innerhalb dieser.

Ein `TreeWalker` kann mit der Methode [`Document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker) erstellt werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- [`TreeWalker.root`](/de/docs/Web/API/TreeWalker/root) {{ReadOnlyInline}}
  - : Gibt den Wurzelknoten [`Node`](/de/docs/Web/API/Node) zurück, wie beim Erstellen des `TreeWalker` angegeben.
- [`TreeWalker.whatToShow`](/de/docs/Web/API/TreeWalker/whatToShow) {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, das eine Bitmaske aus Konstanten ist, die die Arten von [`Node`](/de/docs/Web/API/Node) beschreiben, die angezeigt werden müssen. Nicht übereinstimmende Knoten werden übersprungen, aber ihre Kinder können, falls relevant, einbezogen werden. Die möglichen Werte sind:

    | Konstante                                                | Numerischer Wert                                             | Beschreibung                                                                                                                                                                                                                                                                                                                                                                         |
    | -------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (das ist der maximale Wert von `unsigned long`) | Zeigt alle Knoten an.                                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                          | Zeigt Attributknoten [`Attr`](/de/docs/Web/API/Attr) an. Dies ist nur sinnvoll, wenn ein `TreeWalker` mit einem [`Attr`](/de/docs/Web/API/Attr)-Knoten als Wurzel erstellt wird. In diesem Fall bedeutet es, dass der Attributknoten an erster Stelle der Iteration erscheint. Da Attribute nie Kinder anderer Knoten sind, erscheinen sie nicht beim Durchlaufen des Dokumentbaums. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                          | Zeigt [`CDATASection`](/de/docs/Web/API/CDATASection)-Knoten an.                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                        | Zeigt [`Comment`](/de/docs/Web/API/Comment)-Knoten an.                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                        | Zeigt [`Document`](/de/docs/Web/API/Document)-Knoten an.                                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                       | Zeigt [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Knoten an.                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                        | Zeigt [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten an.                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                          | Zeigt [`Element`](/de/docs/Web/API/Element)-Knoten an.                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                         | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                         | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                       | Veraltet, nicht mehr verwendbar.                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                         | Zeigt [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten an.                                                                                                                                                                                                                                                                                                   |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                          | Zeigt [`Text`](/de/docs/Web/API/Text)-Knoten an.                                                                                                                                                                                                                                                                                                                                     |

- [`TreeWalker.filter`](/de/docs/Web/API/TreeWalker/filter) {{ReadOnlyInline}}
  - : Gibt den `NodeFilter` zurück, der mit diesem `TreeWalker` verknüpft ist und verwendet wird, um die relevanten Knoten auszuwählen.
- [`TreeWalker.currentNode`](/de/docs/Web/API/TreeWalker/currentNode)
  - : Ist der [`Node`](/de/docs/Web/API/Node), auf den der `TreeWalker` derzeit zeigt.

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden._

> [!NOTE]
> Im Kontext eines `TreeWalker` ist ein Knoten _sichtbar_, wenn er in der logischen Ansicht existiert, die durch die Argumente `whatToShow` und `filter` bestimmt wird. (Ob der Knoten auf dem Bildschirm sichtbar ist, ist irrelevant.)

- [`TreeWalker.parentNode()`](/de/docs/Web/API/TreeWalker/parentNode)
  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zum ersten _sichtbaren_ Vorgängerknoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Es verschiebt auch den aktuellen Knoten zu diesem. Wenn kein solcher Knoten existiert oder wenn er vor dem _Wurzelknoten_ definiert beim Erstellen des Objekts ist, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.firstChild()`](/de/docs/Web/API/TreeWalker/firstChild)

  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zum ersten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Es verschiebt auch den aktuellen Knoten zu diesem. Wenn kein solches Kind existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert. Beachten Sie, dass der von `firstChild()` zurückgegebene Knoten vom Wert von `whatToShow` abhängt, der bei der Instanziierung des `TreeWalker`-Objekts festgelegt wurde. Angenommen, der folgende HTML-Baum, und wenn `whatToShow` auf `NodeFilter.SHOW_ALL` gesetzt ist, gibt ein Aufruf von `firstChild()` einen `Text`-Knoten und nicht ein `HTMLDivElement`-Objekt zurück.

    ```html
    <!doctype html>
    <html lang="en">
      <head>
        <title>Demo</title>
      </head>
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

    Das Gleiche gilt für `nextSibling()`, `previousSibling()`, `firstChild()` und `lastChild()`

- [`TreeWalker.lastChild()`](/de/docs/Web/API/TreeWalker/lastChild)
  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zum letzten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Es verschiebt auch den aktuellen Knoten zu diesem. Wenn kein solches Kind existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.previousSibling()`](/de/docs/Web/API/TreeWalker/previousSibling)
  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zu seinem vorherigen Geschwisterknoten, falls vorhanden, und gibt das gefundene Geschwister zurück. Wenn kein solcher Knoten existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.nextSibling()`](/de/docs/Web/API/TreeWalker/nextSibling)
  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zu seinem nächsten Geschwisterknoten, falls vorhanden, und gibt das gefundene Geschwister zurück. Wenn kein solcher Knoten existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.previousNode()`](/de/docs/Web/API/TreeWalker/previousNode)
  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zum vorherigen _sichtbaren_ Knoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Es verschiebt auch den aktuellen Knoten zu diesem. Wenn kein solcher Knoten existiert oder wenn er vor dem _Wurzelknoten_ definiert beim Erstellen des Objekts ist, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.nextNode()`](/de/docs/Web/API/TreeWalker/nextNode)
  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zum nächsten _sichtbaren_ Knoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Es verschiebt auch den aktuellen Knoten zu diesem. Wenn kein solcher Knoten existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Erstellermethode: [`Document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker).
- Verwandte Schnittstelle: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
