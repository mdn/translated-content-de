---
title: Destructuring-Zuweisung
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("Operators")}}

Die **Destructuring-Zuweisung**-Syntax ist ein JavaScript-Ausdruck, der es ermöglicht, Werte aus Arrays oder Eigenschaften aus Objekten in einzelne Variablen zu entpacken.

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

Die Objekt- und Array-Literal-Ausdrücke bieten eine einfache Möglichkeit, _ad hoc_-Pakete von Daten zu erstellen.

```js
const x = [1, 2, 3, 4, 5];
```

Die Destructuring-Zuweisung verwendet eine ähnliche Syntax, wird jedoch stattdessen auf der linken Seite der Zuweisung verwendet. Sie definiert, welche Werte aus der Quellvariable entpackt werden sollen.

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Ähnlich können Sie Objekte auf der linken Seite der Zuweisung dekonstruieren.

```js
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
```

Diese Fähigkeit ist ähnlich wie Funktionen, die in Sprachen wie Perl und Python vorhanden sind.

Für spezifische Funktionen der Array- oder Objekt-Destructuring, siehe die einzelnen [Beispiele](#beispiele) unten.

### Bindung und Zuweisung

Für sowohl Objekt- als auch Array-Dekonstruktion gibt es zwei Arten von Dekonstruktionsmustern: _{{Glossary("binding", "Bindungsmuster")}}_ und _Zuweisungsmuster_, mit leicht unterschiedlichen Syntaxen.

In Bindungsmustern beginnt das Muster mit einem Deklarationsschlüsselwort (`var`, `let` oder `const`). Dann muss jede einzelne Eigenschaft entweder an eine Variable gebunden oder weiter dekonstruieren werden.

```js
const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`
```

Alle Variablen teilen sich dieselbe Deklaration, daher müssen Sie möglicherweise zweimal dekonstruieren — einmal mit `let`, einmal mit `const` — wenn Sie einige Variablen umwidmen und andere schreibgeschützt lassen möchten.

```js
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable
```

In vielen anderen Syntaxen, in denen die Sprache eine Variable für Sie bindet, können Sie ein Bindungsmuster der Dekonstruktion verwenden. Dazu gehören:

- Die Schleifenvariable von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), und [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleifen;
- [Funktions](/de/docs/Web/JavaScript/Reference/Functions)-Parameter;
- Die [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Bindungsvariable.

In Zuweisungsmustern beginnt das Muster nicht mit einem Schlüsselwort. Jede dekonstruierte Eigenschaft wird einem Zuweisungsziel zugewiesen — das entweder vorher mit `var` oder `let` deklariert wurde, oder eine Eigenschaft eines anderen Objekts ist — im Allgemeinen etwas, das auf der linken Seite eines Zuweisungsausdrucks erscheinen kann.

```js
const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`
```

> [!NOTE]
> Die Klammern `( ... )` um die Zuweisungsaussage sind erforderlich, wenn die Dekonstruktion von Objektliteralen ohne eine Deklaration verwendet wird.
>
> `{ a, b } = { a: 1, b: 2 }` ist keine gültige eigenständige Syntax, da das `{ a, b }` auf der linken Seite als Block betrachtet wird und nicht als Objektliteral gemäß den Regeln von [Ausdrucks-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement). Hingegen ist `({ a, b } = { a: 1, b: 2 })` gültig, ebenso wie `const { a, b } = { a: 1, b: 2 }`.
>
> Wenn Ihr Kodierungsstil keine nachgestellten Semikolons umfasst, muss der `( ... )` Ausdruck von einem Semikolon vorangestellt werden, oder er könnte verwendet werden, um eine Funktion in der vorherigen Zeile auszuführen.

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

Sie können nur Zuweisungsmuster als linke Seite des [Zuweisungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Assignment) verwenden. Sie können sie nicht mit zusammengesetzten Zuweisungsoperatoren wie `+=` oder `*=` verwenden.

### Standardwert

Jede dekonstruierte Eigenschaft kann einen _Standardwert_ haben. Der Standardwert wird verwendet, wenn die Eigenschaft nicht vorhanden oder `undefined` ist. Er wird nicht verwendet, wenn der Wert der Eigenschaft `null` ist.

```js
const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null }; // c is null
```

Der Standardwert kann jeglicher Ausdruck sein. Er wird nur dann ausgewertet, wenn es notwendig ist.

```js
const { b = console.log("hey") } = { b: 2 };
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.
```

### Rest-Eigenschaft

Sie können ein Dekonstruktionsmuster mit einer Rest-Eigenschaft `...rest` beenden. Dieses Muster speichert alle verbleibenden Eigenschaften des Objekts oder Arrays in einem neuen Objekt oder Array.

```js
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]
```

Die Rest-Eigenschaft muss als letzte Eigenschaft im Muster angegeben werden und darf kein nachgestelltes Komma haben.

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element
```

## Beispiele

### Array-Dekonstruktion

#### Grundlegende Variablenzuweisung

```js
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### Dekonstruktion mit mehr Elementen als in der Quelle

Bei einer Array-Dekonstruktion von einem Array der Länge _N_, das auf der rechten Seite der Zuweisung angegeben wird, werden nur die ersten _N_ Variablen mit Werten belegt, wenn die Anzahl der auf der linken Seite der Zuweisung angegebenen Variablen größer ist als _N_. Die Werte der verbleibenden Variablen werden undefined sein.

```js
const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined
```

#### Variablen tauschen

Zwei Variablenwerte können in einem Dekonstruktion-Ausdruck getauscht werden.

Ohne Destructuring-Zuweisung erfordert das Tauschen von zwei Werten eine temporäre Variable (oder in einigen niederstufigen Sprachen den [XOR-Tauschtrick](https://en.wikipedia.org/wiki/XOR_swap_algorithm)).

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

#### Analysieren eines von einer Funktion zurückgegebenen Arrays

Es war immer möglich, ein Array von einer Funktion zurückzugeben. Dekonstruktion kann die Arbeit mit einem Array-Rückgabewert präziser machen.

In diesem Beispiel gibt `f()` die Werte `[1, 2]` als Ausgabe zurück, die mit Dekonstruktion in einer einzigen Zeile analysiert werden können.

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

#### Verwenden eines Bindungsmusters als Rest-Eigenschaft

Die Rest-Eigenschaft der Dekonstruktion von Arrays kann ein weiteres Array- oder Objekt-Bindungsmuster sein. Die innere Dekonstruktion dekonstruieren aus dem nach dem Sammeln der restlichen Elemente erstellten Array, sodass Sie auf diese Weise nicht auf Eigenschaften zugreifen können, die im ursprünglichen Iterable vorhanden sind.

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

Andererseits kann die Dekonstruktion von Objekten nur einen Bezeichner als Rest-Eigenschaft haben.

```js-nolint example-bad
const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: `...` must be followed by an identifier in declaration contexts

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: `...` must be followed by an assignable reference in assignment contexts
```

#### Entpacken von Werten aus einem regulären Ausdruckstreffer

Wenn die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) des regulären Ausdrucks einen Treffer findet, gibt sie ein Array zurück, das zuerst den gesamten übereinstimmenden Teil des Strings und dann die Teile des Strings enthält, die mit jeder klammertierten Gruppe im regulären Ausdruck übereinstimmten. Die Destructuring-Zuweisung ermöglicht es Ihnen, die Teile dieses Arrays einfach zu entpacken und die vollständige Übereinstimmung zu ignorieren, wenn sie nicht benötigt wird.

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

#### Verwenden der Array-Dekonstruktion bei jedem Iterable

Die Array-Dekonstruktion ruft das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der rechten Seite auf. Daher können nicht nur Arrays, sondern alle Iterable dekonstruieren werden.

```js
const [a, b] = new Map([
  [1, 2],
  [3, 4],
]);
console.log(a, b); // [1, 2] [3, 4]
```

Nicht-Iterables können nicht als Arrays dekonstruieren werden.

```js example-bad
const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable
```

Iterables werden nur durchlaufen, bis alle Bindungen zugewiesen sind.

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

Die Restbindung wird eifrig bewertet und erstellt ein neues Array, anstatt das alte Iterable zu verwenden.

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

### Objekt-Dekonstruktion

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

#### Zuweisen zu neuen Variablennamen

Eine Eigenschaft kann aus einem Objekt entpackt und einer Variablen zugewiesen werden, die einen anderen Namen hat als die Objekteigenschaft.

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

Hier, zum Beispiel, nimmt `const { p: foo } = o` aus dem Objekt `o` die Eigenschaft mit dem Namen `p` und weist sie einer lokalen Variablen mit dem Namen `foo` zu.

#### Zuweisen zu neuen Variablennamen und Bereitstellen von Standardwerten

Eine Eigenschaft kann sowohl

- Aus einem Objekt entpackt und einer Variablen mit einem anderen Namen zugewiesen werden.
- Einem Standardwert zugewiesen werden, falls der entpackte Wert `undefined` ist.

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### Entpacken von Eigenschaften aus Objekten, die als Funktionsparameter übergeben werden

Objekte, die in Funktionsparameter übergeben werden, können auch in Variablen entpackt werden, die dann innerhalb des Funktionskörpers abgerufen werden können. Wie bei der Objektzuweisung ermöglicht es die Destructuring-Syntax, dass die neue Variable denselben Namen oder einen anderen Namen als die ursprüngliche Eigenschaft hat und Standardwerte für den Fall zuweisen, dass das ursprüngliche Objekt die Eigenschaft nicht definiert.

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

Hier zeigen wir, wie man eine Eigenschaft des übergebenen Objekts in eine Variable mit demselben Namen entpackt. Der Parameterwert `{ id }` gibt an, dass die `id`-Eigenschaft des Objekts, das der Funktion übergeben wird, in eine Variable mit demselben Namen entpackt werden soll, die dann innerhalb der Funktion verwendet werden kann.

```js
function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42
```

Sie können den Namen der entpackten Variablen definieren. Hier entpacken wir die Eigenschaft mit dem Namen `displayName` und benennen sie in `dname` um, um sie innerhalb des Funktionskörpers zu verwenden.

```js
function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // "jdoe"
```

Verschachtelte Objekte können ebenfalls entpackt werden. Das folgende Beispiel zeigt, wie die Eigenschaft `fullname.firstName` in eine Variable namens `name` entpackt wird.

```js
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane"
```

#### Festlegen eines Standardwerts für einen Funktionsparameter

Standardwerte können mit `=` angegeben werden und werden als Variablenwerte verwendet, wenn eine angegebene Eigenschaft im übergebenen Objekt nicht existiert.

Im Folgenden zeigen wir eine Funktion, bei der die Standardgröße `'big'` ist, die Standardkoordinaten `x: 0, y: 0` sind und der Standardradius 25 beträgt.

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

Im Funktionssignatur für `drawChart` oben hat die linke Seite der Destructuring-Zuweisung einen Standardwert eines leeren Objekts `= {}`.

Sie hätten die Funktion auch ohne diesen Standardwert schreiben können. Wenn Sie jedoch diesen Standardwert weglassen, sucht die Funktion nach mindestens einem übergebenen Argument, wenn sie aufgerufen wird, während Sie in der aktuellen Form `drawChart()` aufrufen können, ohne irgendwelche Parameter anzugeben. Andernfalls müssen Sie mindestens ein leeres Objektliteral übergeben.

Für weitere Informationen, siehe [Standardparameter > Destructured-Parameter mit Standardwertzuweisung](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters#destructured_parameter_with_default_value_assignment).

#### Verschachtelte Objekt- und Array-Dekonstruktion

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

#### "For of"-Iteration und Destructuring

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

Berechnete Eigenschaftsnamen, wie sie bei [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) verwendet werden, können auch mit Destructuring verwendet werden.

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

### Dekonstruktion primitiver Werte

Objektdekonstruktion ist fast gleichwertig mit [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das bedeutet, wenn Sie versuchen, einen primitiven Wert zu dekonstruieren, wird der Wert in das entsprechende Wrapper-Objekt gewickelt und die Eigenschaft wird auf dem Wrapper-Objekt zugegriffen.

```js
const { a, toFixed } = 1;
console.log(a, toFixed); // undefined ƒ toFixed() { [native code] }
```

Wie beim Zugriff auf Eigenschaften wird das Dekonstruieren von `null` oder `undefined` eine {{jsxref("TypeError")}} werfen.

```js example-bad
const { a } = undefined; // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.
const { b } = null; // TypeError: Cannot destructure property 'b' of 'null' as it is null.
```

Dies geschieht auch, wenn das Muster leer ist.

```js example-bad
const {} = null; // TypeError: Cannot destructure 'null' as it is null.
```

#### Kombinierte Array- und Objektdekonstruktion

Array- und Objektdekonstruktion können kombiniert werden. Angenommen, Sie wollen das dritte Element im Array `props` unten und dann die `name`-Eigenschaft im Objekt, dann können Sie Folgendes tun:

```js
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```

#### Die Prototypenkette wird beim Dekonstruieren des Objekts durchsucht

Beim Dekonstruieren eines Objekts, wenn eine Eigenschaft nicht in sich selbst abgerufen wird, wird weiterhin entlang der Prototypenkette gesucht.

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
