---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

**`BigInt`**-Werte repräsentieren Ganzzahlen, die [zu groß](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) oder [zu klein](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) sind, um durch den `number`-{{Glossary("Primitive", "Basisdatentyp")}} dargestellt zu werden.

## Beschreibung

Ein **BigInt-Wert**, manchmal einfach nur **BigInt** genannt, ist ein `bigint`-{{Glossary("Primitive", "Basisdatentyp")}}, der erstellt wird, indem man ein `n` an das Ende eines Ganzzahl-Literals anfügt oder indem man die {{jsxref("BigInt/BigInt", "BigInt()")}}-Funktion (ohne den `new`-Operator) aufruft und ihr einen Ganzzahl- oder String-Wert gibt.

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

BigInt-Werte sind in einigen Aspekten Number-Werten ähnlich, unterscheiden sich jedoch in einigen wichtigen Punkten: Ein BigInt-Wert kann nicht mit Methoden des eingebauten [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math)-Objekts verwendet werden und kann nicht in Operationen mit einem Number-Wert gemischt werden; sie müssen in denselben Typ umgewandelt werden. Seien Sie vorsichtig bei der Umwandlung von Werten hin und her, da die Präzision eines BigInt-Wertes verloren gehen kann, wenn er in einen Number-Wert umgewandelt wird.

### Typinformationen

Wenn man `typeof` auf einen BigInt-Wert (`bigint`-Basisdatentyp) anwendet, erhält man `"bigint"`:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Ein BigInt-Wert kann auch in einem `Object` eingepackt werden:

```js
typeof Object(1n) === "object"; // true
```

### Operatoren

Die meisten Operatoren unterstützen BigInts, jedoch erlauben die meisten es nicht, Operanden gemischter Typen zu verwenden — beide Operanden müssen BigInt oder keiner sein:

- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators): `+`, `-`, `*`, `/`, `%`, `**`
- [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators): `>>`, `<<`, `&`, `|`, `^`, `~`
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Inkrement/Dekrement](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement): `++`, `--`

Die boolesche Rückgabe der Operatoren erlaubt das Mischen von Numbers und BigInts als Operanden:

- [Relationale Operatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) und [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) verlassen sich nur auf die {{Glossary("Truthy", "Wahrhaftigkeit")}} von Operanden

Einige Operatoren unterstützen BigInt überhaupt nicht:

- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) kann aufgrund der widersprüchlichen Verwendung in asm.js nicht unterstützt werden, daher wurde es ausgelassen, [um asm.js nicht zu stören](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).
- [Unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) ist der einzige bitweise Operator, der nicht unterstützt wird, da jeder BigInt-Wert vorzeichenbehaftet ist.

Sonderfälle:

- Addition (`+`) mit einem String und einem BigInt gibt einen String zurück.
- Division (`/`) schneidet Nachkommastellen in Richtung Null ab, da BigInt keine Bruchmengen darstellen kann.

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

Ein BigInt-Wert ist nicht strikt gleich einem Number-Wert, aber er ist _lose_ so:

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

Beachten Sie, dass Vergleiche mit `Object`-eingepackten BigInt-Werten wie bei anderen Objekten nur Gleichheit anzeigen, wenn dieselbe Objektinstanz verglichen wird:

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Da die Umwandlung zwischen Number-Werten und BigInt-Werten zum Verlust der Genauigkeit führen kann, werden folgende Empfehlungen gegeben:

- Verwenden Sie einen BigInt-Wert nur, wenn Werte größer als 2<sup>53</sup> vernünftigerweise erwartet werden.
- Vermeiden Sie das Umwandeln zwischen BigInt-Werten und Number-Werten.

### Konditionen

Ein BigInt-Wert folgt denselben Umwandlungsregeln wie Numbers, wenn:

- er in einen [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) umgewandelt wird: über die [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)-Funktion;
- bei Verwendung mit [logischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators) `||`, `&&` und `!`; oder
- innerhalb eines konditionalen Tests wie einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung.

Nur `0n` ist {{Glossary("Falsy", "falsch")}}; alles andere ist {{Glossary("Truthy", "wahr")}}.

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

