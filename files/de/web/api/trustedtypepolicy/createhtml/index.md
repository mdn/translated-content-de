---
title: "TrustedTypePolicy: createHTML()-Methode"
short-title: createHTML()
slug: Web/API/TrustedTypePolicy/createHTML
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createHTML()`**-Methode der [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Schnittstelle erstellt ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt mithilfe einer Richtlinie, die von [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt wurde.

## Syntax

```js-nolint
createHTML(input)
createHTML(input, args)
```

### Parameter

- `input`
  - : Ein String, der den von der Richtlinie zu bereinigenden Text enthält.
- `args` {{optional_inline}}
  - : Zusätzliche Argumente, die an die Funktion übergeben werden, die von [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) repräsentiert wird.

### Rückgabewert

Ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) keine Funktion enthält, die auf den Eingabewert angewendet werden kann.

## Beispiele

Im folgenden Beispiel wird ein String mit einem potenziell gefährlichen Skript als Eingabe für `createHTML()` verwendet. Gefährlicher Code, der von einem Benutzer eingefügt wird, könnte dann bereinigt werden, bevor er in irgendein Injection Sink eingefügt wird.

```js
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
