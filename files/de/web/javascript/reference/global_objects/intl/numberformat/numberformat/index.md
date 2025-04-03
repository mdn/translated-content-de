---
title: Intl.NumberFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
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

> **Note:** `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erzeugen eine neue `Intl.NumberFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und mit dem `this` Wert einer anderen `Intl.NumberFormat` Instanz aufgerufen wird; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprachcode oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Sprachkennungen. Die Standardsprache der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Sprachkennungen unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist zulässig:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgelistet) festgelegt werden. Wenn beide gesetzt sind, hat die Eigenschaft `options` Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit ist die Eigenschaftsliste in Abschnitte basierend auf ihrem Zweck unterteilt, einschließlich [Lokaloptionen](#lokaloptionen), [Stiloptionen](#stiloptionen), [Stellenoptionen](#stellenoptionen) und [andere Optionen](#andere_optionen).

#### Lokaloptionen

- `localeMatcher`
  - : Der zu verwendende Algorithmus zum Abgleichen der Sprache. Mögliche Werte sind `"lookup"` und `"best fit"`; die Standardeinstellung ist `"best fit"`.
    Für Informationen zu dieser Option siehe [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem für Zahlenformatierung, wie zum Beispiel `"arab"`, `"hans"`, `"mathsans"`, und so weiter. Für eine Liste unterstützter Nummerierungssystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.

#### Stiloptionen

Abhängig vom verwendeten `style` können einige ignoriert und andere erforderlich sein:

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
  - : Die zu verwendende Währung in der Währungsformatierung. Mögliche Werte sind die ISO 4217 Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency` Eigenschaft bereitgestellt werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung in der Währungsformatierung angezeigt wird.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokalisiertes Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" statt "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Lokalen bedeutet das Buchhaltungsformat, dass die Zahl in Klammern gesetzt wird, anstatt ein Minuszeichen anzuhängen. Mögliche Werte sind `"standard"` und `"accounting"`; die Standardeinstellung ist `"standard"`.
- `unit`
  - : Die Einheit, die in der `unit`-Formatierung verwendet werden soll. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgelistet. Paare einfacher Einheiten können mit "-per-" verbunden werden, um eine zusammengesetzte Einheit zu bilden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit` Eigenschaft bereitgestellt werden.
- `unitDisplay`
  - : Der zu verwendende Einheitenformatierungsstil in der `unit`-Formatierung. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z. B. `16 l`.
    - `"narrow"`
      - : Z. B. `16l`.
    - `"long"`
      - : Z. B. `16 litres`.

#### Stellenoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die minimale Anzahl von ganzen Stellen, die verwendet werden sollen. Ein Wert mit einer kleineren Anzahl von ganzen Stellen als diese Zahl wird vor dem Formatieren mit Nullen (bis zur angegebenen Länge) aufgefüllt. Mögliche Werte sind von `1` bis `21`; der Standard ist `1`.
- `minimumFractionDigits`
  - : Die minimale Anzahl von Nachkommastellen, die verwendet werden soll. Mögliche Werte sind von `0` bis `100`; der Standard für einfache Zahlen- und Prozentformatierung ist `0`; der Standard für die Währungsformatierung ist die Anzahl der kleinen Einheitstellen, die von der [ISO 4217 Währungscode Liste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt wird (2, wenn die Liste diese Information nicht bietet). Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values) für die Anwendung dieses Standards.
- `maximumFractionDigits`
  - : Die maximale Anzahl von Nachkommastellen, die verwendet werden soll. Mögliche Werte sind von `0` bis `100`; der Standard für einfache Zahlenformatierung ist die größere von `minimumFractionDigits` und `3`; der Standard für die Währungsformatierung ist die größere von `minimumFractionDigits` und die Anzahl der kleinen Einheitstellen, die von der [ISO 4217 Währungscode Liste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt wird (2, wenn die Liste diese Information nicht bietet); der Standard für die Prozentformatierung ist die größere von `minimumFractionDigits` und 0. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values) für die Anwendung dieses Standards.
- `minimumSignificantDigits`
  - : Die Mindestanzahl von signifikanten Stellen, die verwendet werden soll. Mögliche Werte sind von `1` bis `21`; der Standard ist `1`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values) für die Anwendung dieses Standards.
- `maximumSignificantDigits`
  - : Die maximale Anzahl von signifikanten Stellen, die verwendet werden soll. Mögliche Werte sind von `1` bis `21`; der Standard ist `21`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values) für die Anwendung dieses Standards.
