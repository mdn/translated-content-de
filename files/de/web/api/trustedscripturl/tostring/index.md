---
title: "TrustedScriptURL: toString()-Methode"
short-title: toString()
slug: Web/API/TrustedScriptURL/toString
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`toString()`**-Methode der {{domxref("TrustedScriptURL")}}-Schnittstelle gibt einen String zurück, der sicher in eine [Injection-Senke](/de/docs/Web/API/Trusted_Types_API#injection_sinks) eingefügt werden kann.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der die bereinigte URL enthält

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types-Richtlinie erstellt wurde. Die `toString()`-Methode gibt einen String zurück, der sicher zum Laden eines Drittanbieter-Skripts verwendet werden kann.

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
