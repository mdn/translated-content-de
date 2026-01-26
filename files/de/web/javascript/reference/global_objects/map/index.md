---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Das **`Map`**-Objekt speichert Schlüssel-Werte-Paare und bewahrt die ursprüngliche Einfügereihenfolge der Schlüssel.
Jeder Wert (sowohl Objekte als auch {{Glossary("Primitive", "primitiven Werte")}}) kann entweder als Schlüssel oder als Wert verwendet werden.

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

`Map`-Objekte sind Sammlungen von Schlüssel-Wert-Paaren. Ein Schlüssel in der `Map` **kann nur einmal vorkommen**; er ist einzigartig in der Sammlung der `Map`. Ein `Map`-Objekt wird durch Schlüssel-Wert-Paare iteriert — eine {{jsxref("Statements/for...of", "for...of")}}-Schleife gibt ein 2-Element-Array von `[key, value]` für jede Iteration zurück. Die Iteration erfolgt in _Einfügereihenfolge_, was der Reihenfolge entspricht, in der jedes Schlüssel-Wert-Paar erstmals mit der [`set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/set)-Methode in die Karte eingefügt wurde (das heißt, es war kein Schlüssel mit demselben Wert in der Karte vorhanden, als `set()` aufgerufen wurde).

Die Spezifikation verlangt, dass Maps so implementiert werden, dass sie "im Durchschnitt Zugriffszeiten bieten, die sublinear zur Anzahl der Elemente in der Sammlung sind". Daher könnte es intern als Hashtabelle (mit O(1) Nachschlagen), Suchbaum (mit O(log(N)) Nachschlagen) oder eine andere Datenstruktur dargestellt werden, solange die Komplexität besser ist als O(N).

### Schlüsselgleichheit

Die Gleichheit von Werten basiert auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. (Früher wurde [SameValue](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value_equality_using_object.is) verwendet, welches `0` und `-0` als unterschiedlich behandelte. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).) Dies bedeutet, dass {{jsxref("NaN")}} als gleich zu `NaN` angesehen wird (auch wenn `NaN !== NaN`) und alle anderen Werte gemäß den Semantiken des `===`-Operators als gleich betrachtet werden. Auch bei Objektschlüsseln basiert die Gleichheit auf der Objektidentität. Sie werden nach Referenz und nicht nach Wert verglichen. Siehe [Verwendung des Map-Objekts](#verwendung_des_map-objekts) für Beispiele.

### Objekte vs. Maps

{{jsxref("Object")}} ist ähnlich wie `Map` — beide ermöglichen es Ihnen, Schlüssel zu setzen
Werte zu speichern, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas
unter einem Schlüssel gespeichert ist. Aus diesem Grund (und weil es keine eingebauten
Alternativen gab) wurde `Object` historisch als `Map` verwendet.

Es gibt jedoch wichtige Unterschiede, die `Map` in einigen
Fällen vorzuziehen machen:

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
        Eine <code>Map</code> enthält standardmäßig keine Schlüssel. Sie enthält nur
        das, was explizit in sie eingefügt wird.
      </td>
      <td>
        <p>
          Ein <code>Object</code> hat ein Prototyp, daher enthält es Standard-Schlüssel,
          die mit Ihren eigenen Schlüsseln kollidieren könnten, wenn Sie nicht vorsichtig sind.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dies lässt sich umgehen, indem man
            {{jsxref("Object.create", "Object.create(null)")}} verwendet,
            aber dies wird selten gemacht.
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
          Das Setzen von benutzerdefinierten Schlüssel-Wert-Paaren auf ein <code>Object</code> kann einem Angreifer ermöglichen,
          den Prototyp des Objekts zu überschreiben, was zu
          <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">
            Objektinjektionsangriffen
          </a> oder <a href="/de/docs/Web/Security/Attacks/Prototype_pollution">Prototypenverschmutzungsangriffen</a> führen kann. Wie das Problem mit unbeabsichtigten Schlüsseln kann dies ebenfalls durch die Verwendung eines <code>null</code>-Prototyp-Objekts gemildert werden.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsseltypen</th>
      <td>
        Die Schlüssel einer <code>Map</code> können jeden Wert haben (einschließlich Funktionen,
        Objekten oder beliebigen primitiven Werten).
      </td>
      <td>
        Die Schlüssel eines <code>Object</code> müssen entweder ein
        {{jsxref("String")}} oder ein {{jsxref("Symbol")}} sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsselreihenfolge</th>
      <td>
        <p>
          Die Schlüssel in <code>Map</code> sind in einer einfachen
          Weise geordnet: Ein <code>Map</code>-Objekt iteriert Einträge, Schlüssel und Werte in
          der Reihenfolge ihrer Einfügung.
        </p>
      </td>
      <td>
        <p>
          Obwohl die Schlüssel eines gewöhnlichen <code>Object</code> jetzt geordnet sind,
          war dies nicht immer der Fall, und die Ordnung ist komplex. Daher
          ist es am besten, sich nicht auf die Eigenschaftsreihenfolge zu verlassen.
        </p>
        <p>
          Die Reihenfolge wurde erstmals für eigene Eigenschaften in ECMAScript
          2015 definiert; ECMAScript 2020 definiert die Reihenfolge auch für geerbte Eigenschaften.
          Aber beachten Sie, dass kein einziges Mechanismus
          <strong>alle</strong> Eigenschaften eines Objekts iteriert; die verschiedenen Mechanismen
          beinhalten jeweils unterschiedliche Untergruppen von Eigenschaften.
          ({{jsxref("Statements/for...in", "for-in")}}
          enthält nur aufzählbare stringbasierte Eigenschaften;
          {{jsxref("Object.keys")}} enthält nur eigene, aufzählbare,
          stringbasierte Eigenschaften;
          {{jsxref("Object.getOwnPropertyNames")}} enthält eigene,
          stringbasierte Eigenschaften, auch wenn sie nicht aufzählbar sind;
          {{jsxref("Object.getOwnPropertySymbols")}} tut dasselbe
          nur für <code>Symbol</code>-basierte Eigenschaften, usw.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Größe</p></th>
      <td>
        Die Anzahl der Elemente in einer <code>Map</code> lässt sich leicht aus ihrer
        {{jsxref("Map.prototype.size", "size")}}-Eigenschaft abrufen.
      </td>
      <td>
        Das Bestimmen der Anzahl der Elemente in einem <code>Object</code> ist umständlicher und weniger effizient. Eine gängige Methode ist die Länge ({{jsxref("Array/length", "length")}}) des von {{jsxref("Object.keys()")}} zurückgegebenen Arrays.
      </td>
    </tr>
    <tr>
      <th scope="row">Iteration</th>
      <td>
        Eine <code>Map</code> ist ein
        <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols"
          >iterierbar</a
        >es, sodass sie direkt iteriert werden kann.
      </td>
      <td>
        <p>
          <code>Object</code> implementiert kein <a
            href="/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol"
            >Iterationsprotokoll</a
          >, und daher sind Objekte nicht direkt iterierbar mit der JavaScript
          <a href="/de/docs/Web/JavaScript/Reference/Statements/for...of"
            >for...of</a
          >
          Anweisung (standardmäßig).
        </p>
        <div class="notecard note">
          <p><strong>Hinweis:</strong></p>
          <ul>
            <li>
              Ein Objekt kann das Iterationsprotokoll implementieren oder Sie können ein
              iterierbares Objekt mit <a
                href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                ><code>Object.keys</code></a
              > oder <a
                href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
                ><code>Object.entries</code></a
              > erhalten.
            </li>
            <li>
              Die
              <a href="/de/docs/Web/JavaScript/Reference/Statements/for...in"
                >for...in</a
              >
              Anweisung ermöglicht Ihnen, über die
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
          Bessere Leistung in Szenarien mit häufigem Hinzufügen und Entfernen
          von Schlüssel-Wert-Paaren.
        </p>
      </td>
      <td>
        <p>
          Nicht optimiert für häufiges Hinzufügen und Entfernen von Schlüssel-Wert-Paaren.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Serialisierung und Parsen</th>
      <td>
        <p>Keine native Unterstützung für Serialisierung oder Parsen.</p>
        <p>
          (Sie können jedoch Ihre eigene Serialisierungs- und Parse-Unterstützung für
          <code>Map</code> erstellen, indem Sie {{jsxref("JSON.stringify()")}}
          mit seinem <em>replacer</em>-Argument und
          {{jsxref("JSON.parse()")}} mit seinem
          <em>reviver</em>-Argument verwenden. Siehe die Stack Overflow Frage
          <a href="https://stackoverflow.com/q/29085197/"
            >Wie macht man ein JSON.stringify auf einer ES6 Map?</a
          >).
        </p>
      </td>
      <td>
        <p>
          Native Unterstützung für Serialisierung von {{jsxref("Object")}} nach
          JSON, unter Verwendung von {{jsxref("JSON.stringify()")}}.
        </p>
        <p>
          Native Unterstützung für das Parsen von JSON in {{jsxref("Object")}},
          unter Verwendung von {{jsxref("JSON.parse()")}}.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Objekteigenschaften setzen

Das Setzen von Objekteigenschaften funktioniert auch für Map-Objekte und kann zu
erheblicher Verwirrung führen.

Daher scheint dies auf eine Weise zu funktionieren:

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Aber diese Art der Eigenschaftszusetzung interagiert nicht mit der Map-Datenstruktur. Sie nutzt die Funktion des generischen Objekts. Der Wert von 'bla' wird nicht in der Map für Abfragen gespeichert. Andere Operationen auf den Daten schlagen fehl:

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

**Map-ähnliche Objekte im Browser** (oder "mapähnliche Objekte") sind [Web API](/de/docs/Web/API)-Schnittstellen, die sich in vielerlei Hinsicht wie eine `Map` verhalten.

Genau wie bei `Map` können Einträge in der gleichen Reihenfolge iteriert werden, in der sie dem Objekt hinzugefügt wurden.
Map-ähnliche Objekte und `Map` haben auch Eigenschaften und Methoden, die denselben Namen und dasselbe Verhalten haben.
Im Gegensatz zu `Map` erlauben sie jedoch nur spezifische vordefinierte Typen für die Schlüssel und Werte jedes Eintrags.

Die erlaubten Typen sind in der Spezifikations-IDL-Definition festgelegt.
Zum Beispiel ist [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) ein mapähnliches Objekt, das Zeichenfolgen für Schlüssel und Objekte für Werte verwenden muss.
Dies ist in der untenstehenden Spezifikations-IDL definiert:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

Map-ähnliche Objekte sind entweder schreibgeschützt oder schreib-lesbar (siehe das `readonly` Schlüsselwort in der obigen IDL).

- Schreibgeschützte mapähnliche Objekte haben die Eigenschaft {{jsxref("Map/size", "size")}}, und die Methoden: {{jsxref("Map/entries", "entries()")}}, {{jsxref("Map/forEach", "forEach()")}}, {{jsxref("Map/get", "get()")}}, {{jsxref("Map/has", "has()")}}, {{jsxref("Map/keys", "keys()")}}, {{jsxref("Map/values", "values()")}}, und [`Symbol.iterator()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).
- Schreibbare mapähnliche Objekte haben zusätzlich die Methoden: {{jsxref("Map/clear", "clear()")}}, {{jsxref("Map/delete", "delete()")}}, und {{jsxref("Map/set", "set()")}}.

