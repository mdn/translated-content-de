---
title: Intl.DateTimeFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Der **`Intl.DateTimeFormat()`**-Konstruktor erstellt {{jsxref("Intl.DateTimeFormat")}}-Objekte.

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

> **Hinweis:** `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Möglichkeiten erstellen eine neue `Intl.DateTimeFormat`-Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der `this`-Wert eine andere `Intl.DateTimeFormat`-Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Sprach-Identifikatoren. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Sprach-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind zulässig:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` gesetzt werden (wie unten aufgeführt). Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften in Abschnitte unterteilt, basierend auf ihren Zwecken, einschließlich [Locale-Optionen](#locale-optionen), [Datums- und Zeitkomponenten-Optionen](#datums-_und_zeitkomponenten-optionen) und [Stil-Abkürzungen](#stil-abkürzungen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Abgleich-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen über diese Option siehe [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie z.B. `"chinese"`, `"gregory"`, `"persian"` und so weiter. Für eine Liste unterstützter Kalender-Typen siehe [`Intl.Locale.prototype.getCalendars()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types). Diese Option kann auch über den `ca` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
- `numberingSystem`
  - : Das für die Zahlenformatierung zu verwendende Nummerierungssystem, wie z.B. `"arab"`, `"hans"`, `"mathsans"` und so weiter. Für eine Liste unterstützter Nummerierungssystemtypen siehe [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
- `hour12`
  - : Ob ein 12-Stunden-Zeitsystem (anstatt 24-Stunden) verwendet werden soll. Mögliche Werte sind `true` und `false`; der Standardwert ist abhängig von der Locale. Wenn `true`, wird diese Option `hourCycle` auf entweder `"h11"` oder `"h12"` setzen, abhängig von der Locale. Wenn `false`, wird `hourCycle` auf `"h23"` gesetzt. `hour12` überschreibt sowohl das `hc`-Locale-Erweiterungs-Tag als auch die `hourCycle`-Option, falls eine oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"` und `"h24"`. Diese Option kann auch über den `hc` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Zeitzonennamen entsprechen den Zone- und Link-Namen der [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones), wie `"UTC"`, `"Asia/Shanghai"`, `"Asia/Kolkata"` und `"America/New_York"`. Zusätzlich können Zeitzonen als UTC-Versätze im Format "±hh:mm", "±hhmm" oder "±hh" angegeben werden, zum Beispiel als `"+01:00"`, `"-2359"` oder `"+23"`. Der Standardwert ist die Standard-Zeitzone der Laufzeitumgebung.

#### Datums- und Zeitkomponenten-Optionen

- `weekday`
  - : Die Darstellung des Wochentags. Mögliche Werte sind:
    - `"long"`
      - : z.B., `Thursday`
    - `"short"`
      - : z.B., `Thu`
    - `"narrow"`
      - : z.B., `T`. Zwei Wochentage können in einigen Locales denselben schmalen Stil haben (z.B. ist der schmale Stil von `Tuesday` ebenfalls `T`).
- `era`
  - : Die Darstellung der Epoche. Mögliche Werte sind:
    - `"long"`
      - : z.B., `Anno Domini`
    - `"short"`
      - : z.B., `AD`
    - `"narrow"`
      - : z.B., `A`
- `year`
  - : Die Darstellung des Jahres. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `month`
  - : Die Darstellung des Monats. Mögliche Werte sind:
    - `"numeric"`
      - : z.B., `3`
    - `"2-digit"`
      - : z.B., `03`
    - `"long"`
      - : z.B., `March`
    - `"short"`
      - : z.B., `Mar`
    - `"narrow"`
      - : z.B., `M`. Zwei Monate können in einigen Locales denselben schmalen Stil haben (z.B. ist der schmale Stil von `May` ebenfalls `M`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`

  - : Der Formatierungsstil für Tageszeiten wie "am Morgen", "am", "Mittag", "n" usw. Mögliche Werte sind
    `"narrow"`, `"short"` und `"long"`.

    > [!NOTE]
    > Diese Option hat nur dann eine Wirkung, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Locales verwenden denselben String unabhängig von der angegebenen Breite.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Ziffern zur Darstellung von Bruchteilen einer Sekunde (alle weiteren Ziffern werden abgeschnitten). Mögliche Werte sind von `1` bis `3`.
- `timeZoneName`

  - : Die lokalisierte Darstellung des Zeitzonennamens. Mögliche Werte sind:

    - `"long"`
      - : Lange lokalisierte Form (z.B., `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Kurze lokalisierte Form (z.B.: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Kurzes lokalisiertes GMT-Format (z.B., `GMT-8`)
    - `"longOffset"`
      - : Langes lokalisiertes GMT-Format (z.B., `GMT-08:00`)
    - `"shortGeneric"`
      - : Kurzes generisches Nicht-Ortsformat (z.B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Langes generisches Nicht-Ortsformat (z.B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Zeitzonendarstellung kann auf ein anderes Format zurückgreifen, wenn ein erforderlicher String nicht verfügbar ist. Zum Beispiel sollten die Nicht-Ortsformate die Zeitzone ohne eine spezifische Länder/Städte-Angabe wie "Pacific Time" anzeigen, können jedoch auf eine Zeitzone wie "Los Angeles Time" zurückgreifen.

##### Standardwerte der Datums- und Zeitkomponenten

Wenn eine der Datums- und Zeitkomponenten-Optionen angegeben ist, müssen `dateStyle` und `timeStyle` `undefined` sein. Wenn alle Datums- und Zeitkomponenten-Optionen und `dateStyle`/`timeStyle` `undefined` sind, werden einige Standardoptionen für Datums- und Zeitkomponenten gesetzt, die vom Objekt abhängen, mit dem die Formatierungsmethode aufgerufen wurde:

- Beim Formatieren von {{jsxref("Temporal.PlainDate")}} und {{jsxref("Date")}} sind `year`, `month` und `day` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainTime")}} sind `hour`, `minute` und `second` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainYearMonth")}} sind `year` und `month` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainMonthDay")}} sind `month` und `day` standardmäßig auf `"numeric"` gesetzt.
- Beim Formatieren von {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Temporal.Instant")}} sind `year`, `month`, `day`, `hour`, `minute` und `second` standardmäßig auf `"numeric"` gesetzt.

##### Format-Abgleich

Implementierungen sind verpflichtet, mindestens die folgenden Teilmengen von Datums- und Zeitkomponenten anzuzeigen:

- `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
- `weekday`, `year`, `month`, `day`
- `year`, `month`, `day`
- `year`, `month`
- `month`, `day`
- `hour`, `minute`, `second`
- `hour`, `minute`

Die angeforderten Datums- und Zeitkomponentenstile stimmen möglicherweise nicht direkt mit einem gültigen Format überein, das von der Locale unterstützt wird. Der Formatausgleicher ermöglicht es Ihnen, anzugeben, wie die angeforderten Stile mit dem nächstgelegenen unterstützten Format abgeglichen werden sollen.

- `formatMatcher`
  - : Der zu verwendende Format-Abgleich-Algorithmus. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Der Algorithmus für `"best fit"` ist implementierungsdefiniert, und `"basic"` ist [laut Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (damit ist das Format jeder Datums- und Zeitkomponente individuell anpassbar).

#### Stil-Abkürzungen

- `dateStyle`
  - : Der zu verwendende [Datumsformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Er erweitert sich zu Stilen für `weekday`, `day`, `month`, `year` und `era`, wobei die genaue Kombination der Werte von der Locale abhängt. Beim Formatieren von Objekten wie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} und {{jsxref("Temporal.PlainMonthDay")}} wird `dateStyle` nur die Felder auflösen, die für das Objekt relevant sind.
- `timeStyle`
  - : Der zu verwendende [Zeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Er erweitert sich zu Stilen für `hour`, `minute`, `second` und `timeZoneName`, wobei die genaue Kombination der Werte von der Locale abhängt.

> **Hinweis:** `dateStyle` und `timeStyle` können miteinander verwendet werden, jedoch nicht mit anderen Datums- und Zeitkomponenten-Optionen (z.B. `weekday`, `hour`, `month`, etc.).

Sie können verschiedene Objekttypen formatieren, je nachdem welche der Stil-Abkürzungsoptionen Sie einbeziehen:

- Wenn `dateStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} und {{jsxref("Temporal.PlainMonthDay")}} Objekte formatieren.
- Wenn `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainTime")}} Objekte formatieren.
- Wenn entweder `dateStyle` oder `timeStyle` angegeben ist, können Sie {{jsxref("Temporal.PlainDateTime")}} und {{jsxref("Date")}} Objekte formatieren.

### Rückgabewert

Ein neues `Intl.DateTimeFormat`-Objekt.

> [!NOTE]
> Der folgende Text beschreibt ein Verhalten, das in der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.DateTimeFormat`-Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.DateTimeFormat` erstellt wurde; nur dass es `Intl.DateTimeFormat.prototype` in seiner Prototypkette hat), wird stattdessen der Wert von `this` zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat`-Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]`-Eigenschaft (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird) versteckt ist.

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.DateTimeFormat`-Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) auf `formatter` würde die in jener Instanz gespeicherten Optionen korrekt verwenden, aber alle anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würden fehlschlagen: "TypeError: formatRange method called on incompatible Object", weil diese Methoden nicht die Optionen der versteckten Instanz berücksichtigen.

Dieses Verhalten, `ChainDateTimeFormat` genannt, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new`, aber mit `this` aufgerufen wird, das auf etwas anderes als ein `instanceof Intl.DateTimeFormat` gesetzt ist. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this`-Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat`-Instanz wird normalerweise erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

In der Grundnutzung ohne Angabe einer Locale verwendet `DateTimeFormat` die Standard-Locale und Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung zum Einstellen mehrerer Datums- und Zeitkomponentenoptionen auf einmal. Zum Beispiel ist für `en-US` `dateStyle: "short"` äquivalent zur Einstellung von `year: "2-digit", month: "numeric", day: "numeric"`, und `timeStyle: "short"` ist äquivalent zur Einstellung von `hour: "numeric", minute: "numeric"`.

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

Die genauen (von der Locale abhängigen) Komponentenstile, auf die sie sich auflösen, sind jedoch nicht in den [aufgelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()`-Konstruktor übergeben werden kann (da ein `options`-Objekt mit sowohl `dateStyle` oder `timeStyle` als auch einzelnen Datum- oder Zeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die Option `dayPeriod`, um einen String für die Tageszeiten auszugeben ("am Morgen", "in der Nacht", "Mittag" usw.). Beachten Sie, dass dies nur funktioniert, wenn für eine 12-Stunden-Uhr (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) formatiert wird und dass für viele Locales die Strings unabhängig vom für `dayPeriod` übergebenen Wert gleich sind.

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

Verwenden Sie die Option `timeZoneName`, um einen String für die Zeitzone auszugeben ("GMT", "Pacific Time" usw.).

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
