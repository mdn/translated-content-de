---
title: "TrustedTypePolicy: Methode createScript()"
short-title: createScript()
slug: Web/API/TrustedTypePolicy/createScript
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createScript()`**-Methode des [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Interfaces erstellt ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt mithilfe einer Richtlinie, die von [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt wurde.

## Syntax

```js-nolint
createScript(input)
createScript(input, args)
```

### Parameter

- `input`
  - : Ein String, der die zu bereinigende Zeichenkette durch die Richtlinie enthält.
- `args` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) repräsentierte Funktion übergeben werden.

### Rückgabewert

Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) keine Funktion enthält, die auf dem Eingang ausgeführt werden kann.

## Beispiele

Im folgenden Beispiel wird ein String, der ein potenziell riskantes Skript enthält, als Eingabe für `createScript()` verwendet. Die Richtlinie kann dieses Skript bereinigen, bevor es in eine Spritzstelle eingefügt wird, die es möglicherweise ausführen könnte.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
