---
title: "EditContext: updateControlBounds()-Methode"
short-title: updateControlBounds()
slug: Web/API/EditContext/updateControlBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`EditContext.updateControlBounds()`**-Methode der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle wird verwendet, um das Betriebssystem über die Position und Größe des bearbeitbaren Textbereichs des `EditContext`-Objekts zu informieren.

Rufen Sie diese Methode auf, um dem Betriebssystem die Grenzen des derzeit bearbeitbaren Bereichs mitzuteilen. Sie sollten sie beim Initialisieren des EditContext und immer dann aufrufen, wenn sich die Grenzen des bearbeitbaren Bereichs ändern, z.B. wenn die Webseite in der Größe verändert wird. Diese Grenzen werden verwendet, um plattformabhängige, mit der Bearbeitung verbundene Benutzeroberflächen wie ein [Input Method Editor](/de/docs/Glossary/Input_Method_Editor) (IME)-Fenster zu positionieren.

## Syntax

```js-nolint
updateControlBounds(controlBounds)
```

### Parameter

- `controlBounds`
  - : Ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt, das die neuen Kontrollgrenzen darstellt.

### Ausnahmen

- Wenn kein Argument bereitgestellt wird, wird ein `TypeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- Wenn das bereitgestellte Argument kein [`DOMRect`](/de/docs/Web/API/DOMRect) ist, wird ein `TypeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Beispiele

### Aktualisieren der Kontrollgrenzen bei der Initialisierung des Editors und bei Fenstergrößeänderungen

Dieses Beispiel zeigt, wie die `updateControlBounds()`-Methode verwendet wird, um der Plattform jederzeit mitzuteilen, wo sich der bearbeitbare Bereich befindet.

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

- Die [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle, zu der sie gehört.
