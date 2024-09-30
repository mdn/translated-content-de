---
title: Intl.NumberFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 643fa96e963ecaf2959cca5ddb573751a3efafac
---

{{JSRef}}

Der **`Intl.NumberFormat()`** Konstruktor erzeugt {{jsxref("Intl.NumberFormat")}} Objekte.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html", "taller")}}

## Syntax

```js-nolint
new Intl.NumberFormat()
new Intl.NumberFormat(locales)
new Intl.NumberFormat(locales, options)

Intl.NumberFormat()
Intl.NumberFormat(locales)
Intl.NumberFormat(locales, options)
```

> **Note:** `Intl.NumberFormat()` kann sowohl mit als auch ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. In beiden Fällen wird eine neue Instanz von `Intl.NumberFormat` erstellt. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der `this` Wert eine andere `Intl.NumberFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprache-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist zulässig:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` gesetzt werden (wie unten aufgeführt). Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Um die Lesbarkeit zu erleichtern, ist die Eigenschaftenliste in Abschnitte unterteilt, die auf ihren Zwecken basieren, einschließlich [locale options](#locale_optionen), [style options](#stiloptionen), [digit options](#zifferoptionen) und [other options](#andere_optionen).

#### Locale Optionen

- `localeMatcher`
  - : Der Locale-Abgleichsalgorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`.
    Für Informationen zu dieser Option siehe [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das Nummerierungssystem, das für die Zahlenformatierung verwendet werden soll, wie z. B. `"arab"`, `"hans"`, `"mathsans"`, und so weiter. Für eine Liste der unterstützten Typen von Nummerierungssystemen siehe [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide zur Verfügung stehen, hat diese `options` Eigenschaft Vorrang.

#### Stiloptionen

Je nach verwendetem `style` können einige von ihnen ignoriert oder andere erforderlich sein:

- `style`
  - : Der Formatierungsstil, der verwendet werden soll.
    - `"decimal"` (Standard)
      - : Für die einfache Zahlenformatierung.
    - `"currency"`
      - : Für die Währungsformatierung.
    - `"percent"`
      - : Für die Prozentformatierung.
    - `"unit"`
      - : Für die Einheitenformatierung.
- `currency`
  - : Die Währung, die bei der Währungsformatierung verwendet werden soll. Mögliche Werte sind die ISO 4217 Währungscodes, wie z.B. `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB — siehe die [Liste der aktuellen Währungs- und Fondscodes](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency` Eigenschaft angegeben werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung bei der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokalisiertes Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" anstelle von "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Lokalen bedeutet das Rechnungsformat, dass die Zahl mit Klammern umschlossen wird, anstatt ein Minuszeichen hinzuzufügen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die Einheit, die in der `unit` Formatierung verwendet werden soll. Mögliche Werte sind Kernidentifikatoren von Einheiten, die in [UTS #35, Teil 2, Abschnitt 6](https://unicode.org/reports/tr35/tr35-general.html#Unit_Elements) definiert sind. Ein [Subset](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers) von Einheiten aus der [vollständigen Liste](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml) wurde speziell für den Gebrauch in ECMAScript ausgewählt. Paare einfacher Einheiten können mit "-per-" verkettet werden, um eine zusammengesetzte Einheit zu bilden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit` Eigenschaft bereitgestellt werden.
- `unitDisplay`
  - : Der Einheitformatierungsstil, der in der `unit` Formatierung verwendet werden soll. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B. `16 l`.
    - `"narrow"`
      - : Z.B. `16l`.
    - `"long"`
      - : Z.B. `16 litres`.

#### Zifferoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die Mindestanzahl von Ganzzahlziffern, die verwendet werden sollen. Ein Wert mit einer kleineren Anzahl von Ganzzahlziffern als diese Zahl wird mit Nullen (bis zur angegebenen Länge) links aufgefüllt, wenn er formatiert ist. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die Mindestanzahl von Nachkommastellen, die verwendet werden sollen. Mögliche Werte liegen zwischen `0` und `100`; der Standardwert für normale Zahlen und Prozentformatierung ist `0`; der Standardwert für Währungsformatierung ist die Anzahl der von der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) (2, wenn die Liste diese Information nicht bereitstellt) bereitgestellten kleineren Einheitstellen.
- `maximumFractionDigits`
  - : Die Höchstanzahl von Nachkommastellen, die verwendet werden sollen. Mögliche Werte liegen zwischen `0` und `100`; der Standardwert für normale Zahlenformatierung ist die größere Anzahl von `minimumFractionDigits` und `3`; der Standardwert für Währungsformatierung ist die größere Anzahl von `minimumFractionDigits` und der Anzahl von kleineren Einheitstellen, die von der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt werden (2, wenn die Liste diese Information nicht bereitstellt); der Standard für Prozentformatierung ist die größere Anzahl von `minimumFractionDigits` und 0.
- `minimumSignificantDigits`
  - : Die Mindestanzahl von signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`.
- `maximumSignificantDigits`
  - : Die Höchstanzahl von signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `21`.

Für die obigen vier Optionen (die `FractionDigits` und `SignificantDigits` Optionen) erwähnten wir ihre Standardwerte; jedoch werden diese Standardwerte _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet werden soll, was von den Einstellungen des [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Genauer gesagt:

- Wenn `roundingPriority` nicht `"auto"` ist, dann gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits` Option gesetzt ist, dann gelten die `SignificantDigits` Optionen und die `FractionDigits` Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist und entweder mindestens eine `FractionDigits` Option gesetzt ist oder `notation` nicht `"compact"` ist, dann gelten die `FractionDigits` Optionen und die `SignificantDigits` Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist und keine der vier Optionen gesetzt ist, dann werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben genannten Standardwerten, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

- `roundingPriority`

  - : Gibt an, wie Rundungskonflikte gelöst werden sollen, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis aus der Eigenschaft der signifikanten Ziffern wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis aus der Eigenschaft, die mehr Präzision ergibt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis aus der Eigenschaft, die weniger Präzision ergibt, wird verwendet.

    Der Wert `"auto"` wird normalisiert zu `"morePrecision"`, wenn `notation` `"compact"` ist und keine der vier "FractionDigits"/"SignificantDigits" Optionen gesetzt sind.

    Beachten Sie, dass für Werte außer `auto` das Ergebnis mit mehr Präzision aus den Einstellungen [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (die minimalen Einstellwerte für Bruch- und signifikante Ziffern werden ignoriert).

- `roundingIncrement`

  - : Gibt das Inkrement an, bei dem die Rundung relativ zur berechneten Rundungsmagnitud stattfinden soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, und `5000`; der Standardwert ist `1`. Es kann nicht mit der Rundung von signifikanten Ziffern oder irgendeiner Einstellung von `roundingPriority` außer `auto` kombiniert werden.

- `roundingMode`

  - : Wie Dezimalzahlen gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Rundet gegen +∞. Positive Werte werden aufgerundet. Negative Werte werden "positiver" gerundet.
    - `"floor"`
      - : Rundet gegen -∞. Positive Werte werden abgerundet. Negative Werte werden "negativer" gerundet.
    - `"expand"`
      - : Rundet weg von 0. Die _Größe_ des Wertes wird durch die Rundung immer vergrößert. Positive Werte werden aufgerundet. Negative Werte werden "negativer" gerundet.
    - `"trunc"`
      - : Rundet auf 0 zu. Dies _Größe_ des Wertes wird durch die Rundung immer verkleinert. Positive Werte werden abgerundet. Negative Werte werden "weniger negativ" gerundet.
    - `"halfCeil"`
      - : Bindungen gegen +∞. Werte oberhalb des halben Inkrements werden wie `"ceil"` (gegen +∞) gerundet, und darunter wie `"floor"` (gegen -∞). Auf dem halben Inkrement werden Werte wie `"ceil"` gerundet.
    - `"halfFloor"`
      - : Bindungen gegen -∞. Werte oberhalb des halben Inkrements werden wie `"ceil"` (gegen +∞) gerundet, und darunter wie `"floor"` (gegen -∞). Auf dem halben Inkrement werden Werte wie `"floor"` gerundet.
    - `"halfExpand"` (Standard)
      - : Bindungen weg von 0. Werte oberhalb des halben Inkrements werden wie `"expand"` (weg von null) gerundet, und darunter wie `"trunc"` (zu 0). Auf dem halben Inkrement werden Werte wie `"expand"` gerundet.
    - `"halfTrunc"`
      - : Bindungen zu 0. Werte oberhalb des halben Inkrements werden wie `"expand"` (weg von null) gerundet, und darunter wie `"trunc"` (zu 0). Auf dem halben Inkrement werden Werte wie `"trunc"` gerundet.
    - `"halfEven"`
      - : Bindungen zur nächsten geraden ganzen Zahl. Werte oberhalb des halben Inkrements werden wie `"expand"` (weg von null) gerundet, und darunter wie `"trunc"` (zu 0). Auf dem halben Inkrement Werte runden auf die nächste gerade Ziffer.

    Diese Optionen spiegeln den [ICU Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, wo "expand" und "trunc" zu ICU "UP" und "DOWN" abgebildet werden.
    Das [Rundungsmodi](#rundungsmodi) Beispiel unten zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige von nachlaufenden Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie nachlaufende Nullen entsprechend `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Nachkommaziffern, _wenn_ diese alle null sind. Dies ist dasselbe wie `"auto"`, wenn eine der Nachkommaziffern ungleich null ist.

#### Andere Optionen

- `notation`
  - : Die Formatierung, die für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Normale Zahlenformatierung.
    - `"scientific"`
      - : Gibt die Größenordnung der formatierten Zahl zurück.
    - `"engineering"`
      - : Gibt den Exponenten von zehn zurück, wenn er durch drei teilbar ist.
    - `"compact"`
      - : String, der den Exponenten darstellt; Standard ist die "kurze" Form.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standard ist `"short"`.
- `useGrouping`

  - : Ob Gruppierungstrennzeichen wie Tausendertrennzeichen oder Tausender/Lakh/Crore-Trennzeichen verwendet werden sollen.

    - `"always"`
      - : Gruppierungstrennzeichen anzeigen, auch wenn die Locale dies anders bevorzugt.
    - `"auto"`
      - : Gruppierungstrennzeichen basierend auf der Locale-Präferenz anzeigen, die auch von der Währung abhängen kann.
    - `"min2"`
      - : Gruppierungstrennzeichen anzeigen, wenn es mindestens 2 Ziffern in einer Gruppe gibt.
    - `true`
      - : Dasselbe wie `"always"`.
    - `false`
      - : Keine Gruppierungstrennzeichen anzeigen.

    Der Standardwert ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` sonst. Die String-Werte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Zeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Signanzeige nur für negative Zahlen, einschließlich negativem Null.
    - `"always"`
      - : Immer das Zeichen anzeigen.
    - `"exceptZero"`
      - : Signanzeige für positive und negative Zahlen, aber nicht null.
    - `"negative"`
      - : Signanzeige nur für negative Zahlen, aber nicht für negatives Null.
    - `"never"`
      - : Niemals das Zeichen anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat` Objekt.

> [!NOTE]
> Der folgende Text beschreibt Verhalten, das von der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat` Instanz zurückgegeben. Ist jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde; nur dass es `Intl.NumberFormat.prototype` in seiner Prototypen-Kette hat), dann wird stattdessen der Wert von `this` zurückgegeben, mit dem neu erstellten `Intl.NumberFormat` Objekt, das in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft versteckt ist (ein einzigartiges Symbol, das zwischen den Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.NumberFormat` Instanz gibt: die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckte. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen verwenden, während das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) mit "TypeError: formatRange method called on incompatible Object" fehlschlagen würde, da diese Methoden nicht die Optionen der versteckten Instanz berücksichtigen.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new`, aber mit `this` aufgerufen wird, das auf etwas anderes als `instanceof Intl.NumberFormat` gesetzt ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die aufgezählte Werte annimmt (wie `style`, `units`, `currency` usw.), wird auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt und sie sind auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass diese Eigenschaften je nach verschiedenen Formatierungsoptionen Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu erhalten, auch wenn Sie nur eine der Eigenschaften gesetzt haben.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `options.style` Eigenschaft auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` gesetzt wurde.

## Beispiele

### Grundlegende Nutzung

Bei der grundlegenden Verwendung ohne Angabe einer Locale wird ein formatierter String in der Standard-Locale und mit Standardoptionen zurückgegeben.

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

Wenn der `style` `'unit'` ist, muss eine `unit` Eigenschaft bereitgestellt werden.
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
bereitgestellt werden. Optional steuern `currencyDisplay` und
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

### Wissenschaftliche, technische oder kompakte Notationen

Wissenschaftliche und kompakte Notationen werden durch die `notation` Option dargestellt und können so formatiert werden:

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

### Zeichen anzeigen

Zeigen Sie ein Zeichen für positive und negative Zahlen, aber nicht null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass, wenn das Währungszeichen "accounting" ist, Klammern anstelle eines Minuszeichens verwendet werden können:

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

Sie können die minimale oder maximale Anzahl von Bruch-, Ganzzahl- oder signifikanten Ziffern angeben, die beim Formatieren einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl signifikante als auch Bruchzifferngrenzen angegeben sind, hängt die tatsächliche Formatierung von den Einstellungen des [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganz- und Bruchzifferneigenschaften geben die Anzahl der Ziffern an, die vor und nach dem Dezimalpunkt angezeigt werden sollen.
Wenn der anzuzeigende Wert weniger Ganzziffern hat als angegeben, wird er mit Nullen zur erwarteten Anzahl links aufgefüllt.
Wenn er weniger Bruchziffern hat, wird er rechts mit Nullen aufgefüllt.
Beide Fälle sind unten gezeigt:

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

Wenn ein Wert mehr Bruchziffern hat als die angegebene Maximalzahl, wird er gerundet.
Die _Art_, wie er gerundet wird, hängt von der Eigenschaft [`roundingMode`](#roundingmode) ab (mehr Details sind im Abschnitt zu [Rundungsmodi](#rundungsmodi) angegeben).
Unten wird der Wert von fünf Bruchziffern (`4.33145`) auf zwei (`4.33`) gerundet:

```js
// Display value shortened to maximum number of digits
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(4.33145),
);
// "4.33"
```

Die minimalen Bruchziffern haben keinen Einfluss, wenn der Wert bereits mehr als 2 Bruchziffern hat:

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
> Achten Sie auf Standardwerte, da sie das Format beeinflussen können, auch wenn sie nicht in Ihrem Code angegeben sind.
> Der Standardwert der maximalen Ziffern ist `3` für normale Werte, `2` für Währungswerte und kann unterschiedliche Werte für andere vordefinierte Typen haben.

Der oben formatierte Wert wird auf 3 Ziffern gerundet, obwohl wir die maximale Ziffernzahl nicht angegeben haben!
Dies liegt daran, dass ein Standardwert von `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` und `0`, respektive.

Sie können [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) verwenden, um den Formatter zu untersuchen.

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

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtzahl der Ziffern einschließlich der Ganz- und Bruchteile.
Die `maximumSignificantDigits` wird verwendet, um die Gesamtzahl der Ziffern aus dem ursprünglichen Wert anzugeben, die angezeigt werden sollen.

Die Beispiele unten zeigen, wie dies funktioniert.
Beachten Sie insbesondere den letzten Fall: nur die erste Ziffer wird beibehalten, die anderen werden verworfen/auf null gesetzt.

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

Die `minimumSignificantDigits` sorgt dafür, dass mindestens die angegebene Anzahl an Ziffern angezeigt wird, indem bei Bedarf Nullen zum Ende des Wertes hinzugefügt werden.

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
> Achten Sie auf Standardwerte, da sie das Format beeinflussen können.
> Wenn nur eine `SignificantDigits` Eigenschaft verwendet wird, wird automatisch der Gegenwert mit dem Standardwert angewendet.
> Die maximalen und minimalen Standardwerte für signifikante Ziffern sind 20 und 1, respektive.

#### Gleichzeitige Angabe von signifikanten und Bruchziffern

Die Bruchziffern ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beides Methoden zur Steuerung der Anzahl der zu formatierenden Bruch- und Führungsziffern.
Wenn beide gleichzeitig verwendet werden, ist es möglich, dass sie in Konflikt geraten.

Diese Konflikte werden mithilfe der [`roundingPriority`](#roundingpriority) Eigenschaft gelöst.
Standardmäßig hat sie einen Wert von `"auto"`, was bedeutet, dass, wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#minimumsignificantdigits) festgelegt sind, die Ganz- und Bruchziffereigenschaften ignoriert werden.

Im Beispiel unten wird der Wert von `4.33145` mit `maximumFractionDigits: 3` und dann `maximumSignificantDigits: 2` formatiert und dann beide.
Der Wert mit beiden ist der, der mit `maximumSignificantDigits` gesetzt ist.

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

Mit [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions), um den Formatter zu inspizieren, können wir sehen, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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

Zusätzlich zu `"auto"` können Sie Konflikte lösen, indem Sie [`roundingPriority`](#roundingpriority) als `"morePrecision"` oder `"lessPrecision"` angeben.
Der Formatter berechnet die Präzision mit den Werten von `maximumSignificantDigits` und `maximumFractionDigits`.

Der untenstehende Code zeigt das Format, das für die drei verschiedenen Rundungsprioritäten ausgewählt wird:

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

Beachten Sie, dass der Algorithmus auf eine nicht intuitive Weise verhalten kann, wenn ein Minimalwert ohne Maximalwert angegeben wird.
Das Beispiel unten formatiert den Wert `1` mit `minimumFractionDigits: 2` (formatieren zu `1.00`) und `minimumSignificantDigits: 2` (formatieren zu `1.0`).
Da `1.00` mehr Ziffern als `1.0` hat, sollte dies das Ergebnis sein, wenn `morePrecision` Priorität hat, aber tatsächlich ist das Gegenteil der Fall:

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

Der Grund dafür ist, dass nur die "maximalen Präzision"-Werte für die Berechnung verwendet werden, und der Standardwert von `maximumSignificantDigits` ist viel höher als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Modifikation des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis der unabhängigen Verwendung der angegebenen Bruch- und signifikanten Ziffern bewerten sollte (unter Berücksichtigung von sowohl minimalen als auch maximalen Werten).
> Es wird dann die Option ausgewählt, die mehr Bruchziffern anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist.
> Dies wird zu einem intuitiveren Verhalten für diesen Fall führen.

### Rundungsmodi

Wenn ein Wert mehr Nachkommastellen hat, als die Konstruktoroptionen zulassen, wird der formatierte Wert auf die angegebene Zahl von Nachkommastellen _gerundet_.
Die _Art_, wie der Wert gerundet wird, hängt von der Eigenschaft [`roundingMode`](#roundingmode) ab.

Zahlenformatierer verwenden standardmäßig die `halfExpand` Rundung, die Werte "weg von null" am halben Inkrement rundet (mit anderen Worten, die _Größe_ des Wertes wird aufgerundet).

Für eine positive Zahl, wenn die zu entfernenden Nachkommastellen näher an der nächsten Erhöhung sind (oder auf dem halben Wegpunkt) werden die verbleibenden Nachkommastellen aufgerundet, andernfalls werden sie abgerundet.
Dies zeigt sich unten: 2.23 gerundet auf zwei signifikante Ziffern wird auf 2.2 gekürzt, weil 2.23 weniger als das halbe Inkrement 2.25 ist, während Werte von 2.25 und höher auf 2.3 aufgerundet werden:

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

Eine negative Zahl auf oder unterhalb des halben Inkrementpunkts wird ebenfalls weg von null (wird negativer):

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

Die Tabelle unten zeigt die Wirkung der verschiedenen Rundungsmodi für positive und negative Werte, die sich auf und um das halbe Inkrement befinden.

| Rundungsmodus | 2.23 | 2.25 | 2.28 | -2.23 | -2.25 | -2.28 |
| ------------- | ---- | ---- | ---- | ----- | ----- | ----- |
| `ceil`        | 2.3  | 2.3  | 2.3  | -2.2  | -2.2  | -2.2  |
| `floor`       | 2.2  | 2.2  | 2.2  | -2.3  | -2.3  | -2.3  |
| `expand`      | 2.3  | 2.3  | 2.3  | -2.3  | -2.3  | -2.3  |
| `trunc`       | 2.2  | 2.2  | 2.2  | -2.2  | -2.2  | -2.2  |
| `halfCeil`    | 2.2  | 2.3  | 2.3  | -2.2  | -2.2  | -2.3  |
| `halfFloor`   | 2.2  | 2.2  | 2.3  | -2.2  | -2.3  | -2.3  |
| `halfExpand`  | 2.2  | 2.3  | 2.3  | -2.2  | -2.3  | -2.3  |
| `halfTrunc`   | 2.2  | 2.2  | 2.3  | -2.2  | -2.2  | -2.3  |
| `halfEven`    | 2.2  | 2.2  | 2.3  | -2.2  | -2.2  | -2.3  |

Wenn `halfEven` verwendet wird, hängt das Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der obigen Tabelle das gleiche wie `halfTrunc`, weil die Größen aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, verhält sich `halfEven` stattdessen wie `halfExpand`. Dieses Verhalten vermeidet eine konstante Unter- oder Überschätzung der Halb-Inkremente in einer großen Datenprobe.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Nachkommastellen auf eines anderes Inkrement als das nächste ganzzahlige runden.
Beispielsweise können Währungen, für die die kleinste Münze 5 Cent ist, den Wert zu Inkrementen von 5 runden, was Beträgen entspricht, die tatsächlich in bar bezahlt werden können.

Diese Art der Rundung kann mit der [`roundingIncrement`](#roundingincrement) Eigenschaft erreicht werden.

Wenn z.B. `maximumFractionDigits` auf 2 und `roundingIncrement` auf 5 gesetzt ist, wird die Zahl auf das nächste 0.05 gerundet:

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

Dieses spezielle Muster wird als "Nickel-Rundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine USA 5-Cent-Münze ist.
Um auf die nächsten 10 Cent ("Dime-Rundung") zu runden, könnten Sie `roundingIncrement` auf `10` ändern.

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

Sie können auch [`roundingMode`](#roundingmode) verwenden, um den Rundungsalgorithmus zu ändern.
Das Beispiel unten zeigt, wie `halfCeil` Rundung verwendet werden kann, um den Wert "weniger positiv" unter dem halben Rundungsinkrement und "mehr positiv" darüber oder auf dem halben Inkrement zu runden.
Die inkrementierte Ziffer ist "0.05", sodass das halbe Inkrement bei .025 liegt (unten bei 11.225 angezeigt).

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

Wenn Sie die Anzahl der Ziffern ändern müssen, denken Sie daran, dass `minimumFractionDigits` und `maximumFractionDigits` beide auf denselben Wert gesetzt werden müssen, sonst wird ein `RangeError` ausgelöst.

`roundingIncrement` kann nicht mit der Rundung von signifikanten Ziffern oder irgendeiner Einstellung von `roundingPriority` außer `auto` kombiniert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
