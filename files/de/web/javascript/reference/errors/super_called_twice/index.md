---
title: "ReferenceError: super() zweimal im abgeleiteten Klassenkonstruktor aufgerufen"
slug: Web/JavaScript/Reference/Errors/Super_called_twice
l10n:
  sourceCommit: b736420a8955d6e1ff513735944b3da6b92cf525
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "super() called twice in derived class constructor" tritt auf, wenn `super()` in einem abgeleiteten Klassenkonstruktor ein zweites Mal aufgerufen wird.

## Nachricht

```plain
ReferenceError: Super constructor may only be called once (V8-based)
ReferenceError: super() called twice in derived class constructor (Firefox)
ReferenceError: 'super()' can't be called more than once in a constructor. (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}

## Was ist schiefgelaufen?

Der `super()`-Aufruf kann höchstens einmal für jeden `new`-Aufruf eines abgeleiteten Klassenkonstruktors aufgerufen werden. Dies liegt daran, dass `super()` für die Initialisierung der übergeordneten Klasse verantwortlich ist, und mehrfache Aufrufe dazu führen würden, dass der Elternkonstruktor mehrfach aufgerufen wird.

Der beste Weg, dies zu verhindern, besteht darin, sicherzustellen, dass `super()` außerhalb jeder Kontrollflussstruktur platziert wird. Andernfalls stellen Sie sicher, dass alle Codepfade im Konstruktor nur zu einem `super()`-Aufruf führen.

Der `super()`-Aufruf kann in einer im Konstruktor verschachtelten Pfeilfunktion "gespeichert" werden. Wenn Sie dann die Pfeilfunktion aufrufen, rufen Sie auch `super()` auf, und dieselbe Regel gilt: Die Pfeilfunktion darf höchstens einmal aufgerufen werden.

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

Ursprünglich darf `flavors` möglicherweise nie gleichzeitig sowohl "chocolate" als auch "vanilla" enthalten, aber wenn das jemals passiert, wird der Konstruktor `super()` zweimal aufrufen. Sie müssen darüber nachdenken, wie Ihre Klasse strukturiert sein sollte, um dieses Problem zu vermeiden.

### Gültige Fälle

```js example-good
class Base {}

class Derived extends Base {
  constructor() {
    super();
    // More initialization logic
  }
}
```

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super")}}
