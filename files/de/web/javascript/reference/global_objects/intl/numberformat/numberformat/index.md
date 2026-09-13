---
title: Intl.NumberFormat() Konstruktor
short-title: Intl.NumberFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Der **`Intl.NumberFormat()`**-Konstruktor erstellt {{jsxref("Intl.NumberFormat")}} Objekte.

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

> [!NOTE]
> `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erzeugen eine neue `Intl.NumberFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` und der `this`-Wert eine andere `Intl.NumberFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder einer {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Gebietsschema-Identifikatoren. Das Standardgebietsschema der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Gebietsschema-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Zur besseren Lesbarkeit ist die Liste der Eigenschaften in Abschnitte unterteilt, die auf ihre Zwecke basieren, einschließlich [Gebietsschema-Optionen](#gebietsschema-optionen), [Stiloptionen](#stiloptionen), [Zahlenoptionen](#zahlenoptionen) und [andere Optionen](#andere_optionen).

#### Gebietsschema-Optionen

- `localeMatcher`
  - : Der zu verwendende Algorithmus zum Abgleichen von Gebietsschemas. Mögliche Werte sind `"lookup"` und `"best fit"`, der Standard ist `"best fit"`. Für Informationen zu dieser Option siehe [Identifizierung und Verhandlung von Gebietsschemas](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das zu verwendende Nummernsystem für die Zahlenformatierung, wie `"arab"`, `"hans"`, `"mathsans"`, und so weiter. Eine Liste der unterstützten Nummernsystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types); der Standard ist vom Gebietsschema abhängig. Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.

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
  - : Die im Währungsformat zu verwendende Währung. Mögliche Werte sind die ISO 4217 Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency` Eigenschaft angegeben werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung im Währungsformat angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokalisiertes Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" statt "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Lokalen bedeutet das Rechnungslegungsformat, die Zahl in Klammern zu setzen, anstatt ein Minuszeichen hinzuzufügen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standard ist `"standard"`.
- `unit`
  - : Die zu verwendende Einheit in `unit`-Formatierung. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgelistet. Paare von einfachen Einheiten können mit "-per-" kombiniert werden, um eine Komplexeinheit zu bilden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit` Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der zu verwendende Einheitenstil in der `unit`-Formatierung. Mögliche Werte sind:
    - `"short"` (Standard)
      - : z.B. `16 l`.
    - `"narrow"`
      - : z.B. `16l`.
    - `"long"`
      - : z.B. `16 litres`.

#### Zahlenoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die minimale Anzahl an ganzen Ziffern, die verwendet werden sollen. Ein Wert mit weniger ganzen Ziffern als diese Zahl wird mit Nullen (auf die angegebene Länge) aufgefüllt, wenn er formatiert wird. Mögliche Werte liegen zwischen `1` und `21`; der Standard ist `1`.
- `minimumFractionDigits`
  - : Die minimale Anzahl von Dezimalstellen, die verwendet werden sollen. Mögliche Werte liegen zwischen `0` und `100`; der Standard für einfache Zahlen- und Prozentformatierung ist `0`; der Standard für Währungsformatierung ist die Anzahl der Nebeneinheit Ziffern, die von der [ISO 4217-Währungsliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt werden (2, wenn die Liste diese Information nicht bereitstellt). Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values) für wann dieser Standard angewendet wird.
- `maximumFractionDigits`
  - : Die maximale Anzahl von Dezimalstellen, die verwendet werden soll. Mögliche Werte liegen zwischen `0` und `100`; der Standard für einfache Zahlenformatierung ist der größere Wert von `minimumFractionDigits` und `3`; der Standard für Währungsformatierung ist der größere Wert von `minimumFractionDigits` und der Anzahl der Nebeneinheit Ziffern, die von der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt werden (2, wenn die Liste diese Information nicht bereitstellt); der Standard für Prozentformatierung ist der größere Wert von `minimumFractionDigits` und 0. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values) für wann dieser Standard angewendet wird.
- `minimumSignificantDigits`
  - : Die minimale Anzahl an signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte liegen zwischen `1` und `21`; der Standard ist `1`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values) für wann dieser Standard angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl an signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte liegen zwischen `1` und `21`; der Standard ist `21`. Siehe [SignificantDigits/FractionDigits Standardwerte](#significantdigitsfractiondigits_default_values) für wann dieser Standard angewendet wird.
- `roundingPriority`
  - : Geben Sie an, wie Rundungskonflikte gelöst werden sollen, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Das Ergebnis der signifikanten Ziffern-Eigenschaft wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis der Eigenschaft, die mehr Präzision ergibt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis der Eigenschaft, die weniger Präzision ergibt, wird verwendet.

    Der Wert `"auto"` wird zu `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keine der vier "FractionDigits"/"SignificantDigits"-Optionen gesetzt sind.

    Beachten Sie, dass für Werte ungleich `auto` das Ergebnis mit mehr Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (minimale Bruch- und signifikante Ziffern-Einstellungen werden ignoriert).

- `roundingIncrement`
  - : Gibt das Inkrement an, nach dem gerundet werden soll, relativ zur berechneten Rundungsgröße. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`; der Standard ist `1`. Es kann nicht mit der Rundung nach signifikanten Ziffern oder mit irgendeiner Einstellung von `roundingPriority` außer `auto` gemischt werden.

- `roundingMode`
  - : Wie Dezimalzahlen gerundet werden sollen. Mögliche Werte sind:
    - `"ceil"`
      - : Rundung gegen +∞. Positive Werte werden aufgerundet. Negative Werte runden "positiver".
    - `"floor"`
      - : Rundung gegen -∞. Positive Werte werden abgerundet. Negative Werte runden "negativer".
    - `"expand"`
      - : Rundung weg von 0. Die _Größe_ des Werts wird durch Rundung immer erhöht. Positive Werte werden aufgerundet. Negative Werte runden "negativer".
    - `"trunc"`
      - : Rundung gegen 0. Diese _Größe_ des Werts wird durch Rundung immer reduziert. Positive Werte werden abgerundet. Negative Werte runden "weniger negativ".
    - `"halfCeil"`
      - : Rundung am Knoten gegen +∞. Werte oberhalb des Halbincrements runden wie `"ceil"` (gegen +∞), und darunter wie `"floor"` (gegen -∞). Am Halbincrement runden Werte wie `"ceil"`.
    - `"halfFloor"`
      - : Rundung am Knoten gegen -∞. Werte oberhalb des Halbincrements runden wie `"ceil"` (gegen +∞), und darunter wie `"floor"` (gegen -∞). Am Halbincrement runden Werte wie `"floor"`.
    - `"halfExpand"` (Standard)
      - : Rundung am Knoten weg von 0. Werte oberhalb des Halbincrements runden wie `"expand"` (weg von null), und darunter wie `"trunc"` (gegen 0). Am Halbincrement runden Werte wie `"expand"`.
    - `"halfTrunc"`
      - : Rundung am Knoten gegen 0. Werte oberhalb des Halbincrements runden wie `"expand"` (weg von null), und darunter wie `"trunc"` (gegen 0). Am Halbincrement runden Werte wie `"trunc"`.
    - `"halfEven"`
      - : Rundung am Knoten gegen die nächstgelegene gerade Zahl. Werte oberhalb des Halbincrements runden wie `"expand"` (weg von null), und darunter wie `"trunc"` (gegen 0). Am Halbincrement wird auf die nächstgelegene gerade Ziffer gerundet.

    Diese Optionen spiegeln den [ICU-Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, wobei "expand" und "trunc" der ICU "UP" und "DOWN" zugeordnet sind. Das [Rundungsmodus](#rundungsmodi) Beispiel unten zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zur Darstellung von abschließenden Nullen bei Ganzzahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie abschließende Nullen entsprechend `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Dezimalstellen, _falls_ sie alle Null sind. Dies ist dasselbe wie `"auto"`, wenn eine der Dezimalstellen ungleich null ist.

##### SignificantDigits/FractionDigits Standardwerte

Für die vier oben genannten Optionen (die `FractionDigits`- und `SignificantDigits`-Optionen) haben wir ihre Standards erwähnt; jedoch werden diese Standards _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet wird, was von den Einstellungen [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Genau:

- Wenn `roundingPriority` nicht `"auto"` ist, dann gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits`-Option gesetzt ist, dann gelten die `SignificantDigits`-Optionen und die `FractionDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, und entweder mindestens eine `FractionDigits`-Option gesetzt ist oder `notation` nicht `"compact"` ist, dann gelten die `FractionDigits`-Optionen und die `SignificantDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist und keine der vier Optionen gesetzt sind, dann werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben genannten Standards, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Die zu darstellende Formatierung für die Zahl. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfache Zahlenformatierung.
    - `"scientific"`
      - : Gibt die Größenordnung für die formatierte Zahl zurück.
    - `"engineering"`
      - : Gibt den Exponenten von zehn zurück, wenn er durch drei teilbar ist.
    - `"compact"`
      - : String, der den Exponenten darstellt; standardmäßig wird die "kurze" Form verwendet.
- `compactDisplay`
  - : Nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standard ist `"short"`.
- `useGrouping`
  - : Ob Gruppierungszeichen verwendet werden sollen, wie Tausendertrennzeichen oder Tausend/Lakh/Crore-Trennzeichen.
    - `"always"`
      - : Gruppierungszeichen anzeigen, auch wenn das Gebietsschema es anders bevorzugt.
    - `"auto"`
      - : Gruppierungszeichen basierend auf der Gebietsschema Präferenz anzeigen, die möglicherweise auch von der Währung abhängt.
    - `"min2"`
      - : Gruppierungszeichen anzeigen, wenn es mindestens 2 Ziffern in einer Gruppe gibt.
    - `true`
      - : Gleich wie `"always"`.
    - `false`
      - : Keine Gruppierungszeichen anzeigen.

    Der Standard ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` sonst. Die Werte `"true"` und `"false"` werden akzeptiert, aber immer auf den Standardwert konvertiert.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenanzeige nur für negative Zahlen, einschließlich negativer Null.
    - `"always"`
      - : Immer das Vorzeichen anzeigen.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, aber nicht für null.
    - `"negative"`
      - : Vorzeichenanzeige nur für negative Zahlen, exklusive negative null.
    - `"never"`
      - : Niemals das Vorzeichen anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat` Objekt.

> [!NOTE]
> Der unten stehende Text beschreibt ein Verhalten, das in der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das ein [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde, sondern nur, dass es `Intl.NumberFormat.prototype` in seiner Prototypkette hat), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.NumberFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft verborgen wird (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine eigentliche `Intl.NumberFormat` Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) Methoden auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden die Optionen der versteckten Instanz nicht konsultieren.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, aber mit `this`, das auf etwas anderes gesetzt ist, das keine `Instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die aufgezählte Werte annimmt (wie `style`, `units`, `currency`, und so weiter), ist auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind festgelegt, und sie sind auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass diese Eigenschaften je nach verschiedenen Formatierungsoptionen Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu erhalten, auch wenn Sie nur eine der Eigenschaften festlegen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `options.style`-Eigenschaft auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` festgelegt wurde.

## Beispiele

### Grundlegende Verwendung

In der grundlegenden Verwendung ohne Angabe eines Gebietsschemas wird ein formatierter String im Standardgebietsschema und mit Standardoptionen zurückgegeben.

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

Ein Vorzeichen für positive und negative Zahlen anzeigen, jedoch nicht für null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass wenn das Währungsvorzeichen "accounting" ist, Klammern anstelle eines Minuszeichens verwendet werden könnten:

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

Sie können die minimale oder maximale Anzahl an Dezimal-, Ganz- oder signifikanten Ziffern angeben, die beim Formatieren einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl signifikante als auch Dezimalzifferngrenzen angegeben sind, hängt die tatsächliche Formatierung von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganz- und Dezimalstelleneigenschaften geben an, wie viele Ziffern vor und nach dem Dezimalkomma angezeigt werden sollen.
Wenn der zu darstellende Wert weniger ganze Ziffern als angegeben hat, wird er mit Nullen links aufgefüllt, um die erwartete Anzahl zu erreichen.
Hat er weniger Dezimalstellen, wird er mit Nullen rechts aufgefüllt.
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

Wenn ein Wert mehr Dezimalstellen als die angegebene maximale Anzahl hat, wird er gerundet.
Die _Art_ der Rundung hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab (weitere Details finden Sie im Abschnitt [Rundungsmodi](#rundungsmodi)).
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
> Achten Sie auf Standardwerte, da diese die Formatierung beeinflussen können, auch wenn sie nicht in Ihrem Code angegeben sind.
> Der Standard maximale Ziffernwert ist `3` für einfache Werte, `2` für Währung, und kann für andere vordefinierte Typen unterschiedliche Werte haben.

Der oben formatierte Wert wird auf 3 Ziffern gerundet, obwohl wir die maximalen Ziffern nicht angegeben haben!
Dies liegt daran, dass ein Standardwert von `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` bzw. `0`.

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

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtanzahl an Ziffern, einschließlich sowohl ganzer als auch Dezimalteile.
Die `maximumSignificantDigits` wird verwendet, um die Gesamtanzahl der Ziffern aus dem ursprünglichen Wert anzugeben, die angezeigt werden sollen.

Die Beispiele unten zeigen, wie dies funktioniert.
Beachten Sie insbesondere den letzten Fall: nur die erste Ziffer wird beibehalten und die anderen werden verworfen/auf null gesetzt.

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

Die `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl an Ziffern angezeigt wird, und fügt bei Bedarf Nullen an das Ende des Werts hinzu.

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
> Die Standardwerte für maximale und minimale signifikante Ziffern sind 21 bzw. 1.

#### Gleichzeitig signifikante und Dezimalstellen angeben

Die Dezimalstellen ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikante Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beides Möglichkeiten, um zu steuern, wie viele Dezimal- und führende Ziffern formatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, ist es möglich, dass sie in Konflikt geraten.

Diese Konflikte werden über die [`roundingPriority`](#roundingpriority) Eigenschaft gelöst.
Standardmäßig hat diese einen Wert von `"auto"`, was bedeutet, dass wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#maximumsignificantdigits) angegeben ist, die Dezimal- und Ganzstelleneigenschaften ignoriert werden.

Zum Beispiel formatiert der unten angegebene Code den Wert von `4.33145` mit `maximumFractionDigits: 3`, dann `maximumSignificantDigits: 2`, und dann beide.
Der Wert mit beiden ist der, der mit `maximumSignificantDigits` eingestellt wird.

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

Mit [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions), um den Formatter zu inspizieren, sehen wir, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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

Unten zeigt der Code das Format, das für die drei verschiedenen Rundungsprioritäten ausgewählt wird:

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

Beachten Sie, dass der Algorithmus auf eine unlogische Weise agieren kann, wenn ein Minimalwert angegeben ist, ohne dass ein Maximalwert festgelegt ist.
Das unten stehende Beispiel formatiert den Wert `1` mit `minimumFractionDigits: 2` (Formatierung zu `1.00`) und `minimumSignificantDigits: 2` (Formatierung zu `1.0`).
Da `1.00` mehr Ziffern als `1.0` hat, sollte dies das Ergebnis bei Priorisierung von `morePrecision` sein, aber tatsächlich ist das Gegenteil der Fall:

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

Der Grund dafür ist, dass nur die "maximale Präzision" Werte für die Berechnung verwendet werden, und der Standardwert von `maximumSignificantDigits` ist viel höher als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis der unabhängigen Verwendung der angegebenen Dezimal- und signifikanten Ziffern (unter Berücksichtigung der minimalen und maximalen Werte) bewerten soll.
> Er wird dann die Option auswählen, die mehr Dezimalziffern anzeigt, wenn `morePrecision` eingestellt ist, und weniger, wenn `lessPrecision` eingestellt ist.
> Dies wird zu einem intuitiveren Verhalten für diesen Fall führen.

### Rundungsmodi

Wenn ein Wert mehr Dezimalstellen hat, als durch die Konstruktoroptionen erlaubt, wird der formatierte Wert _gerundet_, um die angegebene Anzahl von Dezimalstellen zu erreichen.
Die _Art_ der Rundung hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab.

Zahlenformatierer verwenden standardmäßig `halfExpand`-Rundung, die Werte "weg von null" am Halbincrement runden (mit anderen Worten, die _Größe_ des Wertes wird aufgerundet).

Für eine positive Zahl, wenn die zu entfernenden Dezimalstellen näher am nächsten Inkrement liegen (oder am Schnittpunkt), dann werden die verbleibenden Dezimalstellen aufgerundet, andernfalls werden sie abgerundet.
Dies ist unten gezeigt: 2.23 wird auf zwei signifikante Ziffern auf 2.2 gekürzt, da 2.23 unterhalb des Halbincrements 2.25 liegt, während Werte von 2.25 und größer auf 2.3 aufgerundet werden:

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

Eine negative Zahl am oder unterhalb des Halbincrementspunkts wird ebenfalls weg von null gerundet (wird negativer):

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

Die Tabelle unten zeigt die Auswirkungen der verschiedenen Rundungsmodi für positive und negative Werte, die am und um den Halbincrement liegen.

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

Bei Verwendung von `halfEven` hängt sein Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der obigen Tabelle dasselbe wie bei `halfTrunc`, da die Größenordnungen aller Zahlen zwischen eine kleinere "gerade" Zahl (2.2) und eine größere "ungerade" Zahl (2.3) fallen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen würden, verhält sich `halfEven` stattdessen wie `halfExpand`. Dieses Verhalten vermeidet das konstante Unterschätzen oder Überschätzen von Halbincrements in einer großen Datenmenge.

### Nutzung von roundingIncrement

Manchmal möchten wir die verbleibenden Dezimalstellen auf ein anderes Inkrement als die nächste Ganzzahl runden.
Zum Beispiel, Währungen, bei denen die kleinste Münze 5 Cent beträgt, könnten den Wert auf Inkremente von 5 runden wollen, um Beträge widerzuspiegeln, die tatsächlich in bar bezahlt werden können.

Diese Art der Rundung kann mit der [`roundingIncrement`](#roundingincrement) Eigenschaft erreicht werden.

Wenn `maximumFractionDigits` zum Beispiel 2 und `roundingIncrement` 5 ist, dann wird die Zahl auf das nächste 0.05 gerundet:

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

Dieses spezifische Muster wird als "nickel rounding" bezeichnet, wobei nickel der umgangssprachliche Name für eine US-amerikanische 5-Cent-Münze ist.
Um auf den nächsten 10 Cent zu runden ("dime rounding"), könnten Sie `roundingIncrement` auf `10` ändern.

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
Das unten stehende Beispiel zeigt, wie `halfCeil`-Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des Rundungsinkrements und "mehr positiv" wenn darüber oder am Halbincrement zu runden.
Die inkrementierte Ziffer ist "0.05", sodass das Halbincrement bei .025 liegt (unten bei 11.225 gezeigt).

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

Wenn Sie die Anzahl der Ziffern ändern müssen, denken Sie daran, dass `minimumFractionDigits` und `maximumFractionDigits` beide auf denselben Wert gesetzt werden müssen, ansonsten wird ein `RangeError` geworfen.

`roundingIncrement` kann nicht mit der Rundung nach signifikanten Ziffern oder mit irgendeiner Einstellung von `roundingPriority` außer `auto` gemischt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
