---
title: "ReferenceError: super() zweimal im abgeleiteten Klassenkonstruktor aufgerufen"
slug: Web/JavaScript/Reference/Errors/Super_called_twice
l10n:
  sourceCommit: b736420a8955d6e1ff513735944b3da6b92cf525
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "super() zweimal im abgeleiteten Klassenkonstruktor aufgerufen" tritt auf, wenn das {{jsxref("Operators/super", "super()")}} ein zweites Mal für einen bestimmten abgeleiteten Klassenkonstruktor aufgerufen wird.

## Meldung

```plain
ReferenceError: Super constructor may only be called once (V8-based)
ReferenceError: super() called twice in derived class constructor (Firefox)
ReferenceError: 'super()' can't be called more than once in a constructor. (Safari)
```

## Fehlerart

{{jsxref("ReferenceError")}}

## Was ist schiefgelaufen?

Der `super()`-Aufruf kann höchstens einmal für jeden `new`-Aufruf eines abgeleiteten Klassenkonstruktors aufgerufen werden. Das liegt daran, dass `super()` für die Initialisierung der Elternklasse verantwortlich ist und ein mehrfaches Aufrufen dazu führen würde, dass der Elternkonstruktor mehrfach aufgerufen wird.

Die beste Möglichkeit, dies zu verhindern, besteht darin, sicherzustellen, dass `super()` außerhalb jeder Steuerflussstruktur platziert wird. Andernfalls stellen Sie sicher, dass alle Codepfade im Konstruktor nur zu einem `super()`-Aufruf führen.

Der `super()`-Aufruf kann in einer Pfeilfunktion innerhalb des Konstruktors "gespeichert" werden. Wenn Sie dann die Pfeilfunktion aufrufen, werden Sie auch `super()` aufrufen, und die gleiche Regel gilt: Die Pfeilfunktion darf höchstens einmal aufgerufen werden.

## Beispiele

### Ungültige Fälle

```js example-bad
class Base {}

class Derived extends Base {
  constructor() {
    super();
    super();
  }
}
```

Manchmal kann der Fehler subtiler sein.

```js example-bad
class Base {
  constructor(flavor) {
    // Do something with the flavor
  }
}

class Derived extends Base {
  constructor(flavors) {
    if (flavors.includes("chocolate")) {
      super("chocolate");
    }
    if (flavors.includes("vanilla")) {
      super("vanilla");
    }
  }
}
```

Ursprünglich könnte `flavors` niemals gleichzeitig sowohl "chocolate" als auch "vanilla" umfassen, aber wenn das jemals passiert, wird der Konstruktor `super()` zweimal aufrufen. Sie müssen überdenken, wie Ihre Klasse strukturiert sein sollte, um dieses Problem zu vermeiden.

### Gültige Fälle

```js example-good
class Base {}

class Derived extends Base {
  constructor() {
    super();
    // Weitere Initialisierungslogik
  }
}
```

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super")}}
