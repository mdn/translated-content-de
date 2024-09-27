---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`BigInt`**-Werte repräsentieren numerische Werte, die [zu groß](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) sind, um durch das `number`- [Primitive](/de/docs/Glossary/Primitive) dargestellt zu werden.

## Beschreibung

Ein **BigInt-Wert**, auch einfach nur **BigInt** genannt, ist ein `bigint` [Primitive](/de/docs/Glossary/Primitive), das erzeugt wird, indem `n` an das Ende eines ganzen Zahlen-Literals angehängt wird, oder durch Aufruf der {{jsxref("BigInt/BigInt", "BigInt()")}}-Funktion (ohne den `new`-Operator) und Angabe eines Ganzzahl- oder Zeichenkettenwerts.

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

BigInt-Werte sind in gewisser Weise ähnlich wie Number-Werte, unterscheiden sich jedoch in einigen wichtigen Aspekten: Ein BigInt-Wert kann nicht mit Methoden im eingebauten [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math)-Objekt verwendet werden und kann nicht mit einem Number-Wert in Operationen gemischt werden; sie müssen in denselben Typ umgewandelt werden. Seien Sie jedoch vorsichtig beim Umwandeln von Werten, da die Präzision eines BigInt-Werts verloren gehen kann, wenn er in einen Number-Wert umgewandelt wird.

### Typinformationen

Wird `typeof` gegen einen BigInt-Wert (`bigint`-Primitive) getestet, gibt dies `"bigint"` zurück:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Ein BigInt-Wert kann auch in einem `Object` gekapselt werden:

```js
typeof Object(1n) === "object"; // true
```

### Operatoren

Die meisten Operatoren unterstützen BigInts, jedoch erlauben die meisten keine Operanden unterschiedlicher Typen — beide Operanden müssen BigInt sein oder keiner:

- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators): `+`, `-`, `*`, `/`, `%`, `**`
- [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators): `>>`, `<<`, `&`, `|`, `^`, `~`
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Inkrement/Dekrement](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement): `++`, `--`

Die Boolesche Rückgabe-Operatoren erlauben das Mischen von Zahlen und BigInts als Operanden:

- [Relationale Operatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) und [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) basieren nur auf der [Wahrhaftigkeit](/de/docs/Glossary/Truthy) der Operanden

Ein paar Operatoren unterstützen BigInt überhaupt nicht:

- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) kann nicht unterstützt werden wegen des widersprüchlichen Gebrauchs in asm.js, daher wurde es weggelassen [um asm.js nicht zu unterbrechen](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).
- [Unsigned Right Shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) ist der einzige nicht unterstützte bitweise Operator, da jeder BigInt-Wert signiert ist.

Spezialfälle:

- Eine Addition (`+`), die eine Zeichenkette und ein BigInt beinhaltet, gibt eine Zeichenkette zurück.
- Eine Division (`/`) kürzt gebrochene Komponenten zum Nullpunkt, da BigInt keine gebrochenen Mengen darstellen kann.

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

Ein BigInt-Wert ist nicht streng gleich einem Number-Wert, aber es _ist_ lose so:

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

Beachten Sie, dass Vergleiche mit `Object`-eingewickelten BigInt-Werten wie bei anderen Objekten nur dann Gleichheit anzeigen, wenn dieselbe Objektinstanz verglichen wird:

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Da die Umwandlung zwischen Number-Werten und BigInt-Werten zu einem Präzisionsverlust führen kann, wird Folgendes empfohlen:

- Verwenden Sie einen BigInt-Wert nur, wenn Werte größer als 2<sup>53</sup> vernünftigerweise erwartet werden.
- Konvertieren Sie nicht zwischen BigInt-Werten und Number-Werten.

### Bedingte Ausdrücke

Ein BigInt-Wert folgt denselben Umwandlungsregeln wie Numbers, wenn:

- er in eine [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) umgewandelt wird: über die [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)-Funktion;
- wenn er mit [logischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators) `||`, `&&`, und `!` verwendet wird; oder
- innerhalb eines bedingten Tests wie einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung.

Nämlich, nur `0n` ist [falsch](/de/docs/Glossary/Falsy); alles andere ist [wahr](/de/docs/Glossary/Truthy).

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

