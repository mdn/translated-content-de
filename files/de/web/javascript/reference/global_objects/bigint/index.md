---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`BigInt`** Werte repräsentieren Ganzzahlwerte, die [zu hoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) oder [zu niedrig](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) sind, um durch den `number` {{Glossary("Primitive", "Primitiv")}} dargestellt zu werden.

## Beschreibung

Ein **BigInt Wert**, manchmal einfach nur **BigInt** genannt, ist ein `bigint` {{Glossary("Primitive", "Primitiv")}}, das durch Anhängen von `n` an das Ende eines ganzzahligen Literals erstellt wird oder durch Aufrufen der {{jsxref("BigInt/BigInt", "BigInt()")}} Funktion (ohne den `new` Operator) unter Angabe eines Ganzzahlen- oder Stringwerts.

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

BigInt-Werte sind in einigen Aspekten ähnlich zu Number-Werten, unterscheiden sich jedoch in einigen wichtigen Punkten: Ein BigInt-Wert kann nicht mit Methoden des eingebauten [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) Objekts verwendet werden und kann in Operationen nicht mit einem Number-Wert gemischt werden; sie müssen auf denselben Typ gezwungen werden. Seien Sie vorsichtig beim Hin- und Herzwingen von Werten, da die Genauigkeit eines BigInt-Werts verloren gehen kann, wenn er in einen Number-Wert umgewandelt wird.

### Typinformationen

Beim Testen mit `typeof` gibt ein BigInt-Wert (`bigint` Primitiv) `"bigint"` zurück:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Ein BigInt-Wert kann auch in einem `Object` verpackt werden:

```js
typeof Object(1n) === "object"; // true
```

### Operatoren

Die meisten Operatoren unterstützen BigInts, jedoch erlauben die meisten keine Operanden aus gemischten Typen — beide Operanden müssen BigInt sein oder keiner:

- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators): `+`, `-`, `*`, `/`, `%`, `**`
- [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators): `>>`, `<<`, `&`, `|`, `^`, `~`
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Inkrement/Dekrement](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement): `++`, `--`

Die boolean-rückgebenden Operatoren erlauben die Mischung von Zahlen und BigInts als Operanden:

- [Relationsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) und [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) verlassen sich nur auf die {{Glossary("Truthy", "Truthiness")}} der Operanden

Einige Operatoren unterstützen BigInt überhaupt nicht:

- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) kann nicht unterstützt werden aufgrund der widersprüchlichen Nutzung in asm.js und wurde ausgelassen [um asm.js nicht zu beschädigen](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).
- [Unsigned Right Shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) ist der einzige bitweise Operator, der nicht unterstützt wird, da jeder BigInt-Wert ein Vorzeichen hat.

Besondere Fälle:

- Addition (`+`), die eine Zeichenkette und ein BigInt beinhaltet, gibt eine Zeichenkette zurück.
- Division (`/`) schneidet gebrochene Komponenten Richtung Null ab, da BigInt nicht in der Lage ist, gebrochene Mengen darzustellen.

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

Ein BigInt-Wert ist nicht strikt gleich einem Number-Wert, aber er ist es _lose_:

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

BigInt- und Number-Werte können in Arrays gemischt und sortiert werden:

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

Beachten Sie, dass Vergleiche mit `Object`-eingewickelten BigInt-Werten wie mit anderen Objekten agieren und nur Gleichheit anzeigen, wenn derselbe Objektinstanz verglichen wird:

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Da das Erzwingen zwischen Number-Werten und BigInt-Werten zu einem Verlust der Präzision führen kann, wird folgendes empfohlen:

- Verwenden Sie einen BigInt-Wert nur, wenn Werte größer als 2<sup>53</sup> vernünftigerweise erwartet werden.
- Erzwingen Sie nicht zwischen BigInt-Werten und Number-Werten.

### Bedingte Anweisungen

Ein BigInt-Wert folgt denselben Konvertierungsregeln wie Numbers, wenn:

