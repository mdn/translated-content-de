---
title: "TrustedScript: toString() Methode"
short-title: toString()
slug: Web/API/TrustedScript/toString
l10n:
  sourceCommit: 3ceedbd90089cfb6970c9bf63ff9e6f3801fcbc5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`toString()`**-Methode der [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Schnittstelle gibt einen String zurück, der sicher in ein [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) eingefügt werden kann.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das bereinigte Skript enthält.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types-Richtlinie erstellt wurde. Die `toString()`-Methode gibt einen String zurück, der sicher als Skript ausgeführt werden kann.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
