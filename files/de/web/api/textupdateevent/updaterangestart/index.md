---
title: "TextUpdateEvent: Eigenschaft updateRangeStart"
short-title: updateRangeStart
slug: Web/API/TextUpdateEvent/updateRangeStart
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`TextUpdateEvent.updateRangeStart`** gibt die Startposition des Textbereichs an, der im [`EditContext`](/de/docs/Web/API/EditContext)-Objekt ersetzt wird.

## Wert

Eine {{jsxref("Number")}}.

## Beispiele

### Verwenden von `textupdate`, um den eingefügten Text und die Position anzuzeigen

```html
<div id="editor"></div>
```

```js
const editorEl = document.getElementById("editor");
const editContext = new EditContext();
editorEl.editContext = editContext;

editContext.addEventListener("textupdate", (e) => {
  console.log(
    `The user inserted the text "${e.text}" between index ${e.updateRangeStart} and index ${e.updateRangeEnd}.`,
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