- `roundingPriority`

  - : Geben Sie an, wie Rundungskonflikte gelöst werden sollen, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis der signifikanten Stellen Eigenschaft wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis der Eigenschaft, die zu mehr Präzision führt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis der Eigenschaft, die zu weniger Präzision führt, wird verwendet.

    Der Wert `"auto"` wird zu `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keine der vier "FractionDigits"/"SignificantDigits" Optionen gesetzt sind.

    Beachten Sie, dass bei Werten, die nicht `auto` sind, das Ergebnis mit mehr Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (minimale Fraktional- und signifikante Stelleinstellungen werden ignoriert).

- `roundingIncrement`

  - : Gibt das Inkrement an, bei dem die Rundung relativ zur berechneten Rundungsgröße erfolgen soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, und `5000`; das Standard ist `1`. Es kann nicht mit der Rundung nach signifikanten Stellen oder einer anderen Einstellung von `roundingPriority` als `auto` gemischt werden.

- `roundingMode`

  - : Wie Dezimalstellen gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Rundung in Richtung +∞. Positive Werte werden aufgerundet. Negative Werte werden "positiver" gerundet.
    - `"floor"`
      - : Rundung in Richtung -∞. Positive Werte werden abgerundet. Negative Werte werden "negativer" gerundet.
    - `"expand"`
      - : Rundung weg von 0. Der _Betrag_ des Wertes wird durch das Runden immer erhöht. Positive Werte werden aufgerundet. Negative Werte werden "negativer" gerundet.
    - `"trunc"`
      - : Rundung in Richtung 0. Dieser _Betrag_ des Wertes wird durch Runden immer reduziert. Positive Werte werden abgerundet. Negative Werte werden "weniger negativ" gerundet.
    - `"halfCeil"`
      - : Bindungen in Richtung +∞. Werte oberhalb der Halbincrement-Rundung wie `"ceil"` (in Richtung +∞), und unterhalb wie `"floor"` (in Richtung -∞). Auf dem Halbincrement werden Werte wie `"ceil"` gerundet.
    - `"halfFloor"`
      - : Bindungen in Richtung -∞. Werte oberhalb der Halbincrement-Rundung wie `"ceil"` (in Richtung +∞), und unterhalb wie `"floor"` (in Richtung -∞). Auf dem Halbincrement werden Werte wie `"floor"` gerundet.
    - `"halfExpand"` (Standard)
      - : Bindungen weg von 0. Werte oberhalb der Halbincrement-Rundung wie `"expand"` (weg von Null), und unterhalb wie `"trunc"` (in Richtung 0). Auf dem Halbincrement werden Werte wie `"expand"` gerundet.
    - `"halfTrunc"`
      - : Bindungen in Richtung 0. Werte oberhalb der Halbincrement-Rundung wie `"expand"` (weg von Null), und unterhalb wie `"trunc"` (in Richtung 0). Auf dem Halbincrement werden Werte wie `"trunc"` gerundet.
    - `"halfEven"`
      - : Bindungen in Richtung der nächsten geraden Ganzzahl. Werte oberhalb der Halbincrement-Rundung wie `"expand"` (weg von Null), und unterhalb wie `"trunc"` (in Richtung 0). Auf dem Halbincrement werden Werte zur nächsten geraden Ziffer gerundet.

    Diese Optionen spiegeln den [ICU Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, wobei "expand" und "trunc" zu ICU "UP" und "DOWN" zugeordnet werden.
    Das [Rundungs-Modi](#rundungs-modi) Beispiel unten zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie für das Anzeigen von nachgestellten Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie nachfolgende Nullen entsprechend `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Nachkommastellen, _falls_ sie alle null sind. Dies ist dasselbe wie `"auto"`, wenn eine der Nachkommastellen ungleich null ist.

##### SignificantDigits/FractionDigits Standardwerte

