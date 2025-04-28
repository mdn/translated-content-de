---
title: Indexierte Sammlungen
slug: Web/JavaScript/Guide/Indexed_collections
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}

Dieses Kapitel führt Sammlungen von Daten ein, die nach einem Indexwert geordnet sind. Dazu gehören Arrays und array-ähnliche Konstrukte wie {{jsxref("Array")}}-Objekte und {{jsxref("TypedArray")}}-Objekte.

Ein _Array_ ist eine geordnete Liste von Werten, auf die Sie mit einem Namen und einem Index verweisen können.

Betrachten Sie zum Beispiel ein Array namens `emp`, das die Namen von Mitarbeitern enthält, die nach ihrer numerischen Mitarbeiternummer indexiert sind. So wäre `emp[0]` der Mitarbeiter Nummer Null, `emp[1]` der Mitarbeiter Nummer Eins und so weiter.

JavaScript hat keinen expliziten Array-Datentyp. Sie können jedoch das vordefinierte `Array`-Objekt und seine Methoden verwenden, um in Ihren Anwendungen mit Arrays zu arbeiten. Das `Array`-Objekt bietet Methoden, um Arrays auf verschiedene Weise zu manipulieren, wie das Zusammenfügen, Umkehren und Sortieren. Es hat eine Eigenschaft zur Bestimmung der Array-Länge und andere Eigenschaften zur Verwendung mit regulären Ausdrücken.

Wir werden uns in diesem Artikel auf Arrays konzentrieren, aber viele der gleichen Konzepte gelten auch für typisierte Arrays, da Arrays und typisierte Arrays viele ähnliche Methoden teilen. Weitere Informationen zu typisierten Arrays finden Sie im [Leitfaden zu typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays).

## Ein Array erstellen

Die folgenden Anweisungen erstellen äquivalente Arrays:

```js
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];
```

`element0, element1, …, elementN` ist eine Liste von Werten für die Elemente des Arrays. Wenn diese Werte angegeben sind, wird das Array mit ihnen als Elemente des Arrays initialisiert. Die `length`-Eigenschaft des Arrays wird auf die Anzahl der Argumente gesetzt.

Die Klammer-Syntax wird "Array-Literal" oder "Array-Initializer" genannt. Sie ist kürzer als andere Formen der Array-Erstellung und wird daher im Allgemeinen bevorzugt. Siehe [Array-Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) für Details.

Um ein Array mit einer von Null verschiedenen Länge, aber ohne Elemente zu erstellen, kann Folgendes verwendet werden:

```js
// This...
const arr1 = new Array(arrayLength);

// … results in the same array as this
const arr2 = Array(arrayLength);

// This has exactly the same effect
const arr3 = [];
arr3.length = arrayLength;
```

> [!NOTE]
> Im obigen Code muss `arrayLength` eine `Number` sein. Andernfalls wird ein Array mit einem einzelnen Element (dem angegebenen Wert) erstellt. Aufrufen von `arr.length` gibt `arrayLength` zurück, aber das Array enthält keine Elemente. Eine {{jsxref("Statements/for...in", "for...in")}}-Schleife wird keine Eigenschaft im Array finden.

Zusätzlich zu einer neu definierten Variablen, wie oben gezeigt, können Arrays auch als Eigenschaft eines neuen oder eines vorhandenen Objekts zugewiesen werden:

```js
const obj = {};
// …
obj.prop = [element0, element1, /* …, */ elementN];

// OR
const obj = { prop: [element0, element1, /* …, */ elementN] };
```

Wenn Sie ein Array mit einem einzelnen Element initialisieren möchten und das Element eine `Number` ist, müssen Sie die Klammer-Syntax verwenden. Wenn ein einzelner `Number`-Wert an den Konstruktor oder die Funktion `Array()` übergeben wird, wird er als `arrayLength` interpretiert, nicht als einzelnes Element.

Dies erstellt ein Array mit nur einem Element: der Zahl 42.

