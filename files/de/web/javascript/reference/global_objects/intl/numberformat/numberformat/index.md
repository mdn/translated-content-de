---
title: Intl.NumberFormat()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
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

> **Hinweis:** `Intl.NumberFormat()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide rufen eine neue `Intl.NumberFormat`-Instanz hervor. Es gibt jedoch ein spezielles Verhalten, wenn es ohne `new` aufgerufen wird und der `this`-Wert eine andere `Intl.NumberFormat`-Instanz ist; siehe [Rückgabewert](#rückgabewert).

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der Hauptseite von `Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Der folgende Unicode-Erweiterungsschlüssel ist erlaubt:

    - `nu`
      - : Siehe [`numberingSystem`](#numberingsystem).

    Dieser Schlüssel kann auch mit den `options` gesetzt werden (wie unten aufgeführt). Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt. Zur leichteren Lesbarkeit ist die Eigenschaftsliste nach ihrem Zweck gegliedert, einschließlich der [Locale-Optionen](#locale-optionen), [Stiloptionen](#stiloptionen), [Ziffernoptionen](#ziffernoptionen) und [andere Optionen](#andere_optionen).

#### Locale-Optionen

- `localeMatcher`
  - : Der zu verwendende Locale-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`.
    Für Informationen über diese Option siehe [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `numberingSystem`
  - : Das Nummerierungssystem, das für die Zahlenformatierung verwendet werden soll, wie `"arab"`, `"hans"`, `"mathsans"`, und so weiter. Eine Liste der unterstützten Nummerierungssystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types). Diese Option kann auch über den `nu`-Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben werden, hat diese `options`-Eigenschaft Vorrang.

#### Stiloptionen

Je nach verwendetem `style` können einige ignoriert und andere erforderlich sein:

- `style`
  - : Der Formatierungsstil, der verwendet werden soll.
    - `"decimal"` (Standard)
      - : Für einfaches Zahlenformat.
    - `"currency"`
      - : Für Währungsformatierung.
    - `"percent"`
      - : Für Prozentformatierung.
    - `"unit"`
      - : Für Einheitenformatierung.
- `currency`
  - : Die Währung, die bei der Währungsformatierung verwendet werden soll. Mögliche Werte sind die ISO 4217-Währungscodes, wie z.B. `"USD"` für den US-Dollar, `"EUR"` für den Euro oder `"CNY"` für den chinesischen RMB — siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_currency_identifiers). Es gibt keinen Standardwert; wenn der `style` `"currency"` ist, muss die `currency`-Eigenschaft angegeben werden. Sie wird in Großbuchstaben normalisiert.
- `currencyDisplay`
  - : Wie die Währung bei der Währungsformatierung angezeigt werden soll.
    - `"code"`
      - : Verwenden Sie den ISO-Währungscode.
    - `"symbol"` (Standard)
      - : Verwenden Sie ein lokalisiertes Währungssymbol, wie z.B. €.
    - `"narrowSymbol"`
      - : Verwenden Sie ein schmales Formatsymbol ("$100" statt "US$100").
    - `"name"`
      - : Verwenden Sie einen lokalisierten Währungsnamen, wie z.B. `"Dollar"`.
- `currencySign`
  - : In vielen Locales bedeutet das Buchhaltungsformat, dass die Zahl in Klammern gesetzt wird, anstatt ein Minuszeichen hinzuzufügen. Mögliche Werte sind `"standard"` und `"accounting"`; der Standardwert ist `"standard"`.
- `unit`
  - : Die Einheit, die bei der Einheitenformatierung verwendet werden soll. Mögliche Werte sind in [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_unit_identifiers) aufgelistet. Paare einfacher Einheiten können mit "-per-" für eine zusammengesetzte Einheit verkettet werden. Es gibt keinen Standardwert; wenn der `style` `"unit"` ist, muss die `unit`-Eigenschaft angegeben werden.
- `unitDisplay`
  - : Der Einheitenformatierungsstil, der bei der Einheitenformatierung verwendet werden soll. Mögliche Werte sind:
    - `"short"` (Standard)
      - : Z.B. `16 l`.
    - `"narrow"`
      - : Z.B. `16l`.
    - `"long"`
      - : Z.B. `16 Liter`.

#### Ziffernoptionen

Die folgenden Eigenschaften werden ebenfalls von {{jsxref("Intl.PluralRules")}} unterstützt.

- `minimumIntegerDigits`
  - : Die minimale Anzahl an Ganzzahlziffern, die verwendet werden sollen. Ein Wert mit weniger Ganzzahlziffern als dieser Wert wird beim Formatieren links mit Nullen (bis zur angegebenen Länge) aufgefüllt. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `1`.
- `minimumFractionDigits`
  - : Die minimale Anzahl an Nachkommastellen, die verwendet werden sollen. Mögliche Werte sind von `0` bis `100`; der Standardwert für die einfache Zahlen- und Prozentformatierung ist `0`; der Standardwert für die Währungsformatierung ist die Anzahl der Nebeneinheitsstellen, die von der [ISO 4217-Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt werden (2, wenn diese Information nicht angegeben wird). Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values) für den Fall, dass dieser Standard angewendet wird.
- `maximumFractionDigits`
  - : Die maximale Anzahl an Nachkommastellen, die verwendet werden sollen. Mögliche Werte sind von `0` bis `100`; der Standardwert für das einfache Zahlenformat ist der größere von `minimumFractionDigits` und `3`; der Standardwert für die Währungsformatierung ist der größere von `minimumFractionDigits` und der Anzahl der Nebeneinheitsstellen, die von der [ISO 4217-Währungscodeliste](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) bereitgestellt werden (2, wenn diese Information nicht angegeben wird); der Standardwert für die Prozentformatierung ist der größere von `minimumFractionDigits` und 0. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values) für den Fall, dass dieser Standard angewendet wird.
- `minimumSignificantDigits`
  - : Die minimale Anzahl an signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `1`. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values) für den Fall, dass dieser Standard angewendet wird.
- `maximumSignificantDigits`
  - : Die maximale Anzahl an signifikanten Ziffern, die verwendet werden sollen. Mögliche Werte sind von `1` bis `21`; der Standardwert ist `21`. Siehe [Standardwerte für SignificantDigits/FractionDigits](#significantdigitsfractiondigits_default_values) für den Fall, dass dieser Standard angewendet wird.
- `roundingPriority`

  - : Bestimmen Sie, wie Rundungskonflikte gelöst werden sollen, wenn sowohl "FractionDigits" ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) als auch "SignificantDigits" ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) angegeben sind.
    Mögliche Werte sind:

    - `"auto"` (Standard)
      - : Das Ergebnis aus der Eigenschaft der signifikanten Ziffern wird verwendet.
    - `"morePrecision"`
      - : Das Ergebnis der Eigenschaft, die mehr Präzision ergibt, wird verwendet.
    - `"lessPrecision"`
      - : Das Ergebnis der Eigenschaft, die weniger Präzision ergibt, wird verwendet.

    Der Wert `"auto"` wird normalisiert zu `"morePrecision"`, wenn `notation` `"compact"` ist und keine der vier Optionen "FractionDigits"/"SignificantDigits" gesetzt sind.

    Beachten Sie, dass für andere als `auto`-Werte das Ergebnis mit mehr Präzision aus den [`maximumSignificantDigits`](#minimumsignificantdigits) und [`maximumFractionDigits`](#maximumfractiondigits) berechnet wird (Einstellungen für minimale Bruch- und signifikante Ziffern werden ignoriert).

- `roundingIncrement`

  - : Gibt das Inkrement an, bei dem die Rundung relativ zur berechneten Rundungsmagnitude erfolgen soll. Mögliche Werte sind `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` und `5000`; der Standardwert ist `1`. Es kann nicht mit einer Signifikanzziffernrundung oder einer Einstellung von `roundingPriority`, die nicht `auto` ist, gemischt werden.

- `roundingMode`

  - : Wie Dezimalstellen gerundet werden sollen. Mögliche Werte sind:

    - `"ceil"`
      - : Runden gegen +∞. Positive Werte werden aufgerundet. Negative Werte werden "positiver".
    - `"floor"`
      - : Runden gegen -∞. Positive Werte werden abgerundet. Negative Werte werden "negativer".
    - `"expand"`
      - : Von 0 weg runden. Der _Betrag_ des Wertes wird durch das Runden stets erhöht. Positive Werte werden aufgerundet. Negative Werte werden "negativer".
    - `"trunc"`
      - : Richtung 0 Runden. Dieser _Betrag_ des Wertes wird durch das Runden stets verringert. Positive Werte werden abgerundet. Negative Werte werden "weniger negativ".
    - `"halfCeil"`
      - : Gleichstände Richtung +∞. Werte über dem Halbincrement werden wie `"ceil"` (gegen +∞) gerundet, und darunter wie `"floor"` (gegen -∞). Beim Halbincrement werden Werte wie `"ceil"` gerundet.
    - `"halfFloor"`
      - : Gleichstände Richtung -∞. Werte über dem Halbincrement werden wie `"ceil"` (gegen +∞) gerundet, und darunter wie `"floor"` (gegen -∞). Beim Halbincrement werden Werte wie `"floor"` gerundet.
    - `"halfExpand"` (Standard)
      - : Gleichstände von 0 weg. Werte über dem Halbincrement werden wie `"expand"` (von 0 weg) gerundet, und darunter wie `"trunc"` (gegen 0). Beim Halbincrement werden Werte wie `"expand"` gerundet.
    - `"halfTrunc"`
      - : Gleichstände gegen 0. Werte über dem Halbincrement werden wie `"expand"` (von 0 weg) gerundet, und darunter wie `"trunc"` (gegen 0). Beim Halbincrement werden Werte wie `"trunc"` gerundet.
    - `"halfEven"`
      - : Gleichstände gegen die nächste gerade Zahl. Werte über dem Halbincrement werden wie `"expand"` (von 0 weg) gerundet, und darunter wie `"trunc"` (gegen 0). Beim Halbincrement werden Werte gegen die nächste gerade Ziffer gerundet.

    Diese Optionen spiegeln den [ICU-Benutzerleitfaden](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html) wider, bei dem "expand" und "trunc" auf ICU "UP" und "DOWN" abgebildet werden.
    Das unten stehende Beispiel der [Rundungsmodi](#rundungsmodi) zeigt, wie jeder Modus funktioniert.

- `trailingZeroDisplay`
  - : Die Strategie zur Anzeige führender Nullen bei ganzen Zahlen. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Behalten Sie die nachfolgenden Nullen gemäß `minimumFractionDigits` und `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Entfernen Sie die Nachkommastellen, _wenn_ sie alle Null sind. Dies ist dasselbe wie `"auto"`, wenn eine der Nachkommastellen ungleich Null ist.

##### Standardwerte für SignificantDigits/FractionDigits

Für die vier oben genannten Optionen (die Optionen `FractionDigits` und `SignificantDigits`) haben wir ihre Standardwerte erwähnt; allerdings werden diese Standards _nicht bedingungslos angewendet_. Sie werden nur dann angewendet, wenn die Eigenschaft tatsächlich verwendet werden soll, was von dem [`roundingPriority`](#roundingpriority) und [`notation`](#notation) Einstellungen abhängt. Konkret:

- Wenn `roundingPriority` nicht `"auto"` ist, dann gelten alle vier Optionen.
- Wenn `roundingPriority` `"auto"` ist und mindestens eine `SignificantDigits`-Option gesetzt ist, dann gelten die `SignificantDigits`-Optionen und die `FractionDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist und entweder mindestens eine `FractionDigits`-Option gesetzt ist oder `notation` nicht `"compact"` ist, dann gelten die `FractionDigits`-Optionen und die `SignificantDigits`-Optionen werden ignoriert.
- Wenn `roundingPriority` `"auto"` ist, `notation` `"compact"` ist und keine der vier Optionen gesetzt sind, dann werden sie auf `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 } gesetzt, unabhängig von den oben genannten Standardwerten, und `roundingPriority`wird auf`"morePrecision"` gesetzt.

#### Andere Optionen

- `notation`
  - : Das Format, das für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"standard"` (Standard)
      - : Einfaches nummerisches Format.
    - `"scientific"`
      - : Gibt die Größenordnung für die formatierte Zahl zurück.
    - `"engineering"`
      - : Gibt den Exponenten der Zehner zurück, wenn er durch drei teilbar ist.
    - `"compact"`
      - : Zeichenkette, die den Exponenten darstellt; Standard ist die "short"-Form.
- `compactDisplay`
  - : Wird nur verwendet, wenn `notation` `"compact"` ist. Mögliche Werte sind `"short"` und `"long"`; der Standardwert ist `"short"`.
- `useGrouping`

  - : Ob Gruppierungszeichen, wie Tausendertrennzeichen oder Tausend/Lakh/Crore-Trennzeichen, verwendet werden sollen.

    - `"always"`
      - : Zeigt Gruppierungszeichen immer an, auch wenn die Locale anderes bevorzugt.
    - `"auto"`
      - : Zeigt Gruppierungszeichen basierend auf der Locale-Präferenz an, die auch von der Währung abhängig sein kann.
    - `"min2"`
      - : Zeigt Gruppierungszeichen an, wenn mindestens 2 Ziffern in einer Gruppe sind.
    - `true`
      - : Entspricht `"always"`.
    - `false`
      - : Zeigt keine Gruppierungszeichen an.

    Der Standardwert ist `"min2"`, wenn `notation` `"compact"` ist, und `"auto"` sonst. Die Zeichenkettenwerte `"true"` und `"false"` werden akzeptiert, aber immer zum Standardwert konvertiert.

- `signDisplay`
  - : Wann das Vorzeichen für die Zahl angezeigt werden soll. Mögliche Werte sind:
    - `"auto"` (Standard)
      - : Vorzeichenanzeige nur für negative Zahlen, einschließlich negativer Null.
    - `"always"`
      - : Immer das Vorzeichen anzeigen.
    - `"exceptZero"`
      - : Vorzeichenanzeige für positive und negative Zahlen, aber nicht für Null.
    - `"negative"`
      - : Vorzeichenanzeige nur für negative Zahlen, exklusive negativer Null.
    - `"never"`
      - : Niemals das Vorzeichen anzeigen.

### Rückgabewert

Ein neues `Intl.NumberFormat`-Objekt.

> [!NOTE]
> Der Text unten beschreibt ein Verhalten, das nach der Spezifikation als "optional" gekennzeichnet ist. Es funktioniert möglicherweise nicht in allen Umgebungen. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

Normalerweise kann `Intl.NumberFormat()` mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, und in beiden Fällen wird eine neue `Intl.NumberFormat`-Instanz zurückgegeben. Wenn jedoch der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert ein Objekt ist, das [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) `Intl.NumberFormat` ist (was nicht unbedingt bedeutet, dass es über `new Intl.NumberFormat` erstellt wurde; es bedeutet lediglich, dass es `Intl.NumberFormat.prototype` in seiner Prototypkette hat), dann wird stattdessen der Wert von `this` zurückgegeben, wobei das neu erstellte `Intl.NumberFormat`-Objekt in einer `[Symbol(IntlLegacyConstructedSymbol)]`-Eigenschaft verborgen ist (ein eindeutiges Symbol, das zwischen Instanzen wiederverwendet wird).

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

Beachten Sie, dass es hier in Wirklichkeit nur eine `Intl.NumberFormat`-Instanz gibt: diejenige, die in `[Symbol(IntlLegacyConstructedSymbol)]` verborgen ist. Das Aufrufen der [`format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format)- und [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions)-Methoden auf `formatter` würde korrekt die Optionen dieser Instanz verwenden, aber das Aufrufen aller anderen Methoden (z.B. [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange)) würde mit "TypeError: formatRange method called on incompatible Object" fehlschlagen, da diese Methoden die Optionen der verborgenen Instanz nicht konsultieren.

Dieses Verhalten, genannt `ChainNumberFormat`, tritt nicht auf, wenn `Intl.NumberFormat()` ohne `new` aufgerufen wird, aber mit `this` auf etwas anderes gesetzt ist, das nicht ein `instanceof Intl.NumberFormat` ist. Wenn Sie es direkt als `Intl.NumberFormat()` aufrufen, ist der `this`-Wert [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl), und eine neue `Intl.NumberFormat`-Instanz wird normal erstellt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Eine Eigenschaft, die enumerierte Werte akzeptiert (wie `style`, `units`, `currency` usw.), ist auf einen ungültigen Wert gesetzt.
    - Sowohl `maximumFractionDigits` als auch `minimumFractionDigits` sind festgelegt, und sie sind auf unterschiedliche Werte gesetzt.
      Beachten Sie, dass je nach verschiedenen Formatierungsoptionen diese Eigenschaften Standardwerte haben können.
      Es ist daher möglich, diesen Fehler zu erhalten, auch wenn Sie nur eine der Eigenschaften festlegen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft `options.style` auf "unit" oder "currency" gesetzt ist und kein Wert für die entsprechende Eigenschaft `options.unit` oder `options.currency` festgelegt wurde.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe einer Locale wird eine formatierte Zeichenkette in der Standard-Locale und mit Standardoptionen zurückgegeben.

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

### Anzeigen von Vorzeichen

Zeigen Sie ein Vorzeichen für positive und negative Zahlen an, jedoch nicht für Null:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Beachten Sie, dass bei "Buchhaltungs"-Vorzeichen eventuell Klammern anstelle eines Minuszeichens verwendet werden können:

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
> Wenn sowohl Grenzen für signifikante als auch für Bruchziffern angegeben sind, hängt das eigentliche Formatieren vom [`roundingPriority`](#roundingpriority) ab.

#### Verwendung von FractionDigits und IntegerDigits

Die Ganzzahl- und Bruchzifferneigenschaften geben die Anzahl der Ziffern an, die vor und nach dem Dezimalpunkt angezeigt werden sollen.
Wenn der anzuzeigende Wert weniger Ganzzahlziffern als angegeben hat, wird er mit Nullen links auf die erforderliche Anzahl aufgefüllt.
Wenn er weniger Bruchziffern hat, wird er rechts mit Nullen aufgefüllt.
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

Wenn ein Wert mehr Bruchziffern als die angegebene maximale Anzahl hat, wird er gerundet.
Die _Art_, wie er gerundet wird, hängt von der [`roundingMode`](#roundingmode)-Eigenschaft ab (weitere Details dazu im Abschnitt [Rundungsmodi](#rundungsmodi)).
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

Die minimale Anzahl an Bruchziffern hat keinen Effekt, wenn der Wert bereits mehr Bruchziffern hat:

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
> Achten Sie auf Standardwerte, da diese die Formatierung beeinflussen können, auch wenn sie nicht in Ihrem Code spezifiziert sind.
> Der Standardwert für die maximale Ziffernanzahl ist `3` für einfache Werte, `2` für Währung und kann unterschiedliche Werte für andere vordefinierte Typen haben.

Der oben formatierte Wert wird auf 3 Ziffern gerundet, obwohl wir die maximale Ziffernanzahl nicht spezifiziert haben!
Dies liegt daran, dass ein Standardwert für `maximumFractionDigits` gesetzt wird, wenn wir `minimumFractionDigits` angeben, und umgekehrt. Die Standardwerte für `maximumFractionDigits` und `minimumFractionDigits` sind `3` und `0` respektive.

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

Die Anzahl der _signifikanten Ziffern_ ist die Gesamtsumme der Ziffern, einschließlich der Ganzzahl- und Bruchteile.
`maximumSignificantDigits` wird verwendet, um die Gesamtsumme der Ziffern vom Originalwert anzuzeigen.

Die untenstehenden Beispiele zeigen, wie das funktioniert.
Besonders bemerkenswert ist der letzte Fall: nur die erste Ziffer wird beibehalten und die anderen werden verworfen/auf Null gesetzt.

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

Die `minimumSignificantDigits` gewährleistet, dass mindestens die angegebene Zahl an Ziffern angezeigt wird, indem bei Bedarf Nullen an das Ende des Wertes angefügt werden.

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
> Wurde nur eine `SignificantDigits`-Eigenschaft verwendet, wird deren Gegenstück automatisch mit dem Standardwert angewendet.
> Die Standard-Maximal- und Minimalwerte für signifikante Ziffern sind 20 und 1 respektive.

#### Gleichzeitige Angabe von signifikanten und Bruchziffern

Die Bruchziffern ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) und die signifikanten Ziffern ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sind beide Wege, um zu steuern, wie viele Bruch- und führende Ziffern formatiert werden sollen.
Wenn beide zur gleichen Zeit verwendet werden, können sie im Konflikt stehen.

Diese Konflikte werden mit der [`roundingPriority`](#roundingpriority)-Eigenschaft gelöst.
Standardmäßig hat sie einen Wert von `"auto"`, was bedeutet, dass, wenn entweder [`minimumSignificantDigits`](#minimumsignificantdigits) oder [`maximumSignificantDigits`](#maximumsignificantdigits) angegeben sind, die Bruch- und Ganzzahldigitaleigenschaften ignoriert werden.

Zum Beispiel formatiert der untenstehende Code den Wert von `4.33145` mit `maximumFractionDigits: 3`, dann `maximumSignificantDigits: 2` und dann beide.
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

Wenn man [`resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions) verwendet, um den Formatter zu inspizieren, sieht man, dass das zurückgegebene Objekt `maximumFractionDigits` nicht einbezieht, wenn `maximumSignificantDigits` oder `minimumSignificantDigits` angegeben sind.

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
Der Formatter berechnet die Präzision mit den Werten von `maximumSignificantDigits` und `maximumFractionDigits`.

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

Beachten Sie, dass der Algorithmus sich unvorhersehbar verhalten kann, wenn ein Minimalwert angegeben ist, ohne ein Maximalwert.
Das untenstehende Beispiel formatiert den Wert `1` mit `minimumFractionDigits: 2` (formatiert zu `1.00`) und `minimumSignificantDigits: 2` (formatiert zu `1.0`).
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

Der Grund dafür ist, dass nur die "maximalen Präzisions"-Werte für die Berechnung verwendet werden und der Standardwert von `maximumSignificantDigits` viel höher ist als `maximumFractionDigits`.

> [!NOTE]
> Die Arbeitsgruppe hat eine Änderung des Algorithmus vorgeschlagen, bei der der Formatter das Ergebnis der Verwendung der angegebenen Bruch- und signifikanten Ziffern unabhängig bewerten soll (unter Berücksichtigung sowohl der minimalen als auch der maximalen Werte).
> Dann wird die Option ausgewählt, die im Falle von `morePrecision` mehr Bruchziffern anzeigt und im Falle von `lessPrecision` weniger.
> Dies führt zu einem intuitiveren Verhalten in diesem Fall.

### Rundungsmodi

Wenn ein Wert mehr Bruchziffern hat, als es die Konstruktoroptionen erlauben, wird der formatierte Wert auf die spezifizierte Anzahl von Bruchziffern _gerundet_.
Die _Art_ und Weise, wie der Wert gerundet wird, hängt von der [`roundingMode`](#roundingmode)-Eigenschaft ab.

Zahlenformatierer verwenden standardmäßig die `halfExpand`-Rundung, die Werte "von Null weg" beim Halbincrement rundet (mit anderen Worten wird der _Betrag_ des Wertes nach oben gerundet).

Für eine positive Zahl, wenn die Bruchziffern, die entfernt werden sollen, näher an das nächste Inkrement (oder genau auf der Halben Strecke) sind, wird die verbleibende Bruchstelle aufgerundet, sonst wird sie abgerundet.
Dies wird unten gezeigt: 2.23 gerundet auf zwei signifikante Ziffern wird auf 2.2 gekürzt, da 2.23 weniger als das Halbincrement 2.25 ist, während Werte von 2.25 und größer auf 2.3 aufgerundet werden:

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

Eine negative Zahl auf oder unter dem Halbincrement wird ebenfalls von Null weg gerundet (wird negativer):

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

Die folgende Tabelle zeigt die Auswirkungen verschiedener Rundungsmodi für positive und negative Werte, die auf und um das Halbincrement (half increment) liegen.

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

Bei Verwendung von `halfEven` hängt das Verhalten auch von der Parität (ungerade oder gerade) der letzten Ziffer der gerundeten Zahl ab. Zum Beispiel ist das Verhalten von `halfEven` in der obigen Tabelle das gleiche wie von `halfTrunc`, da die Beträge aller Zahlen zwischen einer kleineren "geraden" Zahl (2.2) und einer größeren "ungeraden" Zahl (2.3) liegen. Wenn die Zahlen zwischen ±2.3 und ±2.4 liegen würden, würde `halfEven` stattdessen wie `halfExpand` funktionieren. Dieses Verhalten vermeidet konsistente Unter- oder Überbewertungen von Halbincrementen in einer großen Datenprobe.

### Verwendung von roundingIncrement

Manchmal möchten wir die verbleibenden Bruchziffern auf ein anderes Inkrement als den nächsten Ganzzahl-Wert runden.
Zum Beispiel können Währungen, für die die kleinste Münze 5 Cent ist, den Wert auf 5er-Inkremente runden, um Beträge widerzuspiegeln, die tatsächlich in bar gezahlt werden können.

Diese Art der Rundung kann mit der [`roundingIncrement`](#roundingincrement)-Eigenschaft erreicht werden.

Zum Beispiel, wenn `maximumFractionDigits` 2 ist und `roundingIncrement` 5, wird die Zahl auf das nächste 0.05-Inkrement gerundet:

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
Um auf die nächsten 10 Cent ("Dime-Rundung") zu runden, könnten Sie `roundingIncrement` auf `10` ändern.

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
Das untenstehende Beispiel zeigt, wie `halfCeil`-Rundung verwendet werden kann, um den Wert "weniger positiv" unterhalb des Halbincrements und "mehr positiv" darüber oder beim Halbincrement zu runden.
Die inkrementierte Ziffer ist "0.05", daher ist das Halbincrement bei 0.025 (unten bei 11.225 gezeigt).

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

Wenn Sie die Anzahl der Ziffern ändern müssen, denken Sie daran, dass `minimumFractionDigits` und `maximumFractionDigits` beide auf denselben Wert eingestellt sein müssen, ansonsten wird ein `RangeError` ausgelöst.

`roundingIncrement` kann nicht mit der Rundung von signifikanten Ziffern oder einer Einstellung von `roundingPriority`, die nicht `auto` ist, gemischt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Intl")}}
