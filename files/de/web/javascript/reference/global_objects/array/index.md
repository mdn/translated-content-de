---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Das **`Array`**-Objekt, ähnlich wie Arrays in anderen Programmiersprachen, ermöglicht das [Speichern einer Sammlung mehrerer Elemente unter einem einzelnen Variablennamen](/de/docs/Learn_web_development/Core/Scripting/Arrays) und verfügt über Mitglieder zur [Durchführung gängiger Array-Operationen](#beispiele).

## Beschreibung

In JavaScript sind Arrays keine {{Glossary("Primitive", "Primitiven")}}, sondern `Array`-Objekte mit den folgenden Kernmerkmalen:

- **JavaScript-Arrays sind skalierbar** und **können eine Mischung aus verschiedenen [Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures) enthalten**. (Wenn diese Merkmale unerwünscht sind, verwenden Sie stattdessen [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays).)
- **JavaScript-Arrays sind keine assoziativen Arrays** und deshalb können Array-Elemente nicht mit beliebigen Zeichenfolgen als Indizes aufgerufen werden, sondern müssen mit nichtnegativen Ganzzahlen (oder ihrer entsprechenden Zeichenfolgenform) als Indizes aufgerufen werden.
- **JavaScript-Arrays sind [nullbasiert](https://en.wikipedia.org/wiki/Zero-based_numbering)**: Das erste Element eines Arrays befindet sich an Index `0`, das zweite an Index `1` und so weiter — und das letzte Element hat den Wert der {{jsxref("Array/length", "length")}}-Eigenschaft des Arrays minus `1`.
- **JavaScript-[Array-Kopieroperationen](#kopieren_eines_arrays) erstellen {{Glossary("Shallow_copy", "flache Kopien")}}**. (Alle standardmäßigen eingebauten Kopieroperationen mit _allen_ JavaScript-Objekten erstellen flache Kopien anstatt {{Glossary("Deep_copy", "tiefer Kopien")}}.)

### Array-Indizes

`Array`-Objekte können keine beliebigen Zeichenfolgen als Elementindizes verwenden (wie in einem [assoziativen Array](https://de.wikipedia.org/wiki/Assoziatives_Feld)), sondern müssen auf nichtnegative Ganzzahlen (oder deren entsprechende Zeichenfolgenform) zugreifen. Der Zugriff über nicht-ganze Zahlen führt nicht dazu, dass ein Element aus der Array-Liste selbst festgelegt oder abgerufen wird, sondern es wird eine Variable festgelegt oder aufgerufen, die mit der [Objekteigenschaftensammlung](/de/docs/Web/JavaScript/Guide/Data_structures#properties) des Arrays verbunden ist. Die Objekteigenschaften des Arrays und die Liste der Array-Elemente sind unabhängig, und die [Traversal- und Mutationsoperationen](/de/docs/Web/JavaScript/Guide/Indexed_collections#array_methods) des Arrays können nicht auf diese benannten Eigenschaften angewendet werden.

Array-Elemente sind Objekteigenschaften auf die gleiche Weise, wie `toString` eine Eigenschaft ist (um genau zu sein, ist `toString()` jedoch eine Methode). Trotzdem führt der Versuch, auf ein Element eines Arrays wie folgt zuzugreifen, zu einem Syntaxfehler, da der Eigenschaftenname nicht gültig ist:

```js-nolint example-bad
arr.0; // a syntax error
```

Die JavaScript-Syntax erfordert, dass Eigenschaften, die mit einer Ziffer beginnen, mit [Klammernotation](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties) anstelle von [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) aufgerufen werden. Es ist ebenfalls möglich, die Array-Indizes zu zitieren (z.B. `years['2']` anstelle von `years[2]`), obwohl es normalerweise nicht notwendig ist.

Die `2` in `years[2]` wird durch eine implizite `toString`-Konvertierung durch die JavaScript-Engine in eine Zeichenfolge umgewandelt. Daher würden `'2'` und `'02'` auf zwei verschiedene Slots im `years`-Objekt verweisen, und das folgende Beispiel könnte `true` sein:

```js
console.log(years["2"] !== years["02"]);
```

Nur `years['2']` ist ein tatsächlicher Array-Index. `years['02']` ist eine beliebige Zeichenfolgen-Eigenschaft, die bei der Array-Iteration nicht besucht wird.

### Beziehung zwischen Länge und numerischen Eigenschaften

Die {{jsxref("Array/length", "length")}}-Eigenschaft eines JavaScript-Arrays und numerische Eigenschaften sind verbunden.

Einige der eingebauten Array-Methoden (z.B. {{jsxref("Array/join", "join()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/indexOf", "indexOf()")}}, usw.) berücksichtigen den Wert der {{jsxref("Array/length", "length")}}-Eigenschaft eines Arrays, wenn sie aufgerufen werden.

Andere Methoden (z.B. {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, usw.) führen ebenfalls zu Aktualisierungen der {{jsxref("Array/length", "length")}}-Eigenschaft eines Arrays.

```js
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
```

Wenn eine Eigenschaft auf einem JavaScript-Array festgelegt wird, wenn die Eigenschaft ein gültiger Array-Index ist und dieser Index außerhalb der aktuellen Grenzen des Arrays liegt, aktualisiert die Engine die {{jsxref("Array/length", "length")}}-Eigenschaft des Arrays entsprechend:

```js
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

Die Erhöhung der {{jsxref("Array/length", "length")}} erweitert das Array, indem leere Slots hinzugefügt werden, ohne neue Elemente zu erstellen — nicht einmal `undefined`.

```js
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
```

Die Reduzierung der {{jsxref("Array/length", "length")}}-Eigenschaft löscht jedoch Elemente.

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

Dies wird auf der Seite {{jsxref("Array/length", "length")}} weiter erklärt.

### Array-Methoden und leere Slots

Array-Methoden haben unterschiedliches Verhalten, wenn sie auf leere Slots in [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) stoßen. Im Allgemeinen behandeln ältere Methoden (z.B. `forEach`) leere Slots anders als Indizes, die `undefined` enthalten.

Methoden, die eine spezielle Behandlung für leere Slots haben, umfassen: {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/copyWithin", "copyWithin()")}}, {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/reduce", "reduce()")}}, {{jsxref("Array/reduceRight", "reduceRight()")}}, {{jsxref("Array/reverse", "reverse()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/sort", "sort()")}}, und {{jsxref("Array/splice", "splice()")}}. Iterationsmethoden wie `forEach` besuchen leere Slots überhaupt nicht. Andere Methoden wie `concat`, `copyWithin` usw. behalten leere Slots beim Kopieren bei, sodass das Array am Ende immer noch spärlich ist.

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

Neuere Methoden (z.B. `keys`) behandeln leere Slots nicht speziell und behandeln sie so, als ob sie `undefined` enthalten. Methoden, die leere Slots mit `undefined`-Elementen gleichsetzen, umfassen: {{jsxref("Array/entries", "entries()")}}, {{jsxref("Array/fill", "fill()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/includes", "includes()")}}, {{jsxref("Array/join", "join()")}}, {{jsxref("Array/keys", "keys()")}}, {{jsxref("Array/toLocaleString", "toLocaleString()")}}, {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}}, {{jsxref("Array/values", "values()")}}, und {{jsxref("Array/with", "with()")}}.

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

### Kopier- und Mutationsmethoden

Einige Methoden verändern nicht das bestehende Array, auf dem die Methode aufgerufen wurde, sondern geben stattdessen ein neues Array zurück. Sie tun dies, indem sie zunächst ein neues Array erstellen und es dann mit Elementen füllen. Die Kopie geschieht stets {{Glossary("Shallow_copy", "_oberflächlich_")}} — die Methode kopiert niemals mehr als das initial erstellte Array. Elemente des ursprünglichen Arrays werden wie folgt in das neue Array kopiert:

- Objekte: Die Objektreferenz wird in das neue Array kopiert. Sowohl das ursprüngliche als auch das neue Array verweisen auf dasselbe Objekt. Das heißt, wenn ein referenziertes Objekt geändert wird, sind die Änderungen sowohl im neuen als auch im ursprünglichen Array sichtbar.
- Primitive Typen wie Strings, Zahlen und Booleans (nicht {{jsxref("String")}}, {{jsxref("Number")}}, und {{jsxref("Boolean")}}-Objekte): ihre Werte werden in das neue Array kopiert.

Andere Methoden verändern das Array, auf dem die Methode aufgerufen wurde, und in diesem Fall unterscheidet sich der Rückgabewert je nach Methode: manchmal eine Referenz auf dasselbe Array, manchmal die Länge des neuen Arrays.

Die folgenden Methoden erstellen neue Arrays, indem sie [`this.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) aufrufen, um den Konstruktor zu bestimmen: {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/slice", "slice()")}}, und {{jsxref("Array/splice", "splice()")}} (um das Array der entfernten Elemente zu konstruieren, das zurückgegeben wird).

Die folgenden Methoden erstellen immer neue Arrays mit dem `Array`-Basiskonstruktor: {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}}, und {{jsxref("Array/with", "with()")}}.

Die folgende Tabelle listet die Methoden auf, die das ursprüngliche Array verändern, und die entsprechende nicht-mutierende Alternative:

| Veränderungsmethode                            | Nicht-verändernde Alternative                            |
| ---------------------------------------------- | -------------------------------------------------------- |
| {{jsxref("Array/copyWithin", "copyWithin()")}} | Keine Einzelfunktions-Alternative                        |
| {{jsxref("Array/fill", "fill()")}}             | Keine Einzelfunktions-Alternative                        |
| {{jsxref("Array/pop", "pop()")}}               | {{jsxref("Array/slice", "slice(0, -1)")}}                |
| {{jsxref("Array/push", "push(v1, v2)")}}       | {{jsxref("Array/concat", "concat([v1, v2])")}}           |
| {{jsxref("Array/reverse", "reverse()")}}       | {{jsxref("Array/toReversed", "toReversed()")}}           |
| {{jsxref("Array/shift", "shift()")}}           | {{jsxref("Array/slice", "slice(1)")}}                    |
| {{jsxref("Array/sort", "sort()")}}             | {{jsxref("Array/toSorted", "toSorted()")}}               |
| {{jsxref("Array/splice", "splice()")}}         | {{jsxref("Array/toSpliced", "toSpliced()")}}             |
| {{jsxref("Array/unshift", "unshift(v1, v2)")}} | {{jsxref("Array/toSpliced", "toSpliced(0, 0, v1, v2)")}} |

Eine einfache Möglichkeit, eine verändernde Methode in eine nicht-verändernde Alternative zu verwandeln, besteht darin, zuerst die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder {{jsxref("Array/slice", "slice()")}} zu verwenden, um eine Kopie zu erstellen:

```js-nolint
arr.copyWithin(0, 1, 2); // mutates arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr
```

### Iterative Methoden

Viele Array-Methoden nehmen eine Callback-Funktion als Argument an. Diese Callback-Funktion wird sequenziell und höchstens einmal pro Element im Array aufgerufen, und der Rückgabewert der Callback-Funktion wird verwendet, um den Rückgabewert der Methode zu bestimmen. Alle haben die gleiche Signatur:

```js-nolint
method(callbackFn, thisArg)
```

Wo `callbackFn` drei Argumente annimmt:

- `element`
  - : Das aktuelle Element, das im Array verarbeitet wird.
- `index`
  - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `array`
  - : Das Array, auf dem die Methode aufgerufen wurde.

Was `callbackFn` zurückgeben soll, hängt von der aufgerufenen Array-Methode ab.

Das `thisArg`-Argument (standardmäßig `undefined`) wird als Wert von `this` beim Aufrufen von `callbackFn` verwendet. Der letztlich von `callbackFn` beobachtbare `this`-Wert wird gemäß [den üblichen Regeln](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt: Wenn `callbackFn` [nicht-strikt](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) ist, werden primitive `this`-Werte in Objekte umgewandelt, und `undefined`/`null` wird durch [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ersetzt. Das `thisArg`-Argument ist irrelevant für jeden `callbackFn`, der mit einer [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definiert ist, da Pfeilfunktionen kein eigenes `this` {{Glossary("binding", "binding")}} haben.

Das `array`-Argument, das an `callbackFn` übergeben wird, ist am nützlichsten, wenn Sie während der Iteration auf einen anderen Index zugreifen möchten, da Sie möglicherweise nicht immer eine vorhandene Variable haben, die auf das aktuelle Array verweist. Im Allgemeinen sollten Sie das Array während der Iteration nicht verändern (siehe [Veränderung des Anfangsarrays in iterativen Methoden](#veränderung_des_anfangsarrays_in_iterativen_methoden)), aber Sie können auch dieses Argument verwenden, um dies zu tun. Das `array`-Argument ist _nicht_ das Array, das in Methoden wie `map()`, `filter()`, und `flatMap()` aufgebaut wird — es gibt keine Möglichkeit, aus der Callback-Funktion auf das neu aufgebaute Array zuzugreifen.

Alle iterativen Methoden sind [kopierend](#kopier-_und_mutationsmethoden) und [generisch](#generische_array-methoden), obwohl sie sich unterschiedlich bei [leeren Slots](#array-methoden_und_leere_slots) verhalten.

Die folgenden Methoden sind iterativ: {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/map", "map()")}}, und {{jsxref("Array/some", "some()")}}.

Insbesondere {{jsxref("Array/every", "every()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, und {{jsxref("Array/some", "some()")}} rufen `callbackFn` nicht immer für jedes Element auf — sie stoppen die Iteration, sobald der Rückgabewert festgestellt ist.

Die Methoden {{jsxref("Array/reduce", "reduce()")}} und {{jsxref("Array/reduceRight", "reduceRight()")}} nehmen auch eine Callback-Funktion und führen diese höchstens einmal pro Element im Array aus, haben aber leicht unterschiedliche Signaturen als typische iterative Methoden (z. B. akzeptieren sie kein `thisArg`).

Die Methode {{jsxref("Array/sort", "sort()")}} nimmt ebenfalls eine Callback-Funktion, ist jedoch keine iterative Methode. Sie verändert das Array an Ort und Stelle, akzeptiert kein `thisArg` und kann die Callback-Funktion mehrmals an einem Index aufrufen.

Iterative Methoden durchlaufen das Array folgendermaßen (mit vielen technischen Details weggelassen):

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

1. Nicht alle Methoden führen den `i in this`-Test durch. Die Methoden `find`, `findIndex`, `findLast` und `findLastIndex` tun dies nicht, andere jedoch schon.
2. Die `length` wird vor dem Start der Schleife gespeichert. Dies wirkt sich darauf aus, wie Einfügungen und Löschungen während der Iteration behandelt werden (siehe [Veränderung des Anfangsarrays in iterativen Methoden](#veränderung_des_anfangsarrays_in_iterativen_methoden)).
3. Die Methode speichert nicht die Inhalte des Arrays, daher kann, wenn ein Index während der Iteration geändert wird, der neue Wert beobachtet werden.
4. Der obenstehende Code durchläuft das Array in aufsteigender Reihenfolge der Indizes. Einige Methoden durchlaufen in absteigender Reihenfolge der Indizes (`for (let i = length - 1; i >= 0; i--)`): `reduceRight()`, `findLast()`, und `findLastIndex()`.
5. `reduce` und `reduceRight` haben leicht unterschiedliche Signaturen und starten nicht immer am ersten/letzten Element.

### Generische Array-Methoden

Array-Methoden sind immer generisch – sie greifen nicht auf interne Daten des Array-Objekts zu. Sie greifen nur über die `length`-Eigenschaft und die indizierten Elemente auf die Array-Elemente zu. Dies bedeutet, dass sie auch auf array-ähnliche Objekte angewendet werden können.

```js
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
```

#### Normalisierung der Länge-Eigenschaft

Die `length`-Eigenschaft wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) und anschließend in den Bereich zwischen 0 und 2<sup>53</sup> - 1 eingegrenzt. `NaN` wird zu `0`, sodass selbst wenn `length` nicht vorhanden oder `undefined` ist, es sich so verhält, als hätte es einen Wert von `0`.

Die Sprache vermeidet es, `length` auf eine [unsichere Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) zu setzen. Alle eingebauten Methoden werfen einen {{jsxref("TypeError")}}, wenn `length` auf eine Zahl größer als 2<sup>53</sup> - 1 gesetzt wird. Da jedoch die {{jsxref("Array/length", "length")}}-Eigenschaft von Arrays einen Fehler auslöst, wenn sie auf einen Wert größer als 2<sup>32</sup> - 1 gesetzt wird, wird die sichere Ganzzahlgrenze normalerweise nicht erreicht es sei denn, die Methode wird auf einem Nicht-Array-Objekt aufgerufen.

```js
Array.prototype.flat.call({}); // []
```

Einige Array-Methoden setzen die `length`-Eigenschaft des Array-Objekts. Sie setzen immer den Wert nach der Normalisierung, sodass `length` immer als Ganzzahl endet.

```js
const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0
```

#### Array-ähnliche Objekte

Der Begriff [_array-ähnliches Objekt_](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) bezieht sich auf jedes Objekt, das während des im obigen Absatz beschriebenen Länge-Umwandlungsprozesses keinen Fehler auslöst. In der Praxis wird erwartet, dass ein solches Objekt tatsächlich eine `length`-Eigenschaft hat und indizierte Elemente im Bereich `0` bis `length - 1` hat. (Wenn es nicht alle Indizes hat, ist es funktional gleichwertig mit einem [spärlichen Array](#array-methoden_und_leere_slots).) Jeder ganze Zahlindex kleiner als Null oder größer als `length - 1` wird ignoriert, wenn eine Array-Methode auf einem array-ähnlichen Objekt operiert.

Viele DOM-Objekte sind array-ähnlich — z.B. [`NodeList`](/de/docs/Web/API/NodeList) und [`HTMLCollection`](/de/docs/Web/API/HTMLCollection). Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt ist ebenfalls array-ähnlich. Sie können Array-Methoden auf ihnen aufrufen, auch wenn sie diese Methoden selbst nicht haben.

```js
function f() {
  console.log(Array.prototype.join.call(arguments, "+"));
}

f("a", "b"); // 'a+b'
```

## Konstruktor

- {{jsxref("Array/Array", "Array()")}}
  - : Erzeugt ein neues `Array`-Objekt.

## Statische Eigenschaften

- [`Array[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
  - : Gibt den `Array`-Konstruktor zurück.

## Statische Methoden

- {{jsxref("Array.from()")}}
  - : Erzeugt eine neue `Array`-Instanz aus einem iterierbaren oder array-ähnlichen Objekt.
- {{jsxref("Array.fromAsync()")}}
  - : Erzeugt eine neue `Array`-Instanz aus einem asynchronen iterierbaren, iterierbaren oder array-ähnlichen Objekt.
- {{jsxref("Array.isArray()")}}
  - : Gibt `true` zurück, wenn das Argument ein Array ist, andernfalls `false`.
- {{jsxref("Array.of()")}}
  - : Erzeugt eine neue `Array`-Instanz mit einer variablen Anzahl von Argumenten, unabhängig von Anzahl oder Typ der Argumente.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Array.prototype` definiert und werden von allen `Array`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Array`-Instanzen ist der Anfangswert der {{jsxref("Array/Array", "Array")}}-Konstruktor.
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
  - : Enthält Eigenschaftenamen, die nicht in der ECMAScript-Norm vor der Version ES2015 enthalten waren und die für [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Statement-Bindungszwecke ignoriert werden.

Diese Eigenschaften sind Eigenschaftswerte jeder `Array`-Instanz.

- {{jsxref("Array/length", "length")}}
  - : Gibt die Anzahl der Elemente in einem Array wieder.

## Instanzmethoden

- {{jsxref("Array.prototype.at()")}}
  - : Gibt das Array-Element an dem angegebenen Index zurück. Akzeptiert negative ganze Zahlen, die vom letzten Element zurückzählen.
- {{jsxref("Array.prototype.concat()")}}
  - : Gibt ein neues Array zurück, das das aufrufende Array mit anderen Arrays und/oder Werten kombiniert.
- {{jsxref("Array.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Array-Elementen innerhalb eines Arrays.
- {{jsxref("Array.prototype.entries()")}}
  - : Gibt ein neues [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index in einem Array enthält.
- {{jsxref("Array.prototype.every()")}}
  - : Gibt `true` zurück, wenn jedes Element im aufrufenden Array die Testfunktion erfüllt.
- {{jsxref("Array.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays von einem Startindex bis zu einem Endindex mit einem festen Wert.
- {{jsxref("Array.prototype.filter()")}}
  - : Gibt ein neues Array zurück, das alle Elemente des aufrufenden Arrays enthält, für die die bereitgestellte Filterfunktion `true` zurückgibt.
- {{jsxref("Array.prototype.find()")}}
  - : Gibt den Wert des ersten Elements im Array zurück, das die bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein passendes Element gefunden wird.
- {{jsxref("Array.prototype.findIndex()")}}
  - : Gibt den Index des ersten Elements im Array zurück, das die bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein passendes Element gefunden wurde.
- {{jsxref("Array.prototype.findLast()")}}
  - : Gibt den Wert des letzten Elements im Array zurück, das die bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein passendes Element gefunden wird.
- {{jsxref("Array.prototype.findLastIndex()")}}
  - : Gibt den Index des letzten Elements im Array zurück, das die bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein passendes Element gefunden wurde.
- {{jsxref("Array.prototype.flat()")}}
  - : Gibt ein neues Array mit allen Unter-Array-Elementen zurück, die bis zur angegebenen Tiefe rekursiv verknüpft sind.
- {{jsxref("Array.prototype.flatMap()")}}
  - : Gibt ein neues Array zurück, das durch Anwenden einer gegebenen Callback-Funktion auf jedes Element des aufrufenden Arrays gebildet wird und dann das Ergebnis um eine Ebene abflacht.
- {{jsxref("Array.prototype.forEach()")}}
  - : Ruft eine Funktion für jedes Element im aufrufenden Array auf.
- {{jsxref("Array.prototype.includes()")}}
  - : Bestimmt, ob das aufrufende Array einen Wert enthält, und gibt `true` oder `false` zurück.
- {{jsxref("Array.prototype.indexOf()")}}
  - : Gibt den ersten (geringsten) Index zurück, an dem ein bestimmtes Element im aufrufenden Array gefunden werden kann.
- {{jsxref("Array.prototype.join()")}}
  - : Verbindet alle Elemente eines Arrays zu einer Zeichenfolge.
- {{jsxref("Array.prototype.keys()")}}
  - : Gibt ein neues [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Schlüssel für jeden Index im aufrufenden Array enthält.
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index zurück, an dem ein bestimmtes Element im aufrufenden Array gefunden werden kann, oder `-1`, wenn keines gefunden wird.
- {{jsxref("Array.prototype.map()")}}
  - : Gibt ein neues Array zurück, das die Ergebnisse der Ausführung einer Funktion auf jedem Element im aufrufenden Array enthält.
- {{jsxref("Array.prototype.pop()")}}
  - : Entfernt das letzte Element aus einem Array und gibt dieses Element zurück.
- {{jsxref("Array.prototype.push()")}}
  - : Fügt ein oder mehrere Elemente am Ende eines Arrays hinzu und gibt die neue `length` des Arrays zurück.
- {{jsxref("Array.prototype.reduce()")}}
  - : Führt eine benutzerdefinierte "Reducer"-Callback-Funktion für jedes Element des Arrays (von links nach rechts) aus, um es auf einen einzigen Wert zu reduzieren.
- {{jsxref("Array.prototype.reduceRight()")}}
  - : Führt eine benutzerdefinierte "Reducer"-Callback-Funktion für jedes Element des Arrays (von rechts nach links) aus, um es auf einen einzigen Wert zu reduzieren.
- {{jsxref("Array.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays _vor Ort_ um. (Erstes wird letztes, letztes wird erstes.)
- {{jsxref("Array.prototype.shift()")}}
  - : Entfernt das erste Element aus einem Array und gibt dieses Element zurück.
- {{jsxref("Array.prototype.slice()")}}
  - : Extrahiert einen Abschnitt des aufrufenden Arrays und gibt ein neues Array zurück.
- {{jsxref("Array.prototype.some()")}}
  - : Gibt `true` zurück, wenn mindestens ein Element im aufrufenden Array die bereitgestellte Testfunktion erfüllt.
- {{jsxref("Array.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays an Ort und Stelle und gibt das Array zurück.
- {{jsxref("Array.prototype.splice()")}}
  - : Fügt Elemente zu einem Array hinzu und/oder entfernt sie davon.
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : Gibt eine lokalisierte Zeichenfolge zurück, die das aufrufende Array und dessen Elemente darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Array.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das ursprüngliche Array zu ändern.
- {{jsxref("Array.prototype.toSorted()")}}
  - : Gibt ein neues Array mit den in aufsteigender Reihenfolge sortierten Elementen zurück, ohne das ursprüngliche Array zu ändern.
- {{jsxref("Array.prototype.toSpliced()")}}
  - : Gibt ein neues Array mit einigen entfernten und/oder an einem bestimmten Index ersetzten Elementen zurück, ohne das ursprüngliche Array zu ändern.
- {{jsxref("Array.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das aufrufende Array und dessen Elemente darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Array.prototype.unshift()")}}
  - : Fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu und gibt die neue `length` des Arrays zurück.
- {{jsxref("Array.prototype.values()")}}
  - : Gibt ein neues [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Werte für jeden Index im Array enthält.
- {{jsxref("Array.prototype.with()")}}
  - : Gibt ein neues Array zurück, bei dem das Element am angegebenen Index durch den angegebenen Wert ersetzt wird, ohne das ursprüngliche Array zu ändern.
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
  - : Ein Alias für die Methode [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values) standardmäßig.

## Beispiele

Dieser Abschnitt bietet einige Beispiele für gängige Array-Operationen in JavaScript.

> [!NOTE]
> Wenn Sie noch nicht mit den Grundlagen von Arrays vertraut sind, sollten Sie zuerst [JavaScript Erste Schritte: Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) lesen, das [erklärt, was Arrays sind](/de/docs/Learn_web_development/Core/Scripting/Arrays#what_is_an_array) und weitere Beispiele für gängige Array-Operationen enthält.

### Erstellen eines Arrays

Dieses Beispiel zeigt drei Möglichkeiten, ein neues Array zu erstellen: erstens mit [Array-Literal-Notation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation), dann mit dem [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)-Konstruktor und schließlich mit [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), um das Array aus einer Zeichenfolge zu erstellen.

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

### Erstellen einer Zeichenfolge aus einem Array

Dieses Beispiel verwendet die [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join)-Methode, um eine Zeichenfolge aus dem `fruits`-Array zu erstellen.

```js
const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Apple, Banana"
```

### Zugriff auf ein Array-Element über dessen Index

Dieses Beispiel zeigt, wie man auf Elemente im `fruits`-Array zugreift, indem man die Indexnummer ihrer Position im Array angibt.

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

### Finden des Index eines Elements in einem Array

Dieses Beispiel verwendet die [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)-Methode, um die Position (Index) der Zeichenfolge `"Banana"` im `fruits`-Array zu finden.

```js
const fruits = ["Apple", "Banana"];
console.log(fruits.indexOf("Banana"));
// 1
```

### Überprüfen, ob ein Array ein bestimmtes Element enthält

Dieses Beispiel zeigt zwei Möglichkeiten, um zu überprüfen, ob das `fruits`-Array `"Banana"` und `"Cherry"` enthält: zuerst mit der [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)-Methode und dann mit der [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)-Methode, um auf einen Index zu testen, der nicht `-1` ist.

```js
const fruits = ["Apple", "Banana"];

fruits.includes("Banana"); // true
fruits.includes("Cherry"); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; // false
```

### Anhängen eines Elements an ein Array

Dieses Beispiel verwendet die [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push)-Methode, um dem `fruits`-Array eine neue Zeichenfolge anzuhängen.

```js
const fruits = ["Apple", "Banana"];
const newLength = fruits.push("Orange");
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3
```

### Entfernen des letzten Elements aus einem Array

Dieses Beispiel verwendet die [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)-Methode, um das letzte Element aus dem `fruits`-Array zu entfernen.

```js
const fruits = ["Apple", "Banana", "Orange"];
const removedItem = fruits.pop();
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange
```

> [!NOTE] > `pop()` kann nur verwendet werden, um das letzte Element aus einem Array zu entfernen. Um mehrere Elemente am Ende eines Arrays zu entfernen, siehe das nächste Beispiel.

### Entfernen mehrerer Elemente vom Ende eines Arrays

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um die letzten 3 Elemente aus dem `fruits`-Array zu entfernen.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]
```

### Kürzen eines Arrays auf die ersten N Elemente

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um das `fruits`-Array auf nur die ersten 2 Elemente zu kürzen.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = 2;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]
```

### Entfernen des ersten Elements aus einem Array

Dieses Beispiel verwendet die [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)-Methode, um das erste Element aus dem `fruits`-Array zu entfernen.

```js
const fruits = ["Apple", "Banana"];
const removedItem = fruits.shift();
console.log(fruits);
// ["Banana"]
console.log(removedItem);
// Apple
```

> [!NOTE] > `shift()` kann nur verwendet werden, um das erste Element aus einem Array zu entfernen. Um mehrere Elemente vom Anfang eines Arrays zu entfernen, siehe das nächste Beispiel.

### Entfernen mehrerer Elemente vom Anfang eines Arrays

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um die ersten 3 Elemente aus dem `fruits`-Array zu entfernen.

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

### Hinzufügen eines neuen ersten Elements zu einem Array

Dieses Beispiel verwendet die [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)-Methode, um an Index `0` ein neues Element im `fruits`-Array hinzuzufügen — wodurch es das neue erste Element im Array wird.

```js
const fruits = ["Banana", "Mango"];
const newLength = fruits.unshift("Strawberry");
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3
```

### Entfernen eines einzelnen Elements nach Index

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um die Zeichenfolge `"Banana"` aus dem `fruits`-Array zu entfernen — indem die Indexposition von `"Banana"` angegeben wird.

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

### Entfernen mehrerer Elemente nach Index

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um die Zeichenfolgen `"Banana"` und `"Strawberry"` aus dem `fruits`-Array zu entfernen — indem die Indexposition von `"Banana"` sowie eine Anzahl der insgesamt zu entfernenden Elemente angegeben wird.

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

### Ersetzen mehrerer Elemente in einem Array

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um die letzten 2 Elemente im `fruits`-Array durch neue Elemente zu ersetzen.

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

### Iterieren über ein Array

Dieses Beispiel verwendet eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife, um über das `fruits`-Array zu iterieren und jedes Element in die Konsole zu protokollieren.

```js
const fruits = ["Apple", "Mango", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Apple
// Mango
// Cherry
```

Aber `for...of` ist nur eine von vielen Möglichkeiten, über ein Array zu iterieren; für mehr Möglichkeiten siehe [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration) und die Dokumentation für die Methoden [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), und [`reduceRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) — und siehe das nächste Beispiel, das die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode verwendet.

### Aufrufen einer Funktion für jedes Element in einem Array

Dieses Beispiel verwendet die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode, um eine Funktion für jedes Element im `fruits`-Array aufzurufen; die Funktion sorgt dafür, dass jedes Element zusammen mit der jeweiligen Indexnummer in die Konsole protokolliert wird.

```js
const fruits = ["Apple", "Mango", "Cherry"];
fruits.forEach((item, index, array) => {
  console.log(item, index);
});
// Apple 0
// Mango 1
// Cherry 2
```

### Zusammenführen mehrerer Arrays

Dieses Beispiel verwendet die [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)-Methode, um das `fruits`-Array mit einem `moreFruits`-Array zu verbinden und ein neues `combinedFruits`-Array zu erzeugen. Beachten Sie, dass `fruits` und `moreFruits` unverändert bleiben.

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

### Kopieren eines Arrays

Dieses Beispiel zeigt drei Möglichkeiten, ein neues Array aus dem bestehenden `fruits`-Array zu erstellen: Zuerst durch Verwendung der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), dann mit der [`from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from)-Methode und schließlich mit der [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)-Methode.

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

Alle eingebauten Array-Kopieroperationen ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), und [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)) erstellen {{Glossary("Shallow_copy", "flache Kopien")}}. Wenn Sie stattdessen eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines Arrays möchten, können Sie {{jsxref("JSON.stringify()")}} verwenden, um das Array in eine JSON-Zeichenfolge zu konvertieren, und dann {{jsxref("JSON.parse()")}}, um die Zeichenfolge zurück in ein neues Array zu konvertieren, das vollständig unabhängig vom ursprünglichen Array ist.

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

Sie können auch tiefe Kopien mit der [`structuredClone()`](/de/docs/Web/API/Window/structuredClone)-Methode erstellen, die den Vorteil hat, dass [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in der Quelle in die neue Kopie _übertragen_ statt nur geklont werden können.

Schließlich ist es wichtig zu verstehen, dass das Zuweisen eines vorhandenen Arrays zu einer neuen Variablen keine Kopie des Arrays oder seiner Elemente erstellt. Stattdessen ist die neue Variable lediglich eine Referenz oder ein Alias für das ursprüngliche Array; das heißt, der ursprüngliche Array-Name und der neue Variablenname sind nur zwei Namen für dasselbe Objekt (und werden daher immer als [strikt gleichwertig](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using) bewertet). Wenn Sie also irgendeine Änderung am Wert des ursprünglichen Arrays oder am Wert der neuen Variablen vornehmen, ändern sich beide.

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

### Erstellen eines zweidimensionalen Arrays

Das folgende Beispiel erstellt ein Schachbrett als zweidimensionales Array von Zeichenfolgen. Der erste Zug wird gemacht, indem das `'p'` in `board[6][4]` nach `board[4][4]` verschoben wird. Die alte Position bei `[6][4]` wird leer gemacht.

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

Hier ist die Ausgabe:

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

### Verwendung eines Arrays zur Tabellierung einer Menge von Werten

```js
const values = [];
for (let x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);
```

Ergibt

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

### Erstellen eines Arrays mit dem Ergebnis eines Abgleichs

Das Ergebnis eines Matches zwischen einem {{jsxref("RegExp")}} und einer Zeichenfolge kann ein JavaScript-Array erstellen, das Eigenschaften und Elemente hat, die Informationen über das Match bereitstellen. Ein solches Array wird durch {{jsxref("RegExp.prototype.exec()")}} und {{jsxref("String.prototype.match()")}} zurückgegeben.

Beispielsweise:

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

Für weitere Informationen über das Ergebnis eines Abgleichs siehe die Seiten {{jsxref("RegExp.prototype.exec()")}} und {{jsxref("String.prototype.match()")}}.

### Veränderung des Anfangsarrays in iterativen Methoden

[Iterative Methoden](#iterative_methoden) verändern nicht das Array, auf dem sie aufgerufen werden, aber die als `callbackFn` bereitgestellte Funktion kann es. Der entscheidende Grundsatz ist, dass nur Indizes zwischen 0 und `arrayLength - 1` besucht werden, wobei `arrayLength` die Länge des Arrays zu dem Zeitpunkt ist, an dem die Array-Methode erstmals aufgerufen wurde, aber das an die Callback-Funktion übergebene Element ist der Wert zum Zeitpunkt, zu dem der Index besucht wird. Daher:

- `callbackFn` wird keine Elemente besuchen, die über die anfängliche Länge des Arrays hinaus hinzugefügt werden, als der Aufruf der iterativen Methode begann.
- Änderungen an bereits besuchten Indizes führen nicht dazu, dass `callbackFn` erneut auf ihnen aufgerufen wird.
- Wenn ein bestehendes, noch nicht besuchtes Element des Arrays von `callbackFn` geändert wird, wird bei seinem Aufruf der Wert zum Zeitpunkt des Besuchs des Elements übergeben. Entfernte Elemente werden nicht besucht.

> [!WARNING]
> Gleichzeitige Modifikationen der oben beschriebenen Art führen häufig zu schwer verständlichem Code und sollten im Allgemeinen vermieden werden (außer in speziellen Fällen).

Die folgenden Beispiele verwenden die `forEach`-Methode als Beispiel, aber andere Methoden, die Indizes in aufsteigender Reihenfolge besuchen, funktionieren auf die gleiche Weise. Wir werden zuerst eine Hilfsfunktion definieren:

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

Änderungen an noch nicht besuchten Indizes sind sichtbar, sobald der Index erreicht wird:

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

Änderungen an bereits besuchten Indizes ändern das Iterationsverhalten nicht, auch wenn das Array danach anders sein wird:

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

Das Einfügen von _n_ Elementen an noch nicht besuchten Indizes, die kleiner als die anfängliche Länge des Arrays sind, führt dazu, dass sie besucht werden. Die letzten _n_ Elemente im ursprünglichen Array, die nun einen Index größer als die anfängliche Länge des Arrays haben, werden nicht besucht:

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

Das Einfügen von _n_ Elementen mit einem Index größer als die anfängliche Länge des Arrays führt nicht dazu, dass sie besucht werden:

```js
testSideEffect((arr) => arr.push("new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4, new], index: 1, elem: e2
// array: [e1, e2, e3, e4, new, new], index: 2, elem: e3
// array: [e1, e2, e3, e4, new, new, new], index: 3, elem: e4
// Final array: [e1, e2, e3, e4, new, new, new, new]
```

Das Einfügen von _n_ Elementen an bereits besuchten Indizes führt nicht dazu, dass sie besucht werden, verschiebt jedoch die verbleibenden Elemente um _n_ zurück, sodass der aktuelle Index und die _n - 1_ Elemente davor erneut besucht werden:

```js
testSideEffect((arr, index) => arr.splice(index, 0, "new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [new, e1, e2, e3, e4], index: 1, elem: e1
// array: [new, new, e1, e2, e3, e4], index: 2, elem: e1
// array: [new, new, new, e1, e2, e3, e4], index: 3, elem: e1
// Final array: [new, new, new, new, e1, e2, e3, e4]
// e1 keeps getting visited because it keeps getting shifted back
```

Das Löschen von _n_ Elementen an noch nicht besuchten Indizes führt dazu, dass sie nicht mehr besucht werden. Da das Array geschrumpft ist, besuchen die letzten _n_ Iterationen out-of-bounds-Indizes. Wenn die Methode nicht vorhandene Indizes ignoriert (siehe [Array-Methoden und leere Slots](#array-methoden_und_leere_slots)), werden die letzten _n_ Iterationen übersprungen; andernfalls erhalten sie `undefined`:

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

Das Löschen von _n_ Elementen an bereits besuchten Indizes ändert nichts daran, dass sie besucht wurden, bevor sie gelöscht werden. Da das Array geschrumpft ist, werden die nächsten _n_ Elemente nach dem aktuellen Index übersprungen. Wenn die Methode nicht vorhandene Indizes ignoriert, werden die letzten _n_ Iterationen übersprungen; andernfalls erhalten sie `undefined`:

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

Bei Methoden, die in absteigender Indexreihenfolge iterieren, führt das Einfügen dazu, dass Elemente übersprungen werden, und das Löschen dazu, dass Elemente mehrmals besucht werden. Passen Sie den obigen Code selbst an, um die Auswirkungen zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Leitfaden [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
