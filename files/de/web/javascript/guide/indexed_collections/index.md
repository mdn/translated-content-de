---
title: Indizierte Sammlungen
slug: Web/JavaScript/Guide/Indexed_collections
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}

Dieses Kapitel stellt Sammlungen von Daten vor, die nach einem Indexwert geordnet sind. Dazu gehören Arrays und array-ähnliche Konstrukte wie {{jsxref("Array")}}-Objekte und {{jsxref("TypedArray")}}-Objekte.

Ein _Array_ ist eine geordnete Liste von Werten, auf die Sie mit einem Namen und einem Index zugreifen.

Zum Beispiel ein Array namens `emp`, das die Namen der Mitarbeiter enthält, indiziert nach ihrer numerischen Mitarbeiternummer. Also wäre `emp[0]` die Mitarbeiternummer null, `emp[1]` Mitarbeiternummer eins, und so weiter.

JavaScript verfügt nicht über einen expliziten Array-Datentyp. Sie können jedoch das vordefinierte `Array`-Objekt und dessen Methoden verwenden, um mit Arrays in Ihren Anwendungen zu arbeiten. Das `Array`-Objekt verfügt über Methoden zur Manipulation von Arrays auf verschiedene Weise, wie z. B. Verbinden, Umkehren und Sortieren. Es hat eine Eigenschaft zur Bestimmung der Array-Länge und andere Eigenschaften für die Verwendung mit regulären Ausdrücken.

In diesem Artikel konzentrieren wir uns auf Arrays, aber viele der gleichen Konzepte gelten auch für Typed Arrays, da Arrays und Typed Arrays viele ähnliche Methoden teilen. Für weitere Informationen zu Typed Arrays siehe den [Typed-Array-Leitfaden](/de/docs/Web/JavaScript/Guide/Typed_arrays).

## Erstellen eines Arrays

Die folgenden Anweisungen erstellen gleichwertige Arrays:

```js
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];
```

`element0, element1, …, elementN` ist eine Liste von Werten für die Elemente des Arrays. Wenn diese Werte angegeben sind, wird das Array mit diesen als Elemente des Arrays initialisiert. Die `length`-Eigenschaft des Arrays wird auf die Anzahl der Argumente gesetzt.

Die Klammer-Syntax wird als "Array-Literal" oder "Array-Initializer" bezeichnet. Sie ist kürzer als andere Formen der Array-Erstellung und wird daher im Allgemeinen bevorzugt. Siehe [Array-Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals) für Details.

Um ein Array mit einer Länge ungleich null, aber ohne Elemente zu erstellen, kann Folgendes verwendet werden:

```js
// Dies...
const arr1 = new Array(arrayLength);

// ...ergibt das gleiche Array wie dies
const arr2 = Array(arrayLength);

// Das hat genau den gleichen Effekt
const arr3 = [];
arr3.length = arrayLength;
```

> [!NOTE]
> In dem obigen Code muss `arrayLength` eine `Number` sein. Andernfalls wird ein Array mit einem einzigen Element (dem angegebenen Wert) erstellt. Der Aufruf von `arr.length` gibt `arrayLength` zurück, aber das Array enthält keine Elemente. Ein {{jsxref("Statements/for...in", "for...in")}}-Schleife wird keine Eigenschaft im Array finden.

Zusätzlich zu einer neu definierten Variablen wie oben gezeigt, können Arrays auch als Eigenschaft eines neuen oder eines bestehenden Objekts zugewiesen werden:

```js
const obj = {};
// …
obj.prop = [element0, element1, /* …, */ elementN];

// ODER
const obj = { prop: [element0, element1, /* …, */ elementN] };
```

Wenn Sie ein Array mit einem einzigen Element initialisieren möchten und das Element zufällig eine `Number` ist, müssen Sie die Klammer-Syntax verwenden. Wenn ein einzelner `Number`-Wert an den `Array()`-Konstruktor oder die Funktion übergeben wird, wird er als `arrayLength` interpretiert, nicht als einzelnes Element.

