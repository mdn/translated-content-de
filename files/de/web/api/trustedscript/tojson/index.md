---
title: "TrustedScript: Methode toJSON()"
short-title: toJSON()
slug: Web/API/TrustedScript/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`TrustedScript`](/de/docs/Web/API/TrustedScript) gibt einen String zurück, der das `TrustedScript`-Objekt repräsentiert. Dies ist derselbe String, den [`TrustedScript.toString()`](/de/docs/Web/API/TrustedScript/toString) zurückgibt.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `TrustedScript`-Objekt gefunden wird. Der serialisierte Wert kann anschließend mit der Methode [`TrustedTypePolicy.createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript) innerhalb des Revivers von {{jsxref("JSON.parse()")}} zurückkonvertiert werden. Dabei wird die Transformation der Policy erneut auf den Wert angewendet.

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

Dieses Beispiel erstellt ein `TrustedScript`-Objekt. Ein direkter Aufruf von `toJSON()` gibt dessen gespeicherten String-Wert zurück.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");

const json = sanitized.toJSON();
console.log(json); // Same value as sanitized.toString()
console.log(typeof json); // "string"
```

### In einen JSON-String serialisieren

Das `TrustedScript`-Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(sanitized));
```

Dadurch würde der folgende JSON-String ausgegeben, einschließlich der umschließenden doppelten Anführungszeichen, die Teil des String-Inhalts sind:

```json
"eval('2 + 2')"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
