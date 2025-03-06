---
title: Schlüsselbasierte Sammlungen
slug: Web/JavaScript/Guide/Keyed_collections
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

Dieses Kapitel führt in Sammlungen von Daten ein, die durch einen Schlüssel indexiert werden; `Map` und `Set` Objekte enthalten Elemente, die in der Reihenfolge der Einfügung iterierbar sind.

## Maps

### Map-Objekt

Ein {{jsxref("Map")}} Objekt ist eine Schlüssel/Wert-Zuordnung, die ihre Elemente in Einfügereihenfolge iterieren kann.

Der folgende Code zeigt einige grundlegende Operationen mit einer `Map`. Weitere Beispiele und die vollständige API finden Sie auf der {{jsxref("Map")}} Referenzseite. Sie können eine {{jsxref("Statements/for...of", "for...of")}} Schleife verwenden, um ein Array von `[key, value]` für jede Iteration zurückzugeben.

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

### Vergleich von Objekt und Map

Traditionell wurden {{jsxref("Object", "Objekte", "", 1)}} verwendet, um Zeichenfolgen auf Werte abzubilden. Objekte erlauben es, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu prüfen, ob etwas unter einem Schlüssel gespeichert ist. `Map` Objekte bieten jedoch einige Vorteile, die sie zu besseren Zuordnungen machen.

- Die Schlüssel eines `Object` sind [strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [symbols](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), während sie für eine `Map` einen beliebigen Wert haben können.
- Sie können die `size` einer `Map` leicht ermitteln, während Sie bei einem `Object` die Größe manuell verfolgen müssen.
- Die Iteration von Maps erfolgt in der Einfügereihenfolge der Elemente.
- Ein `Object` hat ein Prototyp, daher gibt es Standard-Schlüssel in der Zuordnung. (Dies kann umgangen werden, indem `map = Object.create(null)` verwendet wird.)

Diese drei Tipps können Ihnen helfen zu entscheiden, ob Sie eine `Map` oder ein `Object` verwenden:

- Verwenden Sie Maps über Objekten, wenn die Schlüssel zur Laufzeit unbekannt sind und wenn alle Schlüssel denselben Typ haben und alle Werte denselben Typ haben.
- Verwenden Sie Maps, wenn es erforderlich ist, primitive Werte als Schlüssel zu speichern, da Objekte jeden Schlüssel als Zeichenfolge behandeln, unabhängig davon, ob es sich um eine Zahl, einen booleschen Wert oder einen anderen primitiven Wert handelt.
- Verwenden Sie Objekte, wenn es Logik gibt, die auf einzelne Elemente angewendet wird.

### WeakMap-Objekt

Ein {{jsxref("WeakMap")}} ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten eines beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Guide/Data_structures), und die keine starken Referenzen zu ihren Schlüsseln erzeugt. Das heißt, das Vorhandensein eines Objekts als Schlüssel in einem `WeakMap` verhindert nicht, dass das Objekt vom Garbage Collector eingesammelt wird. Sobald ein Objekt, das als Schlüssel verwendet wird, eingesammelt wurde, werden die entsprechenden Werte in jeder `WeakMap` ebenfalls zu Kandidaten zur Garbage Collection — solange sie nicht anderswo stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist Symbol — genauer gesagt [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) — da nicht-registrierte Symbole garantiert einzigartig sind und nicht erneut erstellt werden können.

Die `WeakMap`-API ist im Wesentlichen die gleiche wie die `Map`-API. Eine `WeakMap` erlaubt jedoch nicht die Beobachtung der Lebendigkeit ihrer Schlüssel, weshalb sie keine Enumeration zulässt. Es gibt also keine Methode, um eine Liste der Schlüssel in einer `WeakMap` zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Garbage Collection abhängen, was zu Nicht-Determinismus führen würde.

Für weitere Informationen und Beispielcode siehe auch "Why WeakMap?" auf der {{jsxref("WeakMap")}} Referenzseite.

