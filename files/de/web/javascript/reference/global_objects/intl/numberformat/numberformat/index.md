---
title: Intl.NumberFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 29dc1be808ce3320b88f8a14141f9e87c4f6fae0
---

{{JSRef}}

Der **`Intl.NumberFormat()`** Konstruktor erstellt {{jsxref("Intl.NumberFormat")}} Objekte.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat", "taller")}}

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

> **Note:** `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Weisen erzeugen eine neue `Intl.NumberFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und mit einem `this`-Wert, der eine andere `Intl.NumberFormat` Instanz ist, aufgerufen wird; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgelistet) festgelegt werden. Wenn beide festgelegt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur leichteren Lesbarkeit ist die Liste der Eigenschaften in Abschnitte unterteilt, basierend auf ihren Zwecken, einschließlich [Lokalisierungsoptionen](#lokalisierungsoptionen), [Stiloptionen](#stiloptionen), [Ziffernoptionen](#ziffernoptionen) und [andere Optionen](#andere_optionen).

#### Lokalisierungsoptionen

- `localeMatcher`
  - : Der zu verwendende Sprachübereinstimmungsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Lokale Identifikation und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem für die Zahlformatierung, wie `"arab"`, `"hans"`, `"mathsans"`, usw. Für eine Liste der unterstützten Nummerierungssystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.

#### Stiloptionen

Je nach verwendetem `style` können einige ignoriert werden und andere erforderlich sein:

- `style`
  - : Der zu verwendende Formatierungsstil.
    - `"decimal"` (Standard)
      - : Für die plain Nummernformatierung.
    - `"currency"`
      - : Für Währungsformatierung.
    - `"percent"`
      - : Für Prozentformatierung.
    - `"unit"`
      - : Für Einheitsformatierung.
- `currency`
  - : Die in der Währungsformatierung zu verwendende Währung. Mögliche Werte sind die ISO 4217 Währungs-Codes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro, oder `"CNY"` für den chinesischen RMB — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency` Eigenschaft angegeben werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung in der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokales Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" anstelle von "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Lokalen bedeutet das Rechnungsformat, die Zahl in Klammern zu setzen, anstatt ein Minuszeichen anzuhängen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die Einheit, die bei der `unit`-Formatierung verwendet werden soll. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgelistet. Paare einfacher Einheiten können mit "-per-" zu einer Verbundeinheit verkettet werden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit` Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der in der `unit`-Formatierung zu verwendende Einheitsformatierungsstil. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B., `16 l`.
    - `"narrow"`
      - : Z.B., `16l`.
    - `"long"`
      - : Z.B., `16 litres`.

#### Ziffernoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die Mindestanzahl von Ganzzahldezimalstellen, die verwendet werden soll. Ein Wert mit einer kleineren Anzahl von Ganzzahldezimalstellen als diese Zahl wird mit Nullen links aufgefüllt (auf die angegebene Länge), wenn formatiert. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die Mindestanzahl von Nachkommaziffern, die verwendet werden soll. Mögliche Werte sind von `0` bis `100`; der Standard für plain Nummern und Prozentformatierung ist `0`; der Standard für Währungsformatierung ist die Anzahl der Untereinheitsziffern, die von der [ISO 4217 Währungscode-Liste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt wird (2, wenn die Liste diese Informationen nicht bereitstellt). Siehe [Standardwerte der signifikanten Ziffern/Dezimalziffern](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `maximumFractionDigits`
  - : Die maximale Anzahl von Nachkommaziffern, die verwendet werden soll. Mögliche Werte sind von `0` bis `100`; der Standard für plain Nummernformatierung ist der größere Wert von `minimumFractionDigits` und `3`; der Standard für Währungsformatierung ist der größere Wert von `minimumFractionDigits` und der Anzahl der Untereinheitsziffern, die von der [ISO 4217 Währungscode-Liste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt wird (2, wenn die Liste diese Informationen nicht bereitstellt); der Standard für Prozentformatierung ist der größere Wert von `minimumFractionDigits` und 0. Siehe [Standardwerte der signifikanten Ziffern/Dezimalziffern](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `minimumSignificantDigits`
  - : Die Mindestanzahl von signifikanten Ziffern, die verwendet werden soll. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `1`. Siehe [Standardwerte der signifikanten Ziffern/Dezimalziffern](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl von signifikanten Ziffern, die verwendet werden soll. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `21`. Siehe [Standardwerte der signifikanten Ziffern/Dezimalziffern](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `roundingPriority`

  - : Gibt an, wie Rundungskonflikte gelöst werden, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind. Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis aus der Eigenschaft für signifikante Ziffern wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis aus der Eigenschaft, die zu mehr Genauigkeit führt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis aus der Eigenschaft, die zu weniger Genauigkeit führt, wird verwendet.

    Der Wert `"auto"` wird zu `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keine der vier Optionen "FractionDigits"/"SignificantDigits" gesetzt sind.

    Beachten Sie, dass für Werte, die nicht `auto` sind, das Ergebnis mit mehr Genauigkeit aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (minimale Einstellungen der nachkomma- und signifikanten Ziffern werden ignoriert).

- `roundingIncrement`

  - : Gibt das Inkrement an, mit dem gerundet werden soll, relativ zum berechneten Rundungsmaß. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`; der Standardwert ist `1`. Es kann nicht mit einer Rundung von signifikanten Ziffern oder einer anderen Einstellung von `roundingPriority` als `auto` kombiniert werden.

- `roundingMode`

  - : Wie Dezimalzahlen gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Rundet Richtung +∞. Positive Werte runden auf. Negative Werte runden "mehr positiv".
    - `"floor"`
      - : Rundet Richtung -∞. Positive Werte runden ab. Negative Werte runden "mehr negativ".
    - `"expand"`
      - : Rundet von 0 weg. Der _Betrag_ des Wertes wird immer durch Rundung erhöht. Positive Werte runden auf. Negative Werte runden "mehr negativ".
    - `"trunc"`
      - : Rundet Richtung 0. Der _Betrag_ des Wertes wird immer durch Rundung reduziert. Positive Werte runden ab. Negative Werte runden "weniger negativ".
    - `"halfCeil"`
      - : Bindet Richtung +∞. Werte über dem halben Inkrement runden wie `"ceil"` (Richtung +∞), darunter wie `"floor"` (Richtung -∞). Auf dem halben Inkrement runden die Werte wie `"ceil"`.
    - `"halfFloor"`
      - : Bindet Richtung -∞. Werte über dem halben Inkrement runden wie `"ceil"` (Richtung +∞), darunter wie `"floor"` (Richtung -∞). Auf dem halben Inkrement runden die Werte wie `"floor"`.
    - `"halfExpand"` (Standard)
      - : Bindet von 0 weg. Werte über dem halben Inkrement runden wie `"expand"` (von null weg), darunter wie `"trunc"` (Richtung 0). Auf dem halben Inkrement runden die Werte wie `"expand"`.
    - `"halfTrunc"`
      - : Bindet Richtung 0. Werte über dem halben Inkrement runden wie `"expand"` (von null weg), darunter wie `"trunc"` (Richtung 0). Auf dem halben Inkrement runden die Werte wie `"trunc"`.
    - `"halfEven"`
      - : Bindet zum nächsten geraden Ganzzahl. Werte über dem halben Inkrement runden wie `"expand"` (von null weg), darunter wie `"trunc"` (Richtung 0). Auf dem halben Inkrement runden die Werte zur nächsten geraden Ziffer.

    Diese Optionen spiegeln den [ICU Benutzerhandbuch](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, wobei "expand" und "trunc" auf ICU "UP" und "DOWN" abgebildet werden. Das [Rundungsmodus](#rundungsmodi) Beispiel unten zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige von nachgestellten Nullen bei Ganzzahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie nachgestellte Nullen gemäß `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Dezimalziffern, _wenn_ sie alle null sind. Dies ist dasselbe wie `"auto"`, wenn eine der Dezimalziffern ungleich null ist.

##### Standardwerte der signifikanten Ziffern/Dezimalziffern

Für die vier oben genannten Optionen (die `FractionDigits` und `SignificantDigits` Optionen) haben wir ihre Standardwerte erwähnt; diese Standards werden jedoch _nicht uneingeschränkt angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet wird, was von den Einstellungen[`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Insbesondere:

- Wenn `roundingPriority` nicht `"auto"` ist, dann gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits`-Option gesetzt ist, gelten die `SignificantDigits`-Optionen und die `FractionDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist und entweder mindestens eine `FractionDigits`-Option gesetzt ist oder `notation` nicht `"compact"` ist, gelten die `FractionDigits`-Optionen und die `SignificantDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist und keine der vier Optionen gesetzt sind, werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben genannten Standardwerten, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Die Formatierung, die für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Plain Nummernformat.
    - `"scientific"`
      - : Gibt die Größenordnung für formatierte Zahlen zurück.
    - `"engineering"`
      - : Gibt die Potenz von zehn zurück, wenn sie durch drei teilbar ist.
    - `"compact"`
      - : Zeichenkette, die die Potenz darstellt; verwendet standardmäßig die "kurze" Form.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standard ist `"short"`.
- `useGrouping`

  - : Ob Gruppentrennzeichen verwendet werden sollen, wie Tausendertrennzeichen oder Tausend/Lakh/Crore-Trennzeichen.

    - `"always"`
      - : Zeigt Gruppentrennzeichen an, auch wenn die Locale das nicht bevorzugt.
    - `"auto"`
      - : Zeigt Gruppentrennzeichen basierend auf der Locale-Präferenz an, die auch von der Währung abhängig sein kann.
    - `"min2"`
      - : Zeigt Gruppentrennzeichen nur an, wenn es mindestens 2 Ziffern in einer Gruppe gibt.
    - `true`
      - : Dasselbe wie `"always"`.
    - `false`
      - : Zeigt keine Gruppentrennzeichen an.

    Der Standard ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` sonst. Die String-Werte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenanzeige nur für negative Zahlen, einschließlich negativer Null.
    - `"always"`
      - : Zeigt immer das Vorzeichen an.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, aber nicht für Null.
    - `"negative"`
      - : Vorzeichenanzeige nur für negative Zahlen, ohne negative Null.
    - `"never"`
      - : Zeigt niemals das Vorzeichen an.

### Rückgabewert

Ein neues `Intl.NumberFormat` Objekt.

> [!NOTE]
> Der unten beschriebene Text erklärt ein Verhalten, das in der Spezifikation als "optional" markiert ist. Es kann nicht in allen Umgebungen funktionieren. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das ein [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (was nicht notwendigerweise bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde; nur dass es `Intl.NumberFormat.prototype` in seiner Prototypkette hat), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.NumberFormat`-Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]`-Eigenschaft versteckt ist (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass hier nur eine einzige tatsächliche `Intl.NumberFormat` Instanz vorhanden ist: die, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, aber das Aufrufen aller anderen Methoden (z. B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden nicht die Optionen der versteckten Instanz abfragen.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aber mit `this` auf etwas anderes, das kein `instanceof Intl.NumberFormat` ist, aufgerufen wird. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this`-Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat`-Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die aufgezählte Werte annimmt (wie `style`, `units`, `currency`, usw.), ist auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt und sie haben unterschiedliche Werte.
      Beachten Sie, dass abhängig von den verschiedenen Formatierungsoptionen diese Eigenschaften Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu bekommen, auch wenn Sie nur eine der Eigenschaften setzen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `options.style` Eigenschaft auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` festgelegt wurde.

## Beispiele

### Grundlegende Nutzung

In der Grundverwendung ohne Angabe einer Locale wird ein formatierter String in der Standard-Locale und mit Standardoptionen zurückgegeben.

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

### Einheitsformatierung

Wenn der `style` `'unit'` ist, muss eine `unit`-Eigenschaft angegeben werden. Optional steuert `unitDisplay` die Einheitsformatierung.

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

Wenn der `style` `'currency'` ist, muss eine `currency`-Eigenschaft angegeben werden. Optional steuern `currencyDisplay` und `currencySign` die Einheitsformatierung.

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

### Vorzeichen anzeigen

Zeigen Sie ein Vorzeichen für positive und negative Zahlen, aber nicht für Null:

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

Sie können die minimale oder maximale Anzahl von Dezimalstellen, Ganzzahldezimalstellen oder signifikanten Ziffern angeben, die beim Formatieren einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl signifikante als auch Dezimalstellengrenzen angegeben sind, hängt die tatsächliche Formatierung von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganzzahl- und Dezimalstellen-Eigenschaften geben die Anzahl der vor bzw. nach dem Dezimalpunkt anzuzeigenden Ziffern an. Wenn der anzuzeigende Wert weniger Ganzzahlen hat, als angegeben, wird er mit Nullen auf die erwartete Zahl links aufgefüllt. Hat er weniger Dezimalstellen, wird er rechts mit Nullen aufgefüllt. Beide Fälle sind unten dargestellt:

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

Hat ein Wert mehr Dezimalstellen als die angegebene Maximalzahl, wird er gerundet. Wie das erfolgt, hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab (weitere Details finden sich im Abschnitt [Rundungsmodi](#rundungsmodi)). Unten wird der Wert von fünf Dezimalstellen (`4.33145`) auf zwei (`4.33`) gerundet:

```js
// Display value shortened to maximum number of digits
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(4.33145),
);
// "4.33"
```

Die minimalen Dezimalstellen wirken sich nicht aus, wenn der Wert bereits mehr als 2 Dezimalstellen hat:

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
> Achten Sie auf Standardwerte, da sie die Formatierung beeinflussen können, auch wenn sie nicht im Code angegeben sind. Der Standardwert für maximale Ziffern ist `3` für einfache Werte, `2` für Währungen und kann für andere vordefinierte Typen unterschiedlich sein.

Der oben formatierte Wert wird auf 3 Ziffern gerundet, obwohl wir die maximale Ziffernanzahl nicht angegeben haben! Dies liegt daran, dass ein Standardwert für `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` bzw. `0`.

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

Die Anzahl der _signifikanten Ziffern_ ist die gesamte Anzahl der Ziffern einschließlich sowohl Ganzzahl- als auch Dezimalteilen. Die `maximumSignificantDigits` wird verwendet, um die gesamte Anzahl der Ziffern des ursprünglichen Wertes anzugeben, die angezeigt werden soll.

Die Beispiele unten zeigen, wie das funktioniert. Beachten Sie besonders den letzten Fall: nur die erste Ziffer wird beibehalten und die anderen werden verworfen/auf null gesetzt.

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

Die `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl von Ziffern angezeigt wird, indem gegebenenfalls Nullen an das Ende des Wertes angehängt werden.

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
> Achten Sie auf Standardwerte, da sie die Formatierung beeinflussen können. Wenn nur eine `SignificantDigits` Eigenschaft verwendet wird, wird ihr Gegenstück automatisch mit dem Standardwert angewendet. Die Standardwerte für maximale und minimale signifikante Ziffern sind 21 bzw. 1.

#### Gleichzeitige Angabe von signifikanten und Dezimalziffern

Die Dezimalstellen ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten, um zu kontrollieren, wie viele Dezimal- und führende Ziffern formatiert werden sollen. Wenn beide gleichzeitig verwendet werden, ist es möglich, dass sie in Konflikt geraten.

Diese Konflikte werden mithilfe der [`roundingPriority`](#roundingpriority) Eigenschaft gelöst. Standardmäßig hat sie den Wert `"auto"`, was bedeutet, dass wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#maximumsignificantdigits) angegeben ist, die Dezimal- und Ganzzahldezimalstellen ignoriert werden.

Zum Beispiel formatiert der unten stehende Code den Wert von `4.33145` mit `maximumFractionDigits: 3` und dann `maximumSignificantDigits: 2`, und dann beide. Der Wert mit beiden ist der, der mit `maximumSignificantDigits` eingestellt wurde.

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

Mit [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) zur Untersuchung des Formatters können wir sehen, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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

Zusätzlich zu `"auto"` können Sie Konflikte lösen, indem Sie [`roundingPriority`](#roundingpriority) als `"morePrecision"` oder `"lessPrecision"` angeben. Der Formatter berechnet die Genauigkeit unter Verwendung der Werte von `maximumSignificantDigits` und `maximumFractionDigits`.

Der unten stehende Code zeigt das ausgewählte Format für die drei verschiedenen Rundungsprioritäten:

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

Beachten Sie, dass der Algorithmus auf unintuitive Weise verhalten kann, wenn ein Minimalwert ohne Maximalwert angegeben wird. Das folgende Beispiel formatiert den Wert `1`, indem `minimumFractionDigits: 2` (formatieren zu `1.00`) und `minimumSignificantDigits: 2` (formatieren zu `1.0`) angegeben werden. Da `1.00` mehr Ziffern hat als `1.0`, sollte dies das Ergebnis sein, wenn `morePrecision` priorisiert wird, aber tatsächlich ist das Gegenteil der Fall:

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

Der Grund dafür ist, dass nur die "maximalen Präzisions"-Werte für die Berechnung verwendet werden und der Standardwert von `maximumSignificantDigits` erheblich höher ist als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis der Verwendung der angegebenen Dezimal- und signifikanten Ziffern unabhängig bewerten soll (unter Berücksichtigung von sowohl minimalen als auch maximalen Werten). Es wird dann die Option ausgewählt, die mehr Dezimalziffern anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist. Dies wird ein intuitiveres Verhalten für diesen Fall zur Folge haben.

### Rundungsmodi

Wenn ein Wert mehr Dezimalstellen hat, als die Konstrukturoptionen erlauben, wird der formatierte Wert auf die angegebene Anzahl von Dezimalstellen _gerundet_. Die _Art_ und Weise, wie der Wert gerundet wird, hängt von der[`roundingMode`](#roundingmode) Eigenschaft ab.

Zahlenformatierer verwenden standardmäßig `halfExpand` Rundung, die Werte am halben Inkrement "vom Nullpunkt weg" rundet (mit anderen Worten, der _Betrag_ des Wertes wird nach oben gerundet).

Für eine positive Zahl, wenn die zu entfernenden Dezimalstellen näher an das nächste Inkrement sind (oder auf dem halben Punkt), dann werden die verbleibenden Dezimalstellen nach oben gerundet, andernfalls werden sie abgerundet. Dies wird unten gezeigt: 2.23 gerundet auf zwei signifikante Ziffern wird auf 2.2 abgeschnitten, weil 2.23 weniger als das halbe Inkrement 2.25 ist, während Werte von 2.25 und größer nach oben auf 2.3 gerundet werden:

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

Eine negative Zahl am oder unter dem halben Inkrementpunkt wird ebenfalls vom Nullpunkt weggerundet (wird negativer):

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

Die folgende Tabelle zeigt die Auswirkungen verschiedener Rundungsmodi für positive und negative Werte, die am und um den halben Inkrement herum sind.

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

Wenn `halfEven` verwendet wird, hängt sein Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der obigen Tabelle dasselbe wie `halfTrunc`, weil die Magnituden aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, wird `halfEven` stattdessen wie `halfExpand` verhalten. Dieses Verhalten vermeidet eine konsistente Über- oder Unterschätzung von Halbinkrementen in einer großen Datenstichprobe.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Dezimalstellen auf ein anderes Inkrement als die nächste ganze Zahl runden. Zum Beispiel könnten Währungen, bei denen die kleinste Münze 5 Cent ist, den Wert auf Inkremente von 5 runden möchten, um Beträge widerzuspiegeln, die tatsächlich in bar bezahlt werden können.

Diese Art von Rundung kann mit der [`roundingIncrement`](#roundingincrement) Eigenschaft erreicht werden.

Wenn `maximumFractionDigits` zum Beispiel auf 2 gesetzt ist und `roundingIncrement` auf 5, wird die Zahl auf das nächste 0.05 gerundet:

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

Dieses besondere Muster wird als "Nickel-Rundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine 5-Cent-Münze in den USA ist. Zum Runden auf die nächsten 10 Cent ("Dime-Rundung") könnten Sie `roundingIncrement` auf `10` ändern.

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

Sie können auch [`roundingMode`](#roundingmode) verwenden, um den Rundungsalgorithmus zu ändern. Das folgende Beispiel zeigt, wie `halfCeil` Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des halben Rundungsinkrements und "mehr positiv", wenn oberhalb oder auf dem halben Inkrement, zu runden. Das inkrementierte Digit ist "0.05", sodass das halbe Inkrement bei .025 liegt (unten, dies wird bei 11.225 gezeigt).

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

Wenn Sie die Anzahl der Ziffern ändern müssen, denken Sie daran, dass sowohl `minimumFractionDigits` als auch `maximumFractionDigits` auf den gleichen Wert gesetzt werden müssen, oder ein `RangeError` wird ausgelöst.

`roundingIncrement` kann nicht mit einer Rundung von signifikanten Ziffern oder einer anderen Einstellung von `roundingPriority` als `auto` kombiniert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
