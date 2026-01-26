---
title: Temporal.PlainMonthDay.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toLocaleString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toLocaleString()`** Methode von {{jsxref("Temporal.PlainMonthDay")}} Instanzen gibt eine zeichenfolgenbasierte, sprachsensitive Darstellung dieses Monats-Tages zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss in einer großen Datenbank von Lokalisierungsstrings gesucht werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt sich die übergebenen Argumente merkt und gegebenenfalls entscheiden kann, einen Teil der Datenbank im Cache zu behalten, sodass zukünftige `format` Aufrufe Lokalisierungsstrings in einem eingeschränkteren Kontext suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung geben exakt den gleichen String wie {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}} zurück und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Die `calendar` Option muss mit dem gleichen Wert wie der Kalender dieses Monats-Tages angegeben werden. Bezüglich der [Datum-Zeit-Komponentenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und der Stil-Abkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen haben:
    - Keine davon angeben: `month` und `day` werden auf `"numeric"` voreingestellt.
    - Nur `dateStyle` angeben: es wird auf `month` und `day` Formate erweitert.
    - Einige Datum-Zeit-Komponentenoptionen angeben, wobei mindestens eine `month` oder `day` ist. Nur die angegebenen Datumskomponenten werden in die Ausgabe aufgenommen.

Details zu diesen Parametern und deren Verwendung finden Sie im [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Rückgabewert

Ein String, der den gegebenen Monat-Tag gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies gleichbedeutend mit `new Intl.DateTimeFormat(locales, options).format(monthDay)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Die Ausgabe kann jedoch je nach Implementierung variieren, selbst innerhalb derselben Lokalisierung — Ausgabenabweichungen sind vom Design her erlaubt und durch die Spezifikation festgelegt. Es könnte auch nicht das sein, was Sie erwarten. Beispielsweise kann die Zeichenfolge geschützte Leerzeichen oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe eines `locale` gibt einen formatierten String in der Standardsprache und mit Standardoptionen zurück.

```js
// Note that just specifying "08-01" defaults to the ISO 8601 calendar,
// which throws an error if the locale's default calendar is not ISO 8601.
const md = Temporal.PlainMonthDay.from("2021-08-01[u-ca=gregory]");

console.log(md.toLocaleString()); // 8/1 (assuming en-US locale and Gregorian calendar)
```

Wenn der Kalender des Monats-Tages nicht mit dem Standardkalender der Lokalisierung übereinstimmt, selbst wenn sein Kalender `iso8601` ist, muss eine explizite `calendar` Option mit demselben Wert angegeben werden.

```js
const md = Temporal.PlainMonthDay.from("08-01");
md.toLocaleString("en-US", { calendar: "iso8601" }); // 08-01
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Monats-Tages in die Ausgabe aufgenommen werden, indem Sie den `options` Parameter angeben.

```js
const md = Temporal.PlainMonthDay.from("2021-08-01[u-ca=gregory]");
md.toLocaleString("en-US", { dateStyle: "full" }); // August 1
md.toLocaleString("en-US", { month: "long" }); // August
md.toLocaleString("en-US", { day: "numeric" }); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}}
