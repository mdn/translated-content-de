---
title: Destructuring-Zuweisung
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Die Syntax der **Destructuring-Zuweisung** ist ein JavaScript-Ausdruck, der es ermöglicht, Werte aus Arrays oder Eigenschaften aus Objekten in separate Variablen zu entpacken.

{{InteractiveExample("JavaScript Demo: Expressions - Destructuring assignment", "taller")}}

```js interactive-example
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]
```

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

Die Objekt- und Array-Literal-Syntax bieten eine einfache Möglichkeit, _ad hoc_-Datenpakete zu erstellen.

```js
const x = [1, 2, 3, 4, 5];
```

Die Destructuring-Zuweisung verwendet eine ähnliche Syntax, jedoch auf der linken Seite der Zuweisung. Sie definiert, welche Werte aus der Quelle entpackt werden sollen.

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Ebenso können Sie Objekte auf der linken Seite der Zuweisung desktrukturieren.

```js
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
```

Diese Fähigkeit ist ähnlich wie in Sprachen wie Perl und Python vorhanden.

Für spezifische Funktionen der Array- oder Objekt-Destructuring sehen Sie sich die individuellen [Beispiele](#beispiele) unten an.

### Bindung und Zuweisung

Für sowohl Objekt- als auch Array-Destructuring gibt es zwei Arten von Destructuring-Mustern: das _{{Glossary("binding", "binding")}} pattern_ und das _assignment pattern_, die leicht unterschiedliche Syntaxen haben.

Bei Bindungsmustern beginnt das Muster mit einem Deklarations-Schlüsselwort (`var`, `let` oder `const`). Dann muss jede einzelne Eigenschaft entweder an eine Variable gebunden oder weiter destrukturiert werden.

```js
const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`
```

Alle Variablen teilen sich dieselbe Deklaration. Wenn einige Variablen erneut zuweisbar sein sollen, während andere schreibgeschützt bleiben, müssen Sie möglicherweise zweimal destrukturieren – einmal mit `let`, einmal mit `const`.

```js
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable
```

In vielen anderen Sytnaxen, in denen die Sprache automatisch Variablen bindet, können Sie ein Bindungsmuster zur Destrukturierung verwenden. Dazu gehören:

- Die Schleifenvariable von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) und [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleifen;
- [Funktion](/de/docs/Web/JavaScript/Reference/Functions)-Parameter;
- Die [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Bindungsvariable.

Bei Zuweisungsmustern beginnt das Muster nicht mit einem Schlüsselwort. Jede destrukturierte Eigenschaft wird einem Ziel zugewiesen – entweder einer vorher mit `var` oder `let` deklarierten Variable oder einer Eigenschaft eines anderen Objekts – im Allgemeinen allem, was links von einer Zuweisung stehen kann.

```js
const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`
```

> [!NOTE]
> Die Klammern `( ... )` um die Zuweisung sind erforderlich, wenn Sie die Destructuring-Zuweisung von Objektliteralen ohne Deklaration verwenden.
>
> `{ a, b } = { a: 1, b: 2 }` ist keine gültige Standalone-Syntax, da `{ a, b }` auf der linken Seite gemäß den Regeln der [Ausdrucks-Aussagen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) als Block und nicht als Objektliteral betrachtet wird. Jedoch ist `({ a, b } = { a: 1, b: 2 })` gültig, ebenso wie `const { a, b } = { a: 1, b: 2 }`.
>
> Wenn Ihr Coding-Stil keine abschließenden Semikolons umfasst, muss der Ausdruck `( ... )` durch ein Semikolon signalisiert werden oder zur Ausführung einer Funktion in der vorherigen Zeile verwendet werden.

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

Sie können Zuweisungsmuster nur als linke Seite des [assignment](/de/docs/Web/JavaScript/Reference/Operators/Assignment)-Operators verwenden. Sie können sie nicht mit zusammengesetzten Zuweisungsoperatoren wie `+=` oder `*=` nutzen.

### Standardwert

Jede destrukturierte Eigenschaft kann einen _Standardwert_ haben. Dieser wird verwendet, wenn die Eigenschaft nicht vorhanden ist oder der Wert `undefined` ist. Er wird nicht verwendet, wenn der Wert `null` ist.

```js
const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null }; // c is null
```

Der Standardwert kann jeder beliebige Ausdruck sein. Er wird nur bei Bedarf ausgewertet.

```js
const { b = console.log("hey") } = { b: 2 };
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.
```

### Rest-Eigenschaft

Sie können ein Destructuring-Muster mit einer Rest-Eigenschaft `...rest` abschließen. Dieses Muster speichert alle verbleibenden Eigenschaften des Objekts oder Arrays in einem neuen Objekt oder Array.

```js
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]
```

Die Rest-Eigenschaft muss die letzte im Muster sein und darf kein abschließendes Komma haben.

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element
```

## Beispiele

### Array-Destructuring

#### Basisvariablen-Zuweisung

```js
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### Destructuring mit mehr Elementen als in der Quelle

Bei einem Array-Destructuring, das ein Array mit der Länge _N_ auf der rechten Seite der Zuweisung verwendet, gilt: Wenn die Anzahl der Variablen auf der linken Seite der Zuweisung größer als _N_ ist, erhalten nur die ersten _N_ Variablen Werte. Die Werte der übrigen Variablen werden `undefined` sein.

```js
const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined
```

#### Variablen tauschen

Zwei Variablenwerte können in einem Destructuring-Ausdruck vertauscht werden.

Ohne Destructuring-Zuweisung erfordert das Tauschen von zwei Werten eine temporäre Variable (oder in einigen Low-Level-Sprachen den [XOR-swap Trick](https://en.wikipedia.org/wiki/XOR_swap_algorithm)).

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

#### Parsen eines Arrays, das von einer Funktion zurückgegeben wird

Es war schon immer möglich, ein Array von einer Funktion zurückzugeben. Destructuring kann die Arbeit mit einem zurückgegebenen Array-Wert erleichtern.

In diesem Beispiel gibt `f()` die Werte `[1, 2]` als Ausgabe zurück, die in einer einzigen Zeile mit Destructuring geparst werden können.

```js
function f() {
  return [1, 2];
}

const [a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

#### Ignorieren einiger Rückgabewerte

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

Sie können auch alle Rückgabewerte ignorieren:

```js
[, ,] = f();
```

#### Verwendung eines Bindungsmusters als Rest-Eigenschaft

Die Rest-Eigenschaft des Array-Destructuring kann ein weiteres Array oder Objekt-Bindungsmuster sein. Die innere Destrukturierung erfolgt von dem Array, das nach dem Sammeln der übrigen Elemente erstellt wurde, sodass Sie auf diese Weise nicht auf Eigenschaften des ursprünglichen Iterables zugreifen können.

```js
const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length); // 1 2 1
```

```js
const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4
```

Diese Bindungsmuster können sogar geschachtelt werden, solange jede Rest-Eigenschaft die letzte in der Liste ist.

```js
const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6
```

Auf der anderen Seite kann die Rest-Eigenschaft beim Objekt-Destructuring nur ein Bezeichner sein.

```js-nolint example-bad
const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: `...` must be followed by an identifier in declaration contexts

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: `...` must be followed by an assignable reference in assignment contexts
```

#### Werte aus einem regulären Ausdruck-Match entpacken

Wenn die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) eines regulären Ausdrucks einen Treffer findet, gibt sie ein Array zurück, das zuerst den gesamten übereinstimmenden Teil des Strings und dann die Teile des Strings enthält, die mit jeder geklammerten Gruppe im regulären Ausdruck übereinstimmen. Mit Destructuring-Zuweisung können Sie die Teile dieses Arrays einfach entpacken und den vollständigen Treffer ignorieren, wenn er nicht benötigt wird.

```js
function parseProtocol(url) {
  const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

  const [, protocol, fullHost, fullPath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/en-US/docs/Web/JavaScript"),
);
// "https"
```

#### Verwendung von Array-Destructuring auf jedes Iterable

Array-Destructuring ruft das [iterable protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf der rechten Seite auf. Daher kann jedes Iterable, nicht nur Arrays, destrukturiert werden.

```js
const [a, b] = new Map([
  [1, 2],
  [3, 4],
]);
console.log(a, b); // [1, 2] [3, 4]
```

Nicht-Iterables können nicht als Arrays destrukturiert werden.

```js example-bad
const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable
```

Iterables werden nur bis zu dem Punkt durchlaufen, an dem alle Bindungen zugewiesen sind.

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

Die Rest-Bindung wird sofort ausgewertet und erstellt ein neues Array, anstatt das alte Iterable zu verwenden.

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

### Objekt-Destructuring

#### Basiszuweisung

```js
const user = {
  id: 42,
  isVerified: true,
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true
```

#### Zuweisung an neue Variablennamen

Eine Eigenschaft kann aus einem Objekt entpackt und einer Variable mit einem anderen Namen als der Objekteigenschaft zugewiesen werden.

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

Hier wird zum Beispiel `const { p: foo } = o` aus dem Objekt `o` die Eigenschaft `p` entnommen und einer lokalen Variablen mit dem Namen `foo` zugewiesen.

#### Zuweisung an neue Variablennamen und Bereitstellung von Standardwerten

Eine Eigenschaft kann

- Aus einem Objekt entpackt und einer Variablen mit einem anderen Namen zugewiesen werden.
- Einen Standardwert erhalten, falls der entpackte Wert `undefined` ist.

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### Entpacken von Eigenschaften aus Objekten, die als Funktionsparameter übergeben werden

Objekte, die in Funktionsparameter übergeben werden, können auch in Variablen entpackt werden, die dann innerhalb des Funktionskörpers zugänglich sind. Wie bei der Objektzuweisung erlaubt die Destructuring-Syntax, dass die neue Variable denselben Namen wie die ursprüngliche Eigenschaft hat oder einen anderen. Zudem können Standardwerte für den Fall angegeben werden, dass das ursprüngliche Objekt die Eigenschaft nicht definiert.

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

Hier zeigen wir, wie eine Eigenschaft des übergebenen Objekts in eine gleichbenannte Variable entpackt wird.
Der Parameterwert `{ id }` gibt an, dass die `id`-Eigenschaft des Objekts, das der Funktion übergeben wird, in eine gleichnamige Variable entpackt werden soll, die dann innerhalb der Funktion verwendet werden kann.

```js
function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42
```

Sie können den Namen der entpackten Variablen definieren.
Hier entpacken wir die Eigenschaft `displayName` und benennen sie in `dname` um, um sie innerhalb des Funktionskörpers zu verwenden.

```js
function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // "jdoe"
```

Verschachtelte Objekte können ebenfalls entpackt werden.
Das Beispiel unten zeigt die Eigenschaft `fullname.firstName`, die in eine Variable namens `name` entpackt wird.

```js
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane"
```

#### Festlegen eines Standardwerts für den Funktionsparameter

Standardwerte können mit `=` angegeben werden und werden als Variable-Werte verwendet, wenn eine bestimmte Eigenschaft im übergebenen Objekt nicht existiert.

Unten zeigen wir eine Funktion, bei der die Standardgröße `'big'`, die Standardkoordinaten `x: 0, y: 0` und der Standardradius 25 sind.

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

In der Funktionssignatur für `drawChart` oben hat die destrukturierte linke Seite einen Standardwert eines leeren Objekts `= {}`.

Sie könnten die Funktion auch ohne diesen Standardwert schreiben. Wenn Sie jedoch diesen Standardwert weglassen, erwartet die Funktion mindestens ein Argument beim Aufruf. In ihrer aktuellen Form können Sie `drawChart()` ohne Parameter aufrufen. Andernfalls müssen Sie zumindest ein leeres Objektliteral übergeben.

Weitere Informationen finden Sie unter [Standardparameter > Destrukturierter Parameter mit Standardwertzuweisung](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters#destructured_parameter_with_default_value_assignment).

#### Verschachtelte Objekte und Arrays destrukturieren

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

#### Iteration mit `for of` und Destructuring

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

#### Berechnete Objekteigenschaftsnamen und Destructuring

Berechnete Eigenschaftsnamen, wie sie bei [Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) verwendet werden, können beim Destructuring genutzt werden.

```js
const key = "z";
const { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

#### Ungültiger JavaScript-Bezeichner als Eigenschaftsname

Destructuring kann mit Eigenschaftsnamen verwendet werden, die keine gültigen JavaScript-{{Glossary("Identifier", "Bezeichner")}} sind, indem ein alternativer Bezeichner angegeben wird, der gültig ist.

```js
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;

console.log(fizzBuzz); // true
```

### Destructuring von primitiven Werten

Objekt-Destructuring ist fast gleichbedeutend mit dem [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das bedeutet, dass wenn Sie versuchen, einen primitiven Wert zu destrukturieren, der Wert in das entsprechende Wrapper-Objekt verpackt wird und die Eigenschaft auf diesem Wrapper-Objekt zugegriffen wird.

```js
const { a, toFixed } = 1;
console.log(a, toFixed); // undefined ƒ toFixed() { [native code] }
```

Wie bei Eigenschaftszugriffen löst das Destructuring von `null` oder `undefined` eine {{jsxref("TypeError")}} aus.

```js example-bad
const { a } = undefined; // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.
const { b } = null; // TypeError: Cannot destructure property 'b' of 'null' as it is null.
```

Dies passiert auch, wenn das Muster leer ist.

```js example-bad
const {} = null; // TypeError: Cannot destructure 'null' as it is null.
```

#### Kombiniertes Array- und Objekt-Destructuring

Array- und Objekt-Destructuring können kombiniert werden. Angenommen, Sie möchten das dritte Element im Array `props` unten abrufen und dann die `name`-Eigenschaft im Objekt, können Sie Folgendes tun:

```js
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```

#### Die Prototypkette wird bei der Destrukturierung eines Objekts berücksichtigt

Beim Destrukturieren eines Objekts, wenn auf eine Eigenschaft nicht direkt zugegriffen wird, wird weiter entlang der Prototypkette gesucht.

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
