---
title: "Funktion: displayName"
short-title: displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}} {{Non-standard_Header}}

Die optionale **`displayName`**-Eigenschaft einer {{jsxref("Function")}}-Instanz gibt den Anzeigenamen der Funktion an.

## Wert

Die `displayName`-Eigenschaft ist anfangs bei keiner Funktion vorhanden – sie wird von den Code-Autoren hinzugefügt. Für Anzeigezwecke sollte sie ein String sein.

## Beschreibung

Die `displayName`-Eigenschaft, falls vorhanden, kann von Konsolen und Profiler gegenüber der {{jsxref("Function/name", "name")}}-Eigenschaft bevorzugt verwendet werden, um als Funktionsname angezeigt zu werden.

Unter den Browsern nutzt nur die Firefox-Konsole diese Eigenschaft. React Devtools verwenden ebenfalls die [`displayName`](https://legacy.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging)-Eigenschaft beim Anzeigen des Komponentenbaums.

Firefox unternimmt einige grundlegende Versuche, die `displayName`, die möglicherweise durch den [anonymous JavaScript functions naming convention](https://johnjbarton.github.io/nonymous/index.html) Algorithmus generiert wurde, zu dekodieren. Die folgenden Muster werden erkannt:

- Wenn `displayName` mit einer Sequenz aus alphanumerischen Zeichen, `_` und `$` endet, wird das längste solcher Suffixe angezeigt.
- Wenn `displayName` mit einer Sequenz aus in `[]` eingeschlossenen Zeichen endet, wird diese Sequenz ohne die eckigen Klammern angezeigt.
- Wenn `displayName` mit einer Sequenz aus alphanumerischen Zeichen und `_` gefolgt von einigen `/`, `.`, oder `<` endet, wird die Sequenz ohne die abschließenden `/`, `.`, oder `<` Zeichen zurückgegeben.
- Wenn `displayName` mit einer Sequenz aus alphanumerischen Zeichen und `_` gefolgt von `(^)` endet, wird die Sequenz ohne `(^)` angezeigt.

Wenn keines der oben genannten Muster zutrifft, wird die gesamte `displayName` angezeigt.

## Beispiele

### Ein displayName setzen

Durch die Eingabe des Folgenden in einer Firefox-Konsole sollte es als etwas wie `function MyFunction()` angezeigt werden:

```js
function a() {}
a.displayName = "MyFunction";

a; // function MyFunction()
```

### displayName dynamisch ändern

Sie können den `displayName` einer Funktion dynamisch ändern:

```js
const object = {
  // anonymous
  someMethod: function someMethod(value) {
    someMethod.displayName = `someMethod (${value})`;
  },
};

console.log(object.someMethod.displayName); // undefined

object.someMethod("123");
console.log(object.someMethod.displayName); // "someMethod (123)"
```

### Bereinigung von displayName

Firefox Devtools würden einige üblichen Muster in der `displayName`-Eigenschaft bereinigen, bevor sie angezeigt wird.

```js
function foo() {}

function testName(name) {
  foo.displayName = name;
  console.log(foo);
}

testName("$foo$"); // function $foo$()
testName("foo bar"); // function bar()
testName("Foo.prototype.add"); // function add()
testName("foo ."); // function foo .()
testName("foo <"); // function foo <()
testName("foo?"); // function foo?()
testName("foo()"); // function foo()()

testName("[...]"); // function ...()
testName("foo<"); // function foo()
testName("foo..."); // function foo()
testName("foo(^)"); // function foo()
```

## Spezifikationen

Kein Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Function.prototype.name")}}
