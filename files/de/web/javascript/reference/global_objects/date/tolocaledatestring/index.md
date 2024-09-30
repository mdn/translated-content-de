---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toLocaleDateString()`**-Methode von {{jsxref("Date")}}-Instanzen gibt eine Zeichenkette mit einer sprachsensitiven Darstellung des Datumsanteils dieses Datums in der lokalen Zeitzone zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) ruft diese Methode einfach `Intl.DateTimeFormat` auf.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format`-Aufrufe Lokalisierungszeichenfolgen in einem eingeschränkteren Kontext durchsuchen können.

{{EmbedInteractiveExample("pages/js/date-tolocaledatestring.html", "taller")}}

## Syntax

```js-nolint
toLocaleDateString()
toLocaleDateString(locales)
toLocaleDateString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)-Konstruktors. Implementierungen ohne `Intl.DateTimeFormat`-Unterstützung werden gebeten, beide Parameter zu ignorieren, wodurch die verwendete Lokalisierung und die Form der zurückgegebenen Zeichenkette vollständig implementierungsabhängig sind.

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachcode oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)-Parameter des `Intl.DateTimeFormat()`-Konstruktors.

    In Implementierungen ohne `Intl.DateTimeFormat`-Unterstützung wird dieser Parameter ignoriert und üblicherweise die Lokalisierung des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)-Parameter des `Intl.DateTimeFormat()`-Konstruktors. Die `timeStyle`-Option muss undefiniert sein, ansonsten wird ein {{jsxref("TypeError")}} ausgelöst. Wenn `weekday`, `year`, `month` und `day` alle undefiniert sind, werden `year`, `month` und `day` auf `"numeric"` gesetzt.

    In Implementierungen ohne `Intl.DateTimeFormat`-Unterstützung wird dieser Parameter ignoriert.

Weitere Einzelheiten zu diesen Parametern und deren Verwendung finden Sie im [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Rückgabewert

Eine Zeichenkette, die den Datumsanteil des angegebenen Datums gemäß sprachspezifischer Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurden.

> [!NOTE]
> Meistens ist das von `toLocaleDateString()` zurückgegebene Format konsistent. Der Ausgabe kann jedoch zwischen Implementierungen variieren, selbst innerhalb derselben Lokalisierung — Variationen sind beabsichtigt und durch die Spezifikation erlaubt. Es könnte auch nicht das sein, was Sie erwarten. Zum Beispiel kann die Zeichenfolge geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleDateString()` nicht mit festcodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleDateString()

Die einfache Verwendung dieser Methode ohne Angabe eines `locale` liefert eine formatierte Zeichenkette in der Standardsprache und mit Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleDateString());
// "12/11/2012" if run in en-US locale with time zone America/Los_Angeles
```

### Überprüfen der Unterstützung für locales und options Parameter

Die Parameter `locales` und `options` werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und einige Systeme nicht über die erforderlichen Daten verfügen. Für Implementierungen ohne Unterstützung für Internationalisierung verwendet `toLocaleDateString()` immer die Systemsprache, die möglicherweise nicht das ist, was Sie möchten. Da jede Implementierung, die die Parameter `locales` und `options` unterstützt, auch die {{jsxref("Intl")}}-API unterstützen muss, können Sie deren Existenz überprüfen, um die Unterstützung festzustellen:

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

Dieses Beispiel zeigt einige der Variationen in lokalisierten Datumsformaten. Um das Format der in der Benutzeroberfläche Ihrer Anwendung verwendeten Sprache zu erhalten, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem `locales`-Argument angeben:

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

Die Ergebnisse, die von `toLocaleDateString()` bereitgestellt werden, können mit dem `options`-Parameter angepasst werden:

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
