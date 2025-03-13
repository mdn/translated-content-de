---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Function")}}-Instanzen gibt eine Zeichenkette zurück, die den Quellcode dieser Funktion darstellt.

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

Eine Zeichenkette, die den Quellcode der Funktion darstellt.

## Beschreibung

Das {{jsxref("Function")}}-Objekt überschreibt die `toString()`-Methode, die von {{jsxref("Object")}} geerbt wird; es erbt nicht {{jsxref("Object.prototype.toString")}}. Für benutzerdefinierte `Function`-Objekte gibt die `toString`-Methode eine Zeichenkette zurück, die das Quelltextsegment enthält, das zur Definition der Funktion verwendet wurde.

JavaScript ruft die `toString`-Methode automatisch auf, wenn eine `Function` als Textwert dargestellt werden soll, z. B. wenn eine Funktion mit einer Zeichenkette verkettet wird.

Die `toString()`-Methode wirft eine {{jsxref("TypeError")}}-Ausnahme ("Function.prototype.toString called on incompatible object"), wenn das `this`-Wert-Objekt kein `Function`-Objekt ist.

```js example-bad
Function.prototype.toString.call("foo"); // throws TypeError
```

Wenn die `toString()`-Methode auf eingebauten Funktionsobjekten, einer Funktion, die durch {{jsxref("Function.prototype.bind()")}} erstellt wurde, oder anderen Nicht-JavaScript-Funktionen aufgerufen wird, gibt `toString()` eine _native function string_ zurück, die folgendermaßen aussieht:

```plain
function someName() { [native code] }
```

Für Methoden und Funktionen in intrinsischen Objekten ist `someName` der ursprüngliche Name der Funktion; andernfalls kann sein Inhalt implementierungsdefiniert sein, wird aber immer in der Eigenschaftsnamenssyntax wie `[1 + 1]`, `someName` oder `1` dargestellt.

> [!NOTE]
> Dies bedeutet, dass die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) auf native function strings einen garantierten Syntaxfehler darstellt.

Wenn die `toString()`-Methode auf einer Funktion aufgerufen wird, die durch den `Function`-Konstruktor erstellt wurde, gibt `toString()` den Quellcode einer synthetisierten Funktionsdeklaration mit dem Namen "anonymous" unter Verwendung der bereitgestellten Parameter und des Funktionskörpers zurück. Zum Beispiel wird `Function("a", "b", "return a + b").toString()` Folgendes zurückgeben:

```plain
function anonymous(a,b
) {
return a + b
}
```

Seit ES2018 erfordert die Spezifikation, dass der Rückgabewert von `toString()` exakt der gleiche Quellcode ist, wie er deklariert wurde, einschließlich jeglichen Leerzeichens und/oder Kommentars – oder, wenn der Host aus irgendeinem Grund den Quellcode nicht zur Verfügung hat, die Rückgabe eines native function string erfordert. Unterstützung für dieses überarbeitete Verhalten finden Sie in der [Kompatibilitätstabelle](#browser-kompatibilität).

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

Beachten Sie, dass nach der Überarbeitung von `Function.prototype.toString()`, wenn `toString()` aufgerufen wird, Implementierungen niemals den Quellcode einer Funktion synthetisieren dürfen, der nicht ein native function string ist. Die Methode gibt immer den exakten Quellcode zurück, der zur Erstellung der Funktion verwendet wurde – einschließlich der [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set) Beispiele oben. Der [`Function`](/de/docs/Web/JavaScript/Reference/Functions) Konstruktor selbst hat die Fähigkeit, den Quellcode für die Funktion zu synthetisieren (und stellt daher eine Form von implizitem [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) dar).

### Abrufen des Quelltextes einer Funktion

Es ist möglich, den Quelltext einer Funktion zu erhalten, indem man sie in eine Zeichenkette umwandelt – zum Beispiel, indem man sie in einem Template-Literal umschließt:

```js
function foo() {
  return "bar";
}
console.log(`${foo}`);
// function foo() {
//   return "bar";
// }
```

Dieser Quelltext ist _exakt_, einschließlich aller dazwischen gestreuten Kommentare (die sonst nicht in der internen Darstellung der Engine gespeichert würden).

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
