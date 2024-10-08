---
title: "EditContext: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/EditContext/selectionEnd
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die schreibgeschützte **`selectionEnd`**-Eigenschaft des [`EditContext`](/de/docs/Web/API/EditContext) bezieht sich auf den Offset innerhalb des bearbeitbaren Textinhalts, der das Ende der aktuellen Auswahl darstellt.

## Wert

Eine {{jsxref("Number")}}

## Beispiele

### Verwendung von `selectionEnd`, um die Benutzerauswahl in einer bearbeitbaren Leinwand darzustellen

Dieses Beispiel zeigt, wie die Eigenschaften `selectionStart` und `selectionEnd` genutzt werden, um die aktuelle Auswahl in einem `<canvas>`-Element zu zeichnen, das mit einem `EditContext` verbunden ist.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const ANCHOR_X = 10;
const ANCHOR_Y = 30;
const FONT_SIZE = 20;

const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
ctx.font = `${FONT_SIZE}px Arial`;

const editContext = new EditContext({
  text: "Hello world!",
  selectionStart: 6,
  selectionEnd: 11,
});
canvas.editContext = editContext;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Render the entire text content first.
  ctx.fillStyle = "black";
  ctx.fillText(editContext.text, ANCHOR_X, ANCHOR_Y);

  // Get the width from the start of the text to the start of the selection.
  const selectionStartX = ctx.measureText(
    editContext.text.substring(0, editContext.selectionStart),
  );

  // Get the width of the selection.
  const selectionWidth = ctx.measureText(
    editContext.text.substring(
      editContext.selectionStart,
      editContext.selectionEnd,
    ),
  );

  // Draw a rectangle on top of the text to represent the selection.
  ctx.fillStyle = "blue";
  ctx.fillRect(
    selectionStartX.width + ANCHOR_X,
    ANCHOR_Y - FONT_SIZE,
    selectionWidth.width,
    FONT_SIZE,
  );

  // Re-render just the selected text in white, over the rectangle.
  ctx.fillStyle = "white";
  ctx.fillText(
    editContext.text.substring(
      editContext.selectionStart,
      editContext.selectionEnd,
    ),
    selectionStartX.width + ANCHOR_X,
    ANCHOR_Y,
  );
}

render();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
