---
title: "EditContext: textformatupdate-Ereignis"
short-title: textformatupdate
slug: Web/API/EditContext/textformatupdate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `textformatupdate`-Ereignis des [`EditContext`](/de/docs/Web/API/EditContext)-Interfaces wird ausgelöst, wenn eine Komposition mit einem {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) erfolgt.

Das Ereignis wird ausgelöst, wenn der IME entscheidet, dass bestimmte Teile des zu komponierenden Textes anders formatiert werden sollten, um den Kompositionsstatus anzuzeigen.

Der folgende Screenshot zeigt ein Beispiel für Text, der in der Notepad-App auf Windows geschrieben wird, indem der japanische IME verwendet wird. Der Text ist mit einer fetten Unterstreichung formatiert, um anzuzeigen, dass er aus einem Vorschlag des IME komponiert wurde.

![Notepad auf Windows mit japanischem Text, der aus dem IME-Fenster komponiert wird](./ime-notepad.png)

Als Webentwickler sollten Sie auf das `textformatupdate`-Ereignis hören und die Formatierung des in Ihrem bearbeitbaren Bereich angezeigten Textes entsprechend aktualisieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("textformatupdate", (event) => { })

ontextformatupdate = (event) => { }
```

## Ereignistyp

Ein [`TextFormatUpdateEvent`](/de/docs/Web/API/TextFormatUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften des übergeordneten Interfaces, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`TextFormatUpdateEvent.getTextFormats`](/de/docs/Web/API/TextFormatUpdateEvent/getTextFormats)
  - : Gibt die Liste der Textformate zurück, die das IME-Fenster auf den Text anwenden möchte.

## Beispiele

### Rendering von IME-Kompositionstextformatierung

Im folgenden Beispiel wird das `textformatupdate`-Ereignis verwendet, um die Formatierung des Textes im bearbeitbaren Bereich zu aktualisieren. Beachten Sie, dass der Event-Listener-Callback in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungsoberflächen verwendet werden, um Text zu komponieren.

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
