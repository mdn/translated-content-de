---
title: "TrustedTypePolicyFactory: isScript()-Methode"
short-title: isScript()
slug: Web/API/TrustedTypePolicyFactory/isScript
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`isScript()`**-Methode der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Schnittstelle gibt true zurück, wenn ein gültiges [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt übergeben wird.

> [!NOTE]
> Der Zweck der Funktionen `isScript()`, [`isHTML()`](/de/docs/Web/API/TrustedTypePolicyFactory/isHTML) und [`isScriptURL()`](/de/docs/Web/API/TrustedTypePolicyFactory/isScriptURL) besteht darin, zu überprüfen, ob das Objekt ein gültiges TrustedType-Objekt ist, das von einer konfigurierten Richtlinie erstellt wurde.

## Syntax

```js-nolint
isScript(value)
```

### Parameter

- `value`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der true ist, wenn das Objekt ein gültiges [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt ist.

## Beispiele

Im folgenden Beispiel wurde die Konstante `url` von einer Richtlinie erstellt, und daher gibt `isScriptURL()` true zurück. Im zweiten Beispiel wird versucht, ein Objekt zu fälschen, und im dritten Beispiel handelt es sich um einen String. Beide geben false zurück, wenn sie an `isScriptURL()` übergeben werden.

```js
const myScript = policy.createScript("eval('2 + 2')");
console.log(trustedTypes.isScript(myScript)); // true;

const fake = Object.create(TrustedScript.prototype);
console.log(trustedTypes.isScript(fake)); // false

console.log(trustedTypes.isScript("eval('2 + 2')")); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
