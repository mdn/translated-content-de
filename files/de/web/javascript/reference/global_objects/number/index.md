---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Number`**-Werte repräsentieren Fließkommanummern wie `37` oder `-9.25`.

Der `Number`-Konstruktor enthält Konstanten und Methoden zur Arbeit mit Zahlen. Werte anderer Typen können mit der `Number()`-Funktion in Zahlen umgewandelt werden.

## Beschreibung

Zahlen werden am häufigsten in literalen Formen wie `255` oder `3.14159` ausgedrückt. Die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) enthält eine detailliertere Referenz.

```js
255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)
```

Ein Zahlenliteral wie `37` im JavaScript-Code ist ein Fließkommawert, kein Integer. Es gibt keinen separaten Integer-Datentyp im allgemeinen Gebrauch. (JavaScript hat auch den Typ {{jsxref("BigInt")}}, aber dieser ist nicht darauf ausgelegt, `Number` für den täglichen Gebrauch zu ersetzen. `37` bleibt eine Zahl, kein BigInt.)

Wenn `Number(value)` als Funktion verwendet wird, konvertiert es einen String oder einen anderen Wert in den Number-Typ. Wenn der Wert nicht konvertiert werden kann, gibt er {{jsxref("NaN")}} zurück.

```js
Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN
```

### Zahlenkodierung

Der JavaScript-`Number`-Typ ist ein [doppelt-genauer 64-Bit-Binärformat-IEEE-754-Wert](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), ähnlich `double` in Java oder C#. Das bedeutet, dass es Bruchwerte darstellen kann, aber es gibt einige Grenzen hinsichtlich der Größe und Präzision der gespeicherten Zahl. Kurz gesagt, eine IEEE-754-Doppelpräzisionszahl verwendet 64 Bits zur Darstellung von 3 Teilen:

- 1 Bit für das _Vorzeichen_ (positiv oder negativ)
- 11 Bits für den _Exponenten_ (-1022 bis 1023)
- 52 Bits für die _Mantisse_ (darstellend eine Zahl zwischen 0 und 1)

Die Mantisse (auch _Signifikant_ genannt) ist der Teil der Zahl, der den tatsächlichen Wert (signifikante Ziffern) darstellt. Der Exponent ist die Potenz von 2, mit der die Mantisse multipliziert werden sollte. Denken Sie daran wie an wissenschaftliche Notation:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mtext>Number</mtext><mo>=</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><msup><mo stretchy="false">)</mo><mtext>sign</mtext></msup><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mtext>mantissa</mtext><mo stretchy="false">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exponent</mtext></msup></mrow><annotation encoding="TeX">\text{Number} = ({-1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die Mantisse wird mit 52 Bits gespeichert, interpretiert als Ziffern nach `1.…` in einer binären Bruchzahl. Daher beträgt die Präzision der Mantisse 2<sup>-52</sup> (verfügbar über {{jsxref("Number.EPSILON")}}), oder etwa 15 bis 17 Dezimalstellen; Arithmetik über diesem Präzisionslevel unterliegt dem [Runden](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Representable_numbers,_conversion_and_rounding).

Der größte Wert, den eine Zahl haben kann, ist 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) (wobei der Exponent 1023 und die Mantisse 0.1111… in Basis 2 ist), und ist über {{jsxref("Number.MAX_VALUE")}} verfügbar. Werte, die darüber hinaus gehen, werden durch die spezielle Zahlenkonstante {{jsxref("Infinity")}} ersetzt.

Integer können nur im Bereich von -2<sup>53</sup> + 1 bis 2<sup>53</sup> - 1 ohne Verlust der Präzision dargestellt werden (verfügbar über {{jsxref("Number.MIN_SAFE_INTEGER")}} und {{jsxref("Number.MAX_SAFE_INTEGER")}}), da die Mantisse nur 53 Bits (einschließlich der führenden 1) halten kann.

Mehr Details dazu werden im [ECMAScript-Standard](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type) beschrieben.

### Zahlencoercion

Viele eingebaute Operationen, die Zahlen erwarten, erzwingen zuerst eine Umwandlung ihrer Argumente in Zahlen (was größtenteils der Grund ist, warum `Number`-Objekte sich ähnlich wie Zahlenprimitive verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber) kann wie folgt zusammengefasst werden:

- Zahlen werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `0`.
- `true` wird zu `1`; `false` wird zu `0`.
- Strings werden konvertiert, indem sie geparst werden, als ob sie ein [Zahlenliteral](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) enthielten. Ein Parsing-Fehler führt zu `NaN`. Es gibt einige geringfügige Unterschiede im Vergleich zu einem tatsächlichen Zahlenliteral:
  - Führende und nachgestellte Leerzeichen/Zeilenendungen werden ignoriert.
  - Eine führende `0`-Ziffer lässt die Zahl nicht zu einem Oktalliteral werden (oder im strengen Modus abgelehnt werden).
  - `+` und `-` sind am Anfang des Strings erlaubt, um das Vorzeichen anzugeben. (Im tatsächlichen Code "sehen sie aus" wie Teil des Literals, sind aber eigentlich separate unäre Operatoren.) Das Vorzeichen darf jedoch nur einmal erscheinen und darf nicht von Leerzeichen gefolgt werden.
  - `Infinity` und `-Infinity` werden als Literale erkannt. Im tatsächlichen Code sind das globale Variablen.
  - Leere oder nur aus Leerzeichen bestehende Strings werden zu `0`.
  - [Numerische Trenner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) sind nicht erlaubt.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werfen einen {{jsxref("TypeError")}}, um unbeabsichtigte implizite Umwandlungen, die zum Verlust der Genauigkeit führen könnten, zu verhindern.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in einen primitiven Wert umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()`- und `toString()`-Methoden in dieser Reihenfolge aufgerufen werden. Der resultierende primitive Wert wird dann in eine Zahl umgewandelt.

