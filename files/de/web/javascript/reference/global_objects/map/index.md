---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Das **`Map`**-Objekt speichert Schlüssel-Wert-Paare und behält die ursprüngliche Einfügereihenfolge der Schlüssel bei.
Jeder Wert (sowohl Objekte als auch {{Glossary("Primitive", "primitive Werte")}}) kann entweder als Schlüssel oder als Wert verwendet werden.

{{InteractiveExample("JavaScript Demo: Map", "taller")}}

```js interactive-example
const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete("b");

console.log(map1.size);
// Expected output: 2
```

## Beschreibung

`Map`-Objekte sind Sammlungen von Schlüssel-Wert-Paaren. Ein Schlüssel in der `Map` **kann nur einmal vorkommen**; er ist in der Sammlung der `Map` eindeutig. Ein `Map`-Objekt wird in Schlüssel-Wert-Paaren durchlaufen — eine {{jsxref("Statements/for...of", "for...of")}}-Schleife gibt für jede Iteration ein 2-Elemente-Array `[key, value]` zurück. Die Iteration erfolgt in der _Einfügereihenfolge_, die der Reihenfolge entspricht, in der jedes Schlüssel-Wert-Paar erstmals mittels der [`set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/set)-Methode in die Map eingefügt wurde (das heißt, es gab keinen Schlüssel mit demselben Wert in der Map, als `set()` aufgerufen wurde).

Die Spezifikation fordert, dass Maps so implementiert werden, "dass sie im Durchschnitt Zugangsgeschwindigkeiten bieten, die sublinear in Bezug auf die Anzahl der Elemente in der Sammlung sind". Deshalb könnte sie intern als Hash-Tabelle (mit O(1)-Zugriff), Suchbaum (mit O(log(N))-Zugriff) oder jede andere Datenstruktur implementiert sein, solange die Komplexität besser als O(N) ist.

### Gleichheit von Schlüsseln

Die Wertegleichheit basiert auf dem [SameValueZero](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. (Früher wurde [SameValue](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is) verwendet, das `0` und `-0` als unterschiedlich behandelte. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).) Das bedeutet, dass {{jsxref("NaN")}} als gleich zu `NaN` angesehen wird (obwohl `NaN !== NaN`) und alle anderen Werte gemäß den Semantiken des `===`-Operators als gleich betrachtet werden.

### Objekte vs. Maps

{{jsxref("Object")}} ist ähnlich wie `Map`—beide erlauben es Ihnen, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu prüfen, ob etwas unter einem Schlüssel gespeichert ist. Aus diesem Grund (und weil es keine eingebauten Alternativen gab) wurde `Object` historisch als `Map` verwendet.

Dennoch gibt es wichtige Unterschiede, die `Map` in einigen Fällen vorziehen lassen:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Map</th>
      <th scope="col">Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Unabsichtliche Schlüssel</th>
      <td>
        Eine <code>Map</code> enthält standardmäßig keine Schlüssel. Sie enthält nur, was explizit hinzugefügt wurde.
      </td>
      <td>
        <p>
          Ein <code>Object</code> hat ein Prototyp, daher enthält es Standardschlüssel, die mit Ihren eigenen Schlüsseln in Konflikt geraten können, wenn Sie nicht aufpassen.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dies kann vermieden werden, indem {{jsxref("Object.create", "Object.create(null)")}} verwendet wird, aber dies wird selten gemacht.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Sicherheit</th>
      <td>
        Eine <code>Map</code> ist sicher in der Verwendung mit benutzerdefinierten Schlüsseln und Werten.
      </td>
      <td>
        <p>
          Das Setzen von benutzerdefinierten Schlüssel-Wert-Paaren auf ein <code>Object</code> kann es einem Angreifer ermöglichen, das Prototyp des Objekts zu überschreiben, was zu <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">
          Angriffe durch Objekteinfügung</a> führen kann. Ähnlich wie bei den unabsichtlichen Schlüsseln kann dies auch durch die Verwendung eines Objekts mit `null`-Prototyp vermieden werden.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsseltypen</th>
      <td>
        Die Schlüssel einer <code>Map</code> können jeden Wert (einschließlich Funktionen, Objekte oder beliebiger Primitive) haben.
      </td>
      <td>
        Die Schlüssel eines <code>Objects</code> müssen entweder ein {{jsxref("String")}} oder ein {{jsxref("Symbol")}} sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsselreihenfolge</th>
      <td>
        <p>
          Die Schlüssel in <code>Map</code> sind in einer übersichtlichen Reihenfolge: Ein <code>Map</code>-Objekt durchläuft Einträge, Schlüssel und Werte in der Reihenfolge der Eintrags-Einschübe.
        </p>
      </td>
      <td>
        <p>
          Obwohl die Schlüssel eines gewöhnlichen <code>Object</code> nun geordnet sind, war dies nicht immer der Fall und die Ordnung ist komplex. Es ist daher am besten, sich nicht auf die Reihenfolge der Eigenschaften zu verlassen.
        </p>
        <p>
          Die Reihenfolge wurde erstmals in ECMAScript 2015 für eigene Eigenschaften definiert; ECMAScript 2020 definiert auch die Reihenfolge für geerbte Eigenschaften. Beachten Sie jedoch, dass kein einziger Mechanismus iteriert
          <strong>alle</strong> Eigenschaften eines Objekts; die verschiedenen Mechanismen beinhalten jeweils unterschiedliche Teilmengen von Eigenschaften. ({{jsxref("Statements/for...in", "for-in")}} umfasst nur aufzählbare String-geschlüsselte Eigenschaften; {{jsxref("Object.keys")}} umfassen nur eigene, aufzählbare, string-geschlüsselte Eigenschaften; {{jsxref("Object.getOwnPropertyNames")}} umfassen eigene, string-geschlüsselte Eigenschaften, selbst wenn nicht aufzählbar; {{jsxref("Object.getOwnPropertySymbols")}} tut dasselbe nur für <code>Symbol</code>-geschlüsselte Eigenschaften etc.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Größe</p></th>
      <td>
        Die Anzahl der Elemente in einer <code>Map</code> lässt sich leicht über die {{jsxref("Map.prototype.size", "size")}}-Eigenschaft abrufen.
      </td>
      <td>
        Die Bestimmung der Anzahl der Elemente in einem <code>Object</code> ist umständlicher und weniger effizient. Eine gängige Methode ist die Verwendung der {{jsxref("Array/length", "length")}} des Arrays, das von {{jsxref("Object.keys()")}} zurückgegeben wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Iteration</th>
      <td>
        Eine <code>Map</code> ist ein
        <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols">iterable</a>, sodass sie direkt iteriert werden kann.
      </td>
      <td>
        <p>
          <code>Object</code> implementiert kein <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">Iterationsprotokoll</a>, und daher können Objekte nicht direkt mit der JavaScript-<a href="/de/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a>-Anweisung iteriert werden (standardmäßig).
        </p>
        <div class="notecard note">
          <p><strong>Hinweis:</strong></p>
          <ul>
            <li>
              Ein Objekt kann das Iterationsprotokoll implementieren, oder Sie können einen Iterierbaren für ein Objekt erhalten, indem Sie <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys</code></a> oder <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"><code>Object.entries</code></a> verwenden.
            </li>
            <li>
              Die <a href="/de/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a>-Anweisung ermöglicht es, die <em>aufzählbaren</em> Eigenschaften eines Objekts zu durchlaufen.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Leistung</th>
      <td>
        <p>
          Besser geeignet für Szenarien mit häufigem Hinzufügen und Entfernen von Schlüssel-Wert-Paaren.
        </p>
      </td>
      <td>
        <p>
          Nicht für häufiges Hinzufügen und Entfernen von Schlüssel-Wert-Paaren optimiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Serialisierung und Parsing</th>
      <td>
        <p>Keine native Unterstützung für Serialisierung oder Parsing.</p>
        <p>
          (Aber Sie können Ihre eigene Unterstützung für Serialisierung und Parsing für <code>Map</code> mit {{jsxref("JSON.stringify()")}} und deren <em>Replacer</em>-Argument sowie mit {{jsxref("JSON.parse()")}} und deren <em>Reviver</em>-Argument erstellen. Siehe die Stack Overflow-Frage <a href="https://stackoverflow.com/q/29085197/">Wie serialisiert man eine ES6 Map mit JSON.stringify?</a>).
        </p>
      </td>
      <td>
        <p>
          Native Unterstützung für die Serialisierung von {{jsxref("Object")}} zu JSON, mit {{jsxref("JSON.stringify()")}}.
        </p>
        <p>
          Native Unterstützung für das Parsen von JSON zu {{jsxref("Object")}}, mit {{jsxref("JSON.parse()")}}.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Einstellen von Objekteigenschaften

Das Setzen von Objekteigenschaften funktioniert auch für Map-Objekte und kann zu erheblicher Verwirrung führen.

Daher scheint Folgendes so zu funktionieren:

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Diese Art des Festlegens einer Eigenschaft interagiert jedoch nicht mit der Map-Datenstruktur. Es wird die Funktion des generischen Objekts verwendet. Der Wert von 'bla' wird in der Map nicht zur Abfrage gespeichert. Andere Vorgänge mit den Daten schlagen fehl:

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Die korrekte Verwendung zum Speichern von Daten in der Map erfolgt über die `set(key, value)`-Methode.

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

**Map-ähnliche Browserobjekte** (oder "mapartige Objekte") sind [Web-API](/de/docs/Web/API)-Schnittstellen, die in vielerlei Hinsicht wie eine `Map` funktionieren.

Genau wie `Map` können Einträge in derselben Reihenfolge durchlaufen werden, in der sie dem Objekt hinzugefügt wurden.
Map-ähnliche Objekte und `Map` haben auch Eigenschaften und Methoden, die denselben Namen und dasselbe Verhalten aufweisen.
Im Gegensatz zu `Map` erlauben sie jedoch nur bestimmte vordefinierte Typen für die Schlüssel und Werte jedes Eintrags.

Die erlaubten Typen sind in der Spezifikations-IDL-Definition festgelegt.
Zum Beispiel ist [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) ein mapartiges Objekt, das Strings für Schlüssel und Objekte für Werte verwenden muss.
Dies wird in der unten stehenden Spezifikations-IDL definiert:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

Map-ähnliche Objekte sind entweder schreibgeschützt oder lese-schreibbar (siehe das Schlüsselwort `readonly` in der oben genannten IDL).

- Schreibgeschützte mapartige Objekte besitzen die Eigenschaft [`size`](#map.prototype.size) und die Methoden: [`entries()`](#map.prototype.entries), [`forEach()`](#map.prototype.foreach), [`get()`](#map.prototype.get), [`has()`](#map.prototype.has), [`keys()`](#map.prototype.keys), [`values()`](#map.prototype.values), und [`[Symbol.iterator]()`](#map.prototypesymbol.iterator).
- Schreibbare mapartige Objekte haben zusätzlich die Methoden: [`clear()`](#map.prototype.clear), [`delete()`](#map.prototype.delete) und [`set()`](#map.prototype.set).

Die Methoden und Eigenschaften verhalten sich wie die entsprechenden Entitäten in `Map`, mit der Ausnahme der Einschränkung auf die Typen der Schlüssel und Werte.

Die folgenden sind Beispiele für schreibgeschützte mapartige Browserobjekte:

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
  - : Die Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Statische Methoden

- {{jsxref("Map.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterables anhand der Werte, die durch eine bereitgestellte Callback-Funktion zurückgegeben werden. Die final zurückgegebene `Map` verwendet die eindeutigen Werte der Testfunktion als Schlüssel, welche genutzt werden können, um das Array der Elemente in jeder Gruppe abzurufen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Map.prototype` definiert und werden von allen `Map`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Map.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Map`-Instanzen ist der Anfangswert der {{jsxref("Map/Map", "Map")}}-Konstruktor.
- {{jsxref("Map.prototype.size")}}
  - : Gibt die Anzahl der Schlüssel-Wert-Paare im `Map`-Objekt zurück.
- `Map.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Map"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Map.prototype.clear()")}}
  - : Entfernt alle Schlüssel-Wert-Paare aus dem `Map`-Objekt.
