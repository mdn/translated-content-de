---
title: class expression
slug: Web/JavaScript/Reference/Operators/class
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Das **`class`** Schlüsselwort kann verwendet werden, um eine Klasse innerhalb eines Ausdrucks zu definieren.

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `class` beginnen, um Mehrdeutigkeiten mit einer [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) zu vermeiden. Das `class` Schlüsselwort beginnt einen Ausdruck nur, wenn es in einem Kontext erscheint, der keine Anweisungen akzeptiert.

## Beschreibung

Ein `class`-Ausdruck ist einem [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) sehr ähnlich und hat fast die gleiche Syntax. Wie bei `class`-Deklarationen wird der Körper eines `class`-Ausdrucks im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt. Der Hauptunterschied zwischen einem `class`-Ausdruck und einer `class`-Deklaration ist der _Klassenname_, der in `class`-Ausdrücken weggelassen werden kann, um _anonyme_ Klassen zu erstellen. Klassen-Ausdrücke ermöglichen es Ihnen, Klassen neu zu definieren, während das Neudeklarieren einer Klasse mit `class`-Deklarationen einen {{jsxref("SyntaxError")}} wirft. Siehe auch das Kapitel über [Klassen](/de/docs/Web/JavaScript/Reference/Classes) für weitere Informationen.

## Beispiele

### Ein einfacher Klassenausdruck

Dies ist ein einfacher anonymer Klassenausdruck, auf den Sie mit der Variablen `Foo` verweisen können.

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

Wenn Sie innerhalb des Klassenkörpers auf die aktuelle Klasse verweisen möchten, können Sie einen _benannten Klassenausdruck_ erstellen. Der Name ist nur innerhalb des Geltungsbereichs des Klassenausdrucks selbst sichtbar.

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
