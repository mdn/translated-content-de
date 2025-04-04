---
title: Intl.NumberFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 82c5a0984ae303b08a2d5cab30299d0ed9e67a2e
---

{{JSRef}}

Der **`Intl.NumberFormat()`** Konstruktor erstellt {{jsxref("Intl.NumberFormat")}} Objekte.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat() Konstruktor", "taller")}}

```js interactive-example
const number = 123456.789;

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// Expected output: "123.456,79 €"

// The Japanese yen doesn't use a minor unit
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// Expected output: "￥123,457"

// Limit to three significant digits
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// Expected output: "1,23,000"
```

## Syntax

```js-nolint
new Intl.NumberFormat()
new Intl.NumberFormat(locales)
new Intl.NumberFormat(locales, options)

Intl.NumberFormat()
Intl.NumberFormat(locales)
Intl.NumberFormat(locales, options)
```

> **Note:** `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide rufen eine neue `Intl.NumberFormat` Instanz auf. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und der `this` Wert eine andere `Intl.NumberFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und die Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgelistet) gesetzt werden. Wenn beide festgelegt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften in Abschnitte unterteilt, basierend auf ihrem Zweck, einschließlich [Locale-Optionen](#locale-optionen), [Stiloptionen](#stiloptionen), [Ziffernoptionen](#ziffernoptionen) und [andere Optionen](#andere_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Abgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Lokalisierungsidentifikation und -verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das Zahlensystem, das für die Zahlenformatierung verwendet werden soll, wie `"arab"`, `"hans"`, `"mathsans"`, usw. Eine Liste der unterstützten Zahlensystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.

#### Stiloptionen

Je nach verwendetem `style` können einige davon ignoriert werden und andere erforderlich sein:

- `style`
  - : Der zu verwendende Formatierungsstil.
    - `"decimal"` (Standard)
      - : Für einfache Zahlenformatierung.
    - `"currency"`
      - : Für Währungsformatierung.
    - `"percent"`
      - : Für Prozentformatierung.
    - `"unit"`
      - : Für Einheitenformatierung.
- `currency`
  - : Die Währung, die in der Währungsformatierung verwendet werden soll. Mögliche Werte sind die ISO 4217 Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency` Eigenschaft bereitgestellt werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung in der Währungsformatierung dargestellt wird.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokalisiertes Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" statt "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Locale bedeutet das Rechnungsformat, die Zahl in Klammern zu setzen, anstatt ein Minuszeichen anzuhängen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die Einheit, die in der `unit` Formatierung verwendet werden soll. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgelistet. Paare einfacher Einheiten können mit "-per-" zu einer zusammengesetzten Einheit verkettet werden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit` Eigenschaft bereitgestellt werden.
- `unitDisplay`
  - : Der Stil der Einheitenformatierung, der in der `unit` Formatierung verwendet werden soll. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B. `16 l`.
    - `"narrow"`
      - : Z.B. `16l`.
    - `"long"`
      - : Z.B. `16 litres`.

#### Ziffernoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die minimale Anzahl von ganzzahligen Ziffern, die verwendet werden sollen. Ein Wert mit weniger Ganzzahlen als diese Zahl wird mit führenden Nullen (auf die angegebene Länge) formatiert. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die minimale Anzahl von Nachkommastellen, die verwendet werden sollen. Mögliche Werte liegen zwischen `0` und `100`; der Standardwert für einfache Zahlen- und Prozentformatierung ist `0`; der Standardwert für Währungsformatierung ist die Anzahl der Minderwertigkeitsziffern, die durch die [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt werden (2, wenn die Liste diese Information nicht bereitstellt). Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `maximumFractionDigits`
  - : Die maximale Anzahl von Nachkommastellen, die verwendet werden sollen. Mögliche Werte liegen zwischen `0` und `100`; der Standardwert für einfache Zahlenformatierung ist das größere der `minimumFractionDigits` und `3`; der Standardwert für Währungsformatierung ist das größere der `minimumFractionDigits` und die Anzahl der Minderwertigkeitsziffern, die durch die [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt werden (2, wenn die Liste diese Information nicht bereitstellt); der Standardwert für Prozentformatierung ist das größere der `minimumFractionDigits` und `0`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `minimumSignificantDigits`
  - : Die minimale Anzahl von signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl von signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `21`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `roundingPriority`

  - : Gibt an, wie Rundungskonflikte gelöst werden, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind. Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis der signifikanten Zifferneigenschaft wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis der Eigenschaft, die zu mehr Präzision führt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis der Eigenschaft, die zu weniger Präzision führt, wird verwendet.

    Der Wert `"auto"` wird in `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keine der vier "FractionDigits"/"SignificantDigits" Optionen gesetzt sind.

    Beachten Sie, dass für Werte außer `auto` das Ergebnis mit mehr Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (Einstellungen für minimale Bruch- und signifikante Ziffern werden ignoriert).

- `roundingIncrement`

  - : Gibt das Inkrement an, bei dem die Rundung im Verhältnis zur berechneten Rundungsmagnitude stattfinden soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`; der Standardwert ist `1`. Es kann nicht mit signifikanten Ziffern oder einer anderen Einstellung als `auto` der `roundingPriority` gemischt werden.

- `roundingMode`

  - : Wie Dezimalstellen gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Rundung gegen +∞. Positive Werte werden aufgerundet. Negative Werte werden "positiver".
    - `"floor"`
      - : Rundung gegen -∞. Positive Werte werden abgerundet. Negative Werte werden "negativer".
    - `"expand"`
      - : Rundung weg von 0. Die _Größe_ des Wertes wird immer durch das Runden erhöht. Positive Werte werden aufgerundet. Negative Werte werden "negativer".
    - `"trunc"`
      - : Rundung gegen 0. Die _Größe_ des Wertes wird immer durch das Runden verringert. Positive Werte werden abgerundet. Negative Werte werden "weniger negativ".
    - `"halfCeil"`
      - : Binden an +∞. Werte oberhalb des Halbinkrements runden wie `"ceil"` (gegen +∞) und darunter wie `"floor"` (gegen -∞). Auf dem Halbinkrement runden Werte wie `"ceil"`.
    - `"halfFloor"`
      - : Binden an -∞. Werte oberhalb des Halbinkrements runden wie `"ceil"` (gegen +∞) und darunter wie `"floor"` (gegen -∞). Auf dem Halbinkrement runden Werte wie `"floor"`.
    - `"halfExpand"` (Standard)
      - : Binden von 0 weg. Werte oberhalb des Halbinkrements runden wie `"expand"` (von null weg) und darunter wie `"trunc"` (gegen 0). Auf dem Halbinkrement runden Werte wie `"expand"`.
    - `"halfTrunc"`
      - : Binden gegen 0. Werte oberhalb des Halbinkrements runden wie `"expand"` (von null weg) und darunter wie `"trunc"` (gegen 0). Auf dem Halbinkrement runden Werte wie `"trunc"`.
    - `"halfEven"`
      - : Binden an die nächste gerade Zahl. Werte oberhalb des Halbinkrements runden wie `"expand"` (von null weg) und darunter wie `"trunc"` (gegen 0). Auf dem Halbinkrement runden Werte zur nächsten geraden Ziffer.

    Diese Optionen spiegeln den [ICU-Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, wo "expand" und "trunc" auf ICU "UP" und "DOWN" abbilden. Das [Rundungsmodi](#rundungsmodi) Beispiel unten zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige von nachfolgenden Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie nachfolgende Nullen gemäß `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Nachkommastellen, _wenn_ sie alle null sind. Dies ist dasselbe wie `"auto"`, wenn eine der Nachkommastellen ungleich null ist.

##### SignificantDigits/FractionDigits Standardwerte

Für die vier oben genannten Optionen (die `FractionDigits` und `SignificantDigits` Optionen) erwähnten wir ihre Standardeinstellungen; diese Standardeinstellungen werden jedoch _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet wird, was von den Einstellungen [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Speziell:

- Wenn `roundingPriority` nicht `"auto"` ist, dann gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits`-Option gesetzt ist, dann gelten die `SignificantDigits`-Optionen und die `FractionDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist und entweder mindestens eine `FractionDigits`-Option gesetzt ist oder `notation` nicht `"compact"` ist, dann gelten die `FractionDigits`-Optionen und die `SignificantDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist und keine der vier Optionen gesetzt ist, dann werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben genannten Standardeinstellungen, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Die Formatierung, die für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfache Zahlenformatierung.
    - `"scientific"`
      - : Gibt den Größenordnungswert der formatierten Zahl zurück.
    - `"engineering"`
      - : Gibt den Exponenten von zehn zurück, wenn durch drei teilbar.
    - `"compact"`
      - : String repräsentiert Exponent; verwendet standardmäßig die "kurze" Form.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.
- `useGrouping`

  - : Ob Gruppierungszeichen wie Tausendertrennzeichen oder Tausend/Lakh/Crore-Trennzeichen verwendet werden sollen.

    - `"always"`
      - : Gruppierungszeichen anzeigen, auch wenn die Locale dies nicht bevorzugt.
    - `"auto"`
      - : Gruppierungszeichen basierend auf der Locale-Präferenz anzeigen, die auch währungsabhängig sein kann.
    - `"min2"`
      - : Gruppierungszeichen anzeigen, wenn mindestens 2 Ziffern in einer Gruppe vorhanden sind.
    - `true`
      - : Gleiche Bedeutung wie `"always"`.
    - `false`
      - : Keine Gruppierungszeichen anzeigen.

    Der Standardwert ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` ansonsten. Die Stringwerte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt wird. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenanzeige nur für negative Zahlen, einschließlich negativer Null.
    - `"always"`
      - : Immer Vorzeichen anzeigen.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, aber nicht für Null.
    - `"negative"`
      - : Vorzeichenanzeige nur für negative Zahlen, ohne negative Null.
    - `"never"`
      - : Niemals das Vorzeichen anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat` Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt Verhalten, das durch die Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Prüfen Sie die [Browser-Kompatibilitäts-Tabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden und eine neue `Intl.NumberFormat` Instanz wird in beiden Fällen zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde; nur dass es `Intl.NumberFormat.prototype` in seiner Prototypenkette hat), dann wird stattdessen der Wert von `this` zurückgegeben, mit der neu erstellten `Intl.NumberFormat` Instanz, die in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft verborgen ist (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird).

```js
const formatter = Intl.NumberFormat.call(
  { __proto__: Intl.NumberFormat.prototype },
  "en-US",
  { notation: "scientific" },
);
console.log(Object.getOwnPropertyDescriptors(formatter));
// {
//   [Symbol(IntlLegacyConstructedSymbol)]: {
//     value: NumberFormat [Intl.NumberFormat] {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }
```

Beachten Sie, dass hier nur eine eigentliche `Intl.NumberFormat` Instanz existiert: die, welche in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) Methoden auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen nutzen, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, weil diese Methoden die versteckt gehaltenen Instanzoptionen nicht berücksichtigen.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new`, aber mit `this` gesetzt auf etwas anderes aufgerufen wird, das kein `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die enumerierte Werte annimmt (wie `style`, `units`, `currency`, usw.), wird auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind festgelegt, und sie sind auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass diese Eigenschaften je nach verschiedenen Formatierungsoptionen Standardwerte haben können.
      Es ist daher möglich, diesen Fehler auch zu erhalten, wenn Sie nur eine der Eigenschaften festlegen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `options.style` Eigenschaft auf "unit" oder "currency" gesetzt ist, und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` festgelegt wurde.

## Beispiele

### Grundlegende Nutzung

In der grundlegenden Verwendung ohne Angabe einer Locale wird ein formatierter String in der Standard-Locale und mit Standardoptionen zurückgegeben.

```js
const amount = 3500;

console.log(new Intl.NumberFormat().format(amount));
// '3,500' if in US English locale
```

### Dezimal- und Prozentformatierung

```js
const amount = 3500;

new Intl.NumberFormat("en-US", {
  style: "decimal",
}).format(amount); // '3,500'
new Intl.NumberFormat("en-US", {
  style: "percent",
}).format(amount); // '350,000%'
```

### Einheitenformatierung

Wenn der `style` `'unit'` ist, muss eine `unit` Eigenschaft angegeben werden.
Optional steuert `unitDisplay` die Einheitenformatierung.

```js
const amount = 3500;

new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "liter",
}).format(amount); // '3,500 L'

new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "liter",
  unitDisplay: "long",
}).format(amount); // '3,500 liters'
```

### Währungsformatierung

Wenn der `style` `'currency'` ist, muss eine `currency` Eigenschaft
angegeben werden. Optional steuern `currencyDisplay` und
`currencySign` die Einheitenformatierung.

```js
const amount = -3500;
new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(amount); // '-$3,500.00'

new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "name",
}).format(amount); // '-3,500.00 US dollars'

new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
}).format(amount); // '($3,500.00)'
```

### Wissenschaftliche, ingenieurtechnische oder kompakte Notationen

Wissenschaftliche und kompakte Notationen werden durch die `notation` Option dargestellt und können wie folgt formatiert werden:

```js
new Intl.NumberFormat("en-US", {
  notation: "scientific",
}).format(987654321);
// 9.877E8

new Intl.NumberFormat("pt-PT", {
  notation: "scientific",
}).format(987654321);
// 9,877E8

new Intl.NumberFormat("en-GB", {
  notation: "engineering",
}).format(987654321);
// 987.654E6

new Intl.NumberFormat("de", {
  notation: "engineering",
}).format(987654321);
// 987,654E6

new Intl.NumberFormat("zh-CN", {
  notation: "compact",
}).format(987654321);
// 9.9亿

new Intl.NumberFormat("fr", {
  notation: "compact",
  compactDisplay: "long",
}).format(987654321);
// 988 millions

new Intl.NumberFormat("en-GB", {
  notation: "compact",
  compactDisplay: "short",
}).format(987654321);
// 988M
```

### Vorzeichenanzeige

Zeigen Sie ein Vorzeichen für positive und negative Zahlen an, aber nicht für Null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass, wenn das Währungsvorzeichen "accounting" ist, Klammern möglicherweise anstelle eines Minuszeichens verwendet werden:

```js
new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
  signDisplay: "always",
}).format(-3500);
// '($3,500.00)'
```

### FractionDigits, SignificantDigits und IntegerDigits

Sie können die minimale oder maximale Anzahl von Nachkommastellen, Ganzzahlen oder signifikanten Ziffern angeben, die beim Formatieren einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl signifikante als auch Nachkommastellenlimits angegeben sind, hängt die tatsächliche Formatierung von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganzzahlen- und Nachkommastellen-Eigenschaften geben die Anzahl der Ziffern an, die vor und nach dem Dezimalpunkt angezeigt werden sollen.
Wenn der anzuzeigende Wert weniger Ganzzahlen als angegeben hat, wird er mit führenden Nullen auf die erwartete Anzahl gepolstert.
Wenn er weniger Nachkommastellen hat, wird er mit Nullen rechts gepolstert.
Beide Fälle sind unten dargestellt:

```js
// Formatting adds zeros to display minimum integers and fractions
console.log(
  new Intl.NumberFormat("en", {
    minimumIntegerDigits: 3,
    minimumFractionDigits: 4,
  }).format(4.33),
);
// "004.3300"
```

Wenn ein Wert mehr Nachkommastellen als die angegebene maximale Anzahl hat, wird er gerundet.
Die _Art_, wie er gerundet wird, hängt von der Eigenschaft [`roundingMode`](#roundingmode) ab (weitere Details finden Sie im Abschnitt [Rundungsmodi](#rundungsmodi)).
Unten wird der Wert von fünf Nachkommastellen (`4.33145`) auf zwei (`4.33`) gerundet:

```js
// Display value shortened to maximum number of digits
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(4.33145),
);
// "4.33"
```

Die minimalen Nachkommastellen haben keinen Effekt, wenn der Wert bereits mehr als 2 Nachkommastellen hat:

```js
// Minimum fractions have no effect if value is higher precision.
console.log(
  new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
  }).format(4.33145),
);
// "4.331"
```

> [!WARNING]
> Achten Sie auf Standardwerte, da sie die Formatierung beeinflussen können, auch wenn sie nicht in Ihrem Code spezifiziert sind.
> Der Standardwert für die maximale Ziffer ist `3` für einfache Werte, `2` für Währungen und kann für andere vordefinierte Typen unterschiedliche Werte haben.

Der oben formatierte Wert wird auf 3 Ziffern gerundet, obwohl wir keine maximalen Ziffern angegeben haben!
Dies liegt daran, dass ein Standardwert für `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte für `maximumFractionDigits` und `minimumFractionDigits` sind `3` bzw. `0`.

Sie können [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) verwenden, um den Formatter zu inspizieren.

```js
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumFractionDigits: 0,
//   maximumFractionDigits: 2,
//   …
// }

console.log(
  new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 3,
//   …
// }
```

#### Verwendung von SignificantDigits

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtzahl der Ziffern, einschließlich der Ganzzahl- und Fraktionsteile.
Die `maximumSignificantDigits` wird verwendet, um die Gesamtzahl der Ziffern aus dem ursprünglichen Wert anzuzeigen.

Die folgenden Beispiele zeigen, wie dies funktioniert.
Beachten Sie insbesondere das letzte Beispiel: nur die erste Ziffer wird beibehalten und die anderen werden verworfen/auf Null gesetzt.

```js
// Display 5 significant digits
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 5,
  }).format(54.33145),
);
// "54.331"

// Max 2 significant digits
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(54.33145),
);
// "54"

// Max 1 significant digits
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 1,
  }).format(54.33145),
);
// "50"
```

Die `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl von Ziffern angezeigt wird, indem erforderlichenfalls Nullen am Ende des Wertes hinzugefügt werden.

