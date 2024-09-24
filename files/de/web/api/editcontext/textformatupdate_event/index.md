---
title: "EditContext: textformatupdate-Ereignis"
short-title: textformatupdate
slug: Web/API/EditContext/textformatupdate_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `textformatupdate`-Ereignis des {{domxref("EditContext")}} Interfaces wird ausgelöst, wenn die Zusammensetzung mit einem {{glossary("Input Method Editor")}} (IME) Fenster stattfindet.

Das Ereignis wird ausgelöst, wenn das IME entscheidet, dass bestimmte Teile des komponierten Textes anders formatiert werden sollten, um den Kompositionszustand anzuzeigen.

Der folgende Screenshot zeigt ein Beispiel für Text, der in der Nodepad-App unter Windows mithilfe des japanischen IMEs geschrieben wird. Der Text ist mit einer dicken Unterstreichung formatiert, um anzuzeigen, dass er aus einem der IME-Vorschläge zusammengesetzt wurde.

![Nodepad unter Windows mit japanischem Text, der aus dem IME-Fenster komponiert wird](./ime-nodepad.png)

Als Webentwickler sollten Sie auf das `textformatupdate`-Ereignis hören und die Formatierung des Textes in Ihrem bearbeitbaren Bereich entsprechend aktualisieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("textformatupdate", (event) => {});

ontextformatupdate = (event) => {};
```

## Ereignistyp

Ein {{domxref("TextFormatUpdateEvent")}}. Erbt von {{domxref("Event")}}.

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften des übergeordneten Interfaces, {{domxref("Event")}}, verfügbar._

- {{domxref('TextFormatUpdateEvent.getTextFormats')}}
  - : Gibt die Liste der Textformate zurück, die das IME-Fenster auf den Text anwenden möchte.

## Beispiele

### Rendering von IME-Kompositionstextformatierungen

Im folgenden Beispiel wird das `textformatupdate`-Ereignis verwendet, um die Formatierung des Textes im bearbeitbaren Bereich zu aktualisieren. Beachten Sie, dass der Rückruf des Ereignis-Listeners in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungs-UI-Oberflächen zur Textkomposition verwendet werden.

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
  // Löschen Sie die Leinwand.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Rendern Sie den Text.
  ctx.fillText(editContext.text, TEXT_X, TEXT_Y);

  // Holen Sie sich die Textformate, die das IME-Fenster anwenden möchte.
  const formats = e.getTextFormats();

  // Iterieren Sie über die Textformate
  for (const format of formats) {
    const { rangeStart, rangeEnd, underlineStyle, underlineThickness } = format;

    const underlineXStart = ctx.measureText(
      editContext.text.substring(0, rangeStart),
    ).width;
    const underlineXEnd = ctx.measureText(
      editContext.text.substring(0, rangeEnd),
    ).width;
    const underlineY = TEXT_Y + 3;

    // Aus Gründen der Kürze zeichnet dieses Beispiel nur eine einfache Unterstreichung.
    // Sie sollten die Werte von underlineStyle und underlineThickness verwenden, um die Unterstreichung zu zeichnen.

    ctx.beginPath();
    ctx.moveTo(TEXT_X + underlineXStart, underlineY);
    ctx.lineTo(TEXT_X + underlineXEnd, underlineY);
    ctx.stroke();
  }
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
