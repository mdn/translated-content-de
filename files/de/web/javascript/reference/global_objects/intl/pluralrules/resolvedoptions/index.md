---
title: Intl.PluralRules.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.PluralRules")}}-Instanzen gibt ein neues Objekt zurück, dessen Eigenschaften die bei der Initialisierung dieses `PluralRules`-Objekts ermittelten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.PluralRules.prototype.resolvedOptions()")}}

```js interactive-example
const pluralRules1 = new Intl.PluralRules("uk");
const options1 = pluralRules1.resolvedOptions();

const pluralRules2 = new Intl.PluralRules("bn");
const options2 = pluralRules2.resolvedOptions();

console.log(options1.pluralCategories);
// Expected output: Array ["one", "few", "many", "other"]

console.log(options2.pluralCategories);
// Expected output: Array ["one", "other"]
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die bei der Initialisierung dieses `PluralRules`-Objekts ermittelten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Der {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tag")}} für die tatsächlich verwendete Locale, die durch den Prozess der [Locale-Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) bestimmt wird. Die Ausgabe enthält keinen Unicode-Erweiterungsschlüssel.
- `type`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Er ist entweder `"cardinal"` oder `"ordinal"`. Der Standardwert ist `"cardinal"`.
- `minimumIntegerDigits`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert.
- `minimumFractionDigits`, `maximumFractionDigits` {{optional_inline}}
  - : Die für diese Eigenschaften im Argument `options` angegebenen Werte, gegebenenfalls ergänzt um Standardwerte. Sie sind nur vorhanden, wenn sie benötigt werden; siehe [Ziffernoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options).
- `minimumSignificantDigits`, `maximumSignificantDigits` {{optional_inline}}
  - : Die für diese Eigenschaften im Argument `options` angegebenen Werte, gegebenenfalls ergänzt um Standardwerte. Sie sind nur vorhanden, wenn sie benötigt werden; siehe [Ziffernoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options).
- `pluralCategories`
  - : Ein {{jsxref("Array")}} mit den von der angegebenen Locale verwendeten Pluralkategorien aus der Liste `"zero"`, `"one"`, `"two"`, `"few"`, `"many"` und `"other"`.
- `roundingIncrement`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Er ist einer der Werte `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`. Der Standardwert ist `1`.
- `roundingMode`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Er ist einer der Werte `"ceil"`, `"floor"`, `"expand"`, `"trunc"`, `"halfCeil"`, `"halfFloor"`, `"halfExpand"`, `"halfTrunc"` und `"halfEven"`. Der Standardwert ist `"halfExpand"`.
- `roundingPriority`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Er ist entweder `"auto"`, `"morePrecision"` oder `"lessPrecision"`. Der Standardwert ist `"auto"`.
- `trailingZeroDisplay`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Er ist entweder `"auto"` oder `"stripIfInteger"`. Der Standardwert ist `"auto"`.

## Beispiele

### Verwendung der Methode `resolvedOptions()`

Der folgende Code zeigt, wie ein `PluralRules`-Objekt erstellt und anschließend jede seiner ermittelten Optionen protokolliert wird.

```js
// Create a PluralRules instance
const de = new Intl.PluralRules("de-DE", {
  maximumSignificantDigits: 2,
  trailingZeroDisplay: "auto",
});

// Resolve the options
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.pluralCategories); // Array ["one", "other"]
console.log(usedOptions.type); // "cardinal"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // undefined (maximumSignificantDigits is set)
console.log(usedOptions.maximumFractionDigits); // undefined (maximumSignificantDigits is set)
console.log(usedOptions.minimumSignificantDigits); // 1
console.log(usedOptions.maximumSignificantDigits); // 2
console.log(usedOptions.roundingIncrement); // 1
console.log(usedOptions.roundingMode); // "halfExpand"
console.log(usedOptions.roundingPriority); // "auto"
console.log(usedOptions.trailingZeroDisplay); // "auto"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.PluralRules")}}
