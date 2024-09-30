---
title: Gleichheitsvergleiche und Sameness
slug: Web/JavaScript/Equality_comparisons_and_sameness
l10n:
  sourceCommit: 8e1184924387f88e2ee63a3c786b007aaf573105
---

{{jsSidebar("Intermediate")}}

JavaScript bietet drei verschiedene Operationen zum Vergleichen von Werten:

- [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) — strikte Gleichheit (dreifach gleich)
- [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) — lose Gleichheit (doppelt gleich)
- [`Object.is()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Welche Operation Sie wählen, hängt davon ab, welche Art von Vergleich Sie durchführen möchten. Kurz gesagt:

- Doppelt gleich (`==`) führt eine Typumwandlung durch, wenn zwei Dinge verglichen werden, und behandelt `NaN`, `-0` und `+0` speziell, um mit IEEE 754 übereinzustimmen (also `NaN != NaN`, und `-0 == +0`);
- Dreifach gleich (`===`) führt denselben Vergleich wie doppelt gleich durch (inklusive der speziellen Behandlung für `NaN`, `-0` und `+0`), jedoch ohne Typumwandlung; wenn die Typen unterschiedlich sind, wird `false` zurückgegeben.
- `Object.is()` führt keine Typumwandlung durch und keine spezielle Behandlung für `NaN`, `-0` und `+0` (wodurch es dasselbe Verhalten wie `===` hat, außer bei diesen speziellen numerischen Werten).

Sie entsprechen drei von vier Gleichheitsalgorithmen in JavaScript:

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): wird von vielen eingebauten Operationen verwendet

Beachten Sie, dass sich die Unterscheidungen zwischen diesen allesamt auf den Umgang mit primitiven Werten beziehen; keiner von ihnen vergleicht, ob die Parameter konzeptionell ähnlich in ihrer Struktur sind. Für nicht-primitive Objekte `x` und `y`, die dieselbe Struktur haben, aber unterschiedliche Objekte sind, werden alle oben genannten Formen zu `false` ausgewertet.

## Strikte Gleichheit mit ===

Strikte Gleichheit vergleicht zwei Werte auf Gleichheit. Keiner der Werte wird vor dem Vergleich implizit in einen anderen Wert umgewandelt. Wenn die Werte unterschiedliche Typen haben, werden sie als ungleich angesehen. Wenn die Werte denselben Typ haben, keine Zahlen sind und denselben Wert haben, werden sie als gleich angesehen. Schließlich, wenn beide Werte Zahlen sind, werden sie als gleich angesehen, wenn sie beide nicht `NaN` sind und denselben Wert haben, oder wenn einer `+0` und einer `-0` ist.

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

Strikte Gleichheit ist fast immer die korrekte Vergleichsoperation. Für alle Werte außer Zahlen verwendet sie die offensichtliche Semantik: Ein Wert ist nur gleich sich selbst. Für Zahlen verwendet sie leicht unterschiedliche Semantik, um zwei verschiedene Randfälle zu behandeln. Der erste ist, dass das Gleitkomma-Null entweder positiv oder negativ signiert ist. Dies ist nützlich bei der Darstellung bestimmter mathematischer Lösungen, aber da die meisten Situationen keinen Unterschied zwischen `+0` und `-0` machen, behandelt die strikte Gleichheit sie als denselben Wert. Der zweite ist, dass das Gleitkomma das Konzept eines NaN-Werts enthält, um die Lösung für bestimmte schlecht definierte mathematische Probleme darzustellen: beispielsweise negative Unendlichkeit addiert zu positiver Unendlichkeit. Strikte Gleichheit behandelt `NaN` als ungleich zu jedem anderen Wert — einschließlich sich selbst. (Der einzige Fall, in dem `(x !== x)` `true` ist, ist, wenn `x` `NaN` ist.)

Neben `===` wird strikte Gleichheit auch von Methoden zur Indextfindung verwendet, einschließlich [`Array.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf), [`TypedArray.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf) und [`case`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Abgleichen. Das bedeutet, dass Sie `indexOf(NaN)` nicht verwenden können, um den Index eines `NaN`-Werts in einem Array zu finden, oder `NaN` als `case`-Wert in einer `switch`-Anweisung verwenden können, um es mit irgendetwas abzugleichen.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Nothing is logged
}
```

## Lose Gleichheit mit ==

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer dieselbe Semantik wie `B == A` für alle Werte von `A` und `B` (außer in der Reihenfolge der angewendeten Konvertierungen). Das Verhalten beim Ausführen von loser Gleichheit unter Verwendung von `==` ist wie folgt:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: gibt `true` nur zurück, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: gibt `true` nur zurück, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge aufweisen.
   - Zahl: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben; `NaN` ist also niemals gleich `NaN`.
   - Boolean: gibt `true` nur zurück, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben.
   - Symbol: gibt `true` nur zurück, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere auch `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls wird `false` zurückgegeben.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Wert ist, [konvertieren Sie das Objekt in einen primitiven Wert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion).
4. An diesem Schritt werden beide Operanden in primitive Werte (einer von String, Number, Boolean, Symbol und BigInt) konvertiert. Der Rest der Umwandlung erfolgt fallweise.
   - Wenn sie denselben Typ haben, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, geben Sie `false` zurück.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [konvertieren Sie das Boolean in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 umgewandelt, und `false` wird in 0 umgewandelt. Vergleichen Sie dann die beiden Operanden erneut lose.
   - Zahl zu String: [konvertieren Sie den String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Konvertierungsfehler führt zu `NaN`, was garantiert, dass die Gleichheit `false` ist.
   - Zahl zu BigInt: Vergleichen Sie nach ihrem numerischen Wert. Wenn die Zahl ±Infinity oder `NaN` ist, geben Sie `false` zurück.
   - String zu BigInt: Konvertieren Sie den String in einen BigInt mithilfe des gleichen Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Konstruktor. Wenn die Konvertierung fehlschlägt, geben Sie `false` zurück.

Traditionell und gemäß ECMAScript sind alle primitiven Werte und Objekte locker ungleich zu `undefined` und `null`. Aber die meisten Browser erlauben einer sehr engen Klasse von Objekten (insbesondere dem `document.all`-Objekt für jede Seite), in einigen Kontexten so zu agieren, als ob sie den Wert `undefined` _emulieren_. Lose Gleichheit ist ein solcher Kontext: `null == A` und `undefined == A` ergeben nur dann `true`, wenn, und nur wenn, A ein Objekt ist, das `undefined` _emuliert_. In allen anderen Fällen ist ein Objekt niemals locker gleich `undefined` oder `null`.

In den meisten Fällen wird die Verwendung der losen Gleichheit nicht empfohlen. Das Ergebnis eines Vergleichs mit strikter Gleichheit ist leichter vorherzusagen und kann aufgrund des Fehlens von Typumwandlungen schneller ausgeführt werden.

Das folgende Beispiel zeigt lose Gleichheitsvergleiche unter Beteiligung des Zahlprimitivs `0`, des BigInt-Primitives `0n`, des Stringprimitives `'0'` und eines Objekts, dessen `toString()`-Wert `'0'` ist.

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

## Gleichheit des gleichen Werts mit Object.is()

Die Gleichheit des gleichen Werts bestimmt, ob zwei Werte in allen Kontexten _funktionell identisch_ sind. (Dieses Anwendungsbeispiel zeigt eine Instanz des [Liskov-Substitutionsprinzips](https://de.wikipedia.org/wiki/Liskovsches_Substitutionsprinzip)) Eine Instanz tritt auf, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern:

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

`Object.defineProperty` wird eine Ausnahme auslösen, wenn versucht wird, eine unveränderliche Eigenschaft zu ändern, aber nichts wird getan, wenn keine tatsächliche Änderung angefordert wird. Wenn `v` `-0` ist, wurde keine Änderung angefordert und es wird kein Fehler ausgelöst. Intern wird, wenn eine unveränderliche Eigenschaft neu definiert wird, der neu festgelegte Wert mit dem aktuellen Wert unter Verwendung der Gleichheit des gleichen Werts verglichen.

Die Gleichheit des gleichen Werts wird durch die Methode {{jsxref("Object.is")}} bereitgestellt. Sie wird fast überall in der Sprache verwendet, bei der ein gleichwertiger Identitätswert erwartet wird.

## Gleichheit des gleichen Wertes Null

Ähnlich wie die Gleichheit des gleichen Werts, aber +0 und -0 gelten als gleich.

Die Gleichheit des gleichen Wertes Null wird nicht als JavaScript-API bereitgestellt, kann jedoch mit benutzerdefiniertem Code implementiert werden:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

Gleichheit des gleichen Wertes Null unterscheidet sich von strikter Gleichheit, indem `NaN` als äquivalent angesehen wird, und unterscheidet sich nur von der Gleichheit des gleichen Werts, indem `-0` als 0 äquivalent angesehen wird. Dies macht es normalerweise zum sinnvollsten Verhalten bei der Suche, insbesondere beim Arbeiten mit `NaN`. Es wird von [`Array.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) sowie Methoden von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) verwendet, um Schlüsselgleichheit zu vergleichen.

