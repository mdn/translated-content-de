---
title: Intl.NumberFormat() Konstruktor
short-title: Intl.NumberFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
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
> `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Intl.NumberFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und der `this` Wert eine andere `Intl.NumberFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder eine {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keine der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` gesetzt werden (wie unten aufgeführt). Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften in Abschnitte unterteilt, basierend auf ihren Zwecken, darunter [Locale-Optionen](#locale-optionen), [Stiloptionen](#stiloptionen), [Ziffernoptionen](#ziffernoptionen) und [andere Optionen](#andere_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der Locale-Abgleichsalgorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`.
    Für Informationen zu dieser Option siehe [Lokale Identifikation und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das Nummerierungssystem, das für die Zahlenformatierung verwendet werden soll, wie `"arab"`, `"hans"`, `"mathsans"` usw. Für eine Liste der unterstützten Nummerierungssystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types); der Standardwert ist abhängig von der Locale. Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.

#### Stiloptionen

Abhängig vom verwendeten `style` können einige ignoriert und andere erforderlich sein:

- `style`
  - : Der zu verwendende Formatierungsstil.
    - `"decimal"` (Standard)
      - : Für die normale Zahlenformatierung.
    - `"currency"`
      - : Für Währungsformatierung.
    - `"percent"`
      - : Für Prozentformatierung.
    - `"unit"`
      - : Für Einheitenformatierung.
- `currency`
  - : Die Währung, die bei der Währungsformatierung verwendet werden soll. Mögliche Werte sind die ISO 4217 Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency` Eigenschaft angegeben werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung bei der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokales Währungssymbol, z.B. €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" anstelle von "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalen Währungsnamen, z.B. `"dollar"`.
- `currencySign`
  - : In vielen Locales bedeutet das Accounting-Format, die Zahl in Klammern zu setzen, anstatt ein Minuszeichen zu verwenden. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die Einheit, die bei der `unit` Formatierung verwendet werden soll. Mögliche Werte finden Sie in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers). Paare von einfachen Einheiten können mit "-per-" zu einer zusammengesetzten Einheit verknüpft werden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit` Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der Einheitenformatierungsstil, der bei der `unit` Formatierung verwendet werden soll. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B. `16 l`.
    - `"narrow"`
      - : Z.B. `16l`.
    - `"long"`
      - : Z.B. `16 litres`.

#### Ziffernoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die Mindestanzahl von ganzzahligen Ziffern, die verwendet werden sollen. Ein Wert mit weniger ganzzahligen Ziffern als diese Zahl wird mit Nullen aufgefüllt (auf die angegebene Länge), wenn er formatiert ist. Mögliche Werte reichen von `1` bis `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die Mindestanzahl von Dezimalstellen, die verwendet werden sollen. Mögliche Werte reichen von `0` bis `100`; der Standardwert für die normale Zahlen- und Prozentformatierung ist `0`; der Standardwert für die Währungsformatierung ist die Anzahl der kleinen Einheitsziffern, die von der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt werden (2, wenn die Liste diese Informationen nicht liefert). Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values) für wann dieser Standard angewendet wird.
- `maximumFractionDigits`
  - : Die maximale Anzahl von Dezimalstellen, die verwendet werden sollen. Mögliche Werte reichen von `0` bis `100`; der Standardwert für die normale Zahlenformatierung ist der größere Wert von `minimumFractionDigits` und `3`; der Standardwert für die Währungsformatierung ist der größere Wert von `minimumFractionDigits` und der Anzahl der kleinen Einheitsziffern, die von der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt werden (2, wenn die Liste diese Informationen nicht liefert); der Standardwert für die Prozentformatierung ist der größere Wert von `minimumFractionDigits` und `0`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values) für wann dieser Standard angewendet wird.
- `minimumSignificantDigits`
  - : Die Mindestanzahl von signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte reichen von `1` bis `21`; der Standardwert ist `1`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values) für wann dieser Standard angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl von signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte reichen von `1` bis `21`; der Standardwert ist `21`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values) für wann dieser Standard angewendet wird.
- `roundingPriority`
  - : Gibt an, wie Rundungskonflikte gelöst werden, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Das Ergebnis der signifikanten Zifferneigenschaft wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis der Eigenschaft, die zu mehr Präzision führt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis der Eigenschaft, die zu weniger Präzision führt, wird verwendet.

    Der Wert `"auto"` wird zu `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keine der vier "FractionDigits"/"SignificantDigits" Optionen gesetzt sind.

    Beachten Sie, dass bei anderen Werten als `auto` das Ergebnis mit mehr Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (Einstellungen für minimale Dezimal- und signifikante Ziffern werden ignoriert).

- `roundingIncrement`
  - : Gibt das Inkrement an, bei dem die Rundung im Verhältnis zur berechneten Rundungsgröße erfolgen soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`; der Standardwert ist `1`. Es kann nicht mit dem Runden von signifikanten Ziffern oder einer anderen Einstellung von `roundingPriority` als `auto` gemischt werden.

