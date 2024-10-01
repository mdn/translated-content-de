---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{JSRef}}

Das **`Set`**-Objekt ermöglicht es Ihnen, eindeutige Werte jeglichen Typs zu speichern, sei es {{Glossary("Primitive", "primitive Werte")}} oder Objektverweise.

## Beschreibung

`Set`-Objekte sind Sammlungen von Werten. Ein Wert im Set **darf nur einmal vorkommen**; er ist einzigartig in der Sammlung des Sets. Sie können durch die Elemente eines Sets in der Einfügereihenfolge iterieren. Die _Einfügereihenfolge_ entspricht der Reihenfolge, in der jedes Element erfolgreich mit der Methode [`add()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/add) in das Set eingefügt wurde (d.h. es war kein identisches Element bereits im Set, als `add()` aufgerufen wurde).

Die Spezifikation erfordert, dass Sets so implementiert werden, dass sie im Durchschnitt Zugriffszeiten bieten, die sublinear in Bezug auf die Anzahl der Elemente in der Sammlung sind. Daher könnte es intern als Hashtabelle (mit O(1) Nachschlagezeit), Suchbaum (mit O(log(N)) Nachschlagezeit) oder andere Datenstruktur repräsentiert werden, solange die Komplexität besser als O(N) ist.

### Wertgleichheit

Die Wertgleichheit basiert auf dem [SameValueZero](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. (Früher wurde [SameValue](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is) verwendet, der `0` und `-0` als unterschiedlich behandelte. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).) Dies bedeutet, dass {{jsxref("NaN")}} als gleich `NaN` betrachtet wird (auch wenn `NaN !== NaN`) und alle anderen Werte gemäß den Semantiken des `===` Operators als gleich gelten.

### Leistung

Die Methode [`has`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/has) überprüft, ob ein Wert im Set ist, wobei ein Ansatz verwendet wird, der im Durchschnitt schneller ist als das Testen der meisten der vorher hinzugefügten Elemente. Insbesondere ist sie im Durchschnitt schneller als die Methode [`Array.prototype.includes`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), wenn ein Array eine `length` hat, die der `size` eines Sets entspricht.

### Set-Zusammensetzung

Das `Set`-Objekt bietet einige Methoden, die es Ihnen ermöglichen, Sets wie mit mathematischen Operationen zu komponieren. Diese Methoden umfassen:

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
      <td style="margin:0;padding:0"><img src="difference/diagram.svg" alt="Ein Venn-Diagramm, in dem sich zwei Kreise überschneiden. Der Unterschied von A und B ist der Teil von A, der nicht mit B überlappt." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/intersection", "A.intersection(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cap B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="intersection/diagram.svg" alt="Ein Venn-Diagramm, in dem sich zwei Kreise überschneiden. Der Schnitt von A und B ist der Teil, in dem sie sich überschneiden." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/symmetricDifference", "A.symmetricDifference(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">(A\setminus B)\cup(B\setminus A)</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="symmetricDifference/diagram.svg" alt="Ein Venn-Diagramm, in dem sich zwei Kreise überschneiden. Die symmetrische Differenz von A und B ist der Bereich, der von entweder dem einen oder dem anderen Kreis, aber nicht von beiden, eingeschlossen wird." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/union", "A.union(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cup B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="union/diagram.svg" alt="Ein Venn-Diagramm, in dem sich zwei Kreise überschneiden. Die Vereinigung von A und B ist der Bereich, der entweder von einem oder beiden Kreisen eingeschlossen wird." style="margin:0;border:0;border-radius:0" width="200" /></td>
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

Um sie verallgemeinerbar zu machen, akzeptieren diese Methoden nicht nur `Set`-Objekte, sondern alles, was [set-ähnlich](#set-ähnliche_objekte) ist.

### Set-ähnliche Objekte

Alle [Set-Zusammensetzungsmethoden](#set-zusammensetzung) erfordern, dass {{jsxref("Operators/this", "this")}} eine tatsächliche `Set`-Instanz ist, aber ihre Argumente müssen nur set-ähnlich sein. Ein _set-ähnliches Objekt_ ist ein Objekt, das Folgendes bereitstellt:

- Eine {{jsxref("Set/size", "size")}}-Eigenschaft, die eine Zahl enthält.
- Eine {{jsxref("Set/has", "has()")}}-Methode, die ein Element entgegennimmt und einen Boolean zurückgibt.
- Eine {{jsxref("Set/keys", "keys()")}}-Methode, die einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Elemente im Set zurückgibt.

Zum Beispiel sind {{jsxref("Map")}}-Objekte set-ähnlich, weil sie auch {{jsxref("Map/size", "size")}}, {{jsxref("Map/has", "has()")}}, und {{jsxref("Map/keys", "keys()")}} haben, sodass sie sich bei der Verwendung in Set-Methoden wie Mengen von Schlüsseln verhalten:

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
> Das set-ähnliche Protokoll ruft die `keys()`-Methode auf, anstatt [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator), um Elemente zu erzeugen. Dies dient dazu, Maps zu gültigen set-ähnlichen Objekten zu machen, da für Maps der Iterator _Einträge_ erzeugt, aber die `has()`-Methode _Schlüssel_ entgegennimmt.

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) sind nicht set-ähnlich, weil sie keine `has()`-Methode oder die `size`-Eigenschaft haben und ihre `keys()`-Methode Indizes anstelle von Elementen erzeugt. Auch {{jsxref("WeakSet")}}-Objekte sind nicht set-ähnlich, weil sie keine `keys()`-Methode haben.

### Set-ähnliche Browser-APIs

Browser-**`Set`-ähnliche Objekte** (oder "setlike objects") sind [Web API](/de/docs/Web/API)-Schnittstellen, die sich in vielerlei Hinsicht wie ein `Set` verhalten.

Genauso wie `Set` können Elemente in der gleichen Reihenfolge iteriert werden, in der sie dem Objekt hinzugefügt wurden.
`Set`-ähnliche Objekte und `Set` haben auch Eigenschaften und Methoden, die denselben Namen und dasselbe Verhalten haben.
Im Gegensatz zu `Set` erlauben sie jedoch nur einen spezifischen vordefinierten Typ für jeden Eintrag.

Die erlaubten Typen sind in der IDL-Spezifikationsdefinition festgelegt.
Zum Beispiel ist [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures) ein `Set`-ähnliches Objekt, das Strings als Schlüssel/Wert verwenden muss.
Dies ist in der folgenden IDL-Spezifikation definiert:

```webidl
interface GPUSupportedFeatures {
  readonly setlike<DOMString>;
};
```

`Set`-ähnliche Objekte sind entweder schreibgeschützt oder schreibbar (siehe das `readonly` Schlüsselwort in der IDL oben).

- Schreibgeschützte `Set`-ähnliche Objekte haben die Eigenschaft [`size`](#set.prototype.size) und die Methoden: [`entries()`](#set.prototype.entries), [`forEach()`](#set.prototype.foreach), [`has()`](#set.prototype.has), [`keys()`](#set.prototype.keys), [`values()`](#set.prototype.values), und [`[Symbol.iterator]()`](#set.prototypesymbol.iterator).
- Beschreibbare `Set`-ähnliche Objekte haben zusätzlich die Methoden: [`clear()`](#set.prototype.clear), [`delete()`](#set.prototype.delete), und [`add()`](#set.prototype.add).

Die Methoden und Eigenschaften haben dasselbe Verhalten wie die entsprechenden Entitäten in `Set`, abgesehen von der Einschränkung auf die Typen des Eintrags.

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
  - : Die Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Set.prototype` definiert und werden von allen `Set`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Set.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Set`-Instanzen ist der Anfangswert der {{jsxref("Set/Set", "Set")}}-Konstruktor.
- {{jsxref("Set.prototype.size")}}
  - : Gibt die Anzahl der Werte im `Set`-Objekt zurück.
- `Set.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Set"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Set.prototype.add()")}}
  - : Fügt ein neues Element mit einem angegebenen Wert in ein `Set`-Objekt ein, sofern kein Element mit demselben Wert bereits im `Set` vorhanden ist.
