---
title: "EditContext: updateCharacterBounds() Methode"
short-title: updateCharacterBounds()
slug: Web/API/EditContext/updateCharacterBounds
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`EditContext.updateCharacterBounds()`** Methode der [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle sollte als Reaktion auf ein [`characterboundsupdate`](/de/docs/Web/API/EditContext/characterboundsupdate_event) Ereignis aufgerufen werden, um das Betriebssystem über die Position und Größe der Zeichen im `EditContext` Objekt zu informieren.

Das `characterboundsupdate` Ereignis ist der einzige Zeitpunkt, an dem Sie die `updateCharacterBounds()` Methode aufrufen müssen.

Die Informationen zu den Zeichenbegrenzungen werden dann vom Betriebssystem verwendet, um das {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) Fenster bei Bedarf korrekt zu positionieren. Dies ist besonders wichtig in Situationen, in denen das Betriebssystem die Position und Größe der Zeichen nicht automatisch erkennen kann, wie beim Rendern von Text in einem `<canvas>` Element.

## Syntax

```js-nolint
updateCharacterBounds(rangeStart, characterBounds)
```

### Parameter

- `rangeStart`
  - : Eine Zahl, die den Beginn des Textbereichs darstellt, für den die Zeichenbegrenzungen angegeben werden.
- `characterBounds`
  - : Ein {{jsxref("Array")}} enthaltend [`DOMRect`](/de/docs/Web/API/DOMRect) Objekte, die die Zeichenbegrenzungen darstellen.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn die Methode mit weniger als zwei Argumenten aufgerufen wird oder wenn das erste Argument keine Zahl ist oder das zweite Argument nicht iterierbar ist (wie ein Array).

## Nutzungshinweise

### Vermeiden Sie plötzliche Sprünge in der IME-Fensterposition

Das Berechnen der Zeichenbegrenzungen und das synchrone Aufrufen von `updateCharacterBounds` innerhalb des `characterboundsupdate` Ereignisses stellt sicher, dass das Betriebssystem die benötigten Informationen hat, wenn es das IME-Fenster anzeigt. Wenn Sie `updateCharacterBounds()` nicht synchron innerhalb des Ereignishandlers aufrufen, können Nutzer beobachten, dass das IME-Fenster an der falschen Position angezeigt wird, bevor es an die korrekte Position verschoben wird.

### Welche Zeichen einzuschließen sind

Die `updateCharacterBounds()` Methode sollte nur aufgerufen werden, wenn das Betriebssystem angibt, dass es die Informationen benötigt, und nur für die Zeichen, die in der aktuellen IME-Komposition enthalten sind.

Das Ereignisobjekt, das an den `characterboundsupdate` Ereignishandler übergeben wird, enthält `rangeStart` und `rangeEnd` Eigenschaften, die den Bereich der Zeichen angeben, die derzeit komponiert werden. Die `updateCharacterBounds()` Methode sollte nur für die Zeichen in diesem Bereich aufgerufen werden.

## Beispiele

### Aktualisierung der Zeichenbegrenzungen bei Bedarf

Dieses Beispiel zeigt, wie die `updateCharacterBounds` Methode verwendet wird, um die Zeichenbegrenzungen im `EditContext` eines `<canvas>` Elements zu aktualisieren, wenn das Betriebssystem angibt, dass es die Informationen benötigt. Beachten Sie, dass der `characterboundsupdate` Ereignislistener-Callback in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungsoberflächen verwendet werden, um Text zu komponieren.

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

- Die [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle, zu der sie gehört.
