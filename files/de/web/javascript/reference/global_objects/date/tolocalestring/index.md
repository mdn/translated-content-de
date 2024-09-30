---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toLocaleString()`** Methode von {{jsxref("Date")}} Instanzen gibt einen String mit einer sprachsensitiven Darstellung dieses Datums in der lokalen Zeitzone zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) ruft diese Methode einfach `Intl.DateTimeFormat` auf.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit den gleichen Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat`-Objekt die übergebenen Argumente speichert und sich entscheiden kann, einen Teil der Datenbank zwischenzuspeichern, sodass zukünftige `format`-Aufrufe Lokalisierungsstrings in einem eingeschränkteren Kontext suchen können.

{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache zu spezifizieren, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung sollen beide Parameter ignorieren, wodurch die verwendete Sprache und die Form des zurückgegebenen Strings vollständig von der Implementierung abhängt.

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert und die Sprache des Hosts wird üblicherweise verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Wenn `weekday`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second` und `fractionalSecondDigits` alle undefiniert sind, werden `year`, `month`, `day`, `hour`, `minute`, `second` auf `"numeric"` gesetzt.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert.

Details zu diesen Parametern und ihrer Verwendung finden Sie im [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Rückgabewert

Ein String, der das angegebene Datum gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies äquivalent zu `new Intl.DateTimeFormat(locales, options).format(date)`.

> [!NOTE]
> Meistens ist die durch `toLocaleString()` zurückgegebene Formatierung konsistent. Die Ausgabe kann jedoch zwischen Implementierungen, selbst innerhalb derselben Sprache, variieren — Variationen in der Ausgabe sind gewollt und von der Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Der String kann beispielsweise geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festcodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt einen formatierten String in der Standard-Sprache und mit Standardeinstellungen zurück.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString() without arguments depends on the
// implementation, the default locale, and the default time zone
console.log(date.toLocaleString());
// "12/11/2012, 7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
```

### Überprüfen der Unterstützung für die Parameter locales und options

Die Parameter `locales` und `options` werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und einige Systeme nicht über die erforderlichen Daten verfügen. Bei Implementierungen ohne Unterstützung für die Internationalisierung verwendet `toLocaleString()` immer die Systemsprache, die möglicherweise nicht Ihren Anforderungen entspricht. Da jede Implementierung, die die Parameter `locales` und `options` unterstützt, auch die {{jsxref("Intl")}} API unterstützen muss, können Sie deren Existenz zur Unterstützung überprüfen:

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

Dieses Beispiel zeigt einige der Variationen in lokalisierten Datums- und Zeitformaten. Um das Format der in der Benutzeroberfläche Ihrer Anwendung verwendeten Sprache zu erhalten, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ausweichsprachen) mit dem `locales` Argument angeben:

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

Die durch `toLocaleString()` bereitgestellten Ergebnisse können mit dem `options` Parameter angepasst werden:

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
