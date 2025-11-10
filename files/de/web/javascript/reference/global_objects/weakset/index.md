---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

Ein **`WeakSet`** ist eine Sammlung von garbage-collectierbaren Werten, einschließlich Objekten und [nicht registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert im `WeakSet` kann nur einmal vorkommen. Er ist einzigartig in der Sammlung des `WeakSet`.

## Beschreibung

Werte in WeakSets müssen garbage-collectierbar sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können willkürlich erstellt werden und haben keine Lebensdauer, daher können sie nicht gespeichert werden. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können gespeichert werden, da sie garbage-collectierbar sind.

Die Hauptunterschiede zum {{jsxref("Set")}}-Objekt sind:

- `WeakSet`s sind Sammlungen von **nur Objekten und Symbolen**. Sie können keine beliebigen Werte beliebigen Typs enthalten, wie es bei {{jsxref("Set")}}s der Fall ist.
- Der `WeakSet` ist _schwach_, was bedeutet, dass Referenzen auf Objekte in einem `WeakSet` _schwach_ gehalten werden. Wenn keine anderen Referenzen auf einen im `WeakSet` gespeicherten Wert existieren, können diese Werte garbage-collectiert werden.

  > [!NOTE]
  > Dies bedeutet auch, dass es keine Liste der aktuell in der Sammlung gespeicherten Werte gibt. `WeakSets` sind nicht aufzählbar.

### Schlüsselgleichheit

Wie bei regulären `Set`s basiert die Wertgleichheit auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus, der dem `===`-Operator entspricht, da `WeakSet` nur Objekt- und Symbolwerte enthalten kann. Das bedeutet, dass bei Objektwerten die Gleichheit auf der Objektidentität basiert. Sie werden anhand der {{Glossary("Object_reference", "Referenz")}} verglichen, nicht anhand des Werts.

## Konstruktor

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : Erstellt ein neues `WeakSet`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `WeakSet.prototype` definiert und werden von allen `WeakSet`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakSet.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakSet`-Instanzen ist der Anfangswert der {{jsxref("WeakSet/WeakSet", "WeakSet")}}-Konstruktor.
- `WeakSet.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakSet"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("WeakSet.prototype.add()")}}
  - : Fügt den angegebenen Wert in dieses Set ein, falls er nicht bereits vorhanden ist.
- {{jsxref("WeakSet.prototype.delete()")}}
  - : Entfernt den angegebenen Wert aus diesem Set, falls er sich im Set befindet.
- {{jsxref("WeakSet.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der angegebene Wert in diesem `WeakSet` vorhanden ist oder nicht.

## Beispiele

### Verwenden des WeakSet-Objekts

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // removes foo from the set
ws.has(foo); // false, foo has been removed
ws.has(bar); // true, bar is retained
```

Beachten Sie, dass `foo !== bar`. Obwohl sie ähnliche Objekte sind, _sind sie nicht **dasselbe Objekt**_. Und so werden beide zum Set hinzugefügt.

### Erkennen von zirkulären Referenzen

Funktionen, die sich rekursiv aufrufen, benötigen eine Möglichkeit, gegen zirkuläre Datenstrukturen zu schützen, indem sie verfolgen, welche Objekte bereits verarbeitet wurden.

`WeakSet`s sind für diesen Zweck ideal:

```js
// Execute a callback on everything stored inside an object
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // Avoid infinite recursion
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);
  if (typeof subject === "object" && subject) {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
    _refs.delete(subject);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // Circular reference!
execRecursively((obj) => console.log(obj), foo);
```

Hier wird bei der ersten Ausführung ein `WeakSet` erstellt und bei jedem nachfolgenden Funktionsaufruf (unter Verwendung des internen `_refs`-Parameters) weitergegeben.

Die Anzahl der Objekte oder ihre Traversierung ist unwesentlich, daher ist ein `WeakSet` geeigneter (und leistungsfähiger) als ein {{jsxref("Set")}} zum Verfolgen von Objektreferenzen, insbesondere wenn eine sehr große Anzahl von Objekten beteiligt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
