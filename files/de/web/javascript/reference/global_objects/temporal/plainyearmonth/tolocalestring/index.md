---
title: Temporal.PlainYearMonth.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toLocaleString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die Methode **`toLocaleString()`** von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt eine sprachsensitive Zeichenkette mit einer Darstellung des Jahres-Monats zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und seine Methode {{jsxref("Intl/DateTimeFormat/format", "format()")}} zu verwenden, da ein `DateTimeFormat`-Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format` Aufrufe innerhalb eines eingeschränkten Kontexts nach Lokalisierungsstrings suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und erlauben Anwendungen, die Sprache zu spezifizieren, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung geben genau denselben String wie {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}} zurück und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}, oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Die `calendar` Option muss mit demselben Wert wie der Kalender von diesem Jahres-Monat angegeben werden. Bezüglich der [Optionskomponenten für Datum und Uhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und den Stilabkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen einer der folgenden Formen folgen:
    - Keine von ihnen bereitstellen: `year` und `month` haben standardmäßig den Wert `"numeric"`.
    - Nur `dateStyle` bereitstellen: es erweitert sich zu `era`, `year` und `month` Formaten.
    - Einige Optionskomponenten für Datum und Uhrzeit bereitstellen, wobei mindestens eine von ihnen `year` oder `month` ist. Nur die angegebenen Datumsbestandteile werden in die Ausgabe eingeschlossen.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenkette, die das gegebene Jahr-Monat entsprechend sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(yearMonth)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist die Formatierung von `toLocaleString()` konsistent. Allerdings kann sich die Ausgabe zwischen Implementierungen unterscheiden, sogar innerhalb desselben Gebietsschemas – Abweichungen in der Ausgabe sind beabsichtigt und durch die Spezifikation erlaubt. Sie könnte auch nicht Ihren Erwartungen entsprechen. Zum Beispiel könnte die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festkodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe eines `locale` gibt eine formatierte Zeichenkette im Standardgebietsschema und mit Standardoptionen zurück.

```js
// Note that just specifying "2021-08" defaults to the ISO 8601 calendar,
// which throws an error if the locale's default calendar is not ISO 8601.
const ym = Temporal.PlainYearMonth.from("2021-08-01[u-ca=gregory]");

console.log(ym.toLocaleString()); // 8/2021 (assuming en-US locale and Gregorian calendar)
```

Wenn der Kalender des Jahres-Monats nicht mit dem Standardkalender des Gebietsschemas übereinstimmt, auch wenn sein Kalender `iso8601` ist, muss eine explizite `calendar` Option mit demselben Wert bereitgestellt werden.

```js
const ym = Temporal.PlainYearMonth.from("2021-08");
ym.toLocaleString("en-US", { calendar: "iso8601" }); // 2021-08
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Jahres-Monats in die Ausgabe aufgenommen werden, indem Sie den Parameter `options` bereitstellen.

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
