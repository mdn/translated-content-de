---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`BigInt`**-Werte repräsentieren numerische Werte, die [zu groß](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) sind, um durch den `number`-Primitivtyp dargestellt zu werden.

## Beschreibung

Ein **BigInt-Wert**, manchmal einfach nur **BigInt** genannt, ist ein `bigint`-{{Glossary("Primitive", "Primitiv")}}, der erstellt wird, indem man an das Ende eines Integer-Literals ein `n` anhängt oder indem die {{jsxref("BigInt/BigInt", "BigInt()")}}-Funktion (ohne den `new`-Operator) aufgerufen und ein Integer- oder String-Wert übergeben wird.

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

BigInt-Werte sind in einigen Aspekten ähnlich zu Number-Werten, unterscheiden sich jedoch in einigen Schlüsselbereichen: Ein BigInt-Wert kann nicht mit Methoden des eingebauten [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math)-Objekts verwendet werden und kann in Operationen nicht mit einem Number-Wert gemischt werden; sie müssen in denselben Typ umgewandelt werden. Seien Sie vorsichtig, wenn Sie Werte hin und her umwandeln, da die Genauigkeit eines BigInt-Werts verloren gehen kann, wenn er in einen Number-Wert umgewandelt wird.

### Typinformationen

Wenn BigInt-Werte (`bigint`-Primitiv) gegen `typeof` getestet werden, geben sie `"bigint"` zurück:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Ein BigInt-Wert kann auch in ein `Object` verpackt werden:

```js
typeof Object(1n) === "object"; // true
```

### Operatoren

Die meisten Operatoren unterstützen BigInts, jedoch erlauben die meisten nicht, Operanden gemischter Typen zu verwenden — beide Operanden müssen BigInt sein oder keiner:

- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators): `+`, `-`, `*`, `/`, `%`, `**`
- [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators): `>>`, `<<`, `&`, `|`, `^`, `~`
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Inkrement/Dekrement](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement): `++`, `--`

Die booleschen Operatoren erlauben das Mischen von Zahlen und BigInts als Operanden:

- [Relationale Operatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) und [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) verlassen sich nur auf die {{Glossary("Truthy", "Wahrheit")}} der Operanden

Ein paar Operatoren unterstützen BigInt überhaupt nicht:

- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) kann aufgrund widersprüchlicher Nutzung in asm.js nicht unterstützt werden, daher wurde es ausgelassen [um asm.js nicht zu brechen](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).
- [Unsigned Right Shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) ist der einzige bitweise Operator, der nicht unterstützt wird, da jeder BigInt-Wert signiert ist.

Spezialfälle:

