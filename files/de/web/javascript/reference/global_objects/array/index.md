---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

Das **`Array`** Objekt, ähnlich wie Arrays in anderen Programmiersprachen, ermöglicht [das Speichern einer Sammlung mehrerer Elemente unter einem einzigen Variablennamen](/de/docs/Learn/JavaScript/First_steps/Arrays) und verfügt über Methoden zur [Durchführung gängiger Array-Operationen](#beispiele).

## Beschreibung

In JavaScript sind Arrays keine [Primitiven](/de/docs/Glossary/Primitive), sondern `Array`-Objekte mit den folgenden Kernmerkmalen:

- **JavaScript-Arrays sind dynamisch** und **können eine Mischung aus verschiedenen [Datentypen](/de/docs/Web/JavaScript/Data_structures) enthalten**. (Wenn diese Merkmale unerwünscht sind, verwenden Sie stattdessen [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays).)
- **JavaScript-Arrays sind keine assoziativen Arrays** und daher können Array-Elemente nicht mit beliebigen Zeichenketten als Indizes zugegriffen werden, sondern nur mit nicht-negativen ganzen Zahlen (oder deren jeweiligen String-Form).
- **JavaScript-Arrays sind [nullbasiert](https://de.wikipedia.org/wiki/Nullbasierte_Numierung)**: Das erste Element eines Arrays befindet sich bei Index `0`, das zweite bei Index `1` und so weiter — und das letzte Element befindet sich beim Wert der {{jsxref("Array/length", "length")}}-Eigenschaft des Arrays minus `1`.
- **JavaScript [Array-Kopiervorgänge](#ein_array_kopieren) erzeugen [flache Kopien](/de/docs/Glossary/Shallow_copy)**. (Alle standardmäßigen eingebauten Kopiervorgänge mit _beliebigen_ JavaScript-Objekten erzeugen flache Kopien, anstatt [tiefe Kopien](/de/docs/Glossary/Deep_copy)).

### Array-Indizes

`Array`-Objekte können keine beliebigen Zeichenketten als Elementindizes verwenden (wie in einem [assoziativen Array](https://de.wikipedia.org/wiki/Assoziatives_Array)), sondern müssen nicht-negative ganze Zahlen (oder deren jeweiligen String-Form) verwenden. Das Setzen oder Zugreifen mit Nicht-Integern wird kein Element aus der Array-Liste selbst setzen oder abrufen, sondern eine mit dieser Array-Objekteigenschaft verknüpfte Variable setzen oder abrufen. Die Objekteigenschaften des Arrays und die Liste der Array-Elemente sind getrennt, und die [Durchlauf- und Veränderungsoperationen](/de/docs/Web/JavaScript/Guide/Indexed_collections#array_methods) des Arrays können auf diese benannten Eigenschaften nicht angewendet werden.

Array-Elemente sind Objekteigenschaften, genauso wie `toString` eine Eigenschaft ist (um jedoch spezifisch zu sein, ist `toString()` eine Methode). Nichtsdestotrotz würde ein Versuch, auf ein Element eines Arrays wie folgt zuzugreifen, einen Syntaxfehler auslösen, da der Eigenschaftsname nicht gültig ist:

```js-nolint example-bad
arr.0; // a syntax error
```

JavaScript-Syntax erfordert, dass Eigenschaften, die mit einer Ziffer beginnen, unter Verwendung der [Klammernnotation](/de/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties) aufgerufen werden, anstatt der [Punktenotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Es ist auch möglich, die Array-Indizes zu zitieren (z.B. `years['2']` anstelle von `years[2]`), obwohl das normalerweise nicht notwendig ist.

Die `2` in `years[2]` wird vom JavaScript-Engine durch eine implizite `toString`-Konvertierung in eine Zeichenkette umgewandelt. Infolgedessen würden `'2'` und `'02'` auf zwei verschiedene Positionen im `years`-Objekt verweisen, und das folgende Beispiel könnte `true` sein:

```js
console.log(years["2"] !== years["02"]);
```

Nur `years['2']` ist ein tatsächlicher Array-Index. `years['02']` ist eine beliebige String-Eigenschaft, die in der Array-Iteration nicht besucht wird.

### Beziehung zwischen Länge und numerischen Eigenschaften

Die {{jsxref("Array/length", "length")}}-Eigenschaft eines JavaScript-Arrays und die numerischen Eigenschaften sind miteinander verbunden.

Mehrere der eingebauten Array-Methoden (z.B. {{jsxref("Array/join", "join()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/indexOf", "indexOf()")}}, etc.) berücksichtigen den Wert der {{jsxref("Array/length", "length")}}-Eigenschaft eines Arrays, wenn sie aufgerufen werden.

Andere Methoden (z.B. {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}}, etc.) führen ebenfalls zu Updates der {{jsxref("Array/length", "length")}}-Eigenschaft eines Arrays.

```js
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
```

Wenn eine Eigenschaft in einem JavaScript-Array gesetzt wird, wenn die Eigenschaft ein gültiger Array-Index ist und dieser Index außerhalb der aktuellen Grenzen des Arrays liegt, wird die Engine die {{jsxref("Array/length", "length")}}-Eigenschaft des Arrays entsprechend aktualisieren:

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

Dies wird auf der Seite {{jsxref("Array/length", "length")}} weiter erläutert.

### Array-Methoden und leere Slots

Array-Methoden verhalten sich unterschiedlich, wenn sie auf leere Plätze in [spärlichen Arrays](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) stoßen. Im Allgemeinen behandeln ältere Methoden (z.B. `forEach`) leere Plätze anders als Indizes, die `undefined` enthalten.

Methoden, die leere Plätze speziell behandeln, sind: {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/copyWithin", "copyWithin()")}}, {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/reduce", "reduce()")}}, {{jsxref("Array/reduceRight", "reduceRight()")}}, {{jsxref("Array/reverse", "reverse()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/sort", "sort()")}}, und {{jsxref("Array/splice", "splice()")}}. Iterationsmethoden wie `forEach` besuchen leere Plätze überhaupt nicht. Andere Methoden wie `concat`, `copyWithin`, usw. erhalten leere Plätze beim Kopieren, so dass das Array letztlich immer noch spärlich ist.

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

Neuere Methoden (z.B. `keys`) behandeln leere Plätze nicht speziell und behandeln sie, als ob sie `undefined` enthalten. Methoden, die leere Plätze mit `undefined`-Elementen zusammenführen, sind: {{jsxref("Array/entries", "entries()")}}, {{jsxref("Array/fill", "fill()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/includes", "includes()")}}, {{jsxref("Array/join", "join()")}}, {{jsxref("Array/keys", "keys()")}}, {{jsxref("Array/toLocaleString", "toLocaleString()")}}, {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}}, {{jsxref("Array/values", "values()")}}, und {{jsxref("Array/with", "with()")}}.

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

### Kopiermethoden und verändernde Methoden

Einige Methoden mutieren nicht das bestehende Array, auf das die Methode aufgerufen wurde, sondern geben ein neues Array zurück. Sie tun dies, indem sie zuerst ein neues Array konstruieren und es dann mit Elementen füllen. Die Kopie erfolgt immer [_flach_](/de/docs/Glossary/Shallow_copy) — die Methode kopiert nie etwas über das anfangs erstellte Array hinaus. Elemente der ursprünglichen Arrays werden folgendermaßen in das neue Array kopiert:

- Objekte: Die Objektreferenz wird in das neue Array kopiert. Sowohl das ursprüngliche als auch das neue Array verweisen auf dasselbe Objekt. Das bedeutet, wenn ein referenziertes Objekt geändert wird, sind die Änderungen sowohl im neuen als auch im ursprünglichen Array sichtbar.
- Primitive Typen wie Zeichenketten, Zahlen und Booleans (nicht {{jsxref("String")}}, {{jsxref("Number")}}, und {{jsxref("Boolean")}} Objekte): Ihre Werte werden in das neue Array kopiert.

Andere Methoden ändern das Array, auf das die Methode aufgerufen wurde, wobei sich der Rückgabewert je nach Methode unterscheidet: manchmal eine Referenz auf dasselbe Array, manchmal die Länge des neuen Arrays.

Die folgenden Methoden erstellen neue Arrays, indem sie [`this.constructor[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) aufrufen, um den Konstruktor zu bestimmen, der verwendet werden soll: {{jsxref("Array/concat", "concat()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/flat", "flat()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/slice", "slice()")}}, und {{jsxref("Array/splice", "splice()")}} (um das zurückgegebene Array der entfernten Elemente zu erstellen).

Die folgenden Methoden erstellen immer neue Arrays mit dem `Array`-Basiskonstruktor: {{jsxref("Array/toReversed", "toReversed()")}}, {{jsxref("Array/toSorted", "toSorted()")}}, {{jsxref("Array/toSpliced", "toSpliced()")}}, und {{jsxref("Array/with", "with()")}}.

Die folgende Tabelle listet die Methoden auf, die das ursprüngliche Array verändern und die entsprechenden nicht-verändernden Alternativen:

| Verändernde Methode                            | Nicht-verändernde Alternative                            |
| ---------------------------------------------- | -------------------------------------------------------- |
| {{jsxref("Array/copyWithin", "copyWithin()")}} | Keine Ein-Methode-Alternative                            |
| {{jsxref("Array/fill", "fill()")}}             | Keine Ein-Methode-Alternative                            |
| {{jsxref("Array/pop", "pop()")}}               | {{jsxref("Array/slice", "slice(0, -1)")}}                |
| {{jsxref("Array/push", "push(v1, v2)")}}       | {{jsxref("Array/concat", "concat([v1, v2])")}}           |
| {{jsxref("Array/reverse", "reverse()")}}       | {{jsxref("Array/toReversed", "toReversed()")}}           |
| {{jsxref("Array/shift", "shift()")}}           | {{jsxref("Array/slice", "slice(1)")}}                    |
| {{jsxref("Array/sort", "sort()")}}             | {{jsxref("Array/toSorted", "toSorted()")}}               |
| {{jsxref("Array/splice", "splice()")}}         | {{jsxref("Array/toSpliced", "toSpliced()")}}             |
| {{jsxref("Array/unshift", "unshift(v1, v2)")}} | {{jsxref("Array/toSpliced", "toSpliced(0, 0, v1, v2)")}} |

Ein einfacher Weg, eine verändernde Methode in eine nicht-verändernde Alternative zu ändern, besteht darin, die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder {{jsxref("Array/slice", "slice()")}} zu verwenden, um zuerst eine Kopie zu erstellen:

```js-nolint
arr.copyWithin(0, 1, 2); // mutates arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr
```

### Iterative Methoden

Viele Array-Methoden nehmen eine Callback-Funktion als Argument. Die Callback-Funktion wird der Reihe nach und höchstens einmal für jedes Element im Array aufgerufen, und der Rückgabewert der Callback-Funktion wird verwendet, um den Rückgabewert der Methode zu bestimmen. Sie alle haben die gleiche Signatur:

```js-nolint
method(callbackFn, thisArg)
```

Dabei nimmt `callbackFn` drei Argumente an:

- `element`
  - : Das aktuelle Element, das im Array verarbeitet wird.
- `index`
  - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `array`
  - : Das Array, auf das die Methode aufgerufen wurde.

Was `callbackFn` zurückzugeben erwartet wird, hängt von der aufgerufenen Array-Methode ab.

Das `thisArg`-Argument (Standardwert `undefined`) wird als `this`-Wert verwendet, wenn `callbackFn` aufgerufen wird. Der letztlich durch `callbackFn` beobachtbare `this`-Wert wird gemäß den [üblichen Regeln](/de/docs/Web/JavaScript/Reference/Operators/this) bestimmt: Wenn `callbackFn` [nicht-strikt](/de/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution) ist, werden primitive `this`-Werte in Objekte umgewandelt, und `undefined`/`null` wird mit [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ersetzt. Das `thisArg`-Argument ist für jeden `callbackFn`, der mit einer [Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definiert ist, irrelevant, da Arrow-Funktionen kein eigenes `this`-[Binding](/de/docs/Glossary/binding) haben.

Das `array`-Argument, das an `callbackFn` übergeben wird, ist am nützlichsten, wenn Sie während der Iteration einen anderen Index lesen möchten, da Sie möglicherweise nicht immer eine vorhandene Variable haben, die auf das aktuelle Array verweist. Sie sollten das Array während der Iteration im Allgemeinen nicht verändern (siehe [Ändern des anfänglichen Arrays in iterativen Methoden](#ändern_des_anfänglichen_arrays_in_iterativen_methoden)), aber Sie können dieses Argument auch dafür verwenden. Das `array`-Argument ist _nicht_ das Array, das erstellt wird, im Fall von Methoden wie `map()`, `filter()`, und `flatMap()` — es gibt keine Möglichkeit, von der Callback-Funktion aus auf das erstellte Array zuzugreifen.

Alle iterativen Methoden sind [kopierend](#kopiermethoden_und_verändernde_methoden) und [generisch](#generische_array-methoden), obwohl sie sich unterschiedlich bei [leeren Plätzen](#array-methoden_und_leere_slots) verhalten.

Die folgenden Methoden sind iterativ: {{jsxref("Array/every", "every()")}}, {{jsxref("Array/filter", "filter()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/flatMap", "flatMap()")}}, {{jsxref("Array/forEach", "forEach()")}}, {{jsxref("Array/map", "map()")}}, und {{jsxref("Array/some", "some()")}}.

Insbesondere {{jsxref("Array/every", "every()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, und {{jsxref("Array/some", "some()")}} rufen `callbackFn` nicht immer für jedes Element auf — sie beenden die Iteration, sobald der Rückgabewert bestimmt ist.

Die Methoden {{jsxref("Array/reduce", "reduce()")}} und {{jsxref("Array/reduceRight", "reduceRight()")}} nehmen ebenfalls eine Callback-Funktion an und führen sie höchstens einmal für jedes Element im Array aus, aber sie haben leicht unterschiedliche Signaturen als typische iterative Methoden (zum Beispiel akzeptieren sie kein `thisArg`).

Die Methode {{jsxref("Array/sort", "sort()")}} nimmt ebenfalls eine Callback-Funktion an, aber es ist keine iterative Methode. Sie verändert das Array an Ort und Stelle, akzeptiert kein `thisArg` und kann den Callback mehrfach auf einem Index aufrufen.

Iterative Methoden durchlaufen das Array wie folgt (mit vielen technischen Details ausgelassen):

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

1. Nicht alle Methoden führen den `i in this`-Test durch. Die Methoden `find`, `findIndex`, `findLast`, und `findLastIndex` tun es nicht, aber andere Methoden tun es.
2. Die `length` wird vor Beginn der Schleife gespeichert. Dies beeinflusst, wie Einfügungen und Löschungen während der Iteration behandelt werden (siehe [Ändern des anfänglichen Arrays in iterativen Methoden](#ändern_des_anfänglichen_arrays_in_iterativen_methoden)).
3. Die Methode merkt sich nicht die Inhalte des Arrays, daher kann ein nachträglich geänderter Index den neuen Wert beobachten.
4. Der obige Code iteriert das Array in aufsteigender Reihenfolge des Indexes. Einige Methoden iterieren in absteigender Reihenfolge des Indexes (`for (let i = length - 1; i >= 0; i--)`): `reduceRight()`, `findLast()`, und `findLastIndex()`.
5. `reduce` und `reduceRight` haben leicht unterschiedliche Signaturen und beginnen nicht immer beim ersten/letzten Element.

### Generische Array-Methoden

Array-Methoden sind immer generisch — sie greifen nicht auf interne Daten des Array-Objekts zu. Sie greifen nur über die `length`-Eigenschaft und die indizierten Elemente auf die Array-Elemente zu. Das bedeutet, dass sie auch auf array-ähnlichen Objekten aufgerufen werden können.

```js
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
```

#### Normalisierung der Längeneigenschaft

Die `length`-Eigenschaft wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) und dann in den Bereich zwischen 0 und 2<sup>53</sup> - 1 gezwängt. `NaN` wird zu `0`, sodass selbst wenn `length` nicht vorhanden oder `undefined` ist, es sich so verhält, als ob es den Wert `0` hätte.

Die Sprache vermeidet es, `length` auf eine [unsichere Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) zu setzen. Alle eingebauten Methoden lösen einen {{jsxref("TypeError")}} aus, wenn `length` auf eine Zahl größer als 2<sup>53</sup> - 1 gesetzt wird. Da jedoch die {{jsxref("Array/length", "length")}}-Eigenschaft von Arrays einen Fehler auslöst, wenn sie auf größer als 2<sup>32</sup> - 1 gesetzt wird, wird die sichere Integer-Schwelle normalerweise nicht erreicht, es sei denn, die Methode wird auf einem Nicht-Array-Objekt aufgerufen.

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

Der Begriff [_array-ähnliches Objekt_](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) bezieht sich auf jedes Objekt, das während der `length`-Konvertierung, die oben beschrieben wurde, keinen Fehler auslöst. In der Praxis wird von einem solchen Objekt erwartet, tatsächlich eine `length`-Eigenschaft zu haben und indizierte Elemente im Bereich `0` bis `length - 1` zu haben. (Wenn es nicht alle Indizes hat, wird es funktional äquivalent zu einem [spärlichen Array](#array-methoden_und_leere_slots) sein.) Jeder ganzzahlige Index kleiner als null oder größer als `length - 1` wird ignoriert, wenn eine Array-Methode auf ein array-ähnliches Objekt angewendet wird.

Viele DOM-Objekte sind array-ähnlich — zum Beispiel, [`NodeList`](/de/docs/Web/API/NodeList) und [`HTMLCollection`](/de/docs/Web/API/HTMLCollection). Das [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)-Objekt ist ebenfalls array-ähnlich. Sie können Array-Methoden auf sie aufrufen, auch wenn sie diese Methoden selbst nicht haben.

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
  - : Erstellt eine neue `Array`-Instanz mit einer variablen Anzahl von Argumenten, unabhängig von der Anzahl oder dem Typ der Argumente.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Array.prototype` definiert und werden von allen `Array`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Array`-Instanzen ist der Anfangswert der {{jsxref("Array/Array", "Array")}}-Konstruktor.
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
  - : Enthält Eigenschaftsnamen, die im ECMAScript-Standard vor der ES2015-Version nicht enthalten waren und die für [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Anweisungsbindungen ignoriert werden.

Diese Eigenschaften sind eigene Eigenschaften jeder `Array`-Instanz.

- {{jsxref("Array/length", "length")}}
  - : Reflektiert die Anzahl der Elemente in einem Array.

## Instanzmethoden

- {{jsxref("Array.prototype.at()")}}
  - : Gibt das Array-Element an dem angegebenen Index zurück. Akzeptiert negative Ganzzahlen, die vom letzten Element aus zählen.
- {{jsxref("Array.prototype.concat()")}}
  - : Gibt ein neues Array zurück, das das aufrufende Array, verbunden mit anderen Arrays und/oder Werten, darstellt.
- {{jsxref("Array.prototype.copyWithin()")}}
  - : Kopiert eine Sequenz von Array-Elementen innerhalb eines Arrays.
- {{jsxref("Array.prototype.entries()")}}
  - : Gibt ein neues [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Schlüssel/Werte-Paare für jeden Index in einem Array enthält.
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
  - : Gibt ein neues Array zurück, in welches alle Unter-Array-Elemente rekursiv bis zur angegebenen Tiefe eingekettet sind.
- {{jsxref("Array.prototype.flatMap()")}}
  - : Gibt ein neues Array zurück, das durch Anwenden einer gegebenen Callback-Funktion auf jedes Element des aufrufenden Arrays gebildet wird, und dann wird das Ergebnis um eine Ebene abgeflacht.
- {{jsxref("Array.prototype.forEach()")}}
  - : Ruft für jedes Element im aufrufenden Array eine Funktion auf.
- {{jsxref("Array.prototype.includes()")}}
  - : Bestimmt, ob das aufrufende Array einen Wert enthält, und gibt `true` oder `false` zurück.
- {{jsxref("Array.prototype.indexOf()")}}
  - : Gibt den ersten (niedrigsten) Index zurück, an dem ein bestimmtes Element im aufrufenden Array gefunden werden kann.
- {{jsxref("Array.prototype.join()")}}
  - : Verknüpft alle Elemente eines Arrays zu einem String.
- {{jsxref("Array.prototype.keys()")}}
  - : Gibt einen neuen [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, der die Schlüssel für jeden Index im aufrufenden Array enthält.
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : Gibt den letzten (größten) Index zurück, an dem ein bestimmtes Element im aufrufenden Array gefunden werden kann, oder `-1`, wenn keines gefunden wird.
- {{jsxref("Array.prototype.map()")}}
  - : Gibt ein neues Array zurück, das die Ergebnisse des Aufrufens einer Funktion auf jedem Element des aufrufenden Arrays enthält.
- {{jsxref("Array.prototype.pop()")}}
  - : Entfernt das letzte Element aus einem Array und gibt dieses Element zurück.
- {{jsxref("Array.prototype.push()")}}
  - : Fügt ein oder mehrere Elemente an das Ende eines Arrays hinzu und gibt die neue `length` des Arrays zurück.
- {{jsxref("Array.prototype.reduce()")}}
  - : Führt eine benutzerdefinierte "Reduce"-Callback-Funktion auf jedem Element des Arrays aus (von links nach rechts), um es auf einen einzelnen Wert zu reduzieren.
- {{jsxref("Array.prototype.reduceRight()")}}
  - : Führt eine benutzerdefinierte "Reduce"-Callback-Funktion auf jedem Element des Arrays aus (von rechts nach links), um es auf einen einzelnen Wert zu reduzieren.
- {{jsxref("Array.prototype.reverse()")}}
  - : Kehrt die Reihenfolge der Elemente eines Arrays _an Ort und Stelle_ um. (Das Erste wird das Letzte, das Letzte wird das Erste.)
- {{jsxref("Array.prototype.shift()")}}
  - : Entfernt das erste Element aus einem Array und gibt dieses Element zurück.
- {{jsxref("Array.prototype.slice()")}}
  - : Extrahiert einen Abschnitt des aufrufenden Arrays und gibt ein neues Array zurück.
- {{jsxref("Array.prototype.some()")}}
  - : Gibt `true` zurück, wenn mindestens ein Element im aufrufenden Array die bereitgestellte Testfunktion erfüllt.
- {{jsxref("Array.prototype.sort()")}}
  - : Sortiert die Elemente eines Arrays an Ort und Stelle und gibt das Array zurück.
- {{jsxref("Array.prototype.splice()")}}
  - : Fügt Elemente hinzu und/oder entfernt Elemente aus einem Array.
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : Gibt einen lokalisierten String zurück, der das aufrufende Array und seine Elemente darstellt. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}}-Methode.
- {{jsxref("Array.prototype.toReversed()")}}
  - : Gibt ein neues Array mit den Elementen in umgekehrter Reihenfolge zurück, ohne das ursprüngliche Array zu ändern.
- {{jsxref("Array.prototype.toSorted()")}}
  - : Gibt ein neues Array mit den Elementen in aufsteigender Reihenfolge sortiert zurück, ohne das ursprüngliche Array zu ändern.
- {{jsxref("Array.prototype.toSpliced()")}}
  - : Gibt ein neues Array mit einigen alten Elementen, die ersetzt wurden, und/oder Elementen, die an einem bestimmten Index entfernt wurden, zurück, ohne das ursprüngliche Array zu ändern.
- {{jsxref("Array.prototype.toString()")}}
  - : Gibt einen String zurück, der das aufrufende Array und seine Elemente darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Array.prototype.unshift()")}}
  - : Fügt ein oder mehrere Elemente am Anfang eines Arrays hinzu und gibt die neue `length` des Arrays zurück.
- {{jsxref("Array.prototype.values()")}}
  - : Gibt ein neues [_Array-Iterator_](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Werte für jeden Index im Array enthält.
- {{jsxref("Array.prototype.with()")}}
  - : Gibt ein neues Array zurück, bei dem das Element am angegebenen Index durch den angegebenen Wert ersetzt wurde, ohne das ursprüngliche Array zu ändern.
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
  - : Ein Alias für die [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values)-Methode standardmäßig.

## Beispiele

Dieser Abschnitt bietet einige Beispiele für gängige Array-Operationen in JavaScript.

> [!NOTE]
> Wenn Sie noch nicht mit Array-Grundlagen vertraut sind, sollten Sie zuerst [Erste Schritte mit JavaScript: Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays) lesen, das [erklärt, was Arrays sind](/de/docs/Learn/JavaScript/First_steps/Arrays#what_is_an_array), und weitere Beispiele für gängige Array-Operationen enthält.

### Erstellen eines Arrays

Dieses Beispiel zeigt drei Möglichkeiten, ein neues Array zu erstellen: zuerst mit der [Array-Literalnotation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation), dann mit dem [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)-Konstruktor und schließlich mit [`String.prototype.split()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split), um das Array aus einem String zu erstellen.

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

### Einen String aus einem Array erstellen

Dieses Beispiel verwendet die [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join)-Methode, um einen String aus dem `fruits`-Array zu erstellen.

```js
const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Apple, Banana"
```

### Zugriff auf ein Array-Element über seinen Index

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

Dieses Beispiel verwendet die [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)-Methode, um die Position (Index) des Strings `"Banana"` im `fruits`-Array zu finden.

```js
const fruits = ["Apple", "Banana"];
console.log(fruits.indexOf("Banana"));
// 1
```

### Überprüfen, ob ein Array ein bestimmtes Element enthält

Dieses Beispiel zeigt zwei Möglichkeiten, zu überprüfen, ob das `fruits`-Array `"Banana"` und `"Cherry"` enthält: zuerst mit der [`includes()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)-Methode und dann mit der [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)-Methode, um einen Indexwert zu testen, der nicht `-1` ist.

```js
const fruits = ["Apple", "Banana"];

fruits.includes("Banana"); // true
fruits.includes("Cherry"); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; // false
```

### Ein Element zu einem Array hinzufügen

Dieses Beispiel verwendet die [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push)-Methode, um einen neuen String zum `fruits`-Array hinzuzufügen.

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

### Ein Array auf nur seine ersten N Elemente verkürzen

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um das `fruits`-Array auf nur seine ersten 2 Elemente zu verkürzen.

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

### Ein neues erstes Element zu einem Array hinzufügen

Dieses Beispiel verwendet die [`unshift()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)-Methode, um an Index `0` ein neues Element zum `fruits`-Array hinzuzufügen — wodurch es das neue erste Element im Array wird.

```js
const fruits = ["Banana", "Mango"];
const newLength = fruits.unshift("Strawberry");
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3
```

### Ein einzelnes Element nach Index entfernen

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um den String `"Banana"` aus dem `fruits`-Array zu entfernen — indem die Indexposition von `"Banana"` angegeben wird.

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

Dieses Beispiel verwendet die [`splice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)-Methode, um die Strings `"Banana"` und `"Strawberry"` aus dem `fruits`-Array zu entfernen — indem die Indexposition von `"Banana"` zusammen mit der Anzahl der insgesamt zu entfernenden Elemente angegeben wird.

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

Aber `for...of` ist nur eine von vielen Möglichkeiten, über ein beliebiges Array zu iterieren; für weitere Möglichkeiten siehe [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration) und die Dokumentation zu den Methoden [`every()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`flatMap()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), und [`reduceRight()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) — und siehe das nächste Beispiel, das die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode verwendet.

### Eine Funktion auf jedes Element in einem Array anwenden

Dieses Beispiel verwendet die [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Methode, um eine Funktion auf jedes Element im `fruits`-Array anzuwenden; die Funktion bewirkt, dass jedes Element in die Konsole protokolliert wird, zusammen mit der Indexnummer des Elements.

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

Dieses Beispiel verwendet die [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)-Methode, um das `fruits`-Array mit einem `moreFruits`-Array zu verschmelzen und ein neues `combinedFruits`-Array zu erstellen. Beachten Sie, dass `fruits` und `moreFruits` unverändert bleiben.

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

Dieses Beispiel zeigt drei Möglichkeiten, ein neues Array aus dem bestehenden `fruits`-Array zu erstellen: zuerst durch Verwendung der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), dann durch Verwendung der [`from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from)-Methode und schließlich durch Nutzung der [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)-Methode.

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

Alle eingebauten Array-Kopiervorgänge ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), und [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)) erzeugen [flache Kopien](/de/docs/Glossary/Shallow_copy). Wenn Sie stattdessen eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) eines Arrays erstellen möchten, können Sie {{jsxref("JSON.stringify()")}} verwenden, um das Array in einen JSON-String umzuwandeln, und dann {{jsxref("JSON.parse()")}}, um den String in ein neues Array umzuwandeln, das vollständig unabhängig vom ursprünglichen Array ist.

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

Sie können auch tiefe Kopien mit der [`structuredClone()`](/de/docs/Web/API/Window/structuredClone)-Methode erstellen, die den Vorteil hat, [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in der Quelle an die neue Kopie _zu übertragen_, anstatt sie nur zu klonen.

Schließlich ist es wichtig zu verstehen, dass das Zuweisen eines bestehenden Arrays zu einer neuen Variablen keine Kopie des Arrays oder seiner Elemente erstellt. Stattdessen ist die neue Variable nur eine Referenz oder Alias für das ursprüngliche Array; das heißt, der ursprüngliche Array-Name und der neue Variablenname sind nur zwei Namen für dasselbe Objekt (und werden daher immer als [streng gleichwertig](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using) bewertet). Daher, wenn Sie überhaupt Änderungen entweder am Wert des ursprünglichen Arrays oder dem Wert der neuen Variablen vornehmen, wird sich auch der andere ändern:

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

Das folgende erstellt ein Schachbrett als zweidimensionales Array von Strings. Der erste Zug wird gemacht, indem die `'p'` in `board[6][4]` nach `board[4][4]` kopiert wird. Die alte Position bei `[6][4]` wird leer gemacht.

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

### Verwenden eines Arrays zur Tabellierung eines Satzes von Werten

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

### Erstellen eines Arrays unter Verwendung des Ergebnisses eines Matches

Das Ergebnis eines Matches zwischen einem {{jsxref("RegExp")}} und einem String kann ein JavaScript-Array erstellen, das Eigenschaften und Elemente enthält, die Informationen über das Match bereitstellen. Ein solches Array wird von {{jsxref("RegExp.prototype.exec()")}} und {{jsxref("String.prototype.match()")}} zurückgegeben.

Beispiel:

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

Für weitere Informationen über das Ergebnis eines Matches, siehe die Seiten {{jsxref("RegExp.prototype.exec()")}} und {{jsxref("String.prototype.match()")}}.

### Ändern des anfänglichen Arrays in iterativen Methoden

[Iterative Methoden](#iterative_methoden) verändern nicht das Array, auf dem sie aufgerufen werden, aber die Funktion, die als `callbackFn` bereitgestellt wird, kann es. Der grundlegende Grundsatz, den man sich merken sollte, ist, dass nur Indizes zwischen 0 und `arrayLength - 1` besucht werden, wobei `arrayLength` die Länge des Arrays zum Zeitpunkt ist, ab dem die Array-Methode zuerst aufgerufen wurde, aber das an den Callback übergebene Element ist der Wert zu dem Zeitpunkt, zu dem der Index besucht wird. Daher:

- `callbackFn` wird keine Elemente besuchen, die über die anfängliche Länge des Arrays hinaus hinzugefügt wurden, als der Aufruf der iterativen Methode begann.
- Änderungen an bereits besuchten Indizes führen nicht dazu, dass `callbackFn` erneut auf sie aufgerufen wird.
- Wenn ein existierendes, noch nicht besuchtes Element des Arrays durch `callbackFn` geändert wird, wird sein an `callbackFn` übergebener Wert der Wert zu dem Zeitpunkt sein, an dem das Element besucht wird. Entfernte Elemente werden nicht besucht.

> [!WARNING]
> Zeitgleiche Modifikationen der oben beschriebenen Art führen häufig zu schwer verständlichem Code und sind generell zu vermeiden (außer in Sonderfällen).

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

Modifikationen an Indizes, die noch nicht besucht wurden, werden sichtbar, sobald der Index erreicht ist:

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

Modifikationen an bereits besuchten Indizes ändern das Iterationsverhalten nicht, obwohl das Array danach anders sein wird:

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

Einfügen von _n_ Elementen an nicht besuchten Indizes, die kleiner als die anfängliche Array-Länge sind, macht sie besucht. Die letzten _n_ Elemente im ursprünglichen Array, die jetzt einen Index größer als die anfängliche Array-Länge haben, werden nicht besucht:

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

Einfügen von _n_ Elementen mit einem Index, der größer als die anfängliche Array-Länge ist, macht sie nicht besucht:

```js
testSideEffect((arr) => arr.push("new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [e1, e2, e3, e4, new], index: 1, elem: e2
// array: [e1, e2, e3, e4, new, new], index: 2, elem: e3
// array: [e1, e2, e3, e4, new, new, new], index: 3, elem: e4
// Final array: [e1, e2, e3, e4, new, new, new, new]
```

Einfügen von _n_ Elementen an bereits besuchten Indizes macht sie nicht besucht, aber es verschiebt die verbleibenden Elemente um _n_ zurück, sodass der aktuelle Index und die _n - 1_ Elemente davor erneut besucht werden:

```js
testSideEffect((arr, index) => arr.splice(index, 0, "new"));
// array: [e1, e2, e3, e4], index: 0, elem: e1
// array: [new, e1, e2, e3, e4], index: 1, elem: e1
// array: [new, new, e1, e2, e3, e4], index: 2, elem: e1
// array: [new, new, new, e1, e2, e3, e4], index: 3, elem: e1
// Final array: [new, new, new, new, e1, e2, e3, e4]
// e1 keeps getting visited because it keeps getting shifted back
```

Löschen von _n_ Elementen an nicht besuchten Indizes macht sie nicht mehr besucht. Da das Array geschrumpft ist, werden die letzten _n_ Iterationen nicht existierende Indizes besuchen. Wenn die Methode nicht existierende Indizes ignoriert (siehe [Array-Methoden und leere Slots](#array-methoden_und_leere_slots)), werden die letzten _n_ Iterationen übersprungen; andernfalls erhalten sie `undefined`:

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

Löschen von _n_ Elementen an bereits besuchten Indizes ändert nichts daran, dass sie besucht wurden, bevor sie gelöscht werden. Da das Array geschrumpft ist, werden die nächsten _n_ Elemente nach dem aktuellen Index übersprungen. Wenn die Methode nicht existierende Indizes ignoriert, werden die letzten _n_ Iterationen übersprungen; andernfalls erhalten sie `undefined`:

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

Für Methoden, die den Index in absteigender Reihenfolge durchlaufen, führt das Einfügen dazu, dass Elemente übersprungen werden, und das Löschen dazu, dass Elemente mehrmals besucht werden. Passen Sie den obigen Code selbst an, um die Auswirkungen zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
