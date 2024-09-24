---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Function")}} Instanzen gibt einen String zurück, der den Quellcode dieser Funktion darstellt.

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

Das {{jsxref("Function")}} Objekt überschreibt die `toString()` Methode
von {{jsxref("Object")}}; es erbt nicht
{{jsxref("Object.prototype.toString")}}. Für benutzerdefinierte `Function`
Objekte gibt die `toString` Methode einen String zurück, der das Quelltextsegment enthält, das verwendet wurde, um die Funktion zu definieren.

JavaScript ruft die `toString` Methode automatisch auf, wenn eine
`Function` als Textwert dargestellt werden soll, z. B. wenn eine Funktion mit einem String verkettet wird.

Die `toString()` Methode wird eine {{jsxref("TypeError")}} Ausnahme werfen
("Function.prototype.toString called on incompatible object"), wenn ihr
`this` Wert-Objekt kein `Function` Objekt ist.

```js example-bad
Function.prototype.toString.call("foo"); // wirft TypeError
```

Wenn die `toString()` Methode auf eingebauten Funktionsobjekten, einer
Funktion, die durch {{jsxref("Function.prototype.bind()")}} erstellt wurde, oder
anderen nicht-JavaScript Funktonen aufgerufen wird, dann gibt `toString()`
einen _native function string_ zurück, der ungefähr so aussieht:

```plain
function someName() { [native code] }
```

Für Methoden und Funktionen von intrinsischen Objekten ist `someName` der initiale Name der Funktion; andernfalls kann der Inhalt durch die Implementierung definiert sein, wird aber immer im Syntax der Eigenschaftsnamen stehen, wie `[1 + 1]`, `someName`, oder `1`.

> [!NOTE]
> Das bedeutet, dass die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) auf nativen Funktionsstrings garantiert ein Syntaxfehler ist.

Wenn die `toString()` Methode auf eine Funktion aufgerufen wird, die durch den `Function` Konstruktor erstellt wurde, gibt `toString()` den Quellcode einer synthesierten Funktionsdeklaration mit dem Namen "anonymous" unter Verwendung der bereitgestellten Parameter und des Funktionskörpers zurück. Zum Beispiel wird `Function("a", "b", "return a + b").toString()` zurückgeben:

```plain
function anonymous(a,b
) {
return a + b
}
```

Seit ES2018 verlangt die Spezifikation, dass der Rückgabewert von `toString()` exakt der gleiche Quellcode ist, wie er deklariert wurde, einschließlich jeglicher Leerzeichen und/oder Kommentare — oder, wenn der Host den Quellcode aus irgendeinem Grund nicht verfügbar hat, verlangt, einen nativen Funktionsstring zurückzugeben. Die Unterstützung für dieses überarbeitete Verhalten finden Sie in der [Kompatibilitätstabelle](#browser-kompatibilität).

## Beispiele

### Vergleich von tatsächlichem Quellcode und toString Ergebnissen

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

Beachten Sie, dass nach der Überarbeitung von `Function.prototype.toString()`, wenn `toString()` aufgerufen wird, Implementierungen niemals erlaubt sind, einen Funktionsquellcode zu synthesieren, der kein nativer Funktionsstring ist. Die Methode gibt immer genau den Quellcode zurück, der zur Erstellung der Funktion verwendet wurde — einschließlich der [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) Beispiele oben. Der [`Function`](/de/docs/Web/JavaScript/Reference/Functions) Konstruktor selbst hat die Fähigkeit, den Quellcode für die Funktion zu synthesieren (und ist daher eine Form von implizitem [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)).

### Quelltext einer Funktion abrufen

Es ist möglich, den Quelltext einer Funktion abzurufen, indem man sie zu einem String zwingt — zum Beispiel, indem man sie in ein Template Literal einfügt:

```js
function foo() {
  return "bar";
}
console.log(`${foo}`);
// function foo() {
//   return "bar";
// }
```

Dieser Quelltext ist _exakt_, einschließlich aller eingefügten Kommentare (die sonst nicht von der internen Darstellung der Engine gespeichert werden).

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
