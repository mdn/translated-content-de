---
title: "Function: displayName"
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{JSRef}} {{Non-standard_Header}}

Die optionale **`displayName`** Eigenschaft einer {{jsxref("Function")}} Instanz spezifiziert den Anzeigenamen der Funktion.

## Wert

Die `displayName` Eigenschaft ist anfänglich bei keiner Funktion vorhanden — sie wird von den Code-Autoren hinzugefügt. Zur Anzeige sollte es ein String sein.

## Beschreibung

Die `displayName` Eigenschaft wird, falls vorhanden, möglicherweise von Konsolen und Profilern dem {{jsxref("Function/name", "name")}} Attribut als Funktionsname vorgezogen.

Unter den Browsern nutzt nur die Firefox-Konsole diese Eigenschaft. Die React-Entwicklertools verwenden auch die [`displayName`](https://legacy.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging) Eigenschaft beim Anzeigen des Komponentenbaums.

Firefox versucht, das `displayName` zu verwenden, das möglicherweise durch den [anonymous JavaScript functions naming convention](https://johnjbarton.github.io/nonymous/index.html) Algorithmus generiert wurde. Die folgenden Muster werden erkannt:

- Wenn `displayName` mit einer Folge von alphanumerischen Zeichen, `_`, und `$` endet, wird das längste solcher Suffixe angezeigt.
- Wenn `displayName` mit einer Folge von durch `[]` eingeschlossenen Zeichen endet, wird diese Folge ohne die eckigen Klammern angezeigt.
- Wenn `displayName` mit einer Folge von alphanumerischen Zeichen und `_` gefolgt von `/`, `.`, oder `<` endet, wird die Folge ohne die abschließenden `/`, `.`, oder `<` Zeichen angezeigt.
- Wenn `displayName` mit einer Folge von alphanumerischen Zeichen und `_` gefolgt von `(^)` endet, wird die Folge ohne das `(^)` angezeigt.

Wenn keines der oben genannten Muster übereinstimmt, wird das gesamte `displayName` angezeigt.

## Beispiele

### Festlegen eines displayName

Durch Eingabe des folgenden in einer Firefox-Konsole sollte es als etwas wie `function MyFunction()` angezeigt werden:

```js
const a = function () {};
a.displayName = "MyFunction";

a; // function MyFunction()
```

### Dynamisches Ändern des displayName

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

### Reinigung des displayName

Die Firefox-Entwicklertools würden einige gängige Muster in der `displayName` Eigenschaft bereinigen, bevor sie angezeigt wird.

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
