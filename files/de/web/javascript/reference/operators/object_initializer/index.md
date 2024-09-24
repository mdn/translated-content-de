---
title: Objekt-Initializer
slug: Web/JavaScript/Reference/Operators/Object_initializer
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Ein **Objekt-Initializer** ist eine durch Kommas getrennte Liste von null oder mehr Paaren aus Eigenschaftsnamen und zugehörigen Werten eines Objekts, eingeschlossen in geschweiften Klammern (`{}`). Objekte können auch mithilfe von [`Object.create()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder [durch Aufruf einer Konstruktorfunktion](/de/docs/Web/JavaScript/Guide/Working_with_objects#using_a_constructor_function) mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator erzeugt werden.

{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html", "taller")}}

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

Ein Objekt-Initializer ist ein Ausdruck, der die Initialisierung eines {{jsxref("Object")}} beschreibt. Objekte bestehen aus _Eigenschaften_, die verwendet werden, um ein Objekt zu beschreiben. Die Werte von Objekteigenschaften können entweder [primitive](/de/docs/Glossary/Primitive) Datentypen oder andere Objekte enthalten.

### Objektliteral-Syntax vs. JSON

Die Objektliteral-Syntax ist nicht dasselbe wie die **J**ava**S**cript **O**bject **N**otation ([JSON](/de/docs/Glossary/JSON)). Obwohl sie ähnlich aussehen, gibt es Unterschiede zwischen ihnen:

- JSON erlaubt _nur_ die Eigenschaftsdefinition mithilfe der Syntax `"property": value`. Der Eigenschaftsname muss in doppelten Anführungszeichen stehen, und die Definition kann nicht abgekürzt werden. Berechnete Eigenschaftsnamen sind ebenfalls nicht erlaubt.
- JSON-Objekteigenschaftswerte können nur Zeichenfolgen, Zahlen, `true`, `false`, `null`, Arrays oder ein anderes JSON-Objekt sein. Das bedeutet, JSON kann keine Methoden oder nicht-plain Objekte wie [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) oder [`RegExp`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp) darstellen.
- In JSON ist `"__proto__"` ein normaler Eigenschaftsschlüssel. In einem Objektliteral [setzt er das Prototypenobjekt](#prototype_setter) des Objekts.

JSON ist eine _strikte Teilmenge_ der Objektliteral-Syntax, das bedeutet, dass jeder gültige JSON-Text als Objektliteral geparst werden kann und wahrscheinlich keine Syntaxfehler verursacht. Die einzige Ausnahme ist, dass die Objektliteral-Syntax doppelte `__proto__`-Schlüssel verbietet, was nicht für [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) gilt. Letzteres behandelt `__proto__` wie eine normale Eigenschaft und nimmt das letzte Vorkommen als Wert der Eigenschaft. Der einzige Zeitpunkt, an dem sich der von ihnen dargestellte Objektwert (d.h. ihre Semantik) unterscheidet, ist auch dann, wenn die Quelle den `__proto__`-Schlüssel enthält — für Objektliterale setzt er das Prototypenobjekt; für JSON ist es eine normale Eigenschaft.

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

Der Vorteil der _Literal- oder Initialisierer-Notation_ ist jedoch, dass Sie schnell Objekte mit Eigenschaften innerhalb der geschweiften Klammern erstellen können. Sie notieren eine Liste von `key: value`-Paaren, die durch Kommata getrennt sind.

Der folgende Code erstellt ein Objekt mit drei Eigenschaften und die Schlüssel sind `"foo"`, `"age"` und `"baz"`. Die Werte dieser Schlüssel sind eine Zeichenfolge `"bar"`, die Zahl `42` und ein weiteres Objekt.

```js
const object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### Zugriff auf Eigenschaften

Sobald Sie ein Objekt erstellt haben, möchten Sie möglicherweise darauf zugreifen oder es ändern. Auf Objekteigenschaften kann durch Punktnotation oder Klammernotation zugegriffen werden. (Siehe [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) für detaillierte Informationen.)

```js
object.foo; // "bar"
object["age"]; // 42
object.baz; // {myProp: 12}
object.baz.myProp; //12
```

### Eigenschaftsdefinitionen

Wir haben bereits gelernt, wie man Eigenschaften mit der Initialisierer-Syntax notiert. Oft gibt es Variablen in Ihrem Code, die Sie in ein Objekt einfügen möchten. Sie werden dann Code wie diesen sehen:

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

// Kurznotation für Eigenschaftsnamen
const o = { a, b, c };

// Mit anderen Worten,
console.log(o.a === { a }.a); // true
```

#### Doppelte Eigenschaftsnamen

Bei der Verwendung desselben Namens für Ihre Eigenschaften überschreibt die zweite Eigenschaft die erste.

```js
const a = { x: 1, x: 2 };
console.log(a); // {x: 2}
```

Nach ES2015 sind doppelte Eigenschaftsnamen überall erlaubt, einschließlich [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#duplicate_property_names). Sie können auch doppelte Eigenschaftsnamen in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) haben. Die einzige Ausnahme bilden [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), die einzigartig im Klassenkörper sein müssen.

### Methodendefinitionen

Eine Eigenschaft eines Objekts kann auch auf eine [Funktion](/de/docs/Web/JavaScript/Reference/Functions) oder eine [Getter](/de/docs/Web/JavaScript/Reference/Functions/get)- oder [Setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Methode verweisen.

```js
const o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {},
};
```

Es gibt eine kürzere Notation, sodass das Schlüsselwort `function` nicht mehr erforderlich ist.

```js
// Kurznotation für Methoden
const o = {
  property(parameters) {},
};
```

Es gibt auch eine Möglichkeit, Generatormethoden knapp zu definieren.

```js
const o = {
  *generator() {
    // …
  },
};
```

Dies ist gleichbedeutend mit dieser ES5-ähnlichen Notation (aber beachten Sie, dass ECMAScript 5 keine Generatoren hat):

```js
const o = {
  generator: function* () {
    // …
  },
};
```

Für weitere Informationen und Beispiele zu Methoden siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

### Berechnete Eigenschaftsnamen

Die Objektliteral-Syntax unterstützt auch berechnete Eigenschaftsnamen. Damit können Sie einen Ausdruck in eckigen Klammern `[]` setzen, der berechnet und als Eigenschaftsname verwendet wird. Dies erinnert an die Klammernotation der [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)-Syntax, die Sie möglicherweise bereits zum Lesen und Setzen von Eigenschaften verwendet haben.

Jetzt können Sie eine ähnliche Syntax auch in Objektliteralen verwenden:

```js
// Berechnete Eigenschaftsnamen
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
  [items]: "Hallo",
};
console.log(obj); // A,B,C: "Hallo"
console.log(obj["A,B,C"]); // "Hallo"

