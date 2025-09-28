---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
l10n:
  sourceCommit: 4bfeb5a89c1528da7cb7847a9ccb93f9b00290f0
---

Das **`Array`**-Objekt, ähnlich wie Arrays in anderen Programmiersprachen, ermöglicht das [Speichern einer Sammlung von mehreren Elementen unter einem einzigen Variablennamen](/de/docs/Learn_web_development/Core/Scripting/Arrays) und enthält Methoden zum [Durchführen gängiger Array-Operationen](#beispiele).

## Beschreibung

In JavaScript sind Arrays keine {{Glossary("Primitive", "Primitiven")}}, sondern `Array`-Objekte mit den folgenden Kernmerkmalen:

- **JavaScript-Arrays sind anpassbar** und **können eine Mischung verschiedener [Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures)** enthalten. (Wenn diese Eigenschaften unerwünscht sind, verwenden Sie stattdessen [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)).
- **JavaScript-Arrays sind keine assoziativen Arrays**, daher können Array-Elemente nicht mit beliebigen Zeichenfolgen als Indexe angesprochen werden, sondern müssen mit nicht-negativen ganzen Zahlen (oder deren entsprechender Zeichenfolgenform) angesprochen werden.
- **JavaScript-Arrays sind [nullbasiert](https://en.wikipedia.org/wiki/Zero-based_numbering)**: das erste Element eines Arrays hat den Index `0`, das zweite den Index `1` usw. — das letzte Element hat den Wert der {{jsxref("Array/length", "length")}}-Eigenschaft des Arrays minus `1`.
- **JavaScript-[Array-Kopieroperationen](#ein_array_kopieren) erstellen {{Glossary("Shallow_copy", "flache Kopien")}}**. (Alle standardmäßigen eingebauten Kopieroperationen mit _beliebigen_ JavaScript-Objekten erstellen flache Kopien, statt {{Glossary("Deep_copy", "tiefe Kopien")}}).

### Array-Indizes

`Array`-Objekte können keine beliebigen Zeichenfolgen als Elementindizes verwenden (wie in einem [assoziativen Array](https://en.wikipedia.org/wiki/Associative_array)), sondern müssen nicht-negative Ganzzahlen (oder deren entsprechende Zeichenfolgenform) verwenden. Das Festlegen oder Abrufen von nicht-ganzzahligen Indizes setzt oder ruft kein Element aus der Array-Liste selbst ab, sondern setzt oder greift auf eine Variable zu, die mit der [Objekteigenschaftensammlung](/de/docs/Web/JavaScript/Guide/Data_structures#properties) des Arrays verbunden ist. Die Objekteigenschaften des Arrays und die Liste der Array-Elemente sind separat, und die [Durchlauf- und Änderungsoperationen](/de/docs/Web/JavaScript/Guide/Indexed_collections#array_methods) des Arrays können nicht auf diese benannten Eigenschaften angewendet werden.

Array-Elemente sind Objekteigenschaften auf dieselbe Weise, wie `toString` eine Eigenschaft ist (um genau zu sein, `toString()` ist jedoch eine Methode). Ein Versuch, ein Element eines Arrays wie folgt anzusprechen, führt jedoch zu einem Syntaxfehler, da der Name der Eigenschaft nicht gültig ist:

```js-nolint example-bad
arr.0; // a syntax error
```

Die JavaScript-Syntax erfordert, dass Eigenschaften, die mit einer Ziffer beginnen, mit der [Klammernotation](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties) statt mit der [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) angesprochen werden. Es ist auch möglich, die Array-Indizes zu zitieren (z. B. `years['2']` statt `years[2]`), obwohl das normalerweise nicht notwendig ist.

Die `2` in `years[2]` wird durch eine implizite `toString`-Konvertierung durch die JavaScript-Engine in eine Zeichenfolge umgewandelt. Als Ergebnis würden `'2'` und `'02'` auf zwei verschiedene Slots im `years`-Objekt verweisen, und das folgende Beispiel könnte `true` sein:

```js
console.log(years["2"] !== years["02"]);
```

Nur `years['2']` ist ein tatsächlicher Array-Index. `years['02']` ist eine beliebige Zeichenfolgeneigenschaft, die bei der Array-Iteration nicht besucht wird.

### Beziehung zwischen Länge und numerischen Eigenschaften

Die {{jsxref("Array/length", "length")}}-Eigenschaft eines JavaScript-Arrays und numerische Eigenschaften sind verbunden.

Mehrere der eingebauten Array-Methoden (z. B. {{jsxref("Array/join", "join()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/indexOf", "indexOf()")}} usw.) berücksichtigen den Wert der {{jsxref("Array/length", "length")}}-Eigenschaft eines Arrays, wenn sie aufgerufen werden.

Andere Methoden (z. B. {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}} usw.) führen ebenfalls zu Aktualisierungen der {{jsxref("Array/length", "length")}}-Eigenschaft eines Arrays.

```js
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
```

Wenn in einem JavaScript-Array eine Eigenschaft gesetzt wird, wenn diese Eigenschaft ein gültiger Array-Index ist und dieser Index außerhalb der aktuellen Grenzen des Arrays liegt, aktualisiert die Engine die {{jsxref("Array/length", "length")}}-Eigenschaft des Arrays entsprechend:

```js
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

Das Erhöhen der {{jsxref("Array/length", "length")}} erweitert das Array, indem leere Slots hinzugefügt werden, ohne neue Elemente zu erstellen — sogar nicht `undefined`.

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

Dies wird auf der Seite {{jsxref("Array/length", "length")}} ausführlicher erklärt.

### Array-Methoden und leere Slots

Array-Methoden zeigen unterschiedliche Verhaltensweisen, wenn sie auf leere Slots in [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) stoßen. Im Allgemeinen behandeln ältere Methoden (z. B. `forEach`) leere Slots anders als Indizes, die `undefined` enthalten.

Methoden, die eine spezielle Behandlung für leere Slots haben, umfassen die folgenden: {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/copyWithin", "copyWithin()")}}, {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/reduce", "reduce()")}}, {{jsxref("Array/reduceRight", "reduceRight()")}}, {{jsxref("Array/reverse", "reverse()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/sort", "sort()")}}, und {{jsxref("Array/splice", "splice()")}}. Iterationsmethoden wie `forEach` besuchen leere Slots überhaupt nicht. Andere Methoden wie `concat`, `copyWithin` usw. bewahren leere Slots beim Kopieren, sodass am Ende das Array immer noch spärlich ist.

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

Neuere Methoden (z. B. `keys`) behandeln leere Slots nicht speziell und behandeln sie, als würden sie `undefined` enthalten. Methoden, die leere Slots mit `undefined`-Elementen gleichsetzen, umfassen die folgenden: {{jsxref("Array/entries", "entries()")}}, {{jsxref("Array/fill", "fill()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/includes", "includes()")}}, {{jsxref("Array/join", "join()")}}, {{jsxref("Array/keys", "keys()")}}, {{jsxref("Array/toLocaleString", "toLocaleString()")}}, {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}}, {{jsxref("Array/values", "values()")}}, und {{jsxref("Array/with", "with()")}}.

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

### Kopiermethoden und Methoden, die Arrays verändern

Einige Methoden verändern das bestehende Array, auf dem die Methode aufgerufen wurde, nicht, sondern geben ein neues Array zurück. Sie tun dies, indem sie zuerst ein neues Array konstruieren und es dann mit Elementen befüllen. Der Kopiervorgang erfolgt immer {{Glossary("Shallow_copy", "_flach_")}} – die Methode kopiert nichts über das ursprünglich erstellte Array hinaus. Elemente des ursprünglichen Arrays werden wie folgt in das neue Array kopiert:

- Objekte: Der Objektverweis wird in das neue Array kopiert. Sowohl das ursprüngliche als auch das neue Array verweisen auf dasselbe Objekt. Das heißt, wenn ein referenziertes Objekt geändert wird, sind die Änderungen sowohl im neuen als auch im ursprünglichen Array sichtbar.
- Primitive Typen wie Zeichenfolgen, Zahlen und Booleans (nicht {{jsxref("String")}}, {{jsxref("Number")}}, und {{jsxref("Boolean")}}-Objekte): Ihre Werte werden in das neue Array kopiert.

Andere Methoden verändern das Array, auf dem die Methode aufgerufen wurde. In diesem Fall unterscheidet sich ihr Rückgabewert je nach Methode: manchmal ein Verweis auf dasselbe Array, manchmal die Länge des neuen Arrays.

Die folgenden Methoden erstellen neue Arrays, indem sie [`this.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) aufrufen, um den Konstruktor zu bestimmen: {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/slice", "slice()")}}, und {{jsxref("Array/splice", "splice()")}} (um das Array der entfernten Elemente zu konstruieren, das zurückgegeben wird).

Die folgenden Methoden erstellen immer neue Arrays mit dem `Array`-Basiskonstruktor: {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}}, und {{jsxref("Array/with", "with()")}}.

Die folgende Tabelle listet die Methoden auf, die das ursprüngliche Array verändern, und die entsprechenden nicht-verändernden Alternativen:

| Verändernde Methode                            | Nicht-verändernde Alternative                            |
| ---------------------------------------------- | -------------------------------------------------------- |
| {{jsxref("Array/copyWithin", "copyWithin()")}} | Keine Ein-Methoden-Alternative                           |
| {{jsxref("Array/fill", "fill()")}}             | Keine Ein-Methoden-Alternative                           |
| {{jsxref("Array/pop", "pop()")}}               | {{jsxref("Array/slice", "slice(0, -1)")}}                |
| {{jsxref("Array/push", "push(v1, v2)")}}       | {{jsxref("Array/concat", "concat([v1, v2])")}}           |
| {{jsxref("Array/reverse", "reverse()")}}       | {{jsxref("Array/toReversed", "toReversed()")}}           |
| {{jsxref("Array/shift", "shift()")}}           | {{jsxref("Array/slice", "slice(1)")}}                    |
| {{jsxref("Array/sort", "sort()")}}             | {{jsxref("Array/toSorted", "toSorted()")}}               |
| {{jsxref("Array/splice", "splice()")}}         | {{jsxref("Array/toSpliced", "toSpliced()")}}             |
| {{jsxref("Array/unshift", "unshift(v1, v2)")}} | {{jsxref("Array/toSpliced", "toSpliced(0, 0, v1, v2)")}} |

Eine einfache Möglichkeit, eine verändernde Methode in eine nicht-verändernde Alternative zu ändern, besteht darin, zuerst mit dem [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder {{jsxref("Array/slice", "slice()")}} eine Kopie zu erstellen:

```js-nolint
arr.copyWithin(0, 1, 2); // mutates arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr
```

### Iterative Methoden

Viele Array-Methoden nehmen eine Callback-Funktion als Argument an. Die Callback-Funktion wird der Reihe nach und höchstens einmal für jedes Element im Array aufgerufen, und der Rückgabewert der Callback-Funktion wird verwendet, um den Rückgabewert der Methode zu bestimmen. Sie alle teilen dasselbe Signatur:

```js-nolint
method(callbackFn, thisArg)
```

Wo `callbackFn` drei Argumente nimmt:

- `element`
  - : Das aktuelle Element, das im Array verarbeitet wird.
- `index`
  - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `array`
  - : Das Array, auf dem die Methode aufgerufen wurde.

Was `callbackFn` zurückgeben soll, hängt von der benutzten Array-Methode ab.

Das `thisArg`-Argument (Standardwert ist `undefined`) wird als `this`-Wert verwendet, wenn `callbackFn` aufgerufen wird. Der endgültig von `callbackFn` beobachtbare `this`-Wert wird nach [den üblichen Regeln](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt: Wenn `callbackFn` [nicht-strikt](/de/docs/Web/JavaScript/Reference/Strict_mode#no_unterverfehlung_von_this) ist, werden primitive `this`-Werte in Objekte gewrappt, und `undefined`/`null` wird durch [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ersetzt. Das `thisArg`-Argument ist irrelevant für jede `callbackFn`, die mit einer [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definiert ist, da Pfeilfunktionen kein eigenes `this`-{{Glossary("binding", "Binding")}} haben.

Das `array`-Argument, das `callbackFn` übergeben wird, ist am nützlichsten, wenn Sie während der Iteration auf einen anderen Index zugreifen möchten, weil Sie möglicherweise nicht immer eine vorhandene Variable haben, die auf das aktuelle Array verweist. Sie sollten im Allgemeinen das Array während der Iteration nicht ändern (siehe [Änderung des ursprünglichen Arrays in iterativen Methoden](#veränderung_des_ursprünglichen_arrays_in_iterativen_methoden)), aber Sie können dieses Argument auch dafür nutzen. Das `array`-Argument ist _nicht_ das Array, das gerade erstellt wird, im Falle von Methoden wie `map()`, `filter()`, und `flatMap()` — es gibt keine Möglichkeit, auf das erzeugte Array aus der Callback-Funktion zuzugreifen.

Alle iterativen Methoden sind [kopierende](#kopiermethoden_und_methoden,_die_arrays_verändern) und [generische](#generische_array-methoden), obwohl sie sich unterschiedlich bei [leeren Slots](#array-methoden_und_leere_slots) verhalten.

Die folgenden Methoden sind iterativ: {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/map", "map()")}}, und {{jsxref("Array/some", "some()")}}.

Insbesondere {{jsxref("Array/every", "every()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, und {{jsxref("Array/some", "some()")}} rufen `callbackFn` nicht immer auf jedes Element auf — sie stoppen die Iteration, sobald der Rückgabewert bestimmt ist.

Die {{jsxref("Array/reduce", "reduce()")}} und {{jsxref("Array/reduceRight", "reduceRight()")}}-Methoden nehmen ebenfalls eine Callback-Funktion an und führen diese höchstens einmal für jedes Element im Array aus, haben aber leicht unterschiedliche Signaturen von typischen iterativen Methoden (zum Beispiel akzeptieren sie keine `thisArg`).

Die {{jsxref("Array/sort", "sort()")}}-Methode nimmt ebenfalls eine Callback-Funktion an, aber sie ist keine iterative Methode. Sie verändert das Array-in-place, akzeptiert kein `thisArg`, und kann den Callback an einem Index mehrfach aufrufen.

Iterative Methoden durchlaufen das Array wie folgt (viele technische Details sind ausgelassen):

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

Beachten Sie die folgenden Punkte:

1. Nicht alle Methoden führen den `i in this`-Test aus. Die Methoden `find`, `findIndex`, `findLast`, und `findLastIndex` tun dies nicht, andere Methoden dagegen schon.
2. Die `length` wird vor dem Start der Schleife gespeichert. Dies beeinflusst, wie Einfügungen und Löschungen während der Iteration gehandhabt werden (siehe [Änderung des ursprünglichen Arrays in iterativen Methoden](#veränderung_des_ursprünglichen_arrays_in_iterativen_methoden)).
3. Die Methode speichert nicht den Inhalt des Arrays, sodass wenn ein Index während der Iteration geändert wird, der neue Wert möglicherweise beobachtet wird.
4. Der obige Code durchläuft das Array in aufsteigender Reihenfolge der Indizes. Einige Methoden durchlaufen in absteigender Reihenfolge der Indizes (`for (let i = length - 1; i >= 0; i--)`): `reduceRight()`, `findLast()`, und `findLastIndex()`.
5. `reduce` und `reduceRight` haben leicht unterschiedliche Signaturen und beginnen nicht immer beim ersten/letzten Element.

### Generische Array-Methoden

Array-Methoden sind stets generisch — sie greifen auf keine internen Daten des Array-Objekts zu. Sie greifen nur über die `length`-Eigenschaft und die indizierten Elemente auf die Array-Elemente zu. Das bedeutet, dass sie auch auf array-ähnlichen Objekten aufgerufen werden können.

```js
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
```

#### Normalisierung der length-Eigenschaft

Die `length`-Eigenschaft wird [in eine ganze Zahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) und anschließend auf den Bereich zwischen 0 und 2<sup>53</sup> - 1 begrenzt. `NaN` wird zu `0`, sodass selbst wenn `length` nicht vorhanden ist oder `undefined` ist, es sich so verhält, als ob es den Wert `0` hat.

Die Sprache verhindert, dass `length` auf eine [unsichere Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) gesetzt wird. Alle eingebauten Methoden werden eine {{jsxref("TypeError")}} auslösen, wenn `length` auf eine Zahl größer als 2<sup>53</sup> - 1 gesetzt wird. Da jedoch die {{jsxref("Array/length", "length")}}-Eigenschaft von Arrays jedoch einen Fehler auslöst, wenn sie größer als 2<sup>32</sup> - 1 gesetzt wird, wird die Grenze für sichere Ganzzahlen normalerweise nicht erreicht, es sei denn, die Methode wird auf einem Nicht-Array-Objekt aufgerufen.

```js
Array.prototype.flat.call({}); // []
```

Einige Array-Methoden setzen die `length`-Eigenschaft des Array-Objekts. Sie setzen den Wert immer nach der Normalisierung, sodass `length` immer als ganze Zahl endet.

```js
const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0
```

#### Array-ähnliche Objekte

Der Begriff [_array-ähnliches Objekt_](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) bezieht sich auf jedes Objekt, das während des in diesem Abschnitt beschriebenen `length`-Konvertierungsprozesses keinen Fehler auslöst. In der Praxis wird erwartet, dass ein solches Objekt tatsächlich eine `length`-Eigenschaft hat und indizierte Elemente im Bereich `0` bis `length - 1`. (Wenn es nicht alle Indizes hat, wird es funktionell einem [spärlichen Array](#array-methoden_und_leere_slots) gleichkommen.) Jeder ganzzahlige Index, der kleiner als null oder größer als `length - 1` ist, wird ignoriert, wenn eine Array-Methode auf einem array-ähnlichen Objekt ausgeführt wird.

Viele DOM-Objekte sind array-ähnlich — zum Beispiel [`NodeList`](/de/docs/Web/API/NodeList) und [`HTMLCollection`](/de/docs/Web/API/HTMLCollection). Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt ist auch array-ähnlich. Sie können Array-Methoden darauf aufrufen, selbst wenn sie diese Methoden nicht selbst haben.

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
  - : Gibt `true` zurück, wenn das Argument ein Array ist, oder `false`, wenn nicht.
- {{jsxref("Array.of()")}}
  - : Erstellt eine neue `Array`-Instanz mit einer variablen Anzahl von Argumenten, unabhängig von Anzahl oder Typ der Argumente.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Array.prototype` definiert und werden von allen `Array`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Array.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Bei `Array`-Instanzen ist der Startwert der {{jsxref("Array/Array", "Array")}}-Konstruktor.
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
  - : Enthält Eigenschaftsnamen, die vor der ES2015-Version nicht im ECMAScript-Standard enthalten waren und die für [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) Statement-Bindungszwecke ignoriert werden.

Diese Eigenschaften sind eigene Eigenschaften jeder `Array`-Instanz.

- {{jsxref("Array/length", "length")}}
  - : Reflektiert die Anzahl der Elemente in einem Array.

## Instanz-Methoden

- {{jsxref("Array.prototype.at()")}}
  - : Gibt das Array-Element am angegebenen Index zurück. Akzeptiert negative ganze Zahlen, die von dem letzten Element rückwärts zählen.
- {{jsxref("Array.prototype.concat()")}}
  - : Gibt ein neues Array zurück, das das aufrufende Array mit anderen Array(s) und/oder Wert(en) vereint.
- {{jsxref("Array.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Array-Elementen innerhalb eines Arrays.
- {{jsxref("Array.prototype.entries()")}}
  - : Gibt ein neues [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index in einem Array enthält.
- {{jsxref("Array.prototype.every()")}}
  - : Gibt `false` zurück, wenn es ein Element im Array findet, das die bereitgestellte Testfunktion nicht erfüllt. Andernfalls gibt es `true` zurück.
- {{jsxref("Array.prototype.fill()")}}
  - : Füllt alle Elemente eines Arrays von einem Start- zu einem End-Index mit einem statischen Wert.
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
  - : Gibt ein neues Array zurück, in das rekursiv alle Unterarray-Elemente bis zur angegebenen Tiefe verkettet sind.
- {{jsxref("Array.prototype.flatMap()")}}
  - : Gibt ein neues Array zurück, das gebildet wird, indem eine gegebene Callback-Funktion auf jedes Element des aufrufenden Arrays angewendet und das Ergebnis um eine Ebene abgeflacht wird.
- {{jsxref("Array.prototype.forEach()")}}
  - : Ruft eine Funktion für jedes Element im aufrufenden Array auf.
- {{jsxref("Array.prototype.includes()")}}
  - : Bestimmt, ob das aufrufende Array einen Wert enthält, und gibt `true` oder `false` entsprechend zurück.
- {{jsxref("Array.prototype.indexOf()")}}
  - : Gibt den ersten (kleinsten) Index zurück, an dem ein angegebenes Element im aufrufenden Array gefunden werden kann.
- {{jsxref("Array.prototype.join()")}}
  - : Verbindet alle Elemente eines Arrays zu einer Zeichenfolge.
- {{jsxref("Array.prototype.keys()")}}
  - : Gibt einen neuen [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) zurück, der die Schlüssel für jeden Index im aufrufenden Array enthält.
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index zurück, an dem ein angegebenes Element im aufrufenden Array gefunden werden kann, oder `-1`, wenn keines gefunden wird.
- {{jsxref("Array.prototype.map()")}}
  - : Gibt ein neues Array zurück, das die Ergebnisse des Aufrufens einer Funktion auf jedes Element im aufrufenden Array enthält.
- {{jsxref("Array.prototype.pop()")}}
  - : Entfernt das letzte Element aus einem Array und gibt dieses Element zurück.
- {{jsxref("Array.prototype.push()")}}
  - : Fügt ein oder mehrere Elemente am Ende eines Arrays hinzu und gibt die neue `length` des Arrays zurück.
- {{jsxref("Array.prototype.reduce()")}}
  - : Führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion auf jedem Element des Arrays (von links nach rechts) aus, um es auf einen einzelnen Wert zu reduzieren.
- {{jsxref("Array.prototype.reduceRight()")}}
  - : Führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion auf jedem Element des Arrays (von rechts nach links) aus, um es auf einen einzelnen Wert zu reduzieren.
- {{jsxref("Array.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays _in place_ um. (Das erste wird das letzte, das letzte wird das erste.)
- {{jsxref("Array.prototype.shift()")}}
  - : Entfernt das erste Element aus einem Array und gibt dieses Element zurück.
- {{jsxref("Array.prototype.slice()")}}
  - : Extrahiert einen Abschnitt des aufrufenden Arrays und gibt ein neues Array zurück.
- {{jsxref("Array.prototype.some()")}}
  - : Gibt `true` zurück, wenn es ein Element im Array findet, das die bereitgestellte Testfunktion erfüllt. Andernfalls gibt es `false` zurück.
- {{jsxref("Array.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays in place und gibt das Array zurück.
- {{jsxref("Array.prototype.splice()")}}
  - : Fügt Elemente zu einem Array hinzu und/oder entfernt Elemente aus einem Array.
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : Gibt eine lokalisierte Zeichenfolge zurück, die das aufrufende Array und seine Elemente darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Array.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das Original-Array zu ändern.
- {{jsxref("Array.prototype.toSorted()")}}
  - : Gibt ein neues Array mit den Elementen in aufsteigender Reihenfolge zurück, ohne das Original-Array zu ändern.
- {{jsxref("Array.prototype.toSpliced()")}}
  - : Gibt ein neues Array mit einigen entfernten und/oder an einem gegebenen Index ersetzten Elementen zurück, ohne das Original-Array zu ändern.
- {{jsxref("Array.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das aufrufende Array und seine Elemente darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Array.prototype.unshift()")}}
  - : Fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu und gibt die neue `length` des Arrays zurück.
- {{jsxref("Array.prototype.values()")}}
  - : Gibt ein neues [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Werte für jeden Index im Array enthält.
- {{jsxref("Array.prototype.with()")}}
  - : Gibt ein neues Array zurück, bei dem das Element am angegebenen Index mit dem gegebenen Wert ersetzt wurde, ohne das Original-Array zu verändern.
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
  - : Ein Alias für die [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values)-Methode.

## Beispiele

Dieser Abschnitt bietet einige Beispiele für gängige Array-Operationen in JavaScript.

> [!NOTE]
> Wenn Sie mit den Grundlagen von Arrays nicht vertraut sind, sollten Sie zunächst [JavaScript Erste Schritte: Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) lesen, das [erklärt, was Arrays sind](/de/docs/Learn_web_development/Core/Scripting/Arrays#what_is_an_array), und weitere Beispiele für gängige Array-Operationen enthält.

### Ein Array erstellen

Dieses Beispiel zeigt drei Möglichkeiten, neue Arrays zu erstellen: zuerst mit [Array-Literal-Notation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation), dann mit dem [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)-Konstruktor und schließlich mit [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), um das Array aus einer Zeichenfolge zu erstellen.

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

Dieses Beispiel verwendet die Methode [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join), um eine Zeichenfolge aus dem `fruits`-Array zu erstellen.

```js
const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Apple, Banana"
```

### Auf ein Array-Element über seinen Index zugreifen

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

### Den Index eines Elements in einem Array finden

Dieses Beispiel verwendet die Methode [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), um die Position (den Index) der Zeichenfolge `"Banana"` im `fruits`-Array zu finden.

```js
const fruits = ["Apple", "Banana"];
console.log(fruits.indexOf("Banana"));
// 1
```

### Prüfen, ob ein Array ein bestimmtes Element enthält

Dieses Beispiel zeigt zwei Möglichkeiten, um zu überprüfen, ob das `fruits`-Array `"Banana"` und `"Cherry"` enthält: zuerst mit der Methode [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) und dann mit der Methode [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), um auf einen Indexwert zu testen, der nicht `-1` ist.

```js
const fruits = ["Apple", "Banana"];

fruits.includes("Banana"); // true
fruits.includes("Cherry"); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; // false
```

### Ein Element an ein Array anhängen

Dieses Beispiel verwendet die Methode [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push), um eine neue Zeichenfolge an das `fruits`-Array anzuhängen.

```js
const fruits = ["Apple", "Banana"];
const newLength = fruits.push("Orange");
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3
```

### Das letzte Element aus einem Array entfernen

Dieses Beispiel verwendet die Methode [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop), um das letzte Element aus dem `fruits`-Array zu entfernen.

```js
const fruits = ["Apple", "Banana", "Orange"];
const removedItem = fruits.pop();
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange
```

> [!NOTE]
> Mit `pop()` kann nur das letzte Element aus einem Array entfernt werden. Um mehrere Elemente vom Ende eines Arrays zu entfernen, sehen Sie sich das nächste Beispiel an.

### Mehrere Elemente aus dem Ende eines Arrays entfernen

Dieses Beispiel verwendet die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), um die letzten 3 Elemente aus dem `fruits`-Array zu entfernen.

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

Dieses Beispiel verwendet die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), um das `fruits`-Array auf seine ersten 2 Elemente zu kürzen.

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

Dieses Beispiel verwendet die Methode [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), um das erste Element aus dem `fruits`-Array zu entfernen.

```js
const fruits = ["Apple", "Banana"];
const removedItem = fruits.shift();
console.log(fruits);
// ["Banana"]
console.log(removedItem);
// Apple
```

> [!NOTE]
> Mit `shift()` kann nur das erste Element aus einem Array entfernt werden. Um mehrere Elemente vom Anfang eines Arrays zu entfernen, sehen Sie sich das nächste Beispiel an.

### Mehrere Elemente vom Anfang eines Arrays entfernen

Dieses Beispiel verwendet die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), um die ersten 3 Elemente aus dem `fruits`-Array zu entfernen.

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

Dieses Beispiel verwendet die Methode [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift), um an Index `0` ein neues Element zum `fruits`-Array hinzuzufügen – es wird so zum neuen ersten Element im Array.

```js
const fruits = ["Banana", "Mango"];
const newLength = fruits.unshift("Strawberry");
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3
```

### Ein einzelnes Element nach Index entfernen

Dieses Beispiel verwendet die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), um die Zeichenfolge `"Banana"` aus dem `fruits`-Array zu entfernen – durch Angabe der Indexposition von `"Banana"`.

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

Dieses Beispiel verwendet die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), um die Zeichenfolgen `"Banana"` und `"Strawberry"` aus dem `fruits`-Array zu entfernen – durch Angabe der Indexposition von `"Banana"` und der Anzahl der zu entfernenden Elemente.

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

Dieses Beispiel verwendet die Methode [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), um die letzten 2 Elemente im `fruits`-Array durch neue Elemente zu ersetzen.

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

Dieses Beispiel verwendet eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife, um über das `fruits`-Array zu iterieren und jedes Element in der Konsole zu protokollieren.

```js
const fruits = ["Apple", "Mango", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Apple
// Mango
// Cherry
```

Aber `for...of` ist nur eine von vielen Möglichkeiten, über ein Array zu iterieren; für weitere Möglichkeiten sehen Sie [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration) und die Dokumentation zu den Methoden [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), und [`reduceRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) – und sehen Sie sich das nächste Beispiel an, das die Methode [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) verwendet.

### Eine Funktion auf jedes Element in einem Array aufrufen

Dieses Beispiel verwendet die Methode [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), um eine Funktion auf jedes Element im `fruits`-Array aufzurufen. Die Funktion sorgt dafür, dass jedes Element zusammen mit der Indexnummer des Elements in der Konsole protokolliert wird.

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

Dieses Beispiel verwendet die Methode [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), um das `fruits`-Array mit einem `moreFruits`-Array zu verbinden, um ein neues `combinedFruits`-Array zu erzeugen. Beachten Sie, dass `fruits` und `moreFruits` unverändert bleiben.

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

Dieses Beispiel zeigt drei Möglichkeiten, ein neues Array aus dem bestehenden `fruits`-Array zu erstellen: zuerst mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), dann mit der Methode [`from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from), und dann mit der Methode [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

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

Alle eingebauten Array-Kopieroperationen (wie [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), und [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)) erstellen {{Glossary("Shallow_copy", "flache Kopien")}}. Wenn Sie stattdessen eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines Arrays wollen, können Sie {{jsxref("JSON.stringify()")}} verwenden, um das Array in eine JSON-Zeichenfolge zu konvertieren, und dann {{jsxref("JSON.parse()")}}, um die Zeichenfolge zurück in ein neues Array zu konvertieren, das völlig unabhängig vom ursprünglichen Array ist.

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

Sie können auch tiefgehende Kopien mit der Methode [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) erstellen, die den Vorteil hat, dass sie es erlaubt, [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in der Quelle _transferiert_ zu kopieren, anstatt sie einfach zu klonen.

Schließlich ist es wichtig zu verstehen, dass das Zuweisen eines bestehenden Arrays zu einer neuen Variablen keine Kopie des Arrays oder seiner Elemente erstellt. Stattdessen ist die neue Variable nur ein Verweis oder Alias auf das ursprüngliche Array; das heißt, der ursprüngliche Array-Name und der neue Variablenname sind nur zwei Namen für dasselbe Objekt (und werden daher immer als [exakt gleich](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using)) ausgewertet. Daher ändern sich alle Änderungen, die entweder an dem Wert des ursprünglichen Arrays oder an dem Wert der neuen Variablen vorgenommen werden, ebenfalls:

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

Das folgende Beispiel erstellt ein Schachbrett als zweidimensionales Array von Zeichenfolgen. Der erste Zug erfolgt durch Kopieren des `'p'` in `board[6][4]` nach `board[4][4]`. Die alte Position bei `[6][4]` wird leer gemacht.

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

### Ein Array zur Tabellierung einer Reihe von Werten verwenden

```js
const values = [];
for (let x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);
```

Erzeugt

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

### Ein Array mit dem Ergebnis eines Abgleichs erstellen

Das Ergebnis eines Abgleichs zwischen einem {{jsxref("RegExp")}} und einer Zeichenfolge kann ein JavaScript-Array erstellen, das Eigenschaften und Elemente hat, die Informationen über den Match bieten. Ein solches Array wird von {{jsxref("RegExp.prototype.exec()")}} und {{jsxref("String.prototype.match()")}} zurückgegeben.

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

Für mehr Informationen über das Ergebnis eines Abgleichs, siehe die Seiten {{jsxref("RegExp.prototype.exec()")}} und {{jsxref("String.prototype.match()")}}.

### Veränderung des ursprünglichen Arrays in iterativen Methoden

[Iterative Methoden](#iterative_methoden) verändern das Array, auf dem sie aufgerufen werden, nicht; die bereitgestellte Funktion als `callbackFn` kann dies jedoch tun. Das entscheidende Prinzip ist, dass nur Indizes zwischen 0 und `arrayLength - 1` besucht werden, wobei `arrayLength` die Länge des Arrays zum Zeitpunkt ist, an dem die Array-Methode zuerst aufgerufen wurde, aber das Element, das an den Callback übergeben wird, der Wert ist, der zu dem Zeitpunkt existiert, an dem der Index besucht wird. Daher:

- `callbackFn` wird keine Elemente besuchen, die jenseits der anfänglichen Länge des Arrays hinzugefügt werden, wenn der Aufruf der iterativen Methode begann.
- Änderungen an bereits besuchten Indizes bewirken nicht, dass `callbackFn` erneut aufgerufen wird.
- Wenn ein vorhandenes, bisher noch nicht besuchtes Element des Arrays durch `callbackFn` geändert wird, ist der übergebene Wert der `callbackFn` der Wert zu dem Zeitpunkt, an dem das Element besucht wird. Entfernte Elemente werden nicht besucht.

> [!WARNING]
> Zeitgleiche Änderungen der beschriebenen Art führen häufig zu schwer verständlichem Code und sollten im Allgemeinen vermieden werden (außer in Sonderfällen).

Die folgenden Beispiele verwenden die `forEach`-Methode als Beispiel, aber andere Methoden, die Indizes in aufsteigender Reihenfolge besuchen, arbeiten auf dieselbe Weise. Wir werden zuerst eine Hilfsfunktion definieren:

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

Änderungen an nicht besuchten Indizes werden sichtbar, sobald der Index erreicht wird:

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

Das Einfügen von _n_ Elementen an nicht besuchten Indizes wird dazu führen, dass diese besucht werden. Die letzten _n_ Elemente im ursprünglichen Array, die jetzt einen Index haben, der größer ist als die anfängliche Array-Länge, werden nicht mehr besucht:

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

Das Einfügen von _n_ Elementen mit Index größer als die anfängliche Array-Länge führt nicht dazu, dass diese besucht werden:

```js
testSideEffect((arr) => arr.push("new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4, new], index: 1, elem: e2
// array: [e1, e2, e3, e4, new, new], index: 2, elem: e3
// array: [e1, e2, e3, e4, new, new, new], index: 3, elem: e4
// Final array: [e1, e2, e3, e4, new, new, new, new]
```

Das Einfügen von _n_ Elementen an bereits besuchten Indizes führt nicht dazu, dass diese besucht werden, sondern es verschiebt verbleibende Elemente um _n_, sodass der aktuelle Index und die _n - 1_ Elemente davor erneut besucht werden:

```js
testSideEffect((arr, index) => arr.splice(index, 0, "new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [new, e1, e2, e3, e4], index: 1, elem: e1
// array: [new, new, e1, e2, e3, e4], index: 2, elem: e1
// array: [new, new, new, e1, e2, e3, e4], index: 3, elem: e1
// Final array: [new, new, new, new, e1, e2, e3, e4]
// e1 keeps getting visited because it keeps getting shifted back
```

Das Löschen von _n_ Elementen an nicht besuchten Indizes führt dazu, dass sie nicht mehr besucht werden. Da das Array geschrumpft ist, werden die letzten _n_ Iterationen außerhalb der Grenzen liegende Indizes besuchen. Wenn die Methode nicht existierende Indizes ignoriert (siehe [Array-Methoden und leere Slots](#array-methoden_und_leere_slots)), werden die letzten _n_ Iterationen übersprungen; andernfalls erhalten sie `undefined`:

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

Das Löschen von _n_ Elementen an bereits besuchten Indizes ändert nicht die Tatsache, dass sie besucht wurden, bevor sie gelöscht werden. Da das Array geschrumpft ist, werden die nächsten _n_ Elemente nach dem aktuellen Index übersprungen. Wenn die Methode nicht existierende Indizes ignoriert, werden die letzten _n_ Iterationen übersprungen; andernfalls erhalten sie `undefined`:

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

Für Methoden, die in absteigender Reihenfolge der Indizes iterieren, führt das Einfügen dazu, dass Elemente übersprungen und das Löschen dazu, dass Elemente mehrmals besucht werden. Passen Sie den obigen Code selbst an, um die Effekte zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