- {{jsxref("Map.prototype.delete()")}}
  - : Gibt `true` zurück, wenn ein Element im `Map`-Objekt existierte und entfernt wurde, oder `false`, wenn das Element nicht existiert. `map.has(key)` gibt danach `false` zurück.
- {{jsxref("Map.prototype.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das ein Zwei-Elemente-Array `[key, value]` für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.forEach()")}}
  - : Ruft `callbackFn` einmal für jedes Schlüssel-Wert-Paar im `Map`-Objekt in Einfügereihenfolge auf. Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er als `this`-Wert für jeden Rückruf verwendet.
- {{jsxref("Map.prototype.get()")}}
  - : Gibt den mit dem übergebenen Schlüssel verknüpften Wert zurück oder `undefined`, wenn keiner existiert.
- {{jsxref("Map.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Wert mit dem angegebenen Schlüssel im `Map`-Objekt verknüpft wurde oder nicht.
- {{jsxref("Map.prototype.keys()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Schlüssel für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.set()")}}
  - : Setzt den Wert für den übergebenen Schlüssel im `Map`-Objekt. Gibt das `Map`-Objekt zurück.
- {{jsxref("Map.prototype.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das ein Zwei-Elemente-Array `[key, value]` für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.

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

### Nutzung von NaN als Map-Schlüssel

{{jsxref("NaN")}} kann ebenfalls als Schlüssel verwendet werden. Obwohl jedes `NaN` nicht gleich sich selbst ist (`NaN !== NaN` ist wahr), funktioniert das folgende Beispiel, da `NaN`s nicht voneinander unterschieden werden können:

```js
const myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN);
// "not a number"

const otherNaN = Number("foo");
myMap.get(otherNaN);
// "not a number"
```

### Iteration der Map mit for...of

Maps können mit einer `for...of`-Schleife durchlaufen werden:

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

### Iteration der Map mit forEach()

Maps können mit der {{jsxref("Map/forEach", "forEach()")}}-Methode durchlaufen werden:

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

### Klonieren und Verbinden von Maps

Ähnlich wie `Array`s können `Map`s geklont werden:

```js
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)
```

> [!NOTE]
> Beachten Sie, dass _die Daten selbst_ nicht geklont werden.

Maps können verbunden werden, wobei die Schlüssel eindeutig bleiben:

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

Maps können auch mit Arrays verbunden werden:

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
const merged = new Map([...first, ...second, [1, "un"]]);

console.log(merged.get(1)); // un
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
