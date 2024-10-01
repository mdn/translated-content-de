---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Ein **`WeakSet`** ist eine Sammlung von speicherbereinigbaren Werten, einschließlich Objekten und [nicht-registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert im `WeakSet` kann nur einmal vorkommen. Er ist einzigartig in der Sammlung des `WeakSet`.

## Beschreibung

Werte von `WeakSets` müssen speicherbereinigbar sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können beliebig erstellt werden und haben keine Lebensdauer, sodass sie nicht gespeichert werden können. Objekte und [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können gespeichert werden, da sie speicherbereinigbar sind.

Die Hauptunterschiede zum {{jsxref("Set")}} Objekt sind:

- `WeakSet`s sind Sammlungen von **nur Objekten und Symbolen**. Sie können keine beliebigen Werte enthalten, wie es {{jsxref("Set")}}s können.
- Das `WeakSet` ist _schwach_, was bedeutet, dass Referenzen auf Objekte in einem `WeakSet` _schwach_ gehalten werden. Wenn keine anderen Referenzen auf einen im `WeakSet` gespeicherten Wert existieren, können diese Werte speicherbereinigt werden.

  > [!NOTE]
  > Dies bedeutet auch, dass es keine Liste der aktuell in der Sammlung gespeicherten Werte gibt. `WeakSets` sind nicht aufzählbar.

### Anwendungsfall: Erkennung von zyklischen Referenzen

Funktionen, die sich selbst rekursiv aufrufen, benötigen eine Möglichkeit, sich gegen zyklische Datenstrukturen abzusichern, indem sie verfolgen, welche Objekte bereits verarbeitet wurden.

`WeakSet`s sind ideal für diesen Zweck:

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

Hier wird bei der ersten Ausführung ein `WeakSet` erstellt und bei jedem folgenden Funktionsaufruf (unter Verwendung des internen Parameters `_refs`) weitergegeben.

Die Anzahl der Objekte oder deren Traversierreihenfolge ist unerheblich, daher ist ein `WeakSet` geeigneter (und leistungsfähiger) als ein {{jsxref("Set")}} zum Verfolgen von Objektreferenzen, insbesondere wenn eine sehr große Anzahl von Objekten beteiligt ist.

## Konstruktor

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : Erstellt ein neues `WeakSet` Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `WeakSet.prototype` definiert und werden von allen `WeakSet` Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakSet.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakSet` Instanzen ist der Anfangswert der {{jsxref("WeakSet/WeakSet", "WeakSet")}} Konstruktor.
- `WeakSet.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"WeakSet"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("WeakSet.prototype.add()")}}
  - : Fügt `value` zum `WeakSet` Objekt hinzu.
- {{jsxref("WeakSet.prototype.delete()")}}
  - : Entfernt `value` aus dem `WeakSet`. `WeakSet.prototype.has(value)` wird anschließend `false` zurückgeben.
- {{jsxref("WeakSet.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob `value` im `WeakSet` Objekt vorhanden ist oder nicht.

## Beispiele

### Verwendung des WeakSet Objekts

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

Beachten Sie, dass `foo !== bar`. Obwohl sie ähnliche Objekte sind, _sind sie nicht **dasselbe Objekt**_. Und so werden beide zur Menge hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
