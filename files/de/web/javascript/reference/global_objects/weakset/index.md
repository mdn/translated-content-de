---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Ein **`WeakSet`** ist eine Sammlung von Müll-sammelbaren Werten, einschließlich Objekten und [nicht registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert im `WeakSet` kann nur einmal vorkommen. Er ist einzigartig in der `WeakSet`-Sammlung.

## Beschreibung

Werte von WeakSets müssen Müll-sammelbar sein. Die meisten [primitiven Datentypen](/de/docs/Glossary/Primitive) können beliebig erstellt werden und haben keine Lebensdauer, sodass sie nicht gespeichert werden können. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können gespeichert werden, da sie Müll-sammelbar sind.

Die Hauptunterschiede zu dem {{jsxref("Set")}}-Objekt sind:

- `WeakSet`s sind Sammlungen von **nur Objekten und Symbolen**. Sie können keine beliebigen Werte eines Typs enthalten, wie es {{jsxref("Set")}}s können.
- Das `WeakSet` ist _schwach_, was bedeutet, dass Referenzen auf Objekte in einem `WeakSet` _schwach_ gehalten werden. Wenn keine weiteren Referenzen auf einen in `WeakSet` gespeicherten Wert existieren, können diese Werte Müll-sammelbar sein.

  > [!NOTE]
  > Dies bedeutet auch, dass es keine Liste der aktuell in der Sammlung gespeicherten Werte gibt. `WeakSets` sind nicht aufzählbar.

### Anwendungsfall: Erkennen von zyklischen Referenzen

Funktionen, die sich rekursiv aufrufen, benötigen eine Möglichkeit, sich vor zyklischen Datenstrukturen zu schützen, indem sie verfolgen, welche Objekte bereits verarbeitet wurden.

`WeakSet`s sind hierfür ideal:

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

Hier wird ein `WeakSet` beim ersten Durchlauf erstellt und mit jedem folgenden Funktionsaufruf weitergegeben (über den internen `_refs`-Parameter).

Die Anzahl der Objekte oder ihre Durchlaufreihenfolge ist unerheblich, daher ist ein `WeakSet` geeigneter (und performanter) als ein {{jsxref("Set")}}, um Objekt-Referenzen zu verfolgen, insbesondere wenn es um eine sehr große Anzahl von Objekten geht.

## Konstruktor

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : Erstellt ein neues `WeakSet`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `WeakSet.prototype` definiert und werden von allen `WeakSet`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakSet.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `WeakSet`-Instanzen ist der Anfangswert der {{jsxref("WeakSet/WeakSet", "WeakSet")}}-Konstruktor.
- `WeakSet.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakSet"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("WeakSet.prototype.add()")}}
  - : Fügt `value` zum `WeakSet`-Objekt hinzu.
- {{jsxref("WeakSet.prototype.delete()")}}
  - : Entfernt `value` aus dem `WeakSet`. `WeakSet.prototype.has(value)` wird danach `false` zurückgeben.
- {{jsxref("WeakSet.prototype.has()")}}
  - : Gibt ein boolean zurück, das bestätigt, ob `value` im `WeakSet`-Objekt vorhanden ist oder nicht.

## Beispiele

### Verwendung des WeakSet-Objekts

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

Beachten Sie, dass `foo !== bar`. Obwohl sie ähnliche Objekte sind, _sind sie nicht **dasselbe Objekt**_. Und so werden sie beide zum Satz hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
