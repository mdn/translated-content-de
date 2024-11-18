---
title: "EditContext: updateSelection() Methode"
short-title: updateSelection()
slug: Web/API/EditContext/updateSelection
l10n:
  sourceCommit: ab5aa440278a135b9932a071f9208f4c58b86d21
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`updateSelection()`** Methode des [`EditContext`](/de/docs/Web/API/EditContext)-Interfaces aktualisiert den internen Zustand der Auswahl innerhalb des bearbeitbaren Textkontexts. Diese Methode wird verwendet, um den Auswahlzustand zu aktualisieren, wenn der Benutzer mit der Textdarstellung im mit `EditContext` assoziierten Element interagiert, z. B. durch Klicken oder Ziehen der Maus oder durch Verwendung der Tastatur.

## Syntax

```js-nolint
updateSelection(start, end)
```

### Parameter

- `start`
  - : Eine Zahl, die den neuen Beginn der Auswahl darstellt.
- `end`
  - : Eine Zahl, die das neue Ende der Auswahl darstellt.

Wenn die Werte von `start` und `end` gleich sind, entspricht die Auswahl einem Text-Caret.

### Ausnahmen

- Wenn nur ein Argument bereitgestellt wird, wird ein `TypeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- Wenn eines der Argumente keine nicht-negative Zahl ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Beispiele

### Aktualisieren der Auswahl bei Benutzerinteraktion mit dem Text

Dieses Beispiel zeigt, wie die `updateSelection`-Methode verwendet wird, um die Auswahl im `EditContext` eines `canvas`-Elements zu aktualisieren, wenn die Pfeiltasten verwendet werden, um den Caret zu verschieben oder Text im bearbeitbaren Bereich auszuwählen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

canvas.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    const newPosition = Math.max(editContext.selectionStart - 1, 0);

    if (e.shiftKey) {
      editContext.updateSelection(newPosition, editContext.selectionEnd);
    } else {
      editContext.updateSelection(newPosition, newPosition);
    }
  } else if (e.key == "ArrowRight") {
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

- Das `EditContext`-Interface, zu dem es gehört.
