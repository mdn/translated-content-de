---
title: Indizierte Sammlungen
slug: Web/JavaScript/Guide/Indexed_collections
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}

Dieses Kapitel führt Sammlungen von Daten ein, die durch einen Indexwert geordnet sind. Dazu gehören Arrays und array-ähnliche Konstrukte wie {{jsxref("Array")}}-Objekte und {{jsxref("TypedArray")}}-Objekte.

Ein _Array_ ist eine geordnete Liste von Werten, auf die Sie mit einem Namen und einem Index zugreifen.

Beispielsweise betrachten Sie ein Array namens `emp`, das Mitarbeiternamen enthält, die durch ihre numerische Mitarbeiternummer indiziert sind. `emp[0]` wäre also Mitarbeiter Nummer Null, `emp[1]` Mitarbeiter Nummer Eins usw.

JavaScript verfügt nicht über einen expliziten Array-Datentyp. Sie können jedoch das vordefinierte `Array`-Objekt und seine Methoden verwenden, um mit Arrays in Ihren Anwendungen zu arbeiten. Das `Array`-Objekt hat Methoden, um Arrays auf verschiedene Weise zu manipulieren, wie z. B. das Verbinden, Umkehren und Sortieren. Es verfügt über eine Eigenschaft zur Bestimmung der Array-Länge und andere Eigenschaften zur Verwendung mit regulären Ausdrücken.

In diesem Artikel werden wir den Schwerpunkt auf Arrays legen, aber viele der gleichen Konzepte gelten auch für typisierte Arrays, da Arrays und typisierte Arrays viele ähnliche Methoden teilen. Für weitere Informationen zu typisierten Arrays siehe den [Leitfaden zu typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays).

## Erstellen eines Arrays

Die folgenden Anweisungen erstellen gleichwertige Arrays:

```js
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];
```

`element0, element1, …, elementN` ist eine Liste von Werten für die Elemente des Arrays. Wenn diese Werte angegeben werden, wird das Array mit ihnen als Elemente des Arrays initialisiert. Die `length`-Eigenschaft des Arrays wird auf die Anzahl der Argumente gesetzt.

Die Klammer-Syntax wird als "Array-Literal" oder "Array-Initializer" bezeichnet. Sie ist kürzer als andere Formen der Array-Erstellung und wird daher im Allgemeinen bevorzugt. Siehe [Array-Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) für Details.

Um ein Array mit einer nicht-null Länge, aber ohne Elemente zu erstellen, kann eines der folgenden verwendet werden:

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
> Im obigen Code muss `arrayLength` eine `Number` sein. Andernfalls wird ein Array mit einem einzigen Element erstellt (der bereitgestellte Wert). Wenn Sie `arr.length` aufrufen, wird `arrayLength` zurückgegeben, aber das Array enthält keine Elemente. Eine {{jsxref("Statements/for...in", "for...in")}} Schleife wird keine Eigenschaft im Array finden.

Zusätzlich zu einer neu definierten Variablen, wie oben gezeigt, können Arrays auch als Eigenschaft eines neuen oder eines bestehenden Objekts zugewiesen werden:

```js
const obj = {};
// …
obj.prop = [element0, element1, /* …, */ elementN];

// OR
const obj = { prop: [element0, element1, /* …, */ elementN] };
```

Wenn Sie ein Array mit einem einzigen Element initialisieren möchten und das Element eine `Number` ist, müssen Sie die Klammer-Syntax verwenden. Wenn ein einzelner `Number`-Wert an den `Array()`-Konstruktor oder die Funktion übergeben wird, wird er als `arrayLength` und nicht als einzelnes Element interpretiert.

Dies erstellt ein Array mit nur einem Element: der Zahl 42.

```js
const arr = [42];
```

Dies erstellt ein Array ohne Elemente und `arr.length` wird auf 42 gesetzt.

```js
const arr = Array(42);
```

Dies ist äquivalent zu:

```js
const arr = [];
arr.length = 42;
```

