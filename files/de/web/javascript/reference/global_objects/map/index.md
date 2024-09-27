---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Das **`Map`**-Objekt speichert Schlüssel-Wert-Paare und merkt sich die ursprüngliche Einfügereihenfolge der Schlüssel. Jeder Wert (sowohl Objekte als auch [primitiven Werten](/de/docs/Glossary/Primitive)) kann sowohl als Schlüssel als auch als Wert verwendet werden.

{{EmbedInteractiveExample("pages/js/map.html", "taller")}}

## Beschreibung

`Map`-Objekte sind Sammlungen von Schlüssel-Wert-Paaren. Ein Schlüssel in der `Map` **darf nur einmal vorkommen**; er ist in der Sammlung der `Map` eindeutig. Ein `Map`-Objekt wird durch Schlüssel-Wert-Paare iteriert - eine {{jsxref("Statements/for...of", "for...of")}}-Schleife liefert ein 2-Mitglieder-Array von `[key, value]` für jede Iteration. Die Iteration erfolgt in _Einfügereihenfolge_, was der Reihenfolge entspricht, in der jedes Schlüssel-Wert-Paar zuerst durch die [`set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/set)-Methode in die Map eingefügt wurde (also es keinen Schlüssel mit demselben Wert in der Map gab, als `set()` aufgerufen wurde).

Die Spezifikation erfordert, dass Maps so implementiert werden, "dass sie im Durchschnitt Zugriffzeiten bieten, die sublinear zur Anzahl der Elemente in der Sammlung sind". Daher könnte sie intern als Hash-Tabelle (mit O(1)-Zugriff), Suchbaum (mit O(log(N))-Zugriff) oder andere Datenstruktur dargestellt werden, solange die Komplexität besser als O(N) ist.

### Schlüsselgleichheit

Die Wertgleichheit basiert auf dem [SameValueZero](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. (Früher wurde [SameValue](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is) verwendet, das `0` und `-0` als unterschiedlich behandelte. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).) Das bedeutet, dass {{jsxref("NaN")}} als gleich zu `NaN` angesehen wird (obwohl `NaN !== NaN`) und alle anderen Werte gemäß der Semantik des `===` Operators als gleich betrachtet werden.

### Objekte vs. Maps

{{jsxref("Object")}} ist ähnlich zu `Map` — beide ermöglichen es Ihnen, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas an einem Schlüssel gespeichert ist. Aus diesem Grund (und da es keine integrierten Alternativen gab) wurde `Object` historisch als `Map` verwendet.

Es gibt jedoch wichtige Unterschiede, die `Map` in einigen Fällen vorzuziehen machen:

|                            | Map                                                                                                                                                                                         | Object                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unbeabsichtigte Schlüssel  | Eine <code>Map</code> enthält standardmäßig keine Schlüssel. Sie enthält nur das, was explizit hineingesetzt wird.                                                                          | Ein <code>Object</code> hat ein Prototyp, daher enthält es Standardschlüssel, die mit Ihren eigenen kollidieren könnten, wenn Sie nicht vorsichtig sind.<br><br><div class="notecard note"><p><strong>Hinweis:</strong> Dies kann umgangen werden, indem {{jsxref("Object.create", "Object.create(null)")}} verwendet wird, was jedoch selten getan wird.</p></div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Sicherheit                 | Eine <code>Map</code> ist sicher zu verwenden mit benutzerdefinierten Schlüsseln und Werten.                                                                                                | Das Einstellen von benutzerdefinierten Schlüssel-Wert-Paaren auf ein <code>Object</code> kann es einem Angreifer ermöglichen, den Prototypen des Objekts zu überschreiben, was zu <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">Objekt-Injection-Angriffen</a> führen kann. Wie das Problem der unbeabsichtigten Schlüssel kann dies ebenfalls gemindert werden, indem ein <code>null</code>-Prototyp-Objekt verwendet wird.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Schlüsseltypen             | Die Schlüssel einer <code>Map</code> können jeden Wert haben (einschließlich Funktionen, Objekte oder Primitiven).                                                                          | Die Schlüssel eines <code>Object</code> müssen entweder ein {{jsxref("String")}} oder ein {{jsxref("Symbol")}} sein.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Schlüsselreihenfolge       | Die Schlüssel in <code>Map</code> sind in einfacher, direkter Weise geordnet: Ein <code>Map</code>-Objekt iteriert Einträge, Schlüssel und Werte in der Reihenfolge der Eintrags-Einfügung. | Obwohl die Schlüssel eines gewöhnlichen <code>Object</code> jetzt geordnet sind, war das nicht immer der Fall, und die Ordnung ist komplex. Daher ist es am besten, sich nicht auf die Reihenfolge der Eigenschaften zu verlassen.<br><br>Die Reihenfolge wurde erstmals für eigene Eigenschaften in ECMAScript 2015 definiert; ECMAScript 2020 definiert die Ordnung auch für geerbte Eigenschaften. Beachten Sie jedoch, dass kein einziger Mechanismus <strong>alle</strong> Eigenschaften eines Objekts iteriert; die verschiedenen Mechanismen beinhalten jeweils unterschiedliche Eigenschaften-Untergruppen. ({{jsxref("Statements/for...in", "for-in")}} umfasst nur aufzählbare String-gebundene Eigenschaften; {{jsxref("Object.keys")}} umfasst nur eigene, aufzählbare, String-gebundene Eigenschaften; {{jsxref("Object.getOwnPropertyNames")}} umfasst eigene, String-gebundene Eigenschaften auch wenn sie nicht aufzählbar sind; {{jsxref("Object.getOwnPropertySymbols")}} tut dies für nur <code>Symbol</code>-gebundene Eigenschaften, etc.) |
| Größe                      | Die Anzahl der Elemente in einer <code>Map</code> lässt sich einfach von ihrer {{jsxref("Map.prototype.size", "size")}}-Eigenschaft abrufen.                                                | Die Bestimmung der Anzahl der Elemente in einem <code>Object</code> ist umständlicher und weniger effizient. Ein gebräuchlicher Weg dazu ist über die {{jsxref("Array/length", "Länge")}} des Arrays, das von {{jsxref("Object.keys()")}} zurückgegeben wird.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Iteration                  | Eine <code>Map</code> ist ein <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols">iterables</a> und kann direkt iteriert werden.                                                | <code>Object</code> implementiert kein <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">Iteration-Protokoll</a> und daher sind Objekte nicht direkt iterierbar mit der JavaScript-a <a href="/de/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a> Anweisung (standardmäßig).<br><br><div class="notecard note"><p><strong>Hinweis:</strong></p><ul><li>Ein Objekt kann das Iterationsprotokoll implementieren, oder Sie können ein iterables für ein Objekt verwenden, indem Sie <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys</code></a> oder <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"><code>Object.entries</code></a> verwenden.</li><li>Die <a href="/de/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> Anweisung ermöglicht es Ihnen, über die <em>aufzählbaren</em> Eigenschaften eines Objekts zu iterieren.</li></ul></div>                                                                             |
| Leistung                   | Bessere Leistung in Szenarien mit häufigen Hinzufügungen und Entfernungen von Schlüssel-Wert-Paaren.                                                                                        | Nicht optimiert für häufige Hinzufügungen und Entfernungen von Schlüssel-Wert-Paaren.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Serialisierung und Analyse | Keine native Unterstützung für die Serialisierung oder das Parsing.                                                                                                                         | Native Unterstützung für die Serialisierung von {{jsxref("Object")}} zu JSON, mit {{jsxref("JSON.stringify()")}}.<br><br>Nativer Support für das Parsing von JSON zu {{jsxref("Object")}}, mit {{jsxref("JSON.parse()")}}.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Einstellungen von Objekteigenschaften

Das Festlegen von Objekteigenschaften funktioniert auch bei Map-Objekten und kann erhebliche Verwirrung verursachen.

Daher scheint dies auf eine Weise zu funktionieren:

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Aber diese Art, eine Eigenschaft einzustellen, interagiert nicht mit der Map-Datenstruktur. Der Wert von 'bla' wird nicht in der Map für Abfragen gespeichert. Andere Operationen auf den Daten schlagen fehl:

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Die korrekte Nutzung zum Speichern von Daten in der Map erfolgt über die `set(key, value)`-Methode.

```js example-good
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1
```

### Map-ähnliche Browser-APIs

**Map-ähnliche Objekte** (oder "maplike Objekte") sind [Web API](/de/docs/Web/API) Schnittstellen, die sich in vielerlei Hinsicht wie eine `Map` verhalten.

Genau wie `Map` können Einträge in der gleichen Reihenfolge iteriert werden, in der sie dem Objekt hinzugefügt wurden. Map-ähnliche Objekte und `Map` haben ebenfalls Eigenschaften und Methoden, die denselben Namen und dasselbe Verhalten haben. Allerdings erlauben sie im Gegensatz zu `Map` nur bestimmte vordefinierte Typen für die Schlüssel und Werte jedes Eintrags.

Die zulässigen Typen werden in der Spezifikations-IDL-Definition festgelegt. Zum Beispiel ist [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) ein Map-ähnliches Objekt, das Zeichenfolgen für Schlüssel und Objekte für Werte verwenden muss. Dies ist in der Spezifikations-IDL unten definiert:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

Map-ähnliche Objekte sind entweder schreibgeschützt oder lesbar-schreibbar (siehe das `readonly`-Schlüsselwort im IDL oben).

- Schreibgeschützte Map-ähnliche Objekte haben die Eigenschaft [`size`](#map.prototype.size) und die Methoden: [`entries()`](#map.prototype.entries), [`forEach()`](#map.prototype.foreach), [`get()`](#map.prototype.get), [`has()`](#map.prototype.has), [`keys()`](#map.prototype.keys), [`values()`](#map.prototype.values) und [`[Symbol.iterator]()`](#map.prototypesymbol.iterator).
- Schreibbare Map-ähnliche Objekte haben zusätzlich die Methoden: [`clear()`](#map.prototype.clear), [`delete()`](#map.prototype.delete) und [`set()`](#map.prototype.set).

Die Methoden und Eigenschaften haben dasselbe Verhalten wie die gleichwertigen Entitäten in `Map`, mit Ausnahme der Einschränkung der Typen der Schlüssel und Werte.

Die folgenden sind Beispiele für schreibgeschützte Map-ähnliche Browser-Objekte:

- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
- [`EventCounts`](/de/docs/Web/API/EventCounts)
- [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)
- [`MIDIInputMap`](/de/docs/Web/API/MIDIInputMap)
- [`MIDIOutputMap`](/de/docs/Web/API/MIDIOutputMap)

## Konstruktor

- {{jsxref("Map/Map", "Map()")}}
  - : Erstellt ein neues `Map`-Objekt.

## Statische Eigenschaften

- [`Map[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species)
  - : Die Konstrukturfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Statische Methoden

- {{jsxref("Map.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterables unter Verwendung der von einer bereitgestellten Callback-Funktion zurückgegebenen Werte. Die endgültige zurückgegebene `Map` verwendet die eindeutigen Werte aus der Testfunktion als Schlüssel, die verwendet werden können, um das Array der Elemente in jeder Gruppe zu erhalten.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Map.prototype` definiert und werden von allen `Map`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Map.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Map`-Instanzen ist der Anfangswert der {{jsxref("Map/Map", "Map")}}-Konstruktor.
- {{jsxref("Map.prototype.size")}}
  - : Gibt die Anzahl der Schlüssel/Wert-Paare im `Map`-Objekt zurück.
- `Map.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Map"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Map.prototype.clear()")}}
  - : Entfernt alle Schlüssel-Wert-Paare aus dem `Map`-Objekt.
- {{jsxref("Map.prototype.delete()")}}
  - : Gibt `true` zurück, wenn ein Element im `Map`-Objekt vorhanden war und entfernt wurde, oder `false`, wenn das Element nicht existiert. `map.has(key)` wird danach `false` zurückgeben.
- {{jsxref("Map.prototype.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das ein zwei Mitglieder-Array von `[key, value]` für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.forEach()")}}
  - : Ruft `callbackFn` einmal für jedes im `Map`-Objekt vorhandene Schlüssel-Wert-Paar in Einfügereihenfolge auf. Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er als `this`-Wert für jeden Callback verwendet.
- {{jsxref("Map.prototype.get()")}}
  - : Gibt den Wert zurück, der dem übergebenen Schlüssel zugeordnet ist, oder `undefined`, wenn es keinen gibt.
- {{jsxref("Map.prototype.has()")}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Wert dem übergebenen Schlüssel im `Map`-Objekt zugeordnet ist oder nicht.
- {{jsxref("Map.prototype.keys()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Schlüssel für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.set()")}}
  - : Legt den Wert für den übergebenen Schlüssel im `Map`-Objekt fest. Gibt das `Map`-Objekt zurück.
- {{jsxref("Map.prototype.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das ein zwei Mitglieder-Array von `[key, value]` für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.

## Beispiele

### Verwendung des Map-Objekts

```js
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get("a string")); // "value associated with 'a string'", because keyString === 'a string'
console.log(myMap.get({})); // undefined, because keyObj !== {}
console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}
```

### Verwendung von NaN als Map-Schlüssel

{{jsxref("NaN")}} kann ebenfalls als Schlüssel verwendet werden. Obwohl jedes `NaN` sich selbst nicht entspricht (`NaN !== NaN` ist wahr), funktioniert das folgende Beispiel, weil `NaN`s nicht voneinander zu unterscheiden sind:

```js
const myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN);
// "not a number"

const otherNaN = Number("foo");
myMap.get(otherNaN);
// "not a number"
```

### Iteration von Map mit for...of

Maps können mit einer `for...of`-Schleife iteriert werden:

```js
const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one
```

### Iteration von Map mit forEach()

Maps können mit der {{jsxref("Map/forEach", "forEach()")}}-Methode iteriert werden:

```js
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
// 0 = zero
// 1 = one
```

### Beziehung zu Array-Objekten

```js
const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap = new Map(kvArray);

console.log(myMap.get("key1")); // "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap]);

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())); // ["key1", "key2"]
```

### Klonen und Zusammenführen von Maps

Genau wie `Array`s können `Map`s geklont werden:

```js
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)
```

> [!NOTE]
> Beachten Sie, dass _die Daten selbst_ nicht geklont werden.

Maps können zusammengeführt werden, wobei die Eindeutigkeit der Schlüssel beibehalten wird:

```js
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge two maps. The last repeated key wins.
// Spread syntax essentially converts a Map to an Array
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

Maps können auch mit Arrays zusammengeführt werden:

```js
const first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// Merge maps with an array. The last repeated key wins.
const merged = new Map([...first, ...second, [1, "eins"]]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Map` in `core-js`](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
