---
title: "EditContext: selectionStart-Eigenschaft"
short-title: selectionStart
slug: Web/API/EditContext/selectionStart
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die schreibgeschützte **`selectionStart`**-Eigenschaft des {{domxref("EditContext")}} bezieht sich auf den Versatz innerhalb des editierbaren Textinhalts, an dem die aktuelle Auswahl beginnt.

## Wert

Eine {{jsxref("Number")}}

## Beispiele

### Verwendung von `selectionStart`, um die Benutzerauswahl in einem bearbeitbaren Canvas darzustellen

Dieses Beispiel zeigt, wie die Eigenschaften `selectionStart` und `selectionEnd` verwendet werden, um die aktuelle Auswahl in einem `<canvas>`-Element zu zeichnen, das mit einem `EditContext` verknüpft ist.

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

  // Erhalten Sie die Breite vom Anfang des Textes bis zum Beginn der Auswahl.
  const selectionStartX = ctx.measureText(
    editContext.text.substring(0, editContext.selectionStart),
  );

  // Erhalten Sie die Breite der Auswahl.
  const selectionWidth = ctx.measureText(
    editContext.text.substring(
      editContext.selectionStart,
      editContext.selectionEnd,
    ),
  );

  // Zeichnen Sie ein Rechteck über den Text, um die Auswahl darzustellen.
  ctx.fillStyle = "blue";
  ctx.fillRect(
    selectionStartX.width + ANCHOR_X,
    ANCHOR_Y - FONT_SIZE,
    selectionWidth.width,
    FONT_SIZE,
  );

  // Rendern Sie den ausgewählten Text in Weiß über das Rechteck.
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