Dies erstellt ein Array mit nur einem Element: der Zahl 42.

```js
const arr = [42];
```

Dies erstellt ein Array ohne Elemente und `arr.length` wird auf 42 gesetzt.

```js
const arr = Array(42);
```

Das ist gleichwertig zu:

```js
const arr = [];
arr.length = 42;
```

Der Aufruf von `Array(N)` führt zu einem `RangeError`, wenn `N` eine nicht ganzzahlige Zahl ist, deren Bruchteil ungleich null ist. Das folgende Beispiel veranschaulicht dieses Verhalten.

```js
const arr = Array(9.3); // RangeError: Ungültige Array-Länge
```

Wenn Ihr Code Arrays mit Einzelelementen eines beliebigen Datentyps erstellen muss, ist es sicherer, Array-Literale zu verwenden. Alternativ erstellen Sie zuerst ein leeres Array, bevor Sie das einzelne Element hinzufügen.

Sie können auch die statische Methode {{jsxref("Array.of")}} verwenden, um Arrays mit einem einzelnen Element zu erstellen.

```js
const wisenArray = Array.of(9.3); // wisenArray enthält nur ein Element 9.3
```

## Zugriff auf Array-Elemente

Da Elemente auch Eigenschaften sind, können Sie auf sie mit [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zugreifen. Angenommen, Sie definieren das folgende Array:

```js
const myArray = ["Wind", "Rain", "Fire"];
```

Sie können auf das erste Element des Arrays als `myArray[0]`, das zweite Element des Arrays als `myArray[1]` usw. zugreifen. Der Index der Elemente beginnt bei null.

> [!NOTE]
> Sie können auch [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwenden, um auf andere Eigenschaften des Arrays zuzugreifen, ähnlich wie bei einem Objekt.
>
> ```js
> const arr = ["one", "two", "three"];
> arr[2]; // three
> arr["length"]; // 3
> ```

## Auffüllen eines Arrays

Sie können ein Array befüllen, indem Sie seinen Elementen Werte zuweisen. Zum Beispiel:

```js
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

> [!NOTE]
> Wenn Sie dem Array-Operator im obigen Code einen nicht-ganzzahligen Wert übergeben, wird eine Eigenschaft im Array-Objekt erstellt, anstatt eines Array-Elements.
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
// ODER
const myArray = ["Mango", "Apple", "Orange"];
```

### Verständnis der Länge

Auf Implementierungsebene speichern JavaScript-Arrays ihre Elemente tatsächlich als Standardobjekteigenschaften, wobei der Array-Index als Eigenschaftsname verwendet wird.

Die `length`-Eigenschaft ist besonders. Ihr Wert ist immer eine positive Ganzzahl, die größer ist als der Index des letzten Elements, falls eines existiert. (Im Beispiel unten wird `'Dusty'` bei `30` indiziert, daher gibt `cats.length` `30 + 1` zurück).

Denken Sie daran, dass JavaScript-Array-Indizes 0-basiert sind: sie beginnen bei `0`, nicht bei `1`. Das bedeutet, dass die `length`-Eigenschaft um eins größer ist als der höchst gespeicherte Index im Array:

```js
const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

Sie können auch der `length`-Eigenschaft einen Wert zuweisen.

Wenn Sie einen Wert zuweisen, der kürzer ist als die Anzahl der gespeicherten Elemente, wird das Array gekürzt. Das Zuweisen von `0` leert es vollständig:

```js
const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy wurde entfernt

cats.length = 0;
console.log(cats); // []; das cats-Array ist leer

cats.length = 3;
console.log(cats); // [ <3 leere Elemente> ]
```

### Iterieren über Arrays

Eine häufige Operation ist das Iterieren über die Werte eines Arrays, um jeden auf irgendeine Weise zu verarbeiten. Der einfachste Weg, dies zu tun, ist folgender:

```js
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

Wenn Sie wissen, dass keines der Elemente in Ihrem Array in einem booleschen Kontext zu `false` evaluiert wird — wenn Ihr Array beispielsweise nur aus [DOM](/de/docs/Web/API/Document_Object_Model)-Knoten besteht — können Sie ein effizienteres Idiom verwenden:

```js
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* Verarbeiten Sie div auf irgendeine Weise */
}
```

Dies vermeidet den Overhead der Überprüfung der Array-Länge und stellt sicher, dass die Variable `div` bei jedem Schleifendurchlauf dem aktuellen Element zugewiesen wird, was für zusätzliche Bequemlichkeit sorgt.

Die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode bietet eine weitere Möglichkeit, über ein Array zu iterieren:

```js
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

Die an `forEach` übergebene Funktion wird für jedes Element im Array ausgeführt, wobei das Array-Element als Argument an die Funktion übergeben wird. Nicht zugewiesene Werte werden in einer `forEach`-Schleife nicht durchlaufen.

Beachten Sie, dass die Elemente eines Arrays, die beim Definieren des Arrays ausgelassen werden, beim Iterieren mit `forEach` nicht aufgeführt werden, aber _werden_ aufgeführt, wenn `undefined` dem Element manuell zugewiesen wurde:

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

Da JavaScript-Array-Elemente als Standardobjekteigenschaften gespeichert werden, ist es nicht ratsam, JavaScript-Arrays mit {{jsxref("Statements/for...in", "for...in")}}-Schleifen zu durchlaufen, da normale Elemente und alle aufzählbaren Eigenschaften aufgeführt werden.

### Array-Methoden

Das {{jsxref("Array")}}-Objekt verfügt über die folgenden Methoden:

Die [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)-Methode verbindet zwei oder mehr Arrays und gibt ein neues Array zurück.

```js
let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
// myArray ist jetzt ["1", "2", "3", "a", "b", "c"]
```

Die [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join)-Methode verbindet alle Elemente eines Arrays zu einem String.

```js
const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list ist "Wind - Rain - Fire"
```

Die [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push)-Methode fügt ein oder mehrere Elemente am Ende eines Arrays hinzu und gibt die resultierende `length` des Arrays zurück.

```js
const myArray = ["1", "2"];
myArray.push("3"); // myArray ist jetzt ["1", "2", "3"]
```

Die [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)-Methode entfernt das letzte Element eines Arrays und gibt dieses Element zurück.

```js
const myArray = ["1", "2", "3"];
const last = myArray.pop();
// myArray ist jetzt ["1", "2"], last = "3"
```

Die [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)-Methode entfernt das erste Element eines Arrays und gibt dieses Element zurück.

```js
const myArray = ["1", "2", "3"];
const first = myArray.shift();
// myArray ist jetzt ["2", "3"], first ist "1"
```

Die [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)-Methode fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

```js
const myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
// myArray wird zu ["4", "5", "1", "2", "3"]
```

Die [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)-Methode extrahiert einen Abschnitt eines Arrays und gibt ein neues Array zurück.

```js
let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
// startet bei Index 1 und extrahiert alle Elemente bis Index 3
```

Die [`at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at)-Methode gibt das Element am angegebenen Index im Array zurück oder `undefined`, wenn der Index außerhalb der Reichweite liegt. Sie wird besonders für negative Indizes verwendet, die auf Elemente vom Ende des Arrays zugreifen.

```js
const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d", das zweitletzte Element von myArray
```

Die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode entfernt Elemente aus einem Array und ersetzt sie optional. Sie gibt die entfernten Elemente des Arrays zurück.

```js
const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray ist jetzt ["1", "a", "b", "c", "d", "5"]
// Dieser Code begann bei Index eins (oder wo die "2" war),
// entfernte dort 3 Elemente und fügte dann alle
// aufeinanderfolgenden Elemente an dieser Stelle ein.
```

Die [`reverse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)-Methode transponiert die Elemente eines Arrays an Ort und Stelle: das erste Array-Element wird das letzte und das letzte wird das erste. Sie gibt eine Referenz auf das Array zurück.

```js
const myArray = ["1", "2", "3"];
myArray.reverse();
// transponiert das Array, sodass myArray = ["3", "2", "1"]
```

Die [`flat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)-Methode gibt ein neues Array zurück, bei dem alle Unter-Array-Elemente bis zur angegebenen Tiefe rekursiv angefügt wurden.

```js
let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray ist jetzt [1, 2, 3, 4], da das [3,4]-Unterarray abgeflacht wird
```

Die [`sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)-Methode sortiert die Elemente eines Arrays an Ort und Stelle und gibt eine Referenz auf das Array zurück.

```js
const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// sortiert das Array, sodass myArray = ["Fire", "Rain", "Wind"]
```

`sort()` kann auch eine Callback-Funktion annehmen, um zu bestimmen, wie Array-Elemente verglichen werden. Die Callback-Funktion wird mit zwei Argumenten aufgerufen, die zwei Werte aus dem Array sind. Die Funktion vergleicht diese zwei Werte und gibt eine positive Zahl, eine negative Zahl oder null zurück, die die Reihenfolge der zwei Werte angibt. Zum Beispiel sortiert das folgende den Array nach dem letzten Buchstaben eines Strings:

```js
const sortFn = (a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) {
    return -1; // Negative Zahl => a < b, a kommt vor b
  } else if (a[a.length - 1] > b[b.length - 1]) {
    return 1; // Positive Zahl => a > b, a kommt nach b
  }
  return 0; // Null => a = b, a und b behalten ihre ursprüngliche Reihenfolge
};
myArray.sort(sortFn);
// sortiert das Array, sodass myArray = ["Wind","Fire","Rain"]
```

- wenn `a` kleiner als `b` ist nach dem Sortiersystem, geben Sie `-1` (oder eine beliebige negative Zahl) zurück
- wenn `a` größer als `b` ist nach dem Sortiersystem, geben Sie `1` (oder eine beliebige positive Zahl) zurück
- wenn `a` und `b` als gleichwertig betrachtet werden, geben Sie `0` zurück.

Die [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)-Methode durchsucht das Array nach `searchElement` und gibt den Index des ersten Treffers zurück.

```js
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// Nun versuchen Sie es erneut, beginnend nach dem letzten Treffer
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, weil 'z' nicht gefunden wurde
```

Die [`lastIndexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)-Methode funktioniert wie `indexOf`, beginnt jedoch am Ende und durchsucht rückwärts.