Ein Anwendungsfall von `WeakMap` Objekten ist das Speichern privater Daten für ein Objekt oder das Verbergen von Implementierungsdetails. Das folgende Beispiel stammt aus dem Blogeintrag von Nick Fitzgerald ["Hiding Implementation Details with ECMAScript 6 WeakMaps"](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html). Die privaten Daten und Methoden gehören innerhalb des Objekts und werden im `privates` Objekt gespeichert, das eine `WeakMap` ist. Alles, was öffentlich zugänglich ist, befindet sich auf der Instanz und dem Prototyp; alles andere ist von der Außenwelt nicht zugänglich, da `privates` nicht aus dem Modul exportiert wird.

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

{{jsxref("Set")}} Objekte sind Sammlungen einzigartiger Werte. Sie können ihre Elemente in Einfügereihenfolge iterieren. Ein Wert in einem `Set` darf nur einmal auftreten; er ist einzigartig in der Sammlung des `Set`.

Der folgende Code zeigt einige grundlegende Operationen mit einem `Set`. Weitere Beispiele und die vollständige API finden Sie auf der {{jsxref("Set")}} Referenzseite.

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

Sie können ein {{jsxref("Array")}} aus einem Set mithilfe von {{jsxref("Array.from")}} oder der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) erstellen. Der `Set` Konstruktor akzeptiert auch ein `Array`, um in die andere Richtung zu konvertieren.

> **Note:** `Set` Objekte speichern _einzigartige Werte_—daher werden alle doppelten Elemente aus einem Array beim Konvertieren gelöscht!

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Vergleich von Array und Set

Traditionell wurde eine Sammlung von Elementen in vielen Situationen in JavaScript in Arrays gespeichert. Das `Set` Objekt hat jedoch einige Vorteile:

- Das Löschen von Array-Elementen nach Wert (`arr.splice(arr.indexOf(val), 1)`) ist sehr langsam.
- `Set` Objekte ermöglichen das Löschen von Elementen nach ihrem Wert. Bei einem Array müssten Sie basierend auf dem Index eines Elements `splice` verwenden.
- Der Wert {{jsxref("NaN")}} kann in einem Array nicht mit `indexOf` gefunden werden.
- `Set` Objekte speichern einzigartige Werte. Sie müssen Duplikate nicht manuell verfolgen.

### WeakSet-Objekt

{{jsxref("WeakSet")}} Objekte sind Sammlungen von sammelfähigen Werten, einschließlich Objekte und [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert im `WeakSet` darf nur einmal vorkommen. Er ist einzigartig in der Sammlung des `WeakSet`.

Die Hauptunterschiede zum {{jsxref("Set")}} Objekt sind:

- Im Gegensatz zu `Sets` sind `WeakSets` **Sammlungen von _nur Objekten oder Symbolen_** und nicht von beliebigen Werten irgendeines Typs.
- Das `WeakSet` ist _schwach_: Referenzen zu Objekten in der Sammlung werden schwach gehalten. Wenn es keine andere Referenz zu einem im `WeakSet` gespeicherten Objekt gibt, können sie vom Garbage Collector aufgesammelt werden. Das bedeutet auch, dass es keine Liste der aktuell in der Sammlung gespeicherten Objekte gibt.
- `WeakSets` sind nicht aufzählbar.

Die Anwendungsfälle von `WeakSet` Objekten sind begrenzt. Sie lecken keinen Speicher, daher kann es sicher sein, DOM-Elemente als Schlüssel zu verwenden und sie beispielsweise für Tracking-Zwecke zu markieren.

## Schlüssel- und Wertgleichheit von Map und Set

Sowohl die Schlüsselgleichheit von `Map` Objekten als auch die Wertgleichheit von `Set` Objekten basieren auf dem [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality):

- Gleichheit funktioniert wie der Identitätsvergleichsoperator `===`.
- `-0` und `+0` werden als gleich angesehen.
- {{jsxref("NaN")}} wird als gleich zu sich selbst angesehen (im Gegensatz zu `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}
