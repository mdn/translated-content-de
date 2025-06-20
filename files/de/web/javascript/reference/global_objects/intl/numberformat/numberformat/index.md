---
title: Intl.NumberFormat() Konstruktor
short-title: Intl.NumberFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
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

> **Note:** `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide rufen eine neue `Intl.NumberFormat` Instanz auf. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und der `this`-Wert eine andere `Intl.NumberFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder einer {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` gesetzt werden (wie unten aufgeführt). Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Um die Lesbarkeit zu erleichtern, ist die Eigenschaftenliste in Abschnitte basierend auf ihren Zwecken unterteilt, einschließlich [Locale-Optionen](#locale-optionen), [Stil-Optionen](#stil-optionen), [Ziffern-Optionen](#ziffern-optionen) und [sonstige Optionen](#sonstige_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der Locale-Abgleichsalgorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`.
    Für Informationen zu dieser Option, siehe [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das Nummerierungssystem, das für die Nummernformatierung verwendet werden soll, wie z.B. `"arab"`, `"hans"`, `"mathsans"`, und so weiter. Für eine Liste unterstützter Nummerierungssystemtypen, siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt sind, hat diese `options`-Eigenschaft Vorrang.

#### Stil-Optionen

Je nach verwendetem `style` können einige von ihnen ignoriert und andere erfordert werden:

- `style`
  - : Der Formatierungsstil, der verwendet werden soll.
    - `"decimal"` (Standard)
      - : Für die einfache Nummernformatierung.
    - `"currency"`
      - : Für Währungsformatierung.
    - `"percent"`
      - : Für Prozentsatzformatierung.
    - `"unit"`
      - : Für Einheitenformatierung.
- `currency`
  - : Die Währung, die in der Währungsformatierung verwendet werden soll. Mögliche Werte sind die ISO 4217 Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen Renminbi — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency`-Eigenschaft bereitgestellt werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung in der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokalisiertes Währungssymbol, z.B. €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" anstelle von "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen, z.B. `"dollar"`.
- `currencySign`
  - : In vielen Locales bedeutet das Rechnungsformat, die Zahl in Klammern zu setzen, statt ein Minuszeichen hinzuzufügen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die Einheit, die in der `unit`-Formatierung verwendet werden soll. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgelistet. Paare einfacher Einheiten können mit "-per-" verbunden werden, um eine zusammengesetzte Einheit zu bilden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit`-Eigenschaft bereitgestellt werden.
- `unitDisplay`
  - : Der Einheitformatierungsstil, der in der `unit`-Formatierung verwendet werden soll. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B. `16 l`.
    - `"narrow"`
      - : Z.B. `16l`.
    - `"long"`
      - : Z.B. `16 litres`.

#### Ziffern-Optionen

Die folgenden Eigenschaften werden ebenfalls von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die Mindestanzahl von Ganzzahlziffern, die verwendet werden soll. Ein Wert mit einer kleineren Anzahl von Ganzzahlziffern als dieser Wert wird bei der Formatierung mit Nullen linksseitig aufgefüllt (auf die angegebene Länge). Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die Mindestanzahl von Nachkommastellen, die verwendet werden soll. Mögliche Werte liegen zwischen `0` und `100`; der Standardwert für die einfache Nummern- und Prozentsatzformatierung ist `0`; der Standardwert für die Währungsformatierung ist die Anzahl der in der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellten Stellen für Untereinheiten (2, wenn die Liste diese Information nicht bereitstellt). Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values), um zu sehen, wann diese Standardwerte angewendet werden.
- `maximumFractionDigits`
  - : Die maximale Anzahl von Nachkommastellen, die verwendet werden soll. Mögliche Werte liegen zwischen `0` und `100`; der Standardwert für die einfache Nummernformatierung ist das größere von `minimumFractionDigits` und `3`; der Standardwert für die Währungsformatierung ist das größere von `minimumFractionDigits` und der Anzahl der von der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellten Stellen für Untereinheiten (2, wenn die Liste diese Information nicht bereitstellt); der Standardwert für Prozentsatzformatierungen ist das größere von `minimumFractionDigits` und 0. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values), um zu sehen, wann dieser Standardwert angewendet wird.
