---
title: Zahl
slug: Web/JavaScript/Reference/Global_Objects/Number
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Number`** Werte repräsentieren Gleitkommazahlen wie `37` oder `-9.25`.

Der `Number` Konstruktor enthält Konstanten und Methoden zur Arbeit mit Zahlen. Werte anderer Typen können mit der `Number()` Funktion in Zahlen umgewandelt werden.

## Beschreibung

Zahlen werden am häufigsten in literalen Formen wie `255` oder `3.14159` ausgedrückt. Die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) enthält eine detailliertere Referenz.

```js
255; // zweihundertfünfundfünfzig
255.0; // gleiche Zahl
255 === 255.0; // true
255 === 0xff; // true (hexadezimale Notation)
255 === 0b11111111; // true (binäre Notation)
255 === 0.255e3; // true (dezimal-exponentielle Notation)
```

Ein Zahlenliteral wie `37` in JavaScript-Code ist ein Gleitkommawert, kein Integer. Es gibt keinen separaten Integer-Typ im alltäglichen Gebrauch. (JavaScript hat auch einen {{jsxref("BigInt")}} Typ, aber dieser ist nicht dazu gedacht, Number für alltägliche Anwendungen zu ersetzen. `37` ist immer noch eine Zahl, kein BigInt.)

Wenn `Number(value)` als Funktion verwendet wird, konvertiert es einen String oder anderen Wert in den Number-Typ. Wenn der Wert nicht konvertiert werden kann, gibt er {{jsxref("NaN")}} zurück.

```js
Number("123"); // gibt die Zahl 123 zurück
Number("123") === 123; // true

