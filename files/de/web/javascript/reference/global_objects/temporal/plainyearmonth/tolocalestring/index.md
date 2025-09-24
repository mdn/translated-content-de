---
title: Temporal.PlainYearMonth.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toLocaleString
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{SeeCompatTable}}

Die **`toLocaleString()`** Methode von Instanzen von {{jsxref("Temporal.PlainYearMonth")}} gibt eine Zeichenkette mit einer sprachsensitiven Darstellung dieses Jahres-Monats zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank im Cache speichert, sodass zukünftige `format`-Aufrufe in einem stärker eingeschränkten Kontext nach Lokalisierungszeichenfolgen suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und lassen Anwendungen die Sprache angeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)-Konstruktors. Implementierungen ohne `Intl.DateTimeFormat`-Unterstützung geben exakt dieselbe Zeichenkette wie {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}} zurück und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)-Parameter des `Intl.DateTimeFormat()`-Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)-Parameter des `Intl.DateTimeFormat()`-Konstruktors. Die `calendar`-Option muss mit dem gleichen Wert wie das Kalender des Jahres-Monats angegeben werden. Bezüglich der [Datums- und Zeitkomponenten-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und den Stilabkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen haben:
    - Keine davon angeben: `year` und `month` werden auf `"numeric"` standardmäßig gesetzt.
    - Nur `dateStyle` angeben: es erweitert sich zu den Formaten `era`, `year` und `month`.
    - Einige Datums- und Zeitkomponenten-Optionen angeben, wobei mindestens eine davon `year` oder `month` ist. Nur die angegebenen Datumskomponenten werden in die Ausgabe einbezogen.

Siehe den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenkette, die den angegebenen Jahres-Monat nach sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies äquivalent zu `new Intl.DateTimeFormat(locales, options).format(yearMonth)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist die Formatierung, die von `toLocaleString()` zurückgegeben wird, konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb desselben Gebietsschemas — Ausgabevariationen sind designbedingt und durch die Spezifikation erlaubt. Sie entspricht möglicherweise auch nicht Ihren Erwartungen. Zum Beispiel kann die Zeichenkette nicht trennbare Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit hartcodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Nutzung dieser Methode ohne Angabe eines `locale` gibt eine formatierte Zeichenkette in der Standardsprache und mit den Standardoptionen zurück.

```js
// Note that just specifying "2021-08" defaults to the ISO 8601 calendar,
// which throws an error if the locale's default calendar is not ISO 8601.
const ym = Temporal.PlainYearMonth.from("2021-08-01[u-ca=gregory]");

console.log(ym.toLocaleString()); // 8/2021 (assuming en-US locale and Gregorian calendar)
```

Wenn das Kalender des Jahres-Monats nicht mit dem Standardkalender des Gebietsschemas übereinstimmt, selbst wenn sein Kalender `iso8601` ist, muss eine explizite `calendar`-Option mit dem gleichen Wert bereitgestellt werden.

```js
const ym = Temporal.PlainYearMonth.from("2021-08");
ym.toLocaleString("en-US", { calendar: "iso8601" }); // 2021-08
```

### Nutzung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Jahres-Monats in die Ausgabe einbezogen werden, indem Sie den `options`-Parameter angeben.

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
