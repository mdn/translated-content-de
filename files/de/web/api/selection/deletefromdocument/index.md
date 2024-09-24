---
title: "Selection: deleteFromDocument()-Methode"
short-title: deleteFromDocument()
slug: Web/API/Selection/deleteFromDocument
l10n:
  sourceCommit: 860cbd30a1ea3812c51f60a341f856e7d5426efb
---

{{ ApiRef("DOM") }}

Die **`deleteFromDocument()`**-Methode des {{domxref("Selection")}}-Interfaces ruft die {{domxref("Range.deleteContents()")}}-Methode auf dem ausgewählten {{domxref("Range")}} auf.

## Syntax

```js-nolint
deleteFromDocument()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel ermöglicht es Ihnen, ausgewählten Text und/oder Knoten durch Klicken auf eine Schaltfläche zu löschen. Beim Klicken auf die Schaltfläche erhält die Methode {{domxref("Window.getSelection()")}} den ausgewählten Inhalt und die `deleteFromDocument()`-Methode entfernt ihn.

### HTML

```html
<p>Versuchen Sie, einige der Elemente in diesen Absätzen zu markieren.</p>
<p>
  Sobald Sie das getan haben, können Sie den ausgewählten Inhalt durch Klicken auf die untenstehende Schaltfläche entfernen.
</p>
<h2>Alle ausgewählten Texte/Knoten werden entfernt.</h2>
<button>Ausgewählten Text löschen</button>
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

- {{domxref("Selection")}}, das Interface, das diese Methode definiert
