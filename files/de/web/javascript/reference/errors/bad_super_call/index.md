---
title: "SyntaxError: super() ist nur in Konstruktoren abgeleiteter Klassen gültig"
slug: Web/JavaScript/Reference/Errors/Bad_super_call
l10n:
  sourceCommit: b736420a8955d6e1ff513735944b3da6b92cf525
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme „super() ist nur in Konstruktoren abgeleiteter Klassen gültig“ tritt auf, wenn der Aufruf von {{jsxref("Operators/super", "super()")}} an einer Stelle erfolgt, die nicht der Rumpf eines [Konstruktors](/de/docs/Web/JavaScript/Reference/Classes/constructor) in einer Klasse mit dem Schlüsselwort [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) ist.

## Nachricht

```plain
SyntaxError: 'super' keyword unexpected here (V8-based)
SyntaxError: super() is only valid in derived class constructors (Firefox)
SyntaxError: super is not valid in this context. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was schiefgelaufen ist

Der Aufruf `super()` wird verwendet, um den Basiskonstruktor einer abgeleiteten Klasse aufzurufen, damit die Basisklasse das {{jsxref("Operators/this", "this")}} Objekt initialisieren kann. Die Verwendung an anderer Stelle ist nicht sinnvoll.

`super()` kann auch in einer Arrow-Funktion definiert werden, die innerhalb des Konstruktors verschachtelt ist. Es kann jedoch in keiner anderen Art von Funktion definiert werden.

## Beispiele

### Ungültige Fälle

Sie können `super()` nicht aufrufen, wenn die Klasse kein `extends` hat, da es keine Basisklasse zum Aufrufen gibt:

```js example-bad
class Base {
  constructor() {
    super();
  }
}
```

Sie können `super()` nicht in einer Klassenmethode aufrufen, selbst wenn diese Methode aus dem Konstruktor aufgerufen wird:

```js example-ba
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

Sie können `super()` aufrufen, bevor Sie eine andere Methode im Konstruktor aufrufen:

```js example-good
class Base {}

class Derived extends Base {
  constructor() {
    super();
    this.init();
  }

  init() {
    // ...
  }
}
```

Sie können `super()` in einer Arrow-Funktion aufrufen, die innerhalb des Konstruktors verschachtelt ist:

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
