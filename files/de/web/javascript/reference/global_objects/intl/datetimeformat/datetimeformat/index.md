---
title: Intl.DateTimeFormat()-Konstruktor
short-title: Intl.DateTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Der **`Intl.DateTimeFormat()`**-Konstruktor erstellt {{jsxref("Intl.DateTimeFormat")}}-Objekte.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat() constructor", "taller")}}

```js interactive-example
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary

// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat("en-US").format(date));
// Expected output: "12/20/2020"

// Specify default date formatting for language with a fallback language (in this case Indonesian)
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// Expected output: "20/12/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)
console.log(
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(date),
);
// Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"
```

## Syntax

```js-nolint
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)

Intl.DateTimeFormat()
Intl.DateTimeFormat(locales)
Intl.DateTimeFormat(locales, options)
```

> [!NOTE]
> `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. In beiden Fällen wird eine neue `Intl.DateTimeFormat`-Instanz erstellt. Wird die Funktion jedoch ohne `new` aufgerufen und ist der Wert von `this` eine andere `Intl.DateTimeFormat`-Instanz, gilt ein besonderes Verhalten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}, eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Gebietsschemabezeichner. Wenn `undefined` übergeben wird oder keiner der angegebenen Gebietsschemabezeichner unterstützt wird, wird das Standardgebietsschema der Laufzeitumgebung verwendet. Die allgemeine Form und Interpretation des Arguments `locales` wird in der [Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) erläutert.

    Die folgenden Unicode-Erweiterungsschlüssel sind zulässig:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch über `options` gesetzt werden (siehe unten). Sind beide angegeben, hat die Eigenschaft in `options` Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Zur besseren Übersicht ist die Liste der Eigenschaften nach ihrem Zweck gegliedert: [Gebietsschemaoptionen](#gebietsschemaoptionen), [Optionen für Datums- und Uhrzeitkomponenten](#optionen_für_datums-_und_uhrzeitkomponenten) und [Kurzformen für Formatierungsstile](#kurzformen_für_formatierungsstile).

#### Gebietsschemaoptionen

- `localeMatcher`
  - : Der zu verwendende Algorithmus für den Gebietsschemaabgleich. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Identifizierung und Aushandlung von Gebietsschemata](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, beispielsweise `"chinese"`, `"gregory"` oder `"persian"`. Eine Liste unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types); der Standardwert hängt vom Gebietsschema ab. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `ca` gesetzt werden. Sind beide angegeben, hat diese Eigenschaft in `options` Vorrang.
- `numberingSystem`
  - : Das für die Zahlenformatierung zu verwendende Zahlensystem, beispielsweise `"arab"`, `"hanidec"` oder `"mathsans"`. Eine Liste unterstützter Zahlensysteme finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types); der Standardwert hängt vom Gebietsschema ab. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `nu` gesetzt werden. Sind beide angegeben, hat diese Eigenschaft in `options` Vorrang.
- `hour12`
  - : Gibt an, ob das 12-Stunden-Format statt des 24-Stunden-Formats verwendet werden soll. Mögliche Werte sind `true` und `false`; der Standardwert hängt vom Gebietsschema ab. Bei `true` setzt diese Option `hourCycle` je nach Gebietsschema auf `"h11"` oder `"h12"`. Bei `false` setzt sie `hourCycle` auf `"h23"`. `hour12` hat Vorrang vor dem Gebietsschema-Erweiterungsschlüssel `hc` und der Option `hourCycle`, sofern diese angegeben sind.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"` und `"h24"`; der Standardwert wird aus `hour12` und dem Gebietsschema abgeleitet. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `hc` gesetzt werden. Sind beide angegeben, hat diese Eigenschaft in `options` Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Zulässig sind alle [IANA-Zeitzonenbezeichner](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets), darunter benannte Bezeichner wie `"UTC"`, `"America/New_York"` und `"Etc/GMT+8"` sowie Offset-Bezeichner wie `"+01:00"`, `"-2359"` und `"+23"`. Der Standardwert ist die Zeitzone der Laufzeitumgebung, die auch {{jsxref("Date.prototype.toString()")}} verwendet.

