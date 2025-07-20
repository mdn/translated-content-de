---
title: Symbol.unscopables
short-title: unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Dateneigenschaft **`Symbol.unscopables`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.unscopables`. Die {{jsxref("Statements/with", "with")}}-Anweisung sucht dieses Symbol im Scope-Objekt nach einer Eigenschaft, die eine Sammlung von Eigenschaften enthält, die nicht innerhalb der `with`-Umgebung zu Bindungen werden sollen.

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

Das bekannte Symbol `Symbol.unscopables`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das `[Symbol.unscopables]`-Symbol (zugreifbar über `Symbol.unscopables`) kann auf jedem Objekt definiert werden, um Eigenschaftsnamen davon auszuschließen, als lexikalische Variablen in [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen exponiert zu werden. Beachten Sie, dass bei Verwendung des [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) `with`-Anweisungen nicht verfügbar sind und dieses Symbol wahrscheinlich nicht benötigt wird.

Wenn eine Eigenschaft des `[Symbol.unscopables]`-Objekts auf `true` (oder einen anderen {{Glossary("Truthy", "truthy")}} Wert) gesetzt wird, wird die entsprechende Eigenschaft des `with`-Scope-Objekts _unscopable_ und somit nicht im `with`-Body-Scope eingeführt. Wenn eine Eigenschaft auf `false` (oder einen {{Glossary("Falsy", "falsy")}} Wert) gesetzt wird, wird sie _scopable_ und erscheint somit als Variablen im lexikalischen Scope.

Bei der Entscheidung, ob `x` unscopable ist, wird die gesamte Prototypkette der `[Symbol.unscopables]`-Eigenschaft nach einer Eigenschaft namens `x` durchsucht. Dies bedeutet, dass, wenn Sie `[Symbol.unscopables]` als ein einfaches Objekt deklarieren, `Object.prototype`-Eigenschaften wie [`toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) ebenfalls unscopable werden könnten, was zu rückwärts Inkompatibilitäten für älteren Code führen kann, der annimmt, dass diese Eigenschaften normalerweise gescopet sind (siehe [ein Beispiel unten](#avoid_using_a_non-null-prototype_object_as_symbol.unscopables)). Es wird empfohlen, Ihre benutzerdefinierte `[Symbol.unscopables]`-Eigenschaft so zu gestalten, dass ihr Prototyp `null` ist, wie es bei [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) der Fall ist.

Dieses Protokoll wird auch von DOM-APIs verwendet, wie etwa von [`Element.prototype.append()`](/de/docs/Web/API/Element/append).

## Beispiele

### Scoping in with-Anweisungen

Der folgende Code funktioniert in ES5 und darunter einwandfrei. Allerdings wurde in ECMAScript 2015 die Methode {{jsxref("Array.prototype.values()")}} eingeführt. Das bedeutet, dass innerhalb einer `with`-Umgebung "values" jetzt die `Array.prototype.values()`-Methode wäre und nicht die Variable außerhalb der `with`-Anweisung.

```js
var values = [];

with (values) {
  // If [Symbol.unscopables] did not exist, values would become
  // Array.prototype.values starting with ECMAScript 2015.
  // And an error would have occurred.
  values.push("something");
}
```

Der Code, der `with (values)` enthält, verursachte auf einigen Webseiten Fehlfunktionen in Firefox, als `Array.prototype.values()` hinzugefügt wurde ([Firefox Bug 883914](https://bugzil.la/883914)). Darüber hinaus impliziert dies, dass jede zukünftige Methode, die zu Arrays hinzugefügt wird, Änderungen bei `with`-Scopes verursachen könnte. Daher wurde das `[Symbol.unscopables]`-Symbol eingeführt und auf `Array` als [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) implementiert, um zu verhindern, dass einige der Array-Methoden in die `with`-Anweisung gescopet werden.

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

### Vermeiden Sie die Verwendung eines Nicht-Null-Prototypen als `[Symbol.unscopables]`

Das Deklarieren von `[Symbol.unscopables]` als einfaches Objekt ohne Eliminierung seines Prototyps kann subtile Fehler verursachen. Betrachten Sie den folgenden Code, der vor `[Symbol.unscopables]` funktioniert hat:

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

Um die Rückwärtskompatibilität zu erhalten, haben Sie beschlossen, eine `[Symbol.unscopables]`-Eigenschaft hinzuzufügen, wenn Sie weitere Eigenschaften zu `character` hinzufügen. Sie könnten es naiv so tun:

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

Der obige Code bricht jedoch jetzt:

```js
with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "[object Undefined]"
}
```

Dies liegt daran, dass bei der Suche nach `character[Symbol.unscopables].toString` [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) zurückgegeben wird, was ein truthy-Wert ist und somit den `toString()`-Aufruf in der `with()`-Anweisung dazu bringt, sich auf `globalThis.toString()` zu beziehen — und da es ohne ein [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) aufgerufen wird, ist `this` `undefined`, was die Rückgabe von `[object Undefined]` zur Folge hat.

Auch wenn die Methode nicht durch `character` überschrieben wird, wird das Unscopable-Machen den Wert von `this` ändern.

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

Um dies zu beheben, stellen Sie sicher, dass `[Symbol.unscopables]` nur die Eigenschaften enthält, die Sie als unscopable wünschen, ohne `Object.prototype`-Eigenschaften.

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
