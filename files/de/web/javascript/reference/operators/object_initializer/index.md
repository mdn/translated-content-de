---
title: Objektinitialisierer
slug: Web/JavaScript/Reference/Operators/Object_initializer
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Operators")}}

Ein **Objektinitialisierer** ist eine komma-getrennte Liste von null oder mehr Paaren von Eigenschaftsnamen und den zugehörigen Werten eines Objekts, eingeschlossen in geschweifte Klammern (`{}`). Objekte können auch initialisiert werden, indem [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) verwendet oder [eine Konstrukturfunktion](/de/docs/Web/JavaScript/Guide/Working_with_objects#using_a_constructor_function) mit dem `new`-Operator aufgerufen wird.

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

Ein Objektinitialisierer ist ein Ausdruck, der die Initialisierung eines {{jsxref("Object")}} beschreibt. Objekte bestehen aus _Eigenschaften_, die verwendet werden, um ein Objekt zu beschreiben. Die Werte von Objekteigenschaften können entweder {{Glossary("Primitive", "primitive")}} Datentypen oder andere Objekte enthalten.

### Objektliteral-Syntax vs. JSON

Die Objektliteral-Syntax ist nicht dasselbe wie **J**ava**S**cript **O**bjekt **N**otation ({{Glossary("JSON", "JSON")}}). Auch wenn sie ähnlich aussehen, gibt es Unterschiede zwischen ihnen:

- JSON erlaubt _nur_ die Eigenschaftsdefinition mittels `"property": value`-Syntax. Der Eigenschaftsname muss doppelt in Anführungszeichen gesetzt werden und kann keine Kurzform haben. Berechnete Eigenschaftsnamen sind ebenfalls nicht erlaubt.
- JSON-Objekteigenschaftswerte können nur Zeichenketten, Zahlen, `true`, `false`, `null`, Arrays oder ein weiteres JSON-Objekt sein. Das bedeutet, JSON kann keine Methoden oder nicht-gewöhnliche Objekte wie [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) oder [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp) ausdrücken.
- In JSON ist `"__proto__"` ein normaler Eigenschaftsschlüssel. In einem Objektliteral [setzt es das Prototyp-Objekt](#prototyp-setter).

JSON ist ein _striktes Teilmengen-Syntax_ des Objektliterals, was bedeutet, dass jeder gültige JSON-Text als Objektliteral analysiert werden kann und wahrscheinlich keine Syntaxfehler verursachen würde. Die einzige Ausnahme ist, dass die Objektliteral-Syntax doppelte `__proto__`-Schlüssel verbietet, was nicht für [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) zutrifft. Letzteres behandelt `__proto__` wie eine normale Eigenschaft und nimmt den letzten Vorfall als Eigenschaftswert. Der einzige Zeitpunkt, zu dem sich der darstellende Objektwert (auch als ihre Semantik bekannt) unterscheidet, ist auch, wenn die Quelle den `__proto__`-Schlüssel enthält — für Objektliterale setzt es den Prototyp des Objekts; für JSON ist es eine normale Eigenschaft.

```js
console.log(JSON.parse('{ "__proto__": 0, "__proto__": 1 }')); // {__proto__: 1}
console.log({ "__proto__": 0, "__proto__": 1 }); // SyntaxError: Duplicate __proto__ fields are not allowed in object literals

console.log(JSON.parse('{ "__proto__": {} }')); // { __proto__: {} }
console.log({ "__proto__": {} }); // {} (with {} as prototype)
```

## Beispiele

### Erstellen von Objekten

Ein leeres Objekt ohne Eigenschaften kann so erstellt werden:

```js
const object = {};
```

Der Vorteil der _Literal_- oder _Initialisierungs_-notierung besteht jedoch darin, dass Sie Objekte mit Eigenschaften innerhalb der geschweiften Klammern schnell erstellen können. Sie notieren eine Liste von `Schlüssel: Wert`-Paaren durch Kommas getrennt.

Der folgende Code erstellt ein Objekt mit drei Eigenschaften, und die Schlüssel sind `"foo"`, `"age"` und `"baz"`. Die Werte dieser Schlüssel sind eine Zeichenkette `"bar"`, die Zahl `42` und ein weiteres Objekt.

```js
const object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### Zugriff auf Eigenschaften

Sobald Sie ein Objekt erstellt haben, möchten Sie es möglicherweise lesen oder ändern. Auf Objekteigenschaften kann mit der Punktnotation oder der Klammernotation zugegriffen werden. (Siehe [property accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) für detaillierte Informationen.)

```js
object.foo; // "bar"
object["age"]; // 42
object.baz; // {myProp: 12}
object.baz.myProp; // 12
```

### Eigenschaftsdefinitionen

Wir haben bereits gelernt, wie man Eigenschaften mit der Initialisierer-Syntax notiert. Häufig gibt es Variablen in Ihrem Code, die Sie in ein Objekt aufnehmen möchten. Sie werden Code sehen wie diesen:

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

Wenn Sie denselben Namen für Ihre Eigenschaften verwenden, wird die zweite Eigenschaft die erste überschreiben.

```js
const a = { x: 1, x: 2 };
console.log(a); // {x: 2}
```

Nach ES2015 sind doppelte Eigenschaftsnamen überall erlaubt, einschließlich [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#duplicate_property_names). Sie können auch doppelte Eigenschaftsnamen in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) haben. Die einzige Ausnahme sind [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), die im Klassenkörper einzigartig sein müssen.

### Methodendefinitionen

Eine Eigenschaft eines Objekts kann auch auf eine [Funktion](/de/docs/Web/JavaScript/Reference/Functions) oder eine [Getter](/de/docs/Web/JavaScript/Reference/Functions/get)- oder [Setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Methode verweisen.

```js
const o = {
  property: function (parameters) {},
  get property() {
    return 1;
  },
  set property(value) {},
};
```

Eine Kurznotation steht zur Verfügung, sodass das Schlüsselwort `function` nicht mehr notwendig ist.

```js
// Shorthand method names
const o = {
  property(parameters) {},
};
```

Es gibt auch eine Möglichkeit, Generator-Methoden prägnant zu definieren.

```js
const o = {
  *generator() {
    // …
  },
};
```

Dies ist äquivalent zu dieser ES5-ähnlichen Notation (beachten Sie jedoch, dass ECMAScript 5 keine Generatoren hat):

```js
const o = {
  generator: function* () {
    // …
  },
};
```

Für weitere Informationen und Beispiele zu Methoden siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

### Berechnete Eigenschaftsnamen

Die Objektinitialisierer-Syntax unterstützt auch berechnete Eigenschaftsnamen. Dies ermöglicht es, einen Ausdruck in eckige Klammern `[]` zu setzen, der berechnet und als Eigenschaftsname verwendet wird. Dies erinnert an die Klammernotation der [property accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Syntax, die Sie möglicherweise bereits verwendet haben, um auf Eigenschaften zu lesen und zu setzen.

Nun können Sie eine ähnliche Syntax auch in Objektliteralen verwenden:

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

Objektliterale unterstützen die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Sie kopiert eigene aufzählbare Eigenschaften von einem bereitgestellten Objekt auf ein neues Objekt.

Shallow-Klonen (ohne `prototype`) oder Objekte zusammenführen ist nun mit einer kürzeren Syntax als {{jsxref("Object.assign()")}} möglich.

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

Eine Eigenschaftsdefinition der Form `__proto__: value` oder `"__proto__": value` erstellt keine Eigenschaft mit dem Namen `__proto__`. Stattdessen, wenn der bereitgestellte Wert ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, zeigt er den `[[Prototype]]` des erstellten Objekts auf diesen Wert. (Wenn der Wert kein Objekt oder `null` ist, wird das Objekt nicht geändert.)

Beachten Sie, dass der `__proto__`-Schlüssel standardisierte Syntax ist, im Gegensatz zu den nicht standardmäßigen und nicht performanten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Accessoren. Es wird der `[[Prototype]]` während der Objekterstellung gesetzt, ähnlich wie bei {{jsxref("Object.create")}} — anstatt die Prototyp-Kette zu verändern.

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

In einem Objektliteral ist nur ein einziger Prototyp-Setter erlaubt. Mehrere Prototyp-Setter sind ein Syntaxfehler.

Eigenschaftsdefinitionen, die keine "Doppelpunkt"-Notation verwenden, sind keine Prototyp-Setter. Sie sind Eigenschaftsdefinitionen, die sich identisch zu ähnlichen Definitionen mit einem anderen Namen verhalten.

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

- [Property accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
- [Method definitions](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Lexical grammar](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