Die Methoden und Eigenschaften haben dasselbe Verhalten wie die entsprechenden Entitäten in `Map`, außer der Einschränkung der Typen der Schlüssel und Werte.

Folgende sind Beispiele für schreibgeschützte mapähnliche Browser-Objekte:

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
  - : Gruppiert die Elemente eines gegebenen Iterables, indem die von einer bereitgestellten Rückruffunktion zurückgegebenen Werte verwendet werden. Die endgültig zurückgegebene `Map` verwendet die eindeutigen Werte der Testfunktion als Schlüssel, die verwendet werden können, um das Array der Elemente in jeder Gruppe zu erhalten.

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
  - : Entfernt den durch den Schlüssel angegebenen Eintrag aus dieser `Map`.
- {{jsxref("Map.prototype.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das ein Zwei-Element-Array von `[key, value]` für jedes Element im `Map`-Objekt in Einfügungsreihenfolge enthält.
- {{jsxref("Map.prototype.forEach()")}}
  - : Ruft `callbackFn` einmal für jedes im `Map`-Objekt vorhandene Schlüssel-Wert-Paar in Einfügungsreihenfolge auf. Wird ein `thisArg`-Parameter an `forEach` übergeben, wird dieser als `this`-Wert für jeden Rückruf verwendet.
- {{jsxref("Map.prototype.get()")}}
  - : Gibt den Wert zurück, der dem Schlüssel in dieser `Map` entspricht, oder `undefined`, wenn es keinen gibt.
- {{jsxref("Map.prototype.getOrInsert()")}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` entspricht. Wenn der Schlüssel nicht vorhanden ist, wird ein neuer Eintrag mit dem Schlüssel und einem gegebenen Standardwert eingefügt, und der eingefügte Wert wird zurückgegeben.
- {{jsxref("Map.prototype.getOrInsertComputed()")}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` entspricht. Wenn der Schlüssel nicht vorhanden ist, wird ein neuer Eintrag mit dem Schlüssel und einem Standardwert eingefügt, der von einem gegebenen Rückruf berechnet wird, und der eingefügte Wert wird zurückgegeben.
- {{jsxref("Map.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Eintrag mit dem angegebenen Schlüssel in dieser `Map` existiert oder nicht.
- {{jsxref("Map.prototype.keys()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Schlüssel für jedes Element im `Map`-Objekt in Einfügungsreihenfolge enthält.
- {{jsxref("Map.prototype.set()")}}
  - : Fügt einen neuen Eintrag mit einem angegebenen Schlüssel und Wert zu dieser `Map` hinzu oder aktualisiert einen vorhandenen Eintrag, wenn der Schlüssel bereits existiert.
- {{jsxref("Map.prototype.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `Map`-Objekt in Einfügungsreihenfolge enthält.
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das ein Zwei-Element-Array von `[key, value]` für jedes Element im `Map`-Objekt in Einfügungsreihenfolge enthält.

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

{{jsxref("NaN")}} kann auch als Schlüssel verwendet werden. Obwohl jede `NaN` nicht gleich sich selbst ist (`NaN !== NaN` ist wahr), funktioniert das folgende Beispiel, weil `NaN`s ununterscheidbar voneinander sind:

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

Maps können mit der
{{jsxref("Map/forEach", "forEach()")}}-Methode durchlaufen werden:

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

Wie `Array`s können `Map`s geklont werden:

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
