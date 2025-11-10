---
title: Objekt-Initialisierer
slug: Web/JavaScript/Reference/Operators/Object_initializer
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Ein **Objekt-Initialisierer** ist eine durch Kommata getrennte Liste von null oder mehr Paaren von Eigenschaftsnamen und zugehörigen Werten eines Objekts, eingeschlossen in geschweifte Klammern (`{}`). Objekte können auch mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder [durch Aufrufen einer Konstrukturfunktion](/de/docs/Web/JavaScript/Guide/Working_with_objects#using_a_constructor_function) mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator initialisiert werden.

{{InteractiveExample("JavaScript Demo: Object initializer", "taller")}}

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

Ein Objekt-Initialisierer ist ein Ausdruck, der die Initialisierung eines {{jsxref("Object")}} beschreibt. Objekte bestehen aus _Eigenschaften_, die verwendet werden, um ein Objekt zu beschreiben. Die Werte von Objekteigenschaften können entweder {{Glossary("Primitive", "primitive")}} Datentypen oder andere Objekte enthalten.

### Objektliteralsyntax vs. JSON

Die Objektliteralsyntax ist nicht dasselbe wie die **J**ava**S**cript **O**bject **N**otation ({{Glossary("JSON", "JSON")}}). Obwohl sie ähnlich aussehen, gibt es Unterschiede zwischen ihnen:

- JSON erlaubt _nur_ die Eigenschaftsdefinition mit der Syntax `"property": value`. Der Eigenschaftsname muss in doppelten Anführungszeichen stehen, und die Definition kann keine Kurzschrift sein. Berechnete Eigenschaftsnamen sind ebenfalls nicht erlaubt.
- JSON-Objekteigenschaftswerte können nur Zeichenfolgen, Zahlen, `true`, `false`, `null`, Arrays oder ein anderes JSON-Objekt sein. Das bedeutet, dass JSON keine Methoden oder nicht-einfache Objekte wie [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) oder [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp) ausdrücken kann.
- In JSON ist `"__proto__"` ein normaler Eigenschaftsschlüssel. In einem Objektliteral [setzt es das Prototyp des Objekts](#prototyp-setter).

JSON ist eine _strikte Teilmenge_ der Objektliteralsyntax, was bedeutet, dass jeder gültige JSON-Text als Objektliteral geparst werden kann und wahrscheinlich keine Syntaxfehler verursachen würde. Die einzige Ausnahme besteht darin, dass die Objektliteralsyntax doppelte `__proto__`-Schlüssel verbietet, was nicht auf [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) zutrifft. Letzteres behandelt `__proto__` wie eine normale Eigenschaft und nimmt die letzte Vorkommen als Wert der Eigenschaft. Das einzige Mal, wenn sich der Objektwert, den sie darstellen (a.k.a. ihre Semantik), unterscheidet, ist auch, wenn die Quelle den `__proto__`-Schlüssel enthält — bei Objektliteralen setzt es das Prototyp des Objekts; bei JSON ist es eine normale Eigenschaft.

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

Der Vorteil der _Literalisierung_ oder _Initialisierer_ Notation besteht jedoch darin, dass Sie schnell Objekte mit Eigenschaften innerhalb der geschweiften Klammern erstellen können. Sie notieren eine Liste von `Schlüssel: Wert` Paaren, getrennt durch Kommas.

Der folgende Code erstellt ein Objekt mit drei Eigenschaften, deren Schlüssel `"foo"`, `"age"` und `"baz"` sind. Die Werte dieser Schlüssel sind eine Zeichenfolge `"bar"`, die Zahl `42` und ein weiteres Objekt.

```js
const object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### Zugriff auf Eigenschaften

Sobald Sie ein Objekt erstellt haben, möchten Sie diese möglicherweise lesen oder ändern. Auf Objekteigenschaften kann entweder durch Punktnotation oder Klammernotation zugegriffen werden. (Siehe [Eigenschaftszugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) für detaillierte Informationen.)

```js
object.foo; // "bar"
object["age"]; // 42
object.baz; // {myProp: 12}
object.baz.myProp; // 12
```

### Eigenschaftsdefinitionen

Wir haben bereits gelernt, wie man Eigenschaften mit der Initialisierersyntax notiert. Oftmals gibt es Variablen in Ihrem Code, die Sie in ein Objekt einfügen möchten. Sie werden so einen Code sehen:

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

Es gibt eine kürzere Notation, um dasselbe zu erreichen:

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

Nach ES2015 sind doppelte Eigenschaftsnamen überall erlaubt, einschließlich [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#duplicate_property_names). Sie können auch doppelte Eigenschaftsnamen in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) haben. Die einzige Ausnahme sind [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), die im Klassenkörper eindeutig sein müssen.

### Methodendefinitionen

Eine Eigenschaft eines Objekts kann sich auch auf eine [Funktion](/de/docs/Web/JavaScript/Reference/Functions) oder eine [getter](/de/docs/Web/JavaScript/Reference/Functions/get)- oder [setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Methode beziehen.

```js
const o = {
  property: function (parameters) {},
  get property() {
    return 1;
  },
  set property(value) {},
};
```

Eine Kurznotation ist verfügbar, sodass das Schlüsselwort `function` nicht mehr erforderlich ist.

```js
// Shorthand method names
const o = {
  property(parameters) {},
};
```

Es gibt auch eine Möglichkeit, Generatormethoden prägnant zu definieren.

```js
const o = {
  *generator() {
    // …
  },
};
```

Was gleichwertig ist zu dieser ES5-ähnlichen Notation (aber beachten Sie, dass ECMAScript 5 keine Generatoren hat):

```js
const o = {
  generator: function* () {
    // …
  },
};
```

Für weitere Informationen und Beispiele über Methoden, siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

### Berechnete Eigenschaftsnamen

Die Objektinitialisierersyntax unterstützt auch berechnete Eigenschaftsnamen. Damit können Sie einen Ausdruck in eckige Klammern `[]` setzen, der berechnet und als Eigenschaftsname verwendet wird. Dies erinnert an die Klammernotation der [Eigenschaftszugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)-Syntax, die Sie möglicherweise verwendet haben, um Eigenschaften bereits zu lesen und zu setzen.

Jetzt können Sie auch eine ähnliche Syntax in Objektliteralen verwenden:

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

Objektliterale unterstützen die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Sie kopiert eigene aufzählbare Eigenschaften aus einem bereitgestellten Objekt in ein neues Objekt.

Flaches Klonen (ohne `prototyp`) oder das Zusammenführen von Objekten ist jetzt mit einer kürzeren Syntax als {{jsxref("Object.assign()")}} möglich.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }
```

> [!WARNING]
> Beachten Sie, dass {{jsxref("Object.assign()")}} [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) auslöst, während die Spread-Syntax dies nicht tut!

### Prototyp-Setter

Eine Eigenschaftsdefinition der Form `__proto__: value` oder `"__proto__": value` erstellt keine Eigenschaft mit dem Namen `__proto__`. Stattdessen weist es, wenn der bereitgestellte Wert ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, das `[[Prototype]]` des erstellten Objekts auf diesen Wert. (Wenn der Wert kein Objekt oder `null` ist, wird das Objekt nicht verändert.)

Beachten Sie, dass der `__proto__`-Schlüssel eine standardisierte Syntax ist, im Gegensatz zu den nicht standardisierten und nicht performanten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Zugreifern. Es setzt das `[[Prototype]]` während der Objekterstellung, ähnlich wie {{jsxref("Object.create")}} — anstatt die Prototypkette zu mutieren.

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

Nur ein einziger Prototyp-Setter ist in einem Objektliteral erlaubt. Mehrere Prototyp-Setter sind ein Syntaxfehler.

Eigenschaftsdefinitionen, die keine "Doppelpunkt"-Notation verwenden, sind keine Prototyp-Setter. Sie sind Eigenschaftsdefinitionen, die sich identisch zu ähnlichen Definitionen verhalten, die jeden anderen Namen verwenden.

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

- [Eigenschaftszugreifer](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
