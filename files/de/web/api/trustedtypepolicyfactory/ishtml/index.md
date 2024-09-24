---
title: "TrustedTypePolicyFactory: isHTML()-Methode"
short-title: isHTML()
slug: Web/API/TrustedTypePolicyFactory/isHTML
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`isHTML()`**-Methode der {{domxref("TrustedTypePolicyFactory")}}-Schnittstelle gibt true zurück, wenn ihr ein gültiges {{domxref("TrustedHTML")}}-Objekt übergeben wird.

> [!NOTE]
> Der Zweck der Funktionen `isHTML()`, {{domxref("TrustedTypePolicyFactory.isScript","isScript()")}} und {{domxref("TrustedTypePolicyFactory.isScriptURL","isScriptURL()")}} besteht darin, zu überprüfen, ob das Objekt ein gültiges TrustedType-Objekt ist, das durch eine konfigurierte Richtlinie erstellt wurde.

## Syntax

```js-nolint
isHTML(value)
```

### Parameter

- `value`
  - : Ein {{domxref("TrustedHTML")}}-Objekt.

### Rückgabewert

Ein {{jsxref("boolean")}}, der true ist, wenn das Objekt ein gültiges {{domxref("TrustedHTML")}}-Objekt ist.

## Beispiele

Im folgenden Beispiel wurde die Konstante `html` durch eine Richtlinie erstellt, daher gibt `isHTML()` true zurück. Das zweite Beispiel ist ein Versuch, ein Objekt zu fälschen, und das dritte ist ein String. Beide werden false zurückgeben, wenn sie an `isHTML()` übergeben werden.

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
