---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

**`Number`**-Werte repräsentieren Gleitkommazahlen wie `37` oder `-9.25`.

Der `Number`-Konstruktor enthält Konstanten und Methoden zur Arbeit mit Zahlen. Werte anderer Typen können mit der Funktion `Number()` in Zahlen umgewandelt werden.

## Beschreibung

Zahlen werden am häufigsten in literaler Form wie `255` oder `3.14159` ausgedrückt. Die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) enthält eine detailliertere Referenz.

```js
255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)
```

Ein Zahlenliteral wie `37` im JavaScript-Code ist ein Gleitkommawert, kein Ganzzahlwert. Es gibt keinen separaten Ganzzahltyp im täglichen Gebrauch. (JavaScript hat auch den Typ {{jsxref("BigInt")}}, aber er ist nicht dazu gedacht, `Number` im Alltag zu ersetzen. `37` ist immer noch eine Zahl, kein BigInt.)

Wird `Number(value)` als Funktion verwendet, konvertiert es eine Zeichenkette oder einen anderen Wert in den Typ `Number`. Wenn der Wert nicht konvertiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

```js
Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN
```

### Zahlencodierung

Der JavaScript-Typ `Number` ist ein Wert im [doppelter Präzision 64-Bit-Binärformat IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), ähnlich wie `double` in Java oder C#. Das bedeutet, dass er Bruchwerte darstellen kann, es jedoch einige Grenzen hinsichtlich der Größe und Genauigkeit der gespeicherten Zahl gibt. Sehr kurz gesagt, verwendet eine IEEE 754-Gleitkommazahl doppelter Präzision 64 Bits, um 3 Teile darzustellen:

- 1 Bit für das _Vorzeichen_ (positiv oder negativ)
- 11 Bits für den _Exponenten_ (-1022 bis 1023)
- 52 Bits für die _Mantisse_ (die eine Zahl zwischen 0 und 1 darstellt)

