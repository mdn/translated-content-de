---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: 00e97c5c8f0998d314dc27b7158f15053a26304e
---

{{JSRef}}

**`BigInt`**-Werte repräsentieren Ganzzahlen, die [zu groß](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) oder [zu klein](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) sind, um durch den `number` {{Glossary("Primitive", "Primitive")}} dargestellt zu werden.

## Beschreibung

Ein **BigInt-Wert**, auch manchmal nur als **BigInt** bezeichnet, ist ein `bigint` {{Glossary("Primitive", "Primitive")}}, das durch Anhängen von `n` an das Ende eines Ganzzahl-Literals erstellt wird oder indem die {{jsxref("BigInt/BigInt", "BigInt()")}}-Funktion (ohne den `new` Operator) aufgerufen wird und ihr ein Ganzzahlwert oder ein Zeichenfolgenwert übergeben wird.

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

BigInt-Werte sind in gewisser Weise ähnlich wie Number-Werte, unterscheiden sich jedoch in einigen wesentlichen Punkten: Ein BigInt-Wert kann nicht mit Methoden im eingebauten [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math)-Objekt verwendet werden und kann nicht mit einem Number-Wert in Operationen gemischt werden; sie müssen auf denselben Typ gebracht werden. Seien Sie jedoch vorsichtig beim Umwandeln von Werten hin und her, da die Präzision eines BigInt-Wertes verloren gehen kann, wenn er in einen Number-Wert umgewandelt wird.

### Typinformation

Wenn man einen BigInt-Wert (`bigint` Primitive) mit `typeof` testet, wird `"bigint"` zurückgegeben:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Ein BigInt-Wert kann auch in einem `Object` verpackt werden:

```js
typeof Object(1n) === "object"; // true
```

### Operatoren

Die meisten Operatoren unterstützen BigInts, erlauben aber keine Operanden gemischter Typen - beide Operanden müssen BigInt sein oder keiner von beiden:

- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators): `+`, `-`, `*`, `/`, `%`, `**`
- [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators): `>>`, `<<`, `&`, `|`, `^`, `~`
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Inkrement/Dekrement](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement): `++`, `--`

Die booleschen Operatoren erlauben das Mischen von Zahlen und BigInts als Operanden:

- [Relationale Operatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) und [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) stützen sich nur auf die {{Glossary("Truthy", "Wahrheit")}} der Operanden

Einige wenige Operatoren unterstützen BigInt überhaupt nicht:

- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) kann nicht unterstützt werden, da ein Konflikt in asm.js bestehen würde, sodass es [um asm.js nicht zu brechen](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs) weggelassen wurde.
- [Unsigned Right Shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) ist der einzige bitweise Operator, der nicht unterstützt wird, da jeder BigInt-Wert signiert ist.

Spezialfälle:

- Addition (`+`) mit einer Zeichenfolge und einem BigInt gibt eine Zeichenfolge zurück.
- Division (`/`) schneidet Bruchteile gegen Null ab, da BigInt nicht in der Lage ist, Bruchmengen darzustellen.

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

Ein BigInt-Wert ist nicht streng gleich einem Number-Wert, aber er ist locker so:

```js
0n === 0; // false
0n == 0; // true
```

Ein Number-Wert und ein BigInt-Wert können wie üblich verglichen werden:

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

Beachten Sie, dass Vergleiche mit `Object`-verpackten BigInt-Werten wie bei anderen Objekten nur dann Gleichheit anzeigen, wenn dieselbe Objektinstanz verglichen wird:

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Da das Umwandeln zwischen Number-Werten und BigInt-Werten zu einem Verlust der Genauigkeit führen kann, werden folgende Empfehlungen gegeben:

- Verwenden Sie einen BigInt-Wert nur, wenn Werte größer als 2<sup>53</sup> vernünftigerweise erwartet werden.
- Konvertieren Sie nicht zwischen BigInt-Werten und Number-Werten.

### Bedingte

Ein BigInt-Wert folgt denselben Konvertierungsregeln wie Zahlen, wenn:

- er in ein [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) konvertiert wird: über die [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)-Funktion;
- verwendet mit [logischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators) `||`, `&&`, und `!`; oder
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

