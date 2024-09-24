---
title: Schlüsselbasierte Sammlungen
slug: Web/JavaScript/Guide/Keyed_collections
l10n:
  sourceCommit: 4d150067b98ab6e79e6f6b0bf8343ae3ebd2b641
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

Dieses Kapitel stellt Sammlungen von Daten vor, die durch einen Schlüssel indexiert sind; `Map`- und `Set`-Objekte enthalten Elemente, die in der Reihenfolge der Einfügung durchlaufen werden können.

## Maps

### Map-Objekt

Ein {{jsxref("Map")}}-Objekt ist eine einfache Schlüssel/Wert-Map und kann seine Elemente in der Einfügereihenfolge durchlaufen.

Der folgende Code zeigt einige grundlegende Operationen mit einer `Map`. Siehe auch die {{jsxref("Map")}}-Referenzseite für weitere Beispiele und die vollständige API. Sie können eine {{jsxref("Statements/for...of", "for...of")}}-Schleife verwenden, um bei jedem Durchlauf ein Array von `[key, value]` zurückzugeben.

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

Traditionell wurden {{jsxref("Object", "Objekte", "", 1)}} verwendet, um Strings auf Werte abzubilden. Objekte ermöglichen Ihnen, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob an einem Schlüssel etwas gespeichert ist. `Map`-Objekte hingegen haben einige Vorteile, die sie zu besseren Karten machen.

- Die Schlüssel eines `Object` sind [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), während sie für eine `Map` beliebige Werte sein können.
- Sie können die `size` einer `Map` leicht erhalten, während Sie die Größe bei einem `Object` manuell verfolgen müssen.
- Die Iteration von Maps erfolgt in der Einfügereihenfolge der Elemente.
- Ein `Object` hat ein Prototyp, sodass es Standard-Schlüssel in der Map gibt. (Dies kann umgangen werden, indem `map = Object.create(null)` verwendet wird.)

Diese drei Tipps können Ihnen helfen, zu entscheiden, ob Sie eine `Map` oder ein `Object` verwenden sollten:

- Verwenden Sie Maps anstelle von Objekten, wenn die Schlüssel zur Laufzeit unbekannt sind und alle Schlüssel und Werte vom gleichen Typ sind.
- Verwenden Sie Maps, wenn primitive Werte als Schlüssel gespeichert werden müssen, da Objekte jeden Schlüssel als String behandeln, unabhängig davon, ob es sich um eine Zahl, einen Boolean oder einen anderen primitiven Wert handelt.
- Verwenden Sie Objekte, wenn es eine Logik gibt, die auf einzelnen Elementen operiert.

### WeakMap-Objekt

Eine {{jsxref("WeakMap")}} ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten von beliebigem [JavaScript-Typ](/de/docs/Web/JavaScript/Data_structures), und die keine starken Referenzen zu ihren Schlüsseln erstellt. Das heißt, das Vorhandensein eines Objekts als Schlüssel in einer `WeakMap` verhindert nicht das Sammeln des Objekts durch den Garbage Collector. Sobald ein als Schlüssel verwendetes Objekt gesammelt wurde, werden die entsprechenden Werte in jeder `WeakMap` ebenfalls Kandidaten für das Garbage Collection, solange sie nicht stark an anderer Stelle referenziert werden. Der einzige primitive Typ, der als Schlüssel einer `WeakMap` verwendet werden kann, ist das Symbol – genauer gesagt, [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) – da nicht registrierte Symbole garantiert eindeutig sind und nicht neu erstellt werden können.

Die `WeakMap`-API ist im Wesentlichen die gleiche wie die `Map`-API. Eine `WeakMap` erlaubt jedoch nicht die Beobachtung der Lebendigkeit ihrer Schlüssel, weshalb sie keine Auflistung erlaubt. Es gibt also keine Methode, um eine Liste der Schlüssel in einer `WeakMap` zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Garbage Collection abhängen und Nicht-Determinismus einführen.

Für weitere Informationen und Beispielcodes siehe „Warum WeakMap?“ auf der {{jsxref("WeakMap")}}-Referenzseite.