- `roundingMode`
  - : Wie Dezimalstellen gerundet werden sollen. Mögliche Werte sind:
    - `"ceil"`
      - : Rundung in Richtung +∞. Positive Werte werden aufgerundet. Negative Werte werden "positiver" gerundet.
    - `"floor"`
      - : Rundung in Richtung -∞. Positive Werte werden abgerundet. Negative Werte werden "negativer" gerundet.
    - `"expand"`
      - : Rundung weg von 0. Der _Wertumfang_ wird durch Rundung immer erhöht. Positive Werte werden aufgerundet. Negative Werte werden "negativer" gerundet.
    - `"trunc"`
      - : Rundung in Richtung 0. Der _Wertumfang_ wird durch Rundung immer verringert. Positive Werte werden abgerundet. Negative Werte werden "weniger negativ" gerundet.
    - `"halfCeil"`
      - : Ties in Richtung +∞. Werte über dem Halb-Inkrement runden wie `"ceil"` (in Richtung +∞), und darunter wie `"floor"` (in Richtung -∞). Auf dem Halb-Inkrement runden Werte wie `"ceil"`.
    - `"halfFloor"`
      - : Ties in Richtung -∞. Werte über dem Halb-Inkrement runden wie `"ceil"` (in Richtung +∞), und darunter wie `"floor"` (in Richtung -∞). Auf dem Halb-Inkrement runden Werte wie `"floor"`.
    - `"halfExpand"` (Standard)
      - : Ties weg von 0. Werte über dem Halb-Inkrement runden wie `"expand"` (weg von Null), und darunter wie `"trunc"` (in Richtung 0). Auf dem Halb-Inkrement runden Werte wie `"expand"`.
    - `"halfTrunc"`
      - : Ties in Richtung 0. Werte über dem Halb-Inkrement runden wie `"expand"` (weg von Null), und darunter wie `"trunc"` (in Richtung 0). Auf dem Halb-Inkrement runden Werte wie `"trunc"`.
    - `"halfEven"`
      - : Ties in Richtung der nächstgelegenen geraden Zahl. Werte über dem Halb-Inkrement runden wie `"expand"` (weg von Null), und darunter wie `"trunc"` (in Richtung 0). Auf dem Halb-Inkrement runden Werte zu der nächstgelegenen geraden Ziffer.

    Diese Optionen spiegeln den [ICU Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, wobei "expand" und "trunc" zu ICU "UP" bzw. "DOWN" führen.
    Das Beispiel [Rundungsmodi](#rundungsmodi) unten zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie für die Anzeige von nachlaufenden Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Halten Sie nachlaufende Nullen gemäß `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Dezimalstellen, _wenn_ sie alle Null sind. Dies ist das gleiche wie `"auto"`, wenn eine der Dezimalstellen ungleich Null ist.

##### SignificantDigits/FractionDigits Standardwerte

Für die vier oben genannten Optionen (die `FractionDigits` und `SignificantDigits` Optionen) haben wir ihre Standards erwähnt; jedoch werden diese Standards _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet wird, was von den Einstellungen von [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Genauer gesagt:

- Wenn `roundingPriority` nicht `"auto"` ist, dann gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits` Option gesetzt ist, dann gelten die `SignificantDigits` Optionen und die `FractionDigits` Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist und entweder mindestens eine `FractionDigits` Option gesetzt ist oder `notation` nicht `"compact"` ist, dann gelten die `FractionDigits` Optionen und die `SignificantDigits` Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist und keine der vier Optionen gesetzt sind, dann sind sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben erwähnten Standards, und `roundingPriority` ist auf `"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Die Formatierung, die für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Normale Zahlenformatierung.
    - `"scientific"`
      - : Gibt den Größenordner der formatierten Zahl zurück.
    - `"engineering"`
      - : Gibt den Exponenten von zehn zurück, wenn teilbar durch drei.
    - `"compact"`
      - : Zeichenkette, die den Exponenten darstellt; standardmäßig in der Kurzform.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.
- `useGrouping`
  - : Ob Gruppierungstrennzeichen verwendet werden sollen, wie Tausendertrennzeichen oder Tausend/Lakh/Crore-Trennzeichen.
    - `"always"`
      - : Gruppierungstrennzeichen anzeigen, auch wenn die Locale dies nicht bevorzugt.
    - `"auto"`
      - : Gruppierungstrennzeichen basierend auf der Locale-Präferenz anzeigen, die auch von der Währung abhängig sein kann.
    - `"min2"`
      - : Gruppierungstrennzeichen anzeigen, wenn mindestens 2 Ziffern in einer Gruppe vorhanden sind.
    - `true`
      - : Dasselbe wie `"always"`.
    - `false`
      - : Keine Gruppierungstrennzeichen anzeigen.

    Der Standardwert ist `"min2"` wenn `notation` `"compact"` ist, und `"auto"` ansonsten. Die Zeichenkettenwerte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichendarstellung nur für negative Zahlen, einschließlich negativer Null.
    - `"always"`
      - : Immer das Vorzeichen anzeigen.
    - `"exceptZero"`
      - : Vorzeichendarstellung für positive und negative Zahlen, jedoch nicht für Null.
    - `"negative"`
      - : Vorzeichendarstellung nur für negative Zahlen, ohne negative Null.
    - `"never"`
      - : Nie das Vorzeichen anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat` Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitäts-Tabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (das bedeutet nicht unbedingt, dass es über `new Intl.NumberFormat` erstellt wurde; es hat nur `Intl.NumberFormat.prototype` in seiner Prototypenkette), dann wird der Wert von `this` stattdessen zurückgegeben, mit dem neu erstellten `Intl.NumberFormat` Objekt versteckt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.NumberFormat` Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden die Optionen der versteckten Instanz nicht berücksichtigen.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new`, aber mit `this` auf etwas anderes aufgerufen wird, das nicht `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat` Instanz wird normalerweise erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die Werte aus einer Auswahlliste akzeptiert (wie `style`, `units`, `currency` usw.), ist auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt und auf unterschiedliche Werte eingestellt.
      Beachten Sie, dass je nach verschiedenen Formatierungsoptionen, diese Eigenschaften Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu erhalten, selbst wenn Sie nur eine der Eigenschaften gesetzt haben.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `options.style` Eigenschaft auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` gesetzt ist.

## Beispiele

### Grundlegende Verwendung

Bei grundlegender Verwendung ohne Angabe einer Locale wird ein formatierter String in der Standard-Locale und mit Standardoptionen zurückgegeben.

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

Zeigen Sie ein Vorzeichen für positive und negative Zahlen an, aber nicht für Null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass bei einem Währungszeichen "accounting" möglicherweise Klammern anstelle eines Minuszeichens verwendet werden:

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

Sie können die minimale oder maximale Anzahl an Dezimal-, Ganzzahl- oder signifikanten Ziffern angeben, die bei der Formatierung einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl signifikante als auch Dezimalzifferngrenzen angegeben sind, hängt die tatsächliche Formatierung von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Eigenschaften für Ganzzahl- und Bruchteile geben die Anzahl der Ziffern an, die vor und nach dem Dezimalpunkt angezeigt werden sollen.
Wenn der anzuzeigende Wert weniger Ganzzahlziffern als angegeben aufweist, wird er mit Nullen aufgefüllt, um die erwartete Anzahl zu erreichen.
Wenn er weniger Dezimalziffern aufweist, wird er mit Nullen rechtsseitig aufgefüllt.
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

Wenn ein Wert mehr Dezimalstellen als die angegebene maximale Anzahl aufweist, wird er gerundet.
Die _Art_, wie er gerundet wird, hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab (mehr Details werden im Abschnitt [Rundungsmodi](#rundungsmodi) bereitgestellt).
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
> Achten Sie auf Standardwerte, da sie das Format beeinflussen können, selbst wenn sie in Ihrem Code nicht angegeben sind.
> Der Standardwert für die maximale Ziffernanzahl beträgt `3` für einfache Werte, `2` für Währungen und kann für andere vordefinierte Typen unterschiedliche Werte haben.

Der obige formatierte Wert wird auf 3 Ziffern gerundet, obwohl wir die maximalen Ziffern nicht angegeben haben!
Dies liegt daran, dass ein Standardwert von `maximumFractionDigits` gesetzt ist, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` und `0`, beziehungsweise.

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

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtanzahl der Ziffern, einschließlich sowohl ganzzahligen als auch dezimalen Teilen.
`maximumSignificantDigits` wird verwendet, um die Gesamtanzahl der Ziffern des ursprünglichen Wertes anzugeben, die angezeigt werden sollen.

Die folgenden Beispiele zeigen, wie dies funktioniert.
Beachten Sie besonders den letzten Fall: Nur die erste Ziffer wird beibehalten, und die anderen werden verworfen/auf Null gesetzt.

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

`minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl von Ziffern angezeigt wird, wobei bei Bedarf Nullen an das Ende des Wertes angefügt werden.

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
> Wenn nur eine `SignificantDigits` Eigenschaft verwendet wird, wird ihr Gegenstück automatisch mit dem Standardwert angewendet.
> Die Standardwerte für die maximale und minimale signifikante Ziffernanzahl sind 21 bzw. 1.

#### Gleichzeitige Angabe signifikanter und Dezimalstellen

Die Fraction Ziffern ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikante Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Methoden zur Steuerung der Anzahl von Dezimal- und führenden Ziffern, die formatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, können sie möglicherweise in Konflikt geraten.

Diese Konflikte werden mithilfe der [`roundingPriority`](#roundingpriority) Eigenschaft gelöst.
Standardmäßig hat diese einen Wert von `"auto"`, was bedeutet, dass, wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#maximumsignificantdigits) angegeben ist, die Ganzzahl- und Dezimalstellen-Eigenschaften ignoriert werden.

Zum Beispiel formatiert der untenstehende Code den Wert von `4.33145` mit `maximumFractionDigits: 3`, und dann mit `maximumSignificantDigits: 2`, und dann mit beiden.
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

Durch die Verwendung von [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions), um den Formatter zu inspizieren, können wir sehen, dass das zurückgegebene Objekt `maximumFractionDigits` nicht einschließt, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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

Beachten Sie, dass der Algorithmus auf eine unintuitive Weise verhalten kann, wenn ein Mindestwert ohne einen Höchstwert angegeben ist.
Das folgende Beispiel formatiert den Wert `1`, wobei `minimumFractionDigits: 2` (Formatierung auf `1.00`) und `minimumSignificantDigits: 2` (Formatierung auf `1.0`) angegeben sind.
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

Der Grund dafür ist, dass nur die "maximale Präzisions-" Werte für die Berechnung verwendet werden, und der Standardwert von `maximumSignificantDigits` ist viel höher als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Modifikation des Algorithmus vorgeschlagen, bei dem der Formatter das Ergebnis unter Verwendung der angegebenen Dezimal- und signifikanten Ziffern unabhängig bewerten sollte (unter Berücksichtigung sowohl von Minimal- als auch Maximalwerten).
> Er würde dann die Option auswählen, die mehr Dezimalstellen anzeigt, wenn `morePrecision` gesetzt ist, und weniger wenn `lessPrecision` gesetzt ist.
> Dies würde zu einem intuitiveren Verhalten für diesen Fall führen.

### Rundungsmodi

Wenn ein Wert mehr Dezimalstellen aufweist, als durch die Konstrukturoptionen erlaubt sind, wird der formatierte Wert auf die angegebene Anzahl von Dezimalstellen _gerundet_.
Die _Art_, wie der Wert gerundet wird, hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab.

Zahlenformatter verwenden standardmäßig `halfExpand` Rundung, die Werte "weg von Null" am Halb-Inkrement rundet (mit anderen Worten, der _Wertumfang_ wird durch Rundung immer vergrößert).

Für eine positive Zahl, wenn die zu entfernenden Dezimalstellen näher am nächsten Inkrement (oder am halben Wegpunkt) sind, werden die verbleibenden Dezimalstellen aufgerundet, andernfalls werden sie abgerundet.
Dies wird unten gezeigt: 2.23 gerundet auf zwei signifikante Ziffern wird auf 2.2 verkürzt, weil 2.23 weniger als das Halb-Inkrement 2.25 ist, während Werte von 2.25 und größer auf 2.3 gerundet werden:

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

Eine negative Zahl am oder unterhalb des Halb-Inkrement-Punktes wird ebenfalls weg von Null gerundet (wird negativer):

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

Die folgende Tabelle zeigt die Auswirkungen verschiedener Rundungsmodi für positive und negative Werte, die am oder um das Halb-Inkrement liegen.

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

Bei Verwendung von `halfEven` hängt das Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der oben genannten Tabelle dasselbe wie `halfTrunc`, weil die Größen der Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, wird sich `halfEven` stattdessen wie `halfExpand` verhalten. Dieses Verhalten vermeidet, dass bei einer großen Datenprobe halb-integer Zwischenwerte konstant über- oder unterschätzt werden.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Dezimalstellen auf ein anderes Inkrement als das nächste ganzzahlige Inkrement runden.
Zum Beispiel können Währungen, für die die kleinste Münze 5 Cent beträgt, den Wert auf 5-Cent-Inkremente runden, um Beträge widerzuspiegeln, die tatsächlich in bar bezahlt werden können.

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

Dieses spezielle Muster wird als "Nickel Rundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine amerikanische 5-Cent-Münze ist.
Um auf die nächsten 10 Cent zu runden ("Dime Rundung"), könnten Sie `roundingIncrement` auf `10` ändern.

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
Das folgende Beispiel zeigt, wie `halfCeil` Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des Halb-Rundungsinkrements und "mehr positiv" über oder am Halb-Inkrement zu runden.
Die inkrementierte Ziffer ist "0.05", sodass das Halb-Inkrement bei 11.225 liegt.

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

`roundingIncrement` kann nicht mit dem Runden von signifikanten Ziffern oder irgendeiner Einstellung von `roundingPriority` außer `auto` gemischt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
