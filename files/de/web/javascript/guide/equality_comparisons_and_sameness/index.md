---
title: Gleichheitsvergleiche und Ähnlichkeit
slug: Web/JavaScript/Guide/Equality_comparisons_and_sameness
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{jsSidebar("Intermediate")}}

JavaScript bietet drei verschiedene Wertvergleichsoperationen:

- [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) — strikte Gleichheit (dreifach gleich)
- [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) — lose Gleichheit (doppelt gleich)
- [`Object.is()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Welche Operation Sie wählen, hängt davon ab, welche Art von Vergleich Sie durchführen möchten. Kurz gesagt:

- Doppelt gleich (`==`) führt eine Typkonvertierung durch, wenn zwei Dinge verglichen werden, und behandelt `NaN`, `-0` und `+0` speziell, um IEEE 754 zu entsprechen (also `NaN != NaN` und `-0 == +0`);
- Dreifach gleich (`===`) führt denselben Vergleich durch wie doppelt gleich (einschließlich der speziellen Behandlung für `NaN`, `-0` und `+0`), jedoch ohne Typkonvertierung; wenn die Typen unterschiedlich sind, wird `false` zurückgegeben.
- `Object.is()` führt keine Typkonvertierung und keine spezielle Behandlung für `NaN`, `-0` und `+0` durch (es verhält sich also wie `===`, außer bei diesen speziellen numerischen Werten).

Sie entsprechen drei von vier Gleichheitsalgorithmen in JavaScript:

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): wird von vielen eingebauten Operationen verwendet

Beachten Sie, dass sich die Unterscheidung dieser alle mit ihrer Behandlung von Primitiven beschäftigt; keiner von ihnen vergleicht, ob die Parameter konzeptionell ähnlich in der Struktur sind. Für alle nicht-primitiven Objekte `x` und `y`, die dieselbe Struktur haben, aber unterschiedliche Objekte an sich sind, wird jede der oben genannten Formen zu `false` ausgewertet.

## Strikte Gleichheit mit ===

Strikte Gleichheit vergleicht zwei Werte auf Gleichheit. Keiner der Werte wird implizit in einen anderen Wert konvertiert, bevor er verglichen wird. Wenn die Werte unterschiedliche Typen haben, werden die Werte als ungleich betrachtet. Wenn die Werte denselben Typ haben, keine Zahlen sind und denselben Wert haben, werden sie als gleich betrachtet. Schließlich, wenn beide Werte Zahlen sind, werden sie als gleich angesehen, wenn sie beide nicht `NaN` sind und denselben Wert haben, oder wenn einer `+0` und der andere `-0` ist.

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

Strikte Gleichheit ist fast immer die korrekte Vergleichsoperation. Für alle Werte außer Zahlen verwendet sie die offensichtlichen Semantiken: Ein Wert ist nur gleich sich selbst. Für Zahlen verwendet sie leicht unterschiedliche Semantiken, um zwei verschiedene Sonderfälle zu übergehen. Der erste ist, dass Gleitpunkt-Null entweder positiv oder negativ signiert ist. Dies ist nützlich bei der Darstellung bestimmter mathematischer Lösungen, aber da die meisten Situationen keinen Unterschied zwischen `+0` und `-0` machen, behandelt strikte Gleichheit sie als denselben Wert. Der zweite ist, dass Gleitpunkt das Konzept eines Nicht-Eine-Zahl-Wertes, `NaN`, enthält, um die Lösung für bestimmte undefinierte mathematische Probleme darzustellen: negative Unendlichkeit addiert zu positiver Unendlichkeit zum Beispiel. Strikte Gleichheit behandelt `NaN` als ungleich zu jedem anderen Wert — einschließlich sich selbst. (Der einzige Fall, in dem `(x !== x)` `true` ist, ist, wenn `x` `NaN` ist.)

Neben `===` wird strikte Gleichheit auch von Array-Index-Suchmethoden wie [`Array.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf), [`TypedArray.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf) und [`case`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Abgleich verwendet. Das bedeutet, dass Sie `indexOf(NaN)` nicht verwenden können, um den Index eines `NaN`-Wertes in einem Array zu finden, oder `NaN` als `case`-Wert in einer `switch`-Anweisung verwenden und es mit etwas abgleichen können.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Nothing is logged
}
```

## Lose Gleichheit mit ==

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer identische Semantik zu `B == A` für alle Werte von `A` und `B` (außer in der Reihenfolge der angewendeten Konvertierungen). Das Verhalten bei der Durchführung von loser Gleichheit mit `==` ist wie folgt:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: gibt `true` nur zurück, wenn beide Operanden dasselbe Objekt referenzieren.
   - String: gibt `true` nur zurück, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Zahl: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, geben Sie `false` zurück; daher ist `NaN` niemals gleich `NaN`.
   - Boolean: gibt `true` nur zurück, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben.
   - Symbol: gibt `true` nur zurück, wenn beide Operanden dasselbe Symbol referenzieren.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls geben Sie `false` zurück.
3. Wenn einer der Operanden ein Objekt ist und der andere ein primitiver Wert ist, [konvertieren Sie das Objekt in ein primitives](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. An diesem Punkt werden beide Operanden in Primitive konvertiert (einer von String, Number, Boolean, Symbol und BigInt). Der Rest der Konvertierung erfolgt fallweise.
   - Wenn sie vom selben Typ sind, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, geben Sie `false` zurück.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [konvertieren Sie den Boolean in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 und `false` in 0 konvertiert. Vergleichen Sie dann die beiden Operanden erneut locker.
   - Zahl zu String: [konvertieren Sie den String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Bei Konvertierungsfehlern ergibt sich `NaN`, was die Gleichheit garantiert `false` ist.
   - Zahl zu BigInt: vergleichen Sie nach ihrem mathematischen Wert. Wenn die Zahl ±Infinity oder `NaN` ist, geben Sie `false` zurück.
   - String zu BigInt: konvertieren Sie den String in einen BigInt mit demselben Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor. Wenn die Konvertierung fehlschlägt, geben Sie `false` zurück.

Traditionell und gemäß ECMAScript sind alle Primitivwerte und Objekte lose ungleich zu `undefined` und `null`. Aber die meisten Browser erlauben einer sehr engen Klasse von Objekten (insbesondere dem `document.all`-Objekt für jede Seite), in einigen Kontexten, sich so zu verhalten, als ob sie den Wert `undefined` _emulieren_. Lose Gleichheit ist ein solcher Kontext: `null == A` und `undefined == A` werten zu `true` aus, wenn, und nur wenn, A ein Objekt ist, das `undefined` _emuliert_. In allen anderen Fällen ist ein Objekt niemals los gleich `undefined` oder `null`.

In den meisten Fällen wird die Verwendung von loser Gleichheit nicht empfohlen. Das Ergebnis eines Vergleichs mit strikter Gleichheit ist leichter vorherzusagen und kann aufgrund des Fehlens von Typumwandlungen schneller ausgewertet werden.

Das folgende Beispiel zeigt Vergleiche mit loser Gleichheit, die den Zahlen-Primitiv `0`, den BigInt-Primitiv `0n`, den Zeichenfolgen-Primitiv `'0'` und ein Objekt betreffen, dessen `toString()`-Wert `'0'` ist.

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

## Gleichheit mit demselben Wert durch Object.is()

Gleichheit mit demselben Wert bestimmt, ob zwei Werte in allen Kontexten _funktional identisch_ sind. (Dieser Anwendungsfall demonstriert ein Beispiel des [Liskov-Substitutionsprinzips](https://de.wikipedia.org/wiki/Liskov-Substitutionsprinzip).) Ein Fall tritt auf, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern:

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

`Object.defineProperty` wirft eine Ausnahme, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern, tut jedoch nichts, wenn keine tatsächliche Änderung angefragt wird. Wenn `v` `-0` ist, wurde keine Änderung angefragt und kein Fehler wird geworfen. Intern wird beim Neudefinieren einer unveränderlichen Eigenschaft der neu spezifizierte Wert mit dem aktuellen Wert durch Gleichheit mit demselben Wert verglichen.

Die Gleichheit mit demselben Wert wird von der {{jsxref("Object.is")}}-Methode bereitgestellt. Sie wird fast überall in der Sprache verwendet, wo ein Wert von äquivalenter Identität erwartet wird.

## Gleichheit mit demselben Wert Null

Ähnlich wie die Gleichheit mit demselben Wert, jedoch werden +0 und -0 als gleich betrachtet.

Die Gleichheit mit demselben Wert Null ist nicht als JavaScript-API zugänglich, kann jedoch mit benutzerdefiniertem Code implementiert werden:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

Die Gleichheit mit demselben Wert Null unterscheidet sich nur von strikter Gleichheit, indem `NaN` als gleich behandelt wird, und nur von Gleichheit mit demselben Wert, indem `-0` als gleich zu `0` betrachtet wird. Dies macht sie normalerweise zum sinnvollsten Verhalten bei der Suche, insbesondere beim Arbeiten mit `NaN`. Sie wird von [`Array.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) sowie den Methoden [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) für den Vergleich der Schlüsselgleichheit verwendet.

## Vergleich von Gleichheitsmethoden

Menschen vergleichen oft doppelt gleich und dreifach gleich, indem sie sagen, dass eines eine "verbesserte" Version des anderen ist. Zum Beispiel könnte doppelt gleich als eine erweiterte Version von dreifach gleich beschrieben werden, da erstere alles tut, was letztere macht, jedoch mit Typkonvertierung ihrer Operanden — zum Beispiel `6 == "6"`. Alternativ kann behauptet werden, dass doppelt gleich die Basis ist und dreifach gleich eine verbesserte Version, da es erfordert, dass die beiden Operanden denselben Typ haben, wodurch eine zusätzliche Einschränkung hinzugefügt wird.

Diese Denkweise impliziert jedoch, dass die Gleichheitsvergleiche ein eindimensionales "Spektrum" bilden, bei dem "völlig strikt" am einen Ende und "völlig lose" am anderen Ende liegt. Dieses Modell versagt bei {{jsxref("Object.is")}}, da es nicht "loser" als doppelt gleich oder "strenger" als dreifach gleich ist, noch irgendwo dazwischen passt (d.h. sowohl strenger als doppelt gleich, aber loser als dreifach gleich zu sein). Wir können aus der Ähnlichkeitsvergleichtabelle unten erkennen, dass dies auf die Art zurückzuführen ist, wie {{jsxref("Object.is")}} mit {{jsxref("NaN")}} umgeht. Beachten Sie, dass, wenn `Object.is(NaN, NaN)` zu `false` ausgewertet würde, wir _könnten_ sagen, dass es auf dem lose/strengen Spektrum als eine noch strengere Form von dreifach gleich passt, eine, die zwischen `-0` und `+0` unterscheidet. Das {{jsxref("NaN")}}-Handling bedeutet jedoch, dass dies unzutreffend ist. Leider muss {{jsxref("Object.is")}} in Bezug auf seine spezifischen Eigenschaften betrachtet werden, anstatt auf seinen Grad an Lockerheit oder Striktheit in Bezug auf die Gleichheitsoperatoren.

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

### Wann verwendet man Object.is() anstelle von dreifach gleich

Im Allgemeinen ist das einzige Mal, wenn {{jsxref("Object.is")}}s spezielles Verhalten gegenüber Nullen von Interesse sein könnte, bei der Verfolgung bestimmter Metaprogrammierungsschemata, insbesondere in Bezug auf Eigenschaftenbeschreibungen, wenn es wünschenswert ist, dass Ihre Arbeit einige der Eigenschaften von {{jsxref("Object.defineProperty")}} widerspiegelt. Wenn Ihr Anwendungsfall dies nicht erfordert, wird empfohlen, {{jsxref("Object.is")}} zu vermeiden und stattdessen [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu verwenden. Selbst wenn Ihre Anforderungen beinhalten, dass Vergleiche zwischen zwei {{jsxref("NaN")}}-Werten zu `true` ausgewertet werden, ist es im Allgemeinen einfacher, die {{jsxref("NaN")}}-Überprüfungen (mit der {{jsxref("isNaN")}}-Methode aus vorherigen Versionen von ECMAScript) speziell zu behandeln, als herauszufinden, wie umgebende Berechnungen das Vorzeichen von Nullwerten beeinflussen könnten, denen Sie in Ihrem Vergleich begegnen.

Hier ist eine nicht erschöpfende Liste von eingebauten Methoden und Operatoren, die dazu führen könnten, dass eine Unterscheidung zwischen `-0` und `+0` in Ihrem Code zutage tritt:

- [`-` (unäres Minus)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)

  - : Betrachten Sie das folgende Beispiel:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Wenn `obj.velocity` `0` ist (oder auf `0` berechnet wird), wird in dieser Position ein `-0` eingeführt und breitet sich nach draußen in `stoppingForce` aus.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In einigen Fällen ist es möglich, dass ein `-0` in einen Ausdruck als Rückgabewert dieser Methoden eingeführt wird, auch wenn kein `-0` als einer der Parameter existiert. Zum Beispiel: {{jsxref("Math.pow")}}, um {{jsxref("Infinity", "-Infinity")}} zur Potenz eines negativen, ungeraden Exponenten zu erheben, wird zu `-0` ausgewertet. Siehe die Dokumentation zu den einzelnen Methoden.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : Es ist möglich, einen `-0`-Rückgabewert aus diesen Methoden in einigen Fällen zu erhalten, in denen ein `-0` als einer der Parameter existiert. Z.B. `Math.min(-0, +0)` wird zu `-0` ausgewertet. Siehe die Dokumentation zu den einzelnen Methoden.
- [`~`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Jeder dieser Operatoren verwendet den ToInt32-Algorithmus intern. Da es nur eine Darstellung für 0 in der internen 32-Bit-Ganzzahltyp gibt, wird `-0` nach einer inversen Operation keine Rundreise überleben. Z.B. sowohl `Object.is(~~(-0), -0)` als auch `Object.is(-0 << 2 >> 2, -0)` werden zu `false` ausgewertet.

Sich auf {{jsxref("Object.is")}} zu verlassen, wenn das Vorzeichen von Null nicht berücksichtigt wird, kann gefährlich sein. Natürlich, wenn die Absicht darin besteht, zwischen `-0` und `+0` zu unterscheiden, tut es genau, was gewünscht ist.

### Hinweis: Object.is() und NaN

Die {{jsxref("Object.is")}}-Spezifikation behandelt alle Instanzen von {{jsxref("NaN")}} als dasselbe Objekt. Da jedoch [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) verfügbar sind, können wir unterschiedliche Gleitpunktdarstellungen von `NaN` haben, die sich nicht in allen Kontexten identisch verhalten. Zum Beispiel:

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
