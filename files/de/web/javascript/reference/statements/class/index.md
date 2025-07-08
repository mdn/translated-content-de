---
title: class
slug: Web/JavaScript/Reference/Statements/class
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`class`**-Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen [Klasse](/de/docs/Web/JavaScript/Reference/Classes) an einen gegebenen Namen.

Sie können Klassen auch mit dem [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) definieren.

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

Der Klassenrumpf einer Klassendeklaration wird im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt. Die `class`-Deklaration ist der {{jsxref("Statements/let", "let")}}-Deklaration sehr ähnlich:

- `class`-Deklarationen sind sowohl auf Blöcke als auch auf Funktionen beschränkt.
- `class`-Deklarationen können erst nach Erreichen des Deklarationsorts zugegriffen werden (siehe [temporäre tote Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `class`-Deklarationen allgemein als {{Glossary("Hoisting", "nicht-gehoisted")}} angesehen (im Gegensatz zu [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)).
- `class`-Deklarationen erzeugen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf oberster Ebene eines Skripts deklariert werden (im Gegensatz zu [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)).
- `class`-Deklarationen können nicht durch irgendeine andere Deklaration im selben Bereich [neu deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.

Außerhalb des Klassenkörpers können `class`-Deklarationen wie `let` neu zugewiesen werden, aber Sie sollten dies vermeiden. Innerhalb des Klassenkörpers ist die Bindung konstant wie `const`.

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

Beachten Sie, dass `super()`, das im `Konstruktor` verwendet wird, nur in Konstruktoren verwendet werden kann und _muss_ aufgerufen werden, _bevor_ das Schlüsselwort `this` verwendet werden kann.

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
- [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
