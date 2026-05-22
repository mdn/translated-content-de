---
title: "TypeError: derived class constructor returned invalid value x"
slug: Web/JavaScript/Reference/Errors/Invalid_derived_return
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
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

Normalerweise muss ein Konstruktor nichts zurückgeben—der Wert von `this` wird automatisch zurückgegeben, wenn die Klasse konstruiert wird. Ein Konstruktor kann auch ein Objekt zurückgeben, und dieses Objekt wird `this` als neu konstruiertes Exemplar überschreiben. Das Zurückgeben eines Wertes, der weder ein Objekt noch `undefined` ist, ist jedoch meist ein Fehler, da dieser Wert ignoriert wird. In Basisklassen und Funktionskonstruktoren (unter Verwendung der `function`-Syntax) wird ein solcher Wert stillschweigend ignoriert, während in abgeleiteten Klassen ein Fehler geworfen wird.

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
- {{jsxref("new")}}
