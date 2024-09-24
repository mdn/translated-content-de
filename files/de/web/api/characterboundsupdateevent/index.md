---
title: CharacterBoundsUpdateEvent
slug: Web/API/CharacterBoundsUpdateEvent
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`CharacterBoundsUpdateEvent`**-Schnittstelle ist ein [DOM-Ereignis](/de/docs/Web/API/Event), das eine Anfrage des Betriebssystems darstellt, die Begrenzungen bestimmter Zeichen innerhalb eines bearbeitbaren Bereichs zu kennen, der an eine {{domxref("EditContext")}} Instanz angehängt ist.

Diese Schnittstelle erbt Eigenschaften von {{domxref("Event")}}.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent", "CharacterBoundsUpdateEvent()")}} {{experimental_inline}}
  - : Erstellt ein neues `CharacterBoundsUpdateEvent`-Objekt.

## Instanz-Eigenschaften

- {{domxref('CharacterBoundsUpdateEvent.rangeStart')}} {{readonlyinline}} {{experimental_inline}}
  - : Der Offset des ersten Zeichens innerhalb des bearbeitbaren Bereichstextes, für den das Betriebssystem die Begrenzungen benötigt.
- {{domxref('CharacterBoundsUpdateEvent.rangeEnd')}} {{readonlyinline}} {{experimental_inline}}
  - : Der Offset des letzten Zeichens innerhalb des bearbeitbaren Bereichstextes, für den das Betriebssystem die Begrenzungen benötigt.

## Beispiele

### Aktualisieren der Zeichenbegrenzungen bei Bedarf

Dieses Beispiel zeigt, wie das `characterboundsupdate`-Ereignis und die `updateCharacterBounds`-Methode verwendet werden, um das Betriebssystem über die benötigten Zeichenbegrenzungen zu informieren. Beachten Sie, dass der Rückruf des Ereignis-Listeners nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungsoberflächen verwendet werden, um Text zu komponieren.

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
  // Messen Sie die Breite vom Beginn des Textes bis zum Zeichen.
  const widthBeforeChar = ctx.measureText(
    editContext.text.substring(0, offset),
  ).width;

  // Messen Sie die Zeichenbreite.
  const charWidth = ctx.measureText(editContext.text[offset]).width;

  const charX = canvas.offsetLeft + widthBeforeChar;
  const charY = canvas.offsetTop;

  // Geben Sie ein DOMRect zurück, das die Zeichenbegrenzungen darstellt.
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

  // Aktualisieren Sie die Zeichenbegrenzungen in der EditContext-Instanz.
  editContext.updateCharacterBounds(e.rangeStart, charBounds);

  console.log(
    "Die benötigten Zeichenbegrenzungen sind",
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
