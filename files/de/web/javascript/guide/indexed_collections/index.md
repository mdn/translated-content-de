---
title: Indexierte Sammlungen
slug: Web/JavaScript/Guide/Indexed_collections
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}

Dieses Kapitel führt Sammlungen von Daten ein, die durch einen Indexwert geordnet sind. Dazu gehören Arrays und array-ähnliche Konstrukte wie {{jsxref("Array")}}-Objekte und {{jsxref("TypedArray")}}-Objekte.

Ein _Array_ ist eine geordnete Liste von Werten, auf die Sie mit einem Namen und einem Index zugreifen.

Zum Beispiel, betrachten Sie ein Array namens `emp`, das die Namen von Mitarbeitern enthält, die nach ihrer numerischen Mitarbeiternummer indexiert sind. So wäre `emp[0]` der Mitarbeiter mit der Nummer Null, `emp[1]` der Mitarbeiter mit der Nummer Eins, und so weiter.

JavaScript hat keinen expliziten Array-Datentyp. Sie können jedoch das vordefinierte `Array`-Objekt und seine Methoden verwenden, um mit Arrays in Ihren Anwendungen zu arbeiten. Das `Array`-Objekt verfügt über Methoden zur Manipulation von Arrays auf verschiedene Weise, wie zum Beispiel das Zusammenfügen, Umkehren und Sortieren. Es enthält eine Eigenschaft zur Bestimmung der Array-Länge und andere Eigenschaften zur Verwendung mit regulären Ausdrücken.

Wir werden uns in diesem Artikel auf Arrays konzentrieren, aber viele der gleichen Konzepte gelten auch für typisierte Arrays, da Arrays und typisierte Arrays viele ähnliche Methoden teilen. Weitere Informationen zu typisierten Arrays finden Sie im [Leitfaden für typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays).

## Erstellung eines Arrays

Die folgenden Anweisungen erstellen äquivalente Arrays:

```js
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];
```

`element0, element1, …, elementN` ist eine Liste von Werten für die Elemente des Arrays. Wenn diese Werte angegeben werden, wird das Array mit ihnen als Elemente initialisiert. Die `length`-Eigenschaft des Arrays wird auf die Anzahl der Argumente gesetzt.

Die Klammer-Syntax wird als "Arrayliteral" oder "Arrayinitialisierer" bezeichnet. Es ist kürzer als andere Formen der Array-Erstellung und wird daher allgemein bevorzugt. Siehe [Arrayliterale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) für Details.

Um ein Array mit einer Länge ungleich Null, aber ohne Elemente zu erstellen, kann eines der folgenden verwendet werden:

```js
// This...
const arr1 = new Array(arrayLength);

// ...results in the same array as this
const arr2 = Array(arrayLength);

// This has exactly the same effect
const arr3 = [];
arr3.length = arrayLength;
```

> [!NOTE]
> In dem obigen Code muss `arrayLength` eine `Number` sein. Andernfalls wird ein Array mit einem einzigen Element (dem bereitgestellten Wert) erstellt. Der Aufruf von `arr.length` gibt `arrayLength` zurück, aber das Array enthält keine Elemente. Eine {{jsxref("Statements/for...in", "for...in")}}-Schleife wird keine Eigenschaft im Array finden.

Zusätzlich zu einer neu definierten Variablen, wie oben gezeigt, können Arrays auch als Eigenschaft eines neuen oder eines bestehenden Objekts zugewiesen werden:

```js
const obj = {};
// …
obj.prop = [element0, element1, /* …, */ elementN];

// OR
const obj = { prop: [element0, element1, /* …, */ elementN] };
```

Möchten Sie ein Array mit einem einzigen Element initialisieren, und das Element ist zufällig eine `Number`, müssen Sie die Klammer-Syntax verwenden. Wenn ein einzelner `Number`-Wert an den `Array()`-Konstruktor oder die Funktion übergeben wird, wird er als `arrayLength` interpretiert, nicht als einzelnes Element.

Dies erstellt ein Array mit nur einem Element: der Zahl 42.

```js
const arr = [42];
```

Dies erstellt ein Array ohne Elemente und `arr.length` wird auf 42 gesetzt.

```js
const arr = Array(42);
```

Dies ist gleichbedeutend mit:

