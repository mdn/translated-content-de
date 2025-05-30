---
title: Methoden-Definitionen
slug: Web/JavaScript/Reference/Functions/Method_definitions
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{jsSidebar("Functions")}}

Die **Methoden-Definition** ist eine kürzere Syntax zur Definition einer Funktions-Eigenschaft in einem Objekt-Initializer. Sie kann auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) verwendet werden.

{{InteractiveExample("JavaScript Demo: Method definitions")}}

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

Die Kurzschreibweise ist der [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set) Syntax ähnlich.

Angenommen, der folgende Code:

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

Dieser kann nun verkürzt werden zu:

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

Eigenschaften, die mit dieser Syntax definiert werden, sind eigene Eigenschaften des erstellten Objekts und sind konfigurierbar, aufzählbar und beschreibbar, genau wie normale Eigenschaften.

[`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function), und [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*) Eigenschaften haben alle ihre jeweiligen Methodensyntaxen; siehe Beispiele unten.

Beachten Sie jedoch, dass die Methodensyntax nicht einer normalen Eigenschaft mit einer Funktion als Wert entspricht — es gibt semantische Unterschiede. Dies macht Methoden, die in Objektliteralen definiert sind, konsistenter mit Methoden in [Klassen](/de/docs/Web/JavaScript/Reference/Classes).

### Methoden-Definitionen sind nicht konstruierbar

Methoden können keine Konstruktoren sein! Sie werden einen {{jsxref("TypeError")}} werfen, wenn Sie versuchen, sie zu instanziieren. Andererseits kann eine als Funktion erstellte Eigenschaft als Konstruktor verwendet werden.

```js example-bad
const obj = {
  method() {},
};
new obj.method(); // TypeError: obj.method is not a constructor
```

### Verwenden von super in Methoden-Definitionen

Nur Funktionen, die als Methoden definiert sind, haben Zugriff auf das [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) Schlüsselwort. `super.prop` sucht die Eigenschaft im Prototyp des Objekts, auf dem die Methode initialisiert wurde.

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

### Verwenden von Methoden-Definitionen

```js
const obj = {
  a: "foo",
  b() {
    return this.a;
  },
};
console.log(obj.b()); // "foo"
```

### Methoden-Definitionen in Klassen

Sie können die exakt gleiche Syntax verwenden, um öffentliche Instanzmethoden zu definieren, die auf Klasseninstanzen verfügbar sind. In Klassen benötigen Sie das Kommatrennzeichen zwischen Methoden nicht.

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

Öffentliche Instanzmethoden werden auf der `prototype` Eigenschaft der Klasse definiert und werden daher von allen Instanzen der Klasse geteilt. Sie sind beschreibbar, nicht aufzählbar und konfigurierbar.

Innerhalb von Instanzmethoden funktionieren [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) wie in normalen Methoden. Normalerweise bezieht sich `this` auf die Instanz selbst. In Unterklassen erlaubt `super` Ihnen den Zugriff auf den Prototyp des Objekts, an das die Methode angehängt ist, was Ihnen erlaubt, Methoden der Oberklasse aufzurufen.

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

Statische Methoden und private Methoden verwenden ähnliche Syntaxen, die auf den Seiten zu [`static`](/de/docs/Web/JavaScript/Reference/Classes/static) und [private properties](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) beschrieben werden.

### Berechnete Eigenschaften-Namen

Die Methodensyntax unterstützt auch [berechnete Eigenschaften-Namen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names).

```js
const bar = {
  foo0: function () {
    return 0;
  },
  foo1() {
    return 1;
  },
  ["foo".toUpperCase()]() {
    return 2;
  },
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.FOO()); // 2
```

### Generator-Methoden

Beachten Sie, dass das Sternchen (`*`) in der Generator-Methoden-Syntax _vor_ dem Eigenschaften-Namen des Generators stehen muss. (Das heißt, `* g(){}` wird funktionieren, aber `g *(){}` nicht.)

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

### Asynchrone Generator-Methoden

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
- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
