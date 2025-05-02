---
title: "EditContext: textupdate Ereignis"
short-title: textupdate
slug: Web/API/EditContext/textupdate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `textupdate` Ereignis der [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle wird ausgelöst, wenn der Benutzer Änderungen am Text oder an der Auswahl eines bearbeitbaren Bereichs vorgenommen hat, der mit einer `EditContext` Instanz verbunden ist.

Dieses Ereignis ermöglicht es, den aktualisierten Text und die Auswahl in der Benutzeroberfläche als Reaktion auf Benutzereingaben darzustellen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("textupdate", (event) => { })

ontextupdate = (event) => { }
```

## Ereignistyp

Ein [`TextUpdateEvent`](/de/docs/Web/API/TextUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`TextUpdateEvent.updateRangeStart`](/de/docs/Web/API/TextUpdateEvent/updateRangeStart) {{readonlyinline}}
  - : Gibt den Index des ersten Zeichens im Bereich des aktualisierten Textes zurück.
- [`TextUpdateEvent.updateRangeEnd`](/de/docs/Web/API/TextUpdateEvent/updateRangeEnd) {{readonlyinline}}
  - : Gibt den Index des letzten Zeichens im Bereich des aktualisierten Textes zurück.
- [`TextUpdateEvent.text`](/de/docs/Web/API/TextUpdateEvent/text) {{readonlyinline}}
  - : Gibt den Text zurück, der im aktualisierten Bereich eingefügt wurde.
- [`TextUpdateEvent.selectionStart`](/de/docs/Web/API/TextUpdateEvent/selectionStart) {{readonlyinline}}
  - : Gibt den Index des ersten Zeichens im neuen Auswahlbereich nach der Aktualisierung zurück.
- [`TextUpdateEvent.selectionEnd`](/de/docs/Web/API/TextUpdateEvent/selectionEnd) {{readonlyinline}}
  - : Gibt den Index des letzten Zeichens im neuen Auswahlbereich nach der Aktualisierung zurück.

## Beispiele

### Darstellung des aktualisierten Textes bei `textupdate`

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