```js
const arr = [];
arr.length = 42;
```

Der Aufruf von `Array(N)` führt zu einem `RangeError`, wenn `N` eine nicht ganzzahlige Zahl ist, deren Bruchteile ungleich Null sind. Das folgende Beispiel veranschaulicht dieses Verhalten.

```js
const arr = Array(9.3); // RangeError: Invalid array length
```

Wenn Ihr Code Arrays mit einzelnen Elementen eines beliebigen Datentyps erstellen muss, ist es sicherer, Arrayliterale zu verwenden. Alternativ erstellen Sie zuerst ein leeres Array, bevor Sie das einzelne Element hinzufügen.

Sie können auch die statische Methode {{jsxref("Array.of")}} verwenden, um Arrays mit einem einzelnen Element zu erstellen.

```js
const wisenArray = Array.of(9.3); // wisenArray contains only one element 9.3
```

## Zugriff auf Elemente eines Arrays

Da Elemente auch Eigenschaften sind, können Sie über [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) auf sie zugreifen. Angenommen, Sie definieren das folgende Array:

```js
const myArray = ["Wind", "Rain", "Fire"];
```

Sie können auf das erste Element des Arrays mit `myArray[0]` verweisen, auf das zweite Element mit `myArray[1]` usw. Der Index der Elemente beginnt bei null.

> [!NOTE]
> Sie können auch [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwenden, um auf andere Eigenschaften des Arrays zuzugreifen, wie bei einem Objekt.
>
> ```js
> const arr = ["one", "two", "three"];
> arr[2]; // three
> arr["length"]; // 3
> ```

## Füllen eines Arrays

Sie können ein Array füllen, indem Sie seinen Elementen Werte zuweisen. Zum Beispiel:

```js
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

> [!NOTE]
> Wenn Sie dem Array-Operator im obigen Code einen Wert übergeben, der keine Ganzzahl ist, wird eine Eigenschaft im Objekt, das das Array darstellt, erstellt, anstatt eines Array-Elements.
>
> ```js
> const arr = [];
> arr[3.4] = "Oranges";
> console.log(arr.length); // 0
> console.log(Object.hasOwn(arr, 3.4)); // true
> ```

Sie können ein Array auch füllen, wenn Sie es erstellen:

```js
const myArray = new Array("Hello", myVar, 3.14159);
// OR
const myArray = ["Mango", "Apple", "Orange"];
```

### Verständnis der Länge

Auf der Implementierungsebene speichern JavaScript-Arrays ihre Elemente tatsächlich als standardmäßige Objekteigenschaften und verwenden den Array-Index als Namen der Eigenschaft.

Die `length`-Eigenschaft ist besonders. Ihr Wert ist immer eine positive ganze Zahl, die größer ist als der Index des letzten Elements, falls eines existiert. (Im Beispiel unten ist `'Dusty'` mit `30` indexiert, daher gibt `cats.length` `30 + 1` zurück).

Denken Sie daran, dass JavaScript-Array-Indizes 0-basiert sind: sie beginnen bei `0`, nicht bei `1`. Das bedeutet, dass die `length`-Eigenschaft eins mehr als der höchste gespeicherte Index im Array sein wird:

```js
const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

Sie können auch einen Wert der `length`-Eigenschaft zuweisen.

Das Schreiben eines Wertes, der kürzer ist als die Anzahl der gespeicherten Elemente, kürzt das Array. Das Schreiben von `0` leert es vollständig:

```js
const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy has been removed

cats.length = 0;
console.log(cats); // []; the cats array is empty

cats.length = 3;
console.log(cats); // [ <3 empty items> ]
```

### Iteration über Arrays

Eine häufige Operation besteht darin, über die Werte eines Arrays zu iterieren und jeden auf irgendeine Weise zu verarbeiten. Die einfachste Methode dafür ist wie folgt:

```js
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

Wenn Sie wissen, dass keines der Elemente in Ihrem Array im booleschen Kontext zu `false` wird - wenn Ihr Array beispielsweise nur aus [DOM](/de/docs/Web/API/Document_Object_Model)-Knoten besteht -, können Sie eine effizientere Methode verwenden:

```js
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* Process div in some way */
}
```

Dies vermeidet den Overhead der Überprüfung der Länge des Arrays und stellt sicher, dass die Variable `div` bei jedem Schleifendurchgang auf das aktuelle Element zurückgesetzt wird, um zusätzlichen Komfort zu bieten.

Die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode bietet eine weitere Möglichkeit der Iteration über ein Array:

```js
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

