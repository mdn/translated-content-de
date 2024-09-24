---
title: Intl.DateTimeFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Der **`Intl.DateTimeFormat()`** Konstruktor erzeugt {{jsxref("Intl.DateTimeFormat")}} Objekte.

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

> **Note:** `Intl.DateTimeFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide rufen eine neue `Intl.DateTimeFormat` Instanz hervor. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und der `this` Wert eine andere `Intl.DateTimeFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder einer {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).
    - `ca`
      - : Siehe [`calendar`](#calendar).
    - `hc`
      - : Siehe [`hourCycle`](#hourcycle).

    Diese Schlüssel können auch mit `options` gesetzt werden (wie unten gelistet). Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit wird die Liste der Eigenschaften in Abschnitte unterteilt, basierend auf ihren Verwendungszwecken, inklusive [Locale Optionen](#locale_optionen), [Datum-Zeit Komponentenoptionen](#datum-zeit_komponentenoptionen) und [Stilabkürzungen](#stilabkürzungen).

#### Locale Optionen

- `localeMatcher`
  - : Der Locale-Abgleichsalgorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie unter [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `calendar`
  - : Der zu verwendende Kalender, wie z.B. `"chinese"`, `"gregory"`, `"persian"`, usw. Eine Liste der unterstützten Kalenderarten finden Sie unter [`Intl.Locale.prototype.getCalendars()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types). Diese Option kann auch über den `ca` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `numberingSystem`
  - : Das für die Nummernformatierung zu verwendende Nummernsystem, wie z.B. `"arab"`, `"hans"`, `"mathsans"`, usw. Eine Liste der unterstützten Nummernsystemarten finden Sie unter [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `hour12`
  - : Ob die 12-Stunden-Zeit verwendet werden soll (anstatt der 24-Stunden-Zeit). Mögliche Werte sind `true` und `false`; der Standardwert ist von der Locale abhängig. Wenn `true`, setzt diese Option `hourCycle` entweder auf `"h11"` oder `"h12"`, abhängig von der Locale. Wenn `false`, setzt sie `hourCycle` auf `"h23"`. `hour12` überschreibt sowohl das `hc` Locale-Erweiterungstag als auch die `hourCycle` Option, sollten eines oder beide vorhanden sein.
- `hourCycle`
  - : Der zu verwendende Stundentakt. Mögliche Werte sind `"h11"`, `"h12"`, `"h23"` und `"h24"`. Diese Option kann auch über den `hc` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
- `timeZone`
  - : Die zu verwendende Zeitzone. Zeitzonennamen entsprechen den Zone- und Link-Namen der [IANA Time Zone Database](https://www.iana.org/time-zones), wie z.B. `"UTC"`, `"Asia/Shanghai"`, `"Asia/Kolkata"` und `"America/New_York"`. Zusätzlich können Zeitzonen als UTC Offsets im Format "±hh:mm", "±hhmm" oder "±hh" angegeben werden, zum Beispiel als `"+01:00"`, `"-2359"` oder `"+23"`. Der Standard ist die Standardzeitzone der Laufzeitumgebung.

#### Datum-Zeit Komponentenoptionen

- `weekday`
  - : Die Darstellung des Wochentages. Mögliche Werte sind:
    - `"long"`
      - : Z.B., `Thursday`
    - `"short"`
      - : Z.B., `Thu`
    - `"narrow"`
      - : Z.B., `T`. Zwei Wochentage können in einigen Locales den gleichen schmalen Stil haben (z.B. hat `Tuesday` auch `T` im schmalen Stil).
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
      - : Z.B., `M`). Zwei Monate können in einigen Locales den gleichen schmalen Stil haben (z.B. hat `May` auch `M` im schmalen Stil).
- `day`
  - : Die Darstellung des Tages. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `dayPeriod`

  - : Der Formatierungsstil, der für Tageszeiten wie "in the morning", "am", "noon", "n", etc. verwendet wird. Mögliche Werte sind
    `"narrow"`, `"short"` und `"long"`.

    > [!NOTE]
    > Diese Option hat nur eine Auswirkung, wenn eine 12-Stunden-Uhr (`hourCycle: "h12"` oder `hourCycle: "h11"`) verwendet wird. Viele Locales verwenden den gleichen String unabhängig von der angegebenen Breite.

- `hour`
  - : Die Darstellung der Stunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `minute`
  - : Die Darstellung der Minute. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `second`
  - : Die Darstellung der Sekunde. Mögliche Werte sind `"numeric"` und `"2-digit"`.
- `fractionalSecondDigits`
  - : Die Anzahl der Ziffern, die für Bruchteile einer Sekunde verwendet werden (alle weiteren Ziffern werden abgeschnitten). Mögliche Werte sind von `1` bis `3`.
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
      - : Kurzes generisches Nicht-Standort-Format (z.B.: `PT`, `Los Angeles Zeit`).
    - `"longGeneric"`
      - : Langes generisches Nicht-Standort-Format (z.B.: `Pacific Time`, `Nordamerikanische Westküstenzeit`)

    > [!NOTE]
    > Die Anzeige der Zeitzone kann auf ein anderes Format zurückgreifen, wenn eine erforderliche Zeichenkette nicht verfügbar ist. Beispielsweise sollten die Nicht-Standort-Formate die Zeitzone ohne eine spezielle Land-/Stadtposition anzeigen, wie "Pacific Time", können aber zurückfallen auf eine Zeitzone wie "Los Angeles Time".

Der Standardwert für jede Datum-Zeit Komponente-Option ist {{jsxref("undefined")}}, aber wenn alle Komponenten-Eigenschaften {{jsxref("undefined")}} sind, dann standardisieren `year`, `month` und `day` auf `"numeric"`. Wenn eine der Datum-Zeit-Komponentenoptionen angegeben ist, müssen `dateStyle` und `timeStyle` `undefined` sein.

- `formatMatcher`

  - : Der zu verwendende Formatierungsabgleichsalgorithmus. Mögliche Werte sind `"basic"` und `"best fit"`; der Standardwert ist `"best fit"`. Implementierungen müssen zumindest die Anzeige der folgenden Untergruppen von Datum-Zeit Komponenten unterstützen:

    - `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
    - `weekday`, `year`, `month`, `day`
    - `year`, `month`, `day`
    - `year`, `month`
    - `month`, `day`
    - `hour`, `minute`, `second`
    - `hour`, `minute`

    Implementierungen können andere Untergruppen unterstützen, und Anforderungen werden gegen alle verfügbaren Untergruppen-Darstellungskombinationen verhandelt, um die beste Übereinstimmung zu finden. Der Algorithmus für `"best fit"` ist implementierungsdefiniert, und `"basic"` ist [im Standard definiert](https://tc39.es/ecma402/#sec-basicformatmatcher). Diese Option wird nur verwendet, wenn sowohl `dateStyle` als auch `timeStyle` `undefined` sind (sodass das Format jeder Datum-Zeit-Komponente individuell anpassbar ist).

#### Stilabkürzungen

- `dateStyle`
  - : Der zu verwendende [Datumsformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.aa5zjyepm6vh). Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Er erweitert sich auf Stile für `weekday`, `day`, `month`, `year`, und `era`, wobei die genaue Kombination von Werten von der Locale abhängt.
- `timeStyle`
  - : Der zu verwendende [Zeitformatierungsstil](https://cldr.unicode.org/translation/date-time/date-time-patterns#h.588vo3awdscu). Mögliche Werte sind `"full"`, `"long"`, `"medium"`, und `"short"`. Er erweitert sich auf Stile für `hour`, `minute`, `second`, und `timeZoneName`, wobei die exakte Kombination von Werten von der Locale abhängt.

> **Note:** `dateStyle` und `timeStyle` können gemeinsam verwendet werden, jedoch nicht mit anderen Datum-Zeit Komponentenoptionen (z.B. `weekday`, `hour`, `month`, etc.).

### Rückgabewert

Ein neues `Intl.DateTimeFormat` Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.DateTimeFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden und es wird in beiden Fällen eine neue `Intl.DateTimeFormat` Instanz zurückgegeben. Jedoch, wenn der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.DateTimeFormat` ist (bedeutet nicht zwingend, dass es via `new Intl.DateTimeFormat` erstellt wurde; nur dass es `Intl.DateTimeFormat.prototype` in seiner Prototypenkette hat), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.DateTimeFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft verborgen ist (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.DateTimeFormat` Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) Methoden auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange)) würde fehlschlagen: "TypeError: formatRange method called on incompatible Object", da diese Methoden nicht die Optionen der versteckten Instanz konsultieren.

Dieses Verhalten, genannt `ChainDateTimeFormat`, tritt nicht auf, wenn `Intl.DateTimeFormat()` ohne `new` aufgerufen wird, aber mit `this` gesetzt auf etwas anderes, das kein `instanceof Intl.DateTimeFormat` ist. Wenn Sie es direkt als `Intl.DateTimeFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und es wird eine neue `Intl.DateTimeFormat` Instanz normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von DateTimeFormat

Bei der grundlegenden Verwendung ohne Angabe einer Locale verwendet `DateTimeFormat` die Standard-Locale und Standardoptionen.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString ohne Argumente hängt von der Implementierung,
// der Standardlocale und der Standardzeitzone ab
console.log(new Intl.DateTimeFormat().format(date));
// "12/19/2012" wenn mit en-US Locale (Sprache) und Zeitzone Amerika/Los_Angeles (UTC-0800) ausgeführt
```

### Verwendung von timeStyle und dateStyle

`dateStyle` und `timeStyle` bieten eine Abkürzung, um mehrere Datum-Zeit Komponentenoptionen auf einmal festzulegen. Zum Beispiel ist für `en-US`, `dateStyle: "short"` äquivalent zu `year: "2-digit", month: "numeric", day: "numeric"` und `timeStyle: "short"` ist äquivalent zu `hour: "numeric", minute: "numeric"`.

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

Allerdings sind die genauen (locale-abhängigen) Komponentenstile, auf die sie sich auflösen, nicht in den [aufgelösten Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions) enthalten. Dies stellt sicher, dass das Ergebnis von `resolvedOptions()` direkt an den `Intl.DateTimeFormat()` Konstruktor übergeben werden kann (da ein `options` Objekt mit sowohl `dateStyle` oder `timeStyle` und individuellen Datum- oder Zeitkomponentenstilen nicht gültig ist).

```js
console.log(shortDate.resolvedOptions().year); // undefined
```

### Verwendung von dayPeriod

Verwenden Sie die `dayPeriod` Option, um eine Zeichenkette für die Tageszeiten auszugeben ("am Morgen", "in der Nacht", "Mittag", usw.). Beachten Sie, dass dies nur funktioniert, wenn die Zeit für eine 12-Stunden-Uhr formatiert wird (`hourCycle: 'h12'` oder `hourCycle: 'h11'`) und dass für viele Locales die Zeichenfolgen gleich sind, unabhängig vom für das `dayPeriod` angegebenen Wert.

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
// 4 at night"  (gleiches Format in en-GB für alle dayPeriod Werte)

console.log(
  new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hourCycle: "h12",
    dayPeriod: "narrow",
    timeZone: "UTC",
  }).format(date),
);
// "4 mat."  (gleiche Ausgabe auf Französisch für schmal/kurz dayPeriod)

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

Verwenden Sie die `timeZoneName` Option, um eine Zeichenkette für die Zeitzone auszugeben ("GMT", "Pacific Time", etc.).

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
  // Machen Sie etwas mit currentValue
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: zoneName,
  });
  console.log(`${zoneName}: ${formatter.format(date)}`);
}

// Ausgaben:
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
