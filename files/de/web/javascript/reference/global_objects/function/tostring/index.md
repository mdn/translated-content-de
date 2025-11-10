---
title: Function.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toString()`**-Methode von {{jsxref("Function")}}-Instanzen gibt einen String zurück, der den Quellcode dieser Funktion repräsentiert.

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

Das {{jsxref("Function")}}-Objekt überschreibt die `toString()`-Methode, die von {{jsxref("Object")}} geerbt wurde; es erbt nicht {{jsxref("Object.prototype.toString")}}. Bei benutzerdefinierten `Function`-Objekten gibt die `toString`-Methode einen String zurück, der das Quelltextsegment enthält, das zur Definition der Funktion verwendet wurde.

JavaScript ruft die `toString`-Methode automatisch auf, wenn ein `Function`-Objekt als Textwert dargestellt werden soll, z. B. wenn eine Funktion mit einem String verkettet wird.

Die `toString()`-Methode wirft eine {{jsxref("TypeError")}}-Ausnahme ("Function.prototype.toString called on incompatible object"), wenn das `this`-Wertobjekt kein `Function`-Objekt ist.

```js example-bad
Function.prototype.toString.call("foo"); // throws TypeError
```

Wenn die `toString()`-Methode auf eingebauten Funktionsobjekten, einer durch {{jsxref("Function.prototype.bind()")}} erstellten Funktion oder anderen Nicht-JavaScript-Funktionen aufgerufen wird, gibt `toString()` einen _native function string_ zurück, der aussieht wie

```plain
function someName() { [native code] }
```

Bei intrinsischen Objektsmethoden und Funktionen ist `someName` der anfängliche Name der Funktion; andernfalls kann der Inhalt implementierungsabhängig sein, wird jedoch immer in der Eigenschaftennamenssyntax sein, wie `[1 + 1]`, `someName` oder `1`.

> [!NOTE]
> Das bedeutet, dass die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) auf nativen Funktionsstrings garantiert einen Syntaxfehler darstellt.

Wenn die `toString()`-Methode auf eine durch den `Function`-Konstruktor erstellte Funktion aufgerufen wird, gibt `toString()` den Quellcode einer synthetisierten Funktionsdeklaration namens "anonymous" zurück, wobei die bereitgestellten Parameter und Funktionskörper verwendet werden. Zum Beispiel wird `Function("a", "b", "return a + b").toString()` folgendes zurückgeben:

```plain
function anonymous(a,b
) {
return a + b
}
```

Seit ES2018 verlangt die Spezifikation, dass der Rückgabewert von `toString()` genau derselbe Quellcode ist, wie er deklariert wurde, einschließlich aller Leerzeichen und/oder Kommentare — oder, falls der Host den Quellcode aus irgendeinem Grund nicht verfügbar hat, muss ein nativer Funktionsstring zurückgegeben werden. Unterstützung für dieses überarbeitete Verhalten finden Sie in der [Kompatibilitätstabelle](#browser-kompatibilität).

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

Beachten Sie, dass nach der Überarbeitung von `Function.prototype.toString()` bei einem Aufruf von `toString()` Implementierungen nie erlaubt sind, einen Funktionsquelltext zu synthetisieren, der kein nativer Funktionsstring ist. Die Methode gibt immer den exakten Quellcode zurück, der zur Erstellung der Funktion verwendet wurde — einschließlich der obigen [getter](/de/docs/Web/JavaScript/Reference/Functions/get)- und [setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Beispiele. Der [`Function`](/de/docs/Web/JavaScript/Reference/Functions)-Konstruktor selbst hat die Fähigkeit, den Quellcode für die Funktion zu synthetisieren (und ist daher eine Form von implizitem [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)).

### Erhalten des Quelltexts einer Funktion

Es ist möglich, den Quelltext einer Funktion zu erhalten, indem man sie in einen String umwandelt — zum Beispiel, indem man sie in eine Template-Literal einfügt:

```js
function foo() {
  return "bar";
}
console.log(`${foo}`);
// function foo() {
//   return "bar";
// }
```

Dieser Quelltext ist _exakt_, einschließlich aller eingefügten Kommentare (die ansonsten nicht von der internen Darstellung der Engine gespeichert werden).

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
