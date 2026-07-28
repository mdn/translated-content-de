---
title: "EditContext: textformatupdate-Ereignis"
short-title: textformatupdate
slug: Web/API/EditContext/textformatupdate_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `textformatupdate`-Ereignis der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle wird ausgelöst, wenn eine Komposition mit einem {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) Fenster stattfindet.

Das Ereignis wird ausgelöst, wenn das IME entscheidet, dass bestimmte Teile des zu komponierenden Textes anders formatiert werden sollten, um den Kompositionszustand anzuzeigen.

Der folgende Screenshot zeigt ein Beispiel für Text, der in der Notepad-App unter Windows mit dem japanischen IME geschrieben wird. Der Text ist mit einer dicken Unterstreichung formatiert, um anzuzeigen, dass er aus einem der Vorschläge des IMEs komponiert wurde.

![Notepad auf Windows mit japanischem Text, der aus dem IME-Fenster komponiert wird](./ime-notepad.png)

Als Webentwickler sollten Sie auf das `textformatupdate`-Ereignis hören und die Formatierung des in Ihrem bearbeitbaren Bereich angezeigten Textes entsprechend aktualisieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("textformatupdate", (event) => { })

ontextformatupdate = (event) => { }
```

## Ereignistyp

Ein [`TextFormatUpdateEvent`](/de/docs/Web/API/TextFormatUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Rendern von IME-Kompositionstextformatierungen

Im folgenden Beispiel wird das `textformatupdate`-Ereignis verwendet, um die Formatierung des Textes im bearbeitbaren Bereich zu aktualisieren. Beachten Sie, dass die Rückruffunktion des Ereignis-Listeners in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungs-Oberflächen zur Komposition von Text verwendet werden.

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

  // Get the text formats that the IME window wants to apply.
  const formats = e.getTextFormats();

  // Iterate over the text formats
  for (const format of formats) {
    const { rangeStart, rangeEnd, underlineStyle, underlineThickness } = format;

    const underlineXStart = ctx.measureText(
      editContext.text.substring(0, rangeStart),
    ).width;
    const underlineXEnd = ctx.measureText(
      editContext.text.substring(0, rangeEnd),
    ).width;
    const underlineY = TEXT_Y + 3;

    // For brevity, this example only draws a simple underline.
    // You should use the underlineStyle and underlineThickness values to draw the underline.

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
