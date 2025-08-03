---
title: Intl.ListFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
l10n:
  sourceCommit: 939067a53bb5bb3787f2d536b83df2252d4e838e
---

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.ListFormat")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die Optionen widerspiegeln, die während der Initialisierung dieses `ListFormat`-Objekts berechnet wurden.

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

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `ListFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Das BCP 47-Sprach-Tag für die tatsächlich verwendete Locale, bestimmt durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Kein Unicode-Erweiterungsschlüssel wird in der Ausgabe enthalten sein.
- `type`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, wobei die Standards nach Bedarf ausgefüllt werden. Er ist entweder `"conjunction"`, `"disjunction"` oder `"unit"`. Der Standard ist `"conjunction"`.
- `style`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, wobei die Standards nach Bedarf ausgefüllt werden. Er ist entweder `"long"`, `"short"` oder `"narrow"`. Der Standard ist `"long"`.

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
