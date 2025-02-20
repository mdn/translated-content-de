---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Function")}}-Instanzen gibt einen String zurück, der den Quellcode dieser Funktion darstellt.

{{InteractiveExample("JavaScript Demo: Function.toString()")}}

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

Ein String, der den Quellcode der Funktion darstellt.

## Beschreibung

Das {{jsxref("Function")}}-Objekt überschreibt die `toString()`-Methode, die von {{jsxref("Object")}} geerbt wird; es erbt nicht {{jsxref("Object.prototype.toString")}}. Für benutzerdefinierte `Function`-Objekte gibt die `toString`-Methode einen String zurück, der das Quelltextsegment enthält, das zur Definition der Funktion verwendet wurde.

JavaScript ruft die `toString`-Methode automatisch auf, wenn ein `Function`-Objekt als Textwert dargestellt werden soll, z. B. wenn eine Funktion mit einem String verkettet wird.

Die `toString()`-Methode wirft eine {{jsxref("TypeError")}}-Ausnahme ("Function.prototype.toString called on incompatible object"), wenn der `this`-Wert des Objekts kein `Function`-Objekt ist.

```js example-bad
Function.prototype.toString.call("foo"); // throws TypeError
```

Wenn die `toString()`-Methode auf eingebaute Funktionsobjekte, eine Funktion, die mit {{jsxref("Function.prototype.bind()")}} erstellt wurde, oder andere Nicht-JavaScript-Funktionen angewendet wird, gibt `toString()` einen _nativen Funktions-String_ zurück, der wie folgt aussieht:

```plain
function someName() { [native code] }
```

Für Methoden und Funktionen von intrinsischen Objekten ist `someName` der ursprüngliche Name der Funktion; andernfalls kann der Inhalt implementationsspezifisch sein, aber er wird immer in der Syntax von Eigenschaftsnamen dargestellt, wie `[1 + 1]`, `someName` oder `1`.

> [!NOTE]
> Das bedeutet, dass die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) mit nativen Funktions-Strings garantiert zu einem Syntaxfehler führt.

Wenn die `toString()`-Methode auf eine mit dem `Function`-Konstruktor erstellte Funktion angewendet wird, gibt `toString()` den Quellcode einer synthetisierten Funktionsdeklaration namens "anonymous" zurück, mit den übergebenen Parametern und dem Funktionskörper. Beispielsweise wird `Function("a", "b", "return a + b").toString()` Folgendes zurückgeben:

```plain
function anonymous(a,b
) {
return a + b
}
```

Seit ES2018 verlangt die Spezifikation, dass der Rückgabewert von `toString()` exakt der Quellcode ist, wie er deklariert wurde, einschließlich Leerzeichen und/oder Kommentaren — oder, falls der Host den Quellcode aus irgendeinem Grund nicht verfügbar hat, eine Rückgabe eines nativen Funktions-Strings erfordert. Unterstützung für dieses überarbeitete Verhalten finden Sie in der [Kompatibilitätstabelle](#browser-kompatibilität).

## Beispiele

### Vergleich von tatsächlichem Quellcode und toString-Ergebnissen

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

Beachten Sie, dass ab der Überarbeitung von `Function.prototype.toString()` bei Aufruf von `toString()` Implementationen niemals den Quellcode einer Funktion synthetisieren dürfen, die nicht ein nativer Funktions-String ist. Die Methode gibt immer den exakten Quellcode zurück, der zur Erstellung der Funktion verwendet wurde — einschließlich der oben gezeigten [getter](/de/docs/Web/JavaScript/Reference/Functions/get)- und [setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Beispiele. Der [`Function`](/de/docs/Web/JavaScript/Reference/Functions)-Konstruktor selbst hat die Fähigkeit, den Quellcode für die Funktion zu synthetisieren (und ist daher eine Form von implizitem [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)).

### Quelltext einer Funktion abrufen

Es ist möglich, den Quelltext einer Funktion zu erhalten, indem man sie in einen String umwandelt — beispielsweise durch das Einfügen in eine Template-Zeichenkette:

```js
function foo() {
  return "bar";
}
console.log(`${foo}`);
// function foo() {
//   return "bar";
// }
```

Dieser Quelltext ist _exakt_, einschließlich aller dazwischen eingefügten Kommentare (die sonst nicht in der internen Darstellung der Engine gespeichert werden).

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
