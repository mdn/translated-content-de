---
title: "URL: toString() Methode"
short-title: toString()
slug: Web/API/URL/toString
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`toString()`**-Methode des {{domxref("URL")}}-Interfaces gibt einen String zurück, der die gesamte URL enthält. Sie ist im Wesentlichen eine schreibgeschützte Version von {{domxref("URL.href")}}.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/de/docs/Web/API/URL/toString",
);
url.toString(); // sollte die URL als String zurückgeben
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("URL")}} Interface, zu dem es gehört.
