---
title: Intl.DateTimeFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
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

> **Hinweis:** `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Methoden erzeugen eine neue Instanz von `Intl.DateTimeFormat`. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der `this` Wert eine andere Instanz von `Intl.DateTimeFormat` ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften in Abschnitte unterteilt, basierend auf deren Zwecken, einschließlich [Locale-Optionen](#locale-optionen), [Datums- und Zeitkomponentenoptionen](#datums-_und_zeitkomponentenoptionen) und [Stilabkürzungen](#stilabkürzungen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Abgleichsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; die Standardeinstellung ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Locale-Identifizierung und -Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie `"chinese"`, `"gregory"`, `"persian"` usw. Eine Liste der unterstützten Kalendertypen finden Sie unter [`Intl.Locale.prototype.getCalendars()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types). Diese Option kann auch durch den `ca` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide vorhanden sind, hat diese `options` Eigenschaft Vorrang.
- `numberingSystem`
  - : Das zu verwendende Zahlensystem für die Nummernformatierung, z.B. `"arab"`, `"hans"`, `"mathsans"` usw. Eine Liste der unterstützten Zahlensystemtypen finden Sie unter [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch durch den `nu` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide vorhanden sind, hat diese `options` Eigenschaft Vorrang.
- `hour12`
  - : Ob die 12-Stunden-Zeit (im Gegensatz zur 24-Stunden-Zeit) verwendet werden soll. Mögliche Werte sind `true` und `false`; die Standardeinstellung ist abhängig von der Locale. Wenn `true`, setzt diese Option `hourCycle` auf entweder `"h11"` oder `"h12"`, abhängig von der Locale. Wenn `false`, wird `hourCycle` auf `"h23"` gesetzt. `hour12` überschreibt sowohl das `hc` Locale-Erweiterungs-Tag als auch die `hourCycle` Option, wenn einer oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"` und `"h24"`. Diese Option kann auch durch den `hc` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Zeitzonennamen entsprechen den Zone- und Link-Namen der [IANA Time Zone Database](https://www.iana.org/time-zones), wie `"UTC"`, `"Asia/Shanghai"`, `"Asia/Kolkata"` und `"America/New_York"`. Darüber hinaus können Zeitzonen als UTC-Versatz im Format "±hh:mm", "±hhmm" oder "±hh" angegeben werden, zum Beispiel als `"+01:00"`, `"-2359"` oder `"+23"`. Die Standardeinstellung ist die Standardzeitzone der Laufzeitumgebung.

#### Datums- und Zeitkomponentenoptionen

- `weekday`
  - : Die Darstellung des Wochentags. Mögliche Werte sind:
    - `"long"`
      - : Z.B. `Thursday`
    - `"short"`
      - : Z.B. `Thu`
    - `"narrow"`
      - : Z.B. `T`. Zwei Wochentage können im schmalen Stil in einigen Locales denselben Wert haben (z.B. hat `Tuesday` im schmalen Stil ebenfalls `T`).
- `era`
  - : Die Darstellung der Ära. Mögliche Werte sind:
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
      - : Z.B. `M`. Zwei Monate können im schmalen Stil denselben Wert in einigen Locales haben (z.B. hat der Mai im schmalen Stil ebenfalls `M`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`

  - : Der Formatierungsstil, der für Tageszeiten wie "am Morgen", "am", "Mittags", "n" usw. verwendet wird. Mögliche Werte sind
    `"narrow"`, `"short"` und `"long"`.

    > [!NOTE]
    > Diese Option hat nur einen Effekt, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Locales verwenden denselben String unabhängig von der angegebenen Breite.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Stellen, die zur Darstellung von Sekundenbruchteilen verwendet werden (alle zusätzlichen Stellen werden abgeschnitten). Mögliche Werte sind von `1` bis `3`.
- `timeZoneName`

  - : Die lokalisierte Darstellung des Zeitzonennamens. Mögliche Werte sind:

    - `"long"`
      - : Lange lokalisierte Form (z.B. `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Kurze lokalisierte Form (z.B.: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Kurzes lokalisiertes GMT-Format (z.B. `GMT-8`)
    - `"longOffset"`
      - : Langes lokalisiertes GMT-Format (z.B. `GMT-08:00`)
    - `"shortGeneric"`
      - : Kurzes generisches Nicht-Standort-Format (z.B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Langes generisches Nicht-Standort-Format (z.B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Zeitzonenanzeige kann auf ein anderes Format zurückfallen, wenn eine erforderliche Zeichenfolge nicht verfügbar ist. Beispielsweise sollen die Nicht-Standort-Formate die Zeitzone ohne ein spezifisches Land/Stadt-Standort wie "Pacific Time" anzeigen, können jedoch auf eine Zeitzone wie "Los Angeles Time" zurückfallen.

Der Standardwert für jede Datums- und Zeitkomponentenoption ist {{jsxref("undefined")}}, aber wenn alle Komponenten-Eigenschaften {{jsxref("undefined")}} sind, dann sind `year`, `month` und `day` standardmäßig auf `"numeric"` gesetzt. Wenn eine der Datums- und Zeitkomponentenoptionen angegeben ist, müssen `dateStyle` und `timeStyle` `undefined` sein.

- `formatMatcher`

  - : Der zu verwendende Formatabgleichsalgorithmus. Mögliche Werte sind `"basic"` und `"best fit"`; die Standardeinstellung ist `"best fit"`. Implementierungen sind verpflichtet, mindestens die folgenden Teilmengen von Datums- und Zeitkomponenten anzuzeigen:

    - `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
    - `weekday`, `year`, `month`, `day`
    - `year`, `month`, `day`
    - `year`, `month`
    - `month`, `day`
    - `hour`, `minute`, `second`
    - `hour`, `minute`

    Implementierungen können andere Teilmengen unterstützen, und Anfragen werden anhand aller verfügbaren Kombinationen von Teilmengen-Darstellungen ausgehandelt, um das beste Ergebnis zu finden. Der Algorithmus für `"best fit"` ist implementationsspezifisch, und `"basic"` ist [durch die Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (sodass das Format jeder Datums- und Zeitkomponente individuell anpassbar ist).

#### Stilabkürzungen

- `dateStyle`
  - : Der zu verwendende [Datumsformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Es erweitert sich zu Stilen für `weekday`, `day`, `month`, `year` und `era`, wobei die genaue Kombination der Werte von der Locale abhängig ist.
- `timeStyle`
  - : Der zu verwendende [Zeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Es erweitert sich zu Stilen für `hour`, `minute`, `second` und `timeZoneName`, wobei die genaue Kombination der Werte von der Locale abhängig ist.

> **Hinweis:** `dateStyle` und `timeStyle` können miteinander verwendet werden, jedoch nicht mit anderen Datums- und Zeitkomponentenoptionen (z.B. `weekday`, `hour`, `month`, etc.).

### Rückgabewert

Ein neues `Intl.DateTimeFormat` Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und eine neue `Intl.DateTimeFormat` Instanz wird in beiden Fällen zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (das bedeutet nicht zwingend, dass es über `new Intl.DateTimeFormat` erstellt wurde, sondern dass es `Intl.DateTimeFormat.prototype` in seiner Prototypenkette hat), wird stattdessen der Wert von `this` zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft verborgen ist (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.DateTimeFormat` Instanz gibt: die, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) Methoden auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange Methode auf inkompatiblem Objekt aufgerufen", weil diese Methoden nicht die Optionen der versteckten Instanz konsultieren.

Dieses Verhalten, `ChainDateTimeFormat` genannt, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new` aufgerufen wird, aber mit `this`, das auf etwas anderes als ein `instanceof Intl.DateTimeFormat` gesetzt ist. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat` Instanz wird normalerweise erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

Bei der grundlegenden Verwendung ohne Angabe einer Locale verwendet `DateTimeFormat` die Standard-Locale und die Standard-Optionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung zum einmaligen Setzen mehrerer Datums- und Zeitkomponentenoptionen. Zum Beispiel ist für `en-US` `dateStyle: "short"` gleichbedeutend mit dem Setzen von `year: "2-digit", month: "numeric", day: "numeric"`, und `timeStyle: "short"` ist gleichbedeutend mit dem Setzen von `hour: "numeric", minute: "numeric"`.

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

Die genauen (locale-abhängigen) Komponentenstile, auf die sie aufgelöst werden, sind jedoch nicht in den [auflösbaren Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` als auch individuellen Datums- oder Zeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die `dayPeriod` Option, um eine Zeichenfolge für die Tageszeiten auszugeben ("am Morgen", "nachts", "Mittag" usw.). Beachten Sie, dass dies nur funktioniert, wenn für eine 12-Stunden-Uhr formatiert wird (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) und dass für viele Locales die Zeichenfolgen unabhängig vom übergebenen Wert für das `dayPeriod` gleich sind.

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

Verwenden Sie die `timeZoneName` Option, um eine Zeichenfolge für die Zeitzone auszugeben ("GMT", "Pacific Time" usw.).

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