- {{jsxref("Set.prototype.clear()")}}
  - : Entfernt alle Elemente aus dem `Set`-Objekt.
- {{jsxref("Set.prototype.delete()")}}
  - : Entfernt das mit dem `value` assoziierte Element und gibt einen Boolean zurück, der bestätigt, ob ein Element erfolgreich entfernt wurde oder nicht. `Set.prototype.has(value)` wird anschließend `false` zurückgeben.
- {{jsxref("Set.prototype.difference()")}}
  - : Nimmt ein Set und gibt ein neues Set zurück, das die Elemente in diesem Set, aber nicht im gegebenen Set enthält.
- {{jsxref("Set.prototype.entries()")}}
  - : Gibt ein neues Iteratorobjekt zurück, das **ein Array von `[value, value]`** für jedes Element im `Set`-Objekt in Einfügereihenfolge enthält. Dies ist dem {{jsxref("Map")}}-Objekt ähnlich, sodass für ein `Set` der _Schlüssel_ jedes Eintrags derselbe wie sein _Wert_ ist.
- {{jsxref("Set.prototype.forEach()")}}
  - : Ruft `callbackFn` einmal für jeden im `Set`-Objekt vorhandenen Wert in Einfügereihenfolge auf. Wenn ein Parameter `thisArg` bereitgestellt wird, wird er als `this`-Wert für jeden Aufruf von `callbackFn` verwendet.
