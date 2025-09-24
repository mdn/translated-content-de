---
title: Temporal.PlainDateTime.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toLocaleString
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{SeeCompatTable}}

Die **`toLocaleString()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt einen String mit einer sprachabhängigen Darstellung dieses Datums-Zeit-Werts zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank mit Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt die übergebenen Argumente speichert und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format` Aufrufe Lokalisierungsstrings in einem eingeschränkteren Kontext suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung geben denselben String zurück wie {{jsxref("Temporal/PlainDateTime/toString", "toString()")}}, wobei beide Parameter ignoriert werden.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}, oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Wenn der Kalender dieses Datums-Zeit-Werts nicht `"iso8601"` ist, muss die `calendar` Option mit demselben Wert angegeben werden; andernfalls, wenn der Kalender dieses Datums-Zeit-Werts `"iso8601"` ist, kann die `calendar` Option beliebig sein. Bezüglich der [Datums-Zeit-Komponenten-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und der Stil-Abkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen haben:
    - Keine davon angeben: `year`, `month`, `day`, `hour`, `minute` und `second` werden auf `"numeric"` standardmäßig gesetzt.
    - Mindestens eine von `dateStyle` oder `timeStyle` angeben: die Datums-Zeit-Komponenten werden gemäß dem angegebenen Stil und der Locale eingestellt.
    - Einige Datums-Zeit-Komponenten-Optionen angeben. Nur die angegebenen Datums-Zeit-Komponenten werden in die Ausgabe einbezogen.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und ihrer Verwendung.

### Rückgabewert

Ein String, der den gegebenen Datums-Zeit-Wert gemäß sprachspezifischer Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(dateTime)`, wobei `options` wie oben beschrieben normalisiert wurden.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen verschiedenen Implementierungen variieren, sogar innerhalb derselben Locale – Variationen in der Ausgabe sind absichtlich und durch die Spezifikation erlaubt. Es könnte auch nicht das sein, was Sie erwarten. Zum Beispiel könnte der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht den erwarteten Typ hat.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Nutzung dieser Methode ohne Angabe einer `locale` gibt einen formatierten String in der Standard-Locale und mit Standardoptionen zurück.

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56");

console.log(dt.toLocaleString()); // 8/1/2021, 12:34:56 PM (assuming en-US locale)
```

Wenn der Kalender des Datums nicht mit dem Standardkalender der Locale übereinstimmt, und der Kalender des Datums nicht `iso8601` ist, muss eine explizite `calendar` Option mit demselben Wert angegeben werden.

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56[u-ca=japanese]");
// The ja-JP locale uses the Gregorian calendar by default
dt.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1 12:34:56
```

### Verwendung von toLocaleString() mit Optionen

Sie können mit dem `options` Parameter anpassen, welche Teile des Datums in der Ausgabe enthalten sind.

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56");
dt.toLocaleString("en-US", { dateStyle: "full", timeStyle: "full" }); // Sunday, August 1, 2021 at 12:34:56 PM
dt.toLocaleString("en-US", {
  year: "numeric",
  month: "long",
  hour: "numeric",
}); // August 2021 at 12 PM
dt.toLocaleString("en-US", {
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
}); // 2021, 12:34 PM
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}
