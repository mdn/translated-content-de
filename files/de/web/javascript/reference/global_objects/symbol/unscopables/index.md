---
title: Symbol.unscopables
short-title: unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Dateneigenschaft **`Symbol.unscopables`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.unscopables`. Die {{jsxref("Statements/with", "with")}}-Anweisung sucht dieses Symbol im Scope-Objekt für eine Eigenschaft, die eine Sammlung von Eigenschaften enthält, die keine Bindungen innerhalb der `with`-Umgebung werden sollen.

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

Das bekannte Symbol `Symbol.unscopables`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das Symbol `[Symbol.unscopables]` (über `Symbol.unscopables` zugegriffen) kann auf jedem Objekt definiert werden, um Eigenschaftsnamen davon auszuschließen, als lexikalische Variablen in [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen exponiert zu werden. Beachten Sie, dass bei der Verwendung des [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) `with`-Anweisungen nicht verfügbar sind und dieses Symbol wahrscheinlich nicht benötigt wird.

Indem eine Eigenschaft des `[Symbol.unscopables]`-Objekts auf `true` (oder einen {{Glossary("Truthy", "truthy")}}-Wert) gesetzt wird, wird die entsprechende Eigenschaft des `with`-Scope-Objekts _unscopable_ und daher nicht in den `with`-Körperumfang eingeführt. Das Setzen einer Eigenschaft auf `false` (oder einen {{Glossary("Falsy", "falsy")}}-Wert) macht sie _scopable_ und somit erscheinen sie als lexikalische Scope-Variablen.

Bei der Entscheidung, ob `x` unscopable ist, wird die gesamte Prototypkette der `[Symbol.unscopables]`-Eigenschaft nach einer Eigenschaft namens `x` durchsucht. Das bedeutet, wenn Sie `[Symbol.unscopables]` als ein einfaches Objekt deklarierten, würden `Object.prototype`-Eigenschaften wie [`toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) ebenfalls unscopable werden, was möglicherweise zu Rückwärtskompatibilitätsproblemen für Altcodes führt, die annehmen, dass diese Eigenschaften normalerweise gescopt sind (siehe [ein Beispiel unten](#avoid_using_a_non-null-prototype_object_as_symbol.unscopables)). Es wird empfohlen, Ihre benutzerdefinierte `[Symbol.unscopables]`-Eigenschaft so zu gestalten, dass sie `null` als Prototyp hat, wie es [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) tut.

Dieses Protokoll wird auch von DOM-APIs verwendet, wie z.B. [`Element.prototype.append()`](/de/docs/Web/API/Element/append).

## Beispiele

### Scoping in `with`-Anweisungen

Der folgende Code funktioniert in ES5 und früher einwandfrei. Allerdings wurde in ECMAScript 2015 die Methode {{jsxref("Array.prototype.values()")}} eingeführt. Das bedeutet, innerhalb einer `with`-Umgebung wäre "values" nun die `Array.prototype.values()`-Methode und nicht die Variable außerhalb der `with`-Anweisung.

```js
var values = [];

with (values) {
  // If [Symbol.unscopables] did not exist, values would become
  // Array.prototype.values starting with ECMAScript 2015.
  // And an error would have occurred.
  values.push("something");
}
```

Der Code mit `with (values)` führte dazu, dass einige Webseiten in Firefox nicht mehr richtig funktionierten, als `Array.prototype.values()` hinzugefügt wurde ([Firefox Bug 883914](https://bugzil.la/883914)). Außerdem bedeutet dies, dass jede zukünftige Hinzufügung einer Array-Methode problematisch sein könnte, wenn sie den `with`-Scope implizit ändert. Daher wurde das `[Symbol.unscopables]`-Symbol eingeführt und auf `Array` als [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) implementiert, um zu verhindern, dass einige der Array-Methoden in die `with`-Anweisung gescopt werden.

### Unscopables in Objekten

Sie können auch `[Symbol.unscopables]` für Ihre eigenen Objekte setzen.

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

### Vermeiden Sie die Verwendung eines Nicht-Null-Prototyp-Objekts als `[Symbol.unscopables]`

Das Deklarieren von `[Symbol.unscopables]` als einfaches Objekt, ohne dessen Prototyp zu eliminieren, kann subtile Fehler verursachen. Betrachten Sie den folgenden Code, der vor `[Symbol.unscopables]` funktionierte:

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

Um die Rückwärtskompatibilität zu wahren, entschieden Sie sich, eine `[Symbol.unscopables]`-Eigenschaft hinzuzufügen, wenn Sie weitere Eigenschaften zu `character` hinzufügen. Sie könnten dies naiv so machen:

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

Allerdings bricht der obige Code nun:

```js
with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "[object Undefined]"
}
```

Der Grund ist, dass beim Suchen nach `character[Symbol.unscopables].toString` die Funktion [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) zurückgegeben wird, die einen truthy Wert hat, wodurch der `toString()`-Aufruf in der `with()`-Anweisung referenziert `globalThis.toString()` — und da es ohne [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) aufgerufen wird, ist `this` `undefined`, was `[object Undefined]` zurückgibt.

Selbst wenn die Methode von `character` nicht überschrieben wird, wird sie unscopable, wodurch sich der Wert von `this` ändert.

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

Um dies zu beheben, stellen Sie stets sicher, dass `[Symbol.unscopables]` nur die Eigenschaften enthält, die Sie unscopable haben möchten, ohne `Object.prototype`-Eigenschaften.

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