- Eine Addition (`+`), die einen String und ein BigInt umfasst, gibt einen String zurück.
- Eine Division (`/`) schneidet gebrochene Anteile auf Null ab, da BigInt nicht in der Lage ist, Bruchwerte darzustellen.

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
const maxPlusOne = previousMaxSafe + 1n; // 9007199254740992n
const theFuture = previousMaxSafe + 2n; // 9007199254740993n, this works now!
const multi = previousMaxSafe * 2n; // 18014398509481982n
const subtr = multi - 10n; // 18014398509481972n
const mod = multi % 10n; // 2n
const bigN = 2n ** 54n; // 18014398509481984n
bigN * -1n; // -18014398509481984n
const expected = 4n / 2n; // 2n
const truncated = 5n / 2n; // 2n, not 2.5n
```

### Vergleiche

Ein BigInt-Wert ist nicht streng gleich einem Number-Wert, aber er ist _locker_ gleich:

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

Beachten Sie, dass Vergleiche mit `Object`-verpackten BigInt-Werten wie bei anderen Objekten nur Gleichheit anzeigen, wenn dieselbe Objektinstanz verglichen wird:

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Da das Umwandeln zwischen Number-Werten und BigInt-Werten zu einem Verlust an Genauigkeit führen kann, wird Folgendes empfohlen:

- Verwenden Sie einen BigInt-Wert nur, wenn Werte größer als 2<sup>53</sup> zu erwarten sind.
- Vermeiden Sie Umwandlungen zwischen BigInt-Werten und Number-Werten.

### Bedingte Anweisungen

Ein BigInt-Wert folgt denselben Umwandlungsregeln wie Numbers, wenn:

- er in ein [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) umgewandelt wird: über die [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)-Funktion;
- er mit [logischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators) `||`, `&&` und `!` verwendet wird; oder
- innerhalb eines bedingten Tests wie einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung.

Namens, nur `0n` ist {{Glossary("Falsy", "falsch")}}; alles andere ist {{Glossary("Truthy", "wahrhaftig")}}.

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

Die auf BigInt-Werten unterstützten Operationen sind nicht konstant in ihrer Ausführungszeit und sind daher anfällig für [Timing-Attacken](https://de.wikipedia.org/wiki/Timing_Attack). JavaScript-BigInts könnten daher gefährlich sein, um in der Kryptographie verwendet zu werden, ohne mindernde Faktoren. Als ein sehr generisches Beispiel könnte ein Angreifer den Zeitunterschied zwischen `101n ** 65537n` und `17n ** 9999n` messen und aus der verstrichenen Zeit die Größen der Geheimnisse, wie private Schlüssel, ableiten. Falls Sie dennoch BigInts verwenden müssen, sehen Sie sich den [Timing-Attack-FAQ](https://timing.attacks.cr.yp.to/programming.html) für allgemeine Ratschläge zu diesem Thema an.

### Verwendung innerhalb von JSON

Die Verwendung von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit einem BigInt-Wert führt zu einem `TypeError`, da BigInt-Werte standardmäßig nicht in JSON serialisiert werden. `JSON.stringify()` lässt jedoch speziell eine Hintertür für BigInt-Werte: Es versucht die `toJSON()`-Methode des BigInts aufzurufen. (Dies geschieht bei anderen primitiven Werten nicht.) Sie können daher Ihre eigene `toJSON()`-Methode implementieren (was einer der wenigen Fälle ist, bei dem das Patchen von eingebauten Objekten nicht explizit entmutigt wird):

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

Falls Sie `BigInt.prototype` nicht patchen möchten, können Sie den [`replacer`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter)-Parameter von `JSON.stringify` verwenden, um BigInt-Werte zu serialisieren:

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

Sie können dann den [`reviver`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter)-Parameter von `JSON.parse` verwenden, um diese zu behandeln:

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
> Während es möglich ist, den Replacer von `JSON.stringify()` generisch zu gestalten und BigInt-Werte für alle Objekte korrekt zu serialisieren, muss der Reviver von `JSON.parse()` mit Vorsicht verwendet werden, da die Serialisierung _irreversibel_ ist: Es ist nicht möglich, zwischen einem Objekt, das zufällig eine Eigenschaft namens `$bigint` hat, und einem tatsächlichen BigInt zu unterscheiden.
>
> Darüber hinaus erzeugt das obige Beispiel während des Ersetzens und Wiederherstellens ein gesamtes Objekt, was Leistungseinbußen oder Speicherprobleme für größere Objekte mit vielen BigInts verursachen könnte. Wenn Sie die Struktur des Payloads kennen, kann es sinnvoller sein, sie einfach als Strings zu serialisieren und basierend auf dem Eigenschafts-Schlüsselname wiederherzustellen.

Tatsächlich erlaubt JSON Zahlenliterale, die beliebig lang sind; diese können jedoch in JavaScript nicht mit voller Genauigkeit geparst werden. Wenn Sie mit einem anderen Programm in einer Sprache kommunizieren, die längere Ganzzahlen (wie 64-Bit-Integers) unterstützt, und Sie möchten, dass das BigInt als JSON-Zahl anstelle eines JSON-Strings übertragen wird, schauen Sie sich die [verlustfreie Zahlenspeicherung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers) an.

### BigInt-Umwandlung

Viele eingebaute Operationen, die BigInts erwarten, wandeln ihre Argumente zuerst in BigInts um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint) kann wie folgt zusammengefasst werden:

- BigInts werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen eine {{jsxref("TypeError")}}.
- `true` wird zu `1n`; `false` wird zu `0n`.
- Strings werden konvertiert, indem sie geparst werden, als ob sie ein Integer-Literal enthalten. Jeder Parsingfehler führt zu einem {{jsxref("SyntaxError")}}. Die Syntax ist ein Teilset von [String-numerischer Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), bei dem Dezimalpunkte oder Exponent-Indikatoren nicht erlaubt sind.
- [Numbers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) werfen eine {{jsxref("TypeError")}} um zu verhindern, dass eine unbeabsichtigte implizite Umwandlung zu einem Verlust an Genauigkeit führt.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen eine {{jsxref("TypeError")}}.
- Objekte werden zuerst [in eine primitive Form umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()`, und `toString()`-Methoden in dieser Reihenfolge aufgerufen werden. Das resultierende Primitive wird dann in ein BigInt umgewandelt.

Der beste Weg, um fast denselben Effekt in JavaScript zu erzielen, ist die Verwendung der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion: `BigInt(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, mit der Ausnahme, dass [Numbers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) keine {{jsxref("TypeError")}} werfen, sondern in BigInts konvertiert werden, wenn sie Ganzzahlen sind.

Beachten Sie, dass eingebaute Operationen, die BigInts erwarten, nach der Umwandlung oft das BigInt auf eine feste Breite kürzen. Dies schließt {{jsxref("BigInt.asIntN()")}}, {{jsxref("BigInt.asUintN()")}}, und Methoden von {{jsxref("BigInt64Array")}} und {{jsxref("BigUint64Array")}} ein.

## Konstruktor

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : Gibt primitive Werte vom Typ BigInt zurück. Wirft einen Fehler, wenn mit `new` aufgerufen.

## Statische Methoden

- {{jsxref("BigInt.asIntN()")}}
  - : Begrenzt einen BigInt-Wert auf einen vorzeichenbehafteten Ganzzahlenwert und gibt diesen Wert zurück.
- {{jsxref("BigInt.asUintN()")}}
  - : Begrenzt einen BigInt-Wert auf einen vorzeichenlosen Ganzzahlenwert und gibt diesen Wert zurück.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `BigInt.prototype` definiert und werden von allen `BigInt`-Instanzen geteilt.

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `BigInt`-Instanzen ist der Initialwert der {{jsxref("BigInt/BigInt", "BigInt")}}-Konstruktor.
- `BigInt.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"BigInt"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `BigInt` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString)-Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem BigInt als `thisArg` auf.

## Instanz-Methoden

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses BigInt-Werts zurück. Überschreibt die [`Object.prototype.toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)-Methode.
- {{jsxref("BigInt.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen BigInt-Wert in der angegebenen Basis (Radix) darstellt. Überschreibt die [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)-Methode.
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : Gibt diesen BigInt-Wert zurück. Überschreibt die [`Object.prototype.valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)-Methode.

## Beispiele

### Primzahlen Berechnen

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
