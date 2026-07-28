---
title: "EditContext: characterboundsupdate-Ereignis"
short-title: characterboundsupdate
slug: Web/API/EditContext/characterboundsupdate_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `characterboundsupdate`-Ereignis wird ausgelöst, wenn das Betriebssystem die Grenzen bestimmter Zeichen innerhalb des editierbaren Textbereichs des `EditContext`-Objekts ermitteln muss.

Dies geschieht, wenn das Betriebssystem eine plattformspezifische, textbearbeitungsbezogene Benutzeroberfläche anzeigen muss, wie zum Beispiel ein {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Fenster.

Wenn das `characterboundsupdate`-Ereignis ausgelöst wird, sollten Sie die Zeichenbegrenzungen für den Text berechnen und anschließend die Methode [`EditContext.updateCharacterBounds()`](/de/docs/Web/API/EditContext/updateCharacterBounds) aufrufen, um dem Betriebssystem die benötigten Informationen bereitzustellen.

Siehe die Dokumentation der Methode [`updateCharacterBounds`](/de/docs/Web/API/EditContext/updateCharacterBounds) für mehr Informationen darüber, wann und wie das `characterboundsupdate`-Ereignis verwendet werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("characterboundsupdate", (event) => { })

oncharacterboundsupdate = (event) => { }
```

## Ereignistyp

Ein [`CharacterBoundsUpdateEvent`](/de/docs/Web/API/CharacterBoundsUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Aktualisierung der Zeichenbegrenzungen bei Bedarf

Dieses Beispiel zeigt, wie die Methode `updateCharacterBounds` verwendet wird, um die Zeichenbegrenzungen im `EditContext` eines `canvas`-Elements zu aktualisieren, wenn das Betriebssystem angibt, dass es die Informationen benötigt. Beachten Sie, dass der Event Listener Callback nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische textbearbeitungsbezogene Benutzeroberflächen zur Textzusammenstellung verwendet werden.

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

## Browser-Kompatibilität

{{Compat}}
