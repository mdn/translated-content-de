---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toLocaleTimeString()`**-Methode von {{jsxref("Date")}}-Instanzen gibt einen String mit einer sprachsensitiven Darstellung des Zeitanteils dieses Datums in der lokalen Zeitzone zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) ruft diese Methode einfach `Intl.DateTimeFormat` auf.

Jedes Mal, wenn `toLocaleTimeString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungs-Strings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt die übergebenen Argumente speichert und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format`-Aufrufe innerhalb eines eingeschränkteren Kontexts nach Lokalisierungs-Strings suchen können.

{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}

## Syntax

```js-nolint
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
```

### Parameter

Die `locales`- und `options`-Parameter passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)-Konstruktors. Implementierungen ohne Unterstützung von `Intl.DateTimeFormat` werden gebeten, beide Parameter zu ignorieren, wobei die verwendete Sprache und die Form des zurückgegebenen Strings vollständig von der Implementierung abhängen.

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)-Parameter des `Intl.DateTimeFormat()`-Konstruktors.

    In Implementierungen ohne Unterstützung von `Intl.DateTimeFormat` wird dieser Parameter ignoriert und die Systemsprache des Hosts wird normalerweise verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)-Parameter des `Intl.DateTimeFormat()`-Konstruktors. Wenn `dayPeriod`, `hour`, `minute`, `second` und `fractionalSecondDigits` alle undefiniert sind, werden `hour`, `minute`, `second` auf `"numeric"` gesetzt.

    In Implementierungen ohne Unterstützung von `Intl.DateTimeFormat` wird dieser Parameter ignoriert.

Details zu diesen Parametern und deren Verwendung finden Sie im [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Rückgabewert

Ein String, der den Zeitanteil des angegebenen Datums gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist das von `toLocaleTimeString()` zurückgegebene Format konsistent. Die Ausgabe kann jedoch zwischen Implementierungen variieren, sogar innerhalb derselben Sprache — Variationen sind absichtlich und gemäß der Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Zum Beispiel kann der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleTimeString()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleTimeString()

Die Grundverwendung dieser Methode ohne Angabe einer `locale` gibt einen formatierten String in der Standardsprache und mit Standardoptionen zurück.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() ohne Argumente hängt von der Implementierung,
// der Standardsprache und der Standardzeitzone ab
console.log(date.toLocaleTimeString());
// "7:00:00 PM", wenn im en-US-Locale mit Zeitzone America/Los_Angeles ausgeführt
```

### Überprüfung der Unterstützung für locales- und options-Parameter

Die `locales`- und `options`-Parameter werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht über die erforderlichen Daten verfügen. Für Implementierungen ohne Unterstützung für Internationalisierung verwendet `toLocaleTimeString()` immer die Systemsprache, die möglicherweise nicht das ist, was Sie wollen. Da jede Implementierung, die die `locales`- und `options`-Parameter unterstützt, die {{jsxref("Intl")}}-API unterstützen muss, können Sie die Existenz dieser API zur Unterstützung überprüfen:

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

Dieses Beispiel zeigt einige der Variationen in lokalisierten Zeitformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Fallback-Sprachen) mit dem `locales`-Argument angeben:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Formate unten nehmen die lokale Zeitzone des Sprachraums an;
// America/Los_Angeles für die USA

// US-Englisch verwendet ein 12-Stunden-Format mit AM/PM
console.log(date.toLocaleTimeString("en-US"));
// "7:00:00 PM"

// Britisches Englisch verwendet ein 24-Stunden-Format ohne AM/PM
console.log(date.toLocaleTimeString("en-GB"));
// "03:00:00"

// Koreanisch verwendet ein 12-Stunden-Format mit AM/PM
console.log(date.toLocaleTimeString("ko-KR"));
// "오후 12:00:00"

// Arabisch in den meisten arabischsprachigen Ländern verwendet echte arabische Ziffern
console.log(date.toLocaleTimeString("ar-EG"));
// "٧:٠٠:٠٠ م"

// Wenn Sie eine Sprache anfordern, die möglicherweise nicht unterstützt wird, wie
// Balinesisch, geben Sie eine Fallback-Sprache an, in diesem Fall Indonesisch
console.log(date.toLocaleTimeString(["ban", "id"]));
// "11.00.00"
```

### Verwendung von options

Die von `toLocaleTimeString()` bereitgestellten Ergebnisse können mit dem `options`-Parameter angepasst werden:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Eine Anwendung möchte möglicherweise UTC verwenden und das sichtbar machen
const options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// "3:00:00 AM GMT"

// Manchmal benötigt sogar die USA ein 24-Stunden-Format
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// "19:00:00"

// Zeigen Sie nur Stunden und Minuten an, verwenden Sie Optionen mit der Standardsprache - verwenden Sie ein leeres Array
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
