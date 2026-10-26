---
title: "URL: Methode toJSON()"
short-title: toJSON()
slug: Web/API/URL/toJSON
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`URL`](/de/docs/Web/API/URL) gibt einen String mit einer serialisierten Version der URL zurück. In der Praxis scheint sie jedoch denselben Effekt zu haben wie [`URL.toString()`](/de/docs/Web/API/URL/toString).

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

- [Polyfill für `URL.prototype.toJSON` in `core-js`](https://core-js.io/docs/features/web-standards/url)
