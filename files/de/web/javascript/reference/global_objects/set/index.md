---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Mit dem **`Set`**-Objekt können Sie eindeutige Werte beliebigen Typs speichern, unabhängig davon, ob es sich um {{Glossary("Primitive", "primitive Werte")}} oder Objektreferenzen handelt.

## Beschreibung

`Set`-Objekte sind Sammlungen von Werten. Ein Wert darf in einem Set **nur einmal vorkommen**; er ist innerhalb der Sammlung eindeutig. Sie können die Elemente eines Sets in der Reihenfolge durchlaufen, in der sie eingefügt wurden. Die _Einfügereihenfolge_ entspricht der Reihenfolge, in der jedes Element mit der Methode [`add()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/add) erfolgreich in das Set eingefügt wurde. Das bedeutet, dass beim Aufruf von `add()` noch kein identisches Element im Set vorhanden war.

Die Spezifikation verlangt, dass Sets so implementiert werden, „dass sie im Durchschnitt Zugriffszeiten bieten, die sublinear zur Anzahl der Elemente in der Sammlung sind“. Intern kann ein Set daher beispielsweise als Hashtabelle (mit einer Suchkomplexität von O(1)), als Suchbaum (mit einer Suchkomplexität von O(log(N))) oder mithilfe einer anderen Datenstruktur dargestellt werden, solange die Komplexität besser als O(N) ist.

### Gleichheit von Werten

Die Gleichheit von Werten basiert auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. (Früher wurde [SameValue](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value_equality_using_object.is) verwendet, das `0` und `-0` als unterschiedlich behandelte. Beachten Sie die [Browser-Kompatibilität](#browser-kompatibilität).) Das bedeutet, dass {{jsxref("NaN")}} als gleich `NaN` gilt (obwohl `NaN !== NaN`) und alle anderen Werte gemäß der Semantik des Operators `===` als gleich gelten. Bei Objekten basiert die Gleichheit außerdem auf der Objektidentität: Sie werden anhand ihrer Referenz und nicht anhand ihres Werts verglichen. Beispiele finden Sie unter [Das Set-Objekt verwenden](#das_set-objekt_verwenden).

### Leistung

Die Methode [`has`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/has) prüft, ob ein Wert im Set enthalten ist. Ihr Ansatz ist im Durchschnitt schneller, als die meisten zuvor zum Set hinzugefügten Elemente einzeln zu prüfen. Insbesondere ist sie im Durchschnitt schneller als die Methode [`Array.prototype.includes`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), wenn die `length` eines Arrays der `size` eines Sets entspricht.

### Mengenoperationen

Das `Set`-Objekt stellt Methoden bereit, mit denen Sie Sets ähnlich wie mathematische Mengen verknüpfen können. Dazu gehören:

<table>
  <thead>
    <tr>
      <th scope="col">Methode</th>
      <th scope="col">Rückgabetyp</th>
      <th scope="col">Mathematische Entsprechung</th>
      <th scope="col">Venn-Diagramm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{jsxref("Set/difference", "A.difference(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi></mrow><annotation encoding="TeX">A\setminus B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="difference/diagram.svg" alt="Ein Venn-Diagramm mit zwei überlappenden Kreisen. Die Differenz von A und B ist der Teil von A, der sich nicht mit B überschneidet." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/intersection", "A.intersection(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cap B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="intersection/diagram.svg" alt="Ein Venn-Diagramm mit zwei überlappenden Kreisen. Die Schnittmenge von A und B ist der Bereich, in dem sie sich überschneiden." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/symmetricDifference", "A.symmetricDifference(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">(A\setminus B)\cup(B\setminus A)</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="symmetricDifference/diagram.svg" alt="Ein Venn-Diagramm mit zwei überlappenden Kreisen. Die symmetrische Differenz von A und B ist der Bereich, der in einem der beiden Kreise liegt, aber nicht in beiden." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/union", "A.union(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cup B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="union/diagram.svg" alt="Ein Venn-Diagramm mit zwei überlappenden Kreisen. Die Vereinigungsmenge von A und B ist der Bereich, der in einem oder beiden Kreisen liegt." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isDisjointFrom", "A.isDisjointFrom(B)")}}</td>
      <td><code>Boolean</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\cap B = \empty</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isDisjointFrom/diagram.svg" alt="Ein Venn-Diagramm mit zwei Kreisen. A und B sind disjunkt, weil sich die Kreise nicht überschneiden." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isSubsetOf", "A.isSubsetOf(B)")}}</td>
      <td><code>Boolean</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>⊆</mo><mi>B</mi></mrow><annotation encoding="TeX">A\subseteq B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isSubsetOf/diagram.svg" alt="Ein Venn-Diagramm mit zwei Kreisen. A ist eine Teilmenge von B, weil A vollständig in B enthalten ist." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isSupersetOf", "A.isSupersetOf(B)")}}</td>
      <td><code>Boolean</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>⊇</mo><mi>B</mi></mrow><annotation encoding="TeX">A\supseteq B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isSupersetOf/diagram.svg" alt="Ein Venn-Diagramm mit zwei Kreisen. A ist eine Obermenge von B, weil B vollständig in A enthalten ist." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
  </tbody>
</table>

Damit diese Methoden allgemeiner einsetzbar sind, akzeptieren sie nicht nur `Set`-Objekte, sondern alles, was [Set-ähnlich](#set-ähnliche_objekte) ist.

### Set-ähnliche Objekte

Alle [Methoden für Mengenoperationen](#mengenoperationen) erfordern, dass {{jsxref("this")}} eine tatsächliche `Set`-Instanz ist. Ihre Argumente müssen dagegen lediglich Set-ähnlich sein. Ein _Set-ähnliches Objekt_ stellt Folgendes bereit:

- Eine {{jsxref("Set/size", "size")}}-Eigenschaft, die eine Zahl enthält.
- Eine {{jsxref("Set/has", "has()")}}-Methode, die ein Element entgegennimmt und einen booleschen Wert zurückgibt.
- Eine {{jsxref("Set/keys", "keys()")}}-Methode, die einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) für die Elemente des Sets zurückgibt.

Beispielsweise sind {{jsxref("Map")}}-Objekte Set-ähnlich, weil sie ebenfalls {{jsxref("Map/size", "size")}}, {{jsxref("Map/has", "has()")}} und {{jsxref("Map/keys", "keys()")}} besitzen. Bei der Verwendung in Set-Methoden verhalten sie sich daher wie Sets aus Schlüsseln:

```js
const a = new Set([1, 2, 3]);
const b = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);
console.log(a.union(b)); // Set(4) {1, 2, 3, 4}
```

> [!NOTE]
> Das Protokoll für Set-ähnliche Objekte ruft zur Erzeugung der Elemente die Methode `keys()` statt [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) auf. Dadurch können Maps als Set-ähnliche Objekte verwendet werden: Bei Maps liefert der Iterator _Einträge_, während die Methode `has()` _Schlüssel_ entgegennimmt.

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) sind nicht Set-ähnlich, da ihnen eine `has()`-Methode und die Eigenschaft `size` fehlen und ihre Methode `keys()` Indizes statt Elementen liefert. {{jsxref("WeakSet")}}-Objekte sind ebenfalls nicht Set-ähnlich, da sie keine `keys()`-Methode besitzen.

### Set-ähnliche Browser-APIs

**`Set`-ähnliche Objekte** in Browsern (oder „setlike objects“) sind [Web-API](/de/docs/Web/API)-Schnittstellen, die sich in vielerlei Hinsicht wie ein `Set` verhalten.

Wie bei `Set` lassen sich die Elemente in der Reihenfolge durchlaufen, in der sie dem Objekt hinzugefügt wurden.
`Set`-ähnliche Objekte und `Set` besitzen außerdem Eigenschaften und Methoden mit denselben Namen und demselben Verhalten.
Anders als `Set` erlauben sie jedoch für jeden Eintrag nur einen bestimmten, vordefinierten Typ.

Die zulässigen Typen werden in der IDL-Definition der Spezifikation festgelegt.
Beispielsweise ist [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures) ein `Set`-ähnliches Objekt, das Zeichenfolgen als Schlüssel und Werte verwenden muss.
Dies wird in der folgenden IDL-Definition der Spezifikation festgelegt:

```webidl
interface GPUSupportedFeatures {
  readonly setlike<DOMString>;
};
```

`Set`-ähnliche Objekte sind entweder schreibgeschützt oder beschreibbar (siehe das Schlüsselwort `readonly` in der obigen IDL-Definition).

- Schreibgeschützte `Set`-ähnliche Objekte besitzen die Eigenschaft {{jsxref("Set/size", "size")}} sowie die Methoden {{jsxref("Set/entries", "entries()")}}, {{jsxref("Set/forEach", "forEach()")}}, {{jsxref("Set/has", "has()")}}, {{jsxref("Set/keys", "keys()")}}, {{jsxref("Set/values", "values()")}} und [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator).
- Beschreibbare `Set`-ähnliche Objekte besitzen zusätzlich die Methoden {{jsxref("Set/clear", "clear()")}}, {{jsxref("Set/delete", "delete()")}} und {{jsxref("Set/add", "add()")}}.

Die Methoden und Eigenschaften verhalten sich wie ihre Entsprechungen in `Set`, abgesehen von der Einschränkung der zulässigen Eintragstypen.

Die folgenden Browser-Objekte sind Beispiele für schreibgeschützte `Set`-ähnliche Objekte:

- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
- [`XRAnchorSet`](/de/docs/Web/API/XRAnchorSet)

Die folgenden Browser-Objekte sind Beispiele für beschreibbare `Set`-ähnliche Objekte:

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
- [`Highlight`](/de/docs/Web/API/Highlight)
- [`ViewTransitionTypeSet`](/de/docs/Web/API/ViewTransitionTypeSet)

## Konstruktor

- {{jsxref("Set/Set", "Set()")}}
  - : Erstellt ein neues `Set`-Objekt.

## Statische Eigenschaften

- [`Set[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species)
  - : Die Konstruktorfunktion, mit der abgeleitete Objekte erstellt werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Set.prototype` definiert und werden von allen `Set`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Set.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Set`-Instanzen ist der Anfangswert der {{jsxref("Set/Set", "Set")}}-Konstruktor.
