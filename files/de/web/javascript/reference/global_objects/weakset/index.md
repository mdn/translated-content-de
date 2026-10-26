---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Ein **`WeakSet`** ist eine Sammlung von Werten, die vom Garbage Collector bereinigt werden können. Dazu gehören Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Jeder Wert kann in einem `WeakSet` nur einmal vorkommen.

## Beschreibung

Werte in WeakSets müssen vom Garbage Collector bereinigt werden können. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können beliebig erzeugt werden und haben keine Lebensdauer, weshalb sie nicht gespeichert werden können. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können gespeichert werden, da sie vom Garbage Collector bereinigt werden können.

Die wichtigsten Unterschiede zum {{jsxref("Set")}}-Objekt sind:

- `WeakSet`s sind Sammlungen, die **nur Objekte und Symbole** enthalten. Anders als {{jsxref("Set")}}s können sie keine beliebigen Werte anderer Typen enthalten.
- Ein `WeakSet` ist _schwach_: Referenzen auf Objekte in einem `WeakSet` werden _schwach_ gehalten. Wenn keine anderen Referenzen auf einen im `WeakSet` gespeicherten Wert vorhanden sind, kann dieser Wert vom Garbage Collector bereinigt werden.

  > [!NOTE]
  > Das bedeutet auch, dass es keine Liste der aktuell in der Sammlung gespeicherten Werte gibt. `WeakSets` sind nicht aufzählbar.

### Gleichheit von Werten

Wie bei einem regulären `Set` basiert die Gleichheit von Werten auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. Da `WeakSet` nur Objekte und Symbole enthalten kann, entspricht dies dem `===`-Operator. Bei Objekten basiert die Gleichheit somit auf der Objektidentität: Sie werden anhand ihrer {{Glossary("Object_reference", "Referenz")}} verglichen, nicht anhand ihres Werts.

## Konstruktor

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : Erstellt ein neues `WeakSet`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `WeakSet.prototype` definiert und werden von allen `WeakSet`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "WeakSet.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `WeakSet`-Instanzen ist der Anfangswert der {{jsxref("WeakSet/WeakSet", "WeakSet")}}-Konstruktor.
- `WeakSet.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"WeakSet"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("WeakSet.prototype.add()")}}
  - : Fügt den angegebenen Wert zu diesem Set hinzu, sofern er noch nicht vorhanden ist.
- {{jsxref("WeakSet.prototype.delete()")}}
  - : Entfernt den angegebenen Wert aus diesem Set, sofern er darin vorhanden ist.
- {{jsxref("WeakSet.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der angegebene Wert in diesem `WeakSet` vorhanden ist.

## Beispiele

### Das WeakSet-Objekt verwenden

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

Beachten Sie, dass `foo !== bar` gilt. Obwohl es sich um ähnliche Objekte handelt, sind sie _nicht **dasselbe Objekt**_. Daher werden beide zum Set hinzugefügt.

### Zirkuläre Referenzen erkennen

Funktionen, die sich rekursiv selbst aufrufen, müssen sich vor zirkulären Datenstrukturen schützen können. Dazu verfolgen sie, welche Objekte bereits verarbeitet wurden.

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

Hier wird beim ersten Durchlauf ein `WeakSet` erstellt und bei jedem nachfolgenden Funktionsaufruf über den internen Parameter `_refs` weitergegeben.

Die Anzahl der Objekte und die Reihenfolge, in der sie durchlaufen werden, sind unerheblich. Daher eignet sich ein `WeakSet` zum Verfolgen von Objektreferenzen besser als ein {{jsxref("Set")}} und ist leistungsfähiger, insbesondere wenn sehr viele Objekte beteiligt sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `WeakSet` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
