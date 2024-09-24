---
title: "ReferenceError: Der Superkonstruktor muss aufgerufen werden, bevor 'this' im Konstruktor einer abgeleiteten Klasse verwendet wird"
slug: Web/JavaScript/Reference/Errors/Super_not_called
l10n:
  sourceCommit: b736420a8955d6e1ff513735944b3da6b92cf525
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Der Superkonstruktor muss aufgerufen werden, bevor 'this' im Konstruktor einer abgeleiteten Klasse verwendet wird" tritt auf, wenn {{jsxref("Operators/super", "super()")}} für einen Konstruktor einer abgeleiteten Klasse nicht aufgerufen wird und der abgeleitete Konstruktor versucht, auf den Wert von {{jsxref("Operators/this", "this")}} zuzugreifen, oder der abgeleitete Konstruktor bereits zurückgegeben wurde und der Rückgabewert kein Objekt ist.

## Nachricht

```plain
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor (V8-based)
ReferenceError: must call super constructor before using 'this' in derived class constructor (Firefox)
ReferenceError: 'super()' must be called in derived constructor before accessing |this| or returning non-object. (Safari)
```

## Fehlerart

{{jsxref("ReferenceError")}}

## Was ist schiefgelaufen?

Der `super()`-Aufruf kann für jeden `new`-Aufruf eines abgeleiteten Klassenkonstruktors höchstens einmal aufgerufen werden. Oft müssen Sie ihn genau einmal aufrufen, da, wenn Sie ihn nicht aufrufen, der Elternkonstruktor den Wert von `this` nicht initialisieren kann. Daher können Sie `this` im abgeleiteten Konstruktor nicht verwenden und `this` wird nicht als gültiges konstruiertes Objekt betrachtet (und wirft einen Fehler, wenn der abgeleitete Konstruktor in diesem Zustand abgeschlossen wird). Der Weg, dies zu umgehen, besteht darin, ein Objekt vom Konstruktor der abgeleiteten Klasse zurückzugeben. In diesem Fall wird das zurückgegebene Objekt als konstruiertes Objekt verwendet, anstatt `this`. Dies wird jedoch selten gemacht.

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
    // Der Basiskonstruktor wurde noch nicht aufgerufen, daher ist this.x undefiniert
    // ReferenceError: Der Superkonstruktor muss aufgerufen werden, bevor 'this' im Konstruktor einer abgeleiteten Klasse verwendet wird
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
