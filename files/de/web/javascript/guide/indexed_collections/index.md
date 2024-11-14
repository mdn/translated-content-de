---
title: Indizierte Sammlungen
slug: Web/JavaScript/Guide/Indexed_collections
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("JavaScript Leitfaden")}} {{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}

Dieses Kapitel führt Sammlungen von Daten ein, die durch einen Indexwert geordnet sind. Dazu gehören Arrays und array-ähnliche Konstrukte wie {{jsxref("Array")}}-Objekte und {{jsxref("TypedArray")}}-Objekte.

Ein _Array_ ist eine geordnete Liste von Werten, auf die Sie mit einem Namen und einem Index zugreifen.

Zum Beispiel betrachten Sie ein Array namens `emp`, das die Namen von Angestellten enthält, die durch ihre numerische Mitarbeiternummer indiziert sind. `emp[0]` wäre also Mitarbeiter Nummer Null, `emp[1]` Mitarbeiter Nummer Eins, und so weiter.

JavaScript hat keinen expliziten Array-Datentyp. Sie können jedoch das vordefinierte `Array`-Objekt und dessen Methoden verwenden, um mit Arrays in Ihren Anwendungen zu arbeiten. Das `Array`-Objekt verfügt über Methoden zur Manipulation von Arrays auf verschiedene Weise, wie das Verbinden, Umkehren und Sortieren. Es hat eine Eigenschaft zur Bestimmung der Array-Länge und andere Eigenschaften für die Verwendung mit regulären Ausdrücken.

Wir werden uns in diesem Artikel auf Arrays konzentrieren, aber viele der gleichen Konzepte gelten auch für typisierte Arrays, da Arrays und typisierte Arrays viele ähnliche Methoden teilen. Für weitere Informationen zu typisierten Arrays sehen Sie sich den [Leitfaden für typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) an.

## Erstellen eines Arrays

Die folgenden Anweisungen erstellen äquivalente Arrays:

```js
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];
```

`element0, element1, …, elementN` ist eine Liste von Werten für die Elemente des Arrays. Wenn diese Werte angegeben werden, wird das Array mit diesen als dessen Elemente initialisiert. Die `length`-Eigenschaft des Arrays wird auf die Anzahl der Argumente gesetzt.

Die Klammer-Syntax wird als "Array-Literal" oder "Array-Initialisierer" bezeichnet. Sie ist kürzer als andere Formen der Array-Erstellung und wird daher allgemein bevorzugt. Einzelheiten finden Sie unter [Array-Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals).

Um ein Array mit einer Länge ungleich Null, aber ohne Elemente zu erstellen, kann Folgendes verwendet werden:

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
> In dem obigen Code muss `arrayLength` eine `Number` sein. Andernfalls wird ein Array mit einem einzigen Element (dem angegebenen Wert) erstellt. Ein Aufruf von `arr.length` wird `arrayLength` zurückgeben, aber das Array enthält keine Elemente. Eine {{jsxref("Statements/for...in", "for...in")}}-Schleife wird keine Eigenschaft im Array finden.

Zusätzlich zu einer neu definierten Variablen, wie oben gezeigt, können Arrays auch als Eigenschaft eines neuen oder eines bestehenden Objekts zugewiesen werden:

```js
const obj = {};
// …
obj.prop = [element0, element1, /* …, */ elementN];

// OR
const obj = { prop: [element0, element1, /* …, */ elementN] };
```

Wenn Sie ein Array mit genau einem Element initialisieren möchten und das Element ein `Number` ist, müssen Sie die Klammer-Syntax verwenden. Wenn ein einzelner `Number`-Wert an den `Array()`-Konstruktor oder die Funktion übergeben wird, wird dieser als `arrayLength` interpretiert, nicht als einzelnes Element.

Dies erstellt ein Array mit nur einem Element: die Zahl 42.

```js
const arr = [42];
```

Dies erstellt ein Array ohne Elemente und `arr.length` auf 42 gesetzt.

```js
const arr = Array(42);
```

Dies entspricht:

```js
const arr = [];
arr.length = 42;
```

Ein Aufruf von `Array(N)` führt zu einem `RangeError`, wenn `N` eine nicht-ganzzahlige Zahl ist, deren Bruchteil ungleich Null ist. Das folgende Beispiel illustriert dieses Verhalten.

```js
const arr = Array(9.3); // RangeError: Invalid array length
```

Wenn Ihr Code Arrays mit einzelnen Elementen eines beliebigen Datentyps erstellen muss, ist es sicherer, Array-Literale zu verwenden. Alternativ erstellen Sie zuerst ein leeres Array, bevor Sie das einzelne Element hinzufügen.

Sie können auch die statische Methode {{jsxref("Array.of")}} verwenden, um Arrays mit einem einzelnen Element zu erstellen.

```js
const wisenArray = Array.of(9.3); // wisenArray contains only one element 9.3
```

## Zugriff auf Array-Elemente

Da Elemente auch Eigenschaften sind, können Sie auf sie mithilfe von [Property-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zugreifen. Angenommen, Sie definieren das folgende Array:

```js
const myArray = ["Wind", "Rain", "Fire"];
```

Sie können auf das erste Element des Arrays als `myArray[0]` und auf das zweite Element des Arrays als `myArray[1]` usw. verweisen. Der Index der Elemente beginnt bei Null.

> [!NOTE]
> Sie können auch [Property-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwenden, um auf andere Eigenschaften des Arrays zuzugreifen, wie bei einem Objekt.
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
> Wenn Sie im obigen Code einen nicht-ganzzahligen Wert für den Array-Operator angeben, wird eine Eigenschaft im Objekt erstellt, das das Array darstellt, anstatt eines Array-Elements.
>
> ```js
> const arr = [];
> arr[3.4] = "Oranges";
> console.log(arr.length); // 0
> console.log(Object.hasOwn(arr, 3.4)); // true
> ```

Sie können auch ein Array füllen, wenn Sie es erstellen:

```js
const myArray = new Array("Hello", myVar, 3.14159);
// OR
const myArray = ["Mango", "Apple", "Orange"];
```

### Verständnis von Länge

Auf Implementierungsebene speichern JavaScripts Arrays ihre Elemente tatsächlich als Standardobjekteigenschaften, wobei der Array-Index als Eigenschaftsname verwendet wird.

Die `length`-Eigenschaft ist besonders. Ihr Wert ist immer eine positive Zahl, die größer ist als der Index des letzten Elements, falls eines existiert. (Im unten stehenden Beispiel wird `'Dusty'` bei `30` indiziert, daher gibt `cats.length` `30 + 1` zurück).

Denken Sie daran, dass JavaScript-Array-Indizes bei 0 beginnen: Sie starten bei `0`, nicht bei `1`. Das bedeutet, dass die `length`-Eigenschaft um eins höher ist als der höchste im Array gespeicherte Index:

```js
const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

Sie können auch der `length`-Eigenschaft einen Wert zuweisen.

Das Schreiben eines Wertes, der kürzer als die Anzahl gespeicherter Elemente ist, kürzt das Array. Das Schreiben von `0` leert es vollständig:

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

### Iterieren über Arrays

Eine häufige Operation besteht darin, über die Werte eines Arrays zu iterieren und jeden auf irgendeine Weise zu verarbeiten, wie folgt:

```js
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

Wenn Sie wissen, dass kein Element in Ihrem Array im booleschen Kontext als `false` bewertet wird—wenn Ihr Array beispielsweise nur aus [DOM](/de/docs/Web/API/Document_Object_Model)-Knoten besteht—können Sie ein effizienteres Idiom verwenden:

```js
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* Process div in some way */
}
```

Dies vermeidet den Overhead der Überprüfung der Länge des Arrays und stellt sicher, dass die `div`-Variable bei jeder Schleife dem aktuellen Element zugewiesen wird, was den Komfort erhöht.

Die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode bietet eine weitere Möglichkeit, über ein Array zu iterieren:

```js
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

Die an `forEach` übergebene Funktion wird einmal für jedes Element im Array ausgeführt, wobei das Array-Element als Argument an die Funktion übergeben wird. Nicht zugewiesene Werte werden in einer `forEach`-Schleife nicht iteriert.

Beachten Sie, dass die Elemente eines Arrays, die ausgelassen werden, wenn das Array definiert ist, nicht aufgelistet werden, wenn durch `forEach` iteriert wird, aber _wohl_ aufgelistet werden, wenn `undefined` dem Element manuell zugewiesen wurde:

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

Da JavaScript-Array-Elemente als Standardobjekteigenschaften gespeichert werden, ist es nicht ratsam, JavaScript-Arrays mit {{jsxref("Statements/for...in", "for...in")}}-Schleifen zu durchlaufen, da normale Elemente und alle aufzählbaren Eigenschaften aufgelistet werden.

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

Die [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push)-Methode fügt ein oder mehrere Elemente an das Ende eines Arrays hinzu und gibt die resultierende `length` des Arrays zurück.

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

Die [`at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at)-Methode gibt das Element am angegebenen Index im Array zurück oder `undefined`, wenn der Index außerhalb des Bereichs liegt. Sie wird insbesondere für negative Indizes verwendet, die Elemente vom Ende des Arrays aus zugreifen.

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

Die [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)-Methode transponiert die Elemente eines Arrays: Das erste Array-Element wird zum letzten und das letzte zum ersten. Sie gibt eine Referenz zum Array zurück.

```js
const myArray = ["1", "2", "3"];
myArray.reverse();
// transposes the array so that myArray = ["3", "2", "1"]
```

Die [`flat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)-Methode gibt ein neues Array zurück, in dem alle Unterarray-Elemente rekursiv bis zur angegebenen Tiefe miteinander verbunden sind.

```js
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened
```

Die [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)-Methode sortiert die Elemente eines Arrays an Ort und Stelle und gibt eine Referenz zum Array zurück.

```js
const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]
```

`sort()` kann auch eine Rückruffunktion übernehmen, um zu bestimmen, wie Array-Elemente verglichen werden. Die Rückruffunktion wird mit zwei Argumenten aufgerufen, die zwei Werte aus dem Array sind. Die Funktion vergleicht diese beiden Werte und gibt eine positive Zahl, negative Zahl oder Null zurück, die die Reihenfolge der beiden Werte anzeigt. Zum Beispiel sortiert das folgende Beispiel das Array nach dem letzten Buchstaben eines Strings:

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

- wenn `a` kleiner als `b` nach dem Sortiersystem ist, geben Sie `-1` (oder eine negative Zahl) zurück
- wenn `a` größer als `b` nach dem Sortiersystem ist, geben Sie `1` (oder eine positive Zahl) zurück
- wenn `a` und `b` als gleichwertig betrachtet werden, geben Sie `0` zurück.

Die [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)-Methode durchsucht das Array nach `searchElement` und gibt den Index des ersten Treffers zurück.

```js
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// Now try again, starting from after the last match
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, because 'z' was not found
```

Die [`lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)-Methode funktioniert ähnlich wie `indexOf`, beginnt jedoch am Ende und sucht rückwärts.

```js
const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // 5

// Now try again, starting from before the last match
console.log(a.lastIndexOf("b", 4)); // 1
console.log(a.lastIndexOf("z")); // -1
```

Die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode führt `callback` für jedes Array-Element aus und gibt `undefined` zurück.

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

Die `forEach`-Methode (und andere unten aufgeführten) nehmen einen Rückruf entgegen und werden als _iterative Methoden_ bezeichnet, da sie in irgendeiner Weise über das gesamte Array iterieren. Jede nimmt ein optionales zweites Argument namens `thisArg`. Wenn bereitgestellt, wird `thisArg` zum Wert des `this`-Schlüsselworts im Körper der Rückruffunktion. Wenn nicht bereitgestellt, wird `this` wie in anderen Fällen, in denen eine Funktion außerhalb eines expliziten Objektkontexts aufgerufen wird, auf das globale Objekt ([`window`](/de/docs/Web/API/Window), [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis), usw.) verweisen, wenn die Funktion [nicht strikt](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, oder auf `undefined`, wenn die Funktion strikt ist.

> [!NOTE]
> Die zuvor eingeführte `sort()`-Methode ist keine iterative Methode, da ihre Rückruffunktion ausschließlich zum Vergleichen verwendet wird und möglicherweise nicht in einer bestimmten Reihenfolge basierend auf der Elementreihenfolge aufgerufen wird. `sort()` akzeptiert auch nicht den `thisArg`-Parameter.

Die [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Methode gibt ein neues Array aus dem Rückgabewert von `callback`, das für jedes Array-Element ausgeführt wurde, zurück.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

Die [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)-Methode führt `map()` gefolgt von einer `flat()` mit Tiefe 1 aus.

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

Die [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)-Methode wendet `callback(accumulator, currentValue, currentIndex, array)` auf jeden Wert im Array an, um die Liste der Elemente auf einen einzelnen Wert zu reduzieren. Die `reduce`-Funktion gibt den endgültigen Wert zurück, der von der `callback`-Funktion zurückgegeben wurde.

Wenn `initialValue` angegeben wird, wird `callback` mit `initialValue` als ersten Parameterwert und dem Wert des ersten Elements im Array als zweiten Parameterwert aufgerufen.

Wenn `initialValue` _nicht_ angegeben wird, dann sind die ersten beiden Parameterwerte von `callback` die ersten beiden Elemente des Arrays. Bei jedem weiteren Aufruf ist der erste Parameterwert das, was `callback` beim vorherigen Aufruf zurückgegeben hat, und der zweite Parameterwert der nächste Wert im Array.

Wenn `callback` Zugriff auf den Index des verarbeiteten Elements oder auf das gesamte Array benötigt, stehen sie als optionale Parameter zur Verfügung.

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

Sie können hin und her zwischen Arrays und anderen Datenstrukturen umwandeln.

### Gruppierung der Elemente eines Arrays

Die {{jsxref("Object.groupBy()")}}-Methode kann verwendet werden, um die Elemente eines Arrays zu gruppieren, wobei eine Testfunktion verwendet wird, die einen String zurückgibt, der die Gruppe des aktuellen Elements angibt.

Hier haben wir ein Inventar-Array, das "Food"-Objekte enthält, die einen `name` und einen `type` haben.

```js
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];
```

Um `Object.groupBy()` zu verwenden, geben Sie eine Rückruffunktion an, die mit dem aktuellen Element aufgerufen wird und optional den aktuellen Index und das Array, und einen String zurückgibt, der die Gruppe des Elements angibt.

Der folgende Code verwendet eine Pfeilfunktion, um den `type` des Arrays-Elements zurückzugeben (dies nutzt die [Objektdestrukturierungssyntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter), um das `type`-Element aus dem übergebenen Objekt zu extrahieren). Das Ergebnis ist ein Objekt, das Eigenschaften hat, die nach den eindeutigen Strings benannt sind, die von der Rückruffunktion zurückgegeben werden. Jeder Eigenschaft ist ein Array zugewiesen, das die Elemente in der Gruppe enthält.

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

Beachten Sie, dass das zurückgegebene Objekt dieselben Elemente wie das ursprüngliche Array referenziert (keine {{Glossary("deep_copy", "tiefe Kopien")}}). Änderungen an der internen Struktur dieser Elemente werden sowohl im ursprünglichen Array als auch im zurückgegebenen Objekt angezeigt.

Wenn Sie keinen String als Schlüssel verwenden können, beispielsweise wenn die Informationen zur Gruppierung mit einem Objekt verbunden sind, das sich ändern könnte, können Sie stattdessen {{jsxref("Map.groupBy()")}} verwenden. Dies ist sehr ähnlich zu `Object.groupBy()`, außer dass es die Elemente des Arrays in eine {{jsxref("Map")}} gruppiert, die einen beliebigen Wert ({{Glossary("object", "Objekt")}} oder {{Glossary("primitive", "primitive")}}) als Schlüssel verwenden kann.

## Spärliche Arrays

Arrays können "leere Slots" enthalten, die nicht dasselbe sind wie Slots, die mit dem Wert `undefined` gefüllt sind. Leere Slots können auf folgende Weise erstellt werden:

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

Bei einigen Operationen verhalten sich leere Slots so, als wären sie mit `undefined` gefüllt.

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

Bei anderen (am bemerkenswertesten Array-Iterationsmethoden) werden leere Slots übersprungen.

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

Für eine vollständige Liste, wie sich Array-Methoden bei spärlichen Arrays verhalten, siehe die [`Array`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots).

## Mehrdimensionale Arrays

Arrays können verschachtelt werden, was bedeutet, dass ein Array ein weiteres Array als Element enthalten kann. Mithilfe dieser Eigenschaft von JavaScript-Arrays können mehrdimensionale Arrays erstellt werden.

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

Zum Beispiel, wenn ein Array das Ergebnis einer Übereinstimmung zwischen einem regulären Ausdruck und einem String ist, gibt das Array Eigenschaften und Elemente zurück, die Informationen über die Übereinstimmung liefern. Ein Array ist der Rückgabewert von [`RegExp.prototype.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) und [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split). Informationen zur Verwendung von Arrays mit regulären Ausdrücken finden Sie unter [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Arbeiten mit array-ähnlichen Objekten

Einige JavaScript-Objekte, wie die [`NodeList`](/de/docs/Web/API/NodeList), die von [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) zurückgegeben werden, oder das im Körper einer Funktion verfügbare {{jsxref("Functions/arguments", "arguments")}}-Objekt, sehen aus und verhalten sich oberflächlich wie Arrays, aber sie teilen nicht alle deren Methoden. Das `arguments`-Objekt bietet ein {{jsxref("Function/length", "length")}}-Attribut, implementiert jedoch keine Array-Methoden wie [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

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

Array-Prototyp-Methoden können auch auf Strings verwendet werden, da sie sequentiellen Zugriff auf ihre Zeichen in ähnlicher Weise wie Arrays bieten:

```js
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
```

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}
