---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
l10n:
  sourceCommit: 56b4064cda33205f7fb9dd9826665fbf75508cdf
---

**`Number`** Werte stellen Gleitkommazahlen wie `37` oder `-9.25` dar.

Der `Number` Konstruktor enthält Konstanten und Methoden zur Arbeit mit Zahlen. Werte anderer Typen können mit der `Number()` Funktion in Zahlen konvertiert werden.

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

Ein Zahlenliteral wie `37` im JavaScript-Code ist ein Gleitkommawert und kein Integer. Es gibt keinen separaten Integer-Typ in der alltäglichen Verwendung. (JavaScript hat auch einen {{jsxref("BigInt")}} Typ, aber dieser ist nicht dafür gedacht, Number im alltäglichen Gebrauch zu ersetzen. `37` ist immer noch eine Zahl, kein BigInt.)

Wenn `Number(value)` als Funktion verwendet wird, konvertiert es einen String oder einen anderen Wert in den Typ Number. Wenn der Wert nicht konvertiert werden kann, gibt er {{jsxref("NaN")}} zurück.

```js
Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN
```

### Zahlencodierung

Der JavaScript `Number` Typ ist ein [doppelt-genauer 64-Bit-binär formatierter IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) Wert, ähnlich wie `double` in Java oder C#. Das bedeutet, dass er Bruchwerte darstellen kann, es gibt jedoch einige Grenzen hinsichtlich der Größe und Präzision der gespeicherten Zahl. Kurz gesagt, eine IEEE 754 Gleitkommazahl mit doppelter Genauigkeit verwendet 64 Bits, um 3 Teile darzustellen:

- 1 Bit für das _Vorzeichen_ (positiv oder negativ)
- 11 Bits für den _Exponenten_ (-1022 bis 1023)
- 52 Bits für die _Mantisse_ (darstellend eine Zahl zwischen 0 und 1)

Die Mantisse (auch _Signifikand_ genannt) ist der Teil der Zahl, der den tatsächlichen Wert (bedeutende Ziffern) darstellt. Der Exponent ist die Potenz von 2, mit der die Mantisse multipliziert werden muss. Man kann es sich wie wissenschaftliche Notation vorstellen:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mtext>Number</mtext><mo>=</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><msup><mo stretchy="false">)</mo><mtext>sign</mtext></msup><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mtext>mantissa</mtext><mo stretchy="false">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exponent</mtext></msup></mrow><annotation encoding="TeX">\text{Number} = ({-1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die Mantisse wird mit 52 Bits gespeichert, die als Ziffern nach `1.…` in einer binären Bruchzahl interpretiert werden. Daher beträgt die Präzision der Mantisse 2<sup>-52</sup> (erhältlich über {{jsxref("Number.EPSILON")}}), oder etwa 15 bis 17 signifikante Dezimalziffern; arithmetische Operationen über diesem Präzisionsniveau unterliegen dem [Runden](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Representable_numbers,_conversion_and_rounding).

Der größte Wert, den eine Zahl halten kann, ist 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) (wobei der Exponent 1023 und die Mantisse 0.1111… in Basis 2 ist), was über {{jsxref("Number.MAX_VALUE")}} erlangt werden kann. Werte, die höher sind, werden durch die spezielle Zahlkonstante {{jsxref("Infinity")}} ersetzt.

Ganze Zahlen können im Bereich von -2<sup>53</sup> + 1 bis 2<sup>53</sup> - 1 ohne Präzisionsverlust dargestellt werden (erhältlich über {{jsxref("Number.MIN_SAFE_INTEGER")}} und {{jsxref("Number.MAX_SAFE_INTEGER")}}), weil die Mantisse nur 53 Bits halten kann (einschließlich des führenden 1).

Mehr Details hierzu sind im [ECMAScript-Standard](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type) beschrieben.

### Typumwandlung von Zahlen

Viele eingebaute Operationen, die Zahlen erwarten, wandeln zuerst ihre Argumente in Zahlen um (was weitgehend der Grund ist, warum `Number` Objekte ähnlich wie Zahlenprimitiven verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber) kann wie folgt zusammengefasst werden:

- Zahlen werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `0`.
- `true` wird zu `1`; `false` wird zu `0`.
- Strings werden konvertiert, indem sie geparst werden, als ob sie ein [Zahlenliteral](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) enthalten. Bei Parsfehlern ergibt sich `NaN`. Es gibt einige kleine Unterschiede im Vergleich zu einem tatsächlichen Zahlenliteral:
  - Führender und nachfolgender Leerraum/Zeilenabschlusszeichen werden ignoriert.
  - Eine führende `0`-Ziffer führt nicht dazu, dass die Zahl zu einem oktalen Literal wird (oder in strict mode abgelehnt wird).
  - `+` und `-` sind am Anfang des Strings erlaubt, um das Vorzeichen anzuzeigen. (In tatsächlichem Code scheinen sie Teil des Literals zu sein, sind aber tatsächlich separate unäre Operatoren.) Das Vorzeichen darf jedoch nur einmal erscheinen und darf nicht von Leerzeichen gefolgt werden.
  - `Infinity` und `-Infinity` werden als Literale erkannt. In tatsächlichem Code sind sie globale Variablen.
  - Leere oder nur aus Leerzeichen bestehende Strings werden zu `0` konvertiert.
  - [Nummerische Separatoren](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) sind nicht erlaubt.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) lösen einen {{jsxref("TypeError")}} aus, um unbeabsichtigte implizite Typumwandlungen zu verhindern, die einen Präzisionsverlust verursachen.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lösen einen {{jsxref("TypeError")}} aus.
