---
title: "TrustedTypePolicy: createScript()-Methode"
short-title: createScript()
slug: Web/API/TrustedTypePolicy/createScript
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createScript()`**-Methode des {{domxref("TrustedTypePolicy")}}-Interfaces erstellt ein {{domxref("TrustedScript")}}-Objekt unter Verwendung einer Richtlinie, die durch {{domxref("TrustedTypePolicyFactory.createPolicy()")}} erstellt wurde.

## Syntax

```js-nolint
createScript(input)
createScript(input, args)
```

### Parameter

- `input`
  - : Ein String, der den zu bereinigenden String durch die Richtlinie enthält.
- `args` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch die {{domxref("TrustedTypePolicy")}} dargestellte Funktion übergeben werden sollen.

### Rückgabewert

Ein {{domxref("TrustedScript")}}-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn {{domxref("TrustedTypePolicy")}} keine Funktion zum Ausführen auf dem Eingabewert enthält.

## Beispiele

Im folgenden Beispiel wird ein String, der ein potenziell riskantes Skript enthält, als Eingabe für `createScript()` verwendet. Die Richtlinie kann dieses Skript bereinigen, bevor es in einen Injektions-Sink eingefügt wird, der es zur Ausführung bringen könnte.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
