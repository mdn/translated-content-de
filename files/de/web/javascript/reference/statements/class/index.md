---
title: class
slug: Web/JavaScript/Reference/Statements/class
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`class`**-Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen [Klasse](/de/docs/Web/JavaScript/Reference/Classes) mit einem gegebenen Namen.

Sie können Klassen auch mithilfe des [`class` Ausdrucks](/de/docs/Web/JavaScript/Reference/Operators/class) definieren.

{{InteractiveExample("JavaScript Demo: class declaration")}}

```js interactive-example
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4, 3).area);
// Expected output: 12
```

## Syntax

```js-nolint
class name {
  // class body
}
class name extends otherName {
  // class body
}
```

## Beschreibung

Der Klassenkörper einer Klassendeklaration wird im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt. Die `class`-Deklaration ist sehr ähnlich zu {{jsxref("Statements/let", "let")}},

- `class`-Deklarationen sind auf Blöcke sowie Funktionen beschränkt.
- `class`-Deklarationen können nur nach ihrem Deklarationsort erreicht werden (siehe [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `class`-Deklarationen allgemein als {{Glossary("Hoisting", "nicht gehoben")}} angesehen (im Gegensatz zu [Funktiondeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)).
- `class`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts deklariert werden (im Gegensatz zu [Funktiondeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)).
- `class`-Deklarationen können nicht durch eine andere Deklaration im selben Gültigkeitsbereich [erneut deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.

Außerhalb des Klassenkörpers können `class`-Deklarationen wie `let` neu zugewiesen werden, aber Sie sollten dies vermeiden. Innerhalb des Klassenkörpers ist die Bindung wie `const` konstant.

```js
class Foo {
  static {
    Foo = 1; // TypeError: Assignment to constant variable.
  }
}

class Foo2 {
  bar = (Foo2 = 1); // TypeError: Assignment to constant variable.
}

class Foo3 {}
Foo3 = 1;
console.log(Foo3); // 1
```

## Beispiele

### Eine Klassendeklaration

Im folgenden Beispiel definieren wir zuerst eine Klasse namens `Rectangle` und erweitern sie dann, um eine Klasse namens `FilledRectangle` zu erstellen.

Beachten Sie, dass `super()`, wie im `constructor` verwendet, nur in Konstruktoren verwendet werden kann und _muss_ aufgerufen werden, _bevor_ das Schlüsselwort `this` verwendet werden kann.

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
}

class FilledRectangle extends Rectangle {
  constructor(height, width, color) {
    super(height, width);
    this.name = "Filled rectangle";
    this.color = color;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`class` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
