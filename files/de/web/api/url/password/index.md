---
title: "URL: password-Eigenschaft"
short-title: password
slug: Web/API/URL/password
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`password`**-Eigenschaft des {{domxref("URL")}} Interfaces ist ein String, der das Passwort enthält, das vor dem Domainnamen angegeben wurde.

Wenn es gesetzt wird, ohne zuerst die {{domxref("URL.username", "username")}}-Eigenschaft zu setzen, schlägt es stillschweigend fehl.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/de/docs/Web/API/URL/password",
);
console.log(url.password); // Gibt "flabada" aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das zugehörige {{domxref("URL")}} Interface.
