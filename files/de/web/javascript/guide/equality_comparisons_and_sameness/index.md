---
title: Gleichheitsvergleiche und Identität
slug: Web/JavaScript/Guide/Equality_comparisons_and_sameness
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Intermediate")}}

JavaScript bietet drei verschiedene Operationen zum Vergleichen von Werten:

- [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) — strikte Gleichheit (dreifach Gleichheitszeichen)
- [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) — lose Gleichheit (doppeltes Gleichheitszeichen)
- [`Object.is()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Welche Operation Sie wählen, hängt davon ab, welche Art von Vergleich Sie durchführen möchten. Kurz zusammengefasst:

- Doppelte Gleichheit (`==`) führt eine Typenkonvertierung durch, wenn zwei Dinge verglichen werden, und behandelt `NaN`, `-0` und `+0` speziell, um IEEE 754 zu entsprechen (sodass `NaN != NaN`, und `-0 == +0`);
- Dreifache Gleichheit (`===`) führt den gleichen Vergleich wie doppelte Gleichheit durch (einschließlich der speziellen Behandlung von `NaN`, `-0` und `+0`), jedoch ohne Typkonvertierung. Wenn die Typen unterschiedlich sind, wird `false` zurückgegeben.
- `Object.is()` führt keine Typkonvertierung und keine spezielle Behandlung für `NaN`, `-0` und `+0` durch (was ihm dasselbe Verhalten wie `===` gibt, außer bei diesen speziellen numerischen Werten).

Sie entsprechen drei von vier Gleichheitsalgorithmen in JavaScript:

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): wird von vielen eingebauten Operationen verwendet

Beachten Sie, dass die Unterscheidung zwischen diesen sich auf die Behandlung von Primitiven bezieht; keiner von ihnen vergleicht, ob die Parameter konzeptionell ähnlich in der Struktur sind. Für beliebige nicht-primitive Objekte `x` und `y`, die dieselbe Struktur haben, aber unterschiedliche Objekte sind, werden alle obigen Formate zu `false` ausgewertet.

## Strikte Gleichheit mit ===

Strikte Gleichheit vergleicht zwei Werte auf Gleichheit. Kein Wert wird implizit in einen anderen Wert umgewandelt, bevor er verglichen wird. Wenn die Werte unterschiedliche Typen haben, gelten sie als ungleich. Wenn die Werte denselben Typ haben, keine Zahlen sind und denselben Wert haben, gelten sie als gleich. Wenn beide Werte Zahlen sind, gelten sie als gleich, wenn sie beide nicht `NaN` sind und denselben Wert haben, oder wenn einer `+0` und einer `-0` ist.

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

Strikte Gleichheit ist fast immer die richtige Vergleichsoperation, die Sie verwenden sollten. Für alle Werte außer Zahlen wird die offensichtliche Semantik verwendet: Ein Wert ist nur sich selbst gleich. Für Zahlen verwendet sie leicht unterschiedliche Semantiken, um über zwei verschiedene Randfälle hinwegzukommen. Der erste ist, dass Gleitpunkt-Null entweder positiv oder negativ sein kann. Dies ist nützlich zur Darstellung bestimmter mathematischer Lösungen, aber da die meisten Situationen keinen Unterschied zwischen `+0` und `-0` machen, behandelt die strikte Gleichheit sie als denselben Wert. Der zweite ist, dass Gleitpunkten das Konzept eines Nicht-eine-Zahl-Werts, `NaN`, einschließen, um die Lösung bestimmter schlecht definierter mathematischer Probleme darzustellen: zum Beispiel negative Unendlichkeit plus positive Unendlichkeit. Strikte Gleichheit behandelt `NaN` als ungleich zu jedem anderen Wert — einschließlich sich selbst. (Der einzige Fall, in dem `(x !== x)` `true` ist, ist, wenn `x` `NaN` ist.)

Neben `===` wird strikte Gleichheit auch von Array-Indexsuchmethoden verwendet, einschließlich [`Array.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf), [`TypedArray.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf) und beim [`case`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Abgleich. Dies bedeutet, dass Sie `indexOf(NaN)` nicht verwenden können, um den Index eines `NaN`-Wertes in einem Array zu finden, oder `NaN` als `case`-Wert in einer `switch`-Anweisung verwenden können, um es mit etwas abzugleichen.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Nothing is logged
}
```

## Lose Gleichheit mit ==

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer identische Semantik wie `B == A` für beliebige Werte von `A` und `B` (mit Ausnahme der Reihenfolge der angewandten Konvertierungen). Das Verhalten bei der Durchführung loser Gleichheit mit `==` ist wie folgt:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: Rückgabe von `true` nur, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: Rückgabe von `true` nur, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Zahl: Rückgabe von `true` nur, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben; daher ist `NaN` nie gleich `NaN`.
   - Boolean: Rückgabe von `true` nur, wenn beide Operanden entweder `true` sind oder beide `false`.
   - BigInt: Rückgabe von `true` nur, wenn beide Operanden denselben Wert haben.
   - Symbol: Rückgabe von `true` nur, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Ansonsten wird `false` zurückgegeben.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Wert ist, [konvertieren Sie das Objekt in einen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. In diesem Schritt werden beide Operanden in primitive Typen konvertiert (einer von String, Number, Boolean, Symbol und BigInt). Der Rest der Konvertierung erfolgt fallweise.
   - Wenn sie vom gleichen Typ sind, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere aber nicht, wird `false` zurückgegeben.
   - Wenn einer der Operanden ein Boolean ist, der andere aber nicht, [konvertieren Sie das Boolean in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 konvertiert, und `false` wird in 0 konvertiert. Vergleichen Sie dann die beiden Operanden erneut lose.
   - Zahl zu String: [konvertieren Sie den String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Konvertierungsfehler führt zu `NaN`, was garantiert, dass die Gleichheit `false` ist.
   - Zahl zu BigInt: Vergleichen Sie nach ihrem mathematischen Wert. Wenn die Zahl ±Unendlichkeit oder `NaN` ist, wird `false` zurückgegeben.
   - String zu BigInt: Konvertieren Sie den String in einen BigInt mit dem gleichen Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor. Wenn die Konvertierung fehlschlägt, wird `false` zurückgegeben.

Traditionell und gemäß ECMAScript sind alle Primitiven und Objekte lose ungleich zu `undefined` und `null`. Aber die meisten Browser erlauben eine sehr enge Klasse von Objekten (genauer gesagt das `document.all`-Objekt für jede Seite), in einigen Kontexten so zu agieren, als ob sie den Wert `undefined` _emulieren_. Lose Gleichheit ist solch ein Kontext: `null == A` und `undefined == A` evaluieren zu `true` nur dann, wenn A ein Objekt ist, das `undefined` _emuliert_. In allen anderen Fällen ist ein Objekt niemals lose gleich zu `undefined` oder `null`.

In den meisten Fällen wird die Verwendung von loser Gleichheit nicht empfohlen. Das Ergebnis eines Vergleichs mit strikter Gleichheit ist einfacher vorherzusagen und kann aufgrund des Fehlens von Typenumwandlungen schneller ausgewertet werden.

Das folgende Beispiel zeigt lose Gleichheitsvergleiche, die die Zahl primitive `0`, die BigInt primitive `0n`, die String primitive `'0'`, und ein Objekt, dessen `toString()`-Wert `'0'` ist, einschließen.

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

Lose Gleichheit wird nur durch den `==` Operator verwendet.

## Gleichheit mit demselben Wert mit Object.is()

Gleichheit mit demselben Wert bestimmt, ob zwei Werte in allen Kontexten _funktional identisch_ sind. (Dieser Anwendungsfall zeigt ein Beispiel des [Liskov-Substitutionsprinzips](https://de.wikipedia.org/wiki/Liskov-Substitutionsprinzip).) Ein Fall tritt auf, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern:

```js
// Add an immutable NEGATIVE_ZERO property to the Number constructor.
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

`Object.defineProperty` wirft eine Ausnahme, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern, tut aber nichts, wenn keine tatsächliche Änderung angefordert wird. Wenn `v` `-0` ist, wurde keine Änderung angefordert, und es wird kein Fehler ausgegeben. Intern, wenn eine unveränderliche Eigenschaft neu definiert wird, wird der neu festgelegte Wert mit dem aktuellen Wert unter Verwendung der Gleichheit mit demselben Wert verglichen.

Gleichheit mit demselben Wert wird durch die {{jsxref("Object.is")}}-Methode bereitgestellt. Sie wird fast überall in der Sprache verwendet, wo ein Wert mit gleichwertiger Identität erwartet wird.

## Same-value-zero-Gleichheit

Ähnlich wie die Gleichheit mit demselben Wert, aber +0 und -0 werden als gleich angesehen.

Same-value-zero-Gleichheit wird nicht als JavaScript-API exponiert, kann aber mit benutzerdefiniertem Code implementiert werden:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

Same-value-zero unterscheidet sich nur von strikter Gleichheit, indem es `NaN` als äquivalent behandelt, und nur von Gleichheit mit demselben Wert, indem es `-0` als äquivalent zu `0` behandelt. Dies führt in der Regel zu dem sinnvollsten Verhalten bei der Suche, insbesondere bei der Arbeit mit `NaN`. Es wird von [`Array.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) sowie von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Methoden für den Vergleich von Schlüsselgleichheit verwendet.

## Vergleich von Gleichheitsmethoden

Oft wird gesagt, dass das doppelte Gleichheitszeichen und das dreifache Gleichheitszeichen in einem "spektrumartig erweiterten" Verhältnis zueinander stehen. Zum Beispiel könnte gesagt werden, das doppelte Gleichheitszeichen sei eine erweiterte Version des dreifachen Gleichheitszeichen, weil das erste alles tut, was das letztere tut, jedoch mit Typkonvertierung auf seinen Operanden — zum Beispiel `6 == "6"`. Alternativ könnte man behaupten, dass das doppelte Gleichheitszeichen die Basis ist und das dreifache Gleichheitszeichen eine erweiterte Version, weil es erfordert, dass die beiden Operanden denselben Typ haben, sodass es eine zusätzliche Einschränkung hinzufügt.

Diese Denkweise legt jedoch nahe, dass die Gleichheitsvergleiche ein eindimensionales "Spektrum" bilden, wobei "völlig strikt" am einen Ende und "völlig lose" am anderen Ende liegt. Dieses Modell funktioniert nicht mit {{jsxref("Object.is")}}, da es nicht "lockerer" ist als das doppelte Gleichheitszeichen oder "strikter" als das dreifache Gleichheitszeichen, noch passt es irgendwo dazwischen (das heißt, es ist sowohl strikter als das doppelte Gleichheitszeichen, aber lockerer als das dreifache Gleichheitszeichen). Aus der Tabelle der Vergleichsmethoden für die Identität können wir sehen, dass dies an der Art und Weise liegt, wie {{jsxref("Object.is")}} mit {{jsxref("NaN")}} umgeht. Beachten Sie, dass, wenn `Object.is(NaN, NaN)` zu `false` ausgewertet würde, wir sagen könnten, dass es sich auf dem Striktheits-/Lockerheitsspektrum als eine noch striktere Form des dreifachen Gleichheitszeichens einfügt, eine, die zwischen `-0` und `+0` unterscheidet. Die {{jsxref("NaN")}}-Behandlung bedeutet jedoch, dass dies nicht zutrifft. Leider muss {{jsxref("Object.is")}} in Bezug auf seine spezifischen Merkmale betrachtet werden, anstatt auf seine Lockerheit oder Striktheit im Hinblick auf die Gleichheitsoperatoren.

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

### Wann sollte Object.is() gegenüber dem dreifachen Gleichheitszeichen verwendet werden?

Im Allgemeinen ist der einzige Zeitpunkt, zu dem das spezielle Verhalten von {{jsxref("Object.is")}} gegenüber Nullen von Interesse sein könnte, bei der Verfolgung bestimmter Metaprogrammierungsschemata, insbesondere in Bezug auf Eigenschaftsbeschreibungen, wenn es wünschenswert ist, dass Ihre Arbeit einige der Eigenschaften von {{jsxref("Object.defineProperty")}} widerspiegelt. Wenn Ihr Anwendungsfall dies nicht erfordert, wird empfohlen, {{jsxref("Object.is")}} zu vermeiden und stattdessen [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu verwenden. Auch wenn Ihre Anforderungen beinhalten, Vergleiche zwischen zwei {{jsxref("NaN")}}-Werten zu `true` auszuwerten, ist es im Allgemeinen einfacher, die {{jsxref("NaN")}}-Prüfungen speziell zu behandeln (mit der {{jsxref("isNaN")}}-Methode aus früheren ECMAScript-Versionen), als herauszufinden, wie umgebende Berechnungen das Vorzeichen von Nullwerten, die Sie in Ihrem Vergleich antreffen, beeinflussen könnten.

Hier ist eine nicht erschöpfende Liste von eingebauten Methoden und Operatoren, die dazu führen könnten, dass eine Unterscheidung zwischen `-0` und `+0` in Ihrem Code sichtbar wird:

- [`-` (unäres Negieren)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)

  - : Betrachten Sie das folgende Beispiel:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Wenn `obj.velocity` `0` ist (oder zu `0` berechnet wird), wird an dieser Stelle ein `-0` eingeführt und wird sich in `stoppingForce` ausbreiten.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In einigen Fällen ist es möglich, dass ein `-0` in einen Ausdruck eingeführt wird als Rückgabewert dieser Methoden, selbst wenn kein `-0` als einer der Parameter existiert. Zum Beispiel führt die Verwendung von {{jsxref("Math.pow")}}, um {{jsxref("Infinity", "-Infinity")}} zu irgendeiner negativen, ungeraden Potenz zu erheben, zu `-0`. Siehe die Dokumentation der einzelnen Methoden.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : Es ist möglich, einen `-0`-Rückgabewert aus diesen Methoden zu erhalten, in einigen Fällen, in denen ein `-0` als einer der Parameter existiert. Z.B. `Math.min(-0, +0)` wertet zu `-0` aus. Siehe die Dokumentation der einzelnen Methoden.
- [`~`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Jeder dieser Operatoren verwendet intern den ToInt32-Algorithmus. Da es nur eine Darstellung für 0 im internen 32-Bit-Integer-Typ gibt, wird `-0` keine Rundreise überleben nach einer inversen Operation. Z.B. bewerten sowohl `Object.is(~~(-0), -0)` als auch `Object.is(-0 << 2 >> 2, -0)` zu `false`.

Das Verlassen auf {{jsxref("Object.is")}}, wenn die Signiertheit von Nullen nicht berücksichtigt wird, kann gefährlich sein. Natürlich, wenn die Absicht ist, zwischen `-0` und `+0` zu unterscheiden, tut es genau das Gewünschte.

### Hinweis: Object.is() und NaN

Die {{jsxref("Object.is")}}-Spezifikation behandelt alle Vorkommen von {{jsxref("NaN")}} als dasselbe Objekt. Da jedoch [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) verfügbar sind, können wir unterschiedliche Gleitpunktdarstellungen von `NaN` haben, die sich nicht in allen Kontexten identisch verhalten. Zum Beispiel:

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// Get a byte representation of NaN
const n = f2b(NaN);
// Change the first bit, which is the sign bit and doesn't matter for NaN
n[0] = 1;
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

## Siehe auch

- [JS Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/) von [dorey](https://github.com/dorey)
