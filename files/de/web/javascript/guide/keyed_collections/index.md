---
title: Schlüsselbasierte Sammlungen
slug: Web/JavaScript/Guide/Keyed_collections
l10n:
  sourceCommit: 1aaf97a83f7db21f5067daa9dcb1f1faa3613aaa
---

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

Dieses Kapitel stellt Sammlungen von Daten vor, die über einen Schlüssel indiziert sind; `Map`- und `Set`-Objekte enthalten Elemente, die in der Reihenfolge der Einfügung iterierbar sind.

## Maps

### Map-Objekt

Ein {{jsxref("Map")}}-Objekt ist eine Schlüssel/Wert-Karte, die ihre Elemente in der Einfügereihenfolge iterieren kann.

Der folgende Code zeigt einige grundlegende Operationen mit einer `Map`. Weitere Beispiele und die vollständige API finden Sie auch auf der {{jsxref("Map")}}-Referenzseite. Sie können eine {{jsxref("Statements/for...of", "for...of")}}-Schleife verwenden, um für jede Iteration ein Array von `[key, value]` zurückzugeben.

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

Traditionell wurden {{jsxref("Object", "Objekte", "", 1)}} verwendet, um Strings auf Werte abzubilden. Objekte ermöglichen es Ihnen, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas unter einem Schlüssel gespeichert ist. `Map`-Objekte haben jedoch einige Vorteile, die sie zu besseren Karten machen.

- Die Schlüssel eines `Object` sind [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), während sie bei einer `Map` von jedem Wert sein können.
- Sie können die `Größe` einer `Map` leicht ermitteln, während Sie bei einem `Object` die Größe manuell nachverfolgen müssen.
- Die Iteration von Maps erfolgt in der Einfügereihenfolge der Elemente.
- Ein `Object` hat ein Prototyp, daher gibt es standardmäßig Schlüssel in der Karte. (Dies kann umgangen werden, indem `map = Object.create(null)` verwendet wird.)

Diese drei Tipps können Ihnen helfen zu entscheiden, ob Sie eine `Map` oder ein `Object` verwenden sollten:

- Verwenden Sie Maps anstelle von Objekten, wenn Schlüssel erst zur Laufzeit unbekannt sind, insbesondere wenn die Schlüssel aus externem Input stammen.
- Maps unterstützen Schlüssel und Werte jeder Art und erfordern nicht, dass die Schlüssel in Zeichenfolgen oder Symbole serialisierbar sind.
- Verwenden Sie Objekte, wenn die Struktur im Voraus bekannt ist und alle Schlüssel als Strings ausgedrückt werden können.

### WeakMap-Objekt

Ein {{jsxref("WeakMap")}} ist eine Sammlung von Schlüssel/Wert-Paaren, deren Schlüssel Objekte oder [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein müssen, mit Werten jeden beliebigen [JavaScript-Typs](/de/docs/Web/JavaScript/Guide/Data_structures), und die keine starken Referenzen auf ihre Schlüssel erstellen. Das bedeutet, dass die Präsenz eines Objekts als Schlüssel in einer `WeakMap` das Objekt nicht daran hindert, vom Garbage Collector gesammelt zu werden. Sobald ein Objekt, das als Schlüssel verwendet wird, gesammelt wurde, werden die entsprechenden Werte in jeder `WeakMap` ebenfalls zu Kandidaten für die Müllabfuhr, solange sie nicht anderweitig stark referenziert werden. Der einzige primitive Typ, der als `WeakMap`-Schlüssel verwendet werden kann, ist das Symbol — genauer gesagt [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) — da nicht-registrierte Symbole garantiert einzigartig sind und nicht neu erstellt werden können.

Die `WeakMap`-API entspricht im Wesentlichen der `Map`-API. Eine `WeakMap` erlaubt jedoch nicht die Beobachtung der Lebendigkeit ihrer Schlüssel, weshalb sie keine Enumeration erlaubt. Es gibt also keine Methode, um eine Liste der Schlüssel in einer `WeakMap` zu erhalten. Wenn es eine gäbe, würde die Liste vom Zustand der Müllabfuhr abhängen, was zu Nicht-Determinismus führen würde.

Für weitere Informationen und Beispielcode siehe auch "Warum WeakMap?" auf der {{jsxref("WeakMap")}}-Referenzseite.

Ein Anwendungsfall für `WeakMap`-Objekte ist das Speichern privater Daten für ein Objekt oder das Verbergen von Implementierungsdetails. Im folgenden Beispiel gehören die privaten Daten und Methoden innerhalb des Objekts und werden im `privates`-Objekt gespeichert, das eine `WeakMap` ist. Alles, was auf der Instanz und dem Prototyp exponiert ist, ist öffentlich; alles andere ist von der Außenwelt unzugänglich, da `privates` nicht aus dem Modul exportiert wird.

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
> Dieser Anwendungsfall kann jetzt mit [Klassen und privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) implementiert werden.

## Sets

### Set-Objekt

{{jsxref("Set")}}-Objekte sind Sammlungen von einzigartigen Werten. Sie können ihre Elemente in der Einfügereihenfolge iterieren. Ein Wert in einem `Set` kann nur einmal vorkommen; er ist einzigartig in der Sammlung des `Set`.

Der folgende Code zeigt einige grundlegende Operationen mit einem `Set`. Weitere Beispiele und die vollständige API finden Sie auch auf der {{jsxref("Set")}}-Referenzseite.

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

Sie können ein {{jsxref("Array")}} aus einem Set mit {{jsxref("Array.from")}} oder der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) erstellen. Der `Set`-Konstruktor akzeptiert auch ein `Array`, um in die andere Richtung zu konvertieren.