Ein Aufruf von `Array(N)` führt zu einem `RangeError`, wenn `N` eine nicht-ganze Zahl ist, deren Bruchteil ungleich null ist. Das folgende Beispiel verdeutlicht dieses Verhalten.

```js
const arr = Array(9.3); // RangeError: Invalid array length
```

Wenn in Ihrem Code Arrays mit einzelnen Elementen eines beliebigen Datentyps erstellt werden müssen, ist es sicherer, Array-Literale zu verwenden. Alternativ können Sie zunächst ein leeres Array erstellen, bevor Sie das einzelne Element hinzufügen.

Sie können auch die statische Methode {{jsxref("Array.of")}} verwenden, um Arrays mit einem einzigen Element zu erstellen.

```js
const wisenArray = Array.of(9.3); // wisenArray contains only one element 9.3
```

## Zugriff auf Array-Elemente

Da Elemente auch Eigenschaften sind, können Sie mit [Eigenschaftenzugriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) darauf zugreifen. Angenommen, Sie definieren das folgende Array:

```js
const myArray = ["Wind", "Rain", "Fire"];
```

Sie können auf das erste Element des Arrays als `myArray[0]` und auf das zweite Element des Arrays als `myArray[1]` usw. verweisen. Der Index der Elemente beginnt bei null.

> [!NOTE]
> Sie können auch [Eigenschaftenzugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwenden, um auf andere Eigenschaften des Arrays zuzugreifen, ähnlich wie bei einem Objekt.
>
> ```js
> const arr = ["eins", "zwei", "drei"];
> arr[2]; // drei
> arr["length"]; // 3
> ```

## Befüllen eines Arrays

Sie können ein Array befüllen, indem Sie seinen Elementen Werte zuweisen. Zum Beispiel:

```js
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

> [!NOTE]
> Wenn Sie im obigen Code dem Array-Operator einen nicht-ganzzahligen Wert übergeben, wird eine Eigenschaft in dem Objekt erstellt, das das Array darstellt, anstatt eines Array-Elements.
>
> ```js
> const arr = [];
> arr[3.4] = "Orangen";
> console.log(arr.length); // 0
> console.log(Object.hasOwn(arr, 3.4)); // true
> ```

Sie können ein Array auch beim Erstellen befüllen:

```js
const myArray = new Array("Hello", myVar, 3.14159);
// OR
const myArray = ["Mango", "Apple", "Orange"];
```

### Verständnis der Länge

Auf der Implementierungsebene speichert JavaScript die Elemente seiner Arrays tatsächlich als Standard-Objekteigenschaften, wobei der Array-Index als Eigenschaftsname verwendet wird.

Die `length`-Eigenschaft ist besonders. Ihr Wert ist immer eine positive ganze Zahl, die größer ist als der Index des letzten Elements, falls eines existiert. (Im folgenden Beispiel ist `'Dusty'` bei `30` indiziert, daher gibt `cats.length` `30 + 1` zurück).

Denken Sie daran, dass JavaScript-Array-Indizes 0-basiert sind: Sie beginnen bei `0`, nicht `1`. Das bedeutet, dass die `length`-Eigenschaft um eins größer ist als der höchste gespeicherte Index im Array:

```js
const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

Sie können auch der `length`-Eigenschaft zuweisen.

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

### Iterieren über Arrays

Ein häufiger Vorgang ist das Iterieren über die Werte eines Arrays, um jeden in irgendeiner Weise zu verarbeiten. Der einfachste Weg dies zu tun ist wie folgt:

```js
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

Wenn Sie sicher sind, dass keines der Elemente in Ihrem Array in einem booleschen Kontext `false` ergibt—wenn Ihr Array zum Beispiel nur aus [DOM](/de/docs/Web/API/Document_Object_Model)-Knoten besteht—können Sie eine effizientere Idiomatik verwenden:

```js
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* Process div in some way */
}
```

Dies vermeidet den Overhead der Überprüfung der Länge des Arrays und sorgt dafür, dass die `div`-Variable bei jeder Runde der Schleife für zusätzlichen Komfort dem aktuellen Element zugewiesen wird.

Die Methode [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) bietet eine weitere Möglichkeit, über ein Array zu iterieren:

```js
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

