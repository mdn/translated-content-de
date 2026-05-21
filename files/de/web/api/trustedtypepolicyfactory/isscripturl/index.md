---
title: "TrustedTypePolicyFactory: isScriptURL()-Methode"
short-title: isScriptURL()
slug: Web/API/TrustedTypePolicyFactory/isScriptURL
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`isScriptURL()`**-Methode der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Schnittstelle gibt `true` zurück, wenn sie ein gültiges [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt erhält.

> [!NOTE]
> Der Zweck der Funktionen `isScriptURL()`, [`isHTML()`](/de/docs/Web/API/TrustedTypePolicyFactory/isHTML) und [`isScript()`](/de/docs/Web/API/TrustedTypePolicyFactory/isScript) besteht darin, zu überprüfen, ob das Objekt ein gültiges TrustedType-Objekt ist, das von einer konfigurierten Richtlinie erstellt wurde.

## Syntax

```js-nolint
isScriptURL(value)
```

### Parameter

- `value`
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt.

### Rückgabewert

Ein {{jsxref("Boolean")}}, das `true` ist, wenn das Objekt ein gültiges [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt ist.

## Beispiele

Im folgenden Beispiel wurde die Konstante `url` durch eine Richtlinie erstellt, und daher gibt `isScriptURL()` `true` zurück. Das zweite Beispiel ist ein Versuch, ein Objekt zu fälschen, und das dritte ist ein String. Beide geben `false` zurück, wenn sie an `isScriptURL()` übergeben werden.

```js
const url = policy.createScriptURL("https://example.com/myscript.js");
console.log(trustedTypes.isScriptURL(url)); // true;

const fake = Object.create(TrustedScriptURL.prototype);
console.log(trustedTypes.isScriptURL(fake)); // false

console.log(trustedTypes.isScriptURL("https://example.com/myscript.js")); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
