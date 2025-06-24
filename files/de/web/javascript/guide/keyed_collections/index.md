---
title: Schlüsselbasierte Sammlungen
slug: Web/JavaScript/Guide/Keyed_collections
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

Dieses Kapitel führt in Sammlungen von Daten ein, die durch einen Schlüssel indexiert sind; `Map`- und `Set`-Objekte enthalten Elemente, die in der Reihenfolge der Einfügung durchlaufbar sind.

## Maps

### Map-Objekt

Ein {{jsxref("Map")}}-Objekt ist eine Schlüssel-Wert-Zuordnung, die ihre Elemente in Einfügereihenfolge durchlaufen kann.

Der folgende Code zeigt einige grundlegende Operationen mit einer `Map`. Weitere Beispiele und die vollständige API finden Sie auf der {{jsxref("Map")}}-Referenzseite. Sie können eine {{jsxref("Statements/for...of", "for...of")}}-Schleife verwenden, um ein Array von `[key, value]` für jede Iteration zurückzugeben.

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

Traditionell wurden {{jsxref("Object", "Objekte", "", 1)}} verwendet, um Zeichenfolgen auf Werte abzubilden. Objekte ermöglichen es, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas an einem Schlüssel gespeichert ist. `Map`-Objekte haben jedoch einige Vorteile, die sie zu besseren Karten machen.

- Die Schlüssel eines `Object` sind [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), während sie bei einer `Map` jeden Wert annehmen können.
- Sie können die `Größe` einer `Map` leicht ermitteln, während Sie die Größe eines `Object` manuell verfolgen müssen.
- Die Iteration von Karten erfolgt in der Einfügereihenfolge der Elemente.
- Ein `Object` hat ein Prototyp, daher gibt es Standard-Schlüssel in der Karte. (Dies kann umgangen werden, indem `map = Object.create(null)` verwendet wird.)

Diese drei Tipps können Ihnen helfen zu entscheiden, ob Sie eine `Map` oder ein `Object` verwenden sollten:

- Verwenden Sie Maps über Objekte, wenn Schlüssel bis zur Laufzeit unbekannt sind und wenn alle Schlüssel den gleichen Typ und alle Werte den gleichen Typ haben.
- Verwenden Sie Maps, wenn es erforderlich ist, primitive Werte als Schlüssel zu speichern, da das Objekt jeden Schlüssel als Zeichenfolge behandelt, unabhängig davon, ob es sich um einen Zahlenwert, einen booleschen Wert oder einen anderen primitiven Wert handelt.
- Verwenden Sie Objekte, wenn es eine Logik gibt, die auf einzelnen Elementen operiert.

### WeakMap-Objekt

Ein {{jsxref("WeakMap")}} ist eine Sammlung von Schlüssel-Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten jeglichen beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Guide/Data_structures), und die keine starken Referenzen auf ihre Schlüssel erstellen. Das heißt, dass die Anwesenheit eines Objekts als Schlüssel in einer `WeakMap` nicht verhindert, dass das Objekt vom Garbage Collector gesammelt wird. Sobald ein Objekt, das als Schlüssel verwendet wurde, gesammelt wurde, werden seine entsprechenden Werte in jeder `WeakMap` auch zu Kandidaten für die Speicherbereinigung — solange sie nicht stark anderswo referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist Symbol — genauer gesagt, [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) —, da nicht registrierte Symbole garantiert einzigartig sind und nicht neu erstellt werden können.

Die `WeakMap`-API ist im Wesentlichen dieselbe wie die `Map`-API. Eine `WeakMap` erlaubt jedoch nicht das Beobachten der Lebensdauer ihrer Schlüssel, weshalb sie keine Aufzählung ermöglicht. Es gibt also keine Methode, um eine Liste der Schlüssel in einer `WeakMap` zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Speicherbereinigung abhängen, was zu Nicht-Determinismus führen würde.

Weitere Informationen und Beispielcode finden Sie auch unter „Why WeakMap?“ auf der {{jsxref("WeakMap")}}-Referenzseite.

