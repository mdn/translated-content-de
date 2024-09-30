---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
l10n:
  sourceCommit: 643fa96e963ecaf2959cca5ddb573751a3efafac
---

{{JSRef}}

Die **`resolvedOptions()`** Methode von {{jsxref("Intl.NumberFormat")}} Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die Optionen widerspiegeln, die während der Initialisierung dieses `NumberFormat` Objekts berechnet wurden.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die Optionen widerspiegeln, die während der Initialisierung dieses `NumberFormat` Objekts berechnet wurden. Das Objekt hat die folgenden Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Der BCP 47 Sprach-Tag für das tatsächlich verwendete Gebietsschema, bestimmt durch den [Gebietsschema-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Nur der `nu` Unicode-Erweiterungsschlüssel, falls angefordert, kann in der Ausgabe enthalten sein.
- `numberingSystem`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, oder unter Verwendung des Unicode-Erweiterungsschlüssels `"nu"`, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es ist ein unterstütztes [Nummerierungssystem](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types) für dieses Gebietsschema. Die Standardeinstellung ist abhängig vom Gebietsschema.
- `style`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es ist entweder `"decimal"`, `"percent"`, `"currency"`, oder `"unit"`. Die Standardeinstellung ist `"decimal"`.
- `currency` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde. Es ist nur vorhanden, wenn `style` `"currency"` ist. Es ist ein [ISO 4217 Währungscode](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes). Es ist erforderlich, wenn `style` `"currency"` ist, daher gibt es keinen Standardwert.
- `currencyDisplay` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es ist nur vorhanden, wenn `style` `"currency"` ist. Es ist entweder `"code"`, `"symbol"`, `"narrowSymbol"`, oder `"name"`. Die Standardeinstellung ist `"symbol"`.
- `currencySign` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es ist nur vorhanden, wenn `style` `"currency"` ist. Es ist entweder `"standard"` oder `"accounting"`. Die Standardeinstellung ist `"standard"`.
- `unit` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde. Es ist nur vorhanden, wenn `style` `"unit"` ist. Es ist ein [genehmigter Einheitsbezeichner](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers) aus der [vollständigen CLDR-Liste](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml). Es ist erforderlich, wenn `style` `"unit"` ist, daher gibt es keinen Standardwert.
- `unitDisplay` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es ist nur vorhanden, wenn `style` `"unit"` ist. Es ist entweder `"short"`, `"narrow"`, oder `"long"`. Die Standardeinstellung ist `"short"`.
- `minimumIntegerDigits`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es ist eine Ganzzahl zwischen `1` und `21`. Die Standardeinstellung ist `1`.
- `minimumFractionDigits`, `maximumFractionDigits` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaften im `options` Argument angegeben wurde, mit standardmäßig ausgefüllten Werten, falls erforderlich. Sie sind nur vorhanden, wenn nötig; siehe [Digit-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options). Es ist eine Ganzzahl zwischen `0` und `100`.
- `minimumSignificantDigits`, `maximumSignificantDigits` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaften im `options` Argument angegeben wurde, mit standardmäßig ausgefüllten Werten, falls erforderlich. Sie sind nur vorhanden, wenn nötig; siehe [Digit-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#digit_options). Es ist eine Ganzzahl zwischen `1` und `21`.
- `useGrouping`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich, und mit einigen normalisierten Werten. Es ist entweder `"always"`, `"auto"`, `"min2"`, oder der boolesche Wert `false`. Die Standardeinstellung ist `"min2"`, wenn `notation` `"compact"` ist, sonst `"auto"`.
- `notation`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es ist entweder `"standard"`, `"scientific"`, `"engineering"`, oder `"compact"`. Die Standardeinstellung ist `"standard"`.
- `compactDisplay` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es ist nur vorhanden, wenn `notation` `"compact"` ist. Es ist entweder `"short"` oder `"long"`. Die Standardeinstellung ist `"short"`.
- `signDisplay`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es ist entweder `"auto"`, `"always"`, `"exceptZero"`, `"negative"`, oder `"never"`. Die Standardeinstellung ist `"auto"`.
- `roundingIncrement`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es gehört zu `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, und `5000`. Die Standardeinstellung ist `1`.
- `roundingMode`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es gehört zu `"ceil"`, `"floor"`, `"expand"`, `"trunc"`, `"halfCeil"`, `"halfFloor"`, `"halfExpand"`, `"halfTrunc"`, und `"halfEven"`. Die Standardeinstellung ist `"halfExpand"`.
- `roundingPriority`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es ist entweder `"auto"`, `"morePrecision"`, oder `"lessPrecision"`. Die Standardeinstellung ist `"auto"`.
- `trailingZeroDisplay`
  - : Der Wert, der für diese Eigenschaft im `options` Argument angegeben wurde, mit standardmäßig ausgefülltem Wert, falls erforderlich. Es ist entweder `"auto"` oder `"stripIfInteger"`. Die Standardeinstellung ist `"auto"`.

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
