---
title: "URL: username-Eigenschaft"
short-title: username
slug: Web/API/URL/username
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`username`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces ist ein String, der den Benutzernamen enthält, der vor dem Domainnamen angegeben ist.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username",
);
console.log(url.username); // Logs "anonymous"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.
