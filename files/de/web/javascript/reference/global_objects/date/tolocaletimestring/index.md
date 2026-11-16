---
title: Date.prototype.toLocaleTimeString()
short-title: toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`toLocaleTimeString()`** von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der den Zeitanteil dieses Datums gemäß den sprachspezifischen Konventionen in der lokalen Zeitzone darstellt. In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, delegiert die Methode an `Intl.DateTimeFormat`.

Bei jedem Aufruf von `toLocaleTimeString` muss eine große Datenbank mit Lokalisierungsstrings durchsucht werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen Methode {{jsxref("Intl/DateTimeFormat/format", "format()")}} zu verwenden. Ein `DateTimeFormat`-Objekt merkt sich die übergebenen Argumente und kann einen Teil der Datenbank zwischenspeichern, sodass spätere `format`-Aufrufe Lokalisierungsstrings in einem kleineren Bereich suchen können.

{{InteractiveExample("JavaScript Demo: Date.prototype.toLocaleTimeString()")}}

```js interactive-example
// Depending on timezone, your results will vary
const event = new Date("August 19, 1975 23:15:30 GMT+00:00");

console.log(event.toLocaleTimeString("en-US"));
// Expected output: "1:15:30 AM"

console.log(event.toLocaleTimeString("it-IT"));
// Expected output: "01:15:30"

console.log(event.toLocaleTimeString("ar-EG"));
// Expected output: "١:١٥:٣٠ ص"
```

## Syntax

```js-nolint
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
```

### Parameter

Mit den Parametern `locales` und `options` lässt sich das Verhalten der Funktion anpassen. Anwendungen können damit festlegen, nach den Formatierungskonventionen welcher Sprache die Ausgabe erfolgen soll.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des Konstruktors [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` sollen beide Parameter ignorieren. Welche Locale verwendet wird und welche Form der zurückgegebene String hat, hängt dann vollständig von der Implementierung ab.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}} oder ein Array solcher Strings. Entspricht dem Parameter [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) des Konstruktors `Intl.DateTimeFormat()`.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert; üblicherweise wird die Locale des Hostsystems verwendet.

- `options` {{optional_inline}}
  - : Ein Objekt zur Anpassung des Ausgabeformats. Entspricht dem Parameter [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) des Konstruktors `Intl.DateTimeFormat()`. Wenn `dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits` und `timeStyle` alle den Wert `undefined` haben, werden `hour`, `minute` und `second` auf `"numeric"` gesetzt.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert.

Weitere Informationen zu diesen Parametern und ihrer Verwendung finden Sie in der Dokumentation zum [Konstruktor `Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Rückgabewert

Ein String, der den Zeitanteil des angegebenen Datums gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Die von `toLocaleTimeString()` zurückgegebene Formatierung ist meist einheitlich. Die Ausgabe kann jedoch zwischen Implementierungen variieren, selbst bei derselben Locale. Solche Abweichungen sind beabsichtigt und laut Spezifikation zulässig. Die Ausgabe entspricht möglicherweise auch nicht Ihren Erwartungen. Beispielsweise kann der String geschützte Leerzeichen enthalten oder von Steuerzeichen für bidirektionalen Text umgeben sein. Vergleichen Sie die Ergebnisse von `toLocaleTimeString()` daher nicht mit fest vorgegebenen Konstanten.

## Beispiele

### Verwendung von toLocaleTimeString()

Wird diese Methode ohne Angabe von `locale` verwendet, gibt sie einen formatierten String in der Standard-Locale und mit den Standardoptionen zurück.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleTimeString());
// "7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
```

### Unterstützung für die Parameter locales und options prüfen

Die Parameter `locales` und `options` werden möglicherweise nicht von allen Implementierungen unterstützt, da die Unterstützung der Internationalisierungs-API optional ist und manchen Systemen die erforderlichen Daten fehlen können. In Implementierungen ohne Internationalisierungsunterstützung verwendet `toLocaleTimeString()` immer die Locale des Systems, was möglicherweise nicht Ihren Anforderungen entspricht. Da jede Implementierung, die die Parameter `locales` und `options` unterstützt, auch die {{jsxref("Intl")}} API unterstützen muss, können Sie prüfen, ob diese vorhanden ist:

```js
function toLocaleTimeStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### Verwendung von locales

Dieses Beispiel zeigt einige Unterschiede zwischen lokalisierten Zeitformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, geben Sie diese Sprache (und gegebenenfalls weitere Sprachen als Fallback) mit dem Argument `locales` an:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString("en-US"));
// "7:00:00 PM"

// British English uses 24-hour time without AM/PM
console.log(date.toLocaleTimeString("en-GB"));
// "03:00:00"

// Korean uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString("ko-KR"));
// "오후 12:00:00"

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(date.toLocaleTimeString("ar-EG"));
// "٥:٠٠:٠٠ ص"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(date.toLocaleTimeString(["ban", "id"]));
// "11.00.00"
```

### Verwendung von options

Die von `toLocaleTimeString()` gelieferten Ergebnisse lassen sich mit dem Parameter `options` anpassen:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// An application may want to use UTC and make that visible
const options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// "3:00:00 AM GMT"

// Sometimes even the US needs 24-hour time
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// "19:00:00"

// Show only hours and minutes, use options with the default locale - use an empty array
console.log(
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
);
// "19:00" (en-GB locale)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
