---
title: "EditContext: textformatupdate-Ereignis"
short-title: textformatupdate
slug: Web/API/EditContext/textformatupdate_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `textformatupdate`-Ereignis der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle wird ausgelöst, während Text mithilfe eines {{Glossary("Input_Method_Editor", "Input Method Editors")}} (IME) eingegeben wird.

Das Ereignis wird ausgelöst, wenn der IME festlegt, dass bestimmte Teile des gerade eingegebenen Textes anders formatiert werden sollen, um den Eingabestatus anzuzeigen.

Der folgende Screenshot zeigt ein Beispiel für die Texteingabe in der Notepad-App unter Windows mit dem japanischen IME. Der Text ist dick unterstrichen, um anzuzeigen, dass er aus einem der Vorschläge des IME übernommen wurde.

![Notepad unter Windows mit japanischem Text, der mithilfe des IME-Fensters eingegeben wird](./ime-notepad.png)

Als Webentwickler sollten Sie auf das `textformatupdate`-Ereignis reagieren und die Formatierung des Textes in Ihrem bearbeitbaren Bereich entsprechend aktualisieren.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("textformatupdate", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ontextformatupdate = (event) => { }
```

## Ereignistyp

Ein [`TextFormatUpdateEvent`](/de/docs/Web/API/TextFormatUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Formatierung von Text während der IME-Eingabe darstellen

Im folgenden Beispiel wird das `textformatupdate`-Ereignis verwendet, um die Formatierung des Textes im bearbeitbaren Bereich zu aktualisieren. Beachten Sie, dass die Event-Listener-Callback-Funktion in diesem Beispiel nur aufgerufen wird, wenn Text mit einem IME-Fenster oder einer anderen plattformspezifischen Benutzeroberfläche zur Texteingabe eingegeben wird.

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
