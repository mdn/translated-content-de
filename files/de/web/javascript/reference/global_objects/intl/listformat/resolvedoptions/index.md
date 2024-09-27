---
title: Intl.ListFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.ListFormat")}}-Instanzen
gibt ein neues Objekt mit Eigenschaften zurück, die die während der Konstruktion dieses `Intl.ListFormat`-Objekts berechneten Locale- und Stilformatierungsoptionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-listformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit Eigenschaften, die die während der Konstruktion des gegebenen {{jsxref("Intl.ListFormat")}}-Objekts berechneten Locale- und Formatierungsoptionen widerspiegeln.

## Beschreibung

Das durch `resolvedOptions()` zurückgegebene Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Der BCP 47-Sprachcode für das tatsächlich verwendete Locale. Wenn im Eingabe-BCP 47-Sprachcode Unicode-Erweiterungswerte angefordert wurden, die zu diesem Locale führten, sind die angeforderten und für dieses Locale unterstützten Schlüssel-Wert-Paare in `locale` enthalten.
- `style`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument des Konstruktors bereitgestellt wurde, oder der Standardwert (`"long"`). Der Wert ist entweder `"long"`, `"short"` oder `"narrow"`.
- `type`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument des Konstruktors bereitgestellt wurde, oder der Standardwert (`"conjunction"`). Der Wert ist entweder `"conjunction"`, `"disjunction"` oder `"unit"`.

## Beispiele

### Verwendung von resolvedOptions

```js
const deListFormatter = new Intl.ListFormat("de-DE", { style: "short" });

const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style); // "short"
console.log(usedOptions.type); // "conjunction" (the default value)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
- {{jsxref("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
