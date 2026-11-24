---
title: Objektinitialisierer (Objektliteral)
slug: Web/JavaScript/Reference/Operators/Object_initializer
l10n:
  sourceCommit: 52efe757952fde32b197b8ae9395f8f2a3bc7a9f
---

Ein **Objektinitialisierer**, manchmal auch **Objektliteral** genannt, ist eine durch Kommas getrennte Liste aus null oder mehr Paaren von Eigenschaftsnamen und zugehörigen Werten eines Objekts, die von geschweiften Klammern (`{}`) umschlossen ist. Objekte können auch mit [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder [durch Aufrufen einer Konstruktorfunktion](/de/docs/Web/JavaScript/Guide/Working_with_objects#using_a_constructor_function) mit dem Operator [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) initialisiert werden.

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

Ein Objektinitialisierer ist ein Ausdruck, der die Initialisierung eines {{jsxref("Object")}} beschreibt. Objekte bestehen aus _Eigenschaften_, die ein Objekt beschreiben. Die Werte von Objekteigenschaften können {{Glossary("Primitive", "primitive")}} Datentypen oder andere Objekte sein.

### Objektliteral-Syntax im Vergleich zu JSON

Die Objektliteral-Syntax ist nicht dasselbe wie **J**ava**S**cript **O**bject **N**otation ({{Glossary("JSON", "JSON")}}). Obwohl sie ähnlich aussehen, gibt es Unterschiede:

- JSON erlaubt Eigenschaftsdefinitionen _nur_ mit der Syntax `"property": value`. Der Eigenschaftsname muss in doppelten Anführungszeichen stehen, und eine Kurzschreibweise ist nicht zulässig. Berechnete Eigenschaftsnamen sind ebenfalls nicht erlaubt.
- Die Werte von JSON-Objekteigenschaften können nur Zeichenfolgen, Zahlen, `true`, `false`, `null`, Arrays oder andere JSON-Objekte sein. Das bedeutet, dass JSON weder Methoden noch andere Objekte wie [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) oder [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp) darstellen kann.
- In JSON ist `"__proto__"` ein gewöhnlicher Eigenschaftsschlüssel. In einem Objektliteral [legt er den Prototyp des Objekts fest](#prototyp-setter).

JSON ist eine _echte Teilmenge_ der Objektliteral-Syntax. Das bedeutet, dass jeder gültige JSON-Text als Objektliteral geparst werden kann und dabei in der Regel keine Syntaxfehler verursacht. Die einzige Ausnahme ist, dass die Objektliteral-Syntax doppelte `__proto__`-Schlüssel verbietet; für [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) gilt dies nicht. `JSON.parse()` behandelt `__proto__` wie eine gewöhnliche Eigenschaft und verwendet das letzte Vorkommen als Eigenschaftswert. Auch die durch sie dargestellten Objektwerte unterscheiden sich nur dann, wenn der Quelltext den Schlüssel `__proto__` enthält: Bei Objektliteralen legt er den Prototyp des Objekts fest; bei JSON ist er eine gewöhnliche Eigenschaft.

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

Der Vorteil der _Literal-_ oder _Initialisierer-Schreibweise_ besteht jedoch darin, dass Sie Objekte mit Eigenschaften direkt innerhalb der geschweiften Klammern erstellen können. Dazu geben Sie eine durch Kommas getrennte Liste von `key: value`-Paaren an.

Der folgende Code erstellt ein Objekt mit drei Eigenschaften. Die Schlüssel sind `"foo"`, `"age"` und `"baz"`. Die zugehörigen Werte sind die Zeichenfolge `"bar"`, die Zahl `42` und ein weiteres Objekt.

```js
const object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### Auf Eigenschaften zugreifen

Nachdem Sie ein Objekt erstellt haben, möchten Sie möglicherweise seine Eigenschaften lesen oder ändern. Auf Objekteigenschaften können Sie mit der Punktnotation oder der Klammernotation zugreifen. (Ausführliche Informationen finden Sie unter [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).)

```js
object.foo; // "bar"
object["age"]; // 42
object.baz; // {myProp: 12}
object.baz.myProp; // 12
```

### Eigenschaftsdefinitionen

Sie haben bereits erfahren, wie Eigenschaften mit der Initialisierer-Syntax angegeben werden. Häufig enthält Ihr Code Variablen, die Sie in ein Objekt übernehmen möchten. Dafür sieht Code beispielsweise so aus:

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

Dasselbe lässt sich auch kürzer schreiben:

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

Wenn Sie denselben Namen für mehrere Eigenschaften verwenden, überschreibt die zweite Eigenschaft die erste.

```js
const a = { x: 1, x: 2 };
console.log(a); // {x: 2}
```

Seit ES2015 sind doppelte Eigenschaftsnamen überall erlaubt, auch im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#duplicate_property_names). Auch in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) können Eigenschaftsnamen mehrfach vorkommen. Die einzige Ausnahme sind [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), die innerhalb des Klassenrumpfs eindeutig sein müssen.

### Methodendefinitionen

Eine Eigenschaft eines Objekts kann auch auf eine [Funktion](/de/docs/Web/JavaScript/Reference/Functions) oder eine [Getter-](/de/docs/Web/JavaScript/Reference/Functions/get) oder [Setter-Methode](/de/docs/Web/JavaScript/Reference/Functions/set) verweisen.

```js
const o = {
  property: function (parameters) {},
  get property() {
    return 1;
  },
  set property(value) {},
};
```

Es gibt eine Kurzschreibweise, bei der das Schlüsselwort `function` nicht mehr erforderlich ist.

```js
// Shorthand method names
const o = {
  property(parameters) {},
};
```

Auch Generatormethoden lassen sich knapp definieren.

```js
const o = {
  *generator() {
    // …
  },
};
```

Dies entspricht der folgenden ES5-ähnlichen Schreibweise (beachten Sie jedoch, dass ECMAScript 5 keine Generatoren kennt):

```js
const o = {
  generator: function* () {
    // …
  },
};
```

Weitere Informationen und Beispiele zu Methoden finden Sie unter [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

### Berechnete Eigenschaftsnamen

Die Objektinitialisierer-Syntax unterstützt auch berechnete Eigenschaftsnamen. Damit können Sie einen Ausdruck in eckige Klammern `[]` setzen. Der Ausdruck wird ausgewertet und das Ergebnis als Eigenschaftsname verwendet. Dies ähnelt der Klammernotation beim [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die Sie möglicherweise bereits zum Lesen und Setzen von Eigenschaften verwendet haben.

Eine ähnliche Syntax können Sie nun auch in Objektliteralen verwenden:

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

Objektliterale unterstützen die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Sie kopiert eigene, aufzählbare Eigenschaften eines angegebenen Objekts in ein neues Objekt.

Damit lassen sich Objekte flach klonen (ohne `prototype`) oder zusammenführen, und zwar mit einer kürzeren Syntax als bei {{jsxref("Object.assign()")}}.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }
```

> [!WARNING]
> Beachten Sie, dass {{jsxref("Object.assign()")}} [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) auslöst, die Spread-Syntax hingegen nicht!

### Prototyp-Setter

Eine Eigenschaftsdefinition der Form `__proto__: value` oder `"__proto__": value` erstellt keine Eigenschaft mit dem Namen `__proto__`. Wenn der angegebene Wert ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, wird stattdessen `[[Prototype]]` des erstellten Objekts auf diesen Wert gesetzt. (Ist der Wert weder ein Objekt noch `null`, bleibt das Objekt unverändert.)

Beachten Sie, dass der Schlüssel `__proto__` eine standardisierte Syntax ist – im Gegensatz zu den nicht standardisierten und wenig performanten Accessors von [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto). Er legt `[[Prototype]]` beim Erstellen des Objekts fest, ähnlich wie {{jsxref("Object.create")}}, statt die Prototypkette nachträglich zu verändern.

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

In einem Objektliteral ist nur ein Prototyp-Setter zulässig. Mehrere Prototyp-Setter verursachen einen Syntaxfehler.

Eigenschaftsdefinitionen ohne Doppelpunktnotation sind keine Prototyp-Setter. Sie verhalten sich genauso wie entsprechende Eigenschaftsdefinitionen mit einem beliebigen anderen Namen.

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

- [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
