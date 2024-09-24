---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`BigInt`**-Werte repräsentieren numerische Werte, die [zu groß](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) sind, um durch den `number`-{{Glossary("Primitive", "primitive")}} dargestellt zu werden.

## Beschreibung

Ein **BigInt-Wert**, manchmal einfach nur **BigInt** genannt, ist ein `bigint`-{{Glossary("Primitive", "primitive")}}, das erstellt wird, indem `n` an ein ganzzahliges Literal angehängt wird, oder durch Aufrufen der {{jsxref("BigInt/BigInt", "BigInt()")}}-Funktion (ohne den `new`-Operator) und der Übergabe eines ganzzahligen oder String-Werts.

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

BigInt-Werte sind in gewisser Weise den Number-Werten ähnlich, unterscheiden sich jedoch in einigen wesentlichen Punkten: Ein BigInt-Wert kann nicht mit Methoden im eingebauten [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math)-Objekt verwendet werden und kann nicht mit einem Number-Wert in Operationen gemischt werden; sie müssen zum gleichen Typ gezwungen werden. Seien Sie vorsichtig beim Konvertieren von Werten hin und her, da die Genauigkeit eines BigInt-Wertes verloren gehen kann, wenn er in einen Number-Wert umgewandelt wird.

### Typinformationen

Wenn ein BigInt-Wert (`bigint`-primitive) gegen `typeof` getestet wird, ergibt es `"bigint"`:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Ein BigInt-Wert kann auch in einem `Object` gewickelt werden:

```js
typeof Object(1n) === "object"; // true
```

### Operatoren

Die meisten Operatoren unterstützen BigInts, erlauben jedoch nicht, dass Operanden gemischter Typen sind — beide Operanden müssen BigInt sein oder keiner:

