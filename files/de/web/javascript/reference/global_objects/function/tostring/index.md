---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Function")}}-Instanzen gibt eine Zeichenkette zurück, die den Quellcode dieser Funktion darstellt.

{{EmbedInteractiveExample("pages/js/function-tostring.html")}}

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

JavaScript ruft die `toString`-Methode automatisch auf, wenn eine `Function` als Textwert dargestellt werden soll, z. B. wenn eine Funktion mit einer Zeichenkette verknüpft wird.

Die `toString()`-Methode löst eine {{jsxref("TypeError")}}-Ausnahme aus ("Function.prototype.toString called on incompatible object"), wenn ihr `this`-Wert-Objekt kein `Function`-Objekt ist.

```js example-bad
Function.prototype.toString.call("foo"); // throws TypeError
```

Wenn die `toString()`-Methode auf eingebauten Funktionsobjekten, einer Funktion, die durch {{jsxref("Function.prototype.bind()")}} erstellt wurde, oder anderen Nicht-JavaScript-Funktionen aufgerufen wird, gibt `toString()` eine _native function string_ zurück, die so aussieht:

```plain
function someName() { [native code] }
```

Für Methoden und Funktionen von intrinsischen Objekten ist `someName` der ursprüngliche Name der Funktion; andernfalls kann der Inhalt implementationsspezifisch sein, wird aber immer in Eigenschaftsnamenssyntax sein, wie `[1 + 1]`, `someName` oder `1`.

> [!NOTE]
> Das bedeutet, dass die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) auf nativen Funktionszeichenfolgen immer zu einem Syntaxfehler führt.

Wenn die `toString()`-Methode auf eine Funktion angewendet wird, die durch den `Function`-Konstruktor erstellt wurde, gibt `toString()` den Quellcode einer synthetisierten Funktionsdeklaration namens "anonymous" anhand der bereitgestellten Parameter und des Funktionskörpers zurück. Zum Beispiel wird `Function("a", "b", "return a + b").toString()` folgendes zurückgeben:

```plain
function anonymous(a,b
) {
return a + b
}
```

Seit ES2018 verlangt die Spezifikation, dass der Rückgabewert von `toString()` exakt der gleiche Quellcode ist, wie er deklariert wurde, einschließlich aller Leerzeichen und/oder Kommentare – oder, wenn der Host den Quellcode aus irgendeinem Grund nicht verfügbar hat, muss ein originale Funktion als native Funktionszeichenfolge zurückgegeben werden. Die Unterstützung für dieses überarbeitete Verhalten finden Sie in der [Kompatibilitätstabelle](#browser-kompatibilität).

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

Beachten Sie, dass nach der Überarbeitung von `Function.prototype.toString()` im Aufruf von `toString()` Implementierungen niemals synthetisierten Quellcode einer Funktion zurückgeben dürfen, der nicht eine native Funktionszeichenfolge ist. Die Methode gibt immer den genauen Quellcode zurück, der zum Erstellen der Funktion verwendet wurde – einschließlich der [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Beispiele oben. Der [`Function`](/de/docs/Web/JavaScript/Reference/Functions)-Konstruktor selbst hat die Fähigkeit, den Quellcode für die Funktion zu synthetisieren (und ist daher eine Form von implizitem [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)).

### Quelltext einer Funktion erhalten

Es ist möglich, den Quelltext einer Funktion zu erhalten, indem Sie ihn in eine Zeichenkette umwandeln – zum Beispiel, indem Sie ihn in eine Template Literal einfügen:

```js
function foo() {
  return "bar";
}
console.log(`${foo}`);
// function foo() {
//   return "bar";
// }
```

Dieser Quelltext ist _genau_, einschließlich aller eingefügten Kommentare (die sonst nicht von der internen Repräsentation der Engine gespeichert werden).

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