Die auf BigInt-Werten unterstützten Operationen sind nicht konstant in der Ausführungszeit und sind daher anfällig für [Timing-Angriffe](https://en.wikipedia.org/wiki/Timing_attack). JavaScript BigInts könnten daher für die Verwendung in der Kryptografie gefährlich sein, ohne mildernde Maßnahmen zu ergreifen. Ein sehr generisches Beispiel: Ein Angreifer könnte die Zeitdifferenz zwischen `101n ** 65537n` und `17n ** 9999n` messen und die Größe von Geheimnissen, wie private Schlüssel, basierend auf der vergangenen Zeit ableiten. Wenn Sie dennoch BigInts verwenden müssen, werfen Sie einen Blick auf die [Timing Attack FAQ](https://timing.attacks.cr.yp.to/programming.html) für allgemeine Ratschläge zu diesem Thema.

### Verwendung innerhalb von JSON

Die Verwendung von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit einem BigInt-Wert führt zu einem `TypeError`, da BigInt-Werte standardmäßig nicht in JSON serialisiert werden. `JSON.stringify()` lässt jedoch ausdrücklich eine Hintertür für BigInt-Werte offen: Es versucht, die `toJSON()`-Methode des BigInts aufzurufen. (Dies tut es für keine anderen Basisdatentypen.) Deshalb können Sie Ihre eigene `toJSON()`-Methode implementieren (dies ist einer der wenigen Fälle, in denen das Patchen von eingebauten Objekten nicht ausdrücklich abgeraten wird):

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

Statt einen Fehler zu werfen, produziert `JSON.stringify()` jetzt einen String wie diesen:

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

Anschließend können Sie mit dem [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter)-Parameter von `JSON.parse` mit ihnen umgehen:

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
> Während es möglich ist, den Replacer von `JSON.stringify()` allgemein zu machen und BigInt-Werte für alle Objekte korrekt zu serialisieren, muss der Reviver von `JSON.parse()` mit Vorsicht verwendet werden, da die Serialisierung _irreversibel_ ist: Es ist nicht möglich, zwischen einem Objekt, das zufällig eine Eigenschaft namens `$bigint` hat, und einem tatsächlichen BigInt zu unterscheiden.
>
> Darüber hinaus erzeugt das obige Beispiel beim Ersetzen und Wiederherstellen ein ganzes Objekt, was für größere Objekte, die viele BigInts enthalten, Leistungs- oder Speicherimplikationen haben kann. Wenn Sie die Struktur des Payloads kennen, ist es möglicherweise besser, sie einfach als Strings zu serialisieren und sie basierend auf dem Namen des Eigenschaftsschlüssels wiederherzustellen.

Tatsächlich erlaubt JSON Zahlenliterale beliebiger Länge; sie können jedoch in JavaScript nicht mit voller Genauigkeit geparst werden. Wenn Sie mit einem anderen Programm in einer Sprache kommunizieren, die längere Ganzzahlen (wie 64-Bit-Ganzzahlen) unterstützt, und Sie das BigInt als JSON-Zahl anstelle eines JSON-Strings übertragen möchten, siehe [Lossless number serialization](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

### BigInt-Umwandlung

Viele eingebaute Operationen, die BigInts erwarten, wandeln ihre Argumente zuerst in BigInts um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint) kann wie folgt zusammengefasst werden:

- BigInts werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- `true` wird in `1n` umgewandelt; `false` wird in `0n` umgewandelt.
- Zeichenketten werden durch Parsen als Integer-Literal konvertiert. Jegliches Parsingversagen führt zu einem {{jsxref("SyntaxError")}}. Die Syntax ist ein Teilmenge von [String-Zahlliteralen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wobei Dezimalpunkte oder Exponentenzeichen nicht erlaubt sind.
- [Numbers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) werfen einen {{jsxref("TypeError")}}, um unbeabsichtigte implizite Umwandlungen, die zu einem Verlust der Genauigkeit führen, zu verhindern.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in einen primitiven Typ umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()` und `toString()`-Methoden in dieser Reihenfolge aufgerufen werden. Der resultierende primitive Wert wird dann in ein BigInt konvertiert.

Der beste Weg, um fast denselben Effekt in JavaScript zu erzielen, ist über die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion: `BigInt(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, mit der Ausnahme, dass [Numbers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) keinen {{jsxref("TypeError")}} werfen, sondern in BigInts konvertiert werden, wenn sie Ganzzahlen sind.

Beachten Sie, dass eingebaute Operationen, die BigInts erwarten, BigInts oft nach der Umwandlung auf eine feste Breite kürzen. Dazu gehören {{jsxref("BigInt.asIntN()")}}, {{jsxref("BigInt.asUintN()")}}, und Methoden von {{jsxref("BigInt64Array")}} und {{jsxref("BigUint64Array")}}.

## Konstruktor

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : Gibt primitive Werte vom Typ BigInt zurück. Wirft einen Fehler, wenn mit `new` aufgerufen.

## Statische Methoden

- {{jsxref("BigInt.asIntN()")}}
  - : Klemmt einen BigInt-Wert auf einen vorzeichenbehafteten Integerwert und gibt diesen Wert zurück.
- {{jsxref("BigInt.asUintN()")}}
  - : Klemmt einen BigInt-Wert auf einen nicht vorzeichenbehafteten Integerwert und gibt diesen Wert zurück.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `BigInt.prototype` definiert und werden von allen `BigInt`-Instanzen geteilt.

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `BigInt`-Instanzen ist der Anfangswert der {{jsxref("BigInt/BigInt", "BigInt")}}-Konstruktor.
- `BigInt.prototype[Symbol.toStringTag]`
  - : Der Ausgangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"BigInt"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `BigInt` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString)-Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem BigInt als `thisArg` auf.

## Instanz-Methoden

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses BigInt-Wertes zurück. Überschreibt die [`Object.prototype.toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)-Methode.
- {{jsxref("BigInt.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen BigInt-Wert im angegebenen Radix (Basis) darstellt. Überschreibt die [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)-Methode.
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : Gibt diesen BigInt-Wert zurück. Überschreibt die [`Object.prototype.valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)-Methode.

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
