---
title: Intl.DurationFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/formatToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`formatToParts()`** Methode von Instanzen des {{jsxref("Intl.DurationFormat")}} gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings darstellen, der von {{jsxref("Intl/DurationFormat/format", "format()")}} zurückgegeben würde. Dies ist nützlich, um benutzerdefinierte Zeichenfolgen aus den lokalisierten Tokens zu erstellen.

## Syntax

```js-nolint
formatToParts(duration)
```

### Parameter

- `duration` {{optional_inline}}
  - : Das zu formatierende Dauerobjekt. Es sollte einige oder alle der folgenden Eigenschaften enthalten: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. Der Wert jeder Eigenschaft sollte ein ganzzahliger Wert sein, und deren Vorzeichen sollten konsistent sein. Dies kann ein {{jsxref("Temporal.Duration")}}-Objekt sein; siehe die {{jsxref("Temporal.Duration")}}-Dokumentation für weitere Informationen über diese Eigenschaften.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte Dauer in Teilen enthalten. Jedes Objekt hat zwei oder drei Eigenschaften: `type`, `value` und optional `unit`, die jeweils eine Zeichenfolge enthalten. Die Zeichenfolgen-Verkettung von `value`, in der angegebenen Reihenfolge, ergibt denselben String wie {{jsxref("Intl/DurationFormat/format", "format()")}}. Die Teile können als direkt von einem Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} mit dem numerischen Wert und ihren jeweiligen Einheiten gewonnen betrachtet werden. Alle Tokens, die von `NumberFormat` produziert werden, haben eine zusätzliche `unit`-Eigenschaft, die die Singularform der Eingabe `unit` ist; dies ist für programmatische Verwendung und ist nicht lokalisiert. Die lokalisierte Einheit wird als separates `unit`-Token als Teil des `NumberFormat`-Ergebnisses ausgegeben. Die Teile jeder Dauereinheit werden auf die gleiche Weise zusammengefügt, wie ein Aufruf von {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}} mit `{ type: "unit" }`, so dass zusätzliche Literal-Tokens eingefügt werden.

## Beispiele

Die `formatToParts` Methode ermöglicht eine lokalisierte Formatierung von Strings, die von `DurationFormat` Formatierern erzeugt werden, indem Sie Ihnen den String in Teilen bereitstellt:

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
