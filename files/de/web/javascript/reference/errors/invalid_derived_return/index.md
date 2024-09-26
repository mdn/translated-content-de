---
title: "TypeError: Abgeleiteter Klassenkonstruktor gab einen ungültigen Wert x zurück"
slug: Web/JavaScript/Reference/Errors/Invalid_derived_return
l10n:
  sourceCommit: b736420a8955d6e1ff513735944b3da6b92cf525
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "abgeleiteter Klassenkonstruktor gab einen ungültigen Wert x zurück" tritt auf, wenn ein abgeleiteter Klassenkonstruktor einen Wert zurückgibt, der weder ein Objekt noch `undefined` ist.

## Meldung

```plain
TypeError: Derived constructors may only return object or undefined (V8-based)
TypeError: derived class constructor returned invalid value 1 (Firefox)
TypeError: Cannot return a non-object type in the constructor of a derived class. (Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Typischerweise muss ein Konstruktor nichts zurückgeben — der Wert von `this` wird automatisch zurückgegeben, wenn die Klasse konstruiert wird. Ein Konstruktor kann auch ein Objekt zurückgeben, und dieses Objekt ersetzt `this` als die neu konstruierte Instanz. Das Zurückgeben von etwas, das weder ein Objekt noch `undefined` ist, ist normalerweise ein Fehler, da dieser Wert ignoriert wird. In Basisklassen und Funktionskonstruktoren (unter Verwendung der `function`-Syntax) wird die Rückgabe eines solchen Wertes stillschweigend ignoriert, während in abgeleiteten Klassen ein Fehler ausgelöst wird.

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