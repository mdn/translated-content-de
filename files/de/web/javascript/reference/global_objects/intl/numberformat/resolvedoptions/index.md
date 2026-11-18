---
title: Intl.NumberFormat.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
l10n:
  sourceCommit: 42d98fed2b93ad7f7efd643a2965c61e913dbe06
---

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.NumberFormat")}}-Instanzen gibt ein neues Objekt zurück, dessen Eigenschaften die bei der Initialisierung dieses `NumberFormat`-Objekts ermittelten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat.prototype.resolvedOptions()")}}

```js interactive-example
const numberFormat = new Intl.NumberFormat("de-DE");
const options = numberFormat.resolvedOptions();

console.log(options.locale);
// Expected output: "de-DE"

console.log(options.numberingSystem);
// Expected output: "latn"

console.log(options.style);
// Expected output: "decimal"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt, dessen Eigenschaften die anhand der an den Konstruktor [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) übergebenen Argumente ermittelten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der hier aufgeführten Reihenfolge:

- `locale`
  - : Der {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tag")}} für das tatsächlich verwendete Gebietsschema, das durch den Prozess der [Aushandlung des Gebietsschemas](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) bestimmt wurde. In der Ausgabe darf nur der Unicode-Erweiterungsschlüssel `nu` enthalten sein, sofern er angefordert wurde.
- `numberingSystem`
  - : Der für diese Eigenschaft im Argument `options` oder über den Unicode-Erweiterungsschlüssel `"nu"` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Es handelt sich um ein für dieses Gebietsschema unterstütztes [Zahlensystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Der Standardwert hängt vom Gebietsschema ab.
- `style`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Der Wert ist entweder `"decimal"`, `"percent"`, `"currency"` oder `"unit"`. Der Standardwert ist `"decimal"`.
- `currency` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert. Diese Eigenschaft ist nur vorhanden, wenn `style` den Wert `"currency"` hat. Der Wert ist ein ISO-4217-Währungscode; siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Wenn `style` den Wert `"currency"` hat, ist die Angabe erforderlich; daher gibt es keinen Standardwert.
- `currencyDisplay` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Diese Eigenschaft ist nur vorhanden, wenn `style` den Wert `"currency"` hat. Der Wert ist entweder `"code"`, `"symbol"`, `"narrowSymbol"` oder `"name"`. Der Standardwert ist `"symbol"`.
- `currencySign` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Diese Eigenschaft ist nur vorhanden, wenn `style` den Wert `"currency"` hat. Der Wert ist entweder `"standard"` oder `"accounting"`. Der Standardwert ist `"standard"`.
- `unit` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert. Diese Eigenschaft ist nur vorhanden, wenn `style` den Wert `"unit"` hat. Der Wert ist ein [zulässiger Einheitenbezeichner](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers) aus der [vollständigen CLDR-Liste](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml). Wenn `style` den Wert `"unit"` hat, ist die Angabe erforderlich; daher gibt es keinen Standardwert.
- `unitDisplay` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Diese Eigenschaft ist nur vorhanden, wenn `style` den Wert `"unit"` hat. Der Wert ist entweder `"short"`, `"narrow"` oder `"long"`. Der Standardwert ist `"short"`.
- `minimumIntegerDigits`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Der Wert ist eine Ganzzahl zwischen `1` und `21`. Der Standardwert ist `1`.
- `minimumFractionDigits`, `maximumFractionDigits` {{optional_inline}}
  - : Die für diese Eigenschaften im Argument `options` angegebenen Werte, gegebenenfalls ergänzt um Standardwerte. Sie sind nur vorhanden, wenn sie benötigt werden; siehe [Optionen für Ziffern](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options). Die Werte sind Ganzzahlen zwischen `0` und `100`.
- `minimumSignificantDigits`, `maximumSignificantDigits` {{optional_inline}}
  - : Die für diese Eigenschaften im Argument `options` angegebenen Werte, gegebenenfalls ergänzt um Standardwerte. Sie sind nur vorhanden, wenn sie benötigt werden; siehe [Optionen für Ziffern](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options). Die Werte sind Ganzzahlen zwischen `1` und `21`.
- `useGrouping`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert und mit bestimmten Werten in normalisierter Form. Der Wert ist entweder `"always"`, `"auto"`, `"min2"` oder der boolesche Wert `false`. Der Standardwert ist `"min2"`, wenn `notation` den Wert `"compact"` hat, andernfalls `"auto"`.
- `notation`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Der Wert ist entweder `"standard"`, `"scientific"`, `"engineering"` oder `"compact"`. Der Standardwert ist `"standard"`.
- `compactDisplay` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Diese Eigenschaft ist nur vorhanden, wenn `notation` den Wert `"compact"` hat. Der Wert ist entweder `"short"` oder `"long"`. Der Standardwert ist `"short"`.
- `signDisplay`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Der Wert ist entweder `"auto"`, `"always"`, `"exceptZero"`, `"negative"` oder `"never"`. Der Standardwert ist `"auto"`.
- `roundingIncrement`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Der Wert ist einer der folgenden: `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`. Der Standardwert ist `1`.
- `roundingMode`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Der Wert ist einer der folgenden: `"ceil"`, `"floor"`, `"expand"`, `"trunc"`, `"halfCeil"`, `"halfFloor"`, `"halfExpand"`, `"halfTrunc"` und `"halfEven"`. Der Standardwert ist `"halfExpand"`.
- `roundingPriority`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Der Wert ist entweder `"auto"`, `"morePrecision"` oder `"lessPrecision"`. Der Standardwert ist `"auto"`.
- `trailingZeroDisplay`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, gegebenenfalls ergänzt um den Standardwert. Der Wert ist entweder `"auto"` oder `"stripIfInteger"`. Der Standardwert ist `"auto"`.

## Beispiele

### Verwendung der Methode `resolvedOptions`

```js
// Create a NumberFormat
const de = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
  roundingMode: "halfCeil",
});

// Resolve the options
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.numberingSystem); // "latn"
console.log(usedOptions.compactDisplay); // undefined ("notation" not set to "compact")
console.log(usedOptions.currency); // "USD"
console.log(usedOptions.currencyDisplay); // "symbol"
console.log(usedOptions.currencySign); // "standard"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // 2
console.log(usedOptions.maximumFractionDigits); // 2
console.log(usedOptions.minimumSignificantDigits); // undefined (maximumFractionDigits is set)
console.log(usedOptions.maximumSignificantDigits); // undefined (maximumFractionDigits is set)
console.log(usedOptions.notation); // "standard"
console.log(usedOptions.roundingIncrement); // 5
console.log(usedOptions.roundingMode); // halfCeil
console.log(usedOptions.roundingPriority); // auto
console.log(usedOptions.signDisplay); // "auto"
console.log(usedOptions.style); // "currency"
console.log(usedOptions.trailingZeroDisplay); // auto
console.log(usedOptions.useGrouping); // auto
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
