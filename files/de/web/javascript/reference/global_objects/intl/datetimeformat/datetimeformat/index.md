---
title: Intl.DateTimeFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: 643fa96e963ecaf2959cca5ddb573751a3efafac
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

> **Note:** `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Methoden erzeugen eine neue `Intl.DateTimeFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der Wert von `this` eine andere `Intl.DateTimeFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) festgelegt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Übersicht ist die Eigenschaftsliste basierend auf ihrem Zweck in Abschnitte unterteilt, einschließlich [Locale-Optionen](#locale-optionen), [Datum-Uhrzeit-Komponenten-Optionen](#datum-uhrzeit-komponenten-optionen) und [Stilabkürzungen](#stilabkürzungen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie `"chinese"`, `"gregory"`, `"persian"` und so weiter. Eine Liste der unterstützten Kalenderarten finden Sie unter [`Intl.Locale.prototype.getCalendars()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types). Diese Option kann auch über den Unicode-Erweiterungsschlüssel `ca` festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem für die Zahlenformatierung, wie `"arab"`, `"hans"`, `"mathsans"` und so weiter. Eine Liste der unterstützten Nummerierungssysteme finden Sie unter [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch über den Unicode-Erweiterungsschlüssel `nu` festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
- `hour12`
  - : Ob eine 12-Stunden-Zeit (anstelle einer 24-Stunden-Zeit) verwendet werden soll. Mögliche Werte sind `true` und `false`; der Standardwert ist von der Locale abhängig. Wenn `true`, wird diese Option auf `hourCycle` entweder `"h11"` oder `"h12"` gesetzt, abhängig von der Locale. Wenn `false`, wird sie auf `"h23"` gesetzt. `hour12` überschreibt sowohl das `hc` Locale-Erweiterungstag als auch die `hourCycle`-Option, falls eines oder beide vorhanden sind.
- `hourCycle`
  - : Der zu verwendende Stundenzyklus. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"` und `"h24"`. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `hc` festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Zeitzonennamen entsprechen den Zone- und Link-Namen der [IANA Time Zone Database](https://www.iana.org/time-zones), wie `"UTC"`, `"Asia/Shanghai"`, `"Asia/Kolkata"` und `"America/New_York"`. Darüber hinaus können Zeitzonen als UTC-Offsets im Format "±hh:mm", "±hhmm" oder "±hh" angegeben werden, zum Beispiel als `"+01:00"`, `"-2359"` oder `"+23"`. Der Standardwert ist die Standardzeitzone der Laufzeitumgebung.

#### Datum-Uhrzeit-Komponenten-Optionen

- `weekday`
  - : Die Darstellung des Wochentages. Mögliche Werte sind:
    - `"long"`
      - : Z.B., `Thursday`
    - `"short"`
      - : Z.B., `Thu`
    - `"narrow"`
      - : Z.B., `T`. Zwei Wochentage können in einigen Locales denselben engen Stil haben (z.B. ist der enge Stil von `Tuesday` ebenfalls `T`).
- `era`
  - : Die Darstellung der Ära. Mögliche Werte sind:
    - `"long"`
      - : Z.B., `Anno Domini`
    - `"short"`
      - : Z.B., `AD`
    - `"narrow"`
      - : Z.B., `A`
- `year`
  - : Die Darstellung des Jahres. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `month`
  - : Die Darstellung des Monats. Mögliche Werte sind:
    - `"numeric"`
      - : Z.B., `3`
    - `"2-digit"`
      - : Z.B., `03`
    - `"long"`
      - : Z.B., `March`
    - `"short"`
      - : Z.B., `Mar`
    - `"narrow"`
      - : Z.B., `M`). Zwei Monate können in einigen Locales denselben engen Stil haben (z.B. ist der enge Stil von `May` ebenfalls `M`).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`

  - : Der Formatierungsstil, der für Tageszeiten wie "morgens", "am", "mittags", "n" usw. verwendet wird. Mögliche Werte sind
    `"narrow"`, `"short"` und `"long"`.

    > [!NOTE]
    > Diese Option hat nur eine Wirkung, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Locales verwenden dieselbe Zeichenkette, unabhängig von der angegebenen Breite.

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
      - : Lange lokalisierte Form (z.B., `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
    - `"short"`
      - : Kurze lokalisierte Form (z.B.: `PST`, `GMT-8`)
    - `"shortOffset"`
      - : Kurzes lokalisiertes GMT-Format (z.B., `GMT-8`)
    - `"longOffset"`
      - : Langes lokalisiertes GMT-Format (z.B., `GMT-08:00`)
    - `"shortGeneric"`
      - : Kurzes generisches nicht-lokalisiertes Format (z.B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Langes generisches nicht-lokalisiertes Format (z.B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Darstellung der Zeitzone kann auf ein anderes Format zurückfallen, wenn eine erforderliche Zeichenkette nicht verfügbar ist. Zum Beispiel sollten die nicht-lokalisierten Formate die Zeitzone ohne eine spezifische Länder-/Stadtlokation wie "Pacific Time" anzeigen, können jedoch auf eine Zeitzone wie "Los Angeles Time" zurückfallen.

Der Standardwert für jede Datum-Uhrzeit-Komponenten-Option ist {{jsxref("undefined")}}, aber wenn alle Komponenteneigenschaften {{jsxref("undefined")}} sind, dann setzen `year`, `month` und `day` standardmäßig auf `"numeric"`. Wenn eine der Datum-Uhrzeit-Komponenten-Optionen angegeben ist, müssen `dateStyle` und `timeStyle` `undefined` sein.

- `formatMatcher`

  - : Der zu verwendende Format-Matching-Algorithmus. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Implementierungen müssen zumindest die folgenden Teilmengen von Datum-Uhrzeit-Komponenten unterstützen:

    - `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
    - `weekday`, `year`, `month`, `day`
    - `year`, `month`, `day`
    - `year`, `month`
    - `month`, `day`
    - `hour`, `minute`, `second`
    - `hour`, `minute`

    Implementierungen können andere Teilmengen unterstützen, und Anfragen werden gegen alle verfügbaren Teilmengen-Repräsentations-Kombinationen verhandelt, um die beste Übereinstimmung zu finden. Der Algorithmus für `"best fit"` ist implementierungsdefiniert, und `"basic"` wird [laut Spezifikation definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (sodass das Format jeder Datum-Uhrzeit-Komponente individuell anpassbar ist).

#### Stilabkürzungen

- `dateStyle`
  - : Der zu verwendende [Datumsformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Er erweitert sich auf Stile für `weekday`, `day`, `month`, `year` und `era`, wobei die genaue Kombination der Werte von der Locale abhängt.
- `timeStyle`
  - : Der zu verwendende [Uhrzeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"` und `"short"`. Er erweitert sich auf Stile für `hour`, `minute`, `second` und `timeZoneName`, wobei die genaue Kombination der Werte von der Locale abhängt.

> **Note:** `dateStyle` und `timeStyle` können zusammen verwendet werden, aber nicht mit anderen Datum-Uhrzeit-Komponenten-Optionen (z.B. `weekday`, `hour`, `month`, etc.).

### Rückgabewert

Ein neues `Intl.DateTimeFormat` Objekt.

> [!NOTE]
> Der nachfolgende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden und in beiden Fällen wird eine neue `Intl.DateTimeFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das eine Instanz von [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) ist (es bedeutet nicht notwendigerweise, dass es über `new Intl.DateTimeFormat` erstellt wurde; es hat nur `Intl.DateTimeFormat.prototype` in seiner Prototypenkette), wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft verborgen ist (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass hier nur eine eigentliche `Intl.DateTimeFormat` Instanz existiert: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) Methoden auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange method called on incompatible Object", weil diese Methoden nicht die Optionen der verborgenen Instanz berücksichtigen.

Dieses Verhalten, genannt `ChainDateTimeFormat`, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new`, aber mit `this` aufgerufen wird, das auf etwas anderes als `instanceof Intl.DateTimeFormat` gesetzt ist. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.DateTimeFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

Bei grundlegender Verwendung ohne Angabe einer Locale verwendet `DateTimeFormat` die Standard-Locale und Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" if run with en-US locale (language) and time zone America/Los_Angeles (UTC-0800)
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung für das gleichzeitige Setzen mehrerer Datum-Uhrzeit-Komponenten-Optionen. Für `en-US` ist zum Beispiel `dateStyle: "short"` gleichbedeutend mit `year: "2-digit", month: "numeric", day: "numeric"`, und `timeStyle: "short"` entspricht dem Setzen von `hour: "numeric", minute: "numeric"`.

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

Die genauen (locale-abhängigen) Komponentenstile, auf die sie sich auflösen, sind jedoch nicht in den [gelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` als auch einzelnen Datums- oder Uhrzeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die Option `dayPeriod`, um eine Zeichenkette für die Tageszeiten ("morgens", "nachts", "mittags", etc.) auszugeben. Beachten Sie, dass dies nur funktioniert, wenn eine 12-Stunden-Uhr (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) formatiert wird und dass in vielen Locales die Zeichenketten unabhängig vom übergebenen Wert für das `dayPeriod` gleich sind.

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

Verwenden Sie die Option `timeZoneName`, um eine Zeichenkette für die Zeitzone ("GMT", "Pacific Time", etc.) auszugeben.

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