const param = "size";
const config = {
  [param]: 12,
  [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
```

### Spread-Eigenschaften

Objektliterale unterstützen die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Sie kopiert eigene aufzählbare Eigenschaften von einem bereitgestellten Objekt in ein neues Objekt.

Shallow-Cloning (ohne `prototype`) oder Zusammenführen von Objekten ist jetzt mithilfe einer kürzeren Syntax als {{jsxref("Object.assign()")}} möglich.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }
```

> [!WARNING]
> Beachten Sie, dass {{jsxref("Object.assign()")}} [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) aufruft, während die Spread-Syntax dies nicht tut!

### Prototype Setter

Eine Eigenschaftsdefinition der Form `__proto__: value` oder `"__proto__": value` erstellt keine Eigenschaft mit dem Namen `__proto__`. Stattdessen, wenn der bereitgestellte Wert ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ist, weist er den `[[Prototype]]` des erstellten Objekts diesem Wert zu. (Wenn der Wert kein Objekt oder `null` ist, wird das Objekt nicht geändert.)

Beachten Sie, dass der `__proto__`-Schlüssel standardisierte Syntax ist, im Gegensatz zu den nicht standardisierten und nicht leistungsfähigen [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Accessors. Er setzt den `[[Prototype]]` während der Objekterstellung, ähnlich wie {{jsxref("Object.create")}} — anstatt die Prototypenkette zu verändern.

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

Nur ein einzelner Prototype Setter ist in einem Objektliteral erlaubt. Mehrere Prototype Setter führen zu einem Syntaxfehler.

Eigenschaftsdefinitionen, die die "Doppelpunkt"-Notation nicht verwenden, sind keine Prototype Setter. Sie sind Eigenschaftsdefinitionen, die identisch zu ähnlichen Definitionen unter Verwendung eines beliebigen anderen Namens funktionieren.

```js
const __proto__ = "variable";

const obj1 = { __proto__ };
console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true
console.log(Object.hasOwn(obj1, "__proto__")); // true
console.log(obj1.__proto__); // "variable"

const obj2 = { __proto__() { return "hallo"; } };
console.log(obj2.__proto__()); // "hallo"

const obj3 = { ["__proto__"]: 17 };
console.log(obj3.__proto__); // 17

// Mischen von Prototype Settern mit normalen Eigenen Eigenschaften mit dem "__proto__"-Schlüssel
const obj4 = { ["__proto__"]: 17, __proto__: {} }; // {__proto__: 17} (mit {} als Prototyp)
const obj5 = {
  ["__proto__"]: 17,
  __proto__: {},
  __proto__: null, // SyntaxError: Duplicate __proto__ fields are not allowed in object literals
};
const obj6 = {
  ["__proto__"]: 17,
  ["__proto__"]: "hello",
  __proto__: null,
}; // {__proto__: "hello"} (mit null als Prototyp)
const obj7 =  {
  ["__proto__"]: 17,
  __proto__,
  __proto__: null,
}; // {__proto__: "variable"} (mit null als Prototyp)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
