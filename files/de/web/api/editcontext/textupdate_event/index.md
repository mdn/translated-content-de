---
title: "EditContext: textupdate-Ereignis"
short-title: textupdate
slug: Web/API/EditContext/textupdate_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `textupdate`-Ereignis der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle wird ausgelöst, wenn Benutzer Änderungen am Text oder an der Auswahl in einem bearbeitbaren Bereich vornehmen, der mit einer `EditContext`-Instanz verknüpft ist.

Dieses Ereignis ermöglicht es, den aktualisierten Text und die Auswahl als Reaktion auf Benutzereingaben in der Benutzeroberfläche darzustellen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("textupdate", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ontextupdate = (event) => { }
```

## Ereignistyp

Ein [`TextUpdateEvent`](/de/docs/Web/API/TextUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Aktualisierten Text bei `textupdate` darstellen

Im folgenden Beispiel wird das `textupdate`-Ereignis der EditContext API verwendet, um den Text darzustellen, den Benutzer in ein bearbeitbares `<canvas>`-Element eingeben.

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
