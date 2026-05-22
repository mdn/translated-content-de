---
title: "ReferenceError: must call super constructor before using 'this' in derived class constructor"
slug: Web/JavaScript/Reference/Errors/Super_not_called
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Der JavaScript-Ausnahmefehler "Sie müssen den Superkonstruktor aufrufen, bevor 'this' im Konstruktor der abgeleiteten Klasse verwendet wird" tritt auf, wenn `{{jsxref("Operators/super", "super()")}}` nicht für einen gegebenen Konstruktor einer abgeleiteten Klasse aufgerufen wird und der abgeleitete Konstruktor versucht, auf den Wert von `{{jsxref("this")}}` zuzugreifen, oder der abgeleitete Konstruktor bereits zurückgegeben wurde und der Rückgabewert kein Objekt ist.

## Meldung

```plain
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor (V8-based)
ReferenceError: must call super constructor before using 'this' in derived class constructor (Firefox)
ReferenceError: 'super()' must be called in derived constructor before accessing |this| or returning non-object. (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}

## Was ist schief gelaufen?

Der `super()`-Aufruf kann höchstens einmal für jeden `new`-Aufruf eines Konstruktors der abgeleiteten Klasse aufgerufen werden. Oft müssen Sie ihn genau einmal aufrufen, denn wenn Sie ihn nicht aufrufen, kann der Elternkonstruktor den Wert von `this` nicht initialisieren, sodass Sie nicht auf `this` im abgeleiteten Konstruktor zugreifen können und `this` nicht als gültig konstruiertes Objekt betrachtet wird (und einen Fehler auslöst, wenn der abgeleitete Konstruktor in diesem Zustand abgeschlossen wird). Der Ausweg besteht darin, ein Objekt aus dem Konstruktor der abgeleiteten Klasse zurückzugeben, in welchem Fall das zurückgegebene Objekt als konstruiertes Objekt anstelle von `this` verwendet wird, sodass Sie `super()` nicht aufrufen müssen. Dies wird jedoch selten gemacht.

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
