---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Ein **`WeakSet`** ist eine Sammlung von speicherbereinigbaren Werten, einschließlich Objekten und [nicht registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert im `WeakSet` kann nur einmal vorkommen. Er ist einzigartig in der Sammlung des `WeakSet`.

## Beschreibung

Werte von WeakSets müssen speicherbereinigbar sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können beliebig erstellt werden und haben keine Lebensdauer, weshalb sie nicht gespeichert werden können. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können gespeichert werden, da sie speicherbereinigbar sind.

Die Hauptunterschiede zum {{jsxref("Set")}}-Objekt sind:

- `WeakSet`s sind Sammlungen aus **nur Objekten und Symbolen**. Sie können keine willkürlichen Werte eines beliebigen Typs enthalten, wie es {{jsxref("Set")}}s können.
- Der `WeakSet` ist _schwach_, was bedeutet, dass Referenzen auf Objekte in einem `WeakSet` _schwach_ gehalten werden. Wenn keine anderen Referenzen auf einen im `WeakSet` gespeicherten Wert existieren, können diese Werte speicherbereinigt werden.

  > [!NOTE]
  > Das bedeutet auch, dass es keine Liste der aktuell in der Sammlung gespeicherten Werte gibt. `WeakSets` sind nicht aufzählbar.

### Anwendungsfall: Erkennung von zirkulären Referenzen

Funktionen, die sich rekursiv selbst aufrufen, benötigen eine Möglichkeit, sich gegen zirkuläre Datenstrukturen abzusichern, indem sie verfolgen, welche Objekte bereits verarbeitet wurden.

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

Hier wird ein `WeakSet` beim ersten Aufruf erstellt und mit jedem nachfolgenden Funktionsaufruf weitergegeben (mithilfe des internen `_refs`-Parameters).

Die Anzahl der Objekte oder deren Traversierungsreihenfolge ist irrelevant, daher ist ein `WeakSet` geeigneter (und performanter) als ein {{jsxref("Set")}} zum Verfolgen von Objektreferenzen, insbesondere wenn eine sehr große Anzahl von Objekten beteiligt ist.

## Konstruktor

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : Erstellt ein neues `WeakSet`-Objekt.

## Instanzeigenschaften

Diese Eigenschaften sind auf `WeakSet.prototype` definiert und werden von allen `WeakSet`-Instanzen geteilt.

- {{jsxref("Object/constructor", "WeakSet.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `WeakSet`-Instanzen ist der Anfangswert der {{jsxref("WeakSet/WeakSet", "WeakSet")}}-Konstruktor.
- `WeakSet.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"WeakSet"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("WeakSet.prototype.add()")}}
  - : Fügt `value` dem `WeakSet`-Objekt hinzu.
- {{jsxref("WeakSet.prototype.delete()")}}
  - : Entfernt `value` aus dem `WeakSet`. `WeakSet.prototype.has(value)` wird danach `false` zurückgeben.
- {{jsxref("WeakSet.prototype.has()")}}
  - : Gibt einen boolean zurück, der angibt, ob `value` im `WeakSet`-Objekt vorhanden ist oder nicht.

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

Beachten Sie, dass `foo !== bar`. Auch wenn sie ähnliche Objekte sind, _sind sie nicht **dasselbe Objekt**_. Und so werden sie beide dem Set hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
