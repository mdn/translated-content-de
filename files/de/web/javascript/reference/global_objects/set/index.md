---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{JSRef}}

Das **`Set`**-Objekt ermöglicht es Ihnen, einzigartige Werte beliebigen Typs zu speichern, seien es {{Glossary("Primitive", "primitives Werte")}} oder Objektverweise.

## Beschreibung

`Set`-Objekte sind Sammlungen von Werten. Ein Wert im Set **darf nur einmal vorkommen**; er ist einzigartig in der Sammlung des Sets. Sie können durch die Elemente eines Sets in der Reihenfolge der Einfügung iterieren. Die _Einfügereihenfolge_ entspricht der Reihenfolge, in der jedes Element erfolgreich in das Set durch die [`add()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/add)-Methode eingefügt wurde (das heißt, es gab kein identisches Element im Set, als `add()` aufgerufen wurde).

Die Spezifikation verlangt, dass Sets "im Durchschnitt Zugriffszeiten bieten, die sublinear zur Anzahl der Elemente in der Sammlung sind". Daher könnte es intern als Hashtabelle (mit O(1) Suchzeit), Suchbaum (mit O(log(N)) Suchzeit) oder irgendeiner anderen Datenstruktur repräsentiert werden, solange die Komplexität besser als O(N) ist.

### Wertegleichheit

Die Wertegleichheit basiert auf dem [SameValueZero](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. (Früher wurde [SameValue](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value_equality_using_object.is) verwendet, was `0` und `-0` als unterschiedlich behandelte. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).) Das bedeutet, dass {{jsxref("NaN")}} als gleich `NaN` angesehen wird (obwohl `NaN !== NaN`) und alle anderen Werte gemäß den Semantiken des `===` Operators als gleich betrachtet werden.

### Leistung

Die [`has`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/has)-Methode prüft, ob ein Wert im Set enthalten ist, und verwendet dabei einen Ansatz, der im Durchschnitt schneller ist als das Testen der meisten zuvor zum Set hinzugefügten Elemente. Insbesondere ist sie im Durchschnitt schneller als die [`Array.prototype.includes`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)-Methode, wenn ein Array eine `length` hat, die der `size` eines Sets entspricht.

### Set-Komposition

Das `Set`-Objekt bietet einige Methoden, die es Ihnen ermöglichen, Sets zu kombinieren, ähnlich wie man dies bei mathematischen Operationen tun würde. Zu diesen Methoden gehören:

<table>
  <thead>
    <tr>
      <th scope="col">Methode</th>
      <th scope="col">Rückgabetyp</th>
      <th scope="col">Mathematisches Äquivalent</th>
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
      <td style="margin:0;padding:0"><img src="difference/diagram.svg" alt="Ein Venn-Diagramm, bei dem sich zwei Kreise überlappen. Die Differenz von A und B ist der Teil von A, der nicht mit B überlappt." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/intersection", "A.intersection(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cap B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="intersection/diagram.svg" alt="Ein Venn-Diagramm, bei dem sich zwei Kreise überlappen. Der Schnittpunkt von A und B ist der Teil, in dem sie sich überlappen." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/symmetricDifference", "A.symmetricDifference(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">(A\setminus B)\cup(B\setminus A)</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="symmetricDifference/diagram.svg" alt="Ein Venn-Diagramm, bei dem sich zwei Kreise überlappen. Die symmetrische Differenz von A und B ist der Bereich, der entweder durch einen der beiden Kreise, aber nicht beide, enthalten ist." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/union", "A.union(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cup B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="union/diagram.svg" alt="Ein Venn-Diagramm, bei dem sich zwei Kreise überlappen. Die Vereinigung von A und B ist der Bereich, der entweder durch einen oder beide Kreise enthalten ist." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isDisjointFrom", "A.isDisjointFrom(B)")}}</td>
      <td><code>Boolean</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\cap B = \empty</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isDisjointFrom/diagram.svg" alt="Ein Venn-Diagramm mit zwei Kreisen. A und B sind disjunkt, weil die Kreise keinen Überlappungsbereich haben." style="margin:0;border:0;border-radius:0" width="200" /></td>
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

Um sie allgemeiner verwendbar zu machen, akzeptieren diese Methoden nicht nur `Set`-Objekte, sondern alles, was [set-ähnlich](#set-ähnliche_objekte) ist.

### Set-ähnliche Objekte

Alle [Set-Kompositionsmethoden](#set-komposition) erfordern, dass {{jsxref("Operators/this", "this")}} eine tatsächliche `Set`-Instanz ist, aber ihre Argumente müssen nur set-ähnlich sein. Ein _set-ähnliches Objekt_ ist ein Objekt, das Folgendes bietet:

- Eine {{jsxref("Set/size", "size")}}-Eigenschaft, die eine Zahl enthält.
- Eine {{jsxref("Set/has", "has()")}}-Methode, die ein Element nimmt und einen Boolean zurückgibt.
- Eine {{jsxref("Set/keys", "keys()")}}-Methode, die einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Elemente im Set zurückgibt.

Zum Beispiel sind {{jsxref("Map")}}-Objekte set-ähnlich, weil sie auch {{jsxref("Map/size", "size")}}, {{jsxref("Map/has", "has()")}} und {{jsxref("Map/keys", "keys()")}} haben, sodass sie sich wie Sets von Schlüsseln verhalten, wenn sie in Set-Methoden verwendet werden:

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
> Das set-ähnliche Protokoll ruft die `keys()`-Methode auf, anstatt [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator), um Elemente zu erzeugen. Dies soll Karten zu gültigen set-ähnlichen Objekten machen, denn bei Karten erzeugt der Iterator _Einträge_, während die `has()`-Methode _Schlüssel_ entgegennimmt.

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) sind nicht set-ähnlich, weil sie keine `has()`-Methode oder die `size`-Eigenschaft haben und ihre `keys()`-Methode Indizes statt Elemente erzeugt. {{jsxref("WeakSet")}}-Objekte sind ebenfalls nicht set-ähnlich, weil sie keine `keys()`-Methode haben.

### Set-ähnliche Browser-APIs

Browser-**`Set`-ähnliche Objekte** (oder "setlike objects") sind [Web-API](/de/docs/Web/API)-Schnittstellen, die sich in vielerlei Hinsicht wie ein `Set` verhalten.

Wie `Set` können die Elemente in der gleichen Reihenfolge durchlaufen werden, in der sie dem Objekt hinzugefügt wurden.
`Set`-ähnliche Objekte und `Set` haben auch Eigenschaften und Methoden, die denselben Namen und das gleiche Verhalten haben.
Anders als `Set` erlauben sie jedoch nur einen spezifischen, vordefinierten Typ für jeden Eintrag.

Die erlaubten Typen werden in der IDL-Definition der Spezifikation festgelegt.
Zum Beispiel ist [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures) ein `Set`-ähnliches Objekt, das Zeichenfolgen als Schlüssel/ Wert verwenden muss.
Dies wird in der folgenden IDL der Spezifikation definiert:

```webidl
interface GPUSupportedFeatures {
  readonly setlike<DOMString>;
};
```

`Set`-ähnliche Objekte sind entweder schreibgeschützt oder beschreibbar (siehe das `readonly`-Schlüsselwort in der obigen IDL).

- Schreibgeschützte `Set`-ähnliche Objekte haben die Eigenschaft {{jsxref("Set/size", "size")}} und die Methoden: {{jsxref("Set/entries", "entries()")}}, {{jsxref("Set/forEach", "forEach()")}}, {{jsxref("Set/has", "has()")}}, {{jsxref("Set/keys", "keys()")}}, {{jsxref("Set/values", "values()")}} und [`Symbol.iterator()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator).
- Beschreibbare `Set`-ähnliche Objekte haben zusätzlich die Methoden: {{jsxref("Set/clear", "clear()")}}, {{jsxref("Set/delete", "delete()")}}, und {{jsxref("Set/add", "add()")}}.