```js
const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // 5

// Nun versuchen Sie es erneut, beginnend vor dem letzten Treffer
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

Die `forEach`-Methode (und andere unten) die einen Callback annehmen, sind als _iterative Methoden_ bekannt, da sie in irgendeiner Weise über das gesamte Array iterieren. Jede nimmt ein optionales zweites Argument namens `thisArg`. Wenn angegeben, wird `thisArg` zum Wert des `this`-Schlüsselworts im Körper der Callback-Funktion. Wenn nicht angegeben, wird `this`, wie bei anderen Fällen, in denen eine Funktion außerhalb eines expliziten Objektkontexts aufgerufen wird, auf das globale Objekt ([`window`](/de/docs/Web/API/Window), [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis), usw.) verweisen, wenn die Funktion [nicht strikt ist](/de/docs/Web/JavaScript/Reference/Strict_mode), oder `undefined`, wenn die Funktion strikt ist.

> [!NOTE]
> Die oben eingeführte `sort()`-Methode ist keine iterative Methode, da ihre Callback-Funktion nur für den Vergleich verwendet wird und möglicherweise nicht in einer bestimmten Reihenfolge basierend auf der Elementreihenfolge aufgerufen wird. `sort()` akzeptiert auch nicht den `thisArg`-Parameter.

Die [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)-Methode gibt ein neues Array aus dem Rückgabewert des Ausführens von `callback` auf jedem Array-Element zurück.

```js
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```

Die [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)-Methode führt zuerst `map()` und dann `flat()` mit einer Tiefe von 1 aus.

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

Die [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)-Methode wendet `callback(accumulator, currentValue, currentIndex, array)` für jeden Wert im Array an, um die Liste der Elemente zu einem einzigen Wert zu reduzieren. Die `reduce`-Funktion gibt den letzten Wert zurück, der von der `callback`-Funktion zurückgegeben wurde.

Wenn `initialValue` angegeben ist, wird `callback` mit `initialValue` als erstem Parameterwert und dem Wert des ersten Elements im Array als zweitem Parameterwert aufgerufen.

Wenn `initialValue` _nicht_ angegeben ist, werden `callback`'s erste zwei Parameterwerte das erste und das zweite Element des Arrays sein. Bei _jedem_ anschließenden Aufruf wird der erste Parameterwert das sein, was `callback` beim vorherigen Aufruf zurückgegeben hat, und der zweite Parameterwert wird der nächste Wert im Array sein.

Wenn `callback` Zugriff auf den Index des zu verarbeitenden Elements oder Zugriff auf das gesamte Array benötigt, sind sie als optionale Parameter verfügbar.

```js
const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60
```

Die [`reduceRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)-Methode funktioniert wie `reduce()`, beginnt jedoch mit dem letzten Element.

