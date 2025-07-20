---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Das **`Map`** Objekt speichert Schlüssel-Werte-Paare und merkt sich die ursprüngliche Einfügereihenfolge der Schlüssel. Jeder Wert (sowohl Objekte als auch {{Glossary("Primitive", "primitive Werte")}}) kann als Schlüssel oder als Wert verwendet werden.

{{InteractiveExample("JavaScript Demo: Map", "taller")}}

```js interactive-example
const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));
// Expected output: 1

map.set("a", 97);

console.log(map.get("a"));
// Expected output: 97

console.log(map.size);
// Expected output: 3

map.delete("b");

console.log(map.size);
// Expected output: 2
```

## Beschreibung

`Map` Objekte sind Sammlungen von Schlüssel-Werte-Paaren. Ein Schlüssel in der `Map` **kann nur einmal vorkommen**; er ist im Kollektiv der `Map` einzigartig. Ein `Map` Objekt wird durch Schlüssel-Werte-Paare iteriert — eine {{jsxref("Statements/for...of", "for...of")}} Schleife liefert ein Array mit 2 Elementen `[key, value]` für jede Iteration zurück. Die Iteration erfolgt in _Einfügereihenfolge_, was der Reihenfolge entspricht, in der jedes Schlüssel-Werte-Paar zuerst durch die [`set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/set) Methode in die Karte eingefügt wurde (das heißt, es war kein Schlüssel mit demselben Wert bereits in der Map, als `set()` aufgerufen wurde).

Die Spezifikation erfordert, dass Karten so implementiert werden, "dass sie im Durchschnitt Zugriffzeiten bieten, die sublinear zur Anzahl der Elemente in der Sammlung sind". Daher könnte sie intern als Hashtabelle (mit O(1) Zugriff), als Suchbaum (mit O(log(N)) Zugriff) oder als eine andere Datenstruktur dargestellt werden, solange die Komplexität besser als O(N) ist.

### Schlüsseligkeit

Die Gleichheit der Werte basiert auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality) Algorithmus. (Früher wurde [SameValue](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value_equality_using_object.is) verwendet, das `0` und `-0` unterschiedlich behandelte. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).) Dies bedeutet, dass {{jsxref("NaN")}} als gleich zu `NaN` betrachtet wird (obwohl `NaN !== NaN`) und alle anderen Werte gemäß der Semantik des `===` Operators als gleich betrachtet werden.

### Objekte vs. Maps

{{jsxref("Object")}} ist ähnlich zu `Map` — beide ermöglichen es Ihnen, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas unter einem Schlüssel gespeichert ist. Aus diesem Grund (und weil es keine eingebauten Alternativen gab), wurde `Object` historisch als `Map` verwendet.

Es gibt jedoch wichtige Unterschiede, die `Map` in manchen Fällen vorzuziehen machen:

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
        Eine <code>Map</code> enthält standardmäßig keine Schlüssel. Sie enthält nur das, was ausdrücklich hineingelegt wurde.
      </td>
      <td>
        <p>
          Ein <code>Object</code> hat ein Prototype, daher enthält es Standardschlüssel, die mit Ihren eigenen Schlüsseln kollidieren könnten, wenn Sie nicht vorsichtig sind.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dies kann umgangen werden, indem man {{jsxref("Object.create", "Object.create(null)")}} verwendet, was jedoch selten gemacht wird.
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
          Das Setzen benutzerdefinierter Schlüssel-Werte-Paare auf einem <code>Object</code> könnte es einem Angreifer ermöglichen, das Prototype des Objekts zu überschreiben, was zu <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">Objekt-Injektionsangriffen</a> führen kann. Wie bei dem Problem der zufälligen Schlüssel kann dies auch durch die Verwendung eines <code>null</code>-Prototyp-Objekts gemildert werden.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsseltypen</th>
      <td>
        Die Schlüssel einer <code>Map</code> können jeden Wert haben (einschließlich Funktionen, Objekte oder beliebige Primitive).
      </td>
      <td>
        Die Schlüssel eines <code>Object</code> müssen entweder ein {{jsxref("String")}} oder ein {{jsxref("Symbol")}} sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsselreihenfolge</th>
      <td>
        <p>
          Die Schlüssel in einer <code>Map</code> sind in einer klaren
          Reihenfolge: Ein <code>Map</code> Objekt iteriert Einträge, Schlüssel und Werte in der Reihenfolge des Einfügens der Einträge.
        </p>
      </td>
      <td>
        <p>
          Obwohl die Schlüssel eines gewöhnlichen <code>Object</code> jetzt sortiert sind, war dies nicht immer der Fall, und die Reihenfolge ist komplex. Daher ist es am besten, sich nicht auf die Eigenschaftsreihenfolge zu verlassen.
        </p>
        <p>
          Die Reihenfolge wurde erstmals nur für eigene Eigenschaften in ECMAScript 2015 definiert; ECMAScript 2020 definiert die Reihenfolge auch für geerbte Eigenschaften. Beachten Sie jedoch, dass kein einzelner Mechanismus
          <strong>alle</strong> Eigenschaften eines Objekts iteriert; die verschiedenen Mechanismen
          schließen jeweils unterschiedliche Teilmengen von Eigenschaften ein.
          ({{jsxref("Statements/for...in", "for-in")}}
          schließt nur auflistbare, string-gesicherte Eigenschaften ein;
          {{jsxref("Object.keys")}} schließt nur eigene, auflistbare,
          string-gesicherte Eigenschaften ein;
          {{jsxref("Object.getOwnPropertyNames")}} schließt eigene,
          string-gesicherte Eigenschaften auch wenn nicht-auflistbar ein;
          {{jsxref("Object.getOwnPropertySymbols")}} tut das Gleiche
          nur für <code>Symbol</code>-gesicherte Eigenschaften, etc.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Größe</p></th>
      <td>
        Die Anzahl von Elementen in einer <code>Map</code> kann einfach über ihre {{jsxref("Map.prototype.size", "size")}} Eigenschaft abgerufen werden.
      </td>
      <td>
        Die Bestimmung der Anzahl von Elementen in einem <code>Object</code> ist umständlicher und weniger effizient. Ein gängiger Weg, dies zu tun, ist über die {{jsxref("Array/length", "length")}} des von {{jsxref("Object.keys()")}} zurückgegebenen Arrays.
      </td>
    </tr>
    <tr>
      <th scope="row">Iteration</th>
      <td>
        Eine <code>Map</code> ist ein <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols">iterierbares</a> Objekt und kann direkt iteriert werden.
      </td>
      <td>
        <p>
          <code>Object</code> implementiert kein <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">Iterierungsprotokoll</a> und ist daher nicht direkt mit der JavaScript <a href="/de/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a> Anweisung iterierbar (standardmäßig).
        </p>
        <div class="notecard note">
          <p><strong>Hinweis:</strong></p>
          <ul>
            <li>
              Ein Objekt kann das Iterationsprotokoll implementieren, oder Sie können ein
              iterierbares Objekt für ein Objekt erhalten, indem Sie <a
                href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                ><code>Object.keys</code></a
              > oder <a
                href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
                ><code>Object.entries</code></a
              > verwenden.
            </li>
            <li>
              Die
              <a href="/de/docs/Web/JavaScript/Reference/Statements/for...in"
                >for...in</a
              >
              Anweisung ermöglicht es Ihnen, über die
              <em>aufzählbaren</em> Eigenschaften eines Objekts zu iterieren.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Leistung</th>
      <td>
        <p>
          Bietet bessere Leistung in Szenarien, die häufige Hinzufügungen und Entfernungen von Schlüssel-Werte-Paaren beinhalten.
        </p>
      </td>
      <td>
        <p>
          Nicht optimiert für häufige Hinzufügungen und Entfernungen von Schlüssel-Werte-Paaren.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Serialisierung und Parsing</th>
      <td>
        <p>Keine native Unterstützung für Serialisierung oder Parsing.</p>
        <p>
          (Aber Sie können Ihre eigene Serialisierungs- und Parsing-Unterstützung für <code>Map</code> erstellen, indem Sie {{jsxref("JSON.stringify()")}} mit seinem <em>replacer</em> Argument und {{jsxref("JSON.parse()")}} mit seinem <em>reviver</em> Argument verwenden. Siehe die Stack Overflow Frage <a href="https://stackoverflow.com/q/29085197/">Wie JSON.stringify für eine ES6 Map verwendet wird?</a>).
        </p>
      </td>
      <td>
        <p>
          Native Unterstützung für die Serialisierung von {{jsxref("Object")}} zu JSON, indem {{jsxref("JSON.stringify()")}} verwendet wird.
        </p>
        <p>
          Native Unterstützung für das Parsen von JSON zu {{jsxref("Object")}}, indem {{jsxref("JSON.parse()")}} verwendet wird.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Festlegen von Objekteigenschaften

Das Festlegen von Objekteigenschaften funktioniert auch für Map Objekte und kann zu erheblichen Verwirrungen führen.

Daher erscheint dies auf einfach Weise:

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Aber diese Art der Festlegung einer Eigenschaft interagiert nicht mit der Map-Datenstruktur. Sie nutzt die Eigenschaft des generischen Objekts. Der Wert von 'bla' wird nicht in der Map für Abfragen gespeichert. Andere Operationen an den Daten schlagen fehl:

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Die korrekte Verwendung zur Speicherung von Daten in der Map erfolgt über die Methode `set(key, value)`.

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

**Browser `Map`-ähnliche Objekte** (oder "mapähnliche Objekte") sind [Web API](/de/docs/Web/API) Schnittstellen, die sich in vielerlei Hinsicht wie eine `Map` verhalten.

Genau wie `Map` können Einträge in derselben Reihenfolge durchlaufen werden, in der sie dem Objekt hinzugefügt wurden. `Map`-ähnliche Objekte und `Map` haben auch Eigenschaften und Methoden, die denselben Namen und dasselbe Verhalten teilen. Im Gegensatz zu `Map` erlauben sie jedoch nur spezifische vordefinierte Typen für die Schlüssel und Werte jedes Eintrags.

Die erlaubten Typen sind in der Spezifikations-IDL-Definition festgelegt. Zum Beispiel ist [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) ein `Map`-ähnliches Objekt, das Zeichenfolgen für Schlüssel und Objekte für Werte verwenden muss. Dies ist in der untenstehenden Spezifikations-IDL definiert:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

`Map`-ähnliche Objekte sind entweder nur lesbar oder lese-schreibbar (siehe das `readonly` Schlüsselwort in der obigen IDL).

- Nur-lesbare `Map`-ähnliche Objekte haben die Eigenschaft {{jsxref("Map/size", "size")}}, und die Methoden: {{jsxref("Map/entries", "entries()")}}, {{jsxref("Map/forEach", "forEach()")}}, {{jsxref("Map/get", "get()")}}, {{jsxref("Map/has", "has()")}}, {{jsxref("Map/keys", "keys()")}}, {{jsxref("Map/values", "values()")}}, und [`Symbol.iterator()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).
- Schreibbare `Map`-ähnliche Objekte haben zusätzlich die Methoden: {{jsxref("Map/clear", "clear()")}}, {{jsxref("Map/delete", "delete()")}}, und {{jsxref("Map/set", "set()")}}.