```js
const arr = [42];
```

Dies erstellt ein Array ohne Elemente und mit `arr.length` auf 42.

```js
const arr = Array(42);
```

Das ist gleichwertig mit:

```js
const arr = [];
arr.length = 42;
```

Aufrufen von `Array(N)` führt zu einem `RangeError`, wenn `N` eine nicht-ganzzahlige Zahl ist, deren Bruchteil ungleich Null ist. Das folgende Beispiel veranschaulicht dieses Verhalten.

```js
const arr = Array(9.3); // RangeError: Invalid array length
```

Wenn Ihr Code Arrays mit einzelnen Elementen eines beliebigen Datentyps erstellen muss, ist es sicherer, Array-Literale zu verwenden. Alternativ erstellen Sie zuerst ein leeres Array, bevor Sie das einzelne Element hinzufügen.

Sie können auch die statische Methode {{jsxref("Array.of")}} verwenden, um Arrays mit einem einzelnen Element zu erstellen.

```js
const arr = Array.of(9.3); // arr contains only one element 9.3
```

## Auf Array-Elemente verweisen

Da Elemente auch Eigenschaften sind, können Sie sie mit [Eigenschafts-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zugreifen. Angenommen, Sie definieren das folgende Array:

```js
const myArray = ["Wind", "Rain", "Fire"];
```

Sie können auf das erste Element des Arrays als `myArray[0]` verweisen, auf das zweite Element des Arrays als `myArray[1]` usw. Der Index der Elemente beginnt bei null.

> [!NOTE]
> Sie können auch [Eigenschafts-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwenden, um auf andere Eigenschaften des Arrays zuzugreifen, wie bei einem Objekt.
>
> ```js
> const arr = ["one", "two", "three"];
> arr[2]; // three
> arr["length"]; // 3
> ```

## Ein Array befüllen

Sie können ein Array befüllen, indem Sie seinen Elementen Werte zuweisen. Beispiel:

```js
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

> [!NOTE]
> Wenn Sie im obigen Code einen nicht ganzzahligen Wert an den Array-Operator übergeben, wird eine Eigenschaft im Objekt, das das Array darstellt, erstellt, anstatt eines Array-Elements.
>
> ```js
> const arr = [];
> arr[3.4] = "Oranges";
> console.log(arr.length); // 0
> console.log(Object.hasOwn(arr, 3.4)); // true
> ```

Sie können auch ein Array befüllen, wenn Sie es erstellen:

```js
const myArray = new Array("Hello", myVar, 3.14159);
// OR
const myArray = ["Mango", "Apple", "Orange"];
```

### Länge verstehen

Auf Implementierungsebene speichern JavaScript-Arrays ihre Elemente tatsächlich als Standard-Objekteigenschaften, wobei der Array-Index als Eigenschaftsname verwendet wird.

Die `length`-Eigenschaft ist besonders. Ihr Wert ist immer eine positive Ganzzahl, die größer als der Index des letzten Elements ist, falls eines existiert. (Im folgenden Beispiel wird `'Dusty'` bei `30` indiziert, also gibt `cats.length` `30 + 1` zurück).

Denken Sie daran, dass JavaScript-Array-Indizes bei 0 beginnen: Sie starten bei `0`, nicht bei `1`. Das bedeutet, dass die `length`-Eigenschaft eins mehr als der höchste Index im Array ist:

```js
const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

Sie können der `length`-Eigenschaft auch einen Wert zuweisen.

Ein kürzerer Wert als die Anzahl gespeicherter Elemente kürzt das Array. Ein Wert von `0` leert es vollständig:

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

### Über Arrays iterieren

Eine häufige Operation besteht darin, über die Werte eines Arrays zu iterieren und jeden auf irgendeine Weise zu verarbeiten, wie folgt:

```js
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

Wenn Sie wissen, dass keines der Elemente in Ihrem Array im booleschen Kontext zu `false` auswertet—wenn Ihr Array beispielsweise nur [DOM](/de/docs/Web/API/Document_Object_Model)-Knoten enthält—können Sie ein effizienteres Idiom verwenden:

```js
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* Process div in some way */
}
```

Dies vermeidet den Overhead der Längenüberprüfung des Arrays und stellt sicher, dass die Variable `div` bei jedem Durchlauf der Schleife dem aktuellen Element neu zugewiesen wird, um den Komfort zu erhöhen.

Die Methode [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) bietet eine weitere Möglichkeit, über ein Array zu iterieren:

```js
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

Die Funktion, die an `forEach` übergeben wird, wird einmal für jeden Eintrag im Array ausgeführt, wobei der Array-Eintrag als Argument an die Funktion übergeben wird. Nicht zugewiesene Werte werden in einer `forEach`-Schleife nicht iteriert.

Beachten Sie, dass die Elemente eines Arrays, die beim Definieren des Arrays ausgelassen wurden, bei der Iteration mit `forEach` nicht aufgelistet werden, wohl aber, wenn `undefined` dem Element manuell zugewiesen wurde:

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

Da JavaScript-Array-Elemente als Standard-Objekteigenschaften gespeichert werden, ist es nicht ratsam, durch JavaScript-Arrays mithilfe von {{jsxref("Statements/for...in", "for...in")}}-Schleifen zu iterieren, da normale Elemente und alle aufzählbaren Eigenschaften aufgelistet werden.

### Array-Methoden

Das {{jsxref("Array")}}-Objekt hat die folgenden Methoden:

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

Die [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push)-Methode fügt einem Array ein oder mehrere Elemente am Ende hinzu und gibt die resultierende `length` des Arrays zurück.

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

Die [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)-Methode fügt einem Array ein oder mehrere Elemente am Anfang hinzu und gibt die neue Länge des Arrays zurück.

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

Die [`at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at)-Methode gibt das Element am angegebenen Index im Array oder `undefined` zurück, wenn der Index außerhalb des Bereichs liegt. Sie wird insbesondere für negative Indizes verwendet, die Elemente vom Ende des Arrays aus abrufen.

```js
const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d", the second-last element of myArray
```

Die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode entfernt Elemente aus einem Array und ersetzt sie optional. Sie gibt die Elemente zurück, die aus dem Array entfernt wurden.

```js
const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
```

Die [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)-Methode transponiert die Elemente eines Arrays in-place: Das erste Array-Element wird zum letzten, und das letzte wird zum ersten. Sie gibt eine Referenz auf das Array zurück.

```js
const myArray = ["1", "2", "3"];
myArray.reverse();
// transposes the array so that myArray = ["3", "2", "1"]
```

Die [`flat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)-Methode gibt ein neues Array zurück, in dem alle Unter-Array-Elemente rekursiv bis zur angegebenen Tiefe konkateniert sind.

```js
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened
```

Die [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)-Methode sortiert die Elemente eines Arrays in-place und gibt eine Referenz auf das Array zurück.

```js
const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]
```

`sort()` kann auch eine Callback-Funktion übernehmen, um zu bestimmen, wie Array-Elemente verglichen werden. Die Callback-Funktion wird mit zwei Argumenten aufgerufen, die zwei Werte aus dem Array sind. Die Funktion vergleicht diese beiden Werte und gibt eine positive Zahl, eine negative Zahl oder Null zurück, die die Reihenfolge der beiden Werte angibt. Zum Beispiel wird das folgende Beispiel das Array nach dem letzten Buchstaben eines Strings sortieren:

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

- Wenn `a` kleiner als `b` ist nach dem Sortiersystem, geben Sie `-1` (oder eine beliebige negative Zahl) zurück.
- Wenn `a` größer als `b` ist nach dem Sortiersystem, geben Sie `1` (oder eine beliebige positive Zahl) zurück.
- Wenn `a` und `b` als gleichwertig betrachtet werden, geben Sie `0` zurück.

Die [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)-Methode durchsucht das Array nach `searchElement` und gibt den Index des ersten Treffers zurück.

```js
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// Now try again, starting from after the last match
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, because 'z' was not found
```

Die [`lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)-Methode funktioniert wie `indexOf`, aber sie beginnt am Ende und sucht rückwärts.

```js
const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // 5

// Now try again, starting from before the last match
console.log(a.lastIndexOf("b", 4)); // 1
console.log(a.lastIndexOf("z")); // -1
```

Die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode führt `callback` auf jedem Array-Element aus und gibt `undefined` zurück.

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

Die `forEach`-Methode (und die nachfolgenden) Methoden, die einen Callback annehmen, sind als _iterative Methoden_ bekannt, da sie in irgendeiner Weise über das gesamte Array iterieren. Jede nimmt ein optionales zweites Argument namens `thisArg` an. Wenn bereitgestellt, wird `thisArg` zum Wert des `this`-Schlüsselworts innerhalb des Körpers der Callback-Funktion. Wenn nicht bereitgestellt, wie in anderen Fällen, in denen eine Funktion außerhalb eines expliziten Objektkontexts aufgerufen wird, wird `this` auf das globale Objekt ([`window`](/de/docs/Web/API/Window), [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) usw.) verweisen, wenn die Funktion [nicht strikt](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, oder `undefined`, wenn die Funktion strikt ist.

> [!NOTE]
> Die oben eingeführte `sort()`-Methode ist keine iterative Methode, da ihre Callback-Funktion nur zum Vergleich verwendet wird und möglicherweise nicht in einer bestimmten Reihenfolge basierend auf der Elementreihenfolge aufgerufen wird. `sort()` akzeptiert auch nicht den `thisArg`-Parameter.

Die [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Methode gibt ein neues Array des Rückgabewerts von `callback` aus, das auf jedes Array-Element ausgeführt wird.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

Die [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)-Methode führt `map()` gefolgt von einem `flat()` der Tiefe 1 aus.

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

Die [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every)-Methode gibt `true` zurück, wenn `callback` für jedes Element im Array `true` zurückgegeben hat.

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // false
```

Die [`some()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/some)-Methode gibt `true` zurück, wenn `callback` für mindestens ein Element im Array `true` zurückgegeben hat.

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

Die [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)-Methode wendet `callback(accumulator, currentValue, currentIndex, array)` für jeden Wert im Array an, um die Liste der Elemente auf einen einzelnen Wert zu reduzieren. Die `reduce`-Funktion gibt den endgültigen von der `callback`-Funktion zurückgegebenen Wert zurück.

Wenn `initialValue` angegeben ist, wird `callback` mit `initialValue` als erstem Parameterwert und dem Wert des ersten Elements im Array als zweiten Parameterwert aufgerufen.

Wenn `initialValue` _nicht_ angegeben ist, werden die ersten beiden Parameterwerte von `callback` die ersten beiden Elemente des Arrays sein. Bei jedem _nachfolgenden_ Aufruf wird der Wert des ersten Parameters der Wert sein, den `callback` beim vorherigen Aufruf zurückgegeben hat, und der Wert des zweiten Parameters wird der nächste Wert im Array sein.

Wenn `callback` Zugriff auf den Index des verarbeiteten Elements oder auf das gesamte Array benötigt, sind diese als optionale Parameter verfügbar.

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

Hier haben wir ein Inventar-Array, das "Lebensmittel"-Objekte enthält, die einen `name` und einen `type` haben.

```js
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];
```

Um `Object.groupBy()` zu verwenden, liefern Sie eine Callback-Funktion, die mit dem aktuellen Element und optional dem aktuellen Index und Array aufgerufen wird und einen String zurückgibt, der die Gruppe des Elements angibt.

Der folgende Code verwendet eine Pfeilfunktion, um den `type` jedes Array-Elements zurückzugeben (dies verwendet [Objektdestrukturierungssyntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#unpacking_properties_from_objects_passed_as_a_function_parameter), um das `type`-Element aus dem übergebenen Objekt zu entpacken). Das Ergebnis ist ein Objekt, das Eigenschaften hat, die nach den eindeutigen Strings benannt sind, die von der Callback-Funktion zurückgegeben werden. Jede Eigenschaft wird einem Array zugewiesen, das die Elemente der Gruppe enthält.

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

Beachten Sie, dass das zurückgegebene Objekt auf _dieselben_ Elemente wie das ursprüngliche Array verweist (keine {{Glossary("deep_copy", "tiefen Kopien")}}). Änderungen an der internen Struktur dieser Elemente werden sowohl im ursprünglichen Array als auch im zurückgegebenen Objekt widergespiegelt.

Wenn Sie keine Zeichenfolge als Schlüssel verwenden können, zum Beispiel, wenn die zu gruppierenden Informationen mit einem Objekt verbunden sind, das sich ändern könnte, dann können Sie stattdessen {{jsxref("Map.groupBy()")}} verwenden. Dies ist sehr ähnlich wie `Object.groupBy()`, außer dass es die Elemente des Arrays in eine {{jsxref("Map")}} gruppiert, die einen beliebigen Wert ({{Glossary("object", "Objekt")}} oder {{Glossary("primitive", "primitive")}}) als Schlüssel verwenden kann.

## Sparse Arrays

Arrays können "leere Stellen" enthalten, die nicht dasselbe sind wie mit `undefined` gefüllte Stellen. Leere Stellen können auf eine der folgenden Weisen erstellt werden:

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

In einigen Operationen verhalten sich leere Stellen, als wären sie mit `undefined` gefüllt.

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

Aber in anderen (insbesondere bei Array-Iterationsmethoden) werden leere Stellen übersprungen.

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

Eine vollständige Liste, wie sich Array-Methoden bei sparsamen Arrays verhalten, finden Sie auf der [Referenzseite des `Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots).

## Mehrdimensionale Arrays

Arrays können verschachtelt werden, das heißt, ein Array kann ein anderes Array als Element enthalten. Mit dieser Eigenschaft von JavaScript-Arrays können mehrdimensionale Arrays erstellt werden.

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

Zum Beispiel, wenn ein Array das Ergebnis einer Übereinstimmung zwischen einem regulären Ausdruck und einer Zeichenkette ist, gibt das Array Eigenschaften und Elemente zurück, die Informationen über die Übereinstimmung liefern. Ein Array ist der Rückgabewert von [`RegExp.prototype.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) und [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split). Informationen zur Verwendung von Arrays mit regulären Ausdrücken finden Sie im [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Arbeiten mit Array-ähnlichen Objekten

Einige JavaScript-Objekte, wie das [`NodeList`](/de/docs/Web/API/NodeList), das von [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) zurückgegeben wird, oder das {{jsxref("Functions/arguments", "arguments")}}-Objekt, das im Funktionskörper verfügbar gemacht wird, sehen an der Oberfläche wie Arrays aus und verhalten sich auch so, teilen jedoch nicht alle deren Methoden. Das `arguments`-Objekt stellt ein {{jsxref("Function/length", "length")}}-Attribut bereit, implementiert jedoch keine Array-Methoden wie [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

Array-Methoden können nicht direkt auf array-ähnlichen Objekten aufgerufen werden.

```js example-bad
function printArguments() {
  arguments.forEach((item) => {
    console.log(item);
  }); // TypeError: arguments.forEach is not a function
}
```

Aber Sie können sie indirekt mit {{jsxref("Function.prototype.call()")}} aufrufen.

```js example-good
function printArguments() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}
```

Array-Prototyp-Methoden können auch auf Zeichenfolgen verwendet werden, da sie sequenziellen Zugriff auf ihre Zeichen in ähnlicher Weise wie Arrays bieten:

```js
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
```

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}
