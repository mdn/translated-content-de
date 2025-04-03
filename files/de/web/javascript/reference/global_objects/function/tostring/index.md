---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
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

Das {{jsxref("Function")}}-Objekt überschreibt die `toString()`-Methode, die von {{jsxref("Object")}} geerbt wird; es erbt nicht {{jsxref("Object.prototype.toString")}}. Bei benutzerdefinierten `Function`-Objekten gibt die `toString`-Methode eine Zeichenkette zurück, die das Quelltextsegment enthält, das zur Definition der Funktion verwendet wurde.

JavaScript ruft die `toString`-Methode automatisch auf, wenn ein `Function`-Objekt als Textwert dargestellt werden soll, z.B. wenn eine Funktion mit einer Zeichenkette verkettet wird.

Die `toString()`-Methode wirft eine {{jsxref("TypeError")}}-Ausnahme ("Function.prototype.toString called on incompatible object"), wenn das `this`-Wertobjekt kein `Function`-Objekt ist.

```js example-bad
Function.prototype.toString.call("foo"); // throws TypeError
```

Wenn die `toString()`-Methode auf eingebauten Funktionsobjekten, einer durch {{jsxref("Function.prototype.bind()")}} erstellten Funktion oder anderen Nicht-JavaScript-Funktionen aufgerufen wird, gibt `toString()` eine _native function string_ zurück, die folgendermaßen aussieht:

```plain
function someName() { [native code] }
```

Für Methoden und Funktionen von intrinsischen Objekten ist `someName` der ursprüngliche Name der Funktion; andernfalls kann ihr Inhalt durch die Implementierung definiert werden, wird aber immer in der Syntax für Eigenschaftsnamen sein, wie `[1 + 1]`, `someName` oder `1`.

> [!NOTE]
> Dies bedeutet, dass die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) auf nativen Funktionszeichenfolgen garantiert zu einem Syntaxfehler führt.

Wenn die `toString()`-Methode auf eine Funktion aufgerufen wird, die durch den `Function`-Konstruktor erstellt wurde, gibt `toString()` den Quellcode einer synthetisierten Funktionsdeklaration mit dem Namen "anonymous" unter Verwendung der bereitgestellten Parameter und des Funktionskörpers zurück. Zum Beispiel gibt `Function("a", "b", "return a + b").toString()` zurück:

```plain
function anonymous(a,b
) {
return a + b
}
```

Seit ES2018 verlangt die Spezifikation, dass der Rückgabewert von `toString()` genau der Quellcode ist, wie er deklariert wurde, einschließlich aller Leerzeichen und/oder Kommentare — oder, falls der Host den Quellcode aus irgendeinem Grund nicht verfügbar hat, dass eine native Funktionszeichenfolge zurückgegeben werden muss. Unterstützung für dieses überarbeitete Verhalten finden Sie in der [Kompatibilitätstabelle](#browser-kompatibilität).

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

Beachten Sie, dass nach der Überarbeitung von `Function.prototype.toString()`, wenn `toString()` aufgerufen wird, Implementierungen niemals erlaubt sind, den Quellcode einer Funktion zu synthetisieren, der keine native Funktionszeichenfolge ist. Die Methode gibt stets den exakten Quellcode zurück, der zur Erstellung der Funktion verwendet wurde — einschließlich der [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [Setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Beispiele oben. Der [`Function`](/de/docs/Web/JavaScript/Reference/Functions)-Konstruktor selbst hat die Fähigkeit, den Quellcode für die Funktion zu synthetisieren (und ist daher eine Form von implizitem [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)).

### Abrufen des Quelltextes einer Funktion

Es ist möglich, den Quelltext einer Funktion zu erhalten, indem man sie in eine Zeichenkette umwandelt — zum Beispiel, indem man sie in ein Template Literal einbettet:

```js
function foo() {
  return "bar";
}
console.log(`${foo}`);
// function foo() {
//   return "bar";
// }
```

Dieser Quelltext ist _exakt_, einschließlich aller eingefügten Kommentare (die ansonsten nicht durch die interne Darstellung der Engine gespeichert werden).

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
