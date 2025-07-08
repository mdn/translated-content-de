---
title: "SyntaxError: super() ist nur in abgeleiteten Klassenkonstruktoren gültig"
slug: Web/JavaScript/Reference/Errors/Bad_super_call
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "super() is only valid in derived class constructors" tritt auf, wenn der Aufruf {{jsxref("Operators/super", "super()")}} an einer Stelle verwendet wird, die nicht im Körper eines [Konstruktors](/de/docs/Web/JavaScript/Reference/Classes/constructor) in einer Klasse mit dem Schlüsselwort [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) ist.

## Nachricht

```plain
SyntaxError: 'super' keyword unexpected here (V8-based)
SyntaxError: super() is only valid in derived class constructors (Firefox)
SyntaxError: super is not valid in this context. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was schiefgelaufen ist

Der Aufruf `super()` wird verwendet, um den Basiskonstruktor einer abgeleiteten Klasse aufzurufen, damit die Basisklasse das {{jsxref("Operators/this", "this")}}-Objekt initialisieren kann. Die Verwendung an anderer Stelle ergibt keinen Sinn.

`super()` kann auch in einer Pfeilfunktion definiert werden, die im Konstruktor verschachtelt ist. Es kann jedoch in keiner anderen Art von Funktion definiert werden.

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

Sie können `super()` nicht in einer Klassenmethode aufrufen, selbst wenn diese Methode vom Konstruktor aus aufgerufen wird:

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

Sie können `super()` im Konstruktor aufrufen, bevor Sie eine andere Methode aufrufen:

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

Sie können `super()` in einer Pfeilfunktion aufrufen, die im Konstruktor verschachtelt ist:

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
