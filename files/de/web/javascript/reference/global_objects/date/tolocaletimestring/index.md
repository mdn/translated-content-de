---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`toLocaleTimeString()`** von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der eine sprachsensitive Darstellung des Zeitanteils dieses Datums in der lokalen Zeitzone enthält. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleTimeString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt die übergebenen Argumente speichert und einen Teil der Datenbank zwischenspeichern kann, sodass zukünftige `format`-Aufrufe nach Lokalisierungsstrings in einem eingeschränkten Kontext suchen können.

{{InteractiveExample("JavaScript Demo: Date.toLocaleTimeString()")}}

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

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des Constructors [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). In Implementierungen ohne `Intl.DateTimeFormat`-Unterstützung werden beide Parameter ignoriert, sodass die verwendete Sprache und die Form des zurückgegebenen Strings vollständig implementationsabhängig sind.

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)-Parameter des `Intl.DateTimeFormat()`-Constructors.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert, und normalerweise wird die Sprache des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)-Parameter des `Intl.DateTimeFormat()`-Constructors. Wenn `dayPeriod`, `hour`, `minute`, `second` und `fractionalSecondDigits` nicht definiert sind, werden `hour`, `minute`, `second` auf `"numeric"` gesetzt.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert.

Details zu diesen Parametern und deren Verwendung finden Sie im [`Intl.DateTimeFormat()`-Constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Rückgabewert

Ein String, der den Zeitanteil des angegebenen Datums gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist die durch `toLocaleTimeString()` zurückgegebene Formatierung konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Sprache – Variationen sind beabsichtigt und durch die Spezifikation erlaubt. Es ist möglich, dass die Ausgabe nicht Ihren Erwartungen entspricht. Beispielsweise könnte der String geschützte Leerzeichen enthalten oder von bidirektionalen Steuerzeichen umgeben sein. Vergleichen Sie die Ergebnisse von `toLocaleTimeString()` nicht mit fest codierten Konstanten.

## Beispiele

### Verwendung von toLocaleTimeString()

Die grundlegende Verwendung dieser Methode ohne Angabe eines `locale`-Wertes gibt einen formatierten String in der Standardsprache und mit Standardoptionen zurück.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleTimeString());
// "7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
```

### Prüfung auf Unterstützung der `locales`- und `options`-Parameter

Die Parameter `locales` und `options` werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung der Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht über die erforderlichen Daten verfügen. Für Implementierungen ohne Internationalisierungsunterstützung verwendet `toLocaleTimeString()` immer die Systemsprache, die möglicherweise nicht den gewünschten Anforderungen entspricht. Da jede Implementierung, die die Parameter `locales` und `options` unterstützt, auch die {{jsxref("Intl")}}-API unterstützen muss, können Sie deren Existenz prüfen, um die Unterstützung sicherzustellen:

```js
function toLocaleTimeStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### Nutzung von locales

Dieses Beispiel zeigt einige der Variationen in lokalisierten Zeitformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, sollten Sie sicherstellen, dass Sie diese Sprache (und möglicherweise einige Fallback-Sprachen) mit dem `locales`-Argument angeben:

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

Die Ergebnisse, die `toLocaleTimeString()` liefert, können durch Verwendung des `options`-Parameters angepasst werden:

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
