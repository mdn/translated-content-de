---
title: CharacterBoundsUpdateEvent
slug: Web/API/CharacterBoundsUpdateEvent
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das **`CharacterBoundsUpdateEvent`**-Interface ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Anfrage des Betriebssystems darstellt, um die Grenzen bestimmter Zeichen in einem bearbeitbaren Bereich zu ermitteln, der mit einer [`EditContext`](/de/docs/Web/API/EditContext)-Instanz verbunden ist.

Dieses Interface erbt Eigenschaften von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram}}

## Konstruktor

- [`CharacterBoundsUpdateEvent()`](/de/docs/Web/API/CharacterBoundsUpdateEvent/CharacterBoundsUpdateEvent) {{experimental_inline}}
  - : Erstellt ein neues `CharacterBoundsUpdateEvent`-Objekt.

## Instanzeigenschaften

- [`CharacterBoundsUpdateEvent.rangeStart`](/de/docs/Web/API/CharacterBoundsUpdateEvent/rangeStart) {{readonlyinline}} {{experimental_inline}}
  - : Der Versatz des ersten Zeichens innerhalb des Textes des bearbeitbaren Bereichs, für das das Betriebssystem die Grenzen benötigt.
- [`CharacterBoundsUpdateEvent.rangeEnd`](/de/docs/Web/API/CharacterBoundsUpdateEvent/rangeEnd) {{readonlyinline}} {{experimental_inline}}
  - : Der Versatz des letzten Zeichens innerhalb des Textes des bearbeitbaren Bereichs, für das das Betriebssystem die Grenzen benötigt.

## Beispiele

### Aktualisieren der Zeichenbegrenzungen bei Bedarf

Dieses Beispiel zeigt, wie das `characterboundsupdate`-Ereignis und die `updateCharacterBounds`-Methode verwendet werden, um das Betriebssystem über die erforderlichen Zeichenbegrenzungen zu informieren. Beachten Sie, dass der Rückruf des Ereignis-Listeners nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungsoberflächen zum Textverfassen verwendet werden.

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

  // Update the character bounds in the EditContext instance.
  editContext.updateCharacterBounds(e.rangeStart, charBounds);

  console.log(
    "The required character bounds are",
    charBounds
      .map((bound) => {
        return `(x: ${bound.x}, y: ${bound.y}, width: ${bound.width}, height: ${bound.height})`;
      })
      .join(", "),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