Die an `forEach` übergebene Funktion wird einmal für jedes Element im Array ausgeführt, wobei das Array-Element als Argument an die Funktion übergeben wird. Nicht zugewiesene Werte werden in einer `forEach`-Schleife nicht iteriert.

Beachten Sie, dass die Elemente eines Arrays, die beim Definieren des Arrays ausgelassen werden, nicht aufgelistet werden, wenn sie durch `forEach` iteriert werden, aber _gelistet_ werden, wenn `undefined` manuell dem Element zugeordnet wurde:

```js
const sparseArray = ["first", "second", , "fourth"];

sparseArray.forEach((element) => {
  console.log(element);
});
// Logs:
// first
// second
// fourth

if (sparseArray[2] === undefined) {
  console.log("sparseArray[2] is undefined"); // true
}

const nonsparseArray = ["first", "second", undefined, "fourth"];

nonsparseArray.forEach((element) => {
  console.log(element);
});
// Logs:
// first
// second
// undefined
// fourth
```

Da JavaScript-Array-Elemente als standardmäßige Objekteigenschaften gespeichert werden, ist es nicht ratsam, JavaScript-Arrays mit {{jsxref("Statements/for...in", "for...in")}}-Schleifen zu iterieren, da normale Elemente und alle enumerablen Eigenschaften aufgelistet werden.

### Array-Methoden

Das {{jsxref("Array")}}-Objekt verfügt über die folgenden Methoden:

Die [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)-Methode verbindet zwei oder mehr Arrays und gibt ein neues Array zurück.

```js
let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
// myArray is now ["1", "2", "3", "a", "b", "c"]
```

Die [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join)-Methode verbindet alle Elemente eines Arrays zu einem String.

```js
const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list is "Wind - Rain - Fire"
```

Die [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push)-Methode fügt ein oder mehrere Elemente am Ende eines Arrays hinzu und gibt die resultierende `length` des Arrays zurück.

```js
const myArray = ["1", "2"];
myArray.push("3"); // myArray is now ["1", "2", "3"]
```

Die [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)-Methode entfernt das letzte Element aus einem Array und gibt dieses Element zurück.

```js
const myArray = ["1", "2", "3"];
const last = myArray.pop();
// myArray is now ["1", "2"], last = "3"
```

Die [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)-Methode entfernt das erste Element aus einem Array und gibt dieses Element zurück.

```js
const myArray = ["1", "2", "3"];
const first = myArray.shift();
// myArray is now ["2", "3"], first is "1"
```

Die [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)-Methode fügt ein oder mehrere Elemente an den Anfang eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

```js
const myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
// myArray becomes ["4", "5", "1", "2", "3"]
```

Die [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)-Methode extrahiert einen Abschnitt eines Arrays und gibt ein neues Array zurück.

```js
let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
// starts at index 1 and extracts all elements
// until index 3
```

Die [`at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at)-Methode gibt das Element am angegebenen Index im Array zurück oder `undefined`, wenn der Index außerhalb des Bereichs liegt. Sie wird insbesondere für negative Indizes verwendet, die auf Elemente vom Ende des Arrays zugreifen.

```js
const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d", the second-last element of myArray
```

Die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode entfernt Elemente aus einem Array und ersetzt sie (optional). Sie gibt die Elemente zurück, die aus dem Array entfernt wurden.

```js
const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
```

Die [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)-Methode transponiert die Elemente eines Arrays an Ort und Stelle: das erste Array-Element wird zum letzten und das letzte wird zum ersten. Sie gibt eine Referenz auf das Array zurück.

```js
const myArray = ["1", "2", "3"];
myArray.reverse();
// transposes the array so that myArray = ["3", "2", "1"]
```

Die [`flat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)-Methode gibt ein neues Array zurück, in dem alle Unter-Array-Elemente bis zur angegebenen Tiefe rekursiv darin verkettet sind.

```js
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened
```

Die [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)-Methode sortiert die Elemente eines Arrays an Ort und Stelle und gibt eine Referenz auf das Array zurück.

