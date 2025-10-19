---
title: Date.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
l10n:
  sourceCommit: b4dcb7afa10f94c68e56d60f9b01804bffcc8345
---

Die **`toLocaleString()`** Methode von {{jsxref("Date")}} Instanzen gibt einen stringbasierten, sprachabhängigen Ausdruck dieses Datums in der lokalen Zeitzone zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) leitet diese Methode an `Intl.DateTimeFormat` weiter.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit den gleichen Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu benutzen, da ein `DateTimeFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise entscheidet, einen Teil der Datenbank im Cache zu behalten, sodass zukünftige `format` Aufrufe Lokalisierungsstrings in einem stärker eingeschränkten Kontext suchen können.

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

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` sind angewiesen, beide Parameter zu ignorieren, was dazu führt, dass die verwendete Sprache und die Form des zurückgegebenen Strings vollständig von der Implementierung abhängt.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}, oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert und in der Regel die Sprache des Hosts verwendet.

- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Falls `weekday`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second` und `fractionalSecondDigits` alle undefiniert sind, werden `year`, `month`, `day`, `hour`, `minute`, `second` auf `"numeric"` gesetzt.

    In Implementierungen ohne `Intl.DateTimeFormat` Unterstützung wird dieser Parameter ignoriert.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und wie sie verwendet werden.

### Rückgabewert

Ein String, der das gegebene Datum gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies äquivalent zu `new Intl.DateTimeFormat(locales, options).format(date)`.

> [!NOTE]
> Meistens ist die von `toLocaleString()` zurückgegebene Formatierung konsistent. Dennoch kann die Ausgabe zwischen verschiedenen Implementierungen variieren, auch innerhalb derselben Sprache — Ausgabeunterschiede sind absichtlich und durch die Spezifikation erlaubt. Es könnte auch nicht das sein, was Sie erwarten. Zum Beispiel könnte der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Nutzung dieser Methode – ohne Angabe von `locale` oder `options` – hängt von der Implementierung ab und gibt einen String zurück, der basierend auf der Standardsprache und Zeitzone sowie mit Standardoptionen formatiert ist.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

console.log(date.toLocaleString());
// "12/11/2012, 7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
```

### Überprüfen der Unterstützung von locales und options Parametern

Die Parameter `locales` und `options` werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung der Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht über die erforderlichen Daten verfügen. Für Implementierungen ohne Internationalisierungsunterstützung verwendet `toLocaleString()` immer die Sprache des Systems, was möglicherweise nicht das ist, was Sie möchten. Da jede Implementierung, die die `locales`- und `options`-Parameter unterstützt, die {{jsxref("Intl")}} API unterstützen muss, können Sie deren Existenz auf Unterstützung prüfen:

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

Dieses Beispiel zeigt einige der Variationen in lokalisierten Datums- und Zeitformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem `locales` Argument angeben:

```js
const date = new Date(Date.UTC(2012, 1, 2, 3, 0, 0));

// Formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order and 12-hour time with AM/PM
console.log(date.toLocaleString("en-US"));
// "2/1/2012, 7:00:00 PM" (UTC-8 is the previous day)

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(date.toLocaleString("en-GB"));
// "02/02/2012, 03:00:00" (UTC+0 or UTC+1 depending on time of the year)

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(date.toLocaleString("ko-KR"));
// "2012. 2. 2. 오후 12:00:00"

// Arabic in most Arabic-speaking countries uses Eastern Arabic numerals
console.log(date.toLocaleString("ar-EG"));
// "٢‏/٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// For Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// "H24/2/2 12:00:00"

// When requesting a language that may not be supported, such as
// Balinese, include a fallback language (in this case, Indonesian)
console.log(date.toLocaleString(["ban", "id"]));
// "2/2/2012 11.00.00"
```

### Verwendung von options

Die Ergebnisse, die von `toLocaleString()` bereitgestellt werden, können mit dem `options` Parameter angepasst werden:

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
// Example output: "Donnerstag, 20. Dezember 2012"
// The exact date may shift depending on your local time zone.

// An application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleString("en-US", options));
// Example output: "Thursday, December 20, 2012 at UTC"

// Sometimes even the US needs 24-hour time
console.log(date.toLocaleString("en-US", { hour12: false }));
// Example output: "12/19/2012, 19:00:00"
// The exact date and time may shift depending on your local time zone.
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
