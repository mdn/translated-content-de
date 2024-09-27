---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`Number`**-Werte repräsentieren Fließkommazahlen wie `37` oder `-9.25`.

Der `Number`-Konstruktor enthält Konstanten und Methoden für die Arbeit mit Zahlen. Werte anderer Typen können mit der `Number()`-Funktion in Zahlen umgewandelt werden.

## Beschreibung

Zahlen werden meistens in literalen Formen ausgedrückt, wie `255` oder `3.14159`. Die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) enthält eine detailliertere Referenz.

```js
255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)
```

Ein Zahlenliteral wie `37` im JavaScript-Code ist ein Fließkommawert, kein Integer. Es gibt keinen separaten Integer-Typ in der alltäglichen Verwendung. (JavaScript hat auch einen {{jsxref("BigInt")}} Typ, der jedoch nicht dazu gedacht ist, `Number` für den alltäglichen Gebrauch zu ersetzen. `37` ist immer noch eine Zahl, kein BigInt.)

Wird `Number(value)` als Funktion verwendet, konvertiert es einen String oder anderen Wert in den Zahlentyp. Wenn der Wert nicht konvertiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

```js
Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN
```

### Nummerncodierung

Der JavaScript `Number`-Typ ist ein [Doppelpräzision 64-Bit-Binärformat IEEE 754](https://de.wikipedia.org/wiki/IEEE_754) Wert, ähnlich wie `double` in Java oder C#. Das bedeutet, dass er Bruchwerte darstellen kann, es gibt jedoch einige Beschränkungen bezüglich der Größe und Präzision der gespeicherten Zahl. Kurz gesagt, eine IEEE 754 Doppelpräzisionszahl verwendet 64 Bits, um drei Teile zu repräsentieren:

- 1 Bit für das _Vorzeichen_ (positiv oder negativ)
- 11 Bits für den _Exponenten_ (-1022 bis 1023)
- 52 Bits für die _Mantisse_ (repräsentiert eine Zahl zwischen 0 und 1)

Die Mantisse (auch _Signifikand_ genannt) ist der Teil der Zahl, der den tatsächlichen Wert (signifikante Stellen) repräsentiert. Der Exponent ist die Potenz von 2, mit der die Mantisse multipliziert werden sollte. Es ist wie wissenschaftliche Notation:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mtext>Number</mtext><mo>=</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><msup><mo stretchy="false">)</mo><mtext>sign</mtext></msup><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mtext>mantissa</mtext><mo stretchy="false">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exponent</mtext></msup></mrow><annotation encoding="TeX">\text{Number} = ({-1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die Mantisse wird mit 52 Bits gespeichert und wird als Ziffern nach `1.…` in einer binären Bruchzahl interpretiert. Daher ist die Präzision der Mantisse 2<sup>-52</sup> (erhältlich über {{jsxref("Number.EPSILON")}}), oder etwa 15 bis 17 Dezimalstellen; Arithmetik über diesem Präzisionsniveau unterliegt der [Rundung](https://de.wikipedia.org/wiki/Gleitkommaarithmetik#Rundung).

Der größte Wert, den eine Zahl halten kann, ist 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) (mit dem Exponenten 1023 und der Mantisse 0.1111… in Basis 2), welcher über {{jsxref("Number.MAX_VALUE")}} erreichbar ist. Werte, die darüber liegen, werden durch die spezielle Zahl Konstante {{jsxref("Infinity")}} ersetzt.

Integer können nur verlustfrei im Bereich von -2<sup>53</sup> + 1 bis 2<sup>53</sup> - 1 dargestellt werden (erhältlich über {{jsxref("Number.MIN_SAFE_INTEGER")}} und {{jsxref("Number.MAX_SAFE_INTEGER")}}), da die Mantisse nur 53 Bits (einschließlich der führenden 1) speichern kann.

Weitere Details dazu werden im [ECMAScript-Standard](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type) beschrieben.

### Zwangsche Konvertierung der Zahl

Viele eingebaute Operationen, die Zahlen erwarten, zwingen ihre Argumente zuerst zu Zahlen (was größtenteils der Grund ist, warum `Number`-Objekte ähnlich wie Zahlenprimitiven verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber) kann wie folgt zusammengefasst werden:

- Nummern werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `0`.
- `true` wird zu `1`; `false` wird zu `0`.
- Strings werden durch das Parsen als ob sie ein [number literal](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) enthalten, konvertiert. Ein Parsing-Fehler führt zu `NaN`. Es gibt einige geringe Unterschiede im Vergleich zu einem echten Zahlenliteral:
  - Führende und nachfolgende Leerzeichen/Zeilenendungen werden ignoriert.
  - Eine führende `0`-Ziffer führt nicht dazu, dass die Zahl zu einem oktalen Literal wird (oder im Strict-Modus abgelehnt wird).
  - `+` und `-` sind am Anfang des Strings erlaubt, um sein Vorzeichen anzuzeigen. (Im tatsächlichen Code scheinen sie Teil des Literals zu sein, sind jedoch tatsächlich separate Unär-Operatoren.) Das Vorzeichen kann jedoch nur einmal erscheinen und darf nicht von Leerzeichen gefolgt werden.
  - `Infinity` und `-Infinity` werden als Literale erkannt. Im tatsächlichen Code sind dies globale Variablen.
  - Leere oder nur aus Leerzeichen bestehende Strings werden zu `0` konvertiert.
  - [Numerische Trenner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) sind nicht erlaubt.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werfen einen {{jsxref("TypeError")}}, um unbeabsichtigte, implizite Zwangsumwandlungen mit Präzisionsverlust zu verhindern.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in einen primitiven Typ umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()`, und `toString()`-Methoden in dieser Reihenfolge aufgerufen werden. Das resultierende Primitive wird dann in eine Zahl konvertiert.

Es gibt zwei Möglichkeiten, um nahezu denselben Effekt in JavaScript zu erzielen.

- [Unärer Plus-Operator](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus): `+x` führt genau die erzwungenen Zahl-Umwandlungsschritte durch, die oben erklärt wurden, um `x` zu konvertieren.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Funktion: `Number(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, außer dass [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) keinen {{jsxref("TypeError")}} werfen, sondern ihren Zahlenwert zurückgeben, wobei ein möglicher Präzisionsverlust eintritt.

{{jsxref("Number.parseFloat()")}} und {{jsxref("Number.parseInt()")}} sind `Number()` ähnlich, konvertieren jedoch nur Strings und haben leicht unterschiedliche Parsingregeln. Zum Beispiel erkennt `parseInt()` den Dezimalpunkt nicht, und `parseFloat()` erkennt das `0x`-Präfix nicht.

#### Integer-Konvertierung

Einige Operationen erwarten Integer, insbesondere die, die mit Array/String-Indizes, Datum/Zeit-Komponenten und Zahlbasissystemen arbeiten. Nach den oben beschriebenen Schritten der Zwangskonvertierung der Zahl wird das Ergebnis auf einen Integer [abgeschnitten](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) (durch Entfernen des Bruchteilis). Wenn die Zahl ±Infinity ist, wird sie unverändert zurückgegeben. Wenn die Zahl `NaN` oder `-0` ist, wird sie als `0` zurückgegeben. Das Ergebnis ist daher immer ein Integer (der nicht `-0` ist) oder ±Infinity.

Bemerkenswert ist, dass sowohl `undefined` als auch `null` beim Konvertieren in Integer `0` werden, weil `undefined` in `NaN` konvertiert wird, das außerdem zu `0` wird.

#### Feste Breiten von Zahlenkonvertierungen

JavaScript hat einige niedrigstufige Funktionen, die mit der Binärcodierung von Integer-Zahlen umgehen, besonders [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und {{jsxref("TypedArray")}} Objekte. Bitweise Operatoren konvertieren die Operanden immer in 32-Bit-Integer. In diesen Fällen wird nach der Konvertierung des Wertes in eine Zahl die Zahl zuerst [abgeschnitten](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) und dann werden die niedrigsten Bits in der Zweier-Komplement-Codierung des Integer-Werts genommen, um sie auf die gegebene Breite zu normalisieren.

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
  - : Erstellt `Number`-Objekte. Wird sie als Funktion aufgerufen, gibt sie Primitive-Werte des Typs Number zurück.

## Statische Eigenschaften

- {{jsxref("Number.EPSILON")}}
  - : Das kleinste Intervall zwischen zwei darstellbaren Zahlen.
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : Der größtmögliche sichere Integer in JavaScript (2<sup>53</sup> - 1).
- {{jsxref("Number.MAX_VALUE")}}
  - : Die größte darstellbare positive Zahl.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : Der kleinstmögliche sichere Integer in JavaScript (-(2<sup>53</sup> - 1)).
- {{jsxref("Number.MIN_VALUE")}}
  - : Die kleinste darstellbare positive Zahl—das bedeutet, die positive Zahl am nächsten zu Null (ohne tatsächlich Null zu sein).
- {{jsxref("Number.NaN")}}
  - : Spezieller "**N**ot **a** **N**umber"-Wert.
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : Spezieller Wert, der negative Unendlichkeit darstellt. Wird bei einem Überlauf zurückgegeben.
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : Spezieller Wert, der Unendlichkeit darstellt. Wird bei einem Überlauf zurückgegeben.

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
  - : Dies ist dieselbe wie die globale {{jsxref("parseFloat()")}} Funktion.
- {{jsxref("Number.parseInt()")}}
  - : Dies ist dieselbe wie die globale {{jsxref("parseInt()")}} Funktion.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Number.prototype` definiert und werden von allen `Number`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Number.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Number`-Instanzen ist der anfängliche Wert der {{jsxref("Number/Number", "Number")}}-Konstruktor.

## Instanzmethoden

- {{jsxref("Number.prototype.toExponential()")}}
  - : Gibt eine Zeichenkette zurück, die die Zahl in wissenschaftlicher Notation darstellt.
- {{jsxref("Number.prototype.toFixed()")}}
  - : Gibt eine Zeichenkette zurück, die die Zahl in Festkomma-Darstellung darstellt.
- {{jsxref("Number.prototype.toLocaleString()")}}
  - : Gibt eine zeichenkettige, sprachsensitive Darstellung dieser Zahl zurück. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}}-Methode.
- {{jsxref("Number.prototype.toPrecision()")}}
  - : Gibt eine Zeichenkette zurück, die die Zahl mit einer bestimmten Genauigkeit in Festkomma- oder wissenschaftlicher Notation darstellt.
- {{jsxref("Number.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die das spezifizierte Objekt im angegebenen _radix_ ("Basis") darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Number.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des spezifizierten Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.

## Beispiele

### Verwendung des Number-Objekts zur Zuordnung von Werten zu numerischen Variablen

Das folgende Beispiel verwendet die Eigenschaften des `Number`-Objekts, um mehreren numerischen Variablen Werte zuzuweisen:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

### Integerbereich für Number

Das folgende Beispiel zeigt die minimalen und maximalen Integerwerte, die als `Number`-Objekt dargestellt werden können.

```js
const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```

Beim Parsen von Daten, die in JSON serialisiert wurden, können Integer-Werte, die außerhalb dieses Bereichs fallen, erwartungsgemäß beschädigt werden, wenn der JSON-Parser sie in den `Number`-Typ umwandelt.

Eine mögliche Lösung ist die Verwendung von {{jsxref("String")}}.

Größere Zahlen können mit dem {{jsxref("BigInt")}} Typ dargestellt werden.

### Verwendung von Number() zur Umwandlung eines Date-Objekts

Das folgende Beispiel wandelt das {{jsxref("Date")}}-Objekt in einen numerischen Wert um, indem `Number` als Funktion verwendet wird:

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

- [Polyfill von modernem `Number`-Verhalten (mit Unterstützung für binäre und oktale Literale) in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
- {{jsxref("Math")}}
- {{jsxref("BigInt")}}
