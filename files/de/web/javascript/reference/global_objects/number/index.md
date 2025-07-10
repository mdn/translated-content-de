---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Number`**-Werte stellen Gleitkommazahlen dar wie `37` oder `-9.25`.

Der `Number`-Konstruktor enthält Konstanten und Methoden zum Arbeiten mit Zahlen. Werte anderer Typen können mit der `Number()`-Funktion in Zahlen umgewandelt werden.

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

Ein Zahlenliteral wie `37` im JavaScript-Code ist ein Gleitkommawert, kein ganzzahliger Wert. Es gibt keinen separaten Ganzzahltyp in der allgemeinen Verwendung. (JavaScript hat auch einen {{jsxref("BigInt")}}-Typ, aber er ist nicht dazu gedacht, Number im täglichen Gebrauch zu ersetzen. `37` ist immer noch eine Zahl, kein BigInt.)

Wird `Number(value)` als Funktion verwendet, wandelt sie einen String oder anderen Wert in den Zahlentyp um. Wenn der Wert nicht umgewandelt werden kann, gibt sie {{jsxref("NaN")}} zurück.

```js
Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN
```

### Number-Codierung

Der JavaScript-`Number`-Typ ist ein [doppelter 64-Bit-Binärformat IEEE 754](https://de.wikipedia.org/wiki/IEEE_754) Wert, ähnlich wie `double` in Java oder C#. Das bedeutet, dass er Bruchwerte darstellen kann, aber es gibt einige Einschränkungen hinsichtlich der Größe und Präzision der gespeicherten Zahl. Kurz gesagt, eine IEEE 754-Gleitkommazahl mit doppelter Präzision verwendet 64 Bits, um 3 Teile darzustellen:

- 1 Bit für das _Vorzeichen_ (positiv oder negativ)
- 11 Bits für den _Exponenten_ (-1022 bis 1023)
- 52 Bits für die _Mantisse_ (darstellung eines Wertes zwischen 0 und 1)

Die Mantisse (auch _Signifikand_ genannt) ist der Teil der Zahl, der den tatsächlichen Wert (signifikante Ziffern) darstellt. Der Exponent ist die Potenz von 2, mit der die Mantisse multipliziert werden soll. Diese Darstellung ist vergleichbar mit der wissenschaftlichen Notation:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mtext>Number</mtext><mo>=</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><msup><mo stretchy="false">)</mo><mtext>sign</mtext></msup><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mtext>mantissa</mtext><mo stretchy="false">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exponent</mtext></msup></mrow><annotation encoding="TeX">\text{Number} = ({-1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Die Mantisse wird mit 52 Bits gespeichert und als Ziffern nach `1.…` in einer binären Bruchzahl interpretiert. Daher beträgt die Genauigkeit der Mantisse 2<sup>-52</sup> (erhältlich über {{jsxref("Number.EPSILON")}}), oder etwa 15 bis 17 Dezimalstellen; Rechnungen über diesem Genauigkeitsgrad unterliegen dem [Runden](https://de.wikipedia.org/wiki/Gleitkommaarithmetik#Rundung).

Der größte Wert, den eine Zahl halten kann, ist 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) (mit dem Exponenten 1023 und der Mantisse 0.1111… in Basis 2), der über {{jsxref("Number.MAX_VALUE")}} verfügbar ist. Werte höher als das werden durch die spezielle Zahlenkonstante {{jsxref("Infinity")}} ersetzt.

Ganze Zahlen können nur im Bereich von -2<sup>53</sup> + 1 bis 2<sup>53</sup> - 1 ohne Genauigkeitsverlust dargestellt werden (erhältlich über {{jsxref("Number.MIN_SAFE_INTEGER")}} und {{jsxref("Number.MAX_SAFE_INTEGER")}}), da die Mantisse nur 53 Bits halten kann (einschließlich der führenden 1).

Weitere Details dazu sind im [ECMAScript-Standard](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type) beschrieben.

### Number-Konvertierung

Viele eingebaute Operationen, die Zahlen erwarten, wandeln ihre Argumente zuerst in Zahlen um (was größtenteils der Grund dafür ist, dass `Number` Objekte sich ähnlich wie Zahlen-Primitiva verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber) kann wie folgt zusammengefasst werden:

- Zahlen werden unverändert übernommen.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `0`.
- `true` wird zu `1`; `false` wird zu `0`.
- Strings werden umgewandelt, indem sie so geparst werden, als ob sie ein [Zahlenliteral](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) enthalten. Ein Parse-Fehlschlag führt zu `NaN`. Es gibt einige kleine Unterschiede im Vergleich zu einem tatsächlichen Zahlenliteral:
  - Führende und nachfolgende Leerzeichen/Zeilenenden werden ignoriert.
  - Eine führende `0`-Ziffer führt nicht dazu, dass eine Zahl zu einem oktalen Literal wird (oder im strengen Modus abgelehnt wird).
  - `+` und `-` sind am Anfang des Strings erlaubt, um dessen Vorzeichen anzuzeigen (Im tatsächlichen Code "sehen sie aus" als wären sie Teil des Literals, sind aber tatsächlich separate Unär-Operatoren). Das Vorzeichen kann jedoch nur einmal erscheinen und darf nicht von Leerzeichen gefolgt werden.
  - `Infinity` und `-Infinity` werden als Literale erkannt. Im tatsächlichen Code sind sie globale Variablen.
  - Leere oder nur aus Leerzeichen bestehende Strings werden zu `0` konvertiert.
  - [Numerische Trennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators) sind nicht erlaubt.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werfen einen {{jsxref("TypeError")}}, um zu verhindern, dass unbeabsichtigt implizite Konvertierung zum Verlust der Genauigkeit führt.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein primitives Objekt umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem deren [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()`, und `toString()`-Methoden in dieser Reihenfolge aufgerufen werden. Das resultierende primitive Objekt wird dann in eine Zahl umgewandelt.

