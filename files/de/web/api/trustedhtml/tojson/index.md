---
title: "TrustedHTML: Methode toJSON()"
short-title: toJSON()
slug: Web/API/TrustedHTML/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) gibt einen String zurück, der das `TrustedHTML`-Objekt repräsentiert. Es handelt sich um denselben String, den [`TrustedHTML.toString()`](/de/docs/Web/API/TrustedHTML/toString) zurückgibt.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `TrustedHTML`-Objekt vorkommt. Der serialisierte Wert kann anschließend mit der Methode [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) innerhalb des Revivers von {{jsxref("JSON.parse()")}} wieder konvertiert werden. Dabei wird die Transformation der Policy erneut auf den Wert angewendet.

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

Dieses Beispiel erstellt ein `TrustedHTML`-Objekt. Ein direkter Aufruf von `toJSON()` gibt den darin gespeicherten String zurück.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");

const json = escaped.toJSON();
console.log(json); // Same value as escaped.toString()
console.log(typeof json); // "string"
```

### In einen JSON-String serialisieren

Das `TrustedHTML`-Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(escaped));
```

Dadurch würde der folgende JSON-String ausgegeben, einschließlich der umschließenden doppelten Anführungszeichen, die Teil des Stringinhalts sind:

```json
"&lt;img src=x onerror=alert(1)>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
