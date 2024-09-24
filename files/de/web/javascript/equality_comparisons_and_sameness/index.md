---
title: Gleichheitsvergleiche und Identität
slug: Web/JavaScript/Equality_comparisons_and_sameness
l10n:
  sourceCommit: 8e1184924387f88e2ee63a3c786b007aaf573105
---

{{jsSidebar("Intermediate")}}

JavaScript bietet drei verschiedene Operationen für den Wertvergleich:

- [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) — strikte Gleichheit (dreifach gleich)
- [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) — lose Gleichheit (doppelt gleich)
- [`Object.is()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Welche Operation Sie auswählen, hängt davon ab, welche Art von Vergleich Sie durchführen möchten. Kurz gesagt:

- Doppelgleich (`==`) führt eine Typkonvertierung durch, wenn zwei Dinge verglichen werden, und behandelt `NaN`, `-0` und `+0` speziell gemäß IEEE 754 (also `NaN != NaN` und `-0 == +0`);
- Dreifachgleich (`===`) führt den gleichen Vergleich wie Doppelgleich durch (einschließlich der speziellen Behandlung für `NaN`, `-0` und `+0`), jedoch ohne Typkonvertierung; wenn die Typen unterschiedlich sind, wird `false` zurückgegeben.
- `Object.is()` führt keine Typkonvertierung und keine spezielle Behandlung von `NaN`, `-0` und `+0` durch (hat also dasselbe Verhalten wie `===`, außer bei diesen speziellen Zahlenwerten).

Sie entsprechen drei der vier Gleichheitsalgorithmen in JavaScript:

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): wird von vielen eingebauten Operationen verwendet.

Beachten Sie, dass es bei den Unterschieden zwischen diesen Methoden um die Behandlung von Primitiven geht; keine von ihnen vergleicht, ob die Parameter strukturell ähnlich sind. Für nicht-primitive Objekte `x` und `y`, die denselben Aufbau, aber unterschiedliche Objekte sind, geben alle oben genannten Formen `false` zurück.

## Strikte Gleichheit mit ===

Strikte Gleichheit vergleicht zwei Werte auf Gleichheit. Keiner der Werte wird implizit in einen anderen Wert umgewandelt, bevor er verglichen wird. Wenn die Werte unterschiedliche Typen haben, werden sie als ungleich angesehen. Haben die Werte denselben Typ, sind keine Zahlen und besitzen denselben Wert, werden sie als gleich betrachtet. Schließlich, wenn beide Werte Zahlen sind, werden sie als gleich betrachtet, wenn sie nicht `NaN` sind und denselben Wert haben, oder wenn einer `+0` und einer `-0` ist.

```js
const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

Strikte Gleichheit ist fast immer die richtige Vergleichsoperation. Für alle Werte außer Zahlen verwendet sie die offensichtliche Semantik: Ein Wert ist nur gleich sich selbst. Für Zahlen verwendet sie leicht unterschiedliche Semantiken, um zwei verschiedene Randfälle abzudecken. Der erste ist, dass das Gleitkomma-Null entweder positiv oder negativ signiert ist. Dies ist nützlich, um bestimmte mathematische Lösungen darzustellen, aber da in den meisten Situationen kein Unterschied zwischen `+0` und `-0` gemacht wird, behandelt die strikte Gleichheit sie als denselben Wert. Der zweite ist, dass das Gleitkomma das Konzept eines Not-a-Number-Werts, `NaN`, einschließt, um die Lösung bestimmter schlecht definierter mathematischer Probleme darzustellen: zum Beispiel negative Unendlichkeit plus positive Unendlichkeit. Strikte Gleichheit betrachtet `NaN` als ungleich zu jedem anderen Wert — einschließlich sich selbst. (Der einzige Fall, in dem `(x !== x)` `true` ist, ist wenn `x` `NaN` ist.)

Neben `===` wird die strikte Gleichheit auch von Methoden zur Indexsuche in Arrays verwendet, einschließlich [`Array.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf), [`TypedArray.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf) und [`case`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Vergleiche. Das bedeutet, dass Sie `indexOf(NaN)` nicht verwenden können, um den Index eines `NaN`-Werts in einem Array zu finden, oder `NaN` als `case`-Wert in einer `switch`-Anweisung verwenden können, sodass es mit irgendetwas übereinstimmt.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Überraschung"); // Es wird nichts protokolliert
}
```

## Lose Gleichheit mit ==

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer identische Semantik wie `B == A` für beliebige Werte von `A` und `B` (außer für die Reihenfolge der angewandten Konvertierungen). Das Verhalten bei der Durchführung der losen Gleichheit mit `==` ist wie folgt:

1. Haben die Operanden denselben Typ, werden sie wie folgt verglichen:
   - Objekt: Rückgabe `true` nur, wenn beide Operanden auf dasselbe Objekt verweisen.
   - Zeichenfolge: Rückgabe `true` nur, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Zahl: Rückgabe `true` nur, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, Rückgabe `false`; so ist `NaN` niemals gleich `NaN`.
   - Boolean: Rückgabe `true` nur, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: Rückgabe `true` nur, wenn beide Operanden denselben Wert haben.
   - Symbol: Rückgabe `true` nur, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls Rückgabe `false`.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Wert ist, [konvertieren Sie das Objekt in einen primitiven Wert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion).
4. An diesem Punkt werden beide Operanden in primitive Werte konvertiert (einer von String, Number, Boolean, Symbol und BigInt). Der Rest der Konvertierung erfolgt fallweise.
   - Wenn sie vom gleichen Typ sind, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere aber nicht, Rückgabe `false`.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [konvertieren Sie den Boolean in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 und `false` in 0 konvertiert. Vergleichen Sie dann erneut lose.
   - Zahl zu String: [konvertieren Sie den String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Umwandlungsfehler führt zu `NaN`, was garantiert, dass die Gleichheit `false` ist.
   - Zahl zu BigInt: vergleichen Sie nach ihrem numerischen Wert. Wenn die Zahl ±Unendlichkeit oder `NaN` ist, Rückgabe `false`.
   - String zu BigInt: konvertieren Sie den String in ein BigInt mit dem gleichen Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor. Wenn die Konvertierung fehlschlägt, Rückgabe `false`.

Traditionell, und nach ECMAScript, sind alle Primitiven und Objekte lose ungleich `undefined` und `null`. Aber die meisten Browser erlauben einer sehr engen Objektklasse (speziell das `document.all`-Objekt für jede Seite) in einigen Kontexten, so zu agieren, als ob sie den Wert `undefined` _emulieren_. Lose Gleichheit ist ein solcher Kontext: `null == A` und `undefined == A` bewerten zu wahr, wenn und nur wenn A ein Objekt ist, das `undefined` _emuliert_. In allen anderen Fällen ist ein Objekt nie lose gleich `undefined` oder `null`.

In den meisten Fällen wird die Verwendung der losen Gleichheit nicht empfohlen. Das Ergebnis eines Vergleichs mit strikter Gleichheit ist leichter vorherzusagen und kann schneller ausgewertet werden, da die Typkonvertierung fehlt.

Das folgende Beispiel zeigt lose Gleichheitsvergleiche mit dem Zahlenprimitiv `0`, dem BigInt-Primitiv `0n`, dem Zeichenfolgenprimitiv `'0'` und einem Objekt, dessen `toString()`-Wert `'0'` ist.

```js
const num = 0;
const big = 0n;
const str = "0";
const obj = new String("0");

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true
```

Lose Gleichheit wird nur vom `==` Operator verwendet.

## Gleichwertigkeit mithilfe von Object.is()

Gleichwertigkeit bestimmt, ob zwei Werte in allen Kontexten _funktionell identisch_ sind. (Dieser Anwendungsfall zeigt ein Beispiel des [Liskovschen Substitutionsprinzips](https://de.wikipedia.org/wiki/Liskovsches_Substitutionsprinzip).) Ein Beispiel ist gegeben, wenn ein Versuch unternommen wird, eine unveränderbare Eigenschaft zu mutieren:

```js
// Fügen Sie der Number-Konstruktorfunktion eine unveränderbare NEGATIVE_ZERO-Eigenschaft hinzu.
Object.defineProperty(Number, "NEGATIVE_ZERO", {
  value: -0,
  writable: false,
  configurable: false,
  enumerable: false,
});

function attemptMutation(v) {
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

`Object.defineProperty` wird eine Ausnahme auslösen, wenn versucht wird, eine unveränderbare Eigenschaft zu ändern, aber es tut nichts, wenn keine tatsächliche Änderung angefordert wird. Wenn `v` `-0` ist, wird keine Änderung angefordert und kein Fehler ausgelöst. Intern, wenn eine unveränderbare Eigenschaft neu definiert wird, wird der neu angegebene Wert mit dem aktuellen Wert unter Verwendung der Gleichwertigkeit verglichen.

Gleichwertigkeit wird durch die Methode {{jsxref("Object.is")}} bereitgestellt. Sie wird fast überall in der Sprache verwendet, wo ein Wert äquivalenter Identität erwartet wird.

## Gleichwertige-Null-Gleichheit

Ähnlich wie bei der Gleichwertigkeit, aber +0 und -0 werden als gleich betrachtet.

Gleichwertige-Null-Gleichheit ist nicht als JavaScript-API verfügbar, kann aber mit benutzerdefiniertem Code implementiert werden:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x und y sind gleich (können -0 und 0 sein) oder beide sind NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

Gleichwertige-Null-Gleichheit unterscheidet sich von strikter Gleichheit nur dadurch, dass sie `NaN` als gleichwertig behandelt, und unterscheidet sich von der Gleichwertigkeit, indem sie `-0` als gleich zu `0` betrachtet. Dies führt dazu, dass sie normalerweise das vernünftigste Verhalten während der Suche hat, insbesondere beim Arbeiten mit `NaN`. Sie wird von [`Array.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes), sowie Methoden von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) für den Vergleich der Schlüssselgleichheit verwendet.

## Methoden zum Vergleich von Gleichheit

Menschen vergleichen oft doppelte Gleichheit und dreifache Gleichheit, indem sie sagen, dass eine eine "erweiterte" Version der anderen ist. Zum Beispiel könnte gesagt werden, dass Doppelgleich eine erweiterte Version von Dreifachgleich ist, weil ersteres alles tut, was letzteres tut, aber mit Typenkonvertierung seiner Operanden — zum Beispiel `6 == "6"`. Alternativ kann behauptet werden, dass Doppelgleich die Basis ist und Dreifachgleich eine erweiterte Version ist, weil es erfordert, dass die beiden Operanden vom selben Typ sind, sodass es eine zusätzliche Einschränkung hinzufügt.

Diese Denkweise impliziert jedoch, dass die Gleichheitsvergleiche ein eindimensionales "Spektrum" bilden, bei dem am einen Ende "völlig strikt" und am anderen Ende "völlig lose" liegt. Dieses Modell reicht bei {{jsxref("Object.is")}} nicht aus, da es weder "lockerer" als Doppelgleich noch "strenger" als Dreifachgleich ist, noch irgendwo dazwischen passt (d. h. sowohl strenger als Doppelgleich, aber lockerer als Dreifachgleich). Wir können aus der Vergleichstabelle unten erkennen, dass dies auf die Art und Weise zurückzuführen ist, wie {{jsxref("Object.is")}} mit {{jsxref("NaN")}} umgeht. Beachten Sie, dass wenn `Object.is(NaN, NaN)` zu `false` ausgewertet worden wäre, wir _sagen könnten,_ dass es auf das lose/strikte Spektrum als eine noch strengere Form von Dreifachgleich passt, eine, die zwischen `-0` und `+0` unterscheidet. Die Behandlung von {{jsxref("NaN")}} bedeutet jedoch, dass dies nicht zutrifft. Leider muss {{jsxref("Object.is")}} in Bezug auf seine spezifischen Eigenschaften betrachtet werden und nicht in Bezug auf seine Lockerheit oder Strenge im Hinblick auf die Gleichheitsoperatoren.

| x                   | y                   | `==`       | `===`      | `Object.is` | `SameValueZero` |
| ------------------- | ------------------- | ---------- | ---------- | ----------- | --------------- |
| `undefined`         | `undefined`         | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `null`              | `null`              | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `true`              | `true`              | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `false`             | `false`             | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `'foo'`             | `'foo'`             | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `0`                 | `0`                 | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `+0`                | `-0`                | `✅ true`  | `✅ true`  | `❌ false`  | `✅ true`       |
| `+0`                | `0`                 | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `-0`                | `0`                 | `✅ true`  | `✅ true`  | `❌ false`  | `✅ true`       |
| `0n`                | `-0n`               | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `0`                 | `false`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `""`                | `false`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `""`                | `0`                 | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `'0'`               | `0`                 | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `'17'`              | `17`                | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `[1, 2]`            | `'1,2'`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `new String('foo')` | `'foo'`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `null`              | `undefined`         | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `null`              | `false`             | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `undefined`         | `false`             | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `{ foo: 'bar' }`    | `{ foo: 'bar' }`    | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `new String('foo')` | `new String('foo')` | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `0`                 | `null`              | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `0`                 | `NaN`               | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `'foo'`             | `NaN`               | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `NaN`               | `NaN`               | `❌ false` | `❌ false` | `✅ true`   | `✅ true`       |

### Wann Object.is() statt Dreifachgleich verwendet werden sollte

Im Allgemeinen ist die einzige Zeit, in der das spezielle Verhalten von {{jsxref("Object.is")}} gegenüber Nullen von Interesse sein könnte, bei der Verfolgung bestimmter Metaprogrammierungsschemata, insbesondere im Hinblick auf Eigenschaftenbeschreibungen, wenn es wünschenswert ist, dass Ihre Arbeit einige der Eigenschaften von {{jsxref("Object.defineProperty")}} widerspiegelt. Wenn Ihr Anwendungsfall dies nicht erfordert, wird empfohlen, {{jsxref("Object.is")}} zu vermeiden und stattdessen [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu verwenden. Selbst wenn Ihre Anforderungen beinhalten, dass Vergleiche zwischen zwei {{jsxref("NaN")}}-Werten zu `true` ausgewertet werden, ist es im Allgemeinen einfacher, die {{jsxref("NaN")}}-Prüfungen speziell zu behandeln (mit der {{jsxref("isNaN")}} Methode, die in vorherigen Versionen von ECMAScript verfügbar ist), als herauszufinden, wie umgebende Berechnungen das Vorzeichen von Nullen beeinflussen könnten, denen Sie in Ihrem Vergleich begegnen.

Hier ist eine nicht erschöpfende Liste von eingebauten Methoden und Operatoren, die dazu führen können, dass eine Unterscheidung zwischen `-0` und `+0` sich in Ihrem Code manifestiert:

- [`-` (unäre Negation)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)

  - : Betrachten Sie das folgende Beispiel:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Wenn `obj.velocity` `0` (oder sich zu `0` ergibt), wird ein `-0` an dieser Stelle eingeführt und breitet sich in `stoppingForce` aus.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In einigen Fällen kann es sein, dass ein `-0` in einen Ausdruck als Rückgabewert dieser Methoden eingeführt wird, selbst wenn kein `-0` als eines der Parameter existiert. Zum Beispiel führt die Verwendung von {{jsxref("Math.pow")}}, um {{jsxref("Infinity", "-Infinity")}} zur Potenz eines beliebigen negativen, ungeraden Exponenten zu erheben, zu `-0`. Weitere Informationen finden Sie in der Dokumentation zu den einzelnen Methoden.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : Es ist möglich, einen `-0`-Rückgabewert aus diesen Methoden in einigen Fällen zu erhalten, in denen ein `-0` als einer der Parameter existiert. Zum Beispiel ergibt `Math.min(-0, +0)` `-0`. Weitere Informationen finden Sie in der Dokumentation zu den einzelnen Methoden.
- [`~`](/de/docs/Web/JavaScript/Reference/Operators/Bitweise_NOT), [`<<`](/de/docs/Web/JavaScript/Reference/Operators/Linksverschiebung), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Rechtsverschiebung)
  - : Jeder dieser Operatoren verwendet intern den Algorithmus ToInt32. Da es nur eine Darstellung für 0 im internen 32-Bit-Integer-Typ gibt, wird `-0` keine Hin- und Rückfahrt nach einer inversen Operation überstehen. Zum Beispiel ergeben sowohl `Object.is(~~(-0), -0)` als auch `Object.is(-0 << 2 >> 2, -0)` `false`.

Sich auf {{jsxref("Object.is")}} zu verlassen, wenn die Signiertheit von Nullen nicht berücksichtigt wird, kann gefährlich sein. Natürlich tut es genau das, was gewünscht ist, wenn das Ziel darin besteht, zwischen `-0` und `+0` zu unterscheiden.

### Hinweis: Object.is() und NaN

Die Spezifikation von {{jsxref("Object.is")}} behandelt alle Instanzen von {{jsxref("NaN")}} als dasselbe Objekt. Da jedoch [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) verfügbar sind, können wir unterschiedliche Gleitkomma-Darstellungen von `NaN` haben, die sich nicht in allen Kontexten identisch verhalten. Zum Beispiel:

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// Holen Sie sich eine Byte-Darstellung von NaN
const n = f2b(NaN);
// Ändern Sie das erste Bit, das das Vorzeichenbit ist und für NaN nicht zählt
n[0] = 1;
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

## Siehe auch

- [JS Vergleichstabelle](https://dorey.github.io/JavaScript-Equality-Table/) von [dorey](https://github.com/dorey)
