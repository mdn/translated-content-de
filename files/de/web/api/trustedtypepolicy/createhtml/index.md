---
title: "TrustedTypePolicy: createHTML() Methode"
short-title: createHTML()
slug: Web/API/TrustedTypePolicy/createHTML
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createHTML()`**-Methode der [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Schnittstelle erstellt ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt mithilfe einer Richtlinie, die durch [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt wurde.

## Syntax

```js-nolint
createHTML(input)
createHTML(input, args)
```

### Parameter

- `input`
  - : Ein String, der die zu sanitisierende Zeichenkette durch die Richtlinie enthält.
- `args` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) dargestellte Funktion übergeben werden.

### Rückgabewert

Ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) keine Funktion enthält, die auf dem Eingabewert ausgeführt werden soll.

## Beispiele

Im untenstehenden Beispiel wird ein String, der ein potenziell gefährliches Skript enthält, als Eingabe für `createHTML()` verwendet. Gefährlicher Code, der von einem Benutzer eingefügt wird, könnte dann vor der Einfügung in ein Injektionsziel gesäubert werden.

```js
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