Ein Anwendungsfall für `WeakMap`-Objekte ist das Speichern privater Daten für ein Objekt oder das Verbergen von Implementierungsdetails. Das folgende Beispiel stammt aus dem Blogpost von Nick Fitzgerald ["Hiding Implementation Details with ECMAScript 6 WeakMaps"](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html). Die privaten Daten und Methoden gehören in das Objekt und werden im `privates`-Objekt gespeichert, das eine `WeakMap` ist. Alles, was auf der Instanz und dem Prototyp freigelegt wird, ist öffentlich; alles andere ist von der Außenwelt unzugänglich, da `privates` nicht aus dem Modul exportiert wird.

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

{{jsxref("Set")}}-Objekte sind Sammlungen einzigartiger Werte. Sie können ihre Elemente in Einfügereihenfolge durchlaufen. Ein Wert in einem `Set` darf nur einmal vorkommen; er ist in der Sammlung des `Set` eindeutig.

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

### Konvertierung zwischen Array und Set

Sie können ein {{jsxref("Array")}} aus einem Set mit {{jsxref("Array.from")}} oder der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) erstellen. Auch der `Set`-Konstruktor akzeptiert ein `Array`, um in die andere Richtung zu konvertieren.

> [!NOTE] > `Set`-Objekte speichern _eindeutige Werte_ — daher werden alle doppelten Elemente aus einem Array beim Konvertieren gelöscht!

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Vergleich von Array und Set

Traditionell wurde eine Menge von Elementen in vielen Situationen in Arrays in JavaScript gespeichert. Das `Set`-Objekt hat jedoch einige Vorteile:

- Das Löschen von Array-Elementen nach Wert (`arr.splice(arr.indexOf(val), 1)`) ist sehr langsam.
- `Set`-Objekte ermöglichen das Löschen von Elementen nach ihrem Wert. Mit einem Array müssten Sie `splice` basierend auf dem Index eines Elements verwenden.
- Der Wert {{jsxref("NaN")}} kann mit `indexOf` in einem Array nicht gefunden werden.
- `Set`-Objekte speichern einzigartige Werte. Sie müssen Duplikate nicht manuell verfolgen.

### WeakSet-Objekt

{{jsxref("WeakSet")}}-Objekte sind Sammlungen von speicherbereinigbaren Werten, einschließlich Objekten und [nicht registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert in dem `WeakSet` darf nur einmal vorkommen. Er ist in der Sammlung des `WeakSet` einzigartig.

Die Hauptunterschiede zum {{jsxref("Set")}}-Objekt sind:

- Im Gegensatz zu `Sets` sind `WeakSets` **Sammlungen von _Objekten oder Symbolen nur_** und nicht von beliebigen Werten eines beliebigen Typs.
- Das `WeakSet` ist _schwach_: Referenzen zu Objekten in der Sammlung werden schwach gehalten. Gibt es keine andere Referenz zu einem in dem `WeakSet` gespeicherten Objekt, können sie vom Garbage Collector gesammelt werden. Das bedeutet auch, dass es keine Liste der aktuellen, in der Sammlung gespeicherten Objekte gibt.
- `WeakSets` sind nicht aufzählbar.

Die Anwendungsfälle von `WeakSet`-Objekten sind begrenzt. Sie führen zu keinem Speicherverlust, sodass es sicher sein kann, DOM-Elemente als Schlüssel zu verwenden und sie zum Beispiel für Tracking-Zwecke zu markieren.

## Schlüssel- und Wertgleichheit von Map und Set

Sowohl die Schlüsselgleichheit von `Map`-Objekten als auch die Wertgleichheit von `Set`-Objekten basieren auf dem [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality):

- Gleichheit funktioniert wie der Identitätsvergleichsoperator `===`.
- `-0` und `+0` werden als gleich betrachtet.
- {{jsxref("NaN")}} wird zu sich selbst als gleich betrachtet (im Gegensatz zu `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}