Ein Anwendungsfall für `WeakMap`-Objekte ist das Speichern privater Daten für ein Objekt oder das Verbergen von Implementierungsdetails. Das folgende Beispiel stammt aus Nick Fitzgeralds Blogpost ["Hiding Implementation Details with ECMAScript 6 WeakMaps"](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html). Die privaten Daten und Methoden gehören in das Objekt und werden im `privates`-Objekt gespeichert, das eine `WeakMap` ist. Alles, was auf der Instanz und im Prototyp exponiert ist, ist öffentlich; alles andere ist von der Außenwelt nicht zugänglich, da `privates` nicht aus dem Modul exportiert wird.

```js
const privates = new WeakMap();

function Public() {
  const me = {
    // Private Daten hier
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Machen Sie Dinge mit privaten Daten in `me`
  // …
};

module.exports = Public;
```

## Sets

### Set-Objekt

{{jsxref("Set")}}-Objekte sind Sammlungen eindeutiger Werte. Sie können ihre Elemente in der Einfügereihenfolge durchlaufen. Ein Wert in einem `Set` darf nur einmal auftreten; er ist einzigartig in der Sammlung des `Set`.

Der folgende Code zeigt einige grundlegende Operationen mit einem `Set`. Siehe auch die {{jsxref("Set")}}-Referenzseite für weitere Beispiele und die vollständige API.

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

Sie können ein {{jsxref("Array")}} aus einem Set mithilfe von {{jsxref("Array.from")}} oder der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) erstellen. Auch der `Set`-Konstruktor akzeptiert ein `Array`, um in die andere Richtung zu konvertieren.

> **Hinweis:** `Set`-Objekte speichern _eindeutige Werte_ – daher werden alle doppelten Elemente aus einem Array beim Konvertieren gelöscht!

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Vergleich zwischen Array und Set

Traditionell wurde eine Menge von Elementen in JavaScript in vielen Situationen in Arrays gespeichert. Das `Set`-Objekt hat jedoch einige Vorteile:

- Das Löschen von Array-Elementen nach Wert (`arr.splice(arr.indexOf(val), 1)`) ist sehr langsam.
- `Set`-Objekte ermöglichen das Löschen von Elementen nach ihrem Wert. Bei einem Array müssten Sie basierend auf dem Index eines Elements `splice` verwenden.
- Der Wert {{jsxref("NaN")}} kann in einem Array nicht mit `indexOf` gefunden werden.
- `Set`-Objekte speichern eindeutige Werte. Sie müssen nicht manuell den Überblick über Duplikate behalten.

### WeakSet-Objekt

{{jsxref("WeakSet")}}-Objekte sind Sammlungen von Müll-sammelbaren Werten, einschließlich Objekten und [nicht registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert im `WeakSet` darf nur einmal vorkommen. Er ist einzigartig in der Sammlung des `WeakSet`.

Die Hauptunterschiede zum {{jsxref("Set")}}-Objekt sind:

- Im Gegensatz zu `Sets` sind `WeakSets` **Sammlungen von _Objekten oder Symbolen nur_**, und nicht von beliebigen Werten eines Typs.
- Das `WeakSet` ist _schwach_: Referenzen auf Objekte in der Sammlung werden schwach gehalten. Wenn es keine andere Referenz auf ein in der `WeakSet` gespeichertes Objekt gibt, können sie vom Garbage Collector eingesammelt werden. Das bedeutet auch, dass es keine Liste der aktuell in der Sammlung gespeicherten Objekte gibt.
- `WeakSets` sind nicht aufzulistbar.

Die Anwendungsfälle von `WeakSet`-Objekten sind begrenzt. Sie führen nicht zu Speicherlecks, daher kann es sicher sein, DOM-Elemente als Schlüssel zu verwenden und sie beispielsweise für Tracking-Zwecke zu markieren.

## Schlüssel- und Wertegleichheit von Map und Set

Sowohl die Schlüsselgleichheit von `Map`-Objekten als auch die Wertgleichheit von `Set`-Objekten basieren auf dem [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality):

- Die Gleichheit funktioniert wie der Identitätsvergleichsoperator `===`.
- `-0` und `+0` werden als gleich betrachtet.
- {{jsxref("NaN")}} wird als gleich zu sich selbst betrachtet (im Gegensatz zu `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}
