---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`Map`**-Objekt speichert Schlüssel-Werte-Paare und merkt sich die ursprüngliche Einfügereihenfolge der Schlüssel. Jeder Wert (sowohl Objekte als auch {{Glossary("Primitive", "primitive Werte")}}) kann sowohl als Schlüssel als auch als Wert verwendet werden.

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

`Map`-Objekte sind Sammlungen von Schlüssel-Werte-Paaren. Ein Schlüssel in der `Map` **kann nur einmal vorkommen**; er ist in der Sammlung der `Map` einzigartig. Ein `Map`-Objekt wird durch Schlüssel-Werte-Paare iteriert — eine {{jsxref("Statements/for...of", "for...of")}}-Schleife gibt ein 2-Element-Array von `[key, value]` für jede Iteration zurück. Die Iteration erfolgt in der _Einfügereihenfolge_, die der Reihenfolge entspricht, in der jedes Schlüssel-Wert-Paar erstmals mit der Methode [`set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/set) in die Map eingefügt wurde (das heißt, es gab keinen Schlüssel mit demselben Wert in der Map, als `set()` aufgerufen wurde).

Die Spezifikation erfordert, dass Maps so implementiert werden, dass sie "im Durchschnitt Zugriffszeiten bieten, die sublinear zur Anzahl der Elemente in der Sammlung sind". Daher könnte sie intern als Hashtabelle (mit O(1)-Nachschlagen), Suchbaum (mit O(log(N))-Nachschlagen) oder einer anderen Datenstruktur dargestellt werden, solange die Komplexität besser als O(N) ist.

### Schlüsselkriterium

Die Wertgleichheit basiert auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. (Früher wurde [SameValue](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value_equality_using_object.is) verwendet, das `0` und `-0` als unterschiedlich behandelte. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).) Das bedeutet, dass {{jsxref("NaN")}} als dasselbe angesehen wird wie `NaN` (auch wenn `NaN !== NaN`) und alle anderen Werte gemäß der Semantik des `===`-Operators als gleich betrachtet werden.

### Objekte vs. Maps

{{jsxref("Object")}} ist ähnlich wie `Map`—beide ermöglichen es, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas unter einem Schlüssel gespeichert ist. Aus diesem Grund (und weil es keine eingebauten Alternativen gab) wurde `Object` historisch als `Map` verwendet.

Jedoch gibt es wichtige Unterschiede, die `Map` in einigen Fällen bevorzugen:

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
      <th scope="row">Zufällige Schlüssel</th>
      <td>
        Eine <code>Map</code> enthält standardmäßig keine Schlüssel. Sie enthält nur, was explizit hineingesteckt wurde.
      </td>
      <td>
        <p>
          Ein <code>Object</code> hat ein Prototyp, sodass es Standardschlüssel enthält, die mit Ihren eigenen Schlüsseln kollidieren könnten, wenn Sie nicht vorsichtig sind.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dies kann umgangen werden, indem {{jsxref("Object.create", "Object.create(null)")}} verwendet wird, aber das wird selten gemacht.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Sicherheit</th>
      <td>
        Eine <code>Map</code> ist sicher für die Verwendung mit benutzerdefinierten Schlüsseln und Werten.
      </td>
      <td>
        <p>
          Das Setzen von benutzerdefinierten Schlüssel-Wert-Paaren in einem <code>Object</code> kann es einem Angreifer ermöglichen, das Prototyp des Objekts zu überschreiben, was zu <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">Objekt-Injektionsangriffen</a> führen kann. Ähnlich wie bei zufälligen Schlüsseln kann dies durch die Verwendung eines Objekts mit <code>null</code>-Prototyp gemildert werden.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsseltypen</th>
      <td>
        Eine <code>Map</code>'s Schlüssel können beliebige Werte sein (einschließlich Funktionen, Objekte oder beliebige Primitive).
      </td>
      <td>
        Die Schlüssel eines <code>Objects</code> müssen entweder ein {{jsxref("String")}} oder ein {{jsxref("Symbol")}} sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsselreihenfolge</th>
      <td>
        <p>
          Die Schlüssel in einer <code>Map</code> sind in einer einfachen Weise geordnet: Ein <code>Map</code>-Objekt iteriert Einträge, Schlüssel und Werte in der Reihenfolge der Einfügeoperation.
        </p>
      </td>
      <td>
        <p>
          Obwohl die Schlüssel eines gewöhnlichen <code>Objects</code> jetzt geordnet sind, war das nicht immer der Fall, und die Ordnung ist komplex. Deshalb ist es am besten, sich nicht auf die Eigenschaftsreihenfolge zu verlassen.
        </p>
        <p>
          Die Ordnung wurde erstmals für eigene Eigenschaften in ECMAScript 2015 definiert; ECMAScript 2020 definiert die Ordnung auch für geerbte Eigenschaften. Beachten Sie jedoch, dass kein einziger Mechanismus <strong>alle</strong> Eigenschaften eines Objekts iteriert; die verschiedenen Mechanismen umfassen jeweils unterschiedliche Untergruppen von Eigenschaften. ({{jsxref("Statements/for...in", "for-in")}} umfasst nur aufzählbare, string-geschlüsselte Eigenschaften; {{jsxref("Object.keys")}} umfasst nur eigene, aufzählbare, string-geschlüsselte Eigenschaften; {{jsxref("Object.getOwnPropertyNames")}} umfasst eigene, string-geschlüsselte Eigenschaften, auch wenn sie nicht aufzählbar sind; {{jsxref("Object.getOwnPropertySymbols")}} macht dasselbe nur für <code>Symbol</code>-geschlüsselte Eigenschaften, etc.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Größe</p></th>
      <td>
        Die Anzahl der Einträge in einer <code>Map</code> wird leicht über die {{jsxref("Map.prototype.size", "size")}}-Eigenschaft abgerufen.
      </td>
      <td>
        Die Bestimmung der Anzahl der Elemente in einem <code>Object</code> ist umständlicher und weniger effizient. Ein häufiger Weg, dies zu tun, ist über die {{jsxref("Array/length", "length")}} des Arrays, das von {{jsxref("Object.keys()")}} zurückgegeben wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Iteration</th>
      <td>
        Eine <code>Map</code> ist ein <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols">iterables</a> Objekt, daher kann es direkt iteriert werden.
      </td>
      <td>
        <p>
          <code>Object</code> implementiert kein <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">Iterationsprotokoll</a>, und daher sind Objekte nicht direkt iterierbar mit der JavaScript <a href="/de/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a>-Anweisung (standardmäßig).
        </p>
        <div class="notecard note">
          <p><strong>Hinweis:</strong></p>
          <ul>
            <li>
              Ein Objekt kann das Iterationsprotokoll implementieren, oder Sie können ein Iterierbares für ein Objekt erhalten, indem Sie <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys</code></a> oder <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"><code>Object.entries</code></a> verwenden.
            </li>
            <li>
              Die <a href="/de/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a>-Anweisung ermöglicht es Ihnen, über die <em>enumerierbaren</em> Eigenschaften eines Objekts zu iterieren.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Performance</th>
      <td>
        <p>
          Performs better in scenarios involving frequent additions and removals of key-value pairs.
        </p>
      </td>
      <td>
        <p>
          Nicht optimiert für häufige Hinzufügungen und Entfernungen von Schlüssel-Wert-Paaren.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Serialisierung und Parsen</th>
      <td>
        <p>Keine native Unterstützung für Serialisierung oder Parsen.</p>
        <p>
          (Aber Sie können Ihre eigene Serialisierungs- und Parsen-Unterstützung für <code>Map</code> erstellen, indem Sie {{jsxref("JSON.stringify()")}} mit seinem <em>replacer</em>-Argument verwenden und {{jsxref("JSON.parse()")}} mit seinem <em>reviver</em>-Argument. Siehe die Stack Overflow-Frage <a href="https://stackoverflow.com/q/29085197/">Wie machen Sie eine JSON.stringify von einer ES6 Map?</a>).
        </p>
      </td>
      <td>
        <p>
          Native Unterstützung für Serialisierung von {{jsxref("Object")}} zu JSON, unter Verwendung von {{jsxref("JSON.stringify()")}}.
        </p>
        <p>
          Native Unterstützung für das Parsen von JSON zu {{jsxref("Object")}}, unter Verwendung von {{jsxref("JSON.parse()")}}.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Setzen von Object-Eigenschaften

Die Festlegung von Objekt-Eigenschaften funktioniert auch für Map-Objekte und kann zu erheblicher Verwirrung führen.

Daher scheint dies auf folgende Weise zu funktionieren:

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Aber diese Art, eine Eigenschaft zu setzen, interagiert nicht mit der Map-Datenstruktur. Es verwendet die Funktion des generischen Objekts. Der Wert von 'bla' wird nicht in der Map für Abfragen gespeichert. Andere Operationen auf den Daten schlagen fehl:

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Die korrekte Verwendung zum Speichern von Daten in der Map ist die Methode `set(key, value)`.

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

**Browser `Map`-ähnliche Objekte** (oder "mapähnliche Objekte") sind [Web API](/de/docs/Web/API)-Schnittstellen, die sich in vielerlei Hinsicht wie eine `Map` verhalten.

Genau wie `Map` können Einträge in der gleichen Reihenfolge iteriert werden, in der sie dem Objekt hinzugefügt wurden. `Map`-ähnliche Objekte und `Map` haben auch Eigenschaften und Methoden, die denselben Namen und Verhalten teilen. Anders als `Map` erlauben sie jedoch nur bestimmte vordefinierte Typen für die Schlüssel und Werte jedes Eintrags.

Die erlaubten Typen sind in der IDL-Definition der Spezifikation festgelegt. Zum Beispiel ist [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) ein `Map`-ähnliches Objekt, das Strings für Schlüssel und Objekte für Werte verwenden muss. Dies ist in der unten stehenden IDL-Spezifikation definiert:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

`Map`-ähnliche Objekte sind entweder schreibgeschützt oder schreiblesbar (siehe das Schlüsselwort `readonly` in der oben stehenden IDL).

- Schreibgeschützte `Map`-ähnliche Objekte haben die Eigenschaft {{jsxref("Map/size", "size")}} und die Methoden: {{jsxref("Map/entries", "entries()")}}, {{jsxref("Map/forEach", "forEach()")}}, {{jsxref("Map/get", "get()")}}, {{jsxref("Map/has", "has()")}}, {{jsxref("Map/keys", "keys()")}}, {{jsxref("Map/values", "values()")}}, und [`Symbol.iterator()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).
- Schreibbare `Map`-ähnliche Objekte haben zusätzlich die Methoden: {{jsxref("Map/clear", "clear()")}}, {{jsxref("Map/delete", "delete()")}}, und {{jsxref("Map/set", "set()")}}.

