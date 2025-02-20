---
title: Objekt-Initialisierer
slug: Web/JavaScript/Reference/Operators/Object_initializer
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Ein **Objekt-Initialisierer** ist eine durch Kommas getrennte Liste von null oder mehr Paaren aus Eigenschaftsnamen und zugehörigen Werten eines Objekts, eingeschlossen in geschweifte Klammern (`{}`). Objekte können auch mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder [durch Aufruf einer Konstrukturfunktion](/de/docs/Web/JavaScript/Guide/Working_with_objects#using_a_constructor_function) mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator initialisiert werden.

{{InteractiveExample("JavaScript Demo: Expressions - Object initializer", "taller")}}

```js interactive-example
const object1 = { a: "foo", b: 42, c: {} };

console.log(object1.a);
// Expected output: "foo"

const a = "foo";
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c };

console.log(object2.b);
// Expected output: 42

const object3 = { a, b, c };

console.log(object3.a);
// Expected output: "foo"
```

## Syntax

```js-nolint
o = {
  a: "foo",
  b: 42,
  c: {},
  1: "number literal property",
  "foo:bar": "string literal property",

  shorthandProperty,

  method(parameters) {
    // …
  },

  get property() {},
  set property(value) {},

  [expression]: "computed property",

  __proto__: prototype,

  ...spreadProperty,
};
```

## Beschreibung

Ein Objekt-Initialisierer ist ein Ausdruck, der die Initialisierung eines {{jsxref("Object")}} beschreibt. Objekte bestehen aus _Eigenschaften_, die ein Objekt beschreiben. Die Werte von Objekteigenschaften können entweder {{Glossary("Primitive", "primitive")}} Datentypen oder andere Objekte sein.

### Objektliterale Syntax vs. JSON

Die Objektliterale Syntax ist nicht dasselbe wie die **J**ava**S**cript **O**bjekt **N**otation ({{Glossary("JSON", "JSON")}}). Obwohl sie ähnlich aussehen, gibt es einige Unterschiede zwischen ihnen:

- JSON erlaubt _nur_ Eigenschaftsdefinitionen im `"property": value`-Format. Der Eigenschaftsname muss in doppelten Anführungszeichen stehen, und die Definition kann keine Kurzschreibweise sein. Berechnete Eigenschaftsnamen sind ebenfalls nicht erlaubt.
- JSON-Eigenschaftswerte können nur Zeichenketten, Zahlen, `true`, `false`, `null`, Arrays oder ein anderes JSON-Objekt sein. Das bedeutet, dass JSON keine Methoden oder nicht-plain Objekte wie [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) oder [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp) darstellen kann.
- In JSON ist `"__proto__"` ein normaler Eigenschaftsschlüssel. In einem Objektliteral [legt es das Prototype des Objekts fest](#prototype-setter).

JSON ist eine _strikte Teilmenge_ der Objektliteralen Syntax, was bedeutet, dass jeder gültige JSON-Text als Objektliteral geparst werden kann und vermutlich keine Syntaxfehler verursacht. Die einzige Ausnahme ist, dass die Objektliterale Syntax doppelte `__proto__`-Schlüssel verbietet, was nicht auf [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) zutrifft. Letzteres behandelt `__proto__` wie eine normale Eigenschaft und nimmt den letzten vorkommenden Wert als Eigenschaftswert. Der einzige Unterschied im Verhalten besteht ebenfalls im Falle von `__proto__`-Schlüsseln — für Objektliterale legt es das Prototype des Objekts fest; für JSON ist es eine normale Eigenschaft.

```js
console.log(JSON.parse('{ "__proto__": 0, "__proto__": 1 }')); // {__proto__: 1}
console.log({ "__proto__": 0, "__proto__": 1 }); // SyntaxError: Duplicate __proto__ fields are not allowed in object literals

console.log(JSON.parse('{ "__proto__": {} }')); // { __proto__: {} }
console.log({ "__proto__": {} }); // {} (with {} as prototype)
```

## Beispiele

### Objekte erstellen

Ein leeres Objekt ohne Eigenschaften kann so erstellt werden:

```js
const object = {};
```

Der Vorteil der _Literal-Notation_ oder _Initialisierer-Notation_ besteht jedoch darin, dass Sie Objekte mit Eigenschaften schnell innerhalb der geschweiften Klammern erstellen können. Sie schreiben eine Liste von `key: value`-Paaren, getrennt durch Kommas.

Der folgende Code erstellt ein Objekt mit drei Eigenschaften und die Schlüssel sind `"foo"`, `"age"` und `"baz"`. Die Werte dieser Schlüssel sind eine Zeichenkette `"bar"`, die Zahl `42` und ein weiteres Objekt.

```js
const object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### Eigenschaften abrufen

Nachdem Sie ein Objekt erstellt haben, möchten Sie möglicherweise dessen Eigenschaften lesen oder ändern. Objekteigenschaften können mit der Punkt-Notation oder der Klammer-Notation abgerufen werden. (Siehe [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) für detaillierte Informationen.)

```js
object.foo; // "bar"
object["age"]; // 42
object.baz; // {myProp: 12}
object.baz.myProp; //12
```

### Eigenschaftsdefinitionen

Wir haben bereits gelernt, wie man Eigenschaften mit der Initialisierer-Syntax notiert. Oft gibt es Variablen in Ihrem Code, die Sie in ein Objekt einfügen möchten. Sie werden Code wie diesen sehen:

```js
const a = "foo";
const b = 42;
const c = {};

const o = {
  a: a,
  b: b,
  c: c,
};
```

Es gibt eine kürzere Notation, um dasselbe Ziel zu erreichen:

```js
const a = "foo";
const b = 42;
const c = {};

// Shorthand property names
const o = { a, b, c };

// In other words,
console.log(o.a === { a }.a); // true
```

#### Doppelte Eigenschaftsnamen

Wenn Sie denselben Namen für Ihre Eigenschaften verwenden, überschreibt die zweite Eigenschaft die erste.

```js
const a = { x: 1, x: 2 };
console.log(a); // {x: 2}
```

Nach ES2015 sind doppelte Eigenschaftsnamen überall erlaubt, einschließlich [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#duplicate_property_names). Sie können auch doppelte Eigenschaftsnamen in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) haben. Die einzige Ausnahme sind [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), die in der Klassenstruktur eindeutig sein müssen.

### Methodendefinitionen

Eine Eigenschaft eines Objekts kann auch auf eine [Funktion](/de/docs/Web/JavaScript/Reference/Functions) oder eine [Getter](/de/docs/Web/JavaScript/Reference/Functions/get)- oder [Setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Methode verweisen.

```js
const o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {},
};
```

Eine Kurzschreibweise ist verfügbar, sodass das Schlüsselwort `function` nicht mehr notwendig ist.

```js
// Shorthand method names
const o = {
  property(parameters) {},
};
```

Es gibt auch eine Möglichkeit, Generator-Methoden knapp zu definieren.

```js
const o = {
  *generator() {
    // …
  },
};
```

Diese ist gleichwertig mit dieser notation im Stil von ES5 (wobei zu beachten ist, dass ECMAScript 5 keine Generatoren besitzt):

```js
const o = {
  generator: function* () {
    // …
  },
};
```

Weitere Informationen und Beispiele zu Methoden finden Sie unter [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

### Berechnete Eigenschaftsnamen

Die Objekt-Initialisierer-Syntax unterstützt auch berechnete Eigenschaftsnamen. Damit können Sie einen Ausdruck in eckige Klammern `[]` setzen, der berechnet und als Eigenschaftsname verwendet wird. Dies ist ähnlich der Klammer-Notation der [Eigenschaftszugriffs-](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)-Syntax, die Sie vielleicht schon verwendet haben, um Eigenschaften zu lesen und zu setzen.

Jetzt können Sie eine ähnliche Syntax auch in Objektliteralen verwenden:

```js
// Computed property names
let i = 0;
const a = {
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

const items = ["A", "B", "C"];
const obj = {
  [items]: "Hello",
};
console.log(obj); // A,B,C: "Hello"
console.log(obj["A,B,C"]); // "Hello"

const param = "size";
const config = {
  [param]: 12,
  [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
```

### Spread-Eigenschaften

Objektliterale unterstützen die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Sie kopiert eigene aufzählbare Eigenschaften eines bereitgestellten Objekts in ein neues Objekt.

Ein flaches Klonen (ohne `prototype`) oder das Zusammenführen von Objekten ist jetzt mit einer kürzeren Syntax als mit {{jsxref("Object.assign()")}} möglich.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }
```

> [!WARNING]
> Beachten Sie, dass {{jsxref("Object.assign()")}} [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) auslöst, während dies bei der Spread-Syntax nicht der Fall ist!

### Prototype-Setter

Eine Eigenschaftsdefinition in der Form `__proto__: value` oder `"__proto__": value` erstellt keine Eigenschaft mit dem Namen `__proto__`. Stattdessen zeigt sie, wenn der angegebene Wert ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, mit `[[Prototype]]` des erstellten Objekts auf diesen Wert. (Wenn der Wert kein Objekt oder `null` ist, wird das Objekt nicht geändert.)

Beachten Sie, dass der `__proto__`-Schlüssel eine standardisierte Syntax ist, im Gegensatz zu den nicht-standardisierten und nicht-performanten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Accessoren. Während der Objekterstellung setzt er das `[[Prototype]]`, ähnlich wie {{jsxref("Object.create")}}, anstatt die Prototypkette zu ändern.

```js-nolint
const obj1 = {};
console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true

const obj2 = { __proto__: null };
console.log(Object.getPrototypeOf(obj2)); // null

const protoObj = {};
const obj3 = { "__proto__": protoObj };
console.log(Object.getPrototypeOf(obj3) === protoObj); // true

const obj4 = { __proto__: "not an object or null" };
console.log(Object.getPrototypeOf(obj4) === Object.prototype); // true
console.log(Object.hasOwn(obj4, "__proto__")); // false
```

Nur ein einzelner Prototype-Setter ist in einem Objektliteral erlaubt. Mehrere Prototype-Setter führen zu einem Syntaxfehler.

Eigenschaftsdefinitionen, die nicht die "Doppelpunkt"-Notation verwenden, sind keine Prototype-Setter. Sie sind Eigenschaftsdefinitionen, die sich identisch zu ähnlichen Definitionen mit irgendeinem anderen Namen verhalten.

```js
const __proto__ = "variable";

const obj1 = { __proto__ };
console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true
console.log(Object.hasOwn(obj1, "__proto__")); // true
console.log(obj1.__proto__); // "variable"

const obj2 = { __proto__() { return "hello"; } };
console.log(obj2.__proto__()); // "hello"

const obj3 = { ["__proto__"]: 17 };
console.log(obj3.__proto__); // 17

// Mixing prototype setter with normal own properties with "__proto__" key
const obj4 = { ["__proto__"]: 17, __proto__: {} }; // {__proto__: 17} (with {} as prototype)
const obj5 = {
  ["__proto__"]: 17,
  __proto__: {},
  __proto__: null, // SyntaxError: Duplicate __proto__ fields are not allowed in object literals
};
const obj6 = {
  ["__proto__"]: 17,
  ["__proto__"]: "hello",
  __proto__: null,
}; // {__proto__: "hello"} (with null as prototype)
const obj7 =  {
  ["__proto__"]: 17,
  __proto__,
  __proto__: null,
}; // {__proto__: "variable"} (with null as prototype)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