- {{jsxref("Set.prototype.has()")}}
  - : Gibt einen Boolean zurück, der bestätigt, ob ein Element mit dem gegebenen Wert im `Set`-Objekt vorhanden ist oder nicht.
- {{jsxref("Set.prototype.intersection()")}}
  - : Nimmt ein Set und gibt ein neues Set zurück, das die Elemente in diesem Set und dem gegebenen Set enthält.
- {{jsxref("Set.prototype.isDisjointFrom()")}}
  - : Nimmt ein Set und gibt einen Boolean zurück, der angibt, ob dieses Set keine gemeinsamen Elemente mit dem gegebenen Set hat.
- {{jsxref("Set.prototype.isSubsetOf()")}}
  - : Nimmt ein Set und gibt einen Boolean zurück, der angibt, ob alle Elemente dieses Sets im gegebenen Set enthalten sind.
- {{jsxref("Set.prototype.isSupersetOf()")}}
  - : Nimmt ein Set und gibt einen Boolean zurück, der angibt, ob alle Elemente des gegebenen Sets in diesem Set enthalten sind.
- {{jsxref("Set.prototype.keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()")}}.
- {{jsxref("Set.prototype.symmetricDifference()")}}
  - : Nimmt ein Set und gibt ein neues Set zurück, das die Elemente enthält, die entweder in diesem Set oder im gegebenen Set, aber nicht in beiden enthalten sind.
- {{jsxref("Set.prototype.union()")}}
  - : Nimmt ein Set und gibt ein neues Set zurück, das die Elemente enthält, die entweder in diesem oder in beiden Sets und dem gegebenen Set enthalten sind.
- {{jsxref("Set.prototype.values()")}}
  - : Gibt ein neues Iteratorobjekt zurück, das die **Werte** für jedes Element im `Set`-Objekt in Einfügereihenfolge liefert.
- [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
  - : Gibt ein neues Iteratorobjekt zurück, das die **Werte** für jedes Element im `Set`-Objekt in Einfügereihenfolge liefert.

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

### Sets iterieren

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

### Implementierung grundlegender Set-Operationen

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

### Doppelte Elemente aus einem Array entfernen

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

### Verwendung eines Sets zur Sicherstellung der Einzigartigkeit einer Liste von Werten

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
- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
