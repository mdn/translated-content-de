---
title: "EditContext: textupdate Ereignis"
short-title: textupdate
slug: Web/API/EditContext/textupdate_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `textupdate` Ereignis der [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle wird ausgelöst, wenn der Benutzer Änderungen am Text oder der Auswahl eines bearbeitbaren Bereichs vorgenommen hat, der an eine `EditContext` Instanz angehängt ist.

Dieses Ereignis ermöglicht es, den aktualisierten Text und die Auswahl im UI als Reaktion auf Benutzereingaben darzustellen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("textupdate", (event) => { })

ontextupdate = (event) => { }
```

## Ereignistyp

Ein [`TextUpdateEvent`](/de/docs/Web/API/TextUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Rendering des aktualisierten Texts bei `textupdate`

Im folgenden Beispiel wird das `textupdate` Ereignis der EditContext API verwendet, um den Text darzustellen, den ein Benutzer in ein bearbeitbares `<canvas>` Element eingibt.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
const editContext = new EditContext();
canvas.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  // When the user has focus on the <canvas> and enters text,
  // this event is fired, and we use it to re-render the text.
  console.log(
    `The user entered the text: ${e.text} at ${e.updateRangeStart}. Re-rendering the full EditContext text`,
  );
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(editContext.text, 10, 10);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
