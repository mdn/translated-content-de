---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: 9f46f08d20b21498293cbf6b84f508103272ec6f
---

**`BigInt`** Werte repräsentieren Ganzzahlen, die [zu hoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) oder [zu niedrig](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) sind, um durch den `number` {{Glossary("Primitive", "Primitivtyp")}} dargestellt zu werden.

## Beschreibung

Ein **BigInt-Wert**, auch manchmal einfach nur **BigInt** genannt, ist ein `bigint` {{Glossary("Primitive", "Primitivtyp")}}, der erstellt wird, indem `n` an das Ende eines ganzzahligen Literals angefügt wird, oder indem die {{jsxref("BigInt/BigInt", "BigInt()")}}-Funktion (ohne den `new`-Operator) aufgerufen und ihr ein ganzzahliger oder ein string-Wert übergeben wird.

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

BigInt-Werte sind in einigen Aspekten ähnlich wie Number-Werte, unterscheiden sich jedoch in einigen wesentlichen Punkten: Ein BigInt-Wert kann nicht mit Methoden des eingebauten [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math)-Objekts verwendet werden und kann in Operationen nicht mit einem Number-Wert gemischt werden; sie müssen auf den gleichen Typ gebracht werden. Seien Sie jedoch vorsichtig beim Typwechsel der Werte, da die Genauigkeit eines BigInt-Werts verloren gehen kann, wenn er in einen Number-Wert umgewandelt wird.

### Typinformationen

Wenn gegen `typeof` getestet wird, gibt ein BigInt-Wert (`bigint` Primitivtyp) `"bigint"` zurück:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Ein BigInt-Wert kann auch in ein `Object` eingeschlossen werden:

```js
typeof Object(1n) === "object"; // true
```

### Operatoren

Die meisten Operatoren unterstützen BigInts, jedoch erlauben die meisten keine Operanden von gemischten Typen — beide Operanden müssen BigInt sein oder keiner:

- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators): `+`, `-`, `*`, `/`, `%`, `**`
- [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators): `>>`, `<<`, `&`, `|`, `^`, `~`
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Inkrement/Decrement](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement): `++`, `--`

Die Operatoren, die einen Booleschen Wert zurückgeben, erlauben eine Mischung von Zahlen und BigInts als Operanden:

- [Relationale Operatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) und [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) verlassen sich nur auf die {{Glossary("Truthy", "Wahrhaftigkeit")}} der Operanden.

Einige wenige Operatoren unterstützen BigInt überhaupt nicht:

- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) kann nicht unterstützt werden, da es in asm.js widersprüchlich genutzt wird, und wurde daher [um asm.js nicht zu stören](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs), weggelassen.
- [Unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) ist der einzige Bitoperator, der nicht unterstützt wird, da jeder BigInt-Wert vorzeichenbehaftet ist.

Spezialfälle:

- Addition (`+`) mit einem String und einem BigInt gibt einen String zurück.
- Division (`/`) kürzt zu Null hin ab, da BigInt keine Bruchzahlen darstellen kann.

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

Ein BigInt-Wert ist nicht streng gleich einem Number-Wert, aber es ist _locker_ so:

```js
0n === 0; // false
0n == 0; // true
```

Ein Number-Wert und ein BigInt-Wert können wie gewöhnlich verglichen werden:

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

Beachten Sie, dass Vergleiche mit `Object`-eingeschlossenen BigInt-Werten wie bei anderen Objekten funktionieren, wobei Gleichheit nur angezeigt wird, wenn dieselbe Objektinstanz verglichen wird:

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Da der Typwechsel zwischen Number-Werten und BigInt-Werten zu einem Verlust an Genauigkeit führen kann, wird Folgendes empfohlen:

- Verwenden Sie einen BigInt-Wert nur, wenn Werte größer als 2<sup>53</sup> voraussichtlich auftreten.
- Vermeiden Sie den Typwechsel zwischen BigInt-Werten und Number-Werten.

### Bedingte Anweisungen

Ein BigInt-Wert folgt denselben Konvertierungsregeln wie Zahlen, wenn:

- er in ein [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) konvertiert wird: durch die [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)-Funktion;
- wenn er mit [logischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators) `||`, `&&` und `!` verwendet wird; oder
- innerhalb eines bedingten Tests wie einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung.

Genauer gesagt, nur `0n` ist {{Glossary("Falsy", "falsch")}}; alles andere ist {{Glossary("Truthy", "wahr")}}.

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

