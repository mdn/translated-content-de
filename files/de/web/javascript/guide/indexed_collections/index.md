---
title: Indizierte Sammlungen
slug: Web/JavaScript/Guide/Indexed_collections
l10n:
  sourceCommit: 52efe757952fde32b197b8ae9395f8f2a3bc7a9f
---

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}

Dieses Kapitel stellt Datensammlungen vor, deren Werte durch einen Index geordnet sind. Dazu gehören Arrays und arrayähnliche Konstrukte wie {{jsxref("Array")}}-Objekte und {{jsxref("TypedArray")}}-Objekte.

Ein _Array_ ist eine geordnete Liste von Werten, auf die Sie über einen Namen und einen Index zugreifen.

Betrachten Sie beispielsweise ein Array namens `emp`, das die Namen von Beschäftigten enthält, indiziert nach ihrer numerischen Personalnummer. `emp[0]` steht also für Person Nummer null, `emp[1]` für Person Nummer eins und so weiter.

JavaScript hat keinen eigenen Array-Datentyp. Sie können jedoch das vordefinierte `Array`-Objekt und seine Methoden verwenden, um in Ihren Anwendungen mit Arrays zu arbeiten. Das `Array`-Objekt bietet Methoden, um Arrays auf unterschiedliche Weise zu bearbeiten, etwa um sie zusammenzufügen, umzukehren und zu sortieren. Es verfügt über eine Eigenschaft zur Bestimmung der Array-Länge sowie über weitere Eigenschaften für die Verwendung mit regulären Ausdrücken.

Dieser Artikel konzentriert sich auf Arrays. Viele der Konzepte gelten jedoch auch für typisierte Arrays, da Arrays und typisierte Arrays viele ähnliche Methoden besitzen. Weitere Informationen zu typisierten Arrays finden Sie im [Leitfaden zu typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays).

## Ein Array erstellen

Die folgenden Anweisungen erstellen gleichwertige Arrays:

```js
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];
```

`element0, element1, …, elementN` ist eine Liste von Werten für die Elemente des Arrays. Werden diese Werte angegeben, wird das Array mit ihnen als Elementen initialisiert. Die `length`-Eigenschaft des Arrays wird auf die Anzahl der Argumente gesetzt.

Die Schreibweise mit eckigen Klammern wird „Array-Literal“ oder „Array-Initialisierer“ genannt. Sie ist kürzer als andere Formen der Array-Erstellung und wird daher im Allgemeinen bevorzugt. Einzelheiten finden Sie unter [Array-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Array_initializer).

Um ein Array mit einer Länge größer als null, aber ohne Elemente zu erstellen, können Sie eine der folgenden Möglichkeiten verwenden:

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
> Im obigen Code muss `arrayLength` ein `Number` sein. Andernfalls wird ein Array mit einem einzigen Element (dem angegebenen Wert) erstellt. Ein Aufruf von `arr.length` gibt `arrayLength` zurück, das Array enthält jedoch keine Elemente. Eine {{jsxref("Statements/for...in", "for...in")}}-Schleife findet keine Eigenschaft im Array.

Arrays können nicht nur einer neu definierten Variablen zugewiesen werden, wie oben gezeigt, sondern auch einer Eigenschaft eines neuen oder bereits vorhandenen Objekts:

```js
const obj = {};
// …
obj.prop = [element0, element1, /* …, */ elementN];

// OR
const obj = { prop: [element0, element1, /* …, */ elementN] };
```

Wenn Sie ein Array mit einem einzigen Element initialisieren möchten und dieses Element ein `Number` ist, müssen Sie die Schreibweise mit eckigen Klammern verwenden. Wird ein einzelner `Number`-Wert an den Konstruktor oder die Funktion `Array()` übergeben, wird er als `arrayLength` und nicht als einzelnes Element interpretiert.

So entsteht ein Array mit nur einem Element: der Zahl 42.

```js
const arr = [42];
```

So entsteht ein Array ohne Elemente, dessen `arr.length` auf 42 gesetzt ist.

```js
const arr = Array(42);
```

Dies entspricht:

```js
const arr = [];
arr.length = 42;
```

Ein Aufruf von `Array(N)` führt zu einem `RangeError`, wenn `N` keine ganze Zahl ist und einen Nachkommaanteil ungleich null hat. Das folgende Beispiel veranschaulicht dieses Verhalten.

```js
const arr = Array(9.3); // RangeError: Invalid array length
```

