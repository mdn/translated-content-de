---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: 00c3b9fb6ead031e43863460add87321f262696c
---

Das **`Map`**-Objekt speichert Schlüssel-Werte-Paare und behält die ursprüngliche Einfügereihenfolge der Schlüssel bei.
Jeder Wert (sowohl Objekte als auch {{Glossary("Primitive", "primitive Werte")}}) kann als Schlüssel oder Wert verwendet werden.

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

`Map`-Objekte sind Sammlungen von Schlüssel-Werte-Paaren. Ein Schlüssel in der `Map` **kann nur einmal vorkommen**; er ist innerhalb der Sammlung der `Map` einzigartig. Ein `Map`-Objekt wird durch Schlüssel-Werte-Paare iteriert — eine {{jsxref("Statements/for...of", "for...of")}}-Schleife gibt ein Array mit 2 Mitgliedern des Typs `[key, value]` für jede Iteration zurück. Die Iteration erfolgt in _Einfügereihenfolge_, die der Ordnung entspricht, in der jedes Schlüssel-Werte-Paar durch die [`set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/set)-Methode erstmals in die Map eingefügt wurde (das heißt, es gab keinen Schlüssel mit demselben Wert, der bereits in der Map war, als `set()` aufgerufen wurde).

Die Spezifikation erfordert, dass Maps so implementiert werden, dass „im Durchschnitt Zugriffszeiten bereitgestellt werden, die unterlinear zur Anzahl der Elemente in der Sammlung sind“. Daher könnte es intern als Hashtabelle (mit O(1)-Suche), Suchbaum (mit O(log(N))-Suche) oder jede andere Datenstruktur dargestellt werden, solange die Komplexität besser als O(N) ist.

### Schlüsselgleichheit

Die Wertgleichheit basiert auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. (Früher wurde [SameValue](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value_equality_using_object.is) verwendet, das `0` und `-0` als unterschiedlich behandelte. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).) Das bedeutet, dass {{jsxref("NaN")}} als identisch mit `NaN` betrachtet wird (obwohl `NaN !== NaN`) und alle anderen Werte gemäß der Semantik des `===`-Operators als gleich betrachtet werden. Auch für Objekt-Schlüssel basiert die Gleichheit auf der Objektidentität. Sie werden anhand der Referenz und nicht anhand des Wertes verglichen. Siehe [Verwendung des Map-Objekts](#verwendung_des_map-objekts) für Beispiele.

### Objekte vs. Maps

{{jsxref("Object")}} ist ähnlich wie `Map` — beide erlauben es Ihnen, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas unter einem Schlüssel gespeichert ist. Aus diesem Grund (und weil es keine eingebauten Alternativen gab) wurde `Object` historisch als `Map` verwendet.

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
      <th scope="row">Zufällige Schlüssel</th>
      <td>
        Eine <code>Map</code> enthält standardmäßig keine Schlüssel. Sie enthält nur das, was explizit hineingesetzt wird.
      </td>
      <td>
        <p>
          Ein <code>Object</code> hat ein Prototyp, sodass es Standard-Schlüssel enthält, die mit Ihren eigenen Schlüsseln kollidieren könnten, wenn Sie nicht vorsichtig sind.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dies kann umgangen werden durch Verwendung von
            {{jsxref("Object.create", "Object.create(null)")}},
            aber dies wird selten gemacht.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Sicherheit</th>
      <td>
        Eine <code>Map</code> ist sicher im Umgang mit benutzerdefinierten Schlüsseln und Werten.
      </td>
      <td>
        <p>
          Das Setzen von benutzerdefinierten Schlüssel-Wert-Paaren auf ein <code>Object</code> kann es einem Angreifer ermöglichen, den Prototyp des Objekts zu überschreiben, was zu
          <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">
            Objekteinfügeangriffen
          </a> oder <a href="/de/docs/Web/Security/Attacks/Prototype_pollution">Prototypverunreinigungsangriffen</a> führen kann. Wie das Problem der zufälligen Schlüssel kann auch dies durch ein <code>null</code>-Prototyp-Objekt gemildert werden.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsseltypen</th>
      <td>
        Die Schlüssel einer <code>Map</code> können jeden Wert annehmen (einschließlich Funktionen, Objekte oder beliebige Primitive).
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
          Die Schlüssel in <code>Map</code> sind in einer einfachen Weise geordnet: Ein <code>Map</code>-Objekt iteriert Einträge, Schlüssel und Werte in der Reihenfolge der Einfügung.
        </p>
      </td>
      <td>
        <p>
          Obwohl die Schlüssel eines gewöhnlichen <code>Object</code> nun geordnet sind, war dies nicht immer der Fall, und die Reihenfolge ist komplex. Daher ist es am besten, sich nicht auf die Reihenfolge der Eigenschaften zu verlassen.
        </p>
        <p>
          Die Reihenfolge wurde zuerst für eigene Eigenschaften in ECMAScript 2015 definiert; ECMAScript 2020 definiert die Reihenfolge auch für geerbte Eigenschaften. Beachten Sie jedoch, dass kein einzelner Mechanismus
          iteriert
          <strong>alle</strong> Eigenschaften eines Objekts; die verschiedenen Mechanismen
          schließen jeweils unterschiedliche Teilmengen von Eigenschaften ein.
          ({{jsxref("Statements/for...in", "for-in")}}
          umfasst nur aufzählbare, stringbeschlüsselte Eigenschaften;
          {{jsxref("Object.keys")}} umfasst nur eigene, aufzählbare,
          stringbeschlüsselte Eigenschaften;
          {{jsxref("Object.getOwnPropertyNames")}} umfasst eigene,
          stringbeschlüsselte Eigenschaften, auch wenn nicht aufzählbar;
          {{jsxref("Object.getOwnPropertySymbols")}} tut dasselbe
          nur für <code>Symbol</code>-beschlüsselte Eigenschaften, etc.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Größe</p></th>
      <td>
        Die Anzahl der Elemente in einer <code>Map</code> kann leicht über ihre
        {{jsxref("Map.prototype.size", "size")}}-Eigenschaft abgerufen werden.
      </td>
      <td>
        Die Bestimmung der Anzahl der Elemente in einem <code>Object</code> ist umständlicher und weniger effizient. Eine gängige Methode besteht darin, die {{jsxref("Array/length", "Länge")}} des Arrays zu verwenden, das von {{jsxref("Object.keys()")}} zurückgegeben wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Iteration</th>
      <td>
        Eine <code>Map</code> ist ein
        <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols"
          >iterierbar</a>, sodass sie direkt iteriert werden kann.
      </td>
      <td>
        <p>
          <code>Object</code> implementiert kein <a
            href="/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol"
            >Iterationsprotokoll</a>, und daher sind Objekte nicht direkt iterierbar mit der JavaScript
          <a href="/de/docs/Web/JavaScript/Reference/Statements/for...of"
            >for...of</a>-Anweisung (standardmäßig).
        </p>
        <div class="notecard note">
          <p><strong>Hinweis:</strong></p>
          <ul>
            <li>
              Ein Objekt kann das Iterationsprotokoll implementieren, oder Sie können einen
              Iterable für ein Objekt mit <a
                href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                ><code>Object.keys</code></a> oder <a
                href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
                ><code>Object.entries</code></a>
              > erhalten.
            </li>
            <li>
              Die
              <a href="/de/docs/Web/JavaScript/Reference/Statements/for...in"
                >for...in</a>
              -Anweisung erlaubt es Ihnen, über die
              <em>enumerable</em> Eigenschaften eines Objekts zu iterieren.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Leistung</th>
      <td>
        <p>
          Leistet bessere Ergebnisse in Szenarien, die häufige Hinzufügungen und Entfernungen von Schlüssel-Werte-Paaren beinhalten.
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
          (Sie können jedoch Ihre eigene Serialisierungs- und Parsingunterstützung für
          <code>Map</code> erstellen, indem Sie {{jsxref("JSON.stringify()")}}
          mit seinem <em>replacer</em>-Argument und
          {{jsxref("JSON.parse()")}} mit seinem <em>reviver</em>-Argument verwenden. Siehe die Stack Overflow-Frage
          <a href="https://stackoverflow.com/q/29085197/"
            >Wie serialisiert man eine ES6 Map mit JSON.stringify?</a
          >).
        </p>
      </td>
      <td>
        <p>
          Native Unterstützung für die Serialisierung von {{jsxref("Object")}} zu
          JSON mit {{jsxref("JSON.stringify()")}}.
        </p>
        <p>
          Native Unterstützung für das Parsing von JSON zu {{jsxref("Object")}},
          mit {{jsxref("JSON.parse()")}}.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Einstellung von Objekteigenschaften

Das Einstellen von Objekteigenschaften funktioniert auch für Map-Objekte und kann erhebliche Verwirrung stiften.

Daher scheint es in dieser Weise zu funktionieren:

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Aber diese Art der Einstellung von Eigenschaften interagiert nicht mit der Map-Datenstruktur. Es verwendet die Funktion des generischen Objekts. Der Wert von 'bla' wird nicht in der Map für Abfragen gespeichert. Andere Operationen für die Daten schlagen fehl:

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Der korrekte Gebrauch für das Speichern von Daten in der Map erfolgt über die Methode `set(key, value)`.

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

### Auf Map-ähnliche Browser-APIs

**Browser-„Map“-ähnliche Objekte** (oder „maplike objects“) sind [Web-API](/de/docs/Web/API)-Schnittstellen, die sich in vielerlei Hinsicht wie eine `Map` verhalten.

Genau wie `Map` können Einträge in der gleichen Reihenfolge iteriert werden, in der sie dem Objekt hinzugefügt wurden.
`Map`-ähnliche Objekte und `Map` haben auch Eigenschaften und Methoden, die denselben Namen und dasselbe Verhalten aufweisen.
Im Gegensatz zu `Map` erlauben sie jedoch nur bestimmte vordefinierte Typen für die Schlüssel und Werte jedes Eintrags.

Die zulässigen Typen sind in der IDL-Definition der Spezifikation festgelegt.
Zum Beispiel ist [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) ein `Map`-ähnliches Objekt, das Zeichenfolgen als Schlüssel und Objekte als Werte verwenden muss.
Dies ist in der Spezifikation-IDL unten definiert:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

`Map`-ähnliche Objekte sind entweder schreibgeschützt oder beschreibbar (siehe das Schlüsselwort `readonly` in der obigen IDL).

- Schreibgeschützte `Map`-ähnliche Objekte haben die Eigenschaft {{jsxref("Map/size", "size")}} und die Methoden: {{jsxref("Map/entries", "entries()")}}, {{jsxref("Map/forEach", "forEach()")}}, {{jsxref("Map/get", "get()")}}, {{jsxref("Map/has", "has()")}}, {{jsxref("Map/keys", "keys()")}}, {{jsxref("Map/values", "values()")}} und [`Symbol.iterator()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).
- Schreibbare `Map`-ähnliche Objekte haben zusätzlich die Methoden: {{jsxref("Map/clear", "clear()")}}, {{jsxref("Map/delete", "delete()")}} und {{jsxref("Map/set", "set()")}}.

