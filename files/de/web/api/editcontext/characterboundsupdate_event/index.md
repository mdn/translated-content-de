---
title: "EditContext: characterboundsupdate Ereignis"
short-title: characterboundsupdate
slug: Web/API/EditContext/characterboundsupdate_event
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Das `characterboundsupdate` Ereignis wird ausgelöst, wenn das Betriebssystem die Grenzen bestimmter Zeichen innerhalb eines bearbeitbaren Textbereichs des `EditContext`-Objekts wissen muss.

Dies tritt auf, wenn das Betriebssystem eine plattformabhängige bearbeitungsbezogene Benutzeroberfläche wie ein [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME)-Fenster anzeigen muss.

Wenn das `characterboundsupdate` Ereignis ausgelöst wird, sollten Sie die Zeichenbegrenzungen für den Text berechnen und dann die Methode [`EditContext.updateCharacterBounds()`](/de/docs/Web/API/EditContext/updateCharacterBounds) aufrufen, um dem Betriebssystem die benötigten Informationen bereitzustellen.

Siehe die Dokumentation der Methode [`updateCharacterBounds`](/de/docs/Web/API/EditContext/updateCharacterBounds) für weitere Informationen darüber, wann und wie das `characterboundsupdate` Ereignis verwendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("characterboundsupdate", (event) => {});

oncharacterboundsupdate = (event) => {};
```

## Ereignistyp

Ein [`CharacterBoundsUpdateEvent`](/de/docs/Web/API/CharacterBoundsUpdateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften stehen auch Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) zur Verfügung._

- [`CharacterBoundsUpdateEvent.rangeStart`](/de/docs/Web/API/CharacterBoundsUpdateEvent/rangeStart) {{readonlyinline}}
  - : Der Versatz des ersten Zeichens im bearbeitbaren Textbereich, für das das Betriebssystem die Grenzen benötigt.
- [`CharacterBoundsUpdateEvent.rangeEnd`](/de/docs/Web/API/CharacterBoundsUpdateEvent/rangeEnd) {{readonlyinline}}
  - : Der Versatz des letzten Zeichens im bearbeitbaren Textbereich, für das das Betriebssystem die Grenzen benötigt.

## Beispiele

### Aktualisieren der Zeichenbegrenzungen bei Bedarf

Dieses Beispiel zeigt, wie die Methode `updateCharacterBounds` verwendet wird, um die Zeichenbegrenzungen im `EditContext` eines `canvas`-Elements zu aktualisieren, wenn das Betriebssystem angibt, dass es die Informationen benötigt. Beachten Sie, dass der Ereignis-Listener-Callback nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungs-Oberflächen zur Textkomposition verwendet werden.

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
