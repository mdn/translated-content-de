---
title: "EditContext: textformatupdate-Ereignis"
short-title: textformatupdate
slug: Web/API/EditContext/textformatupdate_event
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `textformatupdate`-Ereignis der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle wird ausgelöst, wenn eine Komposition über ein {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Fenster stattfindet.

Das Ereignis wird ausgelöst, wenn das IME entscheidet, dass bestimmte Teile des zu bearbeitenden Textes anders formatiert werden sollten, um den Kompositionszustand anzuzeigen.

Der folgende Screenshot zeigt ein Beispiel für Text, der in der Notepad-App unter Windows mithilfe des japanischen IME geschrieben wird. Der Text ist mit einer dicken Unterstreichung formatiert, um anzuzeigen, dass er aus einem der Vorschläge des IME zusammengesetzt wurde.

![Notepad unter Windows mit japanischem Text, der aus dem IME-Fenster zusammengesetzt wird](./ime-notepad.png)

Als Webentwickler sollten Sie das `textformatupdate`-Ereignis abhören und die Formatierung des in Ihrem bearbeitbaren Bereich angezeigten Textes entsprechend aktualisieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("textformatupdate", (event) => { })

ontextformatupdate = (event) => { }
```

## Ereignistyp

Ein [`TextFormatUpdateEvent`](/de/docs/Web/API/TextFormatUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`TextFormatUpdateEvent.getTextFormats`](/de/docs/Web/API/TextFormatUpdateEvent/getTextFormats)
  - : Gibt die Liste der Textformate zurück, die das IME-Fenster auf den Text anwenden möchte.

## Beispiele

### Rendering von IME-Kompositionstextformatierung

Im folgenden Beispiel wird das `textformatupdate`-Ereignis verwendet, um die Formatierung des Textes im bearbeitbaren Bereich zu aktualisieren. Beachten Sie, dass der Ereignislistener-Callback in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungs-UI-Oberflächen zum Erstellen von Text verwendet werden.

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
