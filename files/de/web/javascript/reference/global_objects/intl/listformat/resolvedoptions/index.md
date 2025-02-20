---
title: Intl.ListFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.ListFormat")}}-Instanzen gibt ein neues Objekt zurück, dessen Eigenschaften die während der Initialisierung dieses `ListFormat`-Objekts berechneten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat.prototype.resolvedOptions()")}}

```js interactive-example
const deListFormatter1 = new Intl.ListFormat("de-DE", { type: "disjunction" });
const options1 = deListFormatter1.resolvedOptions();

console.log(options1.locale);
// Expected output (Firefox / Safari): "de-DE"
// Expected output (Chrome): "de"

console.log(options1.style);
// Expected output: "long"

console.log(options1.type);
// Expected output: "disjunction"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `ListFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Der BCP 47-Sprachcode für das tatsächlich verwendete Gebietsschema, ermittelt durch den [Verhandlungsprozess des Gebietsschemas](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Kein Unicode-Erweiterungsschlüssel wird in der Ausgabe enthalten sein.
- `type`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert, mit Standardeinstellungen, falls nötig. Es ist entweder `"conjunction"`, `"disjunction"` oder `"unit"`. Der Standardwert ist `"conjunction"`.
- `style`
  - : Der für diese Eigenschaft im `options`-Argument bereitgestellte Wert, mit Standardeinstellungen, falls nötig. Es ist entweder `"long"`, `"short"` oder `"narrow"`. Der Standardwert ist `"long"`.

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