Wenn Ihr Code Arrays mit einem einzelnen Element eines beliebigen Datentyps erstellen muss, ist es sicherer, Array-Literale zu verwenden. Alternativ können Sie zunächst ein leeres Array erstellen und ihm anschließend das einzelne Element hinzufügen.

Sie können auch die statische Methode {{jsxref("Array.of")}} verwenden, um Arrays mit einem einzelnen Element zu erstellen.

```js
const arr = Array.of(9.3); // arr contains only one element 9.3
```

## Auf Array-Elemente zugreifen

Da Elemente zugleich Eigenschaften sind, können Sie mit [Eigenschaftszugriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) auf sie zugreifen. Angenommen, Sie definieren das folgende Array:

```js
const myArray = ["Wind", "Rain", "Fire"];
```

Auf das erste Element des Arrays greifen Sie mit `myArray[0]` zu, auf das zweite mit `myArray[1]` und so weiter. Die Indizierung der Elemente beginnt bei null.

> [!NOTE]
> Mit [Eigenschaftszugriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) können Sie wie bei einem Objekt auch auf andere Eigenschaften des Arrays zugreifen.
>
> ```js
> const arr = ["one", "two", "three"];
> arr[2]; // three
> arr["length"]; // 3
> ```

## Ein Array befüllen

Sie können ein Array befüllen, indem Sie seinen Elementen Werte zuweisen. Zum Beispiel:

```js
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

> [!NOTE]
> Wenn Sie dem Array-Operator im obigen Code einen Wert übergeben, der keine ganze Zahl ist, wird im Objekt, das das Array repräsentiert, eine Eigenschaft statt eines Array-Elements erstellt.
>
> ```js
> const arr = [];
> arr[3.4] = "Oranges";
> console.log(arr.length); // 0
> console.log(Object.hasOwn(arr, 3.4)); // true
> ```

Sie können ein Array auch beim Erstellen befüllen:

```js
const myArray = new Array("Hello", myVar, 3.14159);
// OR
const myArray = ["Mango", "Apple", "Orange"];
```

### Die Länge verstehen

Auf Implementierungsebene speichert JavaScript die Elemente von Arrays als gewöhnliche Objekteigenschaften und verwendet dabei den Array-Index als Eigenschaftsnamen.

Die `length`-Eigenschaft ist besonders. Ihr Wert ist immer eine positive ganze Zahl, die größer ist als der Index des letzten Elements, sofern eines vorhanden ist. (Im folgenden Beispiel hat `'Dusty'` den Index `30`, daher gibt `cats.length` den Wert `30 + 1` zurück.)

Beachten Sie, dass JavaScript-Array-Indizes bei `0` und nicht bei `1` beginnen. Das bedeutet, dass die `length`-Eigenschaft um eins größer ist als der höchste im Array gespeicherte Index:

```js
const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

Sie können der `length`-Eigenschaft auch einen Wert zuweisen.

Wenn Sie einen Wert zuweisen, der kleiner als die Anzahl der gespeicherten Elemente ist, wird das Array gekürzt. Durch Zuweisen von `0` wird es vollständig geleert:

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

### Arrays durchlaufen

Häufig werden die Werte eines Arrays durchlaufen, um jeden Wert auf irgendeine Weise zu verarbeiten:

```js
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

Wenn Sie wissen, dass keines der Elemente Ihres Arrays in einem booleschen Kontext zu `false` ausgewertet wird – etwa weil Ihr Array ausschließlich [DOM](/de/docs/Web/API/Document_Object_Model)-Knoten enthält –, können Sie eine effizientere Schreibweise verwenden:

```js
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* Process div in some way */
}
```

Dadurch entfällt der Aufwand, die Länge des Arrays zu prüfen. Außerdem wird der Variablen `div` bei jedem Schleifendurchlauf das aktuelle Element zugewiesen.

Die Methode [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) bietet eine weitere Möglichkeit, ein Array zu durchlaufen:

```js
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

Die an `forEach` übergebene Funktion wird für jedes Element des Arrays einmal ausgeführt. Dabei wird das Array-Element als Argument an die Funktion übergeben. Stellen ohne zugewiesenen Wert werden bei `forEach` nicht durchlaufen.

Beachten Sie, dass bei der Definition des Arrays ausgelassene Elemente beim Durchlaufen mit `forEach` nicht berücksichtigt werden. Elemente, denen ausdrücklich `undefined` zugewiesen wurde, werden dagegen berücksichtigt:

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

