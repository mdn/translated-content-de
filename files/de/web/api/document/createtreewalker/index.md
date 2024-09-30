---
title: "Dokument: Methode createTreeWalker()"
short-title: createTreeWalker()
slug: Web/API/Document/createTreeWalker
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("Document")}}

Die **`Document.createTreeWalker()`**-Erstellermethode gibt ein neu erstelltes [`TreeWalker`](/de/docs/Web/API/TreeWalker)-Objekt zurück.

## Syntax

```js-nolint
createTreeWalker(root)
createTreeWalker(root, whatToShow)
createTreeWalker(root, whatToShow, filter)
```

### Parameter

- `root`

  - : Ein [`Node`](/de/docs/Web/API/Node), der die Wurzel des `TreeWalker`-Objekts darstellt, was der anfängliche Wert von [`TreeWalker.currentNode`](/de/docs/Web/API/TreeWalker/currentNode) ist.

- `whatToShow` {{optional_inline}}

  - : Ein `unsigned long`, der eine Bitmaske darstellt, die durch Kombination der Konstanten-Eigenschaften von [`NodeFilter`](https://dom.spec.whatwg.org/#interface-nodefilter) erstellt wurde. Es ist eine bequeme Möglichkeit zur Filterung bestimmter Knotentypen. Standardmäßig ist es `0xFFFFFFFF`, was der Konstante `NodeFilter.SHOW_ALL` entspricht.

    | Konstante                                                | Numerischer Wert | Beschreibung                                       |
    | -------------------------------------------------------- | --------------- | ------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `0xFFFFFFFF`    | Zeigt alle Knoten an.                                  |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | `0x2`           | Zeigt [`Attr`](/de/docs/Web/API/Attr)-Knoten an.                  |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | `0x8`           | Zeigt [`CDATASection`](/de/docs/Web/API/CDATASection)-Knoten an.          |
    | `NodeFilter.SHOW_COMMENT`                                | `0x80`          | Zeigt [`Comment`](/de/docs/Web/API/Comment)-Knoten an.               |
    | `NodeFilter.SHOW_DOCUMENT`                               | `0x100`         | Zeigt [`Document`](/de/docs/Web/API/Document)-Knoten an.              |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `0x400`         | Zeigt [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Knoten an.      |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `0x200`         | Zeigt [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten an.          |
    | `NodeFilter.SHOW_ELEMENT`                                | `0x1`           | Zeigt [`Element`](/de/docs/Web/API/Element)-Knoten an.               |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `0x20`          | Veraltet, nicht mehr wirksam.                      |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `0x10`          | Veraltet, nicht mehr wirksam.                      |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `0x800`         | Veraltet, nicht mehr wirksam.                      |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `0x40`          | Zeigt [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten an. |
    | `NodeFilter.SHOW_TEXT`                                   | `0x4`           | Zeigt [`Text`](/de/docs/Web/API/Text)-Knoten an.                  |

    > [!NOTE]
    > Da der Elternknoten eines `Attr`-Knotens immer `null` ist, wird [`TreeWalker.nextNode()`](/de/docs/Web/API/TreeWalker/nextNode) und [`TreeWalker.previousNode()`](/de/docs/Web/API/TreeWalker/previousNode) niemals einen `Attr`-Knoten zurückgeben. Um `Attr`-Knoten zu durchlaufen, verwenden Sie stattdessen [`Element.attributes`](/de/docs/Web/API/Element/attributes).

- `filter` {{optional_inline}}

  - : Eine Callback-Funktion oder ein Objekt mit einer `acceptNode()`-Methode, die `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT` oder `NodeFilter.FILTER_SKIP` zurückgibt. Die Funktion oder Methode wird für jeden Knoten im Unterbaum mit Wurzel bei `root` aufgerufen, welcher als eingeschlossen vom `whatToShow`-Flag akzeptiert wird, um zu bestimmen, ob er in die Liste der iterierbaren Knoten aufgenommen werden soll:

    - Wenn der Rückgabewert `NodeFilter.FILTER_ACCEPT` ist, wird dieser Knoten aufgenommen.
    - Wenn der Rückgabewert `NodeFilter.FILTER_REJECT` ist, wird kein Knoten im Unterbaum mit Wurzel bei diesem Knoten aufgenommen.
    - Wenn der Rückgabewert `NodeFilter.FILTER_SKIP` ist, wird dieser Knoten nicht aufgenommen.

### Rückgabewert

Ein neues [`TreeWalker`](/de/docs/Web/API/TreeWalker)-Objekt.

## Beispiele

### Verwendung von whatToShow

Dieses Beispiel verwendet `whatToShow`, um Textinhalte in Großbuchstaben umzuwandeln. Beachten Sie, dass auch die Textknoten der Nachkommen des `#root`-Elements durchlaufen werden, obwohl sie keine Kindknoten des `#root`-Elements sind.

#### HTML

```html
<div id="root">
  This is a text node.
  <span>And this is a <code>span</code> element.</span>
</div>
```

#### CSS

```css
span {
  background-color: aqua;
}
```

#### JavaScript

```js
const treeWalker = document.createTreeWalker(
  document.querySelector("#root"),
  NodeFilter.SHOW_TEXT,
);

while (treeWalker.nextNode()) {
  const node = treeWalker.currentNode;
  node.data = node.data.toUpperCase();
}
```

#### Ergebnis

{{EmbedLiveSample("using_whattoshow", "100%", 100)}}

### Verwendung von filter

Dieses Beispiel verwendet `filter`, um Textinhalte zu escapen. Für jeden Textknoten wird sein Inhalt mit {{JSXref("encodeURI()")}} escaped, wenn er ein Nachkomme eines `.escape`-Elements, aber nicht eines `.no-escape`-Elements ist.

#### HTML

```html
<div>
  <div>
    This is not escaped. <span class="escape">But this is escaped.</span>
  </div>
  <div class="escape">This is escaped.</div>
  <div class="no-escape">This is not escaped.</div>
</div>
<hr />
<div class="escape">
  <div>
    This is escaped. <span class="no-escape">But this is not escaped.</span>
  </div>
  <div class="no-escape">This is not escaped.</div>
</div>
<hr />
<div class="no-escape">
  <div>This is not escaped.</div>
  <div class="escape">This is not escaped.</div>
</div>
```

#### CSS

```css hidden
div {
  margin: 0.25em 0;
  padding: 0.25em;
}
span {
  display: inline-block;
}
```

```css
.escape {
  border: dashed;
}
.no-escape {
  border: solid;
}
```

#### JavaScript

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  (node) =>
    node.classList.contains("no-escape")
      ? NodeFilter.FILTER_REJECT
      : node.closest(".escape")
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP,
);

while (treeWalker.nextNode()) {
  for (const node of treeWalker.currentNode.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.data)) {
      // Exclude whitespace-only text nodes
      node.data = encodeURI(node.data.replace(/\s+/g, " "));
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample("using_filter", "100%", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TreeWalker`](/de/docs/Web/API/TreeWalker): Verwandte Schnittstelle
