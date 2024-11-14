---
title: Schlüsselbasierte Sammlungen
slug: Web/JavaScript/Guide/Keyed_collections
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

Dieses Kapitel stellt Sammlungen von Daten vor, die durch einen Schlüssel indexiert sind. `Map` und `Set` Objekte enthalten Elemente, die in der Reihenfolge der Einfügung iterierbar sind.

## Maps

### Map Objekt

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

Traditionell wurden {{jsxref("Object", "Objekte", "", 1)}} verwendet, um Zeichenfolgen zu Werten zuzuordnen. Objekte erlauben es Ihnen, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas unter einem Schlüssel gespeichert ist. `Map` Objekte haben jedoch einige Vorteile, die sie zu besseren Zuordnungen machen.

- Die Schlüssel eines `Object` sind [Zeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), während sie bei einer `Map` von jedem Wert sein können.
- Sie können die `Größe` einer `Map` leicht ermitteln, während Sie bei einem `Object` die Größe manuell verfolgen müssen.
- Die Iteration von Maps erfolgt in der Einfügereihenfolge der Elemente.
- Ein `Object` hat ein Prototyp, daher gibt es Standard-Schlüssel in der Karte. (Dies kann umgangen werden, indem `map = Object.create(null)` verwendet wird.)

Diese drei Tipps können Ihnen helfen zu entscheiden, ob Sie eine `Map` oder ein `Object` verwenden sollten:

- Verwenden Sie Maps anstelle von Objekten, wenn Schlüssel zur Laufzeit unbekannt sind und wenn alle Schlüssel und alle Werte den gleichen Typ haben.
- Verwenden Sie Maps, wenn primitive Werte als Schlüssel gespeichert werden müssen, da Objekte jeden Schlüssel als Zeichenfolge behandeln, sei es ein Zahlenwert, ein boolescher Wert oder ein anderer primitiver Wert.
- Verwenden Sie Objekte, wenn es Logik gibt, die auf einzelne Elemente angewendet wird.

### WeakMap Objekt

Ein {{jsxref("WeakMap")}} ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten eines beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Data_structures) und das keine starken Referenzen auf seine Schlüssel erstellt. Das heißt, die Präsenz eines Objekts als Schlüssel in einer `WeakMap` verhindert nicht, dass das Objekt vom Garbage Collector bereinigt wird. Sobald ein Objekt, das als Schlüssel verwendet wurde, gesammelt wurde, werden seine entsprechenden Werte in einer `WeakMap` ebenfalls zu Kandidaten für die Speicherbereinigung—solange sie nicht anderswo stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist das Symbol—genauer gesagt [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry)—da nicht registrierte Symbole garantiert einzigartig sind und nicht neu erstellt werden können.

Die `WeakMap` API ist im Wesentlichen die gleiche wie die `Map` API. Eine `WeakMap` erlaubt jedoch nicht die Beobachtung der Lebendigkeit ihrer Schlüssel, weshalb sie keine Enumeration erlaubt. Es gibt also keine Methode, um eine Liste der Schlüssel in einer `WeakMap` zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Speicherbereinigung abhängen und zu Nicht-Determinismus führen.

Weitere Informationen und Beispielcode finden Sie unter "Why WeakMap?" auf der {{jsxref("WeakMap")}} Referenzseite.

Ein Anwendungsfall für `WeakMap` Objekte ist das Speichern von privaten Daten für ein Objekt oder das Verbergen von Implementierungsdetails. Das folgende Beispiel stammt aus Nick Fitzgeralds Blogbeitrag ["Hiding Implementation Details with ECMAScript 6 WeakMaps"](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html). Die privaten Daten und Methoden gehören ins Innere des Objekts und werden im `privates` Objekt gespeichert, das eine `WeakMap` ist. Alles, was auf der Instanz und im Prototyp exponiert ist, ist öffentlich; alles andere ist von der Außenwelt unzugänglich, weil `privates` nicht aus dem Modul exportiert wird.

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

### Set Objekt

{{jsxref("Set")}} Objekte sind Sammlungen eindeutiger Werte. Sie können seine Elemente in Einfügereihenfolge iterieren. Ein Wert in einem `Set` kann nur einmal vorkommen; er ist einzigartig in der Sammlung des `Set`.

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

### Konvertierung zwischen Array und Set

Sie können ein {{jsxref("Array")}} von einem Set mit {{jsxref("Array.from")}} oder der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) erstellen. Auch akzeptiert der `Set` Konstruktor ein `Array`, um in die andere Richtung zu konvertieren.

> **Hinweis:** `Set` Objekte speichern _einzigartige Werte_—sodass alle doppelten Elemente eines Arrays beim Konvertieren gelöscht werden!

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Vergleich von Array und Set

Traditionell wurde eine Menge von Elementen in vielen Situationen in Arrays in JavaScript gespeichert. Das `Set` Objekt hat jedoch einige Vorteile:

- Das Löschen von Array-Elementen nach Wert (`arr.splice(arr.indexOf(val), 1)`) ist sehr langsam.
- `Set` Objekte ermöglichen das Löschen von Elementen nach ihrem Wert. Mit einem Array müssten Sie basierend auf dem Index eines Elements `splice` verwenden.
- Der Wert {{jsxref("NaN")}} kann mit `indexOf` in einem Array nicht gefunden werden.
- `Set` Objekte speichern einzigartige Werte. Sie müssen doppelte Werte nicht manuell verfolgen.

### WeakSet Objekt

{{jsxref("WeakSet")}} Objekte sind Sammlungen von speicherbereinigbaren Werten, einschließlich Objekten und [nicht registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert in der `WeakSet` kann nur einmal vorkommen. Er ist einzigartig in der Sammlung des `WeakSet`.

Die Hauptunterschiede zum {{jsxref("Set")}} Objekt sind:

- Im Gegensatz zu `Sets` sind `WeakSets` **Sammlungen von _Objekten oder Symbolen nur_** und nicht von beliebigen Werten beliebigen Typs.
- Die `WeakSet` ist _schwach_: Referenzen zu Objekten in der Sammlung werden schwach gehalten. Wenn es keine andere Referenz zu einem in der `WeakSet` gespeicherten Objekt gibt, können sie speicherbereinigt werden. Das bedeutet auch, dass es keine Liste der aktuell in der Sammlung gespeicherten Objekte gibt.
- `WeakSets` sind nicht aufzählbar.

Die Anwendungsfälle für `WeakSet` Objekte sind begrenzt. Sie werden keinen Speicherverlust verursachen, sodass es sicher sein kann, DOM-Elemente als Schlüssel zu verwenden und sie beispielsweise zu Markierungszwecken zu verfolgen.

## Schlüssel- und Wertgleichheit von Map und Set

Sowohl die Schlüsselgleichheit von `Map` Objekten als auch die Wertgleichheit von `Set` Objekten basieren auf dem [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality):

- Die Gleichheit funktioniert wie der Identitätsvergleichsoperator `===`.
- `-0` und `+0` werden als gleich betrachtet.
- {{jsxref("NaN")}} wird als gleich sich selbst betrachtet (im Gegensatz zu `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}
