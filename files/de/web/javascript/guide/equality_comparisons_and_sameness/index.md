---
title: Gleichheitsvergleiche und Identität
slug: Web/JavaScript/Guide/Equality_comparisons_and_sameness
l10n:
  sourceCommit: 84c1f600dc47776ef8cf4ba6012116ca8b6d17b9
---

JavaScript bietet drei verschiedene Operationen zum Vergleichen von Werten:

- [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) — strikte Gleichheit (drei Gleichheitszeichen)
- [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) — lose Gleichheit (zwei Gleichheitszeichen)
- [`Object.is()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Welche Operation Sie wählen, hängt davon ab, welche Art von Vergleich Sie durchführen möchten. Kurz gesagt:

- Zwei Gleichheitszeichen (`==`) führen beim Vergleich zweier Dinge eine Typkonvertierung durch und behandeln `NaN`, `-0` und `+0` gemäß IEEE 754 speziell (sodass `NaN != NaN` und `-0 == +0` gilt);
- Drei Gleichheitszeichen (`===`) führen denselben Vergleich wie zwei Gleichheitszeichen durch (einschließlich der speziellen Behandlung von `NaN`, `-0` und `+0`), jedoch ohne Typkonvertierung; wenn die Typen unterschiedlich sind, wird `false` zurückgegeben.
- `Object.is()` führt weder eine Typkonvertierung noch eine spezielle Behandlung von `NaN`, `-0` und `+0` durch (wodurch es dasselbe Verhalten wie `===` aufweist, außer bei diesen speziellen numerischen Werten).

Sie entsprechen drei von vier Gleichheitsalgorithmen in JavaScript:

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): wird von vielen eingebauten Operationen verwendet

Beachten Sie, dass sich die Unterschiede zwischen diesen ausschließlich auf ihre Behandlung von Primitiven beziehen; keine von ihnen vergleicht, ob die Parameter strukturell konzeptionell ähnlich sind. Für beliebige nicht primitive Objekte `x` und `y`, die dieselbe Struktur haben, aber selbst unterschiedliche Objekte sind, werden alle oben genannten Formen zu `false` ausgewertet.

Das rekursive Vergleichen der Inhalte unterschiedlicher Objekte oder Arrays wird als {{Glossary("deep_equality", "tiefe Gleichheit")}} bezeichnet. JavaScript stellt keinen allgemeinen Operator für tiefe Vergleiche bereit; Bibliotheken und Host-APIs können Vergleichsdienstprogramme mit unterschiedlichen Regeln bereitstellen.

## Strikte Gleichheit mit ===

Strikte Gleichheit vergleicht zwei Werte auf Gleichheit. Keiner der Werte wird vor dem Vergleich implizit in einen anderen Wert konvertiert. Wenn die Werte unterschiedliche Typen haben, gelten sie als ungleich. Wenn die Werte denselben Typ haben, keine Zahlen sind und denselben Wert haben, gelten sie als gleich. Wenn schließlich beide Werte Zahlen sind, gelten sie als gleich, wenn beide nicht `NaN` sind und denselben Wert haben oder wenn einer `+0` und der andere `-0` ist.

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

Strikte Gleichheit ist fast immer die richtige Vergleichsoperation. Für alle Werte außer Zahlen verwendet sie die offensichtliche Semantik: Ein Wert ist nur sich selbst gleich. Für Zahlen verwendet sie eine leicht abweichende Semantik, um zwei unterschiedliche Sonderfälle zu übergehen. Der erste besteht darin, dass Fließkomma-Null entweder positiv oder negativ vorzeichenbehaftet ist. Dies ist bei der Darstellung bestimmter mathematischer Lösungen nützlich, doch da die meisten Situationen den Unterschied zwischen `+0` und `-0` nicht berücksichtigen, behandelt strikte Gleichheit sie als denselben Wert. Der zweite besteht darin, dass Fließkommazahlen das Konzept eines Nicht-Zahlen-Werts, `NaN`, enthalten, um die Lösung bestimmter nicht wohldefinierter mathematischer Probleme darzustellen: beispielsweise negative Unendlichkeit plus positive Unendlichkeit. Strikte Gleichheit behandelt `NaN` als ungleich zu jedem anderen Wert — einschließlich sich selbst. (Der einzige Fall, in dem `(x !== x)` den Wert `true` hat, ist, wenn `x` `NaN` ist.)

Neben `===` wird strikte Gleichheit auch von Methoden zum Finden von Array-Indizes verwendet, darunter [`Array.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf), [`TypedArray.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf) und dem Abgleich von [`case`](/de/docs/Web/JavaScript/Reference/Statements/switch). Das bedeutet, dass Sie `indexOf(NaN)` nicht verwenden können, um den Index eines `NaN`-Werts in einem Array zu finden, oder `NaN` als `case`-Wert in einer `switch`-Anweisung verwenden können, damit es mit irgendeinem Wert übereinstimmt.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Nothing is logged
}
```

## Lose Gleichheit mit ==

Lose Gleichheit ist _symmetrisch_: `A == B` hat für beliebige Werte von `A` und `B` immer dieselbe Semantik wie `B == A` (abgesehen von der Reihenfolge der angewendeten Konvertierungen). Das Verhalten beim Durchführen loser Gleichheit mit `==` ist wie folgt:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Object: Gibt nur dann `true` zurück, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: Gibt nur dann `true` zurück, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Number: Gibt nur dann `true` zurück, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben; daher ist `NaN` niemals gleich `NaN`.
   - Boolean: Gibt nur dann `true` zurück, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: Gibt nur dann `true` zurück, wenn beide Operanden denselben Wert haben.
   - Symbol: Gibt nur dann `true` zurück, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss auch der andere `null` oder `undefined` sein, damit `true` zurückgegeben wird. Andernfalls wird `false` zurückgegeben.
3. Wenn einer der Operanden ein Objekt und der andere ein Primitiv ist, [konvertieren Sie das Objekt in ein Primitiv](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. In diesem Schritt werden beide Operanden in Primitive konvertiert (eines von String, Number, Boolean, Symbol und BigInt). Der Rest der Konvertierung erfolgt von Fall zu Fall.
   - Wenn sie denselben Typ haben, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, wird `false` zurückgegeben.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [konvertieren Sie den Boolean in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 und `false` in 0 konvertiert. Vergleichen Sie die beiden Operanden dann erneut lose.
   - Number zu String: [Konvertieren Sie den String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Konvertierungsfehler führt zu `NaN`, wodurch die Gleichheit garantiert `false` ist.
   - Number zu BigInt: Vergleichen Sie sie anhand ihres mathematischen Werts. Wenn die Zahl ±Infinity oder `NaN` ist, wird `false` zurückgegeben.
   - String zu BigInt: Konvertieren Sie den String mithilfe desselben Algorithmus wie der Konstruktor [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) in einen BigInt. Wenn die Konvertierung fehlschlägt, wird `false` zurückgegeben.

Traditionell und gemäß ECMAScript sind alle Primitive und Objekte lose ungleich zu `undefined` und `null`. Die meisten Browser erlauben jedoch, dass eine sehr eng begrenzte Klasse von Objekten (insbesondere das `document.all`-Objekt für jede Seite) in einigen Kontexten so agiert, als würde sie den Wert `undefined` _emulieren_. Lose Gleichheit ist ein solcher Kontext: `null == A` und `undefined == A` werden genau dann zu true ausgewertet, wenn A ein Objekt ist, das `undefined` _emuliert_. In allen anderen Fällen ist ein Objekt niemals lose gleich `undefined` oder `null`.

In den meisten Fällen wird von der Verwendung loser Gleichheit abgeraten. Das Ergebnis eines Vergleichs mit strikter Gleichheit ist leichter vorhersehbar und kann aufgrund fehlender Typkoerzierung schneller ausgewertet werden.

Das folgende Beispiel demonstriert lose Gleichheitsvergleiche mit dem Number-Primitiv `0`, dem BigInt-Primitiv `0n`, dem String-Primitiv `'0'` und einem Objekt, dessen `toString()`-Wert `'0'` ist.

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

Lose Gleichheit wird nur vom Operator `==` verwendet.

## Same-Value-Gleichheit mit Object.is()

Same-Value-Gleichheit bestimmt, ob zwei Werte in allen Kontexten _funktional identisch_ sind. (Dieser Anwendungsfall demonstriert eine Instanz des [Liskovschen Substitutionsprinzips](https://en.wikipedia.org/wiki/Liskov_substitution_principle).) Ein Beispiel tritt auf, wenn versucht wird, eine unveränderliche Eigenschaft zu mutieren:

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

`Object.defineProperty` löst beim Versuch, eine unveränderliche Eigenschaft zu ändern, eine Ausnahme aus, unternimmt jedoch nichts, wenn keine tatsächliche Änderung angefordert wird. Wenn `v` `-0` ist, wurde keine Änderung angefordert und es wird kein Fehler ausgelöst. Intern wird beim erneuten Definieren einer unveränderlichen Eigenschaft der neu angegebene Wert mittels Same-Value-Gleichheit mit dem aktuellen Wert verglichen.

Same-Value-Gleichheit wird durch die Methode {{jsxref("Object.is")}} bereitgestellt. Sie wird fast überall in der Sprache verwendet, wo ein Wert mit äquivalenter Identität erwartet wird.

## Same-Value-Zero-Gleichheit

Ähnlich wie Same-Value-Gleichheit, jedoch werden +0 und -0 als gleich betrachtet.

Same-Value-Zero-Gleichheit wird nicht als JavaScript-API bereitgestellt, kann jedoch mit benutzerdefiniertem Code implementiert werden:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

Same-Value-Zero unterscheidet sich von strikter Gleichheit nur dadurch, dass `NaN` als äquivalent behandelt wird, und von Same-Value-Gleichheit nur dadurch, dass `-0` als äquivalent zu `0` behandelt wird. Dadurch weist sie beim Suchen meist das sinnvollste Verhalten auf, insbesondere bei der Arbeit mit `NaN`. Sie wird von [`Array.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) sowie von Methoden von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) zum Vergleichen der Gleichheit von Schlüsseln verwendet.

## Gleichheitsmethoden vergleichen

Oft werden zwei und drei Gleichheitszeichen verglichen, indem behauptet wird, eines sei eine „erweiterte“ Version des anderen. Beispielsweise könnte man sagen, zwei Gleichheitszeichen seien eine erweiterte Version von drei Gleichheitszeichen, weil erstere alles tun, was letztere tun, jedoch mit Typkonvertierung ihrer Operanden — zum Beispiel `6 == "6"`. Alternativ kann behauptet werden, zwei Gleichheitszeichen seien die Grundlage und drei Gleichheitszeichen eine erweiterte Version, weil sie verlangen, dass die beiden Operanden denselben Typ haben, und somit eine zusätzliche Einschränkung hinzufügen.

Diese Denkweise impliziert jedoch, dass die Gleichheitsvergleiche ein eindimensionales „Spektrum“ bilden, bei dem „vollständig strikt“ an einem Ende und „vollständig lose“ am anderen Ende liegt. Dieses Modell reicht für {{jsxref("Object.is")}} nicht aus, weil es weder „loser“ als zwei Gleichheitszeichen noch „strikter“ als drei Gleichheitszeichen ist und auch nicht irgendwo dazwischen liegt (also sowohl strikter als zwei Gleichheitszeichen als auch loser als drei Gleichheitszeichen). Aus der folgenden Tabelle mit Identitätsvergleichen können wir erkennen, dass dies auf die Art und Weise zurückzuführen ist, wie {{jsxref("Object.is")}} {{jsxref("NaN")}} behandelt. Beachten Sie, dass wir, falls `Object.is(NaN, NaN)` zu `false` ausgewertet würde, _sagen könnten_, dass es als eine noch strengere Form von drei Gleichheitszeichen in das lose/strikte Spektrum passt, eine Form, die zwischen `-0` und `+0` unterscheidet. Die Behandlung von {{jsxref("NaN")}} bedeutet jedoch, dass dies nicht zutrifft. Leider muss {{jsxref("Object.is")}} anhand seiner spezifischen Eigenschaften betrachtet werden, statt anhand seiner Losheit oder Striktheit in Bezug auf die Gleichheitsoperatoren.

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

### Wann sollte Object.is() anstelle von drei Gleichheitszeichen verwendet werden?

Im Allgemeinen ist das spezielle Verhalten von {{jsxref("Object.is")}} gegenüber Nullen wahrscheinlich nur bei bestimmten Metaprogrammierungsschemata von Interesse, insbesondere in Bezug auf Property-Deskriptoren, wenn Ihre Arbeit einige der Eigenschaften von {{jsxref("Object.defineProperty")}} widerspiegeln soll. Wenn Ihr Anwendungsfall dies nicht erfordert, wird empfohlen, {{jsxref("Object.is")}} zu vermeiden und stattdessen [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu verwenden. Selbst wenn Ihre Anforderungen verlangen, dass Vergleiche zwischen zwei {{jsxref("NaN")}}-Werten zu `true` ausgewertet werden, ist es im Allgemeinen einfacher, die {{jsxref("NaN")}}-Prüfungen speziell zu behandeln (mit der seit früheren ECMAScript-Versionen verfügbaren Methode {{jsxref("isNaN")}}), als herauszufinden, wie umgebende Berechnungen das Vorzeichen von Nullen beeinflussen könnten, die in Ihrem Vergleich auftreten.

Hier ist eine nicht vollständige Liste eingebauter Methoden und Operatoren, die dazu führen können, dass sich eine Unterscheidung zwischen `-0` und `+0` in Ihrem Code bemerkbar macht:

- [`-` (unäre Negation)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
  - : Betrachten Sie das folgende Beispiel:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Wenn `obj.velocity` `0` ist (oder zu `0` berechnet wird), wird an dieser Stelle ein `-0` eingeführt und in `stoppingForce` weitergegeben.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In einigen Fällen kann ein `-0` als Rückgabewert dieser Methoden in einen Ausdruck eingeführt werden, selbst wenn keiner der Parameter `-0` ist. Wenn beispielsweise {{jsxref("Math.pow")}} verwendet wird, um {{jsxref("Infinity", "-Infinity")}} mit einem beliebigen negativen, ungeraden Exponenten zu potenzieren, wird dies zu `-0` ausgewertet. Weitere Informationen finden Sie in der Dokumentation der einzelnen Methoden.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : In einigen Fällen kann man von diesen Methoden einen Rückgabewert `-0` erhalten, wenn einer der Parameter `-0` ist. Beispielsweise wird `Math.min(-0, +0)` zu `-0` ausgewertet. Weitere Informationen finden Sie in der Dokumentation der einzelnen Methoden.
- [`~`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Jeder dieser Operatoren verwendet intern den ToInt32-Algorithmus. Da es im internen 32-Bit-Integer-Typ nur eine Darstellung für 0 gibt, übersteht `-0` einen Roundtrip nach einer inversen Operation nicht. Beispielsweise werden sowohl `Object.is(~~(-0), -0)` als auch `Object.is(-0 << 2 >> 2, -0)` zu `false` ausgewertet.

Sich auf {{jsxref("Object.is")}} zu verlassen, wenn das Vorzeichen von Nullen nicht berücksichtigt wird, kann riskant sein. Wenn hingegen beabsichtigt ist, zwischen `-0` und `+0` zu unterscheiden, tut es genau das Gewünschte.

### Einschränkung: Object.is() und NaN

Die Spezifikation von {{jsxref("Object.is")}} behandelt alle Instanzen von {{jsxref("NaN")}} als dasselbe Objekt. Da jedoch [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) verfügbar sind, können wir unterschiedliche Fließkommadarstellungen von `NaN` haben, die sich nicht in allen Kontexten identisch verhalten. Zum Beispiel:

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
> Implementierungen dürfen die Bitdarstellung von `NaN` kanonisieren, daher kann `nan2` bei der Rückkonvertierung in eine Fließkommazahl dieselbe Bitdarstellung wie das ursprüngliche `NaN` haben.

## Siehe auch

- [JS Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/) von [dorey](https://github.com/dorey)