Es gibt zwei Möglichkeiten, um in JavaScript nahezu denselben Effekt zu erzielen.

- [Unärer Plus-Operator](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus): `+x` führt genau die oben erklärten Zahlencoercionschritte durch, um `x` zu konvertieren.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion: `Number(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, außer dass [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) keinen {{jsxref("TypeError")}} werfen, sondern ihren Zahlenwert zurückgeben, mit möglichem Präzisionsverlust.

{{jsxref("Number.parseFloat()")}} und {{jsxref("Number.parseInt()")}} sind ähnlich wie `Number()`, konvertieren aber nur Strings und haben leicht unterschiedliche Parseregeln. Zum Beispiel erkennt `parseInt()` den Dezimalpunkt nicht, und `parseFloat()` erkennt nicht das `0x`-Präfix.

#### Integer-Konvertierung

Einige Operationen erwarten Integer, insbesondere solche, die mit Array/String-Indizes, Datums-/Zeitkomponenten und Zahlenradixen arbeiten. Nachdem die oben genannten Zahlencoercionschritte durchgeführt wurden, wird das Ergebnis [abgeschnitten](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc), um einen Integer zu erhalten (durch das Entfernen des gebrochenen Teils). Wenn die Zahl ±Infinity ist, wird sie unverändert zurückgegeben. Wenn die Zahl `NaN` oder `-0` ist, wird sie als `0` zurückgegeben. Das Ergebnis ist daher immer ein Integer (der nicht `-0` ist) oder ±Infinity.

Es ist bemerkenswert, dass sowohl `undefined` als auch `null`, wenn sie in Integer konvertiert werden, zu `0` werden, da `undefined` zu `NaN` konvertiert wird, was ebenfalls zu `0` wird.

#### Festbreiten-Konvertierung von Zahlen

JavaScript hat einige niedrigere Funktionen, die sich mit der binären Kodierung von Integer-Zahlen beschäftigen, insbesondere [bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und {{jsxref("TypedArray")}}-Objekte. Bitweise Operatoren konvertieren die Operanden immer in 32-Bit-Integer. In diesen Fällen wird, nachdem der Wert in eine Zahl umgewandelt wurde, die Zahl dann auf die gegebene Breite normalisiert, indem zunächst der gebrochene Teil [abgeschnitten](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) wird und dann die niedrigsten Bits in der Zweierkomplementdarstellung des Integers genommen werden.

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
  - : Erstellt `Number`-Objekte. Wird die Funktion aufgerufen, liefert sie primitive Werte vom Typ Number zurück.

## Statische Eigenschaften

- {{jsxref("Number.EPSILON")}}
  - : Der kleinste Abstand zwischen zwei darstellbaren Zahlen.
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : Der maximal sichere Integer in JavaScript (2<sup>53</sup> - 1).
- {{jsxref("Number.MAX_VALUE")}}
  - : Die größte darstellbare positive Zahl.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : Der minimal sichere Integer in JavaScript (-(2<sup>53</sup> - 1)).
- {{jsxref("Number.MIN_VALUE")}}
  - : Die kleinste darstellbare positive Zahl, das heißt, die positive Zahl, die null am nächsten ist (ohne tatsächlich null zu sein).
- {{jsxref("Number.NaN")}}
  - : Spezieller Wert "**N**ot **a** **N**umber".
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : Spezieller Wert, der negative Unendlichkeit darstellt. Wird bei Überlauf zurückgegeben.
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : Spezieller Wert, der Unendlichkeit darstellt. Wird bei Überlauf zurückgegeben.

## Statische Methoden

- {{jsxref("Number.isFinite()")}}
  - : Bestimmt, ob der übergebene Wert eine endliche Zahl ist.
- {{jsxref("Number.isInteger()")}}
  - : Bestimmt, ob der übergebene Wert ein Integer ist.
- {{jsxref("Number.isNaN()")}}
  - : Bestimmt, ob der übergebene Wert `NaN` ist.
- {{jsxref("Number.isSafeInteger()")}}
  - : Bestimmt, ob der übergebene Wert ein sicherer Integer ist (Zahl zwischen -(2<sup>53</sup> - 1) und 2<sup>53</sup> - 1).
- {{jsxref("Number.parseFloat()")}}
  - : Dies ist dasselbe wie die globale {{jsxref("parseFloat()")}}-Funktion.
- {{jsxref("Number.parseInt()")}}
  - : Dies ist dasselbe wie die globale {{jsxref("parseInt()")}}-Funktion.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Number.prototype` definiert und werden von allen `Number`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Number.prototype.constructor")}}
  - : Die Konstruktormethode, die das Instanzobjekt erstellt hat. Für `Number`-Instanzen ist der Anfangswert der {{jsxref("Number/Number", "Number")}}-Konstruktor.