- Objekte werden zuerst [in einen primitiven Wert umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()` und `toString()` Methoden in dieser Reihenfolge aufgerufen werden. Der resultierende primitive Wert wird dann in eine Zahl konvertiert.

Es gibt zwei Möglichkeiten, fast den gleichen Effekt in JavaScript zu erzielen.

- [Einziges Pluszeichen](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus): `+x` führt genau die oben beschriebenen Typumwandlungsschritte durch, um `x` zu konvertieren.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Funktion: `Number(x)` verwendet den gleichen Algorithmus, um `x` zu konvertieren, außer dass [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) keinen {{jsxref("TypeError")}} auslösen, sondern ihren Zahlenwert zurückgeben, mit möglichem Präzisionsverlust.

{{jsxref("Number.parseFloat()")}} und {{jsxref("Number.parseInt()")}} sind ähnlich wie `Number()`, aber konvertieren nur Strings und haben leicht unterschiedliche Parsing-Regeln. Zum Beispiel erkennt `parseInt()` den Dezimalpunkt nicht, und `parseFloat()` erkennt das `0x` Präfix nicht.

#### Ganzzahlkonvertierung

Einige Operationen erwarten Ganzzahlen, insbesondere diejenigen, die mit Array-/String-Indizes, Datum-/Zeitkomponenten und Zahlenradixen arbeiten. Nach Durchführung der obigen Typumwandlungsschritte wird das Ergebnis [abgeschnitten](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc), indem der Bruchteil entfernt wird. Wenn die Zahl ±Infinity ist, bleibt sie unverändert. Ist die Zahl `NaN` oder `-0`, wird `0` zurückgegeben. Das Ergebnis ist daher immer eine Ganzzahl (die nicht `-0` ist) oder ±Infinity.

Bemerkenswert ist, dass `undefined` und `null` beim Umwandeln in Ganzzahlen zu `0` werden, weil `undefined` in `NaN` konvertiert wird, was auch zu `0` wird.

#### Festbreite-Typumwandlung von Zahlen

JavaScript hat einige Funktionen auf niedrigerer Ebene, die mit der binären Codierung von Ganzzahlen umgehen, insbesondere [bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und {{jsxref("TypedArray")}} Objekte. Bitweise Operatoren konvertieren die Operanden immer in 32-Bit-Ganzzahlen. In diesen Fällen wird nach der Konvertierung des Wertes in eine Zahl zunächst der Bruchteil [abgeschnitten](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) und dann die niedrigsten Bits in der Zweierkomplementcodierung der Ganzzahl genommen.

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
  - : Erzeugt `Number` Objekte. Wenn sie als Funktion aufgerufen wird, gibt sie primitive Werte vom Typ Number zurück.

## Statische Eigenschaften

- {{jsxref("Number.EPSILON")}}
  - : Das kleinste Intervall zwischen zwei darstellbaren Zahlen.
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : Die maximale sichere Ganzzahl in JavaScript (2<sup>53</sup> - 1).
- {{jsxref("Number.MAX_VALUE")}}
  - : Der größte positive darstellbare Wert.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : Die minimale sichere Ganzzahl in JavaScript (-(2<sup>53</sup> - 1)).
- {{jsxref("Number.MIN_VALUE")}}
  - : Die kleinste positive darstellbare Zahl—das heißt, die positive Zahl, die null am nächsten kommt (ohne tatsächlich null zu sein).
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
  - : Dies ist das gleiche wie die globale {{jsxref("parseFloat()")}} Funktion.
- {{jsxref("Number.parseInt()")}}
  - : Dies ist das gleiche wie die globale {{jsxref("parseInt()")}} Funktion.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Number.prototype` definiert und werden von allen `Number` Instanzen geteilt.

- {{jsxref("Object/constructor", "Number.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Number` Instanzen ist der Anfangswert der {{jsxref("Number/Number", "Number")}} Konstruktor.

## Instanz-Methoden

- {{jsxref("Number.prototype.toExponential()")}}
  - : Gibt einen String zurück, der die Zahl in exponentielle Notation darstellt.
- {{jsxref("Number.prototype.toFixed()")}}
  - : Gibt einen String zurück, der die Zahl in Festkommanotation darstellt.
- {{jsxref("Number.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieser Zahl zurück. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}} Methode.
- {{jsxref("Number.prototype.toPrecision()")}}
  - : Gibt einen String zurück, der die Zahl mit einer angegebenen Präzision in Festkomma- oder Exponentialnotation darstellt.
- {{jsxref("Number.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt in dem angegebenen _Radix_ ("Basis") darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.
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

### Ganzzahlbereich für Number

Im folgenden Beispiel werden die minimalen und maximalen Ganzzahlwerte angezeigt, die als `Number` Objekt dargestellt werden können.

```js
const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```

Beim Parsen von Daten, die in JSON serialisiert wurden, können Ganzzahlen, die außerhalb dieses Bereichs liegen, beim Zuordnen zum `Number` Typ durch den JSON-Parser beschädigt werden.

Ein möglicher Workaround besteht darin, {{jsxref("String")}} zu verwenden.

Größere Zahlen können mit dem {{jsxref("BigInt")}} Typ dargestellt werden.

### Verwendung von Number() zur Umwandlung eines Date-Objekts

Das folgende Beispiel konvertiert das {{jsxref("Date")}} Objekt in einen numerischen Wert, indem `Number` als Funktion verwendet wird:

```js
const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));
```

Dies protokolliert `819199440000`.

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