#### Optionen für Datums- und Uhrzeitkomponenten

- `weekday`
  - : Die Darstellung des Wochentags. Mögliche Werte sind:
    - `"long"`
      - : Beispielsweise `Thursday`
    - `"short"`
      - : Beispielsweise `Thu`
    - `"narrow"`
      - : Beispielsweise `T`. In manchen Gebietsschemata können zwei Wochentage dieselbe schmale Darstellung haben (im Gebietsschema `en-US` beispielsweise sowohl `Tuesday` als auch `Thursday` als `T`).
- `era`
  - : Die Darstellung der Ära. Mögliche Werte sind:
    - `"long"`
      - : Beispielsweise `Anno Domini`
    - `"short"`
      - : Beispielsweise `AD`
    - `"narrow"`
      - : Beispielsweise `A`
- `year`
  - : Die Darstellung des Jahres. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `month`
  - : Die Darstellung des Monats. Mögliche Werte sind:
    - `"numeric"`
      - : Beispielsweise `3`
    - `"2-digit"`
      - : Beispielsweise `03`
    - `"long"`
      - : Beispielsweise `March`
    - `"short"`
      - : Beispielsweise `Mar`
    - `"narrow"`
      - : Beispielsweise `M`. In manchen Gebietsschemata können zwei Monate dieselbe schmale Darstellung haben (im Gebietsschema `en-US` beispielsweise sowohl `March` als auch `May` als `M`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`
  - : Der Formatierungsstil für Tagesabschnitte wie „morgens“, „am“, „mittags“ oder „n“. Mögliche Werte sind `"narrow"`, `"short"` und `"long"`.

    > [!NOTE]
    > Diese Option wirkt sich nur aus, wenn ein 12-Stunden-Format (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. In vielen Gebietsschemata wird unabhängig von der angegebenen Länge derselbe String verwendet.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Ziffern zur Darstellung von Sekundenbruchteilen (weitere Ziffern werden abgeschnitten). Mögliche Werte reichen von `1` bis `3`.
- `timeZoneName`
  - : Die lokalisierte Darstellung des Zeitzonennamens. Mögliche Werte sind:
    - `"long"`
      - : Lange lokalisierte Form (beispielsweise `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Kurze lokalisierte Form (beispielsweise `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Kurzes lokalisiertes GMT-Format (beispielsweise `GMT-8`)
    - `"longOffset"`
      - : Langes lokalisiertes GMT-Format (beispielsweise `GMT-08:00`)
    - `"shortGeneric"`
      - : Kurze allgemeine Form ohne Ortsangabe (beispielsweise `PT`, `Los Angeles Zeit`)
    - `"longGeneric"`
      - : Lange allgemeine Form ohne Ortsangabe (beispielsweise `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Falls der benötigte String nicht verfügbar ist, kann für die Zeitzonendarstellung auf ein anderes Format zurückgegriffen werden. Beispielsweise sollten die allgemeinen Formen ohne Ortsangabe die Zeitzone ohne konkretes Land oder konkrete Stadt anzeigen, etwa „Pacific Time“. Stattdessen kann jedoch eine Angabe wie „Los Angeles Time“ verwendet werden.

##### Standardwerte für Datums- und Uhrzeitkomponenten

Wenn eine Option für eine Datums- oder Uhrzeitkomponente angegeben ist, müssen `dateStyle` und `timeStyle` den Wert `undefined` haben. Wenn alle Optionen für Datums- und Uhrzeitkomponenten sowie `dateStyle` und `timeStyle` den Wert `undefined` haben, werden Standardwerte für einige Komponenten festgelegt. Diese hängen vom Typ des Objekts ab, mit dem die Formatierungsmethode aufgerufen wird:

- Beim Formatieren von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}} ist der Standardwert für `year`, `month` und `day` jeweils `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainTime")}} ist der Standardwert für `hour`, `minute` und `second` jeweils `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainYearMonth")}} ist der Standardwert für `year` und `month` jeweils `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainMonthDay")}} ist der Standardwert für `month` und `day` jeweils `"numeric"`.
- Beim Formatieren von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}} ist der Standardwert für `year`, `month`, `day`, `hour`, `minute` und `second` jeweils `"numeric"`.

