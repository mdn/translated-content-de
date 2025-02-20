---
title: Intl.PluralRules.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`resolvedOptions()`** von Instanzen von {{jsxref("Intl.PluralRules")}} gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung dieses `PluralRules`-Objekts berechneten Optionen widerspiegeln.

{{InteractiveExample("JavaScript Demo: Intl.PluralRules.prototype.resolvedOptions()")}}

```js interactive-example
const pluralRules1 = new Intl.PluralRules("uk");
const options1 = pluralRules1.resolvedOptions();

const pluralRules2 = new Intl.PluralRules("bn");
const options2 = pluralRules2.resolvedOptions();

console.log(options1.pluralCategories);
// Expected output: Array ["few", "many", "one", "other"]

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

Ein neues Objekt mit Eigenschaften, die die während der Initialisierung dieses `PluralRules`-Objekts berechneten Optionen widerspiegeln. Das Objekt hat die folgenden Eigenschaften in der angegebenen Reihenfolge:

- `locale`
  - : Der BCP 47-Sprachcode (language tag) für das tatsächlich verwendete Gebietsschema, bestimmt durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Es wird kein Unicode-Erweiterungsschlüssel in der Ausgabe enthalten sein.
- `type`
  - : Der für diese Eigenschaft im `options`-Argument angegebene Wert, mit standardmäßiger Vervollständigung falls erforderlich. Es ist entweder `"cardinal"` oder `"ordinal"`. Der Standardwert ist `"cardinal"`.
- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits` {{optional_inline}}
  - : Die in den `options`-Argumenten angegebenen Werte für diese Eigenschaften, mit standardmäßiger Vervollständigung falls erforderlich. Diese Eigenschaften sind nur enthalten, wenn weder `minimumSignificantDigits` noch `maximumSignificantDigits` im `options`-Argument angegeben wurden.
- `minimumSignificantDigits`, `maximumSignificantDigits` {{optional_inline}}
  - : Die in den `options`-Argumenten angegebenen Werte für diese Eigenschaften, mit standardmäßiger Vervollständigung falls erforderlich. Diese Eigenschaften sind nur enthalten, wenn mindestens eine von ihnen im `options`-Argument angegeben wurde.
- `pluralCategories`
  - : Ein {{jsxref("Array")}} von Pluralkategorien, die vom angegebenen Gebietsschema verwendet werden, ausgewählt aus der Liste `"zero"`, `"one"`, `"two"`, `"few"`, `"many"` und `"other"`.
- `roundingIncrement`
  - : Der in den `options`-Argumenten angegebene Wert für diese Eigenschaft, mit standardmäßiger Vervollständigung falls erforderlich. Es ist einer von `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, und `5000`. Der Standardwert ist `1`.
- `roundingMode`
  - : Der in den `options`-Argumenten angegebene Wert für diese Eigenschaft, mit standardmäßiger Vervollständigung falls erforderlich. Es ist einer von `"ceil"`, `"floor"`, `"expand"`, `"trunc"`, `"halfCeil"`, `"halfFloor"`, `"halfExpand"`, `"halfTrunc"`, und `"halfEven"`. Der Standardwert ist `"halfExpand"`.
- `roundingPriority`
  - : Der in den `options`-Argumenten angegebene Wert für diese Eigenschaft, mit standardmäßiger Vervollständigung falls erforderlich. Es ist entweder `"auto"`, `"morePrecision"`, oder `"lessPrecision"`. Der Standardwert ist `"auto"`.
- `trailingZeroDisplay`
  - : Der in den `options`-Argumenten angegebene Wert für diese Eigenschaft, mit standardmäßiger Vervollständigung falls erforderlich. Es ist entweder `"auto"` oder `"stripIfInteger"`. Der Standardwert ist `"auto"`.

## Beispiele

### Verwendung der resolvedOptions()-Methode

Der folgende Code zeigt die Konstruktion eines `PluralRules`-Objekts, gefolgt von der Ausgabe jeder der berechneten Optionen.

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
console.log(usedOptions.maximumFractionDigits); //undefined (maximumSignificantDigits is set)
console.log(usedOptions.minimumSignificantDigits); // 1
console.log(usedOptions.maximumSignificantDigits); //2
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
