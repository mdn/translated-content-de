---
title: Intl.getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die statische Methode **`Intl.getCanonicalLocales()`** gibt ein Array zurück, das die kanonischen Lokalisierungsnamen enthält. Duplikate werden ausgelassen und die Elemente werden als strukturell gültige Sprach-Tag geprüft.

{{InteractiveExample("JavaScript Demo: Intl.getCanonicalLocales()")}}

```js interactive-example
console.log(Intl.getCanonicalLocales("EN-US"));
// Expected output: Array ["en-US"]

console.log(Intl.getCanonicalLocales(["EN-US", "Fr"]));
// Expected output: Array ["en-US", "fr"]

try {
  Intl.getCanonicalLocales("EN_US");
} catch (err) {
  console.log(err.toString());
  // Expected output (Firefox/Safari): RangeError: invalid language tag: "EN_US"
  // Expected output (Chrome): RangeError: Incorrect locale information provided
}
```

## Syntax

```js-nolint
Intl.getCanonicalLocales(locales)
```

### Parameter

- `locales`
  - : Eine Liste von {{jsxref("String")}}-Werten, für die die kanonischen Lokalisierungsnamen abgerufen werden sollen.

### Rückgabewert

Ein Array, das die kanonischen Lokalisierungsnamen enthält.

## Beispiele

### Verwendung von getCanonicalLocales

```js
Intl.getCanonicalLocales("EN-US"); // ["en-US"]
Intl.getCanonicalLocales(["EN-US", "Fr"]); // ["en-US", "fr"]

Intl.getCanonicalLocales("EN_US");
// RangeError:'EN_US' is not a structurally valid language tag
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.getCanonicalLocales` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-getcanonicallocales/)
- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
