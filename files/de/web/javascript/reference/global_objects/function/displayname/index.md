---
title: "Funktion: displayName"
short-title: displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

Die optionale **`displayName`** Eigenschaft einer {{jsxref("Function")}} Instanz gibt den Anzeigenamen der Funktion an.

## Wert

Die `displayName` Eigenschaft ist anfänglich bei keiner Funktion vorhanden — sie wird von den Code-Autoren hinzugefügt. Für Anzeigezwecke sollte sie ein String sein.

## Beschreibung

Wenn vorhanden, wird die `displayName` Eigenschaft von Konsolen und Profiler möglicherweise bevorzugt gegenüber der {{jsxref("Function/name", "name")}} Eigenschaft verwendet, um den Namen einer Funktion anzuzeigen.

Unter den Browsern nutzt nur die Firefox-Konsole diese Eigenschaft. Auch die React Devtools verwenden die [`displayName`](https://legacy.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging) Eigenschaft, um den Komponentenbaum darzustellen.

Firefox unternimmt einige grundlegende Versuche, um die `displayName` zu entschlüsseln, die möglicherweise durch den Algorithmus der [anonymous JavaScript functions naming convention](https://johnjbarton.github.io/nonymous/index.html) generiert wurde. Die folgenden Muster werden erkannt:

- Wenn `displayName` mit einer Folge von alphanumerischen Zeichen, `_`, und `$` endet, wird das längste solche Suffix angezeigt.
- Wenn `displayName` mit einer Folge von in `[]` eingeschlossenen Zeichen endet, wird diese Folge ohne die eckigen Klammern angezeigt.
- Wenn `displayName` mit einer Folge von alphanumerischen Zeichen und `_`, gefolgt von einigen `/`, `.`, oder `<`, endet, wird die Folge ohne die abschließenden `/`, `.`, oder `<` angezeigt.
- Wenn `displayName` mit einer Folge von alphanumerischen Zeichen und `_`, gefolgt von `(^)`, endet, wird die Folge ohne das `(^)` angezeigt.

Wenn keines der oben genannten Muster übereinstimmt, wird das gesamte `displayName` angezeigt.

## Beispiele

### Ein displayName setzen

Wenn Sie Folgendes in eine Firefox-Konsole eingeben, sollte es so etwas wie `function MyFunction()` anzeigen:

```js
function a() {}
a.displayName = "MyFunction";

a; // function MyFunction()
```

### Dynamisches Ändern von displayName

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

Die Firefox Devtools bereinigen einige häufige Muster in der `displayName` Eigenschaft, bevor sie angezeigt wird.

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
