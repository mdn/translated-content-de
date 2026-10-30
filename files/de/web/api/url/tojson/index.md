---
title: "URL: Methode toJSON()"
short-title: toJSON()
slug: Web/API/URL/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`URL`](/de/docs/Web/API/URL) gibt einen String zurück, der das `URL`-Objekt repräsentiert. Dies ist derselbe String, den [`URL.toString()`](/de/docs/Web/API/URL/toString) zurückgibt.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `URL`-Objekt angetroffen wird. Der serialisierte Wert kann anschließend mit dem Konstruktor [`URL()`](/de/docs/Web/API/URL/URL) innerhalb der Reviver-Funktion von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String.

## Beispiele

### toJSON() direkt aufrufen

Wenn `toJSON()` direkt aufgerufen wird, gibt die Methode einen String zurück, der die URL enthält.

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/toString",
);

const json = url.toJSON();
console.log(json); // https://developer.mozilla.org/en-US/docs/Web/API/URL/toString
console.log(typeof json); // "string"
```

### In einen JSON-String serialisieren

Das `URL`-Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(url));
```

Dadurch würde der folgende JSON-String ausgegeben, einschließlich der umschließenden doppelten Anführungszeichen, die zum Inhalt des Strings gehören:

```json
"https://developer.mozilla.org/en-US/docs/Web/API/URL/toString"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `URL.prototype.toJSON` in `core-js`](https://core-js.io/docs/features/web-standards/url)
