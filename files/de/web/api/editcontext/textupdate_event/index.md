---
title: "EditContext: textupdate Ereignis"
short-title: textupdate
slug: Web/API/EditContext/textupdate_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `textupdate` Ereignis der {{domxref("EditContext")}}-Schnittstelle wird ausgelöst, wenn der Benutzer Änderungen am Text oder an der Auswahl eines bearbeitbaren Bereichs vorgenommen hat, der an eine `EditContext`-Instanz gebunden ist.

Dieses Ereignis ermöglicht es, den aktualisierten Text und die Auswahl in der Benutzeroberfläche als Reaktion auf Benutzereingaben darzustellen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("textupdate", (event) => {});

ontextupdate = (event) => {};
```

## Ereignistyp

Ein {{domxref("TextUpdateEvent")}}. Erbt von {{domxref("Event")}}.

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind auch Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref('TextUpdateEvent.updateRangeStart')}} {{readonlyinline}}
  - : Gibt den Index des ersten Zeichens im Bereich des aktualisierten Textes zurück.
- {{domxref('TextUpdateEvent.updateRangeEnd')}} {{readonlyinline}}
  - : Gibt den Index des letzten Zeichens im Bereich des aktualisierten Textes zurück.
- {{domxref('TextUpdateEvent.text')}} {{readonlyinline}}
  - : Gibt den im aktualisierten Bereich eingefügten Text zurück.
- {{domxref('TextUpdateEvent.selectionStart')}} {{readonlyinline}}
  - : Gibt nach dem Update den Index des ersten Zeichens im neuen Auswahlbereich zurück.
- {{domxref('TextUpdateEvent.selectionEnd')}} {{readonlyinline}}
  - : Gibt nach dem Update den Index des letzten Zeichens im neuen Auswahlbereich zurück.

## Beispiele

### Darstellung des aktualisierten Textes bei `textupdate`

Im folgenden Beispiel wird das `textupdate` Ereignis der EditContext API verwendet, um den Text darzustellen, den ein Benutzer in einem bearbeitbaren `<canvas>`-Element eingibt.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
const editContext = new EditContext();
canvas.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  // Wenn der Benutzer den Fokus auf dem <canvas> hat und Text eingibt,
  // wird dieses Ereignis ausgelöst, und wir verwenden es, um den Text neu zu rendern.
  console.log(
    `Der Benutzer gab den Text ein: ${e.text} an ${e.updateRangeStart}. Der gesamte EditContext-Text wird neu gerendert.`,
  );
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(editContext.text, 10, 10);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