`reduce` und `reduceRight` sind die am wenigsten offensichtlichen der iterativen Array-Methoden. Sie sollten für Algorithmen verwendet werden, die zwei Werte rekursiv kombinieren, um eine Sequenz zu einem einzelnen Wert zu reduzieren.

## Array-Transformationen

Sie können hin und her zwischen Arrays und anderen Datenstrukturen transformieren.

### Gruppieren der Elemente eines Arrays

Die {{jsxref("Object.groupBy()")}}-Methode kann verwendet werden, um die Elemente eines Arrays zu gruppieren, indem eine Testfunktion verwendet wird, die eine Zeichenkette zurückgibt, die die Gruppe des aktuellen Elements angibt.

Hier haben wir ein einfaches Inventar-Array, das "Lebensmittel"-Objekte enthält, die einen `name` und einen `type` haben.

```js
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];
```

Um `Object.groupBy()` zu verwenden, geben Sie eine Callback-Funktion an, die mit dem aktuellen Element aufgerufen wird und optionale den aktuellen Index und das Array enthält und eine Zeichenkette zurückgibt, die die Gruppe des Elements angibt.

Der untenstehende Code verwendet eine Pfeilfunktion, um den `type` jedes Array-Elements zurückzugeben (dies verwendet die [Objekt-Destrukturierungssyntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter), um das `type`-Element aus dem übergebenen Objekt zu entpacken). Das Ergebnis ist ein Objekt, das Eigenschaften mit den eindeutigen Zeichenkettennamen hat, die von der Callback zurückgegeben werden. Jeder Eigenschaft ist ein Array zugeordnet, das die Elemente der Gruppe enthält.

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

