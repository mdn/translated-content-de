---
title: class expression
slug: Web/JavaScript/Reference/Operators/class
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Das **`class`**-Schlüsselwort kann verwendet werden, um eine Klasse innerhalb eines Ausdrucks zu definieren.

Sie können Klassen auch mit der [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) definieren.

{{EmbedInteractiveExample("pages/js/expressions-classexpression.html")}}

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
> Eine [Ausdrucks-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `class` beginnen, um Verwechslungen mit einer [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) zu vermeiden. Das `class`-Schlüsselwort beginnt nur dann einen Ausdruck, wenn es in einem Kontext erscheint, der keine Anweisungen akzeptieren kann.

## Beschreibung

Ein `class`-Ausdruck ist dem [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) sehr ähnlich und hat fast die gleiche Syntax. Wie bei `class`-Deklarationen wird der Körper eines `class`-Ausdrucks im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt. Der Hauptunterschied zwischen einem `class`-Ausdruck und einer `class`-Deklaration ist der _Klassenname_, der in `class`-Ausdrücken weggelassen werden kann, um _anonyme_ Klassen zu erstellen. Klassen-Ausdrücke erlauben es Ihnen, Klassen neu zu definieren, während bei der erneuten Deklaration einer Klasse mit `class`-Deklarationen ein {{jsxref("SyntaxError")}} ausgelöst wird. Weitere Informationen finden Sie auch im Kapitel über [Klassen](/de/docs/Web/JavaScript/Reference/Classes).

## Beispiele

### Ein einfacher Klassen-Ausdruck

Dies ist einfach ein anonymer Klassen-Ausdruck, auf den Sie mit der Variablen `Foo` verweisen können.

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

### Benannte Klassen-Ausdrücke

Wenn Sie innerhalb des Klassenkörpers auf die aktuelle Klasse verweisen möchten, können Sie einen _benannten Klassen-Ausdruck_ erstellen. Der Name ist nur innerhalb des Gültigkeitsbereichs des Klassen-Ausdrucks selbst sichtbar.

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
