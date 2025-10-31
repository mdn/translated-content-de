---
title: Symbol.unscopables
short-title: unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die statische Dateneigenschaft **`Symbol.unscopables`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.unscopables`. Die {{jsxref("Statements/with", "with")}}-Anweisung sucht dieses Symbol im Scope-Objekt für eine Eigenschaft auf, die eine Sammlung von Eigenschaften enthält, die nicht innerhalb der `with`-Umgebung zu Bindungen werden sollen.

{{InteractiveExample("JavaScript Demo: Symbol.unscopables")}}

```js interactive-example
const object = {
  foo: 42,
};

object[Symbol.unscopables] = {
  foo: true,
};

with (object) {
  console.log(foo);
  // Expected output: Error: foo is not defined
}
```

## Wert

Das wohlbekannte Symbol `Symbol.unscopables`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das `[Symbol.unscopables]`-Symbol (zugänglich über `Symbol.unscopables`) kann auf jedem Objekt definiert werden, um Eigenschaftsnamen davon auszuschließen, als lexikalische Variablen in [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen exponiert zu werden. Beachten Sie, dass bei Verwendung des [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) `with`-Anweisungen nicht verfügbar sind und dieses Symbol wahrscheinlich nicht benötigt wird.

Wenn eine Eigenschaft des `[Symbol.unscopables]`-Objekts auf `true` (oder jeden {{Glossary("Truthy", "truthy")}} Wert) gesetzt wird, wird die entsprechende Eigenschaft des `with`-Scope-Objekts _unscopable_ und wird daher nicht in den `with`-Body-Scope eingeführt. Wenn eine Eigenschaft auf `false` (oder jeden {{Glossary("Falsy", "falsy")}} Wert) gesetzt wird, wird sie _scopable_ und erscheint somit als Variable im lexikalischen Scope.

Wenn entschieden wird, ob `x` unscopable ist, wird die gesamte Prototypkette der `[Symbol.unscopables]`-Eigenschaft nach einer Eigenschaft namens `x` durchsucht. Das bedeutet, wenn Sie `[Symbol.unscopables]` als einfaches Objekt deklariert haben, würden `Object.prototype`-Eigenschaften wie [`toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) ebenfalls unscopable werden, was bei Legacy-Code, der davon ausgeht, dass diese Eigenschaften normalerweise gescopet sind, zu Rückwärtskompatibilitätsproblemen führen könnte (siehe [ein Beispiel unten](#avoid_using_a_non-null-prototype_object_as_symbol.unscopables)). Es wird empfohlen, die benutzerdefinierte `[Symbol.unscopables]`-Eigenschaft so zu gestalten, dass sie `null` als Prototyp hat, wie es bei [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) der Fall ist.

Dieses Protokoll wird auch von DOM-APIs genutzt, wie z.B. [`Element.prototype.append()`](/de/docs/Web/API/Element/append).

## Beispiele

### Scoping in with-Anweisungen

Der folgende Code funktioniert in ES5 und darunter einwandfrei. In ECMAScript 2015 wurde jedoch die Methode {{jsxref("Array.prototype.values()")}} eingeführt. Das bedeutet, dass innerhalb einer `with`-Umgebung "values" nun die Methode `Array.prototype.values()` wäre und nicht die Variable außerhalb der `with`-Anweisung.

```js
var values = [];

with (values) {
  // If [Symbol.unscopables] did not exist, values would become
  // Array.prototype.values starting with ECMAScript 2015.
  // And an error would have occurred.
  values.push("something");
}
```

Der Code, der `with (values)` enthält, führte dazu, dass einige Websites in Firefox nicht mehr funktionierten, als `Array.prototype.values()` hinzugefügt wurde ([Firefox Bug 883914](https://bugzil.la/883914)). Darüber hinaus impliziert dies, dass jede zukünftige Hinzufügung einer Array-Methode möglicherweise zu einer Unterbrechung führt, wenn dies implizit den `with`-Scope ändert. Daher wurde das `[Symbol.unscopables]`-Symbol eingeführt und in `Array` als [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) implementiert, um zu verhindern, dass einige der Array-Methoden in die `with`-Anweisung gescopet werden.

### Unscopables in Objekten

Sie können auch `[Symbol.unscopables]` für Ihre eigenen Objekte festlegen.

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

### Verwenden eines Nicht-Null-Prototyp-Objekts als `[Symbol.unscopables]` vermeiden

Deklarieren von `[Symbol.unscopables]` als einfaches Objekt ohne Eliminierung seines Prototyps kann subtile Fehler verursachen. Betrachten Sie den folgenden Code, der vor `[Symbol.unscopables]` funktioniert:

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

Um die Rückwärtskompatibilität zu bewahren, haben Sie sich entschieden, eine `[Symbol.unscopables]`-Eigenschaft hinzuzufügen, wenn Sie weitere Eigenschaften zu `character` hinzufügen. Sie tun dies vielleicht naiv so:

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

Der obige Code funktioniert nun jedoch nicht mehr:

```js
with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "[object Undefined]"
}
```

Dies liegt daran, dass bei der Suche nach `character[Symbol.unscopables].toString` [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) zurückgegeben wird, was ein truthy Wert ist, und damit stellt der `toString()`-Aufruf in der `with()`-Anweisung auf `globalThis.toString()` um — und weil es ohne ein [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) aufgerufen wird, ist `this` `undefined`, was `[object Undefined]` zurückgibt.

Selbst wenn die Methode nicht von `character` überschrieben wird, wird durch Unscopable-Machen der Wert von `this` geändert.

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

Um dies zu beheben, stellen Sie immer sicher, dass `[Symbol.unscopables]` nur die Eigenschaften enthält, die Sie unscopable haben möchten, ohne `Object.prototype`-Eigenschaften.

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
