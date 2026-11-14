---
title: Intl.NumberFormat()-Konstruktor
short-title: Intl.NumberFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Der **`Intl.NumberFormat()`**-Konstruktor erstellt {{jsxref("Intl.NumberFormat")}}-Objekte.

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
> `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. In beiden Fällen wird eine neue `Intl.NumberFormat`-Instanz erstellt. Es gibt jedoch ein besonderes Verhalten, wenn der Aufruf ohne `new` erfolgt und der `this`-Wert eine andere `Intl.NumberFormat`-Instanz ist. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}, eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Gebietsschema-IDs. Wird `undefined` übergeben oder wird keine der angegebenen Gebietsschema-IDs unterstützt, wird das Standardgebietsschema der Laufzeitumgebung verwendet. Informationen zur allgemeinen Form und Interpretation des Arguments `locales` finden Sie in der [Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist zulässig:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch über `options` festgelegt werden (siehe unten). Werden beide angegeben, hat die Eigenschaft in `options` Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Zur besseren Übersicht ist die Liste der Eigenschaften nach ihrem Zweck unterteilt: [Gebietsschemaoptionen](#gebietsschemaoptionen), [Stiloptionen](#stiloptionen), [Ziffernoptionen](#ziffernoptionen) und [weitere Optionen](#weitere_optionen).

#### Gebietsschemaoptionen

- `localeMatcher`
  - : Der zu verwendende Algorithmus zum Abgleich von Gebietsschemas. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`.
    Informationen zu dieser Option finden Sie unter [Identifizierung und Aushandlung von Gebietsschemas](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das für die Zahlenformatierung zu verwendende Zahlensystem, beispielsweise `"arab"`, `"hanidec"` oder `"mathsans"`. Eine Liste unterstützter Zahlensystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Der Standardwert hängt vom Gebietsschema ab. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `nu` festgelegt werden. Werden beide angegeben, hat diese Eigenschaft in `options` Vorrang.

#### Stiloptionen

Abhängig vom verwendeten `style` werden einige dieser Optionen möglicherweise ignoriert, während andere erforderlich sind:

- `style`
  - : Der zu verwendende Formatierungsstil.
    - `"decimal"` (Standardwert)
      - : Für die einfache Zahlenformatierung.
    - `"currency"`
      - : Für die Währungsformatierung.
    - `"percent"`
      - : Für die Prozentformatierung.
    - `"unit"`
      - : Für die Formatierung mit Einheiten.
- `currency`
  - : Die für die Währungsformatierung zu verwendende Währung. Mögliche Werte sind ISO-4217-Währungscodes wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen Renminbi – siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert. Wenn `style` auf `"currency"` gesetzt ist, muss die Eigenschaft `currency` angegeben werden. Ihr Wert wird in Großbuchstaben umgewandelt.
- `currencyDisplay`
  - : Legt fest, wie die Währung bei der Währungsformatierung angezeigt wird.
    - `"code"`
      - : Den ISO-Währungscode verwenden.
    - `"symbol"` (Standardwert)
      - : Ein lokalisiertes Währungssymbol wie € verwenden.
    - `"narrowSymbol"`
      - : Ein schmales Währungssymbol verwenden („$100“ statt „US$100“).
    - `"name"`
      - : Einen lokalisierten Währungsnamen wie `"dollar"` verwenden.
- `currencySign`
  - : In vielen Gebietsschemas werden Zahlen im Buchhaltungsformat in Klammern gesetzt, statt ein Minuszeichen voranzustellen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die bei der Formatierung mit `unit` zu verwendende Einheit. Mögliche Werte sind unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgeführt. Zwei einfache Einheiten können mit „-per-“ zu einer zusammengesetzten Einheit verbunden werden. Es gibt keinen Standardwert. Wenn `style` auf `"unit"` gesetzt ist, muss die Eigenschaft `unit` angegeben werden.
- `unitDisplay`
  - : Der bei der Formatierung mit `unit` zu verwendende Stil für die Einheit. Mögliche Werte sind:
    - `"short"` (Standardwert)
      - : Beispielsweise `16 l`.
    - `"narrow"`
      - : Beispielsweise `16l`.
    - `"long"`
      - : Beispielsweise `16 litres`.

#### Ziffernoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die Mindestanzahl der zu verwendenden Ziffern vor dem Dezimaltrennzeichen. Ein Wert mit weniger solchen Ziffern wird bei der Formatierung links mit Nullen auf die angegebene Länge aufgefüllt. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die Mindestanzahl der zu verwendenden Nachkommastellen. Mögliche Werte liegen zwischen `0` und `100`. Der Standardwert für die einfache Zahlen- und Prozentformatierung ist `0`. Bei der Währungsformatierung entspricht der Standardwert der Anzahl der Nachkommastellen der Untereinheit gemäß der [ISO-4217-Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) (`2`, wenn die Liste dazu keine Angabe enthält). Wann dieser Standardwert angewendet wird, erfahren Sie unter [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values).
- `maximumFractionDigits`
  - : Die Höchstanzahl der zu verwendenden Nachkommastellen. Mögliche Werte liegen zwischen `0` und `100`. Bei der einfachen Zahlenformatierung ist der Standardwert der größere Wert von `minimumFractionDigits` und `3`. Bei der Währungsformatierung ist es der größere Wert von `minimumFractionDigits` und der Anzahl der Nachkommastellen der Untereinheit gemäß der [ISO-4217-Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) (`2`, wenn die Liste dazu keine Angabe enthält). Bei der Prozentformatierung ist es der größere Wert von `minimumFractionDigits` und 0. Wann dieser Standardwert angewendet wird, erfahren Sie unter [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values).
- `minimumSignificantDigits`
  - : Die Mindestanzahl der zu verwendenden signifikanten Ziffern. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`. Wann dieser Standardwert angewendet wird, erfahren Sie unter [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values).
- `maximumSignificantDigits`
  - : Die Höchstanzahl der zu verwendenden signifikanten Ziffern. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `21`. Wann dieser Standardwert angewendet wird, erfahren Sie unter [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values).
- `roundingPriority`
  - : Legt fest, wie Rundungskonflikte aufgelöst werden, wenn sowohl „FractionDigits“ ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch „SignificantDigits“ ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:
    - `"auto"` (Standardwert)
      - : Das Ergebnis der Eigenschaften für signifikante Ziffern wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis der Eigenschaft, die zu höherer Genauigkeit führt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis der Eigenschaft, die zu geringerer Genauigkeit führt, wird verwendet.

    Der Wert `"auto"` wird zu `"morePrecision"` normalisiert, wenn `notation` auf `"compact"` gesetzt ist und keine der vier „FractionDigits“-/„SignificantDigits“-Optionen festgelegt wurde.

    Beachten Sie, dass bei anderen Werten als `auto` das Ergebnis mit der höheren Genauigkeit anhand von [`maximumSignificantDigits`](#maximumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird. Die Einstellungen für die Mindestanzahl an Nachkommastellen und signifikanten Ziffern werden dabei ignoriert.

- `roundingIncrement`
  - : Gibt das Inkrement an, in dessen Schritten relativ zur berechneten Rundungsstelle gerundet wird. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`; der Standardwert ist `1`. Die Option kann weder mit einer Rundung nach signifikanten Ziffern noch mit einem anderen Wert für `roundingPriority` als `auto` kombiniert werden.

- `roundingMode`
  - : Legt fest, wie Dezimalzahlen gerundet werden. Mögliche Werte sind:
    - `"ceil"`
      - : Rundung in Richtung +∞. Positive Werte werden aufgerundet; negative Werte werden „positiver“ gerundet.
    - `"floor"`
      - : Rundung in Richtung -∞. Positive Werte werden abgerundet; negative Werte werden „negativer“ gerundet.
    - `"expand"`
      - : Rundung von 0 weg. Der _Betrag_ des Werts wird durch das Runden immer größer. Positive Werte werden aufgerundet; negative Werte werden „negativer“ gerundet.
    - `"trunc"`
      - : Rundung in Richtung 0. Der _Betrag_ des Werts wird durch das Runden immer kleiner. Positive Werte werden abgerundet; negative Werte werden „weniger negativ“ gerundet.
    - `"halfCeil"`
      - : Bei exakt halbem Inkrement wird in Richtung +∞ gerundet. Werte oberhalb des halben Inkrements werden wie bei `"ceil"` (in Richtung +∞) und Werte darunter wie bei `"floor"` (in Richtung -∞) gerundet. Bei exakt halbem Inkrement erfolgt die Rundung wie bei `"ceil"`.
    - `"halfFloor"`
      - : Bei exakt halbem Inkrement wird in Richtung -∞ gerundet. Werte oberhalb des halben Inkrements werden wie bei `"ceil"` (in Richtung +∞) und Werte darunter wie bei `"floor"` (in Richtung -∞) gerundet. Bei exakt halbem Inkrement erfolgt die Rundung wie bei `"floor"`.
    - `"halfExpand"` (Standardwert)
      - : Bei exakt halbem Inkrement wird von 0 weg gerundet. Werte oberhalb des halben Inkrements werden wie bei `"expand"` (von 0 weg) und Werte darunter wie bei `"trunc"` (in Richtung 0) gerundet. Bei exakt halbem Inkrement erfolgt die Rundung wie bei `"expand"`.
    - `"halfTrunc"`
      - : Bei exakt halbem Inkrement wird in Richtung 0 gerundet. Werte oberhalb des halben Inkrements werden wie bei `"expand"` (von 0 weg) und Werte darunter wie bei `"trunc"` (in Richtung 0) gerundet. Bei exakt halbem Inkrement erfolgt die Rundung wie bei `"trunc"`.
    - `"halfEven"`
      - : Bei exakt halbem Inkrement wird zur nächsten geraden Ziffer gerundet. Werte oberhalb des halben Inkrements werden wie bei `"expand"` (von 0 weg) und Werte darunter wie bei `"trunc"` (in Richtung 0) gerundet. Bei exakt halbem Inkrement erfolgt die Rundung zur nächsten geraden Ziffer.

    Diese Optionen entsprechen dem [ICU-Benutzerhandbuch](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html), in dem „expand“ und „trunc“ den ICU-Werten „UP“ beziehungsweise „DOWN“ entsprechen.
    Das folgende Beispiel zu [Rundungsmodi](#rundungsmodi) zeigt, wie die einzelnen Modi funktionieren.

- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige nachgestellter Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standardwert)
      - : Nachgestellte Nullen entsprechend `minimumFractionDigits` und `minimumSignificantDigits` beibehalten.
    - `"stripIfInteger"`
      - : Die Nachkommastellen entfernen, _wenn_ sie alle null sind. Enthält eine der Nachkommastellen einen anderen Wert als null, entspricht das Verhalten `"auto"`.

##### Standardwerte für SignificantDigits/FractionDigits

Für die vier obigen Optionen (die `FractionDigits`- und `SignificantDigits`-Optionen) wurden Standardwerte genannt. Diese werden jedoch _nicht bedingungslos angewendet_. Sie kommen nur zur Anwendung, wenn die jeweilige Eigenschaft tatsächlich verwendet wird. Das hängt von den Einstellungen für [`roundingPriority`](#roundingpriority) und [`notation`](#notation) ab. Im Einzelnen gilt:

- Wenn `roundingPriority` nicht `"auto"` ist, werden alle vier Optionen angewendet.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits`-Option festgelegt wurde, werden die `SignificantDigits`-Optionen angewendet und die `FractionDigits`-Optionen ignoriert.
- Wenn `roundingPriority` `"auto"` ist und entweder mindestens eine `FractionDigits`-Option festgelegt wurde oder `notation` nicht `"compact"` ist, werden die `FractionDigits`-Optionen angewendet und die `SignificantDigits`-Optionen ignoriert.
- Wenn `roundingPriority` `"auto"` und `notation` `"compact"` ist und keine der vier Optionen festgelegt wurde, werden sie unabhängig von den oben genannten Standardwerten auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt. Außerdem wird `roundingPriority` auf `"morePrecision"` gesetzt.

#### Weitere Optionen

- `notation`
  - : Die für die Zahl anzuzeigende Notation. Mögliche Werte sind:
    - `"standard"` (Standardwert)
      - : Einfache Zahlenformatierung.
    - `"scientific"`
      - : Die Größenordnung der formatierten Zahl ausgeben.
    - `"engineering"`
      - : Einen durch drei teilbaren Zehnerexponenten ausgeben.
    - `"compact"`
      - : Eine kompakte Darstellung der Größenordnung als String; standardmäßig wird die kurze Form verwendet.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` auf `"compact"` gesetzt ist. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.
- `useGrouping`
  - : Legt fest, ob Gruppentrennzeichen verwendet werden, beispielsweise Tausendertrennzeichen oder Trennzeichen für Tausender, Lakh und Crore.
    - `"always"`
      - : Gruppentrennzeichen auch dann anzeigen, wenn das Gebietsschema etwas anderes bevorzugt.
    - `"auto"`
      - : Gruppentrennzeichen entsprechend der Präferenz des Gebietsschemas anzeigen, die auch von der Währung abhängen kann.
    - `"min2"`
      - : Gruppentrennzeichen anzeigen, wenn eine Gruppe mindestens 2 Ziffern enthält.
    - `true`
      - : Entspricht `"always"`.
    - `false`
      - : Keine Gruppentrennzeichen anzeigen.

    Der Standardwert ist `"min2"`, wenn `notation` auf `"compact"` gesetzt ist, andernfalls `"auto"`. Die Stringwerte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Legt fest, wann das Vorzeichen der Zahl angezeigt wird. Mögliche Werte sind:
    - `"auto"` (Standardwert)
      - : Das Vorzeichen nur bei negativen Zahlen anzeigen, einschließlich der negativen Null.
    - `"always"`
      - : Das Vorzeichen immer anzeigen.
    - `"exceptZero"`
      - : Das Vorzeichen bei positiven und negativen Zahlen anzeigen, aber nicht bei null.
    - `"negative"`
      - : Das Vorzeichen nur bei negativen Zahlen anzeigen, ausgenommen die negative Null.
    - `"never"`
      - : Das Vorzeichen nie anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat`-Objekt.

> [!NOTE]
> Das nachfolgend beschriebene Verhalten ist in der Spezifikation als „optional“ gekennzeichnet. Es funktioniert möglicherweise nicht in allen Umgebungen. Prüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. In beiden Fällen wird eine neue `Intl.NumberFormat`-Instanz zurückgegeben. Wenn der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert jedoch ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (das bedeutet nicht unbedingt, dass es mit `new Intl.NumberFormat` erstellt wurde, sondern nur, dass sich `Intl.NumberFormat.prototype` in seiner Prototypkette befindet), wird stattdessen der `this`-Wert zurückgegeben. Das neu erstellte `Intl.NumberFormat`-Objekt wird dabei in einer Eigenschaft `[Symbol(IntlLegacyConstructedSymbol)]` verborgen (einem eindeutigen Symbol, das für mehrere Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.NumberFormat`-Instanz gibt: die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgene. Beim Aufruf der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) auf `formatter` werden die in dieser Instanz gespeicherten Optionen korrekt verwendet. Der Aufruf aller anderen Methoden, beispielsweise [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange), schlägt dagegen mit „TypeError: formatRange method called on incompatible Object“ fehl, weil diese Methoden die Optionen der verborgenen Instanz nicht berücksichtigen.

Dieses als `ChainNumberFormat` bezeichnete Verhalten tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, `this` aber auf etwas anderes gesetzt ist, das nicht `instanceof Intl.NumberFormat` ist. Bei einem direkten Aufruf als `Intl.NumberFormat()` ist der `this`-Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und es wird wie üblich eine neue `Intl.NumberFormat`-Instanz erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die nur festgelegte Werte akzeptiert (beispielsweise `style`, `unit` oder `currency`), ist auf einen ungültigen Wert gesetzt.
    - `minimumFractionDigits` ist größer als `maximumFractionDigits`.
    - `roundingIncrement` ist nicht `1`, und `maximumFractionDigits` und `minimumFractionDigits` sind auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass diese Eigenschaften abhängig von verschiedenen Formatierungsoptionen Standardwerte haben können.
      Dieser Fehler kann daher auch auftreten, wenn Sie nur eine der Eigenschaften festlegen.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die Eigenschaft `options.style` ist auf „unit“ oder „currency“ gesetzt, aber für die entsprechende Eigenschaft `options.unit` beziehungsweise `options.currency` wurde kein Wert festgelegt.
    - `roundingIncrement` ist nicht `1` und wird mit einer Rundung nach signifikanten Ziffern oder einem anderen Wert für `roundingPriority` als `"auto"` kombiniert.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe eines Gebietsschemas wird ein formatierter String im Standardgebietsschema und mit den Standardoptionen zurückgegeben.

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

### Formatierung mit Einheiten

Wenn `style` auf `'unit'` gesetzt ist, muss eine `unit`-Eigenschaft angegeben werden.
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

Wenn `style` auf `'currency'` gesetzt ist, muss eine `currency`-Eigenschaft angegeben werden. Optional steuern `currencyDisplay` und `currencySign` die Währungsformatierung.

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

### Wissenschaftliche, technische oder kompakte Notation

Die wissenschaftliche und die kompakte Notation werden über die Option `notation` festgelegt und können wie folgt formatiert werden:

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

Ein Vorzeichen für positive und negative Zahlen anzeigen, aber nicht für null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass beim Währungsformat `"accounting"` anstelle eines Minuszeichens Klammern verwendet werden können:

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

Sie können festlegen, wie viele Nachkommastellen, Vorkommastellen oder signifikante Ziffern bei der Formatierung einer Zahl mindestens oder höchstens angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl Grenzwerte für signifikante Ziffern als auch für Nachkommastellen angegeben werden, hängt die tatsächliche Formatierung von [`roundingPriority`](#roundingpriority) ab.

#### FractionDigits und IntegerDigits verwenden

Die Eigenschaften für Vor- und Nachkommastellen geben an, wie viele Ziffern vor beziehungsweise nach dem Dezimaltrennzeichen angezeigt werden.
Hat der anzuzeigende Wert weniger Vorkommastellen als angegeben, wird er links mit Nullen auf die geforderte Anzahl aufgefüllt.
Hat er weniger Nachkommastellen, wird er rechts mit Nullen aufgefüllt.
Beide Fälle werden im Folgenden gezeigt:

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

Hat ein Wert mehr Nachkommastellen als die angegebene Höchstanzahl, wird er gerundet.
_Wie_ gerundet wird, hängt von der Eigenschaft [`roundingMode`](#roundingmode) ab. Weitere Einzelheiten finden Sie im Abschnitt [Rundungsmodi](#rundungsmodi).
Im folgenden Beispiel wird der Wert von fünf Nachkommastellen (`4.33145`) auf zwei (`4.33`) gerundet:

```js
// Display value shortened to maximum number of digits
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(4.33145),
);
// "4.33"
```

Die Mindestanzahl an Nachkommastellen hat keine Auswirkung, wenn der Wert bereits mehr als 2 Nachkommastellen hat:

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
> Achten Sie auf Standardwerte: Sie können die Formatierung beeinflussen, auch wenn sie in Ihrem Code nicht angegeben sind.
> Der Standardwert für die Höchstanzahl an Nachkommastellen beträgt bei einfachen Zahlen `3` und bei Währungen `2`; für andere vordefinierte Typen können andere Werte gelten.

Der oben formatierte Wert wird auf 3 Nachkommastellen gerundet, obwohl wir keine Höchstanzahl angegeben haben!
Der Grund dafür ist, dass für `maximumFractionDigits` ein Standardwert festgelegt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` beziehungsweise `0`.

Sie können den Formatierer mit [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) untersuchen.

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

#### SignificantDigits verwenden

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtzahl der Ziffern vor und nach dem Dezimaltrennzeichen.
Mit `maximumSignificantDigits` geben Sie an, wie viele Ziffern des ursprünglichen Werts insgesamt angezeigt werden sollen.

Die folgenden Beispiele zeigen, wie dies funktioniert.
Beachten Sie insbesondere den letzten Fall: Nur die erste Ziffer bleibt erhalten; die übrigen werden verworfen beziehungsweise auf null gesetzt.

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

`minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl an Ziffern angezeigt wird. Falls erforderlich, werden am Ende des Werts Nullen angefügt.

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
> Wenn nur eine `SignificantDigits`-Eigenschaft verwendet wird, wird für die jeweils andere automatisch der Standardwert angewendet.
> Die Standardwerte für die Höchst- und Mindestanzahl signifikanter Ziffern betragen `21` beziehungsweise `1`.

#### Signifikante Ziffern und Nachkommastellen gleichzeitig festlegen

Sowohl die Nachkommastellen ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch die signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) bieten Möglichkeiten, die Anzahl der formatierten Nachkommastellen und führenden Ziffern zu steuern.
Werden beide gleichzeitig verwendet, können Konflikte entstehen.

Diese Konflikte werden mithilfe der Eigenschaft [`roundingPriority`](#roundingpriority) aufgelöst.
Ihr Standardwert ist `"auto"`. Das bedeutet: Wenn [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#maximumsignificantdigits) angegeben ist, werden die Eigenschaften für Nachkommastellen ignoriert.

Der folgende Code formatiert beispielsweise den Wert `4.33145` zunächst mit `maximumFractionDigits: 3`, dann mit `maximumSignificantDigits: 2` und schließlich mit beiden Optionen.
Wenn beide angegeben sind, entspricht das Ergebnis dem mit `maximumSignificantDigits` festgelegten Wert.

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

Wenn wir den Formatierer mit [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) untersuchen, sehen wir, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben ist.

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

Neben `"auto"` können Sie Konflikte auflösen, indem Sie [`roundingPriority`](#roundingpriority) auf `"morePrecision"` oder `"lessPrecision"` setzen.
Der Formatierer berechnet die Genauigkeit anhand der Werte von `maximumSignificantDigits` und `maximumFractionDigits`.

Der folgende Code zeigt, welches Format bei den drei verschiedenen Rundungsprioritäten ausgewählt wird:

```js
const maxFracNF = new Intl.NumberFormat("en", {
  maximumFractionDigits: 3,
});
console.log(`maximumFractionDigits:3 - ${maxFracNF.format(1.23456)}`);
// "maximumFractionDigits:3 - 1.235"

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

Beachten Sie, dass sich der Algorithmus unerwartet verhalten kann, wenn ein Mindestwert ohne Höchstwert angegeben wird.
Das folgende Beispiel formatiert den Wert `1` mit `minimumFractionDigits: 2` (ergibt `1.00`) und `minimumSignificantDigits: 2` (ergibt `1.0`).
Da `1.00` mehr Ziffern als `1.0` hat, wäre bei der Priorität `morePrecision` dieses Ergebnis zu erwarten. Tatsächlich ist es jedoch umgekehrt:

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

Das liegt daran, dass für die Berechnung nur die Werte für die „maximale Genauigkeit“ verwendet werden und der Standardwert von `maximumSignificantDigits` deutlich höher ist als der von `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen: Der Formatierer soll die Ergebnisse für die angegebenen Nachkommastellen und signifikanten Ziffern unabhängig voneinander ermitteln und dabei sowohl Mindest- als auch Höchstwerte berücksichtigen.
> Anschließend soll er bei `morePrecision` die Option mit mehr Nachkommastellen und bei `lessPrecision` die mit weniger Nachkommastellen auswählen.
> Das würde in diesem Fall zu einem intuitiveren Verhalten führen.

### Rundungsmodi

Hat ein Wert mehr Nachkommastellen, als die Konstruktoroptionen zulassen, wird der formatierte Wert auf die angegebene Anzahl an Nachkommastellen _gerundet_.
_Wie_ der Wert gerundet wird, hängt von der Eigenschaft [`roundingMode`](#roundingmode) ab.

Zahlenformatierer verwenden standardmäßig die Rundung `halfExpand`. Bei exakt halbem Inkrement wird dabei „von null weg“ gerundet – der _Betrag_ des Werts wird also aufgerundet.

Bei einer positiven Zahl werden die verbleibenden Nachkommastellen aufgerundet, wenn die zu entfernenden Nachkommastellen näher am nächsten Inkrement liegen oder genau auf halbem Weg dorthin sind. Andernfalls werden sie abgerundet.
Das folgende Beispiel zeigt: Auf zwei signifikante Ziffern gerundet wird 2.23 zu 2.2, weil 2.23 unter dem halben Inkrement von 2.25 liegt. Werte ab 2.25 werden dagegen auf 2.3 aufgerundet:

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

Eine negative Zahl, die auf oder unter dem Punkt des halben Inkrements liegt, wird ebenfalls von null weg gerundet (sie wird negativer):

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

Die folgende Tabelle zeigt die Auswirkungen der verschiedenen Rundungsmodi auf positive und negative Werte am Punkt des halben Inkrements und in dessen Nähe.

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

Bei `halfEven` hängt das Verhalten außerdem davon ab, ob die letzte Ziffer der gerundeten Zahl gerade oder ungerade ist. In der obigen Tabelle verhält sich `halfEven` beispielsweise wie `halfTrunc`, weil die Beträge aller Zahlen zwischen einer kleineren „geraden“ Zahl (2.2) und einer größeren „ungeraden“ Zahl (2.3) liegen. Liegen die Zahlen zwischen ±2.3 und ±2.4, verhält sich `halfEven` dagegen wie `halfExpand`. Dieses Verhalten verhindert, dass halbe Inkremente in großen Datensätzen systematisch unter- oder überschätzt werden.

### roundingIncrement verwenden

Manchmal sollen die verbleibenden Nachkommastellen nicht auf das nächste ganze Inkrement, sondern auf ein anderes Inkrement gerundet werden.
Bei Währungen, deren kleinste Münze 5 Cent wert ist, kann beispielsweise eine Rundung auf 5-Cent-Schritte sinnvoll sein, damit die Beträge tatsächlich bar bezahlt werden können.

Diese Art der Rundung lässt sich mit der Eigenschaft [`roundingIncrement`](#roundingincrement) erreichen.

Wenn beispielsweise `maximumFractionDigits` auf 2 und `roundingIncrement` auf 5 gesetzt ist, wird die Zahl auf den nächsten 0,05-Schritt gerundet:

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

Dieses Muster wird als „nickel rounding“ bezeichnet. „Nickel“ ist die umgangssprachliche Bezeichnung für eine US-amerikanische 5-Cent-Münze.
Für eine Rundung auf den nächsten 10-Cent-Schritt („dime rounding“) können Sie `roundingIncrement` auf `10` ändern.

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

Mit [`roundingMode`](#roundingmode) können Sie außerdem den Rundungsalgorithmus ändern.
Das folgende Beispiel zeigt, wie mit `halfCeil` ein Wert unterhalb des halben Rundungsinkrements „weniger positiv“ und ein Wert oberhalb oder genau auf diesem Punkt „positiver“ gerundet wird.
Das Inkrement beträgt „0.05“, sodass das halbe Inkrement bei .025 liegt (im folgenden Beispiel wird dies bei 11.225 gezeigt).

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

Wenn Sie die Anzahl der Nachkommastellen ändern möchten, beachten Sie, dass `minimumFractionDigits` und `maximumFractionDigits` beide auf denselben Wert gesetzt sein müssen. Andernfalls wird ein `RangeError` ausgelöst.

`roundingIncrement` kann weder mit einer Rundung nach signifikanten Ziffern noch mit einem anderen Wert für `roundingPriority` als `auto` kombiniert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
