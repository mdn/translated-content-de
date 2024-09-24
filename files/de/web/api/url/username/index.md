---
title: "URL: username-Eigenschaft"
short-title: username
slug: Web/API/URL/username
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`username`**-Eigenschaft des {{domxref("URL")}}-Interfaces
ist ein String, der den Benutzernamen enthält, der vor dem Domainnamen angegeben wird.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/de/docs/Web/API/URL/username",
);
console.log(url.username); // Gibt "anonymous" aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das zugehörige {{domxref("URL")}}-Interface.
