---
title: Intl.DateTimeFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Der **`Intl.DateTimeFormat()`** Konstruktor erstellt {{jsxref("Intl.DateTimeFormat")}} Objekte.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html", "taller")}}

## Syntax

```js-nolint
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)

Intl.DateTimeFormat()
Intl.DateTimeFormat(locales)
Intl.DateTimeFormat(locales, options)
```

> **Hinweis:** `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Intl.DateTimeFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und der `this` Wert eine andere `Intl.DateTimeFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Sprach-Identifikatoren. Die Standard-Spracheinstellung der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Sprach-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit wird die Liste der Eigenschaften in Abschnitte basierend auf ihrem Zweck unterteilt, einschließlich [Lokaloptionen](#lokaloptionen), [Datums- und Zeitkomponentenoptionen](#datums-_und_zeitkomponentenoptionen) und [Stilabkürzungen](#stilabkürzungen).

#### Lokaloptionen

- `localeMatcher`
  - : Der zu verwendende Lokalisierungsmatching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Für Informationen zu dieser Option siehe [Lokalidentifizierung und -verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie `"chinese"`, `"gregory"`, `"persian"` usw. Für eine Liste unterstützter Kalendertypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Diese Option kann auch über den `ca` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.
- `numberingSystem`
  - : Das zu verwendende Zahlensystem für die Zahlformatierung, wie `"arab"`, `"hans"`, `"mathsans"` usw. Für eine Liste unterstützter Zahlensystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.
- `hour12`
  - : Ob 12-Stunden-Zeit (anstelle von 24-Stunden-Zeit) verwendet werden soll. Mögliche Werte sind `true` und `false`; der Standard ist sprachabhängig. Wenn `true`, wird diese Option auf `hourCycle` entweder `"h11"` oder `"h12"` gesetzt, je nach Spracheinstellung. Wenn `false`, wird sie auf `"h23"` gesetzt. `hour12` überschreibt sowohl das `hc` Lokalerweiterungstag als auch die `hourCycle` Option, wenn eines oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"`, und `"h24"`. Diese Option kann auch über den `hc` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Zeitzonennamen entsprechen den Zone- und Linknamen der [IANA Time Zone Database](https://www.iana.org/time-zones), wie `"UTC"`, `"Asia/Shanghai"`, `"Asia/Kolkata"`, und `"America/New_York"`. Zusätzlich können Zeitzonen als UTC-Versätze im Format "±hh:mm", "±hhmm", oder "±hh" angegeben werden, zum Beispiel als `"+01:00"`, `"-2359"`, oder `"+23"`. Die Standardeinstellung ist die Standardzeitzone der Laufzeitumgebung.

#### Datums- und Zeitkomponentenoptionen

- `weekday`
  - : Die Darstellung des Wochentages. Mögliche Werte sind:
    - `"long"`
      - : Z.B. `Thursday`
    - `"short"`
      - : Z.B. `Thu`
    - `"narrow"`
      - : Z.B. `T`. Zwei Wochentage können für einige Lokale denselben engen Stil haben (z.B. `Tuesday`'s enger Stil ist auch `T`).
- `era`
  - : Die Darstellung der Epoche. Mögliche Werte sind:
    - `"long"`
      - : Z.B. `Anno Domini`
    - `"short"`
      - : Z.B. `AD`
    - `"narrow"`
      - : Z.B. `A`
- `year`
  - : Die Darstellung des Jahres. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `month`
  - : Die Darstellung des Monats. Mögliche Werte sind:
    - `"numeric"`
      - : Z.B. `3`
    - `"2-digit"`
      - : Z.B. `03`
    - `"long"`
      - : Z.B. `March`
    - `"short"`
      - : Z.B. `Mar`
    - `"narrow"`
      - : Z.B. `M`. Zwei Monate können für einige Lokale denselben engen Stil haben (z.B. `May`'s enger Stil ist auch `M`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`

  - : Der Formatierungsstil, der für Tageszeiten wie "am Morgen", "vorm.", "Mittag", "n" usw. verwendet wird. Mögliche Werte sind
    `"narrow"`, `"short"`, und `"long"`.

    > [!NOTE]
    > Diese Option hat nur eine Wirkung, wenn eine 12-Stunden Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Lokale verwenden denselben String unabhängig von der angegebenen Breite.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Ziffern, die zur Darstellung von Sekundenbruchteilen verwendet werden (alle zusätzlichen Ziffern werden abgeschnitten). Mögliche Werte sind von `1` bis `3`.
- `timeZoneName`

  - : Die lokalisierte Darstellung des Zeitzonennamens. Mögliche Werte sind:

    - `"long"`
      - : Lange lokalisierte Form (z.B. `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Kurze lokalisierte Form (z.B.: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Kurzes lokalisiertes GMT-Format (z.B., `GMT-8`)
    - `"longOffset"`
      - : Langes lokalisiertes GMT-Format (z.B., `GMT-08:00`)
    - `"shortGeneric"`
      - : Kurzes generisches nicht-ortsabhängiges Format (z.B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Langgenerisches nicht-ortsabhängiges Format (z.B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Zeitzonendarstellung kann auf ein anderes Format zurückfallen, wenn ein erforderlicher String nicht verfügbar ist. Beispielsweise sollten die nicht-ortsabhängigen Formate die Zeitzone ohne eine spezifische Länder-/Städteangabe wie "Pacific Time" anzeigen, könnten jedoch auf eine Zeitzone wie "Los Angeles Zeit" zurückfallen.

##### Standardwerte der Datums- und Zeitkomponenten

Wenn eine der Datums- und Zeitkomponentenoptionen angegeben wird, müssen `dateStyle` und `timeStyle` `undefined` sein. Wenn alle Datums- und Zeitkomponentenoptionen sowie `dateStyle`/`timeStyle` `undefined` sind, werden einige Standardoptionen für Datums- und Zeitkomponenten gesetzt, die vom Objekt abhängen, mit dem die Formatierungsmethode aufgerufen wurde:

- Bei der Formatierung von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}} standardisieren `year`, `month`, und `day` auf `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainTime")}} standardisieren `hour`, `minute`, und `second` auf `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainYearMonth")}} standardisieren `year` und `month` auf `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainMonthDay")}} standardisieren `month` und `day` auf `"numeric"`.
- Bei der Formatierung von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}} standardisieren `year`, `month`, `day`, `hour`, `minute`, und `second` auf `"numeric"`.

##### Formatübereinstimmung

Implementierungen sind verpflichtet, mindestens die folgenden Teilmengen der Datums- und Zeitkomponenten anzuzeigen:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Datums- und Zeitkomponentenstile entsprechen möglicherweise nicht direkt einem gültigen Format, das von der Region unterstützt wird, sodass der Format-Matcher es Ihnen ermöglicht, anzugeben, wie die angeforderten Stile dem nächstgelegenen unterstützten Format angepasst werden sollen.

- `formatMatcher`
  - : Der zu verwendende Formatabgleichsalgorithmus. Mögliche Werte sind `"basic"` und `"best fit"`; der Standard ist `"best fit"`. Der Algorithmus für `"best fit"` ist implementationsspezifisch, und `"basic"` ist [durch die Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (sodass das Format jeder Datums- und Zeitkomponente individuell anpassbar ist).

#### Stilabkürzungen

- `dateStyle`
  - : Der zu verwendende [Datumsformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Es wird auf Stile für `weekday`, `day`, `month`, `year`, und `era` erweitert, wobei die genaue Kombination von Werten von der Region abhängt. Bei der Formatierung von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} löst sich `dateStyle` nur auf die für das Objekt relevanten Felder auf.
- `timeStyle`
  - : Der zu verwendende [Zeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Es wird auf Stile für `hour`, `minute`, `second`, und `timeZoneName` erweitert, wobei die genaue Kombination von Werten von der Region abhängt.

> **Hinweis:** `dateStyle` und `timeStyle` können miteinander verwendet werden, jedoch nicht mit anderen Datums- und Zeitkomponentenoptionen (z.B. `weekday`, `hour`, `month`, etc.).

Sie können verschiedene Objekttypen formatieren, abhängig davon, welche der Stilabkürzungsoptionen Sie einfügen:

- Wenn `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, und {{jsxref("Temporal.PlainMonthDay")}} Objekte formatieren.
- Wenn `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}} Objekte formatieren.
- Wenn entweder `dateStyle` oder `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Date")}} Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat` Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt Verhalten, das von der Spezifikation als "optional" markiert ist. Es kann in einigen Umgebungen nicht funktionieren. Überprüfen Sie die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

In der Regel kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.DateTimeFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das `instanceof` `Intl.DateTimeFormat` ist (nicht unbedingt bedeutet, dass es über `new Intl.DateTimeFormat` erstellt wurde; nur dass es `Intl.DateTimeFormat.prototype` in seiner Prototypenkette hat), dann wird stattdessen der Wert von `this` zurückgegeben, mit dem neu erstellten `Intl.DateTimeFormat` Objekt versteckt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.DateTimeFormat` Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) Methoden auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange method called on incompatible Object", weil diese Methoden nicht auf die Optionen der versteckten Instanz zugreifen.

Dieses Verhalten, genannt `ChainDateTimeFormat`, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new`, aber mit `this`, das auf etwas anderes gesetzt ist, was kein `instanceof Intl.DateTimeFormat` ist, aufgerufen wird. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

Bei der grundlegenden Verwendung ohne Angabe einer Spracheinstellung verwendet `DateTimeFormat` die Standardspracheinstellung und Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung für das gleichzeitige Setzen mehrerer Datums- und Zeitkomponentenoptionen. Zum Beispiel ist für `en-US` `dateStyle: "short"` gleichbedeutend mit dem Setzen von `year: "2-digit", month: "numeric", day: "numeric"`, und `timeStyle: "short"` ist gleichbedeutend mit dem Setzen von `hour: "numeric", minute: "numeric"`.

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

Die genauen (spracheinstellungabhängigen) Komponentenstile, auf die sie sich auflösen, sind jedoch nicht in den [aufgelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` als auch einzelnen Datums- oder Zeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die `dayPeriod` Option, um eine Zeichenkette für die Tageszeiten auszugeben ("am Morgen", "in der Nacht", "Mittag" usw.). Beachten Sie, dass dies nur funktioniert, wenn für eine 12-Stunden-Uhr (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) formatiert wird und dass für viele Regionen die Zeichenketten unabhängig von dem für `dayPeriod` übergebenen Wert gleich sind.

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
// 4 at night"  (same formatting in en-GB for all dayPeriod values)

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

### Verwendung von timeZoneName

Verwenden Sie die `timeZoneName` Option, um eine Zeichenkette für die Zeitzone auszugeben ("GMT", "Pacific Time", usw.).

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