- {{jsxref("Set.prototype.size")}}
  - : Gibt die Anzahl der Werte im `Set`-Objekt zurück.
- `Set.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"Set"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Set.prototype.add()")}}
  - : Fügt den angegebenen Wert in dieses Set ein, sofern er noch nicht enthalten ist.
- {{jsxref("Set.prototype.clear()")}}
  - : Entfernt alle Elemente aus dem `Set`-Objekt.
- {{jsxref("Set.prototype.delete()")}}
  - : Entfernt den angegebenen Wert aus diesem Set, sofern er enthalten ist.
- {{jsxref("Set.prototype.difference()")}}
  - : Nimmt ein Set entgegen und gibt ein neues Set mit den Elementen zurück, die in diesem Set, aber nicht im angegebenen Set enthalten sind.
- {{jsxref("Set.prototype.entries()")}}
  - : Gibt ein neues Iteratorobjekt zurück, das für jedes Element im `Set`-Objekt **ein Array der Form `[value, value]`** in Einfügereihenfolge enthält. Dies ähnelt dem {{jsxref("Map")}}-Objekt; bei einem `Set` entspricht der _Schlüssel_ jedes Eintrags seinem _Wert_.
- {{jsxref("Set.prototype.forEach()")}}
  - : Ruft `callbackFn` für jeden im `Set`-Objekt enthaltenen Wert einmal auf, und zwar in Einfügereihenfolge. Wenn ein `thisArg`-Parameter angegeben wird, dient er bei jedem Aufruf von `callbackFn` als `this`-Wert.
- {{jsxref("Set.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der angegebene Wert in diesem `Set` vorhanden ist.
- {{jsxref("Set.prototype.intersection()")}}
  - : Nimmt ein Set entgegen und gibt ein neues Set mit den Elementen zurück, die sowohl in diesem als auch im angegebenen Set enthalten sind.
- {{jsxref("Set.prototype.isDisjointFrom()")}}
  - : Nimmt ein Set entgegen und gibt einen booleschen Wert zurück, der angibt, ob dieses Set keine Elemente mit dem angegebenen Set gemeinsam hat.
- {{jsxref("Set.prototype.isSubsetOf()")}}
  - : Nimmt ein Set entgegen und gibt einen booleschen Wert zurück, der angibt, ob alle Elemente dieses Sets im angegebenen Set enthalten sind.
- {{jsxref("Set.prototype.isSupersetOf()")}}
  - : Nimmt ein Set entgegen und gibt einen booleschen Wert zurück, der angibt, ob alle Elemente des angegebenen Sets in diesem Set enthalten sind.
- {{jsxref("Set.prototype.keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()")}}.
- {{jsxref("Set.prototype.symmetricDifference()")}}
  - : Nimmt ein Set entgegen und gibt ein neues Set mit den Elementen zurück, die entweder in diesem oder im angegebenen Set enthalten sind, aber nicht in beiden.
- {{jsxref("Set.prototype.union()")}}
  - : Nimmt ein Set entgegen und gibt ein neues Set mit den Elementen zurück, die in diesem Set, im angegebenen Set oder in beiden enthalten sind.
- {{jsxref("Set.prototype.values()")}}
  - : Gibt ein neues Iteratorobjekt zurück, das die **Werte** der Elemente im `Set`-Objekt in Einfügereihenfolge liefert.
- [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
  - : Gibt ein neues Iteratorobjekt zurück, das die **Werte** der Elemente im `Set`-Objekt in Einfügereihenfolge liefert.

## Beispiele

### Das Set-Objekt verwenden

```js
const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 4, since we just removed one value

mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 } - a previously deleted item will be added as a new item, it will not retain its original position before deletion

console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }
```

### Sets durchlaufen

Beim Durchlaufen eines Sets werden die Elemente in Einfügereihenfolge besucht.

```js
for (const item of mySet1) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.keys()) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

for (const item of mySet1.values()) {
  console.log(item);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// key and value are the same here
for (const [key, value] of mySet1.entries()) {
  console.log(key);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// Convert Set object to an Array object, with Array.from
const myArr = Array.from(mySet1); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]

// the following will also work if run in an HTML document
mySet1.add(document.body);
mySet1.has(document.querySelector("body")); // true

// converting between Set and Array
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]

// intersect can be simulated via
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));

// difference can be simulated via
const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));

// Iterate set entries with forEach()
mySet2.forEach((value) => {
  console.log(value);
});
// 1
// 2
// 3
// 4
```

### Grundlegende Mengenoperationen implementieren

```js
function isSuperset(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// Examples
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // returns true
union(setA, setC); // returns Set {1, 2, 3, 4, 5, 6}
intersection(setA, setC); // returns Set {3, 4}
symmetricDifference(setA, setC); // returns Set {1, 2, 5, 6}
difference(setA, setC); // returns Set {1, 2}
```

### Verhältnis zu Arrays

```js
const myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
const mySet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread syntax to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray
```

### Doppelte Elemente aus einem Array entfernen

```js
// Use to remove duplicate elements from an array
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

console.log([...new Set(numbers)]); // [2, 13, 4, 5, 6, 7, 32]
```

### Verhältnis zu Zeichenfolgen

```js
// Case sensitive (set will contain "F" and "f")
new Set("Firefox"); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]

// Duplicate omission ("f" occurs twice in the string but set will contain only one)
new Set("firefox"); // Set(6) [ "f", "i", "r", "e", "o", "x" ]
```

### Mit einem Set die Eindeutigkeit einer Werteliste sicherstellen

```js
const array = Array.from(document.querySelectorAll("[id]")).map((e) => e.id);

const set = new Set(array);
console.assert(set.size === array.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Set` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-set)
- [Polyfill für `Set` von es-shims](https://www.npmjs.com/package/es-set)
- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
