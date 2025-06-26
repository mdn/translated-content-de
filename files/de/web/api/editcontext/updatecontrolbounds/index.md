---
title: "EditContext: updateControlBounds() Methode"
short-title: updateControlBounds()
slug: Web/API/EditContext/updateControlBounds
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`EditContext.updateControlBounds()`** Methode der [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle wird verwendet, um das Betriebssystem über die Position und Größe des bearbeitbaren Textbereichs des `EditContext` Objekts zu informieren.

Rufen Sie diese Methode auf, um dem Betriebssystem die Grenzen des aktuellen bearbeitbaren Bereichs mitzuteilen. Sie sollten diese Methode beim Initialisieren des EditContext und jedes Mal aufrufen, wenn sich die Grenzen des bearbeitbaren Bereichs ändern, zum Beispiel wenn die Webseite in der Größe verändert wird. Diese Grenzen werden verwendet, um plattformspezifische, bearbeitungsbezogene Benutzeroberflächen wie ein {{Glossary("Input_Method_Editor", "Input Method Editor")}} (IME) Fenster zu positionieren.

## Syntax

```js-nolint
updateControlBounds(controlBounds)
```

### Parameter

- `controlBounds`
  - : Ein [`DOMRect`](/de/docs/Web/API/DOMRect) Objekt, das die neuen Kontrollgrenzen darstellt.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Methode ohne Argumente aufgerufen wird oder wenn das bereitgestellte Argument kein [`DOMRect`](/de/docs/Web/API/DOMRect) Objekt ist.

## Beispiele

### Aktualisieren der Kontrollgrenzen bei der Initialisierung des Editors und bei Größenänderung des Fensters

Dieses Beispiel zeigt, wie die `updateControlBounds()` Methode verwendet wird, um der Plattform jederzeit mitzuteilen, wo sich der bearbeitbare Bereich befindet.

```css
#editor {
  border: 1px solid black;
  height: 50vw;
  width: 50vh;
}
```

```html
<div id="editor"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext();
editorEl.editContext = editContext;

function updateControlBounds() {
  const editorBounds = editorEl.getBoundingClientRect();
  editContext.updateControlBounds(editorBounds);
  console.log(
    `Updated control bounds to ${editorBounds.x}, ${editorBounds.y}, ${editorBounds.width}, ${editorBounds.height}`,
  );
}

// Update the control bounds now.
updateControlBounds();
// And when the page is resized.
window.addEventListener("resize", updateControlBounds);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle, zu der sie gehört.
