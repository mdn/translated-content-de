---
title: "EditContext: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/EditContext/selectionEnd
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`selectionEnd`**-Eigenschaft des {{domxref("EditContext")}} (schreibgeschützt) bezieht sich auf den Offset innerhalb des bearbeitbaren Textinhalts, an dem die aktuelle Auswahl endet.

## Wert

Ein {{jsxref("Number")}}

## Beispiele

### Verwendung von `selectionEnd`, um die Benutzerauswahl in einem bearbeitbaren Canvas darzustellen

Dieses Beispiel zeigt, wie Sie die Eigenschaften `selectionStart` und `selectionEnd` verwenden, um die aktuelle Auswahl in einem `<canvas>`-Element zu zeichnen, das mit einem `EditContext` verbunden ist.

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

  // Rendern Sie zuerst den gesamten Textinhalt.
  ctx.fillStyle = "black";
  ctx.fillText(editContext.text, ANCHOR_X, ANCHOR_Y);

  // Ermitteln Sie die Breite vom Start des Texts bis zum Beginn der Auswahl.
  const selectionStartX = ctx.measureText(
    editContext.text.substring(0, editContext.selectionStart),
  );

  // Ermitteln Sie die Breite der Auswahl.
  const selectionWidth = ctx.measureText(
    editContext.text.substring(
      editContext.selectionStart,
      editContext.selectionEnd,
    ),
  );

  // Zeichnen Sie ein Rechteck über dem Text, um die Auswahl darzustellen.
  ctx.fillStyle = "blue";
  ctx.fillRect(
    selectionStartX.width + ANCHOR_X,
    ANCHOR_Y - FONT_SIZE,
    selectionWidth.width,
    FONT_SIZE,
  );

  // Rendern Sie den ausgewählten Text in Weiß über das Rechteck neu.
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
