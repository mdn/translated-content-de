---
title: Schlüsselbasierte Sammlungen
slug: Web/JavaScript/Guide/Keyed_collections
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

Dieses Kapitel stellt Sammlungen von Daten vor, die durch einen Schlüssel indexiert sind; `Map`- und `Set`-Objekte enthalten Elemente, die in der Reihenfolge der Einfügung iterierbar sind.

## Maps

### Map-Objekt

Ein {{jsxref("Map")}}-Objekt ist eine Schlüssel/Wert-Karte, die ihre Elemente in Einfügungsreihenfolge iterieren kann.

Der folgende Code zeigt einige grundlegende Operationen mit einer `Map`. Siehe auch die {{jsxref("Map")}}-Referenzseite für weitere Beispiele und die vollständige API. Sie können eine {{jsxref("Statements/for...of", "for...of")}}-Schleife verwenden, um ein Array von `[key, value]` für jede Iteration zurückzugeben.

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

### Vergleich von Object und Map

Traditionell wurden {{jsxref("Object", "Objekte", "", 1)}} verwendet, um Zeichenfolgen auf Werte abzubilden. Mit Objekten können Sie Schlüssel auf Werte setzen, diese Werte abrufen, Schlüssel löschen und erkennen, ob etwas unter einem Schlüssel gespeichert ist. `Map`-Objekte haben jedoch einige Vorteile, die sie zu besseren Karten machen.

- Die Schlüssel eines `Object` sind [Zeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), während sie bei einer `Map` beliebige Werte sein können.
- Sie können die `size` einer `Map` leicht ermitteln, während Sie bei einem `Object` die Größe manuell nachverfolgen müssen.
- Die Iteration von Maps erfolgt in der Einfügungsreihenfolge der Elemente.
- Ein `Object` hat ein Prototypen, daher gibt es Standard-Schlüssel in der Map. (Dies kann umgangen werden, indem `map = Object.create(null)` verwendet wird.)

Diese drei Tipps können Ihnen helfen zu entscheiden, ob Sie eine `Map` oder ein `Object` verwenden sollten:

- Verwenden Sie Maps anstelle von Objekten, wenn die Schlüssel zur Laufzeit unbekannt sind und wenn alle Schlüssel vom gleichen Typ sind und alle Werte vom gleichen Typ sind.
- Verwenden Sie Maps, wenn primitive Werte als Schlüssel gespeichert werden müssen, da ein Objekt jeden Schlüssel als Zeichenfolge behandelt, unabhängig davon, ob es sich um einen Zahlenwert, einen booleschen Wert oder einen anderen primitiven Wert handelt.
- Verwenden Sie Objekte, wenn es Logik gibt, die auf einzelne Elemente angewendet wird.

### WeakMap-Objekt

Ein {{jsxref("WeakMap")}} ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten eines beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Guide/Data_structures), und die keine starken Referenzen zu ihren Schlüsseln erstellen. Das heißt, die Präsenz eines Objekts als Schlüssel in einer `WeakMap` verhindert nicht, dass das Objekt dem Müllsammler zugeführt wird. Sobald ein Objekt, das als Schlüssel verwendet wird, gesammelt wurde, werden seine entsprechenden Werte in einer `WeakMap` ebenfalls zu Kandidaten für die Müllsammlung — solange sie nicht anderswo stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist das Symbol — genauer gesagt, [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) —, da nicht registrierte Symbole garantiert einzigartig sind und nicht erneut erstellt werden können.

Die `WeakMap`-API entspricht im Wesentlichen der `Map`-API. Eine `WeakMap` erlaubt jedoch nicht das Beobachten der Lebendigkeit ihrer Schlüssel, weshalb sie keine Enumerationen zulässt. Es gibt also keine Methode, um eine Liste der Schlüssel in einer `WeakMap` zu erhalten. Wäre dies der Fall, würde die Liste vom Zustand der Müllsammlung abhängen und damit Nicht-Determinismus einführen.