Da JavaScript Array-Elemente als gewöhnliche Objekteigenschaften speichert, ist es nicht ratsam, JavaScript-Arrays mit {{jsxref("Statements/for...in", "for...in")}}-Schleifen zu durchlaufen: Dabei werden sowohl die regulären Elemente als auch alle aufzählbaren Eigenschaften erfasst.

### Array-Methoden

Das {{jsxref("Array")}}-Objekt verfügt über die folgenden Methoden:

Die Methode [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) fügt zwei oder mehr Arrays zusammen und gibt ein neues Array zurück.

```js
let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
// myArray is now ["1", "2", "3", "a", "b", "c"]
```

Die Methode [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) fügt alle Elemente eines Arrays zu einer Zeichenfolge zusammen.

```js
const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list is "Wind - Rain - Fire"
```

Die Methode [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) fügt am Ende eines Arrays ein oder mehrere Elemente hinzu und gibt die daraus resultierende `length` des Arrays zurück.

```js
const myArray = ["1", "2"];
myArray.push("3"); // myArray is now ["1", "2", "3"]
```

Die Methode [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) entfernt das letzte Element eines Arrays und gibt dieses Element zurück.

```js
const myArray = ["1", "2", "3"];
const last = myArray.pop();
// myArray is now ["1", "2"], last = "3"
```

Die Methode [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) entfernt das erste Element eines Arrays und gibt dieses Element zurück.

```js
const myArray = ["1", "2", "3"];
const first = myArray.shift();
// myArray is now ["2", "3"], first is "1"
```

Die Methode [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) fügt am Anfang eines Arrays ein oder mehrere Elemente hinzu und gibt die neue Länge des Arrays zurück.

```js
const myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
// myArray becomes ["4", "5", "1", "2", "3"]
```

Die Methode [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) entnimmt einem Array einen Abschnitt und gibt ihn als neues Array zurück.

```js
let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
// starts at index 1 and extracts all elements
// until index 3
```

Die Methode [`at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at) gibt das Element am angegebenen Index des Arrays zurück oder `undefined`, wenn der Index außerhalb des gültigen Bereichs liegt. Sie wird insbesondere für negative Indizes verwendet, mit denen vom Ende des Arrays aus auf Elemente zugegriffen wird.

```js
const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d", the second-last element of myArray
```

Die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) entfernt Elemente aus einem Array und ersetzt sie optional. Sie gibt die entfernten Elemente zurück.

```js
const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
```

Die Methode [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) kehrt die Reihenfolge der Elemente eines Arrays direkt im Array um: Das erste Element wird zum letzten und das letzte zum ersten. Sie gibt eine Referenz auf das Array zurück.

```js
const myArray = ["1", "2", "3"];
myArray.reverse();
// transposes the array so that myArray = ["3", "2", "1"]
```

Die Methode [`flat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) gibt ein neues Array zurück, in das alle Elemente verschachtelter Arrays rekursiv bis zur angegebenen Tiefe eingefügt wurden.

```js
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened
```