```js
const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]
```

`sort()` kann auch eine Callback-Funktion annehmen, um zu bestimmen, wie Array-Elemente verglichen werden. Die Callback-Funktion wird mit zwei Argumenten aufgerufen, die zwei Werte aus dem Array sind. Die Funktion vergleicht diese beiden Werte und gibt eine positive Zahl, negative Zahl oder Null zurück, die die Reihenfolge der zwei Werte angibt. Zum Beispiel wird das folgende das Array nach dem letzten Buchstaben eines Strings sortieren:

```js
const sortFn = (a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) {
    return -1; // Negative number => a < b, a comes before b
  } else if (a[a.length - 1] > b[b.length - 1]) {
    return 1; // Positive number => a > b, a comes after b
  }
  return 0; // Zero => a = b, a and b keep their original order
};
myArray.sort(sortFn);
// sorts the array so that myArray = ["Wind","Fire","Rain"]
```

- wenn `a` nach dem Sortiersystem kleiner als `b` ist, geben Sie `-1` zurück (oder eine beliebige negative Zahl)
- wenn `a` nach dem Sortiersystem größer als `b` ist, geben Sie `1` zurück (oder eine beliebige positive Zahl)
- wenn `a` und `b` gleichwertig sind, geben Sie `0` zurück.

Die [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)-Methode durchsucht das Array nach `searchElement` und gibt den Index des ersten Treffers zurück.

```js
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// Now try again, starting from after the last match
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, because 'z' was not found
```

Die [`lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)-Methode funktioniert wie `indexOf`, aber startet am Ende und durchsucht rückwärts.

```js
const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // 5

// Now try again, starting from before the last match
console.log(a.lastIndexOf("b", 4)); // 1
console.log(a.lastIndexOf("z")); // -1
```

Die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode führt `callback` für jedes Element im Array aus und gibt `undefined` zurück.

```js
const a = ["a", "b", "c"];
a.forEach((element) => {
  console.log(element);
});
// Logs:
// a
// b
// c
```

Die `forEach`-Methode (und andere unten), die eine Callback-Funktion annehmen, werden als _iterative Methoden_ bezeichnet, da sie auf irgendeine Weise über das gesamte Array iterieren. Jede nimmt ein optionales zweites Argument namens `thisArg`. Wenn bereitgestellt, wird `thisArg` der Wert des `this`-Schlüsselworts im Inneren der Callback-Funktion. Wenn nicht bereitgestellt, bezieht sich `this` in einer strengen Funktion auf das globale Objekt ([`window`](/de/docs/Web/API/Window), [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis), etc.), oder `undefined`, wenn die Funktion strikt ist.

> [!NOTE]
> Die `sort()`-Methode, die oben eingeführt wurde, ist keine iterative Methode, da ihre Callback-Funktion nur für den Vergleich benutzt wird und möglicherweise nicht in einer bestimmten Reihenfolge entsprechend der Elementreihenfolge aufgerufen wird. `sort()` akzeptiert auch nicht den `thisArg`-Parameter.

Die [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Methode gibt ein neues Array der Rückgabewerte aus der Ausführung von `callback` für jedes Element im Array zurück.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

Die [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)-Methode führt `map()` aus, gefolgt von `flat()` mit Tiefe 1.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
```

Die [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)-Methode gibt ein neues Array zurück, das die Elemente enthält, für die `callback` `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]
```

Die [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find)-Methode gibt das erste Element zurück, für das `callback` `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.find((item) => typeof item === "number");
console.log(i); // 10
```

Die [`findLast()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)-Methode gibt das letzte Element zurück, für das `callback` `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLast((item) => typeof item === "number");
console.log(i); // 30
```

Die [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)-Methode gibt den Index des ersten Elements zurück, für das `callback` `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findIndex((item) => typeof item === "number");
console.log(i); // 1
```

Die [`findLastIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)-Methode gibt den Index des letzten Elements zurück, für das `callback` `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLastIndex((item) => typeof item === "number");
console.log(i); // 5
```

Die [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every)-Methode gibt `true` zurück, wenn `callback` für jedes Element im Array `true` zurückgibt.

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // false
```

Die [`some()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/some)-Methode gibt `true` zurück, wenn `callback` für mindestens ein Element im Array `true` zurückgibt.

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.some(isNumber)); // true
const a3 = ["1", "2", "3"];
console.log(a3.some(isNumber)); // false
```

Die [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)-Methode wendet `callback(accumulator, currentValue, currentIndex, array)` für jeden Wert im Array an, um die Liste der Elemente auf einen einzigen Wert zu reduzieren. Die `reduce`-Funktion gibt den endgültigen von der `callback`-Funktion zurückgegebenen Wert zurück.

Wenn `initialValue` angegeben ist, wird `callback` mit `initialValue` als erstem Parameterwert und dem Wert des ersten Elements im Array als zweitem Parameterwert aufgerufen.

Wenn `initialValue` _nicht_ angegeben ist, werden die ersten zwei Parameterwerte von `callback` die ersten zwei Elemente des Arrays sein. Bei jedem nachfolgenden Aufruf wird der erste Parameterwert das sein, was `callback` beim vorherigen Aufruf zurückgegeben hat, und der zweite Parameterwert wird der nächste Wert im Array sein.

Wenn `callback` Zugriff auf den Index des bearbeiteten Elements oder auf das gesamte Array benötigt, sind sie als optionale Parameter verfügbar.

```js
const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60
```

Die [`reduceRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)-Methode funktioniert wie `reduce()`, beginnt jedoch mit dem letzten Element.