Für die oben genannten vier Optionen (die `FractionDigits` und `SignificantDigits` Optionen) haben wir ihre Standards erwähnt; diese werden jedoch _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet wird, was von den Einstellungen [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Speziell:

- Wenn `roundingPriority` nicht `"auto"` ist, gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits` Option gesetzt ist, gelten die `SignificantDigits` Optionen und die `FractionDigits` Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, und entweder mindestens eine `FractionDigits` Option gesetzt ist oder `notation` nicht `"compact"` ist, gelten die `FractionDigits` Optionen und die `SignificantDigits` Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist, und keine der vier Optionen gesetzt ist, dann werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben erwähnten Standards, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Das Format, das für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfaches Zahlenformat.
    - `"scientific"`
      - : Gibt die Größenordnung für formatierte Zahl zurück.
    - `"engineering"`
      - : Gibt den Exponenten von zehn zurück, wenn er durch drei teilbar ist.
    - `"compact"`
      - : String, der Exponent darstellt; standardmäßig wird die "kurze" Form verwendet.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standard ist `"short"`.
- `useGrouping`

  - : Ob Trennzeichen zum Gruppieren verwendet werden sollen, wie Tausendertrennzeichen oder Tausend/Lakh/Krore Separators.

    - `"always"`
      - : Zeigen Sie immer Gruppierungszeichen an, auch wenn das Locale es möglicherweise anders präferiert.
    - `"auto"`
      - : Zeigen Sie Gruppierungszeichen basierend auf der Präferenz des Locales an, das möglicherweise auch von der Währung abhängt.
    - `"min2"`
      - : Zeigen Sie Gruppierungszeichen an, wenn mindestens 2 Ziffern in einer Gruppe vorhanden sind.
    - `true`
      - : Gleich wie `"always"`.
    - `false`
      - : Zeigen Sie keine Gruppierungszeichen an.

    Der Standard ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` sonst. Die Stringwerte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt wird. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Anzeige des Vorzeichens nur für negative Zahlen, einschließlich negativer Null.
    - `"always"`
      - : Vorzeichen immer anzeigen.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, aber nicht für Null.
    - `"negative"`
      - : Vorzeichenanzeige nur für negative Zahlen, ausgenommen negative Null.
    - `"never"`
      - : Vorzeichen niemals anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat` Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitäts-Tabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das ein [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde; nur dass es `Intl.NumberFormat.prototype` in seiner Prototypenkette hat), wird stattdessen der Wert von `this` zurückgegeben, wobei das neu erstellte `Intl.NumberFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird) verborgen ist.

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

Beachtext, dass es hier nur eine tatsächliche `Intl.NumberFormat` Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden. Das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde jedoch mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden die Optionen der verborgenen Instanz nicht konsultieren.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, aber mit `this` auf etwas anderes gesetzt wird, das kein `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die enumerierte Werte akzeptiert (wie `style`, `units`, `currency`, und so weiter), wird auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt und haben unterschiedliche Werte.
      Beachten Sie, dass je nach verschiedenen Formatierungsoptionen diese Eigenschaften Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu erhalten, auch wenn Sie nur eine der Eigenschaften festgelegt haben.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft `options.style` auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` gesetzt wurde.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe einer Sprache wird ein formatierter String in der Standardsprache und mit Standardoptionen zurückgegeben.

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

### Wissenschaftliche, ingenieurwissenschaftliche oder kompakte Notationen

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

### Anzeigen von Vorzeichen

Anzeigen eines Vorzeichens für positive und negative Zahlen, aber nicht für Null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass, wenn das Währungsvorzeichen "accounting" ist, Klammern anstelle eines Minuszeichens verwendet werden könnten:

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

Sie können die Mindest- oder Höchstanzahl an fraktionalen, ganzen oder signifikanten Stellen angeben, die bei der Formatierung einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl signifikante als auch fraktionale Stellenbegrenzungen angegeben sind, hängt das tatsächliche Format von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganz- und Nachkommastellen-Eigenschaften geben an, wie viele Stellen jeweils vor und nach dem Dezimalpunkt angezeigt werden sollen.
Hat der anzuzeigende Wert weniger ganze Stellen als angegeben, wird er zur erwarteten Zahl mit Nullen links aufgefüllt.
Hat er weniger Nachkommastellen, wird er mit Nullen rechts aufgefüllt.
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