##### Formatabgleich

Implementierungen müssen mindestens die folgenden Kombinationen von Datums- und Uhrzeitkomponenten darstellen können:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Darstellungsstile für Datums- und Uhrzeitkomponenten entsprechen möglicherweise nicht direkt einem vom Gebietsschema unterstützten Format. Mit dem Formatabgleich können Sie festlegen, wie die angeforderten Stile dem nächstliegenden unterstützten Format zugeordnet werden.

- `formatMatcher`
  - : Der zu verwendende Algorithmus für den Formatabgleich. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Der Algorithmus für `"best fit"` ist implementierungsabhängig, während `"basic"` [durch die Spezifikation definiert ist](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` den Wert `undefined` haben, sodass das Format jeder Datums- und Uhrzeitkomponente einzeln angepasst werden kann.

#### Kurzformen für Formatierungsstile

- `dateStyle`
  - : Der zu verwendende [Datumsformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Daraus werden Stile für `weekday`, `day`, `month`, `year` und `era` abgeleitet; die genaue Kombination der Werte hängt vom Gebietsschema ab. Beim Formatieren von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} und {{jsxref("Temporal.PlainMonthDay")}} wird `dateStyle` nur in die für das jeweilige Objekt relevanten Felder aufgelöst.
- `timeStyle`
  - : Der zu verwendende [Uhrzeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Daraus werden Stile für `hour`, `minute`, `second` und `timeZoneName` abgeleitet; die genaue Kombination der Werte hängt vom Gebietsschema ab.

> [!NOTE]
> `dateStyle` und `timeStyle` können zusammen verwendet werden, jedoch nicht mit anderen Optionen für Datums- und Uhrzeitkomponenten (beispielsweise `weekday`, `hour` oder `month`).

Welche Objekttypen Sie formatieren können, hängt davon ab, welche dieser Kurzformen Sie angeben:

- Wenn `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}-, {{jsxref("Temporal.PlainYearMonth")}}- und {{jsxref("Temporal.PlainMonthDay")}}-Objekte formatieren.
- Wenn `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}}-Objekte formatieren.
- Wenn `dateStyle` oder `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDateTime")}}- und {{jsxref("Date")}}-Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat`-Objekt.

> [!NOTE]
> Das nachfolgend beschriebene Verhalten ist in der Spezifikation als „optional“ gekennzeichnet. Es funktioniert möglicherweise nicht in allen Umgebungen. Prüfen Sie die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden und gibt in beiden Fällen eine neue `Intl.DateTimeFormat`-Instanz zurück. Wenn der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) jedoch ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (es muss nicht unbedingt mit `new Intl.DateTimeFormat` erstellt worden sein; entscheidend ist, dass sich `Intl.DateTimeFormat.prototype` in seiner Prototypkette befindet), wird stattdessen der Wert von `this` zurückgegeben. Das neu erstellte `Intl.DateTimeFormat`-Objekt ist dabei in einer `[Symbol(IntlLegacyConstructedSymbol)]`-Eigenschaft verborgen (einem eindeutigen Symbol, das für mehrere Instanzen wiederverwendet wird).

```js
const formatter = Intl.DateTimeFormat.call(
  { __proto__: Intl.DateTimeFormat.prototype },
  "en-US",
  { dateStyle: "full" },
);
console.log(Object.getOwnPropertyDescriptors(formatter));
// {
//   [Symbol(IntlLegacyConstructedSymbol)]: {
//     value: DateTimeFormat [Intl.DateTimeFormat] {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }
```