`reduce` und `reduceRight` sind die am wenigsten offensichtlichen der iterativen Array-Methoden. Sie sollten für Algorithmen verwendet werden, die zwei Werte rekursiv kombinieren, um eine Sequenz auf einen einzigen Wert zu reduzieren.

## Array-Transformationen

Sie können zwischen Arrays und anderen Datenstrukturen hin und her transformieren.

### Gruppierung der Elemente eines Arrays

Die {{jsxref("Object.groupBy()")}}-Methode kann verwendet werden, um die Elemente eines Arrays zu gruppieren, indem eine Testfunktion verwendet wird, die einen String zurückgibt, der die Gruppe des aktuellen Elements angibt.

Hier haben wir ein einfaches Inventar-Array, das "Nahrungsmittel"-Objekte enthält, die einen `name` und einen `type` haben.

```js
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];
```

Um `Object.groupBy()` zu verwenden, geben Sie eine Callback-Funktion an, die mit dem aktuellen Element und optional dem aktuellen Index und Array aufgerufen wird, und einen String zurückgibt, der die Gruppe des Elements angibt.

Der folgende Code verwendet eine Pfeilfunktion, um den `type` jedes Array-Elements zurückzugeben (dabei wird die [Objektdestructuring-Syntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter) verwendet, um das `type`-Element aus dem übergebenen Objekt zu entpacken). Das Ergebnis ist ein Objekt, das Eigenschaften mit den Namen der eindeutigen von der Callback zurückgegebenen Strings hat. Jede Eigenschaft wird einem Array zugewiesen, das die Elemente in der Gruppe enthält.

```js
const result = Object.groupBy(inventory, ({ type }) => type);
console.log(result);
// Logs
// {
//   vegetables: [{ name: 'asparagus', type: 'vegetables' }],
//   fruit: [
//     { name: 'bananas', type: 'fruit' },
//     { name: 'cherries', type: 'fruit' }
//   ],
//   meat: [
//     { name: 'goat', type: 'meat' },
//     { name: 'fish', type: 'meat' }
//   ]
// }
```

Beachten Sie, dass das zurückgegebene Objekt auf die _gleichen_ Elemente wie das ursprüngliche Array verweist (keine [tiefen Kopien](/de/docs/Glossary/deep_copy)). Änderungen an der internen Struktur dieser Elemente werden sowohl im ursprünglichen Array als auch im zurückgegebenen Objekt widergespiegelt.

Wenn Sie keinen String als Schlüssel verwenden können, z.B. wenn die Informationen, die gruppiert werden sollen, mit einem Objekt verbunden sind, das sich ändern könnte, können Sie stattdessen {{jsxref("Map.groupBy()")}} verwenden. Diese Methode ist sehr ähnlich zu `Object.groupBy()`, mit Ausnahme davon, dass die Elemente des Arrays in einer {{jsxref("Map")}} gruppiert werden, die einen beliebigen Wert ([Objekt](/de/docs/Glossary/object) oder [Primitive](/de/docs/Glossary/primitive)) als Schlüssel verwenden kann.

