---
title: Temporal.PlainDate.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toLocaleString
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toLocaleString()`**-Methode von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt einen string mit einer sprachsensitiven Darstellung dieses Datums zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss sie eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchführen, was potenziell ineffizient ist. Wenn die Methode oft mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt sich die übergebenen Argumente merkt und sich möglicherweise entscheidet, einen Teil der Datenbank zwischenzuspeichern, sodass zukünftige `format`-Aufrufe nach Lokalisierungszeichenfolgen innerhalb eines stärker eingeschränkten Kontexts suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales`- und `options`-Parameter passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter exakt den Parametern des Konstruktors [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Implementierungen ohne `Intl.DateTimeFormat`-Unterstützung geben denselben String zurück wie {{jsxref("Temporal/PlainDate/toString", "toString()")}}, wobei beide Parameter ignoriert werden.

- `locales` {{optional_inline}}
  - : Ein string mit einem BCP 47-Sprachtag oder ein Array solcher strings. Entspricht dem [`locales`-Parameter](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) des `Intl.DateTimeFormat()`-Konstruktors.
- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`-Parameter](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) des `Intl.DateTimeFormat()`-Konstruktors. Wenn der Kalender dieses Datums nicht `"iso8601"` ist, muss die `calendar`-Option mit demselben Wert angegeben werden; andernfalls, wenn der Kalender dieses Datums `"iso8601"` ist, kann die `calendar`-Option einen beliebigen Wert haben. In Bezug auf die [Datum-Zeit-Komponentenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und die Stilabkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen aufweisen:

    - Keine davon angeben: `year`, `month` und `day` werden auf `"numeric"` standardmäßig gesetzt.
    - Nur `dateStyle` angeben: Er wird zu `weekday`, `era`, `year`, `month` und `day`-Formaten erweitert.
    - Einige Datum-Zeit-Komponentenoptionen angeben, wobei mindestens eine davon eine Datumsoption ist (`weekday`, `year`, `month`, `day`). Nur die angegebenen Datumskomponenten werden in der Ausgabe enthalten sein.

Siehe den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Ein string, der das angegebene Datum gemäß sprachspezifischer Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist die von `toLocaleString()` zurückgegebene Formatierung konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Locale — Abweichungen in der Ausgabe sind beabsichtigt und durch die Spezifikation erlaubt. Sie kann möglicherweise auch nicht das sein, was Sie erwarten. Zum Beispiel kann der string geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt einen formatierten string in der Standardsprache und mit Standardoptionen zurück.

```js
const date = Temporal.PlainDate.from("2021-08-01");

console.log(date.toLocaleString()); // 8/1/2021 (assuming en-US locale)
```

Wenn der Kalender des Datums nicht mit dem Standardkalender der Locale übereinstimmt und der Kalender des Datums nicht `iso8601` ist, muss eine explizite `calendar`-Option mit demselben Wert angegeben werden.

```js
const date = Temporal.PlainDate.from("2021-08-01[u-ca=japanese]");
// The ja-JP locale uses the Gregorian calendar by default
date.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Datums in der Ausgabe enthalten sind, indem Sie den `options`-Parameter angeben.

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