```js
// Minimum 10 significant digits
console.log(
  new Intl.NumberFormat("en", {
    minimumSignificantDigits: 10,
  }).format(54.33145),
);
// "54.33145000"
```

> [!WARNING]
> Achten Sie auf Standardwerte, da sie die Formatierung beeinflussen können.
> Wenn nur eine `SignificantDigits` Eigenschaft verwendet wird, wird ihr Gegenstück automatisch mit dem Standardwert angewendet.
> Die Standardwerte für maximale und minimale signifikante Ziffereigenschaften sind 21 bzw. 1.

#### Gleichzeitige Spezifikation von signifikanten und Nachkommastellen

Die Fraktionsziffern ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten, um zu steuern, wie viele Fraktions- und führende Ziffern formatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, können sie in Konflikt geraten.

Diese Konflikte werden mit der Eigenschaft [`roundingPriority`](#roundingpriority) gelöst.
Standardmäßig hat diese den Wert `"auto"`, was bedeutet, dass, wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#maximumsignificantdigits) angegeben ist, die Fraktions- und Ganzzahlen-Eigenschaften ignoriert werden.

Zum Beispiel formatiert der folgende Code den Wert von `4.33145` mit `maximumFractionDigits: 3`, dann `maximumSignificantDigits: 2` und dann beide.
Der Wert mit beiden ist derjenige, der mit `maximumSignificantDigits` gesetzt ist.

```js
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
  }).format(4.33145),
);
// "4.331"
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(4.33145),
);
// "4.3"
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
    maximumSignificantDigits: 2,
  }).format(4.33145),
);
// "4.3"
```

Indem Sie [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) verwenden, um den Formatter zu inspizieren, können wir feststellen, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

```js
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
    maximumSignificantDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumSignificantDigits: 1,
//   maximumSignificantDigits: 2,
//   …
// }
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
    minimumSignificantDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumSignificantDigits: 2,
//   maximumSignificantDigits: 21,
//   …
// }
```

Zusätzlich zu `"auto"` können Sie Konflikte lösen, indem [`roundingPriority`](#roundingpriority) als `"morePrecision"` oder `"lessPrecision"` angegeben wird.
Der Formatter berechnet die Präzision mit den Werten von `maximumSignificantDigits` und `maximumFractionDigits`.

Der folgende Code zeigt, wie das Format für die drei verschiedenen Rundungsprioritäten ausgewählt wird:

```js
const maxFracNF = new Intl.NumberFormat("en", {
  maximumFractionDigits: 3,
});
console.log(`maximumFractionDigits:3 - ${maxFracNF.format(1.23456)}`);
// "maximumFractionDigits:2 - 1.235"

const maxSigNS = new Intl.NumberFormat("en", {
  maximumSignificantDigits: 3,
});
console.log(`maximumSignificantDigits:3 - ${maxSigNS.format(1.23456)}`);
// "maximumSignificantDigits:3 - 1.23"

const bothAuto = new Intl.NumberFormat("en", {
  maximumSignificantDigits: 3,
  maximumFractionDigits: 3,
});
console.log(`auto - ${bothAuto.format(1.23456)}`);
// "auto - 1.23"

const bothLess = new Intl.NumberFormat("en", {
  roundingPriority: "lessPrecision",
  maximumSignificantDigits: 3,
  maximumFractionDigits: 3,
});
console.log(`lessPrecision - ${bothLess.format(1.23456)}`);
// "lessPrecision - 1.23"

const bothMore = new Intl.NumberFormat("en", {
  roundingPriority: "morePrecision",
  maximumSignificantDigits: 3,
  maximumFractionDigits: 3,
});
console.log(`morePrecision - ${bothMore.format(1.23456)}`);
// "morePrecision - 1.235"
```

Beachten Sie, dass der Algorithmus auf eine unlogische Weise verhalten kann, wenn ein Minimalwert angegeben ist, ohne einen Maximalwert.
Das folgende Beispiel formatiert den Wert `1`, indem `minimumFractionDigits: 2` (zu `1.00` formatieren) und `minimumSignificantDigits: 2` (zu `1.0` formatieren) angegeben werden.
Da `1.00` mehr Ziffern als `1.0` hat, sollte dies das Ergebnis bei der Priorisierung von `morePrecision` sein, aber tatsächlich ist das Gegenteil der Fall:

```js
const bothLess = new Intl.NumberFormat("en", {
  roundingPriority: "lessPrecision",
  minimumFractionDigits: 2,
  minimumSignificantDigits: 2,
});
console.log(`lessPrecision - ${bothLess.format(1)}`);
// "lessPrecision - 1.00"

const bothMore = new Intl.NumberFormat("en", {
  roundingPriority: "morePrecision",
  minimumFractionDigits: 2,
  minimumSignificantDigits: 2,
});
console.log(`morePrecision - ${bothMore.format(1)}`);
// "morePrecision - 1.0"
```

Der Grund dafür ist, dass nur die "maximalen Präzisions"-Werte für die Berechnung verwendet werden, und der Standardwert von `maximumSignificantDigits` ist viel höher als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis der Verwendung der angegebenen Fraktions- und signifikanten Ziffern unabhängig bewerten sollte (unter Berücksichtigung sowohl der minimalen als auch der maximalen Werte).
> Anschließend wird die Option ausgewählt, die mehr Nachkommastellen anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist.
> Dies führt zu einem intuitiveren Verhalten für diesen Fall.

### Rundungsmodi

Wenn ein Wert mehr Nachkommastellen hat, als durch die Konstruktoroptionen erlaubt sind, wird der formatierte Wert auf die angegebene Anzahl von Nachkommastellen _gerundet_.
Die _Art_, wie der Wert gerundet wird, hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab.

Zahlenformatter verwenden standardmäßig `halfExpand`-Rundung, die Werte "von null weg" am Halbincrement rundet (mit anderen Worten, die _Größe_ des Wertes wird aufgerundet).

Für eine positive Zahl, wenn die zu entfernenden Nachkommastellen näher am nächsten Inkrement (oder am Halbpunk) sind, werden die verbleibenden Nachkommastellen aufgerundet, ansonsten werden sie abgerundet.
Dies ist unten dargestellt: 2,23 gerundet auf zwei signifikante Ziffern wird auf 2,2 gekürzt, da 2,23 weniger als das Halbincrement 2,25 ist, während Werte von 2,25 und größer auf 2,3 gerundet werden:

```js
// Value below half-increment: round down.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.23),
);
// "2.2"

// Value on or above half-increment: round up.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.25),
);
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.28),
);
// "2.3"
// "2.3"
```

Eine negative Zahl auf oder unter dem Halbincrement wird ebenfalls von null weg gerundet (wird negativer):

```js
// Value below half-increment: round down.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.23),
);
// "-2.2"

// Value on or above half-increment: round up.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.25),
);
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.28),
);
// "-2.3"
// "-2.3"
```

Die folgende Tabelle zeigt die Auswirkungen verschiedener Rundungsmodi für positive und negative Werte, die am und um das Halbincrement liegen.

| Rundungsmodus | 2,23 | 2,25 | 2,28 | -2,23 | -2,25 | -2,28 |
| ------------- | ---- | ---- | ---- | ----- | ----- | ----- |
| `ceil`        | 2,3  | 2,3  | 2,3  | -2,2  | -2,2  | -2,2  |
| `floor`       | 2,2  | 2,2  | 2,2  | -2,3  | -2,3  | -2,3  |
| `expand`      | 2,3  | 2,3  | 2,3  | -2,3  | -2,3  | -2,3  |
| `trunc`       | 2,2  | 2,2  | 2,2  | -2,2  | -2,2  | -2,2  |
| `halfCeil`    | 2,2  | 2,3  | 2,3  | -2,2  | -2,2  | -2,3  |
| `halfFloor`   | 2,2  | 2,2  | 2,3  | -2,2  | -2,3  | -2,3  |
| `halfExpand`  | 2,2  | 2,3  | 2,3  | -2,2  | -2,3  | -2,3  |
| `halfTrunc`   | 2,2  | 2,2  | 2,3  | -2,2  | -2,2  | -2,3  |
| `halfEven`    | 2,2  | 2,2  | 2,3  | -2,2  | -2,2  | -2,3  |

Bei Verwendung von `halfEven` hängt sein Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der obigen Tabelle dasselbe wie `halfTrunc`, da die Größen aller Zahlen zwischen einer kleineren "geraden" Zahl (2,2) und einer größeren "ungeraden" Zahl (2,3) liegen. Wenn die Zahlen zwischen ±2,3 und ±2,4 liegen, wird `halfEven` stattdessen wie `halfExpand` funktionieren. Dieses Verhalten vermeidet eine konsistente Unter- oder Überschätzung von Halbincrementen in einer großen Datenstichprobe.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Nachkommastellen auf ein anderes Inkrement als die nächste ganze Zahl runden.
Zum Beispiel, Währungen, für die die kleinste Münze 5 Cent ist, möchten den Betrag auf Inkremente von 5 runden, um Beträge widerzuspiegeln, die tatsächlich bar bezahlt werden können.

Diese Art des Rundens kann mit der [`roundingIncrement`](#roundingincrement) Eigenschaft erreicht werden.

Zum Beispiel, wenn `maximumFractionDigits` 2 ist und `roundingIncrement` 5 ist, dann wird die Zahl auf das nächste 0,05 gerundet:

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
});

console.log(nf.format(11.29)); // "$11.30"
console.log(nf.format(11.25)); // "$11.25"
console.log(nf.format(11.22)); // "$11.20"
```

Dieses spezielle Muster wird als "Nickelrundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine USA 5-Cent-Münze ist.
Um auf die nächsten 10 Cent ("Dime-Rundung") zu runden, könnten Sie `roundingIncrement` auf `10` ändern.

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 10,
});

console.log(nf.format(11.29)); // "$11.30"
console.log(nf.format(11.25)); // "$11.30"
console.log(nf.format(11.22)); // "$11.20"
```

Sie können auch [`roundingMode`](#roundingmode) verwenden, um den Rundungsalgorithmus zu ändern.
Das nachstehende Beispiel zeigt, wie `halfCeil` Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des Halbincrements und "mehr positiv" oberhalb oder auf dem Halbincrement zu runden.
Die inkrementierte Ziffer ist "0,05", sodass das Halbincrement bei 11,225 liegt (unten ist dies bei 11,225 angezeigt).

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
  roundingMode: "halfCeil",
});

console.log(nf.format(11.21)); // "$11.20"
console.log(nf.format(11.22)); // "$11.20"
console.log(nf.format(11.224)); // "$11.20"
console.log(nf.format(11.225)); // "$11.25"
console.log(nf.format(11.23)); // "$11.25"
```

Wenn Sie die Anzahl der Ziffern ändern müssen, denken Sie daran, dass `minimumFractionDigits` und `maximumFractionDigits` beide auf denselben Wert eingestellt sein müssen, oder ein `RangeError` wird ausgelöst.

`roundingIncrement` kann nicht mit signifikanten Ziffern-Rundung oder einer anderen Einstellung als `auto` der `roundingPriority` gemischt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
