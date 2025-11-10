---
title: Temporal.PlainYearMonth.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toLocaleString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Die **`toLocaleString()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt eine sprachspezifische Darstellung dieses Jahr-Monats als Zeichenkette zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode mehrfach mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format`-Aufrufe Lokalisierungsstrings in einem eingeschränkterem Kontext suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales`- und `options`-Parameter passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne Unterstützung von `Intl.DateTimeFormat` geben genau denselben String wie {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}} zurück und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)-Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)-Parameter des `Intl.DateTimeFormat()` Konstruktors. Die `calendar`-Option muss denselben Wert wie der Kalender dieses Jahr-Monats haben. Hinsichtlich der [Datums-/Zeitkomponenten-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und der Stil-Abkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen haben:
    - Keiner von ihnen: `year` und `month` werden auf `"numeric"` voreingestellt.
    - Nur `dateStyle` angeben: es erweitert sich zu `era`, `year` und `month` Formaten.
    - Einige Datums-/Zeitkomponenten-Optionen angeben, wobei mindestens eine davon `year` oder `month` ist. Nur die angegebenen Datums-Komponenten werden in die Ausgabe einbezogen.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Ein String, der den gegebenen Jahr-Monat nach sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies gleichwertig mit `new Intl.DateTimeFormat(locales, options).format(yearMonth)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist die von `toLocaleString()` zurückgegebene Formatierung konsistent. Jedoch kann die Ausgabe zwischen Implementierungen variieren, sogar innerhalb desselben Gebietsschemas – Variationen sind designbedingt und durch die Spezifikation erlaubt. Sie entspricht möglicherweise auch nicht Ihren Erwartungen. Beispielsweise könnte die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest kodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht den erwarteten Typ hat.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt einen formatierten String in dem Standardgebietsschema und mit Standardoptionen zurück.

```js
// Note that just specifying "2021-08" defaults to the ISO 8601 calendar,
// which throws an error if the locale's default calendar is not ISO 8601.
const ym = Temporal.PlainYearMonth.from("2021-08-01[u-ca=gregory]");

console.log(ym.toLocaleString()); // 8/2021 (assuming en-US locale and Gregorian calendar)
```

Wenn der Kalender des Jahr-Monats nicht mit dem Standardkalender der `locale` übereinstimmt, selbst wenn der Kalender `iso8601` ist, muss explizit eine `calendar`-Option mit demselben Wert angegeben werden.

```js
const ym = Temporal.PlainYearMonth.from("2021-08");
ym.toLocaleString("en-US", { calendar: "iso8601" }); // 2021-08
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Jahr-Monats in die Ausgabe aufgenommen werden, indem Sie den `options`-Parameter angeben.

```js
const ym = Temporal.PlainYearMonth.from("2021-08-01[u-ca=gregory]");
ym.toLocaleString("en-US", { dateStyle: "full" }); // August 2021
ym.toLocaleString("en-US", { year: "2-digit" }); // 21
ym.toLocaleString("en-US", { month: "long" }); // August
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
