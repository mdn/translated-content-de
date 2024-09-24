---
title: "TrustedTypePolicyFactory: isScript()-Methode"
short-title: isScript()
slug: Web/API/TrustedTypePolicyFactory/isScript
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`isScript()`**-Methode der {{domxref("TrustedTypePolicyFactory")}}-Schnittstelle gibt true zurück, wenn ein gültiges {{domxref("TrustedScript")}}-Objekt übergeben wird.

> [!NOTE]
> Der Zweck der Funktionen `isScript()`, {{domxref("TrustedTypePolicyFactory.isHTML","isHTML()")}} und {{domxref("TrustedTypePolicyFactory.isScriptURL","isScriptURL()")}} besteht darin, zu überprüfen, ob das Objekt ein gültiges TrustedType-Objekt ist, das von einer konfigurierten Richtlinie erstellt wurde.

## Syntax

```js-nolint
isScript(value)
```

### Parameter

- `value`
  - : Ein {{domxref("TrustedScript")}}-Objekt.

### Rückgabewert

Ein {{jsxref("boolean")}}, der true ist, wenn das Objekt ein gültiges {{domxref("TrustedScript")}}-Objekt ist.

## Beispiele

Im folgenden Beispiel wurde die Konstante `url` von einer Richtlinie erstellt, daher gibt `isScriptURL()` true zurück. Das zweite Beispiel ist ein Versuch, ein Objekt zu fälschen, und das dritte ist ein String. Beide werden false zurückgeben, wenn sie an `isScriptURL()` übergeben werden.

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