Für weitere Informationen und Beispielcode siehe auch "Warum WeakMap?" auf der {{jsxref("WeakMap")}}-Referenzseite.

Ein Anwendungsfall für `WeakMap`-Objekte ist die Speicherung privater Daten für ein Objekt oder das Verbergen von Implementierungsdetails. Das folgende Beispiel stammt aus Nick Fitzgeralds Blog-Beitrag ["Hiding Implementation Details with ECMAScript 6 WeakMaps"](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html). Die privaten Daten und Methoden gehören in das Objekt und sind im `privates`-Objekt gespeichert, das eine `WeakMap` ist. Alles, was an der Instanz und im Prototyp exponiert ist, ist öffentlich; alles andere ist von der Außenwelt nicht zugänglich, da `privates` nicht aus dem Modul exportiert wird.

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

{{jsxref("Set")}}-Objekte sind Sammlungen einzigartiger Werte. Sie können ihre Elemente in Einfügungsreihenfolge iterieren. Ein Wert in einem `Set` kann nur einmal vorkommen; er ist eindeutig in der Sammlung des `Set`.

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

### Konvertierung zwischen Array und Set

Sie können ein {{jsxref("Array")}} aus einem Set mithilfe von {{jsxref("Array.from")}} oder der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) erstellen. Auch akzeptiert der `Set`-Konstruktor ein `Array`, um in die andere Richtung zu konvertieren.

> [!NOTE]
> `Set`-Objekte speichern _einzigartige Werte_ — deshalb werden bei der Konvertierung doppelte Elemente aus einem Array gelöscht!

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Vergleich von Array und Set

Traditionell wurde eine Menge von Elementen in vielen Situationen in Arrays in JavaScript gespeichert. Das `Set`-Objekt hat jedoch einige Vorteile:

- Das Löschen von Array-Elementen nach Wert (`arr.splice(arr.indexOf(val), 1)`) ist sehr langsam.
- `Set`-Objekte ermöglichen das Löschen von Elementen nach ihrem Wert. Mit einem Array müssten Sie basierend auf dem Index eines Elements `splice` verwenden.
- Der Wert {{jsxref("NaN")}} kann mit `indexOf` in einem Array nicht gefunden werden.
- `Set`-Objekte speichern einzigartige Werte. Sie müssen duplikate nicht manuell nachverfolgen.

### WeakSet-Objekt

{{jsxref("WeakSet")}}-Objekte sind Sammlungen von speicherbereinigbaren Werten, einschließlich Objekten und [nicht registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert in der `WeakSet` kann nur einmal vorkommen. Er ist einzigartig in der Sammlung der `WeakSet`.

Die Hauptunterschiede zum {{jsxref("Set")}}-Objekt sind:

- Im Gegensatz zu `Sets` sind `WeakSets` **Sammlungen von _Objekten oder Symbolen nur_**, und nicht von beliebigen Werten beliebigen Typs.
- Die `WeakSet` ist _schwach_: Referenzen zu Objekten in der Sammlung werden schwach gehalten. Gibt es keine andere Referenz zu einem in der `WeakSet` gespeicherten Objekt, können diese dem Garbage Collector zugeführt werden. Das bedeutet auch, dass es keine Liste der aktuellen Objekte in der Sammlung gibt.
- `WeakSets` sind nicht aufzählbar.

Die Anwendungsfälle von `WeakSet`-Objekten sind begrenzt. Sie lecken kein Gedächtnis, daher kann es sicher sein, DOM-Elemente als Schlüssel zu verwenden und sie zum Beispiel zu Verfolgungszwecken zu markieren.

## Gleichheit von Schlüssel und Wert in Map und Set

Sowohl die Schlüsselgleichheit von `Map`-Objekten als auch die Wertgleichheit von `Set`-Objekten basieren auf dem [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality):

- Gleichheit funktioniert wie der Identitätsvergleichsoperator `===`.
- `-0` und `+0` werden als gleich angesehen.
- {{jsxref("NaN")}} wird als gleich zu sich selbst angesehen (im Gegensatz zu `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}
