---
title: Gleichheitsvergleiche und Gleichheit
slug: Web/JavaScript/Guide/Equality_comparisons_and_sameness
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript bietet drei verschiedene Wertvergleichsoperationen:

- [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) — strikte Gleichheit (drei Gleichheitszeichen)
- [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) — lose Gleichheit (zwei Gleichheitszeichen)
- [`Object.is()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Welche Operation Sie wählen, hängt davon ab, welche Art von Vergleich Sie durchführen möchten. Kurz gesagt:

- Doppeltes Gleichheitszeichen (`==`) führt eine Typkonvertierung durch, wenn zwei Dinge verglichen werden, und behandelt `NaN`, `-0` und `+0` speziell, um den IEEE 754 zu entsprechen (also `NaN != NaN`, und `-0 == +0`);
- Dreifaches Gleichheitszeichen (`===`) führt den gleichen Vergleich wie das doppelte Gleichheitszeichen aus (einschließlich der speziellen Behandlung für `NaN`, `-0` und `+0`), jedoch ohne Typkonvertierung; wenn die Typen unterschiedlich sind, wird `false` zurückgegeben.
- `Object.is()` führt keine Typkonvertierung und keine spezielle Behandlung für `NaN`, `-0` und `+0` durch (wodurch es das gleiche Verhalten wie `===` hat, außer bei diesen speziellen numerischen Werten).

Diese entsprechen drei von vier Gleichheitsalgorithmen in JavaScript:

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): wird von vielen eingebauten Operationen verwendet

Beachten Sie, dass die Unterschiede zwischen diesen sich auf den Umgang mit Primärtypen beziehen; keine von ihnen vergleicht, ob die Parameter strukturell ähnlich sind. Für nicht-primitive Objekte `x` und `y`, die die gleiche Struktur haben, aber unterschiedliche Objekte sind, werden alle oben genannten Formen zu `false` ausgewertet.

## Strikte Gleichheit mit ===

Strikte Gleichheit vergleicht zwei Werte auf Gleichheit. Keiner der Werte wird implizit in einen anderen Wert konvertiert, bevor der Vergleich erfolgt. Wenn die Werte unterschiedliche Typen haben, werden die Werte als ungleich angesehen. Wenn die Werte den gleichen Typ haben, keine Zahlen sind und den gleichen Wert haben, werden sie als gleich angesehen. Schließlich, wenn beide Werte Zahlen sind, werden sie als gleich angesehen, wenn beide nicht `NaN` sind und den gleichen Wert haben, oder wenn einer `+0` und einer `-0` ist.

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

Strikte Gleichheit ist fast immer die richtige Vergleichsoperation. Für alle Werte außer Zahlen verwendet sie die offensichtliche Semantik: Ein Wert ist nur sich selbst gleich. Für Zahlen verwendet sie leicht unterschiedliche Semantik, um zwei verschiedene Randfälle abzudecken. Der erste ist, dass Gleitkommazahlen entweder positiv oder negativ unterzeichnet sein können. Dies ist nützlich, um bestimmte mathematische Lösungen darzustellen, aber da die meisten Situationen keinen Unterschied zwischen `+0` und `-0` machen, behandelt die strikte Gleichheit sie als den gleichen Wert. Der zweite ist, dass Gleitkommazahlen das Konzept eines „nicht-zahl“-Werts (`NaN`) enthalten, um die Lösung bestimmter unbestimmter mathematischer Probleme darzustellen: negative Unendlichkeit addiert zu positiver Unendlichkeit, zum Beispiel. Strikte Gleichheit behandelt `NaN` als ungleich zu jedem anderen Wert — einschließlich sich selbst. (Der einzige Fall, in dem `(x !== x)` `true` ist, ist, wenn `x` `NaN` ist.)

Neben `===` wird strikte Gleichheit auch von Methoden zur Array-Indexsuche verwendet, einschließlich [`Array.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf), [`TypedArray.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf) und bei [`case`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Vergleich. Das bedeutet, dass Sie `indexOf(NaN)` nicht verwenden können, um den Index eines `NaN`-Werts in einem Array zu finden, oder `NaN` als `case`-Wert in einer `switch`-Anweisung verwenden können, um es zu etwas zu machen, das übereinstimmt.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Nothing is logged
}
```

## Lose Gleichheit mit ==

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer identische Semantik wie `B == A` für beliebige Werte von `A` und `B` (außer für die Reihenfolge der angewandten Konvertierungen). Das Verhalten bei der Durchführung der losen Gleichheit mit `==` ist wie folgt:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: Geben Sie `true` nur zurück, wenn beide Operanden dasselbe Objekt referenzieren.
   - String: Geben Sie `true` nur zurück, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Zahl: Geben Sie `true` nur zurück, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, geben Sie `false` zurück; daher ist `NaN` niemals gleich `NaN`.
   - Boolean: Geben Sie `true` nur zurück, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: Geben Sie `true` nur zurück, wenn beide Operanden denselben Wert haben.
   - Symbol: Geben Sie `true` nur zurück, wenn beide Operanden dasselbe Symbol referenzieren.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls geben Sie `false` zurück.
3. Wenn einer der Operanden ein Objekt ist und der andere ein Primitive, [konvertieren Sie das Objekt zu einem Primitive](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. An diesem Punkt werden beide Operanden in Primitive konvertiert (einer von String, Number, Boolean, Symbol und BigInt). Der Rest der Konvertierung erfolgt fallweise.
   - Wenn sie vom gleichen Typ sind, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, geben Sie `false` zurück.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [konvertieren Sie den Boolean zu einer Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 konvertiert und `false` wird in 0 konvertiert. Vergleichen Sie dann die beiden Operanden nochmals los.
   - Zahl zu String: [konvertieren Sie den String zu einer Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Bei einem Konvertierungsfehler wird `NaN` zurückgegeben, was garantiert, dass die Gleichheit `false` ist.
   - Zahl zu BigInt: Vergleichen Sie nach ihrem mathematischen Wert. Wenn die Zahl ±Unendlichkeit oder `NaN` ist, geben Sie `false` zurück.
   - String zu BigInt: Konvertieren Sie den String zu einem BigInt mit dem gleichen Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor. Bei einem Konvertierungsfehler geben Sie `false` zurück.

Traditionell und gemäß ECMAScript sind alle Primitiven und Objekte lose ungleich zu `undefined` und `null`. Aber die meisten Browser erlauben einer sehr engen Klasse von Objekten (insbesondere das `document.all`-Objekt für jede Seite), in einigen Kontexten so zu agieren, als ob sie den Wert `undefined` _emulieren_. Lose Gleichheit ist ein solcher Kontext: `null == A` und `undefined == A` werten auf true aus, wenn und nur dann A ein Objekt ist, das `undefined` _emuliert_. In allen anderen Fällen ist ein Objekt niemals lose gleich `undefined` oder `null`.

In den meisten Fällen wird die Verwendung von loser Gleichheit nicht empfohlen. Das Ergebnis eines Vergleichs unter Verwendung strikter Gleichheit lässt sich leichter vorhersagen und kann aufgrund des Fehlens von Typkonversionen schneller ausgewertet werden.

Das folgende Beispiel demonstriert lose Gleichheitsvergleiche, die das Zahlen-Primitiv `0`, das BigInt-Primitiv `0n`, das String-Primitiv `'0'` und ein Objekt, dessen `toString()`-Wert `'0'` ist, umfassen.

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

## Gleichheit mit demselben Wert unter Verwendung von Object.is()

Gleichheit mit demselben Wert bestimmt, ob zwei Werte in allen Kontexten _funktional identisch_ sind. (Dieser Anwendungsfall zeigt eine Instanz des [Liskovschen Substitutionsprinzips](https://en.wikipedia.org/wiki/Liskov_substitution_principle).) Ein Beispiel tritt auf, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern:

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

`Object.defineProperty` wirft eine Ausnahme, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern, tut aber nichts, wenn keine tatsächliche Änderung angefordert wird. Wenn `v` `-0` ist, wurde keine Änderung angefordert, und es wird kein Fehler ausgelöst. Intern wird der neu angegebene Wert beim Neudefinieren einer unveränderlichen Eigenschaft mit dem aktuellen Wert mithilfe der Gleichheit mit demselben Wert verglichen.

Gleichheit mit demselben Wert wird von der {{jsxref("Object.is")}}-Methode bereitgestellt. Sie wird fast überall in der Sprache verwendet, wo ein Wert von gleichwertiger Identität erwartet wird.

## Gleichheit mit demselben Wert Null

Ähnlich wie Gleichheit mit demselben Wert, aber +0 und -0 werden als gleich angesehen.

Gleichheit mit demselben Wert Null ist nicht als JavaScript-API verfügbar, kann jedoch mit benutzerdefiniertem Code implementiert werden:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

Gleichheit mit demselben Wert Null unterscheidet sich von der strikten Gleichheit dadurch, dass `NaN` als gleichwertig angesehen wird, und von der Gleichheit mit demselben Wert dadurch, dass `-0` als gleichwertig zu `0` angesehen wird. Dies führt dazu, dass es in der Regel das sinnvollste Verhalten während der Suche aufweist, besonders wenn mit `NaN` gearbeitet wird. Es wird von [`Array.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) sowie von Methoden von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) zur Prüfung der Schlüsselgleichheit verwendet.

## Vergleich von Gleichheitsmethoden

Menschen vergleichen oft doppeltes und dreifaches Gleichheitszeichen, indem sie sagen, eines sei eine "erweiterte" Version des anderen. Zum Beispiel könnte man sagen, dass das doppelte Gleichheitszeichen eine erweiterte Version des dreifachen Gleichheitszeichens ist, da das erstere alles tut, was das letztere tut, aber mit Typkonvertierung auf seinen Operanden — zum Beispiel `6 == "6"`. Alternativ kann behauptet werden, dass das doppelte Gleichheitszeichen die Grundlinie ist und das dreifache Gleichheitszeichen eine Erweiterung darstellt, da es die beiden Operanden erfordert, denselben Typ zu haben, was eine zusätzliche Einschränkung darstellt.

Diese Denkweise impliziert jedoch, dass die Gleichheitsvergleiche ein eindimensionales "Spektrum" bilden, bei dem "völlig strikt" am einen Ende und "völlig lose" am anderen liegt. Dieses Modell versagt bei {{jsxref("Object.is")}}, da es weder "lockerer" als das doppelte Gleichheitszeichen noch "strikter" als das dreifache Gleichheitszeichen ist, noch dass es irgendwo dazwischen passt (d.h. sowohl strikter als das doppelte Gleichheitszeichen, aber lockerer als das dreifache Gleichheitszeichen). Wir können aus der Vergleichstabelle unten sehen, dass dies auf die Weise zurückzuführen ist, wie {{jsxref("Object.is")}} {{jsxref("NaN")}} behandelt. Beachten Sie, dass wenn `Object.is(NaN, NaN)` auf `false` ausgewertet würde, wir sagen könnten, dass es auf dem losen/strikten Spektrum als eine noch striktere Form des dreifachen Gleichheitszeichens passt, eine die zwischen `-0` und `+0` unterscheidet. Die {{jsxref("NaN")}}-Behandlung bedeutet jedoch, dass dies nicht wahr ist. Leider muss {{jsxref("Object.is")}} in Bezug auf seine spezifischen Merkmale betrachtet werden, anstatt in Bezug auf seine Laxheit oder Strenge gegenüber den Gleichheitsoperatoren.

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

### Wann sollte man Object.is() gegenüber dreifachem Gleichheitszeichen verwenden

Im Allgemeinen ist die einzige Zeit, in der {{jsxref("Object.is")}}'s spezielles Verhalten gegenüber Nullen von Interesse sein könnte, bei der Verfolgung bestimmter Metaprogrammierungsschemata, insbesondere im Hinblick auf Eigenschaftsbeschreibungen, wenn es wünschenswert ist, dass Ihre Arbeit einige der Eigenschaften von {{jsxref("Object.defineProperty")}} spiegelt. Wenn Ihr Anwendungsfall dies nicht erfordert, wird vorgeschlagen, {{jsxref("Object.is")}} zu vermeiden und stattdessen [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu verwenden. Auch wenn Ihre Anforderungen den Vergleich zwischen zwei {{jsxref("NaN")}}-Werten erfordern, die zu `true` auswerten, ist es im Allgemeinen einfacher, die {{jsxref("NaN")}}-Prüfungen (unter Verwendung der {{jsxref("isNaN")}}-Methode aus früheren Versionen von ECMAScript) spezifisch zu behandeln, als herauszufinden, wie umliegende Berechnungen das Vorzeichen von Nullen, die Sie in Ihrem Vergleich antreffen, beeinflussen könnten.

Hier ist eine nicht erschöpfende Liste von eingebauten Methoden und Operatoren, die dazu führen könnten, dass sich eine Unterscheidung zwischen `-0` und `+0` in Ihrem Code manifestiert:

- [`-` (Unäres Negieren)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
  - : Betrachten Sie das folgende Beispiel:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Wenn `obj.velocity` `0` (oder zu `0` berechnet wird) ist, wird an dieser Stelle ein `-0` eingeführt und breitet sich in `stoppingForce` aus.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In einigen Fällen ist es möglich, dass ein `-0` in einen Ausdruck als Rückgabewert dieser Methoden eingeführt wird, auch wenn kein `-0` als einer der Parameter vorhanden ist. Zum Beispiel wird `Math.pow()` verwendet, um {{jsxref("Infinity", "-Infinity")}} auf eine beliebige negativen ungerade Exponenten zu erheben, wertet zu `-0`. Konsultieren Sie die Dokumentation für die einzelnen Methoden.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : Es ist möglich, `-0` als Rückgabewert aus diesen Methoden in einigen Fällen zu erhalten, bei denen ein `-0` als einer der Parameter existiert. Z.B. `Math.min(-0, +0)` wertet zu `-0` aus. Konsultieren Sie die Dokumentation für die einzelnen Methoden.
- [`~`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Jeder dieser Operatoren verwendet intern den ToInt32-Algorithmus. Da es in der internen 32-Bit-Integer-Implementierung nur eine Darstellung für 0 gibt, überlebt `-0` nicht eine Rundreise nach einer inversen Operation. Z.B. `Object.is(~~(-0), -0)` und `Object.is(-0 << 2 >> 2, -0)` werten beide zu `false` aus.

Sich auf {{jsxref("Object.is")}} zu verlassen, wenn das Vorzeichen von Nullen nicht berücksichtigt wird, kann gefährlich sein. Natürlich erfüllt es genau die gewünschte Funktion, wenn die Absicht darin besteht, zwischen `-0` und `+0` zu unterscheiden.

### Vorsicht: Object.is() und NaN

Die {{jsxref("Object.is")}}-Spezifikation behandelt alle Instanzen von {{jsxref("NaN")}} als dasselbe Objekt. Seit [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) jedoch verfügbar sind, können wir unterschiedliche Gleitkommadarstellungen von `NaN` haben, die sich nicht in allen Kontexten identisch verhalten. Zum Beispiel:

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

- [JS-Vergleichstabelle](https://dorey.github.io/JavaScript-Equality-Table/) von [dorey](https://github.com/dorey)
