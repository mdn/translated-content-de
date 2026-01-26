---
title: "SyntaxError: use of super property/member accesses only valid within methods or eval code within methods"
slug: Web/JavaScript/Reference/Errors/Bad_super_prop
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "Verwendung von Super-Eigenschafts-/Mitgliedszugriffen nur in Methoden oder eval-Code innerhalb von Methoden zulässig" tritt auf, wenn die Syntax {{jsxref("Operators/super", "super.x")}} oder `super[x]` außerhalb einer [Methode](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) verwendet wird.

## Meldung

```plain
SyntaxError: 'super' keyword unexpected here (V8-based)
SyntaxError: use of super property accesses only valid within methods or eval code within methods (Firefox)
SyntaxError: super is not valid in this context. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die Syntax `super.x` wird verwendet, um auf Eigenschaften im Prototyp des aktuellen Objekts zuzugreifen. Sie kann in Methoden sowohl von [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) als auch von [Klassen](/de/docs/Web/JavaScript/Reference/Classes), [Feldinitialisierern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) und [statischen Initialisierungsblöcken](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) verwendet werden, aber nicht in anderen Kontexten.

## Beispiele

### Ungültige Fälle

Sie können `super.x` nicht außerhalb einer Methode in einem Objekt verwenden:

```js example-bad
const obj = {
  __proto__: { x: 1 },
  x: super.x, // SyntaxError: use of super property accesses only valid within methods or eval code within methods
};
```

Sie können `super.x` nicht in einer Funktion verwenden, selbst wenn diese Funktion die Wirkung hat, eine Methode zu sein:

```js example-bad
function getX() {
  return super.x; // SyntaxError: use of super property accesses only valid within methods or eval code within methods
}

const obj = {
  getX,
  getX2: function () {
    return super.x; // SyntaxError: use of super property accesses only valid within methods or eval code within methods
  },
};

class Derived extends Base {
  getX = () => super.x;
}
```

### Gültige Fälle

Sie können `super.x` in einer Methode verwenden:

```js example-good
class Base {
  x = 1;
}

class Derived extends Base {
  getX() {
    return super.x;
  }
}
```

Sie können `super.x` in einem Feldinitialisierer verwenden:

```js example-good
class Derived extends Base {
  x = super.x;
}
```

Sie können `super.x` auch in Objektmethoden verwenden:

```js example-good
const obj = {
  __proto__: { x: 1 },
  getX() {
    return super.x;
  },
};
```

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Operators/super", "super")}}
