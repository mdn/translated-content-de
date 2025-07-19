---
title: Schlüsselbasierte Sammlungen
slug: Web/JavaScript/Guide/Keyed_collections
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

Dieses Kapitel führt Sammlungen von Daten ein, die über einen Schlüssel indiziert sind; `Map`- und `Set`-Objekte enthalten Elemente, die in der Reihenfolge des Einfügens iterierbar sind.

## Maps

### Map-Objekt

Ein {{jsxref("Map")}}-Objekt ist eine Schlüssel/Wert-Abbildung, die ihre Elemente in Einfügereihenfolge iterieren kann.

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

Traditionell wurden {{jsxref("Object", "Objekte", "", 1)}} verwendet, um Zeichenfolgen mit Werten zu verknüpfen. Objekte ermöglichen es, Schlüssel zu Werten zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas unter einem Schlüssel gespeichert ist. `Map`-Objekte haben jedoch einige Vorteile, die sie zu besseren Karten machen.

- Die Schlüssel eines `Object` sind [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), während sie bei einer `Map` von jedem Wert sein können.
- Sie können die `Größe` einer `Map` leicht ermitteln, während Sie bei einem `Object` die Größe manuell verfolgen müssen.
- Die Iteration von Maps erfolgt in der Einfügereihenfolge der Elemente.
- Ein `Object` hat ein Prototyp, daher gibt es Standard-Schlüssel in der Map. (Dies kann umgangen werden, indem `map = Object.create(null)` verwendet wird.)

Diese drei Tipps können Ihnen helfen zu entscheiden, ob Sie eine `Map` oder ein `Object` verwenden sollten:

- Verwenden Sie Maps anstelle von Objekten, wenn Schlüssel zur Laufzeit unbekannt sind und alle Schlüssel sowie alle Werte denselben Typ haben.
- Verwenden Sie Maps, wenn primitive Werte als Schlüssel gespeichert werden müssen, da ein Objekt jeden Schlüssel als Zeichenfolge behandelt, unabhängig davon, ob es sich um einen Zahlenwert, einen booleschen Wert oder einen anderen primitiven Wert handelt.
- Verwenden Sie Objekte, wenn es eine Logik gibt, die auf einzelne Elemente wirkt.

### WeakMap-Objekt

Ein {{jsxref("WeakMap")}} ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit beliebigen Werten des [JavaScript-Typs](/de/docs/Web/JavaScript/Guide/Data_structures), und das keine starken Referenzen zu seinen Schlüsseln erstellt. Das heißt, die Anwesenheit eines Objekts als Schlüssel in einer `WeakMap` verhindert nicht, dass das Objekt von der Speicherbereinigung erfasst wird. Sobald ein Objekt, das als Schlüssel verwendet wird, gesammelt wurde, werden seine entsprechenden Werte in jeder `WeakMap` ebenfalls zur Speicherungskandidaten, solange sie nicht anderswo stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist das Symbol — genauer gesagt, [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) —, da nicht registrierte Symbole garantiert einzigartig sind und nicht wiederhergestellt werden können.

Die `WeakMap`-API ist im Wesentlichen die gleiche wie die `Map`-API. Eine `WeakMap` erlaubt jedoch nicht das Beobachten der Lebendigkeit ihrer Schlüssel, weshalb sie keine Aufzählung zulässt. Es gibt also keine Methode, um eine Liste der Schlüssel in einer `WeakMap` zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Speicherbereinigung abhängen und Nicht-Determinismus einführen.

Weitere Informationen und Beispielcode finden Sie unter "Why WeakMap?" auf der {{jsxref("WeakMap")}}-Referenzseite.

Ein Anwendungsfall für `WeakMap`-Objekte ist das Speichern privater Daten für ein Objekt oder das Verstecken von Implementierungsdetails. Im folgenden Beispiel gehören die privaten Daten und Methoden innerhalb des Objekts und sind im `privates`-Objekt gespeichert, das eine `WeakMap` ist. Alles, was auf der Instanz und dem Prototyp exponiert ist, ist öffentlich; alles andere ist von der Außenwelt unzugänglich, da `privates` nicht aus dem Modul exportiert wird.

```js
const privates = new WeakMap();

export default function Public() {
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
```

> [!NOTE]
> Dieser Anwendungsfall kann inzwischen mit [Klassen und privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) umgesetzt werden.

## Sets

### Set-Objekt

{{jsxref("Set")}}-Objekte sind Sammlungen einzigartiger Werte. Sie können ihre Elemente in Einfügereihenfolge iterieren. Ein Wert in einem `Set` darf nur einmal vorkommen; er ist einzigartig in der Sammlung des `Set`.

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

Sie können ein {{jsxref("Array")}} aus einem Set mithilfe von {{jsxref("Array.from")}} oder der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) erstellen. Auch der `Set`-Konstruktor akzeptiert ein `Array`, um in die andere Richtung umgewandelt zu werden.

> [!NOTE]
> `Set`-Objekte speichern _einzigartige Werte_—daher werden alle doppelten Elemente aus einem Array beim Konvertieren gelöscht!

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Vergleich von Array und Set

Traditionell wurden in JavaScript in vielen Situationen Mengenelemente in Arrays gespeichert. Das `Set`-Objekt hat jedoch einige Vorteile:

- Das Löschen von Array-Elementen nach Wert (`arr.splice(arr.indexOf(val), 1)`) ist sehr langsam.
- Mit `Set`-Objekten können Sie Elemente anhand ihres Wertes löschen. Bei einem Array müssten Sie basierend auf dem Index eines Elements `splice` verwenden.
- Der Wert {{jsxref("NaN")}} kann in einem Array nicht mit `indexOf` gefunden werden.
- `Set`-Objekte speichern einzigartige Werte. Sie müssen keine Doppelgänger manuell nachverfolgen.

### WeakSet-Objekt

{{jsxref("WeakSet")}}-Objekte sind Sammlungen von speicherbereinigbaren Werten, einschließlich Objekten und [nicht registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert im `WeakSet` darf nur einmal vorkommen. Er ist einzigartig in der Sammlung des `WeakSet`.

Die Hauptunterschiede zum {{jsxref("Set")}}-Objekt sind:

- Im Gegensatz zu `Sets` sind `WeakSets` **Sammlungen von _Objekten oder Symbolen nur_**, und nicht von beliebigen Werten beliebiger Typen.
- Das `WeakSet` ist _schwach_: Referenzen zu Objekten in der Sammlung werden schwach gehalten. Wenn es keine andere Referenz zu einem im `WeakSet` gespeicherten Objekt gibt, können sie gesammelt werden. Das bedeutet auch, dass es keine Liste der aktuellen Objekte in der Sammlung gibt.
- `WeakSets` sind nicht aufzählbar.

Die Anwendungszwecke von `WeakSet`-Objekten sind begrenzt. Sie werden keinen Speicherverlust verursachen, daher kann es sicher sein, DOM-Elemente als Schlüssel zu verwenden und sie zu Überwachungszwecken zu markieren.

## Schlüssel- und Wertgleichheit von Map und Set

Sowohl die Schlüsselgleichheit von `Map`-Objekten als auch die Wertgleichheit von `Set`-Objekten basieren auf dem [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality):

- Die Gleichheit funktioniert wie der Identitätsvergleichsoperator `===`.
- `-0` und `+0` werden als gleich betrachtet.
- {{jsxref("NaN")}} wird sich selbst als gleich betrachtet (im Gegensatz zu `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}
