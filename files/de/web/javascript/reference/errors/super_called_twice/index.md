---
title: "ReferenceError: super() zweimal im Konstruktor der abgeleiteten Klasse aufgerufen"
slug: Web/JavaScript/Reference/Errors/Super_called_twice
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "super() zweimal im Konstruktor der abgeleiteten Klasse aufgerufen" tritt auf, wenn `{{jsxref("Operators/super", "super()")}}` ein zweites Mal für einen gegebenen Konstruktor einer abgeleiteten Klasse aufgerufen wird.

## Meldung

```plain
ReferenceError: Super constructor may only be called once (V8-based)
ReferenceError: super() called twice in derived class constructor (Firefox)
ReferenceError: 'super()' can't be called more than once in a constructor. (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}

## Was ging schief?

Der Aufruf von `super()` kann höchstens einmal für jeden `new`-Aufruf eines Konstruktors einer abgeleiteten Klasse erfolgen. Dies liegt daran, dass `super()` für die Initialisierung der Elternklasse verantwortlich ist und ein mehrfacher Aufruf dazu führen würde, dass der Konstruktor der Elternklasse mehrmals aufgerufen wird.

Der beste Weg, dies zu verhindern, besteht darin, sicherzustellen, dass `super()` außerhalb jeder Kontrollstruktur platziert wird. Andernfalls sollten Sie sicherstellen, dass alle Codepfade im Konstruktor nur zu einem `super()`-Aufruf führen.

Der `super()`-Aufruf kann in einer verschachtelten Arrow-Funktion im Konstruktor "gespeichert" werden. Wenn Sie dann die Arrow-Funktion aufrufen, wird auch `super()` aufgerufen, und es gilt die gleiche Regel: Die Arrow-Funktion kann höchstens einmal aufgerufen werden.

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

Ursprünglich könnten `flavors` möglicherweise nie gleichzeitig "chocolate" und "vanilla" enthalten, aber falls dies jemals der Fall ist, wird der Konstruktor `super()` zweimal aufrufen. Sie müssen überdenken, wie Ihre Klasse strukturiert sein sollte, um dieses Problem zu vermeiden.

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
