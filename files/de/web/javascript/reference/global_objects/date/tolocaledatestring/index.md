---
title: Date.prototype.toLocaleDateString()
short-title: toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`toLocaleDateString()`** von {{jsxref("Date")}}-Instanzen gibt eine Zeichenfolge zurück, die den Datumsteil dieses Datums gemäß den sprachspezifischen Konventionen in der lokalen Zeitzone darstellt. In Implementierungen, die die [`Intl.DateTimeFormat`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, delegiert diese Methode an `Intl.DateTimeFormat`.

Bei jedem Aufruf von `toLocaleDateString` muss eine große Datenbank mit Lokalisierungszeichenfolgen durchsucht werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen Methode {{jsxref("Intl/DateTimeFormat/format", "format()")}} zu verwenden. Ein `DateTimeFormat`-Objekt merkt sich die übergebenen Argumente und kann einen Teil der Datenbank zwischenspeichern, sodass spätere `format`-Aufrufe in einem stärker eingegrenzten Bereich nach Lokalisierungszeichenfolgen suchen können.

{{InteractiveExample("JavaScript Demo: Date.prototype.toLocaleDateString()", "taller")}}

```js interactive-example
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(event.toLocaleDateString("de-DE", options));
// Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012

console.log(event.toLocaleDateString("ar-EG", options));
// Expected output (varies according to local timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢

console.log(event.toLocaleDateString(undefined, options));
// Expected output (varies according to local timezone and default locale): Thursday, December 20, 2012
```

## Syntax

```js-nolint
toLocaleDateString()
toLocaleDateString(locales)
toLocaleDateString(locales, options)
```

### Parameter

Mit den Parametern `locales` und `options` lässt sich das Verhalten der Funktion anpassen. Anwendungen können damit festlegen, welche sprachspezifischen Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des Konstruktors [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` sollen beide Parameter ignorieren. Welche Locale verwendet wird und welche Form die zurückgegebene Zeichenfolge hat, hängt dann vollständig von der Implementierung ab.

- `locales` {{optional_inline}}
  - : Eine Zeichenfolge mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprach-Tag")}} oder ein Array solcher Zeichenfolgen. Entspricht dem Parameter [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) des Konstruktors `Intl.DateTimeFormat()`.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert. Üblicherweise wird dann die Locale des Hostsystems verwendet.

- `options` {{optional_inline}}
  - : Ein Objekt zur Anpassung des Ausgabeformats. Entspricht dem Parameter [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) des Konstruktors `Intl.DateTimeFormat()`. Die Option `timeStyle` muss undefined sein, andernfalls wird ein {{jsxref("TypeError")}} ausgelöst. Wenn `weekday`, `year`, `month`, `day` und `dateStyle` alle undefined sind, werden `year`, `month` und `day` auf `"numeric"` gesetzt.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert.

Weitere Einzelheiten zu diesen Parametern und ihrer Verwendung finden Sie unter [Konstruktor `Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Rückgabewert

Eine Zeichenfolge, die den Datumsteil des angegebenen Datums gemäß den sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meist ist die von `toLocaleDateString()` zurückgegebene Formatierung einheitlich. Die Ausgabe kann jedoch zwischen Implementierungen variieren, selbst bei derselben Locale. Solche Unterschiede sind beabsichtigt und laut Spezifikation zulässig. Die Ausgabe entspricht möglicherweise auch nicht Ihren Erwartungen. Beispielsweise kann die Zeichenfolge geschützte Leerzeichen enthalten oder von bidirektionalen Steuerzeichen umgeben sein. Vergleichen Sie die Ergebnisse von `toLocaleDateString()` daher nicht mit fest codierten Konstanten.

## Beispiele

### Verwendung von toLocaleDateString()

Die Verwendung dieser Methode ohne Angabe einer `locale` gibt eine formatierte Zeichenfolge in der Standard-Locale und mit den Standardoptionen zurück.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleDateString());
// "12/11/2012" if run in en-US locale with time zone America/Los_Angeles
```

### Unterstützung für die Parameter locales und options prüfen

Die Parameter `locales` und `options` werden möglicherweise nicht von allen Implementierungen unterstützt, da die Unterstützung der Internationalisierungs-API optional ist und einigen Systemen die erforderlichen Daten fehlen. In Implementierungen ohne Internationalisierungsunterstützung verwendet `toLocaleDateString()` immer die Locale des Systems, die möglicherweise nicht Ihren Anforderungen entspricht. Da jede Implementierung, die die Parameter `locales` und `options` unterstützt, auch die {{jsxref("Intl")}}-API unterstützen muss, können Sie deren Vorhandensein prüfen:

```js
function toLocaleDateStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### Verwendung von locales

Dieses Beispiel zeigt einige Unterschiede zwischen lokalisierten Datumsformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, geben Sie diese Sprache (und gegebenenfalls einige Ersatzsprachen) über das Argument `locales` an:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order
console.log(date.toLocaleDateString("en-US"));
// "12/19/2012"

// British English uses day-month-year order
console.log(date.toLocaleDateString("en-GB"));
// "20/12/2012"

// Korean uses year-month-day order
console.log(date.toLocaleDateString("ko-KR"));
// "2012. 12. 20."

// Even for Persian, it's hard to manually convert date to Solar Hijri
console.log(date.toLocaleDateString("fa-IR"));
// "۱۳۹۱/۹/۳۰"

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(date.toLocaleDateString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢"

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// "24/12/20"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(date.toLocaleDateString(["ban", "id"]));
// "20/12/2012"
```

### Verwendung von options

Die von `toLocaleDateString()` gelieferten Ergebnisse lassen sich mit dem Parameter `options` anpassen:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Request a weekday along with a long date
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// An application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleDateString("en-US", options));
// "Thursday, December 20, 2012, UTC"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
