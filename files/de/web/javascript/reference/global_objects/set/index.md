---
title: Menge
slug: Web/JavaScript/Reference/Global_Objects/Set
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Das **`Set`**-Objekt ermöglicht das Speichern einzigartiger Werte beliebigen Typs, sei es {{Glossary("Primitive", "primitive Werte")}} oder Objektverweise.

## Beschreibung

`Set`-Objekte sind Sammlungen von Werten. Ein Wert in der Menge **darf nur einmal vorkommen**; er ist in der Sammlung der Menge einzigartig. Sie können durch die Elemente einer Menge in der Einfügereihenfolge iterieren. Die _Einfügereihenfolge_ entspricht der Reihenfolge, in der jedes Element erfolgreich mit der [`add()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/add)-Methode in die Menge eingefügt wurde (das heißt, es gab kein identisches Element in der Menge, als `add()` aufgerufen wurde).

Die Spezifikation verlangt, dass Mengen so implementiert werden, "dass sie im Durchschnitt Zugriffzeiten bieten, die sublinear zur Anzahl der Elemente in der Sammlung sind". Daher könnte sie intern als Hashtabelle (mit O(1) Suche), Suchbaum (mit O(log(N)) Suche) oder eine andere Datenstruktur dargestellt werden, solange die Komplexität besser als O(N) ist.

### Wertgleichheit

Wertgleichheit basiert auf dem [SameValueZero](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality)-Algorithmus. (Früher verwendete er [SameValue](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is), das `0` und `-0` als unterschiedlich behandelte. Prüfen Sie [Browser-Kompatibilität](#browser-kompatibilität).) Dies bedeutet, dass {{jsxref("NaN")}} als gleich `NaN` betrachtet wird (obwohl `NaN !== NaN`) und alle anderen Werte gemäß den Semantiken des `===`-Operators als gleich betrachtet werden.

### Leistung

Die [`has`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/has)-Methode überprüft, ob ein Wert in der Menge vorhanden ist, und verwendet dabei einen Ansatz, der im Durchschnitt schneller ist als das Testen der meisten Elemente, die zuvor zur Menge hinzugefügt wurden. Insbesondere ist es im Durchschnitt schneller als die Methode [`Array.prototype.includes`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), wenn ein Array eine `length` hat, die der `size` einer Menge entspricht.

### Mengenkomposition

Das `Set`-Objekt bietet einige Methoden, die es Ihnen ermöglichen, Mengen wie mit mathematischen Operationen zu komponieren. Diese Methoden umfassen:

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
      <td style="margin:0;padding:0"><img src="difference/diagram.svg" alt="Ein Venn-Diagramm, bei dem sich zwei Kreise überlappen. Die Differenz von A und B ist der Teil von A, der nicht B überlappt." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/intersection", "A.intersection(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cap B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="intersection/diagram.svg" alt="Ein Venn-Diagramm, bei dem sich zwei Kreise überlappen. Der Schnitt von A und B ist der Teil, an dem sie sich überlappen." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/symmetricDifference", "A.symmetricDifference(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">(A\setminus B)\cup(B\setminus A)</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="symmetricDifference/diagram.svg" alt="Ein Venn-Diagramm, bei dem sich zwei Kreise überlappen. Die symmetrische Differenz von A und B ist der Bereich, der entweder von einem der beiden Kreise, aber nicht von beiden enthält wird." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/union", "A.union(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cup B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="union/diagram.svg" alt="Ein Venn-Diagramm, bei dem sich zwei Kreise überlappen. Die Vereinigungsmenge von A und B ist der Bereich, der entweder von einem oder beiden Kreisen umschlossen wird." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isDisjointFrom", "A.isDisjointFrom(B)")}}</td>
      <td><code>Boolean</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\cap B = \empty</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isDisjointFrom/diagram.svg" alt="Ein Venn-Diagramm mit zwei Kreisen. A und B sind disjunkt, weil die Kreise keinen gemeinsamen Bereich der Überlappung haben." style="margin:0;border:0;border-radius:0" width="200" /></td>
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
      <td style="margin:0;padding:0"><img src="isSupersetOf/diagram.svg" alt="Ein Venn-Diagramm mit zwei Kreisen. A ist eine übergeordnete Menge von B, weil B vollständig in A enthalten ist." style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
  </tbody>
</table>

Um sie allgemeiner verwendbar zu machen, akzeptieren diese Methoden nicht nur `Set`-Objekte, sondern alles, das [mengeartig](#mengeartige_objekte) ist.

### Mengeartige Objekte

Alle [Mengenkompositionsmethoden](#mengenkomposition) erfordern, dass {{jsxref("Operators/this", "this")}} eine tatsächliche `Set`-Instanz ist, aber ihre Argumente müssen nur mengeartig sein. Ein _mengeartiges Objekt_ ist ein Objekt, das Folgendes bereitstellt:

- Eine {{jsxref("Set/size", "size")}}-Eigenschaft, die eine Zahl enthält.
- Eine {{jsxref("Set/has", "has()")}}-Methode, die ein Element übernimmt und einen booleschen Wert zurückgibt.
- Eine {{jsxref("Set/keys", "keys()")}}-Methode, die einen [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der Elemente in der Menge zurückgibt.

Zum Beispiel sind {{jsxref("Map")}}-Objekte mengeartig, da sie auch {{jsxref("Map/size", "size")}}, {{jsxref("Map/has", "has()")}}, und {{jsxref("Map/keys", "keys()")}} haben, so dass sie sich ähnlich wie Mengen von Schlüsseln verhalten, wenn sie in Mengenmethoden verwendet werden:

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
> Das mengeartige Protokoll ruft die `keys()`-Methode auf statt [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator), um Elemente zu erzeugen. Dies geschieht, um Maps als gültige mengeartige Objekte zu machen, da bei Maps der Iterator _Einträge_ produziert, die `has()`-Methode jedoch _Schlüssel_ nimmt.

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) sind nicht mengeartig, da sie keine `has()`-Methode oder die `size`-Eigenschaft haben und ihre `keys()`-Methode Indizes statt Elementen produziert. {{jsxref("WeakSet")}}-Objekte sind ebenfalls nicht mengeartig, da sie keine `keys()`-Methode haben.

### Mengeartige Browser-APIs

Browser-**`Set`-artige Objekte** (oder "mengeartige Objekte") sind [Web API](/de/docs/Web/API)-Schnittstellen, die sich in vielerlei Hinsicht wie ein `Set` verhalten.

Genau wie `Set` können Elemente in der gleichen Reihenfolge iteriert werden, in der sie dem Objekt hinzugefügt wurden.
Mengeartige Objekte und `Set` haben auch Eigenschaften und Methoden, die denselben Namen und dasselbe Verhalten haben.
Im Gegensatz zu `Set` erlauben sie jedoch nur einen bestimmten vordefinierten Typ für jeden Eintrag.

Die erlaubten Typen sind in der Spezifikations-IDL-Definition festgelegt.
Zum Beispiel ist {{domxref("GPUSupportedFeatures")}} ein mengeartiges Objekt, das Strings als Schlüssel/Wert verwenden muss.
Dies ist in der IDL-Spezifikation unten definiert:

```webidl
interface GPUSupportedFeatures {
  readonly setlike<DOMString>;
};
```

Mengeartige Objekte sind entweder schreibgeschützt oder schreib- und lesbar (siehe das Schlüsselwort `readonly` in der obigen IDL).

- Schreibgeschützte mengeartige Objekte haben die Eigenschaft [`size`](#set.prototype.size) und die Methoden: [`entries()`](#set.prototype.entries), [`forEach()`](#set.prototype.foreach), [`has()`](#set.prototype.has), [`keys()`](#set.prototype.keys), [`values()`](#set.prototype.values), und [`[Symbol.iterator]()`](#set.prototypesymbol.iterator).
- Schreibfähige mengeartige Objekte haben zusätzlich die Methoden: [`clear()`](#set.prototype.clear), [`delete()`](#set.prototype.delete), und [`add()`](#set.prototype.add).

Die Methoden und Eigenschaften verhalten sich genauso wie die entsprechenden Entitäten in `Set`, außer der Einschränkung auf die Typen des Eintrags.

Die folgenden sind Beispiele für schreibgeschützte mengeartige Browserobjekte:

- {{domxref("GPUSupportedFeatures")}}
- {{domxref("XRAnchorSet")}}

Die folgenden sind Beispiele für schreibbare mengeartige Browserobjekte:

- {{domxref("CustomStateSet")}}
- {{domxref("FontFaceSet")}}
- {{domxref("Highlight")}}

## Konstruktor

- {{jsxref("Set/Set", "Set()")}}
  - : Erstellt ein neues `Set`-Objekt.

## Statische Eigenschaften

- [`Set[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species)
  - : Die Konstruktorfunktion, die zum Erstellen abgeleiteter Objekte verwendet wird.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Set.prototype` definiert und werden von allen `Set`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Set.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Set`-Instanzen ist der Anfangswert der {{jsxref("Set/Set", "Set")}}-Konstruktor.
- {{jsxref("Set.prototype.size")}}
  - : Gibt die Anzahl der Werte im `Set`-Objekt zurück.
- `Set.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Set"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Set.prototype.add()")}}
  - : Fügt ein neues Element mit einem angegebenen Wert in ein `Set`-Objekt ein, wenn noch kein Element mit demselben Wert im `Set` vorhanden ist.
- {{jsxref("Set.prototype.clear()")}}
  - : Entfernt alle Elemente aus dem `Set`-Objekt.
- {{jsxref("Set.prototype.delete()")}}
  - : Entfernt das Element, das mit dem `value` assoziiert ist, und gibt einen booleschen Wert zurück, der angibt, ob ein Element erfolgreich entfernt wurde oder nicht. `Set.prototype.has(value)` wird danach `false` zurückgeben.
- {{jsxref("Set.prototype.difference()")}}
  - : Nimmt eine Menge und gibt eine neue Menge zurück, die Elemente in dieser Menge, aber nicht in der angegebenen Menge enthält.
- {{jsxref("Set.prototype.entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im `Set`-Objekt in Einfügereihenfolge enthält. Dies ähnelt dem {{jsxref("Map")}}-Objekt, sodass der _Schlüssel_ jedes Eintrags dieselbe ist wie der _Wert_ für ein `Set`.
- {{jsxref("Set.prototype.forEach()")}}
  - : Ruft `callbackFn` einmal für jeden im `Set`-Objekt vorhandenen Wert in Einfügereihenfolge auf. Wenn ein `thisArg`-Parameter angegeben ist, wird er als `this`-Wert für jeden Aufruf von `callbackFn` verwendet.
- {{jsxref("Set.prototype.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert im `Set`-Objekt vorhanden ist oder nicht.
- {{jsxref("Set.prototype.intersection()")}}
  - : Nimmt eine Menge und gibt eine neue Menge zurück, die Elemente enthält, die sowohl in dieser Menge als auch in der angegebenen Menge vorhanden sind.
- {{jsxref("Set.prototype.isDisjointFrom()")}}
  - : Nimmt eine Menge und gibt einen booleschen Wert zurück, der angibt, ob diese Menge keine gemeinsamen Elemente mit der angegebenen Menge hat.
- {{jsxref("Set.prototype.isSubsetOf()")}}
  - : Nimmt eine Menge und gibt einen booleschen Wert zurück, der angibt, ob alle Elemente dieser Menge in der angegebenen Menge enthalten sind.
- {{jsxref("Set.prototype.isSupersetOf()")}}
  - : Nimmt eine Menge und gibt einen booleschen Wert zurück, der angibt, ob alle Elemente der angegebenen Menge in dieser Menge enthalten sind.
- {{jsxref("Set.prototype.keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()")}}.
- {{jsxref("Set.prototype.symmetricDifference()")}}
  - : Nimmt eine Menge und gibt eine neue Menge zurück, die Elemente enthält, die entweder in dieser Menge oder in der angegebenen Menge, aber nicht in beiden sind.
- {{jsxref("Set.prototype.union()")}}
  - : Nimmt eine Menge und gibt eine neue Menge zurück, die Elemente enthält, die entweder in dieser oder beiden dieser und der angegebenen Menge sind.
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

mySet1.add({ a: 1, b: 2 }); // o verweist auf ein anderes Objekt, also ist dies in Ordnung

mySet1.has(1); // true
mySet1.has(3); // false, da 3 der Menge nicht hinzugefügt wurde
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // entfernt 5 aus der Menge
mySet1.has(5); // false, 5 wurde entfernt

mySet1.size; // 4, da wir gerade einen Wert entfernt haben

mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 } - ein zuvor gelöschtes Element wird als neues Element hinzugefügt und behält nicht seine ursprüngliche Position vor dem Löschen bei

console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }
```

### Iterieren durch Mengen

Die Iteration über eine Menge besucht Elemente in der Einfügereihenfolge.

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

// Schlüssel und Wert sind hier gleich
for (const [key, value] of mySet1.entries()) {
  console.log(key);
}
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// Set-Objekt mit Array.from in ein Array-Objekt umwandeln
const myArr = Array.from(mySet1); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]

