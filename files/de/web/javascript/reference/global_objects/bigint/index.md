---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: e142519e137b3a2ce99d5820c3f2049b6d83113d
---

**`BigInt`**-Werte repräsentieren ganzzahlige Werte, die [zu hoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) oder [zu niedrig](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) sind, um durch den `number`- {{Glossary("Primitive", "Primitiv")}} repräsentiert zu werden.

## Beschreibung

Ein **BigInt-Wert**, manchmal auch einfach **BigInt** genannt, ist ein `bigint`- {{Glossary("Primitive", "Primitiv")}}, das durch Anhängen von `n` an das Ende eines Ganzzahlen-Literals erstellt wird oder durch Aufruf der {{jsxref("BigInt/BigInt", "BigInt()")}}-Funktion (ohne den `new`-Operator) und Übergabe eines Ganzzahlen- oder String-Werts.

```js
const previouslyMaxSafeInteger = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

const hugeString = BigInt("9007199254740991");
// 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
// 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// 9007199254740991n
```

BigInt-Werte ähneln in einigen Punkten den Nummernwerten, unterscheiden sich jedoch auch in einigen wesentlichen Aspekten: Ein BigInt-Wert kann nicht mit Methoden des eingebauten [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math)-Objekts verwendet und nicht mit einem Nummernwert in Operationen gemischt werden; sie müssen auf den gleichen Typ gezwungen werden. Seien Sie jedoch vorsichtig beim Konvertieren von Werten hin und her, da die Genauigkeit eines BigInt-Werts verloren gehen kann, wenn er in einen Nummernwert umgewandelt wird.

### Typinformationen

Wenn ein BigInt-Wert (das `bigint`-Primitiv) mit `typeof` geprüft wird, wird `"bigint"` zurückgegeben:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Ein BigInt-Wert kann auch in ein `Object` eingebunden werden:

```js
typeof Object(1n) === "object"; // true
```

### Operatoren

Die meisten Operatoren unterstützen BigInts, jedoch erlauben die meisten keine Operanden gemischten Typs — beide Operanden müssen BigInt sein oder keiner:

- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators): `+`, `-`, `*`, `/`, `%`, `**`
- [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators): `>>`, `<<`, `&`, `|`, `^`, `~`
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Inkrement/Dekrement](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement): `++`, `--`

Die Operatoren, die Boolean-Werte zurückgeben, erlauben das Mischen von Numbers und BigInts als Operanden:

- [Relationale Operatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) und [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) verlassen sich nur auf die {{Glossary("Truthy", "Wahrhaftigkeit")}} der Operanden

Einige Operatoren unterstützen BigInt überhaupt nicht:

- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) kann nicht unterstützt werden aufgrund einer widersprüchlichen Nutzung in asm.js, daher wurde es weggelassen, [um asm.js nicht zu stören](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).
- Der [Unsigned Right Shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) ist der einzige bitweise Operator, der nicht unterstützt wird, da jeder BigInt-Wert vorzeichenbehaftet ist.

Spezialfälle:

- Addition (`+`) mit einem String und einem BigInt gibt einen String zurück.
- Division (`/`) schneidet Bruchteile gegen null ab, da BigInt gebrochene Mengen nicht darstellen kann.

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
const maxPlusOne = previousMaxSafe + 1n; // 9007199254740992n
const theFuture = previousMaxSafe + 2n; // 9007199254740993n, this works now!
const prod = previousMaxSafe * 2n; // 18014398509481982n
const diff = prod - 10n; // 18014398509481972n
const mod = prod % 10n; // 2n
const bigN = 2n ** 54n; // 18014398509481984n
bigN * -1n; // -18014398509481984n
const expected = 4n / 2n; // 2n
const truncated = 5n / 2n; // 2n, not 2.5n
```

### Vergleiche

Ein BigInt-Wert ist nicht streng gleich einem Number-Wert, aber _lose_ gleich:

```js
0n === 0; // false
0n == 0; // true
```

Ein Number-Wert und ein BigInt-Wert können wie gewohnt verglichen werden:

```js
1n < 2; // true
2n > 1; // true
2 > 2; // false
2n > 2; // false
2n >= 2; // true
```

BigInt-Werte und Number-Werte können in Arrays gemischt und sortiert werden:

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort(); // default sorting behavior
// [ -12n, 0, 0n, 10, 4n, 4, 6 ]

mixed.sort((a, b) => a - b);
// won't work since subtraction will not work with mixed types
// TypeError: can't convert BigInt value to Number value

// sort with an appropriate numeric comparator
mixed.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
// [ -12n, 0, 0n, 4n, 4, 6, 10 ]
```

