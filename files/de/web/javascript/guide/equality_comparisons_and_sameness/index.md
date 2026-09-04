---
title: Gleichheitsvergleiche und Identität
slug: Web/JavaScript/Guide/Equality_comparisons_and_sameness
l10n:
  sourceCommit: b7c5617fc1d8eb00c6884a708983da21ad61b228
---

JavaScript bietet drei verschiedene Wert-Vergleichsoperationen:

- [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) — strikte Gleichheit (drei Gleichheitszeichen)
- [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) — lose Gleichheit (zwei Gleichheitszeichen)
- [`Object.is()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Welche Operation Sie wählen, hängt davon ab, welche Art von Vergleich Sie durchführen möchten. Kurz gesagt:

- Doppelte Gleichheit (`==`) führt eine Typkonvertierung durch, wenn zwei Dinge verglichen werden, und behandelt `NaN`, `-0` und `+0` speziell, um dem IEEE 754-Standard zu entsprechen (also `NaN != NaN` und `-0 == +0`);
- Dreifache Gleichheit (`===`) führt den gleichen Vergleich wie die doppelte Gleichheit durch (einschließlich der speziellen Behandlung für `NaN`, `-0` und `+0`), jedoch ohne Typkonvertierung; wenn die Typen unterschiedlich sind, wird `false` zurückgegeben.
- `Object.is()` führt keine Typkonvertierung durch und behandelt `NaN`, `-0` und `+0` nicht speziell (dabei verhält es sich wie `===`, außer bei den speziellen numerischen Werten).

Sie entsprechen drei von vier Gleichheitsalgorithmen in JavaScript:

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): wird von vielen eingebauten Operationen verwendet

Beachten Sie, dass sich der Unterschied zwischen ihnen auf die Behandlung von einfachen Werten bezieht; keiner von ihnen vergleicht, ob die Parameter konzeptionell ähnlich in ihrer Struktur sind. Für nicht-primitive Objekte `x` und `y`, die die gleiche Struktur, aber unterschiedliche Objekte sind, werden alle oben genannten Formen zu `false` ausgewertet.

Der Vergleich der Inhalte von separaten Objekten oder Arrays wird als {{Glossary("deep_equality", "tiefe Gleichheit")}} bezeichnet. JavaScript stellt keinen allgemeinen Operator für tiefe Vergleiche bereit; Bibliotheken und Host-APIs können Vergleichs-Utilities mit unterschiedlichen Regeln bereitstellen.

## Strikte Gleichheit mit ===

Strikte Gleichheit vergleicht zwei Werte auf Gleichheit. Kein Wert wird implizit in einen anderen Wert konvertiert, bevor er verglichen wird. Wenn die Werte unterschiedliche Typen haben, werden sie als ungleich betrachtet. Wenn die Werte denselben Typ haben, keine Zahlen sind und denselben Wert haben, werden sie als gleich betrachtet. Schließlich werden, wenn beide Werte Zahlen sind, sie als gleich betrachtet, wenn sie beide nicht `NaN` sind und denselben Wert haben, oder wenn einer `+0` und der andere `-0` ist.

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

Strikte Gleichheit ist fast immer die korrekte Vergleichsoperation, die verwendet werden sollte. Für alle Werte außer Zahlen verwendet es die offensichtliche Semantik: Ein Wert ist nur gleich sich selbst. Für Zahlen werden leicht unterschiedliche Semantiken verwendet, um zwei verschiedene Randfälle zu glätten. Der erste ist, dass das Gleitkommadarstellung von Null entweder positiv oder negativ ist. Dies ist nützlich, um bestimmte mathematische Lösungen darzustellen, aber da in den meisten Situationen der Unterschied zwischen `+0` und `-0` nicht wichtig ist, behandelt strikte Gleichheit sie als denselben Wert. Der zweite ist, dass das Gleitkomma den Begriff eines Nicht-Zahl-Werts, `NaN`, enthält, um die Lösung für bestimmte ill-defined mathematische Probleme darzustellen: zum Beispiel negative Unendlichkeit, die zu positiver Unendlichkeit addiert wird. Strikte Gleichheit behandelt `NaN` als ungleich zu jedem anderen Wert — einschließlich sich selbst. (Der einzige Fall, in dem `(x !== x)` wahr ist, ist, wenn `x` `NaN` ist.)

Neben `===` wird auch von Array-Indexfindungsmethoden wie [`Array.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf), [`TypedArray.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf) und `case`-Matching verwendet. Das bedeutet, dass Sie `indexOf(NaN)` nicht verwenden können, um den Index eines `NaN`-Werts in einem Array zu finden, oder `NaN` als `case`-Wert in einer `switch`-Anweisung verwenden und es mit irgendetwas abgleichen können.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Nothing is logged
}
```

## Lose Gleichheit mit ==

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer identische Semantik zu `B == A` für beliebige Werte von `A` und `B` (außer für die Reihenfolge der angewendeten Konvertierungen). Das Verhalten bei der Durchführung von loser Gleichheit mit `==` ist wie folgt:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: gibt `true` nur zurück, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: gibt `true` nur zurück, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Zahl: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, gibt er `false` zurück; also ist `NaN` niemals gleich `NaN`.
   - Boolean: gibt `true` nur zurück, wenn beide Operanden sowohl `true` als auch `false` sind.
   - BigInt: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben.
   - Symbol: gibt `true` nur zurück, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere auch `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls gibt er `false` zurück.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Wert ist, [konvertieren Sie das Objekt in einen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. An diesem Schritt werden beide Operanden in primitive Werte konvertiert (einer von String, Number, Boolean, Symbol und BigInt). Der Rest der Konvertierung erfolgt fallweise.
   - Wenn sie denselben Typ haben, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, geben Sie `false` zurück.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [konvertieren Sie das Boolean in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird zu 1 und `false` wird zu 0 konvertiert. Vergleichen Sie dann die beiden Operanden erneut lose.
   - Zahl zu String: [Konvertieren Sie den String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Konvertierungsfehler führt zu `NaN`, was garantiert, dass die Gleichheit `false` ist.
   - Zahl zu BigInt: Vergleichen Sie anhand ihres mathematischen Wertes. Wenn die Zahl ±Unendlichkeit oder `NaN` ist, geben Sie `false` zurück.
   - String zu BigInt: Konvertieren Sie den String in einen BigInt, indem Sie denselben Algorithmus wie im [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor verwenden. Wenn die Konvertierung fehlschlägt, geben Sie `false` zurück.

Traditionell und gemäß ECMAScript sind alle primitiven Werte und Objekte lose ungleich `undefined` und `null`. Aber die meisten Browser erlauben eine sehr kleine Klasse von Objekten (insbesondere das `document.all`-Objekt für jede Seite), in einigen Kontexten, so zu handeln, als ob sie den Wert `undefined` _emulieren_. Lose Gleichheit ist ein solcher Kontext: `null == A` und `undefined == A` werten zu wahr aus, wenn und nur wenn A ein Objekt ist, das `undefined` emuliert. In allen anderen Fällen ist ein Objekt niemals lose gleich `undefined` oder `null`.

In den meisten Fällen wird von der Verwendung der losen Gleichheit abgeraten. Das Ergebnis eines Vergleichs mit strikter Gleichheit ist leichter vorherzusagen und kann schneller ausgewertet werden, da keine Typumwandlung erfolgt.

Das folgende Beispiel zeigt lose Gleichheitsvergleiche, die das nummerische Primitive `0`, das BigInt-Primitiv `0n`, das String-Primitiv `'0'` und ein Objekt betreffen, dessen `toString()`-Wert `'0'` ist.

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

Lose Gleichheit wird nur durch den `==`-Operator verwendet.

## Gleichwertigkeit mit gleichem Wert unter Verwendung von Object.is()

Die Gleichwertigkeit mit gleichem Wert bestimmt, ob zwei Werte in allen Kontexten _funktional identisch_ sind. (Dieser Anwendungsfall zeigt ein Beispiel für das [Liskov-Substitutionsprinzip](https://de.wikipedia.org/wiki/Liskov-Substitutionsprinzip).) Ein Beispiel tritt auf, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern:

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

`Object.defineProperty` wirft eine Ausnahme, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern, aber es passiert nichts, wenn keine tatsächliche Änderung angefordert wird. Wenn `v` `-0` ist, wurde keine Änderung angefordert, und es wird kein Fehler ausgelöst. Intern, wenn eine unveränderliche Eigenschaft neu definiert wird, wird der neu spezifizierte Wert mit dem aktuellen Wert unter Verwendung der Gleichwertigkeit mit gleichem Wert verglichen.

Die Gleichwertigkeit mit gleichem Wert wird durch die Methode {{jsxref("Object.is")}} bereitgestellt. Sie wird fast überall in der Sprache verwendet, wo ein Wert mit äquivalenter Identität erwartet wird.

## Gleichwertigkeit mit gleichem Wert Null

Ähnlich wie die Gleichwertigkeit mit gleichem Wert, jedoch werden +0 und -0 als gleich betrachtet.

Die Gleichwertigkeit mit gleichem Wert Null wird nicht als JavaScript-API bereitgestellt, kann aber mit benutzerdefiniertem Code implementiert werden:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

Gleichwertigkeit mit gleichem Wert Null unterscheidet sich nur von strikter Gleichheit, indem sie `NaN` als gleichwertig behandelt, und unterscheidet sich nur von Gleichwertigkeit mit gleichem Wert, indem sie `-0` als gleichwertig zu `0` behandelt. Dies führt dazu, dass sie meistens das sinnvollste Verhalten während des Suchens hat, insbesondere wenn mit `NaN` gearbeitet wird. Sie wird von [`Array.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) sowie von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Methoden verwendet, um die Gleichheit von Schlüsseln zu vergleichen.

