---
title: Intl.NumberFormat()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`Intl.NumberFormat()`**-Konstruktor erstellt {{jsxref("Intl.NumberFormat")}}-Objekte.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html", "taller")}}

## Syntax

```js-nolint
new Intl.NumberFormat()
new Intl.NumberFormat(locales)
new Intl.NumberFormat(locales, options)

Intl.NumberFormat()
Intl.NumberFormat(locales)
Intl.NumberFormat(locales, options)
```

> **Note:** `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erstellen eine neue `Intl.NumberFormat`-Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der `this`-Wert eine andere `Intl.NumberFormat`-Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachtag oder eine {{jsxref("Intl.Locale")}}-Instanz, oder ein Array solcher Gebietsschema-Bezeichner. Das Standard-Gebietsschema der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Gebietsschema-Bezeichner unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` festgelegt werden (wie unten aufgeführt). Wenn beide festgelegt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit wird die Eigenschaftsliste basierend auf ihren Zwecken in Abschnitte unterteilt: [Gebietsschema-Optionen](#gebietsschema-optionen), [Stiloptionen](#stiloptionen), [Zahlenoptionen](#zahlenoptionen) und [andere Optionen](#andere_optionen).

#### Gebietsschema-Optionen

- `localeMatcher`
  - : Der zu verwendende Gebietsschema-Abgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Erkennung und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das zu verwendende Zahlensystem für die Zahlformatierung, wie `"arab"`, `"hans"`, `"mathsans"`, und so weiter. Für eine Liste der unterstützten Zahlensystemtypen siehe [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.

#### Stiloptionen

Abhängig vom verwendeten `style` können einige ignoriert und andere erforderlich sein:

- `style`
  - : Der zu verwendende Formatstil.
    - `"decimal"` (Standard)
      - : Für einfaches Zahlenformat.
    - `"currency"`
      - : Für Währungsformatierung.
    - `"percent"`
      - : Für Prozentsatzformatierung.
    - `"unit"`
      - : Für Einheitenformatierung.
- `currency`
  - : Die in der Währungsformatierung zu verwendende Währung. Mögliche Werte sind die ISO 4217-Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB — siehe die [aktuelle Währungs- und Fonds-Code-Liste](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency`-Eigenschaft angegeben werden.
- `currencyDisplay`
  - : Wie die Währung in der Währungsformatierung angezeigt wird.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokalisiertes Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" statt "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Gebieten bedeutet das Rechnungsformat, die Zahl in Klammern zu setzen, anstatt ein Minuszeichen anzuhängen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die Einheit, die bei der `unit`-Formatierung verwendet werden soll. Mögliche Werte sind Kern-Einheitskennungen, definiert in [UTS #35, Teil 2, Abschnitt 6](https://unicode.org/reports/tr35/tr35-general.html#Unit_Elements). Ein [Teilmenge](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers) von Einheiten aus der [vollständigen Liste](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml) wurde für die Verwendung in ECMAScript ausgewählt. Paare einfacher Einheiten können mit "-per-" zusammengefügt werden, um eine Kompositionseinheit zu bilden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit`-Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der Einheitformatierstil, der bei der `unit`-Formatierung verwendet werden soll. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B. `16 l`.
    - `"narrow"`
      - : Z.B. `16l`.
    - `"long"`
      - : Z.B. `16 Liter`.

#### Zahlenoptionen

Die folgenden Eigenschaften werden ebenfalls von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die Mindestanzahl von Ganzzahlen, die verwendet werden sollen. Ein Wert mit weniger Ganzzahlen als diese Zahl wird beim Formatieren links mit Nullen (auf die angegebene Länge) aufgefüllt. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die Mindestanzahl von Nachkommastellen, die verwendet werden sollen. Mögliche Werte liegen zwischen `0` und `100`; der Standardwert für einfaches Zahlen- und Prozentsatzformat ist `0`; der Standardwert für die Währungsformatierung ist die Anzahl der von der [ISO 4217-Währungscode-Liste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellten kleineren Einheitstellen (2, wenn die Liste diese Information nicht bereitstellt).
- `maximumFractionDigits`
  - : Die maximale Anzahl von Nachkommastellen, die verwendet werden sollen. Mögliche Werte liegen zwischen `0` und `100`; der Standardwert für einfaches Zahlenformat ist der größere Wert zwischen `minimumFractionDigits` und `3`; der Standardwert für Währungsformatierung ist der größere Wert zwischen `minimumFractionDigits` und der Anzahl der von der [ISO 4217-Währungscode-Liste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellten kleineren Einheitstellen (2, wenn die Liste diese Information nicht bereitstellt); der Standardwert für Prozentsatzformatierung ist der größere Wert zwischen `minimumFractionDigits` und 0.
- `minimumSignificantDigits`
  - : Die Mindestanzahl von signifikanten Stellen, die verwendet werden sollen. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `1`.
- `maximumSignificantDigits`
  - : Die maximale Anzahl von signifikanten Stellen, die verwendet werden sollen. Mögliche Werte liegen zwischen `1` und `21`; der Standardwert ist `21`.

Die obigen Eigenschaften fallen in zwei Gruppen: `minimumIntegerDigits`, `minimumFractionDigits` und `maximumFractionDigits` in einer Gruppe, `minimumSignificantDigits` und `maximumSignificantDigits` in der anderen. Wenn Eigenschaften aus beiden Gruppen angegeben sind, werden Konflikte im resultierenden Anzeigeformat basierend auf dem Wert der [`roundingPriority`](#roundingpriority)-Eigenschaft gelöst.

- `roundingPriority`

  - : Gibt an, wie Rundungskonflikte gelöst werden, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis der signifikanten Stellen-Eigenschaft wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis der Eigenschaft mit höherer Präzision wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis der Eigenschaft mit geringerer Präzision wird verwendet.

    Beachten Sie, dass bei anderen Werten als `auto` das Ergebnis mit mehr Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) (Mindeststoppen und signifikante Stellentstellungen werden ignoriert) berechnet wird.

- `roundingIncrement`

  - : Gibt das Inkrement an, bei dem eine Rundung relativ zur berechneten Rundungsmagnitud erfolgen soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`. Es kann nicht mit signifikante-Stellen-Rundung oder einer anderen Einstellung als `auto` von `roundingPriority` gemischt werden.

- `roundingMode`

  - : Wie Dezimalzahlen gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Rundung gegen +∞. Positive Werte werden nach oben gerundet. Negative Werte werden "positiver".
    - `"floor"`
      - : Rundung gegen -∞. Positive Werte werden nach unten gerundet. Negative Werte werden "negativer".
    - `"expand"`
      - : Rundung weg von 0. Der _Betrag_ des Werts wird durch Rundung immer erhöht. Positive Werte werden nach oben gerundet. Negative Werte werden "negativer".
    - `"trunc"`
      - : Rundung zu 0. Dieser _Betrag_ des Werts wird durch Rundung immer reduziert. Positive Werte werden nach unten gerundet. Negative Werte werden "weniger negativ".
    - `"halfCeil"`
      - : Bindung gegen +∞. Werte über dem Halbinkrement werden wie `"ceil"` (gegen +∞) gerundet, und darunter wie `"floor"` (gegen -∞). Beim Halbinkrement werden Werte wie `"ceil"` gerundet.
    - `"halfFloor"`
      - : Bindung gegen -∞. Werte über dem Halbinkrement werden wie `"ceil"` (gegen +∞) gerundet, und darunter wie `"floor"` (gegen -∞). Beim Halbinkrement werden Werte wie `"floor"` gerundet.
    - `"halfExpand"` (Standard)
      - : Bindungen weg von 0. Werte über dem Halbinkrement werden wie `"expand"` (weg von Null) gerundet, und darunter wie `"trunc"` (zu Null). Beim Halbinkrement werden Werte wie `"expand"` gerundet.
    - `"halfTrunc"`
      - : Bindung zu Null. Werte über dem Halbinkrement werden wie `"expand"` (weg von Null) gerundet, und darunter wie `"trunc"` (zu Null). Beim Halbinkrement werden Werte wie `"trunc"` gerundet.
    - `"halfEven"`
      - : Bindungen zum nächstgelegenen geraden Ganzzahl. Werte über dem Halbinkrement werden wie `"expand"` (weg von Null) gerundet, und darunter wie `"trunc"` (zu Null). Beim Halbinkrement werden Werte zur nächstgelegenen geraden Ziffer gerundet.

    Diese Optionen spiegeln den [ICU-Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, bei dem "expand" und "trunc" auf ICU "UP" bzw. "DOWN" abgebildet werden.
    Das untenstehende Beispiel zu [Rundungsmodi](#rundungsmodi) zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zum Anzeigen nachgestellter Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie nachgestellte Nullen gemäß `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Nachkommastellen, _wenn_ sie alle Null sind. Dies entspricht `"auto"`, wenn eine der Nachkommastellen ungleich Null ist.

#### Andere Optionen

- `notation`
  - : Die Anzeige, die für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfaches Zahlenformat.
    - `"scientific"`
      - : Ordnung der Größenordnung für formatierte Zahl zurückgeben.
    - `"engineering"`
      - : Geben Sie die Zehnerpotenz zurück, wenn sie durch drei teilbar ist.
    - `"compact"`
      - : Zeichenfolge, die den Exponenten darstellt; Standardmäßig wird die "kurze" Form verwendet.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.
- `useGrouping`

  - : Ob Gruppierungstrennzeichen wie Tausendertrennzeichen oder Tausender/Lakh/Crore-Trennzeichen verwendet werden sollen.

    - `"always"`
      - : Zeigt Gruppierungstrennzeichen an, selbst wenn das Gebietsschema etwas anderes bevorzugt.
    - `"auto"`
      - : Zeigt Gruppierungstrennzeichen basierend auf der Präferenz des Gebietsschemas an, das auch von der Währung abhängig sein kann.
    - `"min2"`
      - : Zeigt Gruppierungstrennzeichen an, wenn mindestens 2 Ziffern in einer Gruppe vorhanden sind.
    - `true`
      - : Entspricht `"always"`.
    - `false`
      - : Zeigt keine Gruppierungstrennzeichen an.

    Der Standard ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` andernfalls. Die Zeichenkettenwerte `"true"` und `"false"` werden akzeptiert, aber immer auf den Standardwert umgestellt.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenanzeige nur für negative Zahlen, einschließlich negativer Null.
    - `"always"`
      - : Vorzeichen immer anzeigen.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, aber nicht für Null.
    - `"negative"`
      - : Vorzeichenanzeige nur für negative Zahlen, ohne die negative Null.
    - `"never"`
      - : Vorzeichen nie anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat`-Objekt.

> [!NOTE]
> Der untenstehende Text beschreibt ein Verhalten, das in der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat`-Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (das bedeutet nicht unbedingt, dass es über `new Intl.NumberFormat` erstellt wurde; nur dass es die `Intl.NumberFormat.prototype` in seiner Prototypenkette hat), wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.NumberFormat`-Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]`-Eigenschaft (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird) verborgen ist.

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.NumberFormat`-Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) bei `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden die versteckten Instanzoptionen nicht berücksichtigen.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, aber `this` auf alles andere gesetzt wird, das nicht ein `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this`-Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat`-Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die aufgezählte Werte annimmt (wie `style`, `units`, `currency`, usw.) ist auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt, und sie sind auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass je nach verschiedenen Formatierungsoptionen, diese Eigenschaften Standardwerte haben können.
      Daher ist es möglich, diesen Fehler zu erhalten, selbst wenn Sie nur eine der Eigenschaften festgelegt haben.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `options.style`-Eigenschaft auf "unit" oder "currency" gesetzt ist, und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` festgelegt wurde.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe eines Gebietsschemas wird eine formatierte Zeichenfolge im Standard-Gebietsschema und mit den Standardeinstellungen zurückgegeben.

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

Wenn der `style` `'unit'` ist, muss eine `unit`-Eigenschaft bereitgestellt werden.
Optional regelt `unitDisplay` die Einheitenformatierung.

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
bereitgestellt werden. Optional regeln `currencyDisplay` und
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

Wissenschaftliche und kompakte Notation werden durch die `notation`-Option dargestellt und können so formatiert werden:

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

Anzeigen eines Vorzeichens für positive und negative Zahlen, aber nicht für Null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass wenn das Währungssymbol "accounting" ist, Klammern anstelle eines Minuszeichens verwendet werden könnten:

```js
new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
  signDisplay: "always",
}).format(-3500);
// '($3,500.00)'
```

### FractionDigits-, SignificantDigits- und IntegerDigits-Anzeigeoptionen

Sie können die minimale oder maximale Anzahl von Fraktional-, Ganz- oder signifikanten Stellen angeben, die beim Formatieren einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl signifikante als auch fraktionale Stellenlimits angegeben sind, hängt das eigentliche Format vom Wert der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganzzahl- und Bruchzifferneigenschaften zeigen die Anzahl der Ziffern an, die vor bzw. nach dem Dezimalpunkt angezeigt werden sollen.
Wenn der anzuzeigende Wert weniger Ganzzahlen als angegeben hat, wird er mit Nullen auf die erwartete Anzahl links aufgefüllt.
Wenn es weniger Nachkommastellen hat, wird es mit Nullen rechts aufgefüllt.
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

Wenn ein Wert mehr Nachkommastellen als die angegebene maximale Anzahl hat, wird er gerundet.
Die _Art_, wie er gerundet wird, hängt von der [`roundingMode`](#roundingmode)-Eigenschaft ab (mehr Details sind im Abschnitt [Rundungsmodi](#rundungsmodi) angegeben).
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

Die minimalen Nachkommastellen haben keine Auswirkung, wenn der Wert bereits mehr als 2 Nachkommastellen hat:

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
> Achten Sie auf Standardwerte, da sie die Formatierung beeinflussen können, selbst wenn sie nicht im Code spezifiziert sind.
> Der Standardwert für die maximale Anzahl von Stellen ist `3` für einfache Werte, `2` für Währungen und kann für andere vordefinierte Typen verschiedene Werte haben.

Der obige formatierte Wert wird auf 3 Stellen gerundet, auch wenn wir die maximale Anzahl von Stellen nicht spezifiziert haben!
Dies liegt daran, dass ein Standardwert von `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` und `0`, beziehungsweise.

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

Die Anzahl der _signifikanten Stellen_ ist die Gesamtanzahl von Ziffern, einschließlich sowohl Ganz- als auch Nachkommastellen.
Das `maximumSignificantDigits` wird verwendet, um die Gesamtanzahl von Ziffern aus dem ursprünglichen Wert anzuzeigen.

Die untenstehenden Beispiele zeigen, wie dies funktioniert.
Beachten Sie besonders den letzten Fall: nur die erste Ziffer wird beibehalten und die anderen werden verworfen oder auf Null gesetzt.

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

Das `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl von Ziffern angezeigt wird, indem bei Bedarf Nullen zum Ende des Werts hinzugefügt werden.

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
> Achten Sie auf Standardwerte, da sie die Formatierung beeinflussen können, selbst wenn nur eine `SignificantDigits`-Eigenschaft verwendet wird, wird ihr Gegenstück automatisch mit dem Standardwert angewendet.
> Die Standardwerte für die maximale und minimale signifikante Ziffer sind 20 bzw. 1.

#### Angabe von signifikanten und Bruchziffern gleichzeitig

Die Bruchziffern ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten, zu steuern, wie viele Bruch- und führende Ziffern formatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, können sie in Konflikt geraten.

Diese Konflikte werden durch die [`roundingPriority`](#roundingpriority)-Eigenschaft gelöst.
Standardmäßig hat dies einen Wert von `"auto"`, was bedeutet, dass wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#minimumsignificantdigits) angegeben ist, die Bruch- und Ganzzahl-Eigenschaften ignoriert werden.

Zum Beispiel formatiert der untenstehende Code den Wert von `4.33145` mit `maximumFractionDigits: 3`, dann mit `maximumSignificantDigits: 2` und dann mit beiden.
Der Wert mit beiden ist derjenige, der mit `maximumSignificantDigits` festgelegt ist.

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

Unter Verwendung von [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) zur Inspektion des Formatters, können wir sehen, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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
Der Formatter berechnet die Präzision anhand der Werte von `maximumSignificantDigits` und `maximumFractionDigits`.

Der Code unten zeigt das Format, das für die drei verschiedenen Rundungsprioritäten ausgewählt ist:

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

Beachten Sie, dass der Algorithmus in einer nicht intuitiven Weise agieren kann, wenn ein Minimalwert ohne einen Maximalwert angegeben ist.
Das Beispiel unten formatiert den Wert `1`, indem es `minimumFractionDigits: 2` (Format zu `1.00`) und `minimumSignificantDigits: 2` (Format zu `1.0`) spezifiziert.
Da `1.00` mehr Ziffern als `1.0` hat, sollte dies das Ergebnis sein, wenn `morePrecision` priorisiert wird, aber in Wirklichkeit ist das Gegenteil der Fall:

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

Der Grund dafür ist, dass nur die "maximale Präzision"-Werte für die Berechnung verwendet werden und der Standardwert von `maximumSignificantDigits` viel höher als `maximumFractionDigits` ist.

> [!NOTE]
> Die Arbeitsgruppe hat eine Modifikation des Algorithmus vorgeschlagen, bei der die Formatierung sowohl die angegebenen Bruch- als auch signifikanten Ziffern unabhängig (unter Berücksichtigung sowohl von Minimum- als auch Maximalwerten) bewertet, und dann die Option wählt, die mehr Bruchziffern anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist.
> Dies wird zu einem intuitiveren Verhalten in diesem Fall führen.

### Rundungsmodi

Wenn ein Wert mehr Nachkommastellen als durch die Konstruktoroptionen zugelassen hat, wird der formatierte Wert auf die angegebene Anzahl von Nachkommastellen _gerundet_.
Die _Art und Weise_, wie der Wert gerundet wird, hängt von der [`roundingMode`](#roundingmode)-Eigenschaft ab.

Zahlenformatierer verwenden standardmäßig `halfExpand`-Rundung, die Werte "weg von null" am Halbinkrement rundet (mit anderen Worten, der _Betrag_ des Wertes wird aufgerundet).

Für eine positive Zahl werden die verbleibenden Nachkommastellen, wenn die zu entfernenden Nachkommastellen näher am nächsten Inkrement oder auf dem Halbwegpunkt sind, nach oben gerundet, andernfalls nach unten.
Dies wird unten gezeigt: 2.23 wird auf zwei signifikante Ziffern auf 2.2 gekürzt, weil 2.23 kleiner ist als das Halbinkrement 2.25, während Werte von 2.25 und größer auf 2.3 aufgerundet werden:

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

Eine negative Zahl auf oder unterhalb des Halbinkrements wird ebenfalls "weg von null" gerundet (wird negativer):

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

Die Tabelle unten zeigt die Auswirkungen der verschiedenen Rundungsmodi für positive und negative Werte, die an und um das Halbinkrement herum liegen.

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

Wenn `halfEven` verwendet wird, hängt dessen Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Beispielsweise ist das Verhalten von `halfEven` in der Tabelle oben dasselbe wie `halfTrunc`, weil die Beträge aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, verhält sich `halfEven` stattdessen wie `halfExpand`. Dieses Verhalten vermeidet eine konsistente Unter- oder Überschätzung von Halbinkrementen in einer großen Datenmenge.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Nachkommastellen auf ein anderes Inkrement als die nächste Ganzzahl runden.
Zum Beispiel könnten Währungen, bei denen die kleinste Münze 5 Cent beträgt, den Wert auf 5er-Inkremente runden wollen, die Beträge widerspiegeln, die tatsächlich in bar bezahlt werden können.

Diese Art der Rundung kann mit der [`roundingIncrement`](#roundingincrement)-Eigenschaft erreicht werden.

Zum Beispiel, wenn `maximumFractionDigits` 2 ist und `roundingIncrement` 5, dann wird die Zahl auf das nächstgelegene 0.05 gerundet:

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

Dieses spezifische Muster wird als "Nickel-Rundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine 5-Cent-Münze in den USA ist.
Um auf das nächstgelegene 10 Cent ("Dime-Rundung") zu runden, könnten Sie `roundingIncrement` auf `10` ändern.

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
Das untenstehende Beispiel zeigt, wie `halfCeil`-Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des Halbinkrements und "mehr positiv" bei oder über dem Halbinkrement zu runden.
Die inkrementierte Ziffer ist "0.05", sodass das Halbinkrement bei 0.025 liegt (siehe unten bei 11.225).

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

`roundingIncrement` kann nicht mit signifikante-Stellen-Rundung oder irgendeiner Einstellung von `roundingPriority` außer `auto` gemischt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
