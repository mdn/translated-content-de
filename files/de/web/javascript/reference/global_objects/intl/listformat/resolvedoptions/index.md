---
title: Intl.ListFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.ListFormat")}}-Instanzen
gibt ein neues Objekt mit Eigenschaften zurück, die die beim Erstellen dieses `Intl.ListFormat`-Objekts berechneten Lokalisierungs- und Formatierungsoptionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-listformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit Eigenschaften, die die bei der Konstruktion des gegebenen {{jsxref("Intl.ListFormat")}}-Objekts berechneten Lokalisierungs- und Formatierungsoptionen widerspiegeln.

## Beschreibung

Das von `resolvedOptions()` zurückgegebene Objekt hat die folgenden Eigenschaften:

- `locale`
  - : Das BCP 47-Sprachkennungsetikett für die tatsächlich verwendete Lokale. Wenn in der Eingabe des BCP 47-Sprachkennungsetiketts Unicode-Erweiterungswerte angefordert wurden, die zu dieser Lokale führten, sind die angeforderten und unterstützten Schlüssel-Wert-Paare für diese Lokale in `locale` enthalten.
- `style`
  - : Der in dem `options`-Argument des Konstruktors angegebene Wert oder der Standardwert (`"long"`). Der Wert ist entweder `"long"`, `"short"` oder `"narrow"`.
- `type`
  - : Der in dem `options`-Argument des Konstruktors angegebene Wert oder der Standardwert (`"conjunction"`). Der Wert ist entweder `"conjunction"`, `"disjunction"` oder `"unit"`.

## Beispiele

### Verwendung von resolvedOptions

```js
const deListFormatter = new Intl.ListFormat("de-DE", { style: "short" });

const usedOptions = deListFormatter.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style); // "short"
console.log(usedOptions.type); // "conjunction" (der Standardwert)
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
