---
title: "EditContext: updateSelection() Methode"
short-title: updateSelection()
slug: Web/API/EditContext/updateSelection
l10n:
  sourceCommit: 79e78471738880d7ca13c1cd0d7ce7893151d086
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`updateSelection()`**-Methode der {{domxref("EditContext")}}-Schnittstelle aktualisiert den internen Zustand der Auswahl im bearbeitbaren Textkontext. Diese Methode wird verwendet, um den Auswahlzustand zu aktualisieren, wenn der Benutzer mit der Textanzeige im dem `EditContext` zugeordneten Element interagiert, beispielsweise durch Klicken oder Ziehen der Maus oder durch Verwendung der Tastatur.

## Syntax

```js-nolint
updateSelection(start, end)
```

### Parameter

- `start`
  - : Eine Zahl, die den neuen Anfang der Auswahl darstellt.
- `end`
  - : Eine Zahl, die das neue Ende der Auswahl darstellt.

Wenn die Werte `start` und `end` gleich sind, entspricht die Auswahl einem Karet.

### Ausnahmen

- Wenn nur ein Argument angegeben ist, wird ein `TypeError` {{domxref("DOMException")}} ausgelöst.
- Wenn eines der Argumente keine positive Zahl ist, wird eine {{domxref("DOMException")}} ausgelöst.
- Wenn `start` größer als `end` ist, wird eine {{domxref("DOMException")}} ausgelöst.

## Beispiele

### Aktualisierung der Auswahl bei Benutzerinteraktion mit dem Text

Dieses Beispiel zeigt, wie die `updateSelection`-Methode verwendet wird, um die Auswahl im `EditContext` eines `canvas`-Elements zu aktualisieren, wenn die Pfeiltasten benutzt werden, um den Cursor zu bewegen oder Text im bearbeitbaren Bereich auszuwählen.

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

- Die {{DOMxRef("EditContext")}}-Schnittstelle, zu der es gehört.
