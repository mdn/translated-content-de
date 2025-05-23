---
title: CharacterBoundsUpdateEvent
slug: Web/API/CharacterBoundsUpdateEvent
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das **`CharacterBoundsUpdateEvent`**-Interface ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Anfrage des Betriebssystems darstellt, um die Grenzen bestimmter Zeichen innerhalb eines bearbeitbaren Bereichs zu kennen, der einer [`EditContext`](/de/docs/Web/API/EditContext)-Instanz zugeordnet ist.

Dieses Interface erbt Eigenschaften von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram}}

## Konstruktor

- [`CharacterBoundsUpdateEvent()`](/de/docs/Web/API/CharacterBoundsUpdateEvent/CharacterBoundsUpdateEvent) {{experimental_inline}}
  - : Erstellt ein neues `CharacterBoundsUpdateEvent`-Objekt.

## Instanz-Eigenschaften

- [`CharacterBoundsUpdateEvent.rangeStart`](/de/docs/Web/API/CharacterBoundsUpdateEvent/rangeStart) {{readonlyinline}} {{experimental_inline}}
  - : Der Versatz des ersten Zeichens innerhalb des Textes des bearbeitbaren Bereichs, für den das Betriebssystem die Grenzen benötigt.
- [`CharacterBoundsUpdateEvent.rangeEnd`](/de/docs/Web/API/CharacterBoundsUpdateEvent/rangeEnd) {{readonlyinline}} {{experimental_inline}}
  - : Der Versatz des letzten Zeichens innerhalb des Textes des bearbeitbaren Bereichs, für den das Betriebssystem die Grenzen benötigt.

## Beispiele

### Aktualisieren der Zeichenbegrenzungen bei Bedarf

Dieses Beispiel zeigt, wie das `characterboundsupdate`-Ereignis und die `updateCharacterBounds`-Methode verwendet werden, um das Betriebssystem über die benötigten Zeichenbegrenzungen zu informieren. Beachten Sie, dass der Rückruf des Ereignis-Listeners nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungsoberflächen zur Texteingabe verwendet werden.

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
      .map(
        (bound) =>
          `(x: ${bound.x}, y: ${bound.y}, width: ${bound.width}, height: ${bound.height})`,
      )
      .join(", "),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
