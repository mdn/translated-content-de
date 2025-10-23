---
title: TreeWalker
slug: Web/API/TreeWalker
l10n:
  sourceCommit: 30ae43a0c98ab92f750fd571d7a3a8ee8b15b4c0
---

{{ APIRef("DOM") }}

Das **`TreeWalker`**-Objekt repräsentiert die Knoten eines Dokument-Unterbaums und eine Position innerhalb dieser.

Ein `TreeWalker` kann mit der Methode [`Document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker) erstellt werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- [`TreeWalker.root`](/de/docs/Web/API/TreeWalker/root) {{ReadOnlyInline}}
  - : Gibt den Wurzel-`Node` zurück, wie beim Erstellen des `TreeWalker` spezifiziert.
- [`TreeWalker.whatToShow`](/de/docs/Web/API/TreeWalker/whatToShow) {{ReadOnlyInline}}
  - : Gibt ein `unsigned long` zurück, welches eine Bitmaske aus Konstanten ist, die die Typen von `Node` beschreiben, die angezeigt werden müssen. Nicht übereinstimmende Knoten werden übersprungen, aber ihre Kinder können einbezogen werden, falls relevant.
- [`TreeWalker.filter`](/de/docs/Web/API/TreeWalker/filter) {{ReadOnlyInline}}
  - : Gibt den `NodeFilter` zurück, der mit diesem `TreeWalker` verbunden ist und verwendet wird, um die relevanten Knoten auszuwählen.
- [`TreeWalker.currentNode`](/de/docs/Web/API/TreeWalker/currentNode)
  - : Ist der Knoten, auf den der `TreeWalker` aktuell zeigt.

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methoden._

> [!NOTE]
> Im Kontext eines `TreeWalker` ist ein Knoten _sichtbar_, wenn er in der logischen Ansicht existiert, die durch die Argumente `whatToShow` und `filter` bestimmt wird. (Ob der Knoten auf dem Bildschirm sichtbar ist, ist irrelevant.)

- [`TreeWalker.parentNode()`](/de/docs/Web/API/TreeWalker/parentNode)
  - : Bewegt den aktuellen `Node` zum ersten _sichtbaren_ Vorfahrenknoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Es bewegt auch den aktuellen Knoten zu diesem Knoten. Wenn ein solcher Knoten nicht existiert oder er vor dem _Wurzelknoten_ liegt, der bei der Objekterstellung definiert wurde, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.firstChild()`](/de/docs/Web/API/TreeWalker/firstChild)
  - : Bewegt den aktuellen `Node` zum ersten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Es bewegt auch den aktuellen Knoten zu diesem Kind. Wenn ein solches Kind nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert. Beachten Sie, dass der von `firstChild()` zurückgegebene Knoten vom Wert von `whatToShow` abhängt, der während der Instanziierung des `TreeWalker`-Objekts festgelegt wurde. Bei Annahme des folgenden HTML-Baums und wenn Sie `whatToShow` auf `NodeFilter.SHOW_ALL` setzen, wird ein Aufruf von `firstChild()` einen `Text`-Knoten und nicht ein `HTMLDivElement`-Objekt zurückgeben.

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

    Das Gleiche gilt für `nextSibling()`, `previousSibling()`, `firstChild()` und `lastChild()`.

- [`TreeWalker.lastChild()`](/de/docs/Web/API/TreeWalker/lastChild)
  - : Bewegt den aktuellen `Node` zum letzten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Es bewegt auch den aktuellen Knoten zu diesem Kind. Wenn ein solches Kind nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.previousSibling()`](/de/docs/Web/API/TreeWalker/previousSibling)
  - : Bewegt den aktuellen `Node` zu seinem vorhergehenden Geschwister, falls vorhanden, und gibt das gefundene Geschwister zurück. Wenn es keinen solchen Knoten gibt, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.nextSibling()`](/de/docs/Web/API/TreeWalker/nextSibling)
  - : Bewegt den aktuellen `Node` zu seinem nächsten Geschwister, falls vorhanden, und gibt das gefundene Geschwister zurück. Wenn es keinen solchen Knoten gibt, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.previousNode()`](/de/docs/Web/API/TreeWalker/previousNode)
  - : Bewegt den aktuellen `Node` zum vorhergehenden _sichtbaren_ Knoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Es bewegt auch den aktuellen Knoten zu diesem. Wenn ein solcher Knoten nicht existiert oder er vor dem _Wurzelknoten_ liegt, der bei der Objekterstellung definiert wurde, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.
- [`TreeWalker.nextNode()`](/de/docs/Web/API/TreeWalker/nextNode)
  - : Bewegt den aktuellen `Node` zum nächsten _sichtbaren_ Knoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Es bewegt auch den aktuellen Knoten zu diesem. Wenn ein solcher Knoten nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten wird nicht geändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Erstellermethode: [`Document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker).
- Verwandte Schnittstelle: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
