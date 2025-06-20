---
title: Symbol.unscopables
short-title: unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.unscopables`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.unscopables`. Die {{jsxref("Statements/with", "with")}}-Anweisung sucht dieses Symbol im Gültigkeitsbereichsobjekt nach einer Eigenschaft, die eine Sammlung von Eigenschaften enthält, die innerhalb der `with`-Umgebung keine Bindungen werden sollen.

{{InteractiveExample("JavaScript Demo: Symbol.unscopables")}}

```js interactive-example
const object1 = {
  property1: 42,
};

object1[Symbol.unscopables] = {
  property1: true,
};

with (object1) {
  console.log(property1);
  // Expected output: Error: property1 is not defined
}
```

## Wert

Das wohlbekannte Symbol `Symbol.unscopables`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das `[Symbol.unscopables]`-Symbol (zugänglich über `Symbol.unscopables`) kann auf jedem Objekt definiert werden, um Eigenschaftsnamen davon auszuschließen, als lexikalische Variablen in [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen exponiert zu werden. Beachten Sie, dass bei Verwendung des [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) `with`-Anweisungen nicht verfügbar sind und dieses Symbol wahrscheinlich nicht benötigt wird.

Wenn eine Eigenschaft des `[Symbol.unscopables]`-Objekts auf `true` (oder einen beliebigen {{Glossary("Truthy", "truthy")}}-Wert) gesetzt wird, wird die entsprechende Eigenschaft des `with`-Gültigkeitsbereichsobjekts _unscopable_ und daher nicht in den `with`-Umfang eingeführt. Wenn eine Eigenschaft auf `false` (oder einen beliebigen {{Glossary("Falsy", "falsy")}}-Wert) gesetzt wird, wird sie _scopable_ und erscheint somit als lexikalische Gültigkeitsbereichsvariablen.

Bei der Entscheidung, ob `x` nicht scopable ist, wird die gesamte Prototypenkette der `[Symbol.unscopables]`-Eigenschaft nach einer Eigenschaft namens `x` durchsucht. Das bedeutet, dass wenn Sie `[Symbol.unscopables]` als einfaches Objekt deklariert haben, auch `Object.prototype`-Eigenschaften wie [`toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) unscopable werden, was zu Rückwärtsinkompatibilitäten für Legacy-Code führen kann, der davon ausgeht, dass diese Eigenschaften normalerweise im Gültigkeitsbereich sind (siehe [ein Beispiel unten](#avoid_using_a_non-null-prototype_object_as_symbol.unscopables)). Es wird empfohlen, Ihre benutzerdefinierte `[Symbol.unscopables]`-Eigenschaft genauso wie [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) mit `null` als Prototyp zu versehen.

Dieses Protokoll wird auch von DOM-APIs wie [`Element.prototype.append()`](/de/docs/Web/API/Element/append) verwendet.

## Beispiele

### Scoping in `with`-Anweisungen

Der folgende Code funktioniert in ES5 und darunter einwandfrei. Jedoch wurde in ECMAScript 2015 die Methode {{jsxref("Array.prototype.values()")}} eingeführt. Das bedeutet, dass innerhalb einer `with`-Umgebung "values" nun die `Array.prototype.values()`-Methode wäre und nicht die Variable außerhalb der `with`-Anweisung.

```js
var values = [];

with (values) {
  // If [Symbol.unscopables] did not exist, values would become
  // Array.prototype.values starting with ECMAScript 2015.
  // And an error would have occurred.
  values.push("something");
}
```

Der Code, der `with (values)` enthält, führte dazu, dass einige Websites in Firefox nicht mehr funktionierten, als `Array.prototype.values()` hinzugefügt wurde ([Firefox Bug 883914](https://bugzil.la/883914)). Außerdem impliziert dies, dass jede zukünftige Hinzufügung von Array-Methoden problematisch sein kann, wenn sie implizit den `with`-Gültigkeitsbereich ändert. Daher wurde das `[Symbol.unscopables]`-Symbol eingeführt und in `Array` als [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) implementiert, um zu verhindern, dass einige der Array-Methoden in die `with`-Anweisung einbezogen werden.

### Unscopables in Objekten

Sie können `[Symbol.unscopables]` auch für Ihre eigenen Objekte festlegen.

```js
const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
};

obj[Symbol.unscopables] = {
  // Make the object have `null` prototype to prevent
  // `Object.prototype` methods from being unscopable
  __proto__: null,
  // `foo` will be scopable
  foo: false,
  // `bar` will be unscopable
  bar: true,
  // `baz` is omitted; because `undefined` is falsy, it is also scopable (default)
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
  console.log(baz); // 3
}
```

### Vermeidung der Verwendung eines Nicht-Null-Prototyps als `[Symbol.unscopables]`

Wenn `[Symbol.unscopables]` als einfaches Objekt ohne Eliminierung seines Prototyps deklariert wird, können subtile Fehler auftreten. Betrachten Sie den folgenden Code, der vor `[Symbol.unscopables]` funktioniert:

```js
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
};

with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "Use with statements, you must not"
}
```

Um die Rückwärtskompatibilität zu bewahren, entschieden Sie sich, eine `[Symbol.unscopables]`-Eigenschaft hinzuzufügen, wenn Sie weitere Eigenschaften zu `character` hinzufügen. Möglicherweise tun Sie dies naiv so:

```js example-bad
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
  student: "Luke",
  [Symbol.unscopables]: {
    // Make `student` unscopable
    student: true,
  },
};
```

Allerdings funktioniert der obige Code jetzt nicht mehr:

```js
with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "[object Undefined]"
}
```

Dies liegt daran, dass beim Nachschlagen von `character[Symbol.unscopables].toString` tatsächlich [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) zurückgegeben wird, was ein truthy-Wert ist, wodurch der `toString()`-Aufruf in der `with()`-Anweisung tatsächlich `globalThis.toString()` referenziert — und da dies ohne ein [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) aufgerufen wird, ist `this` `undefined`, wodurch `[object Undefined]` zurückgegeben wird.

Selbst wenn die Methode von `character` nicht überschrieben wird, wird das Scoping geändert, wenn sie unscopable wird.

```js
const proto = {};
const obj = { __proto__: proto };

with (proto) {
  console.log(isPrototypeOf(obj)); // true; `isPrototypeOf` is scoped and `this` is `proto`
}

proto[Symbol.unscopables] = {};

with (proto) {
  console.log(isPrototypeOf(obj)); // TypeError: Cannot convert undefined or null to object
  // `isPrototypeOf` is unscoped and `this` is undefined
}
```

Um dies zu beheben, stellen Sie immer sicher, dass `[Symbol.unscopables]` nur Eigenschaften enthält, die Sie unscopable machen möchten, ohne `Object.prototype`-Eigenschaften.

```js example-good
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
  student: "Luke",
  [Symbol.unscopables]: {
    // Make the object have `null` prototype to prevent
    // `Object.prototype` methods from being unscopable
    __proto__: null,
    // Make `student` unscopable
    student: true,
  },
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)
- [`Element.prototype.append()`](/de/docs/Web/API/Element/append)
