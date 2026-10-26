---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das **`Map`**-Objekt speichert Schlüssel-Wert-Paare und merkt sich die ursprüngliche Einfügereihenfolge der Schlüssel.
Jeder Wert (sowohl Objekte als auch {{Glossary("Primitive", "primitive Werte")}}) kann als Schlüssel oder als Wert verwendet werden.

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

`Map`-Objekte sind Sammlungen von Schlüssel-Wert-Paaren. Ein Schlüssel darf in einer `Map` **nur einmal vorkommen**; er ist innerhalb der Sammlung eindeutig. Über ein `Map`-Objekt wird anhand seiner Schlüssel-Wert-Paare iteriert: Eine {{jsxref("Statements/for...of", "for...of")}}-Schleife liefert bei jedem Durchlauf ein Array mit zwei Elementen, `[key, value]`. Die Iteration erfolgt in _Einfügereihenfolge_. Diese entspricht der Reihenfolge, in der die einzelnen Schlüssel-Wert-Paare erstmals mit der Methode [`set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/set) in die Map eingefügt wurden (das heißt, beim Aufruf von `set()` war noch kein gleicher Schlüssel in der Map vorhanden).

Die Spezifikation verlangt, dass Maps so implementiert werden, dass sie „im Durchschnitt Zugriffszeiten bieten, die sublinear zur Anzahl der Elemente in der Sammlung sind“. Intern könnte eine Map daher als Hashtabelle (mit einer Suchkomplexität von O(1)), als Suchbaum (mit einer Suchkomplexität von O(log(N))) oder mit einer anderen Datenstruktur umgesetzt sein, solange die Komplexität besser als O(N) ist.

### Gleichheit von Schlüsseln

Die Gleichheit von Werten basiert auf dem Algorithmus [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality). (Früher wurde [SameValue](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value_equality_using_object.is) verwendet, das `0` und `-0` als unterschiedlich behandelt. Beachten Sie die [Browser-Kompatibilität](#browser-kompatibilität).) Das bedeutet, dass {{jsxref("NaN")}} als gleich `NaN` gilt (obwohl `NaN !== NaN`) und alle anderen Werte gemäß der Semantik des Operators `===` als gleich betrachtet werden. Bei Objekten als Schlüsseln basiert die Gleichheit außerdem auf der Objektidentität. Sie werden anhand ihrer Referenz verglichen, nicht anhand ihres Werts. Beispiele finden Sie unter [Das Map-Objekt verwenden](#das_map-objekt_verwenden).

### Objects im Vergleich zu Maps

{{jsxref("Object")}} ähnelt `Map`: Bei beiden können Sie Schlüsseln Werte zuweisen, diese Werte abrufen, Schlüssel löschen und prüfen, ob unter einem Schlüssel etwas gespeichert ist. Aus diesem Grund (und weil es keine integrierten Alternativen gab) wurde `Object` lange Zeit als `Map` verwendet.

Es gibt jedoch wichtige Unterschiede, aufgrund derer `Map` in manchen Fällen vorzuziehen ist:

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
        Eine <code>Map</code> enthält standardmäßig keine Schlüssel. Sie enthält
        nur Einträge, die ausdrücklich hinzugefügt wurden.
      </td>
      <td>
        <p>
          Ein <code>Object</code> hat einen Prototyp und enthält deshalb
          standardmäßig Schlüssel, die mit Ihren eigenen Schlüsseln kollidieren
          können, wenn Sie nicht darauf achten.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dies lässt sich durch
            {{jsxref("Object.create", "Object.create(null)")}} umgehen,
            wird aber selten gemacht.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Sicherheit</th>
      <td>
        Eine <code>Map</code> kann sicher mit Schlüsseln und Werten verwendet
        werden, die von Benutzern bereitgestellt werden.
      </td>
      <td>
        <p>
          Werden von Benutzern bereitgestellte Schlüssel-Wert-Paare einem
          <code>Object</code> zugewiesen, kann ein Angreifer möglicherweise den
          Prototyp des Objekts überschreiben. Dies kann zu
          <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">
            Object-Injection-Angriffen
          </a> oder <a href="/de/docs/Web/Security/Attacks/Prototype_pollution">Prototype-Pollution-Angriffen</a> führen. Wie bei unbeabsichtigten Schlüsseln lässt sich dieses Risiko auch durch ein Objekt mit einem <code>null</code>-Prototyp mindern.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsseltypen</th>
      <td>
        Die Schlüssel einer <code>Map</code> können beliebige Werte sein
        (einschließlich Funktionen, Objekten und primitiven Werten).
      </td>
      <td>
        Die Schlüssel eines <code>Object</code> müssen entweder vom Typ
        {{jsxref("String")}} oder {{jsxref("Symbol")}} sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Reihenfolge der Schlüssel</th>
      <td>
        <p>
          Die Schlüssel einer <code>Map</code> folgen einer einfachen
          Reihenfolge: Über Einträge, Schlüssel und Werte eines
          <code>Map</code>-Objekts wird in der Reihenfolge iteriert, in der die
          Einträge eingefügt wurden.
        </p>
      </td>
      <td>
        <p>
          Zwar haben die Schlüssel eines gewöhnlichen <code>Object</code>
          inzwischen eine definierte Reihenfolge, doch war dies nicht immer
          der Fall, und die Regeln dafür sind komplex. Daher sollten Sie sich
          möglichst nicht auf die Reihenfolge von Eigenschaften verlassen.
        </p>
        <p>
          Die Reihenfolge wurde in ECMAScript 2015 zunächst nur für eigene
          Eigenschaften definiert; ECMAScript 2020 definiert sie auch für
          geerbte Eigenschaften. Beachten Sie jedoch, dass kein einzelner
          Mechanismus über <strong>alle</strong> Eigenschaften eines Objekts
          iteriert. Die verschiedenen Mechanismen berücksichtigen jeweils
          unterschiedliche Teilmengen von Eigenschaften.
          ({{jsxref("Statements/for...in", "for-in")}} berücksichtigt nur
          aufzählbare Eigenschaften mit String-Schlüsseln;
          {{jsxref("Object.keys")}} nur eigene, aufzählbare Eigenschaften
          mit String-Schlüsseln;
          {{jsxref("Object.getOwnPropertyNames")}} auch eigene, nicht
          aufzählbare Eigenschaften mit String-Schlüsseln;
          {{jsxref("Object.getOwnPropertySymbols")}} entsprechend nur eigene
          Eigenschaften mit <code>Symbol</code>-Schlüsseln usw.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Größe</p></th>
      <td>
        Die Anzahl der Einträge in einer <code>Map</code> lässt sich einfach
        über ihre Eigenschaft {{jsxref("Map.prototype.size", "size")}} abrufen.
      </td>
      <td>
        Die Anzahl der Einträge in einem <code>Object</code> zu ermitteln,
        ist umständlicher und weniger effizient. Eine gängige Möglichkeit
        besteht darin, die Eigenschaft {{jsxref("Array/length", "length")}}
        des von {{jsxref("Object.keys()")}} zurückgegebenen Arrays abzurufen.
      </td>
    </tr>
    <tr>
      <th scope="row">Iteration</th>
      <td>
        Eine <code>Map</code> ist
        <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols"
          >iterierbar</a
        > und kann daher direkt durchlaufen werden.
      </td>
      <td>
        <p>
          <code>Object</code> implementiert kein
          <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol"
            >Iterationsprotokoll</a
          >. Deshalb können Objekte standardmäßig nicht direkt mit der
          JavaScript-Anweisung
          <a href="/de/docs/Web/JavaScript/Reference/Statements/for...of"
            >for...of</a
          >
          durchlaufen werden.
        </p>
        <div class="notecard note">
          <p><strong>Hinweis:</strong></p>
          <ul>
            <li>
              Ein Objekt kann das Iterationsprotokoll implementieren. Alternativ
              können Sie mit
              <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                ><code>Object.keys</code></a
              > oder
              <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
                ><code>Object.entries</code></a
              >
              ein iterierbares Objekt erhalten.
            </li>
            <li>
              Mit der Anweisung
              <a href="/de/docs/Web/JavaScript/Reference/Statements/for...in"
                >for...in</a
              >
              können Sie über die <em>aufzählbaren</em> Eigenschaften eines
              Objekts iterieren.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Leistung</th>
      <td>
        <p>
          Bietet eine bessere Leistung, wenn häufig Schlüssel-Wert-Paare
          hinzugefügt und entfernt werden.
        </p>
      </td>
      <td>
        <p>
          Ist nicht für das häufige Hinzufügen und Entfernen von
          Schlüssel-Wert-Paaren optimiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Serialisierung und Parsing</th>
      <td>
        <p>Keine native Unterstützung für Serialisierung oder Parsing.</p>
        <p>
          (Sie können jedoch selbst Unterstützung für die Serialisierung
          und das Parsing von <code>Map</code> bereitstellen: Verwenden Sie
          {{jsxref("JSON.stringify()")}} mit seinem
          <em>replacer</em>-Argument und {{jsxref("JSON.parse()")}}
          mit seinem <em>reviver</em>-Argument. Siehe die Frage auf
          Stack Overflow
          <a href="https://stackoverflow.com/q/29085197/"
            >Wie verwendet man JSON.stringify für eine ES6-Map?</a
          >.)
        </p>
      </td>
      <td>
        <p>
          Native Unterstützung für die Serialisierung von {{jsxref("Object")}}
          nach JSON mit {{jsxref("JSON.stringify()")}}.
        </p>
        <p>
          Native Unterstützung für das Parsing von JSON zu {{jsxref("Object")}}
          mit {{jsxref("JSON.parse()")}}.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Objekteigenschaften setzen

Sie können auch bei Map-Objekten Objekteigenschaften setzen. Das kann zu erheblicher Verwirrung führen.

Daher scheint der folgende Ansatz zunächst zu funktionieren:

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Diese Art, eine Eigenschaft zu setzen, wirkt sich jedoch nicht auf die Datenstruktur der Map aus. Stattdessen wird eine Eigenschaft des allgemeinen Objekts gesetzt. Der Wert von 'bla' wird nicht so in der Map gespeichert, dass er über deren Methoden abgefragt werden kann. Andere Operationen mit den Daten schlagen fehl:

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Um Daten korrekt in der Map zu speichern, verwenden Sie die Methode `set(key, value)`.

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

**Map-ähnliche Browserobjekte** (auch „maplike objects“) sind [Web-API](/de/docs/Web/API)-Schnittstellen, die sich in vielerlei Hinsicht wie eine `Map` verhalten.

Wie bei `Map` kann über ihre Einträge in der Reihenfolge iteriert werden, in der sie dem Objekt hinzugefügt wurden.
Map-ähnliche Objekte und `Map` haben außerdem Eigenschaften und Methoden mit denselben Namen und demselben Verhalten.
Anders als `Map` erlauben sie für die Schlüssel und Werte der einzelnen Einträge jedoch nur bestimmte, vordefinierte Typen.

Die zulässigen Typen werden in der IDL-Definition der Spezifikation festgelegt.
Beispielsweise ist [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) ein Map-ähnliches Objekt, dessen Schlüssel Strings und dessen Werte Objekte sein müssen.
Dies ist in der folgenden IDL-Definition der Spezifikation festgelegt:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

Map-ähnliche Objekte sind entweder schreibgeschützt oder beschreibbar (siehe das Schlüsselwort `readonly` in der IDL oben).

- Schreibgeschützte Map-ähnliche Objekte haben die Eigenschaft {{jsxref("Map/size", "size")}} und die Methoden {{jsxref("Map/entries", "entries()")}}, {{jsxref("Map/forEach", "forEach()")}}, {{jsxref("Map/get", "get()")}}, {{jsxref("Map/has", "has()")}}, {{jsxref("Map/keys", "keys()")}}, {{jsxref("Map/values", "values()")}} und [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).
- Beschreibbare Map-ähnliche Objekte haben zusätzlich die Methoden {{jsxref("Map/clear", "clear()")}}, {{jsxref("Map/delete", "delete()")}} und {{jsxref("Map/set", "set()")}}.

Die Methoden und Eigenschaften verhalten sich wie die entsprechenden Bestandteile von `Map`, mit Ausnahme der Einschränkungen für die Typen der Schlüssel und Werte.

Die folgenden Browserobjekte sind Beispiele für schreibgeschützte Map-ähnliche Objekte:

- [`AudioParamMap`](/de/docs/Web/API/AudioParamMap)
- [`CSSFontFeatureValuesMap`](/de/docs/Web/API/CSSFontFeatureValuesMap)
- [`EventCounts`](/de/docs/Web/API/EventCounts)
- [`KeyboardLayoutMap`](/de/docs/Web/API/KeyboardLayoutMap)
- [`MIDIInputMap`](/de/docs/Web/API/MIDIInputMap)
- [`MIDIOutputMap`](/de/docs/Web/API/MIDIOutputMap)
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)

## Konstruktor

- {{jsxref("Map/Map", "Map()")}}
  - : Erstellt ein neues `Map`-Objekt.

## Statische Eigenschaften

- [`Map[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species)
  - : Die Konstruktorfunktion, mit der abgeleitete Objekte erstellt werden.

## Statische Methoden

- {{jsxref("Map.groupBy()")}}
  - : Gruppiert die Elemente eines übergebenen iterierbaren Objekts anhand der Werte, die eine bereitgestellte Callback-Funktion zurückgibt. Die zurückgegebene `Map` verwendet die eindeutigen Rückgabewerte dieser Funktion als Schlüssel. Über diese Schlüssel lassen sich die Arrays mit den Elementen der jeweiligen Gruppen abrufen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Map.prototype` definiert und werden von allen `Map`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Map.prototype.constructor")}}
  - : Die Konstruktorfunktion, mit der das Instanzobjekt erstellt wurde. Bei `Map`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Map/Map", "Map")}}.
- {{jsxref("Map.prototype.size")}}
  - : Gibt die Anzahl der Schlüssel-Wert-Paare im `Map`-Objekt zurück.
- `Map.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist der String `"Map"`. Diese Eigenschaft wird von {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Map.prototype.clear()")}}
  - : Entfernt alle Schlüssel-Wert-Paare aus dem `Map`-Objekt.
- {{jsxref("Map.prototype.delete()")}}
  - : Entfernt den Eintrag mit dem angegebenen Schlüssel aus dieser `Map`.
- {{jsxref("Map.prototype.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das für jeden Eintrag im `Map`-Objekt ein Array mit zwei Elementen, `[key, value]`, in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.forEach()")}}
  - : Ruft `callbackFn` für jedes Schlüssel-Wert-Paar im `Map`-Objekt einmal in Einfügereihenfolge auf. Wenn `forEach` ein Parameter `thisArg` übergeben wird, dient dieser bei jedem Callback-Aufruf als `this`-Wert.
- {{jsxref("Map.prototype.get()")}}
  - : Gibt den Wert zurück, der dem Schlüssel in dieser `Map` zugeordnet ist, oder `undefined`, wenn kein solcher Eintrag vorhanden ist.
- {{jsxref("Map.prototype.getOrInsert()")}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` zugeordnet ist. Ist der Schlüssel nicht vorhanden, wird ein neuer Eintrag mit dem Schlüssel und einem angegebenen Standardwert eingefügt; anschließend wird der eingefügte Wert zurückgegeben.
- {{jsxref("Map.prototype.getOrInsertComputed()")}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` zugeordnet ist. Ist der Schlüssel nicht vorhanden, wird ein neuer Eintrag mit dem Schlüssel und einem Standardwert eingefügt, den eine angegebene Callback-Funktion berechnet; anschließend wird der eingefügte Wert zurückgegeben.
- {{jsxref("Map.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob in dieser `Map` ein Eintrag mit dem angegebenen Schlüssel vorhanden ist.
- {{jsxref("Map.prototype.keys()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Schlüssel aller Einträge im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.set()")}}
  - : Fügt dieser `Map` einen neuen Eintrag mit einem angegebenen Schlüssel und Wert hinzu oder aktualisiert einen vorhandenen Eintrag, wenn der Schlüssel bereits existiert.
- {{jsxref("Map.prototype.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte aller Einträge im `Map`-Objekt in Einfügereihenfolge enthält.
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das für jeden Eintrag im `Map`-Objekt ein Array mit zwei Elementen, `[key, value]`, in Einfügereihenfolge enthält.

## Beispiele

### Das Map-Objekt verwenden

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

### NaN als Map-Schlüssel verwenden

{{jsxref("NaN")}} kann ebenfalls als Schlüssel verwendet werden. Obwohl jedes `NaN` ungleich sich selbst ist (`NaN !== NaN` ist wahr), funktioniert das folgende Beispiel, weil `NaN`-Werte nicht voneinander unterscheidbar sind:

```js
const myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN);
// "not a number"

const otherNaN = Number("foo");
myMap.get(otherNaN);
// "not a number"
```

### Mit for...of über eine Map iterieren

Mit einer `for...of`-Schleife können Sie über Maps iterieren:

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

### Mit forEach() über eine Map iterieren

Mit der Methode {{jsxref("Map/forEach", "forEach()")}} können Sie über Maps iterieren:

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

### Maps klonen und zusammenführen

Wie `Array`s können auch `Map`s geklont werden:

```js
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)
```

> [!NOTE]
> Beachten Sie, dass _die Daten selbst_ nicht geklont werden. Mit anderen Worten: Es wird nur eine {{Glossary("Shallow_copy", "flache Kopie")}} der `Map` erstellt.

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

- [Polyfill für `Map` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-map)
- [Polyfill für `Map` von es-shims](https://www.npmjs.com/package/es-map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
