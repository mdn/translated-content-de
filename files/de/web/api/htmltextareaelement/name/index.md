---
title: "HTMLTextAreaElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLTextAreaElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`name`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces zeigt den Namen des {{HTMLElement("textarea")}}-Elements an. Sie spiegelt das [`name`](/de/docs/Web/HTML/Reference/Elements/textarea#name)-Attribut des Elements wider.

## Wert

Ein String, der den Namen des Elements darstellt.

## Beispiel

```js
const textareaElement = document.querySelector("#message");
console.log(`Element's name: ${textareaElement.name}`);
textareaElement.name = "response"; // sets or updates the element's name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.value`](/de/docs/Web/API/HTMLTextAreaElement/value)
- [`HTMLTextAreaElement.textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)
