---
title: Vergleich von Gleichheit und Gleichheit
slug: Web/JavaScript/Equality_comparisons_and_sameness
l10n:
  sourceCommit: 8e1184924387f88e2ee63a3c786b007aaf573105
---

{{jsSidebar("Intermediate")}}

JavaScript bietet drei verschiedene Wertvergleichsoperationen:

- [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) — strikte Gleichheit (dreifaches Gleichheitszeichen)
- [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) — lose Gleichheit (doppeltes Gleichheitszeichen)
- [`Object.is()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Welche Operation Sie wählen, hängt davon ab, welche Art von Vergleich Sie durchführen möchten. Kurz gesagt:

- Doppeltes Gleichheitszeichen (`==`) führt eine Typumwandlung durch, wenn zwei Dinge verglichen werden, und behandelt `NaN`, `-0` und `+0` speziell, um den IEEE 754-Standards zu entsprechen (so ist `NaN != NaN` und `-0 == +0`);
- Dreifaches Gleichheitszeichen (`===`) führt denselben Vergleich wie das doppelte Gleichheitszeichen durch (einschließlich der speziellen Behandlung von `NaN`, `-0` und `+0`), jedoch ohne Typumwandlung; wenn die Typen unterschiedlich sind, wird `false` zurückgegeben.
- `Object.is()` führt keine Typumwandlung durch und keine spezielle Behandlung für `NaN`, `-0` und `+0` (dabei entspricht es dem Verhalten von `===` außer bei diesen speziellen numerischen Werten).

Diese entsprechen drei der vier Gleichheitsalgorithmen in JavaScript:

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): wird von vielen eingebauten Operationen verwendet

Beachten Sie, dass sich die Unterscheidung dieser alle mit ihrer Behandlung von Primitiven beschäftigt; keine von ihnen vergleicht, ob die Parameter konzeptionell ähnlich in der Struktur sind. Für beliebige nicht-primitiven Objekte `x` und `y`, die dieselbe Struktur, aber unterschiedliche Objekte selbst haben, werden alle oben genannten Formen den Wert `false` ergeben.

## Strikte Gleichheit mit ===

Strikte Gleichheit vergleicht zwei Werte auf Gleichheit. Keiner der Werte wird vor dem Vergleich implizit in einen anderen Wert umgewandelt. Wenn die Werte unterschiedliche Typen haben, werden die Werte als ungleich betrachtet. Haben die Werte denselben Typ, sind keine Zahlen und haben denselben Wert, werden sie als gleich betrachtet. Schließlich, wenn beide Werte Zahlen sind, werden sie als gleich betrachtet, wenn sie beide nicht `NaN` sind und denselben Wert haben, oder wenn eines `+0` und eines `-0` ist.

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

Strikte Gleichheit ist fast immer die korrekte Vergleichsoperation, die Sie verwenden sollten. Für alle Werte außer Zahlen verwendet sie die offensichtlichen Semantiken: Ein Wert ist nur sich selbst gleich. Für Zahlen verwendet sie leicht unterschiedliche Semantiken, um zwei verschiedene Randfälle zu übersehen. Der erste ist, dass das Gleitkomma-Null entweder positiv oder negativ signiert ist. Dies ist nützlich, um bestimmte mathematische Lösungen darzustellen, aber da die meisten Situationen keinen Unterschied zwischen `+0` und `-0` machen, behandelt die strikte Gleichheit sie als denselben Wert. Der zweite ist, dass das Gleitkomma das Konzept eines Nicht-einer-Nummer-Werts, `NaN`, beinhaltet, um die Lösung für bestimmte schlecht definierte mathematische Probleme darzustellen: Negative Unendlichkeit addiert zu positiver Unendlichkeit, zum Beispiel. Strikte Gleichheit betrachtet `NaN` als ungleich zu jedem anderen Wert, einschließlich sich selbst. (Die einzige Bedingung, bei der `(x !== x)` `true` ist, ist, wenn `x` `NaN` ist.)

Neben `===` wird die strikte Gleichheit auch von Array-Indexfindungsmethoden wie [`Array.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf), [`TypedArray.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf) und [`case`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Abgleich verwendet. Dies bedeutet, dass Sie `indexOf(NaN)` nicht verwenden können, um den Index eines `NaN`-Werts in einem Array zu finden, oder `NaN` als `case`-Wert in einer `switch`-Anweisung verwenden können und es nichts entsprechen lassen können.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Nothing is logged
}
```

## Lose Gleichheit mit ==

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer identische Semantiken wie `B == A` für beliebige Werte von `A` und `B` (außer für die Reihenfolge der angewandten Umwandlungen). Das Verhalten für die Durchführung der losen Gleichheit mit `==` ist wie folgt:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: gibt `true` nur zurück, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: gibt `true` nur zurück, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Zahl: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben; daher ist `NaN` niemals gleich `NaN`.
   - Boolean: gibt `true` nur zurück, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben.
   - Symbol: gibt `true` nur zurück, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls wird `false` zurückgegeben.
3. Wenn einer der Operanden ein Objekt ist und der andere ein primitiver Wert, [wandeln Sie das Objekt in einen primitiven Wert um](/de/docs/Web/JavaScript/Data_structures#primitive_coercion).
4. In diesem Schritt werden beide Operanden in primitive Werte umgewandelt (einer von String, Number, Boolean, Symbol und BigInt). Der Rest der Umwandlung erfolgt fallweise.
   - Wenn sie vom selben Typ sind, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, wird `false` zurückgegeben.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [wandeln Sie das Boolean in eine Zahl um](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 und `false` wird in 0 umgewandelt. Vergleichen Sie dann die beiden Operanden erneut lose.
   - Zahl zu String: [wandeln Sie den String in eine Zahl um](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Umwandlungsfehler führt zu `NaN`, was garantiert die Gleichheit `false` sein lässt.
   - Zahl zu BigInt: Vergleichen Sie nach ihrem numerischen Wert. Wenn die Zahl ±Infinity oder `NaN` ist, wird `false` zurückgegeben.
   - String zu BigInt: Wandeln Sie den String in eine BigInt um, indem Sie denselben Algorithmus wie beim [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor verwenden. Wenn die Umwandlung fehlschlägt, wird `false` zurückgegeben.

Traditionell und gemäß ECMAScript sind alle primitiven Werte und Objekte lose ungleich `undefined` und `null`. Aber die meisten Browser erlauben es einer sehr kleinen Klasse von Objekten (insbesondere dem `document.all`-Objekt für jede Seite), in einigen Kontexten so zu wirken, als ob sie den Wert `undefined` _emulieren_. Lose Gleichheit ist ein solcher Kontext: `null == A` und `undefined == A` evaluieren zu wahr, wenn und nur wenn A ein Objekt ist, das `undefined` _emuliert_. In allen anderen Fällen ist ein Objekt niemals lose gleich `undefined` oder `null`.

In den meisten Fällen wird die Verwendung von loser Gleichheit abgeraten. Das Ergebnis eines Vergleichs mit strikter Gleichheit ist leichter vorherzusagen und kann schneller ausgewertet werden, da keine Typumwandlung erfolgt.

Das folgende Beispiel zeigt lose Gleichheitsvergleiche, die den Zahlenprimitive `0`, das BigInt-Primitive `0n`, das String-Primitiv `'0'` und ein Objekt, dessen `toString()`-Wert `'0'` ist, betreffen.

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

Lose Gleichheit wird nur vom `==`-Operator verwendet.

## Same-value Gleichheit mit Object.is()

Same-value Gleichheit bestimmt, ob zwei Werte _funktional identisch_ in allen Kontexten sind. (Dieser Anwendungsfall demonstriert eine Instanz des [Liskov-Substitutionsprinzips](https://de.wikipedia.org/wiki/Liskov-Substitutionsprinzip).) Ein Fall tritt auf, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern:

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

`Object.defineProperty` wird eine Ausnahme auslösen, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern, aber es passiert nichts, wenn keine tatsächliche Änderung angefordert wird. Wenn `v` `-0` ist, wurde keine Änderung angefordert und es wird kein Fehler ausgelöst. Intern, wenn eine unveränderliche Eigenschaft neu definiert wird, wird der neu spezifizierte Wert unter Verwendung von Same-value Gleichheit mit dem aktuellen Wert verglichen.

Same-value Gleichheit wird durch die {{jsxref("Object.is")}}-Methode bereitgestellt. Es wird fast überall in der Sprache verwendet, wo ein Wert von gleichwertiger Identität erwartet wird.

## Same-value-zero Gleichheit

Ähnlich wie die Same-value Gleichheit, aber +0 und -0 werden als gleich betrachtet.

Same-value-zero Gleichheit wird nicht als eine JavaScript-API offengelegt, kann jedoch mit benutzerdefiniertem Code implementiert werden:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

Same-value-zero unterscheidet sich nur von strikter Gleichheit, indem `NaN` als äquivalent behandelt wird, und nur unterscheidet es sich von Same-value Gleichheit, indem `-0` als äquivalent zu `0` behandelt wird. Dies macht es normalerweise zu dem sinnvollsten Verhalten bei der Suche, insbesondere bei der Arbeit mit `NaN`. Es wird von [`Array.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) sowie von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Methoden zur Schlüsselgleichheit verwendet.

## Vergleich der Gleichheitsmethoden

Menschen vergleichen oft das doppelte Gleichheitszeichen und das dreifache Gleichheitszeichen, indem sie sagen, eines sei eine "verbesserte" Version des anderen. Zum Beispiel könnte das doppelte Gleichheitszeichen als eine erweiterte Version des dreifachen Gleichheitszeichens bezeichnet werden, weil das erstere alles tut, was das letztere tut, aber mit Typumwandlung auf seinen Operanden — zum Beispiel `6 == "6"`. Alternativ kann behauptet werden, dass das doppelte Gleichheitszeichen die Basis ist und das dreifache Gleichheitszeichen eine erweiterte Version ist, da es erfordert, dass die beiden Operanden denselben Typ haben, was eine zusätzliche Einschränkung hinzufügt.

Diese Denkweise impliziert jedoch, dass die Gleichheitsvergleiche ein eindimensionales "Spektrum" bilden, bei dem "vollkommen strikt" an einem Ende liegt und "völlig lose" am anderen. Dieses Modell reicht mit {{jsxref("Object.is")}} nicht aus, weil es nicht "loser" als das doppelte Gleichheitszeichen oder "strikter" als das dreifache Gleichheitszeichen ist, noch passt es irgendwo dazwischen (d.h., sowohl strikter als das doppelte Gleichheitszeichen, aber loser als das dreifache Gleichheitszeichen). Wir können aus der Gleichheitstabelle unten ersehen, dass dies auf die Art und Weise zurückzuführen ist, wie {{jsxref("Object.is")}} {{jsxref("NaN")}} behandelt. Beachten Sie, dass wenn `Object.is(NaN, NaN)` zu `false` ausgewertet würde, wir sagen _könnten_, dass es im lockeren/strikten Spektrum als eine noch striktere Form des dreifachen Gleichheitszeichens passt, eine, die zwischen `-0` und `+0` unterscheidet. Die {{jsxref("NaN")}} Behandlung bedeutet jedoch, dass dies nicht zutrifft. Leider muss {{jsxref("Object.is")}} in Bezug auf seine spezifischen Merkmale betrachtet werden, anstatt auf seine Lockerheit oder Strenge in Bezug auf die Gleichheitsoperatoren.

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

### Wann Object.is() statt des dreifachen Gleichheitszeichens verwendet werden sollte

Im Allgemeinen ist das einzige Mal, wo {{jsxref("Object.is")}}'s spezielle Behandlung gegenüber Nullen wahrscheinlich von Interesse ist, im Rahmen bestimmter Metaprogrammierungsschemata, insbesondere in Bezug auf Eigenschaftsdeskriptoren, wenn es wünschenswert ist, dass Ihre Arbeit einige der Eigenschaften von {{jsxref("Object.defineProperty")}} widerspiegelt. Wenn Ihr Anwendungsfall dies nicht erfordert, wird vorgeschlagen, {{jsxref("Object.is")}} zu vermeiden und stattdessen [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu verwenden. Auch wenn Ihre Anforderungen beinhalten, dass Vergleiche zwischen zwei {{jsxref("NaN")}}-Werten zu `true` ausgewertet werden, ist es im Allgemeinen einfacher, die {{jsxref("NaN")}}-Prüfungen gezielt zu behandeln (mithilfe der Methode {{jsxref("isNaN")}}, die aus früheren Versionen von ECMAScript verfügbar ist), als herauszufinden, wie umliegende Berechnungen das Vorzeichen von Nullen, die Sie bei Ihrem Vergleich antreffen, beeinflussen könnten.

Hier ist eine nicht erschöpfende Liste von eingebauten Methoden und Operatoren, die dazu führen könnten, dass eine Unterscheidung zwischen `-0` und `+0` sich in Ihrem Code manifestiert:

- [`-` (unäre Negation)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)

  - : Betrachten Sie das folgende Beispiel:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Wenn `obj.velocity` `0` ist (oder zu `0` berechnet wird), wird an dieser Stelle ein `-0` eingeführt und verbreitet sich in `stoppingForce`.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In einigen Fällen ist es möglich, dass ein `-0` in einem Ausdruck als Rückgabewert dieser Methoden eingeführt wird, auch wenn kein `-0` als einer der Parameter existiert. Zum Beispiel führt die Verwendung von {{jsxref("Math.pow")}}, um {{jsxref("Infinity", "-Infinity")}} zu einer negativen, ungeraden Potenz zu erheben, zu `-0`. Konsultieren Sie die Dokumentation für die einzelnen Methoden.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : Es ist möglich, einen `-0`-Rückgabewert aus diesen Methoden in einigen Fällen zu erhalten, wenn ein `-0` als einer der Parameter existiert. Zum Beispiel ergibt `Math.min(-0, +0)` `-0`. Konsultieren Sie die Dokumentation für die einzelnen Methoden.
- [`~`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Jeder dieser Operatoren verwendet intern den ToInt32-Algorithmus. Da es nur eine Darstellung für 0 im internen 32-Bit-Ganzzahltyp gibt, wird `-0` nach einem Inversen nicht überleben. Zum Beispiel evaluieren beide `Object.is(~~(-0), -0)` und `Object.is(-0 << 2 >> 2, -0)` zu `false`.

Sich auf {{jsxref("Object.is")}} zu verlassen, wenn die Vorzeichentoleranz von Nullen nicht berücksichtigt wird, kann gefährlich sein. Natürlich, wenn die Absicht ist, zwischen `-0` und `+0` zu unterscheiden, tut es genau das, was gewünscht ist.

### Hinweis: Object.is() und NaN

Die {{jsxref("Object.is")}}-Spezifikation behandelt alle Instanzen von {{jsxref("NaN")}} als dasselbe Objekt. Da jedoch [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) verfügbar sind, können wir verschiedene Gleitkommadarstellungen von `NaN` haben, die sich nicht in allen Kontexten identisch verhalten. Zum Beispiel:

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
