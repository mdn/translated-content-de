---
title: class-Ausdruck
slug: Web/JavaScript/Reference/Operators/class
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Mit dem Schlüsselwort **`class`** können Sie innerhalb eines Ausdrucks eine Klasse definieren.

Sie können Klassen auch mit einer [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) definieren.

{{InteractiveExample("JavaScript Demo: class expression")}}

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) darf nicht mit dem Schlüsselwort `class` beginnen, damit sie nicht mit einer [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) verwechselt wird. Das Schlüsselwort `class` leitet nur dann einen Ausdruck ein, wenn es in einem Kontext steht, in dem keine Anweisungen zulässig sind.

### Parameter

- `name` {{optional_inline}}
  - : Der Klassenname, mit dem innerhalb des Klassenkörpers auf die Klasse verwiesen werden kann.
- `class body`
  - : Die in geschweifte Klammern eingeschlossenen [Klassenelemente](/de/docs/Web/JavaScript/Reference/Classes#class_body).

### Rückgabewert

Die Konstruktorfunktion der Klasse.

## Beschreibung

Ein `class`-Ausdruck ist einer [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) sehr ähnlich und hat nahezu dieselbe Syntax. Wie bei `class`-Deklarationen wird der Körper eines `class`-Ausdrucks im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt. Der wichtigste Unterschied zwischen einem `class`-Ausdruck und einer `class`-Deklaration ist der _Klassenname_: Bei `class`-Ausdrücken kann er weggelassen werden, um _anonyme_ Klassen zu erstellen. Mit Klassenausdrücken können Sie Klassen neu definieren. Wird eine Klasse dagegen mit `class`-Deklarationen erneut deklariert, wird ein {{jsxref("SyntaxError")}} ausgelöst. Weitere Informationen finden Sie im Kapitel über [Klassen](/de/docs/Web/JavaScript/Reference/Classes).

## Beispiele

### Ein einfacher Klassenausdruck

Dies ist ein anonymer Klassenausdruck, auf den Sie über die Variable `Foo` verweisen können.

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

### Benannte Klassenausdrücke

Wenn Sie innerhalb des Klassenkörpers auf die aktuelle Klasse verweisen möchten, können Sie einen _benannten Klassenausdruck_ erstellen. Der Name ist nur innerhalb des Gültigkeitsbereichs des Klassenausdrucks selbst sichtbar.

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
- {{jsxref("Classes", "Classes", "", 1)}}
