---
title: "SyntaxError: super() ist nur in Konstruktoren der abgeleiteten Klasse gültig"
slug: Web/JavaScript/Reference/Errors/Bad_super_call
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "super() ist nur in Konstruktoren der abgeleiteten Klasse gültig" tritt auf, wenn der Aufruf von {{jsxref("Operators/super", "super()")}} an einer Stelle verwendet wird, die nicht der Körper eines [Konstruktors](/de/docs/Web/JavaScript/Reference/Classes/constructor) in einer Klasse mit dem Stichwort [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) ist.

## Nachricht

```plain
SyntaxError: 'super' keyword unexpected here (V8-based)
SyntaxError: super() is only valid in derived class constructors (Firefox)
SyntaxError: super is not valid in this context. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Der Aufruf von `super()` wird verwendet, um den Basiskonstruktor einer abgeleiteten Klasse aufzurufen, damit die Basisklasse das {{jsxref("Operators/this", "this")}}-Objekt initialisieren kann. Die Verwendung an einer anderen Stelle ist nicht sinnvoll.

`super()` kann auch in einer Pfeilfunktion definiert werden, die innerhalb des Konstruktors geschachtelt ist. Es kann jedoch in keinem anderen Funktionsart definiert werden.

## Beispiele

### Ungültige Fälle

Sie können `super()` nicht aufrufen, wenn die Klasse kein `extends` hat, da es keine Basisklasse gibt, die aufgerufen werden könnte:

```js example-bad
class Base {
  constructor() {
    super();
  }
}
```

Sie können `super()` nicht in einer Klassenmethode aufrufen, auch wenn diese Methode vom Konstruktor aufgerufen wird:

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

Sie können `super()` nicht in einer Funktion aufrufen, auch wenn die Funktion als Konstruktor verwendet wird:

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
    // …
  }
}
```

Sie können `super()` in einer Pfeilfunktion aufrufen, die innerhalb des Konstruktors geschachtelt ist:

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
