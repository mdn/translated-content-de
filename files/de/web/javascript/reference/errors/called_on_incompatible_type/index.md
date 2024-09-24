---
title: "TypeError: X.prototype.y auf inkompatiblen Typ angewendet"
slug: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "called on incompatible target (or object)" tritt auf, wenn eine Funktion (für ein bestimmtes Objekt) mit einem `this` aufgerufen wird, das nicht dem von der Funktion erwarteten Typ entspricht.

## Nachricht

```plain
TypeError: Method Set.prototype.add called on incompatible receiver undefined (V8-based)
TypeError: Bind must be called on a function (V8-based)
TypeError: Function.prototype.toString called on incompatible object (Firefox)
TypeError: Function.prototype.bind called on incompatible target (Firefox)
TypeError: Type error (Safari)
TypeError: undefined is not an object (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Wenn dieser Fehler angezeigt wird, wird eine Funktion (für ein bestimmtes Objekt) mit einem `this` aufgerufen, das nicht dem von der Funktion erwarteten Typ entspricht.

Dieses Problem kann auftreten, wenn die Methoden {{jsxref("Function.prototype.call()")}} oder {{jsxref("Function.prototype.apply()")}} verwendet werden und ein `this`-Argument angegeben wird, das nicht den erwarteten Typ hat.

Dieses Problem kann auch auftreten, wenn eine Funktion, die als Eigenschaft eines Objekts gespeichert ist, als Argument an eine andere Funktion übergeben wird. In diesem Fall wird das Objekt, das die Funktion speichert, nicht das `this`-Ziel dieser Funktion, wenn sie von der anderen Funktion aufgerufen wird. Um dieses Problem zu umgehen, müssen Sie entweder ein Lambda verwenden, das den Aufruf macht, oder die {{jsxref("Function.prototype.bind()")}}-Funktion nutzen, um das `this`-Argument auf das erwartete Objekt zu erzwingen.

## Beispiele

### Ungültige Fälle

```js example-bad
const mySet = new Set();
["bar", "baz"].forEach(mySet.add);
// mySet.add ist eine Funktion, aber "mySet" ist nicht als this eingebunden.

const myFun = function () {
  console.log(this);
};
["bar", "baz"].forEach(myFun.bind);
// myFun.bind ist eine Funktion, aber "myFun" ist nicht als this eingebunden.
```

### Gültige Fälle

```js example-good
const mySet = new Set();
["bar", "baz"].forEach(mySet.add.bind(mySet));
// Dies funktioniert, da "mySet" als this eingebunden wird.

const myFun = function () {
  console.log(this);
};
["bar", "baz"].forEach((x) => myFun.bind(x));
// Dies funktioniert mit der "bind"-Funktion. Es wird ein Lambda erstellt, das das Argument weitergibt.
```

## Siehe auch

- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.bind()")}}
