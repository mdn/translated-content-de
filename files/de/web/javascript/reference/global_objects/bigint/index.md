---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{JSRef}}

**`BigInt`** Werte repräsentieren numerische Werte, die [zu groß](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) sind, um durch den `number` {{Glossary("Primitive", "Primitive")}} dargestellt zu werden.

## Beschreibung

Ein **BigInt-Wert**, manchmal einfach nur **BigInt** genannt, ist ein `bigint` {{Glossary("Primitive", "Primitive")}}, das durch Anhängen von `n` an das Ende eines Ganzzahlliterals oder durch Aufrufen der {{jsxref("BigInt/BigInt", "BigInt()")}} Funktion (ohne den `new` Operator) mit einem Ganzzahl- oder Zeichenkettenwert erstellt wird.

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

BigInt-Werte sind in mancher Hinsicht ähnlich wie Number-Werte, unterscheiden sich jedoch in einigen wesentlichen Punkten: Ein BigInt-Wert kann nicht mit Methoden des eingebauten [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) Objekts verwendet werden und kann nicht mit einem Number-Wert in Operationen gemischt werden; sie müssen in denselben Typ umgewandelt werden. Seien Sie vorsichtig beim Konvertieren der Werte hin und her, da die Präzision eines BigInt-Werts möglicherweise verloren geht, wenn er in einen Number-Wert umgewandelt wird.

### Typinformationen

Bei einem Test gegen `typeof` ergibt ein BigInt-Wert (`bigint` Primitive) `"bigint"`:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Ein BigInt-Wert kann auch in einem `Object` verpackt werden:

```js
typeof Object(1n) === "object"; // true
```

### Operatoren

Die meisten Operatoren unterstützen BigInts, die meisten erlauben jedoch keine Operanden gemischten Typs — beide Operanden müssen entweder BigInt sein oder keines:

- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators): `+`, `-`, `*`, `/`, `%`, `**`
- [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators): `>>`, `<<`, `&`, `|`, `^`, `~`
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Inkrement/Dekrement](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement): `++`, `--`

Die booleschen Operatoren erlauben das Mischen von Numbers und BigInts als Operanden:

- [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) und [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) beruhen nur auf der {{Glossary("Truthy", "Wahrhaftigkeit")}} der Operanden

Einige Operatoren unterstützen BigInt überhaupt nicht:

- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) kann aufgrund der Konfliktnutzung in asm.js nicht unterstützt werden, sodass es [um asm.js nicht zu brechen](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs) weggelassen wurde.
- [Unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) ist der einzige bitweise Operator, der nicht unterstützt wird, da jeder BigInt-Wert signiert ist.

Spezialfälle:

- Addition (`+`) unter Beteiligung einer Zeichenkette und eines BigInt gibt eine Zeichenkette zurück.
- Division (`/`) kürzt Bruchanteile zu Null hin, da BigInt nicht in der Lage ist, Bruchmengen darzustellen.

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

Ein BigInt-Wert ist nicht streng gleich einem Number-Wert, aber er ist es _locker_:

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

Beachten Sie, dass Vergleiche mit `Object`-verpackten BigInt-Werten wie bei anderen Objekten nur Gleichheit anzeigen, wenn dieselbe Objektinstanz verglichen wird:

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Da das Konvertieren zwischen Number-Werten und BigInt-Werten zu einem Verlust der Präzision führen kann, wird Folgendes empfohlen:

- Verwenden Sie einen BigInt-Wert nur dann, wenn Werte größer als 2<sup>53</sup> vernünftigerweise zu erwarten sind.
- Konvertieren Sie nicht zwischen BigInt- und Number-Werten.

### Bedingte Anweisung

Ein BigInt-Wert folgt denselben Konvertierungsregeln wie Numbers, wenn:

- er in ein [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) umgewandelt wird: über die [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) Funktion;
- verwendet mit [logischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators) `||`, `&&` und `!`; oder
- innerhalb eines bedingten Tests wie einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisung.

Nämlich, nur `0n` ist {{Glossary("Falsy", "falsch")}}; alles andere ist {{Glossary("Truthy", "wahr")}}.

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

