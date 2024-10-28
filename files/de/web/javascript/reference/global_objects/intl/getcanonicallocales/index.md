---
title: Intl.getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
l10n:
  sourceCommit: c420b9b3126451f53d112afe33e007d6efdb605d
---

{{JSRef}}

Die statische Methode **`Intl.getCanonicalLocales()`** gibt ein Array zurück, das die kanonischen Locale-Namen enthält. Duplikate werden weggelassen und Elemente werden als strukturell gültige Sprach-Tags validiert.

{{EmbedInteractiveExample("pages/js/intl-getcanonicallocales.html")}}

## Syntax

```js-nolint
Intl.getCanonicalLocales(locales)
```

### Parameter

- `locales`
  - : Eine Liste von {{jsxref("String")}}-Werten, für die die kanonischen Locale-Namen ermittelt werden sollen.

### Rückgabewert

Ein Array, das die kanonischen Locale-Namen enthält.

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
