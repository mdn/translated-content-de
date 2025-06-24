---
title: "Dokumentation: createTreeWalker() Methode"
short-title: createTreeWalker()
slug: Web/API/Document/createTreeWalker
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ApiRef("Document")}}

Die **`Document.createTreeWalker()`** Erzeugungsmethode gibt ein neu erstelltes [`TreeWalker`](/de/docs/Web/API/TreeWalker)-Objekt zurück.

## Syntax

```js-nolint
createTreeWalker(root)
createTreeWalker(root, whatToShow)
createTreeWalker(root, whatToShow, filter)
```

### Parameter

- `root`

  - : Ein [`Node`](/de/docs/Web/API/Node), der die Wurzel des `TreeWalker`-Objekts darstellt und den Anfangswert von [`TreeWalker.currentNode`](/de/docs/Web/API/TreeWalker/currentNode) bildet.

- `whatToShow` {{optional_inline}}

  - : Ein `unsigned long`, das eine Bitmaske darstellt, die durch das Kombinieren der Konstanten-Eigenschaften von [`NodeFilter`](https://dom.spec.whatwg.org/#interface-nodefilter) erstellt wurde. Dies ist ein praktischer Weg, um für bestimmte Arten von Knoten zu filtern. Standardmäßig ist `0xFFFFFFFF` eingestellt, was der `NodeFilter.SHOW_ALL`-Konstanten entspricht.

    | Konstante                                                | Numerischer Wert | Beschreibung                                                                       |
    | -------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `0xFFFFFFFF`     | Zeigt alle Knoten an.                                                              |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | `0x2`            | Zeigt [`Attr`](/de/docs/Web/API/Attr)-Knoten an.                                   |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | `0x8`            | Zeigt [`CDATASection`](/de/docs/Web/API/CDATASection)-Knoten an.                   |
    | `NodeFilter.SHOW_COMMENT`                                | `0x80`           | Zeigt [`Comment`](/de/docs/Web/API/Comment)-Knoten an.                             |
    | `NodeFilter.SHOW_DOCUMENT`                               | `0x100`          | Zeigt [`Document`](/de/docs/Web/API/Document)-Knoten an.                           |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `0x400`          | Zeigt [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Knoten an.           |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `0x200`          | Zeigt [`DocumentType`](/de/docs/Web/API/DocumentType)-Knoten an.                   |
    | `NodeFilter.SHOW_ELEMENT`                                | `0x1`            | Zeigt [`Element`](/de/docs/Web/API/Element)-Knoten an.                             |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `0x20`           | Veraltet, nicht mehr wirksam.                                                      |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `0x10`           | Veraltet, nicht mehr wirksam.                                                      |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `0x800`          | Veraltet, nicht mehr wirksam.                                                      |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `0x40`           | Zeigt [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Knoten an. |
    | `NodeFilter.SHOW_TEXT`                                   | `0x4`            | Zeigt [`Text`](/de/docs/Web/API/Text)-Knoten an.                                   |

    > [!NOTE]
    > Da der Elter von jedem `Attr`-Knoten immer `null` ist, werden [`TreeWalker.nextNode()`](/de/docs/Web/API/TreeWalker/nextNode) und [`TreeWalker.previousNode()`](/de/docs/Web/API/TreeWalker/previousNode) niemals einen `Attr`-Knoten zurückgeben. Um `Attr`-Knoten zu durchlaufen, verwenden Sie stattdessen [`Element.attributes`](/de/docs/Web/API/Element/attributes).

- `filter` {{optional_inline}}
  - : Eine Callback-Funktion oder ein Objekt mit einer `acceptNode()`-Methode, die `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT` oder `NodeFilter.FILTER_SKIP` zurückgibt. Die Funktion oder Methode wird für jeden Knoten im Teilbaum basierend auf `root` aufgerufen, der als eingeschlossen durch das `whatToShow`-Flag akzeptiert wird, um zu bestimmen, ob er in die Liste der durchlaufbaren Knoten aufgenommen wird:
    - Wenn der Rückgabewert `NodeFilter.FILTER_ACCEPT` ist, wird dieser Knoten eingeschlossen.
    - Wenn der Rückgabewert `NodeFilter.FILTER_REJECT` ist, wird jeder Knoten im Teilbaum basierend auf diesem Knoten nicht eingeschlossen.
    - Wenn der Rückgabewert `NodeFilter.FILTER_SKIP` ist, wird dieser Knoten nicht eingeschlossen.

### Rückgabewert

Ein neues [`TreeWalker`](/de/docs/Web/API/TreeWalker)-Objekt.

## Beispiele

### Verwendung von whatToShow

Dieses Beispiel verwendet `whatToShow`, um Textinhalte in Großbuchstaben zu transformieren. Beachten Sie, dass die Textknoten der Nachkommen des `#root`-Elements ebenfalls durchlaufen werden, obwohl sie keine Kindknoten des `#root`-Elements sind.

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

Dieses Beispiel verwendet `filter`, um Textinhalte zu maskieren. Für jeden Textknoten wird sein Inhalt mit {{JSXref("encodeURI()")}} maskiert, wenn er ein Nachkomme eines `.escape`-Elements, aber nicht eines `.no-escape`-Elements ist.

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