Wenn ein Wert mehr Nachkommastellen hat als die angegebene Höchstzahl, wird er gerundet.
Wie er gerundet wird, hängt von der Eigenschaft [`roundingMode`](#roundingmode) ab (mehr Details werden im Abschnitt [Rundungs-Modi](#rundungs-modi) angegeben).
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

Die Mindestanzahl an Nachkommastellen hat keine Wirkung, wenn der Wert bereits mehr als 2 Nachkommastellen hat:

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
> Achten Sie auf Standardwerte, da sie die Formatierung auch beeinflussen können, wenn sie nicht in Ihrem Code angegeben sind.
> Der Standardwert für die maximale Stellenanzahl ist `3` für einfache Werte, `2` für Währungen und kann unterschiedliche Werte für andere vordefinierte Typen haben.

Der obige formatierte Wert wird auf 3 Stellen gerundet, obwohl wir die maximalen Stellen nicht angegeben haben!
Dies liegt daran, dass ein Standardwert von `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte für `maximumFractionDigits` und `minimumFractionDigits` sind `3` und `0`, jeweils.

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

Die Anzahl der _signifikanten Stellen_ ist die Gesamtzahl der Stellen, einschließlich sowohl der ganzen als auch der Nachkommastellen.
`maximumSignificantDigits` wird verwendet, um die Gesamtanzahl der Stellen vom Originalwert anzugeben, die angezeigt werden sollen.

Die Beispiele unten zeigen, wie das funktioniert.
Beachten Sie besonders den letzten Fall: nur die erste Stelle wird beibehalten und die anderen werden entfernt/auf Null gesetzt.

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

`minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl von Stellen angezeigt wird, wobei bei Bedarf Nullen am Ende des Wertes hinzugefügt werden.

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
> Die Standardwerte für die maximale und minimale signifikante Stellenanzahl sind 21 und 1, jeweils.

#### Gleichzeitige Angabe von signifikanten und fraktionalen Stellen

Die Nachkommastellen ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und die signifikanten Stellen ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten, um zu bestimmen, wie viele Nachkommastellen und führende Stellen formatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, können sie in Konflikt geraten.

Diese Konflikte werden mit der Eigenschaft [`roundingPriority`](#roundingpriority) gelöst.
Standardmäßig hat diese den Wert `"auto"`, was bedeutet, dass wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#minimumsignificantdigits) angegeben ist, die fraktionalen und ganzen Stellen-Eigenschaften ignoriert werden.

Das Beispiel unten formatieren den Wert `4.33145` mit `maximumFractionDigits: 3`, dann mit `maximumSignificantDigits: 2`, und dann mit beiden.
Der Wert mit beiden ist derjenige, der mit `maximumSignificantDigits` festgelegt wurde.

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

Mit [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) zur Untersuchung des Formatters sehen wir, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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

Zusätzlich zu `"auto"` können Sie Konflikte lösen, indem Sie [`roundingPriority`](#roundingpriority) als `"morePrecision"` oder `"lessPrecision"` festlegen.
Der Formatter berechnet die Präzision unter Verwendung der Werte von `maximumSignificantDigits` und `maximumFractionDigits`.

Der Code unten zeigt das ausgewählte Format für die drei verschiedenen Rundungsprioritäten:

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

Beachten Sie, dass der Algorithmus auf eine unvorhersehbare Weise verhalten kann, wenn ein Mindestwert ohne einen Höchstwert angegeben ist.
Das Beispiel unten formatiert den Wert `1` unter Angabe von `minimumFractionDigits: 2` (formatieren zu `1.00`) und `minimumSignificantDigits: 2` (formatieren zu `1.0`).
Da `1.00` mehr Stellen hat als `1.0`, sollte dies das Ergebnis sein, wenn `morePrecision` priorisiert wird, aber tatsächlich ist das Gegenteil der Fall:

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

Der Grund dafür ist, dass nur die "maximalen Präzisions" Werte für die Berechnung verwendet werden, und der Standardwert von `maximumSignificantDigits` viel höher ist als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis der Verwendung der angegebenen fraktionalen und signifikanten Stellen unabhängig bewerten sollte (unter Berücksichtigung sowohl der Mindest- als auch der Höchstwerte).
> Er wird dann die Option auswählen, die mehr Nachkommastellen anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist.
> Dies wird zu einem intuitiveren Verhalten für diesen Fall führen.

### Rundungs-Modi

Wenn ein Wert mehr Nachkommastellen hat, als durch die Konstruktoroptionen erlaubt, wird der formatierte Wert auf die angegebene Anzahl von Nachkommastellen _gerundet_.
Die _Weise_, in der der Wert gerundet wird, hängt von der Eigenschaft [`roundingMode`](#roundingmode) ab.

Zahlenformatter verwenden standardmäßig das Rundungsverfahren `halfExpand`, das Werte "weg von Null" auf das Halbinkrement rundet (das heißt, der _Betrag_ des Wertes wird aufgerundet).

Für eine positive Zahl, wenn die zu entfernenden Nachkommastellen näher am nächsten Inkrement (oder am halben Punkt) liegen, dann werden die verbleibenden Nachkommastellen aufgerundet, sonst werden sie abgerundet.
Dies wird unten gezeigt: 2.23, auf zwei signifikante Ziffern gerundet, wird auf 2.2 gekürzt, da 2.23 weniger als das Halbinkrement 2.25 ist, während Werte von 2.25 und höher auf 2.3 gerundet werden:

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

Eine negative Zahl, die unter oder auf dem Halbinkrement liegt, wird auch von Null weg gerundet (wird negativer):

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

Die Tabelle unten zeigt die Wirkung verschiedener Rundungsarten für positive und negative Werte, die auf und um das Halbinkrement liegen.

| Rundungsart  | 2.23 | 2.25 | 2.28 | -2.23 | -2.25 | -2.28 |
| ------------ | ---- | ---- | ---- | ----- | ----- | ----- |
| `ceil`       | 2.3  | 2.3  | 2.3  | -2.2  | -2.2  | -2.2  |
| `floor`      | 2.2  | 2.2  | 2.2  | -2.3  | -2.3  | -2.3  |
| `expand`     | 2.3  | 2.3  | 2.3  | -2.3  | -2.3  | -2.3  |
| `trunc`      | 2.2  | 2.2  | 2.2  | -2.2  | -2.2  | -2.2  |
| `halfCeil`   | 2.2  | 2.3  | 2.3  | -2.2  | -2.2  | -2.3  |
| `halfFloor`  | 2.2  | 2.2  | 2.3  | -2.2  | -2.3  | -2.3  |
| `halfExpand` | 2.2  | 2.3  | 2.3  | -2.2  | -2.3  | -2.3  |
| `halfTrunc`  | 2.2  | 2.2  | 2.3  | -2.2  | -2.2  | -2.3  |
| `halfEven`   | 2.2  | 2.2  | 2.3  | -2.2  | -2.2  | -2.3  |

Bei der Verwendung von `halfEven` hängt sein Verhalten auch von der Parität (gerade oder ungerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel stimmt das Verhalten von `halfEven` in der obigen Tabelle mit `halfTrunc` überein, weil die Magnituden aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, wird `halfEven` stattdessen wie `halfExpand` funktionieren. Dieses Verhalten vermeidet eine konsequente Unter- oder Überschätzung von Halbinkrementen in einer großen Datenstichprobe.

### Verwenden von roundingIncrement

Manchmal möchten wir die verbleibenden Nachkommastellen auf ein anderes Inkrement als die nächste Ganzzahl runden.
Zum Beispiel könnten Währungen, bei denen die kleinste Münze 5 Cent ist, den Wert auf Inkremente von 5 runden wollen, um Beträge widerzuspiegeln, die tatsächlich in Bar bezahlt werden können.

Diese Art der Rundung kann mit der [`roundingIncrement`](#roundingincrement) Eigenschaft erreicht werden.

Wenn beispielsweise `maximumFractionDigits` auf 2 und `roundingIncrement` auf 5 gesetzt ist, wird die Zahl auf das nächste 0.05 gerundet:

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

Dieses spezielle Muster wird als "Nickel-Rundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine 5-Cent-Münze in den USA ist.
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
Das Beispiel unten zeigt, wie `halfCeil` Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des Rundungsinkrements zu runden und "mehr positiv", wenn er darüber oder darauf liegt.
Das inkrementierte Inkrement ist "0.05", sodass das Halbinkrement bei 0.025 liegt (unten bei 11.225 gezeigt).

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

Wenn Sie die Anzahl der Ziffern ändern müssen, denken Sie daran, dass sowohl `minimumFractionDigits` als auch `maximumFractionDigits` auf denselben Wert gesetzt werden müssen, oder es wird ein `RangeError` ausgelöst.

`roundingIncrement` kann nicht mit der Rundung nach signifikanten Stellen oder einer anderen Einstellung von `roundingPriority` als `auto` gemischt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
