---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`Symbol.unscopables`** statische Dateneigenschaft repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.unscopables`. Die {{jsxref("Statements/with", "with")}}-Anweisung sucht dieses Symbol im Scope-Objekt nach einer Eigenschaft ab, die eine Sammlung von Eigenschaften enthält, die keine Bindungen innerhalb der `with`-Umgebung werden sollten.

{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}

## Wert

Das wohlbekannte Symbol `Symbol.unscopables`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das `[Symbol.unscopables]`-Symbol (über `Symbol.unscopables` zugänglich) kann auf jedem Objekt definiert werden, um Eigenschaftsnamen von der Exposition als lexikalische Variablen in [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen auszuschließen. Beachten Sie, dass bei der Verwendung des [Strict Modes](/de/docs/Web/JavaScript/Reference/Strict_mode) `with`-Anweisungen nicht verfügbar sind und dieses Symbol wahrscheinlich nicht benötigt wird.

Wenn eine Eigenschaft des `[Symbol.unscopables]`-Objekts auf `true` (oder einen anderen [truthy](/de/docs/Glossary/Truthy) Wert) gesetzt wird, wird die entsprechende Eigenschaft des `with`-Scope-Objekts _unscopable_ und daher nicht im `with`-Body-Scope eingeführt. Wenn eine Eigenschaft auf `false` (oder einen anderen [falsy](/de/docs/Glossary/Falsy) Wert) gesetzt wird, wird sie _scopable_ und erscheint somit als lexikalische Scope-Variablen.

Beim Entscheiden, ob `x` unscopable ist, wird der gesamte Prototypen-Chain der `[Symbol.unscopables]`-Eigenschaft nach einer Eigenschaft namens `x` durchsucht. Das bedeutet, wenn Sie `[Symbol.unscopables]` als einfaches Objekt deklariert haben, würden `Object.prototype`-Eigenschaften wie [`toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) ebenfalls unscopable werden, was zu Rückwärtskompatibilitätsproblemen für Legacy-Code führen kann, der davon ausgeht, dass diese Eigenschaften normalerweise gescoped sind (siehe [ein Beispiel unten](#avoid_using_a_non-null-prototype_object_as_symbol.unscopables)). Es wird empfohlen, dass Ihre benutzerdefinierte `[Symbol.unscopables]`-Eigenschaft `null` als ihren Prototypen hat, so wie es [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) tut.

Dieses Protokoll wird auch von DOM-APIs genutzt, wie z.B. [`Element.prototype.append()`](/de/docs/Web/API/Element/append).

## Beispiele

### Scoping in with-Anweisungen

Der folgende Code funktioniert in ES5 und älteren Versionen einwandfrei. In ECMAScript 2015 wurde jedoch die {{jsxref("Array.prototype.values()")}}-Methode eingeführt. Das bedeutet, dass innerhalb einer `with`-Umgebung "values" nun die `Array.prototype.values()`-Methode wäre und nicht die Variable außerhalb der `with`-Anweisung.

```js
var values = [];

with (values) {
  // If [Symbol.unscopables] did not exist, values would become
  // Array.prototype.values starting with ECMAScript 2015.
  // And an error would have occurred.
  values.push("something");
}
```

Der Code, der `with (values)` enthält, führte dazu, dass einige Websites in Firefox nicht mehr funktionierten, als `Array.prototype.values()` hinzugefügt wurde ([Firefox Bug 883914](https://bugzil.la/883914)). Darüber hinaus bedeutet dies, dass jede zukünftige Hinzufügung von Array-Methoden brechend sein kann, wenn sie implizit den `with`-Scope ändert. Daher wurde das `[Symbol.unscopables]`-Symbol eingeführt und auf `Array` als [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) implementiert, um zu verhindern, dass einige der Array-Methoden in die `with`-Anweisungen gescoped werden.

### Unscopables in Objekten

Sie können `[Symbol.unscopables]` auch für Ihre eigenen Objekte setzen.

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

### Vermeiden Sie die Verwendung eines Objekts mit nicht-nulligem Prototyp als `[Symbol.unscopables]`

Die Deklaration von `[Symbol.unscopables]` als einfaches Objekt ohne Ausschluss seines Prototyps kann subtile Fehler verursachen. Betrachten Sie den folgenden Code, der vor `[Symbol.unscopables]` funktionierte:

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

Um die Rückwärtskompatibilität zu bewahren, entschieden Sie sich, eine `[Symbol.unscopables]`-Eigenschaft hinzuzufügen, als Sie mehr Eigenschaften zu `character` hinzufügten. Sie könnten dies naiv tun:

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

Der obige Code funktioniert jedoch jetzt nicht mehr:

```js
with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "[object Undefined]"
}
```

Dies liegt daran, dass beim Nachschlagen von `character[Symbol.unscopables].toString` [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) zurückgibt, was ein truthy Wert ist, und somit wird der `toString()`-Aufruf in der `with()`-Anweisung `globalThis.toString()` zugeordnet – und da er ohne ein [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) aufgerufen wird, ist `this` `undefined`, was `[object Undefined]` zurückgibt.

Selbst wenn die Methode nicht von `character` überschrieben wird, wird das Unscopable-Machen den Wert von `this` ändern.

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

Um dies zu beheben, stellen Sie sicher, dass `[Symbol.unscopables]` nur Eigenschaften enthält, die Sie unscopable machen möchten, ohne `Object.prototype`-Eigenschaften.

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
