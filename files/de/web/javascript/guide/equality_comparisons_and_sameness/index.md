---
title: Gleichheitsvergleiche und Wertgleichheit
slug: Web/JavaScript/Guide/Equality_comparisons_and_sameness
l10n:
  sourceCommit: 99cfd882b48968c7678dba22b6da00643614503b
---

JavaScript bietet drei verschiedene Operationen zum Vergleichen von Werten:

- [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) — strikte Gleichheit (dreifaches Gleichheitszeichen)
- [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) — lose Gleichheit (doppeltes Gleichheitszeichen)
- [`Object.is()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

Welche Operation Sie wählen, hängt davon ab, welche Art von Vergleich Sie durchführen möchten. Kurz gesagt:

- Das doppelte Gleichheitszeichen (`==`) führt beim Vergleich zweier Werte eine Typumwandlung durch und behandelt `NaN`, `-0` und `+0` gemäß IEEE 754 gesondert (sodass `NaN != NaN` und `-0 == +0` gilt).
- Das dreifache Gleichheitszeichen (`===`) führt denselben Vergleich wie das doppelte Gleichheitszeichen durch (einschließlich der Sonderbehandlung von `NaN`, `-0` und `+0`), jedoch ohne Typumwandlung. Wenn sich die Typen unterscheiden, wird `false` zurückgegeben.
- `Object.is()` führt weder eine Typumwandlung noch eine Sonderbehandlung von `NaN`, `-0` und `+0` durch (und verhält sich damit außer bei diesen besonderen numerischen Werten wie `===`).

Sie entsprechen drei der vier Gleichheitsalgorithmen in JavaScript:

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): wird von vielen integrierten Operationen verwendet

Beachten Sie, dass die Unterschiede zwischen diesen Algorithmen ausschließlich die Behandlung primitiver Werte betreffen. Keiner von ihnen prüft, ob die Parameter ihrer Struktur nach übereinstimmen. Für zwei nicht primitive Objekte `x` und `y`, die dieselbe Struktur haben, aber unterschiedliche Objekte sind, ergeben alle oben genannten Vergleiche `false`.

Der rekursive Vergleich der Inhalte unterschiedlicher Objekte oder Arrays wird als {{Glossary("deep_equality", "tiefer Gleichheitsvergleich")}} bezeichnet. JavaScript stellt keinen allgemeinen Operator für tiefe Vergleiche bereit. Bibliotheken und Host-APIs können Vergleichsfunktionen mit unterschiedlichen Regeln bereitstellen.

## Strikte Gleichheit mit ===

Bei der strikten Gleichheit werden zwei Werte auf Gleichheit verglichen. Keiner der Werte wird vor dem Vergleich implizit in einen anderen Wert umgewandelt. Wenn die Werte unterschiedliche Typen haben, gelten sie als ungleich. Haben sie denselben Typ, sind keine Zahlen und haben denselben Wert, gelten sie als gleich. Sind beide Werte Zahlen, gelten sie schließlich als gleich, wenn keiner von ihnen `NaN` ist und sie denselben Wert haben oder wenn einer `+0` und der andere `-0` ist.

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

Strikte Gleichheit ist fast immer die richtige Vergleichsoperation. Für alle Werte außer Zahlen verwendet sie die naheliegende Semantik: Ein Wert ist nur sich selbst gleich. Bei Zahlen verwendet sie eine leicht abweichende Semantik, um zwei Sonderfälle auszuklammern. Erstens kann eine Gleitkomma-Null ein positives oder negatives Vorzeichen haben. Das ist zur Darstellung bestimmter mathematischer Lösungen nützlich. Da der Unterschied zwischen `+0` und `-0` in den meisten Situationen jedoch keine Rolle spielt, behandelt die strikte Gleichheit beide als denselben Wert. Zweitens umfassen Gleitkommazahlen den Wert „Not a Number“, `NaN`, der das Ergebnis bestimmter nicht wohldefinierter mathematischer Probleme darstellt, beispielsweise die Addition von negativer und positiver Unendlichkeit. Bei strikter Gleichheit gilt `NaN` als ungleich zu jedem anderen Wert – auch zu sich selbst. (Der einzige Fall, in dem `(x !== x)` den Wert `true` ergibt, ist, wenn `x` den Wert `NaN` hat.)

Neben `===` verwenden auch Methoden zur Suche nach Array-Indizes strikte Gleichheit, darunter [`Array.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf) und [`TypedArray.prototype.lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf). Sie wird auch beim Abgleich von [`case`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Werten verwendet. Das bedeutet, dass Sie mit `indexOf(NaN)` den Index eines `NaN`-Werts in einem Array nicht finden können. Ebenso kann `NaN` als `case`-Wert in einer `switch`-Anweisung mit keinem Wert übereinstimmen.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // Nothing is logged
}
```

## Lose Gleichheit mit ==

Lose Gleichheit ist _symmetrisch_: `A == B` hat für beliebige Werte von `A` und `B` immer dieselbe Semantik wie `B == A` (abgesehen von der Reihenfolge der angewendeten Umwandlungen). Der Vergleich mit `==` läuft folgendermaßen ab:

1. Haben die Operanden denselben Typ, werden sie wie folgt verglichen:
   - Object: `true` wird nur zurückgegeben, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: `true` wird nur zurückgegeben, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge enthalten.
   - Number: `true` wird nur zurückgegeben, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert behandelt. Ist einer der Operanden `NaN`, wird `false` zurückgegeben; `NaN` ist also niemals gleich `NaN`.
   - Boolean: `true` wird nur zurückgegeben, wenn beide Operanden `true` oder beide `false` sind.
   - BigInt: `true` wird nur zurückgegeben, wenn beide Operanden denselben Wert haben.
   - Symbol: `true` wird nur zurückgegeben, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Ist einer der Operanden `null` oder `undefined`, muss auch der andere `null` oder `undefined` sein, damit `true` zurückgegeben wird. Andernfalls wird `false` zurückgegeben.
3. Ist einer der Operanden ein Objekt und der andere ein primitiver Wert, wird [das Objekt in einen primitiven Wert umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion).
4. An diesem Punkt sind beide Operanden primitive Werte (String, Number, Boolean, Symbol oder BigInt). Die weiteren Umwandlungen erfolgen je nach Fall:
   - Haben sie denselben Typ, werden sie wie in Schritt 1 verglichen.
   - Ist einer der Operanden ein Symbol und der andere nicht, wird `false` zurückgegeben.
   - Ist einer der Operanden ein Boolean und der andere nicht, wird [der Boolean in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird zu 1 und `false` zu 0. Anschließend werden die beiden Operanden erneut auf lose Gleichheit verglichen.
   - Number und String: [Der String wird in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Schlägt die Umwandlung fehl, entsteht `NaN`, wodurch der Gleichheitsvergleich garantiert `false` ergibt.
   - Number und BigInt: Die Werte werden anhand ihres mathematischen Werts verglichen. Ist die Zahl ±Infinity oder `NaN`, wird `false` zurückgegeben.
   - String und BigInt: Der String wird mit demselben Algorithmus wie beim [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor in einen BigInt umgewandelt. Schlägt die Umwandlung fehl, wird `false` zurückgegeben.

Nach herkömmlichem Verhalten und gemäß ECMAScript sind alle primitiven Werte und Objekte bei einem losen Vergleich ungleich `undefined` und `null`. Die meisten Browser lassen jedoch zu, dass sich eine sehr eng begrenzte Klasse von Objekten (genauer gesagt das `document.all`-Objekt einer beliebigen Seite) in manchen Kontexten so verhält, als würde sie den Wert `undefined` _nachbilden_. Lose Gleichheit ist ein solcher Kontext: `null == A` und `undefined == A` ergeben genau dann `true`, wenn A ein Objekt ist, das `undefined` _nachbildet_. In allen anderen Fällen ist ein Objekt bei einem losen Vergleich niemals gleich `undefined` oder `null`.

In den meisten Fällen wird von der Verwendung loser Gleichheit abgeraten. Das Ergebnis eines strikten Gleichheitsvergleichs ist leichter vorherzusagen und kann wegen der fehlenden Typumwandlung möglicherweise schneller ermittelt werden.

Das folgende Beispiel zeigt lose Gleichheitsvergleiche zwischen dem primitiven Number-Wert `0`, dem primitiven BigInt-Wert `0n`, dem primitiven String-Wert `'0'` und einem Objekt, dessen `toString()`-Wert `'0'` ist.

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

## Wertgleichheit mit Object.is()

Wertgleichheit bestimmt, ob zwei Werte in allen Kontexten _funktional identisch_ sind. (Dieser Anwendungsfall veranschaulicht das [Liskovsche Substitutionsprinzip](https://en.wikipedia.org/wiki/Liskov_substitution_principle).) Ein Beispiel dafür ist der Versuch, eine unveränderliche Eigenschaft zu ändern:

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

`Object.defineProperty` löst beim Versuch, eine unveränderliche Eigenschaft zu ändern, eine Ausnahme aus. Wird jedoch keine tatsächliche Änderung verlangt, geschieht nichts. Wenn `v` den Wert `-0` hat, wird keine Änderung verlangt und kein Fehler ausgelöst. Intern wird beim erneuten Definieren einer unveränderlichen Eigenschaft der neu angegebene Wert anhand der Wertgleichheit mit dem aktuellen Wert verglichen.

Wertgleichheit wird durch die Methode {{jsxref("Object.is")}} bereitgestellt. Sie wird in der Sprache fast überall dort verwendet, wo ein Wert mit identischer Wertidentität erwartet wird.

## SameValueZero-Gleichheit

Sie ähnelt der Wertgleichheit, betrachtet aber +0 und -0 als gleich.

SameValueZero-Gleichheit wird nicht als JavaScript-API bereitgestellt, lässt sich aber mit eigenem Code implementieren:

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

SameValueZero unterscheidet sich von strikter Gleichheit nur dadurch, dass `NaN` als gleich behandelt wird, und von Wertgleichheit nur dadurch, dass `-0` als gleich `0` behandelt wird. Dadurch liefert es bei Suchvorgängen meist das sinnvollste Verhalten, insbesondere beim Umgang mit `NaN`. Es wird von [`Array.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes) sowie Methoden von [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) zum Vergleich von Schlüsseln verwendet.

## Vergleich der Gleichheitsmethoden

Das doppelte und das dreifache Gleichheitszeichen werden oft miteinander verglichen, indem eines als „erweiterte“ Version des anderen bezeichnet wird. So könnte man das doppelte Gleichheitszeichen als Erweiterung des dreifachen betrachten, weil es alles tut, was auch das dreifache tut, aber zusätzlich die Operanden umwandelt – beispielsweise bei `6 == "6"`. Umgekehrt könnte man das doppelte Gleichheitszeichen als Ausgangspunkt und das dreifache als erweiterte Version betrachten, weil es verlangt, dass beide Operanden denselben Typ haben, und damit eine zusätzliche Bedingung stellt.

Diese Sichtweise setzt jedoch voraus, dass Gleichheitsvergleiche ein eindimensionales „Spektrum“ bilden, an dessen einem Ende „vollständig strikt“ und an dessen anderem Ende „vollständig lose“ steht. Bei {{jsxref("Object.is")}} greift dieses Modell zu kurz: Es ist weder „loser“ als das doppelte Gleichheitszeichen noch „strikter“ als das dreifache und liegt auch nicht irgendwo dazwischen (also zugleich strikter als das doppelte und loser als das dreifache Gleichheitszeichen). Die folgende Tabelle der Wertgleichheitsvergleiche zeigt, dass dies an der Behandlung von {{jsxref("NaN")}} durch {{jsxref("Object.is")}} liegt. Würde `Object.is(NaN, NaN)` `false` ergeben, _könnten_ wir es auf dem Lose-strikt-Spektrum als noch striktere Form des dreifachen Gleichheitszeichens einordnen, die zwischen `-0` und `+0` unterscheidet. Wegen der Behandlung von {{jsxref("NaN")}} trifft das jedoch nicht zu. {{jsxref("Object.is")}} muss daher anhand seiner konkreten Eigenschaften betrachtet werden und nicht danach, wie lose oder strikt es im Verhältnis zu den Gleichheitsoperatoren ist.

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

### Wann Sie Object.is() statt des dreifachen Gleichheitszeichens verwenden sollten

Im Allgemeinen ist das besondere Verhalten von {{jsxref("Object.is")}} bei Nullen wohl nur bei bestimmten Metaprogrammierungstechniken von Interesse, insbesondere im Zusammenhang mit Eigenschaftsdeskriptoren, wenn Ihr Code einige Eigenschaften von {{jsxref("Object.defineProperty")}} nachbilden soll. Wenn Ihr Anwendungsfall dies nicht erfordert, sollten Sie {{jsxref("Object.is")}} vermeiden und stattdessen [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) verwenden. Selbst wenn Vergleiche zwischen zwei {{jsxref("NaN")}}-Werten bei Ihnen `true` ergeben sollen, ist es im Allgemeinen einfacher, {{jsxref("NaN")}} gesondert zu prüfen (mit der bereits in früheren ECMAScript-Versionen verfügbaren Methode {{jsxref("isNaN")}}), als nachzuvollziehen, wie sich umgebende Berechnungen auf das Vorzeichen der Nullen auswirken könnten, die in Ihren Vergleichen auftreten.

Die folgende, nicht vollständige Liste enthält integrierte Methoden und Operatoren, durch die sich ein Unterschied zwischen `-0` und `+0` in Ihrem Code bemerkbar machen kann:

- [`-` (unäre Negation)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
  - : Betrachten Sie das folgende Beispiel:

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    Wenn `obj.velocity` den Wert `0` hat (oder `0` ergibt), entsteht an dieser Stelle ein `-0`, das an `stoppingForce` weitergegeben wird.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In manchen Fällen können diese Methoden `-0` als Rückgabewert in einen Ausdruck einbringen, selbst wenn keiner der Parameter `-0` ist. Wird beispielsweise {{jsxref("Math.pow")}} verwendet, um {{jsxref("Infinity", "-Infinity")}} mit einem beliebigen negativen, ungeraden Exponenten zu potenzieren, ist das Ergebnis `-0`. Weitere Informationen finden Sie in der Dokumentation der einzelnen Methoden.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : Diese Methoden können in manchen Fällen `-0` zurückgeben, wenn einer der Parameter `-0` ist. Beispielsweise ergibt `Math.min(-0, +0)` den Wert `-0`. Weitere Informationen finden Sie in der Dokumentation der einzelnen Methoden.
- [`~`](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/de/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/de/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Jeder dieser Operatoren verwendet intern den ToInt32-Algorithmus. Da es im internen 32-Bit-Ganzzahltyp nur eine Darstellung für 0 gibt, bleibt `-0` bei einer Umwandlung und anschließenden Rückumwandlung durch eine inverse Operation nicht erhalten. Beispielsweise ergeben sowohl `Object.is(~~(-0), -0)` als auch `Object.is(-0 << 2 >> 2, -0)` den Wert `false`.

Sich auf {{jsxref("Object.is")}} zu verlassen, ohne das Vorzeichen von Nullen zu berücksichtigen, kann problematisch sein. Wenn Sie ausdrücklich zwischen `-0` und `+0` unterscheiden möchten, liefert die Methode hingegen genau das gewünschte Ergebnis.

### Einschränkung: Object.is() und NaN

{{jsxref("Object.is()")}} behandelt alle Vorkommen von {{jsxref("NaN")}} als denselben Wert. Mit [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) können jedoch unterschiedliche Gleitkommadarstellungen von `NaN` vorliegen, die sich nicht in allen Kontexten identisch verhalten. Zum Beispiel:

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
> Implementierungen dürfen die Bitdarstellung von `NaN` kanonisieren. Daher kann `nan2` nach der Rückumwandlung in eine Gleitkommazahl dieselbe Bitdarstellung wie das ursprüngliche `NaN` haben.

## Siehe auch

- [JS-Vergleichstabelle](https://dorey.github.io/JavaScript-Equality-Table/) von [dorey](https://github.com/dorey)