Beachten Sie, dass es hier nur eine tatsächliche `Intl.DateTimeFormat`-Instanz gibt: die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgene. Beim Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) auf `formatter` werden die in dieser Instanz gespeicherten Optionen korrekt verwendet. Der Aufruf aller anderen Methoden (beispielsweise [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) schlägt dagegen fehl: „TypeError: formatRange method called on incompatible Object“. Diese Methoden greifen nicht auf die Optionen der verborgenen Instanz zu.

Dieses als `ChainDateTimeFormat` bezeichnete Verhalten tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new` aufgerufen wird, `this` aber einen anderen Wert hat, der nicht `instanceof Intl.DateTimeFormat` ist. Beim direkten Aufruf als `Intl.DateTimeFormat()` ist der Wert von `this` [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und es wird wie üblich eine neue `Intl.DateTimeFormat`-Instanz erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### DateTimeFormat verwenden

Bei der einfachen Verwendung ohne Angabe eines Gebietsschemas verwendet `DateTimeFormat` das Standardgebietsschema und die Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### timeStyle und dateStyle verwenden

`dateStyle` und `timeStyle` bieten eine Kurzform, um mehrere Optionen für Datums- und Uhrzeitkomponenten gleichzeitig festzulegen. Für `en-US` entspricht beispielsweise `dateStyle: "short"` den Einstellungen `year: "2-digit", month: "numeric", day: "numeric"` und `timeStyle: "short"` den Einstellungen `hour: "numeric", minute: "numeric"`.

```js
const shortTime = new Intl.DateTimeFormat("en-US", {
  timeStyle: "short",
});
console.log(shortTime.format(Date.now())); // "1:31 PM"

const shortDate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
});
console.log(shortDate.format(Date.now())); // "7/7/20"

const mediumTime = new Intl.DateTimeFormat("en-US", {
  timeStyle: "medium",
  dateStyle: "short",
});
console.log(mediumTime.format(Date.now())); // "7/7/20, 1:31:55 PM"
```

Die genauen, vom Gebietsschema abhängigen Komponentenstile, in die diese Optionen aufgelöst werden, sind jedoch nicht in den [aufgelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. So kann das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()`-Konstruktor übergeben werden. Ein `options`-Objekt, das sowohl `dateStyle` oder `timeStyle` als auch Stile für einzelne Datums- oder Uhrzeitkomponenten enthält, wäre nämlich ungültig.

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### dayPeriod verwenden

Verwenden Sie die Option `dayPeriod`, um einen String für Tagesabschnitte wie „morgens“, „nachts“ oder „mittags“ auszugeben. Beachten Sie, dass dies nur bei der Formatierung im 12-Stunden-Format (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) funktioniert und dass in vielen Gebietsschemata unabhängig vom übergebenen Wert für `dayPeriod` dieselben Strings verwendet werden.

```js
const date = Date.UTC(2012, 11, 17, 4, 0, 42);

console.log(
  new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "short",
    timeZone: "UTC",
  }).format(date),
);
// "4 at night"  (same formatting in en-GB for all dayPeriod values)

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "narrow",
    timeZone: "UTC",
  }).format(date),
);
// "4 mat."  (same output in French for both narrow/short dayPeriod)

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "long",
    timeZone: "UTC",
  }).format(date),
);
// "4 du matin"
```

### timeZoneName verwenden

Verwenden Sie die Option `timeZoneName`, um einen String für die Zeitzone auszugeben (beispielsweise „GMT“ oder „Pacific Time“).

```js
const date = Date.UTC(2021, 11, 17, 3, 0, 42);
const timezoneNames = [
  "short",
  "long",
  "shortOffset",
  "longOffset",
  "shortGeneric",
  "longGeneric",
];

for (const zoneName of timezoneNames) {
  // Do something with currentValue
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: zoneName,
  });
  console.log(`${zoneName}: ${formatter.format(date)}`);
}

// Logs:
// short: 12/16/2021, PST
// long: 12/16/2021, Pacific Standard Time
// shortOffset: 12/16/2021, GMT-8
// longOffset: 12/16/2021, GMT-08:00
// shortGeneric: 12/16/2021, PT
// longGeneric: 12/16/2021, Pacific Time
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
