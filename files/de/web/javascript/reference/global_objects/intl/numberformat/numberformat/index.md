---
title: Intl.NumberFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
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

> **Note:** `Intl.NumberFormat()` kann sowohl mit als auch ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Methoden erstellen eine neue `Intl.NumberFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der `this` Wert eine andere `Intl.NumberFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` gesetzt werden (wie unten aufgeführt). Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften basierend auf ihrem Zweck in Abschnitte unterteilt, einschließlich [Locale-Optionen](#locale-optionen), [Stil-Optionen](#stil-optionen), [Ziffern-Optionen](#ziffern-optionen), und [andere Optionen](#andere_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`.
    Für Informationen über diese Option, siehe [Locale-Identifikation und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem für die Zahlenformatierung, z. B. `"arab"`, `"hans"`, `"mathsans"` usw. Für eine Liste der unterstützten Nummerierungssystemtypen, siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.

#### Stil-Optionen

Abhängig vom verwendeten `style` können einige ignoriert und andere erforderlich sein:

- `style`
  - : Der zu verwendende Formatierungsstil.
    - `"decimal"` (Standard)
      - : Für die normale Zahlformatierung.
    - `"currency"`
      - : Für die Währungsformatierung.
    - `"percent"`
      - : Für die Prozentformatierung.
    - `"unit"`
      - : Für die Einheitenformatierung.
- `currency`
  - : Die Währung, die in der Währungsformatierung verwendet werden soll. Mögliche Werte sind die ISO 4217 Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für die chinesische Renminbi — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency` Eigenschaft angegeben werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung in der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokales Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" statt "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"Dollar"`.
- `currencySign`
  - : In vielen Locales bedeutet das Buchhaltungsformat, dass die Zahl in Klammern gesetzt wird, anstatt ein Minuszeichen anzuhängen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die Einheit, die in `unit` Formatierung verwendet werden soll. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgelistet. Paare einfacher Einheiten können mit "-per-" zu einer zusammengesetzten Einheit verkettet werden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit` Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der zu verwendende Stil der Einheitenformatierung in der `unit` Formatierung. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B., `16 l`.
    - `"narrow"`
      - : Z.B., `16l`.
    - `"long"`
      - : Z.B., `16 litres`.

#### Ziffern-Optionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die minimale Anzahl von Ganzzahlziffern, die verwendet werden soll. Ein Wert mit weniger Ganzzahlziffern als diese Zahl wird mit Nullen aufgefüllt (auf die angegebene Länge), wenn er formatiert wird. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die minimale Anzahl von Dezimalstellen, die verwendet werden soll. Mögliche Werte sind von `0` bis `100`; der Standardwert für normale Zahl- und Prozentformatierung ist `0`; der Standardwert für Währungsformatierung ist die Anzahl der von der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellten Mindestwerteinheiten (2, wenn die Liste diese Informationen nicht bereitstellt). Siehe [Standardwerte der SignifikantenZiffern/Dezimalstellen](#significantdigitsfractiondigits_default_values), wann dieser Standardwert angewendet wird.
- `maximumFractionDigits`
  - : Die maximale Anzahl von Dezimalstellen, die verwendet werden soll. Mögliche Werte sind von `0` bis `100`; der Standardwert für normale Zahlformatierung ist das Größere von `minimumFractionDigits` und `3`; der Standardwert für Währungsformatierung ist das Größere von `minimumFractionDigits` und der Anzahl der von der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellten Mindestwerteinheiten (2, wenn die Liste diese Informationen nicht bereitstellt); der Standardwert für Prozentformatierung ist das Größere von `minimumFractionDigits` und 0. Siehe [Standardwerte der SignifikantenZiffern/Dezimalstellen](#significantdigitsfractiondigits_default_values), wann dieser Standardwert angewendet wird.
- `minimumSignificantDigits`
  - : Die minimale Anzahl von signifikanten Ziffern, die verwendet werden soll. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `1`. Siehe [Standardwerte der SignifikantenZiffern/Dezimalstellen](#significantdigitsfractiondigits_default_values), wann dieser Standardwert angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl von signifikanten Ziffern, die verwendet werden soll. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `21`. Siehe [Standardwerte der SignifikantenZiffern/Dezimalstellen](#significantdigitsfractiondigits_default_values), wann dieser Standardwert angewendet wird.
- `roundingPriority`

  - : Gibt an, wie Rundungskonflikte gelöst werden, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis der Eigenschaft für signifikante Ziffern wird verwendet.
    - `"morePrecision"`
      - : Wird das Ergebnis der Eigenschaft, die zu mehr Präzision führt, verwendet.
    - `"lessPrecision"`
      - : Wird das Ergebnis der Eigenschaft, die zu weniger Präzision führt, verwendet.

    Der Wert `"auto"` wird in `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keine der vier Optionen "FractionDigits"/"SignificantDigits" gesetzt ist.

    Beachten Sie, dass bei Werten ungleich `auto` das Ergebnis mit mehr Präzision von den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (Einstellungen für minimale Bruch- und signifikante Ziffern werden ignoriert).

- `roundingIncrement`

  - : Der Inkrement, bei dem die Rundung in Bezug auf die berechnete Rundungseinheit erfolgen soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`; der Standardwert ist `1`. Es kann nicht mit Rundungen von signifikanten Ziffern oder irgendeiner Einstellung von `roundingPriority` außer `auto` kombiniert werden.

- `roundingMode`

  - : Wie Dezimalstellen gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Runden nach +∞. Positive Werte werden aufgerundet. Negative Werte werden "positiver".
    - `"floor"`
      - : Nach -∞ runden. Positive Werte werden abgerundet. Negative Werte werden "negativer".
    - `"expand"`
      - : Weg von 0 runden. Der _Betrag_ des Wertes wird immer durch Rundung vergrößert. Positive Werte werden aufgerundet. Negative Werte werden "negativer".
    - `"trunc"`
      - : Auf 0 runden. Dieser _Betrag_ des Wertes wird immer durch Rundung verringert. Positive Werte werden abgerundet. Negative Werte werden "weniger negativ".
    - `"halfCeil"`
      - : Bindungen nach +∞. Werte über dem Halbincrement runden wie `"ceil"` (nach +∞), und darunter wie `"floor"` (nach -∞). Am Halbincrement runden Werte wie `"ceil"`.
    - `"halfFloor"`
      - : Bindungen nach -∞. Werte über dem Halbincrement runden wie `"ceil"` (nach +∞), und darunter wie `"floor"` (nach -∞). Am Halbincrement runden Werte wie `"floor"`.
    - `"halfExpand"` (Standard)
      - : Bindungen weg von 0. Werte über dem Halbincrement runden wie `"expand"` (weg von 0), und darunter wie `"trunc"` (in Richtung 0). Bei Halbincrement runden Werte wie `"expand"`.
    - `"halfTrunc"`
      - : Bindungen in Richtung 0. Werte über dem Halbincrement runden wie `"expand"` (weg von 0), und darunter wie `"trunc"` (in Richtung 0). Am Halbincrement runden Werte wie `"trunc"`.
    - `"halfEven"`
      - : Bindungen zum nächstgelegenen geraden ganzzahligen Wert. Werte über dem Halbincrement runden wie `"expand"` (weg von 0), und darunter wie `"trunc"` (in Richtung 0). Am Halbincrement runden Werte zum nächstgelegenen geraden ganzzahligen Wert.

    Diese Optionen spiegeln den [ICU Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, wobei "expand" und "trunc" der ICU "UP" bzw. "DOWN" zugeordnet werden.
    Das nachstehende Beispiel für [Rundungsmodi](#rundungsmodi) zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zum Anzeigen nachgestellter Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie nachgestellte Nullen gemäß `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Dezimalstellen _wenn_ sie alle Null sind. Dies ist dasselbe wie `"auto"`, wenn eine der Dezimalstellen ungleich Null ist.

##### Standardwerte der SignifikantenZiffern/Dezimalstellen

Für die vier oben genannten Optionen (die Optionen `FractionDigits` und `SignificantDigits`) haben wir ihre Standardwerte erwähnt; jedoch werden diese Standardwerte _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet wird, was von den Einstellungen [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Genauer gesagt:

- Wenn `roundingPriority` nicht `"auto"` ist, gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits` Option gesetzt ist, dann gelten die `SignificantDigits` Optionen und die `FractionDigits` Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist und entweder mindestens eine `FractionDigits` Option gesetzt ist oder `notation` nicht `"compact"` ist, dann gelten die `FractionDigits` Optionen und die `SignificantDigits` Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist und keine der vier Optionen gesetzt ist, dann werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben genannten Standardwerten, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Die Formatierung, die für die Zahl dargestellt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Normales Zahlenformat.
    - `"scientific"`
      - : Gibt die Größenordnung für die formatierte Zahl zurück.
    - `"engineering"`
      - : Gibt den Exponent von zehn zurück, wenn er durch drei teilbar ist.
    - `"compact"`
      - : String, der den Exponenten repräsentiert; standardmäßig wird die "kurze" Form verwendet.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.
- `useGrouping`

  - : Ob Gruppentrennzeichen verwendet werden sollen, wie Tausendertrennzeichen oder Tausend/Lakh/Crore Trennzeichen.

    - `"always"`
      - : Gruppentrennzeichen anzeigen, auch wenn es die Locale anders bevorzugt.
    - `"auto"`
      - : Gruppentrennzeichen basierend auf den Locale-Voreinstellungen anzeigen, die möglicherweise auch von der Währung abhängen.
    - `"min2"`
      - : Gruppentrennzeichen anzeigen, wenn es mindestens 2 Ziffern in einer Gruppe gibt.
    - `true`
      - : Dasselbe wie `"always"`.
    - `false`
      - : Keine Gruppentrennzeichen anzeigen.

    Der Standardwert ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` ansonsten. Die Stringwerte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichen wird nur für negative Zahlen angezeigt, einschließlich negativer Null.
    - `"always"`
      - : Vorzeichen immer anzeigen.
    - `"exceptZero"`
      - : Vorzeichen für positive und negative Zahlen anzeigen, aber nicht für Null.
    - `"negative"`
      - : Vorzeichen nur für negative Zahlen anzeigen, jedoch ohne negative Null.
    - `"never"`
      - : Vorzeichen nie anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat` Objekt.

> [!NOTE]
> Der unten aufgeführte Text beschreibt ein Verhalten, das von der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` sowohl mit als auch ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das `instanceof` `Intl.NumberFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde; es hat nur `Intl.NumberFormat.prototype` in seiner Prototypenkette), dann wird stattdessen der Wert von `this` zurückgegeben, mit dem neu erstellten `Intl.NumberFormat` Objekt verborgen in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.NumberFormat` Instanz gibt: die, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) bei `formatter` würde die Optionen dieser Instanz korrekt verwenden, aber das Aufrufen aller anderen Methoden (z. B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, weil diese Methoden nicht die Optionen der versteckten Instanz berücksichtigen.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, aber mit `this` auf alles andere gesetzt, das kein `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : In einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die enumerierte Werte erfordert (wie `style`, `units`, `currency` usw.), ist auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt und sie sind auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass abhängig von verschiedenen Formatierungsoptionen diese Eigenschaften Standardwerte haben können.
      Daher ist es möglich, diesen Fehler zu erhalten, selbst wenn Sie nur eine der Eigenschaften setzen.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn die Eigenschaft `options.style` auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` festgelegt wurde.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Nutzung ohne Angabe einer Locale wird ein formatierter String in der Standard-Locale und mit Standardoptionen zurückgegeben.

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

### Wissenschaftliche, technische oder kompakte Notationen

Wissenschaftliche und kompakte Notation werden durch die `notation` Option dargestellt und können so formatiert werden:

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

Ein Vorzeichen für positive und negative Zahlen, aber nicht für Null anzeigen:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass bei "accounting" als Währungsvorzeichen Klammern anstelle eines Minuszeichens verwendet werden können:

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

Sie können die minimale oder maximale Anzahl an Dezimalstellen, Ganzzahlen oder signifikanten Ziffern angeben, die beim Formatieren einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl signifikante als auch Bruchzifferngrenzen angegeben sind, hängt die eigentliche Formatierung von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganz- und Bruchstelleneigenschaften geben jeweils die Anzahl der Ziffern vor und nach dem Dezimalpunkt an.
Wenn der anzuzeigende Wert weniger Ganzzahlziffern als angegeben hat, wird er mit Nullen aufgefüllt, um die erwartete Zahl zu erreichen.
Wenn er weniger Dezimalstellen hat, wird er mit Nullen aufgefüllt.
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

Wenn ein Wert mehr Dezimalstellen hat als die angegebene maximale Anzahl, wird er gerundet.
Die _Art und Weise_, wie gerundet wird, hängt von der Eigenschaft [`roundingMode`](#roundingmode) ab (weitere Details finden Sie im Abschnitt [Rundungsmodi](#rundungsmodi)).
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

Die minimalen Dezimalstellen haben keinen Effekt, wenn der Wert bereits mehr als 2 Dezimalstellen hat:

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
> Seien Sie vorsichtig mit Standardwerten, da sie das Format beeinflussen können, auch wenn sie nicht in Ihrem Code angegeben sind.
> Der Standardwert für die maximale Digit-Anzahl ist `3` für normale Werte, `2` für Währungen, und kann für andere vordefinierte Typen unterschiedliche Werte haben.

Der oben formatierte Wert wird auf 3 Digits gerundet, obwohl wir die maximale Digit-Anzahl nicht angegeben haben!
Dies liegt daran, dass ein Standardwert für `maximumFractionDigits` festgelegt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` und `0`, jeweils.

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

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtanzahl der Ziffern, einschließlich sowohl der Ganzzahlen als auch der Dezimalstellen.
Die `maximumSignificantDigits` wird verwendet, um die Gesamtanzahl der Ziffern aus dem ursprünglichen Wert anzugeben, die angezeigt werden sollen.

Die untenstehenden Beispiele zeigen, wie dies funktioniert.
Beachten Sie insbesondere den letzten Fall: Nur die erste Ziffer wird beibehalten und die anderen werden verworfen/auf Null gesetzt.

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

Die `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl von Ziffern angezeigt wird, wobei bei Bedarf Nullen an das Ende des Wertes angefügt werden.

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
> Achten Sie auf Standardwerte, da diese das Format beeinflussen können.
> Wenn nur eine `SignificantDigits` Eigenschaft verwendet wird, wird ihr Gegenstück automatisch mit dem Standardwert angewendet.
> Die Standardwerte für maximale und minimale signifikante Digit-Zahlen sind 21 und 1, jeweils.

#### Gleichzeitige Angabe von signifikanten und Dezimalstellenziffern

Die Bruchziffern ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten, um zu steuern, wie viele Dezimal- und Ganzzahlenformatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, können sie in Konflikt geraten.

Diese Konflikte werden mit der Eigenschaft [`roundingPriority`](#roundingpriority) gelöst.
Standardmäßig hat dies den Wert `"auto"`, was bedeutet, dass, wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#maximumsignificantdigits) angegeben ist, die Bruch- und Ganzstelleneigenschaften ignoriert werden.

Zum Beispiel formatiert der untenstehende Code den Wert von `4.33145` mit `maximumFractionDigits: 3`, und dann `maximumSignificantDigits: 2`, und dann beides.
Der Wert mit beidem ist derjenige, der mit `maximumSignificantDigits` festgelegt wurde.

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

Mit [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) zur Inspektion des Formatters können wir sehen, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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
Der Formatter berechnet die Präzision unter Verwendung der Werte von `maximumSignificantDigits` und `maximumFractionDigits`.

Der folgende Code zeigt das Format, das für die drei unterschiedlichen Rundungsprioritäten ausgewählt wird:

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

Beachten Sie, dass der Algorithmus möglicherweise auf eine unintuitive Weise funktioniert, wenn ein Minimalwert ohne einen Maximalwert angegeben ist.
Das untenstehende Beispiel formatiert den Wert `1` mit Angabe von `minimumFractionDigits: 2` (Formatierung zu `1.00`) und `minimumSignificantDigits: 2` (Formatierung zu `1.0`).
Da `1.00` mehr Ziffern hat als `1.0`, sollte dies das Ergebnis sein, wenn `morePrecision` priorisiert wird, aber tatsächlich ist das Gegenteil der Fall:

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
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis der Verwendung der angegebenen Bruch- und signifikanten Ziffern unabhängig bewerten sollte (unter Berücksichtigung sowohl der minimalen als auch der maximalen Werte).
> Anschließend wird die Option ausgewählt, die mehr Dezimalstellen anzeigt, wenn `morePrecision` eingestellt ist, und weniger, wenn `lessPrecision` eingestellt ist.
> Dies wird zu einem intuitiveren Verhalten für diesen Fall führen.

### Rundungsmodi

Wenn ein Wert mehr Dezimalstellen hat als durch die Konstrukturoptionen erlaubt, wird der formatierte Wert auf die angegebene Anzahl von Dezimalstellen _gerundet_.
Die _Art und Weise_, in der der Wert gerundet wird, hängt von der Eigenschaft [`roundingMode`](#roundingmode) ab.

Zahlenformatierer verwenden standardmäßig `halfExpand` Rundung, die Werte "weg von null" am Halbincrement rundet (mit anderen Worten, die _Größe_ des Wertes wird aufgerundet).

Bei einer positiven Zahl, wenn die zu entfernenden Dezimalstellen näher am nächsten Increment (oder am Halbincrement) liegen, werden die verbleibenden Dezimalstellen aufgerundet, andernfalls werden sie abgerundet.
Dies ist unten gezeigt: 2.23 gerundet auf zwei signifikante Ziffern wird auf 2.2 gekürzt, da 2.23 weniger ist als das Halbincrement 2.25, während Werte von 2.25 und höher auf 2.3 aufgerundet werden:

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

Eine negative Zahl am oder unter dem Halbincrement wird ebenfalls weg von Null gerundet (wird negativer):

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

Die untenstehende Tabelle zeigt die Wirkung unterschiedlicher Rundungsmodi für positive und negative Werte, die auf und um das Halbincrement sind.

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

Bei Verwendung von `halfEven` hängt sein Verhalten auch von der Parität (gerade oder ungerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der obigen Tabelle dasselbe wie bei `halfTrunc`, da die Beträge aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, verhält sich `halfEven` stattdessen wie `halfExpand`. Dieses Verhalten vermeidet konsistente Unter- oder Überschätzungen von Halbincrementen in einem großen Datensatz.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Dezimalstellen auf ein anderes Inkrement als die nächste ganze Zahl runden.
Zum Beispiel können Währungen, bei denen die kleinste Münze 5 Cent ist, den Wert auf Inkremente von 5 runden möchten, was Beträge widerspiegelt, die tatsächlich in bar bezahlt werden können.

Diese Art der Rundung kann mit der [`roundingIncrement`](#roundingincrement) Eigenschaft erreicht werden.

Zum Beispiel, wenn `maximumFractionDigits` 2 ist und `roundingIncrement` 5 ist, dann wird die Zahl auf das nächste 0.05 gerundet:

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
Um auf die nächsten 10 Cent zu runden ("Dime-Rundung"), könnten Sie `roundingIncrement` auf `10` ändern.

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
Das folgende Beispiel zeigt, wie `halfCeil` Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des Halbrundungsinkrements und "positiver" darüber oder am Halbincrement zu runden.
Das inkrementierte Digit ist "0.05", sodass das Halbincrement bei .025 ist (unten wird dies bei 11.225 gezeigt).

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

Wenn Sie die Anzahl der Ziffern ändern müssen, denken Sie daran, dass `minimumFractionDigits` und `maximumFractionDigits` beide auf denselben Wert gesetzt werden müssen, oder ein `RangeError` wird ausgelöst.

`roundingIncrement` kann nicht mit Rundungen von signifikanten Ziffern oder irgendeiner Einstellung von `roundingPriority` außer `auto` kombiniert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
