---
title: "URL: toJSON() Methode"
short-title: toJSON()
slug: Web/API/URL/toJSON
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die **`toJSON()`** Methode der [`URL`](/de/docs/Web/API/URL) Schnittstelle
gibt einen String zurück, der eine serialisierte Version der URL enthält,
obwohl sie in der Praxis denselben Effekt wie
[`URL.toString()`](/de/docs/Web/API/URL/toString) zu haben scheint.

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
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/toString",
);
url.toJSON(); // should return the URL as a string
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `URL.prototype.toJSON` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
