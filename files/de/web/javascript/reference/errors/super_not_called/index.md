---
title: "ReferenceError: 'super'-Konstruktor muss vor der Verwendung von 'this' im Konstruktor der abgeleiteten Klasse aufgerufen werden"
slug: Web/JavaScript/Reference/Errors/Super_not_called
l10n:
  sourceCommit: b736420a8955d6e1ff513735944b3da6b92cf525
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "must call super constructor before using 'this' in derived class constructor" tritt auf, wenn `super()` in einem abgeleiteten Klassenkonstruktor nicht aufgerufen wird und der abgeleitete Konstruktor versucht, auf den Wert von `this` zuzugreifen, oder der abgeleitete Konstruktor bereits zurückgegeben hat und der Rückgabewert kein Objekt ist.

## Meldung

```plain
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor (V8-based)
ReferenceError: must call super constructor before using 'this' in derived class constructor (Firefox)
ReferenceError: 'super()' must be called in derived constructor before accessing |this| or returning non-object. (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}

## Was ist schief gelaufen?

Der `super()`-Aufruf kann höchstens einmal für jeden `new`-Aufruf eines abgeleiteten Klassenkonstruktors durchgeführt werden. Oft müssen Sie ihn genau einmal aufrufen, da, wenn Sie ihn nicht aufrufen, der übergeordnete Konstruktor den Wert von `this` nicht initialisieren kann, sodass Sie `this` im abgeleiteten Konstruktor nicht verwenden können und `this` nicht als gültig konstruiertes Objekt betrachtet wird (und einen Fehler wirft, wenn der abgeleitete Konstruktor in diesem Zustand abgeschlossen wird). Der Weg darum herum ist, ein Objekt aus dem abgeleiteten Klassenkonstruktor zurückzugeben, in welchem Fall das zurückgegebene Objekt als konstruiertes Objekt anstelle von `this` verwendet wird, sodass `super()` nicht aufgerufen werden muss. Dies wird jedoch selten gemacht.

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