> [!NOTE]
> `Set`-Objekte speichern _einzigartige Werte_—alle doppelten Elemente aus einem Array werden beim Konvertieren gelöscht!

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Vergleich zwischen Array und Set

Traditionell wurde eine Menge von Elementen in vielen Situationen in Arrays in JavaScript gespeichert. Das `Set`-Objekt hat jedoch einige Vorteile:

- Das Löschen von Array-Elementen nach Wert (`arr.splice(arr.indexOf(val), 1)`) ist sehr langsam.
- `Set`-Objekte ermöglichen das Löschen von Elementen nach ihrem Wert. Bei einem Array müssten Sie `splice` basierend auf dem Index eines Elements verwenden.
- Der Wert {{jsxref("NaN")}} kann mit `indexOf` in einem Array nicht gefunden werden.
- `Set`-Objekte speichern einzigartige Werte. Sie müssen Duplikate nicht manuell nachverfolgen.

### WeakSet-Objekt

{{jsxref("WeakSet")}}-Objekte sind Sammlungen von Garbage-collectable-Werten, einschließlich Objekten und [nicht-registrierten Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). Ein Wert im `WeakSet` kann nur einmal vorkommen. Er ist einzigartig in der Sammlung des `WeakSet`.

Die Hauptunterschiede zum {{jsxref("Set")}}-Objekt sind:

- Im Gegensatz zu `Sets` sind `WeakSets` **Sammlungen von _Objekten oder Symbolen nur_**, und nicht von beliebigen Werten jedweden Typs.
- Das `WeakSet` ist _schwach_: Referenzen auf Objekte in der Sammlung werden schwach gehalten. Wenn es keine andere Referenz auf ein im `WeakSet` gespeichertes Objekt gibt, können sie vom Garbage Collector gesammelt werden. Das bedeutet auch, dass es keine Liste der aktuell in der Sammlung gespeicherten Objekte gibt.
- `WeakSets` sind nicht aufzählbar.

Die Einsatzmöglichkeiten von `WeakSet`-Objekten sind begrenzt. Sie lecken keinen Speicher, daher kann es sicher sein, DOM-Elemente als Schlüssel zu verwenden und sie zum Beispiel für Tracking-Zwecke zu markieren.

## Schlüssel- und Wertgleichheit von Map und Set

Sowohl die Schlüsselgleichheit von `Map`-Objekten als auch die Wertgleichheit von `Set`-Objekten basieren auf dem [SameValueZero-Algorithmus](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality):

- Die Gleichheit funktioniert wie der Identitätsvergleichsoperator `===`.
- `-0` und `+0` werden als gleich angesehen.
- {{jsxref("NaN")}} wird als sich selbst gleich angesehen (im Gegensatz zu `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}
