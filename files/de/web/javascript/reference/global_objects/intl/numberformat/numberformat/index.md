---
title: Intl.NumberFormat() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
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

> **Note:** `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Intl.NumberFormat` Instanz. Es gibt jedoch ein besonderes Verhalten, wenn es ohne `new` aufgerufen wird und der `this` Wert eine andere `Intl.NumberFormat` Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder einer {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit wird die Eigenschaftsliste in Abschnitte aufgeteilt, die auf ihre Zwecke basieren, einschließlich [Locale-Optionen](#locale-optionen), [Stil-Optionen](#stil-optionen), [Ziffern-Optionen](#ziffern-optionen) und [andere Optionen](#andere_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Algorithmus zum Abgleichen von Locales. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Identifizierung und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem für die Zahlenformatierung, wie z.B. `"arab"`, `"hans"`, `"mathsans"`, usw. Eine Liste unterstützter Nummerierungssystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.

#### Stil-Optionen

Je nach verwendetem `style` können einige ignoriert und andere erforderlich sein:

- `style`
  - : Der zu verwendende Formatstil.
    - `"decimal"` (Standard)
      - : Für einfaches Nummernformat.
    - `"currency"`
      - : Für Währungsformatierung.
    - `"percent"`
      - : Für Prozent-Formatierung.
    - `"unit"`
      - : Für Einheitsformatierung.
- `currency`
  - : Die Währung, die bei der Währungsformatierung verwendet werden soll. Mögliche Werte sind die ISO 4217 Währungscodes, wie z.B. `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für das chinesische RMB — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency` Eigenschaft angegeben werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung bei der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokales Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Format-Symbol ("$100" anstelle von "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Locales bedeutet das Rechnungsformat, die Zahl mit Klammern zu umgeben, anstatt ein Minuszeichen hinzuzufügen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die Einheit, die bei der `unit`-Formatierung verwendet werden soll. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgelistet. Paare einfacher Einheiten können mit "-per-" zu einer Kombinationseinheit verbunden werden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit` Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der Stil der Einheitsformatierung, der bei der `unit`-Formatierung verwendet werden soll. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B., `16 l`.
    - `"narrow"`
      - : Z.B., `16l`.
    - `"long"`
      - : Z.B., `16 litres`.

#### Ziffern-Optionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die Mindestanzahl an Ganzzahlenziffern, die verwendet werden sollen. Ein Wert mit einer kleineren Anzahl an Integer-Ziffern als dieser Wert wird mit Nullen (auf die angegebene Länge) links gepolstert, wenn er formatiert wird. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die Mindestanzahl an Dezimalstellen, die verwendet werden sollen. Mögliche Werte sind von `0` bis `100`; der Standardwert für die einfache Zahlen- und Prozent-Formatierung ist `0`; der Standardwert für die Währungsformatierung ist die Anzahl der in der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) angegebenen kleineren Einheitsziffern (2, wenn die Liste diese Information nicht liefert). Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values) dafür, wann dieser Standard angewendet wird.
- `maximumFractionDigits`
  - : Die maximale Anzahl an Dezimalstellen, die verwendet werden soll. Mögliche Werte sind von `0` bis `100`; der Standardwert für die einfache Zahlenformatierung ist das größere von `minimumFractionDigits` und `3`; der Standardwert für die Währungsformatierung ist das größere von `minimumFractionDigits` und die Anzahl der in der [ISO 4217 Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) angegebenen kleineren Einheitsziffern (2, wenn die Liste diese Information nicht liefert); der Standardwert für die Prozentformatierung ist das größere von `minimumFractionDigits` und 0. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values) dafür, wann dieser Standard angewendet wird.
- `minimumSignificantDigits`
  - : Die Mindestanzahl an signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `1`. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values) dafür, wann dieser Standard angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl an signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `21`. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values) dafür, wann dieser Standard angewendet wird.
