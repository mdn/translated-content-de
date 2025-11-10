---
title: Intl.NumberFormat() Konstruktor
short-title: Intl.NumberFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
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
> `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beides erstellt eine neue `Intl.NumberFormat`-Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und mit einem `this`-Wert, der eine andere `Intl.NumberFormat`-Instanz ist, aufgerufen wird; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Locale-Bezeichner. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Bezeichner unterstützt wird. Allgemeine Informationen zur Form und Interpretation des `locales`-Arguments finden Sie in [der Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften nach ihren Zwecken unterteilt, einschließlich [Locale-Optionen](#locale-optionen), [Stiloptionen](#stiloptionen), [Zahlenoptionen](#zahlenoptionen) und [weitere Optionen](#weitere_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Abgleich-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`.
    Informationen zu dieser Option finden Sie unter [Locale-Identifikation und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem für die Zahlformatierung, z. B. `"arab"`, `"hans"`, `"mathsans"`, usw. Eine Liste der unterstützten Nummerierungssystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types); der Standardwert ist von der Locale abhängig. Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide vorhanden sind, hat diese `options`-Eigenschaft Vorrang.

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
      - : Für Einheitformatierung.
- `currency`
  - : Die Währung, die in der Währungsformatierung verwendet werden soll. Mögliche Werte sind die ISO 4217-Währungscodes, z. B. `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB - siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency`-Eigenschaft angegeben werden. Sie wird auf Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung in der Währungsformatierung angezeigt wird.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokalisiertes Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" anstelle von "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Locales bedeutet das Rechnungsformat, die Zahl in Klammern zu setzen anstatt ein Minuszeichen anzuhängen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die Einheit, die in der `unit`-Formatierung verwendet werden soll. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgeführt. Paare einfacher Einheiten können mit "-per-" zu einer zusammengesetzten Einheit verbunden werden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit`-Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der zu verwendende Einheitformatierungsstil in der `unit`-Formatierung. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z. B. `16 l`.
    - `"narrow"`
      - : Z. B. `16l`.
    - `"long"`
      - : Z. B. `16 litres`.

#### Zahlenoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die minimale Anzahl der zu verwendenden Ganzzahldigits. Ein Wert mit einer kleineren Anzahl von Ganzzahldigits als diese Zahl wird beim Formatieren mit Nullen links aufgefüllt (auf die angegebene Länge). Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die minimale Anzahl der zu verwendenden Nachkommastellen. Mögliche Werte liegen zwischen `0` und `100`; der Standardwert für einfache Zahlen und Prozentformatierung ist `0`; der Standardwert für Währungsformatierung ist die Anzahl der Stellen von Nebenwährungseinheiten laut der [ISO 4217-Währungsliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) (2, wenn die Liste diese Information nicht liefert). Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values), um zu erfahren, wann dieser Standard angewendet wird.
- `maximumFractionDigits`
  - : Die maximale Anzahl der zu verwendenden Nachkommastellen. Mögliche Werte liegen zwischen `0` und `100`; der Standardwert für einfache Zahlenformatierung ist das Größere von `minimumFractionDigits` und `3`; der Standardwert für Währungsformatierung ist das Größere von `minimumFractionDigits` und der Anzahl der Stellen von Nebenwährungseinheiten laut der [ISO 4217-Währungsliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) (2, wenn die Liste diese Information nicht liefert); der Standardwert für Prozentformatierung ist das Größere von `minimumFractionDigits` und 0. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `minimumSignificantDigits`
  - : Die minimale Anzahl der zu verwendenden signifikanten Ziffern. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl der zu verwendenden signifikanten Ziffern. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `21`. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `roundingPriority`
  - : Gibt an, wie Rundungskonflikte aufgelöst werden, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Das Ergebnis von der signifikanten Zifferneigenschaft wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis von der Eigenschaft, die zu mehr Präzision führt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis von der Eigenschaft, die zu weniger Präzision führt, wird verwendet.

    Der Wert `"auto"` wird auf `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keine der vier "FractionDigits"/"SignificantDigits"-Optionen gesetzt sind.

    Beachten Sie, dass für andere Werte als `auto` das Ergebnis mit mehr Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (minimum Fractional- und signifikante Ziffereinstellungen werden ignoriert).