Die Methoden und Eigenschaften haben dasselbe Verhalten wie die äquivalenten Entitäten in `Set`, mit Ausnahme der Einschränkung auf die Typen des Eintrags.

Die folgenden sind Beispiele für schreibgeschützte `Set`-ähnliche Browser-Objekte:

- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
- [`XRAnchorSet`](/de/docs/Web/API/XRAnchorSet)

Die folgenden sind Beispiele für beschreibbare `Set`-ähnliche Browser-Objekte:

- [`CustomStateSet`](/de/docs/Web/API/CustomStateSet)
- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
- [`Highlight`](/de/docs/Web/API/Highlight)

## Konstruktor

- {{jsxref("Set/Set", "Set()")}}
  - : Erstellt ein neues `Set`-Objekt.

## Statische Eigenschaften

- [`Set[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species)
  - : Die Konstrukturfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Set.prototype` definiert und werden von allen `Set`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Set.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Set`-Instanzen ist der Anfangswert der {{jsxref("Set/Set", "Set")}}-Konstruktor.
- {{jsxref("Set.prototype.size")}}
  - : Gibt die Anzahl der Werte im `Set`-Objekt zurück.
- `Set.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Set"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Set.prototype.add()")}}
  - : Fügt ein neues Element mit einem angegebenen Wert in ein `Set`-Objekt ein, falls nicht bereits ein Element mit demselben Wert im `Set` vorhanden ist.
