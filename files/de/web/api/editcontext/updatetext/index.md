---
title: "EditContext: updateText() Methode"
short-title: updateText()
slug: Web/API/EditContext/updateText
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`updateText()`** Methode des [`EditContext`](/de/docs/Web/API/EditContext) Interfaces aktualisiert den internen Textinhalt eines `EditContext` Objekts.

Diese Methode muss nicht verwendet werden, wenn der Benutzer Text im zugehörigen Element eingibt. Das `EditContext` Objekt aktualisiert automatisch seinen internen Textinhalt und löst bei Bedarf [`textupdate`](/de/docs/Web/API/EditContext/textupdate_event) Ereignisse aus.

Diese Methode kann jedoch verwendet werden, wenn der Benutzer auf andere Weise mit dem Textinhalt interagiert, z. B. wenn Text aus der Zwischenablage eingefügt wird.

## Syntax

```js-nolint
updateText(rangeStart, rangeEnd, text)
```

### Parameter

- `rangeStart`
  - : Eine Zahl, die den Beginn des Textbereichs darstellt, der ersetzt werden soll.
- `rangeEnd`
  - : Eine Zahl, die das Ende des Textbereichs darstellt, der ersetzt werden soll.
- `text`
  - : Ein String, der den neuen Textinhalt darstellt.

### Rückgabewert

Kein (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Methode mit weniger als drei Argumenten aufgerufen wird.

## Beispiele

### Aktualisierung des Editors, wenn der Benutzer Text einfügt

Dieses Beispiel zeigt, wie die `updateText` Methode verwendet wird, um den Textinhalt im `EditContext` eines `<canvas>` Elements zu aktualisieren, wenn der Benutzer die <kbd>Strg</kbd>/<kbd>Cmd</kbd> + <kbd>V</kbd> Tastenkombination drückt, um Text einzufügen.

Das Beispiel verwendet auch die [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) Methode, um den Text aus der Zwischenablage zu lesen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");

const editContext = new EditContext();
canvas.editContext = editContext;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(editContext.text, 0, 40);
}

editContext.addEventListener("textupdate", (e) => {
  render();
});

canvas.addEventListener("keydown", async (e) => {
  if (e.key === "v" && (e.ctrlKey || e.metaKey)) {
    const pastedText = await navigator.clipboard.readText();
    console.log(
      `The user pasted the text: ${pastedText}. Updating the EditContext text.`,
    );

    editContext.updateText(
      editContext.selectionStart,
      editContext.selectionEnd,
      pastedText,
    );

    editContext.updateSelection(
      editContext.selectionStart + pastedText.length,
      editContext.selectionStart + pastedText.length,
    );

    render();
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`EditContext`](/de/docs/Web/API/EditContext) Interface, zu dem es gehört.
