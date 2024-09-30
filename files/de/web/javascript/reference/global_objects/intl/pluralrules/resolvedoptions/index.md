---
title: Intl.PluralRules.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
l10n:
  sourceCommit: 643fa96e963ecaf2959cca5ddb573751a3efafac
---

{{JSRef}}

Die **`resolvedOptions()`**-Methode von {{jsxref("Intl.PluralRules")}}-Instanzen gibt ein neues Objekt mit Eigenschaften zurück, die die Optionen widerspiegeln, die während der Initialisierung dieses `PluralRules`-Objekts berechnet wurden.

{{EmbedInteractiveExample("pages/js/intl-pluralrules-prototype-resolvedoptions.html")}}

## Syntax

```js-nolint
resolvedOptions()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt mit Eigenschaften, die die Optionen widerspiegeln, die während der Initialisierung dieses `PluralRules`-Objekts berechnet wurden. Das Objekt hat die folgenden Eigenschaften, in der Reihenfolge, in der sie aufgelistet sind:

- `locale`
  - : Das BCP 47-Sprach-Tag für das tatsächlich verwendete Gebietsschema, das durch den [Locale-Aushandlungsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) bestimmt wurde. Kein Unicode-Erweiterungsschlüssel wird in der Ausgabe enthalten sein.
- `type`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, wobei Standardwerte bei Bedarf ausgefüllt werden. Es ist entweder `"cardinal"` oder `"ordinal"`. Der Standardwert ist `"cardinal"`.
- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaften im `options`-Argument bereitgestellt wurde, wobei Standardwerte bei Bedarf ausgefüllt werden. Diese Eigenschaften sind nur dann vorhanden, wenn weder `minimumSignificantDigits` noch `maximumSignificantDigits` im `options`-Argument bereitgestellt wurden.
- `minimumSignificantDigits`, `maximumSignificantDigits` {{optional_inline}}
  - : Der Wert, der für diese Eigenschaften im `options`-Argument bereitgestellt wurde, wobei Standardwerte bei Bedarf ausgefüllt werden. Diese Eigenschaften sind nur dann vorhanden, wenn mindestens eine von ihnen im `options`-Argument bereitgestellt wurde.
- `pluralCategories`
  - : Ein {{jsxref("Array")}} von Pluralkategorien, die von dem gegebenen Gebietsschema verwendet werden, ausgewählt aus der Liste `"zero"`, `"one"`, `"two"`, `"few"`, `"many"` und `"other"`.
- `roundingIncrement`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, wobei Standardwerte bei Bedarf ausgefüllt werden. Es ist einer von `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, und `5000`. Der Standardwert ist `1`.
- `roundingMode`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, wobei Standardwerte bei Bedarf ausgefüllt werden. Es ist einer von `"ceil"`, `"floor"`, `"expand"`, `"trunc"`, `"halfCeil"`, `"halfFloor"`, `"halfExpand"`, `"halfTrunc"`, und `"halfEven"`. Der Standardwert ist `"halfExpand"`.
- `roundingPriority`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, wobei Standardwerte bei Bedarf ausgefüllt werden. Es ist entweder `"auto"`, `"morePrecision"`, oder `"lessPrecision"`. Der Standardwert ist `"auto"`.
- `trailingZeroDisplay`
  - : Der Wert, der für diese Eigenschaft im `options`-Argument bereitgestellt wurde, wobei Standardwerte bei Bedarf ausgefüllt werden. Es ist entweder `"auto"` oder `"stripIfInteger"`. Der Standardwert ist `"auto"`.

## Beispiele

### Verwendung der Methode resolvedOptions()

Der untenstehende Code zeigt die Konstruktion eines `PluralRules`-Objekts, gefolgt von der Ausgabe jeder der ermittelten Optionen.

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
