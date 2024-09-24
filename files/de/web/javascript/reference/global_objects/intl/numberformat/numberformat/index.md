---
title: Intl.NumberFormat()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 288fb73a50817abfd794eec9454b3c062b5d48ca
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

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standardsprache des Laufzeitsystems wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Locale-Identifikatoren unterstützt wird. Weitere Informationen zur allgemeinen Form und Interpretation des `locales`-Arguments finden Sie in [der Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur besseren Lesbarkeit ist die Eigenschaftenliste in Abschnitte unterteilt, basierend auf ihren Verwendungszwecken, einschließlich [Locale-Optionen](#locale-optionen), [Stiloptionen](#stiloptionen), [Zifferoptionen](#zifferoptionen), und [andere Optionen](#andere_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Abgleichs-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`.
    Weitere Informationen zu dieser Option finden Sie unter [Identifikation und Verhandlung von Locales](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das Ziffernsystem, das für die Zahlenformatierung verwendet werden soll, wie `"arab"`, `"hans"`, `"mathsans"`, usw. Für eine Liste der unterstützten Ziffernsystemtypen siehe [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types). Diese Option kann auch durch den `nu`-Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options`-Eigenschaft Vorrang.

#### Stiloptionen

Abhängig vom verwendeten `style` können einige ignoriert werden, und andere sind möglicherweise erforderlich:

- `style`
  - : Der zu verwendende Formatierungsstil.
    - `"decimal"` (Standard)
      - : Für das einfache Zahlenformat.
    - `"currency"`
      - : Für die Währungsformatierung.
    - `"percent"`
      - : Für die Prozentformatierung.
    - `"unit"`
      - : Für die Einheitenformatierung.
- `currency`
  - : Die Währung, die für die Währungsformatierung verwendet werden soll. Mögliche Werte sind die ISO 4217-Währungscodes, wie `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB — siehe die [aktuelle Liste der Währungs- und Fondcodes](https://de.wikipedia.org/wiki/ISO_4217#Liste_der_ISO_4217-W%C3%A4hrungscodes). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency`-Eigenschaft angegeben werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung in der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwende den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwende ein lokalisiertes Währungssymbol wie €.
    - `"narrowSymbol"`
      - : Verwende ein schmales Format-Symbol ("$100" anstelle von "US$100").
    - `"name"`
      - : Verwende einen lokalisierten Währungsnamen wie `"dollar"`.
- `currencySign`
  - : In vielen Locales bedeutet das Accounting-Format, dass die Zahl in Klammern gesetzt wird, anstatt ein Minuszeichen zu verwenden. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die Einheit, die in der `unit`-Formatierung verwendet werden soll. Mögliche Werte sind Kerneinheit-Identifikatoren, definiert in [UTS #35, Teil 2, Abschnitt 6](https://unicode.org/reports/tr35/tr35-general.html#Unit_Elements). Ein [Teilset](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers) von Einheiten aus der [vollständigen Liste](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml) wurde zur Verwendung in ECMAScript ausgewählt. Paare von einfachen Einheiten können mit "-per-" zu einer Verbundeneinheit verknüpft werden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit`-Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der Einheitenformatierungsstil, der in der `unit`-Formatierung verwendet werden soll. Mögliche Werte sind:
    - `"short"` (Standard)
      - : z.B., `16 l`.
    - `"narrow"`
      - : z.B., `16l`.
    - `"long"`
      - : z.B., `16 litre`.

#### Zifferoptionen

Die folgenden Eigenschaften werden auch von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die minimale Anzahl von Ganzzahlziffern, die verwendet werden soll. Ein Wert mit einer kleineren Anzahl von Ganzzahlziffern als diese Zahl wird beim Formatieren (auf die angegebene Länge) mit Nullen aufgefüllt. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die minimale Anzahl von Bruchziffern, die verwendet werden soll. Mögliche Werte sind von `0` bis `100`; der Standardwert für einfache Zahlen- und Prozentformatierungen ist `0`; der Standardwert für Währungsformatierungen ist die Anzahl der Nebenstelleziffern, die von der [ISO 4217-Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) (2, wenn die Liste diese Information nicht liefert) angegeben wird. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values) für den Anwendungszeitpunkt dieses Standards.
- `maximumFractionDigits`
  - : Die maximale Anzahl von Bruchziffern, die verwendet werden soll. Mögliche Werte sind von `0` bis `100`; der Standardwert für die einfache Zahlenformatierung ist die größere von `minimumFractionDigits` und `3`; der Standardwert für die Währungsformatierung ist die größere von `minimumFractionDigits` und der in der [ISO 4217-Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) angegebenen Anzahl von Nebenstelleziffern (2, wenn die Liste diese Information nicht liefert); der Standardwert für die Prozentformatierung ist die größere von `minimumFractionDigits` und 0. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values) für den Anwendungszeitpunkt dieses Standards.
- `minimumSignificantDigits`
  - : Die minimale Anzahl signifikanter Ziffern, die verwendet werden soll. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `1`. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values) für den Anwendungszeitpunkt dieses Standards.
- `maximumSignificantDigits`
  - : Die maximale Anzahl signifikanter Ziffern, die verwendet werden soll. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `21`. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values) für den Anwendungszeitpunkt dieses Standards.
- `roundingPriority`

  - : Geben Sie an, wie Rundungskonflikte behoben werden sollen, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis der signifikanten Zifferneigenschaft wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis der Eigenschaft, die zu mehr Präzision führt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis der Eigenschaft, die zu weniger Präzision führt, wird verwendet.

    Der Wert `"auto"` wird zu `"morePrecision"` normalisiert, wenn `notation` `"compact"` ist und keine der vier "FractionDigits"/"SignificantDigits"-Optionen gesetzt sind.

    Beachten Sie, dass für andere Werte als `auto` das Ergebnis mit mehr Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (minimale Bruch- und signifikante Zifferneinstellungen werden ignoriert).

- `roundingIncrement`

  - : Gibt das Inkrement an, bei dem gerundet werden soll, relativ zur berechneten Rundungsmagnitude. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`; der Standardwert ist `1`. Es kann nicht mit signifikanter Ziffernrundung oder einer Einstellung von `roundingPriority` gemischt werden, die nicht `auto` ist.

- `roundingMode`

  - : Wie Dezimalzahlen gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Auf +∞ runden. Positive Werte runden nach oben. Negative Werte runden "mehr positiv".
    - `"floor"`
      - : Auf -∞ runden. Positive Werte runden nach unten. Negative Werte runden "mehr negativ".
    - `"expand"`
      - : Vom Nullpunkt wegrunden. Die _Größe_ des Wertes wird immer durch Rundung vergrößert. Positive Werte runden nach oben. Negative Werte runden "mehr negativ".
    - `"trunc"`
      - : Auf Null runden. Diese _Größe_ des Wertes wird immer durch Rundung reduziert. Positive Werte runden nach unten. Negative Werte runden "weniger negativ".
    - `"halfCeil"`
      - : Klammern in Richtung +∞. Werte über dem Halbinkrement runden wie `"ceil"` (in Richtung +∞) und darunter wie `"floor"` (in Richtung -∞). Beim Halbinkrement, Werte runden wie `"ceil"`.
    - `"halfFloor"`
      - : Klammern in Richtung -∞. Werte über dem Halbinkrement runden wie `"ceil"` (in Richtung +∞) und darunter wie `"floor"` (in Richtung -∞). Beim Halbinkrement, Werte runden wie `"floor"`.
    - `"halfExpand"` (Standard)
      - : Klammern weg von 0. Werte über dem Halbinkrement runden wie `"expand"` (weg von Null) und darunter wie `"trunc"` (in Richtung 0). Beim Halbinkrement, Werte runden wie `"expand"`.
    - `"halfTrunc"`
      - : Klammern in Richtung 0. Werte über dem Halbinkrement runden wie `"expand"` (weg von Null) und darunter wie `"trunc"` (in Richtung 0). Beim Halbinkrement, Werte runden wie `"trunc"`.
    - `"halfEven"`
      - : Klammern in Richtung der nächsten geraden Ganzzahl. Werte über dem Halbinkrement runden wie `"expand"` (weg von Null) und darunter wie `"trunc"` (in Richtung 0). Beim Halbinkrement Werte runden in Richtung der nächsten geraden Ziffer.

    Diese Optionen spiegeln den [ICU-Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, bei dem "expand" und "trunc" auf ICU "UP" und "DOWN" abgebildet werden.
    Das nachstehende Beispiel zu [Rundungsmodi](#rundungsmodi) zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige von Nullen am Ende von Ganzzahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten von Nullen am Ende gemäß `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen von Bruchziffern _wenn_ sie alle null sind. Dies ist das gleiche wie `"auto"` wenn eine der Bruchziffern ungleich null ist.

##### Standardwerte für SignificantDigits/FractionDigits

Für die vier oben genannten Optionen (die `FractionDigits` und `SignificantDigits`-Optionen), erwähnten wir ihre Standardwerte; diese Standards werden jedoch _nicht bedingungslos angewendet_. Sie werden nur angewendet, wenn die Eigenschaft tatsächlich verwendet werden soll, was von den Einstellungen für die [`roundingPriority`](#roundingpriority) und [`notation`](#notation) abhängt. Genauer:

- Wenn `roundingPriority` nicht `"auto"` ist, dann gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits`-Option gesetzt ist, dann gelten die `SignificantDigits`-Optionen und die `FractionDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist und entweder mindestens eine `FractionDigits`-Option gesetzt ist oder `notation` nicht `"compact"` ist, dann gelten die `FractionDigits`-Optionen und die `SignificantDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist und keine der vier Optionen gesetzt sind, dann werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }` gesetzt, unabhängig von den genannten Standardwerten, und `roundingPriority` wird auf `"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Die Formatierung, die für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfache Zahlenformatierung.
    - `"scientific"`
      - : Den Ordnungsbereich der formatierten Zahl zurückgeben.
    - `"engineering"`
      - : Den Exponenten von zehn zurückgeben, wenn durch drei teilbar.
    - `"compact"`
      - : Zeichenfolge, die den Exponenten darstellt; Voreinstellung der Nutzung der "kurzen" Form.
- `compactDisplay`
  - : Nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.
- `useGrouping`

  - : Ob Gruppierungszeichen wie Tausender-Trennzeichen oder Tausender/Lakh/Crore-Separatoren verwendet werden sollen.

    - `"always"`
      - : Gruppierungszeichen immer anzeigen, auch wenn das Locale sie nicht bevorzugt.
    - `"auto"`
      - : Gruppierungszeichen basierend auf der Vorliebe des Locale anzeigen, was auch von der Währung abhängig sein kann.
    - `"min2"`
      - : Gruppierungszeichen anzeigen, wenn es mindestens 2 Ziffern in einer Gruppe gibt.
    - `true`
      - : Wie `"always"`.
    - `false`
      - : Keine Gruppierungszeichen anzeigen.

    Der Standardwert ist `"min2"`, wenn `notation` `"compact"` ist, ansonsten `"auto"`. Die Zeichenfolgenwerte `"true"` und `"false"` werden akzeptiert, werden jedoch immer in den Standardwert konvertiert.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenanzeige nur für negative Zahlen, einschließlich negativer Null.
    - `"always"`
      - : Vorzeichen immer anzeigen.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, aber nicht für Null.
    - `"negative"`
      - : Vorzeichenanzeige nur für negative Zahlen, ohne negative Null.
    - `"never"`
      - : Vorzeichen nie anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat`-Objekt.

> [!NOTE]
> Der folgende Text beschreibt ein Verhalten, das von der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und eine neue `Intl.NumberFormat`-Instanz wird in beiden Fällen zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde; es hat nur `Intl.NumberFormat.prototype` in seiner Prototypkette), dann wird der Wert von `this` stattdessen zurückgegeben, wobei das neu erstellte `Intl.NumberFormat`-Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]`-Eigenschaft versteckt wird (ein einzigartiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier nur eine tatsächliche `Intl.NumberFormat`-Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` versteckt ist. Das Aufrufen der Methoden [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) auf `formatter` würde die in dieser Instanz gespeicherten Optionen korrekt verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden die Optionen der versteckten Instanz nicht konsultieren.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, der `this`-Wert jedoch auf etwas anderes gesetzt ist, das kein `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this`-Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat`-Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die enumerierte Werte akzeptiert (wie `style`, `units`, `currency`, und so weiter) ist auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind gesetzt, und sie sind auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass je nach verschiedenen Formatierungsoptionen, diese Eigenschaften Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu erhalten, auch wenn Sie nur eine der Eigenschaften setzen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft `options.style` auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` gesetzt wurde.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe eines Locale wird eine formatierte Zeichenfolge in der Standardsprache und mit den Standardoptionen zurückgegeben.

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

