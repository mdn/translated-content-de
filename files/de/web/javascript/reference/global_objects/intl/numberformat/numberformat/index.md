---
title: Intl.NumberFormat() Konstruktor
short-title: Intl.NumberFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 96336268293d3958a19fa7552d84ec1af96dd59e
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
> `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erstellen eine neue `Intl.NumberFormat` Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der `this` Wert eine andere `Intl.NumberFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Locale-Bezeichner. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keine der angegebenen Locale-Bezeichner unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:
    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten angegeben) gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt. Zur besseren Lesbarkeit wird die Liste der Eigenschaften nach ihrem Zweck in Abschnitte unterteilt, einschließlich [Locale-Optionen](#locale-optionen), [Stiloptionen](#stiloptionen), [Ziffern-Optionen](#ziffern-optionen) und [andere Optionen](#andere_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Abgleichsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`.
    Für Informationen zu dieser Option siehe [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem für die Zahlenformatierung, wie z.B. `"arab"`, `"hans"`, `"mathsans"`, und so weiter. Für eine Liste unterstützter Nummerierungssystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types); der Standard ist lokalisierungsabhängig. Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.

#### Stiloptionen

Je nach verwendetem `style` können einige davon ignoriert und andere erforderlich sein:

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
  - : Die zu verwendende Währung in der Währungsformatierung. Mögliche Werte sind die ISO 4217 Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den Chinesischen RMB — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency` Eigenschaft angegeben werden. Es wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung in der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokales Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" anstatt "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Locales bedeutet das Buchhaltungsformat, dass die Zahl in Klammern gesetzt wird, anstatt ein Minuszeichen hinzuzufügen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standard ist `"standard"`.
- `unit`
  - : Die Einheit, die in der `unit` Formatierung verwendet werden soll. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgelistet. Paare einfacher Einheiten können mit „-per-“ zusammengefügt werden, um eine zusammengesetzte Einheit zu bilden. Es gibt keinen Standardwert; ist der `style` `"unit"`, muss die `unit` Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der zu verwendende Einheit-Formatierungsstil in der `unit` Formatierung. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B., `16 l`.
    - `"narrow"`
      - : Z.B., `16l`.
    - `"long"`
      - : Z.B., `16 liters`.

#### Ziffern-Optionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die minimale Anzahl der zu verwendenden Ganzzahldigits. Ein Wert mit einer kleineren Anzahl von Ganzzahldigits als diese Zahl wird mit Nullen links aufgefüllt (auf die angegebene Länge), wenn formatiert. Mögliche Werte sind von `1` bis `21`; der Standard ist `1`.
- `minimumFractionDigits`
  - : Die minimale Anzahl der zu verwendenden Bruchdigits. Mögliche Werte sind von `0` bis `100`; der Standard für einfache Zahlen- und Prozentformatierung ist `0`; der Standard für Währungsformatierung ist die Anzahl der Minor-Unit-Digits, die durch die [ISO 4217 Liste der Währungscodes](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt werden (2, falls die Liste diese Information nicht bereitstellt). Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `maximumFractionDigits`
  - : Die maximale Anzahl der zu verwendenden Bruchdigits. Mögliche Werte sind von `0` bis `100`; der Standard für einfache Zahlenformatierung ist die größere Zahl von `minimumFractionDigits` und `3`; der Standard für Währungsformatierung ist die größere Zahl von `minimumFractionDigits` und der Anzahl der Minor-Unit-Digits, die durch die [ISO 4217 Liste der Währungscodes](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt werden (2, falls die Liste diese Information nicht bereitstellt); der Standard für Prozentformatierung ist die größere Zahl von `minimumFractionDigits` und 0. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `minimumSignificantDigits`
  - : Die minimale Anzahl der zu verwendenden signifikanten Digits. Mögliche Werte sind von `1` bis `21`; der Standard ist `1`. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl der zu verwendenden signifikanten Digits. Mögliche Werte sind von `1` bis `21`; der Standard ist `21`. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values), wann dieser Standard angewendet wird.
- `roundingPriority`
  - : Gibt an, wie Rundungskonflikte aufgelöst werden, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Das Ergebnis aus der Eigenschaft der signifikanten Digits wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis aus der Eigenschaft, die zu mehr Präzision führt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis aus der Eigenschaft, die zu weniger Präzision führt, wird verwendet.

    Der Wert `"auto"` wird auf `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keines der vier Optionen für "FractionDigits"/"SignificantDigits" gesetzt ist.

    Beachten Sie, dass für Werte abweichend von `auto` das Ergebnis mit höherer Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (die minimalen Einstellungen für Bruch- und signifikante Digits werden ignoriert).

- `roundingIncrement`
  - : Gibt an, das Inkrement bei dem die Rundung relativ zur berechneten Rundungsgröße erfolgen soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, und `5000`; der Standard ist `1`. Es kann nicht mit der Rundung nach signifikanten Digits oder einer Einstellung von `roundingPriority` andere als `auto` kombiniert werden.

- `roundingMode`
  - : Wie Dezimalzahlen gerundet werden sollen. Mögliche Werte sind:
    - `"ceil"`
      - : Aufrunden zu +∞. Positive Werte werden aufgerundet. Negative Werte werden "positiver" gerundet.
    - `"floor"`
      - : Abrunden zu -∞. Positive Werte werden abgerundet. Negative Werte werden "negativer" gerundet.
    - `"expand"`
      - : Vom Nullpunkt weg runden. Der _Betrag_ des Wertes wird immer durch die Rundung erhöht. Positive Werte werden aufgerundet. Negative Werte werden "negativer" gerundet.
    - `"trunc"`
      - : Zum Nullpunkt hin runden. Dieser _Betrag_ des Wertes wird immer durch die Rundung reduziert. Positive Werte werden abgerundet. Negative Werte werden "weniger negativ" gerundet.
    - `"halfCeil"`
      - : Bindungen zu +∞. Werte über dem halben Inkrement runden wie `"ceil"` (gegen +∞), und darunter wie `"floor"` (gegen -∞). Beim halben Inkrement werden Werte wie `"ceil"` gerundet.
    - `"halfFloor"`
      - : Bindungen zu -∞. Werte über dem halben Inkrement runden wie `"ceil"` (gegen +∞), und darunter wie `"floor"` (gegen -∞). Beim halben Inkrement werden Werte wie `"floor"` gerundet.
    - `"halfExpand"` (Standard)
      - : Bindungen weg von 0. Werte über dem halben Inkrement werden gerundet wie `"expand"` (vom Nullpunkt weg), und darunter wie `"trunc"` (gegen 0). Beim halben Inkrement werden Werte wie `"expand"` gerundet.
    - `"halfTrunc"`
      - : Bindungen zu 0. Werte über dem halben Inkrement werden gerundet wie `"expand"` (vom Nullpunkt weg), und darunter wie `"trunc"` (gegen 0). Beim halben Inkrement werden Werte wie `"trunc"` gerundet.
    - `"halfEven"`
      - : Bindungen auf die nächstliegende gerade Zahl. Werte über dem halben Inkrement werden gerundet wie `"expand"` (vom Nullpunkt weg), und darunter wie `"trunc"` (gegen 0). Bei halbem Inkrement runden Werte zur nächsten geraden Ziffer.

    Diese Optionen spiegeln den [ICU-Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, wo "expand" und "trunc" auf ICU "UP" und "DOWN" abbilden.
    Das Beispiel der [Rundungsmodi](#rundungsmodi) unten veranschaulicht, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie für die Anzeige von nachgestellten Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie nachgestellte Nullen entsprechend `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Dezimalstellen _wenn_ sie alle null sind. Dies ist das gleiche wie `"auto"`, wenn eine der Dezimalstellen ungleich Null ist.

##### Standardwerte für SignificantDigits/FractionDigits

Für die vier oben genannten Optionen (die Optionen `FractionDigits` und `SignificantDigits`) haben wir deren Standards erwähnt; allerdings werden diese Standards _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet wird, was von den Einstellungen [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Speziell:

- Ist `roundingPriority` nicht `"auto"`, gelten alle vier Optionen.
- Ist `roundingPriority` `"auto"` und ist mindestens eine der `SignificantDigits`-Optionen gesetzt, gelten die `SignificantDigits`-Optionen und die `FractionDigits`-Optionen werden ignoriert.
- Ist `roundingPriority` `"auto"` und ist entweder mindestens eine der `FractionDigits`-Optionen gesetzt oder ist `notation` nicht `"compact"`, gelten die `FractionDigits`-Optionen und die `SignificantDigits`-Optionen werden ignoriert.
- Ist `roundingPriority` `"auto"`, ist `notation` `"compact"` und sind keine der vier Optionen gesetzt, dann werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben genannten Standards, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Die Formatierung, die für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfache Zahlenformatierung.
    - `"scientific"`
      - : Gibt die Zehnerpotenz für die formatierte Zahl zurück.
    - `"engineering"`
      - : Gibt den Exponenten der Zehnerpotenz zurück, wenn dieser durch drei teilbar ist.
    - `"compact"`
      - : String, der das Exponent darstellt; Standard ist die Verwendung der "kurzen" Form.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standard ist `"short"`.
- `useGrouping`
  - : Ob Gruppierungsseparatzeichen, wie Tausendertrennzeichen oder Tausender/Lakh/Crore-Trennzeichen, verwendet werden sollen.
    - `"always"`
      - : Gruppierungsseparatzeichen auch dann anzeigen, wenn das Locale es anders bevorzugt.
    - `"auto"`
      - : Gruppierungsseparatzeichen basierend auf der Locale-Vorliebe anzeigen, die auch von der Währung abhängen kann.
    - `"min2"`
      - : Gruppierungsseparatzeichen anzeigen, wenn es mindestens 2 Ziffern in einer Gruppe gibt.
    - `true`
      - : Dasselbe wie `"always"`.
    - `false`
      - : Keine Gruppierungsseparatzeichen anzeigen.

    Der Standard ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` ansonsten. Die String-Werte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Vorzeichen der Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenanzeige nur für negative Zahlen, einschließlich negativen Null.
    - `"always"`
      - : Immer das Vorzeichen anzeigen.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, aber nicht null.
    - `"negative"`
      - : Vorzeichenanzeige nur für negative Zahlen, außer negative null.
    - `"never"`
      - : Niemals das Vorzeichen anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat` Objekt.

> [!NOTE]
> Der unten beschriebene Text beschreibt ein Verhalten, das von der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde, sondern nur, dass es `Intl.NumberFormat.prototype` in seiner Prototypenkette hat), wird stattdessen der Wert von `this` zurückgegeben, wobei das neu erstellte `Intl.NumberFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft versteckt ist (ein eindeutiges Symbol, das zwischen den Instanzen wiederverwendet wird).

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

Beachten Sie, dass hier nur eine tatsächliche `Intl.NumberFormat` Instanz existiert: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) Methoden auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden nicht die Optionen der versteckten Instanz berücksichtigen.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, aber mit `this` auf etwas anderes gesetzt wird, das kein `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die enumerierte Werte nimmt (wie `style`, `units`, `currency`, und so weiter) wird auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt und sie sind auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass abhängig von verschiedenen Formatierungsoptionen diese Eigenschaften Standardwerte haben können.
      Es ist daher möglich, diesen Fehler auch dann zu erhalten, wenn Sie nur eine der Eigenschaften festlegen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `options.style` Eigenschaft auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` festgelegt wurde.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe einer Locale wird ein formatierter String in der Standardlocale und mit Standardoptionen zurückgegeben.

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

Wenn der `style` `'currency'` ist, muss eine `currency` Eigenschaft
angegeben werden. Optional steuern `currencyDisplay` und
`currencySign` die Formatierung der Einheit.

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

Wissenschaftliche und kompakte Notationen werden durch die `notation` Option dargestellt und können so formatiert werden:

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

### Darstellung von Vorzeichen

Zeigen Sie ein Vorzeichen für positive und negative Zahlen an, aber nicht für null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass bei "accounting" als Währungsvorzeichen anstelle eines Minuszeichens Klammern verwendet werden können:

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

Sie können die minimale oder maximale Anzahl von Bruch-, Ganzzahl- oder signifikanten Digits angeben, die bei der Formatierung einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl signifikante als auch Bruchstellenlimits angegeben sind, hängt die tatsächliche Formatierung von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganzzahl und Bruchziffereigenschaften geben die Anzahl der Ziffern an, die vor und nach dem Dezimalpunkt angezeigt werden sollen.
Wenn der Wert weniger Ganzzahldigits hat als angegeben, wird er links mit Nullen auf die erwartete Zahl aufgefüllt.
Wenn er weniger Bruchziffern hat, wird er rechts mit Nullen aufgefüllt.
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

Wenn ein Wert mehr Bruchziffern als die angegebene maximale Anzahl hat, wird er gerundet.
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

Die minimalen Bruchstellen haben keinen Einfluss, wenn der Wert bereits mehr als 2 Dezimalstellen hat:

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
> Achten Sie auf Standardwerte, da diese die Formatierung beeinflussen können, selbst wenn sie nicht explizit in Ihrem Code angegeben sind.
> Der Standardwert für die maximale Ziffernanzahl beträgt `3` für einfache Werte, `2` für Währungen und kann für andere vordefinierte Typen unterschiedlich sein.

Der formatierte Wert oben wird auf 3 Ziffern gerundet, obwohl wir die maximalen Ziffern nicht angegeben haben!
Dies liegt daran, dass ein Standardwert von `maximumFractionDigits` festgelegt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` und `0`, jeweils.

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

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtzahl der Ziffern, einschließlich der Ganz- und Bruchanteile.
Die `maximumSignificantDigits` wird verwendet, um die Gesamtanzahl der Ziffern aus dem ursprünglichen Wert anzuzeigen.

Die Beispiele unten zeigen, wie dies funktioniert.
Besonders beachten Sie den letzten Fall: Nur die erste Ziffer bleibt erhalten und die anderen werden verworfen/auf null gesetzt.

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

Die `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl von Ziffern angezeigt wird, indem bei Bedarf Nullen an das Ende des Wertes angefügt werden.

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
> Wenn nur eine `SignificantDigits`-Eigenschaft verwendet wird, wird ihr Gegenstück automatisch mit dem Standardwert angewendet.
> Die Standardwerte für maximale und minimale signifikante Ziffern sind 21 bzw. 1.

#### Angabe signifikanter und Bruchziffern gleichzeitig

Die Bruchziffern ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten, zu steuern, wie viele Bruch- und führende Ziffern formatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, kann es zu Konflikten kommen.

Diese Konflikte werden mit der [`roundingPriority`](#roundingpriority) Eigenschaft gelöst.
Standardmäßig hat diese den Wert `"auto"`, was bedeutet, dass, falls entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#minimumsignificantdigits) angegeben ist, die Bruch- und Ganzzahldigiteigenschaften ignoriert werden.

Zum Beispiel formatiert der untenstehende Code den Wert von `4.33145` mit `maximumFractionDigits: 3`, und dann `maximumSignificantDigits: 2`, und dann beides.
Der Wert mit beidem ist der, der mit `maximumSignificantDigits` gesetzt wird.

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

Durch die Verwendung von [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions), um den Formatter zu überprüfen, können wir sehen, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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

Beachten Sie, dass der Algorithmus auf eine unintuitive Weise funktionieren kann, wenn ein Minimalwert angegeben wird, ohne dass ein Maximalwert vorliegt.
Das Beispiel unten formatiert den Wert `1` und gibt `minimumFractionDigits: 2` (formatieren bis `1.00`) und `minimumSignificantDigits: 2` (formatieren bis `1.0`) an.
Da `1.00` mehr Ziffern hat als `1.0`, sollte dies das Ergebnis sein, wenn "mehr Präzision" priorisiert wird, aber tatsächlich ist das Gegenteil der Fall:

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

Der Grund dafür ist, dass nur die Werte für "maximale Präzision" für die Berechnung verwendet werden, und der Standardwert von `maximumSignificantDigits` ist viel höher als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Modifikation des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis bei der Verwendung der angegebenen Bruch- und signifikanten Ziffern unabhängig bewerten sollte (unter Berücksichtigung sowohl von Minimum- als auch Maximumwerten).
> Anschließend wird die Option ausgewählt, die mehr Bruchziffern anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist.
> Dies wird in diesem Fall ein intuitiveres Verhalten zur Folge haben.

### Rundungsmodi

Wenn ein Wert mehr Bruchziffern als die durch die Konstruktoroptionen zulässige Anzahl hat, wird der formatierte Wert _gerundet_ auf die angegebene Anzahl von Bruchziffern.
Die _Art_, in der der Wert gerundet wird, hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab.

Zahlenformatierer verwenden standardmäßig `halfExpand` Rundung, die Werte am halben Inkrement "vom Nullpunkt weg" rundet (mit anderen Worten, der _Betrag_ des Wertes wird aufgerundet).

Bei einer positiven Zahl, wenn die zu entfernenden Bruchziffern näher am nächsten Inkrement sind (oder am halben Punkt), werden die verbleibenden Bruchziffern aufgerundet, ansonsten werden sie abgerundet.
Das wird unten gezeigt: 2.23 gerundet auf zwei signifikante Ziffern wird auf 2.2 gekürzt, weil 2.23 kleiner als das halbe Inkrement 2.25 ist, während Werte von 2.25 und größer auf 2.3 gerundet werden:

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

Eine negative Zahl am oder unter dem Halbincrementpunkt wird auch "vom Nullpunkt weg" gerundet (wird negativer):

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

Die Tabelle unten zeigt die Wirkung verschiedener Rundungsmodi für positive und negative Werte, die auf und um das Halbincrement liegen.

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

Beim Verwenden von `halfEven` hängt sein Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der obigen Tabelle dasselbe wie `halfTrunc`, weil die Beträge aller Zahlen sich zwischen einer kleineren „geraden“ Zahl (2.2) und einer größeren „ungeraden“ Zahl (2.3) befinden. Wenn sich die Zahlen zwischen ±2.3 und ±2.4 befinden, wird `halfEven` stattdessen wie `halfExpand` agieren. Dieses Verhalten vermeidet eine konstant zu große oder zu kleine Schätzung von Halbincremente in einer großen Datenprobe.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Bruchziffern auf ein anderes Inkrement als die nächste ganze Zahl runden.
Zum Beispiel möchten Währungen, bei denen die kleinste Münze 5 Cent ist, den Betrag auf 5er-Inkremente runden, um Beträge widerzuspiegeln, die tatsächlich in bar bezahlt werden können.

Diese Art von Rundung kann mit der [`roundingIncrement`](#roundingincrement) Eigenschaft erreicht werden.

Zum Beispiel, wenn `maximumFractionDigits` 2 ist und `roundingIncrement` 5, wird die Zahl auf das nächste 0.05 gerundet:

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

Diese spezielle Muster wird als "Nickelrundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine 5-Cent-Münze in den USA ist.
Um auf die nächsten 10 Cent ("Dimerundung") zu runden, können Sie `roundingIncrement` auf `10` setzen.

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
Das folgende Beispiel zeigt, wie `halfCeil` Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des Halbrundungsinkrements zu runden und "mehr positiv", wenn er darüber oder auf dem Halbincrement liegt.
Die inkrementierte Ziffer ist „0,05“, sodass das Halbincrement bei .025 liegt (unten wird dies bei 11.225 gezeigt).

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

`roundingIncrement` kann nicht mit der Rundung von signifikanten Ziffern oder einer Einstellung von `roundingPriority` anderen als `auto` kombiniert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
