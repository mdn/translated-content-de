---
title: class
slug: Web/JavaScript/Reference/Statements/class
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("Statements")}}

Die **`class`**-Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen [Klasse](/de/docs/Web/JavaScript/Reference/Classes) zu einem gegebenen Namen.

Sie können Klassen auch mit dem [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) definieren.

{{EmbedInteractiveExample("pages/js/statement-class.html")}}

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

Der Klassenrumpf einer Klassendeklaration wird im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt. Die `class`-Deklaration ist sehr ähnlich der {{jsxref("Statements/let", "let")}}-Deklaration:

- `class`-Deklarationen sind sowohl auf Blöcke als auch auf Funktionen beschränkt.
- `class`-Deklarationen können nur nach Erreichen des Deklarationsortes zugegriffen werden (siehe [temporäre Totzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund gelten `class`-Deklarationen allgemein als {{Glossary("Hoisting", "nicht-hoistisch")}} (im Gegensatz zu [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)).
- `class`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts deklariert werden (im Gegensatz zu [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)).
- `class`-Deklarationen können nicht durch eine andere Deklaration im selben Gültigkeitsbereich [erneut deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.

Außerhalb des Klassenkörpers können `class`-Deklarationen wie `let` neu zugewiesen werden, aber dies sollte vermieden werden. Innerhalb des Klassenkörpers ist die Bindung konstant wie `const`.

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

Im folgenden Beispiel definieren wir zunächst eine Klasse namens `Rectangle` und erweitern sie dann, um eine Klasse namens `FilledRectangle` zu erstellen.

Beachten Sie, dass `super()`, das im `constructor` verwendet wird, nur in Konstruktoren verwendet werden kann und _muss_ aufgerufen werden, _bevor_ das Schlüsselwort `this` verwendet werden kann.

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