## Vergleich der Gleichheitsmethoden

Menschen vergleichen häufig doppelt gleich und dreifach gleich, indem sie sagen, dass eines eine "erweiterte" Version des anderen ist. Zum Beispiel könnte doppelt gleich als erweiterte Version von dreifach gleich angesehen werden, da ersteres alles tut, was letzteres tut, jedoch mit Typumwandlung auf seine Operanden — zum Beispiel `6 == "6"`. Alternativ kann behauptet werden, dass doppelt gleich die Basis bildet und dreifach gleich eine erweiterte Version ist, da es erfordert, dass die beiden Operanden denselben Typ haben, sodass es eine zusätzliche Einschränkung hinzufügt.

Diese Denkweise impliziert jedoch, dass die Gleichheitsvergleiche ein eindimensionales "Spektrum" bilden, bei dem "völlig strikt" an einem Ende und "völlig lose" am anderen Ende liegt. Dieses Modell reicht mit {{jsxref("Object.is")}} nicht aus, weil es weder "locker" als doppelt gleich noch "strikter" als dreifach gleich ist, noch passt es irgendwo dazwischen (d. h. strikter als doppelt gleich, aber lockerer als dreifach gleich). Wir können aus der Tabelle der Sameness-Vergleiche unten sehen, dass dies aufgrund der Art, wie {{jsxref("Object.is")}} mit {{jsxref("NaN")}} umgeht, so ist. Beachten Sie, dass wir, wenn `Object.is(NaN, NaN)` zu `false` ausgewertet würde, _sagen könnten_, dass es auf dem lockeren/strikten Spektrum als eine sogar striktere Form von dreifach gleich passt, eine, die zwischen `-0` und `+0` unterscheidet. Die {{jsxref("NaN")}}-Handhabung bedeutet jedoch, dass dies nicht zutrifft. Leider muss {{jsxref("Object.is")}} in Bezug auf seine spezifischen Eigenschaften betrachtet werden, anstatt in Bezug auf seine Lockerheit oder Striktheit in Bezug auf die Gleichheitsoperatoren.

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