Die Mantisse (auch _Signifikand_ genannt) ist der Teil der Zahl, der den eigentlichen Wert (signifikante Ziffern) darstellt. Der Exponent ist die Potenz von 2, mit der die Mantisse multipliziert werden soll. Als wissenschaftliche Notation betrachtet:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mtext>Number</mtext><mo>=</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><msup><mo stretchy="false">)</mo><mtext>sign</mtext></msup><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mtext>mantissa</mtext><mo stretchy="false">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exponent</mtext></msup></mrow><annotation encoding="TeX">\text{Number} = ({-1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die Mantisse wird mit 52 Bits gespeichert, die als Ziffern nach `1.…` in einer binären Bruchzahl interpretiert werden. Daher beträgt die Genauigkeit der Mantisse 2<sup>-52</sup> (über {{jsxref("Number.EPSILON")}} erreichbar) oder etwa 15 bis 17 Dezimalstellen; Arithmetik darüber hinaus ist dem [Runden](https://de.wikipedia.org/wiki/Gleitkommaarithmetik#Gleitkommadarstellung,_Umwandlung_und_Rundung) unterworfen.

Der höchste Wert, den eine Zahl halten kann, ist 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) (wobei der Exponent 1023 ist und die Mantisse 0.1111… in Basis 2), was über {{jsxref("Number.MAX_VALUE")}} erreichbar ist. Werte darüber hinaus werden durch die spezielle Zahlenkonstante {{jsxref("Infinity")}} ersetzt.

Ganzzahlen können nur im Bereich von -2<sup>53</sup> + 1 bis 2<sup>53</sup> - 1 (einschließlich) ohne Präzisionsverlust dargestellt werden (erreichbar über {{jsxref("Number.MIN_SAFE_INTEGER")}} und {{jsxref("Number.MAX_SAFE_INTEGER")}}), da die Mantisse nur 53 Bits (einschließlich der führenden 1) halten kann.

Mehr Details hierzu sind im [ECMAScript-Standard](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type) beschrieben.

### Zwangskonvertierung zu Number

Viele eingebauten Operationen, die Zahlen erwarten, erzwingen zuerst, dass ihre Argumente in Zahlen konvertiert werden (was größtenteils erklärt, warum `Number`-Objekte sich ähnlich wie Zahlenprimitiva verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber) kann wie folgt zusammengefasst werden:

- Zahlen werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird in [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) umgewandelt.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird in `0` umgewandelt.
- `true` wird in `1` umgewandelt; `false` wird in `0` umgewandelt.
- Zeichenketten werden durch Parsen so konvertiert, als ob sie ein [Zahlenliteral](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) enthalten. Ein Parsing-Fehler führt zu `NaN`. Es gibt einige geringfügige Unterschiede im Vergleich zu einem tatsächlichen Zahlenliteral:
  - Führende und nachgestellte Leerzeichen/Zeilenabschlüsse werden ignoriert.
  - Eine führende `0`-Ziffer bewirkt nicht, dass die Zahl zu einem oktalen Literal wird (oder im strikten Modus abgelehnt wird).
  - `+` und `-` sind am Anfang der Zeichenkette zulässig, um das Vorzeichen anzugeben. (Im eigentlichen Code "sehen sie aus wie" ein Teil des Literals, sind aber tatsächlich separate unäre Operatoren.) Allerdings darf das Vorzeichen nur einmal erscheinen und darf nicht von Leerzeichen gefolgt werden.
  - `Infinity` und `-Infinity` werden als Literale erkannt. Im eigentlichen Code sind sie globale Variablen.
  - Leere oder nur aus Leerzeichen bestehende Zeichenketten werden in `0` umgewandelt.
  - [Numerische Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) sind nicht erlaubt.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werfen einen {{jsxref("TypeError")}}, um unbeabsichtigte implizite Zwangskonvertierungen zu verhindern, die einen Informationsverlust verursachen könnten.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in einen primitiven Wert umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem ihre Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()` und `toString()` in dieser Reihenfolge aufgerufen werden. Der resultierende primitive Wert wird dann in eine Zahl umgewandelt.

Es gibt zwei Möglichkeiten, fast denselben Effekt in JavaScript zu erzielen.

- [Unäres Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus): `+x` führt genau die oben dargestellten Schritte der Zahlenumwandlung durch, um `x` zu konvertieren.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion: `Number(x)` verwendet den gleichen Algorithmus, um `x` zu konvertieren, außer dass [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) keinen {{jsxref("TypeError")}} verursachen, sondern ihren Zahlenwert zurückgeben, wobei jedoch ein Präzisionsverlust möglich ist.

{{jsxref("Number.parseFloat()")}} und {{jsxref("Number.parseInt()")}} sind ähnlich wie `Number()`, konvertieren jedoch nur Zeichenketten und haben leicht unterschiedliche Parsing-Regeln. Beispielsweise erkennt `parseInt()` den Dezimalpunkt nicht und `parseFloat()` erkennt das `0x`-Präfix nicht.

#### Ganzzahlkonvertierung

Einige Operationen erwarten Ganzzahlen, insbesondere solche, die mit Array-/Zeichenfolgenindizes, Datums-/Zeitkomponenten und Zahlenradixen arbeiten. Nach den oben ausgeführten Schritten zur Zahlenumwandlung wird das Ergebnis in eine Ganzzahl [gekürzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) (durch Entfernen des Bruchteils). Wenn die Zahl ±Infinity beträgt, wird sie unverändert zurückgegeben. Wenn die Zahl `NaN` oder `-0` ist, wird sie als `0` zurückgegeben. Das Ergebnis ist daher immer eine Ganzzahl (die nicht `-0` ist) oder ±Infinity.

Besonders bemerkenswert ist, dass bei der Umwandlung in Ganzzahlen sowohl `undefined` als auch `null` zu `0` werden, da `undefined` in `NaN` umgewandelt wird, das ebenfalls zu `0` wird.

#### Festbreiten-Zahlkonvertierung

JavaScript verfügt über einige niederstufige Funktionen, die sich mit der binären Codierung von Ganzzahlen befassen, insbesondere [bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und {{jsxref("TypedArray")}}-Objekte. Bitweise Operatoren konvertieren die Operanden immer in 32-Bit-Ganzzahlen. In diesen Fällen wird das Ergebnis nach der Umwandlung des Werts in eine Zahl auf eine gegebene Breite normalisiert, indem zuerst der Bruchteil [gekürzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) und dann die niedrigsten Bits in der Zweierkomplement-Darstellung der Ganzzahl genommen werden.

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
  - : Erstellt `Number`-Objekte. Wenn diese Funktion aufgerufen wird, gibt sie primitive Werte vom Typ `Number` zurück.

## Statische Eigenschaften

- {{jsxref("Number.EPSILON")}}
  - : Das kleinste Intervall zwischen zwei darstellbaren Zahlen.
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : Die maximale sichere Ganzzahl in JavaScript (2<sup>53</sup> - 1).
- {{jsxref("Number.MAX_VALUE")}}
  - : Die größte darstellbare positive Zahl.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : Die minimale sichere Ganzzahl in JavaScript (-(2<sup>53</sup> - 1)).
- {{jsxref("Number.MIN_VALUE")}}
  - : Die kleinste positive darstellbare Zahl – also die positive Zahl, die null am nächsten ist (ohne tatsächlich null zu sein).
- {{jsxref("Number.NaN")}}
  - : Spezieller "**N**ot **a** **N**umber"-Wert.
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : Spezieller Wert, der negative Unendlichkeit darstellt. Wird bei Überlauf zurückgegeben.
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : Spezieller Wert, der Unendlichkeit darstellt. Wird bei Überlauf zurückgegeben.

## Statische Methoden

- {{jsxref("Number.isFinite()")}}
  - : Bestimmt, ob der übergebene Wert eine endliche Zahl ist.
- {{jsxref("Number.isInteger()")}}
  - : Bestimmt, ob der übergebene Wert eine Ganzzahl ist.
- {{jsxref("Number.isNaN()")}}
  - : Bestimmt, ob der übergebene Wert `NaN` ist.
- {{jsxref("Number.isSafeInteger()")}}
  - : Bestimmt, ob der übergebene Wert eine sichere Ganzzahl ist (Zahl zwischen -(2<sup>53</sup> - 1) und 2<sup>53</sup> - 1).
- {{jsxref("Number.parseFloat()")}}
  - : Dies ist dieselbe Funktion wie die globale {{jsxref("parseFloat()")}}-Funktion.
- {{jsxref("Number.parseInt()")}}
  - : Dies ist dieselbe Funktion wie die globale {{jsxref("parseInt()")}}-Funktion.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Number.prototype` definiert und werden von allen `Number`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Number.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Number`-Instanzen ist der anfängliche Wert der {{jsxref("Number/Number", "Number")}}-Konstruktor.

## Instanzmethoden

- {{jsxref("Number.prototype.toExponential()")}}
  - : Gibt eine Zeichenkette zurück, die die Zahl in exponentieller Notation darstellt.
- {{jsxref("Number.prototype.toFixed()")}}
  - : Gibt eine Zeichenkette zurück, die die Zahl in fester Notation darstellt.
- {{jsxref("Number.prototype.toLocaleString()")}}
  - : Gibt eine sprachsensitive Darstellung dieser Zahl als Zeichenkette zurück. Überschreibt die Methode {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Number.prototype.toPrecision()")}}
  - : Gibt eine Zeichenkette zurück, die die Zahl mit einer angegebenen Genauigkeit in fester oder exponentieller Notation darstellt.
- {{jsxref("Number.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die das spezifizierte Objekt im angegebenen _radix_ ("Basis") darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Number.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des spezifizierten Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.

## Beispiele

### Verwendung des Number-Objekts zur Zuordnung von Werten zu numerischen Variablen

Das folgende Beispiel verwendet die Eigenschaften des `Number`-Objekts, um mehrere numerische Variablen zu belegen:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

### Ganzzahlbereich für Number

Das folgende Beispiel zeigt die minimalen und maximalen Ganzzahlwerte, die als `Number`-Objekt dargestellt werden können.

```js
const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```

Beim Parsen von Daten, die in JSON serialisiert wurden, können Ganzzahlen, die außerhalb dieses Bereichs liegen, erwartet werden, dass sie verzerrt werden, wenn der JSON-Parser sie in den `Number`-Typ umwandelt.

Eine mögliche Lösung besteht darin, stattdessen `{{jsxref("String")}}` zu verwenden.

Größere Zahlen können mit dem Typ {{jsxref("BigInt")}} dargestellt werden.

### Verwendung von Number() zur Umwandlung eines Date-Objekts

Das folgende Beispiel wandelt das {{jsxref("Date")}}-Objekt mithilfe von `Number` als Funktion in einen numerischen Wert um:

```js
const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));
```

Dies protokolliert `819199440000`.

### Umwandlung numerischer Zeichenketten und null in Zahlen

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

- [Polyfill des modernen `Number`-Verhaltens (mit Unterstützung für binäre und oktale Literale) in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
- {{jsxref("Math")}}
- {{jsxref("BigInt")}}
