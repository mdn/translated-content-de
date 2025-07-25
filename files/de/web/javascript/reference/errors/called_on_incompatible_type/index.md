---
title: "TypeError: X.prototype.y wurde auf einem inkompatiblen Typ aufgerufen"
slug: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "called on incompatible target (or object)" tritt auf, wenn eine Funktion (auf einem gegebenen Objekt) mit einem `this` aufgerufen wird, das nicht dem von der Funktion erwarteten Typ entspricht.

## Nachricht

```plain
TypeError: Method Set.prototype.add called on incompatible receiver undefined (V8-based)
TypeError: Bind must be called on a function (V8-based)
TypeError: Illegal invocation (V8-based)
TypeError: Function.prototype.toString requires that 'this' be a Function (V8-based)
TypeError: this is not a Date object. (V8-based)
TypeError: this is not a typed array. (V8-based)
TypeError: Function.prototype.toString called on incompatible object (Firefox)
TypeError: Function.prototype.bind called on incompatible target (Firefox)
TypeError: 'addEventListener' called on an object that does not implement interface EventTarget. (Firefox)
TypeError: Type error (Safari)
TypeError: undefined is not an object (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Wenn dieser Fehler ausgelöst wird, wird eine Funktion (auf einem gegebenen Objekt) mit einem `this` aufgerufen, das nicht dem von der Funktion erwarteten Typ entspricht.

Dieses Problem kann auftreten, wenn die Methoden {{jsxref("Function.prototype.call()")}} oder {{jsxref("Function.prototype.apply()")}} verwendet werden und ein `this`-Argument angegeben wird, das nicht den erwarteten Typ hat.

Dieses Problem kann auch auftreten, wenn eine Funktion, die als Eigenschaft eines Objekts gespeichert ist, als Argument an eine andere Funktion übergeben wird. In diesem Fall wird das Objekt, das die Funktion speichert, nicht das `this`-Ziel dieser Funktion sein, wenn sie von der anderen Funktion aufgerufen wird. Um dieses Problem zu umgehen, müssen Sie entweder die Rückruffunktion in eine andere Funktion einbetten oder die Methode {{jsxref("Function.prototype.bind()")}} verwenden, um das `this`-Argument auf das erwartete Objekt zu erzwingen.

## Beispiele

### Ungültige Fälle

```js example-bad
const mySet = new Set();
["bar", "baz"].forEach(mySet.add);
// mySet.add is a function, but "mySet" is not captured as this.

function myFun() {
  console.log(this);
}
["bar", "baz"].forEach(myFun.bind);
// myFun.bind is a function, but "myFun" is not captured as this.
```

### Gültige Fälle

```js example-good
const mySet = new Set();
["bar", "baz"].forEach(mySet.add.bind(mySet));
// This works due to binding "mySet" as this.

function myFun() {
  console.log(this);
}
["bar", "baz"].forEach((x) => myFun.bind(x));
// This works using the "bind" function. It creates a new function forwarding the argument.
```

## Siehe auch

- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.bind()")}}
