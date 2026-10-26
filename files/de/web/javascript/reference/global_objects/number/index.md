---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

**`Number`**-Werte stellen Gleitkommazahlen wie `37` oder `-9.25` dar.

Der `Number`-Konstruktor enthält Konstanten und Methoden für die Arbeit mit Zahlen. Werte anderer Typen können mit der Funktion `Number()` in Zahlen umgewandelt werden.

## Beschreibung

Zahlen werden meist als Literale wie `255` oder `3.14159` ausgedrückt. Die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) enthält eine ausführlichere Referenz.

```js
255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)
```

Ein Zahlenliteral wie `37` ist in JavaScript-Code ein Gleitkommawert und kein Integer. Für den alltäglichen Gebrauch gibt es keinen separaten Integer-Typ. (JavaScript hat auch den Typ {{jsxref("BigInt")}}, der aber nicht dafür gedacht ist, Number im alltäglichen Gebrauch zu ersetzen. `37` ist weiterhin eine Zahl und kein BigInt.)

Wenn `Number(value)` als Funktion verwendet wird, wandelt es einen String oder einen anderen Wert in den Typ Number um. Kann der Wert nicht umgewandelt werden, gibt die Funktion {{jsxref("NaN")}} zurück.

```js
Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN
```

### Kodierung von Number

Der JavaScript-Typ `Number` speichert Werte im [64-Bit-Binärformat mit doppelter Genauigkeit nach IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), ähnlich wie `double` in Java oder C#. Damit lassen sich Bruchwerte darstellen, allerdings sind Betrag und Genauigkeit der gespeicherten Zahl begrenzt. Vereinfacht gesagt verwendet eine IEEE-754-Zahl mit doppelter Genauigkeit 64 Bit für drei Bestandteile:

- 1 Bit für das _Vorzeichen_ (positiv oder negativ)
- 11 Bit für den _Exponenten_ (-1022 bis 1023)
- 52 Bit für die _Mantisse_ (die eine Zahl zwischen 0 und 1 darstellt)

Die Mantisse (auch _Signifikand_ genannt) ist der Teil der Zahl, der den eigentlichen Wert darstellt (die signifikanten Stellen). Der Exponent ist die Zweierpotenz, mit der die Mantisse multipliziert wird. In wissenschaftlicher Schreibweise lässt sich dies so ausdrücken:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mtext>Number</mtext><mo>=</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><msup><mo stretchy="false">)</mo><mtext>sign</mtext></msup><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mtext>mantissa</mtext><mo stretchy="false">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exponent</mtext></msup></mrow><annotation encoding="TeX">\text{Number} = ({-1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die Mantisse wird mit 52 Bit gespeichert, die als Stellen nach `1.…` in einer binären Bruchzahl interpretiert werden. Daher beträgt die Genauigkeit der Mantisse 2<sup>-52</sup> (abrufbar über {{jsxref("Number.EPSILON")}}), was etwa 15 bis 17 signifikanten Dezimalstellen entspricht. Bei Berechnungen oberhalb dieser Genauigkeit kommt es zu [Rundungen](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Representable_numbers,_conversion_and_rounding).

Der größte Wert, den eine Zahl annehmen kann, ist 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) (mit dem Exponenten 1023 und der Mantisse 0,1111… zur Basis 2). Er ist über {{jsxref("Number.MAX_VALUE")}} abrufbar. Höhere Werte werden durch die spezielle Zahlenkonstante {{jsxref("Infinity")}} ersetzt.

Integer lassen sich nur im Bereich von -2<sup>53</sup> + 1 bis einschließlich 2<sup>53</sup> - 1 ohne Genauigkeitsverlust darstellen (abrufbar über {{jsxref("Number.MIN_SAFE_INTEGER")}} und {{jsxref("Number.MAX_SAFE_INTEGER")}}), da die Mantisse nur 53 Bit aufnehmen kann (einschließlich der führenden 1).

Weitere Einzelheiten dazu sind im [ECMAScript-Standard](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type) beschrieben.

### Umwandlung in Number

Viele integrierte Operationen, die Zahlen erwarten, wandeln ihre Argumente zunächst in Zahlen um (was weitgehend erklärt, warum sich `Number`-Objekte ähnlich wie primitive Zahlenwerte verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber) lässt sich wie folgt zusammenfassen:

- Zahlen werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `0`.
- `true` wird zu `1`; `false` wird zu `0`.
- Strings werden so geparst, als enthielten sie ein [Zahlenliteral](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals). Schlägt das Parsen fehl, ergibt sich `NaN`. Gegenüber einem tatsächlichen Zahlenliteral gibt es einige kleinere Unterschiede:
  - Führende und nachfolgende Leerzeichen und Zeilenabschlusszeichen werden ignoriert.
  - Eine führende Ziffer `0` führt weder dazu, dass die Zahl als oktales Literal interpretiert wird, noch dazu, dass sie im strikten Modus abgelehnt wird.
  - `+` und `-` sind am Anfang des Strings als Vorzeichen zulässig. (Im tatsächlichen Code „sehen sie aus“ wie ein Teil des Literals, sind aber eigenständige unäre Operatoren.) Das Vorzeichen darf jedoch nur einmal vorkommen und unmittelbar darauf dürfen keine Leerzeichen folgen.
  - `Infinity` und `-Infinity` werden als Literale erkannt. Im tatsächlichen Code sind sie globale Variablen.
  - Leere Strings oder Strings, die nur Leerzeichen enthalten, werden in `0` umgewandelt.
  - [Numerische Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) sind nicht zulässig.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) lösen einen {{jsxref("TypeError")}} aus, um einen Genauigkeitsverlust durch unbeabsichtigte implizite Umwandlung zu verhindern.
