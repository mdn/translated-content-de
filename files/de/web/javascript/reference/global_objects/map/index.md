---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Das **`Map`**-Objekt speichert Schlüssel-Werte-Paare und merkt sich die ursprüngliche Einfügereihenfolge der Schlüssel.
Jeder Wert (sowohl Objekte als auch {{Glossary("Primitive", "primitive Werte")}}) kann als Schlüssel oder Wert verwendet werden.

{{EmbedInteractiveExample("pages/js/map.html", "taller")}}

## Beschreibung

`Map`-Objekte sind Sammlungen von Schlüssel-Werte-Paaren. Ein Schlüssel in der `Map` **kann nur einmal vorkommen**; er ist einzigartig in der Sammlung der `Map`. Ein `Map`-Objekt wird nach Schlüssel-Werte-Paaren iteriert — eine {{jsxref("Statements/for...of", "for...of")}}-Schleife gibt ein 2-Elemente-Array von `[key, value]` für jede Iteration zurück. Die Iteration erfolgt in _Einfügereihenfolge_, was der Reihenfolge entspricht, in der jedes Schlüssel-Werte-Paar erstmals von der [`set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/set)-Methode in die Map eingefügt wurde (d. h., es gab keinen Schlüssel mit demselben Wert bereits in der Map, als `set()` aufgerufen wurde).

Die Spezifikation erfordert, dass Karten so implementiert werden, "dass sie im Durchschnitt Zugriffszeiten bieten, die unterlinear in Bezug auf die Anzahl der Elemente in der Sammlung sind". Daher könnte sie intern als Hashtabelle (mit O(1)-Lookup) oder Suchbaum (mit O(log(N))-Lookup) oder eine andere Datenstruktur dargestellt werden, solange die Komplexität besser ist als O(N).

### Schlüsselgleichheit

Die Wertgleichheit basiert auf dem [SameValueZero](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. (Früher verwendete sie [SameValue](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is), welches `0` und `-0` als unterschiedlich behandelte. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).) Dies bedeutet, dass {{jsxref("NaN")}} als gleich zu `NaN` angesehen wird (obwohl `NaN !== NaN`) und alle anderen Werte gemäß der Semantik des `===`-Operators als gleich angesehen werden.

### Objekte vs. Maps

{{jsxref("Object")}} ist ähnlich wie `Map`—beide erlauben es, Schlüssel auf Werte zu setzen, diese Werte abzurufen, Schlüssel zu löschen und zu erkennen, ob etwas unter einem Schlüssel gespeichert ist. Aus diesem Grund (und da es keine eingebauten Alternativen gab) wurde `Object` historisch als `Map` verwendet.

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
        Eine <code>Map</code> enthält standardmäßig keine Schlüssel. Sie enthält nur das, was explizit darin platziert wurde.
      </td>
      <td>
        <p>
          Ein <code>Object</code> hat ein Prototyp, daher enthält es Standardschlüssel, die mit Ihren eigenen Schlüsseln kollidieren können, wenn Sie nicht vorsichtig sind.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Dies kann umgangen werden, indem {{jsxref("Object.create", "Object.create(null)")}} verwendet wird, aber dies wird selten gemacht.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Sicherheit</th>
      <td>
        Eine <code>Map</code> ist sicher mit benutzerdefinierten Schlüsseln und Werten zu verwenden.
      </td>
      <td>
        <p>
          Das Setzen von benutzerdefinierten Schlüssel-Werte-Paaren auf einem <code>Object</code> kann einem Angreifer erlauben, den Prototyp des Objekts zu überschreiben, was zu <a href="https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md">Objektinjektionsangriffen</a> führen kann. Wie beim Problem der zufälligen Schlüssel kann dies auch durch die Verwendung eines <code>null</code>-Prototyp-Objekts gemildert werden.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsseltypen</th>
      <td>
        Die Schlüssel einer <code>Map</code> können beliebige Werte sein (einschließlich Funktionen, Objekte oder beliebige Primitive).
      </td>
      <td>
        Die Schlüssel eines <code>Object</code> müssen entweder ein {{jsxref("String")}} oder ein {{jsxref("Symbol")}} sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Schlüsselreihenfolge</th>
      <td>
        <p>
          Die Schlüssel in <code>Map</code> sind in einer einfachen, unkomplizierten Weise geordnet: Ein <code>Map</code>-Objekt iteriert Einträge, Schlüssel und Werte in der Reihenfolge der Einfügung.
        </p>
      </td>
      <td>
        <p>
          Obwohl die Schlüssel eines gewöhnlichen <code>Object</code> jetzt geordnet sind, war dies nicht immer der Fall, und die Ordnung ist komplex. Daher ist es am besten, sich nicht auf die Reihenfolge der Eigenschaften zu verlassen.
        </p>
        <p>
          Die Ordnung wurde erstmals für eigene Eigenschaften nur in ECMAScript 2015 definiert; ECMAScript 2020 definiert Ordnung auch für geerbte Eigenschaften. Beachten Sie jedoch, dass kein einzelner Mechanismus <strong>alle</strong> Eigenschaften eines Objekts iteriert; die verschiedenen Mechanismen umfassen jeweils unterschiedliche Teilmengen von Eigenschaften.
          ({{jsxref("Statements/for...in", "for-in")}}
          umfasst nur aufzählbare String-Schlüssel-Eigenschaften;
          {{jsxref("Object.keys")}} umfasst nur eigene, aufzählbare,
          String-Schlüssel-Eigenschaften;
          {{jsxref("Object.getOwnPropertyNames")}} umfasst eigene,
          String-Schlüssel-Eigenschaften, auch wenn sie nicht aufzählbar sind;
          {{jsxref("Object.getOwnPropertySymbols")}} tut dasselbe
          nur für <code>Symbol</code>-Schlüssel-Eigenschaften, usw.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Größe</p></th>
      <td>
        Die Anzahl der Elemente in einer <code>Map</code> wird leicht von ihrer {{jsxref("Map.prototype.size", "size")}}-Eigenschaft abgerufen.
      </td>
      <td>
        Die Bestimmung der Anzahl der Elemente in einem <code>Object</code> ist umständlicher und weniger effizient. Ein gebräuchlicher Weg dies zu tun, ist durch die {{jsxref("Array/length", "length")}} des Arrays, das von {{jsxref("Object.keys()")}} zurückgegeben wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Iteration</th>
      <td>
        Eine <code>Map</code> ist ein <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols">iterable</a>, sodass sie direkt iteriert werden kann.
      </td>
      <td>
        <p>
          <code>Object</code> implementiert kein <a href="/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">Iterationsprotokoll</a>, daher sind Objekte standardmäßig nicht direkt mit der JavaScript-<a href="/de/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a> Anweisung iterierbar.
        </p>
        <div class="notecard note">
          <p><strong>Hinweis:</strong></p>
          <ul>
            <li>
              Ein Objekt kann das Iterationsprotokoll implementieren, oder Sie können ein Iterable für ein Objekt erhalten, indem Sie <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"><code>Object.keys</code></a> oder <a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"><code>Object.entries</code></a> verwenden.
            </li>
            <li>
              Die <a href="/de/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a> Anweisung ermöglicht es Ihnen, über die <em>enumerable</em> Eigenschaften eines Objekts zu iterieren.
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">Leistung</th>
      <td>
        <p>
          Bietet bessere Leistung in Szenarien, die häufige Hinzufügungen und Entfernungen von Schlüssel-Werte-Paaren erfordern.
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
          (Aber Sie können Ihre eigene Unterstützung für die Serialisierung und das Parsing von <code>Map</code> erstellen, indem Sie {{jsxref("JSON.stringify()")}} mit seinem <em>replacer</em>-Argument und {{jsxref("JSON.parse()")}} mit seinem <em>reviver</em>-Argument verwenden. Siehe die Stack Overflow-Frage <a href="https://stackoverflow.com/q/29085197/">Wie JSON.stringify ein ES6-Map?</a>).
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

### Einstellen von Objekteigenschaften

Das Einstellen von Objekteigenschaften funktioniert auch für Map-Objekte und kann zu beträchtlicher Verwirrung führen.

Daher scheint dies auf diese Weise zu funktionieren:

```js example-bad
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Aber diese Art, eine Eigenschaft festzulegen, interagiert nicht mit der Map-Datenstruktur. Es nutzt das Merkmal des generischen Objekts. Der Wert von 'bla' wird nicht in der Map für Abfragen gespeichert. Andere Operationen auf den Daten schlagen fehl:

```js example-bad
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
```

Die korrekte Nutzung zur Speicherung von Daten in der Map erfolgt über die Methode `set(key, value)`.

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

**Map-ähnliche Objekte** im Browser (oder "maplike objects") sind [Web API](/de/docs/Web/API) Schnittstellen, die sich in vielerlei Hinsicht wie eine `Map` verhalten.

Genau wie `Map` können Einträge in derselben Reihenfolge iteriert werden, in der sie dem Objekt hinzugefügt wurden.
Map-ähnliche Objekte und `Map` haben auch Eigenschaften und Methoden, die denselben Namen und dasselbe Verhalten haben.
Im Gegensatz zu `Map` erlauben sie jedoch nur spezifische vordefinierte Typen für die Schlüssel und Werte jedes Eintrags.

Die erlaubten Typen sind in der Spezifikations-IDL-Definition festgelegt.
Zum Beispiel ist {{domxref("RTCStatsReport")}} ein mapähnliches Objekt, das Zeichenfolgen für Schlüssel und Objekte für Werte verwenden muss.
Dies wird in der Spezifikations-IDL unten definiert:

```webidl
interface RTCStatsReport {
  readonly maplike<DOMString, object>;
};
```

Map-ähnliche Objekte sind entweder schreibgeschützt oder lesbar-schreibbar (siehe das `readonly`-Schlüsselwort in der oberen IDL).

- Schreibgeschützte mapähnliche Objekte haben die Eigenschaft [`size`](#map.prototype.size) und die Methoden: [`entries()`](#map.prototype.entries), [`forEach()`](#map.prototype.foreach), [`get()`](#map.prototype.get), [`has()`](#map.prototype.has), [`keys()`](#map.prototype.keys), [`values()`](#map.prototype.values) und [`[Symbol.iterator]()`](#map.prototypesymbol.iterator).
- Schreibbare mapähnliche Objekte haben zusätzlich die Methoden: [`clear()`](#map.prototype.clear), [`delete()`](#map.prototype.delete) und [`set()`](#map.prototype.set).

Die Methoden und Eigenschaften verhalten sich genauso wie die entsprechenden Entitäten in `Map`, abgesehen von der Beschränkung bezüglich der Typen der Schlüssel und Werte.

Beispiele für schreibgeschützte mapähnliche Browserobjekte sind:

- {{domxref("AudioParamMap")}}
- {{domxref("RTCStatsReport")}}
- {{domxref("EventCounts")}}
- {{domxref("KeyboardLayoutMap")}}
- {{domxref("MIDIInputMap")}}
- {{domxref("MIDIOutputMap")}}

## Konstruktor

- {{jsxref("Map/Map", "Map()")}}
  - : Erstellt ein neues `Map`-Objekt.

## Statische Eigenschaften

- [`Map[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species)
  - : Die Konstruktorfunktion, die zum Erstellen abgeleiteter Objekte verwendet wird.

## Statische Methoden

- {{jsxref("Map.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterables anhand der von einer bereitgestellten Callback-Funktion zurückgegebenen Werte. Die endgültige zurückgegebene `Map` verwendet die einzigartigen Werte der Testfunktion als Schlüssel, die verwendet werden können, um das Array von Elementen in jeder Gruppe zu erhalten.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Map.prototype` definiert und werden von allen `Map`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Map.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Map`-Instanzen ist der Anfangswert der {{jsxref("Map/Map", "Map")}}-Konstruktor.
- {{jsxref("Map.prototype.size")}}
  - : Gibt die Anzahl der Schlüssel/Wert-Paare im `Map`-Objekt zurück.
- `Map.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Map"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Map.prototype.clear()")}}
  - : Entfernt alle Schlüssel-Werte-Paare aus dem `Map`-Objekt.
- {{jsxref("Map.prototype.delete()")}}
  - : Gibt `true` zurück, wenn ein Element im `Map`-Objekt existierte und entfernt wurde, oder `false`, wenn das Element nicht existiert. `map.has(key)` gibt danach `false` zurück.
- {{jsxref("Map.prototype.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das ein Zwei-Elemente-Array von `[key, value]` für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.forEach()")}}
  - : Ruft `callbackFn` einmal für jedes im `Map`-Objekt vorhandene Schlüssel-Werte-Paar in Einfügereihenfolge auf. Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er als `this`-Wert für jede Rückruf-Funktion verwendet.
- {{jsxref("Map.prototype.get()")}}
  - : Gibt den mit dem übergebenen Schlüssel verknüpften Wert zurück oder `undefined`, wenn kein solcher vorhanden ist.
- {{jsxref("Map.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob ein Wert mit dem übergebenen Schlüssel im `Map`-Objekt verknüpft wurde oder nicht.
- {{jsxref("Map.prototype.keys()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Schlüssel für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- {{jsxref("Map.prototype.set()")}}
  - : Setzt den Wert für den übergebenen Schlüssel im `Map`-Objekt. Gibt das `Map`-Objekt zurück.
- {{jsxref("Map.prototype.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das ein Zwei-Elemente-Array von `[key, value]` für jedes Element im `Map`-Objekt in Einfügereihenfolge enthält.

## Beispiele

### Verwenden des Map-Objekts

```js
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// Werte setzen
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

// Werte abrufen
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get("a string")); // "value associated with 'a string'", weil keyString === 'a string'
console.log(myMap.get({})); // undefined, weil keyObj !== {}
console.log(myMap.get(function () {})); // undefined, weil keyFunc !== function () {}
```

### Verwenden von NaN als Map-Schlüssel

{{jsxref("NaN")}} kann auch als Schlüssel verwendet werden. Obwohl jedes `NaN` nicht sich selbst gleich ist (`NaN !== NaN` ist wahr), funktioniert das folgende Beispiel, weil `NaN`s nicht voneinander unterscheidbar sind:

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

// Verwenden Sie den regulären Map-Konstruktor, um ein 2D-Schlüssel-Wert-Array in eine Map zu transformieren
const myMap = new Map(kvArray);

console.log(myMap.get("key1")); // "value1"

// Verwenden Sie Array.from(), um eine Map in ein 2D-Schlüssel-Wert-Array zu transformieren
console.log(Array.from(myMap)); // Zeigt Ihnen genau dasselbe Array wie kvArray

// Eine knappe Art, dasselbe mit Spread-Syntax zu tun
console.log([...myMap]);

// Oder verwenden Sie die keys()- oder values()-Iteratoren, und konvertieren Sie sie in ein Array
console.log(Array.from(myMap.keys())); // ["key1", "key2"]
```

### Klonen und Zusammenführen von Maps

Genauso wie `Array`s können `Map`s geklont werden:

```js
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (nützlich für flachen Vergleich)
```

> [!NOTE]
> Beachten Sie, dass _die Daten selbst_ nicht geklont werden.

Maps können zusammengeführt werden, wobei die Einzigartigkeit der Schlüssel beibehalten wird:

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

// Zwei Maps zusammenführen. Der letzte wiederholte Schlüssel gewinnt.
// Die Spread-Syntax konvertiert eine Map im Wesentlichen in ein Array
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

// Maps mit einem Array zusammenführen. Der letzte wiederholte Schlüssel gewinnt.
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