Die Methoden und Eigenschaften haben dasselbe Verhalten wie die entsprechenden Entitäten in `Map`, abgesehen von der Einschränkung auf die Typen der Schlüssel und Werte.

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
  - : Die Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Statische Methoden

- {{jsxref("Map.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterables unter Verwendung der durch eine bereitgestellte Rückruffunktion zurückgegebenen Werte. Die endgültige zurückgegebene `Map` verwendet die eindeutigen Werte aus der Testfunktion als Schlüssel, die verwendet werden können, um das Array der Elemente in jeder Gruppe zu erhalten.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Map.prototype` definiert und werden von allen `Map`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Map.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `Map`-Instanzen ist der Anfangswert der {{jsxref("Map/Map", "Map")}}-Konstruktor.
- {{jsxref("Map.prototype.size")}}
  - : Gibt die Anzahl der Schlüssel/Werte-Paare im `Map`-Objekt zurück.
- `Map.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Map"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Map.prototype.clear()")}}
  - : Entfernt alle Schlüssel-Werte-Paare aus dem `Map`-Objekt.
- {{jsxref("Map.prototype.delete()")}}
  - : Entfernt den durch den Schlüssel angegebenen Eintrag aus dieser `Map`.
- {{jsxref("Map.prototype.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das ein Array mit zwei Elementen `[key, value]` für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.forEach()")}}
  - : Ruft `callbackFn` einmal für jedes im `Map`-Objekt vorhandene Schlüssel-Werte-Paar in Einfügereihenfolge auf. Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er als `this`-Wert für jede Rückruffunktion verwendet.
- {{jsxref("Map.prototype.get()")}}
  - : Gibt den Wert zurück, der dem Schlüssel in dieser `Map` entspricht, oder `undefined`, wenn es keinen gibt.
- {{jsxref("Map.prototype.getOrInsert()")}} {{experimental_inline}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` entspricht. Wenn der Schlüssel nicht vorhanden ist, wird ein neuer Eintrag mit dem Schlüssel und einem angegebenen Standardwert eingefügt und der eingefügte Wert zurückgegeben.
- {{jsxref("Map.prototype.getOrInsertComputed()")}} {{experimental_inline}}
  - : Gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `Map` entspricht. Wenn der Schlüssel nicht vorhanden ist, wird ein neuer Eintrag mit dem Schlüssel und einem durch einen bereitgestellten Rückruf berechneten Standardwert eingefügt und der eingefügte Wert zurückgegeben.
- {{jsxref("Map.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Eintrag mit dem angegebenen Schlüssel in dieser `Map` existiert oder nicht.
- {{jsxref("Map.prototype.keys()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Schlüssel für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.set()")}}
  - : Fügt einen neuen Eintrag mit einem angegebenen Schlüssel und Wert zu dieser `Map` hinzu oder aktualisiert einen vorhandenen Eintrag, wenn der Schlüssel bereits existiert.
- {{jsxref("Map.prototype.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das ein Array mit zwei Elementen `[key, value]` für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.

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

{{jsxref("NaN")}} kann ebenfalls als Schlüssel verwendet werden. Obwohl jede `NaN` nicht mit sich selbst gleich ist (`NaN !== NaN` ist wahr), funktioniert das folgende Beispiel, da jede `NaN` von den anderen nicht zu unterscheiden sind:

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

### Iteration der Map mit forEach()

Maps können mithilfe der
{{jsxref("Map/forEach", "forEach()")}}-Methode iteriert werden:

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

Maps können zusammengeführt werden, wobei die Schlüssel-Einzigartigkeit erhalten bleibt:

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
