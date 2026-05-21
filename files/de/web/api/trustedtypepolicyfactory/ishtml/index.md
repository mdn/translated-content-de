---
title: "TrustedTypePolicyFactory: isHTML() Methode"
short-title: isHTML()
slug: Web/API/TrustedTypePolicyFactory/isHTML
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`isHTML()`** Methode der Schnittstelle [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) gibt true zurück, wenn ihr ein gültiges [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekt übergeben wird.

> [!NOTE]
> Der Zweck der Funktionen `isHTML()`, [`isScript()`](/de/docs/Web/API/TrustedTypePolicyFactory/isScript) und [`isScriptURL()`](/de/docs/Web/API/TrustedTypePolicyFactory/isScriptURL) besteht darin zu überprüfen, ob das Objekt ein gültiges TrustedType-Objekt ist, das durch eine konfigurierte Richtlinie erstellt wurde.

## Syntax

```js-nolint
isHTML(value)
```

### Parameter

- `value`
  - : Ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekt.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der true ist, wenn das Objekt ein gültiges [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekt ist.

## Beispiele

Im folgenden Beispiel wurde die Konstante `html` durch eine Richtlinie erstellt, und daher gibt `isHTML()` true zurück. Im zweiten Beispiel wird versucht, ein Objekt zu fälschen, und im dritten handelt es sich um einen String. Beide werden false zurückgeben, wenn sie an `isHTML()` übergeben werden.

```js
const html = policy.createHTML("<div>");
console.log(trustedTypes.isHTML(html)); // true;

const fake = Object.create(TrustedHTML.prototype);
console.log(trustedTypes.isHTML(fake)); // false

console.log(trustedTypes.isHTML("<div>plain string</div>")); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
