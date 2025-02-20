---
title: class-Ausdruck
slug: Web/JavaScript/Reference/Operators/class
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Das Schlüsselwort **`class`** kann verwendet werden, um eine Klasse innerhalb eines Ausdrucks zu definieren.

Sie können Klassen auch mithilfe der [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) definieren.

{{InteractiveExample("JavaScript Demo: Expressions - class expression")}}

```js interactive-example
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};

console.log(new Rectangle(5, 8).area());
// Expected output: 40
```

## Syntax

```js-nolint
class {
  // class body
}
class name {
  // class body
}
```

> [!NOTE]
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `class` beginnen, um Verwechslungen mit einer [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) zu vermeiden. Das Schlüsselwort `class` beginnt nur dann einen Ausdruck, wenn es in einem Kontext erscheint, der keine Anweisungen akzeptiert.

## Beschreibung

Ein `class`-Ausdruck ist dem [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) sehr ähnlich und hat fast die gleiche Syntax. Genau wie bei `class`-Deklarationen wird der Körper eines `class`-Ausdrucks im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt. Der Hauptunterschied zwischen einem `class`-Ausdruck und einer `class`-Deklaration ist der _Klassenname_, der in `class`-Ausdrücken weggelassen werden kann, um _anonyme_ Klassen zu erstellen. `class`-Ausdrücke ermöglichen es Ihnen, Klassen neu zu definieren, während das erneute Deklarieren einer Klasse mit `class`-Deklarationen einen {{jsxref("SyntaxError")}} auslöst. Weitere Informationen finden Sie auch im Kapitel über [Klassen](/de/docs/Web/JavaScript/Reference/Classes).

## Beispiele

### Ein grundlegender class-Ausdruck

Dies ist lediglich ein anonymer `class`-Ausdruck, auf den Sie mithilfe der Variablen `Foo` verweisen können.

```js
const Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

const instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // "Foo"
```

### Benannte class-Ausdrücke

Wenn Sie innerhalb des Klassenkörpers auf die aktuelle Klasse verweisen möchten, können Sie einen _benannten class-Ausdruck_ erstellen. Der Name ist nur im Kontext des `class`-Ausdrucks selbst sichtbar.

```js
const Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
};
const bar = new Foo();
bar.whoIsThere(); // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo is not defined
Foo.name; // "NamedFoo"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/class", "class")}}
- {{jsxref("Classes", "Klassen", "", 1)}}
