---
title: Intl.ListFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
l10n:
  sourceCommit: 42d98fed2b93ad7f7efd643a2965c61e913dbe06
---

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.ListFormat")}}-Instanzen gibt ein neues Objekt zurück, dessen Eigenschaften die bei der Initialisierung dieses `ListFormat`-Objekts ermittelten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat.prototype.resolvedOptions()")}}

```js interactive-example
const deListFormatter = new Intl.ListFormat("de-DE", { type: "disjunction" });
const options = deListFormatter.resolvedOptions();

console.log(options.locale);
// Expected output: "de-DE"

console.log(options.style);
// Expected output: "long"

console.log(options.type);
// Expected output: "disjunction"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die anhand der an den Konstruktor [`Intl.ListFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat) übergebenen Argumente ermittelten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Der {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tag")}} für die tatsächlich verwendete Locale, die durch den Prozess der [Locale-Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) bestimmt wurde. Die Ausgabe enthält keinen Unicode-Erweiterungsschlüssel.
- `type`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt durch den Standardwert. Der Wert ist entweder `"conjunction"`, `"disjunction"` oder `"unit"`. Der Standardwert ist `"conjunction"`.
- `style`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt durch den Standardwert. Der Wert ist entweder `"long"`, `"short"` oder `"narrow"`. Der Standardwert ist `"long"`.

## Beispiele

### resolvedOptions verwenden

```js
const deListFormatter = new Intl.ListFormat("de-DE", { style: "short" });

const usedOptions = deListFormatter.resolvedOptions();
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
