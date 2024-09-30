---
title: "TrustedTypePolicyFactory: isScript()-Methode"
short-title: isScript()
slug: Web/API/TrustedTypePolicyFactory/isScript
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`isScript()`**-Methode des [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Interfaces gibt `true` zurück, wenn ihr ein gültiges [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt übergeben wird.

> [!NOTE]
> Der Zweck der Funktionen `isScript()`, [`isHTML()`](/de/docs/Web/API/TrustedTypePolicyFactory/isHTML) und [`isScriptURL()`](/de/docs/Web/API/TrustedTypePolicyFactory/isScriptURL) besteht darin, zu überprüfen, ob das Objekt ein gültiges TrustedType-Objekt ist, das durch eine konfigurierte Richtlinie erstellt wurde.

## Syntax

```js-nolint
isScript(value)
```

### Parameter

- `value`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt.

### Rückgabewert

Ein {{jsxref("boolean")}}, der `true` ist, wenn das Objekt ein gültiges [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt ist.

## Beispiele

Im folgenden Beispiel wurde die Konstante `url` durch eine Richtlinie erstellt, und daher gibt `isScriptURL()` `true` zurück. Das zweite Beispiel ist ein Versuch, ein Objekt zu fälschen, und das dritte ist ein String. Beide werden `false` zurückgeben, wenn sie an `isScriptURL()` übergeben werden.

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
