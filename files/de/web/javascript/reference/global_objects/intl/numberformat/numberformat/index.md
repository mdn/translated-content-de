---
title: Intl.NumberFormat() Konstruktor
short-title: Intl.NumberFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Intl.NumberFormat()`**-Konstruktor erstellt {{jsxref("Intl.NumberFormat")}}-Objekte.

{{InteractiveExample("JavaScript-Demo: Intl.NumberFormat() Konstruktor", "taller")}}

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

> [!NOTE] > `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Arten erzeugen eine neue `Intl.NumberFormat`-Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der `this`-Wert eine andere `Intl.NumberFormat`-Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Sprachkennungen. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder keine der angegebenen Locale-Kennungen unterstützt wird. Zur allgemeinen Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften in Abschnitte unterteilt, die sich nach ihren Zwecken richten, einschließlich [Locale-Optionen](#locale-optionen), [Stiloptionen](#stiloptionen), [Ziffernoptionen](#ziffernoptionen) und [andere Optionen](#andere_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Abgleichsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`.
    Weitere Informationen zu dieser Option finden Sie unter [Locale-Erkennung und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das Nummerierungssystem, das für die Zahlenformatierung verwendet werden soll, wie `"arab"`, `"hans"`, `"mathsans"` usw. Für eine Liste der unterstützten Nummerierungssystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.

#### Stiloptionen

Je nach verwendetem `style` können einige ignoriert und andere erforderlich sein:

- `style`
  - : Der zu verwendende Formatierungsstil.
    - `"decimal"` (Standard)
      - : Für die Formatierung einfacher Zahlen.
    - `"currency"`
      - : Für die Währungsformatierung.
    - `"percent"`
      - : Für die Prozentformatierung.
    - `"unit"`
      - : Für die Einheitenformatierung.
- `currency`
  - : Die für die Währungsformatierung zu verwendende Währung. Mögliche Werte sind die ISO 4217-Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency`-Eigenschaft angegeben werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung bei der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokalisiertes Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmaleres Formatsymbol ("$100" anstelle von "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Locale bedeutet das Rechnungsformat, dass die Zahl mit Klammern anstelle eines Minuszeichens umschlossen wird. Mögliche Werte sind `"standard"` und `"accounting"`; der Standard ist `"standard"`.
- `unit`
  - : Die in der `unit`-Formatierung zu verwendende Einheit. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgeführt. Paare von einfachen Einheiten können mit "-per-" zu einer zusammengesetzten Einheit verkettet werden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit`-Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der zu verwendende Einheiten-Formatierungsstil in der `unit`-Formatierung. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B. `16 l`.
    - `"narrow"`
      - : Z.B. `16l`.
    - `"long"`
      - : Z.B. `16 litres`.

#### Ziffernoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die minimale Anzahl von Ganzzahlziffern, die verwendet werden sollen. Ein Wert mit einer kleineren Anzahl Ganzzahlziffern als dieser Wert wird beim Formatieren links mit Nullen (bis zur angegebenen Länge) aufgefüllt. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die minimale Anzahl von Nachkommastellen, die verwendet werden sollen. Mögliche Werte liegen zwischen `0` und `100`; der Standard für einfache Zahlen- und Prozentformatierungen ist `0`; der Standard für Währungsformatierungen ist die Anzahl der von der [ISO 4217-Währungscode-Liste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellten Untereinheitendigits (2, wenn die Liste diese Information nicht bereitstellt). Siehe [Standardwerte für bedeutende Ziffern/Nachkommastellen](#significantdigitsfractiondigits_default_values) für den Zeitpunkt, an dem dieser Standard angewendet wird.
- `maximumFractionDigits`
  - : Die maximale Anzahl von Nachkommastellen, die verwendet werden sollen. Mögliche Werte liegen zwischen `0` und `100`; der Standard für die Formatierung einer einfachen Zahl ist der größere von `minimumFractionDigits` und `3`; der Standard für Währungsformatierungen ist der größere von `minimumFractionDigits` und der Anzahl der von der [ISO 4217-Währungscode-Liste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellten Untereinheitendigits (2, wenn die Liste diese Information nicht bereitstellt); der Standard für Prozentformatierungen ist der größere von `minimumFractionDigits` und 0. Siehe [Standardwerte für bedeutende Ziffern/Nachkommastellen](#significantdigitsfractiondigits_default_values) für den Zeitpunkt, an dem dieser Standard angewendet wird.
- `minimumSignificantDigits`
  - : Die minimale Anzahl bedeutsamer Ziffern, die verwendet werden sollen. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`. Siehe [Standardwerte für bedeutende Ziffern/Nachkommastellen](#significantdigitsfractiondigits_default_values) für den Zeitpunkt, an dem dieser Standard angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl bedeutsamer Ziffern, die verwendet werden sollen. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `21`. Siehe [Standardwerte für bedeutende Ziffern/Nachkommastellen](#significantdigitsfractiondigits_default_values) für den Zeitpunkt, an dem dieser Standard angewendet wird.
- `roundingPriority`

  - : Gibt an, wie Rundungskonflikte gelöst werden, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis aus der Eigenschaft der bedeutenden Ziffern wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis der Eigenschaft, die zu mehr Präzision führt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis der Eigenschaft, die zu weniger Präzision führt, wird verwendet.

    Der Wert `"auto"` wird zu `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keine der vier "FractionDigits"/"SignificantDigits"-Optionen gesetzt ist.

    Beachten Sie, dass für andere Werte als `auto` das Ergebnis mit mehr Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (Einstellungen für minimale Fraktional- und bedeutende Ziffern werden ignoriert).

- `roundingIncrement`

  - : Gibt das Inkrement an, bei dem die Rundung im Verhältnis zu der berechneten Rundungsmagnitude stattfinden soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, und `5000`; die Standardeinstellung ist `1`. Es kann nicht mit signifikanter Ziffern-Rundung oder einer anderen Einstellung von `roundingPriority` als `auto` gemischt werden.

- `roundingMode`

  - : Wie Dezimalstellen gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Aufrunden zu +∞. Positive Werte runden nach oben. Negative Werte runden "positiver".
    - `"floor"`
      - : Abrunden zu -∞. Positive Werte runden nach unten. Negative Werte runden "negativer".
    - `"expand"`
      - : Weg von 0 runden. Der _Betrag_ des Wertes wird durch Rundung immer erhöht. Positive Werte runden nach oben. Negative Werte runden "negativer".
    - `"trunc"`
      - : Auf 0 runden. Der _Betrag_ des Wertes wird durch Rundung immer verringert. Positive Werte runden nach unten. Negative Werte runden "weniger negativ".
    - `"halfCeil"`
      - : Bindungen zu +∞. Werte oberhalb des Halbincrements runden wie `"ceil"` (zu +∞), und unterhalb wie `"floor"` (zu -∞). Beim Halbincrement runden Werte wie `"ceil"`.
    - `"halfFloor"`
      - : Bindungen zu -∞. Werte oberhalb des Halbincrements runden wie `"ceil"` (zu +∞), und unterhalb wie `"floor"` (zu -∞). Beim Halbincrement runden Werte wie `"floor"`.
    - `"halfExpand"` (Standard)
      - : Bindungen von 0 weg. Werte oberhalb des Halbincrements runden wie `"expand"` (von 0 weg), und unterhalb wie `"trunc"` (zu 0). Beim Halbincrement runden Werte wie `"expand"`.
    - `"halfTrunc"`
      - : Bindungen zu 0. Werte oberhalb des Halbincrements runden wie `"expand"` (von 0 weg), und unterhalb wie `"trunc"` (zu 0). Beim Halbincrement runden Werte wie `"trunc"`.
    - `"halfEven"`
      - : Bindungen zum nächstgelegenen geraden Ganzzahl. Werte oberhalb des Halbincrements runden wie `"expand"` (von 0 weg), und unterhalb wie `"trunc"` (zu 0). Beim Halbincrement runden Werte zum nächstgelegenen geraden Ziffer.

    Diese Optionen spiegeln den [ICU-Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, wobei "expand" und "trunc" zu ICU "UP" und "DOWN" abgebildet werden.
    Das Beispiel [Rundungsmodi](#rundungsmodi) unten zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige von nachgestellten Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Nachgestellte Nullen gemäß `minimumFractionDigits` und `minimumSignificantDigits` beibehalten.
    - `"stripIfInteger"`
      - : Entfernen Sie die Nachkommastellen, _sofern_ sie alle null sind. Dies entspricht `"auto"`, wenn eine der Nachkommastellen ungleich null ist.

##### Standardwerte für bedeutende Ziffern/Nachkommastellen

Für die vier oben genannten Optionen (die `FractionDigits`- und `SignificantDigits`-Optionen) haben wir ihre Standards erwähnt; jedoch werden diese Standards _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet wird, was von den Einstellungen für [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Spezifisch:

- Wenn `roundingPriority` nicht `"auto"` ist, gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits`-Option gesetzt ist, gelten die `SignificantDigits`-Optionen und die `FractionDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist und entweder mindestens eine `FractionDigits`-Option gesetzt ist oder `notation` nicht `"compact"` ist, gelten die `FractionDigits`-Optionen und die `SignificantDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist und keine der vier Optionen gesetzt ist, werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben genannten Standards, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Das Format, das für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfaches Zahlenformat.
    - `"scientific"`
      - : Gibt die Größenordnung für die formatierte Zahl zurück.
    - `"engineering"`
      - : Gibt die Zehnerpotenz zurück, wenn diese durch drei teilbar ist.
    - `"compact"`
      - : String, der die Exponente darstellt; standardmäßig wird die "kurze" Form verwendet.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.
- `useGrouping`

  - : Ob Gruppierungszeichen verwendet werden sollen, wie Tausendertrennzeichen oder Tausender/Lakh/Crore-Trennzeichen.

    - `"always"`
      - : Gruppierungszeichen immer anzeigen, auch wenn die Locale dies nicht bevorzugt.
    - `"auto"`
      - : Gruppierungszeichen gemäß den Lokaleinstellungen anzeigen, die möglicherweise auch von der Währung abhängen.
    - `"min2"`
      - : Gruppierungszeichen anzeigen, wenn mindestens 2 Ziffern in einer Gruppe vorhanden sind.
    - `true`
      - : Dasselbe wie `"always"`.
    - `false`
      - : Keine Gruppierungszeichen anzeigen.

    Der Standardwert ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` andernfalls. Die String-Werte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenanzeige nur für negative Zahlen, einschließlich negativer Null.
    - `"always"`
      - : Vorzeichen immer anzeigen.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, jedoch nicht für Null.
    - `"negative"`
      - : Vorzeichenanzeige nur für negative Zahlen, ohne negative Null.
    - `"never"`
      - : Vorzeichen nie anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat` Objekt.

> [!NOTE]
> Der folgende Text beschreibt ein Verhalten, das in der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat`-Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert ein Objekt ist, das ein [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (es muss nicht notwendigerweise durch `new Intl.NumberFormat` erstellt worden sein; es muss lediglich `Intl.NumberFormat.prototype` in seiner Prototyp-Kette haben), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.NumberFormat`-Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]`-Eigenschaft (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird) versteckt ist.

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.NumberFormat`-Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Der Aufruf der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, aber der Aufruf aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden die versteckten Instanzoptionen nicht berücksichtigen.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, jedoch mit `this`, das auf etwas anderes gesetzt ist, das kein `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this`-Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat`-Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die enumerierte Werte erfordert (wie `style`, `units`, `currency` usw.), ist auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt und sie sind auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass je nach verschiedenen Formatierungsoptionen, diese Eigenschaften Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu erhalten, auch wenn Sie nur eine der Eigenschaften festlegen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `options.style`-Eigenschaft auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende `options.unit`- oder `options.currency`-Eigenschaft festgelegt wurde.

## Beispiele

### Grundlegende Nutzung

Bei der grundlegenden Verwendung ohne die Angabe einer Locale wird ein formatierter String in der Standard-Locale und mit den Standardoptionen zurückgegeben.

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

Wenn `style` `'unit'` ist, muss eine `unit`-Eigenschaft angegeben werden.
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

Wenn `style` `'currency'` ist, muss eine `currency`-Eigenschaft
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

### Wissenschaftliche, technische oder kompakte Notationen

Wissenschaftliche und kompakte Notation werden durch die `notation`-Option dargestellt und können wie folgt formatiert werden:

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

Anzeigen eines Vorzeichens für positive und negative Zahlen, jedoch nicht für Null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass das Währungszeichen bei "accounting" das Minuszeichen durch Klammern ersetzt:

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

Sie können die minimale oder maximale Anzahl von Fraktional-, Ganz- oder bedeutenden Ziffern angeben, die beim Formatieren einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl Grenzen für signifikante als auch fraktionale Ziffern angegeben sind, hängt das tatsächliche Formatieren von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganz- und Nachkommastellen-Eigenschaften geben die Anzahl der Ziffern an, die vor und nach dem Dezimalkomma angezeigt werden sollen.
Wenn der anzuzeigende Wert weniger Ganzzahlziffern hat als angegeben, wird er mit Nullen aufgefüllt, um die erwartete Menge zu erreichen.
Wenn er weniger Nachkommastellen hat, wird er mit Nullen aufgefüllt.
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

Wenn ein Wert mehr Nachkommastellen hat als die maximal angegebene Anzahl, wird er gerundet.
Die _Art_, in der er gerundet wird, hängt von der [`roundingMode`](#roundingmode)-Eigenschaft ab (weitere Details sind im Abschnitt [Rundungsmodi](#rundungsmodi) angegeben).
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
> Achten Sie auf Standardwerte, da sie das Formatieren auch beeinflussen können, wenn sie nicht in Ihrem Code angegeben sind.
> Der Standardwert für die maximale Ziffer ist `3` für einfache Werte, `2` für Währungen, und kann unterschiedliche Werte für andere vordefinierte Typen haben.

Der oben formatierte Wert wird auf 3 Ziffern gerundet, obwohl wir die maximale Ziffer nicht angegeben haben!
Dies liegt daran, dass ein Standardwert von `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` und `0`, jeweils.

Sie können [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) verwenden, um den Formatter zu überprüfen.

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

Die Anzahl der _bedeutenden Ziffern_ ist die Gesamtzahl der Ziffern einschließlich sowohl der ganzen als auch der nachkommigen Teile.
Die `maximumSignificantDigits` wird verwendet, um die Gesamtzahl der Ziffern aus dem ursprünglichen Wert anzuzeigen.

Die folgenden Beispiele zeigen, wie dies funktioniert.
Beachten Sie insbesondere den letzten Fall: nur die erste Ziffer bleibt erhalten und die anderen werden verworfen/auf null gesetzt.

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

Die `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl von Ziffern angezeigt wird und bei Bedarf Nullen am Ende des Wertes hinzugefügt werden.

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
> Achten Sie auf Standardwerte, da sie das Formatieren beeinflussen können.
> Wenn nur eine `SignificantDigits`-Eigenschaft verwendet wird, wird ihr Gegenstück automatisch mit dem Standardwert angewendet.
> Die Standardwerte für maximale und minimale bedeutende Ziffern sind 21 bzw. 1.

#### Gleichzeitige Angabe von signifikanten und fraktionalen Ziffern

Die Fraktionalziffern ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten, um zu steuern, wie viele Nachkommastellen und führende Ziffern formatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, ist es möglich, dass sie in Konflikt geraten.

Diese Konflikte werden mit der [`roundingPriority`](#roundingpriority)-Eigenschaft gelöst.
Standardmäßig hat sie den Wert `"auto"`, was bedeutet, dass, wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#minimumsignificantdigits) angegeben ist, die Fraktional- und Ganzzahlzifferneigenschaften ignoriert werden.

Zum Beispiel formatiert der folgende Code den Wert `4.33145` mit `maximumFractionDigits: 3`, dann `maximumSignificantDigits: 2`, und dann beide.
Der Wert mit beiden ist der, der mit `maximumSignificantDigits` gesetzt wurde.

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

Indem Sie [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) verwenden, um den Formatter zu überprüfen, können wir sehen, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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

Zusätzlich zu `"auto"` können Sie Konflikte durch Angabe von [`roundingPriority`](#roundingpriority) als `"morePrecision"` oder `"lessPrecision"` lösen.
Der Formatter berechnet die Präzision unter Verwendung der Werte von `maximumSignificantDigits` und `maximumFractionDigits`.

Der folgende Code zeigt das Format, das für die drei verschiedenen Rundungsprioritäten ausgewählt wird:

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

Beachten Sie, dass der Algorithmus auf eine nicht intuitive Weise verhalten kann, wenn ein Minimalwert ohne einen Maximalwert angegeben wird.
Das folgende Beispiel formatiert den Wert `1` und gibt `minimumFractionDigits: 2` an (Formatierung auf `1.00`) und `minimumSignificantDigits: 2` (Formatierung auf `1.0`).
Da `1.00` mehr Ziffern hat als `1.0`, sollte dies das Ergebnis sein, wenn `morePrecision` den Vorrang hat, aber tatsächlich ist das Gegenteil der Fall:

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

Der Grund dafür ist, dass nur die "maximale Präzision"-Werte für die Berechnung verwendet werden, und der Standardwert von `maximumSignificantDigits` ist viel höher als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis der Verwendung der angegebenen fraktionalen und signifikanten Ziffern unabhängig bewerten sollte (unter Berücksichtigung sowohl der Minimal- als auch der Maximalwerte).
> Er sollte dann die Option auswählen, die mehr Nachkommastellen anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist.
> Dies wird zu einem intuitiveren Verhalten für diesen Fall führen.

### Rundungsmodi

Wenn ein Wert mehr Nachkommastellen hat, als durch die Konstruktoroptionen erlaubt, wird der formatierte Wert auf die angegebene Anzahl von Nachkommastellen _gerundet_.
Die _Art_, wie der Wert gerundet wird, hängt von der [`roundingMode`](#roundingmode)-Eigenschaft ab.

Zahlenformatierer verwenden standardmäßig die Rundung `halfExpand`, die Werte "von Null weg" am Halbincrement rundet (anders ausgedrückt, das _Betrag_ des Wertes wird nach oben gerundet).

Für eine positive Zahl, wenn die zu entfernenden Nachkommastellen näher am nächsten Inkrement (oder am Halbincrement) liegen, werden die verbleibenden Nachkommastellen nach oben gerundet, andernfalls werden sie nach unten gerundet.
Dies wird unten gezeigt: 2.23, gerundet auf zwei signifikante Ziffern, wird auf 2.2 gekürzt, weil 2.23 kleiner ist als das Halbincrement 2.25, während Werte von 2.25 und größer auf 2.3 gerundet werden:

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

Eine negative Zahl am oder unter dem Halbincrement wird ebenfalls von Null weg gerundet (wird negativer):

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

Die Tabelle unten zeigt die Auswirkungen verschiedener Rundungsmodi für positive und negative Werte, die am und um das Halbincrement liegen.

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

Beim Verwenden von `halfEven` hängt dessen Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der obigen Tabelle das gleiche wie `halfTrunc`, weil die Beträge aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, verhält sich `halfEven` stattdessen wie `halfExpand`. Dieses Verhalten vermeidet konsistente Über- oder Unterschätzungen von Halbincrements in einer großen Datenprobe.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Nachkommastellen auf ein anderes Inkrement als das nächste Ganze runden.
Beispielsweise möchten Währungen, für die die kleinste Münze 5 Cent beträgt, den Wert auf 5-er-Inkremente runden, was Beträge widerspiegelt, die tatsächlich in bar bezahlt werden können.

Diese Art der Rundung kann mit der [`roundingIncrement`](#roundingincrement)-Eigenschaft erreicht werden.

Zum Beispiel, wenn `maximumFractionDigits` 2 und `roundingIncrement` 5 ist, wird die Zahl auf das nächste 0.05 gerundet:

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

Dieses besondere Muster wird als "Nickel-Rundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine 5-Cent-Münze in den USA ist.
Um auf die nächsten 10 Cent zu runden ("Dime-Rundung"), könnten Sie `roundingIncrement` in `10` ändern.

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
Das folgende Beispiel zeigt, wie `halfCeil`-Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des Halbincrements und "mehr positiv" darüber oder auf dem Halbincrement zu runden.
Das inkrementierte Digit ist "0.05", sodass das Halbincrement bei .025 liegt (unten wird dies bei 11.225 gezeigt).

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

`roundingIncrement` kann nicht mit signifikanter Ziffern-Rundung oder einer anderen Einstellung von `roundingPriority` als `auto` gemischt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
