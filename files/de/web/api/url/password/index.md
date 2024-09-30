---
title: "URL: password-Eigenschaft"
short-title: password
slug: Web/API/URL/password
l10n:
  sourceCommit: b8bda1c6c29b0c4c7432b76584e5438f4ac2905b
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`password`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces
ist ein String, der das vor dem Domainnamen angegebene Passwort enthält.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/password",
);
console.log(url.password); // Logs "flabada"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.