Beachten Sie, dass Vergleiche mit `Object`-eingebundenen BigInt-Werten wie bei anderen Objekten nur dann Gleichheit anzeigen, wenn die gleiche Objektinstanz verglichen wird:

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Da das Konvertieren zwischen Number-Werten und BigInt-Werten zu einem Verlust der Genauigkeit führen kann, wird Folgendes empfohlen:

- Verwenden Sie einen BigInt-Wert nur, wenn Werte größer als 2<sup>53</sup> vernünftigerweise erwartet werden.
- Zwingen Sie keine Umwandlungen zwischen BigInt-Werten und Number-Werten.

### Bedingte Anweisungen

Ein BigInt-Wert folgt denselben Konvertierungsregeln wie Numbers, wenn:

- es in einen [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) umgewandelt wird: über die [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)-Funktion;
- wenn es mit [logischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators) `||`, `&&`, und `!` verwendet wird; oder
- innerhalb eines bedingten Tests wie einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung.

Namentlich ist nur `0n` {{Glossary("Falsy", "falsch")}}; alles andere ist {{Glossary("Truthy", "wahr")}}.

```js
if (0n) {
  console.log("Hello from the if!");
} else {
  console.log("Hello from the else!");
}
// "Hello from the else!"

0n || 12n; // 12n
0n && 12n; // 0n
Boolean(0n); // false
Boolean(12n); // true
!12n; // false
!0n; // true
```

### Kryptographie

Die auf BigInt-Werten unterstützten Operationen sind nicht konstanter Zeit und sind daher anfällig für [Timing-Angriffe](https://en.wikipedia.org/wiki/Timing_attack). JavaScript-BigInts könnten daher gefährlich für den Einsatz in der Kryptographie sein, wenn keine mildernden Maßnahmen ergriffen werden. Als sehr generisches Beispiel könnte ein Angreifer den Zeitunterschied zwischen `101n ** 65537n` und `17n ** 9999n` messen und die Größe von Geheimnissen, wie z.B. privaten Schlüsseln, basierend auf der verstrichenen Zeit ableiten. Wenn Sie dennoch BigInts verwenden müssen, werfen Sie einen Blick auf das [Timing-Angriff-FAQ](https://timing.attacks.cr.yp.to/programming.html) für allgemeine Ratschläge zu diesem Thema.

### Verwendung innerhalb von JSON

Die Verwendung von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit einem beliebigen BigInt-Wert führt zu einem `TypeError`, da BigInt-Werte standardmäßig nicht in JSON serialisiert werden. `JSON.stringify()` lässt jedoch speziell ein Hintertürchen für BigInt-Werte offen: Es würde versuchen, die `toJSON()`-Methode des BigInt aufzurufen. (Dies tut es bei keinem anderen primitiven Wert.) Daher können Sie Ihre eigene `toJSON()`-Methode implementieren (was einer der wenigen Fälle ist, in denen das Patchen von eingebauten Objekten nicht ausdrücklich entmutigt wird):

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

Anstatt zu werfen, erzeugt `JSON.stringify()` jetzt einen String wie diesen:

```js
console.log(JSON.stringify({ a: 1n }));
// {"a":{"$bigint":"1"}}
```

Wenn Sie `BigInt.prototype` nicht patchen möchten, können Sie den [`replacer`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter)-Parameter von `JSON.stringify` verwenden, um BigInt-Werte zu serialisieren:

```js
const replacer = (key, value) =>
  typeof value === "bigint" ? { $bigint: value.toString() } : value;

const data = {
  number: 1,
  big: 18014398509481982n,
};
const stringified = JSON.stringify(data, replacer);

console.log(stringified);
// {"number":1,"big":{"$bigint":"18014398509481982"}}
```

Sie können dann den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter)-Parameter von `JSON.parse` verwenden, um sie zu behandeln:

```js
const reviver = (key, value) =>
  value !== null &&
  typeof value === "object" &&
  "$bigint" in value &&
  typeof value.$bigint === "string"
    ? BigInt(value.$bigint)
    : value;

const payload = '{"number":1,"big":{"$bigint":"18014398509481982"}}';
const parsed = JSON.parse(payload, reviver);

console.log(parsed);
// { number: 1, big: 18014398509481982n }
```

> [!NOTE]
> Obwohl es möglich ist, den Ersatz von `JSON.stringify()` generisch zu machen und BigInt-Werte für alle Objekte ordnungsgemäß zu serialisieren, muss der `reviver` von `JSON.parse()` mit Vorsicht verwendet werden, da die Serialisierung _irreversibel_ ist: Es ist nicht möglich, zwischen einem Objekt, das zufällig eine Eigenschaft namens `$bigint` hat, und einem echten BigInt zu unterscheiden.
>
> Außerdem erstellt das obige Beispiel während des Ersetzens und Wiederherstellens ein ganzes Objekt, was für größere Objekte, die viele BigInts enthalten, Leistungs- oder Speicherimplikationen haben kann. Wenn Sie die Form der Nutzlast kennen, ist es möglicherweise besser, sie einfach als Strings zu serialisieren und basierend auf dem Eigenschaftsname des Schlüssels wiederherzustellen.

