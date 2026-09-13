---
title: "TrustedScriptURL: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/TrustedScriptURL/toJSON
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`toJSON()`**-Methode der [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Schnittstelle gibt eine JSON-Darstellung der gespeicherten Daten zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der eine JSON-Darstellung der gespeicherten Daten enthält.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types-Richtlinie erstellt wurde. Die Methode `toString()` gibt einen String zurück, der sicher verwendet werden kann, um ein Drittanbieter-Skript zu laden.

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized.toJSON());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