Die Methode [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sortiert die Elemente eines Arrays direkt im Array und gibt eine Referenz auf das Array zurück.

```js
const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]
```

`sort()` kann auch eine Callback-Funktion entgegennehmen, die festlegt, wie Array-Elemente verglichen werden. Die Callback-Funktion wird mit zwei Argumenten aufgerufen, die zwei Werte aus dem Array darstellen. Sie vergleicht diese Werte und gibt eine positive Zahl, eine negative Zahl oder null zurück, um ihre Reihenfolge festzulegen. Im folgenden Beispiel wird das Array nach dem letzten Buchstaben einer Zeichenfolge sortiert:

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

- Wenn `a` gemäß der Sortierreihenfolge kleiner als `b` ist, geben Sie `-1` (oder eine beliebige negative Zahl) zurück.
- Wenn `a` gemäß der Sortierreihenfolge größer als `b` ist, geben Sie `1` (oder eine beliebige positive Zahl) zurück.
- Wenn `a` und `b` als gleichwertig gelten, geben Sie `0` zurück.

Die Methode [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) sucht im Array nach `searchElement` und gibt den Index der ersten Übereinstimmung zurück.

```js
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// Now try again, starting from after the last match
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, because 'z' was not found
```

Die Methode [`lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) funktioniert wie `indexOf`, beginnt die Suche jedoch am Ende und sucht rückwärts.

```js
const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // 5

// Now try again, starting from before the last match
console.log(a.lastIndexOf("b", 4)); // 1
console.log(a.lastIndexOf("z")); // -1
```

Die Methode [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) führt `callback` für jedes Array-Element aus und gibt `undefined` zurück.

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

Die Methode `forEach` (und die folgenden Methoden), die einen Callback entgegennehmen, werden als _iterative Methoden_ bezeichnet, weil sie das gesamte Array auf die eine oder andere Weise durchlaufen. Jede von ihnen akzeptiert ein optionales zweites Argument namens `thisArg`. Wird `thisArg` angegeben, ist es der Wert des Schlüsselworts `this` innerhalb der Callback-Funktion. Wird es nicht angegeben, verweist `this` – wie auch in anderen Fällen, in denen eine Funktion außerhalb eines expliziten Objektkontexts aufgerufen wird – auf das globale Objekt ([`window`](/de/docs/Web/API/Window), [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) usw.), sofern die Funktion [nicht im strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt wird. Im strikten Modus ist `this` dagegen `undefined`.

> [!NOTE]
> Die oben vorgestellte Methode `sort()` ist keine iterative Methode, da ihre Callback-Funktion nur zum Vergleichen verwendet wird und nicht unbedingt in einer von der Reihenfolge der Elemente abhängigen Reihenfolge aufgerufen wird. `sort()` akzeptiert auch keinen Parameter `thisArg`.

Die Methode [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) gibt ein neues Array mit den Rückgabewerten zurück, die bei der Ausführung von `callback` für jedes Array-Element entstehen.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

Die Methode [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) führt `map()` aus, gefolgt von `flat()` mit einer Tiefe von 1.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
```

Die Methode [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) gibt ein neues Array mit den Elementen zurück, für die `callback` den Wert `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]
```

Die Methode [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find) gibt das erste Element zurück, für das `callback` den Wert `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.find((item) => typeof item === "number");
console.log(i); // 10
```

Die Methode [`findLast()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) gibt das letzte Element zurück, für das `callback` den Wert `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLast((item) => typeof item === "number");
console.log(i); // 30
```

Die Methode [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) gibt den Index des ersten Elements zurück, für das `callback` den Wert `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findIndex((item) => typeof item === "number");
console.log(i); // 1
```

Die Methode [`findLastIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) gibt den Index des letzten Elements zurück, für das `callback` den Wert `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLastIndex((item) => typeof item === "number");
console.log(i); // 5
```

Die Methode [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every) gibt `true` zurück, wenn `callback` für jedes Element des Arrays `true` zurückgibt.

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // false
```

Die Methode [`some()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/some) gibt `true` zurück, wenn `callback` für mindestens ein Element des Arrays `true` zurückgibt.

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

Die Methode [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) wendet `callback(accumulator, currentValue, currentIndex, array)` auf die Werte des Arrays an, um die Liste der Elemente auf einen einzigen Wert zu reduzieren. Die Funktion `reduce` gibt den endgültigen Rückgabewert der Funktion `callback` zurück.

Wenn `initialValue` angegeben ist, wird `callback` mit `initialValue` als erstem Parameterwert und dem Wert des ersten Array-Elements als zweitem Parameterwert aufgerufen.

Wenn `initialValue` _nicht_ angegeben ist, sind die ersten beiden Parameterwerte von `callback` das erste und das zweite Element des Arrays. Bei _jedem_ folgenden Aufruf ist der erste Parameterwert der Wert, den `callback` beim vorherigen Aufruf zurückgegeben hat, und der zweite Parameterwert ist der nächste Wert im Array.

Falls `callback` den Index des gerade verarbeiteten Elements oder das gesamte Array benötigt, stehen beide als optionale Parameter zur Verfügung.

```js
const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60
```

Die Methode [`reduceRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) funktioniert wie `reduce()`, beginnt jedoch beim letzten Element.

`reduce` und `reduceRight` sind die am wenigsten selbsterklärenden iterativen Array-Methoden. Sie sollten für Algorithmen verwendet werden, die zwei Werte rekursiv kombinieren, um eine Folge auf einen einzigen Wert zu reduzieren.

## Arrays umwandeln

Sie können Arrays in andere Datenstrukturen und diese wieder in Arrays umwandeln.

### Elemente eines Arrays gruppieren

Mit der Methode {{jsxref("Object.groupBy()")}} können Sie die Elemente eines Arrays gruppieren. Dazu wird eine Prüffunktion verwendet, die eine Zeichenfolge zurückgibt, welche die Gruppe des aktuellen Elements angibt.

Hier verwenden wir ein Inventar-Array mit „Lebensmittel“-Objekten, die jeweils ein `name` und ein `type` haben.

```js
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];
```

Um `Object.groupBy()` zu verwenden, übergeben Sie eine Callback-Funktion. Sie wird mit dem aktuellen Element und optional mit dem aktuellen Index und dem Array aufgerufen und gibt eine Zeichenfolge zurück, die die Gruppe des Elements angibt.

Der folgende Code verwendet eine Pfeilfunktion, um den `type` jedes Array-Elements zurückzugeben. Dabei wird die [Syntax zur Destrukturierung von Objekten in Funktionsargumenten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#unpacking_properties_from_objects_passed_as_a_function_parameter) verwendet, um `type` aus dem übergebenen Objekt zu entnehmen. Das Ergebnis ist ein Objekt mit Eigenschaften, deren Namen den eindeutigen Zeichenfolgen entsprechen, die der Callback zurückgibt. Jeder Eigenschaft wird ein Array mit den Elementen der jeweiligen Gruppe zugewiesen.

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

Beachten Sie, dass das zurückgegebene Objekt auf _dieselben_ Elemente wie das ursprüngliche Array verweist (nicht auf {{Glossary("deep_copy", "tiefe Kopien")}}). Änderungen an der internen Struktur dieser Elemente sind sowohl im ursprünglichen Array als auch im zurückgegebenen Objekt sichtbar.

Wenn Sie keine Zeichenfolge als Schlüssel verwenden können, etwa weil die für die Gruppierung maßgebliche Information einem Objekt zugeordnet ist, das sich ändern kann, können Sie stattdessen {{jsxref("Map.groupBy()")}} verwenden. Diese Methode ist `Object.groupBy()` sehr ähnlich, gruppiert die Array-Elemente jedoch in einer {{jsxref("Map")}}, die einen beliebigen Wert ({{Glossary("object", "Objekt")}} oder {{Glossary("primitive", "primitiven Wert")}}) als Schlüssel verwenden kann.

## Arrays mit Lücken

Arrays können „leere Stellen“ enthalten. Diese sind nicht dasselbe wie Stellen, die mit dem Wert `undefined` belegt sind. Leere Stellen können auf eine der folgenden Arten entstehen:

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

Bei manchen Operationen verhalten sich leere Stellen so, als wären sie mit `undefined` belegt.

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

Bei anderen Operationen – insbesondere bei iterativen Array-Methoden – werden leere Stellen übersprungen.

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

Eine vollständige Übersicht über das Verhalten von Array-Methoden bei Arrays mit Lücken finden Sie auf der [Referenzseite zu `Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots).

