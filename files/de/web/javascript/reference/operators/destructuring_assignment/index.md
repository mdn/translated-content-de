---
title: Destructuring assignment
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Die **Destructuring-Zuweisung** ist eine JavaScript-Syntax, die es ermöglicht, Werte aus Arrays oder Eigenschaften aus Objekten in einzelne Variablen zu entpacken.

{{EmbedInteractiveExample("pages/js/expressions-destructuringassignment.html", "taller")}}

## Syntax

```js-nolint
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;

const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
const { a, b, ...rest } = obj;
const { a: a1, b: b1, ...rest } = obj;
const { [key]: a } = obj;

let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;

({ a, b } = obj); // parentheses are required
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);
```

## Beschreibung

Die Objekt- und Array-Literal-Ausdrücke bieten eine einfache Möglichkeit, _ad hoc_ Datenpakete zu erstellen.

```js
const x = [1, 2, 3, 4, 5];
```

Die Destructuring-Zuweisung verwendet eine ähnliche Syntax, jedoch auf der linken Seite der Zuweisung. Sie definiert, welche Werte aus der Quellvariablen entpackt werden sollen.

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Ebenso können Objekte auf der linken Seite der Zuweisung zerstückelt werden.

```js
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
```

Diese Fähigkeit ähnelt Funktionen, die in Sprachen wie Perl und Python vorhanden sind.

