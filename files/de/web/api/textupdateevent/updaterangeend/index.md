---
title: "TextUpdateEvent: updateRangeEnd-Eigenschaft"
short-title: updateRangeEnd
slug: Web/API/TextUpdateEvent/updateRangeEnd
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`TextUpdateEvent.updateRangeEnd`** schreibgeschützte Eigenschaft gibt die Endposition des Textbereichs an, der im {{domxref("EditContext")}}-Objekt ersetzt wird.

## Wert

Eine {{jsxref("Number")}}.

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
    `The user inserted the text "${e.text}" between index ${e.updateRangeStart} and index ${e.updateRangeEnd}.`,
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
