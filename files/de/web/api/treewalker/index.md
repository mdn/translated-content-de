---
title: TreeWalker
slug: Web/API/TreeWalker
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{ APIRef("DOM") }}

Das **`TreeWalker`**-Objekt repräsentiert die Knoten eines Dokument-Teilbaums und eine Position innerhalb dieses.

Ein `TreeWalker` kann mittels der Methode [`Document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker) erstellt werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaft._

- [`TreeWalker.root`](/de/docs/Web/API/TreeWalker/root) {{ReadOnlyInline}}
  - : Gibt den Wurzel-[`Node`](/de/docs/Web/API/Node) zurück, wie er bei der Erstellung des `TreeWalker` angegeben wurde.
- [`TreeWalker.whatToShow`](/de/docs/Web/API/TreeWalker/whatToShow) {{ReadOnlyInline}}

  - : Gibt einen `unsigned long` zurück, der eine Bitmaske aus Konstanten ist, die die Typen von [`Node`](/de/docs/Web/API/Node) beschreibt, die dargestellt werden müssen. Nicht übereinstimmende Knoten werden übersprungen, aber ihre Kinder können, sofern relevant, einbezogen werden. Die möglichen Werte sind:

    | Konstante                                                | Zahlenwert                                                 | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                |
    | -------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `4294967295` (das ist der Maximalwert von `unsigned long`) | Zeigt alle Knoten an.                                                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_ATTRIBUTE` {{deprecated_inline}}        | `2`                                                        | Zeigt Attribut-[`Attr`](/de/docs/Web/API/Attr)-Knoten. Dies ist nur sinnvoll, wenn ein `TreeWalker` mit einem [`Attr`](/de/docs/Web/API/Attr)-Knoten als Wurzel erstellt wird. In diesem Fall bedeutet es, dass der Attribut-Knoten an erster Stelle der Iteration oder des Durchlaufs erscheint. Da Attribute niemals Kinder anderer Knoten sind, erscheinen sie nicht beim Durchlaufen des Dokumentbaums. |
    | `NodeFilter.SHOW_CDATA_SECTION` {{deprecated_inline}}    | `8`                                                        | Zeigt [`CDATASection`](/de/docs/Web/API/CDATASection)-Knoten.                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_COMMENT`                                | `128`                                                      | Zeigt [`Comment`](/de/docs/Web/API/Comment)-Knoten.                                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_DOCUMENT`                               | `256`                                                      | Zeigt [`Document`](/de/docs/Web/API/Document)-Knoten.                                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `1024`                                                     | Zeigt [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Knoten.                                                                                                                                                                                                                                                                                                                                       |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `512`                                                      | Zeigt [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten.                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_ELEMENT`                                | `1`                                                        | Zeigt [`Element`](/de/docs/Web/API/Element)-Knoten.                                                                                                                                                                                                                                                                                                                                                         |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `32`                                                       | Veraltet, nicht mehr nutzbar.                                                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `16`                                                       | Veraltet, nicht mehr nutzbar.                                                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `2048`                                                     | Veraltet, nicht mehr nutzbar.                                                                                                                                                                                                                                                                                                                                                                               |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `64`                                                       | Zeigt [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten.                                                                                                                                                                                                                                                                                                                             |
    | `NodeFilter.SHOW_TEXT`                                   | `4`                                                        | Zeigt [`Text`](/de/docs/Web/API/Text)-Knoten.                                                                                                                                                                                                                                                                                                                                                               |

- [`TreeWalker.filter`](/de/docs/Web/API/TreeWalker/filter) {{ReadOnlyInline}}
  - : Gibt den `NodeFilter` zurück, der mit diesem `TreeWalker` verknüpft ist und zur Auswahl der relevanten Knoten verwendet wird.
- [`TreeWalker.currentNode`](/de/docs/Web/API/TreeWalker/currentNode)
  - : Ist der [`Node`](/de/docs/Web/API/Node), auf den der `TreeWalker` derzeit zeigt.

## Instanz-Methoden

_Diese Schnittstelle erbt keine Methode._

> [!NOTE]
> Im Kontext eines `TreeWalker` ist ein Knoten _sichtbar_, wenn er in der logischen Ansicht existiert, die durch die `whatToShow`- und `filter`-Parameterargumente bestimmt wird. (Ob der Knoten auf dem Bildschirm sichtbar ist, ist irrelevant.)

- [`TreeWalker.parentNode()`](/de/docs/Web/API/TreeWalker/parentNode)
  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zum ersten _sichtbaren_ Vorfahrenknoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Der aktuelle Knoten wird ebenfalls auf diesen verschoben. Wenn ein solcher Knoten nicht existiert oder wenn er vor dem bei der Objekterstellung definierten _Wurzelknoten_ liegt, wird `null` zurückgegeben und der aktuelle Knoten bleibt unverändert.
- [`TreeWalker.firstChild()`](/de/docs/Web/API/TreeWalker/firstChild)

  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zum ersten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Der aktuelle Knoten wird ebenfalls auf dieses Kind verschoben. Wenn ein solches Kind nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten bleibt unverändert. Beachten Sie, dass der von `firstChild()` zurückgegebene Knoten von dem während der Instanziierung des `TreeWalker`-Objekts festgelegten Wert von `whatToShow` abhängt. Angenommen, der folgende HTML-Baum ist gegeben und Sie setzen `whatToShow` auf `NodeFilter.SHOW_ALL`, dann wird ein Aufruf von `firstChild()` einen `Text`-Knoten und nicht ein `HTMLDivElement`-Objekt zurückgeben.

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

    Wenn wir jedoch Folgendes tun:

    ```js
    let walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT,
    );
    let node = walker.firstChild(); // nodeName: "DIV"
    ```

    Dasselbe gilt für `nextSibling()`, `previousSibling()`, `firstChild()` und `lastChild()`

- [`TreeWalker.lastChild()`](/de/docs/Web/API/TreeWalker/lastChild)
  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zum letzten _sichtbaren_ Kind des aktuellen Knotens und gibt das gefundene Kind zurück. Der aktuelle Knoten wird ebenfalls auf dieses Kind verschoben. Wenn ein solches Kind nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten bleibt unverändert.
- [`TreeWalker.previousSibling()`](/de/docs/Web/API/TreeWalker/previousSibling)
  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zu seinem vorherigen Geschwisterknoten, falls vorhanden, und gibt das gefundene Geschwister zurück. Wenn ein solcher Knoten nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten bleibt unverändert.
- [`TreeWalker.nextSibling()`](/de/docs/Web/API/TreeWalker/nextSibling)
  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zu seinem nächsten Geschwisterknoten, falls vorhanden, und gibt das gefundene Geschwister zurück. Wenn ein solcher Knoten nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten bleibt unverändert.
- [`TreeWalker.previousNode()`](/de/docs/Web/API/TreeWalker/previousNode)
  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zum vorherigen _sichtbaren_ Knoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Der aktuelle Knoten wird ebenfalls auf diesen verschoben. Wenn ein solcher Knoten nicht existiert oder wenn er vor dem bei der Objekterstellung definierten _Wurzelknoten_ liegt, wird `null` zurückgegeben und der aktuelle Knoten bleibt unverändert.
- [`TreeWalker.nextNode()`](/de/docs/Web/API/TreeWalker/nextNode)
  - : Verschiebt den aktuellen [`Node`](/de/docs/Web/API/Node) zum nächsten _sichtbaren_ Knoten in der Dokumentreihenfolge und gibt den gefundenen Knoten zurück. Der aktuelle Knoten wird ebenfalls auf diesen verschoben. Wenn ein solcher Knoten nicht existiert, wird `null` zurückgegeben und der aktuelle Knoten bleibt unverändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Erstellmethode: [`Document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker).
- Verwandte Schnittstelle: [`NodeIterator`](/de/docs/Web/API/NodeIterator).