Number("einhorn"); // NaN
Number(undefined); // NaN
```

### Zahlencodierung

Der JavaScript `Number` Typ ist ein [doppelter-Präzisions-64-Bit-Binärformat IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) Wert, ähnlich wie `double` in Java oder C#. Das bedeutet, dass er Bruchwerte darstellen kann, es gibt jedoch einige Grenzen bezüglich der Magnitude und Präzision der gespeicherten Zahl. Sehr kurz beschrieben verwendet eine IEEE 754-Zahl mit doppelter Präzision 64 Bits, um 3 Teile darzustellen:

- 1 Bit für das _Vorzeichen_ (positiv oder negativ)
- 11 Bits für den _Exponent_ (-1022 bis 1023)
- 52 Bits für die _Mantisse_ (die eine Zahl zwischen 0 und 1 darstellt)

Die Mantisse (auch _Signifikand_ genannt) ist der Teil der Zahl, der den tatsächlichen Wert (signifikante Ziffern) darstellt. Der Exponent ist die Potenz von 2, mit der die Mantisse multipliziert werden soll. Denken Sie daran, dass es wie wissenschaftliche Notation ist:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mtext>Number</mtext><mo>=</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><msup><mo stretchy="false">)</mo><mtext>sign</mtext></msup><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mtext>mantissa</mtext><mo stretchy="false">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exponent</mtext></msup></mrow><annotation encoding="TeX">\text{Number} = ({-1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die Mantisse wird mit 52 Bits gespeichert, interpretiert als Ziffern nach `1.…` in einer binären Bruchzahl. Daher beträgt die Präzision der Mantisse 2<sup>-52</sup> (erhältlich über {{jsxref("Number.EPSILON")}}), oder etwa 15 bis 17 Dezimalstellen; Arithmetik über diesem Präzisionslevel unterliegt dem [Runden](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Representable_numbers,_conversion_and_rounding).

Der größte Wert, den eine Zahl halten kann, ist 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) (mit dem Exponenten 1023 und der Mantisse 0.1111… in Basis 2), welcher über {{jsxref("Number.MAX_VALUE")}} zugänglich ist. Werte, die darüber liegen, werden mit der speziellen Zahlenkonstanten {{jsxref("Infinity")}} ersetzt.

Integer können nur im Bereich von -2<sup>53</sup> + 1 bis 2<sup>53</sup> - 1, einschließlich, ohne Präzisionsverlust dargestellt werden (verfügbar über {{jsxref("Number.MIN_SAFE_INTEGER")}} und {{jsxref("Number.MAX_SAFE_INTEGER")}}), da die Mantisse nur 53 Bits (einschließlich der führenden 1) halten kann.

Weitere Einzelheiten dazu sind im [ECMAScript-Standard](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type) beschrieben.

### Zahlencoercion

Viele eingebaute Operationen, die Zahlen erwarten, wandeln zuerst ihre Argumente in Zahlen um (was weitgehend der Grund ist, warum `Number` Objekte sich ähnlich wie Zahl-Primitiven verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber) kann wie folgt zusammengefasst werden:

- Zahlen werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `0`.
- `true` wird zu `1`; `false` wird zu `0`.
- Strings werden durch Parsen in der Annahme konvertiert, dass sie ein [Zahlenliteral](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) enthalten. Ein Parsefehler führt zu `NaN`. Es gibt einige kleine Unterschiede im Vergleich zu einem tatsächlichen Zahlenliteral:
  - Führende und nachfolgende Leerzeichen/Zeilenbegrenzer werden ignoriert.
  - Eine führende `0` Ziffer führt nicht dazu, dass die Zahl zu einem Oktalliteral wird (oder im Strict-Mode abgelehnt wird).
  - `+` und `-` sind am Anfang des Strings erlaubt, um ihr Vorzeichen anzuzeigen. (Im tatsächlichen Code "sehen sie aus" wie Teil des Literals, sind aber tatsächlich separate unäre Operatoren.) Das Vorzeichen darf jedoch nur einmal erscheinen und darf nicht von Leerzeichen gefolgt werden.
  - `Infinity` und `-Infinity` werden als Literale erkannt. Im tatsächlichen Code sind sie globale Variablen.
  - Leere oder nur aus Leerzeichen bestehende Strings werden zu `0` konvertiert.
  - [Numerische Trenner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) sind nicht erlaubt.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werfen einen {{jsxref("TypeError")}}, um unbeabsichtigte implizite Coercion zu verhindern, die zu einem Präzisionsverlust führen könnte.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein primitives Objekt konvertiert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem ihre Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit dem Hinweis `"number"`), `valueOf()` und `toString()` in dieser Reihenfolge aufgerufen werden. Das resultierende primitive Objekt wird dann in eine Zahl konvertiert.

Es gibt zwei Möglichkeiten, fast den gleichen Effekt in JavaScript zu erzielen.

- [Unäres Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus): `+x` führt genau die oben erläuterten Zahlencoercionschritte durch, um `x` zu konvertieren.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Funktion: `Number(x)` verwendet den gleichen Algorithmus, um `x` zu konvertieren, außer dass [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) keinen {{jsxref("TypeError")}} werfen, sondern ihren Zahlenwert zurückgeben, mit einem möglichen Präzisionsverlust.

{{jsxref("Number.parseFloat()")}} und {{jsxref("Number.parseInt()")}} sind ähnlich wie `Number()`, konvertieren jedoch nur Strings und haben leicht andere Parseregeln. Zum Beispiel erkennt `parseInt()` den Dezimalpunkt nicht, und `parseFloat()` erkennt nicht das `0x` Präfix.

#### Integerumwandlung

Einige Operationen erwarten Integer, insbesondere solche, die mit Array-/String-Indizes, Datum-/Zeitkomponenten und Zahlenradixen arbeiten. Nach Durchführung der oben beschriebenen Zahlencoercionschritte wird das Ergebnis [gekürzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) zu einem Integer (durch Entfernen des Bruchteils). Wenn die Zahl ±Unendlichkeit ist, wird sie unverändert zurückgegeben. Wenn die Zahl `NaN` oder `-0` ist, wird sie als `0` zurückgegeben. Das Ergebnis ist daher immer ein Integer (der nicht `-0` ist) oder ±Unendlichkeit.

Insbesondere werden bei der Umwandlung in Integer sowohl `undefined` als auch `null` zu `0`, weil `undefined` zu `NaN` konvertiert wird, was ebenfalls zu `0` wird.

#### Festbreitige Zahlkonvertierung

JavaScript hat einige Low-Level-Funktionen, die mit der binären Codierung von Integerzahlen umgehen, insbesondere [Bit-Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und {{jsxref("TypedArray")}} Objekte. Bit-Operatoren konvertieren die Operanden immer in 32-Bit-Integer. In diesen Fällen wird nach der Konvertierung des Wertes in eine Zahl die Zahl dann auf die gegebene Breite normalisiert, indem der Bruchteilsteil erst [gekürzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) wird und dann die niedrigsten Bits in der Zweierkomplementkodierung des Integers genommen werden.

```js
new Int32Array([1.1, 1.9, -1.1, -1.9]); // Int32Array(4) [ 1, 1, -1, -1 ]

