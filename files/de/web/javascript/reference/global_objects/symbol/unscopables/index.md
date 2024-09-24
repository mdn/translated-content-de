---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.unscopables`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.unscopables`. Die {{jsxref("Statements/with", "with")}}-Anweisung sucht dieses Symbol auf dem Gültigkeitsbereichsobjekt für eine Eigenschaft, die eine Sammlung von Eigenschaften enthält, die nicht innerhalb der `with`-Umgebung als Bindungen erscheinen sollen.

{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}

## Wert

Das bekannte Symbol `Symbol.unscopables`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das `[Symbol.unscopables]`-Symbol (zugänglich über `Symbol.unscopables`) kann auf jedem Objekt definiert werden, um Eigenschaftsnamen davon auszuschließen, in [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen als lexikalische Variablen offengelegt zu werden. Beachten Sie, dass bei Verwendung des [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) `with`-Anweisungen nicht verfügbar sind und dieses Symbol wahrscheinlich nicht benötigt wird.

Das Setzen einer Eigenschaft des `[Symbol.unscopables]`-Objekts auf `true` (oder einen beliebigen [truthy](/de/docs/Glossary/Truthy) Wert) macht die entsprechende Eigenschaft des `with`-Gültigkeitsbereichsobjekts _unscopable_ und wird daher nicht in den Gültigkeitsbereich des `with`-Körpers eingeführt. Das Setzen einer Eigenschaft auf `false` (oder einen beliebigen [falsy](/de/docs/Glossary/Falsy) Wert) macht sie _scopable_ und lässt sie als lexikalische Gültigkeitsbereichsvariablen erscheinen.

Wenn entschieden wird, ob `x` unscopable ist, wird die gesamte Prototypenkette der `[Symbol.unscopables]`-Eigenschaft nach einer Eigenschaft namens `x` durchsucht. Das bedeutet, wenn Sie `[Symbol.unscopables]` als einfaches Objekt deklariert hätten, würden `Object.prototype`-Eigenschaften wie [`toString`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) ebenfalls unscopable werden, was möglicherweise Rückwärtskompatibilitätsprobleme für Altkod verursacht, der davon ausgeht, dass diese Eigenschaften normalerweise gescoped sind (siehe [ein Beispiel unten](#avoid_using_a_non-null-prototype_object_as_symbol.unscopables)). Es wird empfohlen, Ihre benutzerdefinierte `[Symbol.unscopables]`-Eigenschaft ein `null`-Prototyp haben zu lassen, wie es bei [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) der Fall ist.

Dieses Protokoll wird auch von DOM-APIs genutzt, wie z.B. [`Element.prototype.append()`](/de/docs/Web/API/Element/append).

## Beispiele

### Scoping in with-Anweisungen

Der folgende Code funktioniert einwandfrei in ES5 und darunter. Allerdings wurde in ECMAScript 2015 die Methode {{jsxref("Array.prototype.values()")}} eingeführt. Das bedeutet, dass innerhalb einer `with`-Umgebung "values" nun die `Array.prototype.values()`-Methode wäre und nicht die Variable außerhalb der `with`-Anweisung.

```js
var values = [];

with (values) {
  // Wenn [Symbol.unscopables] nicht existieren würde, würde values
  // mit ECMAScript 2015 zu Array.prototype.values werden.
  // Und ein Fehler wäre aufgetreten.
  values.push("something");
}
```

Der Code, der `with (values)` enthält, verursachte bei einigen Websites Funktionsstörungen in Firefox, als `Array.prototype.values()` hinzugefügt wurde ([Firefox Bug 883914](https://bugzil.la/883914)). Dies impliziert weiterhin, dass jede zukünftige Hinzufügung von Array-Methoden brechend sein könnte, wenn sie implizit den `with`-Gültigkeitsbereich ändert. Daher wurde das `[Symbol.unscopables]`-Symbol eingeführt und auf `Array` als [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) implementiert, um zu verhindern, dass einige der Array-Methoden in die `with`-Anweisung gescoped werden.

### Unscopables in Objekten

Sie können `[Symbol.unscopables]` auch für Ihre eigenen Objekte festlegen.

```js
const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
};

obj[Symbol.unscopables] = {
  // Das Objekt soll `null`-Prototyp haben, um
  // `Object.prototype`-Methoden daran zu hindern, unscopable zu sein
  __proto__: null,
  // `foo` wird scopable sein
  foo: false,
  // `bar` wird unscopable sein
  bar: true,
  // `baz` ist ausgelassen; da `undefined` falsy ist, ist es ebenfalls scopable (Standard)
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
  console.log(baz); // 3
}
```

### Vermeiden Sie die Verwendung eines Objekts mit einem nicht-null-Prototyp als `[Symbol.unscopables]`

Die Deklaration von `[Symbol.unscopables]` als ein einfaches Objekt, ohne dessen Prototyp zu eliminieren, kann subtile Fehler verursachen. Betrachten Sie den folgenden Code, der vor `[Symbol.unscopables]` funktioniert:

```js
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
};

with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda sagt: "Use with statements, you must not"
}
```

Um die Rückwärtskompatibilität zu wahren, könnten Sie am Ende eine `[Symbol.unscopables]`-Eigenschaft hinzufügen, wenn Sie weitere Eigenschaften zu `character` hinzufügen. Sie könnten es naiv so machen:

```js example-bad
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
  student: "Luke",
  [Symbol.unscopables]: {
    // `student` unscopable machen
    student: true,
  },
};
```

Der obige Code wird jedoch nun fehlerhaft:

```js
with (character) {
  console.log(name + ' says: "' + toString() + '"'); // Yoda sagt: "[object Undefined]"
}
```

Dies liegt daran, dass beim Nachschlagen von `character[Symbol.unscopables].toString` es [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) zurückgibt, was ein truthy Wert ist. Dies macht den `toString()`-Aufruf in der `with()`-Anweisung zu einem Verweis auf `globalThis.toString()` — und da es ohne [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) aufgerufen wird, ist `this` `undefined`, was `[object Undefined]` zurückgibt.

Selbst wenn die Methode nicht von `character` überschrieben wird, wird das Unscopable-Machen den Wert von `this` ändern.

```js
const proto = {};
const obj = { __proto__: proto };

with (proto) {
  console.log(isPrototypeOf(obj)); // true; `isPrototypeOf` ist gescoped und `this` ist `proto`
}

proto[Symbol.unscopables] = {};

with (proto) {
  console.log(isPrototypeOf(obj)); // TypeError: Cannot convert undefined or null to object
  // `isPrototypeOf` ist unscoped und `this` ist undefined
}
```

Um dies zu beheben, stellen Sie immer sicher, dass `[Symbol.unscopables]` nur Eigenschaften enthält, die Sie als unscopable wünschen, ohne `Object.prototype`-Eigenschaften.

```js example-good
const character = {
  name: "Yoda",
  toString: function () {
    return "Use with statements, you must not";
  },
  student: "Luke",
  [Symbol.unscopables]: {
    // Das Objekt soll `null`-Prototyp haben, um
    // `Object.prototype`-Methoden daran zu hindern, unscopable zu sein
    __proto__: null,
    // `student` unscopable machen
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
