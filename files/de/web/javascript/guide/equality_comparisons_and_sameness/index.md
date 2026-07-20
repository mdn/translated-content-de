---
title: Gleichheitsvergleiche und Sameness
slug: Web/JavaScript/Guide/Equality_comparisons_and_sameness
l10n:
  sourceCommit: 188029af4111e0adc8e577c4727cc70c38844b85
---

JavaScript bietet drei verschiedene Wertvergleichsoperationen:

- [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) — strikte Gleichheit (dreifach gleich)
- [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) — lose Gleichheit (doppelt gleich)
- [`Object.is()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Welche Operation Sie wählen, hängt davon ab, welche Art von Vergleich Sie durchführen möchten. Kurz gesagt:

- Doppeltes Gleich (`==`) führt eine Typumwandlung durch, wenn zwei Dinge verglichen werden, und behandelt `NaN`, `-0` und `+0` speziell, um dem IEEE 754-Standard zu entsprechen (also `NaN != NaN` und `-0 == +0`);
- Dreifaches Gleich (`===`) führt denselben Vergleich wie doppelt gleich (einschließlich der speziellen Behandlung von `NaN`, `-0` und `+0`) durch, jedoch ohne Typumwandlung; wenn die Typen unterschiedlich sind, wird `false` zurückgegeben.
- `Object.is()` führt keine Typumwandlung und keine spezielle Behandlung für `NaN`, `-0` und `+0` durch (es hat das gleiche Verhalten wie `===` außer bei diesen speziellen numerischen Werten).

Sie entsprechen drei von vier Gleichheitsalgorithmen in JavaScript:

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): verwendet von vielen integrierten Operationen

Beachten Sie, dass der Unterschied zwischen diesen mit der Behandlung von Primitive zusammenhängt; keiner von ihnen vergleicht, ob die Parameter strukturell ähnlich sind. Für alle nicht-primitiven Objekte `x` und `y`, die dieselbe Struktur haben, aber unterschiedliche Objekte sind, werden alle obigen Formen als `false` ausgewertet.

## Strikte Gleichheit mit ===

Strikte Gleichheit vergleicht zwei Werte auf Gleichheit. Kein Wert wird implizit in einen anderen Wert umgewandelt, bevor er verglichen wird. Haben die Werte unterschiedliche Typen, werden sie als ungleich betrachtet. Haben die Werte denselben Typ, sind keine Nummern und haben denselben Wert, werden sie als gleich betrachtet. Schließlich, wenn beide Werte Nummern sind, werden sie als gleich betrachtet, wenn sie beide nicht `NaN` sind und denselben Wert haben, oder wenn einer `+0` und einer `-0` ist.

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

Strikte Gleichheit ist fast immer die korrekte Vergleichsoperation. Für alle Werte außer Nummern verwendet sie die offensichtlichen Semantiken: Ein Wert ist nur gleich sich selbst. Bei Nummern verwendet sie leicht unterschiedliche Semantiken, um zwei verschiedene Randfälle zu glätten. Der erste ist, dass Gleitkommazahlen entweder positiv oder negativ signiert sind. Dies ist nützlich zur Darstellung bestimmter mathematischer Lösungen, aber da die meisten Situationen den Unterschied zwischen `+0` und `-0` nicht berücksichtigen, behandelt strikte Gleichheit sie als denselben Wert. Der zweite ist, dass Gleitkomma das Konzept eines nicht-zahlenmäßigen Wertes, `NaN`, enthält, um die Lösung bestimmter schlecht definierter mathematischer Probleme darzustellen: zum Beispiel negative Unendlichkeit, die zu positiver Unendlichkeit addiert wird. Strikte Gleichheit behandelt `NaN` als ungleich zu jedem anderen Wert — einschließlich sich selbst. (Der einzige Fall, in dem `(x !== x)` `true` ist, ist, wenn `x` `NaN` ist.)

Neben `===` wird strikte Gleichheit auch von Array-Indizierungs-Methoden wie [`Array.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf), [`TypedArray.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf) und [`case`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Übereinstimmungen verwendet. Das bedeutet, Sie können `indexOf(NaN)` nicht verwenden, um den Index eines `NaN`-Wertes in einem Array zu finden, oder `NaN` als `case`-Wert in einer `switch`-Anweisung verwenden, um etwas zu treffen.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Nothing is logged
}
```

## Lose Gleichheit mit ==

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer identische Semantiken wie `B == A` für beliebige Werte von `A` und `B` (außer für die Reihenfolge der angewandten Konvertierungen). Das Verhalten bei der Durchführung von loser Gleichheit mit `==` ist wie folgt:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: Rückgabe von `true` nur, wenn beide Operanden dasselbe Objekt referenzieren.
   - String: Rückgabe von `true` nur, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Nummer: Rückgabe von `true` nur, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, Rückgabe von `false`; also ist `NaN` niemals gleich `NaN`.
   - Boolean: Rückgabe von `true` nur, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: Rückgabe von `true` nur, wenn beide Operanden denselben Wert haben.
   - Symbol: Rückgabe von `true` nur, wenn beide Operanden dasselbe Symbol referenzieren.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls Rückgabe von `false`.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Wert ist, [konvertieren Sie das Objekt in einen primitiven Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. In diesem Schritt werden beide Operanden in Primitiven (einer von String, Nummer, Boolean, Symbol und BigInt) konvertiert. Der Rest der Konvertierung erfolgt fallweise.
   - Wenn sie vom gleichen Typ sind, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, geben Sie `false` zurück.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [konvertieren Sie den Boolean in eine Nummer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 und `false` in 0 konvertiert. Vergleichen Sie dann die beiden Operanden erneut lose.
   - Nummer zu String: [konvertieren Sie die Zeichenkette in eine Nummer](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Konvertierungsfehler führen zu `NaN`, was garantiert, dass die Gleichheit `false` ist.
   - Nummer zu BigInt: Vergleichen Sie anhand ihres mathematischen Werts. Wenn die Zahl ±Unendlichkeit oder `NaN` ist, geben Sie `false` zurück.
   - String zu BigInt: Konvertieren Sie die Zeichenkette in einen BigInt mithilfe desselben Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor. Wenn die Konvertierung fehlschlägt, geben Sie `false` zurück.

Traditionell und gemäß ECMAScript sind alle Primitive und Objekte lose ungleich zu `undefined` und `null`. Aber die meisten Browser erlauben eine sehr enge Klasse von Objekten (insbesondere das `document.all`-Objekt für jede Seite), in einigen Kontexten so zu handeln, als _emulieren_ sie den Wert `undefined`. Lose Gleichheit ist ein solcher Kontext: `null == A` und `undefined == A` werten zu true aus, wenn und nur wenn A ein Objekt ist, das _undefined_ emuliert. In allen anderen Fällen ist ein Objekt nie lose gleich `undefined` oder `null`.

In den meisten Fällen wird von der Verwendung loser Gleichheit abgeraten. Das Ergebnis eines Vergleichs mit strikter Gleichheit ist leichter vorherzusagen und kann aufgrund des Fehlens von Typumwandlung schneller ausgewertet werden.

Das folgende Beispiel zeigt Vergleichsoperationen mit loser Gleichheit, die den primitiv nummerischen Wert `0`, den bigint primitiv Wert `0n`, den String primitiv Wert `'0'` und ein Objekt betreffen, dessen `toString()`-Wert `'0'` ist.

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

## Gleichheit auf gleiche Werte mit Object.is()

Gleichheit auf gleiche Werte bestimmt, ob zwei Werte in allen Kontexten _funktional identisch_ sind. (Dieser Anwendungsfall zeigt ein Beispiel des [Liskovschen Substitutionsprinzips](https://en.wikipedia.org/wiki/Liskov_substitution_principle).) Eine Instanz tritt auf, wenn versucht wird, eine unveränderliche Eigenschaft zu mutieren:

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

`Object.defineProperty` wird eine Ausnahme auslösen, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern, es passiert jedoch nichts, wenn keine tatsächliche Änderung angefordert wird. Wenn `v` `-0` ist, wurde keine Änderung angefordert, und es wird kein Fehler ausgelöst. Intern wird beim erneuten Definieren einer unveränderlichen Eigenschaft der neu angegebene Wert mit dem aktuellen Wert unter Verwendung von Gleichheit auf gleiche Werte verglichen.

Gleichheit auf gleiche Werte wird von der {{jsxref("Object.is")}}-Methode bereitgestellt. Sie wird fast überall in der Sprache verwendet, wo ein Wert gleicher Identität erwartet wird.

## Gleichheit auf gleiche Werte Null

Ähnlich wie die Gleichheit auf gleiche Werte, aber +0 und -0 werden als gleich angesehen.

Das Gleichheits-Zero auf gleiche Werte wird nicht als JavaScript-API bereitgestellt, kann jedoch mit benutzerdefiniertem Code implementiert werden:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

Gleichheit auf gleiche Werte Null unterscheidet sich nur von strenger Gleichheit, indem `NaN` als gleichwertig behandelt wird, und unterscheidet sich nur von Gleichheit auf gleiche Werte, indem `-0` als gleichwertig zu `0` behandelt wird. Dies führt dazu, dass es normalerweise das vernünftigste Verhalten beim Suchen hat, insbesondere bei der Arbeit mit `NaN`. Es wird von [`Array.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) sowie [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Methoden zur Schlüsselgleichheitsprüfung verwendet.

## Vergleich der Gleichheitsmethoden

Man vergleicht oft doppelte Gleichheit und dreifache Gleichheit und sagt, eine sei eine "verbesserte" Version der anderen. Zum Beispiel kann gesagt werden, dass doppelte Gleichheit eine erweiterte Version der dreifachen Gleichheit ist, da der Erstere alles tut, was der Letztere tut, jedoch mit Typumwandlung seiner Operanden — zum Beispiel `6 == "6"`. Alternativ kann behauptet werden, dass doppelte Gleichheit die Basislinie ist und die dreifache Gleichheit eine verbesserte Version, da sie erfordert, dass beide Operanden vom gleichen Typ sind, sodass sie eine zusätzliche Einschränkung hinzufügt.

Wie auch immer, diese Denkweise impliziert, dass die Gleichheitsvergleiche ein eindimensionales "Spektrum" bilden, bei dem "völlig strikt" am einen Ende und "völlig lose" am anderen liegt. Dieses Modell versagt bei {{jsxref("Object.is")}}, weil es nicht "loser" als doppelte Gleichheit oder "strenger" als dreifache Gleichheit ist, noch passt es irgendwo dazwischen (d.h. es ist sowohl strenger als doppelte Gleichheit, aber loser als dreifache Gleichheit). Aus der nachstehenden Sameness-Vergleichstabelle können wir erkennen, dass dies auf die Art und Weise zurückzuführen ist, wie {{jsxref("Object.is")}} mit {{jsxref("NaN")}} umgeht. Beachten Sie, dass, wenn `Object.is(NaN, NaN)` zu `false` ausgewertet würde, wir _könnten_ sagen, dass es ins lose/strikte Spektrum als eine noch strengere Form der dreifachen Gleichheit passt, eine, die zwischen `-0` und `+0` unterscheidet. Die {{jsxref("NaN")}}-Behandlung bedeutet jedoch, dass dies nicht zutrifft. Leider muss {{jsxref("Object.is")}} in Bezug auf seine spezifischen Merkmale und nicht in Bezug auf seine Lockerheit oder Striktheit in Bezug auf die Gleichheitsoperatoren betrachtet werden.

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

### Wann man Object.is() statt dreifachem Gleich verwenden sollte

Im Allgemeinen ist die einzige Zeit, in der das spezielle Verhalten von {{jsxref("Object.is")}} in Bezug auf Nullen von Interesse sein könnte, in der Verfolgung bestimmter Metaprogrammierschemata, insbesondere bezüglich Eigenschaftsbeschreibungen, wenn es wünschenswert ist, dass Ihre Arbeit einige der Merkmale von {{jsxref("Object.defineProperty")}} widerspiegelt. Wenn Ihr Anwendungsfall dies nicht erfordert, wird empfohlen, {{jsxref("Object.is")}} zu vermeiden und stattdessen [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu verwenden. Auch wenn Ihr Bedarf es erfordert, dass Vergleiche zwischen zwei {{jsxref("NaN")}}-Werten `true` ergeben, ist es allgemein einfacher, die {{jsxref("NaN")}}-Überprüfung (mithilfe der {{jsxref("isNaN")}}-Methode, die in früheren ECMAScript-Versionen verfügbar ist) speziell zu behandeln, als herauszufinden, wie umgebende Berechnungen das Vorzeichen von Nullen, die Sie in Ihrem Vergleich antreffen, beeinflussen könnten.

Hier ist eine nicht abschließende Liste von eingebauten Methoden und Operatoren, die möglicherweise eine Unterscheidung zwischen `-0` und `+0` in Ihrem Code hervorrufen können:

- [`-` (binäres Minus)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
  - : Betrachten Sie das folgende Beispiel:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Wenn `obj.velocity` `0` ist (oder zu `0` berechnet wird), wird an dieser Stelle ein `-0` eingeführt und breitet sich auf `stoppingForce` aus.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In einigen Fällen kann ein `-0` als Rückgabewert dieser Methoden in einen Ausdruck eingeführt werden, selbst wenn kein `-0` als einer der Parameter existiert. Beispielsweise ergibt die Verwendung von {{jsxref("Math.pow")}}, um {{jsxref("Infinity", "-Infinity")}} zur Potenz eines beliebigen negativen ungeraden Exponenten zu erheben, `-0`. Siehe die Dokumentation für die einzelnen Methoden.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : Es ist möglich, einen `-0`-Rückgabewert aus diesen Methoden in einigen Fällen zu erhalten, in denen ein `-0` als einer der Parameter existiert. Z.B. ergibt `Math.min(-0, +0)` `-0`. Siehe die Dokumentation für die einzelnen Methoden.
- [`~`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Jeder dieser Operatoren verwendet intern den ToInt32-Algorithmus. Da es bei der internen 32-Bit-Ganzzahltyp nur eine Darstellung für 0 gibt, überlebt `-0` keinen Rückwärtstransfer nach einer inversen Operation. Z.B. ergeben sowohl `Object.is(~~(-0), -0)` als auch `Object.is(-0 << 2 >> 2, -0)` `false`.

Auf {{jsxref("Object.is")}} zu vertrauen, wenn das Vorzeichen von Nullen nicht berücksichtigt wird, kann riskant sein. Natürlich tut es genau das, was gewünscht ist, wenn beabsichtigt ist, zwischen `-0` und `+0` zu unterscheiden.

### Hinweis: Object.is() und NaN

Die Spezifikation von {{jsxref("Object.is")}} behandelt alle Instanzen von {{jsxref("NaN")}} als dasselbe Objekt. Seitdem [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) verfügbar sind, können wir jedoch unterschiedliche Gleitpunktdarstellungen von `NaN` haben, die sich nicht in allen Kontexten identisch verhalten. Zum Beispiel:

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
> Implementierungen dürfen die Bit-Darstellung von `NaN` kanonisieren, sodass `nan2`, wenn zurück in Gleitpunkt konvertiert, dieselbe Bit-Darstellung wie das ursprüngliche `NaN` haben kann.

## Siehe auch

- [JS-Vergleichstabelle](https://dorey.github.io/JavaScript-Equality-Table/) von [dorey](https://github.com/dorey)