- `roundingPriority`

  - : Gibt an, wie Rundungskonflikte gelöst werden, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind. Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis wird aus der Eigenschaft der signifikanten Ziffern abgeleitet.
    - `"morePrecision"`
      - : Das Ergebnis aus der Eigenschaft, die zu mehr Präzision führt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis aus der Eigenschaft, die zu weniger Präzision führt, wird verwendet.

    Der Wert `"auto"` wird zu `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keine der vier "FractionDigits"/"SignificantDigits"-Optionen gesetzt sind.

    Beachten Sie, dass für andere Werte als `auto` das Ergebnis mit mehr Präzision von den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (die Minimum-Ziffern-Einstellungen werden ignoriert).

- `roundingIncrement`

  - : Gibt das Inkrement an, bei dem die Rundung in Bezug auf die berechnete Rundungsgröße erfolgen soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`; der Standardwert ist `1`. Es kann nicht mit der Rundung nach signifikanten Ziffern oder einer Einstellung von `roundingPriority` außer `auto` gemischt werden.

- `roundingMode`

  - : Wie Dezimalstellen gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Rundung aufwärts zu +∞. Positive Werte werden aufgerundet. Negative Werte runden "weniger negativ".
    - `"floor"`
      - : Rundung abwärts zu -∞. Positive Werte werden abgerundet. Negative Werte runden "mehr negativ".
    - `"expand"`
      - : Rundung vom 0 weg. Der _Größe_ des Wertes wird immer vergrößert durch Rundung. Positive Werte werden aufgerundet. Negative Werte runden "mehr negativ".
    - `"trunc"`
      - : Rundung zu 0 hin. Der _Größe_ des Wertes wird durch Rundung immer reduziert. Positive Werte werden abgerundet. Negative Werte runden "weniger negativ".
    - `"halfCeil"`
      - : Bindungen zu +∞. Werte über dem Halbinkrement runden wie `"ceil"` (zu +∞), und darunter wie `"floor"` (zu -∞). Bei Halbinkrementen runden die Werte wie `"ceil"`.
    - `"halfFloor"`
      - : Bindungen zu -∞. Werte über dem Halbinkrement runden wie `"ceil"` (zu +∞), und darunter wie `"floor"` (zu -∞). Bei Halbinkrementen runden die Werte wie `"floor"`.
    - `"halfExpand"` (Standard)
      - : Bindungen von 0 entfernt. Werte über dem Halbinkrement runden wie `"expand"` (von Null entfernt), und darunter wie `"trunc"` (zu 0 hin). Bei Halbinkrementen runden die Werte wie `"expand"`.
    - `"halfTrunc"`
      - : Bindungen zu 0 hin. Werte über dem Halbinkrement runden wie `"expand"` (von Null entfernt), und darunter wie `"trunc"` (zu 0 hin). Bei Halbinkrementen runden die Werte wie `"trunc"`.
    - `"halfEven"`
      - : Bindungen zu der nächstgelegenen geraden Ganzzahl. Werte über dem Halbinkrement runden wie `"expand"` (von Null entfernt), und darunter wie `"trunc"` (zu 0 hin). Bei Halbinkrementwerten runden sie zur nächstgelegenen geraden Stelle.

    Diese Optionen spiegeln den [ICU Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, bei dem "expand" und "trunc" auf ICU "UP" und "DOWN" abgebildet werden.
    Das untenstehende Beispiel zu [Rundungsmodi](#rundungsmodi) zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige von führenden Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie führende Nullen gemäß `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Nachkommastellen _wenn_ sie alle null sind. Dies entspricht `"auto"` wenn eine der Nachkommastellen ungleich null ist.

##### Standardwerte für SignificantDigits/FractionDigits

Für die vier oben genannten Optionen (die Optionen `FractionDigits` und `SignificantDigits`) haben wir deren Standardwerte erwähnt; diese Standards werden jedoch _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich genutzt wird, was von den Einstellungen von [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Insbesondere:

- Wenn `roundingPriority` nicht `"auto"` ist, gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits` Option gesetzt ist, gelten die `SignificantDigits` Optionen und die `FractionDigits` Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist und entweder mindestens eine `FractionDigits` Option gesetzt ist oder `notation` nicht `"compact"` ist, gelten die `FractionDigits` Optionen und die `SignificantDigits` Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist und keine der vier Optionen gesetzt ist, werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den oben genannten Standards, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Die Darstellung, die für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfaches Nummernformat.
    - `"scientific"`
      - : Gibt den Größenordner der formatierten Zahl zurück.
    - `"engineering"`
      - : Gibt den Exponenten der 10 zurück, wenn dieser durch drei teilbar ist.
    - `"compact"`
      - : Zeichenkette, die den Exponenten darstellt; verwendet standardmäßig die kurze Form.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.
- `useGrouping`

  - : Ob Gruppierungszeichen verwendet werden sollen, wie z.B. Tausendertrennzeichen oder Tausender/Lakh/Kore-Trennzeichen.

    - `"always"`
      - : Gruppierungszeichen immer anzeigen, auch wenn die Locale dies anders bevorzugt.
    - `"auto"`
      - : Gruppierungstrennzeichen basierend auf den Locale-Voreinstellungen anzeigen, was auch von der Währung abhängig sein kann.
    - `"min2"`
      - : Gruppierungstrennzeichen anzeigen, wenn mindestens 2 Ziffern in einer Gruppe sind.
    - `true`
      - : Wie `"always"`.
    - `false`
      - : Keine Gruppierungstrennzeichen anzeigen.

    Der Standardwert ist `"min2"` wenn `notation` `"compact"` ist und sonst `"auto"`. Die Zeichenkettenwerte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert konvertiert.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenanzeige nur für negative Zahlen, einschließlich negativem Null.
    - `"always"`
      - : Vorzeichen immer anzeigen.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, aber nicht für Null.
    - `"negative"`
      - : Vorzeichenanzeige nur für negative Zahlen, ausgenommen negativem Null.
    - `"never"`
      - : Vorzeichen nie anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat` Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" markiert ist. Es kann in allen Umgebungen nicht funktionieren. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat` Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde, sondern nur, dass es `Intl.NumberFormat.prototype` in seiner Prototypkette hat), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.NumberFormat` Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]` Eigenschaft (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird) verborgen bleibt.

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.NumberFormat` Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Wenn die [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) Methoden auf `formatter` aufgerufen werden, würden sie korrekt die in dieser Instanz gespeicherten Optionen verwenden, aber alle anderen Methodenaufrufe (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würden mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden die Optionen der versteckten Instanz nicht befragen.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, aber mit `this` auf irgendetwas anderes gesetzt ist, das nicht ein `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this` Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat` Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die enumerierte Werte annimmt (wie `style`, `units`, `currency`, usw.), ist auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt und auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass diese Eigenschaften je nach verschiedenen Formatierungsoptionen Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu erhalten, selbst wenn Sie nur eine der Eigenschaften gesetzt haben.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `options.style` Eigenschaft auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` festgelegt wurde.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe einer Locale wird ein formatierter String in der Standard-Locale und mit Standardoptionen zurückgegeben.

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

Wenn der `style` `'unit'` ist, muss eine `unit`-Eigenschaft angegeben werden.
Optionale kann `unitDisplay` die Einheitsformatierung steuern.

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

Wenn der `style` `'currency'` ist, muss eine `currency`-Eigenschaft angegeben werden. Optional können `currencyDisplay` und `currencySign` die Einheitsformatierung steuern.

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

### Vorzeichen anzeigen

Ein Vorzeichen für positive und negative Zahlen anzeigen, jedoch nicht für Null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass bei der Währungszeichen "accounting" Klammern anstelle eines Minuszeichens verwendet werden könnten:

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

Sie können die Mindest- oder Höchstanzahl von Bruch-, Ganz- oder signifikanten Ziffern angeben, die bei der Formatierung einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl signifikante als auch Fraktionalbegrenzungen angegeben werden, hängt die tatsächliche Formatierung von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganzzahl- und Bruchzifferneigenschaften geben die Anzahl der Ziffern an, die vor und nach dem Dezimalpunkt angezeigt werden sollen. Wenn der anzuzeigende Wert weniger Ganzzahldigits als spezifiziert aufweist, wird er mit Nullen links gepolstert, um die erwartete Zahl zu erreichen. Wenn er weniger Bruchdigits aufweist, wird er rechts gepolstert. Beide Fälle sind unten gezeigt:

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

Wenn ein Wert mehr Bruchziffern als die angegebene maximale Anzahl aufweist, wird er gerundet. Die Art und Weise, wie gerundet wird, hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab (es werden weitere Details im Abschnitt über [Rundungsmodi](#rundungsmodi) bereitgestellt). Unten wird der Wert von fünf Bruchziffern (`4.33145`) auf zwei (`4.33`) gerundet:

```js
// Display value shortened to maximum number of digits
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(4.33145),
);
// "4.33"
```

Die minimalen Bruchziffern haben keine Wirkung, wenn der Wert bereits mehr als 2 Bruchziffern hat:

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
> Achten Sie auf Standardwerte, da diese die Formatierung beeinflussen können, selbst wenn sie nicht in Ihrem Code angegeben sind. Der Standardwert für die maximale Ziffer ist `3` für einfache Werte, `2` für Währung und kann für andere vordefinierte Typen unterschiedliche Werte haben.

Der formatierte Wert oben wird auf 3 Stellen gerundet, obwohl wir die maximale Anzahl der Stellen nicht angegeben haben! Das liegt daran, dass ein Standardwert von `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte für `maximumFractionDigits` und `minimumFractionDigits` sind `3` und `0` respektive.

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

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtanzahl der Ziffern einschließlich beider Ganzzahlen und Bruchteile. Die `maximumSignificantDigits` wird verwendet, um die Gesamtanzahl der Ziffern aus dem Ursprungswert anzuzeigen.

Die folgenden Beispiele zeigen, wie dies funktioniert. Beachten Sie besonders den letzten Fall: Nur die erste Ziffer wird beibehalten und die anderen werden verworfen/auf null gesetzt.

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

Die `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl an Ziffern angezeigt wird, indem bei Bedarf Nullen am Ende des Wertes hinzugefügt werden.

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
> Wenn nur eine `SignificantDigits` Eigenschaft verwendet wird, wird der Gegenpart automatisch mit dem Standardwert angewendet.
> Die Standardwerte für die maximale und minimale signifikante Ziffern betragen 21 und 1 respektive.

#### Gleichzeitige Angabe von signifikanten und fraktionalen Ziffern

Die Fraktionziffern ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten, um zu steuern, wie viele Bruch- und führende Ziffern formatiert werden sollen. Wenn beide gleichzeitig verwendet werden, können sie in Konflikt geraten.

Diese Konflikte werden durch die [`roundingPriority`](#roundingpriority) Eigenschaft gelöst. Standardmäßig hat diese den Wert `"auto"`, was bedeutet, dass wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#maximumsignificantdigits) angegeben sind, die Fraktions- und Ganzzahldigiteigenschaften ignoriert werden.

Zum Beispiel formatiert der untenstehende Code den Wert `4.33145` mit `maximumFractionDigits: 3`, und dann mit `maximumSignificantDigits: 2`, und dann mit beiden. Der Wert mit beiden ist der, der mit `maximumSignificantDigits` gesetzt wurde.

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

Die Verwendung von [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) zur Inspektion des Formatters zeigt, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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

Zusätzlich zu `"auto"` können Sie Konflikte lösen, indem Sie [`roundingPriority`](#roundingpriority) als `"morePrecision"` oder `"lessPrecision"` angeben. Der Formatter berechnet die Präzision unter Verwendung der Werte von `maximumSignificantDigits` und `maximumFractionDigits`.

Der untenstehende Code zeigt das ausgewählte Format für die drei verschiedenen Rundungsprioritäten:

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

Beachten Sie, dass der Algorithmus auf eine unanschauliche Weise reagieren kann, wenn ein Minimalwert ohne einen Maximalwert angegeben ist. Das untenstehende Beispiel formatiert den Wert `1` mit Angabe von `minimumFractionDigits: 2` (formatierend zu `1.00`) und `minimumSignificantDigits: 2` (formatierend zu `1.0`). Da `1.00` mehr Ziffern hat als `1.0`, sollte dies das Ergebnis sein, wenn `morePrecision` priorisiert wird, aber in der Tat ist das Gegenteil der Fall:

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

Der Grund dafür ist, dass nur die "maximalpräzisen" Werte für die Berechnung verwendet werden, und der Standardwert von `maximumSignificantDigits` viel höher als `maximumFractionDigits` ist.

> [!NOTE]
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei dem der Formatter das Ergebnis der Verwendung der angegebenen fraktionalen und signifikanten Ziffern unabhängig bewertet (unter Berücksichtigung beider Minimal- und Maximalwerte). Es wird dann die Option ausgewählt, die mehr fraktionale Ziffern anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist. Dies wird ein intuitiveres Verhalten für diesen Fall ergeben.

### Rundungsmodi

Wenn ein Wert mehr Bruchziffern hat, als durch die Konstruktoroptionen erlaubt, wird der formatierte Wert auf die angegebene Anzahl an Bruchziffern _gerundet_. Die _Art und Weise_, wie der Wert gerundet wird, hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab.

Zahlformatierer verwenden standardmäßig `halfExpand` Runden, was Werte "von Null weg" am Halbinkrement rundet (in anderen Worten, die _Größe_ des Wertes wird aufgerundet).

Für eine positive Zahl, wenn die zu entfernenden Bruchziffern näher an der nächsten Inkremenz liegen (oder am halben Punkt), dann werden die verbleibenden Bruchziffern aufgerundet, andernfalls werden sie abgerundet. Dies wird unten gezeigt: 2.23, gerundet auf zwei signifikante Ziffern, wird auf 2.2 gekürzt, weil 2.23 weniger als das Halbinkrement 2.25 ist, während die Werte von 2.25 und größer auf 2.3 aufgerundet werden:

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

Ein negativer Wert am oder unter dem Halbinkrementpunkt wird ebenfalls von Null weg gerundet (wird negativer):

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

Die Tabelle unten zeigt die Auswirkungen der verschiedenen Rundungsmodi auf positive und negative Werte, die am und um das Halbinkrement liegen.

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

Bei Verwendung von `halfEven` hängt sein Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der Tabelle oben das gleiche wie `halfTrunc`, weil die Größen aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, verhält sich `halfEven` stattdessen wie `halfExpand`. Dieses Verhalten vermeidet konsistentes Unter- oder Überschätzen von Halbinkrementen in einem großen Datenbestand.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Bruchziffern auf ein anderes Inkrement als die nächste Ganzzahl runden. Zum Beispiel könnten Währungen, für die die kleinste Münze 5 Cent beträgt, den Wert auf Inkremente von 5 runden wollen, um Beträge wiederzuspiegeln, die tatsächlich in bar bezahlt werden können.

Diese Art des Rundens kann mit der [`roundingIncrement`](#roundingincrement) Eigenschaft erreicht werden.

Zum Beispiel, wenn `maximumFractionDigits` 2 und `roundingIncrement` 5 ist, wird die Zahl auf den nächsten 0,05 gerundet:

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

Dieses spezielle Muster wird als "Nickel-Rundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine US-amerikanische 5-Cent-Münze ist. Um auf den nächsten 10 Cent ("Dime-Rundung") zu runden, könnten Sie `roundingIncrement` auf `10` ändern.

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

Sie können auch [`roundingMode`](#roundingmode) verwenden, um den Rundungsalgorithmus zu ändern. Das untenstehende Beispiel zeigt, wie `halfCeil` Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des halben Rundungsinkrementes zu runden und "mehr positiv" wenn oberhalb oder auf dem Halbinkrement. Die inkrementierte Ziffer ist "0,05", was das Halbinkrement bei .025 (unten bei 11,225 angezeigt) zeigt.

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

Wenn Sie die Anzahl der Stellen ändern müssen, denken Sie daran, dass `minimumFractionDigits` und `maximumFractionDigits` beide auf den gleichen Wert gesetzt werden müssen, andernfalls wird ein `RangeError` ausgelöst.

`roundingIncrement` kann nicht mit der Rundung nach signifikanten Ziffern oder einer anderen Einstellung von `roundingPriority` als `auto` gemischt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
