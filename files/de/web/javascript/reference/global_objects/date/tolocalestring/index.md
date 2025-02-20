---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`toLocaleString()`** von {{jsxref("Date")}}-Instanzen gibt eine stringbasierte, sprachabhängige Darstellung dieses Datums in der lokalen Zeitzone zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank mit Lokalisierungsstrings durchgeführt werden, was möglicherweise ineffizient ist. Wenn die Methode oft mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden. Ein `DateTimeFormat`-Objekt merkt sich die übergebenen Argumente und kann einen Teil der Datenbank zwischenspeichern, sodass zukünftige `format`-Aufrufe Lokalisierungsstrings in einem eingeschränkten Kontext durchsuchen können.

{{InteractiveExample("JavaScript Demo: Date.toLocaleString()")}}

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

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des Konstruktors [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` ignorieren beide Parameter, sodass die verwendete Sprache und die Form des zurückgegebenen Strings vollständig von der Implementierung abhängen.

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachcode oder ein Array solcher Strings. Entspricht dem [`locales`-Parameter](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) des Konstruktors `Intl.DateTimeFormat()`.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert und üblicherweise die Sprache des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`-Parameter](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) des Konstruktors `Intl.DateTimeFormat()`. Wenn `weekday`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second` und `fractionalSecondDigits` alle undefiniert sind, werden `year`, `month`, `day`, `hour`, `minute` und `second` auf `"numeric"` gesetzt.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert.

Weitere Details zu diesen Parametern und deren Verwendung finden Sie in der Dokumentation zum [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Rückgabewert

Ein String, der das angegebene Datum gemäß sprachspezifischer Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(date)`.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Sprache – diese Variationen sind beabsichtigt und gemäß der Spezifikation erlaubt. Möglicherweise entspricht die Ausgabe auch nicht den Erwartungen. Zum Beispiel kann der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festkodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Nutzung dieser Methode ohne Angabe eines `locale`-Parameters gibt einen formatierten String in der Standardsprache und mit Standardoptionen zurück.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString() without arguments depends on the
// implementation, the default locale, and the default time zone
console.log(date.toLocaleString());
// "12/11/2012, 7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
```

### Überprüfung der Unterstützung von locales- und options-Parametern

Die `locales`- und `options`-Parameter werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung der Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht über die erforderlichen Daten verfügen. Bei Implementierungen ohne Unterstützung für die Internationalisierung verwendet `toLocaleString()` immer die Sprache des Systems, was möglicherweise nicht gewünscht ist. Da jede Implementierung, die die `locales`- und `options`-Parameter unterstützt, auch die {{jsxref("Intl")}}-API unterstützen muss, können Sie deren Existenz überprüfen, um Unterstützung festzustellen:

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

Dieses Beispiel zeigt einige Variationen lokalisierter Datums- und Zeitformate. Um das Format der in Ihrer Anwendung verwendeten Benutzersprache zu erhalten, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem Argument `locales` angeben:

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

Die Ergebnisse, die `toLocaleString()` liefert, können mit dem `options`-Parameter angepasst werden:

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
