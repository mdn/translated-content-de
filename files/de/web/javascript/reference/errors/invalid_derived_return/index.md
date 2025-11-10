---
title: "TypeError: abgeleiteter Klassenkonstruktor hat ungültigen Wert x zurückgegeben"
slug: Web/JavaScript/Reference/Errors/Invalid_derived_return
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "derived class constructor returned invalid value x" tritt auf, wenn ein abgeleiteter Klassenkonstruktor einen Wert zurückgibt, der weder ein Objekt noch `undefined` ist.

## Meldung

```plain
TypeError: Derived constructors may only return object or undefined (V8-based)
TypeError: derived class constructor returned invalid value 1 (Firefox)
TypeError: Cannot return a non-object type in the constructor of a derived class. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Normalerweise muss ein Konstruktor nichts zurückgeben—der Wert von `this` wird automatisch zurückgegeben, wenn die Klasse erstellt wird. Ein Konstruktor kann auch ein Objekt zurückgeben, und dieses Objekt überschreibt `this` als die neu erstellte Instanz. Wenn jedoch etwas zurückgegeben wird, das weder ein Objekt noch `undefined` ist, ist dies normalerweise ein Fehler, da dieser Wert ignoriert wird. In Basisklassen und Funktionskonstruktoren (unter Verwendung der `function`-Syntax) wird das Zurückgeben eines solchen Wertes stillschweigend ignoriert, während in abgeleiteten Klassen ein Fehler ausgelöst wird.

## Beispiele

### Ungültige Fälle

```js example-bad
class Base {
  constructor() {}
}

class Derived extends Base {
  constructor() {
    return 2;
  }
}

new Derived(); // TypeError: derived class constructor returned invalid value 2
```

### Gültige Fälle

```js example-good
class Base {
  constructor() {}
}

class Derived extends Base {
  constructor() {
    return { x: 1 };
  }
}

new Derived(); // { x: 1 }
```

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Classes/extends", "extends")}}
- {{jsxref("Operators/new", "new")}}