new Int8Array([257, -257]); // Int8Array(2) [ 1, -1 ]
// 257 = 0001 0000 0001
//     =      0000 0001 (mod 2^8)
//     = 1
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = -1 (als vorzeichenbehaftet)

new Uint8Array([257, -257]); // Uint8Array(2) [ 1, 255 ]
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = 255 (als vorzeichenloser Integer)
```

## Konstruktor

- {{jsxref("Number/Number", "Number()")}}
  - : Erstellt `Number` Objekte. Wenn als Funktion aufgerufen, gibt er primitive Werte des Typs Number zurück.

## Statische Eigenschaften

- {{jsxref("Number.EPSILON")}}
  - : Das kleinste Intervall zwischen zwei darstellbaren Zahlen.
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : Der größte sichere Integer in JavaScript (2<sup>53</sup> - 1).
- {{jsxref("Number.MAX_VALUE")}}
  - : Die größte darstellbare positive Zahl.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : Der kleinste sichere Integer in JavaScript (-(2<sup>53</sup> - 1)).
- {{jsxref("Number.MIN_VALUE")}}
  - : Die kleinste darstellbare positive Zahl – das ist die positive Zahl, die null am nächsten ist (ohne tatsächlich null zu sein).
- {{jsxref("Number.NaN")}}
  - : Spezieller Wert, der bedeutet "**N**ot **a** **N**umber".
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
  - : Entspricht der globalen {{jsxref("parseFloat()")}} Funktion.
- {{jsxref("Number.parseInt()")}}
  - : Entspricht der globalen {{jsxref("parseInt()")}} Funktion.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Number.prototype` definiert und werden von allen `Number` Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Number.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Number` Instanzen ist der Anfangswert der {{jsxref("Number/Number", "Number")}} Konstruktor.

## Instanzmethoden

- {{jsxref("Number.prototype.toExponential()")}}
  - : Gibt einen String zurück, der die Zahl in Exponentialnotation darstellt.
- {{jsxref("Number.prototype.toFixed()")}}
  - : Gibt einen String zurück, der die Zahl in Festkommanotation darstellt.
- {{jsxref("Number.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieser Zahl zurück. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}} Methode.
- {{jsxref("Number.prototype.toPrecision()")}}
  - : Gibt einen String zurück, der die Zahl mit der angegebenen Präzision in Festkomma- oder Exponentialnotation darstellt.
- {{jsxref("Number.prototype.toString()")}}
  - : Gibt einen String zurück, der das spezifizierte Objekt im angegebenen _Radix_ ("Basis") darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.
- {{jsxref("Number.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}} Methode.

## Beispiele

### Verwendung des Number-Objekts zur Zuweisung von Werten zu numerischen Variablen

Das folgende Beispiel verwendet die Eigenschaften des `Number` Objekts, um mehreren numerischen Variablen Werte zuzuweisen:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

### Integerbereich für Number

Das folgende Beispiel zeigt die minimalen und maximalen Integerwerte, die als `Number` Objekt dargestellt werden können.

```js
const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```

Beim Parsen von Daten, die in JSON serialisiert wurden, ist damit zu rechnen, dass Ganzzahlen, die außerhalb dieses Bereichs fallen, beschädigt werden, wenn der JSON-Parser sie in den `Number` Typ coerced.

Ein möglicher Workaround besteht darin, {{jsxref("String")}} zu verwenden.

Größere Zahlen können mit dem {{jsxref("BigInt")}} Typ dargestellt werden.

### Verwendung von Number() zur Umwandlung eines Date-Objekts

Das folgende Beispiel konvertiert das {{jsxref("Date")}} Objekt in einen numerischen Wert mit `Number` als Funktion:

```js
const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));
```

Dies meldet `819199440000`.

### Konvertieren von numerischen Strings und null zu Zahlen

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