- [Arithmetische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators): `+`, `-`, `*`, `/`, `%`, `**`
- [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators): `>>`, `<<`, `&`, `|`, `^`, `~`
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Inkrement/Dekrement](/de/docs/Web/JavaScript/Reference/Operators#increment_and_decrement): `++`, `--`

Die booleschen Operatoren erlauben das Mischen von Numbers und BigInts als Operanden:

- [Relationale Operatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) und [Gleichheitsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#equality_operators): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) verlassen sich nur auf die [Truthiness](/de/docs/Glossary/Truthy) der Operanden

Einige Operatoren unterstützen BigInt überhaupt nicht:

- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) kann aufgrund der widersprüchlichen Nutzung in asm.js nicht unterstützt werden, daher wurde es ausgelassen [um asm.js nicht zu beschädigen](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).
- [Unsigned right shift (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) ist der einzige nicht unterstützte bitweise Operator, da jeder BigInt-Wert signiert ist.

Spezialfälle:

- Die Addition (`+`) mit einem String und einem BigInt ergibt einen String.
- Die Division (`/`) trennt die Bruchteile zur Null hin ab, da BigInt keine Bruchmengen darstellen kann.

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

Ein BigInt-Wert ist nicht strikt gleich einem Number-Wert, aber er ist lose so:

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

mixed.sort(); // Standard-Sortierverhalten
// [ -12n, 0, 0n, 10, 4n, 4, 6 ]

mixed.sort((a, b) => a - b);
// funktioniert nicht, da Subtraktion mit gemischten Typen nicht funktioniert
// TypeError: can't convert BigInt value to Number value

// sortiere mit einem geeigneten numerischen Vergleichsfunktion
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

Da die Umwandlung zwischen Number- und BigInt-Werten zu einem Verlust an Präzision führen kann, wird Folgendes empfohlen:

- Verwenden Sie einen BigInt-Wert nur dann, wenn Werte größer als 2<sup>53</sup> vernünftigerweise erwartet werden.
- Vermeiden Sie es, zwischen BigInt-Werten und Number-Werten zu konvertieren.

### Bedingte Anweisungen

Ein BigInt-Wert folgt denselben Konvertierungsregeln wie Numbers:

- wenn er in ein [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean) umgewandelt wird: über die [`Boolean`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)-Funktion;
- wenn er mit [logischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators) `||`, `&&`, und `!` verwendet wird; oder
- innerhalb eines bedingten Tests wie einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung.

Genauer gesagt, nur `0n` ist [falsy](/de/docs/Glossary/Falsy); alles andere ist [truthy](/de/docs/Glossary/Truthy).

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

Die auf BigInt-Werten unterstützten Operationen sind nicht konstant in der Zeit und sind daher anfällig für [Timing-Attacken](https://en.wikipedia.org/wiki/Timing_attack). JavaScript-BigInts könnten daher gefährlich für den Einsatz in der Kryptografie sein, ohne mildernde Maßnahmen. Als sehr generisches Beispiel könnte ein Angreifer den Zeitunterschied zwischen `101n ** 65537n` und `17n ** 9999n` messen und aus der verstrichenen Zeit die Größe von Geheimnissen, wie private Schlüssel, ableiten. Falls Sie dennoch BigInts verwenden müssen, werfen Sie einen Blick in die [Timing attack FAQ](https://timing.attacks.cr.yp.to/programming.html) für allgemeine Ratschläge zu diesem Thema.

### Verwendung innerhalb von JSON

Die Verwendung von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit einem BigInt-Wert führt zu einem `TypeError`, da BigInt-Werte standardmäßig nicht in JSON serialisiert werden. `JSON.stringify()` lässt jedoch ausdrücklich eine Hintertür für BigInt-Werte offen: Es würde versuchen, die `toJSON()`-Methode des BigInt aufzurufen. (Es tut dies nicht für andere primitive Werte.) Daher können Sie Ihre eigene `toJSON()`-Methode implementieren (was einer der wenigen Fälle ist, in denen das Patchen von eingebauten Objekten nicht ausdrücklich entmutigt ist):

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

Anstatt zu werfen, produziert `JSON.stringify()` nun einen String wie diesen:

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
> Während es möglich ist, den Replacer von `JSON.stringify()` generisch zu machen und BigInt-Werte für alle Objekte korrekt zu serialisieren, muss der Reviver von `JSON.parse()` mit Vorsicht verwendet werden, da die Serialisierung _irreversibel_ ist: Es ist nicht möglich zu unterscheiden, ob ein Objekt zufällig eine Eigenschaft namens `$bigint` hat oder ob es sich um ein tatsächliches BigInt handelt.
>
> Darüber hinaus erstellt das obige Beispiel während der Ersetzung und Wiederherstellung ein ganzes Objekt, was möglicherweise Leistungs- oder Speicherimplikationen für größere Objekte mit vielen BigInts hat. Wenn Sie die Form der Nutzlast kennen, könnte es besser sein, sie einfach als Strings zu serialisieren und sie basierend auf dem Namen des Eigenschaftsschlüssels wiederherzustellen.

Tatsächlich erlaubt JSON Zahlenliteralen beliebiger Länge; sie können jedoch nicht in JavaScript mit voller Präzision geparst werden. Wenn Sie mit einem anderen Programm in einer Sprache kommunizieren, die längere Ganzzahlen (wie 64-Bit-Ganzzahlen) unterstützt, und Sie das BigInt als JSON-Zahl anstelle eines JSON-Strings übertragen möchten, siehe [Verlustfreie Zahlenserialization](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

### BigInt-Konvertierung

Viele eingebaute Operationen, die BigInts erwarten, konvertieren zuerst ihre Argumente zu BigInts. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint) kann wie folgt zusammengefasst werden:

- BigInts werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- `true` wird zu `1n`; `false` wird zu `0n`.
- Strings werden durch Parsen konvertiert, als ob sie ein ganzzahliges Literal enthalten. Ein Parsing-Fehler resultiert in einem {{jsxref("SyntaxError")}}. Die Syntax ist ein Teilmengen von [stringbasierten Zahlenliteralen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wobei Dezimalpunkte oder Exponentenindikatoren nicht erlaubt sind.
- [Numbers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) werfen einen {{jsxref("TypeError")}}, um zu verhindern, dass unbeabsichtigte implizite Konvertierung zu Präzisionsverlust führen.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein Primitive umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) durch Aufrufen ihrer [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), `valueOf()`, und `toString()`-Methoden, in dieser Reihenfolge. Das resultierende Primitive wird dann in ein BigInt umgewandelt.

Der beste Weg, um fast denselben Effekt in JavaScript zu erzielen, ist durch die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion: `BigInt(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, mit der Ausnahme, dass [Numbers](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) keinen {{jsxref("TypeError")}} werfen, sondern in BigInts konvertiert werden, wenn sie Ganzzahlen sind.

Beachten Sie, dass eingebaute Operationen, die BigInts erwarten, das BigInt oft auf eine feste Breite nach der Konvertierung abschneiden. Dies beinhaltet {{jsxref("BigInt.asIntN()")}}, {{jsxref("BigInt.asUintN()")}}, und Methoden von {{jsxref("BigInt64Array")}} und {{jsxref("BigUint64Array")}}.

## Konstruktor

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : Gibt primitive Werte vom Typ BigInt zurück. Wirft einen Fehler, wenn mit `new` aufgerufen.

## Statische Methoden

- {{jsxref("BigInt.asIntN()")}}
  - : Begrenzt einen BigInt-Wert auf einen vorzeichenbehafteten Ganzzahlwert und gibt diesen Wert zurück.
- {{jsxref("BigInt.asUintN()")}}
  - : Begrenzt einen BigInt-Wert auf einen vorzeichenlosen Ganzzahlwert und gibt diesen Wert zurück.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `BigInt.prototype` definiert und werden von allen `BigInt`-Instanzen geteilt.

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `BigInt`-Instanzen ist der anfängliche Wert der {{jsxref("BigInt/BigInt", "BigInt")}}-Konstruktor.
- `BigInt.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"BigInt"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `BigInt` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString)-Methode besitzt, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem BigInt als `thisArg` auf.

## Instanz-Methoden

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieses BigInt-Werts zurück. Überschreibt die [`Object.prototype.toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString)-Methode.
- {{jsxref("BigInt.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen BigInt-Wert in der angegebenen Basis (Radix) darstellt. Überschreibt die [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)-Methode.
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : Gibt diesen BigInt-Wert zurück. Überschreibt die [`Object.prototype.valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)-Methode.

## Beispiele

### Berechnung von Primzahlen

```js
// Gibt true zurück, wenn der übergebene BigInt-Wert eine Primzahl ist
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

// Nimmt einen BigInt-Wert als Argument und gibt die n-te Primzahl als BigInt-Wert zurück
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
