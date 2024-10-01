---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.unscopables`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.unscopables`. Die {{jsxref("Statements/with", "with")}}-Anweisung sucht dieses Symbol im Scope-Objekt für eine Eigenschaft, die eine Sammlung von Eigenschaften enthält, die innerhalb der `with`-Umgebung nicht zu Bindungen werden sollen.

{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}

## Wert

Das bekannte Symbol `Symbol.unscopables`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das `[Symbol.unscopables]`-Symbol (zugänglich über `Symbol.unscopables`) kann für jedes Objekt definiert werden, um Eigenschaftsnamen davon auszuschließen, als lexikalische Variablen in [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen exponiert zu werden. Beachten Sie, dass bei Verwendung des [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) `with`-Anweisungen nicht verfügbar sind und dieses Symbol wahrscheinlich nicht benötigt wird.

Das Setzen einer Eigenschaft des `[Symbol.unscopables]`-Objekts auf `true` (oder einen {{Glossary("Truthy", "truthy")}} Wert) führt dazu, dass die entsprechende Eigenschaft des `with`-Scope-Objekts _unscopable_ wird und daher nicht in den `with`-Body-Scope eingeführt wird. Das Setzen einer Eigenschaft auf `false` (oder einen {{Glossary("Falsy", "falsy")}} Wert) macht sie _scopable_ und somit als lexikalische Scope-Variablen sichtbar.

Beim Entscheiden, ob `x` unscopable ist, wird die gesamte Prototypkette der `[Symbol.unscopables]`-Eigenschaft nach einer Eigenschaft namens `x` durchsucht. Dies bedeutet, dass wenn Sie `[Symbol.unscopables]` als einfaches Objekt deklarieren, `Object.prototype`-Eigenschaften wie [`toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) ebenfalls unscopable würden, was Rückwärtsinkompatibilitäten für Altkode verursachen könnte, der davon ausgeht, dass diese Eigenschaften normalerweise im Scope sind (siehe [ein Beispiel unten](#avoid_using_a_non-null-prototype_object_as_symbol.unscopables)). Es wird empfohlen, dass Ihre benutzerdefinierte `[Symbol.unscopables]`-Eigenschaft `null` als ihren Prototyp hat, wie es bei [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) der Fall ist.

Dieses Protokoll wird auch von DOM-APIs wie [`Element.prototype.append()`](/de/docs/Web/API/Element/append) verwendet.

## Beispiele

### Scoping in with-Anweisungen

Der folgende Code funktioniert in ES5 und darunter einwandfrei. Aber in ECMAScript 2015 wurde die Methode {{jsxref("Array.prototype.values()")}} eingeführt. Das bedeutet, dass innerhalb einer `with`-Umgebung "values" jetzt die `Array.prototype.values()`-Methode wäre und nicht die Variable außerhalb der `with`-Anweisung.

```js
var values = [];

with (values) {
  // If [Symbol.unscopables] did not exist, values would become
  // Array.prototype.values starting with ECMAScript 2015.
  // And an error would have occurred.
  values.push("something");
}
```

Der Code, der `with (values)` enthält, verursachte Probleme auf einigen Websites in Firefox, als `Array.prototype.values()` hinzugefügt wurde ([Firefox-Bug 883914](https://bugzil.la/883914)). Darüber hinaus bedeutet dies, dass jede zukünftige Hinzufügung von Array-Methoden zu Unterbrechungen führen könnte, wenn sie implizit den `with`-Scope ändern. Daher wurde das `[Symbol.unscopables]`-Symbol eingeführt und auf `Array` als [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) implementiert, um zu verhindern, dass einige der Array-Methoden in die `with`-Anweisung gescoped werden.

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

### Verwenden Sie kein Objekt mit nicht-nullbarem Prototyp als `[Symbol.unscopables]`

Das Deklarieren von `[Symbol.unscopables]` als einfaches Objekt, ohne seinen Prototyp zu eliminieren, kann subtile Fehler verursachen. Betrachten Sie den folgenden Code, der vor `[Symbol.unscopables]` funktionierte:

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

Um die Rückwärtskompatibilität zu bewahren, entschieden Sie sich, eine `[Symbol.unscopables]`-Eigenschaft hinzuzufügen, wenn Sie weitere Eigenschaften zu `character` hinzugefügt haben. Sie könnten dies naiv tun, wie:

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

Jedoch bricht der obige Code jetzt:

```js
with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "[object Undefined]"
}
```

Dies liegt daran, dass beim Nachschlagen von `character[Symbol.unscopables].toString` [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) zurückgegeben wird, was ein truthy Wert ist, wodurch der `toString()`-Aufruf in der `with()`-Anweisung `globalThis.toString()` referenziert — und da es ohne ein [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) aufgerufen wird, ist `this` `undefined`, wodurch `[object Undefined]` zurückgegeben wird.

Auch wenn die Methode von `character` nicht überschrieben wird, wird das Unscopable-Machen den Wert von `this` ändern.

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

Um dies zu beheben, stellen Sie immer sicher, dass `[Symbol.unscopables]` nur die Eigenschaften enthält, die Sie unscopable machen möchten, ohne `Object.prototype`-Eigenschaften.

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
