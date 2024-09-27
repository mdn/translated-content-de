---
title: Intl.DurationFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/formatToParts
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{JSRef}}

Die Methode **`formatToParts()`** von {{jsxref("Intl.DurationFormat")}} Instanzen ermöglicht eine lokalisierungsbewusste Formatierung von Zeichenfolgen, die von {{jsxref("Intl.DurationFormat")}} Formatierern erzeugt werden.

## Syntax

```js-nolint
formatToParts(duration)
```

### Parameter

- `duration` {{optional_inline}}
  - : Das zu formatierende Dauerobjekt. Es sollte einige oder alle der folgenden Eigenschaften enthalten: `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"`.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das die formatierten Dauerangaben in Teilen enthält.

## Beschreibung

Die Methode `formatToParts()` ist nützlich für die benutzerdefinierte Formatierung von Dauerobjekten. Sie gibt ein {{jsxref("Array")}} von Objekten zurück, das die lokalisierungsspezifischen Token enthält, aus denen benutzerdefinierte Zeichenfolgen erstellt werden können, während die lokalisierungsspezifischen Teile erhalten bleiben. Die Struktur, die die Methode `formatToParts()` zurückgibt, sieht folgendermaßen aus:

```js
[
  { type: "integer", value: "7", unit: "hour" },
  { type: "literal", value: " ", unit: "hour" },
  { type: "unit", value: "hr", unit: "hour" },
  { type: "literal", value: ", " },
  { type: "integer", value: "8", unit: "minute" },
  { type: "literal", value: " ", unit: "minute" },
  { type: "unit", value: "min", unit: "minute" },
];
```

## Beispiele

Die Methode `formatToParts` ermöglicht die lokalisierungsbewusste Formatierung von Zeichenfolgen, die von `DurationFormat` Formatierern erzeugt werden, indem sie Ihnen die Zeichenfolge in Teilen bereitstellt:

```js
const duration = {
  hours: 7,
  minutes: 8,
  seconds: 9,
  milliseconds: 123,
  microseconds: 456,
  nanoseconds: 789,
};

new Intl.DurationFormat("en", { style: "long" }).formatToParts(duration);

// Returned value:
[
  { type: "integer", value: "7", unit: "hour" },
  { type: "literal", value: " ", unit: "hour" },
  { type: "unit", value: "hours", unit: "hour" },
  { type: "literal", value: ", " },
  { type: "integer", value: "8", unit: "minute" },
  { type: "literal", value: " ", unit: "minute" },
  { type: "unit", value: "minutes", unit: "minute" },
  { type: "literal", value: ", " },
  { type: "integer", value: "9", unit: "second" },
  { type: "literal", value: " ", unit: "second" },
  { type: "unit", value: "seconds", unit: "second" },
  { type: "literal", value: ", " },
  { type: "integer", value: "123", unit: "millisecond" },
  { type: "literal", value: " ", unit: "millisecond" },
  { type: "unit", value: "milliseconds", unit: "millisecond" },
  { type: "literal", value: ", " },
  { type: "integer", value: "456", unit: "microsecond" },
  { type: "literal", value: " ", unit: "microsecond" },
  { type: "unit", value: "microseconds", unit: "microsecond" },
  { type: "literal", value: " and " },
  { type: "integer", value: "789", unit: "nanosecond" },
  { type: "literal", value: " ", unit: "nanosecond" },
  { type: "unit", value: "nanoseconds", unit: "nanosecond" },
];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