// das folgende funktioniert auch in einem HTML-Dokument
mySet1.add(document.body);
mySet1.has(document.querySelector("body")); // true

// Umwandlung zwischen Set und Array
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]

// Schnittmenge kann simuliert werden über
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));

// Differenz kann simuliert werden über
const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));

// Set-Einträge mit forEach() durchlaufen
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

// Beispiele
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // gibt true zurück
union(setA, setC); // gibt Set {1, 2, 3, 4, 5, 6} zurück
intersection(setA, setC); // gibt Set {3, 4} zurück
symmetricDifference(setA, setC); // gibt Set {1, 2, 5, 6} zurück
difference(setA, setC); // gibt Set {1, 2} zurück
```

### Beziehung zu Arrays

```js
const myArray = ["value1", "value2", "value3"];

// Verwenden Sie den regulären Set-Konstruktor, um ein Array in ein Set umzuwandeln
const mySet = new Set(myArray);

mySet.has("value1"); // gibt true zurück

// Verwenden Sie die Spread-Syntax, um ein Set in ein Array umzuwandeln.
console.log([...mySet]); // Wird Ihnen genau dasselbe Array wie myArray anzeigen
```

### Doppelte Elemente aus einem Array entfernen

```js
// Verwenden, um doppelte Elemente aus einem Array zu entfernen
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

console.log([...new Set(numbers)]); // [2, 13, 4, 5, 6, 7, 32]
```

### Beziehung zu Strings

```js
// Groß- und Kleinschreibung beachten (Set enthält "F" und "f")
new Set("Firefox"); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]

// Doppelte Auslassung ("f" tritt zweimal im String auf, aber das Set enthält nur eins)
new Set("firefox"); // Set(6) [ "f", "i", "r", "e", "o", "x" ]
```

### Verwenden Sie ein Set, um die Einzigartigkeit einer Liste von Werten sicherzustellen

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
