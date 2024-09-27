---
title: Schlüsselbasierte Sammlungen
slug: Web/JavaScript/Guide/Keyed_collections
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

Dieses Kapitel führt Sammlungen von Daten ein, die durch einen Schlüssel indexiert sind; `Map`- und `Set`-Objekte enthalten Elemente, die in der Reihenfolge der Einfügung iterierbar sind.

## Maps

### Map-Objekt

Ein {{jsxref("Map")}}-Objekt ist eine einfache Schlüssel/Wert-Zuordnung und kann seine Elemente in der Einfügereihenfolge durchlaufen.

Der folgende Code zeigt einige grundlegende Operationen mit einer `Map`. Weitere Beispiele und die vollständige API finden Sie auf der {{jsxref("Map")}}-Referenzseite. Sie können eine {{jsxref("Statements/for...of", "for...of")}}-Schleife verwenden, um bei jedem Durchlauf ein Array von `[key, value]` zurückzugeben.

```js
const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

### Vergleich zwischen Object und Map

Traditionell wurden {{jsxref("Object", "Objekte", "", 1)}} verwendet, um Strings auf Werte abzubilden. Objekte ermöglichen es Ihnen, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas unter einem Schlüssel gespeichert ist. `Map`-Objekte haben jedoch einige Vorteile, die sie zu besseren Zuordnungen machen.

- Die Schlüssel eines `Object` sind [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), während für eine `Map` jeder Wert als Schlüssel verwendet werden kann.
- Sie können die `Größe` einer `Map` einfach abrufen, während Sie die Größe für ein `Object` manuell nachverfolgen müssen.
- Die Iteration von Maps erfolgt in der Einfügereihenfolge der Elemente.
- Ein `Object` hat ein Prototyp, daher sind in der Zuordnung Standard-Schlüssel enthalten. (Dies kann umgangen werden, indem `map = Object.create(null)` verwendet wird.)

Diese drei Tipps können Ihnen helfen, zu entscheiden, ob Sie eine `Map` oder ein `Object` verwenden sollten:

- Verwenden Sie Maps anstelle von Objekten, wenn Schlüssel zur Laufzeit unbekannt sind und alle Schlüssel und Werte vom gleichen Typ sind.
- Verwenden Sie Maps, wenn es notwendig ist, primitive Werte als Schlüssel zu speichern, da Objekte jeden Schlüssel als String behandeln, unabhängig davon, ob es sich um einen Zahlenwert, einen booleschen Wert oder einen anderen primitiven Wert handelt.
- Verwenden Sie Objekte, wenn es eine Logik gibt, die auf einzelnen Elementen arbeitet.

### WeakMap-Objekt

Eine {{jsxref("WeakMap")}} ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) und deren Werte beliebige [JavaScript-Typen](/de/docs/Web/JavaScript/Data_structures) sein müssen. Es erstellt keine starken Referenzen zu seinen Schlüsseln. Das bedeutet, dass die Anwesenheit eines Objekts als Schlüssel in einer `WeakMap` nicht verhindert, dass das Objekt vom Garbage Collector gesammelt wird. Sobald ein Objekt, das als Schlüssel verwendet wurde, gesammelt wurde, werden seine entsprechenden Werte in jeder `WeakMap` ebenfalls zu Kandidaten für die Garbage Collection, solange sie nicht anderweitig stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist das Symbol — genauer gesagt [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) — weil nicht registrierte Symbole garantiert einzigartig sind und nicht erneut erstellt werden können.

Die `WeakMap`-API ist im Wesentlichen die gleiche wie die `Map`-API. Eine `WeakMap` erlaubt jedoch nicht, die Lebendigkeit ihrer Schlüssel zu beobachten, weshalb sie keine Aufzählung erlaubt. Es gibt also keine Methode, um eine Liste der Schlüssel in einer `WeakMap` zu erhalten. Wäre dies möglich, würde die Liste vom Zustand der Garbage Collection abhängen, was nicht-deterministisches Verhalten einführen würde.

Weitere Informationen und Beispielcode finden Sie auch unter "Warum WeakMap?" auf der {{jsxref("WeakMap")}}-Referenzseite.

Eine Anwendungsfall für `WeakMap`-Objekte ist das Speichern privater Daten für ein Objekt oder das Verbergen von Implementierungsdetails. Das folgende Beispiel stammt aus Nick Fitzgeralds Blogeintrag ["Hiding Implementation Details with ECMAScript 6 WeakMaps"](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html). Die privaten Daten und Methoden gehören in das Objekt und werden im `privates`-Objekt gespeichert, welches eine `WeakMap` ist. Alles, was auf der Instanz und im Prototyp bereitgestellt wird, ist öffentlich; alles andere ist von der Außenwelt unzugänglich, da `privates` nicht aus dem Modul exportiert wird.

```js
const privates = new WeakMap();

