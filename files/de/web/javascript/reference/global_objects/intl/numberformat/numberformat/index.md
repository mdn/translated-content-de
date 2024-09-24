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

> **Hinweis:** `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Varianten erstellen eine neue `Intl.NumberFormat`-Instanz. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der `this`-Wert eine andere `Intl.NumberFormat`-Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachtag oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Sprachkennungen. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Locale-Bezeichnungen unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist zulässig:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) festgelegt werden. Wenn beide festgelegt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Für eine bessere Lesbarkeit ist die Liste der Eigenschaften in Abschnitte unterteilt, basierend auf ihrem Zweck, einschließlich [Locale-Optionen](#locale-optionen), [Stiloptionen](#stiloptionen), [Ziffernoptionen](#ziffernoptionen) und [anderen Optionen](#andere_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der für das Locale-Matching zu verwendende Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`.
    Für Informationen über diese Option siehe [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das zu verwendende Nummerierungssystem für das Zahlenformat, wie `"arab"`, `"hans"`, `"mathsans"` und so weiter. Für eine Liste der unterstützten Nummerierungssystemtypen siehe [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch über den `nu` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide bereitgestellt werden, hat diese `options`-Eigenschaft Vorrang.

#### Stiloptionen

Abhängig vom verwendeten `style` können einige ignoriert und andere erforderlich sein:

- `style`
  - : Der zu verwendende Formatierungsstil.
    - `"decimal"` (Standard)
      - : Für die einfache Formatierung von Zahlen.
    - `"currency"`
      - : Für die Währungsformatierung.
    - `"percent"`
      - : Für die Prozentformatierung.
    - `"unit"`
      - : Für die Einheitenformatierung.
- `currency`
  - : Die Währung, die für die Währungsformatierung verwendet werden soll. Mögliche Werte sind die ISO 4217-Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB — siehe die [aktuelle Liste der Währungs- und Fonds-Codes](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency`-Eigenschaft angegeben werden.
- `currencyDisplay`
  - : Wie die Währung bei der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokales Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein vereinfachtes Format-Symbol ("$100" anstelle von "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen wie `"Dollar"`.
- `currencySign`
  - : In vielen Locales bedeutet das Buchhaltungsformat, die Zahl in Klammern zu setzen, anstatt ein Minuszeichen hinzuzufügen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standard ist `"standard"`.
- `unit`
  - : Die Einheit, die in `unit`-Formatierung verwendet werden soll. Mögliche Werte sind Haupt-Einheitskennungen, die in [UTS #35, Teil 2, Abschnitt 6](https://unicode.org/reports/tr35/tr35-general.html#Unit_Elements) definiert sind. Ein [Untermenge](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers) von Einheiten aus der [vollständigen Liste](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml) wurde zur Verwendung in ECMAScript ausgewählt. Paare einfacher Einheiten können mit "-per-" verkettet werden, um eine zusammengesetzte Einheit zu bilden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit`-Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der verwendete Einheitendarstellungsstil in der `unit`-Formatierung. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B. `16 l`.
    - `"narrow"`
      - : Z.B. `16l`.
    - `"long"`
      - : Z.B. `16 litres`.

#### Ziffernoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die Mindestanzahl von Ganzzahldezimalstellen, die verwendet werden sollen. Ein Wert mit weniger Ganzzahldezimalstellen als diese Zahl wird mit Nullen (auf die angegebene Länge) aufgefüllt, wenn er formatiert wird. Mögliche Werte sind von `1` bis `21`; der Standard ist `1`.
- `minimumFractionDigits`
  - : Die Mindestanzahl von Dezimalstellen, die verwendet werden sollen. Mögliche Werte sind von `0` bis `100`; der Standard für einfache Zahlen- und Prozentformatierung ist `0`; der Standard für die Währungsformatierung ist die Anzahl der kleinen Dezimalstellen, die von der [ISO 4217-Währungscode-Liste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt wird (2, wenn die Liste diese Information nicht bereitstellt).
- `maximumFractionDigits`
  - : Die Höchstanzahl von Dezimalstellen, die verwendet werden sollen. Mögliche Werte sind von `0` bis `100`; der Standard für die einfache Zahlenformatierung ist die größere von `minimumFractionDigits` und `3`; der Standard für die Währungsformatierung ist die größere von `minimumFractionDigits` und die Anzahl der kleinen Dezimalstellen, die von der [ISO 4217-Währungscode-Liste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt werden (2, wenn die Liste diese Information nicht bereitstellt); der Standard für die Prozentformatierung ist die größere von `minimumFractionDigits` und 0.
- `minimumSignificantDigits`
  - : Die Mindestanzahl von signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte sind von `1` bis `21`; der Standard ist `1`.
- `maximumSignificantDigits`
  - : Die Höchstanzahl von signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte sind von `1` bis `21`; der Standard ist `21`.

Die obigen Eigenschaften fallen in zwei Gruppen: `minimumIntegerDigits`, `minimumFractionDigits` und `maximumFractionDigits` in einer Gruppe, `minimumSignificantDigits` und `maximumSignificantDigits` in der anderen. Wenn Eigenschaften aus beiden Gruppen angegeben sind, werden Konflikte im resultierenden Anzeigeformat basierend auf dem Wert der [`roundingPriority`](#roundingpriority)-Eigenschaft aufgelöst.

- `roundingPriority`

  - : Gibt an, wie Rundungskonflikte aufgelöst werden sollen, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis von der signifikanten Zifferneigenschaft wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis von der Eigenschaft, die zu mehr Präzision führt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis von der Eigenschaft, die zu weniger Präzision führt, wird verwendet.

    Beachten Sie, dass für andere Werte als `auto` das Ergebnis mit mehr Präzision aus der [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) (Minimum-Fraktions- und signifikante Zifferneinstellungen werden ignoriert) berechnet wird.

- `roundingIncrement`

  - : Gibt den Inkrement an, in welchem über die berechnete Rundungsmagnitude gerundet werden soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`. Sie kann nicht mit der Rundung signifikante Ziffern oder einer Einstellung von `roundingPriority` anders als `auto` gemischt werden.

- `roundingMode`

  - : Wie Dezimalstellen gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Runden in Richtung +∞. Positive Werte werden aufgerundet. Negative Werte werden "mehr positiv" gerundet.
    - `"floor"`
      - : Runden in Richtung -∞. Positive Werte werden abgerundet. Negative Werte werden "mehr negativ" gerundet.
    - `"expand"`
      - : Runden weg von 0. Die _Magnitud_ des Wertes wird immer durch Rundung erhöht. Positive Werte werden aufgerundet. Negative Werte werden "mehr negativ" gerundet.
    - `"trunc"`
      - : Runden in Richtung 0. Diese _Magnitud_ des Wertes wird immer durch Rundung reduziert. Positive Werte werden abgerundet. Negative Werte werden "weniger negativ" gerundet.
    - `"halfCeil"`
      - : Krawatten in Richtung +∞. Werte über dem halben Inkrement werden wie `"ceil"` (in Richtung +∞), und darunter wie `"floor"` (in Richtung -∞) gerundet. Beim halben Inkrement werden Werte wie `"ceil"` gerundet.
    - `"halfFloor"`
      - : Krawatten in Richtung -∞. Werte über dem halben Inkrement werden wie `"ceil"` (in Richtung +∞), und darunter wie `"floor"` (nach unten) gerundet. Beim halben Inkrement werden Werte wie `"floor"` gerundet.
    - `"halfExpand"` (Standard)
      - : Krawatten weg von 0. Werte über dem halben Inkrement werden wie `"expand"` (weg von 0), und darunter wie `"trunc"` (nach oben) gerundet. Beim halben Inkrement werden Werte wie `"expand"` gerundet.
    - `"halfTrunc"`
      - : Krawatten in Richtung 0. Werte über dem halben Inkrement werden wie `"expand"` (weg von 0), und darunter wie `"trunc"` (nach unten) gerundet. Beim halben Inkrement werden Werte wie `"trunc"` gerundet.
    - `"halfEven"`
      - : Krawatten in Richtung der nächsten geraden ganzen Zahl. Werte über dem halben Inkrement werden wie `"expand"` (weg von 0), und darunter wie `"trunc"` (nach oben) gerundet. Beim halben Inkrement werden Werte in Richtung der nächsten geraden Ziffer gerundet.

    Diese Optionen spiegeln den [ICU-Benutzerhandbuch](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html), wo "expand" und "trunc" ernannt zu ICU "UP" und "DOWN", bzw.
    Das [Rundungsarten](#rundungsarten)-Beispiel unten zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige nachgestellter Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalte nachgestellte Nullen entsprechend `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Dezimalstellen, _wenn_ sie alle null sind. Dies entspricht `"auto"`, wenn eine der Dezimalstellen ungleich null ist.

#### Andere Optionen

- `notation`
  - : Die Formatierung, die für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfaches Zahlenformat.
    - `"scientific"`
      - : Gibt die Größenordnung der formatierten Zahl zurück.
    - `"engineering"`
      - : Gibt die Potenz von zehn zurück, wenn sie durch drei teilbar ist.
    - `"compact"`
      - : Zeichenfolge, die die Potenz angibt; verwendet standardmäßig die "kurze" Form.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standard ist `"short"`.
- `useGrouping`

  - : Ob Gruppentrennzeichen wie Tausendertrennzeichen oder Tausend-/Lakh/Crore-Trennzeichen verwendet werden sollen.

    - `"always"`
      - : Gruppentrennzeichen anzeigen, auch wenn der Locale dies anders vorzieht.
    - `"auto"`
      - : Gruppentrennzeichen basierend auf der Locale-Präferenz anzeigen, die auch von der Währung abhängen kann.
    - `"min2"`
      - : Gruppentrennzeichen anzeigen, wenn in einer Gruppe mindestens 2 Ziffern vorhanden sind.
    - `true`
      - : Entspricht `"always"`.
    - `false`
      - : Keine Gruppentrennzeichen anzeigen.

    Der Standard ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"`, ansonsten. Die string-Werte `"true"` und `"false"` werden akzeptiert, aber immer in den Standardwert umgewandelt.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenausgabe nur für negative Zahlen, einschließlich negativer Null.
    - `"always"`
      - : Immer Vorzeichen anzeigen.
    - `"exceptZero"`
      - : Vorzeichenausgabe für positive und negative Zahlen, aber nicht für Null.
    - `"negative"`
      - : Vorzeichenausgabe nur für negative Zahlen, ohne negative Null.
    - `"never"`
      - : Niemals Vorzeichen anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat`-Objekt.

> [!NOTE]
> Der nachfolgende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" markiert ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Kompatibilitätstabelle des Browsers](#kompatibilität_mit_browsern).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat`-Instanz zurückgegeben. Allerdings, wenn der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (nicht unbedingt bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde; nur, dass es `Intl.NumberFormat.prototype` in seiner Prototypenkette hat), dann wird der Wert von `this` stattdessen zurückgegeben, mit dem neu erstellten `Intl.NumberFormat`-Objekt verborgen in einer `[Symbol(IntlLegacyConstructedSymbol)]`-Eigenschaft (ein einzigartiges Symbol, das zwischen den Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.NumberFormat`-Instanz gibt: die eine, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) auf `formatter` würde korrekt die in dieser Instanz gespeicherten Optionen verwenden, aber alle anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würden mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden nicht die Optionen der versteckten Instanz verwenden.

Dieses Verhalten, `ChainNumberFormat` genannt, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aber mit `this` aufgerufen wird, das auf etwas anderes gesetzt ist, das kein `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this`-Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat`-Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die aufzählbare Werte erfordert (wie `style`, `units`, `currency` und so weiter), ist auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt, und sie sind auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass je nach verschiedenen Formatierungsoptionen diese Eigenschaften Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu erhalten, selbst wenn Sie nur eine der Eigenschaften gesetzt haben.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft `options.style` auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` gesetzt wurde.

## Beispiele

### Grundlegende Nutzung

Bei der grundlegenden Verwendung ohne Angabe einer Locale wird eine formatierte Zeichenfolge in der Standardsprache und mit den Standardoptionen zurückgegeben.

```js
const amount = 3500;

console.log(new Intl.NumberFormat().format(amount));
// '3,500' wenn in US-englischer Locale
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

Wenn der `style` `'unit'` ist, muss eine `unit`-Eigenschaft angegeben werden.
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

Wenn der `style` `'currency'` ist, muss eine `currency`-Eigenschaft
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

Wissenschaftliche und kompakte Notationen werden durch die `notation`-Option dargestellt und können wie folgt formatiert werden:

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

### Zeichen anzeigen

Zeichen für positive und negative Zahlen anzeigen, aber nicht für null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass, wenn das Währungssymbol "accounting" ist, Klammern anstelle eines Minuszeichens verwendet werden können:

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

Sie können die Mindest- oder Höchstanzahl der zu formatierenden Bruch-, Ganzzahl- oder signifikanten Ziffern angeben.

> [!NOTE]
> Wenn sowohl signifikante als auch Bruchziffernbeschränkungen angegeben sind, hängt die tatsächliche Formatierung von der [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganzzahlen- und Bruchzifferneigenschaften geben an, wie viele Ziffern vor und nach dem Dezimalpunkt angezeigt werden sollen.
Wenn der anzuzeigende Wert weniger Ganzzahlen als angegeben hat, wird er mit Nullen auf die erwartete Anzahl aufgefüllt.
Wenn er weniger Bruchziffern hat, wird er mit Nullen rechts aufgefüllt.
Beide Fälle sind unten gezeigt:

```js
// Formatierung fügt Nullen hinzu, um Mindest-Ganzzahlen und -Brüche anzuzeigen
console.log(
  new Intl.NumberFormat("en", {
    minimumIntegerDigits: 3,
    minimumFractionDigits: 4,
  }).format(4.33),
);
// "004.3300"
```

Wenn ein Wert mehr Bruchziffern hat als die angegebene Höchstanzahl, wird er gerundet.
Die _Art_, wie er gerundet wird, hängt von der [`roundingMode`](#roundingmode) Eigenschaft ab (weitere Details werden im Abschnitt zu [Rundungsarten](#rundungsarten) gegeben).
Unten wird der Wert von fünf Bruchziffern (`4.33145`) auf zwei (`4.33`) gerundet:

```js
// Anzuzeigender Wert wird auf die maximale Anzahl von Ziffern verkürzt
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(4.33145),
);
// "4.33"
```

Die Mindest-Bruchziffern haben keinen Einfluss, wenn der Wert bereits mehr als 2 Bruchziffern hat:

```js
// Mindest-Brüche haben keinen Einfluss, wenn der Wert eine höhere Präzision hat.
console.log(
  new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
  }).format(4.33145),
);
// "4.331"
```

> [!WARNING]
> Achten Sie auf Standardwerte, da sie die Formatierung beeinflussen können, auch wenn sie nicht in Ihrem Code angegeben sind.
> Der Standardwert für maximale Ziffern ist `3` für einfache Werte, `2` für Währung und kann für andere vordefinierte Typen unterschiedliche Werte haben.

Der formatierte Wert oben wird auf 3 Ziffern gerundet, obwohl wir die maximalen Ziffern nicht angegeben haben!
Dies liegt daran, dass ein Standardwert für `maximumFractionDigits` festgelegt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind `3` bzw. `0`.

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

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtzahl der Ziffern in beiden Ganzzahlen- und Bruchteilen.
Die `maximumSignificantDigits`-Eigenschaft wird verwendet, um die Gesamtzahl der Ziffern des ursprünglichen Wertes anzugeben, die angezeigt werden sollen.

Die folgenden Beispiele zeigen, wie dies funktioniert.
Beachten Sie insbesondere den letzten Fall: Nur die erste Ziffer wird behalten und die anderen werden verworfen bzw. auf Null gesetzt.

```js
// Anzeige von 5 signifikanten Ziffern
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 5,
  }).format(54.33145),
);
// "54.331"

// Max 2 signifikante Ziffern
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(54.33145),
);
// "54"

// Max 1 signifikante Ziffern
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 1,
  }).format(54.33145),
);
// "50"
```

Die `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl von Ziffern angezeigt wird, indem Nullen an das Ende des Wertes hinzugefügt werden, wenn nötig.

```js
// Minimum 10 signifikante Ziffern
console.log(
  new Intl.NumberFormat("en", {
    minimumSignificantDigits: 10,
  }).format(54.33145),
);
// "54.33145000"
```

> [!WARNING]
> Achten Sie auf Standardwerte, da diese die Formatierung beeinflussen können.
> Wenn nur eine `SignificantDigits`-Eigenschaft verwendet wird, wird der Gegenpart automatisch mit dem Standardwert angewendet.
> Die Standardwerte für maximale und minimale signifikante Ziffern sind 20 bzw. 1.

#### Signifikante und Bruchziffern gleichzeitig angeben

Die Bruchziffern ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten zur Kontrolle, wie viele Bruch- und führende Ziffern formatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, ist es möglich, dass sie in Konflikt geraten.

Diese Konflikte werden mit der [`roundingPriority`](#roundingpriority)-Eigenschaft aufgelöst.
Standardmäßig hat diese den Wert `"auto"`, was bedeutet, dass wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#maximumsignificantdigits) angegeben ist, die Bruch- und Ganzzahlen-Eigenschaften ignoriert werden.

Zum Beispiel formatiert der Code unten den Wert von `4.33145` mit `maximumFractionDigits: 3` und dann mit `maximumSignificantDigits: 2` und dann mit beiden.
Der Wert mit beiden ist derjenige, der mit `maximumSignificantDigits` gesetzt ist.

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

Mit [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) zur Überprüfung des Formatters können wir sehen, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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

Zusätzlich zu `"auto"` können Sie Konflikte auflösen, indem Sie [`roundingPriority`](#roundingpriority) als `"morePrecision"` oder `"lessPrecision"` angeben.
Der Formatter berechnet die Präzision unter Verwendung der Werte von `maximumSignificantDigits` und `maximumFractionDigits`.

Der untenstehende Code zeigt das Format, das für die drei verschiedenen Rundungsprioritäten ausgewählt wird:

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

Beachten Sie, dass der Algorithmus in unlogischer Weise verhalten kann, wenn ein Minimalwert ohne Maximalwert angegeben wird.
Das folgende Beispiel formatiert den Wert `1` mit Angabe von `minimumFractionDigits: 2` (Formatierung zu `1.00`) und `minimumSignificantDigits: 2` (Formatierung zu `1.0`).
Da `1.00` mehr Ziffern hat als `1.0`, sollte dies das Ergebnis bei Priorisierung von `morePrecision` sein, aber tatsächlich ist das Gegenteil der Fall:

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
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis der Verwendung der angegebenen Bruch- und signifikanten Ziffern unabhängig bewerten sollte (einschließlich sowohl minimaler als auch maximaler Werte).
> Er wird dann die Option wählen, die mehr Bruchziffern anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist.
> Dies würde zu einem intuitiveren Verhalten für diesen Fall führen.

### Rundungsarten

Wenn ein Wert mehr Bruchziffern hat, als durch die Konstruktoroptionen erlaubt, wird der formatierte Wert auf die angegebene Anzahl von Bruchziffern _gerundet_.
Die _Art_ der Rundung hängt von der [`roundingMode`](#roundingmode)-Eigenschaft ab.

Zahlenformatierer verwenden standardmäßig `halfExpand`-Rundung, die die Werte "weg von null" am halb-Inkrement rundet (mit anderen Worten, die _Magnitud_ des Wertes wird aufgerundet).

Für eine positive Zahl, wenn die zu entfernenden Bruchziffern näher am nächsten Inkrement (oder am halben Weg) liegen, dann werden die verbleibenden Bruchziffern aufgerundet, andernfalls werden sie abgerundet.
Dies wird unten gezeigt: 2.23 gerundet auf zwei signifikante Ziffern wird auf 2.2 gekürzt, weil 2.23 weniger ist als das halbe Inkrement 2.25, während Werte von 2.25 und größer auf 2.3 gerundet werden:

```js
// Wert unterhalb des halben Inkrements: abgerundet.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.23),
);
// "2.2"

// Wert auf oder über halbem Inkrement: aufgerundet.
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

Eine negative Zahl auf oder unterhalb des halben Inkrements wird ebenfalls "weg von null" gerundet (wird mehr negativ):

```js
// Wert unterhalb des halben Inkrements: abgerundet.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.23),
);
// "-2.2"

// Wert auf oder über halbem Inkrement: aufgerundet.
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

Die folgende Tabelle zeigt den Effekt der verschiedenen Rundungsmodi für positive und negative Werte, die auf und um das halbe Inkrement liegen.

| Rundungsmodus  | 2.23 | 2.25 | 2.28 | -2.23 | -2.25 | -2.28 |
| -------------- | ---- | ---- | ---- | ----- | ----- | ----- |
| `ceil`         | 2.3  | 2.3  | 2.3  | -2.2  | -2.2  | -2.2  |
| `floor`        | 2.2  | 2.2  | 2.2  | -2.3  | -2.3  | -2.3  |
| `expand`       | 2.3  | 2.3  | 2.3  | -2.3  | -2.3  | -2.3  |
| `trunc`        | 2.2  | 2.2  | 2.2  | -2.2  | -2.2  | -2.2  |
| `halfCeil`     | 2.2  | 2.3  | 2.3  | -2.2  | -2.2  | -2.3  |
| `halfFloor`    | 2.2  | 2.2  | 2.3  | -2.2  | -2.3  | -2.3  |
| `halfExpand`   | 2.2  | 2.3  | 2.3  | -2.2  | -2.3  | -2.3  |
| `halfTrunc`    | 2.2  | 2.2  | 2.3  | -2.2  | -2.2  | -2.3  |
| `halfEven`     | 2.2  | 2.2  | 2.3  | -2.2  | -2.2  | -2.3  |

Bei Verwendung von `halfEven` hängt sein Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der Tabelle oben das gleiche wie `halfTrunc`, weil die Magnituden aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, wird sich `halfEven` stattdessen wie `halfExpand` verhalten. Diese Methode vermeidet eine konstante Unter- oder Überschätzung von Halbinkrementen in einer großen Datenprobe.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Bruchziffern auf ein anderes Inkrement als das nächste ganz Zahl runden.
Zum Beispiel möchten Währungen, bei denen die kleinste Münze 5 Cent ist, den Wert auf Inkremente von 5 runden, um Beträge widerzuspiegeln, die tatsächlich bar bezahlt werden können.

Diese Art der Rundung kann mit der Eigenschaft [`roundingIncrement`](#roundingincrement) erreicht werden.

Zum Beispiel, wenn `maximumFractionDigits` 2 ist und `roundingIncrement` 5, dann wird die Zahl auf das nächste 0.05 gerundet:

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

Dieses spezielle Muster wird als "Nickel-Rundung" bezeichnet, wobei Nickel die umgangssprachliche Bezeichnung für eine amerikanische 5-Cent-Münze ist.
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
Das folgende Beispiel zeigt, wie `halfCeil`-Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des halben Rundungsinkrements und "mehr positiv" wenn darüber oder am halben Inkrement.

Der inkrementierte Wert ist "0.05", so dass das halbe Inkrement bei 0.025 (unten wird dies bei 11.225 angezeigt) liegt.

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

`roundingIncrement` kann nicht mit der Rundung von signifikanten Ziffern oder jeder Einstellung von `roundingPriority` anders als `auto` gemischt werden.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