### Wann man Object.is() gegenüber dreifach gleich verwenden sollte

Im Allgemeinen ist das einzige Mal, wenn das spezielle Verhalten von {{jsxref("Object.is")}} gegenüber Nullen von Interesse sein könnte, bei der Verfolgung gewisser Metaprogrammierungsschemata, insbesondere in Bezug auf Eigenschaftsbeschreibungen, wenn es wünschenswert ist, dass Ihre Arbeit einige Eigenschaften von {{jsxref("Object.defineProperty")}} widerspiegelt. Wenn Ihr Anwendungsfall dies nicht erfordert, wird vorgeschlagen, {{jsxref("Object.is")}} zu vermeiden und stattdessen [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu verwenden. Auch wenn Ihre Anforderungen beinhalten, dass Vergleiche zwischen zwei {{jsxref("NaN")}}-Werten zu `true` ausgewertet werden, ist es im Allgemeinen einfacher, die {{jsxref("NaN")}}-Prüfungen speziell zu behandeln (mithilfe der {{jsxref("isNaN")}}-Methode, die in früheren Versionen von ECMAScript verfügbar ist), als herauszufinden, wie umgebende Berechnungen sich auf das Vorzeichen der Nullen auswirken könnten, denen Sie in Ihrem Vergleich begegnen.

Hier ist eine nicht erschöpfende Liste von eingebauten Methoden und Operatoren, die dazu führen könnten, dass sich eine Unterscheidung zwischen `-0` und `+0` in Ihrem Code manifestiert:

- [`-` (unäres Negieren)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)

  - : Betrachten Sie das folgende Beispiel:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Wenn `obj.velocity` `0` ist (oder zu `0` berechnet wird), wird ein `-0` an dieser Stelle eingeführt und propagiert sich in `stoppingForce`.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In einigen Fällen ist es möglich, dass in einem Ausdruck ein `-0` als Rückgabewert dieser Methoden eingeführt wird, auch wenn kein `-0` als einer der Parameter existiert. Beispielsweise ergibt die Verwendung von {{jsxref("Math.pow")}}, um {{jsxref("Infinity", "-Infinity")}} in eine negative ungerade Potenz zu erheben, `-0`. Siehe die Dokumentation der einzelnen Methoden.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : Es ist möglich, in einigen Fällen, in denen ein `-0` als einer der Parameter existiert, einen `-0`-Rückgabewert aus diesen Methoden zu erhalten. Zum Beispiel ergibt `Math.min(-0, +0)` `-0`. Siehe die Dokumentation der einzelnen Methoden.
- [`~`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Jeder dieser Operatoren verwendet intern den ToInt32-Algorithmus. Da es im internen 32-Bit-Ganzzahl-Typ nur eine Darstellung für 0 gibt, wird `-0` eine Rundreise nach einer inversen Operation nicht überleben. Beide `Object.is(~~(-0), -0)` und `Object.is(-0 << 2 >> 2, -0)` werten zu `false` aus.

Auf {{jsxref("Object.is")}} zu vertrauen, wenn die Vorzeichen von Nullen nicht berücksichtigt werden, kann riskant sein. Natürlich, wenn die Absicht darin besteht, zwischen `-0` und `+0` zu unterscheiden, tut es genau das, was gewünscht wird.

### Warnung: Object.is() und NaN

Die Spezifikation von {{jsxref("Object.is")}} behandelt alle Instanzen von {{jsxref("NaN")}} als dasselbe Objekt. Da jedoch [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) verfügbar sind, können wir unterschiedliche Gleitkommadarstellungen von `NaN` haben, die nicht in allen Kontexten identisch verhalten. Zum Beispiel:

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

- [JS Vergleichstabelle](https://dorey.github.io/JavaScript-Equality-Table/) von [dorey](https://github.com/dorey)
