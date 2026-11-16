---
title: Date.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`toLocaleString()`** von {{jsxref("Date")}}-Instanzen gibt eine Zeichenfolge zurück, die dieses Datum entsprechend den sprachspezifischen Konventionen in der lokalen Zeitzone darstellt. In Implementierungen, die die [`Intl.DateTimeFormat`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, delegiert diese Methode an `Intl.DateTimeFormat`.

Bei jedem Aufruf von `toLocaleString` muss eine große Datenbank mit Lokalisierungszeichenfolgen durchsucht werden, was unter Umständen ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen Methode {{jsxref("Intl/DateTimeFormat/format", "format()")}} zu verwenden. Ein `DateTimeFormat`-Objekt merkt sich die übergebenen Argumente und kann einen Teil der Datenbank zwischenspeichern, sodass spätere `format`-Aufrufe in einem stärker eingegrenzten Bereich nach Lokalisierungszeichenfolgen suchen können.

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

Mit den Parametern `locales` und `options` lässt sich das Verhalten der Funktion anpassen. Anwendungen können damit festlegen, nach den Formatierungskonventionen welcher Sprache die Ausgabe erfolgen soll.

In Implementierungen, die die [`Intl.DateTimeFormat`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` sollten beide Parameter ignorieren. Die verwendete Locale und das Format der zurückgegebenen Zeichenfolge hängen dann vollständig von der Implementierung ab.

- `locales` {{optional_inline}}
  - : Eine Zeichenfolge mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}} oder ein Array solcher Zeichenfolgen. Entspricht dem Parameter [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) des `Intl.DateTimeFormat()`-Konstruktors.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert. Üblicherweise wird dann die Locale der Host-Umgebung verwendet.

- `options` {{optional_inline}}
  - : Ein Objekt zur Anpassung des Ausgabeformats. Entspricht dem Parameter [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) des `Intl.DateTimeFormat()`-Konstruktors. Wenn `weekday`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`, `dateStyle` und `timeStyle` alle `undefined` sind, werden `year`, `month`, `day`, `hour`, `minute` und `second` auf `"numeric"` gesetzt.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert.

Weitere Informationen zu diesen Parametern und ihrer Verwendung finden Sie in der Dokumentation zum [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Rückgabewert

Eine Zeichenfolge, die das angegebene Datum gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist die von `toLocaleString()` zurückgegebene Formatierung konsistent. Die Ausgabe kann jedoch zwischen Implementierungen variieren, selbst innerhalb derselben Locale. Solche Unterschiede sind beabsichtigt und laut Spezifikation zulässig. Die Ausgabe entspricht möglicherweise auch nicht Ihren Erwartungen: Beispielsweise kann die Zeichenfolge geschützte Leerzeichen enthalten oder von Steuerzeichen für bidirektionalen Text umgeben sein. Vergleichen Sie die Ergebnisse von `toLocaleString()` daher nicht mit fest vorgegebenen Konstanten.

## Beispiele

### toLocaleString() verwenden

Die grundlegende Verwendung dieser Methode – ohne Angabe von `locale` oder `options` – hängt von der Implementierung ab. Sie gibt eine Zeichenfolge zurück, die anhand der Standard-Locale, der Standardzeitzone und der Standardoptionen formatiert ist.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

console.log(date.toLocaleString());
// "12/11/2012, 7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
```

### Unterstützung für die Parameter „locales“ und „options“ prüfen

Die Parameter `locales` und `options` werden möglicherweise nicht von allen Implementierungen unterstützt, da die Unterstützung der Internationalisierungs-API optional ist und manchen Systemen die erforderlichen Daten fehlen. In Implementierungen ohne Internationalisierungsunterstützung verwendet `toLocaleString()` immer die Locale des Systems, die möglicherweise nicht Ihren Anforderungen entspricht. Da jede Implementierung, die die Parameter `locales` und `options` unterstützt, auch die {{jsxref("Intl")}}-API unterstützen muss, können Sie prüfen, ob diese API vorhanden ist:

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### Locales verwenden

Dieses Beispiel zeigt einige Unterschiede zwischen lokalisierten Datums- und Zeitformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, geben Sie diese Sprache (und gegebenenfalls einige Ersatzsprachen) mit dem Argument `locales` an:

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

### Optionen verwenden

Die von `toLocaleString()` zurückgegebenen Ergebnisse lassen sich mit dem Parameter `options` anpassen:

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
