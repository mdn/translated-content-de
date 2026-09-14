---
title: "SyntaxError: super() is only valid in derived class constructors"
slug: Web/JavaScript/Reference/Errors/Bad_super_call
l10n:
  sourceCommit: 6ae859198e8fd29bfbcd1cb5f87e8b8d15946dee
---

Die JavaScript-Exception „super() ist nur in Konstruktoren abgeleiteter Klassen gültig“ tritt auf, wenn der Aufruf {{jsxref("Operators/super", "super()")}} an einer Stelle verwendet wird, die nicht der Rumpf eines [Konstruktors](/de/docs/Web/JavaScript/Reference/Classes/constructor) in einer Klasse mit dem Schlüsselwort [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) ist.

## Meldung

```plain
SyntaxError: 'super' keyword unexpected here (V8-based)
SyntaxError: super() is only valid in derived class constructors (Firefox)
SyntaxError: super is not valid in this context. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Der Aufruf `super()` wird verwendet, um den Basiskonstruktor einer abgeleiteten Klasse aufzurufen, damit die Basisklasse das {{jsxref("this")}}-Objekt initialisieren kann. Ihn an einer anderen Stelle zu verwenden, ergibt keinen Sinn.

`super()` kann auch in einer Pfeilfunktion definiert werden, die innerhalb des Konstruktors verschachtelt ist. Es kann jedoch nicht in einer anderen Art von Funktion definiert werden.

## Beispiele

### Ungültige Fälle

Sie können `super()` nicht aufrufen, wenn die Klasse kein `extends` hat, da keine Basisklasse zum Aufrufen vorhanden ist:

```js example-bad
class Base {
  constructor() {
    super();
  }
}
```

Sie können `super()` nicht in einer Klassenmethode aufrufen, selbst wenn diese Methode vom Konstruktor aus aufgerufen wird:

```js example-bad
class Base {}

class Derived extends Base {
  constructor() {
    this.init();
  }

  init() {
    super();
  }
}
```

Sie können `super()` nicht in einer Funktion aufrufen, selbst wenn die Funktion als Konstruktor verwendet wird:

```js example-bad
function Base(x) {
  this.x = x;
}

function Derived() {
  super(1);
}

Object.setPrototypeOf(Derived.prototype, Base.prototype);
Object.setPrototypeOf(Derived, Base);
```

### Gültige Fälle

Sie können `super()` aufrufen, bevor Sie im Konstruktor eine andere Methode aufrufen:

```js example-good
class Base {}

class Derived extends Base {
  constructor() {
    super();
    this.init();
  }

  init() {
    // …
  }
}
```

Sie können `super()` in einer Pfeilfunktion aufrufen, die innerhalb des Konstruktors verschachtelt ist:

```js example-good
class Base {}

class Derived extends Base {
  constructor() {
    const init = () => {
      super();
    };

    init();
  }
}
```

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super")}}
