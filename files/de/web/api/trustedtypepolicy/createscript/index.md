---
title: "TrustedTypePolicy: createScript()-Methode"
short-title: createScript()
slug: Web/API/TrustedTypePolicy/createScript
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createScript()`**-Methode der [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Schnittstelle erstellt ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt mit einer von [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) eingerichteten Richtlinie.

## Syntax

```js-nolint
createScript(input)
createScript(input, args)
```

### Parameter

- `input`
  - : Ein String, der den zu sanitizierenden String gemäß der Richtlinie enthält.
- `args` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) dargestellte Funktion übergeben werden.

### Rückgabewert

Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) keine Funktion enthält, die auf dem Eingabewert ausgeführt werden soll.

## Beispiele

Im untenstehenden Beispiel wird ein String, der ein potenziell riskantes Skript enthält, als Eingabe für `createScript()` verwendet. Die Richtlinie kann dieses Skript sanitizen, bevor es in eine Injektionssenke eingefügt wird, die seine Ausführung ermöglichen könnte.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
