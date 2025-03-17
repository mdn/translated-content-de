---
title: "ReferenceError: muss 'super' Konstruktor vor Verwendung von 'this' im Konstruktor der abgeleiteten Klasse aufrufen"
slug: Web/JavaScript/Reference/Errors/Super_not_called
l10n:
  sourceCommit: b736420a8955d6e1ff513735944b3da6b92cf525
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "must call super constructor before using 'this' in derived class constructor" tritt auf, wenn die {{jsxref("Operators/super", "super()")}} im Konstruktor einer abgeleiteten Klasse nicht aufgerufen wird und der abgeleitete Konstruktor versucht, auf den Wert von {{jsxref("Operators/this", "this")}} zuzugreifen, oder wenn der abgeleitete Konstruktor bereits einen Wert zurückgegeben hat, der kein Objekt ist.

## Nachricht

```plain
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor (V8-based)
ReferenceError: must call super constructor before using 'this' in derived class constructor (Firefox)
ReferenceError: 'super()' must be called in derived constructor before accessing |this| or returning non-object. (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}

## Was ist schiefgelaufen?

Der `super()`-Aufruf kann höchstens einmal pro `new`-Aufruf eines abgeleiteten Klassenkonstruktors erfolgen. Oft müssen Sie ihn genau einmal aufrufen, denn wenn Sie ihn nicht aufrufen, kann der Elternkonstruktor den Wert von `this` nicht initialisieren, so dass Sie nicht auf `this` im abgeleiteten Konstruktor zugreifen können und `this` nicht als gültiges konstruiertes Objekt betrachtet wird (und einen Fehler auslöst, wenn der abgeleitete Konstruktor in diesem Zustand abgeschlossen wird). Der Ausweg besteht darin, ein Objekt aus dem Konstruktor der abgeleiteten Klasse zurückzugeben; in diesem Fall wird das zurückgegebene Objekt als das konstruierte Objekt anstelle von `this` verwendet, was es Ihnen erlaubt, `super()` nicht aufzurufen. Dies wird jedoch selten gemacht.

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