Die auf BigInt-Werten unterstützten Operationen sind nicht konstantzeitlich und sind daher anfällig für [Zeitangriffe](https://en.wikipedia.org/wiki/Timing_attack). JavaScript BigInts könnten daher gefährlich für den Einsatz in der Kryptographie sein, ohne Abhilfemaßnahmen zu ergreifen. Als ein sehr generisches Beispiel könnte ein Angreifer den Zeitunterschied zwischen `101n ** 65537n` und `17n ** 9999n` messen und die Größe von Geheimnissen, wie z.B. privaten Schlüsseln, basierend auf der verstrichenen Zeit ableiten. Wenn Sie dennoch BigInts verwenden müssen, werfen Sie einen Blick auf die [Timing Attack FAQ](https://timing.attacks.cr.yp.to/programming.html) für allgemeine Ratschläge zu diesem Thema.

### Verwendung mit JSON

Die Verwendung von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit einem BigInt-Wert wird einen `TypeError` auslösen, da BigInt-Werte standardmäßig nicht in JSON serialisiert werden. `JSON.stringify()` lässt jedoch speziell eine Hintertür für BigInt-Werte offen: Es versucht die `toJSON()`-Methode des BigInt aufzurufen. (Es tut dies für keine anderen primitiven Werte.) Daher können Sie Ihre eigene `toJSON()`-Methode implementieren (dies ist einer der wenigen Fälle, in denen die Patch-Verfahren eingebauter Objekte nicht explizit entmutigt werden):

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

Statt zu werfen, erzeugt `JSON.stringify()` jetzt einen solchen String:

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
> Obwohl es möglich ist, den Replacer von `JSON.stringify()` generisch zu machen und BigInt-Werte für alle Objekte korrekt zu serialisieren, wie oben gezeigt, muss der Reviver von `JSON.parse()` mit Vorsicht verwendet werden, da die Serialisierung _irreversibel_ ist: Es ist nicht möglich, zwischen einem Objekt zu unterscheiden, das zufällig eine Eigenschaft hat, die `$bigint` genannt wird, und einem tatsächlichen BigInt.
>
> Darüber hinaus erzeugt das obige Beispiel ein ganzes Objekt während des Ersetzens und Wiederherstellens, was Leistungs- oder Speicherimplikationen für größere Objekte, die viele BigInts enthalten, zur Folge haben kann. Wenn Sie die Form der Nutzlast kennen, ist es möglicherweise besser, sie einfach als Zeichenfolgen zu serialisieren und sie basierend auf dem Eigenschaftsschlüssel-Namen wiederherzustellen.

Tatsächlich erlaubt JSON Zahlenliterale, die willkürlich lang sind; sie können nur nicht mit voller Präzision in JavaScript geparst werden. Wenn Sie mit einem anderen Programm in einer Sprache kommunizieren, die längere Ganzzahlen unterstützt (wie z.B. 64-Bit Ganzzahlen), und Sie möchten das BigInt als JSON-Zahl anstelle einer JSON-Zeichenkette übertragen, siehe [Verlustfreie Zahlenserialisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

### BigInt-Umwandlung

Viele integrierte Operationen, die BigInts erwarten, wandeln ihre Argumente zunächst in BigInts um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint) lässt sich wie folgt zusammenfassen:

- BigInts werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- `true` wird in `1n` umgewandelt; `false` wird in `0n` verwandelt.
- Zeichenketten werden konvertiert, indem sie geparst werden, als ob sie ein Ganzzahlenliteral enthalten. Jede Parser-Störung führt zu einem {{jsxref("SyntaxError")}}. Die Syntax ist ein Subset von [numerischen Zeichenfolgenliteralen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wobei Dezimalpunkte oder Exponentenindikatoren nicht erlaubt sind.
- [Numbers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) werfen einen {{jsxref("TypeError")}}, um unbeabsichtigte implizite Umwandlungen zu verhindern, die zu einem Verlust der Präzision führen.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein Primitive umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()` und `toString()` Methoden, in dieser Reihenfolge aufgerufen werden. Das resultierende Primitive wird dann in ein BigInt umgewandelt.

Der beste Weg, nahezu denselben Effekt in JavaScript zu erzielen, ist die Verwendung der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion: `BigInt(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, außer dass [Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) keinen {{jsxref("TypeError")}} werfen, sondern in BigInts umgewandelt werden, wenn sie Ganzzahlen sind.

Beachten Sie, dass eingebaute Operationen, die BigInts erwarten, nach der Umwandlung das BigInt oft auf eine feste Breite kürzen. Dazu gehören {{jsxref("BigInt.asIntN()")}}, {{jsxref("BigInt.asUintN()")}}, und Methoden von {{jsxref("BigInt64Array")}} und {{jsxref("BigUint64Array")}}.

## Konstruktor

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : Gibt primitive Werte des Typs BigInt zurück. Wirft einen Fehler, wenn mit `new` aufgerufen.

## Statische Methoden

- {{jsxref("BigInt.asIntN()")}}
  - : Klemmt einen BigInt-Wert auf einen vorzeichenbehafteten Ganzzahlenwert und gibt diesen Wert zurück.
- {{jsxref("BigInt.asUintN()")}}
  - : Klemmt einen BigInt-Wert auf einen vorzeichenlosen Ganzzahlenwert und gibt diesen Wert zurück.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `BigInt.prototype` definiert und werden von allen `BigInt`-Instanzen geteilt.

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `BigInt` Instanzen ist der Anfangswert der {{jsxref("BigInt/BigInt", "BigInt")}}-Konstruktor.
- `BigInt.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenkette `"BigInt"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `BigInt` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) Methode besitzt, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem BigInt als `thisArg` auf.

## Instanz-Methoden

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenkette mit einer sprachsensitiven Darstellung dieses BigInt-Wertes zurück. Überschreibt die [`Object.prototype.toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)-Methode.
- {{jsxref("BigInt.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die diesen BigInt-Wert in der angegebenen Basis darstellt. Überschreibt die [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)-Methode.
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
