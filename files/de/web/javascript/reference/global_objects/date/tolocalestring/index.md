---
title: Date.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die Methode **`toLocaleString()`** von {{jsxref("Date")}}-Instanzen gibt einen string mit einer sprachsensitiven Darstellung dieses Datums in der lokalen Zeitzone zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode oft mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format`-Aufrufe innerhalb eines eingeschränkteren Kontexts nach Lokalisierungsstrings suchen können.

{{InteractiveExample("JavaScript Demo: Date.prototype.toLocaleString()")}}

```js interactive-example
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString("en-GB", { timeZone: "UTC" }));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString("ko-KR", { timeZone: "UTC" }));
// Expected output: "2012. 12. 20. 오전 3:00:00"
```

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache festzulegen, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau denen des Konstruktors [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` werden angewiesen, beide Parameter zu ignorieren, was dazu führt, dass die verwendete Lokalisierung und die Form des zurückgegebenen Strings vollständig von der Implementierung abhängen.

- `locales` {{optional_inline}}

  - : Ein string mit einem BCP 47-Sprachkennzeichen oder ein Array solcher strings. Entspricht dem Parameter [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) des Konstruktors `Intl.DateTimeFormat()`.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert und normalerweise die Lokalisierung des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem Parameter [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) des Konstruktors `Intl.DateTimeFormat()`. Wenn `weekday`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second` und `fractionalSecondDigits` alle undefiniert sind, werden `year`, `month`, `day`, `hour`, `minute`, `second` auf `"numeric"` festgelegt.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert.

Siehe den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und wie sie verwendet werden.

### Rückgabewert

Ein string, der das angegebene Datum gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(date)`.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe je nach Implementierung variieren, selbst innerhalb derselben Lokalisierung — Ausgabevariationen sind gewollt und durch die Spezifikation erlaubt. Es ist eventuell auch nicht das, was Sie erwarten. So kann der string beispielsweise nicht-umbruchbare Leerzeichen verwenden oder von Steuerzeichen für bidirektionalen Text umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest kodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt einen formatierten string in der Standard-Lokalisierung und mit Standardoptionen zurück.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString() without arguments depends on the
// implementation, the default locale, and the default time zone
console.log(date.toLocaleString());
// "12/11/2012, 7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
```

### Überprüfung der Unterstützung der Parameter locales und options

Die Parameter `locales` und `options` sind möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht über die erforderlichen Daten verfügen. Für Implementierungen ohne Unterstützung für Internationalisierung verwendet `toLocaleString()` immer die lokale Sprache des Systems, was möglicherweise nicht das Gewünschte ist. Da jede Implementierung, die die Parameter `locales` und `options` unterstützt, auch die {{jsxref("Intl")}}-API unterstützen muss, können Sie deren Existenz zur Unterstützung überprüfen:

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### Verwendung von locales

Dieses Beispiel zeigt einige Variationen in lokalisierten Datums- und Zeitformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, geben Sie sicher diese Sprache (und möglicherweise einige Ausweichsprachen) mit dem Argument `locales` an:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order and 12-hour time with AM/PM
console.log(date.toLocaleString("en-US"));
// "12/19/2012, 7:00:00 PM"

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(date.toLocaleString("en-GB"));
// "20/12/2012 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(date.toLocaleString("ko-KR"));
// "2012. 12. 20. 오후 12:00:00"

// Arabic in most Arabic-speaking countries uses Eastern Arabic numerals
console.log(date.toLocaleString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// For Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// "24/12/20 12:00:00"

// When requesting a language that may not be supported, such as
// Balinese, include a fallback language (in this case, Indonesian)
console.log(date.toLocaleString(["ban", "id"]));
// "20/12/2012 11.00.00"
```

### Verwendung von options

Die Ergebnisse, die von `toLocaleString()` bereitgestellt werden, können mit dem Parameter `options` angepasst werden:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Request a weekday along with a long date
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// An application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleString("en-US", options));
// "Thursday, December 20, 2012, GMT"

// Sometimes even the US needs 24-hour time
console.log(date.toLocaleString("en-US", { hour12: false }));
// "12/19/2012, 19:00:00"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
