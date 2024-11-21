---
title: Gleichheitsvergleiche und Ähnlichkeit
slug: Web/JavaScript/Equality_comparisons_and_sameness
l10n:
  sourceCommit: c75926b439f2c2a8228862b8afb99740429c2a7a
---

{{jsSidebar("Intermediate")}}

JavaScript bietet drei verschiedene Methoden zum Vergleich von Werten:

- [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) — strikte Gleichheit (dreifaches Gleichheitszeichen)
- [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) — lose Gleichheit (doppeltes Gleichheitszeichen)
- [`Object.is()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Welche Methode Sie wählen, hängt davon ab, welche Art von Vergleich Sie durchführen möchten. Kurz zusammengefasst:

- Doppelte Gleichheit (`==`) führt eine Typkonvertierung durch, wenn zwei Dinge verglichen werden, und behandelt `NaN`, `-0` und `+0` speziell, um IEEE 754 zu entsprechen (daher `NaN != NaN` und `-0 == +0`);
- Dreifache Gleichheit (`===`) führt denselben Vergleich wie doppelte Gleichheit durch (einschließlich der speziellen Behandlung von `NaN`, `-0` und `+0`), jedoch ohne Typkonvertierung; wenn die Typen unterschiedlich sind, wird `false` zurückgegeben.
- `Object.is()` macht keine Typkonvertierung und keine spezielle Behandlung für `NaN`, `-0` und `+0` (und verhält sich wie `===`, außer bei diesen speziellen numerischen Werten).

Sie entsprechen drei von vier Gleichheitsalgorithmen in JavaScript:

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): wird von vielen eingebauten Operationen verwendet

Beachten Sie, dass sich die Unterschiede bei der Behandlung von Primitiv-Typen ergeben; keiner von ihnen vergleicht, ob die Parameter konzeptionell ähnlich in ihrer Struktur sind. Für nicht-primitive Objekte `x` und `y`, die dieselbe Struktur haben, aber unterschiedliche Objekte sind, werden alle obigen Formen zu `false` evaluieren.

## Strikte Gleichheit mit ===

Strikte Gleichheit vergleicht zwei Werte auf Gleichheit. Keiner der Werte wird implizit in einen anderen Wert konvertiert, bevor er verglichen wird. Wenn die Werte unterschiedliche Typen haben, werden sie als ungleich angesehen. Wenn die Werte denselben Typ haben, keine Zahlen sind und denselben Wert haben, werden sie als gleich betrachtet. Wenn beide Werte Zahlen sind, gelten sie als gleich, wenn sie beide nicht `NaN` sind und denselben Wert haben, oder wenn eine `+0` und die andere `-0` ist.

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

Strikte Gleichheit ist fast immer die richtige Vergleichsoperation zu verwenden. Für alle Werte außer Zahlen verwendet sie die offensichtliche Semantik: Ein Wert ist nur gleich sich selbst. Bei Zahlen verwendet sie leicht differente Semantik, um zwei verschiedene Randfälle zu überdecken. Der erste ist, dass Gleitkommazahlen null entweder positiv oder negativ vorzeichenbehaftet sind. Das ist nützlich, um bestimmte mathematische Lösungen darzustellen, aber da die meisten Situationen nicht zwischen `+0` und `-0` unterscheiden, behandelt die strikte Gleichheit sie als denselben Wert. Der zweite ist, dass das Gleitkomma-Konzept einen Wert nicht-einer-Zahl, `NaN`, besitzt, um die Lösung bestimmter schlecht definierter mathematischer Probleme darzustellen: negativ Unendlichkeit hinzugefügt zu positiv Unendlichkeit, zum Beispiel. Strikte Gleichheit behandelt `NaN` als ungleich zu jedem anderen Wert — einschließlich sich selbst. (Der einzige Fall, in dem `(x !== x)` `true` ist, ist, wenn `x` `NaN` ist.)

Neben `===` wird die strikte Gleichheit auch von Methoden der Array-Indexsuche wie [`Array.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf), [`TypedArray.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf) und [`case`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Abgleich verwendet. Dies bedeutet, dass Sie nicht `indexOf(NaN)` verwenden können, um den Index eines `NaN` Wertes in einem Array zu finden, oder `NaN` als `case`-Wert in einer `switch`-Anweisung verwenden können, um es mit irgendetwas abzugleichen.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Nothing is logged
}
```

## Lose Gleichheit mit ==

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer dieselbe Bedeutung wie `B == A` für irgendeinen Wert von `A` und `B` (außer für die Reihenfolge der angewendeten Konversionen). Das Verhalten von losem Gleichheitsvergleich mittels `==` ist wie folgt:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: nur `true` zurückgeben, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: nur `true` zurückgeben, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Zahl: nur `true` zurückgeben, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, `false` zurückgeben; daher ist `NaN` niemals gleich `NaN`.
   - Boolean: nur `true` zurückgeben, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: nur `true` zurückgeben, wenn beide Operanden denselben Wert haben.
   - Symbol: nur `true` zurückgeben, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Anderenfalls, `false` zurückgeben.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Wert ist, [das Objekt in einen primitiven Wert konvertieren](/de/docs/Web/JavaScript/Data_structures#primitive_coercion).
4. An dieser Stelle werden beide Operanden in primitive Werte (einer von String, Number, Boolean, Symbol und BigInt) konvertiert. Der Rest der Konvertierung erfolgt fallweise.
   - Wenn sie denselben Typ haben, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, geben Sie `false` zurück.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [den Boolean in eine Zahl umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 konvertiert und `false` in 0. Vergleichen Sie dann die beiden Operanden erneut lose.
   - Zahl in String: [den String in eine Zahl umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Konvertierungsfehler resultiert in `NaN`, was garantiert, dass die Gleichheit `false` ist.
   - Zahl in BigInt: nach ihrem mathematischen Wert vergleichen. Wenn die Zahl ±Infinity oder `NaN` ist, `false` zurückgeben.
   - String in BigInt: den String mit demselben Algorithmus wie dem [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor in einen BigInt umwandeln. Wenn die Konvertierung fehlschlägt, `false` zurückgeben.

Traditionell und gemäß ECMAScript sind alle Primitiven und Objekte lose ungleich `undefined` und `null`. Aber die meisten Browser erlauben eine sehr eingeschränkte Klasse von Objekten (genauer gesagt, das `document.all`-Objekt für jede Seite), in einigen Kontexten, sich so verhalten, als ob sie den Wert `undefined` _imitieren_. Lose Gleichheit ist ein solcher Kontext: `null == A` und `undefined == A` verhalten sich lediglich dann wahr, wenn, und nur, wenn, A ein Objekt ist, das `undefined` imitiert. In allen anderen Fällen ist ein Objekt niemals lose gleich `undefined` oder `null`.

In den meisten Fällen wird die Verwendung von loser Gleichheit nicht empfohlen. Das Ergebnis eines Vergleichs mit strikter Gleichheit ist leichter vorherzusagen und kann aufgrund der fehlenden Typkonversion schneller ausgewertet werden.

Das folgende Beispiel demonstriert lose Gleichheitsvergleiche mit dem Zahlenprimiv `0`, dem BigInt-Primiv `0n`, der Zeichenfolge `'0'` und einem Objekt, dessen `toString()`-Wert `'0'` ist.

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

## Gleichheit des gleichen Wertes mit Object.is()

Die Gleichheit des gleichen Wertes bestimmt, ob zwei Werte in allen Kontexten _funktional identisch_ sind. (Dieser Anwendungsfall zeigt ein Beispiel des [Liskovschen Substitutionsprinzips](https://en.wikipedia.org/wiki/Liskov_substitution_principle).) Ein Fall tritt auf, wenn versucht wird, eine unveränderbare Eigenschaft zu ändern:

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

`Object.defineProperty` wird eine Ausnahme auslösen, wenn versucht wird, eine unveränderbare Eigenschaft zu ändern, aber nichts tun, wenn keine tatsächliche Änderung angefordert wird. Wenn `v` `-0` ist, wurde keine Änderung angefordert, und es wird kein Fehler ausgelöst. Intern wird, wenn eine unveränderbare Eigenschaft neu definiert wird, der neu angegebene Wert gegen den aktuellen Wert mit Gleichheit des gleichen Wertes verglichen.

Die Gleichheit des gleichen Wertes wird durch die {{jsxref("Object.is")}}-Methode bereitgestellt. Sie wird fast überall in der Sprache verwendet, wo ein Wert von gleichwertiger Identität erwartet wird.

## Gleichheit des gleichen Wertes null

Ähnlich wie bei der Gleichheit des gleichen Wertes werden +0 und -0 als gleich angesehen.

Die Gleichheit des gleichen Wertes null wird nicht als JavaScript-API bereitgestellt, kann aber mit benutzerdefiniertem Code implementiert werden:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

Die Gleichheit des gleichen Wertes null unterscheidet sich nur von der strikten Gleichheit, indem sie `NaN` als gleichwertig behandelt und sich nur von der Gleichheit des gleichen Wertes unterscheidet, indem `-0` als gleichwertig zu `0` behandelt wird. Dies führt dazu, dass sie normalerweise das sinnvollste Verhalten beim Suchen aufweist, insbesondere bei der Arbeit mit `NaN`. Sie wird von [`Array.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) sowie von Methoden in [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) zur Überprüfung der Schlüssgleichheit verwendet.

## Vergleich von Gleichheitsmethoden

Menschen vergleichen oft doppeltes und dreifaches Gleichheitszeichen, indem sie sagen, dass eines eine "verbesserte" Version des anderen ist. Zum Beispiel könnte man sagen, dass das doppelte Gleichheitszeichen eine erweiterte Version des dreifachen Gleichheitszeichens ist, da das erstere alles tut, was das letztere tut, jedoch mit Typkonversion an seinen Operanden — Beispielsweise `6 == "6"`. Alternativ könnte man behaupten, dass das doppelte Gleichheitszeichen die Grundlage ist und das dreifache Gleichheitszeichen eine verbesserte Version ist, weil es erfordert, dass die beiden Operanden denselben Typ haben und somit eine zusätzliche Einschränkung hinzufügt.

Diese Denkweise impliziert jedoch, dass die Gleichheitsvergleiche ein eindimensionales "Spektrum" bilden, bei dem "völlig strikt" an einem Ende und "völlig lose" am anderen liegt. Dieses Modell weist bei {{jsxref("Object.is")}} Mängel auf, da es weder "loser" als doppeltes Gleichheitszeichen noch "strikter" als dreifaches Gleichheitszeichen ist und auch nicht irgendwo dazwischenliegt (d. h., es ist sowohl strikter als doppeltes Gleichheitszeichen als auch loser als dreifaches Gleichheitszeichen). Wir können aus der Tabelle der Vergleichswerte unten sehen, dass dies an der Weise liegt, wie {{jsxref("Object.is")}} mit {{jsxref("NaN")}} umgeht. Beachten Sie, dass, wenn `Object.is(NaN, NaN)` `false` evaluiert, wir sagen könnten, dass es auf dem lose/strikt Spektrum als noch strengere Form des dreifachen Gleichheitszeichens passt, eine, die zwischen `-0` und `+0` unterscheidet. Die Behandlung von {{jsxref("NaN")}} bedeutet jedoch, dass dies nicht der Fall ist. Leider muss {{jsxref("Object.is")}} in Bezug auf seine spezifischen Eigenschaften betrachtet werden, anstatt in Bezug auf seine Losigkeit oder Striktheit gegenüber den Gleichheitsoperatoren.

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

### Wann verwendet man Object.is() versus dreifaches Gleichheitszeichen

Im Allgemeinen wird das spezielle Verhalten von {{jsxref("Object.is")}} in Bezug auf Nullstellen wahrscheinlich nur von Interesse sein, wenn Sie bestimmte Metaprogrammierungsstrategien verfolgen, insbesondere hinsichtlich Eigenschaftsdeskriptoren, wenn es wünschenswert ist, dass Ihre Arbeit einige der Eigenschaften von {{jsxref("Object.defineProperty")}} widerspiegelt. Wenn Ihr Anwendungsfall dies nicht erfordert, wird empfohlen, {{jsxref("Object.is")}} zu vermeiden und stattdessen [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu verwenden. Selbst wenn Ihre Anforderungen haben, dass Vergleiche zwischen zwei {{jsxref("NaN")}}-Werten zu `true` auswerten, ist es im Allgemeinen einfacher, die {{jsxref("NaN")}}-Prüfungen (mit der {{jsxref("isNaN")}}-Methode, die in früheren Versionen des ECMAScript verfügbar sind) speziell zu behandeln, als zu ermitteln, wie sich umgebende Berechnungen auf das Vorzeichen der Nullen auswirken könnten, die Sie in Ihrem Vergleich antreffen.

Hier ist eine nicht erschöpfende Liste von eingebauten Methoden und Operatoren, die eine Unterscheidung zwischen `-0` und `+0` in Ihrem Code bewirken können:

- [`-` (unäre Negation)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)

  - : Betrachten Sie folgendes Beispiel:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Wenn `obj.velocity` `0` ist (oder zu `0` gerechnet wird), wird an dieser Stelle ein `-0` eingeführt und breitet sich in `stoppingForce` aus.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In einigen Fällen kann ein `-0` in einen Ausdruck als Rückgabewert dieser Methoden eingeführt werden, selbst wenn kein `-0` als einer der Parameter existiert. Beispielsweise ergibt die Verwendung von {{jsxref("Math.pow")}} zur Potenzierung von {{jsxref("Infinity", "-Infinity")}} mit einem negativen ungeraden Exponenten `-0`. Siehe die Dokumentation zu den einzelnen Methoden.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : Es ist möglich, einen `-0`-Rückgabewert aus diesen Methoden in einigen Fällen zu erhalten, wenn `-0` als einer der Parameter existiert. Beispielsweise ergibt `Math.min(-0, +0)` `-0`. Siehe die Dokumentation zu den einzelnen Methoden.
- [`~`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Jeder dieser Operatoren verwendet den ToInt32-Algorithmus intern. Da es nur eine Darstellung für 0 im internen 32-Bit-Ganzzahltyp gibt, überlebt `-0` keine Rundreise nach einer inversen Operation. Beispielsweise evaluieren sowohl `Object.is(~~(-0), -0)` als auch `Object.is(-0 << 2 >> 2, -0)` zu `false`.

Sich auf {{jsxref("Object.is")}} zu verlassen, wenn die Vorzeichen der Nullen nicht berücksichtigt werden, kann gefährlich sein. Natürlich, wenn die Absicht ist, zwischen `-0` und `+0` zu unterscheiden, macht es genau das, was gewünscht wird.

### Hinweis: Object.is() und NaN

Die {{jsxref("Object.is")}}-Spezifikation behandelt alle Instanzen von {{jsxref("NaN")}} als dasselbe Objekt. Da jedoch [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) verfügbar sind, können wir unterschiedliche Gleitkommadarstellungen von `NaN` haben, die sich in allen Kontexten nicht identisch verhalten. Zum Beispiel:

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
