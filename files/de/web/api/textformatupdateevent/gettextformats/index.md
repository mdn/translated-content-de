---
title: "TextFormatUpdateEvent: getTextFormats()-Methode"
short-title: getTextFormats()
slug: Web/API/TextFormatUpdateEvent/getTextFormats
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`getTextFormats()`**-Methode der [`TextFormatUpdateEvent`](/de/docs/Web/API/TextFormatUpdateEvent)-Schnittstelle gibt ein {{jsxref("Array")}} von [`TextFormat`](/de/docs/Web/API/TextFormat)-Objekten zurück, die die Formate darstellen, die ein [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME)-Fenster auf den Text anwenden möchte, der gerade eingegeben wird.

## Syntax

```js-nolint
getTextFormats()
```

### Rückgabewert

Ein {{jsxref("Array")}}, das [`TextFormat`](/de/docs/Web/API/TextFormat)-Objekte enthält.

## Beispiele

### Stil von IME-eingebettetem Text

Im folgenden Beispiel wird das `textformatupdate`-Ereignis verwendet, um die Formatierung des Textes im bearbeitbaren Bereich zu aktualisieren.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const TEXT_X = 10;
const TEXT_Y = 10;

const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");

const editContext = new EditContext();
canvas.editContext = editContext;

editContext.addEventListener("textformatupdate", (e) => {
  // Clear the canvas.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Render the text.
  ctx.fillText(editContext.text, TEXT_X, TEXT_Y);
  console.log(`Rendering text: ${editContext.text}`);

  // Get the text formats that the IME window wants to apply.
  const formats = e.getTextFormats();

  // Iterate over the text formats
  for (const format of formats) {
    const { rangeStart, rangeEnd, underlineStyle, underlineThickness } = format;

    console.log(
      `Applying underline ${underlineThickness} ${underlineStyle} between ${rangeStart} and ${rangeEnd}.`,
    );

    const underlineXStart = ctx.measureText(
      editContext.text.substring(0, rangeStart),
    ).width;
    const underlineXEnd = ctx.measureText(
      editContext.text.substring(0, rangeEnd),
    ).width;
    const underlineY = TEXT_Y + 3;

    // For brevity, this example only draws a simple underline.
    // Use underlineStyle and underlineThickness to draw the correct underline.

    ctx.beginPath();
    ctx.moveTo(TEXT_X + underlineXStart, underlineY);
    ctx.lineTo(TEXT_X + underlineXEnd, underlineY);
    ctx.stroke();
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
