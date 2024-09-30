---
title: Intl.ListFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
l10n:
  sourceCommit: 643fa96e963ecaf2959cca5ddb573751a3efafac
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.ListFormat")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `ListFormat` Objekts berechneten Optionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-listformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `ListFormat` Objekts berechneten Optionen widerspiegeln. Das Objekt enthält die folgenden Eigenschaften in der aufgelisteten Reihenfolge:

- `locale`
  - : Der BCP 47 Sprach-Tag für das tatsächlich verwendete Gebietsschema, ermittelt durch den [locale negotiation](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) Prozess. Es wird kein Unicode-Erweiterungsschlüssel in die Ausgabe aufgenommen.
- `type`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßiger Auffüllung nach Bedarf. Es ist entweder `"conjunction"`, `"disjunction"`, oder `"unit"`. Der Standardwert ist `"conjunction"`.
- `style`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßiger Auffüllung nach Bedarf. Es ist entweder `"long"`, `"short"`, oder `"narrow"`. Der Standardwert ist `"long"`.

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
