---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Ein **`WeakSet`** ist eine Sammlung von garbagesammelbaren Werten, einschließlich Objekten und [nicht registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert im `WeakSet` kann nur einmal vorkommen. Er ist einzigartig in der Sammlung des `WeakSet`.

## Beschreibung

Werte von WeakSets müssen garbagesammelbar sein. Die meisten {{Glossary("Primitive", "primitiven Datentypen")}} können beliebig erstellt werden und haben keine Lebensdauer, sodass sie nicht gespeichert werden können. Objekte und [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) können gespeichert werden, da sie garbagesammelbar sind.

Die Hauptunterschiede zum {{jsxref("Set")}}-Objekt sind:

- `WeakSet`s sind Sammlungen von **Objekten und Symbolen nur**. Sie können nicht beliebige Werte von jedem Typ enthalten, wie es {{jsxref("Set")}}s können.
- Das `WeakSet` ist _schwach_, was bedeutet, dass Referenzen zu Objekten in einem `WeakSet` _schwach_ gehalten werden. Wenn keine anderen Referenzen zu einem Wert existieren, der im `WeakSet` gespeichert ist, können diese Werte vom Garbage Collector entfernt werden.

  > [!NOTE]
  > Dies bedeutet auch, dass es keine Liste der aktuell in der Sammlung gespeicherten Werte gibt. `WeakSets` sind nicht aufzählbar.

### Anwendungsfall: Erkennen zirkulärer Referenzen

Funktionen, die sich rekursiv aufrufen, benötigen eine Möglichkeit, gegen zirkuläre Datenstrukturen abzusichern, indem sie verfolgen, welche Objekte bereits verarbeitet wurden.

`WeakSet`s sind dafür ideal:

```js
// Führen Sie einen Callback für alles aus, was in einem Objekt gespeichert ist
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // Unendliche Rekursion vermeiden
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

foo.bar.baz = foo; // Zirkuläre Referenz!
execRecursively((obj) => console.log(obj), foo);
```

Hier wird ein `WeakSet` beim ersten Lauf erstellt und mit jedem nachfolgenden Funktionsaufruf (unter Verwendung des internen `_refs`-Parameters) weitergegeben.

Die Anzahl der Objekte oder ihre Durchlaufreihenfolge ist irrelevant, daher ist ein `WeakSet` besser geeignet (und leistungsfähiger) als ein {{jsxref("Set")}} zum Verfolgen von Objekt-Referenzen, insbesondere wenn eine sehr große Anzahl von Objekten involviert ist.

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
  - : Fügt `value` dem `WeakSet`-Objekt hinzu.
- {{jsxref("WeakSet.prototype.delete()")}}
  - : Entfernt `value` aus dem `WeakSet`. `WeakSet.prototype.has(value)` wird danach `false` zurückgeben.
- {{jsxref("WeakSet.prototype.has()")}}
  - : Gibt ein boolean zurück, das angibt, ob `value` im `WeakSet`-Objekt vorhanden ist oder nicht.

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

ws.delete(foo); // entfernt foo aus dem Set
ws.has(foo); // false, foo wurde entfernt
ws.has(bar); // true, bar bleibt erhalten
```

Beachten Sie, dass `foo !== bar`. Obwohl sie ähnliche Objekte sind, _sind sie nicht **das gleiche Objekt**_. Und so werden sie beide in das Set eingefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
