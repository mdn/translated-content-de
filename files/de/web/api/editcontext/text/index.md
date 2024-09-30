---
title: "EditContext: text-Eigenschaft"
short-title: text
slug: Web/API/EditContext/text
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die schreibgeschützte **`text`**-Eigenschaft des [`EditContext`](/de/docs/Web/API/EditContext)-Interfaces repräsentiert den bearbeitbaren Inhalt des Elements.

## Wert

Ein String, der den aktuellen bearbeitbaren Inhalt des Elements enthält, das dem `EditContext`-Objekt zugeordnet ist. Sein Anfangswert ist der leere String.

Dieser String kann mit dem Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des DOM-Elements, das dem `EditContext` zugeordnet ist, übereinstimmen oder auch nicht. Das zugeordnete Element könnte zum Beispiel ein `<canvas>`-Element sein, das keine `textContent`-Eigenschaft hat. Oder das zugeordnete Element könnte ein `<div>`-Element sein, das Text enthält, der sich von dem `EditContext.text`-Wert unterscheidet, um fortgeschrittenes Rendering zu ermöglichen.

Die `text`-Eigenschaft des `EditContext`-Objekts kann als Modell für den bearbeitbaren Textbereich verwendet werden. Andere Eigenschaften des `EditContext`-Objekts, wie `selectionStart` und `selectionEnd`, beziehen sich auf Offsets innerhalb des `text`-Strings.

## Beispiele

### Verwendung von `text` zur Darstellung des Textes in einem bearbeitbaren Canvas

Im folgenden Beispiel wird die EditContext-API verwendet, um den Text, den ein Benutzer in einem `<canvas>`-Element eingibt, darzustellen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
const editContext = new EditContext();
canvas.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  // When the user has focus on the <canvas> and enters text,
  // this event is fired, and we use it to re-render the text.
  console.log(
    `The user entered the text: ${e.text}. Re-rendering the full EditContext text`,
  );
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(editContext.text, 10, 10);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