Die an `forEach` übergebene Funktion wird einmal für jeden Artikel im Array ausgeführt, wobei der Array-Artikel als Argument an die Funktion übergeben wird. Nicht zugewiesene Werte werden in einer `forEach`-Schleife nicht iteriert.

Beachten Sie, dass die bei der Definition des Arrays ausgelassenen Elemente beim Iterieren mit `forEach` nicht aufgelistet werden, aber _aufgelistet_ werden, wenn `undefined` manuell dem Element zugewiesen wurde:

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

Da JavaScript-Array-Elemente als Standard-Objekteigenschaften gespeichert werden, ist es nicht ratsam, JavaScript-Arrays mit {{jsxref("Statements/for...in", "for...in")}} Schleifen zu iterieren, da normale Elemente und alle aufzählbaren Eigenschaften aufgelistet werden.

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

Die [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)-Methode fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

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

Die [`at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at)-Methode gibt das Element am angegebenen Index im Array zurück oder `undefined`, wenn der Index außerhalb des Bereichs liegt. Es wird insbesondere für negative Indizes verwendet, die auf Elemente vom Ende des Arrays zugreifen.

```js
const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d", the second-last element of myArray
```

Die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode entfernt Elemente aus einem Array und ersetzt sie gegebenenfalls. Sie gibt die Elemente zurück, die aus dem Array entfernt wurden.

```js
const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
```

Die [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)-Methode vertauscht die Elemente eines Arrays an Ort und Stelle: Das erste Array-Element wird zum letzten und das letzte wird zum ersten. Sie gibt eine Referenz auf das Array zurück.

```js
const myArray = ["1", "2", "3"];
myArray.reverse();
// transposes the array so that myArray = ["3", "2", "1"]
```

Die [`flat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)-Methode gibt ein neues Array zurück, in dem alle Unterarray-Elemente rekursiv bis zur angegebenen Tiefe zusammengefügt sind.

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

`sort()` kann auch eine Rückruffunktion entgegennehmen, um zu bestimmen, wie Array-Elemente verglichen werden. Die Rückruffunktion wird mit zwei Argumenten aufgerufen, bei denen es sich um zwei Werte aus dem Array handelt. Die Funktion vergleicht diese beiden Werte und gibt eine positive Zahl, eine negative Zahl oder null zurück, die die Reihenfolge der beiden Werte angibt. Zum Beispiel wird das folgende die Array-Elemente nach dem letzten Buchstaben eines Strings sortieren:

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

- Wenn `a` beim Sortiersystem kleiner als `b` ist, geben Sie `-1` (oder eine beliebige negative Zahl) zurück
- Wenn `a` beim Sortiersystem größer als `b` ist, geben Sie `1` (oder eine beliebige positive Zahl) zurück
- Wenn `a` und `b` als gleichwertig angesehen werden, geben Sie `0` zurück.

Die [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)-Methode durchsucht das Array nach `searchElement` und gibt den Index des ersten Treffers zurück.

```js
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// Now try again, starting from after the last match
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, because 'z' was not found
```

