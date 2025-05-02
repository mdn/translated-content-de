---
title: "EditContext: characterboundsupdate-Ereignis"
short-title: characterboundsupdate
slug: Web/API/EditContext/characterboundsupdate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `characterboundsupdate`-Ereignis wird ausgelöst, wenn das Betriebssystem die Grenzen bestimmter Zeichen innerhalb des bearbeitbaren Textbereichs des `EditContext`-Objekts kennt.

Dies geschieht, wenn das Betriebssystem eine plattformspezifische, bearbeitungsbezogene Benutzeroberfläche anzeigen muss, wie beispielsweise ein {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME)-Fenster.

Wenn das `characterboundsupdate`-Ereignis ausgelöst wird, sollten Sie die Zeichenbegrenzungen für den Text berechnen und dann die Methode [`EditContext.updateCharacterBounds()`](/de/docs/Web/API/EditContext/updateCharacterBounds) aufrufen, um dem Betriebssystem die benötigten Informationen bereitzustellen.

Lesen Sie die Dokumentation der [`updateCharacterBounds`](/de/docs/Web/API/EditContext/updateCharacterBounds)-Methode, um mehr darüber zu erfahren, wann und wie das `characterboundsupdate`-Ereignis verwendet werden sollte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("characterboundsupdate", (event) => { })

oncharacterboundsupdate = (event) => { }
```

## Ereignistyp

Ein [`CharacterBoundsUpdateEvent`](/de/docs/Web/API/CharacterBoundsUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereignis-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`CharacterBoundsUpdateEvent.rangeStart`](/de/docs/Web/API/CharacterBoundsUpdateEvent/rangeStart) {{readonlyinline}}
  - : Der Versatz des ersten Zeichens innerhalb des bearbeitbaren Textes, für das das Betriebssystem die Grenzen benötigt.
- [`CharacterBoundsUpdateEvent.rangeEnd`](/de/docs/Web/API/CharacterBoundsUpdateEvent/rangeEnd) {{readonlyinline}}
  - : Der Versatz des letzten Zeichens innerhalb des bearbeitbaren Textes, für das das Betriebssystem die Grenzen benötigt.

## Beispiele

### Aktualisierung der Zeichenbegrenzungen bei Bedarf

Dieses Beispiel zeigt, wie die `updateCharacterBounds`-Methode verwendet wird, um die Zeichenbegrenzungen im `EditContext` eines `canvas`-Elements zu aktualisieren, wenn das Betriebssystem angibt, dass es diese Informationen benötigt. Beachten Sie, dass der Rückruf des Ereignis-Listeners nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungsoberflächen verwendet werden, um Text zu komponieren.

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