Die auf BigInt-Werten unterstützten Operationen sind nicht konstant und daher anfällig für [Timing-Angriffe](https://en.wikipedia.org/wiki/Timing_attack). JavaScript BigInts könnten daher gefährlich für den Einsatz in der Kryptographie sein, ohne mindernde Faktoren. Als ein sehr generisches Beispiel könnte ein Angreifer den Zeitunterschied zwischen `101n ** 65537n` und `17n ** 9999n` messen und die Größe der Geheimnisse wie privater Schlüssel aus der verstrichenen Zeit ableiten. Wenn Sie dennoch BigInts verwenden müssen, sehen Sie sich die [Timing-Angriff FAQ](https://timing.attacks.cr.yp.to/programming.html) für allgemeine Ratschläge zu diesem Thema an.

### Verwendung innerhalb von JSON

Die Verwendung von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit einem BigInt-Wert wirft einen `TypeError`, da BigInt-Werte standardmäßig nicht in JSON serialisiert werden. `JSON.stringify()` lässt jedoch speziell eine Hintertür für BigInt-Werte offen: Es würde versuchen, die Methode `toJSON()` des BigInt aufzurufen. (Dies tut sie bei keinem anderen primitiven Wert.) Daher können Sie Ihre eigene `toJSON()`-Methode implementieren (dies ist einer der wenigen Fälle, in denen das Patchen eingebauter Objekte nicht explizit abgeraten wird):

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

Anstelle eines Fehlers erzeugt `JSON.stringify()` nun eine Zeichenkette wie diese:

```js
console.log(JSON.stringify({ a: 1n }));
// {"a":{"$bigint":"1"}}
```

Wenn Sie `BigInt.prototype` nicht patchen möchten, können Sie den [`replacer`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter) Parameter von `JSON.stringify` verwenden, um BigInt-Werte zu serialisieren:

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

Sie können dann den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) Parameter von `JSON.parse` verwenden, um sie zu verarbeiten:

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
> Während es möglich ist, den Replacer von `JSON.stringify()` generisch zu gestalten und BigInt-Werte für alle Objekte wie oben gezeigt richtig zu serialisieren, muss der Reviver von `JSON.parse()` mit Vorsicht verwendet werden, da die Serialisierung _unumkehrbar_ ist: Es ist nicht möglich, zwischen einem Objekt, das zufällig eine Eigenschaft namens `$bigint` hat, und einem tatsächlichen BigInt zu unterscheiden.
>
> Darüber hinaus erstellt das obige Beispiel ein gesamtes Objekt während des Ersetzens und Wiederherstellens, was Leistungs- oder Speicherimplikationen für größere Objekte mit vielen BigInts haben kann. Wenn Sie die Form der Nutzlast kennen, kann es besser sein, sie einfach als Zeichenketten zu serialisieren und sie basierend auf dem Namen des Eigenschaftsschlüssels wiederherzustellen.

Tatsächlich erlaubt JSON Zahlenliterale, die beliebig lang sind; sie können nur in JavaScript nicht mit voller Präzision geparst werden. Wenn Sie mit einem anderen Programm in einer Sprache kommunizieren, die längere Ganzzahlen unterstützt (wie 64-Bit-Ganzzahlen), und Sie das BigInt als JSON-Zahl statt als JSON-Zeichenkette übertragen möchten, siehe [Verlustfreie Zahlenserialisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

### BigInt-Umwandlung

Viele eingebaute Operationen, die BigInts erwarten, wandeln ihre Argumente zuerst in BigInts um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint) lässt sich wie folgt zusammenfassen:

- BigInts werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- `true` wird in `1n` umgewandelt; `false` wird in `0n` umgewandelt.
- Strings werden durch Parsen als ob sie ein Ganzzahlliteral enthalten, konvertiert. Jeder Parsefehler führt zu einem {{jsxref("SyntaxError")}}. Die Syntax ist ein Subset von [string numeric literals](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), bei dem Dezimalpunkte oder Exponent-Indikatoren nicht erlaubt sind.
- [Numbers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) werfen einen {{jsxref("TypeError")}}, um ungewollte implizite Konvertierungen zu verhindern, die zu Präzisionsverlust führen.
- [Symbols](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in einen Primitive umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()`, und `toString()` Methoden in dieser Reihenfolge aufgerufen werden. Der resultierende Primitive wird dann in ein BigInt umgewandelt.

Der beste Weg, um nahezu denselben Effekt in JavaScript zu erzielen, ist die Verwendung der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Funktion: `BigInt(x)` verwendet denselben Algorithmus zur Konvertierung von `x`, außer dass [Numbers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) keinen {{jsxref("TypeError")}} werfen, sondern in BigInts umgewandelt werden, wenn sie Ganzzahlen sind.

Beachten Sie, dass eingebaute Operationen, die BigInts erwarten, das BigInt oft auf eine feste Breite nach der Umwandlung kürzen. Dies umfasst {{jsxref("BigInt.asIntN()")}}, {{jsxref("BigInt.asUintN()")}}, und Methoden von {{jsxref("BigInt64Array")}} und {{jsxref("BigUint64Array")}}.

## Konstruktor

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : Gibt primitive Werte vom Typ BigInt zurück. Wirft einen Fehler, wenn sie mit `new` aufgerufen wird.

## Statische Methoden

- {{jsxref("BigInt.asIntN()")}}
  - : Begrenzt einen BigInt-Wert auf einen vorzeichenbehafteten Ganzzahlwert und gibt diesen Wert zurück.
- {{jsxref("BigInt.asUintN()")}}
  - : Begrenzt einen BigInt-Wert auf einen vorzeichenlosen Ganzzahlwert und gibt diesen Wert zurück.

## Instanzvariablen

Diese Eigenschaften sind auf `BigInt.prototype` definiert und werden von allen `BigInt`-Instanzen geteilt.

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `BigInt`-Instanzen ist der anfängliche Wert der {{jsxref("BigInt/BigInt", "BigInt")}} Konstruktor.
- `BigInt.prototype[Symbol.toStringTag]`
  - : Der ursprüngliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenkette `"BigInt"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `BigInt` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem BigInt als `thisArg` auf.

## Instanzmethoden

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : Gibt eine zeichenkettenbasierte, sprachensensitive Darstellung dieses BigInt-Werts zurück. Überschreibt die [`Object.prototype.toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) Methode.
- {{jsxref("BigInt.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die diesen BigInt-Wert in der angegebenen Basis (Radix) darstellt. Überschreibt die [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) Methode.
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : Gibt diesen BigInt-Wert zurück. Überschreibt die [`Object.prototype.valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) Methode.

## Beispiele

### Primzahlen berechnen

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
