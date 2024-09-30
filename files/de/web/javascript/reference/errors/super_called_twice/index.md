---
title: "ReferenceError: super() zweimal im abgeleiteten Klassenkonstruktor aufgerufen"
slug: Web/JavaScript/Reference/Errors/Super_called_twice
l10n:
  sourceCommit: b736420a8955d6e1ff513735944b3da6b92cf525
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "super() called twice in derived class constructor" tritt auf, wenn {{jsxref("Operators/super", "super()")}} ein zweites Mal in einem abgeleiteten Klassenkonstruktor aufgerufen wird.

## Nachricht

```plain
ReferenceError: Super constructor may only be called once (V8-based)
ReferenceError: super() called twice in derived class constructor (Firefox)
ReferenceError: 'super()' can't be called more than once in a constructor. (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}

## Was ist schiefgelaufen?

Der `super()`-Aufruf kann höchstens einmal für jeden `new`-Aufruf in einem abgeleiteten Klassenkonstruktor erfolgen. Dies liegt daran, dass `super()` für die Initialisierung der übergeordneten Klasse verantwortlich ist, und ein mehrfacher Aufruf dazu führen würde, dass der übergeordnete Konstruktor mehrfach aufgerufen wird.

Der beste Weg, dies zu verhindern, besteht darin, sicherzustellen, dass sich `super()` außerhalb von Kontrollstrukturen befindet. Andernfalls sollten Sie sicherstellen, dass alle Codepfade im Konstruktor nur zu einem einzigen `super()`-Aufruf führen.

Der `super()`-Aufruf kann in einer innerhalb des Konstruktors geschachtelten Pfeilfunktion "gespeichert" werden. Wenn Sie dann die Pfeilfunktion aufrufen, wird auch `super()` aufgerufen, und die gleiche Regel gilt: die Pfeilfunktion darf höchstens einmal aufgerufen werden.

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

Ursprünglich könnte es sein, dass `flavors` niemals gleichzeitig sowohl "chocolate" als auch "vanilla" enthält, aber wenn dies jemals der Fall ist, wird der Konstruktor `super()` zweimal aufrufen. Sie müssen darüber nachdenken, wie Ihre Klasse strukturiert sein sollte, um dieses Problem zu vermeiden.

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