- `minimumSignificantDigits`
  - : Die Mindestanzahl von signifikanten Ziffern, die verwendet werden soll. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values), um zu sehen, wann dieser Standardwert angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl von signifikanten Ziffern, die verwendet werden soll. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `21`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values), um zu sehen, wann dieser Standardwert angewendet wird.
- `roundingPriority`

  - : Geben Sie an, wie Rundungskonflikte gelöst werden sollen, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) spezifiziert sind. Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis aus der signifikanten Zifferneigenschaft wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis aus der Eigenschaft, die genauer ist, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis aus der Eigenschaft, die weniger genau ist, wird verwendet.

    Der Wert `"auto"` wird normalisiert auf `"morePrecision"`, wenn `notation` `"compact"` ist und keine der vier "FractionDigits"/"SignificantDigits"-Optionen gesetzt wurden.

    Beachten Sie, dass bei anderen Werten als `auto` das Ergebnis mit mehr Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (Mindestnachkommastellen- und signifikante Ziffereinstellungen werden ignoriert).

- `roundingIncrement`

  - : Gibt die Erhöhung an, bei der gerundet werden soll, relativ zur berechneten Rundungsgröße. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`; der Standardwert ist `1`. Es kann nicht mit signifikanten Ziffernrundungen oder irgendeiner Einstellung von `roundingPriority` außer `auto` gemischt werden.

- `roundingMode`

  - : Wie Dezimalzahlen gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Rundet Richtung +∞. Positive Werte runden auf. Negative Werte "runden positiver".
    - `"floor"`
      - : Rundet Richtung -∞. Positive Werte runden ab. Negative Werte "runden negativer".
    - `"expand"`
      - : Rundet weg von 0. Die _Größe_ des Wertes wird durch das Runden immer erhöht. Positive Werte runden auf. Negative Werte "runden negativer".
    - `"trunc"`
      - : Rundet Richtung 0. Die _Größe_ des Wertes wird durch das Runden immer reduziert. Positive Werte runden ab. Negative Werte "runden weniger negativ".
    - `"halfCeil"`
      - : Bindungen Richtung +∞. Werte über dem Halb-Inkrement runden wie `"ceil"` (Richtung +∞), und darunter wie `"floor"` (Richtung -∞). Auf dem Halb-Inkrement runden Werte wie `"ceil"`.
    - `"halfFloor"`
      - : Bindungen Richtung -∞. Werte über dem Halb-Inkrement runden wie `"ceil"` (Richtung +∞), und darunter wie `"floor"` (Richtung -∞). Auf dem Halb-Inkrement runden Werte wie `"floor"`.
    - `"halfExpand"` (Standard)
      - : Bindungen weg von 0. Werte über dem Halb-Inkrement runden wie `"expand"` (weg von Null), und darunter wie `"trunc"` (Richtung 0). Auf dem Halb-Inkrement runden Werte wie `"expand"`.
    - `"halfTrunc"`
      - : Bindungen Richtung 0. Werte über dem Halb-Inkrement runden wie `"expand"` (weg von Null), und darunter wie `"trunc"` (Richtung 0). Auf dem Halb-Inkrement runden Werte wie `"trunc"`.
    - `"halfEven"`
      - : Bindungen Richtung nächste ganze Zahl. Werte über dem Halb-Inkrement runden wie `"expand"` (weg von Null), und darunter wie `"trunc"` (Richtung 0). Auf dem Halb-Inkrement runden Werte Richtung der nächsten geraden Ziffer.

    Diese Optionen spiegeln den [ICU Benutzerhandbuch](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, bei dem "expand" und "trunc" auf ICU "UP" bzw. "DOWN" abbilden.
    Das Beispiel [Rundungsmodi](#rundungsmodi) zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige der führenden Nullen bei Ganzzahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie die führenden Nullen gemäß `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Die Nachkommastellen entfernen, _wenn_ sie alle Null sind. Das ist dasselbe wie `"auto"`, wenn einer der Nachkommastellen ungleich Null ist.

##### SignificantDigits/FractionDigits Standardwerte

