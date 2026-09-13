---
title: Indizierte Sammlungen
slug: Web/JavaScript/Guide/Indexed_collections
l10n:
  sourceCommit: e2c34c75df6238fbeff790100cea1ab7e552e49e
---

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}

Dieses Kapitel führt Sammlungen von Daten ein, die nach einem Indexwert geordnet sind. Dazu gehören Arrays und array-ähnliche Konstrukte wie {{jsxref("Array")}}-Objekte und {{jsxref("TypedArray")}}-Objekte.

Ein _Array_ ist eine geordnete Liste von Werten, die Sie mit einem Namen und einem Index ansprechen.

Zum Beispiel, nehmen Sie ein Array namens `emp`, das die Namen der Mitarbeiter enthält, die durch ihre numerische Mitarbeiternummer indiziert sind. So wäre `emp[0]` Mitarbeiter Nummer null, `emp[1]` Mitarbeiter Nummer eins und so weiter.

JavaScript hat keinen expliziten Array-Datentyp. Sie können jedoch das vordefinierte `Array`-Objekt und dessen Methoden verwenden, um mit Arrays in Ihren Anwendungen zu arbeiten. Das `Array`-Objekt verfügt über Methoden, um Arrays auf verschiedene Arten zu manipulieren, wie beispielsweise sie zu verbinden, umzukehren und zu sortieren. Es hat eine Eigenschaft zur Bestimmung der Array-Länge und andere Eigenschaften zur Verwendung mit regulären Ausdrücken.

Wir werden uns in diesem Artikel auf Arrays konzentrieren, aber viele der gleichen Konzepte gelten auch für typisierte Arrays, da Arrays und typisierte Arrays viele ähnliche Methoden teilen. Weitere Informationen zu typisierten Arrays finden Sie im [Leitfaden zu typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays).

## Erstellen eines Arrays

Die folgenden Aussagen erstellen gleichwertige Arrays:

```js
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];
```

`element0, element1, …, elementN` ist eine Liste von Werten für die Elemente des Arrays. Wenn diese Werte angegeben werden, wird das Array mit ihnen als Array-Elementen initialisiert. Die `length`-Eigenschaft des Arrays wird auf die Anzahl der Argumente gesetzt.

Die Klammer-Syntax wird als "Array-Literal" oder "Array-Initializer" bezeichnet. Sie ist kürzer als andere Formen der Erstellung von Arrays und wird daher im Allgemeinen bevorzugt. Details finden Sie unter [Array-Literals](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals).

Um ein Array mit einer nicht-null-langen Länge, aber ohne Elemente zu erstellen, kann eines der folgenden verwendet werden:

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
> Im obigen Code muss `arrayLength` eine `Number` sein. Andernfalls wird ein Array mit einem einzigen Element (dem angegebenen Wert) erstellt. Der Aufruf von `arr.length` wird `arrayLength` zurückgeben, aber das Array enthält keine Elemente. Eine {{jsxref("Statements/for...in", "for...in")}}-Schleife wird keine Eigenschaft im Array finden.

Zusätzlich zu einer wie oben definierten neuen Variablen können Arrays auch als Eigenschaft eines neuen oder eines bestehenden Objekts zugewiesen werden:

```js
const obj = {};
// …
obj.prop = [element0, element1, /* …, */ elementN];

// OR
const obj = { prop: [element0, element1, /* …, */ elementN] };
```

Wenn Sie ein Array mit einem einzelnen Element initialisieren möchten und das Element eine `Number` ist, müssen Sie die Klammer-Syntax verwenden. Wenn ein einzelner `Number`-Wert an den `Array()`-Konstruktor oder die Funktion übergeben wird, wird er als `arrayLength` interpretiert und nicht als einzelnes Element.

Dies erstellt ein Array mit nur einem Element: die Zahl 42.

```js
const arr = [42];
```

Dies erstellt ein Array ohne Elemente und `arr.length` ist auf 42 gesetzt.

```js
const arr = Array(42);
```

Dies entspricht:

```js
const arr = [];
arr.length = 42;
```

Der Aufruf von `Array(N)` führt zu einem `RangeError`, wenn `N` eine nicht-ganzzahlige Zahl ist, deren Bruchteil ungleich null ist. Das folgende Beispiel veranschaulicht dieses Verhalten.

