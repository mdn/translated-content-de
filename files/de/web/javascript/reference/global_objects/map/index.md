---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Das **`Map`**-Objekt hält Schlüssel-Werte-Paare und merkt sich die ursprüngliche Einfügereihenfolge der Schlüssel. Jeder Wert (sowohl Objekte als auch [primitive Werte](/de/docs/Glossary/Primitive)) kann sowohl als Schlüssel als auch als Wert verwendet werden.

{{EmbedInteractiveExample("pages/js/map.html", "taller")}}

## Beschreibung

`Map`-Objekte sind Sammlungen von Schlüssel-Werte-Paaren. Ein Schlüssel in der `Map` **darf nur einmal vorkommen**; er ist einzigartig in der Sammlung der `Map`. Ein `Map`-Objekt wird durch Schlüssel-Werte-Paare iteriert – eine {{jsxref("Statements/for...of", "for...of")}}-Schleife gibt ein 2-Mitglieder-Array von `[key, value]` für jede Iteration zurück. Die Iteration erfolgt in der _Einfügereihenfolge_, die der Reihenfolge entspricht, in der jedes Schlüssel-Wert-Paar zuerst in die Map durch die [`set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/set)-Methode eingefügt wurde (das heißt, es war kein Schlüssel mit demselben Wert bereits vorhanden, als `set()` aufgerufen wurde).

Die Spezifikation erfordert, dass Maps so implementiert werden, "dass sie im Durchschnitt Zugriffszeiten bieten, die sublinear zur Anzahl der Elemente in der Sammlung sind". Daher könnte sie intern als Hashtabelle (mit O(1)-Nachschlagen), als Suchbaum (mit O(log(N))-Nachschlagen) oder als andere Datenstruktur dargestellt werden, solange die Komplexität besser als O(N) ist.

### Gleichheit der Schlüssel

Die Wertgleichheit basiert auf dem [SameValueZero](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. (Früher wurde [SameValue](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is) verwendet, wodurch `0` und `-0` unterschiedlich behandelt wurden. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).) Das bedeutet, dass {{jsxref("NaN")}} dasselbe wie `NaN` ist (auch wenn `NaN !== NaN`) und alle anderen Werte gemäß den Semantiken des `===`-Operators als gleich betrachtet werden.

### Objekte vs. Maps

{{jsxref("Object")}} ist ähnlich wie `Map` – beide ermöglichen es Ihnen, Schlüssel zu Werten festzulegen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas unter einem Schlüssel gespeichert ist. Aus diesem Grund (und weil es keine eingebauten Alternativen gab), wurde `Object` historisch als `Map` verwendet.

Es gibt jedoch wichtige Unterschiede, die `Map` in einigen Fällen vorzuziehen machen:

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
      <th scope="row">Unbeabsichtigte Schlüssel</th>
      <td>
        Eine <code>Map</code> enthält standardmäßig keine Schlüssel. Sie enthält nur das, was ausdrücklich hineingelegt wird.
      </td>
      <td>
        <p>
          Ein <code>Object</code> hat ein Prototyp, sodass es Standardschlüssel enthält, die mit Ihren eigenen Schlüsseln kollidieren könnten, wenn Sie nicht darauf achten.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dies kann umgangen werden, indem man
            {{jsxref("Object.create", "Object.create(null)")}} verwendet,
            aber das wird selten getan.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Sicherheit</th>
      <td>
        Eine <code>Map</code> ist sicher zu verwenden mit benutzerdefinierten Schlüsseln und Werten.
      </td>
      <td>
        <p>
          Das Setzen von benutzerdefinierten Schlüssel-Wert-Paaren auf einem <code>Object</code> kann einem Angreifer möglicherweise erlauben, den Prototyp des Objekts zu überschreiben, was zu <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">Objekt-Injektionsangriffen</a> führen kann. Wie das Problem mit unbeabsichtigten Schlüsseln kann dies auch durch die Verwendung eines <code>null</code>-Prototyp-Objekts gemildert werden.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsseltypen</th>
      <td>
        Die Schlüssel einer <code>Map</code> können jeden Wert haben (einschließlich Funktionen, Objekte oder beliebiger Primitivwerte).
      </td>
      <td>
        Die Schlüssel eines <code>Object</code> müssen entweder ein {{jsxref("String")}} oder ein {{jsxref("Symbol")}} sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsselreihenfolge</th>
      <td>
        <p>
          Die Schlüssel in einer <code>Map</code> sind auf eine einfache, unkomplizierte Weise geordnet: Ein <code>Map</code>-Objekt iteriert über Einträge, Schlüssel und Werte in der Reihenfolge der Einfügung.
        </p>
      </td>
      <td>
        <p>
          Obwohl die Schlüssel eines normalen <code>Object</code> jetzt geordnet sind, war dies nicht immer der Fall, und die Reihenfolge ist komplex. Daher ist es am besten, sich nicht auf die Reihenfolge der Eigenschaften zu verlassen.
        </p>
        <p>
          Die Reihenfolge wurde erstmals für eigene Eigenschaften in ECMAScript 2015 definiert; ECMAScript 2020 definiert die Reihenfolge auch für geerbte Eigenschaften. Beachten Sie jedoch, dass keine einzelnen Mechanismen <strong>alle</strong> Eigenschaften eines Objekts iterieren; die verschiedenen Mechanismen schließen jeweils unterschiedliche Teilmengen von Eigenschaften ein. ({{jsxref("Statements/for...in", "for-in")}} schließt nur aufzählbare, string-schlüsselbasierte Eigenschaften ein; {{jsxref("Object.keys")}} schließt nur eigene, aufzählbare, string-schlüsselbasierte Eigenschaften ein; {{jsxref("Object.getOwnPropertyNames")}} schließt eigene, string-schlüsselbasierte Eigenschaften ein, selbst wenn sie nicht aufzählbar sind; {{jsxref("Object.getOwnPropertySymbols")}} tut dasselbe nur für <code>Symbol</code>-basierte Schlüssel-Eigenschaften, usw.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Größe</p></th>
      <td>
        Die Anzahl der Elemente in einer <code>Map</code> kann leicht über ihre {{jsxref("Map.prototype.size", "size")}}-Eigenschaft abgerufen werden.
      </td>
      <td>
        Die Bestimmung der Anzahl der Elemente in einem <code>Object</code> ist umständlicher und weniger effizient. Ein üblicher Weg besteht darin, die {{jsxref("Array/length", "Länge")}} des Arrays zu verwenden, das von {{jsxref("Object.keys()")}} zurückgegeben wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Iteration</th>
      <td>
        Eine <code>Map</code> ist ein <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols">iterierbares</a> Objekt, sodass es direkt iteriert werden kann.
      </td>
      <td>
        <p>
          <code>Object</code> implementiert kein <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">Iterationsprotokoll</a> und daher sind Objekte nicht direkt iterierbar mit der JavaScript <a href="/de/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a>-Anweisung (standardmäßig).
        </p>
        <div class="notecard note">
          <p><strong>Hinweis:</strong></p>
          <ul>
            <li>
              Ein Objekt kann das Iterationsprotokoll implementieren, oder Sie können ein iterierbares Objekt für ein Objekt erhalten, indem Sie <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys</code></a> oder <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"><code>Object.entries</code></a> verwenden.
            </li>
            <li>
              Die <a href="/de/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a>-Anweisung ermöglicht es Ihnen, über die <em>aufzählbaren</em> Eigenschaften eines Objekts zu iterieren.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Leistung</th>
      <td>
        <p>
          Bessere Leistung in Szenarien, die häufige Hinzufügungen und Löschungen von Schlüssel-Wert-Paaren erfordern.
        </p>
      </td>
      <td>
        <p>
          Nicht optimiert für häufige Hinzufügungen und Löschungen von Schlüssel-Wert-Paaren.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Serialisierung und Parsing</th>
      <td>
        <p>Keine native Unterstützung für Serialisierung oder Parsing.</p>
        <p>
          (Aber Sie können Ihre eigene Unterstützung für die Serialisierung und das Parsing von <code>Map</code> aufbauen, indem Sie {{jsxref("JSON.stringify()")}} mit seinem <em>replacer</em> Argument und {{jsxref("JSON.parse()")}} mit seinem <em>reviver</em> Argument verwenden. Siehe die Stack Overflow Frage <a href="https://stackoverflow.com/q/29085197/">Wie JSON.stringify man eine ES6 Map?</a>).
        </p>
      </td>
      <td>
        <p>
          Native Unterstützung für die Serialisierung von {{jsxref("Object")}} zu JSON, unter Verwendung von {{jsxref("JSON.stringify()")}}.
        </p>
        <p>
          Native Unterstützung für das Parsing von JSON zu {{jsxref("Object")}}, unter Verwendung von {{jsxref("JSON.parse()")}}.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Setzen von Objekteigenschaften

Das Setzen von Objekteigenschaften funktioniert auch für Map-Objekte und kann zu erheblichen Verwirrungen führen.

Daher scheint es auf folgende Weise zu funktionieren:

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Aber diese Art des Setzens einer Eigenschaft interagiert nicht mit der Map-Datenstruktur. Es nutzt das Feature des generischen Objekts. Der Wert von 'bla' wird nicht in der Map für Abfragen gespeichert. Andere Operationen auf den Daten schlagen fehl:

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Die korrekte Verwendung zum Speichern von Daten in der Map erfolgt über die Methode `set(key, value)`.

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

Genau wie bei `Map` können Einträge in derselben Reihenfolge iteriert werden, in der sie dem Objekt hinzugefügt wurden. `Map`-ähnliche Objekte und `Map` haben auch Eigenschaften und Methoden, die denselben Namen und Verhalten teilen. Anders als `Map` erlauben sie jedoch nur bestimmte vordefinierte Typen für die Schlüssel und Werte jedes Eintrags.

Die zulässigen Typen sind in der IDL-Definition der Spezifikation festgelegt. Zum Beispiel ist [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) ein `Map`-ähnliches Objekt, das Zeichenfolgen für Schlüssel und Objekte für Werte verwenden muss. Dies ist in der folgenden IDL-Definition der Spezifikation festgelegt:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

`Map`-ähnliche Objekte sind entweder schreibgeschützt oder schreibbar (siehe das `readonly`-Schlüsselwort in der obigen IDL).

- Schreibgeschützte `Map`-ähnliche Objekte haben die Eigenschaft [`size`](#map.prototype.size) und die Methoden: [`entries()`](#map.prototype.entries), [`forEach()`](#map.prototype.foreach), [`get()`](#map.prototype.get), [`has()`](#map.prototype.has), [`keys()`](#map.prototype.keys), [`values()`](#map.prototype.values), und [`[Symbol.iterator]()`](#map.prototypesymbol.iterator).
- Schreibbare `Map`-ähnliche Objekte haben zusätzlich die Methoden: [`clear()`](#map.prototype.clear), [`delete()`](#map.prototype.delete), und [`set()`](#map.prototype.set).

Die Methoden und Eigenschaften haben dasselbe Verhalten wie die entsprechenden Entitäten in `Map`, mit Ausnahme der Beschränkung auf die Typen der Schlüssel und Werte.

Die folgenden sind Beispiele für schreibgeschützte `Map`-ähnliche Browserobjekte:

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
  - : Die Konstruktorfunktion, die zur Erstellung abgeleiteter Objekte verwendet wird.

## Statische Methoden

- {{jsxref("Map.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen iterierbaren Objekts unter Verwendung der von einer bereitgestellten Rückruffunktion zurückgegebenen Werte. Die endgültig zurückgegebene `Map` verwendet die einzigartigen Werte der Testfunktion als Schlüssel, die zum Abruf des Arrays von Elementen in jeder Gruppe verwendet werden können.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Map.prototype` definiert und werden von allen `Map`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Map.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das instanziierte Objekt erstellt hat. Bei `Map`-Instanzen ist der Anfangswert der {{jsxref("Map/Map", "Map")}}-Konstruktor.
- {{jsxref("Map.prototype.size")}}
  - : Gibt die Anzahl der Schlüssel-Wert-Paare im `Map`-Objekt zurück.
- `Map.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Map"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Map.prototype.clear()")}}
  - : Entfernt alle Schlüssel-Werte-Paare aus dem `Map`-Objekt.
- {{jsxref("Map.prototype.delete()")}}
  - : Gibt `true` zurück, wenn ein Element im `Map`-Objekt existierte und entfernt wurde, oder `false`, wenn das Element nicht existiert. `map.has(key)` wird anschließend `false` zurückgeben.
- {{jsxref("Map.prototype.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das ein Zwei-Mitglieder-Array von `[key, value]` für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.forEach()")}}
  - : Ruft `callbackFn` einmal für jedes Schlüssel-Wert-Paar im `Map`-Objekt in Einfügereihenfolge auf. Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er für jeden Rückruf als `this`-Wert verwendet.
- {{jsxref("Map.prototype.get()")}}
  - : Gibt den Wert zurück, der dem übergebenen Schlüssel zugeordnet ist, oder `undefined`, wenn keiner vorhanden ist.
- {{jsxref("Map.prototype.has()")}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob ein Wert mit dem übergebenen Schlüssel im `Map`-Objekt verknüpft wurde oder nicht.
- {{jsxref("Map.prototype.keys()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Schlüssel für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.set()")}}
  - : Setzt den Wert für den übergebenen Schlüssel im `Map`-Objekt. Gibt das `Map`-Objekt zurück.
- {{jsxref("Map.prototype.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das ein Zwei-Mitglieder-Array von `[key, value]` für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.

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

{{jsxref("NaN")}} kann auch als Schlüssel verwendet werden. Auch wenn jedes `NaN` nicht gleich sich selbst ist (`NaN !== NaN` ist wahr), funktioniert das folgende Beispiel, weil `NaN`s voneinander nicht zu unterscheiden sind:

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

Maps können zusammengeführt werden, wobei die Eindeutigkeit der Schlüssel gewahrt bleibt:

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
