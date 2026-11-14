---
title: Intl.DurationFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/formatToParts
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`formatToParts()`** von {{jsxref("Intl.DurationFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil der formatierten Zeichenfolge darstellen, die {{jsxref("Intl/DurationFormat/format", "format()")}} zurückgeben würde. Sie ist nützlich, um aus den gebietsschemaspezifischen Bestandteilen eigene Zeichenfolgen zusammenzusetzen.

## Syntax

```js-nolint
formatToParts(duration)
```

### Parameter

- `duration`
  - : Das zu formatierende Dauerobjekt. Es sollte einige oder alle der folgenden Eigenschaften enthalten: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. Der Wert jeder Eigenschaft sollte eine Ganzzahl sein, und die Vorzeichen sollten übereinstimmen. Das Objekt kann ein {{jsxref("Temporal.Duration")}}-Objekt sein. Weitere Informationen zu diesen Eigenschaften finden Sie in der Dokumentation zu {{jsxref("Temporal.Duration")}}.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte Dauer in einzelnen Teilen enthalten. Jedes Objekt hat zwei oder drei Eigenschaften: `type`, `value` und optional `unit`. Jede dieser Eigenschaften enthält eine Zeichenfolge. Werden die `value`-Zeichenfolgen in der angegebenen Reihenfolge aneinandergehängt, ergibt sich dieselbe Zeichenfolge wie bei {{jsxref("Intl/DurationFormat/format", "format()")}}. Die Teile können als Ergebnisse eines Aufrufs von {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} mit dem numerischen Wert und der jeweiligen Einheit betrachtet werden. Alle von `NumberFormat` erzeugten Tokens haben eine zusätzliche Eigenschaft `unit`, deren Wert die Singularform der Eingabeeinheit ist. Sie dient der programmatischen Verwendung und ist nicht lokalisiert. Die lokalisierte Einheit wird als separates `unit`-Token im Ergebnis von `NumberFormat` ausgegeben. Die Teile der einzelnen Dauereinheiten werden wie bei einem Aufruf von {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}} mit `{ type: "unit" }` aneinandergehängt. Dabei werden zusätzliche Literal-Tokens eingefügt.

## Beispiele

Die Methode `formatToParts` ermöglicht die gebietsschemaspezifische Formatierung von Zeichenfolgen, die von `DurationFormat`-Formatierern erzeugt werden, indem sie die Zeichenfolge in einzelnen Teilen bereitstellt:

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
