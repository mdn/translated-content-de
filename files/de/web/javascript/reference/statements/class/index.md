---
title: class
slug: Web/JavaScript/Reference/Statements/class
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Statements")}}

Die **`class`**-Deklaration erstellt eine [Bindung](/de/docs/Glossary/binding) einer neuen [Klasse](/de/docs/Web/JavaScript/Reference/Classes) zu einem gegebenen Namen.

Sie können Klassen auch mit dem [`class` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) definieren.

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

Der Klassenkörper einer `class` Deklaration wird im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt. Die `class`-Deklaration ist sehr ähnlich zu {{jsxref("Statements/let", "let")}}:

- `class` Deklarationen sind sowohl auf Blöcke als auch auf Funktionen beschränkt.
- `class` Deklarationen können erst nach der Stelle des Deklarationsortes aufgerufen werden (siehe [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund werden `class`-Deklarationen allgemein als [nicht-gehoistet](/de/docs/Glossary/Hoisting) angesehen (im Gegensatz zu [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)).
- `class` Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie auf der obersten Ebene eines Skripts deklariert werden (im Gegensatz zu [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)).
- `class` Deklarationen können nicht durch eine andere Deklaration im selben Gültigkeitsbereich [neu-deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.

Außerhalb des Klassenkörpers können `class` Deklarationen wie `let` neu zugewiesen werden, sollten jedoch vermieden werden. Innerhalb des Klassenkörpers ist die Bindung konstant wie bei `const`.

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

### Eine einfache Klassendeklaration

Im folgenden Beispiel definieren wir zuerst eine Klasse namens `Rectangle`, die dann erweitert wird, um eine Klasse namens `FilledRectangle` zu erstellen.

Beachten Sie, dass `super()`, das im `constructor` verwendet wird, nur in Konstruktoren verwendet werden kann und _muss_ vor dem `this` Schlüsselwort aufgerufen werden.

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
