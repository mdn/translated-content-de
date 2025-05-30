---
title: "Funktion: displayName"
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{JSRef}} {{Non-standard_Header}}

Die optionale **`displayName`**-Eigenschaft einer {{jsxref("Function")}}-Instanz spezifiziert den Anzeigenamen der Funktion.

## Wert

Die `displayName`-Eigenschaft ist anfangs bei keiner Funktion vorhanden — sie wird von den Codeautoren hinzugefügt. Für Anzeigezwecke sollte es sich um einen String handeln.

## Beschreibung

Die `displayName`-Eigenschaft kann, falls vorhanden, von Konsolen und Profilern bevorzugt über die Eigenschaft {{jsxref("Function/name", "name")}} als Funktionsname angezeigt werden.

Unter den Browsern nutzt nur die Firefox-Konsole diese Eigenschaft. Auch die React DevTools verwenden die [`displayName`](https://legacy.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging)-Eigenschaft beim Anzeigen der Komponentenstruktur.

Firefox unternimmt einige grundlegende Versuche, die `displayName` zu dekodieren, die möglicherweise durch den [anonymen JavaScript-Funktionsbenennungskonvention](https://johnjbarton.github.io/nonymous/index.html) Algorithmus generiert wurden. Die folgenden Muster werden erkannt:

- Wenn `displayName` mit einer Folge von alphanumerischen Zeichen, `_` und `$` endet, wird das längste solcher Suffixe angezeigt.
- Wenn `displayName` mit einer Folge von in `[]` eingeschlossenen Zeichen endet, wird diese Folge ohne die eckigen Klammern angezeigt.
- Wenn `displayName` mit einer Folge von alphanumerischen Zeichen und `_` gefolgt von `/`, `.` oder `<` endet, wird die Folge ohne die abschließenden `/`, `.` oder `<`-Zeichen zurückgegeben.
- Wenn `displayName` mit einer Folge von alphanumerischen Zeichen und `_` gefolgt von `(^)` endet, wird die Folge ohne `(^)` angezeigt.

Wenn keines der oben genannten Muster übereinstimmt, wird das gesamte `displayName` angezeigt.

## Beispiele

### Festlegen eines displayName

Durch Eingabe des folgenden in einer Firefox-Konsole sollte etwas wie `function MyFunction()` angezeigt werden:

```js
function a() {}
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

### Bereinigung von displayName

Firefox DevTools würden einige gebräuchliche Muster in der `displayName`-Eigenschaft bereinigen, bevor sie angezeigt wird.

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
