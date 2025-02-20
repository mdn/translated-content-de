---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische **`Symbol.unscopables`** Daten-Eigenschaft repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.unscopables`. Die Anweisung {{jsxref("Statements/with", "with")}} sucht dieses Symbol im Scope-Objekt nach einer Eigenschaft, die eine Sammlung von Eigenschaften enthält, die nicht zu Bindungen innerhalb der `with`-Umgebung werden sollen.

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

Das `[Symbol.unscopables]`-Symbol (abgerufen über `Symbol.unscopables`) kann auf jedem Objekt definiert werden, um Eigenschaftsnamen davon auszuschließen, als lexikalische Variablen in [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen exponiert zu werden. Beachten Sie, dass bei Verwendung des [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) `with`-Anweisungen nicht verfügbar sind und dieses Symbol wahrscheinlich nicht benötigt wird.

Wird eine Eigenschaft des `[Symbol.unscopables]`-Objekts auf `true` (oder einen beliebigen {{Glossary("Truthy", "truthy")}}-Wert) gesetzt, wird die entsprechende Eigenschaft des `with`-Scope-Objekts _unscopable_ und daher nicht in den `with`-Body-Scope eingeführt. Wird eine Eigenschaft auf `false` (oder einen beliebigen {{Glossary("Falsy", "falsy")}}-Wert) gesetzt, wird sie _scopable_ und erscheint somit als lexikalische Scope-Variable.

Bei der Entscheidung, ob `x` unscopable ist, wird die gesamte Prototypenkette der `[Symbol.unscopables]`-Eigenschaft nach einer Eigenschaft namens `x` durchsucht. Dies bedeutet, dass, wenn Sie `[Symbol.unscopables]` als einfaches Objekt deklariert haben, `Object.prototype`-Eigenschaften wie [`toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) ebenfalls unscopable werden, was zu Rückwärtskompatibilitätsproblemen für älteren Code führen kann, der davon ausgeht, dass diese Eigenschaften normalerweise gescoped sind (siehe [ein Beispiel unten](#avoid_using_a_non-null-prototype_object_as_symbol.unscopables)). Es wird empfohlen, sicherzustellen, dass Ihre benutzerdefinierte `[Symbol.unscopables]`-Eigenschaft `null` als Prototyp hat, wie es bei [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) der Fall ist.

Dieses Protokoll wird auch von DOM-APIs wie [`Element.prototype.append()`](/de/docs/Web/API/Element/append) verwendet.

## Beispiele

### Scoping in with-Anweisungen

Der folgende Code funktioniert in ES5 und älteren Versionen problemlos. Mit ECMAScript 2015 wurde jedoch die Methode {{jsxref("Array.prototype.values()")}} eingeführt. Das bedeutet, dass innerhalb einer `with`-Umgebung "values" nun die Methode `Array.prototype.values()` wäre und nicht die Variable außerhalb der `with`-Anweisung.

```js
var values = [];

with (values) {
  // If [Symbol.unscopables] did not exist, values would become
  // Array.prototype.values starting with ECMAScript 2015.
  // And an error would have occurred.
  values.push("something");
}
```

Der Code mit `with (values)` verursachte auf einigen Webseiten in Firefox Probleme, als `Array.prototype.values()` hinzugefügt wurde ([Firefox Bug 883914](https://bugzil.la/883914)). Zusätzlich bedeutet dies, dass jede zukünftige Array-Methoden-Erweiterung breaking sein könnte, wenn sie den `with`-Scope implizit ändert. Daher wurde das `[Symbol.unscopables]`-Symbol eingeführt und in `Array` als [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) implementiert, um zu verhindern, dass einige der Array-Methoden in die `with`-Anweisung gescoped werden.

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

### Vermeiden Sie die Verwendung eines Objekts mit nicht-null-Prototyp als `[Symbol.unscopables]`

Das Deklarieren von `[Symbol.unscopables]` als einfaches Objekt ohne Eliminierung seines Prototyps kann subtile Fehler verursachen. Betrachten Sie den folgenden Code, der vor `[Symbol.unscopables]` funktionierte:

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

Um die Rückwärtskompatibilität zu erhalten, haben Sie sich entschieden, eine `[Symbol.unscopables]`-Eigenschaft hinzuzufügen, wenn Sie weitere Eigenschaften zu `character` hinzufügen. Sie könnten dies naiv so tun:

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

Der obige Code führt jedoch nun zu einem Fehler:

```js
with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda says: "[object Undefined]"
}
```

Der Grund dafür ist, dass bei der Suche nach `character[Symbol.unscopables].toString` [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) zurückgegeben wird, was ein truthy-Wert ist. Dadurch verweist der `toString()`-Aufruf in der `with()`-Anweisung auf `globalThis.toString()` — und da er ohne ein [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) aufgerufen wird, ist `this` `undefined`, was `[object Undefined]` zurückgibt.

Auch wenn die Methode von `character` nicht überschrieben ist, führt das Unscopable-Machen zu einer Änderung des Werts von `this`.

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

Um dies zu beheben, stellen Sie sicher, dass `[Symbol.unscopables]` nur Eigenschaften enthält, die Sie als unscopable kennzeichnen möchten, ohne `Object.prototype`-Eigenschaften.

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
