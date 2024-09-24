---
title: "EditContext: Methode updateControlBounds()"
short-title: updateControlBounds()
slug: Web/API/EditContext/updateControlBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`EditContext.updateControlBounds()`**-Methode der {{domxref("EditContext")}}-Schnittstelle wird verwendet, um das Betriebssystem über die Position und Größe des bearbeitbaren Textbereichs des `EditContext`-Objekts zu informieren.

Sie sollten diese Methode aufrufen, um dem Betriebssystem die Grenzen des aktuellen bearbeitbaren Bereichs mitzuteilen. Dies sollte sowohl beim Initialisieren des EditContext als auch jedes Mal erfolgen, wenn sich die Grenzen des bearbeitbaren Bereichs ändern, zum Beispiel wenn die Webseite in der Größe angepasst wird. Diese Grenzen werden genutzt, um plattformspezifische, bearbeitungsbezogene Benutzeroberflächen wie ein {{glossary("Input Method Editor")}}-Fenster (IME) zu positionieren.

## Syntax

```js-nolint
updateControlBounds(controlBounds)
```

### Parameter

- `controlBounds`
  - : Ein {{domxref("DOMRect")}}-Objekt, das die neuen Kontrollgrenzen darstellt.

### Ausnahmen

- Wenn kein Argument angegeben wird, wird ein `TypeError` {{domxref("DOMException")}} ausgelöst.
- Wenn das angegebene Argument kein {{domxref("DOMRect")}} ist, wird ein `TypeError` {{domxref("DOMException")}} ausgelöst.

## Beispiele

### Aktualisieren der Kontrollgrenzen beim Initialisieren des Editors und bei Fenstergrößenänderung

Dieses Beispiel zeigt, wie Sie die `updateControlBounds()`-Methode verwenden, um der Plattform jederzeit mitzuteilen, wo sich der bearbeitbare Bereich befindet.

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

// Aktualisieren Sie jetzt die Kontrollgrenzen.
updateControlBounds();
// Und wenn die Seite in der Größe verändert wird.
window.addEventListener("resize", updateControlBounds);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{DOMxRef("EditContext")}}-Schnittstelle, zu der sie gehört.
