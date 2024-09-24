---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{JSRef}}

Das **`Array`**-Objekt ermöglicht, wie in anderen Programmiersprachen, das [Speichern einer Sammlung mehrerer Elemente unter einem einzigen Variablennamen](/de/docs/Learn/JavaScript/First_steps/Arrays) und verfügt über Mitglieder zum [Durchführen von gängigen Array-Operationen](#beispiele).

## Beschreibung

In JavaScript sind Arrays keine [Primitiven](/de/docs/Glossary/Primitive), sondern stattdessen `Array`-Objekte mit den folgenden Kerneigenschaften:

- **JavaScript-Arrays sind vergrößerbar** und **können eine Mischung unterschiedlicher [Datentypen](/de/docs/Web/JavaScript/Data_structures) enthalten**. (Wenn diese Eigenschaften unerwünscht sind, verwenden Sie stattdessen [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays).)
- **JavaScript-Arrays sind keine assoziativen Arrays**, daher können Array-Elemente nicht mit beliebigen Zeichenfolgen als Indizes abgerufen werden, sondern müssen mit nicht-negativen Ganzzahlen (oder ihrer entsprechenden Zeichenform) als Indizes abgerufen werden.
- **JavaScript-Arrays sind [nullbasiert](https://en.wikipedia.org/wiki/Zero-based_numbering)**: Das erste Element eines Arrays befindet sich bei index `0`, das zweite bei index `1` und so weiter — und das letzte Element bei dem Wert der {{jsxref("Array/length", "length")}}-Eigenschaft des Arrays minus `1`.
- **JavaScript [Array-Kopiervorgänge](#ein_array_kopieren) erstellen [flache Kopien](/de/docs/Glossary/Shallow_copy)**. (Alle standardmäßigen eingebauten Kopiervorgänge mit _beliebigen_ JavaScript-Objekten erstellen flache Kopien, anstatt [tiefe Kopien](/de/docs/Glossary/Deep_copy)).

### Array-Indizes

`Array`-Objekte können keine beliebigen Zeichenfolgen als Element-Indexes verwenden (wie in einem [assoziativen Array](https://en.wikipedia.org/wiki/Associative_array)), sondern müssen nicht-negative Ganzzahlen (oder deren entsprechende Zeichenform) verwenden. Das Setzen oder Abrufen über Nicht-Ganzzahlen wird kein Element aus der Array-Liste selbst setzen oder abrufen, sondern eine Variable setzen oder abrufen, die mit der [Objekteigenschaften-Sammlung](/de/docs/Web/JavaScript/Data_structures#properties) dieses Arrays verbunden ist. Die Objekteigenschaften des Arrays und die Liste der Array-Elemente sind getrennt, und die [Durchlauf- und Mutationsoperationen](/de/docs/Web/JavaScript/Guide/Indexed_collections#array_methods) des Arrays können nicht auf diese benannten Eigenschaften angewendet werden.

Array-Elemente sind Objekteigenschaften auf die gleiche Weise, wie `toString` eine Eigenschaft ist (um genau zu sein, `toString()` ist jedoch eine Methode). Trotzdem ergibt der Versuch, auf ein Array-Element wie folgt zuzugreifen, einen Syntaxfehler, weil der Eigenschaftsname ungültig ist:

```js-nolint example-bad
arr.0; // ein Syntaxfehler
```

Die JavaScript-Syntax erfordert, dass Eigenschaften, die mit einer Ziffer beginnen, durch [Klammer-Notation](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties) statt durch [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) aufgerufen werden. Es ist auch möglich, die Array-Indizes zu zitieren (z.B. `years['2']` anstelle von `years[2]`), obwohl dies normalerweise nicht notwendig ist.

Die `2` in `years[2]` wird durch eine implizite `toString`-Konvertierung von der JavaScript-Engine in eine Zeichenfolge umgewandelt. Daher würden `'2'` und `'02'` auf zwei verschiedene Positionen im `years`-Objekt verweisen, und das folgende Beispiel könnte `true` sein:

```js
console.log(years["2"] !== years["02"]);
```

Nur `years['2']` ist ein tatsächlicher Array-Index. `years['02']` ist eine beliebige Zeichenfolgen-Eigenschaft, die bei der Array-Iteration nicht besucht wird.

### Beziehung zwischen `length` und numerischen Eigenschaften

Die {{jsxref("Array/length", "length")}}-Eigenschaft eines JavaScript-Arrays und numerische Eigenschaften sind verbunden.

Mehrere der eingebauten Array-Methoden (z.B. {{jsxref("Array/join", "join()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/indexOf", "indexOf()")}} usw.) berücksichtigen den Wert der {{jsxref("Array/length", "length")}}-Eigenschaft eines Arrays, wenn sie aufgerufen werden.

Andere Methoden (z.B. {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}} usw.) führen ebenfalls zu Aktualisierungen der {{jsxref("Array/length", "length")}}-Eigenschaft eines Arrays.

```js
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
```

Wenn beim Setzen einer Eigenschaft auf ein JavaScript-Array die Eigenschaft ein gültiger Array-Index ist und dieser Index außerhalb der aktuellen Grenzen des Arrays liegt, aktualisiert die Engine die {{jsxref("Array/length", "length")}}-Eigenschaft des Arrays entsprechend:

```js
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

Das Erhöhen der {{jsxref("Array/length", "length")}} erweitert das Array, indem leere Plätze hinzugefügt werden, ohne neue Elemente zu erstellen — nicht einmal `undefined`.

```js
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
```

Das Verringern der {{jsxref("Array/length", "length")}}-Eigenschaft löscht jedoch Elemente.

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

Dies wird weiter auf der {{jsxref("Array/length", "length")}}-Seite erklärt.

### Array-Methoden und leere Slots

Array-Methoden haben unterschiedliche Verhaltensweisen, wenn sie auf leere Slots in [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) stoßen. Im Allgemeinen behandeln ältere Methoden (z.B. `forEach`) leere Slots anders als Indizes, die `undefined` enthalten.

Methoden, die eine spezielle Behandlung für leere Slots haben, beinhalten: {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/copyWithin", "copyWithin()")}}, {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/reduce", "reduce()")}}, {{jsxref("Array/reduceRight", "reduceRight()")}}, {{jsxref("Array/reverse", "reverse()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/sort", "sort()")}}, und {{jsxref("Array/splice", "splice()")}}. Iterationsmethoden wie `forEach` besuchen leere Slots überhaupt nicht. Andere Methoden, wie `concat`, `copyWithin` usw., bewahren leere Plätze beim Kopieren, so dass das Array am Ende immer noch spärlich ist.

```js
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Ausgabe:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']
```

Neuere Methoden (z.B. `keys`) behandeln leere Slots nicht speziell und behandeln sie so, als würden sie `undefined` enthalten. Methoden, die leere Slots mit `undefined`-Elementen gleichsetzen, umfassen: {{jsxref("Array/entries", "entries()")}}, {{jsxref("Array/fill", "fill()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/includes", "includes()")}}, {{jsxref("Array/join", "join()")}}, {{jsxref("Array/keys", "keys()")}}, {{jsxref("Array/toLocaleString", "toLocaleString()")}}, {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}}, {{jsxref("Array/values", "values()")}}, und {{jsxref("Array/with", "with()")}}.

```js
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
// Ausgabe
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']
```

### Kopiermethoden und Mutationsmethoden

Einige Methoden verändern das bestehende Array, auf dem die Methode aufgerufen wurde, nicht, sondern geben stattdessen ein neues Array zurück. Sie tun dies, indem sie zuerst ein neues Array konstruieren und es dann mit Elementen befüllen. Das Kopieren erfolgt immer [_flach_](/de/docs/Glossary/Shallow_copy) — die Methode kopiert nie etwas über das anfangs erstellte Array hinaus. Elemente des ursprünglichen Arrays werden wie folgt in das neue Array kopiert:

- Objekte: Die Objekt-Referenz wird in das neue Array kopiert. Sowohl das Original- als auch das neue Array verweisen auf dasselbe Objekt. Das heißt, wenn ein referenziertes Objekt modifiziert wird, sind die Änderungen in beiden, dem neuen und dem ursprünglichen Array sichtbar.
- Primitive Typen wie Strings, Zahlen und Booleans (nicht {{jsxref("String")}}, {{jsxref("Number")}}, und {{jsxref("Boolean")}} Objekte): deren Werte werden in das neue Array kopiert.

Andere Methoden verändern das Array, auf dem die Methode aufgerufen wurde, in welchem Fall ihr Rückgabewert je nach Methode unterschiedlich ist: manchmal eine Referenz auf dasselbe Array, manchmal die Länge des neuen Arrays.

Die folgenden Methoden erstellen neue Arrays, indem sie [`this.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) aufrufen, um den zu verwendenden Konstruktor zu bestimmen: {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/slice", "slice()")}}, und {{jsxref("Array/splice", "splice()")}} (um das zurückgegebene Array der entfernten Elemente zu konstruieren).

Die folgenden Methoden erstellen immer neue Arrays mit dem `Array`-Basiskonstruktor: {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}}, und {{jsxref("Array/with", "with()")}}.

Die folgende Tabelle listet die Methoden, die das ursprüngliche Array verändern, und die entsprechenden nicht-verändernden Alternativen auf:

| Mutierende Methode                              | Nicht-mutierende Alternative                             |
| ----------------------------------------------- | -------------------------------------------------------- |
| {{jsxref("Array/copyWithin", "copyWithin()")}}  | Keine Einzelfunktions-Alternative                        |
| {{jsxref("Array/fill", "fill()")}}              | Keine Einzelfunktions-Alternative                        |
| {{jsxref("Array/pop", "pop()")}}                | {{jsxref("Array/slice", "slice(0, -1)")}}                |
| {{jsxref("Array/push", "push(v1, v2)")}}        | {{jsxref("Array/concat", "concat([v1, v2])")}}           |
| {{jsxref("Array/reverse", "reverse()")}}        | {{jsxref("Array/toReversed", "toReversed()")}}           |
| {{jsxref("Array/shift", "shift()")}}            | {{jsxref("Array/slice", "slice(1)")}}                    |
| {{jsxref("Array/sort", "sort()")}}              | {{jsxref("Array/toSorted", "toSorted()")}}               |
| {{jsxref("Array/splice", "splice()")}}          | {{jsxref("Array/toSpliced", "toSpliced()")}}             |
| {{jsxref("Array/unshift", "unshift(v1, v2)")}}  | {{jsxref("Array/toSpliced", "toSpliced(0, 0, v1, v2)")}} |

Ein einfacher Weg, eine mutierende Methode in eine nicht-mutierende Alternative zu verwandeln, ist die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder {{jsxref("Array/slice", "slice()")}} zu verwenden, um zuerst eine Kopie zu erstellen:

```js-nolint
arr.copyWithin(0, 1, 2); // mutiert arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // mutiert arr nicht
const arr3 = [...arr].copyWithin(0, 1, 2); // mutiert arr nicht
```

### Iterative Methoden

Viele Array-Methoden nehmen eine Callback-Funktion als Argument. Die Callback-Funktion wird sequenziell und maximal einmal für jedes Element im Array aufgerufen, und der Rückgabewert der Callback-Funktion wird verwendet, um den Rückgabewert der Methode zu bestimmen. Sie alle besitzen das gleiche Signaturmuster:

```js-nolint
method(callbackFn, thisArg)
```

Dabei nimmt `callbackFn` drei Argumente entgegen:

- `element`
  - : Das aktuelle, im Array verarbeitete Element.
- `index`
  - : Der Index des aktuellen, im Array verarbeiteten Elements.
- `array`
  - : Das Array, auf dem die Methode aufgerufen wurde.

Was `callbackFn` zurückgeben soll, hängt von der aufgerufenen Array-Methode ab.

Das `thisArg`-Argument (standardmäßig `undefined`) wird als `this`-Wert verwendet, wenn `callbackFn` aufgerufen wird. Der letztendlich sichtbare `this`-Wert im `callbackFn` wird gemäß [den üblichen Regeln](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt: Falls `callbackFn` [nicht im strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) ist, werden primitive `this`-Werte in Objekte umgewandelt, und `undefined`/`null` wird mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ersetzt. Das `thisArg`-Argument ist irrelevant für jedes `callbackFn`, das mit einer [Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definiert ist, da Arrow-Funktionen kein eigenes `this` {{Glossary("binding")}} haben.

Das `array`-Argument, das an `callbackFn` übergeben wird, ist besonders nützlich, wenn Sie während der Iteration einen anderen Index lesen möchten, da Sie nicht immer eine bestehende Variable haben, die auf das aktuelle Array verweist. Allgemein sollten Sie das Array nicht während der Iteration verändern (siehe [Veränderung des ursprünglichen Arrays in iterativen Methoden](#veränderung_des_ursprünglichen_arrays_in_iterativen_methoden)), aber Sie können dieses Argument auch dafür nutzen. Das `array`-Argument ist _nicht_ das Array, das aktuell aufgebaut wird, im Falle von Methoden wie `map()`, `filter()`, und `flatMap()` — es gibt keine Möglichkeit, über die Callback-Funktion auf das gerade aufzubauende Array zuzugreifen.

Alle iterativen Methoden sind [kopierend](#kopiermethoden_und_mutationsmethoden) und [generisch](#generische_array-methoden), obwohl sie sich unterschiedlich bei [leeren Slots](#array-methoden_und_leere_slots) verhalten.

Die folgenden Methoden sind iterativ: {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/map", "map()")}}, und {{jsxref("Array/some", "some()")}}.

Insbesondere {{jsxref("Array/every", "every()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, und {{jsxref("Array/some", "some()")}} rufen `callbackFn` nicht immer für jedes Element auf — sie beenden die Iteration, sobald der Rückgabewert bestimmt ist.

Die Methoden {{jsxref("Array/reduce", "reduce()")}} und {{jsxref("Array/reduceRight", "reduceRight()")}} nehmen ebenfalls eine Callback-Funktion entgegen und führen sie maximal einmal für jedes Element im Array aus, jedoch sind ihre Signaturen leicht unterschiedlich zu typischen iterativen Methoden (zum Beispiel akzeptieren sie `thisArg` nicht).

Die Methode {{jsxref("Array/sort", "sort()")}} akzeptiert ebenfalls eine Callback-Funktion, ist aber keine iterative Methode. Sie verändert das Array an Ort und Stelle, akzeptiert `thisArg` nicht, und kann die Callback-Funktion mehrfach für einen Index aufrufen.

Iterative Methoden iterieren das Array wie folgt (mit vielen technischen Details ausgelassen):

```js
function method(callbackFn, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      const result = callbackFn.call(thisArg, this[i], i, this);
      // Machen Sie etwas mit dem Ergebnis; möglicherweise frühzeitig zurückkehren
    }
  }
}
```

Beachten Sie Folgendes:

1. Nicht alle Methoden führen den Test `i in this` durch. Die Methoden `find`, `findIndex`, `findLast` und `findLastIndex` tun dies nicht, andere Methoden jedoch schon.
2. Die `length` wird vor Beginn der Schleife gespeichert. Dies betrifft, wie Einfügungen und Löschungen während der Iteration gehandhabt werden (siehe [Veränderung des ursprünglichen Arrays in iterativen Methoden](#veränderung_des_ursprünglichen_arrays_in_iterativen_methoden)).
3. Die Methode speichert den Inhalt des Arrays nicht, daher könnte ein neuer Wert beobachtet werden, wenn ein Index während der Iteration verändert wird.
4. Der obige Code iteriert das Array in aufsteigender Reihenfolge der Indizes. Einige Methoden iterieren in absteigender Reihenfolge (`for (let i = length - 1; i >= 0; i--)`): `reduceRight()`, `findLast()`, und `findLastIndex()`.
5. `reduce` und `reduceRight` haben leicht unterschiedliche Signaturen und beginnen nicht immer beim ersten/letzten Element.

### Generische Array-Methoden

Array-Methoden sind immer generisch – sie greifen nicht auf interne Daten des Array-Objekts zu. Sie greifen nur auf die Array-Elemente über die `length`-Eigenschaft und die indizierten Elemente zu. Dies bedeutet, dass sie auch auf array-ähnliche Objekte aufgerufen werden können.

```js
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
```

#### Normalisierung der `length`-Eigenschaft

Die `length`-Eigenschaft wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) und dann in den Bereich zwischen 0 und 2<sup>53</sup> - 1 gegrenzt. `NaN` wird zu `0`, daher verhält es sich so, als hätte die `length`-Eigenschaft den Wert `0`, selbst wenn sie nicht vorhanden ist oder `undefined` ist.

Die Sprache vermeidet es, `length` auf eine [unsichere Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) zu setzen. Alle eingebauten Methoden werfen einen {{jsxref("TypeError")}}, wenn `length` auf eine Zahl größer als 2<sup>53</sup> - 1 gesetzt wird. Da die {{jsxref("Array/length", "length")}}-Eigenschaft von Arrays jedoch einen Fehler wirft, wenn sie auf größer als 2<sup>32</sup> - 1 gesetzt wird, wird die Schwelle für sichere Ganzzahlen normalerweise nicht erreicht, es sei denn, die Methode wird auf einem Nicht-Array-Objekt aufgerufen.

```js
Array.prototype.flat.call({}); // []
```

Einige Array-Methoden setzen die `length`-Eigenschaft des Array-Objekts. Sie setzen den Wert immer nach der Normalisierung, sodass `length` immer als Ganzzahl endet.

```js
const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0
```

#### Array-ähnliche Objekte

Der Begriff [_array-ähnliches Objekt_](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) bezieht sich auf jedes Objekt, das während des `length`-Konvertierungsprozesses, der oben beschrieben wurde, keinen Fehler wirft. In der Praxis wird erwartet, dass ein solches Objekt tatsächlich eine `length`-Eigenschaft hat und indexierte Elemente im Bereich von `0` bis `length - 1` hat. (Wenn es nicht alle Indizes hat, ist es funktional äquivalent zu einem [spärlichen Array](#array-methoden_und_leere_slots).) Jede Ganzzahl, die kleiner als null oder größer als `length - 1` ist, wird ignoriert, wenn eine Array-Methode auf ein array-ähnliches Objekt angewendet wird.

Viele DOM-Objekte sind array-ähnlich – zum Beispiel [`NodeList`](/de/docs/Web/API/NodeList) und [`HTMLCollection`](/de/docs/Web/API/HTMLCollection). Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt ist ebenfalls array-ähnlich. Sie können Array-Methoden auf sie anwenden, selbst wenn sie diese Methoden nicht selbst haben.

```js
function f() {
  console.log(Array.prototype.join.call(arguments, "+"));
}

f("a", "b"); // 'a+b'
```

## Konstruktor

- {{jsxref("Array/Array", "Array()")}}
  - : Erstellt ein neues `Array`-Objekt.

## Statische Eigenschaften

- [`Array[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
  - : Gibt den `Array`-Konstruktor zurück.

## Statische Methoden

- {{jsxref("Array.from()")}}
  - : Erstellt eine neue `Array`-Instanz aus einem iterierbaren oder array-ähnlichen Objekt.
- {{jsxref("Array.fromAsync()")}}
  - : Erstellt eine neue `Array`-Instanz aus einem asynchronen iterierbaren, iterierbaren oder array-ähnlichen Objekt.
- {{jsxref("Array.isArray()")}}
  - : Gibt `true` zurück, wenn das Argument ein Array ist, oder `false` andernfalls.
- {{jsxref("Array.of()")}}
  - : Erstellt eine neue `Array`-Instanz mit einer variablen Anzahl an Argumenten, unabhängig von der Anzahl oder dem Typ der Argumente.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Array.prototype` definiert und werden von allen `Array`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Array.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Array`-Instanzen ist der initiale Wert der {{jsxref("Array/Array", "Array")}}-Konstruktor.
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
  - : Enthält Eigenschaftsnamen, die in der ECMAScript-Standardversion vor ES2015 nicht enthalten sind und die für [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Aussagenbindungszwecke ignoriert werden.

Diese Eigenschaften sind eigene Eigenschaften jeder `Array`-Instanz.

- {{jsxref("Array/length", "length")}}
  - : Gibt die Anzahl der Elemente in einem Array wieder.

## Instanz-Methoden

- {{jsxref("Array.prototype.at()")}}
  - : Gibt das Array-Element beim angegebenen Index zurück. Akzeptiert negative Ganzzahlen, die rückwärts vom letzten Element zählen.
- {{jsxref("Array.prototype.concat()")}}
  - : Gibt ein neues Array zurück, das das aufrufende Array mit anderen Array(s) und/oder Wert(en) verbunden ist.
- {{jsxref("Array.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Array-Elementen innerhalb eines Arrays.
- {{jsxref("Array.prototype.entries()")}}
  - : Gibt ein neues [_Array-Iterator-Objekt_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) zurück, das die Schlüssel/Wert-Paare für jeden Index in einem Array enthält.
- {{jsxref("Array.prototype.every()")}}
  - : Gibt `true` zurück, wenn jedes Element im aufrufenden Array die Testfunktion erfüllt.
- {{jsxref("Array.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays von einem Startindex bis zu einem Endindex mit einem statischen Wert.
- {{jsxref("Array.prototype.filter()")}}
  - : Gibt ein neues Array zurück, das alle Elemente des aufrufenden Arrays enthält, für die die bereitgestellte Filterfunktion `true` zurückgibt.
- {{jsxref("Array.prototype.find()")}}
  - : Gibt den Wert des ersten Elements im Array zurück, das die bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein geeignetes Element gefunden wird.
- {{jsxref("Array.prototype.findIndex()")}}
  - : Gibt den Index des ersten Elements im Array zurück, das die bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein geeignetes Element gefunden wurde.
- {{jsxref("Array.prototype.findLast()")}}
  - : Gibt den Wert des letzten Elements im Array zurück, das die bereitgestellte Testfunktion erfüllt, oder `undefined`, wenn kein geeignetes Element gefunden wird.
- {{jsxref("Array.prototype.findLastIndex()")}}
  - : Gibt den Index des letzten Elements im Array zurück, das die bereitgestellte Testfunktion erfüllt, oder `-1`, wenn kein geeignetes Element gefunden wurde.
- {{jsxref("Array.prototype.flat()")}}
  - : Gibt ein neues Array zurück, in dem alle Unter-Array-Elemente rekursiv bis zur angegebenen Tiefe zusammengeführt wurden.
- {{jsxref("Array.prototype.flatMap()")}}
  - : Gibt ein neues Array zurück, das durch Anwenden einer angegebenen Callback-Funktion auf jedes Element des aufrufenden Arrays gebildet wird, und dann das Ergebnis um eine Ebene flach macht.
- {{jsxref("Array.prototype.forEach()")}}
  - : Ruft eine Funktion für jedes Element im aufrufenden Array auf.
- {{jsxref("Array.prototype.includes()")}}
  - : Bestimmt, ob das aufrufende Array einen Wert enthält und gibt `true` oder `false` je nach Fall zurück.
- {{jsxref("Array.prototype.indexOf()")}}
  - : Gibt den ersten (geringsten) Index zurück, an dem ein bestimmtes Element im aufrufenden Array gefunden werden kann.
- {{jsxref("Array.prototype.join()")}}
  - : Verbindet alle Elemente eines Arrays zu einem String.
- {{jsxref("Array.prototype.keys()")}}
  - : Gibt ein neues [_Array-Iterator-Objekt_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) zurück, das die Schlüssel für jeden Index im aufrufenden Array enthält.
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index zurück, an dem ein bestimmtes Element im aufrufenden Array gefunden werden kann, oder `-1`, wenn keines gefunden wurde.
- {{jsxref("Array.prototype.map()")}}
  - : Gibt ein neues Array zurück, das die Ergebnisse des Aufrufs einer Funktion auf jedem Element im aufrufenden Array enthält.
- {{jsxref("Array.prototype.pop()")}}
  - : Entfernt das letzte Element aus einem Array und gibt dieses Element zurück.
- {{jsxref("Array.prototype.push()")}}
  - : Fügt ein oder mehrere Elemente an das Ende eines Arrays hinzu und gibt die neue `length` des Arrays zurück.
- {{jsxref("Array.prototype.reduce()")}}
  - : Führt eine benutzerdefinierte "reducer" Callback-Funktion auf jedem Element des Arrays (von links nach rechts) aus, um es auf einen Einzelwert zu reduzieren.
- {{jsxref("Array.prototype.reduceRight()")}}
  - : Führt eine benutzerdefinierte "reducer" Callback-Funktion auf jedem Element des Arrays (von rechts nach links) aus, um es auf einen Einzelwert zu reduzieren.
- {{jsxref("Array.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays _an Ort und Stelle_ um. (Das erste wird das letzte, das letzte wird das erste.)
- {{jsxref("Array.prototype.shift()")}}
  - : Entfernt das erste Element aus einem Array und gibt dieses Element zurück.
- {{jsxref("Array.prototype.slice()")}}
  - : Extrahiert einen Abschnitt des aufrufenden Arrays und gibt ein neues Array zurück.
- {{jsxref("Array.prototype.some()")}}
  - : Gibt `true` zurück, wenn mindestens ein Element im aufrufenden Array die bereitgestellte Testfunktion erfüllt.
- {{jsxref("Array.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays an Ort und Stelle und gibt das Array zurück.
- {{jsxref("Array.prototype.splice()")}}
  - : Fügt Elemente ein und/oder entfernt Elemente aus einem Array.
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : Gibt einen lokalisierten String zurück, der das aufrufende Array und seine Elemente darstellt. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}}-Methode.
- {{jsxref("Array.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das ursprüngliche Array zu verändern.
- {{jsxref("Array.prototype.toSorted()")}}
  - : Gibt ein neues Array mit den Elementen in aufsteigender Reihenfolge zurück, ohne das ursprüngliche Array zu verändern.
- {{jsxref("Array.prototype.toSpliced()")}}
  - : Gibt ein neues Array mit einigen entfernten und/oder ersetzten Elementen an einem bestimmten Index zurück, ohne das ursprüngliche Array zu verändern.
- {{jsxref("Array.prototype.toString()")}}
  - : Gibt einen String zurück, der das aufrufende Array und seine Elemente darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Array.prototype.unshift()")}}
  - : Fügt ein oder mehrere Elemente an den Anfang eines Arrays hinzu und gibt die neue `length` des Arrays zurück.
- {{jsxref("Array.prototype.values()")}}
  - : Gibt ein neues [_Array-Iterator-Objekt_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) zurück, das die Werte für jeden Index im Array enthält.
- {{jsxref("Array.prototype.with()")}}
  - : Gibt ein neues Array zurück, bei dem das Element am angegebenen Index mit dem angegebenen Wert ersetzt wird, ohne das ursprüngliche Array zu verändern.
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
  - : Ein Alias für die [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values)-Methode standardmäßig.

## Beispiele

Dieser Abschnitt bietet einige Beispiele zu gängigen Array-Operationen in JavaScript.

> [!NOTE]
> Wenn Sie noch nicht mit den Grundlagen von Arrays vertraut sind, sollten Sie zuerst [JavaScript Erste Schritte: Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays) lesen, der [erklärt, was Arrays sind](/de/docs/Learn/JavaScript/First_steps/Arrays#what_is_an_array) und weitere Beispiele zu gängigen Array-Operationen enthält.

### Ein Array erstellen

Dieses Beispiel zeigt drei Möglichkeiten, ein neues Array zu erstellen: zuerst mit dem [Array-Literal-Notation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation), dann mit dem [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)-Konstruktor und schließlich mit [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), um das Array aus einem String zu erstellen.

```js
// 'fruits'-Array erstellt mit der Array-Literal-Notation.
const fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2

// 'fruits2'-Array erstellt mit dem Array()-Konstruktor.
const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);
// 2

// 'fruits3'-Array erstellt mit String.prototype.split().
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length);
// 2
```

### Einen String aus einem Array erstellen

Dieses Beispiel verwendet die [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join)-Methode, um einen String aus dem `fruits`-Array zu erstellen.

```js
const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Apple, Banana"
```

### Auf ein Array-Element über seinen Index zugreifen

Dieses Beispiel zeigt, wie Sie auf Elemente im `fruits`-Array zugreifen, indem Sie die Indexnummer ihrer Position im Array angeben.

```js
const fruits = ["Apple", "Banana"];

// Der Index des ersten Elements eines Arrays ist immer 0.
fruits[0]; // Apple

// Der Index des zweiten Elements eines Arrays ist immer 1.
fruits[1]; // Banana

// Der Index des letzten Elements eines Arrays ist immer
// um eins kleiner als die Länge des Arrays.
fruits[fruits.length - 1]; // Banana

// Die Verwendung einer Indexnummer, die größer als die Länge des Arrays ist,
// gibt 'undefined' zurück.
fruits[99]; // undefined
```

### Den Index eines Elements in einem Array finden

Dieses Beispiel verwendet die [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)-Methode, um die Position (den Index) des Strings `"Banana"` im `fruits`-Array zu finden.

```js
const fruits = ["Apple", "Banana"];
console.log(fruits.indexOf("Banana"));
// 1
```

### Prüfen, ob ein Array ein bestimmtes Element enthält

Dieses Beispiel zeigt zwei Möglichkeiten, um zu prüfen, ob das `fruits`-Array `"Banana"` und `"Cherry"` enthält: zuerst mit der [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)-Methode und dann mit der [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)-Methode, um auf einen Indexwert zu testen, der nicht `-1` ist.

```js
const fruits = ["Apple", "Banana"];

fruits.includes("Banana"); // true
fruits.includes("Cherry"); // false

// Wenn indexOf() nicht -1 zurückgibt, enthält das Array das angegebene Element.
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; // false
```

### Ein Element an ein Array anhängen

Dieses Beispiel verwendet die [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push)-Methode, um einen neuen String an das `fruits`-Array anzuhängen.

```js
const fruits = ["Apple", "Banana"];
const newLength = fruits.push("Orange");
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3
```

### Das letzte Element aus einem Array entfernen

Dieses Beispiel verwendet die [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)-Methode, um das letzte Element aus dem `fruits`-Array zu entfernen.

```js
const fruits = ["Apple", "Banana", "Orange"];
const removedItem = fruits.pop();
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange
```

> **Hinweis:** `pop()` kann nur verwendet werden, um das letzte Element aus einem Array zu entfernen. Um mehrere Elemente vom Ende eines Arrays zu entfernen, siehe das nächste Beispiel.

### Mehrere Elemente vom Ende eines Arrays entfernen

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um die letzten 3 Elemente vom `fruits`-Array zu entfernen.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]
```

### Ein Array auf seine ersten N Elemente reduzieren

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um das `fruits`-Array nur auf seine ersten 2 Elemente zu reduzieren.

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

Dieses Beispiel verwendet die [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)-Methode, um das erste Element aus dem `fruits`-Array zu entfernen.

```js
const fruits = ["Apple", "Banana"];
const removedItem = fruits.shift();
console.log(fruits);
// ["Banana"]
console.log(removedItem);
// Apple
```

> **Hinweis:** `shift()` kann nur verwendet werden, um das erste Element aus einem Array zu entfernen. Um mehrere Elemente vom Anfang eines Arrays zu entfernen, siehe das nächste Beispiel.

### Mehrere Elemente vom Anfang eines Arrays entfernen

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um die ersten 3 Elemente vom `fruits`-Array zu entfernen.

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

Dieses Beispiel verwendet die [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)-Methode, um am Index `0` ein neues Element zum `fruits`-Array hinzuzufügen und es zum neuen ersten Element im Array zu machen.

```js
const fruits = ["Banana", "Mango"];
const newLength = fruits.unshift("Strawberry");
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3
```

### Ein einzelnes Element nach Index entfernen

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um den String `"Banana"` aus dem `fruits`-Array zu entfernen, indem der Index des Elements `"Banana"` angegeben wird.

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

### Mehrere Elemente nach Index entfernen

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um die Strings `"Banana"` und `"Strawberry"` aus dem `fruits`-Array zu entfernen, indem der Index von `"Banana"` sowie eine Anzahl von zu entfernenden Elementen angegeben wird.

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

### Über ein Array iterieren

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

Aber `for...of` ist nur eine von vielen Möglichkeiten, über jedes Array zu iterieren; für weitere Möglichkeiten siehe [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration) und die Dokumentation zu den Methoden [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) und [`reduceRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) — und sehen Sie sich das nächste Beispiel an, welches die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode verwendet.

### Eine Funktion auf jedes Element in einem Array aufrufen

Dieses Beispiel verwendet die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode, um eine Funktion auf jedes Element im `fruits`-Array aufzurufen; die Funktion bewirkt, dass jedes Element in die Konsole geloggt wird, zusammen mit der Indexnummer des Elements.

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

Dieses Beispiel verwendet die [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)-Methode, um das `fruits`-Array mit einem `moreFruits`-Array zu kombinieren und ein neues `combinedFruits`-Array zu erzeugen. Beachten Sie, dass `fruits` und `moreFruits` unverändert bleiben.

```js
const fruits = ["Apple", "Banana", "Strawberry"];
const moreFruits = ["Mango", "Cherry"];
const combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);
// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// Das 'fruits'-Array bleibt unverändert.
console.log(fruits);
// ["Apple", "Banana", "Strawberry"]

// Das 'moreFruits'-Array bleibt ebenfalls unverändert.
console.log(moreFruits);
// ["Mango", "Cherry"]
```

### Ein Array kopieren

Dieses Beispiel zeigt drei Möglichkeiten, ein neues Array aus dem bestehenden `fruits`-Array zu erstellen: zuerst durch [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), dann durch die Verwendung der [`from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from)-Methode und schließlich durch die Verwendung der [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)-Methode.

```js
const fruits = ["Strawberry", "Mango"];

// Erstellen einer Kopie mit Spread-Syntax.
const fruitsCopy = [...fruits];
// ["Strawberry", "Mango"]

// Erstellen einer Kopie mit der from()-Methode.
const fruitsCopy2 = Array.from(fruits);
// ["Strawberry", "Mango"]

// Erstellen einer Kopie mit der slice()-Methode.
const fruitsCopy3 = fruits.slice();
// ["Strawberry", "Mango"]
```

Alle eingebauten Array-Kopiervorgänge ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)) erstellen [flache Kopien](/de/docs/Glossary/Shallow_copy). Wenn Sie stattdessen eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) eines Arrays wünschen, können Sie {{jsxref("JSON.stringify()")}} verwenden, um das Array in einen JSON-String zu konvertieren, und dann {{jsxref("JSON.parse()")}}, um den String zurück in ein neues Array zu konvertieren, das vollkommen unabhängig vom ursprünglichen Array ist.

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

Sie können auch tiefe Kopien mit der [`structuredClone()`](/de/docs/Web/API/structuredClone)-Methode erstellen, die den Vorteil bietet, dass [transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in der Quelle an die neue Kopie _übertragen_ werden können, anstatt nur geklont zu werden.

Schließlich ist es wichtig zu verstehen, dass das Zuweisen eines existierenden Arrays zu einer neuen Variable keine Kopie des Arrays oder seiner Elemente erstellt. Stattdessen ist die neue Variable nur eine Referenz, oder ein Alias, für das ursprüngliche Array; das heißt, der Name des ursprünglichen Arrays und der neue Variablenname sind nur zwei Namen für dasselbe Objekt (und werden daher immer als [streng gleichwertig](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using) bewertet). Daher, wenn Sie irgendeine Änderung entweder am Wert des ursprünglichen Arrays oder am Wert der neuen Variablen vornehmen, ändert sich auch das andere:

```js
const fruits = ["Strawberry", "Mango"];
const fruitsAlias = fruits;
// 'fruits' und 'fruitsAlias' sind dasselbe Objekt, streng gleichwertig.
fruits === fruitsAlias; // true
// Jede Änderung am 'fruits'-Array ändert auch 'fruitsAlias'.
fruits.unshift("Apple", "Banana");
console.log(fruits);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
console.log(fruitsAlias);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
```

### Ein zweidimensionales Array erstellen

Das Folgende erstellt ein Schachbrett als ein zweidimensionales Array von Strings. Der erste Zug wird gemacht, indem der `'p'` in `board[6][4]` nach `board[4][4]` kopiert wird. Die alte Position bei `[6][4]` wird leer gemacht.

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

// Bewege Bauern vor 2
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

### Ein Array verwenden, um eine Reihe von Werten zu tabellieren

```js
const values = [];
for (let x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);
```

Erzeugt

```plain
// Die erste Spalte ist der Index
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

### Ein Array mit dem Ergebnis eines Matches erstellen

Das Ergebnis eines Matches zwischen einem {{jsxref("RegExp")}} und einem String kann ein JavaScript-Array erzeugen, das Eigenschaften und Elemente hat, die Informationen über das Match liefern. Ein solches Array wird von {{jsxref("RegExp.prototype.exec()")}} und {{jsxref("String.prototype.match()")}} zurückgegeben.

Zum Beispiel:

```js
// Matche ein 'd', gefolgt von einem oder mehreren 'b's, gefolgt von einem 'd'
// Erinnern an gematchte b's und das folgende d
// Groß-/Kleinschreibung ignorieren

const myRe = /d(b+)(d)/i;
const execResult = myRe.exec("cdbBdbsbz");

console.log(execResult.input); // 'cdbBdbsbz'
console.log(execResult.index); // 1
console.log(execResult); // [ "dbBd", "bB", "d" ]
```

Für weitere Informationen über das Ergebnis eines Matches, siehe die Seiten {{jsxref("RegExp.prototype.exec()")}} und {{jsxref("String.prototype.match()")}}.

### Veränderung des ursprünglichen Arrays in iterativen Methoden

[Iterative Methoden](#iterative_methoden) verändern das Array, auf dem sie aufgerufen werden, nicht, aber die Funktion, die als `callbackFn` bereitgestellt wird, kann dies tun. Der entscheidende Grundsatz, den Sie sich merken sollten, ist, dass nur Indizes zwischen 0 und `arrayLength - 1` besucht werden, wobei `arrayLength` die Länge des Arrays zum Zeitpunkt des Beginns des Aufrufs der Array-Methode ist, aber das Element, das dem Callback übergeben wird, der Wert ist, der zu dem Zeitpunkt des Besuchs des jeweiligen Index ist. Daher:

- `callbackFn` wird keine Elemente besuchen, die über die anfängliche Länge des Arrays hinaus hinzugefügt werden, wenn der Aufruf der iterativen Methode begann.
- Änderungen an bereits besuchten Indizes führen nicht dazu, dass `callbackFn` erneut für diese aufgerufen wird.
- Wenn ein bestehendes, noch ungeöffnetes Element des Arrays durch `callbackFn` geändert wird, wird der Wert, der an den `callbackFn` übergeben wird, der Wert zum Zeitpunkt des Besuchs dieses Elements sein. Entfernte Elemente werden nicht besucht.

> [!WARNING]
> Gleichzeitig auftretende Modifikationen der oben beschriebenen Art führen häufig zu schwer verständlichem Code und sollten im Allgemeinen vermieden werden (außer in speziellen Fällen).

Die folgenden Beispiele verwenden die `forEach`-Methode als Beispiel, aber andere Methoden, die Indizes in aufsteigender Reihenfolge besuchen, funktionieren auf die gleiche Weise. Wir definieren zuerst eine Hilfsfunktion:

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

Änderungen an nicht besuchten Indizes werden sichtbar, sobald der Index erreicht ist:

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

Änderungen an bereits besuchten Indizes ändern nicht das Iterationsverhalten, obwohl das Array danach anders sein wird:

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

Das Einfügen von _n_ Elementen an nicht besuchten Indizes, die kleiner als die anfängliche Array-Länge sind, wird sie besuchen. Die letzten _n_ Elemente im ursprünglichen Array, die jetzt einen Index größer als die anfängliche Array-Länge haben, werden nicht besucht:

```js
testSideEffect((arr, index) => {
  if (index === 1) arr.splice(2, 0, "new");
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4], index: 1, elem: e2
// array: [e1, e2, new, e3, e4], index: 2, elem: new
// array: [e1, e2, new, e3, e4], index: 3, elem: e3
// Final array: [e1, e2, new, e3, e4]
// e4 wird nicht besucht, weil es jetzt den Index 4 hat
```

Das Einfügen von _n_ Elementen mit einem Index größer als die anfängliche Array-Länge wird sie nicht besuchen lassen:

```js
testSideEffect((arr) => arr.push("new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4, new], index: 1, elem: e2
// array: [e1, e2, e3, e4, new, new], index: 2, elem: e3
// array: [e1, e2, e3, e4, new, new, new], index: 3, elem: e4
// Final array: [e1, e2, e3, e4, new, new, new, new]
```

Das Einfügen von _n_ Elementen bei bereits besuchten Indizes wird sie nicht besuchen lassen, aber es verschiebt die verbleibenden Elemente um _n_ zurück, sodass der aktuelle Index und die _n - 1_ Elemente vorher erneut besucht werden:

```js
testSideEffect((arr, index) => arr.splice(index, 0, "new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [new, e1, e2, e3, e4], index: 1, elem: e1
// array: [new, new, e1, e2, e3, e4], index: 2, elem: e1
// array: [new, new, new, e1, e2, e3, e4], index: 3, elem: e1
// Final array: [new, new, new, new, e1, e2, e3, e4]
// e1 wird immer wieder besucht, da es immer wieder nach hinten verschoben wird
```

Das Löschen von _n_ Elementen bei nicht besuchten Indizes wird sie nicht mehr besuchen lassen. Da das Array geschrumpft ist, werden die letzten _n_ Iterationen nicht besetzte Indizes besuchen. Wenn die Methode nicht existierende Indizes ignoriert (siehe [Array-Methoden und leere Slots](#array-methoden_und_leere_slots)), werden die letzten _n_ Iterationen übersprungen; andernfalls erhalten sie `undefined`:

```js
testSideEffect((arr, index) => {
  if (index === 1) arr.splice(2, 1);
});
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4], index: 1, elem: e2
// array: [e1, e2, e4], index: 2, elem: e4
// Final array: [e1, e2, e4]
// Besucht nicht den Index 3, da er außerhalb der Grenzen liegt

// Vergleichen Sie dies mit find(), das nicht existierende Indizes als undefined behandelt:
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

Das Löschen von _n_ Elementen bei bereits besuchten Indizes ändert nicht die Tatsache, dass sie besucht wurden, bevor sie gelöscht werden. Da das Array geschrumpft ist, werden die nächsten _n_ Elemente nach dem aktuellen Index übersprungen. Wenn die Methode nicht existierende Indizes ignoriert, werden die letzten _n_ Iterationen übersprungen; andernfalls erhalten sie `undefined`:

```js
testSideEffect((arr, index) => arr.splice(index, 1));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// Besucht e2 nicht, weil e2 jetzt den Index 0 hat, der bereits besucht wurde
// array: [e2, e3, e4], index: 1, elem: e3
// Besucht e4 nicht, weil e4 jetzt den Index 1 hat, der bereits besucht wurde
// Final array: [e2, e4]
// Index 2 ist außerhalb der Grenzen, daher wird er nicht besucht

// Vergleichen Sie dies mit find(), das nicht existierende Indizes als undefined behandelt:
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

Für Methoden, die in absteigender Indexreihenfolge iterieren, führt das Einfügen dazu, dass Elemente übersprungen werden, und das Löschen dazu, dass Elemente mehrfach besucht werden. Passen Sie den obigen Code selbst an, um die Effekte zu sehen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
