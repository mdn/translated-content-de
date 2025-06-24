---
title: Temporal.PlainMonthDay.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toLocaleString
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}{{SeeCompatTable}}

Die **`toLocaleString()`**-Methode von {{jsxref("Temporal.PlainMonthDay")}}-Instanzen gibt eine sprachsensitiv formatierte Darstellung dieses Monats-Tages als Zeichenkette zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungs-Strings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt die übergebenen Argumente speichert und möglicherweise entscheidet, einen Teil der Datenbank zwischenzuspeichern, so dass zukünftige `format`-Aufrufe Lokalisierungs-Strings in einem eingeschränkteren Kontext durchsuchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des Konstruktors [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Implementierungen ohne `Intl.DateTimeFormat`-Unterstützung geben genau dieselbe Zeichenkette zurück wie {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}} und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprachtag oder ein Array solcher Strings. Entspricht dem [`locales`-Parameter](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) des `Intl.DateTimeFormat()`-Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt zur Anpassung des Ausgabeformats. Entspricht dem [`options`-Parameter](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) des `Intl.DateTimeFormat()`-Konstruktors. Die `calendar`-Option muss mit demselben Wert wie der Kalender dieses Monats-Tages angegeben werden. Bezüglich der [Datum-Zeit-Komponentenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und der Stil-Kurzformen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen haben:
    - Keine von ihnen angeben: `month` und `day` werden als `"numeric"` voreingestellt.
    - Nur `dateStyle` angeben: es erweitert sich auf `month`- und `day`-Formate.
    - Einige Datum-Zeit-Komponentenoptionen angeben, wobei mindestens eine von ihnen `month` oder `day` ist. Nur die angegebenen Datumsbestandteile werden in die Ausgabe aufgenommen.

Siehe den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenkette, die den angegebenen Monats-Tag gemäß sprachspezifischer Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(monthDay)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> In den meisten Fällen ist die von `toLocaleString()` zurückgegebene Formatierung konsistent. Allerdings kann die Ausgabe zwischen verschiedenen Implementierungen, selbst innerhalb derselben Sprache, variieren — Ausgabevariationen sind absichtlich und durch die Spezifikation erlaubt. Sie ist möglicherweise auch nicht das, was Sie erwarten. Beispielsweise kann die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festcodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht den erwarteten Typ hat.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt eine formatierte Zeichenkette in der Standardsprache und mit Standardoptionen zurück.

```js
// Note that just specifying "08-01" defaults to the ISO 8601 calendar,
// which throws an error if the locale's default calendar is not ISO 8601.
const md = Temporal.PlainMonthDay.from("2021-08-01[u-ca=gregory]");

console.log(md.toLocaleString()); // 8/1 (assuming en-US locale and Gregorian calendar)
```

Wenn der Kalender des Monats-Tages nicht mit dem Standardkalender der Sprache übereinstimmt, selbst wenn sein Kalender `iso8601` ist, muss eine explizite `calendar`-Option mit demselben Wert angegeben werden.

```js
const md = Temporal.PlainMonthDay.from("08-01");
md.toLocaleString("en-US", { calendar: "iso8601" }); // 08-01
```

### Verwendung von toLocaleString() mit Optionen

Sie können angeben, welche Teile des Monats-Tages in die Ausgabe aufgenommen werden sollen, indem Sie den `options`-Parameter angeben.

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