Für eigenschaftsspezifische Merkmale des Array- oder Objekt-Destructuring beachten Sie die einzelnen [Beispiele](#beispiele) unten.

### Bindung und Zuweisung

Sowohl für das Objekt- als auch für das Array-Destructuring gibt es zwei Arten von Destructuring-Mustern: _[Bindungsmuster](/de/docs/Glossary/binding) Pattern_ und _Zuweisungsmuster_, mit leicht unterschiedlicher Syntax.

In Bindungsmustern beginnt das Muster mit einem Deklarationsschlüsselwort (`var`, `let` oder `const`). Dann muss jede einzelne Eigenschaft entweder an eine Variable gebunden oder weiter dekonstruiert werden.

```js
const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`
```

Alle Variablen teilen sich die gleiche Deklaration, daher müssen Sie möglicherweise zweimal destrukturieren, wenn einige Variablen neu zuweisbar sein sollen, andere jedoch schreibgeschützt bleiben sollen — einmal mit `let`, einmal mit `const`.

```js
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable
```

In vielen anderen Syntaxen, bei denen die Sprache eine Variable für Sie bindet, können Sie ein Bindungs-Destructuring-Muster verwenden. Dazu gehören:

- Die Schleifenvariable der [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) und [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleifen;
- [Function](/de/docs/Web/JavaScript/Reference/Functions)-Parameter;
- Die [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Bindungsvariable.

In Zuweisungsmustern beginnt das Muster nicht mit einem Schlüsselwort. Jede zerlegte Eigenschaft wird einem Zuweisungsziel zugewiesen — das entweder zuvor mit `var` oder `let` deklariert wurde oder eine Eigenschaft eines anderen Objekts ist — im Allgemeinen alles, was auf der linken Seite eines Zuweisungsausdrucks erscheinen kann.

```js
const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`
```

> [!NOTE]
> Die Klammern `( ... )` um die Zuweisungsaussage sind erforderlich, wenn Sie Destructuring-Zuweisung für Objektliterale ohne Deklaration verwenden.
>
> `{ a, b } = { a: 1, b: 2 }` ist keine gültige eigenständige Syntax, da das `{ a, b }` auf der linken Seite als Block und nicht als Objektliteral gemäß den Regeln der [expression statements](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) betrachtet wird. Hingegen ist `({ a, b } = { a: 1, b: 2 })` gültig, ebenso wie `const { a, b } = { a: 1, b: 2 }`.
>
> Wenn Ihr Programmierstil keine abschließenden Semikolons umfasst, muss der `( ... )` Ausdruck von einem Semikolon vorhergehen, oder er könnte verwendet werden, um eine Funktion in der vorherigen Zeile auszuführen.

Beachten Sie, dass das äquivalente _Bindungsmuster_ des obigen Codes keine gültige Syntax ist:

```js-nolint example-bad
const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;

// This is equivalent to:
//   const numbers[0] = obj.a;
//   const numbers[1] = obj.b;
// Which definitely is not valid.
```

Sie können nur Zuweisungsmuster als linke Seite des [assignment](/de/docs/Web/JavaScript/Reference/Operators/Assignment) Operators verwenden. Sie können sie nicht mit zusammengesetzten Zuweisungsoperatoren wie `+=` oder `*=` verwenden.

### Standardwert

Jede zerlegte Eigenschaft kann einen _Standardwert_ haben. Der Standardwert wird verwendet, wenn die Eigenschaft nicht vorhanden ist oder den Wert `undefined` hat. Er wird nicht verwendet, wenn die Eigenschaft den Wert `null` hat.

```js
const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null }; // c is null
```

Der Standardwert kann jeder Ausdruck sein. Er wird nur bei Bedarf ausgewertet.

```js
const { b = console.log("hey") } = { b: 2 };
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.
```

### Rest-Eigenschaft

Sie können ein Destructuring-Muster mit einer Rest-Eigenschaft `...rest` abschließen. Dieses Muster wird alle verbleibenden Eigenschaften des Objekts oder Arrays in ein neues Objekt oder Array speichern.

```js
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]
```

Die Rest-Eigenschaft muss die letzte im Muster sein und darf kein nachgestelltes Komma haben.

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element
```

## Beispiele

### Array Destructuring

#### Grundlegende Variablenzuweisung

```js
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### Destructuring mit mehr Elementen als die Quelle

Bei einer Array-Destructuring von einem Array der Länge _N_, das auf der rechten Seite der Zuordnung angegeben ist, werden nur die ersten _N_ Variablen Werte zugewiesen, wenn mehr Variablen auf der linken Seite der Zuordnung angegeben sind als _N_. Die Werte der restlichen Variablen werden nicht definiert.

```js
const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined
```

#### Variablentausch

Zwei Variable Werte können in einem Destructuring-Ausdruck getauscht werden.

Ohne Destructuring-Zuweisung erfordert das Tauschen zweier Werte eine temporäre Variable (oder in einigen Low-Level-Sprachen den [XOR-Swap-Trick](https://de.wikipedia.org/wiki/XOR-Swap-Algorithmus)).

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]
```

#### Analysieren eines Arrays, das von einer Funktion zurückgegeben wird

Es war schon immer möglich, ein Array von einer Funktion zurückzugeben. Destructuring kann die Arbeit mit einem Array-Rückgabewert prägnanter machen.

In diesem Beispiel gibt `f()` die Werte `[1, 2]` als Ausgabe zurück, die in einer einzigen Zeile mit Destructuring analysiert werden können.

```js
function f() {
  return [1, 2];
}

const [a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

#### Ignorieren einiger zurückgegebener Werte

Sie können Rückgabewerte ignorieren, die Sie nicht interessieren:

```js
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1
```

Sie können auch alle zurückgegebenen Werte ignorieren:

```js
[, ,] = f();
```

#### Einen Bindungsmuster als Rest-Eigenschaft verwenden

Die Rest-Eigenschaft der Array Destructuring-Zuweisung kann ein weiteres Array- oder Objekt-Bindungsmuster sein. Die innere Destrukturierung erfolgt aus der Liste, die nach dem Sammeln der restlichen Elemente erstellt wurde, Sie können also auf diese Weise nicht auf Eigenschaften zugreifen, die im Original-Array vorliegen.

```js
const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length); // 1 2 1
```

```js
const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4
```

Diese Bindungsmuster können sogar verschachtelt sein, solange jede Rest-Eigenschaft die letzte in der Liste ist.

```js
const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6
```

Andererseits kann dem Objekt-Destructuring nur ein Bezeichner als Rest-Eigenschaft gegeben werden.

```js-nolint example-bad
const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: `...` must be followed by an identifier in declaration contexts

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: `...` must be followed by an assignable reference in assignment contexts
```

#### Entpacken von Werten aus einem regulären Ausdruck

Wenn die [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Methode eines regulären Ausdrucks einen Treffer findet, gibt sie ein Array zurück, das zuerst den gesamten übereinstimmenden Teil des Strings und dann die Teile des Strings enthält, die mit jeder gruppierten Gruppe im regulären Ausdruck übereinstimmen. Mit der Destructuring-Zuweisung können diese Teile leicht aus diesem Array entpackt werden, wobei die volle Übereinstimmung ignoriert wird, wenn sie nicht benötigt wird.

```js
function parseProtocol(url) {
  const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/en-US/docs/Web/JavaScript"),
);
// "https"
```

#### Verwenden der Array Destructuring bei einem beliebigen Iterable

Array Destructuring ruft das [iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der rechten Seite auf. Daher kann jedes Iterable, nicht notwendigerweise Arrays, destrukturiert werden.

```js
const [a, b] = new Map([
  [1, 2],
  [3, 4],
]);
console.log(a, b); // [1, 2] [3, 4]
```

Nicht-iterables können nicht als Arrays destrukturiert werden.

```js example-bad
const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable
```

Iterables werden nur so lange iteriert, bis alle Bindungen zugewiesen sind.

```js
const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      yield v;
    }
  },
};
const [a, b] = obj; // Only logs 0 and 1
```

Die Restbindung wird eifrig ausgewertet und erstellt ein neues Array, anstatt das alte Iterable zu verwenden.

```js
const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      yield v;
    }
  },
};
const [a, b, ...rest] = obj; // Logs 0 1 2 3
console.log(rest); // [2, 3] (an array)
```

### Objekt Destructuring

#### Grundlegende Zuweisung

```js
const user = {
  id: 42,
  isVerified: true,
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true
```

#### Zuweisung zu neuen Variablennamen

Eine Eigenschaft kann aus einem Objekt entpackt und einer Variable mit einem anderen Namen als der Objekteigenschaft zugewiesen werden.

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

Hier wird zum Beispiel `const { p: foo } = o` aus dem Objekt `o` die Eigenschaft `p` entnommen und einer lokalen Variable namens `foo` zugewiesen.

#### Zuweisung zu neuen Variablennamen und Bereitstellung von Standardwerten

Eine Eigenschaft kann sowohl

- aus einem Objekt entpackt und einer Variable mit einem anderen Namen zugewiesen werden.
- einen Standardwert zugewiesen bekommen, falls der entpackte Wert `undefined` ist.

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### Entpacken von Eigenschaften aus Objekten, die als Funktionsparameter übergeben werden

Objekte, die in Funktionsparameter übergeben werden, können ebenfalls in Variablen entpackt werden, die dann im Funktionskörper verwendet werden können.
Wie bei der Objektzuweisung erlaubt die Destructuring-Syntax, dass die neue Variable denselben oder einen anderen Namen als die ursprüngliche Eigenschaft hat, und dass Standardwerte zugewiesen werden, wenn das ursprüngliche Objekt die Eigenschaft nicht definiert.

Betrachten Sie dieses Objekt, das Informationen über einen Benutzer enthält.

```js
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};
```

Hier zeigen wir, wie man eine Eigenschaft des übergebenen Objekts in eine Variable mit demselben Namen entpackt.
Der Parameterwert `{ id }` zeigt an, dass die `id`-Eigenschaft des Objekts, das der Funktion übergeben wird, in eine Variable mit demselben Namen entpackt werden soll, die dann innerhalb der Funktion verwendet werden kann.

```js
function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42
```

Sie können den Namen der entpackten Variablen definieren.
Hier entpacken wir die Eigenschaft `displayName` und benennen sie in `dname` um, um sie im Funktionskörper zu verwenden.

```js
function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // "jdoe"
```

Verschachtelte Objekte können ebenfalls entpackt werden.
Das untenstehende Beispiel zeigt, wie die Eigenschaft `fullname.firstName` in eine Variable namens `name` entpackt wird.

```js
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane"
```

#### Standardwert eines Funktionsparameters setzen

Standardwerte können mit `=` angegeben werden und werden als Variablenwerte verwendet, wenn eine angegebene Eigenschaft im übergebenen Objekt nicht existiert.

Unten zeigen wir eine Funktion, bei der die Standardgröße `'big'` ist, die Standardkoordinaten `x: 0, y: 0` und der Standardradius 25.

```js
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});
```

In der Funktionssignatur für `drawChart` oben hat die entstrukturierte linke Seite einen Standardwert eines leeren Objekts `= {}`.

Sie hätten die Funktion auch ohne diesen Standard schreiben können. Ohne diesen Standardwert sucht die Funktion jedoch nach mindestens einem übergebenen Argument beim Aufruf, während Sie in ihrer aktuellen Form `drawChart()` aufrufen können, ohne irgendwelche Parameter zu übergeben. Andernfalls müssen Sie zumindest ein leeres Objektliteral übergeben.

Weitere Informationen finden Sie unter [Default parameters > Destructured parameter with default value assignment](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters#destructured_parameter_with_default_value_assignment).

#### Verschachteltes Objekt- und Array-Destructuring

```js
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
```

#### For-of-Iteration und Destructuring

```js
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

#### Berechnete Objekt-Eigenschaftsnamen und Destructuring

Berechnete Eigenschaftsnamen, wie in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), können mit Destructuring verwendet werden.

```js
const key = "z";
const { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

#### Ungültiger JavaScript-Bezeichner als Eigenschaftsname

Destructuring kann mit Eigenschaftsnamen verwendet werden, die keine gültigen JavaScript-[Bezeichner](/de/docs/Glossary/Identifier) sind, indem ein alternativer gültiger Bezeichner bereitgestellt wird.

```js
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;

console.log(fizzBuzz); // true
```

### Destructuring von primitiven Werten

Destructuring von Objekten ist nahezu äquivalent zum [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das bedeutet, wenn Sie versuchen, einen primitiven Wert zu destrukturieren, wird der Wert in das entsprechende Wrapper-Objekt gewickelt, und die Eigenschaft wird auf dem Wrapper-Objekt abgerufen.

```js
const { a, toFixed } = 1;
console.log(a, toFixed); // undefined ƒ toFixed() { [native code] }
```

Genau wie beim Zugriff auf Eigenschaften wirft das Destructuring von `null` oder `undefined` einen {{jsxref("TypeError")}}.

```js example-bad
const { a } = undefined; // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.
const { b } = null; // TypeError: Cannot destructure property 'b' of 'null' as it is null.
```

Dies passiert sogar, wenn das Muster leer ist.

```js example-bad
const {} = null; // TypeError: Cannot destructure 'null' as it is null.
```

#### Kombiniertes Array- und Objekt-Destructuring

Array- und Objekt-Destructuring können kombiniert werden. Nehmen wir an, Sie möchten das dritte Element im Array `props` unten und dann die Eigenschaft `name` im Objekt, Sie können Folgendes tun:

```js
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```

#### Beim Destrukturieren eines Objekts wird die Prototypkette durchsucht

Beim Destrukturieren eines Objekts wird, wenn eine Eigenschaft in sich selbst nicht zugegriffen wird, weiter oben in der Prototypkette gesucht.

```js
const obj = {
  self: "123",
  __proto__: {
    prot: "456",
  },
};
const { self, prot } = obj;

console.log(self); // "123"
console.log(prot); // "456"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators)
- [ES6 in Depth: Destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/) auf hacks.mozilla.org (2015)
