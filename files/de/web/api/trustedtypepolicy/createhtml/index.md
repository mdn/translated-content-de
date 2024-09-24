---
title: "TrustedTypePolicy: createHTML() Methode"
short-title: createHTML()
slug: Web/API/TrustedTypePolicy/createHTML
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createHTML()`**-Methode der {{domxref("TrustedTypePolicy")}}-Schnittstelle erstellt ein {{domxref("TrustedHTML")}}-Objekt unter Verwendung einer Richtlinie, die von {{domxref("TrustedTypePolicyFactory.createPolicy()")}} erstellt wurde.

## Syntax

```js-nolint
createHTML(input)
createHTML(input, args)
```

### Parameter

- `input`
  - : Ein String, der den durch die Richtlinie zu bereinigenden Text enthält.
- `args` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch {{domxref("TrustedTypePolicy")}} dargestellte Funktion übergeben werden.

### Rückgabewert

Ein {{domxref("TrustedHTML")}}-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn {{domxref("TrustedTypePolicy")}} keine Funktion zum Ausführen der Eingabe enthält.

## Beispiele

Im folgenden Beispiel wird ein String, der ein potenziell gefährliches Skript enthält, als Eingabe für `createHTML()` verwendet. Gefährlicher Code, der von einem Benutzer eingefügt wird, könnte dann vor der Einfügung in jede Injektionsstelle bereinigt werden.

```js
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