- `roundingIncrement`
  - : Gibt das Inkrement an, mit dem die Rundung relativ zur berechneten Rundungsmagnitud erfolgen soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, und `5000`; der Standardwert ist `1`. Es kann nicht mit signifikanten Ziffern-Rundung oder einer anderen Einstellung von `roundingPriority` als `auto` gemischt werden.

- `roundingMode`
  - : Wie Dezimalstellen gerundet werden sollen. Mögliche Werte sind:
    - `"ceil"`
      - : Runden zu +∞. Positive Werte runden auf. Negative Werte runden "positiver".
    - `"floor"`
      - : Runden zu -∞. Positive Werte runden ab. Negative Werte runden "negativer".
    - `"expand"`
      - : Runden weg von 0. Der _Betrag_ des Werts wird immer durch Runden erhöht. Positive Werte runden auf. Negative Werte runden "negativer".
    - `"trunc"`
      - : Runden zu 0. Der _Betrag_ des Werts wird immer durch Runden verringert. Positive Werte runden ab. Negative Werte runden "weniger negativ".
    - `"halfCeil"`
      - : Bindungen zu +∞. Werte oberhalb des Halbincrements runden wie `"ceil"` (zu +∞) und unterhalb wie `"floor"` (zu -∞). Auf den Halbincrement-Werten runden die Werte wie `"ceil"`.
    - `"halfFloor"`
      - : Bindungen zu -∞. Werte oberhalb des Halbincrements runden wie `"ceil"` (zu +∞) und unterhalb wie `"floor"` (zu -∞). Auf den Halbincrement-Werten runden die Werte wie `"floor"`.
    - `"halfExpand"` (Standard)
      - : Bindungen weg von 0. Werte oberhalb des Halbincrements runden wie `"expand"` (weg von null) und unterhalb wie `"trunc"` (zu 0). Auf den Halbincrement-Werten runden die Werte wie `"expand"`.
    - `"halfTrunc"`
      - : Bindungen zu 0. Werte oberhalb des Halbincrements runden wie `"expand"` (weg von null) und unterhalb wie `"trunc"` (zu 0). Auf den Halbincrement-Werten runden die Werte wie `"trunc"`.
    - `"halfEven"`
      - : Bindungen zur nächsten geraden Ganzzahl. Werte oberhalb des Halbincrements runden wie `"expand"` (weg von null) und unterhalb wie `"trunc"` (zu 0). Auf den Halbincrement-Werten runden die Werte zur nächsten geraden Ziffer.

    Diese Optionen spiegeln den [ICU Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, wobei "expand" und "trunc" zu ICU "UP" bzw. "DOWN" abgebildet werden.
    Das folgende Beispiel zu den [Rundungsmodi](#rundungsmodi) zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie für die Anzeige von nachgestellten Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie nachgestellte Nullen bei entsprechend `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Nachkommastellen _wenn_ sie alle Null sind. Dies entspricht `"auto"`, wenn eine der Nachkommastellen ungleich Null ist.

##### Standardwerte für SignificantDigits/FractionDigits

Für die vier Optionen oben (die `FractionDigits`- und `SignificantDigits`-Optionen) wurden ihre Standardwerte erwähnt; jedoch werden diese Standardwerte _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet wird, was von den Einstellungen von [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Konkret:

- Wenn `roundingPriority` nicht `"auto"` ist, dann gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits`-Option eingestellt ist, dann gelten die `SignificantDigits`-Optionen und die `FractionDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist und entweder mindestens eine `FractionDigits`-Option eingestellt ist oder `notation` nicht `"compact"` ist, dann gelten die `FractionDigits`-Optionen und die `SignificantDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist und keine der vier Optionen eingestellt ist, dann werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben erwähnten Standardwerten, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

#### Weitere Optionen

- `notation`
  - : Die Formatierung, die für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfache Zahlformatierung.
    - `"scientific"`
      - : Gibt die Größenordnung für die formatierte Zahl zurück.
    - `"engineering"`
      - : Gibt den Exponenten von zehn zurück, wenn er durch drei teilbar ist.
    - `"compact"`
      - : Zeichenkette, die einen Exponenten darstellt; standardmäßig wird die "kurze" Form verwendet.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.
- `useGrouping`
  - : Ob Gruppierungszeichen verwendet werden sollen, wie Tausendertrennzeichen oder Tausend/Lakh/Crore-Trennzeichen.
    - `"always"`
      - : Gruppierungszeichen anzeigen, auch wenn das Locale etwas anderes bevorzugt.
    - `"auto"`
      - : Gruppierungszeichen basierend auf der locale-Präferenz anzeigen, was auch währungsabhängig sein kann.
    - `"min2"`
      - : Gruppierungszeichen anzeigen, wenn sich mindestens 2 Ziffern in einer Gruppe befinden.
    - `true`
      - : Gleicht `"always"`.
    - `false`
      - : Keine Gruppierungszeichen anzeigen.

    Der Standardwert ist `"min2"` bei `notation` `"compact"` und `"auto"` ansonsten. Die Zeichenfolgenwerte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenanzeige nur für negative Zahlen, einschließlich negativer Null.
    - `"always"`
      - : Vorzeichen immer anzeigen.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, aber nicht für Null.
    - `"negative"`
      - : Vorzeichenanzeige nur für negative Zahlen, exklusive negativer Null.
    - `"never"`
      - : Vorzeichen nie anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat`-Objekt.

> [!NOTE]
> Der untenbeschriebene Text beschreibt ein Verhalten, das von der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Prüfen Sie die [Browser-Kompatibilitäts-Tabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat`-Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert ein Objekt ist, das ein [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde, sondern nur, dass es `Intl.NumberFormat.prototype` in seiner Prototypenkette hat), dann wird der Wert von `this` stattdessen zurückgegeben, mit dem neu erstellten `Intl.NumberFormat`-Objekt, das in einer `[Symbol(IntlLegacyConstructedSymbol)]`-Eigenschaft versteckt ist (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass hier nur eine tatsächliche `Intl.NumberFormat`-Instanz vorhanden ist: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions)-Methoden auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, aber das Aufrufen aller anderen Methoden (z. B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden die Optionen der versteckten Instanz nicht berücksichtigen.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, aber `this` auf etwas anderes gesetzt ist, das kein `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this`-Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat`-Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die aufzählbare Werte annimmt (z. B. `style`, `units`, `currency` usw.), wird auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt, und sie haben unterschiedliche Werte.
      Beachten Sie, dass diese Eigenschaften je nach verschiedenen Formatierungsoptionen Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu bekommen, auch wenn Sie nur eine der Eigenschaften festgelegt haben.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `options.style`-Eigenschaft auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` festgelegt wurde.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe eines Locale wird ein formatierter String in der Standard-Locale und mit Standardoptionen zurückgegeben.

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

### Einheitformatierung

Wenn der `style` `'unit'` ist, muss eine `unit`-Eigenschaft angegeben werden.
Optional steuert `unitDisplay` die Einheitformatierung.

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
angegeben werden. Optionale Eigenschaften `currencyDisplay` und
`currencySign` steuern die Einheitformatierung.

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

Wissenschaftliche und kompakte Notationen werden durch die `notation`-Option dargestellt und können so formatiert werden:

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

Zeigen Sie ein Vorzeichen für positive und negative Zahlen, aber nicht für null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass wenn das Währungszeichen "accounting" ist, Klammern anstelle eines Minuszeichens verwendet werden können:

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

Sie können die minimale oder maximale Anzahl von Nachkommastellen, ganzen oder signifikanten Ziffern angeben, die bei der Formatierung einer Zahl angezeigt werden.

> [!NOTE]
> Wenn sowohl signifikante als auch Nachkommastellenlimits angegeben sind, hängt die tatsächliche Formatierung vom [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Eigenschaften für ganze und Nachkommastellen geben die Anzahl der Ziffern an, die vor und nach dem Dezimalpunkt angezeigt werden sollen.
Wenn der anzuzeigende Wert weniger Ganze Ziffern hat als angegeben, wird er links mit Nullen aufgefüllt, um die erwartete Anzahl zu erreichen.
Wenn er weniger Nachkommastellen hat, wird er rechts mit Nullen aufgefüllt.
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

Wenn ein Wert mehr Nachkommastellen hat als die angegebene maximale Zahl, wird er gerundet.
Die _Art_ der Rundung hängt von der [`roundingMode`](#roundingmode)-Eigenschaft ab (mehr Details finden sich im Abschnitt [Rundungsmodi](#rundungsmodi)).
Im Folgenden wird der Wert von fünf Nachkommastellen (`4.33145`) auf zwei (`4.33`) gerundet:

```js
// Display value shortened to maximum number of digits
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(4.33145),
);
// "4.33"
```

Die minimalen Nachkommastellen haben keine Auswirkungen, wenn der Wert bereits mehr als 2 Nachkommastellen besitzt:

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
> Achten Sie auf Standardwerte, da diese das Format beeinflussen können, auch wenn sie nicht in Ihrem Code angegeben sind.
> Der Standardwert für maximale Digits ist `3` für einfache Werte, `2` für Währungen und kann für andere vordefinierte Typen unterschiedliche Werte haben.

Der oben formatierte Wert wird auf 3 Ziffern gerundet, obwohl wir die maximale Anzahl an Ziffern nicht spezifiziert haben!
Das liegt daran, dass ein Standardwert von `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` und `0`, jeweils.

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

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtanzahl an Ziffern einschließlich sowohl Ganz- als auch Nachkommastellen.
Das `maximumSignificantDigits` wird verwendet, um die Anzahl der Gesamtziffern aus dem ursprünglichen Wert anzugeben, die angezeigt werden.

Die folgenden Beispiele zeigen, wie dies funktioniert.
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

Das `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl von Ziffern angezeigt wird, wobei bei Bedarf Nullen an das Ende des Wertes angefügt werden.

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
> Wenn nur eine `SignificantDigits`-Eigenschaft verwendet wird, wird ihr Gegenstück mit dem Standardwert automatisch angewendet.
> Die Standardwerte für maximale und minimale signifikante Digitwerte sind jeweils 21 und 1.

#### Gleichzeitige Angabe von signifikanten und Nachkommastellen

Die Nachkommastellen ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikante Stellen ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten, um zu steuern, wie viele Nachkommastellen und führende Stellen formatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, können sie in Konflikt geraten.

Diese Konflikte werden mithilfe der [`roundingPriority`](#roundingpriority)-Eigenschaft aufgelöst.
Standardmäßig hat diese einen Wert von `"auto"`, was bedeutet, dass, wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#maximumsignificantdigits) angegeben ist, die Eigenschaften für ganzzahlige und Nachkommastellen ignoriert werden.

Zum Beispiel formatiert der folgende Code den Wert von `4.33145` mit `maximumFractionDigits: 3`, dann `maximumSignificantDigits: 2` und dann mit beiden.
Der Wert mit beiden ist der mit `maximumSignificantDigits` gesetzte.

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

Mit der Verwendung von [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions), um den Formatter zu überprüfen, können wir sehen, dass das zurückgegebene Objekt keine `maximumFractionDigits` enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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
Der Formatter berechnet die Präzision mithilfe der Werte von `maximumSignificantDigits` und `maximumFractionDigits`.

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

Beachten Sie, dass der Algorithmus auf eine unintuitive Weise verhalten kann, wenn ein Minimalwert ohne einen Maximalwert angegeben wird.
Das folgende Beispiel formatiert den Wert `1`, wobei `minimumFractionDigits: 2` (formatieren zu `1.00`) und `minimumSignificantDigits: 2` (formatieren zu `1.0`) angegeben werden.
Da `1.00` mehr Ziffern hat als `1.0`, sollte dies das Ergebnis bei Priorisierung von `morePrecision` sein, aber in Wirklichkeit ist das Gegenteil der Fall:

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

Der Grund dafür ist, dass nur die "maximale Präzision"-Werte für die Berechnung verwendet werden und der Standardwert von `maximumSignificantDigits` ist viel höher als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis der Verwendung der angegebenen Nachkommastellen und signifikanten Ziffern unabhängig (unter Berücksichtigung sowohl von Mindest- als auch Maximalwerten) bewerten sollte.
> Dann wird die Option ausgewählt, die mehr Nachkommastellen anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist.
> Dies wird zu einem intuitiveren Verhalten für diesen Fall führen.

### Rundungsmodi

Wenn ein Wert mehr Nachkommastellen hat, als durch die Konstruktoroptionen erlaubt, wird der formatierte Wert auf die angegebene Anzahl von Nachkommastellen _gerundet_.
Die _Art_, wie der Wert gerundet wird, hängt von der [`roundingMode`](#roundingmode)-Eigenschaft ab.

Nummernformatierer verwenden standardmäßig `halfExpand`-Rundung, die Werte beim Halbincrement "weg von null" rundet (mit anderen Worten, die _Größe_ des Wertes wird aufgerundet).

Für eine positive Zahl, wenn die zu entfernenden Nachkommastellen näher am nächsten Increment (oder am halben Punkt) sind, werden die verbleibenden Nachkommastellen aufgerundet, andernfalls werden sie abgerundet.
Dies wird unten gezeigt: 2.23, gerundet auf zwei signifikante Stellen, wird auf 2.2 gekürzt, weil 2.23 weniger als das Halbincrement 2.25 ist, während Werte von 2.25 und darüber auf 2.3 aufgerundet werden:

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

Eine negative Zahl auf oder unter dem Halbincrement wird ebenfalls _weg von null_ gerundet (wird negativer):

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

Die Tabelle unten zeigt die Auswirkungen unterschiedlicher Rundungsmodi für positive und negative Werte, die sich auf und um das Halbincrement befinden.

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

Beim Verwenden von `halfEven` hängt sein Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der obigen Tabelle das gleiche wie bei `halfTrunc`, weil die Größen aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, verhält sich `halfEven` stattdessen wie `halfExpand`. Dieses Verhalten vermeidet eine konsistente Über- oder Unterschätzung von Halbincrements in einer großen Datenstichprobe.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Nachkommastellen auf ein anderes Inkrement als die nächste Ganzzahl runden.
Zum Beispiel könnten Währungen, bei denen die kleinste Münze 5 Cent ist, den Wert auf 5er-Inkremente runden wollen, um Beträge widerzuspiegeln, die tatsächlich in Bar bezahlt werden können.

Diese Art der Rundung kann mit der [`roundingIncrement`](#roundingincrement)-Eigenschaft erreicht werden.

Zum Beispiel, wenn `maximumFractionDigits` 2 ist und `roundingIncrement` 5 ist, wird die Zahl auf die nächste 0.05 gerundet:

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

Dieses spezielle Muster wird als "Nickelrundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine USA 5 Cent Münze ist.
Um auf die nächsten 10 Cent ("Dimerundung") zu runden, könnten Sie `roundingIncrement` auf `10` ändern.

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
Das Beispiel unten zeigt, wie `halfCeil`-Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des Halbrundungsinkrements zu runden und "mehr positiv", wenn es darüber oder am Halbincrement liegt.
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

`roundingIncrement` kann nicht mit der Rundung signifikanter Ziffern oder irgendeiner Einstellung von `roundingPriority` außer `auto` gemischt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
