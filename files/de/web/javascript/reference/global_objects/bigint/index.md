---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: b63d69fb2038d6c63718a74a9768d157423efce9
---

{{JSRef}}

**`BigInt`**-Werte stellen Integer dar, die [zu hoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) oder [zu niedrig](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) sind, um durch den `number`-{{Glossary("Primitive", "Primitivtyp")}} dargestellt zu werden.

## Beschreibung

Ein **BigInt-Wert**, manchmal auch einfach ein **BigInt** genannt, ist ein `bigint`-{{Glossary("Primitive", "Primitivtyp")}}, der durch Anhängen von `n` an das Ende eines Integer-Literals oder durch Aufrufen der Funktion {{jsxref("BigInt/BigInt", "BigInt()")}} (ohne den `new`-Operator) mit einem Integer- oder Stringwert erstellt wird.

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

BigInt-Werte sind in gewisser Weise ähnlich wie Zahlenwerte, unterscheiden sich jedoch in einigen entscheidenden Punkten: Ein BigInt-Wert kann nicht mit Methoden im eingebauten [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math)-Objekt verwendet werden und kann nicht in Operationen mit einem Zahlenwert gemischt werden; sie müssen in den gleichen Typ gezwungen werden. Seien Sie jedoch vorsichtig, wenn Sie Werte hin und her zwingen, da die Präzision eines BigInt-Werts verloren gehen kann, wenn er in einen Zahlenwert umgewandelt wird.

### Typinformationen

Wenn ein BigInt-Wert (Primitivtyp `bigint`) gegen `typeof` getestet wird, ergibt er `"bigint"`:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Ein BigInt-Wert kann auch in ein `Object` eingebettet werden:

```js
typeof Object(1n) === "object"; // true
```

### Operatoren

Die meisten Operatoren unterstützen BigInts, erlauben jedoch zumeist keine Operanden unterschiedlicher Typen — beide Operanden müssen BigInt sein oder keiner:

- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators): `+`, `-`, `*`, `/`, `%`, `**`
- [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators): `>>`, `<<`, `&`, `|`, `^`, `~`
- [Einheitliche Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Inkrement/Dekrement](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement): `++`, `--`

Die Operatoren, die boolesche Werte zurückgeben, erlauben das Mischen von Zahlen und BigInts als Operanden:

- [Relationale Operatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) und [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) verlassen sich nur auf die {{Glossary("Truthy", "Wahrheit")}} von Operanden

Einige Operatoren unterstützen BigInt überhaupt nicht:

- [Einheitliches Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) kann aufgrund der Konfliktverwendung in asm.js nicht unterstützt werden, sodass es [um asm.js nicht zu brechen](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs) weggelassen wurde.
- [Unsigned Right Shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) ist der einzige bitweise Operator, der nicht unterstützt wird, da jeder BigInt-Wert signiert ist.

Spezialfälle:

- Die Addition (`+`) eines Strings und eines BigInt ergibt einen String.
- Die Division (`/`) kürzt Bruchteile in Richtung null, da BigInt keine Bruchzahlen darstellen kann.

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

Ein BigInt-Wert ist nicht strikt gleich einem Zahlenwert, aber es _ist_ lose so:

```js
0n === 0; // false
0n == 0; // true
```

Ein Zahlenwert und ein BigInt-Wert können wie gewöhnlich verglichen werden:

```js
1n < 2; // true
2n > 1; // true
2 > 2; // false
2n > 2; // false
2n >= 2; // true
```

BigInt-Werte und Zahlenwerte können in Arrays gemischt und sortiert werden:

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

Beachten Sie, dass Vergleiche mit `Object`-eingebetteten BigInt-Werten wie bei anderen Objekten nur Gleichheit anzeigen, wenn dieselbe Objektinstanz verglichen wird:

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Da das Umwandeln zwischen Zahlenwerten und BigInt-Werten zum Verlust der Präzision führen kann, wird Folgendes empfohlen:

- Verwenden Sie nur einen BigInt-Wert, wenn Werte größer als 2<sup>53</sup> vernünftigerweise erwartet werden.
- Zwingen Sie nicht zwischen BigInt-Werten und Zahlenwerten.

### Bedingte Anweisungen

Ein BigInt-Wert folgt denselben Konvertierungsregeln wie Zahlen, wenn:

- er in einen [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) umgewandelt wird: über die [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)-Funktion;
- bei Verwendung mit [logischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators) `||`, `&&`, und `!`; oder
- innerhalb eines bedingten Tests wie einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung.

Genauer gesagt ist nur `0n` {{Glossary("Falsy", "falsch")}}; alles andere ist {{Glossary("Truthy", "wahr")}}.

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