## Sparse Arrays

Arrays können "leere Slots" enthalten, die nicht dasselbe sind wie Slots, die mit dem Wert `undefined` gefüllt sind. Leere Slots können auf eine der folgenden Weisen erstellt werden:

```js
// Array constructor:
const a = Array(5); // [ <5 empty items> ]

// Consecutive commas in array literal:
const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]

// Directly setting a slot with index greater than array.length:
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

// Elongating an array by directly setting .length:
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 empty items> ]

// Deleting an element:
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]
```

In einigen Operationen verhalten sich leere Slots so, als ob sie mit `undefined` gefüllt wären.

```js
const arr = [1, 2, , , 5]; // Create a sparse array

// Indexed access
console.log(arr[2]); // undefined

// For...of
for (const i of arr) {
  console.log(i);
}
// Logs: 1 2 undefined undefined 5

// Spreading
const another = [...arr]; // "another" is [ 1, 2, undefined, undefined, 5 ]
```

Aber bei anderen (insbesondere Array-Iterationsmethoden) werden leere Slots übersprungen.

```js
const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 empty items>, 6 ]
arr.forEach((i) => console.log(i)); // 1 2 5
const filtered = arr.filter(() => true); // [ 1, 2, 5 ]
const hasFalsy = arr.some((k) => !k); // false

// Property enumeration
const keys = Object.keys(arr); // [ '0', '1', '4' ]
for (const key in arr) {
  console.log(key);
}
// Logs: '0' '1' '4'
// Spreading into an object uses property enumeration, not the array's iterator
const objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }
```

Für eine vollständige Liste darüber, wie Array-Methoden mit Sparse Arrays arbeiten, siehe [die `Array`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots).

## Mehrdimensionale Arrays

Arrays können verschachtelt sein, was bedeutet, dass ein Array ein anderes Array als Element enthalten kann. Unter Verwendung dieser Eigenschaft von JavaScript-Arrays können mehrdimensionale Arrays erstellt werden.

Der folgende Code erstellt ein zweidimensionales Array.

```js
const a = new Array(4);
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    a[i][j] = `[${i}, ${j}]`;
  }
}
```

Dieses Beispiel erstellt ein Array mit den folgenden Zeilen:

```plain
Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
Row 3: [3, 0] [3, 1] [3, 2] [3, 3]
```

## Verwendung von Arrays zur Speicherung anderer Eigenschaften

Arrays können auch wie Objekte verwendet werden, um verwandte Informationen zu speichern.

```js
const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property); // "value"
```

Zum Beispiel, wenn ein Array das Ergebnis eines Abgleichs zwischen einem regulären Ausdruck und einem String ist, gibt das Array Eigenschaften und Elemente zurück, die Informationen über den Abgleich liefern. Ein Array ist der Rückgabewert von [`RegExp.prototype.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) und [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split). Für Informationen über die Verwendung von Arrays mit regulären Ausdrücken, siehe [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Arbeiten mit array-ähnlichen Objekten

Einige JavaScript-Objekte, wie die [`NodeList`](/de/docs/Web/API/NodeList), die von [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) zurückgegeben wird, oder das {{jsxref("Functions/arguments", "arguments")}}-Objekt, das im Körper einer Funktion verfügbar gemacht wird, sehen oberflächlich wie Arrays aus und verhalten sich ähnlich, teilen aber nicht alle deren Methoden. Das `arguments`-Objekt bietet ein {{jsxref("Function/length", "length")}}-Attribut, implementiert aber nicht Array-Methoden wie [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

Array-Methoden können nicht direkt auf array-ähnliche Objekte angewendet werden.

```js example-bad
function printArguments() {
  arguments.forEach((item) => {
    console.log(item);
  }); // TypeError: arguments.forEach is not a function
}
```

Sie können sie jedoch indirekt mit {{jsxref("Function.prototype.call()")}} aufrufen.

```js example-good
function printArguments() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}
```

Array-Prototyp-Methoden können auch auf Strings verwendet werden, da sie in ähnlicher Weise wie Arrays sequentiellen Zugriff auf ihre Zeichen bieten:

```js
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
```

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}
