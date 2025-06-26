---
title: "EditContext: updateSelection() Methode"
short-title: updateSelection()
slug: Web/API/EditContext/updateSelection
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`updateSelection()`**-Methode der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle aktualisiert den internen Zustand der Auswahl innerhalb des editierbaren Textkontexts. Diese Methode wird verwendet, um den Auswahlzustand zu aktualisieren, wenn der Benutzer mit der Textdarstellung im zugehörigen Element des `EditContext` interagiert, z. B. durch Klicken oder Ziehen der Maus oder durch die Verwendung der Tastatur.

## Syntax

```js-nolint
updateSelection(start, end)
```

### Parameter

- `start`
  - : Eine Zahl, die den neuen Auswahlbeginn darstellt.
- `end`
  - : Eine Zahl, die das neue Auswahlende darstellt. Wenn die Werte von `start` und `end` identisch sind, entspricht die Auswahl einem Caret.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Methode mit weniger als zwei Argumenten aufgerufen wird oder eines der Argumente keine nicht-negative Zahl ist.

## Beispiele

### Aktualisieren der Auswahl, wenn der Benutzer mit dem Text interagiert

Dieses Beispiel zeigt, wie die `updateSelection`-Methode verwendet wird, um die Auswahl im `EditContext` eines `canvas`-Elements zu aktualisieren, wenn die Pfeiltasten verwendet werden, um den Caret zu bewegen oder Text im editierbaren Bereich auszuwählen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

canvas.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    const newPosition = Math.max(editContext.selectionStart - 1, 0);

    if (e.shiftKey) {
      editContext.updateSelection(newPosition, editContext.selectionEnd);
    } else {
      editContext.updateSelection(newPosition, newPosition);
    }
  } else if (e.key === "ArrowRight") {
    const newPosition = Math.min(
      editContext.selectionEnd + 1,
      editContext.text.length,
    );

    if (e.shiftKey) {
      editContext.updateSelection(editContext.selectionStart, newPosition);
    } else {
      editContext.updateSelection(newPosition, newPosition);
    }
  }

  console.log(
    `The new EditContext selection is ${editContext.selectionStart}, ${editContext.selectionEnd}`,
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle, zu der sie gehört.
