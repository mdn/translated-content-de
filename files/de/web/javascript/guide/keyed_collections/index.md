---
title: Keyed collections
slug: Web/JavaScript/Guide/Keyed_collections
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

Dieses Kapitel führt Sammlungen von Daten ein, die durch einen Schlüssel indiziert sind; `Map`- und `Set`-Objekte enthalten Elemente, die in der Reihenfolge der Einfügung iterierbar sind.

## Maps

### Map-Objekt

Ein {{jsxref("Map")}}-Objekt ist eine einfache Schlüssel/Wert-Karte und kann seine Elemente in Einfüge-Reihenfolge iterieren.

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

### Vergleich zwischen Objekt und Map

Traditionell wurden {{jsxref("Object", "Objekte", "", 1)}} verwendet, um Zeichenfolgen auf Werte abzubilden. Objekte ermöglichen es, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas unter einem Schlüssel gespeichert ist. `Map`-Objekte haben jedoch einige Vorteile, die sie zu besseren Karten machen.

- Die Schlüssel eines `Object` sind [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), während sie bei einer `Map` jeden beliebigen Wert haben können.
- Sie können die `size` einer `Map` leicht ermitteln, während Sie bei einem `Object` die Größe manuell verfolgen müssen.
- Die Iteration von Maps erfolgt in der Einfüge-Reihenfolge der Elemente.
- Ein `Object` hat ein Prototyp, sodass es Standard-Schlüssel in der Karte gibt. (Dies kann umgangen werden, indem `map = Object.create(null)` verwendet wird.)

Diese drei Tipps können Ihnen helfen zu entscheiden, ob Sie eine `Map` oder ein `Object` verwenden:

- Verwenden Sie Maps statt Objekten, wenn Schlüssel zur Laufzeit unbekannt sind und alle Schlüssel denselben Typ und alle Werte denselben Typ haben.
- Verwenden Sie Maps, wenn primitive Werte als Schlüssel gespeichert werden müssen, da Objekte jeden Schlüssel als Zeichenfolge behandeln, egal ob es ein Zahlenwert, ein Boolescher Wert oder ein anderer primitiver Wert ist.
- Verwenden Sie Objekte, wenn eine Logik vorliegt, die auf einzelne Elemente angewendet wird.

### WeakMap-Objekt

Ein {{jsxref("WeakMap")}} ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten eines beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Data_structures), und die keine starken Referenzen zu ihren Schlüsseln erstellen. Das bedeutet, dass die Präsenz eines Objekts als Schlüssel in einer `WeakMap` nicht verhindert, dass das Objekt vom Speicherbereinigungsprozess erfasst wird. Sobald ein Objekt, das als Schlüssel verwendet wird, gesammelt wurde, werden seine entsprechenden Werte in jeder `WeakMap` ebenfalls Kandidaten zur Speicherbereinigung - solange sie nicht stark anderswo referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist das Symbol - genauer gesagt [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) - da nicht-registrierte Symbole garantiert einzigartig sind und nicht neu erstellt werden können.

Die `WeakMap`-API ist im Wesentlichen die gleiche wie die `Map`-API. Eine `WeakMap` erlaubt jedoch nicht die Beobachtung der Lebensdauer ihrer Schlüssel, weshalb sie keine Aufzählung ermöglicht. Es gibt also keine Methode zur Erzeugung einer Liste der Schlüssel in einer `WeakMap`. Wenn es eine gäbe, wäre die Liste vom Zustand der Speicherbereinigung abhängig und würde Nichtdeterminismus einführen.

Weitere Informationen und Beispielcode finden Sie auch auf der Referenzseite "Warum WeakMap?" auf der {{jsxref("WeakMap")}}-Referenzseite.

Ein Anwendungsfall für `WeakMap`-Objekte ist die Speicherung privater Daten für ein Objekt oder das Verbergen von Implementierungsdetails. Das folgende Beispiel stammt aus Nick Fitzgeralds Blogbeitrag ["Hiding Implementation Details with ECMAScript 6 WeakMaps"](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html). Die privaten Daten und Methoden gehören in das Objekt und werden im `privates`-Objekt gespeichert, das eine `WeakMap` ist. Alles, was auf der Instanz und dem Prototyp freigelegt wird, ist öffentlich; alles andere ist von der Außenwelt unzugänglich, da `privates` nicht aus dem Modul exportiert wird.

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

{{jsxref("Set")}}-Objekte sind Sammlungen einzigartiger Werte. Sie können seine Elemente in der Reihenfolge der Einfügung iterieren. Ein Wert in einem `Set` kann nur einmal auftreten; er ist einzigartig in der Sammlung des `Set`.

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

### Konvertieren zwischen Array und Set

Sie können ein {{jsxref("Array")}} aus einem Set mit {{jsxref("Array.from")}} oder der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) erstellen. Auch der `Set`-Konstruktor akzeptiert ein `Array`, um in die andere Richtung zu konvertieren.

> **Hinweis:** `Set`-Objekte speichern _einzigartige Werte_ – also werden alle doppelten Elemente aus einem Array beim Konvertieren gelöscht!

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Vergleich von Array und Set

Traditionell wurden in vielen Situationen in JavaScript Arrays verwendet, um eine Menge von Elementen zu speichern. Das `Set`-Objekt hat jedoch einige Vorteile:

- Das Löschen von Array-Elementen nach Wert (`arr.splice(arr.indexOf(val), 1)`) ist sehr langsam.
- `Set`-Objekte ermöglichen das Löschen von Elementen nach ihrem Wert. Bei einem Array müssten Sie `splice` basierend auf dem Index eines Elements durchführen.
- Der Wert {{jsxref("NaN")}} kann nicht über `indexOf` in einem Array gefunden werden.
- `Set`-Objekte speichern einzigartige Werte. Sie müssen Duplikate nicht manuell verfolgen.

### WeakSet-Objekt

{{jsxref("WeakSet")}}-Objekte sind Sammlungen von speicherbereinigbaren Werten, einschließlich Objekten und [nicht-registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert im `WeakSet` kann nur einmal auftreten. Er ist einzigartig in der Sammlung des `WeakSet`.

Die Hauptunterschiede zum {{jsxref("Set")}}-Objekt sind:

- Im Gegensatz zu `Sets` sind `WeakSets` **Sammlungen nur von _Objekten oder Symbolen_,** und nicht von beliebigen Werten jeglichen Typs.
- Das `WeakSet` ist _schwach_: Referenzen auf Objekte in der Sammlung werden schwach gehalten. Wenn es keine andere Referenz zu einem im `WeakSet` gespeicherten Objekt gibt, können sie gesammelt werden. Das bedeutet auch, dass es keine Liste aktueller Objekte in der Sammlung gibt.
- `WeakSets` sind nicht aufzählbar.

Die Anwendungsfälle von `WeakSet`-Objekten sind begrenzt. Sie lecken keinen Speicher, daher kann es sicher sein, DOM-Elemente als Schlüssel zu verwenden und sie beispielsweise zu Markierungszwecken zu nutzen.

## Schlüssel- und Wertgleichheit von Map und Set

Sowohl die Schlüsselgleichheit von `Map`-Objekten als auch die Wertgleichheit von `Set`-Objekten basieren auf dem [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality):

- Die Gleichheit funktioniert wie der Identitätsvergleichsoperator `===`.
- `-0` und `+0` werden als gleich angesehen.
- {{jsxref("NaN")}} wird als gleich zu sich selbst angesehen (entgegen `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}
