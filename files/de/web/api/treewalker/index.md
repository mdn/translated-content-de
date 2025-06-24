---
title: TreeWalker
slug: Web/API/TreeWalker
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("DOM") }}

Das **`TreeWalker`**-Objekt repräsentiert die Knoten eines Dokument-Unterbaums und eine Position innerhalb dieser.

Ein `TreeWalker` kann mittels der Methode [`Document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker) erstellt werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- [`TreeWalker.root`](/de/docs/Web/API/TreeWalker/root) {{ReadOnlyInline}}
  - : Gibt den Wurzel-`Node` zurück, wie beim Erstellen des `TreeWalker` angegeben.
- [`TreeWalker.whatToShow`](/de/docs/Web/API/TreeWalker/whatToShow) {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, das aus einer Bitmaske aus Konstanten besteht, die die Arten von [`Node`](/de/docs/Web/API/Node) beschreiben, die präsentiert werden müssen. Nicht übereinstimmende Knoten werden übersprungen, aber ihre Kinder können gegebenenfalls einbezogen werden. Die möglichen Werte sind:

    | Konstante                                                | Numerischer Wert                                           | Beschreibung                                                                                                                                                                                                                                                                                                                                                              |
    | -------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (das ist der Maximalwert von `unsigned long`) | Zeigt alle Knoten an.                                                                                                                                                                                                                                                                                                                                                     |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                        | Zeigt Attribut-`Attr`-Knoten an. Dies ist nur sinnvoll, wenn ein `TreeWalker` mit einem `Attr`-Knoten als Wurzel erstellt wird. In diesem Fall bedeutet es, dass der Attributknoten in der ersten Position der Iteration oder Durchquerung erscheint. Da Attribute niemals Kinder anderer Knoten sind, erscheinen sie nicht, wenn über den Dokumentbaum traversiert wird. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                        | Zeigt `CDATASection`-Knoten an.                                                                                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                      | Zeigt `Comment`-Knoten an.                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                      | Zeigt `Document`-Knoten an.                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                     | Zeigt `DocumentFragment`-Knoten an.                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                      | Zeigt `DocumentType`-Knoten an.                                                                                                                                                                                                                                                                                                                                           |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                        | Zeigt `Element`-Knoten an.                                                                                                                                                                                                                                                                                                                                                |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                       | Veraltet, nicht mehr nutzbar.                                                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                       | Veraltet, nicht mehr nutzbar.                                                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                     | Veraltet, nicht mehr nutzbar.                                                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                       | Zeigt `ProcessingInstruction`-Knoten an.                                                                                                                                                                                                                                                                                                                                  |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                        | Zeigt `Text`-Knoten an.                                                                                                                                                                                                                                                                                                                                                   |

- [`TreeWalker.filter`](/de/docs/Web/API/TreeWalker/filter) {{ReadOnlyInline}}
  - : Gibt den `NodeFilter` zurück, der mit diesem `TreeWalker` assoziiert ist, um die relevanten Knoten auszuwählen.
- [`TreeWalker.currentNode`](/de/docs/Web/API/TreeWalker/currentNode)
  - : Ist der `Node`, auf den der `TreeWalker` derzeit zeigt.

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden._

> [!NOTE]
> Im Kontext eines `TreeWalker` ist ein Knoten _sichtbar_, wenn er in der logischen Ansicht existiert, die durch die Argumenteparameter `whatToShow` und `filter` bestimmt wird. (Ob der Knoten auf dem Bildschirm sichtbar ist, ist irrelevant.)

- [`TreeWalker.parentNode()`](/de/docs/Web/API/TreeWalker/parentNode)
  - : Bewegt den aktuellen `Node` zur ersten _sichtbaren_ Vorfahrenknoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Es bewegt ebenfalls den aktuellen Knoten zu diesem. Wenn ein solcher Knoten nicht existiert oder wenn er vor dem bei der Objekterstellung definierten _Wurzelknoten_ liegt, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.firstChild()`](/de/docs/Web/API/TreeWalker/firstChild)

  - : Bewegt den aktuellen `Node` zum ersten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Es bewegt ebenfalls den aktuellen Knoten zu diesem Kind. Wenn ein solches Kind nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert. Beachten Sie, dass der von `firstChild()` zurückgegebene Knoten von dem während der Instanziierung des `TreeWalker`-Objekts festgelegten Wert von `whatToShow` abhängt. Angenommen, der folgende HTML-Baum und wenn Sie `whatToShow` auf `NodeFilter.SHOW_ALL` setzen, gibt ein Aufruf von `firstChild()` einen `Text`-Knoten und kein `HTMLDivElement`-Objekt zurück.

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

    Aber wenn wir das tun:

    ```js
    let walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT,
    );
    let node = walker.firstChild(); // nodeName: "DIV"
    ```

    Das Gleiche gilt für `nextSibling()`, `previousSibling()`, `firstChild()` und `lastChild()`

- [`TreeWalker.lastChild()`](/de/docs/Web/API/TreeWalker/lastChild)
  - : Bewegt den aktuellen `Node` zum letzten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Es bewegt ebenfalls den aktuellen Knoten zu diesem Kind. Wenn ein solches Kind nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.previousSibling()`](/de/docs/Web/API/TreeWalker/previousSibling)
  - : Bewegt den aktuellen `Node` zu seinem vorhergehenden Geschwister, falls vorhanden, und gibt das gefundene Geschwister zurück. Wenn ein solcher Knoten nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.nextSibling()`](/de/docs/Web/API/TreeWalker/nextSibling)
  - : Bewegt den aktuellen `Node` zu seinem nächsten Geschwister, falls vorhanden, und gibt das gefundene Geschwister zurück. Wenn ein solcher Knoten nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.previousNode()`](/de/docs/Web/API/TreeWalker/previousNode)
  - : Bewegt den aktuellen `Node` zum vorhergehenden _sichtbaren_ Knoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Es bewegt ebenfalls den aktuellen Knoten zu diesem. Wenn ein solcher Knoten nicht existiert oder wenn er vor dem bei der Objekterstellung definierten _Wurzelknoten_ liegt, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.nextNode()`](/de/docs/Web/API/TreeWalker/nextNode)
  - : Bewegt den aktuellen `Node` zum nächsten _sichtbaren_ Knoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Es bewegt ebenfalls den aktuellen Knoten zu diesem. Wenn ein solcher Knoten nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Erzeugermethode: [`Document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker).
- Verwandte Schnittstelle: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
