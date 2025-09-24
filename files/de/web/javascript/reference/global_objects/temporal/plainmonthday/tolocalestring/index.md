---
title: Temporal.PlainMonthDay.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toLocaleString
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{SeeCompatTable}}

Die **`toLocaleString()`**-Methode von {{jsxref("Temporal.PlainMonthDay")}} Instanzen gibt einen String mit einer sprachsensitiven Darstellung dieses Monats-Tages zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungs-Strings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt sich die übergebenen Argumente merkt und sich möglicherweise dafür entscheidet, einen Teil der Datenbank zu zwischenspeichern, sodass zukünftige `format`-Aufrufe die Lokalisierungs-Strings in einem enger begrenzten Kontext durchsuchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales`- und `options`-Parameter passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)-Konstruktors. Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` geben genau denselben String zurück wie {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}} und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)-Parameter des `Intl.DateTimeFormat()`-Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt zur Anpassung des Ausgabeformats. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)-Parameter des `Intl.DateTimeFormat()`-Konstruktors. Die `calendar`-Option muss mit demselben Wert angegeben werden wie der Kalender dieses Monats-Tages. Bezüglich der [Optionen für Datum-Zeit-Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und der Stilabkürzungen (`dateStyle` und `timeStyle`) sollte eine der folgenden Formen verwendet werden:
    - Keine der Optionen angeben: `month` und `day` werden standardmäßig auf `"numeric"` gesetzt.
    - Nur `dateStyle` angeben: Es wird auf `month`- und `day`-Formate erweitert.
    - Einige Optionen für Datum-Zeit-Komponenten angeben, wobei mindestens eine davon `month` oder `day` ist. Nur die angegebenen Datenkomponenten werden in die Ausgabe einbezogen.

Weitere Informationen zu diesen Parametern und deren Verwendung finden Sie im [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Rückgabewert

Ein String, der den angegebenen Monat-Tag gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies gleichbedeutend mit `new Intl.DateTimeFormat(locales, options).format(monthDay)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Die Formatierung, die von `toLocaleString()` zurückgegeben wird, ist meist konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Locale — diese Ausgabevariationen sind von Design her vorgesehen und durch die Spezifikation erlaubt. Möglicherweise entspricht sie auch nicht Ihren Erwartungen. Beispielsweise kann der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht den erwarteten Typ hat.

## Beispiele

### Verwendung von toLocaleString()

Der grundlegende Gebrauch dieser Methode ohne Angabe einer `locale` gibt einen formatierten String in der Standardsprache mit Standardoptionen zurück.

```js
// Note that just specifying "08-01" defaults to the ISO 8601 calendar,
// which throws an error if the locale's default calendar is not ISO 8601.
const md = Temporal.PlainMonthDay.from("2021-08-01[u-ca=gregory]");

console.log(md.toLocaleString()); // 8/1 (assuming en-US locale and Gregorian calendar)
```

Wenn der Kalender des Monats-Tages nicht mit dem Standardkalender der Locale übereinstimmt, muss selbst wenn sein Kalender `iso8601` ist, eine explizite `calendar`-Option mit demselben Wert angegeben werden.

```js
const md = Temporal.PlainMonthDay.from("08-01");
md.toLocaleString("en-US", { calendar: "iso8601" }); // 08-01
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Monats-Tages in die Ausgabe aufgenommen werden, indem Sie den `options`-Parameter angeben.

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
