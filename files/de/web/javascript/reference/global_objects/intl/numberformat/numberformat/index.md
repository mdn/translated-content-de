---
title: Intl.NumberFormat()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 10bbf0bf11790186b79dcad29a8c13c4adddba2c
---

{{JSRef}}

Der **`Intl.NumberFormat()`**-Konstruktor erzeugt {{jsxref("Intl.NumberFormat")}}-Objekte.

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

> **Hinweis:** `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Intl.NumberFormat`-Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und mit einem `this`-Wert aufgerufen wird, der eine andere `Intl.NumberFormat`-Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP-47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Locale-Kennungen. Die Standard-Locale des Runtimes wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Locale-Kennungen unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit wird die Eigenschaftsliste basierend auf ihren Zwecken in Abschnitte unterteilt, einschließlich [Locale-Optionen](#locale-optionen), [Stiloptionen](#stiloptionen), [Zifferoptionen](#zifferoptionen) und [andere Optionen](#andere_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Abgleichsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`.
    Informationen zu dieser Option finden Sie unter [Locale-Erkennung und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem für die Zahlenformatierung, wie `"arab"`, `"hans"`, `"mathsans"` usw. Eine Liste der unterstützten Nummerierungssystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch mit dem `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.

#### Stiloptionen

Je nach verwendetem `style` können einige ignoriert und andere erforderlich sein:

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
  - : Die Währung, die für die Währungsformatierung verwendet werden soll. Mögliche Werte sind die ISO-4217-Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency`-Eigenschaft angegeben werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung in der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokalisiertes Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Format-Symbol ("$100" statt "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Locales bedeutet das Rechnungsformat, die Zahl in Klammern zu setzen, anstatt ein Minuszeichen anzuhängen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die Einheit, die in der `unit`-Formatierung verwendet werden soll. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgeführt. Paare einfacher Einheiten können mit "-per-" zu einer Zusammensetzungseinheit verkettet werden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit`-Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der zu verwendende Formatierungsstil der Einheit in der `unit`-Formatierung. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B., `16 l`.
    - `"narrow"`
      - : Z.B., `16l`.
    - `"long"`
      - : Z.B., `16 litres`.

#### Zifferoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die Mindestanzahl der zu verwendenden ganzzahligen Ziffern. Ein Wert mit einer kleineren Anzahl von ganzzahligen Ziffern als diese Zahl wird durch Nullen (in der angegebenen Länge) links aufgefüllt, wenn er formatiert wird. Mögliche Werte reichen von `1` bis `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die Mindestanzahl der zu verwendenden Dezimalstellen. Mögliche Werte reichen von `0` bis `100`; der Standardwert für einfache Zahlen- und Prozentformatierung ist `0`; der Standardwert für Währungsformatierung ist die Anzahl der kleinen Einheitenziffern, die von der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt wird (2, wenn die Liste diese Informationen nicht bereitstellt). Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `maximumFractionDigits`
  - : Die maximale Anzahl der zu verwendenden Dezimalstellen. Mögliche Werte reichen von `0` bis `100`; der Standardwert für einfache Zahlenformatierung ist das größere von `minimumFractionDigits` und `3`; der Standardwert für Währungsformatierung ist das größere von `minimumFractionDigits` und der Anzahl der kleinen Einheitenziffern, die von der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt wird (2, wenn die Liste diese Informationen nicht bereitstellt); der Standardwert für Prozentformatierung ist das größere von `minimumFractionDigits` und 0. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `minimumSignificantDigits`
  - : Die Mindestanzahl der zu verwendenden signifikanten Ziffern. Mögliche Werte reichen von `1` bis `21`; der Standardwert ist `1`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl der zu verwendenden signifikanten Ziffern. Mögliche Werte reichen von `1` bis `21`; der Standardwert ist `21`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `roundingPriority`

  - : Gibt an, wie Rundungskonflikte gelöst werden, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis aus der Eigenschaft der signifikanten Ziffern wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis aus der Eigenschaft, die in mehr Präzision resultiert, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis aus der Eigenschaft, die in weniger Präzision resultiert, wird verwendet.

    Der Wert `"auto"` wird zu `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keine der vier "FractionDigits"/"SignificantDigits"-Optionen gesetzt sind.

    Beachten Sie, dass für andere Werte als `auto` das Ergebnis mit mehr Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (Minimum Fraktional- und signifikante Ziffern-Einstellungen werden ignoriert).

- `roundingIncrement`

  - : Gibt das Inkrement an, bei dem relative zur berechneten Rundungsgröße gerundet werden soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, und `5000`; der Standardwert ist `1`. Es kann nicht mit signifikanter Ziffern-Rundung oder irgendeiner Einstellung von `roundingPriority` außer `auto` gemischt werden.

- `roundingMode`

  - : Wie dezimal gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Rundung in Richtung +∞. Positive Werte werden aufgerundet. Negative Werte "weniger negativ" machen.
    - `"floor"`
      - : Rundung in Richtung -∞. Positive Werte werden abgerundet. Negative Werte "mehr negativ" machen.
    - `"expand"`
      - : Rundung von 0 weg. Der _Betrag_ des Wertes wird immer durch die Rundung erhöht. Positive Werte werden aufgerundet. Negative Werte "mehr negativ" machen.
    - `"trunc"`
      - : Rundung in Richtung 0. Der _Betrag_ des Wertes wird immer durch die Rundung verringert. Positive Werte werden abgerundet. Negative Werte "weniger negativ" machen.
    - `"halfCeil"`
      - : Unentschieden in Richtung +∞. Werte oberhalb des Halbincrements werden wie `"ceil"` (in Richtung +∞) und darunter wie `"floor"` (in Richtung -∞) gerundet. Beim Halbincrement werden Werte wie `"ceil"` gerundet.
    - `"halfFloor"`
      - : Unentschieden in Richtung -∞. Werte oberhalb des Halbincrements werden wie `"ceil"` (in Richtung +∞) und darunter wie `"floor"` (in Richtung -∞) gerundet. Beim Halbincrement werden Werte wie `"floor"` gerundet.
    - `"halfExpand"` (Standard)
      - : Unentschieden von 0 weg. Werte oberhalb des Halbincrements werden wie `"expand"` (von null weg), und darunter wie `"trunc"` (in Richtung 0) gerundet. Beim Halbincrement werden Werte wie `"expand"` gerundet.
    - `"halfTrunc"`
      - : Unentschieden in Richtung 0. Werte oberhalb des Halbincrements werden wie `"expand"` (von null weg), und darunter wie `"trunc"` (in Richtung 0) gerundet. Beim Halbincrement werden Werte wie `"trunc"` gerundet.
    - `"halfEven"`
      - : Unentschieden zu der nächstgelegenen geraden Ganzzahl. Werte oberhalb des Halbincrements werden wie `"expand"` (von null weg), und darunter wie `"trunc"` (in Richtung 0) gerundet. Beim Halbincrement werden Werte zur nächstgelegenen geraden Ziffer gerundet.

    Diese Optionen spiegeln den [ICU Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, wo "expand" und "trunc" auf ICU "UP" und "DOWN" abgebildet werden.
    Das Beispiel [Rundungsarten](#rundungsarten) unten zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige von nachgestellten Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie nachgestellte Nullen gemäß `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Dezimalstellen _wenn_ diese alle Null sind. Dies ist dasselbe wie `"auto"`, wenn eine der Dezimalstellen ungleich Null ist.

##### SignificantDigits/FractionDigits Standardwerte

Für die vier oben genannten Optionen (die `FractionDigits`- und `SignificantDigits`-Optionen) haben wir ihre Standardwerte erwähnt; jedoch werden diese Standards _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet wird, was von den Einstellungen [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Insbesondere:

- Wenn `roundingPriority` nicht `"auto"` ist, gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits`-Option gesetzt ist, gelten die `SignificantDigits`-Optionen und die `FractionDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, und entweder mindestens eine `FractionDigits`-Option gesetzt ist oder `notation` nicht `"compact"` ist, gelten die `FractionDigits`-Optionen und die `SignificantDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist und keine der vier Optionen gesetzt sind, werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben genannten Standards, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Die Formatierung, die für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfache Zahlenformatierung.
    - `"scientific"`
      - : Gibt die Größenordnung für die formatierte Zahl zurück.
    - `"engineering"`
      - : Gibt den Exponenten von zehn zurück, wenn er durch drei teilbar ist.
    - `"compact"`
      - : Zeichenkette, die den Exponenten darstellt; standardmäßig wird die "kurze" Form verwendet.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.
- `useGrouping`

  - : Ob Trennzeichen für Gruppierungen, wie Tausender-Trennzeichen oder Tausend/Lakh/Krupha-Trennzeichen, verwendet werden sollen.

    - `"always"`
      - : Zeigen Sie Trennzeichen für Gruppierungen an, auch wenn die Locale es anders bevorzugt.
    - `"auto"`
      - : Zeigen Sie Trennzeichen für Gruppierungen basierend auf den Locale-Präferenzen an, die auch von der Währung abhängen können.
    - `"min2"`
      - : Zeigen Sie Trennzeichen für Gruppierungen an, wenn in einer Gruppe mindestens 2 Ziffern vorhanden sind.
    - `true`
      - : Gleich wie `"always"`.
    - `false`
      - : Zeigen Sie keine Trennzeichen für Gruppierungen an.

    Der Standardwert ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` sonst. Die String-Werte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenanzeige nur für negative Zahlen, einschließlich negativer Null.
    - `"always"`
      - : Vorzeichen immer anzeigen.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, aber nicht für Null.
    - `"negative"`
      - : Vorzeichenanzeige nur für negative Zahlen, ohne negative Null.
    - `"never"`
      - : Vorzeichen niemals anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat`-Objekt.

> [!NOTE]
> Der Text unten beschreibt Verhalten, das von der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat`-Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das ein [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) von `Intl.NumberFormat` ist (es bedeutet nicht unbedingt, dass es über `new Intl.NumberFormat` erstellt wurde; nur dass es `Intl.NumberFormat.prototype` in seiner Prototypkette hat), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.NumberFormat`-Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]`-Eigenschaft (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird) versteckt wird.

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.NumberFormat`-Instanz gibt: die, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Wenn Sie die Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) auf `formatter` aufrufen, würden die in dieser Instanz gespeicherten Optionen korrekt verwendet, aber alle anderen Methodenaufrufe (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würden mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden die Optionen der versteckten Instanz nicht konsultieren.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, aber mit `this`, das auf etwas anderes gesetzt ist, das kein `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this`-Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und es wird normal eine neue `Intl.NumberFormat`-Instanz erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die aufzählbare Werte (wie `style`, `units`, `currency` usw.) nimmt, ist auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind festgelegt, und sie sind auf unterschiedliche Werte festgelegt.
      Beachten Sie, dass je nach verschiedenen Formatierungsoptionen diese Eigenschaften Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu erhalten, auch wenn Sie nur eine der Eigenschaften festgelegt haben.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `options.style`-Eigenschaft auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` gesetzt wurde.

## Beispiele

### Grundlegende Nutzung

Beim grundlegenden Gebrauch ohne Angabe einer Locale wird eine formatierte Zeichenfolge in der Standard-Locale und mit Standardoptionen zurückgegeben.

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

Wenn der `style` `'unit'` ist, muss eine `unit`-Eigenschaft bereitgestellt werden.
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

Wenn der `style` `'currency'` ist, muss eine `currency`-Eigenschaft
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

Wissenschaftliche und kompakte Notation werden durch die `notation`-Option dargestellt und können so formatiert werden:

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

### Vorzeichen anzeigen

Zeigen Sie ein Vorzeichen für positive und negative Zahlen, aber nicht für 0 an:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass, wenn das Währungszeichen auf "accounting" gesetzt ist, möglicherweise anstelle eines Minuszeichens Klammern verwendet werden:

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

Sie können die Mindest- oder Höchstanzahl von Dezimal-, Ganz- oder signifikanten Ziffern angeben, die bei der Formatierung einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl signifikante als auch Dezimalziffernbegrenzungen angegeben sind, hängt die tatsächliche Formatierung von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganzzahlen- und Dezimalstelleneigenschaften geben die Anzahl der Ziffern an, die vor und nach dem Dezimalpunkt angezeigt werden sollen.
Wenn der anzuzeigende Zahlwert weniger ganzzahlige Ziffern als angegeben hat, wird er auf die erwartete Anzahl mit Nullen links aufgefüllt.
Wenn er weniger Dezimalstellen hat, wird er mit Nullen rechts aufgefüllt.
Beide Fälle werden unten gezeigt:

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

Wenn ein Wert mehr Dezimalstellen als die angegebene Maximalanzahl hat, wird er gerundet.
Die _Weise_, auf die er gerundet wird, hängt von der Eigenschaft [`roundingMode`](#roundingmode) ab (mehr Details werden im Abschnitt [Rundungsarten](#rundungsarten) bereitgestellt).
Unten wird der Wert von fünf Dezimalstellen (`4.33145`) auf zwei (`4.33`) gerundet:

```js
// Display value shortened to maximum number of digits
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(4.33145),
);
// "4.33"
```

Die Mindest-Dezimalstellen haben keinen Einfluss, wenn der Wert bereits mehr als 2 Dezimalstellen hat:

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
> Vorsicht bei Standardwerten, da diese das Format beeinflussen können, auch wenn sie in Ihrem Code nicht angegeben sind.
> Der Standardwert für die maximale Anzahl von Ziffern beträgt `3` für einfache Werte, `2` für Währungen und kann für andere vorgegebene Typen unterschiedlich sein.

Der formatierte Wert oben wird auf 3 Ziffern gerundet, obwohl wir die maximale Anzahl von Ziffern nicht angegeben haben!
Dies liegt daran, dass ein Standardwert von `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` und `0`, jeweils.

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

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtanzahl der Ziffern inklusive der ganzzahligen und der Bruchteile.
Die `maximumSignificantDigits` wird verwendet, um die Gesamtanzahl der vom Originalwert anzuzeigenden Ziffern anzugeben.

Die Beispiele unten zeigen, wie das funktioniert.
Beachtem Sie insbesondere den letzten Fall: nur die erste Ziffer wird beibehalten und die anderen werden verworfen/auf Null gesetzt.

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

Die `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl an Ziffern angezeigt wird, wobei bei Bedarf Nullen an das Ende des Werts angehängt werden.

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
> Vorsicht bei Standardwerten, da sie das Format beeinflussen können.
> Wenn nur eine `SignificantDigits`-Eigenschaft verwendet wird, wird ihr Gegenstück automatisch mit dem Standardwert angewendet.
> Die Standardwerte für die maximale und minimale Anzahl signifikante Ziffern sind 21 und 1, jeweils.

#### Gleichzeitige Angabe von signifikanten und Dezimalstellen

Die Dezimalziffern ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Methoden, um zu bestimmen, wie viele Dezimal- und führende Ziffern formatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, können sie in Konflikt geraten.

Diese Konflikte werden mit der Eigenschaft [`roundingPriority`](#roundingpriority) gelöst.
Standardmäßig hat diese einen Wert von `"auto"`, was bedeutet, dass wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#minimumsignificantdigits) angegeben ist, die Dezimal- und Ganzstelleneigenschaften ignoriert werden.

Zum Beispiel formatiert der folgende Code den Wert `4.33145` mit `maximumFractionDigits: 3`, dann mit `maximumSignificantDigits: 2` und dann mit beiden.
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

Durch die Inspektion des Formatierers mit [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) können wir feststellen, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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
Der Formatierer berechnet die Präzision unter Verwendung der Werte von `maximumSignificantDigits` und `maximumFractionDigits`.

Der folgende Code zeigt das ausgewählte Format für die drei verschiedenen Rundungsprioritäten:

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

Beachten Sie, dass der Algorithmus auf eine unintuitive Weise verhalten kann, wenn ein Minimalwert ohne Maximalwert angegeben ist.
Das untenige Beispiel formatiert den Wert `1` mit Angabe von `minimumFractionDigits: 2` (Formatierung zu `1.00`) und `minimumSignificantDigits: 2` (Formatierung zu `1.0`).
Da `1.00` mehr Ziffern hat als `1.0`, sollte dies das Ergebnis sein, wenn `morePrecision` priorisiert wird, aber in der Tat ist das Gegenteil der Fall:

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

Der Grund dafür ist, dass nur die "maximalen Präzisions-"Werte für die Berechnung verwendet werden, und der Standardwert für `maximumSignificantDigits` ist viel höher als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Modifikation des Algorithmus vorgeschlagen, bei der der Formatierer das Ergebnis unter Verwendung der angegebenen Bruch- und signifikanten Ziffern unabhängig bewerten sollte (unter Berücksichtigung sowohl der Minimum- als auch der Maximalwerte).
> Dann wird die Option ausgewählt, die mehr Dezimalstellen anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist.
> Dies wird zu einem intuitiveren Verhalten für diesen Fall führen.

### Rundungsarten

Wenn ein Wert mehr Dezimalstellen hat, als von den Konstruktoroptionen erlaubt, wird der formatierte Wert auf die angegebene Anzahl von Dezimalstellen _gerundet_.
Die _Weise_, in der der Wert gerundet wird, hängt von der Eigenschaft [`roundingMode`](#roundingmode) ab.

Zahlenformatierungen verwenden standardmäßig das Rundungsverfahren `halfExpand`, welches Werte am Halb-Increment "von null weg" rundet (mit anderen Worten, der _Betrag_ des Werts wird aufgerundet).

Für eine positive Zahl, wenn die zu entfernenden Dezimalstellen näher an dem nächsten Increment (oder auf dem halben Weg) sind, dann werden die verbleibenden Dezimalstellen aufgerundet, ansonsten werden sie abgerundet.
Dies wird unten gezeigt: 2,23 gerundet auf zwei signifikante Ziffern wird auf 2,2 gekürzt, weil 2,23 kleiner als das Halb-Increment 2,25 ist, während Werte von 2,25 und größer auf 2,3 aufgerundet werden:

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

Eine negative Zahl am oder unter dem Halbincrementpunkt wird auch "von null weg" gerundet (wird "mehr negativ"):

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

Die Tabelle unten zeigt die Auswirkung verschiedener Rundungsarten für positive und negative Werte, die sich auf dem und um das Halb-Increment befinden.

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

Wenn `halfEven` verwendet wird, hängt sein Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel, das Verhalten von `halfEven` in der obigen Tabelle ist das gleiche wie `halfTrunc`, weil die Beträge aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, verhält sich `halfEven` stattdessen wie `halfExpand`. Dieses Verhalten vermeidet konsistentes Unter- oder Überschätzen von Halbincrements in einer großen Datenmenge.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Dezimalstellen auf ein anderes Increment als die nächste Ganzzahl runden.
Zum Beispiel könnte es für Währungen, bei denen die kleinste Münze 5 Cent ist, sinnvoll sein, den Wert auf Inkremente von 5 zu runden, um Beträge widerzuspiegeln, die tatsächlich in bar bezahlt werden können.

Diese Art der Rundung kann mit der Eigenschaft [`roundingIncrement`](#roundingincrement) erreicht werden.

Zum Beispiel, wenn `maximumFractionDigits` 2 und `roundingIncrement` 5 ist, wird die Zahl auf die nächste 0.05 gerundet:

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

Dieses besondere Muster wird als "Nickel-Rundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine US-amerikanische 5-Cent-Münze ist.
Um auf die nächste 10-Cent-Mark ("Dime-Rundung") zu runden, könnten Sie `roundingIncrement` auf `10` ändern.

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
Das Beispiel unten zeigt, wie `halfCeil`-Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des Halb-Rundungsincrememts und "mehr positiv", wenn oberhalb oder auf dem Halbincrement, zu runden.
Die erhöhte Ziffer ist "0.05", sodass das Halbincrement bei 11.225 liegt (unten wird es als solche gezeigt).

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

Wenn Sie die Anzahl der Ziffern ändern müssen, denken Sie daran, dass `minimumFractionDigits` und `maximumFractionDigits` beide auf den gleichen Wert gesetzt sein müssen, oder ein `RangeError` wird geworfen.

`roundingIncrement` kann nicht mit signifikanter Ziffern-Rundung oder irgendeiner Einstellung von `roundingPriority` außer `auto` gemischt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