Für die vier oben genannten Optionen (die `FractionDigits` und `SignificantDigits` Optionen) sind deren Standardwerte angegeben; diese Standardwerte werden jedoch _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet werden soll, was von den Einstellungen [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Insbesondere:

- Wenn `roundingPriority` nicht `"auto"` ist, dann gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits` Option gesetzt ist, dann werden die `SignificantDigits` Optionen angewendet und die `FractionDigits` Optionen ignoriert.
- Wenn `roundingPriority` `"auto"` ist und entweder mindestens eine `FractionDigits` Option gesetzt ist oder `notation` nicht `"compact"` ist, dann werden die `FractionDigits` Optionen angewendet und die `SignificantDigits` Optionen ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` und keine der vier Optionen gesetzt sind, dann werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben genannten Standardwerten, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

#### Sonstige Optionen

- `notation`
  - : Die Formatierung, die für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfache Nummernformatierung.
    - `"scientific"`
      - : Geben Sie die Größenordnung für die formatierte Zahl an.
    - `"engineering"`
      - : Geben Sie den Exponenten von Zehn an, wenn er durch drei teilbar ist.
    - `"compact"`
      - : String, der den Exponenten darstellt; standardmäßig wird die kurze Form verwendet.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.
- `useGrouping`

  - : Ob Gruppierungszeichen wie Tausendertrennzeichen oder Tausend/Lakh/Crore-Trennzeichen verwendet werden sollen.

    - `"always"`
      - : Gruppierungszeichen werden angezeigt, auch wenn das Locale es vorzieht, sie anders darzustellen.
    - `"auto"`
      - : Gruppierungszeichen werden basierend auf der Locale-Vorliebe angezeigt, die möglicherweise auch von der Währung abhängig ist.
    - `"min2"`
      - : Gruppierungszeichen werden angezeigt, wenn es mindestens 2 Ziffern in einer Gruppe gibt.
    - `true`
      - : Dasselbe wie `"always"`.
    - `false`
      - : Keine Gruppierungszeichen anzeigen.

    Der Standardwert ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` sonst. Die String-Werte `"true"` und `"false"` werden akzeptiert, werden jedoch immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenanzeige nur für negative Zahlen, einschließlich negativer Null.
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
> Der untenstehende Text beschreibt Verhalten, das von der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (nicht unbedingt bedeutet dies, dass es über `new Intl.NumberFormat` erstellt wurde; es muss lediglich die `Intl.NumberFormat.prototype` in seiner Prototypenkette haben), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.NumberFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft verborgen ist (ein eindeutiges Symbol, das zwischen Instanzen gemeinsam genutzt wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.NumberFormat` Instanz gibt: die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgene. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden die Optionen der verborgenen Instanz nicht berücksichtigen.

Dieses Verhalten, das `ChainNumberFormat` genannt wird, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, jedoch mit `this`, das auf etwas anderes gesetzt ist, das keine `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat` Instanz wird normalerweise erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die enumerierte Werte akzeptiert (wie `style`, `units`, `currency` und so weiter) wird auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt, und sie sind auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass je nach verschiedenen Formatierungsoptionen diese Eigenschaften Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu erhalten, selbst wenn Sie nur eine der Eigenschaften setzen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `options.style` Eigenschaft auf "unit" oder "currency" gesetzt ist und kein Wert für die zugehörige Eigenschaft `options.unit` oder `options.currency` gesetzt wurde.

## Beispiele

### Grundlegende Nutzung

Bei der grundlegenden Verwendung ohne eine Lokalisierung anzugeben, wird ein formatierter String in der Standard-Lokalisierung und mit Standardeinstellungen zurückgegeben.

```js
const amount = 3500;

console.log(new Intl.NumberFormat().format(amount));
// '3,500' if in US English locale
```

### Dezimal- und Prozentsatzformatierung

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

Wenn der `style` `'unit'` ist, muss eine `unit`-Eigenschaft bereitgestellt werden. Optional steuert `unitDisplay` die Einheitsformatierung.

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

Wenn der `style` `'currency'` ist, muss eine `currency`-Eigenschaft bereitgestellt werden. Optional steuern `currencyDisplay` und `currencySign` die Einheitsformatierung.

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

Wissenschaftliche und kompakte Notation werden von der `notation` Option dargestellt und können wie folgt formatiert werden:

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

Zeigen Sie ein Vorzeichen für positive und negative Zahlen, jedoch nicht für Null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass bei `currencySign` "accounting" Klammern anstelle eines Minuszeichens verwendet werden können:

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

Sie können die minimale oder maximale Anzahl an Dezimalstellen, signifikanten Ziffern oder Ganzzahlziffern angeben, die angezeigt werden sollen, wenn Sie eine Zahl formatieren.

> [!NOTE]
> Wenn sowohl signifikante als auch dezimale Stellenbegrenzungen angegeben sind, hängt die tatsächliche Formatierung von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganzzahl- und Dezimalstelleneigenschaften geben die Anzahl der Ziffern an, die vor und nach dem Dezimalpunkt angezeigt werden sollen.
Wenn der anzuzeigende Wert weniger Ganzzahlziffern hat als angegeben, wird er links mit Nullen aufgefüllt, um die erwartete Anzahl zu erreichen.
Wenn er weniger Dezimalstellen hat, wird er rechts mit Nullen ergänzt.
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

Wenn ein Wert mehr Dezimalstellen als die angegebene maximale Anzahl hat, wird er gerundet.
Die _Art_, wie er gerundet wird, hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab (weitere Details sind im Abschnitt [Rundungsmodi](#rundungsmodi) angegeben).
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

Die minimalen Dezimalstellen haben keinen Einfluss, wenn der Wert bereits mehr als 2 Dezimalstellen hat:

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
> Achten Sie auf Standardwerte, da sie das Format beeinflussen können, auch wenn sie in Ihrem Code nicht spezifiziert sind.
> Der Standardwert für die maximale Ziffer ist `3` für einfache Werte, `2` für Währungen und kann für andere vorkonfigurierte Typen unterschiedlich sein.

Der oben formatierte Wert wird auf 3 Stellen gerundet, obwohl wir die maximale Ziffer nicht angegeben haben!
Das liegt daran, dass ein Standardwert für `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` und `0`, jeweils.

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

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtanzahl der Ziffern einschließlich der Ganzzahl- und Dezimalstellen.
Die `maximumSignificantDigits` wird verwendet, um die Gesamtzahl der anzuzeigenden Ziffern aus dem ursprünglichen Wert anzugeben.

Die Beispiele unten zeigen, wie dies funktioniert.
Achten Sie besonders auf den letzten Fall: Nur die erste Ziffer wird beibehalten, und die anderen werden verworfen/auf Null gesetzt.

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

Die `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl von Ziffern angezeigt wird, indem bei Bedarf Nullen an das Ende des Wertes gehängt werden.

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
> Die Standardwerte für die maximale und minimale signifikante Ziffer sind 21 und 1, jeweils.

#### Gleichzeitige Angabe signifikanter und dezimaler Stellen

Die Dezimalstellen ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten, die Anzahl der zu formatierenden Dezimalstellen und führenden Ziffern zu steuern.
Wenn beide gleichzeitig verwendet werden, können sie in Konflikt geraten.

Diese Konflikte werden durch die [`roundingPriority`](#roundingpriority) Eigenschaft gelöst.
Standardmäßig hat diese den Wert `"auto"`, was bedeutet, dass wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#minimumsignificantdigits) angegeben ist, die Dezimal- und Ganzzahlstelleneigenschaften ignoriert werden.

Zum Beispiel formatiert der folgende Code den Wert von `4.33145` mit `maximumFractionDigits: 3`, dann `maximumSignificantDigits: 2`, und schließlich beide.
Der Wert mit beiden ist derjenige, der mit `maximumSignificantDigits` gesetzt wurde.

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

Mit [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions), um den Formatter zu überprüfen, können wir sehen, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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

Zusätzlich zu `"auto"` können Sie Konflikte auflösen, indem Sie [`roundingPriority`](#roundingpriority) als `"morePrecision"` oder `"lessPrecision"` spezifizieren.
Der Formatter berechnet die Präzision unter Verwendung der Werte von `maximumSignificantDigits` und `maximumFractionDigits`.

Der folgende Code zeigt, wie das Format für die drei verschiedenen Rundungsprioritäten ausgewählt wird:

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

Beachten Sie, dass der Algorithmus auf eine unintuitive Weise arbeiten kann, wenn ein Minimalwert ohne einen Maximalwert angegeben wird.
Das folgende Beispiel formatiertert den Wert `1` mit `minimumFractionDigits: 2` (formatiert zu `1.00`) und `minimumSignificantDigits: 2` (formatiert zu `1.0`).
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

Der Grund dafür ist, dass nur die "maximalen Präzisions"werte für die Berechnung verwendet werden, und der Standardwert von `maximumSignificantDigits` ist viel höher als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis der Verwendung der angegebenen Dezimal- und signifikanten Ziffern unabhängig auswerten sollte (unter Berücksichtigung sowohl der minimalen als auch der maximalen Werte).
> Anschließend wird die Option ausgewählt, die mehr Dezimalstellen anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist.
> Dies wird zu einem intuitiveren Verhalten in diesem Fall führen.

### Rundungsmodi

Wenn ein Wert mehr Dezimalstellen als vom Konstruktor festgelegt erlaubt hat, wird der formatierte Wert auf die angegebene Anzahl von Dezimalstellen _gerundet_.
Die _Art_, wie der Wert gerundet wird, hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab.

Zahlenformatierer verwenden standardmäßig `halfExpand` Rundung, die Werte "weg von Null" am Halbincrement rundet (in anderen Worten, die _Größe_ des Wertes wird aufgerundet).

Für eine positive Zahl: Wenn die zu entfernenden Dezimalstellen näher am nächsten inkrement (oder am Halbwegspunkt) sind, werden die verbleibenden Dezimalstellen aufgerundet, andernfalls werden sie abgerundet.
Dies wird unten gezeigt: 2.23, gerundet auf zwei signifikante Ziffern, wird auf 2.2 gekürzt, weil 2.23 weniger als das Halbincrement 2.25 ist, während Werte von 2.25 und größer auf 2.3 aufgerundet werden:

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

Eine negative Zahl am oder unter dem Halbincrementspunkt wird ebenfalls "von Null weg" gerundet (wird negativer):

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

Die nachstehende Tabelle zeigt die Wirkung der verschiedenen Rundungsmodi für positive und negative Werte, die am und um das Halbincrement liegen.

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

Bei der Verwendung von `halfEven` hängt sein Verhalten auch von der Parität (gerade oder ungerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der obigen Tabelle das gleiche wie `halfTrunc`, da die Größen aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, wird `halfEven` stattdessen wie `halfExpand` verhalten. Dieses Verhalten vermeidet eine konsistente Unter- oder Überschätzung von Halbincremente in einer großen Datenprobe.

### Verwendung von roundingIncrement

Manchmal möchten Sie die verbleibenden Dezimalstellen auf eine andere Inkrement als die nächste ganze Zahl runden.
Zum Beispiel möchten Währungen, bei denen die kleinste Münze 5 Cent ist, den Wert auf Inkremente von 5 runden, um Beträge widerzuspiegeln, die tatsächlich in bar bezahlt werden können.

Solches Runden kann mit der [`roundingIncrement`](#roundingincrement) Eigenschaft erreicht werden.

Wenn zum Beispiel `maximumFractionDigits` auf 2 und `roundingIncrement` auf 5 gesetzt ist, wird die Zahl auf das nächste 0,05 gerundet:

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
Um auf den nächsten 10-Cent-Betrag zu runden ("Dime-Rundung"), können Sie `roundingIncrement` auf `10` ändern.

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
Im folgenden Beispiel wird gezeigt, wie `halfCeil` Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des Halbindkrements zu runden und "mehr positiv", wenn er darüber liegt oder auf dem Halbincrement.
Die inkrementierte Ziffer ist "0,05", sodass das Halbincrement bei .025 liegt (unten wird dieses bei 11.225 gezeigt).

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

Wenn Sie die Anzahl der Ziffern ändern müssen, denken Sie daran, dass sowohl `minimumFractionDigits` als auch `maximumFractionDigits` auf den gleichen Wert gesetzt werden müssen, ansonsten wird ein `RangeError` ausgelöst.

`roundingIncrement` kann nicht mit signifikanten Ziffernrundungen oder irgendeiner Einstellung von `roundingPriority` außer `auto` gemischt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
