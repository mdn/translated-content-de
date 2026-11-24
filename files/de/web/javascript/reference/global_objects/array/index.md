---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

Das **`Array`**-Objekt ermöglicht es wie Arrays in anderen Programmiersprachen, [mehrere Elemente unter einem einzigen Variablennamen zu speichern](/de/docs/Learn_web_development/Core/Scripting/Arrays). Es verfügt außerdem über Methoden für [häufige Array-Operationen](#beispiele).

## Beschreibung

In JavaScript sind Arrays keine {{Glossary("Primitive", "primitiven Werte")}}, sondern `Array`-Objekte mit den folgenden grundlegenden Eigenschaften:

- **JavaScript-Arrays können ihre Größe ändern** und **unterschiedliche [Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures) enthalten**. (Wenn diese Eigenschaften unerwünscht sind, verwenden Sie stattdessen [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays).)
- **JavaScript-Arrays sind keine assoziativen Arrays**. Auf Array-Elemente kann daher nicht mit beliebigen Zeichenfolgen als Indizes zugegriffen werden, sondern nur mit nichtnegativen Ganzzahlen (oder deren jeweiliger Zeichenfolgenform).
- **JavaScript-Arrays sind [nullbasiert indiziert](https://en.wikipedia.org/wiki/Zero-based_numbering)**: Das erste Element eines Arrays hat den Index `0`, das zweite den Index `1` und so weiter. Das letzte Element hat den Index, der dem Wert der {{jsxref("Array/length", "length")}}-Eigenschaft des Arrays minus `1` entspricht.
- **JavaScript-[Array-Kopiervorgänge](#ein_array_kopieren) erzeugen {{Glossary("Shallow_copy", "flache Kopien")}}**. (Alle standardmäßigen integrierten Kopiervorgänge für _beliebige_ JavaScript-Objekte erzeugen flache Kopien statt {{Glossary("Deep_copy", "tiefer Kopien")}}.)

### Array-Indizes

`Array`-Objekte können keine beliebigen Zeichenfolgen als Elementindizes verwenden (wie bei einem [assoziativen Array](https://en.wikipedia.org/wiki/Associative_array)), sondern müssen nichtnegative Ganzzahlen (oder deren jeweilige Zeichenfolgenform) verwenden. Wird eine Eigenschaft über einen Index gesetzt oder abgerufen, der keine Ganzzahl ist, wird kein Element der Array-Liste gesetzt oder abgerufen. Stattdessen wird eine Variable in der [Sammlung der Objekteigenschaften](/de/docs/Web/JavaScript/Guide/Data_structures#properties) dieses Arrays gesetzt oder abgerufen. Die Objekteigenschaften eines Arrays und seine Liste von Array-Elementen sind voneinander getrennt. Die [Operationen zum Durchlaufen und Verändern](/de/docs/Web/JavaScript/Guide/Indexed_collections#array_methods) eines Arrays lassen sich nicht auf diese benannten Eigenschaften anwenden.

Array-Elemente sind ebenso Objekteigenschaften wie `toString` eine Eigenschaft ist (genauer gesagt ist `toString()` allerdings eine Methode). Der Versuch, wie folgt auf ein Array-Element zuzugreifen, löst dennoch einen Syntaxfehler aus, da der Eigenschaftsname ungültig ist:

```js-nolint example-bad
arr.0; // a syntax error
```

Die JavaScript-Syntax verlangt, dass auf Eigenschaften, deren Namen mit einer Ziffer beginnen, mit der [Klammernotation](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties) statt mit der [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zugegriffen wird. Array-Indizes können auch in Anführungszeichen gesetzt werden (beispielsweise `years['2']` statt `years[2`), was jedoch normalerweise nicht nötig ist.

Die JavaScript-Engine wandelt die `2` in `years[2]` durch eine implizite `toString`-Konvertierung in eine Zeichenfolge um. Daher beziehen sich `'2'` und `'02'` auf zwei verschiedene Einträge des `years`-Objekts, und das folgende Beispiel könnte `true` ergeben:

```js
console.log(years["2"] !== years["02"]);
```

Nur `years['2']` ist ein tatsächlicher Array-Index. `years['02']` ist eine beliebige Zeichenfolgeneigenschaft, die beim Iterieren über das Array nicht berücksichtigt wird.

### Zusammenhang zwischen length und numerischen Eigenschaften

Die {{jsxref("Array/length", "length")}}-Eigenschaft eines JavaScript-Arrays und seine numerischen Eigenschaften hängen zusammen.

Mehrere integrierte Array-Methoden (beispielsweise {{jsxref("Array/join", "join()")}}, {{jsxref("Array/slice", "slice()")}} und {{jsxref("Array/indexOf", "indexOf()")}}) berücksichtigen beim Aufruf den Wert der {{jsxref("Array/length", "length")}}-Eigenschaft eines Arrays.

Andere Methoden (beispielsweise {{jsxref("Array/push", "push()")}} und {{jsxref("Array/splice", "splice()")}}) führen außerdem dazu, dass die {{jsxref("Array/length", "length")}}-Eigenschaft eines Arrays aktualisiert wird.

```js
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
```

Wird bei einem JavaScript-Array eine Eigenschaft gesetzt, deren Name ein gültiger Array-Index ist, der außerhalb der aktuellen Grenzen des Arrays liegt, aktualisiert die Engine die {{jsxref("Array/length", "length")}}-Eigenschaft des Arrays entsprechend:

```js
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

Durch Erhöhen von {{jsxref("Array/length", "length")}} wird das Array um leere Einträge erweitert, ohne dass neue Elemente entstehen – nicht einmal `undefined`.

```js
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
```

Wird die {{jsxref("Array/length", "length")}}-Eigenschaft dagegen verringert, werden Elemente gelöscht.

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

Dies wird auf der Seite zu {{jsxref("Array/length", "length")}} näher erläutert.

### Array-Methoden und leere Einträge

Array-Methoden verhalten sich unterschiedlich, wenn sie auf leere Einträge in [dünn besetzten Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) treffen. Im Allgemeinen behandeln ältere Methoden (beispielsweise `forEach`) leere Einträge anders als Indizes, die `undefined` enthalten.

Die folgenden Methoden behandeln leere Einträge besonders: {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/copyWithin", "copyWithin()")}}, {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/reduce", "reduce()")}}, {{jsxref("Array/reduceRight", "reduceRight()")}}, {{jsxref("Array/reverse", "reverse()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/sort", "sort()")}} und {{jsxref("Array/splice", "splice()")}}. Iterationsmethoden wie `forEach` besuchen leere Einträge überhaupt nicht. Andere Methoden wie `concat` und `copyWithin` erhalten leere Einträge beim Kopieren, sodass das Array anschließend weiterhin dünn besetzt ist.

```js
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']
```

Neuere Methoden (beispielsweise `keys`) behandeln leere Einträge nicht besonders, sondern so, als enthielten sie `undefined`. Zu den Methoden, die leere Einträge wie Elemente mit dem Wert `undefined` behandeln, gehören: {{jsxref("Array/entries", "entries()")}}, {{jsxref("Array/fill", "fill()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/includes", "includes()")}}, {{jsxref("Array/join", "join()")}}, {{jsxref("Array/keys", "keys()")}}, {{jsxref("Array/toLocaleString", "toLocaleString()")}}, {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}}, {{jsxref("Array/values", "values()")}} und {{jsxref("Array/with", "with()")}}.

```js
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']
```

### Kopierende und verändernde Methoden

Einige Methoden verändern das vorhandene Array, auf dem sie aufgerufen werden, nicht, sondern geben ein neues Array zurück. Dazu erstellen sie zunächst ein neues Array und füllen es anschließend mit Elementen. Die Kopie ist immer {{Glossary("Shallow_copy", "_flach_")}} – die Methode kopiert nichts über das ursprünglich erstellte Array hinaus. Elemente der ursprünglichen Arrays werden wie folgt in das neue Array kopiert:

- Objekte: Die Objektreferenz wird in das neue Array kopiert. Sowohl das ursprüngliche als auch das neue Array verweisen auf dasselbe Objekt. Wird ein referenziertes Objekt verändert, sind die Änderungen daher in beiden Arrays sichtbar.
- Primitive Typen wie Zeichenfolgen, Zahlen und boolesche Werte (nicht {{jsxref("String")}}-, {{jsxref("Number")}}- und {{jsxref("Boolean")}}-Objekte): Ihre Werte werden in das neue Array kopiert.

Andere Methoden verändern das Array, auf dem sie aufgerufen werden. Ihr Rückgabewert hängt dann von der jeweiligen Methode ab: Manchmal ist es eine Referenz auf dasselbe Array, manchmal die Länge des neuen Arrays.

Die folgenden Methoden erstellen neue Arrays, indem sie über [`this.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) den zu verwendenden Konstruktor bestimmen: {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/slice", "slice()")}} und {{jsxref("Array/splice", "splice()")}} (zum Erstellen des zurückgegebenen Arrays entfernter Elemente).

Die folgenden Methoden erstellen neue Arrays stets mit dem `Array`-Basiskonstruktor: {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}} und {{jsxref("Array/with", "with()")}}.

Die folgende Tabelle führt Methoden auf, die das ursprüngliche Array verändern, sowie die entsprechenden Alternativen, die es nicht verändern:

| Verändernde Methode                            | Nicht verändernde Alternative                            |
| ---------------------------------------------- | -------------------------------------------------------- |
| {{jsxref("Array/copyWithin", "copyWithin()")}} | Keine Alternative mit nur einer Methode                  |
| {{jsxref("Array/fill", "fill()")}}             | Keine Alternative mit nur einer Methode                  |
| {{jsxref("Array/pop", "pop()")}}               | {{jsxref("Array/slice", "slice(0, -1)")}}                |
| {{jsxref("Array/push", "push(v1, v2)")}}       | {{jsxref("Array/concat", "concat([v1, v2])")}}           |
| {{jsxref("Array/reverse", "reverse()")}}       | {{jsxref("Array/toReversed", "toReversed()")}}           |
| {{jsxref("Array/shift", "shift()")}}           | {{jsxref("Array/slice", "slice(1)")}}                    |
| {{jsxref("Array/sort", "sort()")}}             | {{jsxref("Array/toSorted", "toSorted()")}}               |
| {{jsxref("Array/splice", "splice()")}}         | {{jsxref("Array/toSpliced", "toSpliced()")}}             |
| {{jsxref("Array/unshift", "unshift(v1, v2)")}} | {{jsxref("Array/toSpliced", "toSpliced(0, 0, v1, v2)")}} |

Eine einfache Möglichkeit, eine verändernde Methode durch eine nicht verändernde Alternative zu ersetzen, besteht darin, zuvor mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder {{jsxref("Array/slice", "slice()")}} eine Kopie zu erstellen:

```js-nolint
arr.copyWithin(0, 1, 2); // mutates arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr
```

### Iterationsmethoden

Viele Array-Methoden nehmen eine Callback-Funktion als Argument entgegen. Die Callback-Funktion wird für jedes Element des Arrays nacheinander und höchstens einmal aufgerufen. Ihr Rückgabewert wird verwendet, um den Rückgabewert der Methode zu bestimmen. Diese Methoden haben alle dieselbe Signatur:

```js-nolint
method(callbackFn, thisArg)
```

Dabei nimmt `callbackFn` drei Argumente entgegen:

- `element`
  - : Das aktuelle Element, das im Array verarbeitet wird.
- `index`
  - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `array`
  - : Das Array, auf dem die Methode aufgerufen wurde.

Welchen Wert `callbackFn` zurückgeben soll, hängt von der aufgerufenen Array-Methode ab.

Das Argument `thisArg` (standardmäßig `undefined`) wird beim Aufruf von `callbackFn` als `this`-Wert verwendet. Welcher `this`-Wert für `callbackFn` letztlich sichtbar ist, richtet sich nach den [üblichen Regeln](/de/docs/Web/JavaScript/Reference/Operators/this): Wenn `callbackFn` [nicht im Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) ausgeführt wird, werden primitive `this`-Werte in Objekte eingeschlossen und `undefined`/`null` durch [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ersetzt. Für eine mit einer [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definierte `callbackFn` ist das Argument `thisArg` unerheblich, da Pfeilfunktionen keine eigene `this`-{{Glossary("binding", "Bindung")}} haben.

Das an `callbackFn` übergebene Argument `array` ist besonders nützlich, wenn Sie während der Iteration einen anderen Index lesen möchten, da nicht immer eine vorhandene Variable auf das aktuelle Array verweist. Im Allgemeinen sollten Sie das Array während der Iteration nicht verändern (siehe [Verändern des ursprünglichen Arrays in Iterationsmethoden](#verändern_des_ursprünglichen_arrays_in_iterationsmethoden)); Sie können dieses Argument jedoch auch dafür verwenden. Bei Methoden wie `map()`, `filter()` und `flatMap()` ist das Argument `array` _nicht_ das Array, das gerade erstellt wird – aus der Callback-Funktion heraus kann nicht auf das entstehende Array zugegriffen werden.

Alle Iterationsmethoden sind [kopierend](#kopierende_und_verändernde_methoden) und [generisch](#generische_array-methoden), verhalten sich bei [leeren Einträgen](#array-methoden_und_leere_einträge) jedoch unterschiedlich.

Die folgenden Methoden sind Iterationsmethoden: {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/map", "map()")}} und {{jsxref("Array/some", "some()")}}.

Insbesondere rufen {{jsxref("Array/every", "every()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}} und {{jsxref("Array/some", "some()")}} `callbackFn` nicht immer für jedes Element auf – sie beenden die Iteration, sobald der Rückgabewert feststeht.

Die Methoden {{jsxref("Array/reduce", "reduce()")}} und {{jsxref("Array/reduceRight", "reduceRight()")}} nehmen ebenfalls eine Callback-Funktion entgegen und führen sie höchstens einmal für jedes Element des Arrays aus. Ihre Signaturen unterscheiden sich jedoch etwas von denen typischer Iterationsmethoden (beispielsweise akzeptieren sie kein `thisArg`).

Auch die Methode {{jsxref("Array/sort", "sort()")}} nimmt eine Callback-Funktion entgegen, ist aber keine Iterationsmethode. Sie verändert das Array direkt, akzeptiert kein `thisArg` und kann die Callback-Funktion für einen Index mehrfach aufrufen.

Iterationsmethoden durchlaufen das Array ungefähr wie folgt (wobei viele technische Details ausgelassen sind):

```js
function method(callbackFn, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      const result = callbackFn.call(thisArg, this[i], i, this);
      // Do something with result; maybe return early
    }
  }
}
```

Beachten Sie Folgendes:

1. Nicht alle Methoden führen die Prüfung `i in this` durch. `find`, `findIndex`, `findLast` und `findLastIndex` führen sie nicht durch, andere Methoden dagegen schon.
2. `length` wird vor Beginn der Schleife gespeichert. Das beeinflusst, wie Einfügungen und Löschungen während der Iteration behandelt werden (siehe [Verändern des ursprünglichen Arrays in Iterationsmethoden](#verändern_des_ursprünglichen_arrays_in_iterationsmethoden)).
3. Die Methode speichert den Inhalt des Arrays nicht. Wird während der Iteration ein Index verändert, kann daher der neue Wert berücksichtigt werden.
4. Der obige Code durchläuft das Array in aufsteigender Indexreihenfolge. Einige Methoden durchlaufen es in absteigender Indexreihenfolge (`for (let i = length - 1; i >= 0; i--)`): `reduceRight()`, `findLast()` und `findLastIndex()`.
5. `reduce` und `reduceRight` haben etwas andere Signaturen und beginnen nicht immer beim ersten beziehungsweise letzten Element.

### Generische Array-Methoden

Array-Methoden sind immer generisch – sie greifen nicht auf interne Daten des Array-Objekts zu. Auf Array-Elemente greifen sie nur über die `length`-Eigenschaft und die indizierten Elemente zu. Daher können sie auch für arrayartige Objekte aufgerufen werden.

```js
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
```

#### Normalisierung der length-Eigenschaft

Die `length`-Eigenschaft wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) und anschließend auf den Bereich von 0 bis 2<sup>53</sup> - 1 begrenzt. `NaN` wird zu `0`. Selbst wenn `length` fehlt oder `undefined` ist, verhält sich das Objekt daher so, als hätte `length` den Wert `0`.

Die Sprache vermeidet es, `length` auf eine [unsichere Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) zu setzen. Alle integrierten Methoden lösen einen {{jsxref("TypeError")}} aus, wenn `length` auf eine Zahl größer als 2<sup>53</sup> - 1 gesetzt werden soll. Da die {{jsxref("Array/length", "length")}}-Eigenschaft von Arrays jedoch bereits bei Werten über 2<sup>32</sup> - 1 einen Fehler auslöst, wird die Grenze für sichere Ganzzahlen normalerweise nur erreicht, wenn die Methode für ein Objekt aufgerufen wird, das kein Array ist.

```js
Array.prototype.flat.call({}); // []
```

Einige Array-Methoden setzen die `length`-Eigenschaft des Array-Objekts. Dabei verwenden sie stets den normalisierten Wert, sodass `length` am Ende immer eine Ganzzahl ist.

```js
const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0
```

#### Arrayartige Objekte

Der Begriff [_arrayartiges Objekt_](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) bezeichnet jedes Objekt, bei dem die oben beschriebene Konvertierung von `length` keinen Fehler auslöst. In der Praxis wird von einem solchen Objekt erwartet, dass es tatsächlich eine `length`-Eigenschaft sowie indizierte Elemente im Bereich von `0` bis `length - 1` besitzt. (Fehlen einzelne Indizes, verhält es sich funktional wie ein [dünn besetztes Array](#array-methoden_und_leere_einträge).) Ganzzahlige Indizes unter null oder über `length - 1` werden ignoriert, wenn eine Array-Methode auf einem arrayartigen Objekt ausgeführt wird.

Viele DOM-Objekte sind arrayartig, beispielsweise [`NodeList`](/de/docs/Web/API/NodeList) und [`HTMLCollection`](/de/docs/Web/API/HTMLCollection). Auch das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt ist arrayartig. Sie können Array-Methoden für diese Objekte aufrufen, selbst wenn sie die Methoden nicht selbst besitzen.

```js
function f() {
  console.log(Array.prototype.join.call(arguments, "+"));
}

f("a", "b"); // 'a+b'
```

### Das Array.prototype-Objekt

Aus Gründen der Abwärtskompatibilität ist `Array.prototype` ein `Array`-Objekt, das anfangs leer ist. Sie können es an {{jsxref("Array.isArray()")}} übergeben, seinen Indizes Werte zuweisen, seine {{jsxref("Array/length", "length")}}-Eigenschaft lesen und Methoden wie `Array.prototype.push(1)` aufrufen.

```js
console.log(Array.prototype.length); // 0
console.log(Array.isArray(Array.prototype)); // true
Array.prototype.push(67);
console.log(Array.prototype.length); // 1
console.log(Array.prototype[0]); // 67
Array.prototype[1] = 69;
console.log(Array.prototype.map((x) => x * 10)); // [670, 690]
```

## Konstruktor

- {{jsxref("Array/Array", "Array()")}}
  - : Erstellt ein neues `Array`-Objekt.

## Statische Eigenschaften

- [`Array[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
  - : Gibt den `Array`-Konstruktor zurück.

## Statische Methoden

- {{jsxref("Array.from()")}}
  - : Erstellt eine neue `Array`-Instanz aus einem iterierbaren oder arrayartigen Objekt.
- {{jsxref("Array.fromAsync()")}}
  - : Erstellt eine neue `Array`-Instanz aus einem asynchron iterierbaren, iterierbaren oder arrayartigen Objekt.
- {{jsxref("Array.isArray()")}}
  - : Gibt `true` zurück, wenn das Argument ein Array ist, andernfalls `false`.
- {{jsxref("Array.of()")}}
  - : Erstellt eine neue `Array`-Instanz mit einer variablen Anzahl von Argumenten, unabhängig von deren Anzahl oder Typ.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Array.prototype` definiert und werden von allen `Array`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Array`-Instanzen ist der Anfangswert der {{jsxref("Array/Array", "Array")}}-Konstruktor.
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
  - : Enthält Eigenschaftsnamen, die vor ES2015 nicht Teil des ECMAScript-Standards waren und bei der Bindung von Bezeichnern in einer [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisung ignoriert werden.

Die folgende Eigenschaft gehört jeder `Array`-Instanz selbst.

- {{jsxref("Array/length", "length")}}
  - : Gibt die Anzahl der Elemente in einem Array an.

## Instanzmethoden

- {{jsxref("Array.prototype.at()")}}
  - : Gibt das Array-Element am angegebenen Index zurück. Akzeptiert negative Ganzzahlen, bei denen vom letzten Element aus rückwärts gezählt wird.
- {{jsxref("Array.prototype.concat()")}}
  - : Gibt ein neues Array zurück, das aus dem aufrufenden Array und weiteren Arrays und/oder Werten zusammengesetzt ist.
- {{jsxref("Array.prototype.copyWithin()")}}
  - : Kopiert eine Folge von Array-Elementen innerhalb eines Arrays.
- {{jsxref("Array.prototype.entries()")}}
  - : Gibt ein neues [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Schlüssel-Wert-Paare für jeden Index eines Arrays enthält.
- {{jsxref("Array.prototype.every()")}}
  - : Gibt `false` zurück, wenn ein Element im Array die angegebene Prüffunktion nicht erfüllt. Andernfalls wird `true` zurückgegeben.
- {{jsxref("Array.prototype.fill()")}}
  - : Füllt die Elemente eines Arrays von einem Startindex bis zu einem Endindex mit einem festen Wert.
- {{jsxref("Array.prototype.filter()")}}
  - : Gibt ein neues Array mit allen Elementen des aufrufenden Arrays zurück, für die die angegebene Filterfunktion `true` zurückgibt.
- {{jsxref("Array.prototype.find()")}}
  - : Gibt den Wert des ersten Elements im Array zurück, das die angegebene Prüffunktion erfüllt, oder `undefined`, wenn kein entsprechendes Element gefunden wird.
- {{jsxref("Array.prototype.findIndex()")}}
  - : Gibt den Index des ersten Elements im Array zurück, das die angegebene Prüffunktion erfüllt, oder `-1`, wenn kein entsprechendes Element gefunden wird.
- {{jsxref("Array.prototype.findLast()")}}
  - : Gibt den Wert des letzten Elements im Array zurück, das die angegebene Prüffunktion erfüllt, oder `undefined`, wenn kein entsprechendes Element gefunden wird.
- {{jsxref("Array.prototype.findLastIndex()")}}
  - : Gibt den Index des letzten Elements im Array zurück, das die angegebene Prüffunktion erfüllt, oder `-1`, wenn kein entsprechendes Element gefunden wird.
- {{jsxref("Array.prototype.flat()")}}
  - : Gibt ein neues Array zurück, in das alle Elemente von Unterarrays bis zur angegebenen Tiefe rekursiv eingefügt wurden.
- {{jsxref("Array.prototype.flatMap()")}}
  - : Gibt ein neues Array zurück, das entsteht, indem eine angegebene Callback-Funktion auf jedes Element des aufrufenden Arrays angewendet und das Ergebnis anschließend um eine Ebene abgeflacht wird.
- {{jsxref("Array.prototype.forEach()")}}
  - : Ruft für jedes Element des aufrufenden Arrays eine Funktion auf.
- {{jsxref("Array.prototype.includes()")}}
  - : Prüft, ob das aufrufende Array einen Wert enthält, und gibt entsprechend `true` oder `false` zurück.
- {{jsxref("Array.prototype.indexOf()")}}
  - : Gibt den ersten (kleinsten) Index zurück, an dem sich ein angegebenes Element im aufrufenden Array befindet.
- {{jsxref("Array.prototype.join()")}}
  - : Gibt eine neue Zeichenfolge zurück, die aus allen Elementen dieses Arrays besteht, getrennt durch Kommas oder eine angegebene Trennzeichenfolge.
- {{jsxref("Array.prototype.keys()")}}
  - : Gibt einen neuen [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) zurück, der die Schlüssel für jeden Index des aufrufenden Arrays enthält.
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index zurück, an dem sich ein angegebenes Element im aufrufenden Array befindet, oder `-1`, wenn es nicht gefunden wird.
- {{jsxref("Array.prototype.map()")}}
  - : Gibt ein neues Array mit den Ergebnissen des Funktionsaufrufs für jedes Element des aufrufenden Arrays zurück.
- {{jsxref("Array.prototype.pop()")}}
  - : Entfernt das letzte Element aus einem Array und gibt es zurück.
- {{jsxref("Array.prototype.push()")}}
  - : Fügt am Ende eines Arrays ein oder mehrere Elemente hinzu und gibt den neuen Wert von `length` zurück.
- {{jsxref("Array.prototype.reduce()")}}
  - : Führt für jedes Element des Arrays (von links nach rechts) eine vom Benutzer bereitgestellte „Reducer“-Callback-Funktion aus, um die Elemente auf einen einzigen Wert zu reduzieren.
- {{jsxref("Array.prototype.reduceRight()")}}
  - : Führt für jedes Element des Arrays (von rechts nach links) eine vom Benutzer bereitgestellte „Reducer“-Callback-Funktion aus, um die Elemente auf einen einzigen Wert zu reduzieren.
- {{jsxref("Array.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays _direkt im Array_ um. (Das erste wird zum letzten Element und das letzte zum ersten.)
- {{jsxref("Array.prototype.shift()")}}
  - : Entfernt das erste Element aus einem Array und gibt es zurück.
- {{jsxref("Array.prototype.slice()")}}
  - : Extrahiert einen Abschnitt des aufrufenden Arrays und gibt ein neues Array zurück.
- {{jsxref("Array.prototype.some()")}}
  - : Gibt `true` zurück, wenn ein Element im Array die angegebene Prüffunktion erfüllt. Andernfalls wird `false` zurückgegeben.
- {{jsxref("Array.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays direkt im Array und gibt das Array zurück.
- {{jsxref("Array.prototype.splice()")}}
  - : Fügt Elemente in ein Array ein und/oder entfernt sie daraus.
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : Gibt eine lokalisierte Zeichenfolge zurück, die das aufrufende Array und seine Elemente darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Array.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das ursprüngliche Array zu verändern.
- {{jsxref("Array.prototype.toSorted()")}}
  - : Gibt ein neues Array mit den Elementen in aufsteigender Reihenfolge zurück, ohne das ursprüngliche Array zu verändern.
- {{jsxref("Array.prototype.toSpliced()")}}
  - : Gibt ein neues Array zurück, in dem an einem angegebenen Index Elemente entfernt und/oder ersetzt wurden, ohne das ursprüngliche Array zu verändern.
- {{jsxref("Array.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das aufrufende Array und seine Elemente darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Array.prototype.unshift()")}}
  - : Fügt am Anfang eines Arrays ein oder mehrere Elemente hinzu und gibt den neuen Wert von `length` zurück.
- {{jsxref("Array.prototype.values()")}}
  - : Gibt ein neues [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Werte für jeden Index des Arrays enthält.
- {{jsxref("Array.prototype.with()")}}
  - : Gibt ein neues Array zurück, in dem das Element am angegebenen Index durch den angegebenen Wert ersetzt wurde, ohne das ursprüngliche Array zu verändern.
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
  - : Standardmäßig ein Alias für die Methode [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values).

## Beispiele

Dieser Abschnitt enthält einige Beispiele für häufige Array-Operationen in JavaScript.

> [!NOTE]
> Wenn Sie mit den Grundlagen von Arrays noch nicht vertraut sind, lesen Sie zunächst [Erste Schritte mit JavaScript: Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays). Dort wird [erklärt, was Arrays sind](/de/docs/Learn_web_development/Core/Scripting/Arrays#what_is_an_array), und Sie finden weitere Beispiele für häufige Array-Operationen.

### Ein Array erstellen

Dieses Beispiel zeigt drei Möglichkeiten, ein neues Array zu erstellen: zuerst mit der [Array-Literal-Notation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation), dann mit dem [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)-Konstruktor und schließlich mit [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), um das Array aus einer Zeichenfolge zu erstellen.

```js
// 'fruits' array created using array literal notation.
const fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2

// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);
// 2

// 'fruits3' array created using String.prototype.split().
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length);
// 2
```

### Eine Zeichenfolge aus einem Array erstellen

Dieses Beispiel verwendet die Methode [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join), um aus dem Array `fruits` eine Zeichenfolge zu erstellen.

```js
const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Apple, Banana"
```

### Über den Index auf ein Array-Element zugreifen

Dieses Beispiel zeigt, wie Sie auf Elemente des Arrays `fruits` zugreifen, indem Sie den Index ihrer Position im Array angeben.

```js
const fruits = ["Apple", "Banana"];

// The index of an array's first element is always 0.
fruits[0]; // Apple

// The index of an array's second element is always 1.
fruits[1]; // Banana

// The index of an array's last element is always one
// less than the length of the array.
fruits[fruits.length - 1]; // Banana

// Using an index number larger than the array's length
// returns 'undefined'.
fruits[99]; // undefined
```

### Den Index eines Elements in einem Array finden

Dieses Beispiel verwendet die Methode [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), um die Position (den Index) der Zeichenfolge `"Banana"` im Array `fruits` zu finden.

```js
const fruits = ["Apple", "Banana"];
console.log(fruits.indexOf("Banana"));
// 1
```

### Prüfen, ob ein Array ein bestimmtes Element enthält

Dieses Beispiel zeigt zwei Möglichkeiten, zu prüfen, ob das Array `fruits` `"Banana"` und `"Cherry"` enthält: zuerst mit der Methode [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), dann mit der Methode [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), indem geprüft wird, ob der Indexwert ungleich `-1` ist.

```js
const fruits = ["Apple", "Banana"];

fruits.includes("Banana"); // true
fruits.includes("Cherry"); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; // false
```

### Ein Element an ein Array anhängen

Dieses Beispiel verwendet die Methode [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push), um dem Array `fruits` eine neue Zeichenfolge anzuhängen.

```js
const fruits = ["Apple", "Banana"];
const newLength = fruits.push("Orange");
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3
```

### Das letzte Element aus einem Array entfernen

Dieses Beispiel verwendet die Methode [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), um das letzte Element aus dem Array `fruits` zu entfernen.

```js
const fruits = ["Apple", "Banana", "Orange"];
const removedItem = fruits.pop();
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange
```

> [!NOTE]
> Mit `pop()` kann nur das letzte Element eines Arrays entfernt werden. Wie Sie mehrere Elemente am Ende eines Arrays entfernen, zeigt das nächste Beispiel.

### Mehrere Elemente am Ende eines Arrays entfernen

Dieses Beispiel verwendet die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), um die letzten 3 Elemente aus dem Array `fruits` zu entfernen.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]
```

### Ein Array auf seine ersten N Elemente kürzen

Dieses Beispiel verwendet die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), um das Array `fruits` auf seine ersten 2 Elemente zu kürzen.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = 2;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]
```

### Das erste Element aus einem Array entfernen

Dieses Beispiel verwendet die Methode [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), um das erste Element aus dem Array `fruits` zu entfernen.

```js
const fruits = ["Apple", "Banana"];
const removedItem = fruits.shift();
console.log(fruits);
// ["Banana"]
console.log(removedItem);
// Apple
```

> [!NOTE]
> Mit `shift()` kann nur das erste Element eines Arrays entfernt werden. Wie Sie mehrere Elemente am Anfang eines Arrays entfernen, zeigt das nächste Beispiel.

### Mehrere Elemente am Anfang eines Arrays entfernen

Dieses Beispiel verwendet die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), um die ersten 3 Elemente aus dem Array `fruits` zu entfernen.

```js
const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
const start = 0;
const deleteCount = 3;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Banana", "Mango"]
console.log(removedItems);
// ["Apple", "Strawberry", "Cherry"]
```

### Ein neues erstes Element zu einem Array hinzufügen

Dieses Beispiel verwendet die Methode [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), um dem Array `fruits` am Index `0` ein neues Element hinzuzufügen. Dieses wird dadurch zum neuen ersten Element des Arrays.

```js
const fruits = ["Banana", "Mango"];
const newLength = fruits.unshift("Strawberry");
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3
```

### Ein einzelnes Element anhand seines Index entfernen

Dieses Beispiel verwendet die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), um die Zeichenfolge `"Banana"` aus dem Array `fruits` zu entfernen. Dazu wird die Indexposition von `"Banana"` angegeben.

```js
const fruits = ["Strawberry", "Banana", "Mango"];
const start = fruits.indexOf("Banana");
const deleteCount = 1;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Strawberry", "Mango"]
console.log(removedItems);
// ["Banana"]
```

### Mehrere Elemente anhand ihres Index entfernen

Dieses Beispiel verwendet die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), um die Zeichenfolgen `"Banana"` und `"Strawberry"` aus dem Array `fruits` zu entfernen. Dazu werden die Indexposition von `"Banana"` und die Gesamtzahl der zu entfernenden Elemente angegeben.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
const start = 1;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Apple", "Mango"]
console.log(removedItems);
// ["Banana", "Strawberry"]
```

### Mehrere Elemente in einem Array ersetzen

Dieses Beispiel verwendet die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), um die letzten 2 Elemente im Array `fruits` durch neue Elemente zu ersetzen.

```js
const fruits = ["Apple", "Banana", "Strawberry"];
const start = -2;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount, "Mango", "Cherry");
console.log(fruits);
// ["Apple", "Mango", "Cherry"]
console.log(removedItems);
// ["Banana", "Strawberry"]
```

### Über ein Array iterieren

Dieses Beispiel verwendet eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife, um das Array `fruits` zu durchlaufen und jedes Element in der Konsole auszugeben.

```js
const fruits = ["Apple", "Mango", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Apple
// Mango
// Cherry
```

`for...of` ist jedoch nur eine von vielen Möglichkeiten, über ein Array zu iterieren. Weitere Möglichkeiten finden Sie unter [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration) sowie in der Dokumentation zu den Methoden [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) und [`reduceRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight). Das nächste Beispiel verwendet die Methode [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

### Eine Funktion für jedes Element eines Arrays aufrufen

Dieses Beispiel verwendet die Methode [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), um für jedes Element des Arrays `fruits` eine Funktion aufzurufen. Die Funktion gibt jedes Element zusammen mit seinem Index in der Konsole aus.

```js
const fruits = ["Apple", "Mango", "Cherry"];
fruits.forEach((item, index, array) => {
  console.log(item, index);
});
// Apple 0
// Mango 1
// Cherry 2
```

### Mehrere Arrays zusammenführen

Dieses Beispiel verwendet die Methode [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), um das Array `fruits` mit dem Array `moreFruits` zu einem neuen Array `combinedFruits` zusammenzuführen. Beachten Sie, dass `fruits` und `moreFruits` unverändert bleiben.

```js
const fruits = ["Apple", "Banana", "Strawberry"];
const moreFruits = ["Mango", "Cherry"];
const combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);
// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// The 'fruits' array remains unchanged.
console.log(fruits);
// ["Apple", "Banana", "Strawberry"]

// The 'moreFruits' array also remains unchanged.
console.log(moreFruits);
// ["Mango", "Cherry"]
```

### Ein Array kopieren

Dieses Beispiel zeigt drei Möglichkeiten, aus dem vorhandenen Array `fruits` ein neues Array zu erstellen: zuerst mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), dann mit der Methode [`from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) und schließlich mit der Methode [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

```js
const fruits = ["Strawberry", "Mango"];

// Create a copy using spread syntax.
const fruitsCopy = [...fruits];
// ["Strawberry", "Mango"]

// Create a copy using the from() method.
const fruitsCopy2 = Array.from(fruits);
// ["Strawberry", "Mango"]

// Create a copy using the slice() method.
const fruitsCopy3 = fruits.slice();
// ["Strawberry", "Mango"]
```

Alle integrierten Array-Kopiervorgänge ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)) erzeugen {{Glossary("Shallow_copy", "flache Kopien")}}. Wenn Sie stattdessen eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines Arrays erstellen möchten, können Sie das Array mit {{jsxref("JSON.stringify()")}} in eine JSON-Zeichenfolge und diese anschließend mit {{jsxref("JSON.parse()")}} wieder in ein neues Array umwandeln, das vom ursprünglichen Array vollständig unabhängig ist.

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

Tiefe Kopien können Sie auch mit der Methode [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) erstellen. Sie bietet den Vorteil, dass [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) aus der Quelle in die neue Kopie _übertragen_ statt lediglich geklont werden können.

Wichtig ist außerdem: Wird ein vorhandenes Array einer neuen Variablen zugewiesen, entsteht weder eine Kopie des Arrays noch seiner Elemente. Die neue Variable ist lediglich eine Referenz beziehungsweise ein Alias für das ursprüngliche Array. Der Name des ursprünglichen Arrays und der Name der neuen Variablen bezeichnen also dasselbe Objekt (und sind daher bei einem Vergleich immer [strikt gleich](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using)). Wenn Sie das Array über eine der beiden Variablen verändern, ist die Änderung daher auch über die andere sichtbar:

```js
const fruits = ["Strawberry", "Mango"];
const fruitsAlias = fruits;
// 'fruits' and 'fruitsAlias' are the same object, strictly equivalent.
fruits === fruitsAlias; // true
// Any changes to the 'fruits' array change 'fruitsAlias' too.
fruits.unshift("Apple", "Banana");
console.log(fruits);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
console.log(fruitsAlias);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
```

### Ein zweidimensionales Array erstellen

Im Folgenden wird ein Schachbrett als zweidimensionales Array von Zeichenfolgen erstellt. Der erste Zug erfolgt, indem das `'p'` von `board[6][4]` nach `board[4][4]` kopiert wird. Die alte Position bei `[6][4]` wird geleert.

```js
const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(`${board.join("\n")}\n\n`);

// Move King's Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = " ";
console.log(board.join("\n"));
```

Dies ist die Ausgabe:

```plain
R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , ,p, , ,
 , , , , , , ,
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r
```

### Mit einem Array eine Wertemenge tabellarisch darstellen

```js
const values = [];
for (let x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);
```

Das Ergebnis ist:

```plain
// The first column is the index
0  1    0
1  2    2
2  4    8
3  8    18
4  16   32
5  32   50
6  64   72
7  128  98
8  256  128
9  512  162
```

### Ein Array aus dem Ergebnis eines Treffers erstellen

Das Ergebnis eines Treffers zwischen einem {{jsxref("RegExp")}} und einer Zeichenfolge kann ein JavaScript-Array mit Eigenschaften und Elementen erzeugen, die Informationen über den Treffer liefern. Ein solches Array wird von {{jsxref("RegExp.prototype.exec()")}} und {{jsxref("String.prototype.match()")}} zurückgegeben.

Zum Beispiel:

```js
// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

const myRe = /d(b+)(d)/i;
const execResult = myRe.exec("cdbBdbsbz");

console.log(execResult.input); // 'cdbBdbsbz'
console.log(execResult.index); // 1
console.log(execResult); // [ "dbBd", "bB", "d" ]
```

Weitere Informationen zum Ergebnis eines Treffers finden Sie auf den Seiten zu {{jsxref("RegExp.prototype.exec()")}} und {{jsxref("String.prototype.match()")}}.

### Verändern des ursprünglichen Arrays in Iterationsmethoden

[Iterationsmethoden](#iterationsmethoden) verändern das Array, auf dem sie aufgerufen werden, nicht. Die als `callbackFn` übergebene Funktion kann es jedoch verändern. Das wichtigste Prinzip dabei ist: Besucht werden nur Indizes zwischen 0 und `arrayLength - 1`, wobei `arrayLength` die Länge des Arrays zum Zeitpunkt des Aufrufs der Array-Methode ist. An die Callback-Funktion wird jedoch der Wert übergeben, den das Element zum Zeitpunkt des Besuchs seines Index hat. Daher gilt:

- `callbackFn` besucht keine Elemente, die nach Beginn des Aufrufs der Iterationsmethode jenseits der ursprünglichen Array-Länge hinzugefügt wurden.
- Änderungen an bereits besuchten Indizes führen nicht dazu, dass `callbackFn` für diese erneut aufgerufen wird.
- Wenn `callbackFn` ein vorhandenes, noch nicht besuchtes Element des Arrays verändert, wird beim Besuch dieses Elements sein dann aktueller Wert an `callbackFn` übergeben. Entfernte Elemente werden nicht besucht.

> [!WARNING]
> Gleichzeitige Änderungen der oben beschriebenen Art führen häufig zu schwer verständlichem Code und sollten im Allgemeinen vermieden werden (außer in Sonderfällen).

Die folgenden Beispiele verwenden die Methode `forEach`. Andere Methoden, die Indizes in aufsteigender Reihenfolge besuchen, verhalten sich genauso. Zunächst definieren wir eine Hilfsfunktion:

```js
function testSideEffect(effect) {
  const arr = ["e1", "e2", "e3", "e4"];
  arr.forEach((elem, index, arr) => {
    console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
    effect(arr, index);
  });
  console.log(`Final array: [${arr.join(", ")}]`);
}
```

Änderungen an noch nicht besuchten Indizes werden sichtbar, sobald der jeweilige Index erreicht wird:

```js
testSideEffect((arr, index) => {
  if (index + 1 < arr.length) arr[index + 1] += "*";
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2*, e3, e4], index: 1, elem: e2*
// array: [e1, e2*, e3*, e4], index: 2, elem: e3*
// array: [e1, e2*, e3*, e4*], index: 3, elem: e4*
// Final array: [e1, e2*, e3*, e4*]
```

Änderungen an bereits besuchten Indizes beeinflussen den Ablauf der Iteration nicht, auch wenn das Array anschließend anders aussieht:

```js
testSideEffect((arr, index) => {
  if (index > 0) arr[index - 1] += "*";
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4], index: 1, elem: e2
// array: [e1*, e2, e3, e4], index: 2, elem: e3
// array: [e1*, e2*, e3, e4], index: 3, elem: e4
// Final array: [e1*, e2*, e3*, e4]
```

Werden _n_ Elemente an noch nicht besuchten Indizes eingefügt, die kleiner als die ursprüngliche Array-Länge sind, werden diese Elemente besucht. Die letzten _n_ Elemente des ursprünglichen Arrays, deren Indizes nun über der ursprünglichen Array-Länge liegen, werden nicht besucht:

```js
testSideEffect((arr, index) => {
  if (index === 1) arr.splice(2, 0, "new");
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4], index: 1, elem: e2
// array: [e1, e2, new, e3, e4], index: 2, elem: new
// array: [e1, e2, new, e3, e4], index: 3, elem: e3
// Final array: [e1, e2, new, e3, e4]
// e4 is not visited because it now has index 4
```

Werden _n_ Elemente mit Indizes eingefügt, die größer als die ursprüngliche Array-Länge sind, werden sie nicht besucht:

```js
testSideEffect((arr) => arr.push("new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4, new], index: 1, elem: e2
// array: [e1, e2, e3, e4, new, new], index: 2, elem: e3
// array: [e1, e2, e3, e4, new, new, new], index: 3, elem: e4
// Final array: [e1, e2, e3, e4, new, new, new, new]
```

Werden _n_ Elemente an bereits besuchten Indizes eingefügt, werden die eingefügten Elemente nicht besucht. Die verbleibenden Elemente verschieben sich jedoch um _n_ Positionen nach hinten. Dadurch werden das Element am aktuellen Index und die _n - 1_ Elemente davor erneut besucht:

```js
testSideEffect((arr, index) => arr.splice(index, 0, "new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [new, e1, e2, e3, e4], index: 1, elem: e1
// array: [new, new, e1, e2, e3, e4], index: 2, elem: e1
// array: [new, new, new, e1, e2, e3, e4], index: 3, elem: e1
// Final array: [new, new, new, new, e1, e2, e3, e4]
// e1 keeps getting visited because it keeps getting shifted back
```

Werden _n_ Elemente an noch nicht besuchten Indizes gelöscht, werden sie nicht mehr besucht. Da das Array kürzer geworden ist, treffen die letzten _n_ Iterationen auf Indizes außerhalb seiner Grenzen. Ignoriert die Methode nicht vorhandene Indizes (siehe [Array-Methoden und leere Einträge](#array-methoden_und_leere_einträge)), werden diese Iterationen übersprungen; andernfalls erhalten sie `undefined`:

```js
testSideEffect((arr, index) => {
  if (index === 1) arr.splice(2, 1);
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4], index: 1, elem: e2
// array: [e1, e2, e4], index: 2, elem: e4
// Final array: [e1, e2, e4]
// Does not visit index 3 because it's out-of-bounds

// Compare this with find(), which treats nonexistent indexes as undefined:
const arr2 = ["e1", "e2", "e3", "e4"];
arr2.find((elem, index, arr) => {
  console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
  if (index === 1) arr.splice(2, 1);
  return false;
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4], index: 1, elem: e2
// array: [e1, e2, e4], index: 2, elem: e4
// array: [e1, e2, e4], index: 3, elem: undefined
```

Das Löschen von _n_ Elementen an bereits besuchten Indizes ändert nichts daran, dass sie vor dem Löschen besucht wurden. Da das Array kürzer geworden ist, werden die nächsten _n_ Elemente nach dem aktuellen Index übersprungen. Ignoriert die Methode nicht vorhandene Indizes, werden die letzten _n_ Iterationen übersprungen; andernfalls erhalten sie `undefined`:

```js
testSideEffect((arr, index) => arr.splice(index, 1));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// Does not visit e2 because e2 now has index 0, which has already been visited
// array: [e2, e3, e4], index: 1, elem: e3
// Does not visit e4 because e4 now has index 1, which has already been visited
// Final array: [e2, e4]
// Index 2 is out-of-bounds, so it's not visited

// Compare this with find(), which treats nonexistent indexes as undefined:
const arr2 = ["e1", "e2", "e3", "e4"];
arr2.find((elem, index, arr) => {
  console.log(`array: [${arr.join(", ")}], index: ${index}, elem: ${elem}`);
  arr.splice(index, 1);
  return false;
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e2, e3, e4], index: 1, elem: e3
// array: [e2, e4], index: 2, elem: undefined
// array: [e2, e4], index: 3, elem: undefined
```

Bei Methoden, die Indizes in absteigender Reihenfolge durchlaufen, führt das Einfügen dazu, dass Elemente übersprungen werden, und das Löschen dazu, dass Elemente mehrfach besucht werden. Passen Sie den obigen Code selbst an, um die Auswirkungen zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