Die auf BigInt-Werten unterstützten Operationen sind nicht konstant und daher anfällig für [Timing-Angriffe](https://en.wikipedia.org/wiki/Timing_attack). JavaScript BigInts könnten daher gefährlich für die Verwendung in der Kryptographie ohne mildernde Faktoren sein. Als ein sehr generisches Beispiel könnte ein Angreifer den Zeitunterschied zwischen `101n ** 65537n` und `17n ** 9999n` messen und die Größe geheimer Daten wie privater Schlüssel anhand der vergangenen Zeit ableiten. Wenn Sie dennoch BigInts verwenden müssen, werfen Sie einen Blick auf das [Timing-Angriff FAQ](https://timing.attacks.cr.yp.to/programming.html) für allgemeine Ratschläge zu diesem Problem.

### Verwendung innerhalb von JSON

Die Verwendung von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit einem BigInt-Wert führt zu einem `TypeError`, da BigInt-Werte standardmäßig nicht in JSON serialisiert werden. `JSON.stringify()` hinterlässt jedoch speziell eine Hintertür für BigInt-Werte: Es würde versuchen, die `toJSON()`-Methode des BigInt zu rufen. (Dies geschieht bei keinen anderen Primitivwerten.) Sie können daher Ihre eigene `toJSON()`-Methode implementieren (eine der wenigen Fälle, in denen das Patching von eingebauten Objekten nicht explizit abgeraten wird):

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

Statt zu werfen, erzeugt `JSON.stringify()` nun einen String wie diesen:

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
> Darüber hinaus erzeugt das obige Beispiel während des Ersetzens und Wiederherstellens ein ganzes Objekt, was möglicherweise Leistungs- oder Speicherimplikationen für größere Objekte hat, die viele BigInts enthalten. Wenn Sie die Form der Nutzlast kennen, ist es möglicherweise besser, sie einfach als Strings zu serialisieren und sie basierend auf dem Namen des Eigenschaftsschlüssels wiederherzustellen.

Tatsächlich erlaubt JSON Zahlenliterale, die beliebig lang sind; sie können jedoch in JavaScript nicht vollständig präzise geparst werden. Wenn Sie mit einem anderen Programm in einer Sprache kommunizieren, die längere Ganzzahlen unterstützt (wie z.B. 64-Bit-Ganzzahlen), und Sie das BigInt als JSON-Zahl statt als JSON-String übertragen möchten, siehe [Verlustfreie Zahlenserialisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

### BigInt-Zwingen

Viele eingebaute Operationen, die BigInts erwarten, zwingen zunächst ihre Argumente zu BigInts. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint) kann folgendermaßen zusammengefasst werden:

- BigInts werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- `true` wird zu `1n`; `false` wird zu `0n`.
- Strings werden konvertiert, indem sie geparst werden, als ob sie ein Integer-Literal enthalten. Jeder Parsing-Fehler resultiert in einem {{jsxref("SyntaxError")}}. Die Syntax ist ein Subset von [string-numerischen Literalen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wobei Dezimalpunkte oder Exponentenindikatoren nicht erlaubt sind.
- [Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) werfen einen {{jsxref("TypeError")}}, um unbeabsichtigte implizite Typumwandlungen, die zu einem Verlust der Präzision führen könnten, zu verhindern.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in einen Primitivwert konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem ihre Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `“number”` als Hinweis), `valueOf()` und `toString()` in dieser Reihenfolge aufgerufen werden. Der resultierende Primitivwert wird dann in einen BigInt konvertiert.

Der beste Weg, fast denselben Effekt in JavaScript zu erzielen, ist die Verwendung der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion: `BigInt(x)` verwendet denselben Algorithmus, um `x` umzuwandeln, außer dass [Zahlen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) keinen {{jsxref("TypeError")}} werfen, sondern konvertiert werden, wenn sie Ganzzahlen sind.

Beachten Sie, dass eingebaute Operationen, die BigInts erwarten, häufig den BigInt nach der Umwandlung auf eine feste Breite kürzen. Dies schließt {{jsxref("BigInt.asIntN()")}}, {{jsxref("BigInt.asUintN()")}} sowie Methoden von {{jsxref("BigInt64Array")}} und {{jsxref("BigUint64Array")}} ein.

## Konstruktor

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : Gibt primitive Werte vom Typ BigInt zurück. Wirft einen Fehler, wenn mit `new` aufgerufen.

## Statische Methoden

- {{jsxref("BigInt.asIntN()")}}
  - : Begrenzt einen BigInt-Wert auf einen signierten Integer-Wert und gibt diesen Wert zurück.
- {{jsxref("BigInt.asUintN()")}}
  - : Begrenzt einen BigInt-Wert auf einen unsignierten Integer-Wert und gibt diesen Wert zurück.

## Instanzeigenschaften

Diese Eigenschaften sind auf `BigInt.prototype` definiert und werden von allen `BigInt`-Instanzen geteilt.

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `BigInt`-Instanzen ist der Anfangswert der {{jsxref("BigInt/BigInt", "BigInt")}}-Konstruktor.
- `BigInt.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"BigInt"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `BigInt` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString)-Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem BigInt als `thisArg` auf.

## Instanzmethoden

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : Gibt einen string mit einer sprachsensitiven Darstellung dieses BigInt-Werts zurück. Überschreibt die [`Object.prototype.toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)-Methode.
- {{jsxref("BigInt.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen BigInt-Wert im angegebenen Radix (Basis) darstellt. Überschreibt die [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)-Methode.
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
> Die `isPrime()`-Implementierung dient nur zu Demonstrationszwecken. Für eine reale Anwendung würden Sie einen stark memoisierten Algorithmus wie das [Sieben des Eratosthenes](https://de.wikipedia.org/wiki/Sieb_des_Eratosthenes) verwenden wollen, um wiederholte Berechnungen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