Die auf BigInt-Werten unterstützten Operationen sind nicht konstant in der Zeit und sind daher anfällig für [Timing-Angriffe](https://en.wikipedia.org/wiki/Timing_attack). JavaScript BigInts könnten daher gefährlich sein für den Einsatz in der Kryptographie ohne abschwächende Maßnahmen. Als sehr generisches Beispiel könnte ein Angreifer den Zeitunterschied zwischen `101n ** 65537n` und `17n ** 9999n` messen und die Größe von Geheimnissen, wie privaten Schlüsseln, basierend auf der verstrichenen Zeit ablesen. Falls Sie dennoch BigInts verwenden müssen, schauen Sie sich das [Timing attack FAQ](https://timing.attacks.cr.yp.to/programming.html) für allgemeine Ratschläge zu diesem Thema an.

### Verwendung innerhalb von JSON

Die Verwendung von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit einem BigInt-Wert wird einen `TypeError` auslösen, da BigInt-Werte standardmäßig nicht in JSON serialisiert werden. Allerdings lässt `JSON.stringify()` speziell eine Hintertür für BigInt-Werte offen: Es wird versuchen, die `toJSON()` Methode des BigInt aufzurufen. (Das tut es bei keinem anderen Primitivwert.) Daher können Sie Ihre eigene `toJSON()` Methode implementieren (was einer der wenigen Fälle ist, in denen das Patchen von eingebauten Objekten nicht explizit entmutigt wird):

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

Statt zu werfen, erzeugt `JSON.stringify()` jetzt einen String wie diesen:

```js
console.log(JSON.stringify({ a: 1n }));
// {"a":{"$bigint":"1"}}
```

Falls Sie nicht `BigInt.prototype` patchen möchten, können Sie den [`replacer`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter) Parameter von `JSON.stringify` verwenden, um BigInt-Werte zu serialisieren:

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

Sie können anschließend den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) Parameter von `JSON.parse` nutzen, um sie zu handhaben:

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
> Während es möglich ist, den Replacer von `JSON.stringify()` generisch zu machen und BigInt-Werte für alle Objekte richtig zu serialisieren, muss der Reviver von `JSON.parse()` mit Vorsicht verwendet werden, da die Serialisierung _irreversibel_ ist: Es ist nicht möglich, zwischen einem Objekt, das zufällig eine Eigenschaft namens `$bigint` hat, und einem tatsächlichen BigInt zu unterscheiden.
>
> Außerdem erstellt das obige Beispiel ein ganzes Objekt während des Ersetzens und Wiederherstellens, was bei größeren Objekten mit vielen BigInts Leistungs- oder Speicherimplikationen haben kann. Wenn Sie die Struktur des Payloads kennen, könnte es besser sein, sie einfach als Strings zu serialisieren und basierend auf dem Eigenschaftsschlüsselnamen wiederherzustellen.

In der Tat erlaubt JSON Zahlenliterale, die beliebig lang sind; sie können in JavaScript nur nicht mit voller Präzision geparst werden. Wenn Sie mit einem anderen Programm in einer Sprache kommunizieren, die längere Ganzzahlen (z. B. 64-Bit-Ganzzahlen) unterstützt, und Sie das BigInt als JSON-Zahl anstatt eines JSON-Strings übermitteln möchten, siehe [verlustfreie Zahlen Serialisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

### BigInt-Typwechsel

Viele eingebaute Operationen, die BigInts erwarten, konvertieren zuerst ihre Argumente zu BigInts. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint) kann wie folgt zusammengefasst werden:

- BigInts werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- `true` wird zu `1n`; `false` wird zu `0n`.
- Strings werden konvertiert, indem sie analysiert werden, als ob sie ein Ganzzahlenliteral enthalten würden. Jeder Parsing-Fehler führt zu einem {{jsxref("SyntaxError")}}. Die Syntax ist ein Teil der [stringnumerischen Literal](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wobei Dezimalpunkte oder Exponentialindikatoren nicht erlaubt sind.
- [Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) werfen einen {{jsxref("TypeError")}}, um ungewollte implizite Umwandlungen, die zu einem Verlust an Präzision führen, zu vermeiden.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein Primärwert konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()` und `toString()` Methoden, in dieser Reihenfolge, aufgerufen werden. Der resultierende Primärwert wird dann in ein BigInt konvertiert.

Der beste Weg, um annähernd den gleichen Effekt in JavaScript zu erzielen, ist die Verwendung der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion: `BigInt(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, außer dass [Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) keinen {{jsxref("TypeError")}} werfen, sondern in BigInts umgewandelt werden, wenn sie Ganzzahlen sind.

Beachten Sie, dass eingebaute Operationen, die BigInts erwarten, oft das BigInt nach dem Typwechsel auf eine feste Breite kürzen. Dies umfasst {{jsxref("BigInt.asIntN()")}}, {{jsxref("BigInt.asUintN()")}} und Methoden von {{jsxref("BigInt64Array")}} und {{jsxref("BigUint64Array")}}.

## Konstruktor

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : Gibt primitive Werte vom Typ BigInt zurück. Wirft einen Fehler, wenn sie mit `new` aufgerufen wird.

## Statische Methoden

- {{jsxref("BigInt.asIntN()")}}
  - : Kürzt einen `BigInt`-Wert auf die angegebene Anzahl der am wenigsten signifikanten Bits und gibt diesen als vorzeichenbehafteten Ganzzahl zurück.
- {{jsxref("BigInt.asUintN()")}}
  - : Kürzt einen `BigInt`-Wert auf die angegebene Anzahl der am wenigsten signifikanten Bits und gibt diesen als vorzeichenlose Ganzzahl zurück.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `BigInt.prototype` definiert und werden von allen `BigInt`-Instanzen geteilt.

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `BigInt`-Instanzen ist der Anfangswert der {{jsxref("BigInt/BigInt", "BigInt")}}-Konstruktor.
- `BigInt.prototype[Symbol.toStringTag]`
  - : Der ursprüngliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"BigInt"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `BigInt` allerdings auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString)-Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem BigInt als `thisArg` auf.

## Instanz-Methoden

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses BigInt-Werts zurück. Überschreibt die [`Object.prototype.toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)-Methode.
- {{jsxref("BigInt.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen BigInt-Wert in der angegebenen Basis (Radix) darstellt. Überschreibt die [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)-Methode.
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : Gibt diesen BigInt-Wert zurück. Überschreibt die [`Object.prototype.valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)-Methode.

## Beispiele

### Primzahlen berechnen

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
> Die `isPrime()`-Implementierung dient nur zur Demonstration. Für eine echte Anwendung sollten Sie einen stark {{Glossary("Memoization", "memoisierten")}} Algorithmus wie das [Sieb des Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