```js
const arr = Array(9.3); // RangeError: Invalid array length
```

Wenn Ihr Code Arrays mit einzelnen Elementen eines beliebigen Datentyps erstellen muss, ist es sicherer, Array-Literale zu verwenden. Alternativ erstellen Sie zuerst ein leeres Array, bevor Sie das einzelne Element hinzufügen.

Sie können auch die statische Methode {{jsxref("Array.of")}} verwenden, um Arrays mit einem einzelnen Element zu erstellen.

```js
const arr = Array.of(9.3); // arr contains only one element 9.3
```

## Zugriff auf Array-Elemente

Da Elemente auch Eigenschaften sind, können Sie auf sie mit [Eigenschafts-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zugreifen. Angenommen, Sie definieren das folgende Array:

```js
const myArray = ["Wind", "Rain", "Fire"];
```

Sie können auf das erste Element des Arrays als `myArray[0]` und auf das zweite Element des Arrays als `myArray[1]` usw. verweisen. Der Index der Elemente beginnt bei null.

> [!NOTE]
> Sie können auch [Eigenschafts-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwenden, um auf andere Eigenschaften des Arrays zuzugreifen, ähnlich wie bei einem Objekt.
>
> ```js
> const arr = ["one", "two", "three"];
> arr[2]; // three
> arr["length"]; // 3
> ```

## Befüllen eines Arrays

Sie können ein Array befüllen, indem Sie seinen Elementen Werte zuweisen. Beispielsweise:

```js
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

> [!NOTE]
> Wenn Sie einen nicht-ganzzahligen Wert auf den Array-Operator im obigen Code anwenden, wird eine Eigenschaft im Objekt erstellt, das das Array darstellt, anstatt ein Array-Element.
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

### Verständnis von length

Auf Implementierungsebene speichert JavaScript Arrays ihre Elemente tatsächlich als Standardobjekteigenschaften, wobei der Array-Index als Eigenschaftsname verwendet wird.

Die `length`-Eigenschaft ist besonders. Ihr Wert ist immer eine positive ganze Zahl, die größer ist als der Index des letzten Elements, falls eines existiert. (Im untenstehenden Beispiel wird `'Dusty'` bei `30` indiziert, daher gibt `cats.length` `30 + 1` zurück).

Denken Sie daran, JavaScript Array-Indizes sind 0-basiert: Sie beginnen bei `0`, nicht bei `1`. Das bedeutet, dass die `length`-Eigenschaft um eins größer ist als der höchste im Array gespeicherte Index:

```js
const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

Sie können der `length`-Eigenschaft auch Werte zuweisen.

Wenn Sie einen Wert schreiben, der kürzer ist als die Anzahl der gespeicherten Elemente, wird das Array gekürzt. Das Schreiben von `0` leert es vollständig:

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

Eine häufige Operation ist es, die Elemente eines Arrays zu durchlaufen, um jedes in gewisser Weise zu verarbeiten, wie folgt:

```js
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

Wenn Sie sicher wissen, dass keines der Elemente in Ihrem Array in einem booleanischen Kontext zu `false` auswertet - wenn Ihr Array zum Beispiel nur [DOM](/de/docs/Web/API/Document_Object_Model)-Knoten enthält - können Sie ein effizienteres Idiom verwenden:

```js
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* Process div in some way */
}
```

Dies vermeidet den Overhead der Überprüfung der Array-Länge und stellt sicher, dass die `div`-Variable jedes Mal innerhalb der Schleife auf das aktuelle Element neu zugewiesen wird, was zusätzlichen Komfort bietet.

Die Methode [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) bietet eine weitere Möglichkeit, über ein Array zu iterieren:

```js
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

Die an `forEach` übergebene Funktion wird einmal für jedes Element des Arrays ausgeführt, wobei das Array-Element als Argument an die Funktion übergeben wird. Nicht zugewiesene Werte werden in einer `forEach`-Schleife nicht durchlaufen.

Beachten Sie, dass die Elemente eines Arrays, die weggelassen wurden, als das Array definiert wurde, beim Iterieren durch `forEach` nicht aufgelistet werden, aber _werden_ aufgelistet, wenn `undefined` manuell dem Element zugewiesen wurde:

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

Da JavaScript-Array-Elemente als Standardobjekteigenschaften gespeichert werden, ist es nicht ratsam, durch JavaScript-Arrays mit {{jsxref("Statements/for...in", "for...in")}}-Schleifen zu iterieren, da normale Elemente und alle aufgelisteten Eigenschaften aufgeführt werden.

### Array-Methoden

Das {{jsxref("Array")}}-Objekt hat die folgenden Methoden:

Die Methode [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) verbindet zwei oder mehr Arrays und gibt ein neues Array zurück.

```js
let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
// myArray is now ["1", "2", "3", "a", "b", "c"]
```

Die Methode [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) verbindet alle Elemente eines Arrays zu einem String.

```js
const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list is "Wind - Rain - Fire"
```

Die Methode [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) fügt ein oder mehrere Elemente an das Ende eines Arrays hinzu und gibt die resultierende `length` des Arrays zurück.

```js
const myArray = ["1", "2"];
myArray.push("3"); // myArray is now ["1", "2", "3"]
```

Die Methode [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) entfernt das letzte Element aus einem Array und gibt dieses Element zurück.

```js
const myArray = ["1", "2", "3"];
const last = myArray.pop();
// myArray is now ["1", "2"], last = "3"
```

Die Methode [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) entfernt das erste Element aus einem Array und gibt dieses Element zurück.

```js
const myArray = ["1", "2", "3"];
const first = myArray.shift();
// myArray is now ["2", "3"], first is "1"
```

Die Methode [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) fügt ein oder mehrere Elemente an den Anfang eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

```js
const myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
// myArray becomes ["4", "5", "1", "2", "3"]
```

Die Methode [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) extrahiert einen Abschnitt eines Arrays und gibt ein neues Array zurück.

```js
let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
// starts at index 1 and extracts all elements
// until index 3
```

Die Methode [`at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at) gibt das Element am angegebenen Index im Array zurück oder `undefined`, wenn der Index außerhalb des Bereichs liegt. Sie wird insbesondere für negative Indizes verwendet, die auf Elemente vom Ende des Arrays zugreifen.

```js
const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d", the second-last element of myArray
```

Die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) entfernt Elemente aus einem Array und ersetzt diese (optional). Sie gibt die Elemente zurück, die aus dem Array entfernt wurden.

```js
const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
```

Die Methode [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) transponiert die Elemente eines Arrays an ihrem Platz: Das erste Array-Element wird das letzte und das letzte wird das erste. Sie gibt eine Referenz auf das Array zurück.

```js
const myArray = ["1", "2", "3"];
myArray.reverse();
// transposes the array so that myArray = ["3", "2", "1"]
```

Die Methode [`flat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) gibt ein neues Array zurück, in dem alle Unter-Array-Elemente bis zur angegebenen Tiefe rekursiv verbunden werden.

```js
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened
```

Die Methode [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sortiert die Elemente eines Arrays an ihrem Platz und gibt eine Referenz auf das Array zurück.

```js
const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]
```

`sort()` kann auch eine Rückruffunktion annehmen, um zu bestimmen, wie Array-Elemente verglichen werden. Die Rückruffunktion wird mit zwei Argumenten aufgerufen, die zwei Werte aus dem Array sind. Die Funktion vergleicht diese beiden Werte und gibt eine positive Zahl, eine negative Zahl oder null zurück, was die Reihenfolge der beiden Werte angibt. Zum Beispiel wird das folgende Array nach dem letzten Buchstaben eines Strings sortiert:

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

- wenn `a` nach dem Sortierungssystem kleiner als `b` ist, dann geben Sie `-1` (oder irgendeine negative Zahl) zurück
- wenn `a` nach dem Sortierungssystem größer als `b` ist, dann geben Sie `1` (oder irgendeine positive Zahl) zurück
- wenn `a` und `b` als gleichwertig angesehen werden, geben Sie `0` zurück.

Die Methode [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) durchsucht das Array nach `searchElement` und gibt den Index des ersten Treffers zurück.

```js
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// Now try again, starting from after the last match
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, because 'z' was not found
```

Die Methode [`lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) funktioniert wie `indexOf`, beginnt jedoch am Ende und sucht rückwärts.

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

Die `forEach`-Methode (und die folgenden) die einen Rückruf annehmen, sind als _iterative Methoden_ bekannt, da sie in gewisser Weise über das gesamte Array iterieren. Jede nimmt ein optionales zweites Argument namens `thisArg`. Wenn übergeben, wird `thisArg` der Wert des `this`-Schlüsselworts innerhalb des Rumpfen der Rückruffunktion. Wenn nicht angegeben, wie in anderen Fällen, in denen eine Funktion außerhalb eines expliziten Objektkontexts aufgerufen wird, wird `this` auf das globale Objekt ([`window`](/de/docs/Web/API/Window), [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis), etc.) verweisen, wenn die Funktion [nicht strict](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, oder `undefined`, wenn die Funktion strict ist.

> [!NOTE]
> Die oben eingeführte Methode `sort()` ist keine iterative Methode, da ihre Rückruffunktion nur für den Vergleich verwendet wird und möglicherweise nicht in einer bestimmten Reihenfolge basierend auf der Elementreihenfolge aufgerufen wird. `sort()` nimmt auch nicht den `thisArg` Parameter an.

Die Methode [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) gibt ein neues Array zurück, das den Rückgabewert jeder Ausführung von `callback` über jedes Array-Element enthält.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

Die Methode [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) führt `map()` gefolgt von einer `flat()`-Operation der Tiefe 1 aus.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
```

Die Methode [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) gibt ein neues Array zurück, das die Elemente enthält, für die `callback` `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]
```

Die Methode [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find) gibt das erste Element zurück, für das `callback` `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.find((item) => typeof item === "number");
console.log(i); // 10
```

Die Methode [`findLast()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast) gibt das letzte Element zurück, für das `callback` `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLast((item) => typeof item === "number");
console.log(i); // 30
```

Die Methode [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) gibt den Index des ersten Elements zurück, für das `callback` `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findIndex((item) => typeof item === "number");
console.log(i); // 1
```

Die Methode [`findLastIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex) gibt den Index des letzten Elements zurück, für das `callback` `true` zurückgegeben hat.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLastIndex((item) => typeof item === "number");
console.log(i); // 5
```

Die Methode [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every) gibt `true` zurück, wenn `callback` für jedes Element im Array `true` zurückgibt.

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // false
```

Die Methode [`some()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/some) gibt `true` zurück, wenn `callback` für mindestens ein Element im Array `true` zurückgibt.

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

Die Methode [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) wendet `callback(accumulator, currentValue, currentIndex, array)` auf jeden Wert im Array an, um die Liste der Elemente auf einen einzelnen Wert zu reduzieren. Die `reduce`-Funktion gibt den letzten Wert zurück, der von der `callback` Funktion zurückgegeben wird.

Wenn `initialValue` angegeben ist, wird `callback` mit `initialValue` als erstem Parameterwert und dem Wert des ersten Elements im Array als zweitem Parameterwert aufgerufen.

Wenn `initialValue` _nicht_ angegeben wird, sind die ersten beiden Parameterwerte von `callback` die ersten und zweiten Elemente des Arrays. Bei jedem folgenden Aufruf wird der Wert des ersten Parameters der sein, den `callback` beim vorherigen Aufruf zurückgegeben hat, und der zweite Parameterwert wird der nächste Wert im Array sein.

Falls `callback` Zugriff auf den Index des bearbeiteten Elements oder Zugriff auf das gesamte Array benötigt, stehen diese als optionale Parameter zur Verfügung.

```js
const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60
```

Die Methode [`reduceRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) funktioniert wie `reduce()`, beginnt jedoch mit dem letzten Element.

`reduce` und `reduceRight` sind die am wenigsten offensichtlichen der iterativen Array-Methoden. Sie sollten für Algorithmen verwendet werden, die zwei Werte rekursiv kombinieren, um eine Sequenz auf einen einzelnen Wert zu reduzieren.

## Array-Transformationen

Sie können zwischen Arrays und anderen Datenstrukturen hin- und her-transformieren.

### Gruppierung der Elemente eines Arrays

Die Methode {{jsxref("Object.groupBy()")}} kann verwendet werden, um die Elemente eines Arrays zu gruppieren, indem eine Testfunktion verwendet wird, die einen String zurückgibt, der die Gruppe des aktuellen Elements angibt.

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

Um `Object.groupBy()` zu verwenden, geben Sie eine Rückruffunktion an, die mit dem aktuellen Element (und optional dem aktuellen Index und dem Array) aufgerufen wird und einen String zurückgibt, der die Gruppe des Elements angibt.

Der folgende Code verwendet eine Pfeilfunktion, um den `type` jedes Array-Elements zurückzugeben (dabei wird die [Objekt-Destrukturierungs-Syntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#unpacking_properties_from_objects_passed_as_a_function_parameter) verwendet, um das `type`-Element aus dem übergebenen Objekt zu entpacken). Das Ergebnis ist ein Objekt, das Eigenschaften hat, die nach den eindeutigen Strings benannt sind, die von der Rückruffunktion zurückgegeben werden. Jede Eigenschaft erhält ein Array, das die Elemente der Gruppe enthält.

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

Beachten Sie, dass das zurückgegebene Objekt die _gleichen_ Elemente wie das Original-Array referenziert (keine {{Glossary("deep_copy", "Deep Copies")}}). Eine Änderung der internen Struktur dieser Elemente wird sowohl im Original-Array als auch im zurückgegebenen Objekt reflektiert.

Wenn Sie keinen String als Schlüssel verwenden können, zum Beispiel, wenn die Information, nach der gruppiert wird, mit einem Objekt verknüpft ist, das sich ändern könnte, dann können Sie stattdessen {{jsxref("Map.groupBy()")}} verwenden. Dies ist sehr ähnlich zu `Object.groupBy()`, außer dass es die Elemente des Arrays in einer {{jsxref("Map")}} gruppiert, die einen beliebigen Wert ({{Glossary("object", "Objekt")}} oder {{Glossary("primitive", "Primitiv")}}) als Schlüssel verwenden kann.

## Sparse Arrays

Arrays können "leere Felder" enthalten, die nicht gleich Feldern mit dem Wert `undefined` sind. Leere Felder können auf eine der folgenden Arten erstellt werden:

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

Bei einigen Operationen verhalten sich leere Felder so, als wären sie mit `undefined` gefüllt.

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

Bei anderen (insbesondere iterativen Array-Methoden) werden leere Felder übersprungen.

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

Für eine vollständige Liste, wie sich Array-Methoden mit Sparse Arrays verhalten, siehe [die `Array`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots).

## Mehrdimensionale Arrays

Arrays können geschachtelt werden, das bedeutet, dass ein Array ein anderes Array als Element enthalten kann. Mithilfe dieser Eigenschaft von JavaScript-Arrays können mehrdimensionale Arrays erstellt werden.

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

## Arrays zur Speicherung anderer Eigenschaften verwenden

Arrays können auch wie Objekte verwendet werden, um verwandte Informationen zu speichern.

```js
const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property); // "value"
```

Zum Beispiel, wenn ein Array das Ergebnis einer Übereinstimmung zwischen einem regulären Ausdruck und einem String ist, gibt das Array Eigenschaften und Elemente zurück, die Informationen über die Übereinstimmung bieten. Ein Array ist der Rückgabewert von [`RegExp.prototype.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) und [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split). Informationen zur Verwendung von Arrays mit regulären Ausdrücken finden Sie unter [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Arbeiten mit Array-ähnlichen Objekten

Einige JavaScript-Objekte, wie die [`NodeList`](/de/docs/Web/API/NodeList), die von [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) zurückgegeben werden, oder das {{jsxref("Functions/arguments", "arguments")}}-Objekt, das im Körper einer Funktion verfügbar ist, sehen und verhalten sich oberflächlich wie Arrays, teilen jedoch nicht alle ihre Methoden. Das `arguments`-Objekt bietet ein {{jsxref("Function/length", "length")}}-Attribut, implementiert jedoch keine Array-Methoden wie [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

Array-Methoden können nicht direkt auf array-ähnliche Objekte aufgerufen werden.

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

Array-Prototyp-Methoden können auch auf Strings angewendet werden, da sie einen sequentiellen Zugriff auf ihre Zeichen in ähnlicher Weise wie Arrays bieten:

```js
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
```

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}
