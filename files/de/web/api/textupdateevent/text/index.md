---
title: "TextUpdateEvent: text-Eigenschaft"
short-title: text
slug: Web/API/TextUpdateEvent/text
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die schreibgeschützte **`TextUpdateEvent.text`**-Eigenschaft enthält den Text, der im aktualisierten Bereich eines `textupdate`-Ereignisses eines [`EditContext`](/de/docs/Web/API/EditContext) eingefügt wurde.

## Wert

Ein {{jsxref("String")}}, der den Text enthält, der den zwischen den Indizes [`updateRangeStart`](/de/docs/Web/API/TextUpdateEvent/updateRangeStart) und [`updateRangeEnd`](/de/docs/Web/API/TextUpdateEvent/updateRangeEnd) enthaltenen Text ersetzt.

## Beispiele

### Verwendung von `textupdate`, um den eingefügten Text und den Ort anzuzeigen

```html
<div id="editor"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext();
editorEl.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  console.log(
    `The user inserted the text "${e.text}" at index ${e.updateRangeStart}.`,
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