## Instanzmethoden

- {{jsxref("Number.prototype.toExponential()")}}
  - : Gibt einen String zurück, der die Zahl in Exponentialnotation darstellt.
- {{jsxref("Number.prototype.toFixed()")}}
  - : Gibt einen String zurück, der die Zahl in Festkommadarstellung darstellt.
- {{jsxref("Number.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachabhängigen Darstellung dieser Zahl zurück. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}}-Methode.
- {{jsxref("Number.prototype.toPrecision()")}}
  - : Gibt einen String zurück, der die Zahl mit einer angegebenen Präzision in Festkomma- oder Exponentialnotation darstellt.
- {{jsxref("Number.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt in der angegebenen _Basis_ (Radix) darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Number.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.

## Beispiele

### Verwendung des Number-Objekts zur Zuweisung von Werten zu numerischen Variablen

Das folgende Beispiel verwendet die Eigenschaften des `Number`-Objekts, um mehreren numerischen Variablen Werte zuzuweisen:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

### Integer-Bereich für Number

Das folgende Beispiel zeigt die minimalen und maximalen Integer-Werte, die als `Number`-Objekt dargestellt werden können.

```js
const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```

Beim Parsen von Daten, die in JSON serialisiert wurden, können Integer-Werte, die außerhalb dieses Bereichs liegen, verändert werden, wenn sie vom JSON-Parser zum `Number`-Typ umgewandelt werden.

Ein möglicher Workaround ist die Verwendung von {{jsxref("String")}} statt.

Größere Zahlen können mit dem {{jsxref("BigInt")}}-Typ dargestellt werden.

### Verwendung von Number() zur Umwandlung eines Date-Objekts

Das folgende Beispiel konvertiert das {{jsxref("Date")}}-Objekt in einen numerischen Wert mit `Number` als Funktion:

```js
const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));
```

Dies gibt `819199440000` aus.

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

- [Polyfill des modernen `Number`-Verhaltens (mit Unterstützung für binäre und oktale Literale) in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
- {{jsxref("Math")}}
- {{jsxref("BigInt")}}
