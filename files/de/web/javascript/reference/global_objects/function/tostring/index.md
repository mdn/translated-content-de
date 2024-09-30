---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Function")}}-Instanzen gibt einen String zurück, der den Quellcode dieser Funktion darstellt.

{{EmbedInteractiveExample("pages/js/function-tostring.html")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den Quellcode der Funktion darstellt.

## Beschreibung

Das {{jsxref("Function")}}-Objekt überschreibt die `toString()`-Methode, die von {{jsxref("Object")}} geerbt wurde; es erbt nicht {{jsxref("Object.prototype.toString")}}. Für benutzerdefinierte `Function`-Objekte gibt die `toString`-Methode einen String zurück, der das Quelltextsegment enthält, das zur Definition der Funktion verwendet wurde.

JavaScript ruft die `toString`-Methode automatisch auf, wenn eine `Function` als Textwert dargestellt werden soll, z.B. wenn eine Funktion mit einem String verkettet wird.

Die `toString()`-Methode wird eine {{jsxref("TypeError")}}-Ausnahme auslösen ("Function.prototype.toString called on incompatible object"), wenn das `this`-Wertobjekt kein `Function`-Objekt ist.

```js example-bad
Function.prototype.toString.call("foo"); // throws TypeError
```

Wenn die `toString()`-Methode auf eingebauten Funktionsobjekten, einer durch {{jsxref("Function.prototype.bind()")}} erstellten Funktion oder anderen Nicht-JavaScript-Funktionen aufgerufen wird, gibt `toString()` einen _nativem Funktionsstring_ zurück, der so aussieht:

```plain
function someName() { [native code] }
```

Für Methoden und Funktionen von intrinsischen Objekten ist `someName` der ursprüngliche Name der Funktion; ansonsten kann ihr Inhalt implementationsspezifisch sein, wird aber immer in einer Eigenschaftsnamensyntax sein, wie `[1 + 1]`, `someName` oder `1`.

> [!NOTE]
> Dies bedeutet, dass die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) auf nativen Funktionsstrings einen garantierten Syntaxfehler darstellt.

Wenn die `toString()`-Methode auf eine durch den `Function`-Konstruktor erstellte Funktion aufgerufen wird, gibt `toString()` den Quellcode einer synthetisierten Funktionsdeklaration mit dem Namen "anonymous" unter Verwendung der bereitgestellten Parameter und des Funktionskörpers zurück. Zum Beispiel wird `Function("a", "b", "return a + b").toString()` zurückgeben:

```plain
function anonymous(a,b
) {
return a + b
}
```

Seit ES2018 verlangt die Spezifikation, dass der Rückgabewert von `toString()` genau derselbe Quellcode ist, wie er deklariert wurde, einschließlich aller Leerzeichen und/oder Kommentare — oder, wenn der Host den Quellcode aus irgendeinem Grund nicht verfügbar hat, muss ein nativer Funktionsstring zurückgegeben werden. Die Unterstützung für dieses überarbeitete Verhalten finden Sie in der [Kompatibilitätstabelle](#browser-kompatibilität).

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

Beachten Sie, dass nach der Überarbeitung von `Function.prototype.toString()`, wenn `toString()` aufgerufen wird, Implementierungen niemals den Quellcode einer Funktion synthetisieren dürfen, die kein nativer Funktionsstring ist. Die Methode gibt immer den genauen Quellcode zurück, der zur Erstellung der Funktion verwendet wurde — einschließlich der [getter](/de/docs/Web/JavaScript/Reference/Functions/get)- und [setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Beispiele oben. Der [`Function`](/de/docs/Web/JavaScript/Reference/Functions)-Konstruktor selbst hat die Fähigkeit, den Quellcode für die Funktion zu synthetisieren (und ist daher eine Form von implizitem [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)).

### Abrufen des Quelltexts einer Funktion

Es ist möglich, den Quelltext einer Funktion zu erhalten, indem man sie in einen String zwingt — zum Beispiel, indem man sie in einen Template-String einschließt:

```js
function foo() {
  return "bar";
}
console.log(`${foo}`);
// function foo() {
//   return "bar";
// }
```

Dieser Quelltext ist _genau_, einschließlich aller eingestreuten Kommentare (die sonst nicht durch die interne Darstellung der Engine gespeichert würden).

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
