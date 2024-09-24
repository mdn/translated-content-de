---
title: "URL: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/URL/toJSON
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`toJSON()`**-Methode des {{domxref("URL")}}-Interfaces gibt einen String zurück, der eine serialisierte Version der URL enthält. In der Praxis scheint sie jedoch den gleichen Effekt wie {{domxref("URL.toString()")}} zu haben.

## Syntax

```js-nolint
toJSON()
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
url.toJSON(); // sollte die URL als String zurückgeben
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `URL.prototype.toJSON` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
