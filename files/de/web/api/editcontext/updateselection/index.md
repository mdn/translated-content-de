---
title: "EditContext: updateSelection() Methode"
short-title: updateSelection()
slug: Web/API/EditContext/updateSelection
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`updateSelection()`** Methode der [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle aktualisiert den internen Zustand der Auswahl innerhalb des bearbeitbaren Textkontextes. Diese Methode wird verwendet, um den Auswahlzustand zu aktualisieren, wenn der Benutzer mit der Textdarstellung im zugehörigen Element des `EditContext` interagiert, z.B. durch Klicken oder Ziehen mit der Maus oder durch die Verwendung der Tastatur.

## Syntax

```js-nolint
updateSelection(start, end)
```

### Parameter

- `start`
  - : Eine Zahl, die den neuen Anfang der Auswahl darstellt.
- `end`
  - : Eine Zahl, die das neue Ende der Auswahl darstellt.

Wenn die Werte für `start` und `end` gleich sind, entspricht die Auswahl einem Caret.

### Ausnahmen

- Wird nur ein Argument bereitgestellt, wird ein `TypeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- Wenn eines der Argumente keine nicht-negative Zahl ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Beispiele

### Aktualisierung der Auswahl, wenn der Benutzer mit dem Text interagiert

Dieses Beispiel zeigt, wie die `updateSelection` Methode verwendet wird, um die Auswahl im `EditContext` eines `canvas` Elements zu aktualisieren, wenn die Pfeiltasten verwendet werden, um den Cursor zu bewegen oder Text im bearbeitbaren Bereich auszuwählen.

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
