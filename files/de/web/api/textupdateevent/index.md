---
title: TextUpdateEvent
slug: Web/API/TextUpdateEvent
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`TextUpdateEvent`**-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Text- oder Auswahlsaktualisierung in einem bearbeitbaren Textbereich darstellt, der an eine [`EditContext`](/de/docs/Web/API/EditContext)-Instanz angehängt ist.

Diese Schnittstelle erbt Eigenschaften von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram}}

## Konstruktor

- [`TextUpdateEvent()`](/de/docs/Web/API/TextUpdateEvent/TextUpdateEvent) {{experimental_inline}}
  - : Erstellt ein neues `TextUpdateEvent`-Objekt.

## Instanzeigenschaften

- [`TextUpdateEvent.updateRangeStart`](/de/docs/Web/API/TextUpdateEvent/updateRangeStart) {{readonlyinline}} {{experimental_inline}}
  - : Gibt den Index des ersten Zeichens im Bereich des aktualisierten Textes zurück.
- [`TextUpdateEvent.updateRangeEnd`](/de/docs/Web/API/TextUpdateEvent/updateRangeEnd) {{readonlyinline}} {{experimental_inline}}
  - : Gibt den Index des letzten Zeichens im Bereich des aktualisierten Textes zurück.
- [`TextUpdateEvent.text`](/de/docs/Web/API/TextUpdateEvent/text) {{readonlyinline}} {{experimental_inline}}
  - : Gibt den Text zurück, der im aktualisierten Bereich eingefügt wurde.
- [`TextUpdateEvent.selectionStart`](/de/docs/Web/API/TextUpdateEvent/selectionStart) {{readonlyinline}} {{experimental_inline}}
  - : Gibt den Index des ersten Zeichens im neuen Auswahlbereich nach der Aktualisierung zurück.
- [`TextUpdateEvent.selectionEnd`](/de/docs/Web/API/TextUpdateEvent/selectionEnd) {{readonlyinline}} {{experimental_inline}}
  - : Gibt den Index des letzten Zeichens im neuen Auswahlbereich nach der Aktualisierung zurück.

## Beispiele

### Rendern des aktualisierten Textes auf einer bearbeitbaren Leinwand

Im folgenden Beispiel wird die EditContext API verwendet, um bearbeitbaren Text in einem `<canvas>`-Element zu rendern, und das `textupdate`-Ereignis wird verwendet, um den Text zu rendern, wenn der Benutzer tippt.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
const editContext = new EditContext();
canvas.editContext = editContext;

function render() {
  // Clear the canvas.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Render the text.
  ctx.fillText(editContext.text, 10, 10);
}

editContext.addEventListener("textupdate", (e) => {
  // Re-render the editor view when the user is entering text.
  render();

  console.log(
    `The user entered ${e.text}. Rendering the entire text: ${editContext.text}`,
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
