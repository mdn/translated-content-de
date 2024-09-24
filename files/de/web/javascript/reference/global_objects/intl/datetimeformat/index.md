---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Intl.DateTimeFormat`** Objekt ermöglicht sprachabhängige Datums- und Zeitformatierung.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html", "taller")}}

## Konstruktor

- {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - : Erstellt ein neues `Intl.DateTimeFormat` Objekt.

## Statische Methoden

- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das diejenigen der bereitgestellten Locales enthält, die unterstützt werden, ohne auf das Standardlocale der Laufzeitumgebung zurückgreifen zu müssen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.DateTimeFormat.prototype` definiert und werden von allen `Intl.DateTimeFormat` Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.DateTimeFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.DateTimeFormat` Instanzen ist der Anfangswert der {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat")}} Konstruktor.
- `Intl.DateTimeFormat.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Intl.DateTimeFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
  - : Getter-Funktion, die ein Datum gemäß dem Locale und den Formatierungsoptionen dieses `DateTimeFormat` Objekts formatiert.
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
  - : Diese Methode erhält zwei [Dates](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) und formatiert den Datumsbereich auf die prägnanteste Weise basierend auf dem Locale und den Optionen, die bei der Instanziierung von `DateTimeFormat` bereitgestellt wurden.
- {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
  - : Diese Methode erhält zwei [Dates](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) und gibt ein Array von Objekten zurück, das die locale-spezifischen Token darstellt, die jeden Teil des formatierten Datumsbereichs repräsentieren.
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, das den Datumsstring in Teile aufteilt, die für benutzerdefinierte locale-abhängige Formatierung verwendet werden können.
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die das Locale und die Formatierungsoptionen widerspiegeln, die während der Initialisierung des Objekts berechnet wurden.

## Beispiele

### Verwendung von DateTimeFormat

Bei der grundlegenden Nutzung ohne Angabe eines Locales verwendet `DateTimeFormat` das Standardlocale und die Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString ohne Argumente hängt von der Implementierung,
// dem Standardlocale und der Standardzeitzone ab
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" bei Ausführung mit en-US Locale (Sprache) und Zeitzone America/Los_Angeles (UTC-0800)
```

### Verwendung von Locales

Dieses Beispiel zeigt einige der Variationen in lokalisierten Datums- und Zeitformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, sollten Sie sicherstellen, dass Sie diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem `locales` Argument angeben:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Ergebnisse unten verwenden die Zeitzone von America/Los_Angeles (UTC-0800, Pacific Standard Time)

// US-Englisch verwendet die Reihenfolge Monat-Tag-Jahr
console.log(new Intl.DateTimeFormat("en-US").format(date));
// "12/19/2012"

// Britisches Englisch verwendet die Reihenfolge Tag-Monat-Jahr
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// "19/12/2012"

// Koreanisch verwendet die Reihenfolge Jahr-Monat-Tag
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// "2012. 12. 19."

// Arabisch in den meisten arabischsprachigen Ländern verwendet echte arabische Ziffern
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// "١٩‏/١٢‏/٢٠١٢"

// Für Japanisch könnten Anwendungen den japanischen Kalender verwenden wollen,
// wo 2012 das Jahr 24 der Heisei-Ära war
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// "24/12/19"

// Wenn Sie eine Sprache anfordern, die möglicherweise nicht unterstützt wird, wie
// Balinesisch, geben Sie eine Ersatzsprache an, in diesem Fall Indonesisch
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// "19/12/2012"
```

### Verwendung von Optionen

Die Datums- und Zeitformate können mithilfe des `options` Arguments angepasst werden:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));

// Einen Wochentag mit einem langen Datum anfordern
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// "Donnerstag, 20. Dezember 2012"

// Eine Anwendung könnte UTC verwenden wollen und das sichtbar machen
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "Thursday, December 20, 2012, GMT"

// Manchmal möchte man präziser sein
options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00 pm AEDT"

// Manchmal möchte man sehr präzise sein
options.fractionalSecondDigits = 3; //Anzahl der Ziffern für Sekundenbruchteile
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00.200 pm AEDT"

// Manchmal benötigt sogar die USA 24-Stunden-Zeit
options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
};
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "12/19/2012, 19:00:00"

// Um Optionen anzugeben, aber das Standardlocale des Browsers zu verwenden, verwenden Sie undefined
console.log(new Intl.DateTimeFormat(undefined, options).format(date));
// "12/19/2012, 19:00:00"

// Manchmal kann es hilfreich sein, die Tageszeit einzubeziehen
options = { hour: "numeric", dayPeriod: "short" };
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// 10 at night
```

Die verwendeten Kalender- und Nummerierungsformate können ebenfalls unabhängig über `options` Argumente festgelegt werden:

```js
const options = { calendar: "chinese", numberingSystem: "arab" };
const dateFormat = new Intl.DateTimeFormat(undefined, options);
const usedOptions = dateFormat.resolvedOptions();

console.log(usedOptions.calendar);
// "chinese"

console.log(usedOptions.numberingSystem);
// "arab"

console.log(usedOptions.timeZone);
// "America/New_York" (die Standardzeitzone des Nutzers)
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.DateTimeFormat` in FormatJS](https://formatjs.io/docs/polyfills/intl-datetimeformat/)
- {{jsxref("Intl")}}