Es gibt zwei Möglichkeiten, fast den gleichen Effekt in JavaScript zu erzielen.

- [Unäre Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus): `+x` führt genau die oben erläuterten Konvertierungsschritte durch, um `x` zu konvertieren.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Funktion: `Number(x)` verwendet den gleichen Algorithmus, um `x` zu konvertieren, außer dass [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) nicht einen {{jsxref("TypeError")}} werfen, sondern ihren Zahlenwert zurückgeben, mit möglichem Genauigkeitsverlust.

{{jsxref("Number.parseFloat()")}} und {{jsxref("Number.parseInt()")}} sind ähnlich wie `Number()`, aber konvertieren nur Strings und haben leicht unterschiedliche Parsing-Regeln. Zum Beispiel erkennt `parseInt()` den Dezimalpunkt nicht, und `parseFloat()` erkennt das `0x`-Präfix nicht.

#### Ganzzahlkonvertierung

Einige Operationen erwarten Ganzzahlen, insbesondere solche, die mit Array/String-Indizes, Datums-/Zeitkomponenten und Zahlenradixen arbeiten. Nachdem die oben genannten Konvertierungsschritte durchgeführt wurden, wird das Ergebnis zu einer Ganzzahl [gekürzt](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) (indem der Bruchteil verworfen wird). Wenn die Zahl ±Infinity ist, wird sie unverändert zurückgegeben. Wenn die Zahl `NaN` oder `-0` ist, wird `0` zurückgegeben. Das Ergebnis ist daher immer eine Ganzzahl (die nicht `-0` ist) oder ±Infinity.

Bemerkenswert ist, dass bei der Umwandlung in Ganzzahlen sowohl `undefined` als auch `null` zu `0` werden, weil `undefined` zu `NaN` konvertiert wird, was ebenfalls zu `0` wird.

#### Festbreiten-Zahlenkonvertierung