Beachten Sie, dass das zurückgegebene Objekt auf die _gleichen_ Elemente wie das Original-Array verweist (keine {{Glossary("deep copy", "tiefe Kopien")}}). Änderungen an der internen Struktur dieser Elemente werden sowohl im Original-Array als auch im zurückgegebenen Objekt widergespiegelt.

Wenn Sie keine Zeichenkette als Schlüssel verwenden können, zum Beispiel, wenn die Informationen zur Gruppierung mit einem Objekt verknüpft sind, das sich ändern könnte, dann können Sie stattdessen {{jsxref("Map.groupBy()")}} verwenden. Dies ist sehr ähnlich zu `Object.groupBy()`, außer dass es die Elemente des Arrays in eine {{jsxref("Map")}} gruppiert, die einen beliebigen Wert ({{Glossary("object")}} oder {{Glossary("primitive")}}) als Schlüssel verwenden kann.

## Sparse Arrays

Arrays können "leere Slots" enthalten, die nicht dasselbe sind wie Slots, die mit dem Wert `undefined` gefüllt sind. Leere Slots können auf eine der folgenden Arten erstellt werden:

```js
// Array-Konstruktor:
const a = Array(5); // [ <5 leere Elemente> ]

// Aufeinanderfolgende Kommata im Array-Literal:
const b = [1, 2, , , 5]; // [ 1, 2, <2 leere Elemente>, 5 ]

// Direkte Setzung eines Slots mit Index größer als array.length:
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 leere Elemente>, 5 ]

// Verlängerung eines Arrays durch direkte Setzung von .length:
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 leere Elemente> ]

// Löschen eines Elements:
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 leeres Element>, 4, 5 ]
```

