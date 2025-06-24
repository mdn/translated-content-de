---
title: Date.prototype.toLocaleDateString()
short-title: toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`toLocaleDateString()`** Methode von {{jsxref("Date")}} Instanzen gibt eine Zeichenfolge mit einer sprachsensitiven Darstellung des Datums in der lokalen Zeitzone zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank mit Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wird die Methode häufig mit denselben Argumenten aufgerufen, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format` Aufrufe Lokalisierungszeichenfolgen in einem begrenzteren Kontext suchen können.

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

Die `locales` und `options` Parameter passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache festzulegen, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung sollen beide Parameter ignorieren, was dazu führt, dass die verwendete Sprache und die Form der zurückgegebenen Zeichenfolge vollständig von der Implementierung abhängig sind.

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.

    In Implementierungen ohne `Intl.DateTimeFormat` Unterstützung wird dieser Parameter ignoriert und in der Regel die Sprache des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt zur Anpassung des Ausgabeformats. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Die `timeStyle` Option muss undefiniert sein, ansonsten würde ein {{jsxref("TypeError")}} ausgelöst. Wenn `weekday`, `year`, `month` und `day` alle undefiniert sind, werden `year`, `month` und `day` auf `"numeric"` gesetzt.

    In Implementierungen ohne `Intl.DateTimeFormat` Unterstützung wird dieser Parameter ignoriert.

Siehe den [`Intl.DateTimeFormat()` Konstruktur](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Nutzung.

### Rückgabewert

Eine Zeichenfolge, die den Datumsanteil des angegebenen Datums gemäß den sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies gleichbedeutend mit `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist das von `toLocaleDateString()` zurückgegebene Format konsistent. Der Output kann jedoch zwischen den Implementierungen, sogar innerhalb derselben Sprache, variieren — solche Variationen sind beabsichtigt und von der Spezifikation erlaubt. Es könnte auch nicht das sein, was Sie erwarten. Beispielsweise könnte die Zeichenfolge geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleDateString()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleDateString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt eine formatierte Zeichenfolge in der Standardsprache und mit Standardoptionen zurück.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleDateString());
// "12/11/2012" if run in en-US locale with time zone America/Los_Angeles
```

### Überprüfung auf Unterstützung der `locales` und `options` Parameter

Die `locales` und `options` Parameter werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung der Internationalisierungs-API optional ist und einige Systeme nicht über die erforderlichen Daten verfügen. Für Implementierungen ohne Internationalisierungsunterstützung verwendet `toLocaleDateString()` immer die Sprache des Systems, was möglicherweise nicht das ist, was Sie wünschen. Da jede Implementierung, die die `locales` und `options` Parameter unterstützt, die {{jsxref("Intl")}} API unterstützen muss, können Sie deren Existenz prüfen, um sicherzugehen:

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

Dieses Beispiel zeigt einige der Unterschiede in lokalisierten Datumsformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem `locales` Argument angeben:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order
console.log(date.toLocaleDateString("en-US"));
// "12/20/2012"

// British English uses day-month-year order
console.log(date.toLocaleDateString("en-GB"));
// "20/12/2012"

// Korean uses year-month-day order
console.log(date.toLocaleDateString("ko-KR"));
// "2012. 12. 20."

// Event for Persian, It's hard to manually convert date to Solar Hijri
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

Die Ergebnisse, die durch `toLocaleDateString()` bereitgestellt werden, können mit dem `options` Parameter angepasst werden:

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
