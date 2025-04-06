---
title: "URL: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/URL/protocol
l10n:
  sourceCommit: 82acf2a065dc00a1bd0cbf5e73de696e1bedee91
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`protocol`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces ist ein String, der das Protokoll oder Schema der URL enthält, einschließlich des abschließenden `":"`.

Diese Eigenschaft kann festgelegt werden, um das Protokoll der URL zu ändern. Ein `":"` wird an den angegebenen String angehängt, falls nicht vorhanden. Das angegebene Schema muss mit dem Rest der URL kompatibel sein, um als gültig zu gelten.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol",
);
console.log(url.protocol); // Logs "https:"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.
