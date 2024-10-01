---
title: "EditContext: updateCharacterBounds() Methode"
short-title: updateCharacterBounds()
slug: Web/API/EditContext/updateCharacterBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`EditContext.updateCharacterBounds()`** Methode der [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle sollte als Reaktion auf ein [`characterboundsupdate`](/de/docs/Web/API/EditContext/characterboundsupdate_event) Ereignis aufgerufen werden, um das Betriebssystem über die Position und Größe der Zeichen im `EditContext` Objekt zu informieren.

Das `characterboundsupdate` Ereignis ist die einzige Gelegenheit, bei der Sie die `updateCharacterBounds()` Methode aufrufen müssen.

Die Informationen zu den Zeichenbegrenzungen werden dann vom Betriebssystem verwendet, um das Fenster des {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) korrekt zu positionieren, wenn dies erforderlich ist. Dies ist besonders wichtig in Situationen, in denen das Betriebssystem die Position und Größe der Zeichen nicht automatisch erkennen kann, wie z.B. beim Rendern von Text in einem `<canvas>` Element.

### Plötzliche Sprünge der IME-Fensterposition vermeiden

Die Berechnung der Zeichenbegrenzungen und der synchrone Aufruf von `updateCharacterBounds` innerhalb des `characterboundsupdate` Ereignisses stellt sicher, dass das Betriebssystem die benötigten Informationen hat, wenn es das IME-Fenster anzeigt. Wenn Sie `updateCharacterBounds()` nicht synchron innerhalb des Ereignis-Handlers aufrufen, können Benutzer beobachten, dass das IME-Fenster zunächst an der falschen Position angezeigt wird, bevor es an die richtige Position verschoben wird.

### Welche Zeichen einzubeziehen sind

Die `updateCharacterBounds()` Methode sollte nur aufgerufen werden, wenn das Betriebssystem angibt, dass es die Informationen benötigt, und nur für die Zeichen, die in der aktuellen IME-Komposition enthalten sind.

Das an den `characterboundsupdate` Ereignis-Handler übergebene Ereignisobjekt enthält `rangeStart` und `rangeEnd` Eigenschaften, die den Bereich der derzeit komponierten Zeichen angeben. Die `updateCharacterBounds()` Methode sollte nur für die Zeichen in diesem Bereich aufgerufen werden.

## Syntax

```js-nolint
updateCharacterBounds(rangeStart, characterBounds)
```

### Parameter

- `rangeStart`
  - : Eine Zahl, die den Beginn des Textbereichs angibt, für den Zeichenbegrenzungen bereitgestellt werden.
- `characterBounds`
  - : Ein {{jsxref("Array")}}, das [`DOMRect`](/de/docs/Web/API/DOMRect) Objekte enthält, die die Zeichenbegrenzungen darstellen.

### Ausnahmen

- Wenn weniger als zwei Argumente bereitgestellt werden, wird ein `TypeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- Wenn `rangeStart` keine Zahl ist oder `characterBounds` nicht iterierbar ist, wird ein `TypeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Beispiele

### Aktualisierung der Zeichenbegrenzungen bei Bedarf

Dieses Beispiel zeigt, wie die `updateCharacterBounds` Methode verwendet wird, um die Zeichenbegrenzungen im `EditContext` eines `<canvas>` Elements zu aktualisieren, wenn das Betriebssystem angibt, dass es die Informationen benötigt. Beachten Sie, dass der `characterboundsupdate` Ereignis-Listener-Callback in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformspezifische Bearbeitungsoberflächen zum Komponieren von Text verwendet werden.

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
