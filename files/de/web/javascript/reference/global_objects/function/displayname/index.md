---
title: "Funktion: displayName"
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{JSRef}} {{Non-standard_Header}}

Die optionale **`displayName`**-Eigenschaft einer {{jsxref("Function")}}-Instanz gibt den Anzeigenamen der Funktion an.

## Wert

Die `displayName`-Eigenschaft ist anfangs bei keiner Funktion vorhanden – sie wird von den Codeautoren hinzugefügt. Für Anzeigzwecke sollte es ein String sein.

## Beschreibung

Die `displayName`-Eigenschaft, falls vorhanden, kann von Konsolen und Profilern gegenüber der {{jsxref("Function/name", "name")}}-Eigenschaft bevorzugt werden, um als Name einer Funktion angezeigt zu werden.

Unter den Browsern nutzt nur die Firefox-Konsole diese Eigenschaft. Auch die React-Devtools verwenden die [`displayName`](https://legacy.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging)-Eigenschaft beim Anzeigen des Komponentenbaums.

Firefox unternimmt einige grundlegende Versuche, das `displayName` zu dekodieren, das möglicherweise durch den Algorithmus der [anonymen JavaScript-Funktionsbenennungskonvention](https://johnjbarton.github.io/nonymous/index.html) generiert wurde. Die folgenden Muster werden erkannt:

- Wenn `displayName` mit einer Folge aus alphanumerischen Zeichen, `_` und `$` endet, wird das längste solches Suffix angezeigt.
- Wenn `displayName` mit einer in `[]` eingeschlossenen Zeichenfolge endet, wird diese Folge ohne die eckigen Klammern angezeigt.
- Wenn `displayName` mit einer Folge aus alphanumerischen Zeichen und `_` gefolgt von `/`, `.` oder `<` endet, wird die Folge ohne die abschließenden `/`, `.` oder `<` Zeichen zurückgegeben.
- Wenn `displayName` mit einer Folge aus alphanumerischen Zeichen und `_` gefolgt von `(^)` endet, wird die Folge ohne `(^)` angezeigt.

Wenn keines der oben genannten Muster übereinstimmt, wird das gesamte `displayName` angezeigt.

## Beispiele

### Ein displayName setzen

Wenn Sie Folgendes in eine Firefox-Konsole eingeben, sollte es als etwas wie `function MyFunction()` angezeigt werden:

```js
const a = function () {};
a.displayName = "MyFunction";

a; // function MyFunction()
```

### Dynamisches Ändern von displayName

Sie können das `displayName` einer Funktion dynamisch ändern:

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

### Bereinigen von displayName

Die Firefox-Devtools bereinigen einige gängige Muster in der `displayName`-Eigenschaft, bevor sie angezeigt werden.

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Function.prototype.name")}}
