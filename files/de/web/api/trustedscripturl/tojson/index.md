---
title: "TrustedScriptURL: Methode toJSON()"
short-title: toJSON()
slug: Web/API/TrustedScriptURL/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) gibt einen String zurück, der das `TrustedScriptURL`-Objekt repräsentiert. Dies ist derselbe String, den [`TrustedScriptURL.toString()`](/de/docs/Web/API/TrustedScriptURL/toString) zurückgibt.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `TrustedScriptURL`-Objekt auftritt. Der serialisierte Wert kann anschließend mit der Methode [`TrustedTypePolicy.createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL) innerhalb des Revivers von {{jsxref("JSON.parse()")}} zurückkonvertiert werden. Dabei wird die Transformation der Policy erneut auf den Wert angewendet.

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

Dieses Beispiel erstellt ein `TrustedScriptURL`-Objekt. Ein direkter Aufruf von `toJSON()` gibt den darin gespeicherten Stringwert zurück.

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);

const json = sanitized.toJSON();
console.log(json); // Same value as sanitized.toString()
console.log(typeof json); // "string"
```

### In einen JSON-String serialisieren

Das `TrustedScriptURL`-Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(sanitized));
```

Dabei würde der folgende JSON-String ausgegeben, einschließlich der umgebenden doppelten Anführungszeichen, die zum Inhalt des Strings gehören:

```json
"https://example.com/my-script.js"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
