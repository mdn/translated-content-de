---
title: "TrustedTypePolicy: createScriptURL()-Methode"
short-title: createScriptURL()
slug: Web/API/TrustedTypePolicy/createScriptURL
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createScriptURL()`**-Methode der [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Schnittstelle erstellt ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt mithilfe einer Richtlinie, die durch [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt wurde.

## Syntax

```js-nolint
createScriptURL(input)
createScriptURL(input, args)
```

### Parameter

- `input`
  - : Ein String, der den zu bereinigenden String gemäß der Richtlinie enthält.
- `args` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch die [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) dargestellte Funktion übergeben werden sollen.

### Rückgabewert

Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) keine Funktion enthält, die auf die Eingabe angewendet werden kann.

## Beispiele

Im untenstehenden Beispiel wird ein String, der die URL zu einer externen Ressource enthält, als Eingabe für `createScriptURL()` verwendet. Die Richtlinie kann überprüfen, ob dies eine erlaubte URL ist, bevor sie in eine Einsinkstelle eingesetzt wird, die dazu führen könnte, dass dieses externe Skript ausgeführt wird.

```js
const escaped = escapeURLPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