function Public() {
  const me = {
    // Private data goes here
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Do stuff with private data in `me`
  // …
};

module.exports = Public;
```

## Sets

### Set-Objekt

{{jsxref("Set")}}-Objekte sind Sammlungen einzigartiger Werte. Sie können seine Elemente in der Einfügereihenfolge iterieren. Ein Wert in einem `Set` darf nur einmal vorkommen; er ist einzigartig in der Sammlung des `Set`.

Der folgende Code zeigt einige grundlegende Operationen mit einem `Set`. Weitere Beispiele und die vollständige API finden Sie auf der {{jsxref("Set")}}-Referenzseite.

```js
const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}
// 1
// "some text"
```

### Umwandlung zwischen Array und Set

Sie können ein {{jsxref("Array")}} aus einem Set erstellen, indem Sie {{jsxref("Array.from")}} oder die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwenden. Auch der `Set`-Konstruktor akzeptiert ein `Array` zur Umwandlung in die andere Richtung.

> **Note:** `Set`-Objekte speichern _einzigartige Werte_—sodass alle doppelten Elemente aus einem Array beim Umwandeln gelöscht werden!

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Vergleich zwischen Array und Set

Traditionell wurde eine Menge von Elementen in JavaScript in vielen Situationen in Arrays gespeichert. Das `Set`-Objekt hat jedoch einige Vorteile:

- Das Löschen von Array-Elementen nach Wert (`arr.splice(arr.indexOf(val), 1)`) ist sehr langsam.
- `Set`-Objekte ermöglichen es, Elemente nach ihrem Wert zu löschen. Mit einem Array müssten Sie mittels `splice` basierend auf dem Index eines Elements löschen.
- Der Wert {{jsxref("NaN")}} kann mit `indexOf` in einem Array nicht gefunden werden.
- `Set`-Objekte speichern einzigartige Werte. Sie müssen nicht manuell Duplikate nachverfolgen.

### WeakSet-Objekt

{{jsxref("WeakSet")}}-Objekte sind Sammlungen von garbage-collected Werten, einschließlich Objekten und [nicht registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert in der `WeakSet` kann nur einmal vorkommen. Er ist einzigartig in der Sammlung des `WeakSet`.

Die Hauptunterschiede zum {{jsxref("Set")}}-Objekt sind:

- Im Gegensatz zu `Sets` sind `WeakSets` **Sammlungen von _Objekten oder nur Symbolen_** und nicht von beliebigen Werten beliebiger Typen.
- Das `WeakSet` ist _schwach_: Referenzen zu Objekten in der Sammlung werden schwach gehalten. Wenn es keine andere Referenz zu einem in der `WeakSet` gespeicherten Objekt gibt, können sie vom Garbage Collector gesammelt werden. Das bedeutet auch, dass es keine Liste der aktuellen Objekte in der Sammlung gibt.
- `WeakSets` sind nicht aufzählbar.

Die Einsatzmöglichkeiten von `WeakSet`-Objekten sind begrenzt. Sie lecken keinen Speicher, sodass es sicher sein kann, DOM-Elemente als Schlüssel zu verwenden und sie zum Verfolgen von Zwecken zu markieren, zum Beispiel.

## Schlüssel- und Wertgleichheit von Map und Set

Sowohl die Schlüsselgleichheit von `Map`-Objekten als auch die Wertgleichheit von `Set`-Objekten basieren auf dem [SameValueZero Algorithmus](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality):

- Die Gleichheit funktioniert wie der Identitätsvergleichsoperator `===`.
- `-0` und `+0` werden als gleich angesehen.
- {{jsxref("NaN")}} wird als gleich zu sich selbst betrachtet (im Gegensatz zu `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}
