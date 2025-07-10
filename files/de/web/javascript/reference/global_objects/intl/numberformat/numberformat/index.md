---
title: Intl.NumberFormat() Konstruktor
short-title: Intl.NumberFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`Intl.NumberFormat()`** Konstruktor erstellt {{jsxref("Intl.NumberFormat")}} Objekte.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat() constructor", "taller")}}

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

> [!NOTE]
> `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erstellen eine neue `Intl.NumberFormat` Instanz. Es gibt jedoch ein besonderes Verhalten, wenn es ohne `new` aufgerufen wird und der Wert von `this` eine andere `Intl.NumberFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) festgelegt werden. Wenn beide festgelegt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften basierend auf ihren Zwecken in Abschnitte unterteilt, einschließlich [Locale-Optionen](#locale-optionen), [Stiloptionen](#stiloptionen), [Ziffernoptionen](#ziffernoptionen) und [andere Optionen](#andere_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Abgleichsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`.
    Für Informationen zu dieser Option siehe [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem für die Zahlenformatierung, wie `"arab"`, `"hans"`, `"mathsans"`, usw. Für eine Liste unterstützter Nummerierungssystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch mit dem `nu` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.

#### Stiloptionen

Abhängig vom verwendeten `style` können einige von ihnen ignoriert und andere erforderlich sein:

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
  - : Die in der Währungsformatierung zu verwendende Währung. Mögliche Werte sind die ISO 4217-Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency` Eigenschaft bereitgestellt werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung in der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokales Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" anstelle von "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalen Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Locales bedeutet das Rechnungsformat, dass die Zahl in Klammern gesetzt wird, anstatt ein Minuszeichen anzuhängen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die in der `unit` Formatierung zu verwendende Einheit. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgeführt. Paare von einfachen Einheiten können mit "-pro-" kombiniert werden, um eine zusammengesetzte Einheit zu bilden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit` Eigenschaft bereitgestellt werden.
- `unitDisplay`
  - : Der in der `unit` Formatierung zu verwendende Einheitenformatierungsstil. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B., `16 l`.
    - `"narrow"`
      - : Z.B., `16l`.
    - `"long"`
      - : Z.B., `16 liter`.

#### Ziffernoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die minimale Anzahl an ganzzahligen Ziffern, die verwendet werden sollen. Ein Wert mit einer kleineren Anzahl ganzzahliger Ziffern als diese Zahl wird bei der Formatierung mit Nullen (auf die angegebene Länge) links aufgefüllt. Mögliche Werte reichen von `1` bis `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die minimale Anzahl von Nachkommastellen, die verwendet werden sollen. Mögliche Werte reichen von `0` bis `100`; der Standardwert für einfache Zahlen- und Prozentformatierung ist `0`; der Standardwert für die Währungsformatierung ist die Anzahl der im [ISO 4217-Währungscode-Verzeichnis](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellten Dezimalstellen (2, wenn die Liste diese Informationen nicht bereitstellt). Siehe [Standardwerte für Signifikante Ziffern/Nachkommastellen](#significantdigitsfractiondigits_default_values) dafür, wann dieser Standard angewendet wird.
- `maximumFractionDigits`
  - : Die maximale Anzahl von Nachkommastellen, die verwendet werden sollen. Mögliche Werte reichen von `0` bis `100`; der Standardwert für die einfache Zahlenformatierung ist die größere von `minimumFractionDigits` und `3`; der Standardwert für die Währungsformatierung ist die größere von `minimumFractionDigits` und der Anzahl der im [ISO 4217-Währungscode-Verzeichnis](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellten Dezimalstellen (2, wenn die Liste diese Informationen nicht bereitstellt); der Standardwert für die Prozentformatierung ist die größere von `minimumFractionDigits` und 0. Siehe [Standardwerte für Signifikante Ziffern/Nachkommastellen](#significantdigitsfractiondigits_default_values) dafür, wann dieser Standard angewendet wird.
- `minimumSignificantDigits`
  - : Die minimale Anzahl von signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte reichen von `1` bis `21`; der Standardwert ist `1`. Siehe [Standardwerte für Signifikante Ziffern/Nachkommastellen](#significantdigitsfractiondigits_default_values) dafür, wann dieser Standard angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl von signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte reichen von `1` bis `21`; der Standardwert ist `21`. Siehe [Standardwerte für Signifikante Ziffern/Nachkommastellen](#significantdigitsfractiondigits_default_values) dafür, wann dieser Standard angewendet wird.
- `roundingPriority`
  - : Bestimmen Sie, wie Rundungskonflikte gelöst werden sollen, wenn sowohl "Nachkommastellen" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "Signifikante Ziffern" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Das Ergebnis aus der Eigenschaft der signifikanten Ziffern wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis aus der Eigenschaft, die zu mehr Genauigkeit führt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis aus der Eigenschaft, die zu weniger Genauigkeit führt, wird verwendet.

    Der Wert `"auto"` wird auf `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keine der vier "Nachkommastellen"/"Signifikante Ziffern"-Optionen festgelegt sind.

    Beachten Sie, dass bei anderen Werten als `auto` das Ergebnis mit höherer Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (die Mindestwerte für signifikante und dezimale Ziffern werden ignoriert).

- `roundingIncrement`
  - : Gibt das Inkrement an, bei dem die Rundung im Verhältnis zur berechneten Rundungsmagnitude erfolgen soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`; der Standardwert ist `1`. Es kann nicht mit der Rundung von signifikanten Ziffern oder einer Einstellung von `roundingPriority` außer `auto` gemischt werden.

- `roundingMode`
  - : Wie Nachkommastellen gerundet werden sollen. Mögliche Werte sind:
    - `"ceil"`
      - : Runden Richtung +∞. Positive Werte runden auf. Negative Werte werden „mehr positiv“ gerundet.
    - `"floor"`
      - : Runden Richtung -∞. Positive Werte runden ab. Negative Werte werden „mehr negativ“ gerundet.
    - `"expand"`
      - : Runden weg von 0. Der _Betrag_ des Wertes wird immer durch das Runden erhöht. Positive Werte runden auf. Negative Werte werden „mehr negativ“ gerundet.
    - `"trunc"`
      - : Runden Richtung 0. Der _Betrag_ des Wertes wird immer durch das Runden reduziert. Positive Werte runden ab. Negative Werte werden „weniger negativ“ gerundet.
    - `"halfCeil"`
      - : Bindungen Richtung +∞. Werte oberhalb des Halbincrements runden wie `"ceil"` (Richtung +∞), und unterhalb wie `"floor"` (Richtung -∞). Beim Halbincrement runden Werte wie `"ceil"`.
    - `"halfFloor"`
      - : Bindungen Richtung -∞. Werte oberhalb des Halbincrements runden wie `"ceil"` (Richtung +∞), und unterhalb wie `"floor"` (Richtung -∞). Beim Halbincrement runden Werte wie `"floor"`.
    - `"halfExpand"` (Standard)
      - : Bindungen weg von 0. Werte oberhalb des Halbincrements runden wie `"expand"` (weg von null), und unterhalb wie `"trunc"` (Richtung 0). Beim Halbincrement runden Werte wie `"expand"`.
    - `"halfTrunc"`
      - : Bindungen Richtung 0. Werte oberhalb des Halbincrements runden wie `"expand"` (weg von null), und unterhalb wie `"trunc"` (Richtung 0). Beim Halbincrement runden Werte wie `"trunc"`.
    - `"halfEven"`
      - : Bindungen Richtung der nächsten geraden Ganzzahl. Werte oberhalb des Halbincrements runden wie `"expand"` (weg von null), und unterhalb wie `"trunc"` (Richtung 0). Beim Halbincrement runden Werte Richtung der nächsten geraden Ziffer.

    Diese Optionen entsprechen dem [ICU Benutzerhandbuch](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html), wobei "expand" und "trunc" zu ICU "UP" bzw. "DOWN" führen.
    Das [Rundungsmodi](#rundungsmodi) Beispiel unten zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zum Anzeigen nachfolgender Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie nachfolgende Nullen gemäß `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Nachkommastellen, _wenn_ sie alle Null sind. Dies entspricht `"auto"`, wenn eine der Nachkommastellen nicht null ist.

##### Standardwerte für Signifikante Ziffern/Nachkommastellen

Für die obigen vier Optionen (die `FractionDigits` und `SignificantDigits` Optionen) erwähnten wir ihre Standardwerte; jedoch werden diese Standardwerte _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet wird, was von den Einstellungen [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Genauer:

- Wenn `roundingPriority` nicht `"auto"` ist, gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits` Option festgelegt ist, gelten die `SignificantDigits` Optionen und die `FractionDigits` Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, und entweder mindestens eine `FractionDigits` Option festgelegt ist oder `notation` ist nicht `"compact"`, dann gelten die `FractionDigits` Optionen und die `SignificantDigits` Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` ist `"compact"`, und keine der vier Optionen festgelegt sind, dann werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben erwähnten Standardwerten, und `roundingPriority` ist auf `"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Die Formatierung, die für die Nummer angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfache Zahlenformatierung.
    - `"scientific"`
      - : Gibt den Größenordner der formatierten Zahl zurück.
    - `"engineering"`
      - : Gibt den Exponent von zehn zurück, wenn durch drei teilbar.
    - `"compact"`
      - : Zeichenfolge, die den Exponenten darstellt; verwendet standardmäßig die "kurze" Form.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"kurz"` und `"lang"`; der Standardwert ist `"kurz"`.
- `useGrouping`
  - : Ob Gruppierungstrenner, wie Tausendertrennzeichen oder Tausend/Lakh/Krore-Trennzeichen, verwendet werden sollen.
    - `"immer"`
      - : Zeigen Sie Gruppierungstrenner auch dann an, wenn die Locale dies nicht bevorzugt.
    - `"auto"`
      - : Zeigen Sie Gruppierungstrenner basierend auf dem Locale-Präferenz an, die auch währungsabhängig sein kann.
    - `"min2"`
      - : Zeigen Sie Gruppierungstrenner an, wenn mindestens 2 Ziffern in einer Gruppe stehen.
    - `wahr`
      - : Entspricht `"immer"`.
    - `falsch`
      - : Zeigen Sie keine Gruppierungstrenner an.

    Der Standardwert ist `"min2"` wenn `notation` `"compact"` ist, und ansonsten `"auto"`. Die Zeichenfolgenwerte `"wahr"` und `"falsch"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Anzeige des Vorzeichens nur bei negativen Zahlen, einschließlich negativer Null.
    - `"immer"`
      - : Immer Vorzeichen anzeigen.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, aber nicht für Null.
    - `"negativ"`
      - : Vorzeichenanzeige nur für negative Zahlen, ohne negative Null.
    - `"nie"`
      - : Zeigen Sie niemals das Vorzeichen an.

### Rückgabewert

Ein neues `Intl.NumberFormat` Objekt.

> [!NOTE]
> Der nachfolgende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" gekennzeichnet ist. Es könnte nicht in allen Umgebungen funktionieren. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat` Instanz zurückgegeben. Wenn der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) jedoch ein Objekt ist, das `instanceof` `Intl.NumberFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde; sondern dass es `Intl.NumberFormat.prototype` in seiner Prototypkette hat), dann wird der Wert von `this` zurückgegeben, mit dem neu erstellten `Intl.NumberFormat` Objekt, das in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft verborgen ist (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.NumberFormat` Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Wenn die [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format)- und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions)-Methoden an `formatter` aufgerufen werden, würden die in dieser Instanz gespeicherten Optionen korrekt verwendet, aber alle anderen Methodenaufrufe (z.B., [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würden mit „TypeError: formatRange method called on incompatible Object“ fehlschlagen, da diese Methoden die Optionen der verborgenen Instanz nicht konsultieren.

Dieses Verhalten, `ChainNumberFormat` genannt, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new`, jedoch mit `this` auf alles andere gesetzt, das nicht `instanceof Intl.NumberFormat` ist, aufgerufen wird. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der Wert von `this` [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat`-Instanz wird normalerweise erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die enumerierte Werte annimmt (wie `style`, `units`, `currency`, usw.), ist auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt und auf unterschiedliche Werte eingestellt.
      Beachten Sie, dass diese Eigenschaften je nach den verschiedenen Formatierungsoptionen Standardwerte haben können.
      Deshalb ist es möglich, diesen Fehler auch dann zu erhalten, wenn nur eine der Eigenschaften festgelegt ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft `options.style` auf "unit" oder "currency" festgelegt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` gesetzt wurde.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe einer Locale wird eine formatierte Zeichenfolge in der Standard-Locale und mit Standardoptionen zurückgegeben.

```js
const amount = 3500;

console.log(new Intl.NumberFormat().format(amount));
// '3,500' if in US English locale
```

### Formatierung von Dezimalzahlen und Prozenten

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
Optional steuert `unitDisplay` die Formatierung der Einheit.

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

Wenn der `style` `'currency'` ist, muss eine `currency` Eigenschaft bereitgestellt werden.
Optional steuern `currencyDisplay` und `currencySign` die Formatierung der Einheit.

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

### Anzeigen von Vorzeichen

Ein Vorzeichen für positive und negative Zahlen anzeigen, aber nicht für Null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass wenn das Währungssymbol "accounting" ist, Klammern anstelle eines Minuszeichens verwendet werden können:

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

Sie können die minimale oder maximale Anzahl von Nachkommastellen, ganzzahligen oder signifikanten Ziffern angeben, die bei der Formatierung einer Zahl angezeigt werden sollen.

> [!NOTE]
> Falls sowohl signifikante als auch dezimale Zifferngrenzen angegeben sind, hängt die tatsächliche Formatierung von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganzzahlen- und Nachkommastellen-Eigenschaften geben die Anzahl der Ziffern an, die vor bzw. nach dem Dezimalpunkt angezeigt werden sollen.
Wenn der anzuzeigende Wert weniger ganzzahlige Ziffern als angegeben hat, wird er mit Nullen links aufgefüllt, bis die erwartete Anzahl erreicht ist.
Wenn er weniger Nachkommastellen hat, wird er mit Nullen rechts aufgefüllt.
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

Wenn ein Wert mehr Nachkommastellen als die angegebene Höchstanzahl hat, wird er gerundet.
Die _Art_, wie er gerundet wird, hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab (weitere Details sind im Abschnitt [Rundungsmodi](#rundungsmodi) bereitgestellt).
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
> Achten Sie auf Standardwerte, da diese die Formatierung beeinflussen können, selbst wenn sie in Ihrem Code nicht angegeben sind.
> Der Standardwert für die maximale Ziffer ist `3` für einfache Werte, `2` für Währungen und kann für andere vordefinierte Typen verschiedene Werte haben.

Der oben formatierte Wert wird auf 3 Ziffern gerundet, selbst wenn wir die maximalen Ziffern nicht angegeben haben!
Das liegt daran, dass ein Standardwert von `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte für `maximumFractionDigits` und `minimumFractionDigits` sind `3` bzw. `0`.

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

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtanzahl der Ziffern einschließlich der Ganzzahlen- und Nachkommastellen.
Die `maximumSignificantDigits` wird verwendet, um die Gesamtanzahl an Ziffern aus dem ursprünglichen Wert anzugeben, die angezeigt werden sollen.

Die Beispiele unten zeigen, wie das funktioniert.
Beachten Sie insbesondere den letzten Fall: Nur die erste Ziffer wird beibehalten und die anderen werden verworfen/auf null gesetzt.

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

Die `minimumSignificantDigits` stellen sicher, dass mindestens die angegebene Anzahl von Ziffern angezeigt wird, indem bei Bedarf Nullen an das Ende des Werts angehängt werden.

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
> Achten Sie auf Standardwerte, da diese die Formatierung beeinflussen können.
> Wenn nur eine `SignificantDigits` Eigenschaft verwendet wird, wird ihr Gegenstück automatisch mit dem Standardwert angewendet.
> Die Standardwerte für die maximale und minimale Anzahl signifikanter Ziffern sind 21 bzw. 1.

#### Signifikante und Nachkommastellen gleichzeitig angeben

Die Nachkommastellen ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten, um zu steuern, wie viele Dezimal- und führende Ziffern formatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, können sie in Konflikt geraten.

Diese Konflikte werden mithilfe der [`roundingPriority`](#roundingpriority) Eigenschaft gelöst.
Standardmäßig hat diese den Wert `"auto"`, was bedeutet, dass wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#maximumsignificantdigits) angegeben ist, die Ganzzahlen- und Nachkommastellen-Eigenschaften ignoriert werden.

Zum Beispiel formatiert der Code unten den Wert `4.33145` mit `maximumFractionDigits: 3`, dann `maximumSignificantDigits: 2`, und dann beides.
Der Wert mit beiden Optionen ist derjenige, der mit `maximumSignificantDigits` gesetzt wurde.

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

Wenn [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) verwendet wird, um den Formatter zu inspizieren, können wir sehen, dass das zurückgegebene Objekt keine `maximumFractionDigits` enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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

Neben `"auto"` können Sie Konflikte lösen, indem Sie [`roundingPriority`](#roundingpriority) als `"morePrecision"` oder `"lessPrecision"` angeben.
Der Formatter berechnet die Genauigkeit anhand der Werte von `maximumSignificantDigits` und `maximumFractionDigits`.

Der Code unten zeigt, wie das Format für die drei verschiedenen Rundungsprioritäten ausgewählt wird:

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

Beachten Sie, dass der Algorithmus sich auf unerwartete Weise verhalten kann, wenn ein Minimalwert ohne einen Maximalwert angegeben wird.
Das Beispiel unten formatiert den Wert `1` mit `minimumFractionDigits: 2` (Formatierung auf `1.00`) und `minimumSignificantDigits: 2` (Formatierung auf `1.0`).
Da `1.00` mehr Ziffern als `1.0` hat, sollte dies das Ergebnis sein, wenn `morePrecision` priorisiert wird, aber tatsächlich ist das Gegenteil der Fall:

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
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei dem der Formatter das Ergebnis der Verwendung der angegebenen Dezimal- und signifikanten Ziffern unabhängig (unter Berücksichtigung von Minimum- und Maximalwerten) auswerten sollte.
> Es wird dann die Option gewählt, die mehr Dezimalstellen anzeigt, wenn `morePrecision` eingestellt ist, und weniger, wenn `lessPrecision` eingestellt ist.
> Dies wird zu einem intuitiveren Verhalten in diesem Fall führen.

### Rundungsmodi

Wenn ein Wert mehr Nachkommastellen hat, als durch die Konstruktoroptionen erlaubt, wird der formatierte Wert auf die angegebene Anzahl von Nachkommastellen gerundet.
Die _Art_, wie der Wert gerundet wird, hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab.

Zahlenformatierer verwenden standardmäßig `halfExpand` Rundung, die Werte "weg von null" beim Halbincrement rundet (mit anderen Worten, der _Betrag_ des Wertes wird nach oben gerundet).

Für eine positive Zahl, wenn die zu entfernenden Nachkommastellen näher an der nächsten Erhöhung (oder am Halbincrement) liegen, werden die verbleibenden Nachkommastellen aufgerundet, sonst werden sie abgerundet.
Dies wird unten gezeigt: 2.23 gerundet auf zwei signifikante Ziffern wird auf 2.2 gekürzt, da 2.23 weniger als das Halbincrement 2.25 ist, während Werte von 2.25 und größer auf 2.3 gerundet werden:

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

Eine negative Zahl auf oder unterhalb des Halbincrements wird ebenfalls weg von null gerundet (wird negativer):

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

Die Tabelle unten zeigt die Auswirkungen der verschiedenen Rundungsmodi für positive und negative Werte, die auf und um das Halbincrement liegen.

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

Bei Verwendung von `halfEven` hängt das Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Im obigen Beispiel entspricht das Verhalten von `halfEven` dem von `halfTrunc`, da die Beträge aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, verhält sich `halfEven` stattdessen wie `halfExpand`. Dieses Verhalten vermeidet eine konstante Unter- oder Überbewertung von Halbincrementen in einer großen Stichprobe.

### Verwendung von RoundingIncrement

Manchmal möchten wir die verbleibenden Nachkommastellen auf einen anderen Inkrement runden als die nächste Ganzzahl.
Zum Beispiel könnten Währungen, bei denen Münzen von 5 Cent die kleinste Einheit sind, den Wert in Schritten von 5 runden wollen, was die Beträge widerspiegelt, die tatsächlich in bar bezahlt werden können.

Diese Art der Rundung kann mit der [`roundingIncrement`](#roundingincrement) Eigenschaft erreicht werden.

Zum Beispiel, wenn `maximumFractionDigits` 2 ist und `roundingIncrement` 5 ist, dann wird die Zahl auf die nächste 0,05 gerundet:

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

Dieses spezielle Muster wird als "Nickel-Rundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine US-amerikanische 5-Cent-Münze ist.
Um auf den nächsten Zehncent-Betrag ("Dime-Rundung") zu runden, könnten Sie `roundingIncrement` auf `10` ändern.

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
Das Beispiel unten zeigt, wie `halfCeil` Rundung verwendet werden kann, um den Wert unter dem Halb-Rundungsinkrement "weniger positiv" und darüber oder bei dem Halbinkrement "mehr positiv" zu runden.
Das inkrementierte Digit ist "0,05", daher liegt das Halbincrement bei .025 (unten gezeigt bei 11.225).

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

`roundingIncrement` kann nicht mit der Rundung signifikante Ziffern oder einer anderen Einstellung von `roundingPriority` als `auto` gemischt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
