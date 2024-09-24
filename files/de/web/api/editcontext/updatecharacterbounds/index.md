---
title: "EditContext: Methode updateCharacterBounds()"
short-title: updateCharacterBounds()
slug: Web/API/EditContext/updateCharacterBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`EditContext.updateCharacterBounds()`** Methode der {{domxref("EditContext")}} Schnittstelle sollte als Reaktion auf ein {{domxref("EditContext.characterboundsupdate_event", "characterboundsupdate")}} Ereignis aufgerufen werden, um das Betriebssystem über die Position und Größe der Zeichen im `EditContext` Objekt zu informieren.

Das `characterboundsupdate` Ereignis ist der einzige Zeitpunkt, zu dem Sie die `updateCharacterBounds()` Methode aufrufen müssen.

Die Informationen zur Zeichenbegrenzung werden dann vom Betriebssystem verwendet, um das {{glossary("Input Method Editor")}} (IME) Fenster bei Bedarf korrekt zu positionieren. Dies ist besonders wichtig in Situationen, in denen das Betriebssystem die Position und Größe der Zeichen nicht automatisch erkennen kann, wie beim Rendern von Text in einem `<canvas>` Element.

### Vermeiden Sie plötzliche Sprünge in der Position des IME-Fensters

Das synchrone Berechnen der Zeichenbegrenzungen und das Aufrufen von `updateCharacterBounds` innerhalb des `characterboundsupdate` Ereignisses stellt sicher, dass das Betriebssystem die benötigten Informationen hat, wenn es das IME-Fenster anzeigt. Wenn Sie `updateCharacterBounds()` nicht synchron innerhalb des Ereignis-Handlers aufrufen, können Benutzer beobachten, dass das IME-Fenster an der falschen Position angezeigt wird, bevor es an die richtige Position verschoben wird.

### Welche Zeichen einzubeziehen sind

Die `updateCharacterBounds()` Methode sollte nur dann aufgerufen werden, wenn das Betriebssystem angibt, dass es die Informationen benötigt, und nur für die Zeichen, die in die aktuelle IME-Komposition einbezogen sind.

Das Ereignisobjekt, das an den `characterboundsupdate` Ereignis-Handler übergeben wird, enthält `rangeStart` und `rangeEnd` Eigenschaften, die den Bereich der derzeit komponierten Zeichen angeben. Die `updateCharacterBounds()` Methode sollte nur für die Zeichen in diesem Bereich aufgerufen werden.

## Syntax

```js-nolint
updateCharacterBounds(rangeStart, characterBounds)
```

### Parameter

- `rangeStart`
  - : Eine Zahl, die den Beginn des Textbereichs darstellt, für den Zeichenbegrenzungen bereitgestellt werden.
- `characterBounds`
  - : Ein {{jsxref("Array")}}, das {{domxref("DOMRect")}} Objekte enthält, die die Zeichenbegrenzungen repräsentieren.

### Ausnahmen

- Wenn weniger als zwei Argumente bereitgestellt werden, wird ein `TypeError` {{domxref("DOMException")}} ausgelöst.
- Wenn `rangeStart` keine Zahl ist oder `characterBounds` nicht iterierbar ist, wird ein `TypeError` {{domxref("DOMException")}} ausgelöst.

## Beispiele

### Aktualisieren der Zeichenbegrenzungen bei Bedarf

Dieses Beispiel zeigt, wie die `updateCharacterBounds` Methode verwendet wird, um die Zeichenbegrenzungen im `EditContext` eines `<canvas>` Elements zu aktualisieren, wenn das Betriebssystem angibt, dass es die Informationen benötigt. Beachten Sie, dass der `characterboundsupdate` Ereignis-Listener Callback in diesem Beispiel nur beim Verwenden eines IME-Fensters oder anderer plattformspezifischer Bearbeitungsoberflächen aufgerufen wird, um Text zu komponieren.

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

  editContext.updateCharacterBounds(e.rangeStart, charBounds);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{DOMxRef("EditContext")}} Schnittstelle, zu der es gehört.
