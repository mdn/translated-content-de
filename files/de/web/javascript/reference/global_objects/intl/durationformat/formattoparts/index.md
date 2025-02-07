---
title: Intl.DurationFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/formatToParts
l10n:
  sourceCommit: 415324c4a53612154ec3186c23fc7326676e53b0
---

{{JSRef}}

Die **`formatToParts()`**-Methode von {{jsxref("Intl.DurationFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings repräsentieren, der von {{jsxref("Intl/DurationFormat/format", "format()")}} zurückgegeben würde. Sie ist nützlich, um benutzerdefinierte Strings aus den ortsspezifischen Tokens zu erstellen.

## Syntax

```js-nolint
formatToParts(duration)
```

### Parameter

- `duration` {{optional_inline}}
  - : Das zu formatierende Dauerobjekt. Es sollte einige oder alle der folgenden Eigenschaften enthalten: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. Der Wert jeder Eigenschaft sollte eine ganze Zahl sein, und die Vorzeichen sollten konsistent sein. Es kann sich um ein {{jsxref("Temporal.Duration")}}-Objekt handeln; weitere Informationen zu diesen Eigenschaften finden Sie in der {{jsxref("Temporal.Duration")}}-Dokumentation.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte Dauer in Teilen enthalten. Jedes Objekt hat zwei oder drei Eigenschaften: `type`, `value` und optional `unit`, wobei jede einen String enthält. Die Verkettung der Strings in `value`, in der angegebenen Reihenfolge, führt zu demselben String wie {{jsxref("Intl/DurationFormat/format", "format()")}}. Die Teile können als direkt aus dem Aufruf von {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} mit dem numerischen Wert und ihren jeweiligen Einheiten erhalten betrachtet werden. Alle Tokens, die von `NumberFormat` erzeugt werden, besitzen eine zusätzliche `unit`-Eigenschaft, die die Einzahl der Eingabe-Einheit ist; dies dient programmatischen Zwecken und ist nicht lokalisiert. Die lokalisierte Einheit wird als separates `unit`-Token im Ergebnis von `NumberFormat` ausgegeben. Die Teile jeder Zeiteinheit werden in derselben Weise wie der Aufruf von {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}} mit `{ type: "unit" }` zusammengefügt, sodass zusätzliche literale Tokens eingefügt werden.

## Beispiele

Die `formatToParts`-Methode ermöglicht die ortsspezifische Formatierung von Strings, die von `DurationFormat`-Formatierern erzeugt werden, indem sie den String in Teile aufteilt:

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