Die [`lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)-Methode funktioniert wie `indexOf`, beginnt jedoch am Ende und durchsucht rückwärts.

```js
const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // 5

// Now try again, starting from before the last match
console.log(a.lastIndexOf("b", 4)); // 1
console.log(a.lastIndexOf("z")); // -1
```

Die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode führt `callback` für jeden Array-Artikel aus und gibt `undefined` zurück.

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

Die `forEach`-Methode (und andere unten) die eine Rückruffunktion annehmen, werden als _iterative Methoden_ bezeichnet, da sie das gesamte Array in irgendeiner Weise durchlaufen. Jede von ihnen nimmt ein optionales zweites Argument namens `thisArg`. Wenn bereitgestellt, wird `thisArg` der Wert des `this`-Schlüsselworts im Inneren des Körpers der Rückruffunktion. Wenn nicht bereitgestellt, wie in anderen Fällen, wenn eine Funktion außerhalb eines expliziten Objektkontexts aufgerufen wird, verweist `this` auf das globale Objekt ([`window`](/de/docs/Web/API/Window), [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) usw.) wenn die Funktion [nicht strikt](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, oder `undefined` wenn die Funktion strikt ist.

> [!NOTE]
> Die Methode `sort()` ist keine iterative Methode, da ihre Rückruffunktion nur für den Vergleich verwendet wird und möglicherweise nicht in einer bestimmten Reihenfolge basierend auf der Elementreihenfolge aufgerufen wird. `sort()` akzeptiert auch nicht den Parameter `thisArg`.

Die [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Methode gibt ein neues Array mit dem Rückgabewert zurück, der durch Ausführen von `callback` für jeden Array-Artikel erzeugt wurde.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

Die [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)-Methode führt `map()` gefolgt von einem `flat()` mit Tiefe 1 aus.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
```

Die [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)-Methode gibt ein neues Array zurück, das die Artikel enthält, für die `callback` `true` zurückgibt.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]
```

Die [`find()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find)-Methode gibt den ersten Artikel zurück, für den `callback` `true` zurückgibt.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.find((item) => typeof item === "number");
console.log(i); // 10
```

Die [`findLast()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)-Methode gibt den letzten Artikel zurück, für den `callback` `true` zurückgibt.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLast((item) => typeof item === "number");
console.log(i); // 30
```

Die [`findIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)-Methode gibt den Index des ersten Artikels zurück, für den `callback` `true` zurückgibt.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findIndex((item) => typeof item === "number");
console.log(i); // 1
```

Die [`findLastIndex()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)-Methode gibt den Index des letzten Artikels zurück, für den `callback` `true` zurückgibt.

```js
const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLastIndex((item) => typeof item === "number");
console.log(i); // 5
```

Die [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every)-Methode gibt `true` zurück, wenn `callback` für jeden Artikel im Array `true` zurückgibt.

```js
function isNumber(value) {
  return typeof value === "number";
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
const a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // false
```

