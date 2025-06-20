---
title: Function.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Function")}} Instanzen gibt einen String zurück, der den Quellcode dieser Funktion darstellt.

{{InteractiveExample("JavaScript Demo: Function.prototype.toString()")}}

```js interactive-example
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// Expected output: "function sum(a, b) {
//                     return a + b;
//                   }"

console.log(Math.abs.toString());
// Expected output: "function abs() { [native code] }"
```

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den Quellcode der Funktion repräsentiert.

## Beschreibung

Das {{jsxref("Function")}} Objekt überschreibt die `toString()` Methode,
die es von {{jsxref("Object")}} erbt; es erbt nicht
{{jsxref("Object.prototype.toString")}}. Für vom Benutzer definierte `Function`
Objekte gibt die `toString`-Methode einen String zurück, der das Quelltextsegment enthält, das verwendet wurde, um die Funktion zu definieren.

JavaScript ruft die `toString` Methode automatisch auf, wenn eine
`Function` als Textwert dargestellt werden soll, z. B. wenn eine Funktion
mit einem String verkettet wird.

Die `toString()` Methode wirft eine {{jsxref("TypeError")}} Ausnahme
("Function.prototype.toString called on incompatible object"), wenn ihr
`this` Wert Objekt kein `Function` Objekt ist.

```js example-bad
Function.prototype.toString.call("foo"); // throws TypeError
```

Wenn die `toString()`-Methode auf eingebauten Funktionsobjekten, einer
durch {{jsxref("Function.prototype.bind()")}} erstellten
Funktion oder anderen Nicht-JavaScript-Funktionen aufgerufen wird, gibt `toString()`
einen _nativen Funktionsstring_ zurück, der folgendermaßen aussieht:

```plain
function someName() { [native code] }
```

Für Methoden und Funktionen von intrinsischen Objekten ist `someName` der Anfangsname der Funktion; andernfalls kann ihr Inhalt implementierungsabhängig sein, wird jedoch immer in Eigenschaftsnamenssyntax sein, wie `[1 + 1]`, `someName` oder `1`.

> [!NOTE]
> Das bedeutet, dass die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) auf nativen Funktionsstrings garantiert zu einem Syntaxfehler führt.

Wird die `toString()`-Methode auf eine Funktion angewendet, die durch den `Function`-Konstruktor erstellt wurde, gibt `toString()` den Quellcode einer synthetisierten Funktionsdeklaration mit dem Namen "anonymous" zurück, die die angegebenen Parameter und den Funktionskörper verwendet. Beispielsweise wird `Function("a", "b", "return a + b").toString()` zurückgeben:

```plain
function anonymous(a,b
) {
return a + b
}
```

Seit ES2018 verlangt die Spezifikation, dass der Rückgabewert von `toString()` exakt der gleiche Quellcode ist, wie er deklariert wurde, einschließlich aller Leerzeichen und/oder Kommentare — oder, falls der Host den Quellcode aus irgendeinem Grund nicht verfügbar hat, erfordert die Spezifikation die Rückgabe eines nativen Funktionsstrings. Unterstützung für dieses überarbeitete Verhalten finden Sie in der [Kompatibilitätstabelle](#browser-kompatibilität).

## Beispiele

### Vergleich von tatsächlichem Quellcode und Ergebnissen von toString

```js
function test(fn) {
  console.log(fn.toString());
}

function f() {}
class A {
  a() {}
}
function* g() {}

test(f); // "function f() {}"
test(A); // "class A { a() {} }"
test(g); // "function* g() {}"
test((a) => a); // "(a) => a"
test({ a() {} }.a); // "a() {}"
test({ *a() {} }.a); // "*a() {}"
test({ [0]() {} }[0]); // "[0]() {}"
test(Object.getOwnPropertyDescriptor({ get a() {} }, "a").get); // "get a() {}"
test(Object.getOwnPropertyDescriptor({ set a(x) {} }, "a").set); // "set a(x) {}"
test(Function.prototype.toString); // "function toString() { [native code] }"
test(function f() {}.bind(0)); // "function () { [native code] }"
test(Function("a", "b")); // function anonymous(a\n) {\nb\n}
```

Beachten Sie, dass nach der Überarbeitung von `Function.prototype.toString()`, wenn `toString()` aufgerufen wird, Implementierungen niemals einen Funktionsquellcode synthetisieren dürfen, der kein nativer Funktionsstring ist. Die Methode gibt immer den exakten Quellcode zurück, der zur Erstellung der Funktion verwendet wurde — einschließlich der oben genannten [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set) Beispiele. Der [`Function`](/de/docs/Web/JavaScript/Reference/Functions)-Konstruktor selbst hat die Fähigkeit, den Quellcode für die Funktion zu synthetisieren (und ist daher eine Form von implizitem [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)).

### Quelltext einer Funktion erhalten

Es ist möglich, den Quelltext einer Funktion zu erhalten, indem man sie in einen String umwandelt — z.B. indem man sie in einen Template-Literal einwickelt:

```js
function foo() {
  return "bar";
}
console.log(`${foo}`);
// function foo() {
//   return "bar";
// }
```

Dieser Quelltext ist _exakt_, einschließlich aller verstreuten Kommentare (die sonst nicht durch die interne Darstellung der Engine gespeichert würden).

```js
function foo /* a comment */() {
  return "bar";
}
console.log(foo.toString());
// function foo /* a comment */() {
//   return "bar";
// }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
