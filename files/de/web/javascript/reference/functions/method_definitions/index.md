---
title: Methodendefinitionen
slug: Web/JavaScript/Reference/Functions/Method_definitions
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Functions")}}

**Methodendefinition** ist eine kürzere Syntax zur Definition einer Funktions-Eigenschaft in einem Objekt-Initializer. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

{{InteractiveExample("JavaScript Demo: Methodendefinitionen")}}

```js interactive-example
const obj = {
  foo() {
    return "bar";
  },
};

console.log(obj.foo());
// Expected output: "bar"
```

## Syntax

```js-nolint
({
  property(parameters) {},
  *generator(parameters) {},
  async property(parameters) {},
  async *generator(parameters) {},

  // with computed keys
  [expression](parameters) {},
  *[expression](parameters) {},
  async [expression](parameters) {},
  async *[expression](parameters) {},
})
```

## Beschreibung

Die Kurzsyntax ähnelt der Syntax für [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set).

Angenommen, Sie haben folgenden Code:

```js
const obj = {
  foo: function () {
    // …
  },
  bar: function () {
    // …
  },
};
```

Sie können dies jetzt zu folgendem verkürzen:

```js
const obj = {
  foo() {
    // …
  },
  bar() {
    // …
  },
};
```

Eigenschaften, die mit dieser Syntax definiert werden, sind Eigen-Eigenschaften des erstellten Objekts und sind konfigurierbar, aufzählbar und beschreibbar, genau wie normale Eigenschaften.

Die Eigenschaften [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*) haben alle ihre jeweiligen Methodensyntaxen; siehe untenstehende Beispiele.

Beachten Sie jedoch, dass die Methodensyntax nicht einem normalen Property mit einer Funktion als Wert entspricht — es gibt semantische Unterschiede. Dies macht die in Objektliteralen definierten Methoden konsistenter mit Methoden in [Klassen](/de/docs/Web/JavaScript/Reference/Classes).

### Methodendefinitionen sind nicht konstruierbar

Methoden können keine Konstruktoren sein! Sie werfen einen {{jsxref("TypeError")}}, wenn Sie versuchen, sie zu instanziieren. Andererseits kann eine als Funktion erstellte Eigenschaft als Konstruktor verwendet werden.

```js example-bad
const obj = {
  method() {},
};
new obj.method(); // TypeError: obj.method is not a constructor
```

### Verwendung von super in Methodendefinitionen

Nur als Methoden definierte Funktionen haben Zugriff auf das [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) Schlüsselwort. `super.prop` sucht die Eigenschaft im Prototyp des Objekts, auf dem die Methode initialisiert wurde.

```js-nolint example-bad
const obj = {
  __proto__: {
    prop: "foo",
  },
  notAMethod: function () {
    console.log(super.prop); // SyntaxError: 'super' keyword unexpected here
  },
};
```

## Beispiele

### Verwendung von Methodendefinitionen

```js
const obj = {
  a: "foo",
  b() {
    return this.a;
  },
};
console.log(obj.b()); // "foo"
```

### Methodendefinitionen in Klassen

Sie können die exakt gleiche Syntax verwenden, um öffentliche Instanzmethoden zu definieren, die in Klasseninstanzen verfügbar sind. In Klassen benötigen Sie das Komma-Trennzeichen zwischen Methoden nicht.

```js
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
  secondPublicMethod() {
    return "goodbye world";
  }
}

const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod()); // "hello world"
```

Öffentliche Instanzmethoden sind in der `prototype`-Eigenschaft der Klasse definiert und werden somit von allen Instanzen der Klasse geteilt. Sie sind beschreibbar, nicht aufzählbar und konfigurierbar.

Innerhalb von Instanzmethoden funktionieren [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) wie in normalen Methoden. Normalerweise bezieht sich `this` auf die Instanz selbst. In Unterklassen ermöglicht `super` den Zugriff auf den Prototyp des Objekts, an dem die Methode angehängt ist, wodurch das Aufrufen von Methoden der Oberklasse möglich wird.

```js
class BaseClass {
  msg = "hello world";
  basePublicMethod() {
    return this.msg;
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod();
  }
}

const instance = new SubClass();
console.log(instance.subPublicMethod()); // "hello world"
```

Statische Methoden und private Methoden verwenden ähnliche Syntaxen, die auf den Seiten zu [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) beschrieben sind.

### Berechnete Eigenschaftsnamen

Die Methodensyntax unterstützt auch [berechnete Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names).

```js
const bar = {
  foo0: function () {
    return 0;
  },
  foo1() {
    return 1;
  },
  ["foo" + 2]() {
    return 2;
  },
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2
```

### Generator-Methoden

Beachten Sie, dass das Sternchen (`*`) in der Generator-Methodensyntax _vor_ dem Generatoreigenschaftsnamen stehen muss. (Das heißt, `* g(){}` funktioniert, aber `g *(){}` nicht.)

```js
// Using a named property
const obj = {
  g: function* () {
    let index = 0;
    while (true) {
      yield index++;
    }
  },
};

// The same object using shorthand syntax
const obj2 = {
  *g() {
    let index = 0;
    while (true) {
      yield index++;
    }
  },
};

const it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
```

### Asynchrone Methoden

```js
// Using a named property
const obj = {
  f: async function () {
    await somePromise;
  },
};

// The same object using shorthand syntax
const obj2 = {
  async f() {
    await somePromise;
  },
};
```

### Asynchrone Generatormethoden

```js
// Using a named property
const obj = {
  f: async function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

// The same object using shorthand syntax
const obj2 = {
  async *f() {
    yield 1;
    yield 2;
    yield 3;
  },
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
- [Objekt-Initializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
