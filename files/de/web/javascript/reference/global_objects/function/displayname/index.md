---
title: "Function: displayName"
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{JSRef}} {{Non-standard_Header}}

Die optionale **`displayName`**-Eigenschaft einer {{jsxref("Function")}}-Instanz legt den Anzeigenamen der Funktion fest.

## Wert

Die `displayName`-Eigenschaft ist anfangs bei keiner Funktion vorhanden — sie wird von den Codeautoren hinzugefügt. Für Anzeigezwecke sollte es sich um einen String handeln.

## Beschreibung

Die `displayName`-Eigenschaft, falls vorhanden, kann von Konsolen und Profilern gegenüber der {{jsxref("Function/name", "name")}}-Eigenschaft bevorzugt werden, um sie als Namen einer Funktion anzuzeigen.

Von den Browsern nutzt nur die Firefox-Konsole diese Eigenschaft. Auch die React Devtools verwenden die [`displayName`](https://legacy.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging)-Eigenschaft, wenn sie den Komponententree anzeigen.

Firefox unternimmt einige grundlegende Versuche, die `displayName` zu dekodieren, die möglicherweise durch den Algorithmus der [anonymous JavaScript functions naming convention](https://johnjbarton.github.io/nonymous/index.html) generiert wurde. Die folgenden Muster werden erkannt:

- Wenn `displayName` mit einer Sequenz von alphanumerischen Zeichen, `_` und `$` endet, wird das längste solche Suffix angezeigt.
- Wenn `displayName` mit einer Sequenz von in `[]` eingeschlossenen Zeichen endet, wird diese Sequenz ohne die eckigen Klammern angezeigt.
- Wenn `displayName` mit einer Sequenz von alphanumerischen Zeichen und `_` gefolgt von einigen `/`, `.`, oder `<` endet, wird die Sequenz ohne die abschließenden `/`, `.` oder `<`-Zeichen zurückgegeben.
- Wenn `displayName` mit einer Sequenz von alphanumerischen Zeichen und `_` gefolgt von `(^)` endet, wird die Sequenz ohne das `(^)` angezeigt.

Wenn keines der oben genannten Muster übereinstimmt, wird das gesamte `displayName` angezeigt.

## Beispiele

### Ein displayName setzen

Wenn Sie das Folgende in einer Firefox-Konsole eingeben, sollte es als etwas wie `function MyFunction()` angezeigt werden:

```js
const a = function () {};
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

### Bereinigung des displayName

Firefox Devtools würden einige häufige Muster in der `displayName`-Eigenschaft bereinigen, bevor sie angezeigt wird.

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

Nicht Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Function.prototype.name")}}
