---
title: Map.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.iterator]()`**-Methode von {{jsxref("Map")}} Instanzen implementiert das [iterable protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es `Map`-Objekten, von den meisten Syntaxen, die Iterables erwarten, wie dem [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen verwendet zu werden. Sie gibt ein [Map-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Schlüssel-Wert-Paare der Map in der Einfügereihenfolge liefert.

Der Anfangswert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der Anfangswert der {{jsxref("Map.prototype.entries")}}-Eigenschaft.

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## Syntax

```js-nolint
map[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der gleiche Rückgabewert wie {{jsxref("Map.prototype.entries()")}}: ein neues [iterables Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Schlüssel-Wert-Paare der Map liefert.

## Beispiele

### Iteration mit einer for...of Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der `[Symbol.iterator]()`-Methode macht `Map`-Objekte [iterabel](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of` Schleife rufen diese Methode automatisch auf, um den Iterator zu erhalten, über den sie iterieren möchten.

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const entry of myMap) {
  console.log(entry);
}
// ["0", "foo"]
// [1, "bar"]
// [{}, "baz"]

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// 0: foo
// 1: bar
// [Object]: baz
```

### Manuelles Erstellen des Iterators

Sie können dennoch die `next()`-Methode des zurückgegebenen Iterator-Objekts manuell aufrufen, um maximale Kontrolle über den Iterationsprozess zu erlangen.

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap[Symbol.iterator]();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
