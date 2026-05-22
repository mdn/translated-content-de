---
title: "SyntaxError: super() is only valid in derived class constructors"
slug: Web/JavaScript/Reference/Errors/Bad_super_call
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Der JavaScript-Ausnahmefehler "super() ist nur in abgeleiteten Klassenkonstruktoren gültig" tritt auf, wenn der {{jsxref("Operators/super", "super()")}}-Aufruf an einem Ort verwendet wird, der nicht der Körper eines [Konstruktors](/de/docs/Web/JavaScript/Reference/Classes/constructor) in einer Klasse mit dem [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)-Schlüsselwort ist.

## Meldung

```plain
SyntaxError: 'super' keyword unexpected here (V8-based)
SyntaxError: super() is only valid in derived class constructors (Firefox)
SyntaxError: super is not valid in this context. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was schiefgelaufen ist

Der `super()`-Aufruf wird verwendet, um den Basiskonstruktor einer abgeleiteten Klasse aufzurufen, damit die Basisklasse das {{jsxref("this")}}-Objekt initialisieren kann. Die Verwendung an einem anderen Ort ergibt keinen Sinn.

`super()` kann auch in einer Arrow-Funktion definiert werden, die innerhalb des Konstruktors geschachtelt ist. Es kann jedoch in keiner anderen Art von Funktion definiert werden.

## Beispiele

### Ungültige Fälle

Sie können `super()` nicht aufrufen, wenn die Klasse kein `extends` hat, da keine Basisklasse vorhanden ist, die aufgerufen werden könnte:

```js example-bad
class Base {
  constructor() {
    super();
  }
}
```

Sie können `super()` nicht in einer Klassenmethode aufrufen, selbst wenn diese Methode vom Konstruktor aufgerufen wird:

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
    // …
  }
}
```

Sie können `super()` in einer Arrow-Funktion aufrufen, die innerhalb des Konstruktors geschachtelt ist:

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
