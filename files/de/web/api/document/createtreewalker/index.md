---
title: "Dokument: Methode createTreeWalker()"
short-title: createTreeWalker()
slug: Web/API/Document/createTreeWalker
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("Document")}}

Die Erstellermethode **`Document.createTreeWalker()`** gibt ein neu erstelltes {{domxref("TreeWalker")}}-Objekt zurück.

## Syntax

```js-nolint
createTreeWalker(root)
createTreeWalker(root, whatToShow)
createTreeWalker(root, whatToShow, filter)
```

### Parameter

- `root`

  - : Ein {{domxref("Node")}}, der die Wurzel des `TreeWalker`-Objekts darstellt, welches der Anfangswert von {{domxref("TreeWalker.currentNode")}} ist.

- `whatToShow` {{optional_inline}}

  - : Ein `unsigned long`, der eine Bitmaske darstellt, die durch Kombination der konstanten Eigenschaften von [`NodeFilter`](https://dom.spec.whatwg.org/#interface-nodefilter) erstellt wurde. Es ist eine bequeme Möglichkeit, bestimmte Knotentypen zu filtern. Standardmäßig ist `0xFFFFFFFF` eingestellt, was der Konstante `NodeFilter.SHOW_ALL` entspricht.

    | Konstante                                                | Numerischer Wert | Beschreibung                                      |
    | -------------------------------------------------------- | ---------------- | ------------------------------------------------- |
    | `NodeFilter.SHOW_ALL`                                    | `0xFFFFFFFF`     | Zeigt alle Knoten an.                             |
    | `NodeFilter.SHOW_ATTRIBUTE`                              | `0x2`            | Zeigt {{domxref("Attr")}}-Knoten an.              |
    | `NodeFilter.SHOW_CDATA_SECTION`                          | `0x8`            | Zeigt {{domxref("CDATASection")}}-Knoten an.      |
    | `NodeFilter.SHOW_COMMENT`                                | `0x80`           | Zeigt {{domxref("Comment")}}-Knoten an.           |
    | `NodeFilter.SHOW_DOCUMENT`                               | `0x100`          | Zeigt {{domxref("Document")}}-Knoten an.          |
    | `NodeFilter.SHOW_DOCUMENT_FRAGMENT`                      | `0x400`          | Zeigt {{domxref("DocumentFragment")}}-Knoten an.  |
    | `NodeFilter.SHOW_DOCUMENT_TYPE`                          | `0x200`          | Zeigt {{domxref("DocumentType")}}-Knoten an.      |
    | `NodeFilter.SHOW_ELEMENT`                                | `0x1`            | Zeigt {{domxref("Element")}}-Knoten an.           |
    | `NodeFilter.SHOW_ENTITY` {{deprecated_inline}}           | `0x20`           | Veraltet, nicht mehr wirksam.                     |
    | `NodeFilter.SHOW_ENTITY_REFERENCE` {{deprecated_inline}} | `0x10`           | Veraltet, nicht mehr wirksam.                     |
    | `NodeFilter.SHOW_NOTATION` {{deprecated_inline}}         | `0x800`          | Veraltet, nicht mehr wirksam.                     |
    | `NodeFilter.SHOW_PROCESSING_INSTRUCTION`                 | `0x40`           | Zeigt {{domxref("ProcessingInstruction")}}-Knoten an. |
    | `NodeFilter.SHOW_TEXT`                                   | `0x4`            | Zeigt {{domxref("Text")}}-Knoten an.              |

    > [!NOTE]
    > Da das übergeordnete Element eines `Attr`-Knotens immer `null` ist, geben {{DOMXref("TreeWalker.nextNode()")}} und {{DOMXref("TreeWalker.previousNode()")}} niemals einen `Attr`-Knoten zurück. Um `Attr`-Knoten zu durchlaufen, verwenden Sie stattdessen {{DOMXref("Element.attributes")}}.

- `filter` {{optional_inline}}

  - : Eine Callback-Funktion oder ein Objekt mit einer `acceptNode()`-Methode, die `NodeFilter.FILTER_ACCEPT`, `NodeFilter.FILTER_REJECT` oder `NodeFilter.FILTER_SKIP` zurückgibt. Die Funktion oder Methode wird für jeden Knoten im Teilbaum ab `root` aufgerufen, der gemäß dem `whatToShow`-Flag als einbezogen akzeptiert wird, um festzustellen, ob er in die Liste der iterierbaren Knoten aufgenommen werden soll:

    - Wenn der Rückgabewert `NodeFilter.FILTER_ACCEPT` ist, wird dieser Knoten einbezogen.
    - Wenn der Rückgabewert `NodeFilter.FILTER_REJECT` ist, wird kein Knoten im Teilbaum ab diesem Knoten einbezogen.
    - Wenn der Rückgabewert `NodeFilter.FILTER_SKIP` ist, wird dieser Knoten nicht einbezogen.

### Rückgabewert

Ein neues {{domxref("TreeWalker")}}-Objekt.

## Beispiele

### Verwendung von whatToShow

Dieses Beispiel verwendet `whatToShow`, um Textinhalte in Großbuchstaben umzuwandeln. Beachten Sie, dass die Textknoten der Nachkommen des `#root`-Elements ebenfalls durchlaufen werden, obwohl sie keine Kindknoten des `#root`-Elements sind.

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

### Verwendung des Filters

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

- {{domxref("TreeWalker")}}: Verwandte Schnittstelle
