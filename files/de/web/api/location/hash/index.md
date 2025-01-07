---
title: "Location: hash-Eigenschaft"
short-title: hash
slug: Web/API/Location/hash
l10n:
  sourceCommit: 6033c369db35bf1df34430cc375705e2d959fc0b
---

{{ APIRef("Location") }}

Die **`hash`**-Eigenschaft der [`Location`](/de/docs/Web/API/Location)-Schnittstelle gibt einen String zurück, der ein `'#'` gefolgt vom Fragment-Bezeichner der URL enthält — also die ID auf der Seite, auf die die URL zuzugreifen versucht.

Das Fragment ist nicht {{Glossary("Percent-encoding", "prozentkodiert")}}. Wenn die URL keinen Fragment-Bezeichner hat, enthält diese Eigenschaft einen leeren String, `""`.

## Wert

Ein String.

## Beispiele

Angenommen, der Benutzer hat `https://example.org#examples` aufgerufen, wird der folgende Code `#examples` protokollieren:

```js
const result = location.hash;
console.log(result);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
