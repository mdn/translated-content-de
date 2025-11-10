---
title: Date.prototype.toLocaleTimeString()
short-title: toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die Methode **`toLocaleTimeString()`** von {{jsxref("Date")}} Instanzen gibt einen string mit einer sprachsensitiven Darstellung des Zeitanteils dieses Datums in der lokalen Zeitzone zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleTimeString` aufgerufen wird, muss eine Suche in einer großen Datenbank mit Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format` Aufrufe nach Lokalisierungsstrings innerhalb eines engeren Kontexts suchen können.

{{InteractiveExample("JavaScript Demo: Date.prototype.toLocaleTimeString()")}}

```js interactive-example
// Depending on timezone, your results will vary
const event = new Date("August 19, 1975 23:15:30 GMT+00:00");

console.log(event.toLocaleTimeString("en-US"));
// Expected output: "1:15:30 AM"

console.log(event.toLocaleTimeString("it-IT"));
// Expected output: "01:15:30"

console.log(event.toLocaleTimeString("ar-EG"));
// Expected output: "١٢:١٥:٣٠ ص"
```

## Syntax

```js-nolint
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
```

### Parameter

Die `locales` und `options` Parameter passen das Verhalten der Funktion an und erlauben es Anwendungen, die Sprache anzugeben, deren Formatierungsgewohnheiten verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung werden gebeten, beide Parameter zu ignorieren, wodurch die verwendete Locale und die Form des zurückgegebenen Strings vollständig implementationsabhängig sind.

- `locales` {{optional_inline}}
  - : Ein string mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.

    In Implementierungen ohne `Intl.DateTimeFormat` Unterstützung wird dieser Parameter ignoriert und normalerweise das Locale des Hosts verwendet.

- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Wenn `dayPeriod`, `hour`, `minute`, `second` und `fractionalSecondDigits` alle undefiniert sind, werden `hour`, `minute`, `second` auf `"numeric"` gesetzt.

    In Implementierungen ohne `Intl.DateTimeFormat` Unterstützung wird dieser Parameter ignoriert.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Ein string, der den Zeitanteil des angegebenen Datums gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies gleichbedeutend mit `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist das von `toLocaleTimeString()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe je nach Implementierung variieren, sogar innerhalb desselben Locale — Variationen in der Ausgabe sind absichtlich und durch die Spezifikation zulässig. Es könnte auch nicht dem entsprechen, was Sie erwarten. Zum Beispiel könnte der string geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleTimeString()` nicht mit festcodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleTimeString()

Die grundlegende Verwendung dieser Methode, ohne eine `locale` anzugeben, gibt einen formatierten string in der Standard-Locale und mit Standardoptionen zurück.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleTimeString());
// "7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
```

### Überprüfung der Unterstützung für locales und options Parameter

Die `locales` und `options` Parameter sind möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht über die erforderlichen Daten verfügen. Für Implementierungen ohne Internationalisierungsunterstützung verwendet `toLocaleTimeString()` immer das Locale des Systems, was möglicherweise nicht das ist, was Sie wollen. Da jede Implementierung, die die `locales` und `options` Parameter unterstützt, die {{jsxref("Intl")}} API unterstützen muss, können Sie deren Existenz zur Unterstützung überprüfen:

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

Dieses Beispiel zeigt einige der Variationen in lokalisierten Zeitformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Rückfallsprachen) mit dem `locales` Argument angeben:

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
// "٧:٠٠:٠٠ م"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(date.toLocaleTimeString(["ban", "id"]));
// "11.00.00"
```

### Verwendung von options

Die von `toLocaleTimeString()` bereitgestellten Ergebnisse können mit dem `options` Parameter angepasst werden:

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
// "20:01"
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
