---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.NumberFormat")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `NumberFormat`-Objekts berechneten Optionen widerspiegeln.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `NumberFormat`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Das BCP 47 Sprach-Tag für die tatsächlich verwendete Locale, bestimmt durch den [Locale-Verhandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur der `nu` Unicode-Erweiterungsschlüssel, falls angefordert, kann im Ergebnis enthalten sein.
- `numberingSystem`
  - : Der Wert, der für diese Eigenschaft im Argument `options` angegeben wurde, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, mit bei Bedarf ausgefülltem Standardwert. Es ist ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types) für diese Locale. Der Standard ist abhängig von der Locale.
- `style`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert. Es ist entweder `"decimal"`, `"percent"`, `"currency"` oder `"unit"`. Der Standard ist `"decimal"`.
- `currency` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im Argument `options` angegeben wurde. Er ist nur vorhanden, wenn `style` `"currency"` ist. Es ist ein ISO 4217-Währungscode; siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es ist erforderlich, wenn `style` `"currency"` ist, daher gibt es keinen Standard.
- `currencyDisplay` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert. Er ist nur vorhanden, wenn `style` `"currency"` ist. Es ist entweder `"code"`, `"symbol"`, `"narrowSymbol"` oder `"name"`. Der Standard ist `"symbol"`.
- `currencySign` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert. Er ist nur vorhanden, wenn `style` `"currency"` ist. Es ist entweder `"standard"` oder `"accounting"`. Der Standard ist `"standard"`.
- `unit` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im Argument `options` angegeben wurde. Er ist nur vorhanden, wenn `style` `"unit"` ist. Es ist ein [zugelassener Einheit-Identifier](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers) aus der [vollständigen CLDR-Liste](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml). Es ist erforderlich, wenn `style` `"unit"` ist, daher gibt es keinen Standard.
- `unitDisplay` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert. Er ist nur vorhanden, wenn `style` `"unit"` ist. Es ist entweder `"short"`, `"narrow"` oder `"long"`. Der Standard ist `"short"`.
- `minimumIntegerDigits`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert. Es ist eine ganze Zahl zwischen `1` und `21`. Der Standard ist `1`.
- `minimumFractionDigits`, `maximumFractionDigits` {{optional_inline}}
  - : Der für diese Eigenschaften im Argument `options` angegebene Wert, mit bei Bedarf ausgefüllten Standardwerten. Sie sind nur vorhanden, wenn nötig; siehe [Digit-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options). Es ist eine ganze Zahl zwischen `0` und `100`.
- `minimumSignificantDigits`, `maximumSignificantDigits` {{optional_inline}}
  - : Der für diese Eigenschaften im Argument `options` angegebene Wert, mit bei Bedarf ausgefüllten Standardwerten. Sie sind nur vorhanden, wenn nötig; siehe [Digit-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options). Es ist eine ganze Zahl zwischen `1` und `21`.
- `useGrouping`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert und einigen normalisierten Werten. Es ist entweder `"always"`, `"auto"`, `"min2"`, oder der boolesche Wert `false`. Der Standard ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` ansonsten.
- `notation`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert. Es ist entweder `"standard"`, `"scientific"`, `"engineering"` oder `"compact"`. Der Standard ist `"standard"`.
- `compactDisplay` {{optional_inline}}
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert. Er ist nur vorhanden, wenn `notation` `"compact"` ist. Es ist entweder `"short"` oder `"long"`. Der Standard ist `"short"`.
- `signDisplay`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert. Es ist entweder `"auto"`, `"always"`, `"exceptZero"`, `"negative"` oder `"never"`. Der Standard ist `"auto"`.
- `roundingIncrement`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert. Es ist einer der Werte `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`. Der Standard ist `1`.
- `roundingMode`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert. Er ist einer der Werte `"ceil"`, `"floor"`, `"expand"`, `"trunc"`, `"halfCeil"`, `"halfFloor"`, `"halfExpand"`, `"halfTrunc"` und `"halfEven"`. Der Standard ist `"halfExpand"`.
- `roundingPriority`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert. Es ist entweder `"auto"`, `"morePrecision"` oder `"lessPrecision"`. Der Standard ist `"auto"`.
- `trailingZeroDisplay`
  - : Der für diese Eigenschaft im Argument `options` angegebene Wert, mit bei Bedarf ausgefülltem Standardwert. Es ist entweder `"auto"` oder `"stripIfInteger"`. Der Standard ist `"auto"`.

## Beispiele

### Verwendung der `resolvedOptions`-Methode

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
