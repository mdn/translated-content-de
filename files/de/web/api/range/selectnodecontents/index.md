---
title: "Range: Methode selectNodeContents()"
short-title: selectNodeContents()
slug: Web/API/Range/selectNodeContents
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.selectNodeContents()`**-Methode setzt das [`Range`](/de/docs/Web/API/Range), um den Inhalt eines [`Node`](/de/docs/Web/API/Node) zu umfassen.

Der übergeordnete `Node` des Anfangs und Endes des `Range` wird der Referenz-Knoten sein. Der `startOffset` ist 0, und der `endOffset` ist die Anzahl der Kind-`Node`s oder die Anzahl der Zeichen, die im Referenz-Knoten enthalten sind.

## Syntax

```js-nolint
selectNodeContents(referenceNode)
```

### Parameter

- `referenceNode`
  - : Der [`Node`](/de/docs/Web/API/Node), dessen Inhalt innerhalb eines [`Range`](/de/docs/Web/API/Range) ausgewählt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const range = document.createRange();
const referenceNode = document.querySelector("div");
range.selectNodeContents(referenceNode);
```

### Live-Beispiel

Dieses Beispiel ermöglicht es dem Benutzer, einen Absatz mit Schaltflächen auszuwählen und die Auswahl aufzuheben. [`Document.createRange()`](/de/docs/Web/API/Document/createRange), `Range.selectNodeContents()` und
[`Selection.addRange()`](/de/docs/Web/API/Selection/addRange) werden verwendet, um den Inhalt auszuwählen.
[`Window.getSelection()`](/de/docs/Web/API/Window/getSelection) und [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges) werden verwendet, um die Auswahl aufzuheben.

#### HTML

```html
<p id="p">
  <strong>Use the buttons below</strong> to select or deselect the contents of
  this paragraph.
</p>
<button id="select-button">Select paragraph</button>
<button id="deselect-button">Deselect paragraph</button>
```

#### JavaScript

```js
const p = document.getElementById("p");
const selectButton = document.getElementById("select-button");
const deselectButton = document.getElementById("deselect-button");

selectButton.addEventListener("click", (e) => {
  // Clear any current selection
  const selection = window.getSelection();
  selection.removeAllRanges();

  // Select paragraph
  const range = document.createRange();
  range.selectNodeContents(p);
  selection.addRange(range);
});

deselectButton.addEventListener("click", (e) => {
  const selection = window.getSelection();
  selection.removeAllRanges();
});
```

#### Ergebnis

{{EmbedLiveSample("Live_sample")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
