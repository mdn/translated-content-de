---
title: "TextUpdateEvent: text-Eigenschaft"
short-title: text
slug: Web/API/TextUpdateEvent/text
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`TextUpdateEvent.text`**-Eigenschaft ist schreibgeschützt und enthält den Text, der innerhalb des aktualisierten Bereichs eines {{domxref("EditContext")}} `textupdate`-Ereignisses eingefügt wurde.

## Wert

Ein {{jsxref("String")}}, der den Text enthält, der den Text zwischen den Indizes {{domxref("TextUpdateEvent/updateRangeStart", "updateRangeStart")}} und {{domxref("TextUpdateEvent/updateRangeEnd", "updateRangeEnd")}} ersetzt.

## Beispiele

### Verwendung von `textupdate`, um den eingefügten Text und dessen Position anzuzeigen

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