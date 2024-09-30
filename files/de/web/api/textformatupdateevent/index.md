---
title: TextFormatUpdateEvent
slug: Web/API/TextFormatUpdateEvent
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`TextFormatUpdateEvent`**-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Liste von Textformaten darstellt, die ein [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME)-Fenster auf den in einer bearbeitbaren Region verfassten Text anwenden möchte, die mit einer Instanz von [`EditContext`](/de/docs/Web/API/EditContext) verbunden ist.

Diese Schnittstelle erbt Eigenschaften von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram}}

## Konstruktor

- [`TextFormatUpdateEvent()`](/de/docs/Web/API/TextFormatUpdateEvent/TextFormatUpdateEvent) {{experimental_inline}}
  - : Erstellt ein neues `TextFormatUpdateEvent`-Objekt.

## Instanzmethoden

- [`TextFormatUpdateEvent.getTextFormats`](/de/docs/Web/API/TextFormatUpdateEvent/getTextFormats) {{experimental_inline}}
  - : Gibt ein {{jsxref("Array")}} von [`TextFormat`](/de/docs/Web/API/TextFormat)-Objekten zurück, die die Formate darstellen, die das IME-Fenster auf den Text anwenden möchte.

## Beispiele

### IME-verfassten Text formatieren

Im folgenden Beispiel wird das `textformatupdate`-Ereignis verwendet, um das Format des Textes in der bearbeitbaren Region zu aktualisieren.

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
