---
title: "EditContext: updateCharacterBounds()-Methode"
short-title: updateCharacterBounds()
slug: Web/API/EditContext/updateCharacterBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`EditContext.updateCharacterBounds()`**-Methode der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle sollte als Reaktion auf ein [`characterboundsupdate`](/de/docs/Web/API/EditContext/characterboundsupdate_event)-Ereignis aufgerufen werden, um das Betriebssystem über die Position und Größe der Zeichen im `EditContext`-Objekt zu informieren.

Das `characterboundsupdate`-Ereignis ist das einzige Mal, dass Sie die `updateCharacterBounds()`-Methode aufrufen müssen.

Die Informationen zu den Zeichenbegrenzungen werden dann vom Betriebssystem verwendet, um das Fenster des [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME) korrekt zu positionieren, wenn dies erforderlich ist. Dies ist besonders wichtig in Situationen, in denen das Betriebssystem die Position und Größe der Zeichen nicht automatisch erkennen kann, wie z. B. beim Rendern von Text in einem `<canvas>`-Element.

### Plötzliche Sprünge der IME-Fensterposition vermeiden

Das synchrone Berechnen der Zeichenbegrenzungen und Aufrufen von `updateCharacterBounds` innerhalb des `characterboundsupdate`-Ereignisses stellt sicher, dass das Betriebssystem die benötigten Informationen hat, wenn das IME-Fenster angezeigt wird. Falls Sie `updateCharacterBounds()` nicht synchron innerhalb des Ereignishandlers aufrufen, könnten Benutzer beobachten, dass das IME-Fenster zunächst an der falschen Position angezeigt wird, bevor es an die richtige Position verschoben wird.

### Welche Zeichen einbezogen werden sollen

Die `updateCharacterBounds()`-Methode sollte nur aufgerufen werden, wenn das Betriebssystem anzeigt, dass es die Informationen benötigt, und nur für die Zeichen, die in der aktuellen IME-Zusammensetzung enthalten sind.

Das an den `characterboundsupdate`-Ereignishandler übergebene Ereignisobjekt enthält die Eigenschaften `rangeStart` und `rangeEnd`, die den Bereich der Zeichen angeben, die aktuell zusammengestellt werden. Die `updateCharacterBounds()`-Methode sollte nur für die Zeichen in diesem Bereich aufgerufen werden.

## Syntax

```js-nolint
updateCharacterBounds(rangeStart, characterBounds)
```

### Parameter

- `rangeStart`
  - : Eine Zahl, die den Anfang des Textbereichs darstellt, für den die Zeichenbegrenzungen bereitgestellt werden.
- `characterBounds`
  - : Ein {{jsxref("Array")}}, das [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekte enthält, die die Zeichenbegrenzungen darstellen.

### Ausnahmen

- Wenn weniger als zwei Argumente angegeben werden, wird eine `TypeError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- Wenn `rangeStart` keine Zahl ist oder `characterBounds` nicht iterierbar ist, wird eine `TypeError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Beispiele

### Aktualisieren der Zeichenbegrenzungen bei Bedarf

Dieses Beispiel zeigt, wie die `updateCharacterBounds`-Methode verwendet wird, um die Zeichenbegrenzungen im `EditContext` eines `<canvas>`-Elements zu aktualisieren, wenn das Betriebssystem angibt, dass es die Informationen benötigt. Beachten Sie, dass der `characterboundsupdate`-Ereignis-Listener-Callback in diesem Beispiel nur aufgerufen wird, wenn ein IME-Fenster oder andere plattformabhängige Bearbeitungs-UI-Oberflächen verwendet werden, um Text zusammenzusetzen.

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

- Die [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle, zu der es gehört.
