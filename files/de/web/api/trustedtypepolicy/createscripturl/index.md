---
title: "TrustedTypePolicy: Methode createScriptURL()"
short-title: createScriptURL()
slug: Web/API/TrustedTypePolicy/createScriptURL
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createScriptURL()`**-Methode des [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Interfaces erstellt ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt mithilfe einer durch [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellten Richtlinie.

## Syntax

```js-nolint
createScriptURL(input)
createScriptURL(input, args)
```

### Parameter

- `input`
  - : Ein String, der den zu bereinigenden String durch die Richtlinie enthält.
- `args` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) repräsentierte Funktion übergeben werden.

### Rückgabewert

Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) keine Funktion zum Ausführen des Eingangs enthält.

## Beispiele

Im untenstehenden Beispiel wird ein String, der die URL zu einer externen Ressource enthält, als Eingabe für `createScriptURL()` verwendet. Die Richtlinie kann überprüfen, ob dies eine zulässige URL ist, bevor sie in eine Injektionssenke eingefügt wird, was dazu führen könnte, dass dieses externe Skript ausgeführt wird.

```js
const escaped = escapeURLPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
