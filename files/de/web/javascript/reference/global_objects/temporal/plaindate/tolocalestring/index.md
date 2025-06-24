---
title: Temporal.PlainDate.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toLocaleString
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}{{SeeCompatTable}}

Die **`toLocaleString()`** Methode von {{jsxref("Temporal.PlainDate")}} Instanzen gibt einen sprachabhängigen String zurück, der diese Datum darstellt. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) wird diese Methode an `Intl.DateTimeFormat` delegiert.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit den gleichen Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise einen Ausschnitt der Datenbank zwischenspeichert, wodurch zukünftige `format` Aufrufe Lokalisierungsstrings innerhalb eines kleineren Kontextes suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales` und `options` Parameter passen das Verhalten der Funktion an und ermöglichen es Anwendungen, anzugeben, welche Sprache für die Formatierung verwendet werden soll.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne Unterstützung von `Intl.DateTimeFormat` geben genau denselben String zurück wie {{jsxref("Temporal/PlainDate/toString", "toString()")}}, ignorieren jedoch beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Wenn der Kalender dieses Datums nicht `"iso8601"` ist, muss die `calendar` Option denselben Wert haben; andernfalls, wenn der Kalender dieses Datums `"iso8601"` ist, kann die `calendar` Option jeden Wert haben. Bezüglich der [Datum-Zeit-Komponenten-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und der Stilabkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen aufweisen:
    - Keine davon angeben: `year`, `month` und `day` werden standardmäßig auf `"numeric"` gesetzt.
    - Nur `dateStyle` angeben: es erweitert sich zu `weekday`, `era`, `year`, `month` und `day` Formaten.
    - Einige Datum-Zeit-Komponenten-Optionen angeben, wobei mindestens eine davon eine Datum-Option ist (`weekday`, `year`, `month`, `day`). Nur die angegebenen Datumskomponenten werden in die Ausgabe einbezogen.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und wie man sie verwendet.

### Rückgabewert

Ein String, der das angegebene Datum gemäß den sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies gleichbedeutend mit `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Locale — Variationen in der Ausgabe sind beabsichtigt und durch die Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Zum Beispiel kann der String nicht-unterbrechende Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest kodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt einen formatierten String in der Standard-Locale und mit Standardoptionen zurück.

```js
const date = Temporal.PlainDate.from("2021-08-01");

console.log(date.toLocaleString()); // 8/1/2021 (assuming en-US locale)
```

Wenn der Kalender des Datums nicht mit dem Standardkalender der Locale übereinstimmt und der Kalender des Datums nicht `iso8601` ist, muss eine explizite `calendar` Option mit demselben Wert angegeben werden.

```js
const date = Temporal.PlainDate.from("2021-08-01[u-ca=japanese]");
// The ja-JP locale uses the Gregorian calendar by default
date.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Datums in der Ausgabe enthalten sind, indem Sie den `options` Parameter angeben.

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
