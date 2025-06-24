---
title: Temporal.PlainDateTime.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toLocaleString
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}{{SeeCompatTable}}

Die **`toLocaleString()`** Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine sprachsensitivierte Darstellung dieses Datums-Zeitpunkts als Zeichenkette zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit den gleichen Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format` Aufrufe innerhalb eines eingeschränkteren Kontexts nach Lokalisierungszeichenfolgen suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und lassen Anwendungen die Sprache spezifizieren, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung geben genau die gleiche Zeichenkette wie {{jsxref("Temporal/PlainDateTime/toString", "toString()")}} zurück und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Falls der Kalender dieses Datums-Zeitpunkts nicht `"iso8601"` ist, muss die `calendar` Option mit demselben Wert bereitgestellt werden; andernfalls, wenn der Kalender dieses Datums-Zeitpunkts `"iso8601"` ist, kann die `calendar` Option jeden Wert annehmen. In Bezug auf die [Datums-Zeitpunkt-Komponentenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und die Stilabkürzungen (`dateStyle` und `timeStyle`), sollten die Optionen eine der folgenden Formen haben:
    - Keine davon angeben: `year`, `month`, `day`, `hour`, `minute` und `second` werden auf `"numeric"` gesetzt.
    - Mindestens eine von `dateStyle` oder `timeStyle` angeben: die Datums-Zeitpunkt-Komponenten werden entsprechend dem angegebenen Stil und der Sprache gesetzt.
    - Einige Datums-Zeitpunkt-Komponentenoptionen angeben. Nur die angegebenen Datums-Zeitpunkt-Komponenten werden in die Ausgabe aufgenommen.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und wie sie zu verwenden sind.

### Rückgabewert

Eine Zeichenkette, die den angegebenen Datums-Zeitpunkt gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(dateTime)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist die Formatierung, die von `toLocaleString()` zurückgegeben wird, konsistent. Jedoch kann die Ausgabe zwischen verschiedenen Implementierungen, selbst innerhalb derselben Sprache, variieren — Variationen werden vom Design erlaubt und durch die Spezifikation zugelassen. Sie entspricht möglicherweise auch nicht Ihren Erwartungen. Zum Beispiel könnte die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festkodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht den erwarteten Typ hat.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt eine formatierte Zeichenkette in der Standard-Sprache und mit den Standardoptionen zurück.

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56");

console.log(dt.toLocaleString()); // 8/1/2021, 12:34:56 PM (assuming en-US locale)
```

Wenn der Kalender des Datums nicht mit dem Standardkalender der Sprache übereinstimmt und der Kalender des Datums nicht `iso8601` ist, muss eine explizite `calendar` Option mit demselben Wert angegeben werden.

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56[u-ca=japanese]");
// The ja-JP locale uses the Gregorian calendar by default
dt.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1 12:34:56
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Datums in der Ausgabe enthalten sind, indem Sie den `options` Parameter angeben.

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
