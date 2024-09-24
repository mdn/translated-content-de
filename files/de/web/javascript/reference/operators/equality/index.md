---
title: Gleichheit (==)
slug: Web/JavaScript/Reference/Operators/Equality
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Gleichheitsoperator (`==`)** überprüft, ob seine beiden Operanden gleich sind und gibt ein boolesches Ergebnis zurück. Im Gegensatz zum [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) versucht er, Operanden, die unterschiedlichen Typs sind, zu konvertieren und zu vergleichen.

{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}

## Syntax

```js-nolint
x == y
```

## Beschreibung

Die Gleichheitsoperatoren (`==` und `!=`) bieten die [IsLooselyEqual](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using) Semantik. Dies kann grob wie folgt zusammengefasst werden:

1. Wenn die Operanden denselben Typ haben, werden sie wie folgt verglichen:
   - Objekt: gibt `true` nur zurück, wenn beide Operanden auf dasselbe Objekt verweisen.
   - String: gibt `true` nur zurück, wenn beide Operanden dieselben Zeichen in derselben Reihenfolge haben.
   - Zahl: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben. `+0` und `-0` werden als derselbe Wert betrachtet. Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben; `NaN` ist also niemals gleich `NaN`.
   - Boolean: gibt `true` nur zurück, wenn beide Operanden entweder `true` oder `false` sind.
   - BigInt: gibt `true` nur zurück, wenn beide Operanden denselben Wert haben.
   - Symbol: gibt `true` nur zurück, wenn beide Operanden auf dasselbe Symbol verweisen.
2. Wenn einer der Operanden `null` oder `undefined` ist, muss der andere ebenfalls `null` oder `undefined` sein, um `true` zurückzugeben. Andernfalls wird `false` zurückgegeben.
3. Wenn einer der Operanden ein Objekt und der andere ein primitiver Typ ist, [konvertieren Sie das Objekt zu einem primitiven Typ](/de/docs/Web/JavaScript/Data_structures#primitive_coercion).
4. In diesem Schritt werden beide Operanden in primitive Typen konvertiert (einer von String, Number, Boolean, Symbol und BigInt). Der Rest der Konvertierung erfolgt fallabhängig.
   - Wenn sie denselben Typ haben, vergleichen Sie sie mit Schritt 1.
   - Wenn einer der Operanden ein Symbol ist, der andere jedoch nicht, wird `false` zurückgegeben.
   - Wenn einer der Operanden ein Boolean ist, der andere jedoch nicht, [konvertieren Sie den Boolean in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion): `true` wird in 1 und `false` in 0 umgewandelt. Vergleichen Sie dann die beiden Operanden erneut lose.
   - Zahl zu String: [konvertieren Sie den String in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Ein Konvertierungsfehler führt zu `NaN`, was garantiert, dass die Gleichheit `false` ist.
   - Zahl zu BigInt: vergleichen Sie nach ihrem numerischen Wert. Wenn die Zahl ±Unendlich oder `NaN` ist, wird `false` zurückgegeben.
   - String zu BigInt: konvertieren Sie den String zu einem BigInt mit demselben Algorithmus wie der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Konstruktor. Wenn die Konvertierung fehlschlägt, wird `false` zurückgegeben.

Lose Gleichheit ist _symmetrisch_: `A == B` hat immer identische Semantik wie `B == A` für alle Werte von `A` und `B` (außer in der Reihenfolge der angewandten Konvertierungen).

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) ist, dass der strikte Gleichheitsoperator keinen Typumwandlungsversuch unternimmt. Stattdessen betrachtet der strikte Gleichheitsoperator Operanden unterschiedlichen Typs immer als verschieden. Der strikte Gleichheitsoperator führt im Wesentlichen nur Schritt 1 aus und gibt dann in allen anderen Fällen `false` zurück.

Es gibt eine "absichtliche Verletzung" des obigen Algorithmus: Wenn einer der Operanden [`document.all`](/de/docs/Web/API/Document/all) ist, wird er behandelt, als wäre er `undefined`. Das bedeutet, dass `document.all == null` `true` ist, aber `document.all === undefined && document.all === null` `false` ist.

## Beispiele

### Vergleich ohne Typkonvertierung

```js
1 == 1; // true
"hello" == "hello"; // true
```

### Vergleich mit Typkonvertierung

```js
"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, siehe Logischer NICHT Operator
0 == !!undefined; // true, siehe Logischer NICHT Operator
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false
```

### Vergleich von Objekten

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 == object2); // false
console.log(object1 == object1); // true
```

### Vergleich von Zeichenfolgen und String-Objekten

Beachten Sie, dass Zeichenfolgen, die mit `new String()` erstellt werden, Objekte sind. Wenn Sie eine dieser mit einem String-Literal vergleichen, wird das `String`-Objekt in ein String-Literal umgewandelt und die Inhalte werden verglichen. Wenn jedoch beide Operanden `String`-Objekte sind, werden sie als Objekte verglichen und müssen auf dasselbe Objekt verweisen, damit der Vergleich erfolgreich ist:

```js
const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true
```

### Vergleich von Datumsangaben und Zeichenfolgen

```js
const d = new Date("1995-12-17T03:24:00");
const s = d.toString(); // zum Beispiel: "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s); //true
```

### Vergleich von Arrays und Zeichenfolgen

```js
const a = [1, 2, 3];
const b = "1,2,3";
a == b; // true, `a` wird in einen String umgewandelt

const c = [true, 0.5, "hey"];
const d = c.toString(); // "true,0.5,hey"
c == d; // true
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Ungleichheit (`!=`)](/de/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strikte Gleichheit (`===`)](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strikte Ungleichheit (`!==`)](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
