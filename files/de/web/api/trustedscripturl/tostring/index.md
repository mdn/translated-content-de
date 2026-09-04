---
title: "TrustedScriptURL: toString() Methode"
short-title: toString()
slug: Web/API/TrustedScriptURL/toString
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`toString()`**-Methode der [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Schnittstelle gibt einen String zurück, der sicher in ein [Injection-Sink](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) eingefügt werden kann.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die bereinigte URL enthält

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types-Policy erstellt wurde. Die `toString()`-Methode gibt einen String zurück, der sicher verwendet werden kann, um ein Drittanbieter-Skript zu laden.

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