- er in einen [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) konvertiert wird: über die [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) Funktion;
- wenn er mit [logischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators) `||`, `&&` und `!` verwendet wird; oder
- innerhalb eines bedingten Tests wie einem [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Statement.

Nämlich, nur `0n` ist {{Glossary("Falsy", "falsy")}}; alles andere ist {{Glossary("Truthy", "truthy")}}.

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

### Kryptografie

Die auf BigInt-Werten unterstützten Operationen sind nicht konstant der Zeit und somit anfällig für [Timing-Angriffe](https://en.wikipedia.org/wiki/Timing_attack). JavaScript BigInts könnten daher gefährlich sein, wenn sie ohne Abhilfemaßnahmen in der Kryptografie verwendet werden. Ein sehr generisches Beispiel könnte ein Angreifer die Zeitdifferenz zwischen `101n ** 65537n` und `17n ** 9999n` messen und die Größe von Geheimnissen, wie privaten Schlüsseln, basierend auf der verstrichenen Zeit ableiten. Wenn Sie dennoch BigInts verwenden müssen, schauen Sie sich den [Timing Attack FAQ](https://timing.attacks.cr.yp.to/programming.html) für allgemeine Ratschläge zu diesem Thema an.

### Verwendung innerhalb von JSON

Die Verwendung von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit einem BigInt-Wert wird einen `TypeError` auslösen, da BigInt-Werte im JSON standardmäßig nicht serialisiert werden. Allerdings lässt `JSON.stringify()` speziell eine Hintertür für BigInt-Werte: es versucht, die `toJSON()` Methode des BigInt aufzurufen. (Dies geschieht nicht für andere primitive Werte.) Daher können Sie Ihre eigene `toJSON()` Methode implementieren (was einer der wenigen Fälle ist, in denen das Patchen von eingebauten Objekten nicht ausdrücklich entmutigt wird):

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

Anstatt einen Fehler auszulösen, erzeugt `JSON.stringify()` nun einen String wie diesen:

```js
console.log(JSON.stringify({ a: 1n }));
// {"a":{"$bigint":"1"}}
```

Wenn Sie nicht `BigInt.prototype` patchen möchten, können Sie den [`replacer`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter) Parameter von `JSON.stringify` verwenden, um BigInt-Werte zu serialisieren:

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

Sie können dann den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) Parameter von `JSON.parse` verwenden, um sie zu handhaben:

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
> Obwohl es möglich ist, den Replacer von `JSON.stringify()` generisch zu machen und BigInt-Werte für alle Objekte wie oben gezeigt korrekt zu serialisieren, muss der Reviver von `JSON.parse()` mit Vorsicht eingesetzt werden, da die Serialisierung _irreversibel_ ist: es ist nicht möglich, zwischen einem Objekt, das zufällig eine Eigenschaft namens `$bigint` hat, und einem tatsächlichen BigInt zu unterscheiden.
>
> Darüber hinaus erzeugt das obige Beispiel während des Ersetzens und Wiederherstellens ein gesamtes Objekt, was für größere Objekte, die viele BigInts enthalten, Leistungs- oder Speicherimplikationen haben kann. Wenn Sie die Form der Nutzlast kennen, kann es besser sein, sie einfach als Strings zu serialisieren und sie anhand des Eigenschaftsschlüsselnamens wiederherzustellen.

Tatsächlich erlaubt JSON Zahlenliterale, die willkürlich lang sind; sie können nur in JavaScript nicht mit voller Präzision geparst werden. Wenn Sie mit einem anderen Programm in einer Sprache kommunizieren, die längere Ganzzahlen unterstützt (wie 64-Bit-Ganzzahlen), und Sie möchten das BigInt lieber als JSON-Zahl anstatt als JSON-String übertragen, siehe [Lossless number serialization](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

### BigInt-Koerzierung

Viele eingebaute Operationen, die BigInts erwarten, zwingen ihre Argumente zuerst zu BigInts. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint) kann wie folgt zusammengefasst werden:

- BigInts werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- `true` wird zu `1n`; `false` wird zu `0n`.
- Strings werden umgewandelt, indem sie so geparst werden, als ob sie ein Ganzzahlenliteral enthalten. Jeder Parsing-Fehler führt zu einem {{jsxref("SyntaxError")}}. Die Syntax ist ein Teilmenge von [Nummerische String-Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wobei Dezimalpunkte oder Exponenten-Indikatoren nicht erlaubt sind.
- [Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) werfen einen {{jsxref("TypeError")}}, um zu verhindern, dass unbeabsichtigte implizite Koerzierung zu einem Verlust der Genauigkeit führt.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zunächst [in ein primitives umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) durch Aufrufen ihrer [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()`, und `toString()` Methoden, in dieser Reihenfolge. Das resultierende Primitiv wird dann in ein BigInt umgewandelt.

Der beste Weg, um nahezu denselben Effekt in JavaScript zu erzielen, ist die Verwendung der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Funktion: `BigInt(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, mit der Ausnahme, dass [Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) keinen {{jsxref("TypeError")}} werfen, sondern zu BigInts konvertiert werden, wenn sie Ganzzahlen sind.

Beachten Sie, dass eingebaute Operationen, die BigInts erwarten, oft das BigInt nach der Koerzierung auf eine feste Breite kürzen. Dies schließt {{jsxref("BigInt.asIntN()")}}, {{jsxref("BigInt.asUintN()")}}, und Methoden von {{jsxref("BigInt64Array")}} und {{jsxref("BigUint64Array")}} ein.

## Konstruktor

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : Gibt primitive Werte des Typs BigInt zurück. Wirft einen Fehler, wenn er mit `new` aufgerufen wird.

## Statische Methoden

- {{jsxref("BigInt.asIntN()")}}
  - : Begrenzt einen BigInt-Wert auf einen vorzeichenbehafteten Ganzzahlenwert und gibt diesen Wert zurück.
- {{jsxref("BigInt.asUintN()")}}
  - : Begrenzt einen BigInt-Wert auf einen nicht vorzeichenbehafteten Ganzzahlenwert und gibt diesen Wert zurück.

## Instanzeigenschaften

Diese Eigenschaften sind in `BigInt.prototype` definiert und werden von allen `BigInt` Instanzen geteilt.

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `BigInt` Instanzen ist der Anfangswert der {{jsxref("BigInt/BigInt", "BigInt")}} Konstruktor.
- `BigInt.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"BigInt"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da jedoch `BigInt` auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem BigInt als `thisArg` auf.

## Instanzmethoden

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachabhängigen Darstellung dieses BigInt-Werts zurück. Überschreibt die [`Object.prototype.toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) Methode.
- {{jsxref("BigInt.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen BigInt-Wert in der angegebenen Basis (Radix) repräsentiert. Überschreibt die [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) Methode.
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : Gibt diesen BigInt-Wert zurück. Überschreibt die [`Object.prototype.valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) Methode.

## Beispiele

### Berechnen von Primzahlen

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
> Die `isPrime()` Implementierung dient nur zur Demonstration. Für eine Anwendung in der realen Welt sollten Sie einen stark memoisierten Algorithmus wie das [Sieb des Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
