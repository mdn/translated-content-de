---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toLocaleString()`** Methode von {{jsxref("Date")}} Instanzen gibt einen string mit einer sprachsensitiven Darstellung dieses Datums in der lokalen Zeitzone zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) ruft diese Methode einfach `Intl.DateTimeFormat` auf.

Jedes Mal wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise entscheidet, einen Teil der Datenbank im Cache zu speichern, sodass zukünftige `format` Aufrufe Lokalisierungsstrings in einem eingeschränkteren Kontext suchen können.

{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales` und `options` Parameter passen das Verhalten der Funktion an und lassen Anwendungen die Sprache angeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` sollen beide Parameter ignorieren, wodurch die verwendete Locale und das Format des zurückgegebenen Strings vollständig von der Implementierung abhängen.

- `locales` {{optional_inline}}

  - : Ein string mit einem BCP 47 Sprach-Tag oder ein Array solcher strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert und normalerweise die Locale des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Wenn `weekday`, `year`, `month`, `day`, `dayPeriod`, `hour`, `minute`, `second` und `fractionalSecondDigits` alle undefiniert sind, werden `year`, `month`, `day`, `hour`, `minute`, `second` auf `"numeric"` gesetzt.

    In Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` wird dieser Parameter ignoriert.

Weitere Informationen zu diesen Parametern und deren Verwendung finden Sie im [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Rückgabewert

Ein string, der das gegebene Datum gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies gleichbedeutend mit `new Intl.DateTimeFormat(locales, options).format(date)`.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Jedoch kann die Ausgabe zwischen Implementierungen, selbst innerhalb derselben Locale, variieren — Output-Variationen sind beabsichtigt und durch die Spezifikation erlaubt. Es entspricht möglicherweise auch nicht Ihren Erwartungen. Beispielsweise könnte der string geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit hart codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt einen formatierten string in der Standard-Locale und mit den Standardoptionen zurück.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString() ohne Argumente hängt von der
// Implementierung, der Standard-Locale und der Standardzeitzone ab
console.log(date.toLocaleString());
// "12/11/2012, 7:00:00 PM" wenn in der en-US Locale mit Zeitzone America/Los_Angeles ausgeführt
```

### Überprüfung der Unterstützung von locale- und options-Parametern

Die `locales` und `options` Parameter werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht über die erforderlichen Daten verfügen. Für Implementierungen ohne Unterstützung für die Internationalisierung verwendet `toLocaleString()` immer die Locale des Systems, die möglicherweise nicht Ihren Anforderungen entspricht. Da jede Implementierung, die die `locales` und `options` Parameter unterstützt, die {{jsxref("Intl")}} API unterstützen muss, können Sie das Vorhandensein letzterer zur Unterstützung überprüfen:

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

Dieses Beispiel zeigt einige der Unterschiede in lokalisierten Datums- und Zeitformaten. Um das Format der in der Benutzeroberfläche Ihrer Anwendung verwendeten Sprache zu erhalten, geben Sie sicherheitshalber diese Sprache (und eventuell einige Ausweichsprachen) mit dem `locales` Argument an:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Formate unten gehen von der lokalen Zeitzone der Locale aus;
// America/Los_Angeles für die USA

// US-Englisch verwendet die Reihenfolge Monat-Tag-Jahr und 12-Stunden-Zeit mit AM/PM
console.log(date.toLocaleString("en-US"));
// "12/19/2012, 7:00:00 PM"

// Britisches Englisch verwendet die Reihenfolge Tag-Monat-Jahr und 24-Stunden-Zeit ohne AM/PM
console.log(date.toLocaleString("en-GB"));
// "20/12/2012 03:00:00"

// Koreanisch verwendet die Reihenfolge Jahr-Monat-Tag und 12-Stunden-Zeit mit AM/PM
console.log(date.toLocaleString("ko-KR"));
// "2012. 12. 20. 오후 12:00:00"

// Arabisch in den meisten arabischsprachigen Ländern verwendet östliche arabische Ziffern
console.log(date.toLocaleString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// Für Japanisch könnten Anwendungen den japanischen Kalender verwenden wollen,
// wobei 2012 das Jahr 24 der Heisei-Ära war
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// "24/12/20 12:00:00"

// Bei der Anforderung einer möglicherweise nicht unterstützten Sprache, wie z.B.
// Balinesisch, geben Sie eine Ausweichsprache an (in diesem Fall Indonesisch)
console.log(date.toLocaleString(["ban", "id"]));
// "20/12/2012 11.00.00"
```

### Verwendung von options

Die von `toLocaleString()` bereitgestellten Ergebnisse können mit dem `options` Parameter angepasst werden:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Wochentag zusammen mit einem langen Datum anfordern
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// Eine Anwendung könnte UTC verwenden wollen und dies sichtbar machen
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleString("en-US", options));
// "Thursday, December 20, 2012, GMT"

// Manchmal benötigt auch die USA 24-Stunden-Zeit
console.log(date.toLocaleString("en-US", { hour12: false }));
// "12/19/2012, 19:00:00"
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
