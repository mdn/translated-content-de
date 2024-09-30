---
title: "Selection: Methode deleteFromDocument()"
short-title: deleteFromDocument()
slug: Web/API/Selection/deleteFromDocument
l10n:
  sourceCommit: 860cbd30a1ea3812c51f60a341f856e7d5426efb
---

{{ ApiRef("DOM") }}

Die **`deleteFromDocument()`**-Methode des [`Selection`](/de/docs/Web/API/Selection)-Interfaces ruft die [`Range.deleteContents()`](/de/docs/Web/API/Range/deleteContents)-Methode auf dem ausgewählten [`Range`](/de/docs/Web/API/Range) auf.

## Syntax

```js-nolint
deleteFromDocument()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel ermöglicht es Ihnen, durch Klicken auf eine Schaltfläche ausgewählten Text und/oder Knoten zu löschen. Beim Klicken auf die Schaltfläche wird die Methode [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) aufgerufen, um den ausgewählten Inhalt zu erhalten, und die Methode `deleteFromDocument()` entfernt ihn.

### HTML

```html
<p>Try highlighting some of the elements in these paragraphs.</p>
<p>
  Once you do, you can remove the selected content by clicking the button below.
</p>
<h2>All of the selected text/nodes will be removed.</h2>
<button>Delete selected text</button>
```

### JavaScript

```js
let button = document.querySelector("button");
button.addEventListener("click", deleteSelection);

function deleteSelection() {
  let selection = window.getSelection();
  selection.deleteFromDocument();
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), das Interface, das diese Methode definiert
