---
title: Intl.DurationFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/formatToParts
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`formatToParts()`** von {{jsxref("Intl.DurationFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeden Teil des formatierten Strings darstellen würden, der von {{jsxref("Intl/DurationFormat/format", "format()")}} zurückgegeben wird. Diese Methode ist nützlich, um benutzerdefinierte Strings aus den lokalspezifischen Tokens zu erstellen.

## Syntax

```js-nolint
formatToParts(duration)
```

### Parameter

- `duration` {{optional_inline}}
  - : Das zu formatierende Dauerobjekt. Es sollte einige oder alle der folgenden Eigenschaften enthalten: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. Der Wert jeder Eigenschaft sollte eine ganze Zahl sein, und ihre Vorzeichen sollten konsistent sein. Dies kann ein {{jsxref("Temporal.Duration")}}-Objekt sein; siehe die {{jsxref("Temporal.Duration")}}-Dokumentation für weitere Informationen über diese Eigenschaften.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das die formatierte Dauer in Teilen enthält. Jedes Objekt hat zwei oder drei Eigenschaften: `type`, `value` und optional `unit`, die jeweils einen String enthalten. Die String-Verkettung von `value`, in der angegebenen Reihenfolge, ergibt denselben String wie {{jsxref("Intl/DurationFormat/format", "format()")}}. Die Teile können als direkt von einem Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} mit dem numerischen Wert und den jeweiligen Einheiten erhalten betrachtet werden. Alle Tokens, die vom `NumberFormat` erzeugt werden, haben eine zusätzliche `unit`-Eigenschaft, die die Singularform der Eingabeeinheit darstellt; dies dient der programmatischen Nutzung und ist nicht lokalisiert. Die lokalisierte Einheit wird als separates `unit`-Token als Teil des `NumberFormat`-Ergebnisses ausgegeben. Die Teile von jeder Dauer-Einheit werden in gleicher Weise wie ein Aufruf von {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}} mit `{ type: "unit" }` zusammengefügt, sodass zusätzliche literale Tokens eingefügt werden.

## Beispiele

Die `formatToParts`-Methode ermöglicht das lokalisierungsbewusste Formatieren von Strings, die von `DurationFormat`-Formatierern erzeugt werden, indem Sie den String in Teile zerlegt:

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
  { type: "literal", value: ", " },
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
- {{jsxref("Intl/DurationFormat/format", "Intl.DurationFormat.prototype.format()")}}
- {{jsxref("Temporal.Duration")}}