Wenn der `style` `'currency'` ist, muss eine `currency`-Eigenschaft angegeben werden. Optional steuern `currencyDisplay` und `currencySign` die Einheitenformatierung.

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

Wissenschaftliche und kompakte Notation werden mit der `notation`-Option dargestellt und können wie folgt formatiert werden:

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

Ein Vorzeichen für positive und negative Zahlen anzeigen, aber nicht für Null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass, wenn das Währungsvorzeichen "accounting" ist, möglicherweise Klammern anstelle eines Minuszeichens verwendet werden:

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

Sie können die minimale oder maximale Anzahl von Bruch-, Ganz- oder signifikanten Ziffern angeben, die beim Formatieren einer Zahl angezeigt werden sollen.

> [!NOTE]
> Wenn sowohl signifikante als auch Bruchzifferngrenzen angegeben sind, hängt das eigentliche Format von der [`roundingPriority`](#roundingpriority) ab.

#### FractionDigits und IntegerDigits verwenden

Die Ganz- und Bruchzifferneigenschaften zeigen die Anzahl der anzuzeigenden Ziffern vor und nach dem Dezimalpunkt an.
Wenn der anzuzeigende Wert weniger Ganzzahlziffern als angegeben hat, wird er mit Nullen auf die erwartete Zahl aufgefüllt.
Wenn er weniger Bruchziffern hat, wird er mit Nullen aufgefüllt.
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
Die _Art_, wie er gerundet wird, hängt von der [`roundingMode`](#roundingmode)-Eigenschaft ab (weitere Details finden Sie im Abschnitt [Rundungsmodi](#rundungsmodi)).
Unten wird der Wert von fünf Bruchziffern (`4.33145`) auf zwei (`4.33`) gerundet:

```js
// Display value shortened to maximum number of digits
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(4.33145),
);
// "4.33"
```

Die minimalen Bruchziffern haben keinen Effekt, wenn der Wert bereits mehr als 2 Bruchziffern hat:

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
> Achten Sie auf Standardwerte, da diese das Format beeinflussen können, auch wenn sie nicht im Code angegeben sind.
> Der Standardwert für die maximale Ziffernanzahl ist `3` für einfache Werte, `2` für Währungen und kann für andere vordefinierte Typen unterschiedliche Werte haben.

Der formatierte Wert oben wird auf 3 Ziffern gerundet, obwohl wir nicht die maximale Ziffer angegeben haben!
Dies liegt daran, dass ein Standardwert von `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben und umgekehrt. Die Standardwerte von `maximumFractionDigits` und `minimumFractionDigits` sind jeweils `3` und `0`.

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

#### SignificantDigits verwenden

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtzahl der Ziffern einschließlich der Ganz- und Bruchteile.
Die `maximumSignificantDigits` wird verwendet, um die Gesamtzahl der Ziffern vom ursprünglichen Wert anzuzeigen.

Die Beispiele unten zeigen, wie dies funktioniert.
Beachten Sie insbesondere den letzten Fall: Es wird nur die erste Ziffer behalten und die anderen werden verworfen/auf null gesetzt.

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

Die `minimumSignificantDigits` stellt sicher, dass mindestens die angegebene Anzahl von Ziffern angezeigt wird, indem bei Bedarf Nullen an das Ende des Wertes hinzugefügt werden.

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
> Wenn nur eine `SignificantDigits`-Eigenschaft verwendet wird, wird ihr Gegenstück automatisch mit dem Standardwert angewendet.
> Die Standardwerte für die maximale und minimale signifikante Ziffer sind 20 bzw. 1.

#### Signifikante und Bruchziffern gleichzeitig angeben

Die Bruchziffern ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und signifikante Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Möglichkeiten, um zu kontrollieren, wie viele Bruch- und führende Ziffern formatiert werden sollen.
Wenn beide gleichzeitig verwendet werden, können sie in Konflikt geraten.

Diese Konflikte werden mit der [`roundingPriority`](#roundingpriority)-Eigenschaft gelöst.
Standardmäßig hat diese den Wert `"auto"`, was bedeutet, dass, wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#minimumsignificantdigits) angegeben ist, die Bruch- und Ganzzahleigenschaften ignoriert werden.

Zum Beispiel formatiert der untenstehende Code den Wert von `4.33145` mit `maximumFractionDigits: 3` und dann `maximumSignificantDigits: 2` und dann beides.
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

Unter Verwendung von [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) zur Überprüfung des Formatters, können wir sehen, dass das zurückgegebene Objekt `maximumFractionDigits` nicht enthält, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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

Der untere Code zeigt das ausgewählte Format für die drei verschiedenen Rundungsprioritäten:

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

Beachten Sie, dass der Algorithmus auf eine unintuitive Weise verhalten kann, wenn ein Mindestwert ohne einen Höchstwert angegeben wird.
Das untere Beispiel formatiert den Wert `1` mit der Angabe `minimumFractionDigits: 2` (formatiert zu `1.00`) und `minimumSignificantDigits: 2` (formatiert zu `1.0`).
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

Der Grund dafür ist, dass nur die Werte für die maximale Präzision für die Berechnung verwendet werden und der Standardwert von `maximumSignificantDigits` viel höher ist als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis unter Verwendung der angegebenen Bruch- und signifikanten Ziffern unabhängig bewerten sollte (unter Berücksichtigung sowohl der minimalen als auch der maximalen Werte).
> Er wird dann die Option wählen, die mehr Bruchziffern anzeigt, wenn `morePrecision` gesetzt ist, und weniger, wenn `lessPrecision` gesetzt ist.
> Dies wird zu einem intuitiveren Verhalten für diesen Fall führen.

### Rundungsmodi

Wenn ein Wert mehr Bruchziffern hat als durch die Konstruktoroptionen erlaubt, wird der formatierte Wert auf die angegebene Anzahl von Bruchziffern _gerundet_.
Die _Art_, in der der Wert gerundet wird, hängt von der [`roundingMode`](#roundingmode)-Eigenschaft ab.

Zahlenformatierer verwenden standardmäßig `halfExpand`-Rundung, die Werte "weg von Null" am Halbinkrement rundet (in anderen Worten, die _Größe_ des Wertes wird aufgerundet).

Für eine positive Zahl, wenn die zu entfernenden Bruchziffern näher an das nächste Inkrement (oder am halben Weg) liegen, werden die verbleibenden Bruchziffern aufgerundet, andernfalls werden sie abgerundet.
Dies wird unten gezeigt: 2.23, gerundet auf zwei signifikante Ziffern, wird auf 2.2 gekürzt, da 2.23 weniger als das halbe Inkrement 2.25 ist, während Werte von 2.25 und mehr auf 2.3 aufgerundet werden:

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

Eine negative Zahl auf oder unter dem Halbinkrementpunkt wird ebenfalls von null wegrunden (wird negativer):

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

Die Tabelle unten zeigt die Wirkung verschiedener Rundungsmodi für positive und negative Werte auf und um den Halbinkrement.

| Rundungsmodus   | 2.23 | 2.25 | 2.28 | -2.23 | -2.25 | -2.28 |
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

Bei Verwendung von `halfEven` hängt sein Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der Tabelle oben dasselbe wie `halfTrunc`, weil die Größen aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen, wird sich `halfEven` stattdessen wie `halfExpand` verhalten. Dieses Verhalten vermeidet konsequentes Unter- oder Überschätzen von Halbinkrementen in einer großen Datenstichprobe.

### Verwendung von RoundingIncrement

Manchmal möchten wir die verbleibenden Bruchziffern auf ein anderes Inkrement als das nächste Ganze runden.
Zum Beispiel könnten Währungen, für die die kleinste Münze 5 Cent ist, den Wert auf Inkremente von 5 runden, ähnlich Beträgen, die tatsächlich bar bezahlt werden können.

Diese Art der Rundung kann mit der [`roundingIncrement`](#roundingincrement)-Eigenschaft erreicht werden.

Zum Beispiel, wenn `maximumFractionDigits` auf 2 und `roundingIncrement` auf 5 gesetzt ist, wird die Zahl auf das nächste 0.05 gerundet:

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

Dieses spezielle Muster wird als "Nickelrundung" bezeichnet, wobei Nickel der umgangssprachliche Name für eine USA 5-Cent-Münze ist.
Um auf den nächsten 10-Cent ("Dime-Rundung") zu runden, könnten Sie `roundingIncrement` auf `10` ändern.

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
Das untenstehende Beispiel zeigt, wie `halfCeil`-Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des halben Rundungsinkrements und "mehr positiv", wenn über oder auf dem Halbincrement, zu runden.
Die inkrementierte Ziffer ist "0.05", daher liegt das Halbincrement bei .025 (unten ist dies bei 11.225 gezeigt).

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

Wenn Sie die Anzahl der Ziffern ändern müssen, denken Sie daran, dass `minimumFractionDigits` und `maximumFractionDigits` auf denselben Wert gesetzt werden müssen, andernfalls wird ein `RangeError` ausgelöst.

`roundingIncrement` kann nicht mit signifikanter Ziffernrundung oder einer Einstellung von `roundingPriority` gemischt werden, die nicht `auto` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