## Vergleich von Gleichheitsmethoden

Menschen vergleichen oft doppelte Gleichheit und dreifache Gleichheit, indem sie sagen, eine sei eine "verbesserte" Version der anderen. Zum Beispiel könnte man sagen, dass doppelte Gleichheit eine erweiterte Version der dreifachen Gleichheit ist, weil die erstere alles tut, was die letztere tut, jedoch mit Typkonvertierung auf ihren Operanden — zum Beispiel `6 == "6"`. Alternativ kann behauptet werden, dass doppelte Gleichheit die Basislinie ist und die dreifache Gleichheit eine verbesserte Version, da sie von den beiden Operanden erfordert, denselben Typ zu haben, wodurch eine zusätzliche Einschränkung hinzugefügt wird.

Diese Denkweise impliziert jedoch, dass die Gleichheitsvergleiche ein eindimensionales "Spektrum" bilden, wobei "völlig strikt" am einen Ende und "völlig lose" am anderen Ende liegt. Dieses Modell scheitert mit {{jsxref("Object.is")}}, da es nicht "lockerer" als die doppelte Gleichheit oder "strikter" als die dreifache Gleichheit ist, noch passt es irgendwo dazwischen (d.h. gleichzeitig strikter als die doppelte Gleichheit, aber lockerer als die dreifache Gleichheit). Wir können aus der Tabelle der Gleichheitsvergleiche unten sehen, dass dies auf die Art und Weise zurückzuführen ist, wie {{jsxref("Object.is")}} {{jsxref("NaN")}} behandelt. Beachten Sie, dass, wenn `Object.is(NaN, NaN)` zu `false` bewertet würde, wir sagen _könnten_, dass es auf dem locker/strikt-Spektrum als eine noch striktere Form der dreifachen Gleichheit passt, eine, die zwischen `-0` und `+0` unterscheidet. Die Handhabung von {{jsxref("NaN")}} bedeutet jedoch, dass dies nicht zutrifft. Leider muss {{jsxref("Object.is")}} in Bezug auf seine spezifischen Eigenschaften betrachtet werden, anstatt in Bezug auf seine Lockerheit oder Striktheit im Hinblick auf die Gleichheitsoperatoren.

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

