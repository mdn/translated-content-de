---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Intl.DateTimeFormat`**-Objekt ermöglicht sprachspezifische Datums- und Zeitformatierung.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html", "taller")}}

## Konstruktor

- {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - : Erstellt ein neues `Intl.DateTimeFormat`-Objekt.

## Statische Methoden

- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das diejenigen der bereitgestellten Locales enthält, die unterstützt werden, ohne auf die Standardlocale der Laufzeitumgebung zurückgreifen zu müssen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.DateTimeFormat.prototype` definiert und werden von allen `Intl.DateTimeFormat`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.DateTimeFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.DateTimeFormat`-Instanzen ist der Anfangswert der {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat")}}-Konstruktor.
- `Intl.DateTimeFormat.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.DateTimeFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
  - : Getter-Funktion, die ein Datum entsprechend der Locale und den Formatierungsoptionen dieses `DateTimeFormat`-Objekts formatiert.
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
  - : Diese Methode erhält zwei [Daten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) und formatiert den Datumsbereich auf die prägnanteste Weise basierend auf der bei der Instanziierung von `DateTimeFormat` angegebenen Locale und den Optionen.
- {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
  - : Diese Methode erhält zwei [Daten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) und gibt ein Array von Objekten zurück, das die locale-spezifischen Tokens enthält, die jeden Teil des formatierten Datumsbereichs repräsentieren.
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, das die Datumszeichenfolge in Teile zerlegt, die für eine benutzerdefinierte, locale-spezifische Formatierung verwendet werden können.
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung berechneten Locale- und Formatierungsoptionen widerspiegeln.

## Beispiele

### Verwendung von DateTimeFormat

Bei grundlegender Verwendung ohne Angabe einer Locale verwendet `DateTimeFormat` die Standardlocale und Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von Locales

Dieses Beispiel zeigt einige Variationen in lokalisierten Datums- und Zeitformaten. Um das Format der in der Benutzeroberfläche Ihrer Anwendung verwendeten Sprache zu erhalten, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Fallback-Sprachen) mit dem `locales`-Argument angeben:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Results below use the time zone of America/Los_Angeles (UTC-0800, Pacific Standard Time)

// US English uses month-day-year order
console.log(new Intl.DateTimeFormat("en-US").format(date));
// "12/19/2012"

// British English uses day-month-year order
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// "19/12/2012"

// Korean uses year-month-day order
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// "2012. 12. 19."

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// "١٩‏/١٢‏/٢٠١٢"

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// "24/12/19"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// "19/12/2012"
```

### Verwendung von Optionen

Datums- und Zeitformate können mit dem `options`-Argument angepasst werden:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));

// request a weekday along with a long date
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// "Donnerstag, 20. Dezember 2012"

// an application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "Thursday, December 20, 2012, GMT"

// sometimes you want to be more precise
options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00 pm AEDT"

// sometimes you want to be very precise
options.fractionalSecondDigits = 3; //number digits for fraction-of-seconds
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00.200 pm AEDT"

// sometimes even the US needs 24-hour time
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

// to specify options but use the browser's default locale, use undefined
console.log(new Intl.DateTimeFormat(undefined, options).format(date));
// "12/19/2012, 19:00:00"

// sometimes it's helpful to include the period of the day
options = { hour: "numeric", dayPeriod: "short" };
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// 10 at night
```

Die verwendeten Kalender- und Zahlenformate können auch unabhängig über `options`-Argumente festgelegt werden:

```js
const options = { calendar: "chinese", numberingSystem: "arab" };
const dateFormat = new Intl.DateTimeFormat(undefined, options);
const usedOptions = dateFormat.resolvedOptions();

console.log(usedOptions.calendar);
// "chinese"

console.log(usedOptions.numberingSystem);
// "arab"

console.log(usedOptions.timeZone);
// "America/New_York" (the users default timezone)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.DateTimeFormat` in FormatJS](https://formatjs.io/docs/polyfills/intl-datetimeformat/)
- {{jsxref("Intl")}}