JavaScript verfügt über einige niedere Funktionen, die sich mit der binären Codierung von Ganzzahlen beschäftigen, insbesondere [bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und {{jsxref("TypedArray")}}-Objekte. Bitweise Operatoren wandeln die Operanden immer in 32-Bit-Ganzzahlen um. In diesen Fällen, nachdem der Wert in eine Zahl umgewandelt wurde, wird die Zahl dann auf die gegebene Breite normalisiert, indem zuerst der Bruchteil [abgeschnitten](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) wird und dann die niedrigsten Bits in der Zweierkomplementkodierung der Ganzzahl genommen werden.

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
  - : Erstellt `Number`-Objekte. Wenn sie als Funktion aufgerufen wird, gibt sie primitive Werte vom Typ Number zurück.

## Statische Eigenschaften

- {{jsxref("Number.EPSILON")}}
  - : Das kleinste Intervall zwischen zwei darstellbaren Zahlen.
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : Die maximale sichere Ganzzahl in JavaScript (2<sup>53</sup> - 1).
- {{jsxref("Number.MAX_VALUE")}}
  - : Die größte positive darstellbare Zahl.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : Die minimale sichere Ganzzahl in JavaScript (-(2<sup>53</sup> - 1)).
- {{jsxref("Number.MIN_VALUE")}}
  - : Die kleinste positive darstellbare Zahl, d.h. die positive Zahl, die am nächsten bei Null liegt (ohne tatsächlich Null zu sein).
- {{jsxref("Number.NaN")}}
  - : Spezieller Wert für "Not a Number".
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
  - : Bestimmt, ob der übergebene Wert eine sichere Ganzzahl ist (eine Zahl zwischen -(2<sup>53</sup> - 1) und 2<sup>53</sup> - 1).
- {{jsxref("Number.parseFloat()")}}
  - : Dies entspricht der globalen {{jsxref("parseFloat()")}}-Funktion.
- {{jsxref("Number.parseInt()")}}
  - : Dies entspricht der globalen {{jsxref("parseInt()")}}-Funktion.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Number.prototype` definiert und werden von allen `Number`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Number.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Number`-Instanzen ist der initiale Wert der {{jsxref("Number/Number", "Number")}}-Konstruktor.

## Instanzmethoden

- {{jsxref("Number.prototype.toExponential()")}}
  - : Gibt einen String zurück, der die Zahl in Exponentialdarstellung repräsentiert.
- {{jsxref("Number.prototype.toFixed()")}}
  - : Gibt einen String zurück, der die Zahl in Festkommadarstellung repräsentiert.
- {{jsxref("Number.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachensensitiven Darstellung dieser Zahl zurück. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}}-Methode.
- {{jsxref("Number.prototype.toPrecision()")}}
  - : Gibt einen String zurück, der die Zahl mit einer festgelegten Genauigkeit in Festkomma- oder Exponentialdarstellung repräsentiert.
- {{jsxref("Number.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt in der angegebenen _Radix_ ("Basis") darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Number.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.

## Beispiele

### Verwendung des Number-Objekts zur Zuweisung von Werten zu numerischen Variablen

Das folgende Beispiel verwendet die Eigenschaften des `Number`-Objekts, um Werte zu mehreren numerischen Variablen zuzuweisen:

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

Beim Parsen von Daten, die in JSON serialisiert wurden, ist zu erwarten, dass Ganzzahlen, die außerhalb dieses Bereichs liegen, beschädigt werden, wenn der JSON-Parser sie in den `Number`-Typ zwingt.

Ein möglicher Workaround ist die Verwendung von {{jsxref("String")}}.

Größere Zahlen können mit dem {{jsxref("BigInt")}}-Typ dargestellt werden.

### Verwendung von Number() zur Umwandlung eines Date-Objekts

Das folgende Beispiel wandelt das {{jsxref("Date")}}-Objekt in einen numerischen Wert um, indem `Number` als Funktion verwendet wird:

```js
const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));
```

Dies protokolliert `819199440000`.

### Umwandlung numerischer Strings und null zu Zahlen

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
