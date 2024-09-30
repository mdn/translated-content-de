---
title: "TrustedScript: toString()-Methode"
short-title: toString()
slug: Web/API/TrustedScript/toString
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`toString()`**-Methode der Schnittstelle [`TrustedScript`](/de/docs/Web/API/TrustedScript) gibt einen String zurück, der sicher in ein [Injection Sink](/de/docs/Web/API/Trusted_Types_API#injection_sinks) eingefügt werden kann.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das bereinigte Skript enthält.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types-Policy erstellt wurde. Die Methode `toString()` gibt einen String zurück, der sicher als Skript ausgeführt werden kann.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
