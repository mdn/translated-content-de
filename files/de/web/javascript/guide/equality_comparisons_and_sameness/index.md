---
title: Gleichheitsvergleiche und Gleichheit
slug: Web/JavaScript/Guide/Equality_comparisons_and_sameness
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{jsSidebar("Intermediate")}}

JavaScript bietet drei verschiedene Methoden zum Wertevergleich:

- [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) — strikte Gleichheit (dreifach gleich)
- [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) — lose Gleichheit (doppelt gleich)
- [`Object.is()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Welche Methode Sie wählen, hängt davon ab, welche Art von Vergleich Sie durchführen möchten. Kurz gesagt:

- Doppelt gleich (`==`) führt eine Typkonvertierung durch, wenn zwei Dinge verglichen werden, und behandelt `NaN`, `-0` und `+0` speziell gemäß IEEE 754 (also `NaN != NaN` und `-0 == +0`);
- Dreifach gleich (`===`) führt denselben Vergleich wie doppelt gleich durch (einschließlich der speziellen Behandlung für `NaN`, `-0` und `+0`), jedoch ohne Typkonvertierung; wenn die Typen unterschiedlich sind, wird `false` zurückgegeben.
- `Object.is()` führt keine Typkonvertierung und keine spezielle Behandlung für `NaN`, `-0` und `+0` durch (was ihm dasselbe Verhalten wie `===` gibt, abgesehen von diesen speziellen numerischen Werten).

Sie entsprechen drei der vier Gleichheitsalgorithmen in JavaScript:

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): wird von vielen eingebauten Operationen verwendet

Beachten Sie, dass der Unterschied zwischen diesen Methoden mit der Behandlung von Primitiva zu tun hat; keine von ihnen vergleicht, ob die Parameter konzeptionell ähnlich in ihrer Struktur sind. Für nicht-primitive Objekte `x` und `y`, die dieselbe Struktur haben, aber als separate Objekte existieren, wird jede der oben genannten Formen `false` zurückgeben.

## Strikte Gleichheit mit ===

Strikte Gleichheit vergleicht zwei Werte auf Gleichheit. Keiner der Werte wird implizit in einen anderen Wert umgewandelt, bevor der Vergleich durchgeführt wird. Wenn die Werte unterschiedliche Typen haben, werden sie als ungleich angesehen. Wenn die Werte denselben Typ haben, keine Zahlen sind und denselben Wert haben, werden sie als gleich angesehen. Schließlich, wenn beide Werte Zahlen sind, werden sie als gleich angesehen, wenn sie beide nicht `NaN` sind und denselben Wert haben oder wenn eines `+0` und eines `-0` ist.

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

Strikte Gleichheit ist fast immer die korrekte Vergleichsoperation, die verwendet werden sollte. Für alle Werte außer Zahlen verwendet sie die offensichtlichen Semantiken: Ein Wert ist nur mit sich selbst gleich. Für Zahlen verwendet sie leicht abweichende Semantiken, um zwei verschiedene Sonderfälle zu überdecken. Der erste ist, dass das Fließkomma-Null entweder positiv oder negativ sein kann. Dies ist nützlich, um bestimmte mathematische Lösungen darzustellen, aber da die meisten Situationen keinen Unterschied zwischen `+0` und `-0` beachten, behandelt die strikte Gleichheit sie als denselben Wert. Der zweite Sonderfall ist, dass Fließkomma das Konzept eines Nicht-einer-Zahl-Wertes, `NaN`, enthält, um die Lösung bestimmter unklar definierter mathematischer Probleme darzustellen: negative Unendlichkeit addiert zu positiver Unendlichkeit, zum Beispiel. Strikte Gleichheit behandelt `NaN` als ungleich zu jedem anderen Wert – einschließlich sich selbst. (Der einzige Fall, in dem `(x !== x)` `true` ist, ist, wenn `x` `NaN` ist.)

Neben `===` wird strikte Gleichheit auch von Methoden zur Array-Indexsuche verwendet, einschließlich [`Array.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf), [`TypedArray.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf) und [`case`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Matching. Das heißt, Sie können `indexOf(NaN)` nicht verwenden, um den Index eines `NaN` Werts in einem Array zu finden, oder `NaN` als `case` Wert in einer `switch` Anweisung verwenden und es dazu bringen, etwas zu passen.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Nothing is logged
}
```

## Lose Gleichheit mit ==

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer dieselbe Semantik wie `B == A` für beliebige Werte von `A` und `B` (abgesehen von der Reihenfolge der angewandten Konvertierungen). Das Verhalten für die Ausführung loser Gleichheit unter Verwendung von `==` ist wie folgt:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: gibt `true` nur zurück, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: gibt `true` nur zurück, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Zahl: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben; daher ist `NaN` nie gleich `NaN`.
   - Boolean: gibt `true` nur zurück, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben.
   - Symbol: gibt `true` nur zurück, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls wird `false` zurückgegeben.
3. Wenn einer der Operanden ein Objekt ist und der andere ein Primitiv, [wandeln Sie das Objekt in ein Primitiv um](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. An diesem Schritt werden beide Operanden in Primitiva umgewandelt (eines von String, Number, Boolean, Symbol und BigInt). Der Rest der Konvertierung wird fallweise durchgeführt.
   - Wenn sie denselben Typ haben, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, geben Sie `false` zurück.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [wandeln Sie den Boolean in eine Zahl um](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 konvertiert und `false` wird in 0 konvertiert. Vergleichen Sie dann die beiden Operanden erneut lose.
   - Zahl zu String: [wandeln Sie den String in eine Zahl um](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Konvertierungsfehler führt zu `NaN`, was garantiert, dass die Gleichheit `false` ist.
   - Zahl zu BigInt: Vergleichen Sie sie nach ihrem mathematischen Wert. Wenn die Zahl ±Unendlichkeit oder `NaN` ist, geben Sie `false` zurück.
   - String zu BigInt: Wandeln Sie den String unter Verwendung desselben Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Konstruktor in ein BigInt um. Wenn die Konvertierung fehlschlägt, geben Sie `false` zurück.

Traditionell und gemäß ECMAScript sind alle Primitiva und Objekte lose ungleich `undefined` und `null`. Aber die meisten Browser erlauben einer sehr kleinen Klasse von Objekten (insbesondere dem `document.all`-Objekt für jede Seite), in einigen Kontexten so zu handeln, als ob sie den Wert `undefined` _emulieren_. Lose Gleichheit ist ein solcher Kontext: `null == A` und `undefined == A` werten sich zu true aus, wenn und nur wenn A ein Objekt ist, das `undefined` emuliert. In allen anderen Fällen ist ein Objekt niemals lose gleich `undefined` oder `null`.

In den meisten Fällen wird von der Verwendung loser Gleichheit abgeraten. Das Ergebnis eines Vergleichs mit strikter Gleichheit ist leichter vorherzusagen und kann aufgrund des Fehlens von Typumwandlungen auch schneller ausgewertet werden.

Das folgende Beispiel demonstriert lose Gleichheitsvergleiche, die die Zahl `0`, das BigInt `0n`, den String `'0'` und ein Objekt betreffen, dessen `toString()`-Wert `'0'` ist.

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

## Gleichheit gleicher Werte mit Object.is()

Die Gleichheit gleicher Werte bestimmt, ob zwei Werte _funktional identisch_ in allen Kontexten sind. (Dieser Anwendungsfall zeigt ein Beispiel für das [Liskov-Substitutionsprinzip](https://de.wikipedia.org/wiki/Liskov-Substitutionsprinzip).) Ein Beispiel tritt auf, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern:

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

`Object.defineProperty` wird eine Ausnahme auslösen, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern, es wird jedoch nichts getan, wenn keine tatsächliche Änderung angefordert wird. Wenn `v` `-0` ist, wurde keine Änderung angefordert und es wird kein Fehler ausgelöst. Intern wird beim erneuten Definieren einer unveränderlichen Eigenschaft der neu angegebene Wert mit dem aktuellen Wert mittels der Gleichheit gleicher Werte verglichen.

Die Gleichheit gleicher Werte wird durch die Methode {{jsxref("Object.is")}} bereitgestellt. Sie wird fast überall in der Sprache verwendet, wo ein Wert mit äquivalenter Identität erwartet wird.

## Same-value-zero Gleichheit

Ähnlich wie die Gleichheit gleicher Werte, werden bei der Same-value-zero Gleichheit jedoch +0 und -0 als gleich betrachtet.

Same-value-zero Gleichheit ist nicht als JavaScript-API verfügbar, kann jedoch mit benutzerdefiniertem Code implementiert werden:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

Same-value-zero unterscheidet sich von strikter Gleichheit dadurch, dass `NaN` äquivalent behandelt wird, und von der Gleichheit gleicher Werte dadurch, dass `-0` als äquivalent zu `0` behandelt wird. In der Regel hat sie daher das vernünftigste Verhalten bei der Suche, insbesondere beim Arbeiten mit `NaN`. Sie wird von [`Array.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) sowie von Methoden der Klassen [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) verwendet, um die Schlüsselgleichheit zu vergleichen.

## Vergleich von Gleichheitsmethoden

Menschen vergleichen oft doppelt gleich und dreifach gleich, indem sie sagen, dass eines eine "verbesserte" Version des anderen ist. Zum Beispiel könnte man doppelt gleich als eine erweiterte Version von dreifach gleich bezeichnen, da ersteres alles tut, was letzteres tut, jedoch mit Typkonvertierung der Operanden – zum Beispiel `6 == "6"`. Alternativ könnte man argumentieren, dass doppelt gleich die Basislinie ist und dreifach gleich eine verbesserte Version, da es erfordert, dass die beiden Operanden denselben Typ haben, also fügt es eine zusätzliche Einschränkung hinzu.

Diese Denkweise impliziert jedoch, dass die Gleichheitsvergleiche ein eindimensionales "Spektrum" bilden, bei dem "vollständig strikt" an einem Ende und "vollständig lose" am anderen Ende liegt. Dieses Modell versagt bei {{jsxref("Object.is")}}, da es weder "lockerer" als doppelt gleich ist, noch "strenger" als dreifach gleich, noch irgendwo dazwischen passt (d.h. sowohl strenger als doppelt gleich, aber lockerer als dreifach gleich). Wir können aus der folgende Tabelle für Gleichheitsvergleiche sehen, dass dies auf die Art und Weise zurückzuführen ist, wie {{jsxref("Object.is")}} mit {{jsxref("NaN")}} umgeht. Beachten Sie, dass wir sagen könnten, es passe in das Spektrum von locker zu strikt als eine noch striktere Form von dreifach gleich, die zwischen `-0` und `+0` unterscheidet, wenn `Object.is(NaN, NaN)` zu `false` ausgewertet würde. Die {{jsxref("NaN")}}-Behandlung bedeutet allerdings, dass dies nicht der Fall ist. Leider muss {{jsxref("Object.is")}} in Bezug auf seine spezifischen Merkmale statt durch seine Lockerheit oder Strenge im Vergleich zu den Gleichheitsoperatoren betrachtet werden.

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

### Wann man Object.is() anstelle von dreifach gleich verwendet

Im Allgemeinen ist das einzige Mal, dass das spezielle Verhalten von {{jsxref("Object.is")}} gegenüber Nullen wahrscheinlich von Interesse ist, im Streben nach bestimmten Metaprogrammierungsschemata, insbesondere im Hinblick auf Eigenschaftsdeskriptoren, wenn es wünschenswert ist, dass Ihre Arbeit einige der Merkmale von {{jsxref("Object.defineProperty")}} widerspiegelt. Wenn Ihr Anwendungsfall dies nicht erfordert, wird empfohlen, {{jsxref("Object.is")}} zu vermeiden und stattdessen [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu verwenden. Selbst wenn Ihre Anforderungen umfassen, dass Vergleiche zwischen zwei {{jsxref("NaN")}} Werten zu `true` ausgewertet werden, ist es im Allgemeinen einfacher, die {{jsxref("NaN")}}-Überprüfungen (unter Verwendung der {{jsxref("isNaN")}}-Methode aus früheren ECMAScript-Versionen) als Sonderfall zu behandeln, als herauszufinden, wie umgebende Berechnungen das Vorzeichen von Nullen, die Ihnen bei Ihrem Vergleich begegnen, beeinflussen könnten.

Hier ist eine nicht erschöpfende Liste von eingebauten Methoden und Operatoren, die in Ihrem Code eine Unterscheidung zwischen `-0` und `+0` hervorrufen könnten:

- [`-` (unäres Negieren)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)

  - : Betrachten Sie das folgende Beispiel:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Wenn `obj.velocity` `0` ist (oder zu `0` berechnet wird), wird an dieser Stelle ein `-0` eingeführt und breitet sich in `stoppingForce` aus.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In einigen Fällen ist es möglich, dass durch diese Methoden ein `-0` in einen Ausdruck eingeführt wird, obwohl kein `-0` als einer der Parameter existiert. Zum Beispiel ergibt {{jsxref("Math.pow")}}, dass {{jsxref("Infinity", "-Infinity")}} mit einer negativen, ungeraden Potenz potenziert wird, `-0`. Weitere Informationen finden Sie in der Dokumentation der einzelnen Methoden.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : Es ist möglich, dass diese Methoden in einigen Fällen einen `-0` zurückgeben, wenn ein `-0` als einer der Parameter existiert. Zum Beispiel ergibt `Math.min(-0, +0)` `-0`. Weitere Informationen finden Sie in der Dokumentation der einzelnen Methoden.
- [`~`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Jeder dieser Operatoren verwendet den ToInt32-Algorithmus intern. Da es nur eine Darstellung für 0 im internen 32-Bit-Ganzzahldatentyp gibt, wird `-0` einen Rundtrip nach einer inversen Operation nicht überleben. Zum Beispiel evaluieren sowohl `Object.is(~~(-0), -0)` als auch `Object.is(-0 << 2 >> 2, -0)` zu `false`.

Verlassen Sie sich bei {{jsxref("Object.is")}} nicht darauf, wenn das Vorzeichen von Nullen nicht berücksichtigt wird. Natürlich tut es genau das gewollte, wenn die Absicht besteht, zwischen `-0` und `+0` zu unterscheiden.

### Warnung: Object.is() und NaN

Die {{jsxref("Object.is")}}-Spezifikation behandelt alle Instanzen von {{jsxref("NaN")}} als dasselbe Objekt. Da jedoch [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) verfügbar sind, können wir unterschiedliche Fließkomma-Darstellungen von `NaN` haben, die sich nicht in allen Kontexten identisch verhalten. Zum Beispiel:

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