- [Symbols](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lösen einen {{jsxref("TypeError")}} aus.
- Objekte werden zunächst [in einen primitiven Wert umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Dazu werden ihre Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hint), `valueOf()` und `toString()` in dieser Reihenfolge aufgerufen. Der resultierende primitive Wert wird anschließend in eine Zahl umgewandelt.

In JavaScript gibt es zwei Möglichkeiten, nahezu denselben Effekt zu erzielen.

- [Unäres Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus): `+x` führt genau die oben beschriebenen Schritte aus, um `x` in eine Zahl umzuwandeln.
- Die Funktion [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number): `Number(x)` verwendet denselben Algorithmus zur Umwandlung von `x`, mit einer Ausnahme: [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) lösen keinen {{jsxref("TypeError")}} aus, sondern geben ihren Zahlenwert zurück, wobei Genauigkeit verloren gehen kann.

{{jsxref("Number.parseFloat()")}} und {{jsxref("Number.parseInt()")}} ähneln `Number()`, wandeln aber nur Strings um und verwenden etwas andere Regeln beim Parsen. Beispielsweise erkennt `parseInt()` den Dezimalpunkt nicht und `parseFloat()` erkennt das Präfix `0x` nicht.

#### Umwandlung in Integer

Einige Operationen erwarten Integer, insbesondere solche, die mit Array- oder String-Indizes, Datums- und Zeitkomponenten sowie Zahlenbasen arbeiten. Nach den oben beschriebenen Schritten zur Umwandlung in eine Zahl wird das Ergebnis auf einen Integer [abgeschnitten](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) (indem der Bruchteil verworfen wird). Ist die Zahl ±Infinity, wird sie unverändert zurückgegeben. Ist sie `NaN` oder `-0`, wird `0` zurückgegeben. Das Ergebnis ist somit immer ein Integer (der nicht `-0` ist) oder ±Infinity.

Insbesondere werden bei der Umwandlung in Integer sowohl `undefined` als auch `null` zu `0`: `undefined` wird zunächst zu `NaN`, das ebenfalls zu `0` wird.

#### Umwandlung in Zahlen mit fester Bitbreite

JavaScript verfügt über einige Funktionen auf niedrigerer Ebene, die mit der binären Kodierung von Integern arbeiten, insbesondere [bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und {{jsxref("TypedArray")}}-Objekte. Bitweise Operatoren wandeln die Operanden immer in 32-Bit-Integer um. In diesen Fällen wird der Wert zunächst in eine Zahl umgewandelt. Anschließend wird die Zahl auf die vorgegebene Bitbreite normalisiert, indem zuerst der Bruchteil [abgeschnitten](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) wird und dann die niederwertigsten Bits der Zweierkomplementdarstellung des Integers übernommen werden.

```js
new Int32Array([1.1, 1.9, -1.1, -1.9]); // Int32Array(4) [ 1, 1, -1, -1 ]

new Int8Array([257, -257]); // Int8Array(2) [ 1, -1 ]
// 257 = 0001 0000 0001
//     =      0000 0001 (mod 2^8)
//     = 1
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = -1 (as signed integer)

new Uint8Array([257, -257]); // Uint8Array(2) [ 1, 255 ]
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = 255 (as unsigned integer)
```

## Konstruktor

- {{jsxref("Number/Number", "Number()")}}
  - : Erstellt `Number`-Objekte. Wird der Konstruktor als Funktion aufgerufen, gibt er primitive Werte des Typs Number zurück.

## Statische Eigenschaften

- {{jsxref("Number.EPSILON")}}
  - : Der kleinste Abstand zwischen zwei darstellbaren Zahlen.
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : Der größte sichere Integer in JavaScript (2<sup>53</sup> - 1).
- {{jsxref("Number.MAX_VALUE")}}
  - : Die größte darstellbare positive Zahl.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : Der kleinste sichere Integer in JavaScript (-(2<sup>53</sup> - 1)).
- {{jsxref("Number.MIN_VALUE")}}
  - : Die kleinste darstellbare positive Zahl, also die positive Zahl, die null am nächsten liegt (ohne selbst null zu sein).
- {{jsxref("Number.NaN")}}
  - : Der spezielle Wert „**N**ot **a** **N**umber“.
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : Ein spezieller Wert, der negative Unendlichkeit darstellt. Wird bei einem Überlauf zurückgegeben.
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : Ein spezieller Wert, der Unendlichkeit darstellt. Wird bei einem Überlauf zurückgegeben.

## Statische Methoden

- {{jsxref("Number.isFinite()")}}
  - : Prüft, ob der übergebene Wert eine endliche Zahl ist.
- {{jsxref("Number.isInteger()")}}
  - : Prüft, ob der übergebene Wert ein Integer ist.
- {{jsxref("Number.isNaN()")}}
  - : Prüft, ob der übergebene Wert `NaN` ist.
- {{jsxref("Number.isSafeInteger()")}}
  - : Prüft, ob der übergebene Wert ein sicherer Integer ist (eine Zahl zwischen -(2<sup>53</sup> - 1) und 2<sup>53</sup> - 1).
- {{jsxref("Number.parseFloat()")}}
  - : Entspricht der globalen Funktion {{jsxref("parseFloat()")}}.
- {{jsxref("Number.parseInt()")}}
  - : Entspricht der globalen Funktion {{jsxref("parseInt()")}}.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Number.prototype` definiert und werden von allen `Number`-Instanzen gemeinsam verwendet.

- {{jsxref("Object/constructor", "Number.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Number`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Number/Number", "Number")}}.

## Instanzmethoden

- {{jsxref("Number.prototype.toExponential()")}}
  - : Gibt einen String zurück, der die Zahl in Exponentialschreibweise darstellt.
- {{jsxref("Number.prototype.toFixed()")}}
  - : Gibt einen String zurück, der die Zahl in Festkommaschreibweise darstellt.
- {{jsxref("Number.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachabhängigen Darstellung dieser Zahl zurück. Überschreibt die Methode {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Number.prototype.toPrecision()")}}
  - : Gibt einen String zurück, der die Zahl mit einer angegebenen Genauigkeit in Festkomma- oder Exponentialschreibweise darstellt.
- {{jsxref("Number.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt zur angegebenen _Basis_ darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Number.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.

## Beispiele

### Das Number-Objekt verwenden, um numerischen Variablen Werte zuzuweisen

Im folgenden Beispiel werden Eigenschaften des `Number`-Objekts verwendet, um mehreren numerischen Variablen Werte zuzuweisen:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

### Integer-Bereich von Number

Das folgende Beispiel zeigt die kleinsten und größten Integer-Werte, die als `Number`-Objekt dargestellt werden können.

```js
const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```

Wenn zu JSON serialisierte Daten geparst werden, können Integer-Werte außerhalb dieses Bereichs verfälscht werden, sobald der JSON-Parser sie in den Typ `Number` umwandelt.

Eine mögliche Umgehung besteht darin, stattdessen {{jsxref("String")}} zu verwenden.

Größere Zahlen können mit dem Typ {{jsxref("BigInt")}} dargestellt werden.

### Number() verwenden, um ein Date-Objekt umzuwandeln

Das folgende Beispiel wandelt das {{jsxref("Date")}}-Objekt in einen numerischen Wert um, indem `Number` als Funktion verwendet wird:

```js
const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));
```

Dabei wird `819199440000` ausgegeben.

### Numerische Strings und null in Zahlen umwandeln

```js
Number("123"); // 123
Number("123") === 123; // true
Number("12.3"); // 12.3
Number("12.00"); // 12
Number("123e-1"); // 12.3
Number(""); // 0
Number(null); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("foo"); // NaN
Number("100a"); // NaN
Number("-Infinity"); // -Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für modernes `Number`-Verhalten (mit Unterstützung für Binär- und Oktalliterale) in `core-js`](https://core-js.io/docs/features/ecmascript/number)
- {{jsxref("NaN")}}
- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
- {{jsxref("Math")}}
- {{jsxref("BigInt")}}