In einigen Operationen verhalten sich leere Slots so, als ob sie mit `undefined` gefüllt wären.

```js
const arr = [1, 2, , , 5]; // Ein sparse Array erstellen

// Indexierter Zugriff
console.log(arr[2]); // undefined

// For...of
for (const i of arr) {
  console.log(i);
}
// Logs: 1 2 undefined undefined 5

// Spread-Operator
const another = [...arr]; // "another" ist [ 1, 2, undefined, undefined, 5 ]
```

Aber in anderen (am deutlichsten bei Iterationsmethoden für Arrays) werden leere Slots übersprungen.

```js
const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 leere Elemente>, 6 ]
arr.forEach((i) => console.log(i)); // 1 2 5
const filtered = arr.filter(() => true); // [ 1, 2, 5 ]
const hasFalsy = arr.some((k) => !k); // false

// Eigenschaftenenumeration
const keys = Object.keys(arr); // [ '0', '1', '4' ]
for (const key in arr) {
  console.log(key);
}
// Logs: '0' '1' '4'
// Das Spread-Operator in ein Objekt verwendet die Eigenschaftenenumeration, nicht den Iterator des Arrays
const objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }
```

Für eine vollständige Liste, wie sich Array-Methoden bei Sparse Arrays verhalten, siehe [die `Array`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots).

## Mehrdimensionale Arrays

Arrays können geschachtelt werden, was bedeutet, dass ein Array ein anderes Array als Element enthalten kann. Unter Verwendung dieser Eigenschaft von JavaScript-Arrays können mehrdimensionale Arrays erstellt werden.

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
Zeile 0: [0, 0] [0, 1] [0, 2] [0, 3]
Zeile 1: [1, 0] [1, 1] [1, 2] [1, 3]
Zeile 2: [2, 0] [2, 1] [2, 2] [2, 3]
Zeile 3: [3, 0] [3, 1] [3, 2] [3, 3]
```

## Verwendung von Arrays zum Speichern anderer Eigenschaften

Arrays können auch wie Objekte verwendet werden, um verwandte Informationen zu speichern.

```js
const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property); // "value"
```

Wenn das Array beispielsweise das Ergebnis eines Übereinstimmungsvorgangs zwischen einem regulären Ausdruck und einer Zeichenkette ist, gibt das Array Eigenschaften und Elemente zurück, die Informationen über die Übereinstimmung bereitstellen. Ein Array ist der Rückgabewert von [`RegExp.prototype.exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), [`String.prototype.match()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/match) und [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split). Informationen zur Verwendung von Arrays mit regulären Ausdrücken finden Sie unter [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions).

## Arbeiten mit array-ähnlichen Objekten

Einige JavaScript-Objekte, wie das [`NodeList`](/de/docs/Web/API/NodeList), das von [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) zurückgegeben wird, oder das {{jsxref("Functions/arguments", "arguments")}}-Objekt, das im Körper einer Funktion zur Verfügung steht, sehen oberflächlich betrachtet wie Arrays aus und verhalten sich auch so, teilen jedoch nicht alle ihre Methoden. Das `arguments`-Objekt bietet ein {{jsxref("Function/length", "length")}}-Attribut, implementiert jedoch keine Array-Methoden wie [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

Array-Methoden können nicht direkt auf array-ähnlichen Objekten aufgerufen werden.

```js example-bad
function printArguments() {
  arguments.forEach((item) => {
    console.log(item);
  }); // TypeError: arguments.forEach ist keine Funktion
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

Array-Prototyp-Methoden können auch auf Zeichenketten verwendet werden, da sie sequentiellen Zugriff auf ihre Zeichen auf ähnliche Weise wie Arrays bieten:

```js
Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
```

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}