### Wann sollte Object.is() gegenüber der dreifachen Gleichheit verwendet werden?

Im Allgemeinen ist die einzige Zeit, in der das spezielle Verhalten von {{jsxref("Object.is")}} gegenüber Nullen von Interesse sein könnte, bei der Verfolgung bestimmter Metaprogrammierungsschemata, insbesondere bezüglich Eigenschaftsdeskriptoren, wenn es wünschenswert ist, dass Ihre Arbeit einige der Eigenschaften von {{jsxref("Object.defineProperty")}} widerspiegelt. Wenn Ihr Anwendungsfall dies nicht erfordert, wird vorgeschlagen, {{jsxref("Object.is")}} zu vermeiden und stattdessen [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu verwenden. Selbst wenn Ihre Anforderungen beinhalten, dass Vergleiche zwischen zwei {{jsxref("NaN")}}-Werten zu `true` ausgewertet werden, ist es im Allgemeinen einfacher, die {{jsxref("NaN")}}-Prüfungen (mit der {{jsxref("isNaN")}}-Methode, die in früheren ECMAScript-Versionen verfügbar ist) als Sonderfall zu behandeln, als herauszufinden, wie umliegende Berechnungen das Vorzeichen der Nullen, die Sie in Ihrem Vergleich finden, beeinflussen könnten.

Hier ist eine nicht erschöpfende Liste von eingebauten Methoden und Operatoren, die dazu führen könnten, dass eine Unterscheidung zwischen `-0` und `+0` in Ihrem Code manifestiert wird:

- [`-` (unäre Negation)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
  - : Betrachten Sie das folgende Beispiel:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Wenn `obj.velocity` `0` ist (oder zu `0` berechnet wird), wird an dieser Stelle ein `-0` eingeführt und verbreitet sich in `stoppingForce`.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In einigen Fällen ist es möglich, dass ein `-0` als Rückgabewert dieser Methoden in einen Ausdruck eingeführt wird, selbst wenn kein `-0` als einer der Parameter existiert. Zum Beispiel ergibt die Verwendung von {{jsxref("Math.pow")}}, um {{jsxref("Infinity", "-Infinity")}} zu einer negativen, ungeraden Exponentiation zu erheben, `-0`. Verweisen Sie auf die Dokumentation der einzelnen Methoden.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : Es ist möglich, einen `-0` Rückgabewert aus diesen Methoden in einigen Fällen zu erhalten, bei denen ein `-0` als einer der Parameter existiert. Zum Beispiel ergibt `Math.min(-0, +0)` `-0`. Verweisen Sie auf die Dokumentation der einzelnen Methoden.
- [`~`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Jeder dieser Operatoren verwendet intern den ToInt32-Algorithmus. Da es nur eine Darstellung für 0 im internen 32-Bit-Integer-Typ gibt, überlebt `-0` eine Rundreise nach einer inversen Operation nicht. Zum Beispiel ergeben sowohl `Object.is(~~(-0), -0)` als auch `Object.is(-0 << 2 >> 2, -0)` `false`.

Die Verwendung von {{jsxref("Object.is")}} kann gefährlich sein, wenn das Vorzeichen der Nullen nicht berücksichtigt wird. Natürlich macht es genau das, was beabsichtigt ist, wenn die Absicht besteht, zwischen `-0` und `+0` zu unterscheiden.

### Achtung: Object.is() und NaN

Die {{jsxref("Object.is")}}-Spezifikation behandelt alle Instanzen von {{jsxref("NaN")}} als dasselbe Objekt. Da jedoch [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) verfügbar sind, können wir unterschiedliche Gleitpunktdarstellungen von `NaN` haben, die sich nicht in allen Kontexten identisch verhalten. Beispielsweise:

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// Get a byte representation of NaN
const n = f2b(NaN);
// Change the first bit, which is the sign bit and doesn't matter for NaN
n[7] |= 0x80;
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 255]
```

> [!NOTE]
> Implementierungen dürfen die Bit-Darstellung von `NaN` kanonisieren, sodass `nan2`, wenn es zurück in Gleitpunkt konvertiert wird, dieselbe Bit-Darstellung wie das ursprüngliche `NaN` haben kann.

## Siehe auch

- [JS Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/) von [dorey](https://github.com/dorey)
