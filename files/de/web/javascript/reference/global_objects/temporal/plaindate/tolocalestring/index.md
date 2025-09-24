---
title: Temporal.PlainDate.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toLocaleString
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{SeeCompatTable}}

Die **`toLocaleString()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt eine Zeichenkette mit einer sprachsensitiven Darstellung dieses Datums zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss in einer großen Datenbank nach Lokalisierungszeichenfolgen gesucht werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt sich die übergebenen Argumente merkt und entscheiden kann, einen Teil der Datenbank zu zwischenspeichern, sodass zukünftige `format`-Aufrufe innerhalb eines eingeschränkteren Kontexts nach Lokalisierungszeichenfolgen suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)-Konstruktors. Implementierungen ohne `Intl.DateTimeFormat`-Unterstützung geben exakt denselben String zurück wie {{jsxref("Temporal/PlainDate/toString", "toString()")}} und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Eine Zeichenkette mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder ein Array solcher Zeichenketten. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)-Parameter des `Intl.DateTimeFormat()`-Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)-Parameter des `Intl.DateTimeFormat()`-Konstruktors. Wenn der Kalender dieses Datums nicht "`iso8601`" ist, muss die `calendar`-Option mit demselben Wert angegeben werden; andernfalls, wenn der Kalender dieses Datums "`iso8601`" ist, kann die `calendar`-Option einen beliebigen Wert haben. Bezüglich der [Datum-Zeit-Komponentenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und den Stil-Abkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen befolgen:
    - Keine davon angeben: `year`, `month` und `day` werden auf "`numeric`" standardmäßig gesetzt.
    - Nur `dateStyle` angeben: es erweitert sich auf `weekday`, `era`, `year`, `month` und `day` Formate.
    - Einige Datum-Zeit-Komponentenoptionen angeben, von denen mindestens eine eine Datumsoption ist (`weekday`, `year`, `month`, `day`). Nur die angegebenen Datumsbestandteile werden in der Ausgabe enthalten sein.

Siehe den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenkette, die das angegebene Datum gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist die Formatierung, die von `toLocaleString()` zurückgegeben wird, konsistent. Dennoch kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Sprache — Ausgabeschwankungen sind absichtlich und von der Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Zum Beispiel kann die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festcodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt eine formatierte Zeichenkette in der Standardsprache und mit Standardoptionen zurück.

```js
const date = Temporal.PlainDate.from("2021-08-01");

console.log(date.toLocaleString()); // 8/1/2021 (assuming en-US locale)
```

Wenn der Kalender des Datums nicht mit dem Standardkalender der Sprache übereinstimmt und der Kalender des Datums nicht `iso8601` ist, muss die `calendar`-Option explizit mit demselben Wert angegeben werden.

```js
const date = Temporal.PlainDate.from("2021-08-01[u-ca=japanese]");
// The ja-JP locale uses the Gregorian calendar by default
date.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Datums in der Ausgabe enthalten sind, indem Sie den `options`-Parameter bereitstellen.

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
