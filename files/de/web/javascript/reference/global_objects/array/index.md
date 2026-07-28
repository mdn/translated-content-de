---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
l10n:
  sourceCommit: 7c2fdcaace1ab622a1055b7cc710297c452ce9ee
---

Das **`Array`** Objekt ermöglicht, ähnlich wie Arrays in anderen Programmiersprachen, [das Speichern einer Sammlung mehrerer Elemente unter einem einzigen Variablennamen](/de/docs/Learn_web_development/Core/Scripting/Arrays) und hat Mitglieder, um [häufige Array-Operationen durchzuführen](#beispiele).

## Beschreibung

In JavaScript sind Arrays keine {{Glossary("Primitive", "Primitiven")}}, sondern `Array` Objekte mit den folgenden Kerneigenschaften:

- **JavaScript Arrays sind veränderbar** und **können eine Mischung aus verschiedenen [Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures) enthalten**. (Falls diese Eigenschaften unerwünscht sind, verwenden Sie stattdessen [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays).)
- **JavaScript Arrays sind keine assoziativen Arrays**, daher können Array-Elemente nicht mit beliebigen Zeichenfolgen als Indizes angesprochen werden, sondern müssen mit nicht-negativen Ganzzahlen (oder deren stringförmige Darstellung) als Indizes angesprochen werden.
- **JavaScript Arrays sind [nullbasiert](https://en.wikipedia.org/wiki/Zero-based_numbering)**: Das erste Element eines Arrays befindet sich an Index `0`, das zweite an Index `1` und so weiter — und das letzte Element befindet sich beim Wert der {{jsxref("Array/length", "length")}}-Eigenschaft des Arrays minus `1`.
- **JavaScript [Array-Kopiervorgänge](#ein_array_kopieren) erstellen {{Glossary("Shallow_copy", "flache Kopien")}}**. (Alle standardmäßigen eingebauten Kopiervorgänge mit _jedem_ JavaScript-Objekt erstellen flache Kopien, anstatt {{Glossary("Deep_copy", "tiefe Kopien")}} zu erstellen.)

### Array-Indizes

`Array` Objekte können keine beliebigen Zeichenfolgen als Elementindizes verwenden (wie in einem [assoziativen Array](https://en.wikipedia.org/wiki/Associative_array)), sondern müssen nicht-negative Ganzzahlen (oder deren stringförmige Darstellung) verwenden. Das Setzen oder der Zugriff über Nicht-Integer wird kein Element aus der Array-Liste selbst setzen oder abrufen, sondern eine Variable, die mit der [Objekteigenschaftensammlung](/de/docs/Web/JavaScript/Guide/Data_structures#properties) dieses Arrays verbunden ist, setzen oder darauf zugreifen. Die Objekteigenschaften des Arrays und die Liste der Array-Elemente sind getrennt, und die [Traversierungs- und Änderungsoperationen](/de/docs/Web/JavaScript/Guide/Indexed_collections#array_methods) des Arrays können nicht auf diese benannten Eigenschaften angewendet werden.

Array-Elemente sind Objekteigenschaften in derselben Weise, wie `toString` eine Eigenschaft ist (genauer gesagt ist `toString()` jedoch eine Methode). Trotzdem führt der Versuch, ein Element eines Arrays wie folgt zuzugreifen, zu einem Syntaxfehler, weil der Eigenschaftenname nicht gültig ist:

```js-nolint example-bad
arr.0; // a syntax error
```

Die JavaScript-Syntax erfordert, dass Eigenschaften, die mit einer Ziffer beginnen, mit [Klammernotation](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties) anstelle von [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zugegriffen werden. Es ist auch möglich, die Array-Indizes zu zitieren (z. B. `years['2']` anstelle von `years[2]`), obwohl dies normalerweise nicht notwendig ist.

Die `2` in `years[2]` wird durch die JavaScript-Engine mittels einer impliziten `toString` Konvertierung in einen String umgewandelt. Dadurch würden `'2'` und `'02'` zwei unterschiedliche Slots auf dem `years` Objekt repräsentieren, und das folgende Beispiel könnte `true` sein:

```js
console.log(years["2"] !== years["02"]);
```

Nur `years['2']` ist ein tatsächlicher Array-Index. `years['02']` ist eine willkürliche Zeichenfolgeigenschaft, die bei der Array-Iteration nicht berücksichtigt wird.

### Beziehung zwischen length und numerischen Eigenschaften

Die {{jsxref("Array/length", "length")}}-Eigenschaft eines JavaScript-Arrays und numerische Eigenschaften sind miteinander verbunden.

Mehrere der eingebauten Array-Methoden (z. B. {{jsxref("Array/join", "join()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/indexOf", "indexOf()")}} usw.) berücksichtigen den Wert der {{jsxref("Array/length", "length")}}-Eigenschaft eines Arrays, wenn sie aufgerufen werden.

Andere Methoden (z. B. {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}} usw.) führen zu Aktualisierungen der {{jsxref("Array/length", "length")}}-Eigenschaft eines Arrays.

```js
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
```

Wenn eine Eigenschaft an einem JavaScript-Array gesetzt wird, wobei die Eigenschaft ein gültiger Array-Index ist und dieser Index außerhalb der aktuellen Grenzen des Arrays liegt, wird die {{jsxref("Array/length", "length")}}-Eigenschaft des Arrays entsprechend aktualisiert:

```js
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

Das Erhöhen der {{jsxref("Array/length", "length")}} erweitert das Array, indem leere Slots hinzugefügt werden, ohne neue Elemente zu erstellen — nicht einmal `undefined`.

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

Dies wird auf der {{jsxref("Array/length", "length")}}-Seite weiter erklärt.

### Array-Methoden und leere Slots

Array-Methoden haben unterschiedliche Verhaltensweisen, wenn sie auf leere Slots in [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) treffen. Im Allgemeinen behandeln ältere Methoden (z. B. `forEach`) leere Slots anders als Indizes, die `undefined` enthalten.

Methoden, die eine spezielle Behandlung für leere Slots vorsehen, umfassen: {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/copyWithin", "copyWithin()")}}, {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/reduce", "reduce()")}}, {{jsxref("Array/reduceRight", "reduceRight()")}}, {{jsxref("Array/reverse", "reverse()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/sort", "sort()")}} und {{jsxref("Array/splice", "splice()")}}. Iterationsmethoden wie `forEach` besuchen leere Slots überhaupt nicht. Andere Methoden wie `concat`, `copyWithin` usw. bewahren leere Slots beim Kopieren, sodass das Array am Ende weiterhin spärlich ist.

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

Neuere Methoden (z. B. `keys`) behandeln leere Slots nicht speziell und behandeln sie, als ob sie `undefined` enthalten. Methoden, die leere Slots mit `undefined` Elementen gleichsetzen, umfassen: {{jsxref("Array/entries", "entries()")}}, {{jsxref("Array/fill", "fill()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/includes", "includes()")}}, {{jsxref("Array/join", "join()")}}, {{jsxref("Array/keys", "keys()")}}, {{jsxref("Array/toLocaleString", "toLocaleString()")}}, {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}}, {{jsxref("Array/values", "values()")}} und {{jsxref("Array/with", "with()")}}.

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

### Kopiermethoden und Änderungsmethoden

Einige Methoden verändern nicht das bestehende Array, auf dem die Methode aufgerufen wurde, sondern geben ein neues Array zurück. Sie tun dies, indem sie zuerst ein neues Array konstruieren und dann mit Elementen füllen. Die Kopie erfolgt immer {{Glossary("Shallow_copy", "_flach_")}} — die Methode kopiert nie etwas über das ursprünglich erstellte Array hinaus. Elemente der Originalarrays werden wie folgt in das neue Array kopiert:

- Objekte: Die Objektreferenz wird in das neue Array kopiert. Sowohl das Original- als auch das neue Array verweisen auf dasselbe Objekt. Das heißt, wenn ein referenziertes Objekt geändert wird, sind die Änderungen in beiden, dem neuen und dem Originalarray, sichtbar.
- Primitive Typen wie Zeichenfolgen, Zahlen und Booleans (nicht {{jsxref("String")}}, {{jsxref("Number")}} und {{jsxref("Boolean")}} Objekte): deren Werte werden in das neue Array kopiert.

Andere Methoden verändern das Array, auf dem die Methode aufgerufen wurde, wobei sich der Rückgabewert je nach Methode unterscheidet: manchmal eine Referenz auf dasselbe Array, manchmal die Länge des neuen Arrays.

Die folgenden Methoden erstellen neue Arrays, indem sie [`this.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) verwenden, um den zu verwendenden Konstruktor zu bestimmen: {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/slice", "slice()")}} und {{jsxref("Array/splice", "splice()")}} (um das zurückgegebene Array der entfernten Elemente zu konstruieren).

Die folgenden Methoden erstellen immer neue Arrays mit dem `Array` Basiskonstruktor: {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}} und {{jsxref("Array/with", "with()")}}.

Die folgende Tabelle listet die Methoden auf, die das Originalarray verändern, und die entsprechende nicht-verändernde Alternative:

| Veränderte Methode                             | Nicht-verändernde Alternative                            |
| ---------------------------------------------- | -------------------------------------------------------- |
| {{jsxref("Array/copyWithin", "copyWithin()")}} | Keine Alternativmethode                                  |
| {{jsxref("Array/fill", "fill()")}}             | Keine Alternativmethode                                  |
| {{jsxref("Array/pop", "pop()")}}               | {{jsxref("Array/slice", "slice(0, -1)")}}                |
| {{jsxref("Array/push", "push(v1, v2)")}}       | {{jsxref("Array/concat", "concat([v1, v2])")}}           |
| {{jsxref("Array/reverse", "reverse()")}}       | {{jsxref("Array/toReversed", "toReversed()")}}           |
| {{jsxref("Array/shift", "shift()")}}           | {{jsxref("Array/slice", "slice(1)")}}                    |
| {{jsxref("Array/sort", "sort()")}}             | {{jsxref("Array/toSorted", "toSorted()")}}               |
| {{jsxref("Array/splice", "splice()")}}         | {{jsxref("Array/toSpliced", "toSpliced()")}}             |
| {{jsxref("Array/unshift", "unshift(v1, v2)")}} | {{jsxref("Array/toSpliced", "toSpliced(0, 0, v1, v2)")}} |

Eine einfache Möglichkeit, eine verändernde Methode in eine nicht-verändernde Alternative umzuwandeln, besteht darin, den [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder {{jsxref("Array/slice", "slice()")}} zu verwenden, um zuerst eine Kopie zu erstellen:

```js-nolint
arr.copyWithin(0, 1, 2); // mutates arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr
```

### Iterativmethoden

Viele Array-Methoden nehmen eine Callback-Funktion als Argument. Die Callback-Funktion wird nacheinander aufgerufen, maximal einmal für jedes Element im Array, und der Rückgabewert der Callback-Funktion wird verwendet, um den Rückgabewert der Methode zu bestimmen. Sie alle teilen die gleiche Signatur:

```js-nolint
method(callbackFn, thisArg)
```

Wobei `callbackFn` drei Argumente nimmt:

- `element`
  - : Das aktuelle Element, das im Array verarbeitet wird.
- `index`
  - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `array`
  - : Das Array, auf dem die Methode aufgerufen wurde.

Was `callbackFn` zurückgeben soll, hängt von der aufgerufenen Array-Methode ab.

Das `thisArg` Argument (standardmäßig `undefined`) wird als `this` Wert verwendet, wenn `callbackFn` aufgerufen wird. Der letztlich von `callbackFn` beobachtbare `this` Wert wird entsprechend [den üblichen Regeln](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt: Wenn `callbackFn` [non-strict](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) ist, werden primitive `this` Werte in Objekte gewrappt und `undefined`/`null` wird durch [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ersetzt. Das `thisArg` Argument ist irrelevant für jede `callbackFn`, die mit einer [Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definiert ist, da Arrow-Funktionen kein eigenes `this` {{Glossary("binding", "binding")}} haben.

Das an `callbackFn` übergebene `array` Argument ist sehr nützlich, wenn Sie während der Iteration einen anderen Index lesen möchten, da Sie möglicherweise nicht immer eine vorhandene Variable haben, die auf das aktuelle Array verweist. Im Allgemeinen sollten Sie das Array während der Iteration nicht ändern (siehe [Ändern des ursprünglichen Arrays in Iterationsmethoden](#ändern_des_ursprünglichen_arrays_in_iterationsmethoden)), aber Sie können dieses Argument auch dafür verwenden. Das `array` Argument ist _nicht_ das Array, das erstellt wird, im Falle von Methoden wie `map()`, `filter()` und `flatMap()` — Es gibt keine Möglichkeit, das erstellte Array von der Callback-Funktion aus zuzugreifen.

Alle Iterationsmethoden sind [kopierend](#kopiermethoden_und_änderungsmethoden) und [generisch](#generische_array-methoden), obwohl sie sich mit [leeren Slots](#array-methoden_und_leere_slots) unterschiedlich verhalten.

Die folgenden Methoden sind iterativ: {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/map", "map()")}} und {{jsxref("Array/some", "some()")}}.

Insbesondere {{jsxref("Array/every", "every()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}} und {{jsxref("Array/some", "some()")}} rufen `callbackFn` nicht immer bei jedem Element auf — Sie beenden die Iteration, sobald der Rückgabewert festgelegt ist.

Die Methoden {{jsxref("Array/reduce", "reduce()")}} und {{jsxref("Array/reduceRight", "reduceRight()")}} erfordern auch eine Callback-Funktion und führen sie maximal einmal für jedes Element im Array aus, aber sie haben leicht unterschiedliche Signaturen als typische Iterationsmethoden (zum Beispiel akzeptieren sie kein `thisArg`).

Die Methode {{jsxref("Array/sort", "sort()")}} nimmt ebenfalls eine Callback-Funktion an, ist aber keine Iterationsmethode. Sie verändert das Array an Ort und Stelle, akzeptiert kein `thisArg` und kann den Callback mehrfach bei einem Index aufrufen.

Iterationsmethoden iterieren das Array wie folgt (mit vielen weggelassenen technischen Details):

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

1. Nicht alle Methoden machen den `i in this` Test. Die Methoden `find`, `findIndex`, `findLast` und `findLastIndex` tun dies nicht, andere Methoden schon.
2. Die `length` ist gespeichert, bevor die Schleife beginnt. Dies beeinflusst, wie Einfügungen und Löschungen während der Iteration gehandhabt werden (siehe [Ändern des ursprünglichen Arrays in Iterationsmethoden](#ändern_des_ursprünglichen_arrays_in_iterationsmethoden)).
3. Die Methode speichert die Array-Inhalte nicht, sodass wenn ein Index während der Iteration geändert wird, der neue Wert möglicherweise beobachtet wird.
4. Der oben gezeigte Code iteriert das Array in aufsteigender Reihenfolge des Indexes. Einige Methoden iterieren in absteigender Reihenfolge des Indexes (`for (let i = length - 1; i >= 0; i--)`): `reduceRight()`, `findLast()` und `findLastIndex()`.
5. `reduce` und `reduceRight` haben leicht abweichende Signaturen und starten nicht immer beim ersten/letzten Element.

### Generische Array-Methoden

Array-Methoden sind immer generisch — Sie greifen nicht auf interne Daten des Array-Objekts zu. Sie greifen nur auf die Array-Elemente über die `length` Eigenschaft und die indizierten Elemente zu. Dies bedeutet, dass sie auch bei array-ähnlichen Objekten aufgerufen werden können.

```js
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
```

#### Normalisierung der length Eigenschaft

Die `length` Eigenschaft wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) und dann in den Bereich zwischen 0 und 2<sup>53</sup> - 1 eingegrenzt. `NaN` wird zu `0`, sodass selbst wenn `length` nicht vorhanden oder `undefined` ist, es so funktioniert, als ob es den Wert `0` hätte.

Die Sprache vermeidet das Setzen von `length` auf eine [unsichere Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). Alle eingebauten Methoden werfen einen {{jsxref("TypeError")}}, wenn `length` auf eine Zahl größer als 2<sup>53</sup> - 1 gesetzt wird. Da jedoch die {{jsxref("Array/length", "length")}} Eigenschaft von Arrays einen Fehler auslöst, wenn sie auf größer als 2<sup>32</sup> - 1 gesetzt wird, wird die sichere Ganzzahlschwelle normalerweise nicht erreicht, es sei denn, die Methode wird auf einem Nicht-Array-Objekt aufgerufen.

```js
Array.prototype.flat.call({}); // []
```

Einige Array-Methoden setzen die `length` Eigenschaft des Array-Objekts. Sie setzen den Wert immer nach der Normalisierung, sodass `length` immer als Ganzzahl endet.

```js
const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0
```

#### Array-ähnliche Objekte

Der Begriff [_array-ähnliches Objekt_](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) bezieht sich auf jedes Objekt, das während des `length` Konvertierungsprozesses wie oben beschrieben keinen Fehler wirft. In der Praxis wird von einem solchen Objekt erwartet, dass es tatsächlich eine `length` Eigenschaft hat und indizierte Elemente im Bereich `0` bis `length - 1`. (Wenn es nicht alle Indizes hat, ist es funktional äquivalent zu einem [sparsamen Array](#array-methoden_und_leere_slots).) Jeder ganzzahlige Index kleiner als null oder größer als `length - 1` wird ignoriert, wenn eine Array-Methode auf einem Array-ähnlichen Objekt arbeitet.

Viele DOM-Objekte sind Array-ähnlich — Zum Beispiel [`NodeList`](/de/docs/Web/API/NodeList) und [`HTMLCollection`](/de/docs/Web/API/HTMLCollection). Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) Objekt ist ebenfalls Array-ähnlich. Sie können Array-Methoden darauf aufrufen, auch wenn sie diese Methoden selbst nicht haben.

```js
function f() {
  console.log(Array.prototype.join.call(arguments, "+"));
}

f("a", "b"); // 'a+b'
```

## Konstruktor

- {{jsxref("Array/Array", "Array()")}}
  - : Erstellt ein neues `Array` Objekt.

## Statische Eigenschaften

- [`Array[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
  - : Gibt den `Array` Konstruktor zurück.

## Statische Methoden

- {{jsxref("Array.from()")}}
  - : Erstellt eine neue `Array` Instanz aus einem iterierbaren oder array-ähnlichen Objekt.
- {{jsxref("Array.fromAsync()")}}
  - : Erstellt eine neue `Array` Instanz aus einem asynchronen iterierbaren, iterierbaren oder array-ähnlichen Objekt.
- {{jsxref("Array.isArray()")}}
  - : Gibt `true` zurück, wenn das Argument ein Array ist, andernfalls `false`.
- {{jsxref("Array.of()")}}
  - : Erstellt eine neue `Array` Instanz mit einer variablen Anzahl von Argumenten, unabhängig von Anzahl oder Typ der Argumente.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Array.prototype` definiert und werden von allen `Array` Instanzen geteilt.

- {{jsxref("Object/constructor", "Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Array` Instanzen ist der Anfangswert der {{jsxref("Array/Array", "Array")}} Konstruktor.
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
  - : Enthält Eigenschaftsnamen, die vor der ES2015-Version nicht in den ECMAScript-Standard aufgenommen wurden und die für [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) Anweisungsbindung ignoriert werden.

Diese Eigenschaften sind eigene Eigenschaften jeder `Array` Instanz.

- {{jsxref("Array/length", "length")}}
  - : Gibt die Anzahl der Elemente in einem Array wieder.

## Instanzmethoden

- {{jsxref("Array.prototype.at()")}}
  - : Gibt das Array-Element am angegebenen Index zurück. Akzeptiert negative Ganzzahlen, die vom letzten Element zurückzählen.
- {{jsxref("Array.prototype.concat()")}}
  - : Gibt ein neues Array zurück, das das aufrufende Array mit anderen Array(s) und/oder Wert(en) kombiniert.
- {{jsxref("Array.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Array-Elementen innerhalb eines Arrays.
- {{jsxref("Array.prototype.entries()")}}
  - : Gibt ein neues [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index in einem Array enthält.
- {{jsxref("Array.prototype.every()")}}
  - : Gibt `false` zurück, wenn es ein Element im Array findet, das nicht die bereitgestellte Testfunktion erfüllt. Andernfalls gibt es `true` zurück.
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
  - : Gibt ein neues Array mit allen Unter-Array-Elementen zurück, die rekursiv bis zur angegebenen Tiefe zusammengefügt sind.
- {{jsxref("Array.prototype.flatMap()")}}
  - : Gibt ein neues Array zurück, das durch Anwenden einer gegebenen Callback-Funktion auf jedes Element des aufrufenden Arrays gebildet wird, und dann das Ergebnis um eine Ebene aufspaltet.
- {{jsxref("Array.prototype.forEach()")}}
  - : Ruft eine Funktion für jedes Element im aufrufenden Array auf.
- {{jsxref("Array.prototype.includes()")}}
  - : Bestimmt, ob das aufrufende Array einen Wert enthält, und gibt entsprechend `true` oder `false` zurück.
- {{jsxref("Array.prototype.indexOf()")}}
  - : Gibt den ersten (kleinsten) Index zurück, an dem ein gegebenes Element im anrufenden Array gefunden werden kann.
- {{jsxref("Array.prototype.join()")}}
  - : Gibt einen neuen String zurück, der die Verkettung aller Elemente in diesem Array darstellt, getrennt durch Kommas oder einen angegebenen Trennzeichen-String.
- {{jsxref("Array.prototype.keys()")}}
  - : Gibt einen neuen [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) zurück, der die Schlüssel für jeden Index im anrufenden Array enthält.
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index zurück, an dem ein gegebenes Element im anrufenden Array gefunden werden kann, oder `-1`, wenn keines gefunden wird.
- {{jsxref("Array.prototype.map()")}}
  - : Gibt ein neues Array zurück, das die Ergebnisse des Aufrufs einer Funktion auf jedes Element im anrufenden Array enthält.
- {{jsxref("Array.prototype.pop()")}}
  - : Entfernt das letzte Element aus einem Array und gibt dieses Element zurück.
- {{jsxref("Array.prototype.push()")}}
  - : Fügt ein oder mehrere Elemente am Ende eines Arrays hinzu und gibt die neue `length` des Arrays zurück.
- {{jsxref("Array.prototype.reduce()")}}
  - : Führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion für jedes Element des Arrays (von links nach rechts) aus, um es auf einen einzigen Wert zu reduzieren.
- {{jsxref("Array.prototype.reduceRight()")}}
  - : Führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion für jedes Element des Arrays (von rechts nach links) aus, um es auf einen einzigen Wert zu reduzieren.
- {{jsxref("Array.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays _in place_ um. (Das Erste wird zum Letzten, das Letzte zum Ersten.)
- {{jsxref("Array.prototype.shift()")}}
  - : Entfernt das erste Element aus einem Array und gibt dieses Element zurück.
- {{jsxref("Array.prototype.slice()")}}
  - : Extrahiert einen Abschnitt des aufrufenden Arrays und gibt ein neues Array zurück.
- {{jsxref("Array.prototype.some()")}}
  - : Gibt `true` zurück, wenn es ein Element im Array findet, das die bereitgestellte Testfunktion erfüllt. Andernfalls gibt es `false` zurück.
- {{jsxref("Array.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays an Ort und Stelle und gibt das Array zurück.
- {{jsxref("Array.prototype.splice()")}}
  - : Fügt Elemente zu einem Array hinzu und/oder entfernt sie.
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : Gibt einen lokalisierten String zurück, der das aufrufende Array und seine Elemente darstellt. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}} Methode.
- {{jsxref("Array.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das Originalarray zu ändern.
- {{jsxref("Array.prototype.toSorted()")}}
  - : Gibt ein neues Array zurück, bei dem die Elemente in aufsteigender Reihenfolge sortiert sind, ohne das Originalarray zu ändern.
- {{jsxref("Array.prototype.toSpliced()")}}
  - : Gibt ein neues Array mit einigen entfernten und/oder an einem gegebenen Index ersetzten Elementen zurück, ohne das Originalarray zu verändern.
- {{jsxref("Array.prototype.toString()")}}
  - : Gibt einen String zurück, der das aufrufende Array und seine Elemente darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.
- {{jsxref("Array.prototype.unshift()")}}
  - : Fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu und gibt die neue `length` des Arrays zurück.
- {{jsxref("Array.prototype.values()")}}
  - : Gibt ein neues [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Objekt zurück, das die Werte für jeden Index im Array enthält.
- {{jsxref("Array.prototype.with()")}}
  - : Gibt ein neues Array mit dem Element am gegebenen Index, ersetzt durch den gegebenen Wert, ohne das Originalarray zu verändern.
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
  - : Ist standardmäßig ein Alias für die [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values) Methode.

## Beispiele

Dieser Abschnitt bietet einige Beispiele für häufige Array-Operationen in JavaScript.

> [!NOTE]
> Falls Sie noch nicht mit den Grundlagen von Arrays vertraut sind, lesen Sie zuerst [JavaScript Erste Schritte: Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays), das erklärt, [was Arrays sind](/de/docs/Learn_web_development/Core/Scripting/Arrays#what_is_an_array), und andere Beispiele für häufige Array-Operationen enthält.

### Ein Array erstellen

Dieses Beispiel zeigt drei Möglichkeiten, ein neues Array zu erstellen: zuerst mit der [Array-Literal-Notation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation), dann mit dem [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) Konstruktor und schließlich mit [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), um das Array aus einem String zu erstellen.

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

### Erstellen eines Strings aus einem Array

Dieses Beispiel verwendet die [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) Methode, um einen String aus dem `fruits` Array zu erstellen.

```js
const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Apple, Banana"
```

### Zugriff auf ein Array-Element über dessen Index

Dieses Beispiel zeigt, wie auf Elemente im `fruits` Array zugegriffen wird, indem die Indexnummer ihrer Position im Array angegeben wird.

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

Dieses Beispiel verwendet die [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) Methode, um die Position (Index) des Strings `"Banana"` im `fruits` Array zu finden.

```js
const fruits = ["Apple", "Banana"];
console.log(fruits.indexOf("Banana"));
// 1
```

### Überprüfen, ob ein Array ein bestimmtes Element enthält

Dieses Beispiel zeigt zwei Möglichkeiten, um zu überprüfen, ob das `fruits` Array `"Banana"` und `"Cherry"` enthält: zuerst mit der [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) Methode, und dann mit der [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) Methode, um auf einen Indexwert zu testen, der nicht `-1` ist.

```js
const fruits = ["Apple", "Banana"];

fruits.includes("Banana"); // true
fruits.includes("Cherry"); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; // false
```

### Ein Element an ein Array anhängen

Dieses Beispiel verwendet die [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) Methode, um einen neuen String an das `fruits` Array anzuhängen.

```js
const fruits = ["Apple", "Banana"];
const newLength = fruits.push("Orange");
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3
```

### Das letzte Element aus einem Array entfernen

Dieses Beispiel verwendet die [`pop()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) Methode, um das letzte Element aus dem `fruits` Array zu entfernen.

```js
const fruits = ["Apple", "Banana", "Orange"];
const removedItem = fruits.pop();
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange
```

> [!NOTE]
> `pop()` kann nur verwendet werden, um das letzte Element aus einem Array zu entfernen. Um mehrere Elemente vom Ende eines Arrays zu entfernen, siehe das nächste Beispiel.

### Mehrere Elemente vom Ende eines Arrays entfernen

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Methode, um die letzten 3 Elemente aus dem `fruits` Array zu entfernen.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]
```

### Ein Array auf nur seine ersten N Elemente reduzieren

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Methode, um das `fruits` Array auf nur seine ersten 2 Elemente zu kürzen.

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

Dieses Beispiel verwendet die [`shift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) Methode, um das erste Element aus dem `fruits` Array zu entfernen.

```js
const fruits = ["Apple", "Banana"];
const removedItem = fruits.shift();
console.log(fruits);
// ["Banana"]
console.log(removedItem);
// Apple
```

> [!NOTE]
> `shift()` kann nur verwendet werden, um das erste Element aus einem Array zu entfernen. Um mehrere Elemente vom Anfang eines Arrays zu entfernen, siehe das nächste Beispiel.

### Mehrere Elemente vom Anfang eines Arrays entfernen

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Methode, um die ersten 3 Elemente aus dem `fruits` Array zu entfernen.

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

Dieses Beispiel verwendet die [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) Methode, um an Index `0` ein neues Element zum `fruits` Array hinzuzufügen — es wird so zum neuen ersten Element im Array.

```js
const fruits = ["Banana", "Mango"];
const newLength = fruits.unshift("Strawberry");
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3
```

### Ein einzelnes Element per Index entfernen

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Methode, um den String `"Banana"` aus dem `fruits` Array zu entfernen — indem die Indexposition von `"Banana"` angegeben wird.

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

### Mehrere Elemente per Index entfernen

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Methode, um die Strings `"Banana"` und `"Strawberry"` aus dem `fruits` Array zu entfernen — indem die Indexposition von `"Banana"` zusammen mit einer Anzahl der insgesamt zu entfernenden Elemente angegeben wird.

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

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) Methode, um die letzten 2 Elemente im `fruits` Array durch neue Elemente zu ersetzen.

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

Dieses Beispiel verwendet eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife, um über das `fruits` Array zu iterieren und jedes Element in der Konsole zu protokollieren.

```js
const fruits = ["Apple", "Mango", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Apple
// Mango
// Cherry
```

Aber `for...of` ist nur eine von vielen Möglichkeiten, über ein Array zu iterieren; für weitere Möglichkeiten siehe [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration) und die Dokumentation für die Methoden [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) und [`reduceRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) — und siehe das nächste Beispiel, das die Methode [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) verwendet.

### Eine Funktion auf jedes Element in einem Array aufrufen

Dieses Beispiel verwendet die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) Methode, um eine Funktion auf jedes Element im `fruits` Array aufzurufen; die Funktion verursacht, dass jedes Element, zusammen mit dessen Indexnummer, in der Konsole protokolliert wird.

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

Dieses Beispiel verwendet die [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) Methode, um das `fruits` Array mit einem `moreFruits` Array zu einem neuen `combinedFruits` Array zusammenzuführen. Beachten Sie, dass `fruits` und `moreFruits` unverändert bleiben.

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

Dieses Beispiel zeigt drei Wege, um ein neues Array aus dem bestehenden `fruits` Array zu erstellen: zuerst mit dem [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), dann mit der [`from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) Methode und dann mit der [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) Methode.

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

Alle eingebauten Array-Kopiervorgänge ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)) erstellen {{Glossary("Shallow_copy", "flache Kopien")}}. Wenn Sie stattdessen eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines Arrays möchten, können Sie {{jsxref("JSON.stringify()")}} verwenden, um das Array in einen JSON-String zu konvertieren, und dann {{jsxref("JSON.parse()")}}, um den String zurück in ein neues Array zu konvertieren, das vollständig unabhängig vom Original-Array ist.

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

Sie können auch tiefe Kopien mit der [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) Methode erstellen, die den Vorteil hat, dass [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in der Quelle in die neue Kopie _übertragen_ werden können, anstatt nur geklont zu werden.

Schließlich ist es wichtig zu verstehen, dass das Zuweisen eines bestehenden Arrays zu einer neuen Variable weder eine Kopie des Arrays noch seiner Elemente erstellt. Stattdessen ist die neue Variable nur eine Referenz oder ein Alias für das Original-Array; das heißt, der Name des Original-Arrays und der neue Variablenname sind nur zwei Namen für dasselbe Objekt (und werden daher immer als [streng äquivalent](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using) bewertet). Daher führen alle Änderungen an entweder dem Wert des Original-Arrays oder dem Wert der neuen Variablen dazu, dass sich auch das andere ändert:

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

Das Folgende erstellt ein Schachbrett als zweidimensionales Array von Zeichenfolgen. Der erste Zug wird gemacht, indem der `'p'` in `board[6][4]` nach `board[4][4]` kopiert wird. Die alte Position an `[6][4]` wird leer gemacht.

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

### Ein Array verwenden, um eine Menge von Werten tabellarisch darzustellen

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

### Ein Array aus dem Ergebnis eines Abgleichs erstellen

Das Ergebnis eines Abgleichs zwischen einem {{jsxref("RegExp")}} und einem String kann ein JavaScript-Array erstellen, das Eigenschaften und Elemente hat, die Informationen über den Abgleich liefern. Ein solches Array wird von {{jsxref("RegExp.prototype.exec()")}} und {{jsxref("String.prototype.match()")}} zurückgegeben.

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

Für weitere Informationen über das Ergebnis eines Abgleichs siehe die Seiten zu {{jsxref("RegExp.prototype.exec()")}} und {{jsxref("String.prototype.match()")}}.

### Ändern des ursprünglichen Arrays in Iterationsmethoden

[Iterationsmethoden](#iterativmethoden) verändern das Array, auf dem sie aufgerufen werden, nicht, aber die Funktion, die als `callbackFn` bereitgestellt wird, kann dies tun. Der entscheidende Grundsatz dabei ist, dass nur Indizes zwischen 0 und `arrayLength - 1` besucht werden, wobei `arrayLength` die Länge des Arrays zur Zeit des ersten Aufrufs der Array-Methode ist, aber das an den Callback übergebene Element ist der Wert zum Zeitpunkt, an dem der Index besucht wird. Daher:

- `callbackFn` wird keine Elemente besuchen, die über die ursprüngliche Länge des Arrays hinaus hinzugefügt werden, wenn der Aufruf der Iterationsmethode begonnen wird.
- Änderungen an bereits besuchten Indizes führen nicht dazu, dass `callbackFn` erneut für sie aufgerufen wird.
- Wenn ein bestehendes, noch nicht besuchtes Element des Arrays von `callbackFn` geändert wird, ist sein Wert beim Aufruf von `callbackFn` der Wert zu dem Zeitpunkt, an dem das Element besucht wird. Entfernte Elemente werden nicht besucht.

> [!WARNING]
> Gleichzeitige Änderungen der oben beschriebenen Art führen häufig zu schwierig zu verstehendem Code und sollten im Allgemeinen vermieden werden (außer in Spezialfällen).

Die folgenden Beispiele nutzen die Methode `forEach` als Beispiel, aber andere Methoden, die Indizes in aufsteigender Reihenfolge besuchen, arbeiten auf die gleiche Weise. Wir definieren zuerst eine Hilfsfunktion:

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

Modifikation zu Indizes, die noch nicht besucht wurden, werden sichtbar, sobald der Index erreicht ist:

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

Modifikationen zu bereits besuchten Indizes ändern das Iterationsverhalten nicht, obwohl das Array später anders sein wird:

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

Das Einfügen von _n_ Elementen an noch nicht besuchte Indizes, die kleiner als die ursprüngliche Array-Länge sind, macht, dass sie besucht werden. Die letzten _n_ Elemente im ursprünglichen Array, die jetzt einen Index größer als die ursprüngliche Array-Länge haben, werden nicht besucht:

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

Das Einfügen von _n_ Elementen mit einem Index größer als die ursprüngliche Array-Länge wird nicht dazu führen, dass sie besucht werden:

```js
testSideEffect((arr) => arr.push("new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4, new], index: 1, elem: e2
// array: [e1, e2, e3, e4, new, new], index: 2, elem: e3
// array: [e1, e2, e3, e4, new, new, new], index: 3, elem: e4
// Final array: [e1, e2, e3, e4, new, new, new, new]
```

Das Einfügen von _n_ Elementen an bereits besuchte Indizes führt nicht dazu, dass sie besucht werden, aber es verschiebt die verbleibenden Elemente um _n_ zurück, sodass der aktuelle Index und die _n - 1_ Elemente davor erneut besucht werden:

```js
testSideEffect((arr, index) => arr.splice(index, 0, "new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [new, e1, e2, e3, e4], index: 1, elem: e1
// array: [new, new, e1, e2, e3, e4], index: 2, elem: e1
// array: [new, new, new, e1, e2, e3, e4], index: 3, elem: e1
// Final array: [new, new, new, new, e1, e2, e3, e4]
// e1 keeps getting visited because it keeps getting shifted back
```

Das Löschen von _n_ Elementen an noch nicht besuchten Indizes führt dazu, dass sie nicht mehr besucht werden. Da das Array geschrumpft ist, werden die letzten _n_ Iterationen auf nicht mehr vorhandene Indizes stoßen. Wenn die Methode nicht vorhandene Indizes ignoriert (siehe [Array-Methoden und leere Slots](#array-methoden_und_leere_slots)), werden die letzten _n_ Iterationen übersprungen; andernfalls erhalten sie `undefined`:

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

Das Löschen von _n_ Elementen an bereits besuchten Indizes ändert nicht die Tatsache, dass sie besucht wurden, bevor sie gelöscht wurden. Da das Array geschrumpft ist, werden die nächsten _n_ Elemente nach dem aktuellen Index übersprungen. Wenn die Methode nicht vorhandene Indizes ignoriert, werden die letzten _n_ Iterationen übersprungen; andernfalls erhalten sie `undefined`:

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

Für Methoden, die in absteigender Reihenfolge des Index iterieren, führt das Einfügen dazu, dass Elemente übersprungen werden, und das Löschen dazu, dass Elemente mehrfach besucht werden. Passen Sie den obigen Code selbst an, um die Effekte zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