Die Methoden und Eigenschaften haben dasselbe Verhalten wie die gleichwertigen Entitäten in `Map`, abgesehen von der Einschränkung auf die Typen der Schlüssel und Werte.

Die folgenden sind Beispiele für nur-lesbare `Map`-ähnliche Browserobjekte:

- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
- [`EventCounts`](/de/docs/Web/API/EventCounts)
- [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)
- [`MIDIInputMap`](/de/docs/Web/API/MIDIInputMap)
- [`MIDIOutputMap`](/de/docs/Web/API/MIDIOutputMap)

## Konstruktor

- {{jsxref("Map/Map", "Map()")}}
  - : Erzeugt ein neues `Map` Objekt.

## Statische Eigenschaften

- [`Map[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species)
  - : Die Konstruktionsfunktion, die zum Erstellen abgeleiteter Objekte verwendet wird.

## Statische Methoden

- {{jsxref("Map.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterables unter Verwendung der von einer bereitgestellten Callback-Funktion zurückgegebenen Werte. Die abschließend zurückgegebene `Map` verwendet die einzigartigen Werte der Testfunktion als Schlüssel, die verwendet werden können, um die Array von Elementen in jeder Gruppe zu erhalten.

## Instanzeigenschaften

Diese Eigenschaften werden auf `Map.prototype` definiert und mit allen `Map` Instanzen geteilt.

- {{jsxref("Object/constructor", "Map.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erschaffen hat. Für `Map` Instanzen ist der Anfangswert der {{jsxref("Map/Map", "Map")}} Konstruktor.
- {{jsxref("Map.prototype.size")}}
  - : Gibt die Anzahl der Schlüssel/Wert-Paare im `Map` Objekt zurück.
- `Map.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Map"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Map.prototype.clear()")}}
  - : Entfernt alle Schlüssel-Wert-Paare aus dem `Map` Objekt.