Die Methoden und Eigenschaften haben dasselbe Verhalten wie die entsprechenden Entitäten in `Map`, abgesehen von der Einschränkung der Typen der Schlüssel und Werte.

Die folgenden sind Beispiele für schreibgeschützte `Map`-ähnliche Browser-Objekte:

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
  - : Die Konstruktionsfunktion, die zum Erstellen abgeleiteter Objekte verwendet wird.

## Statische Methoden

- {{jsxref("Map.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterables unter Verwendung der Werte, die von einer bereitgestellten Rückruffunktion zurückgegeben werden. Die endgültige zurückgegebene `Map` verwendet die eindeutigen Werte der Testfunktion als Schlüssel, die verwendet werden können, um das Array von Elementen in jeder Gruppe zu erhalten.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Map.prototype` definiert und werden von allen `Map`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Map.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Map`-Instanzen ist der Anfangswert der {{jsxref("Map/Map", "Map")}}-Konstruktor.
- {{jsxref("Map.prototype.size")}}
  - : Gibt die Anzahl der Schlüssel/Werte-Paare im `Map`-Objekt zurück.
- `Map.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Map"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Map.prototype.clear()")}}
  - : Entfernt alle Schlüssel-Wert-Paare aus dem `Map`-Objekt.
- {{jsxref("Map.prototype.delete()")}}
  - : Gibt `true` zurück, wenn ein Element im `Map`-Objekt existierte und entfernt wurde, oder `false`, wenn das Element nicht existiert. `map.has(key)` wird danach `false` zurückgeben.
- {{jsxref("Map.prototype.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das ein zwei-Element-Array von `[key, value]` für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.forEach()")}}
  - : Ruft `callbackFn` einmal für jedes vorhandene Schlüssel-Wert-Paar im `Map`-Objekt auf, in Einfügereihenfolge. Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird dieser als `this`-Wert für jeden Rückruf verwendet.
- {{jsxref("Map.prototype.get()")}}
  - : Gibt den Wert zurück, der dem übergebenen Schlüssel zugeordnet ist, oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("Map.prototype.has()")}}
  - : Gibt ein boolesches Ergebnis zurück, das anzeigt, ob ein Wert mit dem übergebenen Schlüssel im `Map`-Objekt verknüpft wurde oder nicht.
- {{jsxref("Map.prototype.keys()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Schlüssel für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.set()")}}
  - : Legt den Wert für den übergebenen Schlüssel im `Map`-Objekt fest. Gibt das `Map`-Objekt zurück.
- {{jsxref("Map.prototype.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das ein zwei-Element-Array von `[key, value]` für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.

## Beispiele

### Verwendung des Map-Objekts

```js
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = () => {};

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
console.log(myMap.get(() => {})); // undefined, because keyFunc !== () => {}
```

### Verwendung von NaN als Map-Schlüssel

{{jsxref("NaN")}} kann ebenfalls als Schlüssel verwendet werden. Auch wenn jedes `NaN` nicht gleich sich selbst ist (`NaN !== NaN` ist wahr), funktioniert das folgende Beispiel, weil `NaN`s ununterscheidbar voneinander sind:

```js
const myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN);
// "not a number"

const otherNaN = Number("foo");
myMap.get(otherNaN);
// "not a number"
```

### Iterieren einer Map mit for...of

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

### Iterieren einer Map mit forEach()

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
> Beachten Sie, dass _die Daten selbst_ nicht geklont werden. Mit anderen Worten, es handelt sich nur um eine {{Glossary("Shallow_copy", "flache Kopie")}} der `Map`.

Maps können zusammengeführt werden, wobei die Eindeutigkeit der Schlüssel erhalten bleibt:

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
- [es-shims Polyfill von `Map`](https://www.npmjs.com/package/es-map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
