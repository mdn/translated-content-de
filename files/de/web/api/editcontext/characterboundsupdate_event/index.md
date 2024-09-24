---
title: "EditContext: characterboundsupdate Ereignis"
short-title: characterboundsupdate
slug: Web/API/EditContext/characterboundsupdate_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `characterboundsupdate` Ereignis wird ausgelöst, wenn das Betriebssystem die Grenzen bestimmter Zeichen innerhalb des bearbeitbaren Textbereichs des `EditContext` Objekts kennen muss.

Dies geschieht, wenn das Betriebssystem eine plattformabhängige benutzerbezogene Bearbeitungsoberfläche wie ein {{glossary("Input Method Editor")}} (IME) Fenster anzeigen muss.

Wenn das `characterboundsupdate` Ereignis ausgelöst wird, sollten Sie die Zeichenbegrenzungen für den Text berechnen und dann die Methode {{domxref("EditContext.updateCharacterBounds()")}} aufrufen, um dem Betriebssystem die benötigten Informationen bereitzustellen.

Siehe die Dokumentation der Methode {{domxref("EditContext.updateCharacterBounds()", "updateCharacterBounds")}} für weitere Informationen darüber, wann und wie das `characterboundsupdate` Ereignis verwendet werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("characterboundsupdate", (event) => {});

oncharacterboundsupdate = (event) => {};
```

## Ereignistyp

Ein {{domxref("CharacterBoundsUpdateEvent")}}. Erbt von {{domxref("Event")}}.

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref('CharacterBoundsUpdateEvent.rangeStart')}} {{readonlyinline}}
  - : Der Offset des ersten Zeichens innerhalb des editierbaren Textbereichs, für das das Betriebssystem die Grenzen benötigt.
- {{domxref('CharacterBoundsUpdateEvent.rangeEnd')}} {{readonlyinline}}
  - : Der Offset des letzten Zeichens innerhalb des editierbaren Textbereichs, für das das Betriebssystem die Grenzen benötigt.

## Beispiele

### Aktualisierung der Zeichenbegrenzungen bei Bedarf

Dieses Beispiel zeigt, wie die `updateCharacterBounds` Methode verwendet wird, um die Zeichenbegrenzungen im `EditContext` eines `canvas` Elements zu aktualisieren, wenn das Betriebssystem die Informationen benötigt. Beachten Sie, dass der Ereignis-Listener-Callback nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungsoberflächen verwendet werden, um Text zu verfassen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const FONT_SIZE = 40;
const FONT = `${FONT_SIZE}px Arial`;

const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
ctx.font = FONT;

const editContext = new EditContext();
canvas.editContext = editContext;

function computeCharacterBound(offset) {
  // Measure the width from the start of the text to the character.
  const widthBeforeChar = ctx.measureText(
    editContext.text.substring(0, offset),
  ).width;

  // Measure the character width.
  const charWidth = ctx.measureText(editContext.text[offset]).width;

  const charX = canvas.offsetLeft + widthBeforeChar;
  const charY = canvas.offsetTop;

  // Return a DOMRect representing the character bounds.
  return DOMRect.fromRect({
    x: charX,
    y: charY - FONT_SIZE,
    width: charWidth,
    height: FONT_SIZE,
  });
}

editContext.addEventListener("characterboundsupdate", (e) => {
  const charBounds = [];
  for (let offset = e.rangeStart; offset < e.rangeEnd; offset++) {
    charBounds.push(computeCharacterBound(offset));
  }

  console.log("The required character bounds are", charBounds);
  editContext.updateCharacterBounds(e.rangeStart, charBounds);
});
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
