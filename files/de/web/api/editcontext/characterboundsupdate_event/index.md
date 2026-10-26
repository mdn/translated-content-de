---
title: "EditContext: characterboundsupdate-Ereignis"
short-title: characterboundsupdate
slug: Web/API/EditContext/characterboundsupdate_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das Ereignis `characterboundsupdate` wird ausgelöst, wenn das Betriebssystem die Begrenzungen bestimmter Zeichen innerhalb des bearbeitbaren Textbereichs eines `EditContext`-Objekts benötigt.

Dies geschieht, wenn das Betriebssystem eine plattformspezifische Benutzeroberfläche für die Textbearbeitung anzeigen muss, beispielsweise ein Fenster für einen {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME).

Wenn das Ereignis `characterboundsupdate` ausgelöst wird, sollten Sie die Begrenzungen der Zeichen im Text berechnen und anschließend die Methode [`EditContext.updateCharacterBounds()`](/de/docs/Web/API/EditContext/updateCharacterBounds) aufrufen, um dem Betriebssystem die benötigten Informationen bereitzustellen.

Weitere Informationen dazu, wann und wie Sie das Ereignis `characterboundsupdate` verwenden, finden Sie in der Dokumentation zur Methode [`updateCharacterBounds`](/de/docs/Web/API/EditContext/updateCharacterBounds).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("characterboundsupdate", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncharacterboundsupdate = (event) => { }
```

## Ereignistyp

Ein [`CharacterBoundsUpdateEvent`](/de/docs/Web/API/CharacterBoundsUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Zeichenbegrenzungen bei Bedarf aktualisieren

Dieses Beispiel zeigt, wie Sie mit der Methode `updateCharacterBounds` die Zeichenbegrenzungen im `EditContext` eines `canvas`-Elements aktualisieren, wenn das Betriebssystem diese Informationen benötigt. Beachten Sie, dass die Callback-Funktion des Event-Listeners nur aufgerufen wird, wenn Text mithilfe eines IME-Fensters oder einer anderen plattformspezifischen Benutzeroberfläche für die Textbearbeitung eingegeben wird.

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
