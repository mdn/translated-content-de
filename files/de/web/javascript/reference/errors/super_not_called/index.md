---
title: "ReferenceError: muss Superkonstruktor aufrufen, bevor 'this' im Konstruktor der abgeleiteten Klasse verwendet wird"
slug: Web/JavaScript/Reference/Errors/Super_not_called
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "must call super constructor before using 'this' in derived class constructor" tritt auf, wenn die {{jsxref("Operators/super", "super()")}}-Funktion nicht für einen gegebenen abgeleiteten Klassenkonstruktor aufgerufen wird und der abgeleitete Konstruktor versucht, den Wert von {{jsxref("Operators/this", "this")}} zuzugreifen, oder der abgeleitete Konstruktor bereits einen Rückgabewert hat, der kein Objekt ist.

## Nachricht

```plain
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor (V8-based)
ReferenceError: must call super constructor before using 'this' in derived class constructor (Firefox)
ReferenceError: 'super()' must be called in derived constructor before accessing |this| or returning non-object. (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}

## Was ist schiefgelaufen?

Der `super()`-Aufruf kann höchstens einmal für jeden `new`-Aufruf eines abgeleiteten Klassenkonstruktors aufgerufen werden. Meistens müssen Sie ihn genau einmal aufrufen, denn wenn Sie ihn nicht aufrufen, kann der Basiskonstruktor den Wert von `this` nicht initialisieren, sodass Sie in der abgeleiteten Konstruktorfunktion nicht auf `this` zugreifen können und `this` nicht als gültig konstruiertes Objekt betrachtet wird (und es eine Ausnahme auslöst, wenn der abgeleitete Konstruktor in diesem Zustand abgeschlossen wird). Der Weg, dies zu umgehen, besteht darin, ein Objekt aus dem abgeleiteten Klassenkonstruktor zurückzugeben, in diesem Fall wird das zurückgegebene Objekt als das konstruierte Objekt verwendet anstatt `this`, was es Ihnen ermöglicht, `super()` nicht aufzurufen. Dies wird jedoch selten getan.

## Beispiele

### Ungültige Fälle

```js example-bad
class Base {
  constructor() {
    this.x = 1;
  }
}

class Derived extends Base {
  constructor() {
    console.log(this.x);
    // The Base constructor is not called yet, so this.x is undefined
    // ReferenceError: must call super constructor before using 'this' in derived class constructor
  }
}
```

### Gültige Fälle

```js example-good
class Base {
  constructor() {
    this.x = 1;
  }
}

class Derived extends Base {
  constructor() {
    super();
    console.log(this.x); // 1
  }
}
```

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super")}}