Die auf BigInt-Werten unterstützten Operationen sind nicht konstant in der Zeit und daher anfällig für [Timing-Angriffe](https://en.wikipedia.org/wiki/Timing_attack). JavaScript BigInts könnten daher gefährlich für den Einsatz in der Kryptographie ohne mildernde Faktoren sein. Ein sehr generisches Beispiel: Ein Angreifer könnte den Zeitunterschied zwischen `101n ** 65537n` und `17n ** 9999n` messen und das Ausmaß von Geheimnissen, wie private Schlüssel, anhand der verstrichenen Zeit ableiten. Wenn Sie BigInts dennoch verwenden müssen, werfen Sie einen Blick auf das [Timing-Angriff-FAQ](https://timing.attacks.cr.yp.to/programming.html) für allgemeine Hinweise zu diesem Problem.

### Verwendung in JSON

Die Verwendung von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit einem beliebigen BigInt-Wert führt zu einem `TypeError`, da BigInt-Werte standardmäßig nicht in JSON serialisiert werden. `JSON.stringify()` lässt jedoch ausdrücklich eine Hintertür für BigInt-Werte offen: Es würde versuchen, die `toJSON()`-Methode von BigInt aufzurufen. (Es tut dies für keine anderen primitiven Werte.) Daher können Sie Ihre eigene `toJSON()`-Methode implementieren (was einer der wenigen Fälle ist, in denen das Patchen von eingebauten Objekten nicht ausdrücklich abgeraten wird):

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

Anstatt einen Fehler zu werfen, erzeugt `JSON.stringify()` jetzt eine Zeichenfolge wie diese:

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

Sie können dann den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter)-Parameter von `JSON.parse` verwenden, um sie zu verarbeiten:

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
> Obwohl es möglich ist, den Replacer von `JSON.stringify()` allgemein und korrekt zu gestalten, um BigInt-Werte für alle Objekte wie oben gezeigt zu serialisieren, muss der Reviver von `JSON.parse()` mit Vorsicht verwendet werden, da die Serialisierung _irreversibel_ ist: Es ist nicht möglich zu unterscheiden, ob ein Objekt zufällig eine Eigenschaft namens `$bigint` hat oder ein tatsächliches BigInt ist.
>
> Darüber hinaus erstellt das obige Beispiel während des Ersetzens und Wiederherstellens ein ganzes Objekt, was für größere Objekte mit vielen BigInts Leistungs- oder Speicherimplikationen haben kann. Wenn Sie die Struktur der Nutzlast kennen, ist es möglicherweise besser, sie einfach als Zeichenfolgen zu serialisieren und basierend auf dem Eigenschaftsschlüssel beim Namen wiederherzustellen.

Tatsächlich erlaubt JSON Zahlenliterale, die beliebig lang sind; sie können nur nicht in JavaScript mit voller Präzision geparst werden. Wenn Sie mit einem anderen Programm in einer Sprache kommunizieren, die längere Ganzzahlen (wie 64-Bit-Ganzzahlen) unterstützt, und Sie das BigInt als JSON-Zahl anstelle einer JSON-Zeichenfolge übertragen möchten, sehen Sie sich [Verlustfreie Zahlenspeicherung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers) an.

### BigInt-Umschaltung

Viele eingebaute Operationen, die BigInts erwarten, schalten zuerst ihre Argumente in BigInts um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint) lässt sich wie folgt zusammenfassen:

- BigInts werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- `true` wird zu `1n`; `false` wird zu `0n`.
- Zeichenfolgen werden konvertiert, indem sie analysiert werden, als ob sie ein Ganzzahl-Literal enthalten. Jeder Parsing-Fehler führt zu einem {{jsxref("SyntaxError")}}. Die Syntax ist ein Teilmenge der [string numerischen Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), bei denen Dezimalstellen oder Exponentzeichen nicht erlaubt sind.
- [Nummern](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) werfen einen {{jsxref("TypeError")}}, um zu verhindern, dass eine unbeabsichtigte implizite Umwandlung zu einem Verlust der Genauigkeit führt.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein primitives umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()`, und `toString()` Methoden in dieser Reihenfolge aufgerufen werden. Das resultierende Primitive wird dann in ein BigInt umgewandelt.

Der beste Weg, in JavaScript nahezu denselben Effekt zu erzielen, ist die Verwendung der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Funktion: `BigInt(x)` verwendet denselben Algorithmus zur Konvertierung von `x`, außer dass [Nummern](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) keinen {{jsxref("TypeError")}} werfen, sondern in BigInts umgewandelt werden, wenn sie Ganzzahlen sind.

Beachten Sie, dass eingebaute Operationen, die BigInts erwarten, das BigInt oft nach der Umwandlung auf eine feste Breite kürzen. Dazu gehören {{jsxref("BigInt.asIntN()")}}, {{jsxref("BigInt.asUintN()")}}, und Methoden von {{jsxref("BigInt64Array")}} und {{jsxref("BigUint64Array")}}.

## Konstruktor

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : Gibt primitive Werte vom Typ BigInt zurück. Wirft einen Fehler, wenn er mit `new` aufgerufen wird.

## Statische Methoden

- {{jsxref("BigInt.asIntN()")}}
  - : Klemmt einen BigInt-Wert auf einen signierten Ganzzahlwert und gibt diesen Wert zurück.
- {{jsxref("BigInt.asUintN()")}}
  - : Klemmt einen BigInt-Wert auf einen unsigned Ganzzahlwert und gibt diesen Wert zurück.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `BigInt.prototype` definiert und werden von allen `BigInt`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `BigInt`-Instanzen ist der Anfangswert der {{jsxref("BigInt/BigInt", "BigInt")}} Konstruktor.
- `BigInt.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenfolge `"BigInt"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `BigInt` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString)-Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem BigInt als `thisArg` auf.

## Instanz-Methoden

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenfolge mit einer sprachsensitiven Darstellung dieses BigInt-Wertes zurück. Überschreibt die [`Object.prototype.toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)-Methode.
- {{jsxref("BigInt.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die diesen BigInt-Wert in der angegebenen Basis (radix) darstellt. Überschreibt die [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)-Methode.
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : Gibt diesen BigInt-Wert zurück. Überschreibt die [`Object.prototype.valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)-Methode.

## Beispiele

### Berechnung von Primzahlen

```js
// Returns true if the passed BigInt value is a prime number
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