Tatsächlich erlaubt JSON Zahlenliterale beliebiger Länge; sie können nur nicht mit voller Genauigkeit in JavaScript geparst werden. Wenn Sie mit einem anderen Programm in einer Sprache kommunizieren, die längere Ganzzahlen unterstützt (wie 64-Bit-Ganzzahlen) und Sie das BigInt als JSON-Zahl anstelle eines JSON-Strings übertragen möchten, siehe [Verlustlose Zahlenserialization](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

### BigInt-Zwang

Viele integrierte Operationen, die BigInts erwarten, zwingen ihre Argumente zuerst zu BigInts. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint) kann wie folgt zusammengefasst werden:

- BigInts werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- `true` wird zu `1n`; `false` wird zu `0n`.
- Strings werden konvertiert, indem sie geparst werden, als ob sie ein Ganzzahlenliteral enthalten. Jegliches Parsing-Versagen führt zu einem {{jsxref("SyntaxError")}}. Die Syntax ist ein Teilmengen von [string numeric literals](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), bei denen Dezimalpunkte oder Exponentenindikatoren nicht erlaubt sind.
- [Numbers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) werfen einen {{jsxref("TypeError")}}, um unbeabsichtigte implizite Umwandlungen, die zu Präzisionsverlust führen könnten, zu verhindern.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [zu einem primitiven umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()`, und `toString()`-Methoden in dieser Reihenfolge aufgerufen werden. Das resultierende Primitive wird dann in ein BigInt umgewandelt.

Die beste Methode, um nahezu denselben Effekt in JavaScript zu erreichen, ist die Verwendung der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion: `BigInt(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, außer dass [Numbers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) keinen {{jsxref("TypeError")}} werfen, sondern in BigInts umgewandelt werden, wenn sie Ganzzahlen sind.

Beachten Sie, dass eingebaute Operationen, die BigInts erwarten, nach der Umwandlung das BigInt oft auf eine feste Breite kürzen. Dazu gehören {{jsxref("BigInt.asIntN()")}}, {{jsxref("BigInt.asUintN()")}}, und Methoden von {{jsxref("BigInt64Array")}} und {{jsxref("BigUint64Array")}}.

## Konstruktor

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : Gibt primitive Werte vom Typ BigInt zurück. Wirft einen Fehler, wenn er mit `new` aufgerufen wird.

## Statische Methoden

- {{jsxref("BigInt.asIntN()")}}
  - : Kürzt einen `BigInt`-Wert auf die angegebene Anzahl der signifikanten Bits und gibt diesen Wert als vorzeichenbehafteten Integer zurück.
- {{jsxref("BigInt.asUintN()")}}
  - : Kürzt einen `BigInt`-Wert auf die angegebene Anzahl der signifikanten Bits und gibt diesen Wert als vorzeichenlosen Integer zurück.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `BigInt.prototype` definiert und werden von allen `BigInt`-Instanzen geteilt.

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `BigInt`-Instanzen ist der Anfangswert der {{jsxref("BigInt/BigInt", "BigInt")}}-Konstruktor.
- `BigInt.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"BigInt"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `BigInt` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString)-Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem BigInt als `thisArg` auf.

## Instanz-Methoden

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachensensitiven Darstellung dieses BigInt-Werts zurück. Überschreibt die [`Object.prototype.toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)-Methode.
- {{jsxref("BigInt.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen BigInt-Wert in der angegebenen Basis (Radix) darstellt. Überschreibt die [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)-Methode.
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : Gibt diesen BigInt-Wert zurück. Überschreibt die [`Object.prototype.valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)-Methode.

## Beispiele

### Berechnung von Primzahlen

```js
function isPrime(n) {
  if (n < 2n) {
    return false;
  }
  if (n % 2n === 0n) {
    return n === 2n;
  }
  for (let factor = 3n; factor * factor <= n; factor += 2n) {
    if (n % factor === 0n) {
      return false;
    }
  }
  return true;
}

// Takes a BigInt value as an argument, returns nth prime number as a BigInt value
function nthPrime(nth) {
  let maybePrime = 2n;
  let prime = 0n;

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth--;
      prime = maybePrime;
    }
    maybePrime++;
  }

  return prime;
}

nthPrime(20n);
// 73n
```

> [!NOTE]
> Die `isPrime()`-Implementierung ist nur zur Demonstration gedacht. Für eine reale Anwendung würden Sie einen stark optimierten Algorithmus wie das [Sieb des Eratosthenes](https://de.wikipedia.org/wiki/Sieb_des_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