- {{jsxref("Set.prototype.clear()")}}
  - : Entfernt alle Elemente aus dem `Set`-Objekt.
- {{jsxref("Set.prototype.delete()")}}
  - : Entfernt das Element, das mit dem Wert verbunden ist, und gibt einen Boolean zurück, der bestätigt, ob ein Element erfolgreich entfernt wurde oder nicht. `Set.prototype.has(value)` gibt danach `false` zurück.
- {{jsxref("Set.prototype.difference()")}}
  - : Nimmt ein Set und gibt ein neues Set zurück, das Elemente enthält, die in diesem Set, aber nicht im gegebenen Set sind.
- {{jsxref("Set.prototype.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im `Set`-Objekt in Einfügereihenfolge enthält. Dies ist dem {{jsxref("Map")}}-Objekt ähnlich, sodass der _Schlüssel_ jedes Eintrags derselbe ist wie sein _Wert_ für ein `Set`.
- {{jsxref("Set.prototype.forEach()")}}
  - : Ruft `callbackFn` einmal für jeden im `Set`-Objekt vorhandenen Wert in Einfügereihenfolge auf. Wenn ein `thisArg`-Parameter angegeben ist, wird dieser als `this`-Wert für jeden Aufruf von `callbackFn` verwendet.
- {{jsxref("Set.prototype.has()")}}
  - : Gibt einen Boolean zurück, der bestätigt, ob ein Element mit dem angegebenen Wert im `Set`-Objekt vorhanden ist oder nicht.
- {{jsxref("Set.prototype.intersection()")}}
  - : Nimmt ein Set und gibt ein neues Set zurück, das Elemente enthält, die sowohl in diesem Set als auch im gegebenen Set sind.
- {{jsxref("Set.prototype.isDisjointFrom()")}}
  - : Nimmt ein Set und gibt einen Boolean zurück, der angibt, ob dieses Set keine gemeinsamen Elemente mit dem gegebenen Set hat.
- {{jsxref("Set.prototype.isSubsetOf()")}}
  - : Nimmt ein Set und gibt einen Boolean zurück, der angibt, ob alle Elemente dieses Sets im gegebenen Set enthalten sind.
- {{jsxref("Set.prototype.isSupersetOf()")}}
  - : Nimmt ein Set und gibt einen Boolean zurück, der angibt, ob alle Elemente des gegebenen Sets in diesem Set enthalten sind.
- {{jsxref("Set.prototype.keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()")}}.
- {{jsxref("Set.prototype.symmetricDifference()")}}
  - : Nimmt ein Set und gibt ein neues Set zurück, das Elemente enthält, die entweder in diesem Set oder im gegebenen Set, aber nicht in beiden, sind.
- {{jsxref("Set.prototype.union()")}}
  - : Nimmt ein Set und gibt ein neues Set zurück, das Elemente enthält, die entweder in diesem oder in beiden Sets enthalten sind.
- {{jsxref("Set.prototype.values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die **Werte** für jedes Element im `Set`-Objekt in Einfügereihenfolge liefert.
- [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das die **Werte** für jedes Element im `Set`-Objekt in Einfügereihenfolge liefert.

## Beispiele

### Verwendung des Set-Objekts

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

### Iterieren von Sets

Die Iteration über ein Set besucht Elemente in der Einfügereihenfolge.

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

### Implementieren von grundlegenden Set-Operationen

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

### Beziehung zu Arrays

```js
const myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
const mySet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread syntax to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray
```

### Entfernen doppelter Elemente aus einem Array

```js
// Use to remove duplicate elements from an array
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

console.log([...new Set(numbers)]); // [2, 13, 4, 5, 6, 7, 32]
```

### Beziehung zu Strings

```js
// Case sensitive (set will contain "F" and "f")
new Set("Firefox"); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]

// Duplicate omission ("f" occurs twice in the string but set will contain only one)
new Set("firefox"); // Set(6) [ "f", "i", "r", "e", "o", "x" ]
```

### Verwenden eines Sets, um die Einzigartigkeit einer Werteliste sicherzustellen

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

- [Polyfill von `Set` in `core-js`](https://github.com/zloirock/core-js#set)
- [es-shims Polyfill von `Set`](https://www.npmjs.com/package/es-set)
- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
