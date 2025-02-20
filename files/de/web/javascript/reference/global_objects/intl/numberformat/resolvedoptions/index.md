---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von {{jsxref("Intl.NumberFormat")}}-Instanzen gibt ein neues Objekt zurück, das Eigenschaften enthält, die die während der Initialisierung dieses `NumberFormat`-Objekts berechneten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat.prototype.resolvedOptions")}}

```js interactive-example
const numberFormat1 = new Intl.NumberFormat("de-DE");
const options1 = numberFormat1.resolvedOptions();

console.log(options1.locale);
// Expected output (Firefox / Safari): "de-DE"
// Expected output (Chrome): "de"

console.log(options1.numberingSystem);
// Expected output: "latn"

console.log(options1.style);
// Expected output: "decimal"
```

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt, das Eigenschaften enthält, die die während der Initialisierung dieses `NumberFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgeführt sind:

- `locale`
  - : Der BCP 47-Sprachcode für die tatsächlich verwendete Sprache, bestimmt durch den [Sprachverhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur der Unicode-Erweiterungsschlüssel `nu`, falls angefordert, kann in der Ausgabe enthalten sein.
- `numberingSystem`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert oder der Unicode-Erweiterungsschlüssel `"nu"`, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Es handelt sich um ein unterstütztes [Numerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für diese Sprache. Der Standardwert ist sprachabhängig.
- `style`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Es kann `"decimal"`, `"percent"`, `"currency"` oder `"unit"` sein. Der Standardwert ist `"decimal"`.
- `currency` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert. Sie ist nur vorhanden, wenn `style` `"currency"` ist. Es handelt sich um einen ISO 4217-Währungscode; siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Sie ist erforderlich, wenn `style` `"currency"` ist, sodass es keinen Standardwert gibt.
- `currencyDisplay` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Sie ist nur vorhanden, wenn `style` `"currency"` ist. Es kann `"code"`, `"symbol"`, `"narrowSymbol"` oder `"name"` sein. Der Standardwert ist `"symbol"`.
- `currencySign` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Sie ist nur vorhanden, wenn `style` `"currency"` ist. Es kann `"standard"` oder `"accounting"` sein. Der Standardwert ist `"standard"`.
- `unit` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert. Sie ist nur vorhanden, wenn `style` `"unit"` ist. Es handelt sich um einen [zugelassenen Einheitentyp](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers) aus der [vollständigen CLDR-Liste](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml). Sie ist erforderlich, wenn `style` `"unit"` ist, sodass es keinen Standardwert gibt.
- `unitDisplay` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Sie ist nur vorhanden, wenn `style` `"unit"` ist. Es kann `"short"`, `"narrow"` oder `"long"` sein. Der Standardwert ist `"short"`.
- `minimumIntegerDigits`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Es handelt sich um eine Ganzzahl zwischen `1` und `21`. Der Standardwert ist `1`.
- `minimumFractionDigits`, `maximumFractionDigits` {{optional_inline}}
  - : Die für diese Eigenschaften im Argument `options` angegebenen Werte, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Sie sind nur vorhanden, wenn erforderlich; siehe [Digit-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options). Es handelt sich um eine Ganzzahl zwischen `0` und `100`.
- `minimumSignificantDigits`, `maximumSignificantDigits` {{optional_inline}}
  - : Die für diese Eigenschaften im Argument `options` angegebenen Werte, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Sie sind nur vorhanden, wenn erforderlich; siehe [Digit-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options). Es handelt sich um eine Ganzzahl zwischen `1` und `21`.
- `useGrouping`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt und mit einigen Werten normalisiert sind. Es kann `"always"`, `"auto"`, `"min2"` oder der boolesche Wert `false` sein. Der Standardwert ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` andernfalls.
- `notation`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Es kann `"standard"`, `"scientific"`, `"engineering"` oder `"compact"` sein. Der Standardwert ist `"standard"`.
- `compactDisplay` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Sie ist nur vorhanden, wenn `notation` `"compact"` ist. Es kann `"short"` oder `"long"` sein. Der Standardwert ist `"short"`.
- `signDisplay`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Es kann `"auto"`, `"always"`, `"exceptZero"`, `"negative"` oder `"never"` sein. Der Standardwert ist `"auto"`.
- `roundingIncrement`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Es ist eine der folgenden Zahlen: `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`. Der Standardwert ist `1`.
- `roundingMode`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Es kann `"ceil"`, `"floor"`, `"expand"`, `"trunc"`, `"halfCeil"`, `"halfFloor"`, `"halfExpand"`, `"halfTrunc"` oder `"halfEven"` sein. Der Standardwert ist `"halfExpand"`.
- `roundingPriority`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Es kann `"auto"`, `"morePrecision"` oder `"lessPrecision"` sein. Der Standardwert ist `"auto"`.
- `trailingZeroDisplay`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit Standardwerten, die gegebenenfalls ausgefüllt sind. Es kann `"auto"` oder `"stripIfInteger"` sein. Der Standardwert ist `"auto"`.

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