Die [`some()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/some)-Methode gibt `true` zurück, wenn `callback` für mindestens einen Artikel im Array `true` zurückgibt.

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

Die [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)-Methode wendet `callback(accumulator, currentValue, currentIndex, array)` für jeden Wert im Array an, um die Liste der Artikel auf einen einzigen Wert zu reduzieren. Die `reduce`-Funktion gibt den finalen Wert zurück, der von der `callback`-Funktion zurückgegeben wird.

Wenn `initialValue` angegeben ist, wird `callback` mit `initialValue` als erstem Parameterwert und dem Wert des ersten Elements im Array als zweitem Parameterwert aufgerufen.

Wenn `initialValue` _nicht_ angegeben ist, werden die ersten beiden Parameterwerte von `callback` das erste und zweite Element des Arrays sein. Bei jedem _nachfolgenden Aufruf_ wird der erste Parameterwert derjenige sein, den `callback` beim vorherigen Aufruf zurückgegeben hat, und der zweite Parameterwert der nächste Wert im Array.

Wenn `callback` Zugriff auf den Index des verarbeiteten Elements oder auf das gesamte Array benötigt, stehen diese als optionale Parameter zur Verfügung.

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

Die {{jsxref("Object.groupBy()")}}-Methode kann verwendet werden, um die Elemente eines Arrays zu gruppieren, indem eine Testfunktion verwendet wird, die eine Zeichenkette zurückgibt, die die Gruppe des aktuellen Elements angibt.

Hier haben wir ein einfaches Inventar-Array, das "Lebensmittel"-Objekte enthält, die über einen `name` und einen `type` verfügen.

```js
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];
```

Um `Object.groupBy()` zu verwenden, geben Sie eine Rückruffunktion an, die mit dem aktuellen Element aufgerufen wird und optional auch mit dem aktuellen Index und Array, und eine Zeichenkette zurückgibt, die die Gruppe des Elements angibt.

Der folgende Code verwendet eine Pfeilfunktion, um den `type` jedes Array-Elements zurückzugeben (dies verwendet [Objekt-Destrukturierungssyntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter), um das `type`-Element aus dem übergebenen Objekt zu entpacken). Das Ergebnis ist ein Objekt, das über Eigenschaften verfügt, die nach den eindeutigen von der Rückruf zurückgegebenen Zeichenketten benannt sind. Jede Eigenschaft wird einer Array zugeordnet, das die Elemente der Gruppe enthält.

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

Beachten Sie, dass das zurückgegebene Objekt auf die _gleichen_ Elemente verweist wie das ursprüngliche Array (nicht [tiefe Kopien](/de/docs/Glossary/deep_copy)). Änderungen an der internen Struktur dieser Elemente werden sowohl im ursprünglichen Array als auch im zurückgegebenen Objekt reflektiert.

Wenn Sie keine Zeichenkette als Schlüssel verwenden können, beispielsweise wenn die Informationen zur Gruppierung mit einem Objekt verbunden sind, das sich ändern könnte, können Sie stattdessen {{jsxref("Map.groupBy()")}} verwenden. Dies ist sehr ähnlich zu `Object.groupBy()`, außer dass es die Elemente des Arrays in eine {{jsxref("Map")}} gruppiert, die einen beliebigen Wert ([Objekt](/de/docs/Glossary/object) oder [Primitive](/de/docs/Glossary/primitive)) als Schlüssel verwenden kann.

## Sparse Arrays

Arrays können "leere Slots" enthalten, die nicht mit Slots, die den Wert `undefined` enthalten, gleichzusetzen sind. Leere Slots können auf eine der folgenden Weisen erstellt werden:

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

Bei einigen Operationen verhalten sich leere Slots, als wären sie mit `undefined` gefüllt.

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

Aber in anderen (besonders bei Array-Iterationsmethoden) werden leere Slots übersprungen.

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

Für eine vollständige Liste, wie sich Array-Methoden mit lückenhaften Arrays verhalten, siehe [die `Array`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots).

## Mehrdimensionale Arrays

Arrays können verschachtelt werden, was bedeutet, dass ein Array ein anderes Array als Element enthalten kann. Mit dieser Eigenschaft von JavaScript-Arrays können mehrdimensionale Arrays erstellt werden.

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

## Verwenden von Arrays zur Speicherung anderer Eigenschaften

Arrays können auch wie Objekte verwendet werden, um verwandte Informationen zu speichern.

```js
const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property); // "value"
```

Zum Beispiel, wenn ein Array das Ergebnis einer Übereinstimmung zwischen einem regulären Ausdruck und einer Zeichenkette ist, gibt das Array Eigenschaften und Elemente zurück, die Informationen über die Übereinstimmung liefern. Ein Array ist der Rückgabewert von [`RegExp.prototype.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) und [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split). Für Informationen zur Verwendung von Arrays mit regulären Ausdrücken siehe [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Arbeiten mit Array-ähnlichen Objekten

Einige JavaScript-Objekte, wie die [`NodeList`](/de/docs/Web/API/NodeList), die von [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) zurückgegeben wird, oder das {{jsxref("Functions/arguments", "arguments")}}-Objekt, das im Körper einer Funktion verfügbar gemacht wird, sehen auf den ersten Blick wie Arrays aus und verhalten sich auch so, teilen jedoch nicht alle ihre Methoden. Das `arguments`-Objekt bietet ein {{jsxref("Function/length", "length")}}-Attribut, implementiert aber keine Array-Methoden wie [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

Array-Methoden können nicht direkt auf Array-ähnlichen Objekten aufgerufen werden.

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

Array-Prototypen-Methoden können auch auf Zeichenfolgen verwendet werden, da sie einen sequentiellen Zugriff auf ihre Zeichen in ähnlicher Weise wie Arrays bieten:

```js
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
```

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}