## Mehrdimensionale Arrays

Arrays können verschachtelt sein, das heißt, ein Array kann ein weiteres Array als Element enthalten. Mithilfe dieser Eigenschaft von JavaScript-Arrays lassen sich mehrdimensionale Arrays erstellen.

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

## Arrays zum Speichern weiterer Eigenschaften verwenden

Arrays können auch wie Objekte verwendet werden, um zusammengehörige Informationen zu speichern.

```js
const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property); // "value"
```

Wenn ein Array beispielsweise das Ergebnis eines Abgleichs zwischen einem regulären Ausdruck und einer Zeichenfolge ist, enthält es Eigenschaften und Elemente mit Informationen über die Übereinstimmung. Ein Array ist der Rückgabewert von [`RegExp.prototype.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) und [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split). Informationen zur Verwendung von Arrays mit regulären Ausdrücken finden Sie unter [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Mit arrayähnlichen Objekten arbeiten

Manche JavaScript-Objekte, etwa die von [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) zurückgegebene [`NodeList`](/de/docs/Web/API/NodeList) oder das innerhalb einer Funktion verfügbare {{jsxref("Functions/arguments", "arguments")}}-Objekt, sehen auf den ersten Blick wie Arrays aus und verhalten sich ähnlich, besitzen aber nicht alle ihre Methoden. Das `arguments`-Objekt stellt ein {{jsxref("Function/length", "length")}}-Attribut bereit, implementiert jedoch keine Array-Methoden wie [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

Array-Methoden können nicht direkt auf arrayähnlichen Objekten aufgerufen werden.

```js example-bad
function printArguments() {
  arguments.forEach((item) => {
    console.log(item);
  }); // TypeError: arguments.forEach is not a function
}
```

Sie können sie jedoch mithilfe von {{jsxref("Function.prototype.call()")}} indirekt aufrufen.

```js example-good
function printArguments() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}
```

Array-Prototyp-Methoden können auch auf Zeichenfolgen angewendet werden, da diese ähnlich wie Arrays einen sequenziellen Zugriff auf ihre Zeichen ermöglichen:

```js
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
```

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}
