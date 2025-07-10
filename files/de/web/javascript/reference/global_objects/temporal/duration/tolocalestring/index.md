---
title: Temporal.Duration.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toLocaleString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toLocaleString()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt einen string mit einer sprachabhängigen Darstellung dieser Dauer zurück. In Implementierungen mit Unterstützung für die [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) delegiert diese Methode an `Intl.DurationFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank mit Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DurationFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DurationFormat/format", "format()")}} Methode zu verwenden, da ein `DurationFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise entscheiden kann, einen Teil der Datenbank zwischenzuspeichern, sodass zukünftige `format` Aufrufe nach Lokalisierungsstrings in einem stärker begrenzten Kontext suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales` und `options` Parameter passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DurationFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat) Konstruktors. Implementierungen ohne Unterstützung für `Intl.DurationFormat` geben genau denselben String zurück wie {{jsxref("Temporal/Duration/toString", "toString()")}}, wobei beide Parameter ignoriert werden.

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#locales) Parameter des `Intl.DurationFormat()` Konstruktor.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options) Parameter des `Intl.DurationFormat()` Konstruktor.

Details zu diesen Parametern und wie sie verwendet werden, finden Sie im [`Intl.DurationFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat).

### Rückgabewert

Ein string, der die angegebene Dauer gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DurationFormat` ist dies gleichbedeutend mit `new Intl.DurationFormat(locales, options).format(duration)`.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Jedoch kann die Ausgabe zwischen Implementierungen unterschiedlich sein, selbst innerhalb derselben Lokalisierung — Ausgabevariationen sind designbedingt und durch die Spezifikation erlaubt. Sie entspricht möglicherweise auch nicht Ihren Erwartungen. Zum Beispiel kann der string geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt einen formatierten string in der Standardlokalisierung und mit Standardoptionen zurück.

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });

console.log(duration.toLocaleString()); // 1 hr, 30 min, 15 sec
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
