---
title: "EditContext: text-Eigenschaft"
short-title: text
slug: Web/API/EditContext/text
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`text`**-Eigenschaft des {{domxref("EditContext")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die den bearbeitbaren Inhalt des Elements darstellt.

## Wert

Ein String, der den aktuellen bearbeitbaren Inhalt des an das `EditContext`-Objekt gebundenen Elements enthält. Der anfängliche Wert ist der leere String.

Dieser String kann dem Wert der {{domxref("Node.textContent", "textContent")}}-Eigenschaft des dem `EditContext` zugeordneten DOM-Elements entsprechen oder nicht. Das zugeordnete Element könnte zum Beispiel ein `<canvas>`-Element sein, das keine `textContent`-Eigenschaft hat. Oder das zugeordnete Element könnte ein `<div>`-Element sein, das Text enthält, der sich von dem `EditContext.text`-Wert unterscheidet, um ein fortgeschritteneres Rendering vorzunehmen.

Die `text`-Eigenschaft des `EditContext`-Objekts kann als Modell für den bearbeitbaren Textbereich verwendet werden. Andere Eigenschaften des `EditContext`-Objekts, wie `selectionStart` und `selectionEnd`, beziehen sich auf Offsets innerhalb des `text`-Strings.

## Beispiele

### Verwendung von `text`, um den Text in einem bearbeitbaren Canvas darzustellen

Im folgenden Beispiel wird die EditContext-API verwendet, um den Text, den ein Benutzer in ein `<canvas>`-Element eingibt, darzustellen.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const ctx = canvas.getContext("2d");
const editContext = new EditContext();
canvas.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  // Wenn der Benutzer den Fokus auf dem <canvas> hat und Text eingibt,
  // wird dieses Ereignis ausgelöst und dient dazu, den Text neu darzustellen.
  console.log(
    `Der Benutzer hat den Text eingegeben: ${e.text}. Der gesamte EditContext-Text wird neu gerendert`,
  );
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(editContext.text, 10, 10);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
