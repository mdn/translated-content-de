---
title: "EditContext: textformatupdate-Ereignis"
short-title: textformatupdate
slug: Web/API/EditContext/textformatupdate_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `textformatupdate`-Ereignis der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle wird ausgelöst, wenn eine Komposition mit einem [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME)-Fenster erfolgt.

Das Ereignis wird ausgelöst, wenn das IME entscheidet, dass bestimmte Teile des zu komponierenden Textes unterschiedlich formatiert werden sollten, um den Kompositionszustand anzuzeigen.

Der folgende Screenshot zeigt ein Beispiel eines Textes, der in der Nodepad-Anwendung unter Windows unter Verwendung des japanischen IME geschrieben wird. Der Text ist mit einer dicken Unterstreichung formatiert, um anzuzeigen, dass er aus einer der IME-Vorschläge komponiert wurde.

![Nodepad unter Windows mit einem japanischen Text, der aus dem IME-Fenster komponiert wird](./ime-nodepad.png)

Als Webentwickler sollten Sie das `textformatupdate`-Ereignis abfangen und die Formatierung des Textes in Ihrem editierbaren Bereich entsprechend aktualisieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("textformatupdate", (event) => {});

ontextformatupdate = (event) => {};
```

## Ereignistyp

Ein [`TextFormatUpdateEvent`](/de/docs/Web/API/TextFormatUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Eigenschaften des Ereignisses

_Neben den unten aufgeführten Eigenschaften sind auch die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`TextFormatUpdateEvent.getTextFormats`](/de/docs/Web/API/TextFormatUpdateEvent/getTextFormats)
  - : Gibt die Liste der Textformate zurück, die das IME-Fenster auf den Text anwenden möchte.

## Beispiele

### Darstellung der IME-Kompositionstextformatierung

Im folgenden Beispiel wird das `textformatupdate`-Ereignis verwendet, um die Formatierung des Textes im editierbaren Bereich zu aktualisieren. Beachten Sie, dass der Ereignis-Listener-Rückruf in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformabhängige Bearbeitungsoberflächen zum Komponieren von Text verwendet werden.

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
