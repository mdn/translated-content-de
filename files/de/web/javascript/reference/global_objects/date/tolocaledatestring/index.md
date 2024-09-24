---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toLocaleDateString()`**-Methode von {{jsxref("Date")}} Instanzen gibt eine Zeichenfolge mit einer sprachsensitiven Darstellung des Datumsanteils dieses Datums in der lokalen Zeitzone zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) ruft diese Methode einfach `Intl.DateTimeFormat` auf.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wird die Methode mehrfach mit denselben Argumenten aufgerufen, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und seine {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise einen Ausschnitt der Datenbank zwischenspeichern kann, sodass zukünftige `format` Aufrufe innerhalb eines begrenzteren Kontexts nach Lokalisierungszeichenfolgen suchen können.

{{EmbedInteractiveExample("pages/js/date-tolocaledatestring.html", "taller")}}

## Syntax

```js-nolint
toLocaleDateString()
toLocaleDateString(locales)
toLocaleDateString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter exakt den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung sollen beide Parameter ignorieren, wodurch die verwendete Sprache und die Form der zurückgegebenen Zeichenfolge vollständig implementierungsabhängig sind.

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.

    In Implementierungen ohne `Intl.DateTimeFormat` Unterstützung wird dieser Parameter ignoriert und normalerweise die Sprache des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Die `timeStyle` Option muss undefiniert sein, andernfalls wird ein {{jsxref("TypeError")}} ausgelöst. Wenn `weekday`, `year`, `month` und `day` alle undefiniert sind, werden `year`, `month` und `day` auf `"numeric"` gesetzt.

    In Implementierungen ohne `Intl.DateTimeFormat` Unterstützung wird dieser Parameter ignoriert.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenfolge, die den Datumsanteil des angegebenen Datums gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(date)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist das von `toLocaleDateString()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen verschiedenen Implementierungen variieren, selbst innerhalb derselben Sprache — Ausgabeschwankungen sind beabsichtigt und durch die Spezifikation erlaubt. Sie entsprechen möglicherweise auch nicht Ihren Erwartungen. Beispielsweise kann die Zeichenfolge geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleDateString()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleDateString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt eine formatierte Zeichenfolge in der Standard-Sprache und mit Standard-Optionen zurück.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() ohne Argumente hängt von der Implementierung,
// der Standard-Sprache und der Standard-Zeitzone ab
console.log(date.toLocaleDateString());
// "12/11/2012", wenn in en-US Sprache mit Zeitzone America/Los_Angeles ausgeführt
```

### Überprüfung der Unterstützung der Parameter locales und options

Die `locales` und `options` Parameter werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und manche Systeme möglicherweise nicht über die notwendigen Daten verfügen. Bei Implementierungen ohne Internationalisierungs-Unterstützung verwendet `toLocaleDateString()` immer die Systemeinstellung der Sprache, was möglicherweise nicht Ihren Anforderungen entspricht. Da jede Implementierung, die die `locales` und `options` Parameter unterstützt, auch die {{jsxref("Intl")}} API unterstützen muss, kann die Existenz letzteren auf Unterstützung überprüft werden:

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

Dieses Beispiel zeigt einige der Unterschiede in lokalisierten Datumsformaten. Um das Format der in der Benutzeroberfläche Ihrer Anwendung verwendeten Sprache zu erhalten, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ersatztangaben) mit dem `locales` Argument angeben:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Die unten angegebenen Formate gehen von der lokalen Zeitzone der Sprache aus;
// America/Los_Angeles für die USA

// US-Englisch verwendet die Reihenfolge Monat-Tag-Jahr
console.log(date.toLocaleDateString("en-US"));
// "12/20/2012"

// Britisches Englisch verwendet die Reihenfolge Tag-Monat-Jahr
console.log(date.toLocaleDateString("en-GB"));
// "20/12/2012"

// Koreanisch verwendet die Reihenfolge Jahr-Monat-Tag
console.log(date.toLocaleDateString("ko-KR"));
// "2012. 12. 20."

// Für Persisch ist es schwierig, das Datum manuell in den Solaren Hedschrie Kalender umzuwandeln
console.log(date.toLocaleDateString("fa-IR"));
// "۱۳۹۱/۹/۳۰"

// Arabisch in den meisten arabischsprachigen Ländern verwendet echte arabische Ziffern
console.log(date.toLocaleDateString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢"

// Bei Japanisch möchten Anwendungen möglicherweise den japanischen Kalender verwenden,
// wobei 2012 das 24. Jahr der Heisei-Ära war
console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// "24/12/20"

// Wenn Sie eine Sprache anfordern, die möglicherweise nicht unterstützt wird, wie z.B.
// Balinesisch, geben Sie eine Ersatztangabe an, in diesem Fall Indonesisch
console.log(date.toLocaleDateString(["ban", "id"]));
// "20/12/2012"
```

### Verwendung von options

Die von `toLocaleDateString()` bereitgestellten Ergebnisse können mithilfe des `options` Parameters angepasst werden:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Einen Wochentag zusammen mit einem langen Datum anfordern
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// Eine Anwendung möchte möglicherweise UTC verwenden und dies sichtbar machen
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