- {{jsxref("Map.prototype.delete()")}}
  - : Gibt `true` zurück, wenn ein Element im `Map` Objekt existierte und entfernt wurde, oder `false`, wenn das Element nicht existiert. `map.has(key)` wird danach `false` zurückgeben.
- {{jsxref("Map.prototype.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das ein zweigliedriges Array von `[key, value]` für jedes Element im `Map` Objekt in der Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.forEach()")}}
  - : Ruft `callbackFn` einmal für jedes im `Map` Objekt existierende Schlüssel-Werte-Paar in der Einfügereihenfolge auf. Wenn ein `thisArg` Parameter an `forEach` übergeben wird, wird er als `this` Wert für jeden Callback verwendet.
- {{jsxref("Map.prototype.get()")}}
  - : Gibt den mit dem übergebenen Schlüssel assoziierten Wert zurück oder `undefined`, wenn keiner existiert.
- {{jsxref("Map.prototype.has()")}}
  - : Gibt einen Booleanwert zurück, der angibt, ob ein Wert in dem `Map` Objekt mit dem übergebenen Schlüssel assoziiert war oder nicht.
- {{jsxref("Map.prototype.keys()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Schlüssel für jedes Element im `Map` Objekt in der Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.set()")}}
  - : Setzt den Wert für den übergebenen Schlüssel im `Map` Objekt. Gibt das `Map` Objekt zurück.
- {{jsxref("Map.prototype.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `Map` Objekt in der Einfügereihenfolge enthält.
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das ein zweigliedriges Array von `[key, value]` für jedes Element im `Map` Objekt in der Einfügereihenfolge enthält.

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

### Verwenden von NaN als Map-Schlüssel

{{jsxref("NaN")}} kann auch als Schlüssel verwendet werden. Obwohl jedes `NaN` nicht gleich sich selbst ist (`NaN !== NaN` ist wahr), funktioniert das folgende Beispiel, weil `NaN`s ununterscheidbar voneinander sind:

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

Maps können mit einer `for...of` Schleife iteriert werden:

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

Maps können mit der {{jsxref("Map/forEach", "forEach()")}} Methode iteriert werden:

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
> Beachten Sie, dass _die Daten selbst_ nicht geklont werden. Mit anderen Worten, es ist nur eine {{Glossary("Shallow_copy", "flache Kopie")}} der `Map`.

Maps können zusammengeführt werden, wobei die Einzigartigkeit der Schlüssel erhalten bleibt:

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
