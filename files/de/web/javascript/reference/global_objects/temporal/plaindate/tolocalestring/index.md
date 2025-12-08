---
title: Temporal.PlainDate.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toLocaleString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toLocaleString()`**-Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt einen String mit einer sprachabhängigen Darstellung dieses Datums zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat`-Objekt die übergebenen Argumente speichert und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format`-Aufrufe Lokalisierungsstrings in einem engeren Kontext durchsuchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales`- und `options`-Parameter passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache zu spezifizieren, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)-Konstruktors. Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` geben denselben String zurück wie {{jsxref("Temporal/PlainDate/toString", "toString()")}}, wobei beide Parameter ignoriert werden.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)-Parameter des `Intl.DateTimeFormat()`-Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Ausgabeform anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)-Parameter des `Intl.DateTimeFormat()`-Konstruktors. Wenn der Kalender dieses Datums nicht `"iso8601"` ist, muss die `calendar`-Option mit demselben Wert angegeben werden; andernfalls kann die `calendar`-Option bei einem `"iso8601"` Datum einen beliebigen Wert haben. In Bezug auf die [Datums- und Zeit-Komponentenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und die Stil-Verknüpfungen (`dateStyle` und `timeStyle`) sollten die Optionen eine dieser Formen annehmen:
    - Keine davon bereitstellen: `year`, `month` und `day` verwenden standardmäßig `"numeric"`.
    - Nur `dateStyle` bereitstellen: es erweitert sich zu `weekday`, `era`, `year`, `month` und `day` Formaten.
    - Einige Datums- und Zeit-Komponentenoptionen bereitstellen, wobei mindestens eine davon eine Datumsoption ist (`weekday`, `year`, `month`, `day`). Nur die angegebenen Datums-Komponenten werden in die Ausgabe aufgenommen.

Siehe den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Ein String, der das gegebene Datum gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies gleichbedeutend mit `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> In den meisten Fällen ist die durch `toLocaleString()` zurückgegebene Formatierung konsistent. Das Ergebnis kann jedoch zwischen Implementierungen variieren, selbst innerhalb derselben Lokalisierung — Variationen sind designbedingt und von der Spezifikation erlaubt. Es könnte auch nicht dem entsprechen, was Sie erwarten. Zum Beispiel könnte der String nicht trennbare Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festkodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht den erwarteten Typ hat.

## Beispiele

### Verwendung von toLocaleString()

Grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt einen formatierten String in der Standardsprache und mit Standardoptionen zurück.

```js
const date = Temporal.PlainDate.from("2021-08-01");

console.log(date.toLocaleString()); // 8/1/2021 (assuming en-US locale)
```

Wenn der Kalender des Datums nicht mit dem Standardkalender der Lokalisierung übereinstimmt und der Kalender des Datums nicht `iso8601` ist, muss eine explizite `calendar`-Option mit demselben Wert angegeben werden.

```js
const date = Temporal.PlainDate.from("2021-08-01[u-ca=japanese]");
// The ja-JP locale uses the Gregorian calendar by default
date.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Datums in die Ausgabe aufgenommen werden, indem Sie den `options`-Parameter bereitstellen.

```js
const date = Temporal.PlainDate.from("2021-08-01");
date.toLocaleString("en-US", { dateStyle: "full" }); // Sunday, August 1, 2021
date.toLocaleString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
}); // August 1, 2021
date.toLocaleString("en-US", { year: "numeric", month: "long" }); // August 2021
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
