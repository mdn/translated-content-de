---
title: Destructuring
slug: Web/JavaScript/Reference/Operators/Destructuring
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Die **Destructuring**-Syntax ist eine JavaScript-Syntax, die es ermöglicht, Werte aus Arrays oder Eigenschaften aus Objekten in separate Variablen zu entpacken. Sie kann an Stellen verwendet werden, die Daten empfangen (wie die linke Seite einer Zuweisung oder überall dort, wo neue Bezeichnerbindungen erstellt werden).

{{InteractiveExample("JavaScript Demo: Destructuring", "taller")}}

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

Die Objekt- und Array-Literal-Ausdrücke bieten eine einfache Möglichkeit, _ad-hoc_ Datenpakete zu erstellen.

```js
const arr = [a, b, c];
```

Das Destructuring verwendet eine ähnliche Syntax, jedoch auf der linken Seite der Zuweisung. Es führt die umgekehrte Operation einer Array-Deklaration durch, indem es jedes Element in der Sammlung als separate Variable deklariert.

```js
const arr = [1, 2, 3];
const [a, b, c] = arr;
// a = 1, b = 2, c = 3
```

Betrachtet man Objekte, vergleicht die beiden Zeilenpaare unten und sieht, wie es innerhalb jedes Paares eine direkte Entsprechung gibt.

```js
const obj = { a, b, c };
const { a, b, c } = obj;
// Equivalent to:
// const a = obj.a, b = obj.b, c = obj.c;

const obj = { prop1: x, prop2: y, prop3: z };
const { prop1: x, prop2: y, prop3: z } = obj;
// Equivalent to:
// const x = obj.prop1, y = obj.prop2, z = obj.prop3;
```

Diese Fähigkeit ähnelt Funktionen, die in Sprachen wie Perl und Python existieren.

Für spezifische Funktionen der Array- oder Objekt-Destructuring, siehe die einzelnen [Beispiele](#beispiele) unten.

### Bindung und Zuweisung

Sowohl für Objekt- als auch für Array-Destructuring gibt es zwei Arten von Destructuring-Mustern: _{{Glossary("binding", "binding")}} pattern_ und _assignment pattern_, mit leicht unterschiedlichen Syntaxen.

In Bindungsmustern beginnt das Muster mit einem Deklarationsschlüsselwort (`var`, `let` oder `const`). Jede einzelne Eigenschaft muss entweder an eine Variable gebunden oder weiter zerlegt werden.

```js
const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`
```

Alle Variablen teilen dieselbe Deklaration, daher müssen Sie möglicherweise zweimal Destructuring verwenden — einmal mit `let` und einmal mit `const`, wenn Sie einige Variablen neu zuweisbar und andere schreibgeschützt haben möchten.

```js
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable
```

In vielen anderen Syntaxen, in denen die Sprache eine Variable für Sie bindet, können Sie ein Bindungs-Destructuring-Muster verwenden. Diese beinhalten:

- Die Schleifenvariable von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) und [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleifen;
- [Funktions](/de/docs/Web/JavaScript/Reference/Functions)parameter;
- Die [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Bindungsvariable.

In Zuweisungsmustern beginnt das Muster nicht mit einem Schlüsselwort. Jede zerlegte Eigenschaft wird einem Ziel der Zuweisung zugewiesen — das entweder zuvor mit `var` oder `let` deklariert wurde oder eine Eigenschaft eines anderen Objekts ist — im Allgemeinen alles, was auf der linken Seite eines Zuweisungsausdrucks erscheinen kann.

```js
const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`
```

> [!NOTE]
> Die Klammern `( ... )` um die Zuweisungserklärung sind erforderlich, wenn Sie Destructuring mit einem Objektliteral ohne Deklaration verwenden.
>
> `{ a, b } = { a: 1, b: 2 }` ist keine gültige Standalone-Syntax, da das `{ a, b }` auf der linken Seite als Block und nicht als Objektliteral entsprechend den Regeln der [Ausdrucks-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) betrachtet wird. `({ a, b } = { a: 1, b: 2 })` ist jedoch gültig, ebenso wie `const { a, b } = { a: 1, b: 2 }`.
>
> Wenn Ihr Codierungsstil keine abschließenden Semikolons beinhaltet, muss der `( ... )` Ausdruck durch ein Semikolon vorangestellt werden, oder er kann verwendet werden, um eine Funktion in der vorherigen Zeile auszuführen.

Beachten Sie, dass das äquivalente _Bindungsmuster_ des obenstehenden Codes keine gültige Syntax ist:

```js-nolint example-bad
const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;

// This is equivalent to:
//   const numbers[0] = obj.a;
//   const numbers[1] = obj.b;
// Which definitely is not valid.
```

Sie können nur Zuweisungsmuster als die linke Seite des [Zuweisungs](/de/docs/Web/JavaScript/Reference/Operators/Assignment)-Operators verwenden. Sie können sie nicht mit zusammengesetzten Zuweisungsoperatoren wie `+=` oder `*=` verwenden.

### Standardwert

Jede zerlegte Eigenschaft kann einen _Standardwert_ haben. Der Standardwert wird verwendet, wenn die Eigenschaft nicht vorhanden ist oder den Wert `undefined` hat. Er wird nicht verwendet, wenn die Eigenschaft den Wert `null` hat.

```js
const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null }; // c is null
```

Der Standardwert kann jeder Ausdruck sein. Er wird nur ausgewertet, wenn es notwendig ist.

```js
const { b = console.log("hey") } = { b: 2 };
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.
```

### Rest-Eigenschaften und Rest-Elemente

Sie können ein Destructuring-Muster mit einer Rest-Eigenschaft `...rest` abschließen. Für Array-Destructuring sammelt es die verbleibenden Elemente des Iterables in einem neuen Array namens `rest` (oder jedem Namen, den Sie ihm geben). Für Objekt-Destructuring kopiert es alle aufzählbaren eigenen Eigenschaften des Objekts, die nicht bereits vom Destructuring-Muster erfasst wurden, in ein neues Objekt namens `rest`.

Formal wird die `...rest`-Syntax als "Rest-Elemente" im Array-Destructuring und als "Rest-Eigenschaften" im Objekt-Destructuring bezeichnet, aber wir nennen sie häufig einfach "Rest-Eigenschaft".

```js
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]
```

Die Rest-Eigenschaft muss die letzte im Muster sein und darf kein nachfolgendes Komma haben.

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element
```

## Beispiele

### Array-Destructuring

#### Grundlegende Variablenzuweisung

```js
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### Destructuring mit mehr Elementen als die Quelle

In einem Array-Destructuring aus einem Array der Länge _N_, das auf der rechten Seite der Zuweisung angegeben ist, wenn die Anzahl der auf der linken Seite angegebenen Variablen größer ist als _N_, werden nur die ersten _N_ Variablen Werte zugewiesen. Die Werte der verbleibenden Variablen sind undefined.

```js
const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined
```

#### Variablen tauschen

Zwei Variablenwerte können in einem Destructuring-Ausdruck getauscht werden.

Ohne Destructuring erfordert das Tauschen zwei Werte eine temporäre Variable (oder in einigen Low-Level-Sprachen den [XOR-Swap-Trick](https://en.wikipedia.org/wiki/XOR_swap_algorithm)).

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

#### Ein Array von einer Funktion parsen

Es war schon immer möglich, ein Array von einer Funktion zurückzugeben. Destructuring kann die Arbeit mit einem Array-Rückgabewert prägnanter machen.

In diesem Beispiel gibt `f()` die Werte `[1, 2]` als Ausgabe zurück, die in einer einzigen Linie mit Destructuring geparst werden können.

```js
function f() {
  return [1, 2];
}

const [a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

#### Einige zurückgegebene Werte ignorieren

Sie können Rückgabewerte ignorieren, an denen Sie nicht interessiert sind:

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

Obwohl in diesem Fall wahrscheinlich klarer ist, einfach die Funktion aufzurufen und Destructuring überhaupt nicht zu verwenden. Sie müssen den Rückgabewert nicht verwenden.

#### Ein Bindungsmuster als Resteigenschaft verwenden

Die Resteigenschaft des Array-Destructuring kann ein weiteres Array- oder Objektbindungsmuster sein. Das innere Destructuring destrukturiert von dem nach dem Sammeln der Restelemente erstellten Array, sodass Sie auf diese Weise nicht auf Eigenschaften des ursprünglichen Iterablen zugreifen können.

```js
const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length); // 1 2 1
```

```js
const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4
```

Diese Bindungsmuster können sogar verschachtelt sein, solange jede Resteigenschaft die letzte in der Liste ist.

```js
const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6
```

Andererseits kann Objekt-Destructuring nur einen Bezeichner als Resteigenschaft haben.

```js-nolint example-bad
const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: `...` must be followed by an identifier in declaration contexts

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: `...` must be followed by an assignable reference in assignment contexts
```

#### Werte von einem regulären Ausdrucks-Match auspacken

Wenn die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) einen Treffer findet, gibt sie ein Array zurück, das zuerst den gesamten übereinstimmenden Bereich der Zeichenkette und dann die Bereiche der Zeichenkette enthält, die jeder klammerausdrucksbezogenen Gruppe im regulären Ausdruck entsprechen. Destructuring ermöglicht es Ihnen, die Teile dieses Arrays einfach auszupacken, ohne die vollständige Übereinstimmung, wenn sie nicht benötigt wird.

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

#### Array-Destructuring bei jedem Iterabel verwenden

Array-Destructuring ruft das [iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der rechten Seite auf. Daher kann jedes Iterable, nicht notwendigerweise Arrays, destructuriert werden.

```js
const [a, b] = new Map([
  [1, 2],
  [3, 4],
]);
console.log(a, b); // [1, 2] [3, 4]
```

Nicht-Iterables können nicht als Arrays destructuriert werden.

```js example-bad
const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable
```

Iterables werden nur iteriert, bis alle Bindungen zugewiesen sind.

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

Das Restbinding wird bereitwillig ausgewertet und erstellt ein neues Array, anstatt das alte Iterable zu verwenden.

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

Eine Eigenschaft kann aus einem Objekt entpackt und einer Variablen mit einem anderen Namen als die Objekteigenschaft zugewiesen werden.

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

Hier zum Beispiel nimmt `const { p: foo } = o` aus dem Objekt `o` die Eigenschaft namens `p` und weist sie einer lokalen Variable namens `foo` zu.

#### Zuweisung zu neuen Variablennamen und Bereitstellung von Standardwerten

Eine Eigenschaft kann sowohl

- Aus einem Objekt entpackt und einer Variablen mit einem anderen Namen zugewiesen werden.
- Einem Standardwert zugewiesen werden, falls der entpackte Wert `undefined` ist.

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### Eigenschaften aus Objekten entpacken, die als Funktionsparameter übergeben werden

Objekte, die in Funktionsparameter übergeben werden, können auch in Variablen entpackt werden, auf die dann innerhalb des Funktionskörpers zugegriffen werden kann.
Wie bei der Objektzuweisung erlaubt die Destructuring-Syntax, dass die neue Variable denselben Namen wie die ursprüngliche Eigenschaft oder einen anderen Namen hat, und Standardwerte zuweisen, für den Fall, dass das ursprüngliche Objekt die Eigenschaft nicht definiert.

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

Hier wird gezeigt, wie eine Eigenschaft des übergebenen Objekts in eine Variable mit demselben Namen entpackt wird.
Der Parameterwert `{ id }` gibt an, dass die `id`-Eigenschaft des an die Funktion übergebenen Objekts in eine Variable mit demselben Namen entpackt werden soll, die dann innerhalb der Funktion verwendet werden kann.

```js
function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42
```

Sie können den Namen der entpackten Variablen definieren.
Hier entpacken wir die Eigenschaft namens `displayName` und benennen sie für die Verwendung im Funktionskörper in `dname` um.

```js
function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // "jdoe"
```

Verschachtelte Objekte können auch entpackt werden.
Das untenstehende Beispiel zeigt die Eigenschaft `fullname.firstName`, die in eine Variable namens `name` entpackt wird.

```js
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane"
```

#### Den Standardwert eines Funktionsparameters festlegen

Standardwerte können mit `=` festgelegt werden und werden als Variablenwerte verwendet, wenn eine angegebene Eigenschaft im übergebenen Objekt nicht existiert.

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

In der Funktionssignatur für `drawChart` oben hat die entpackte linke Seite einen Standardwert von einem leeren Objekt `= {}`.

Sie hätten die Funktion auch ohne diesen Standardwert schreiben können. Wenn Sie jedoch diesen Standardwert weglassen, sucht die Funktion nach mindestens einem zu liefernden Argument, während Sie in ihrer aktuellen Form `drawChart()` aufrufen können, ohne irgendwelche Parameter bereitzustellen. Andernfalls müssen Sie mindestens ein leeres Objektliteral bereitstellen.

Weitere Informationen finden Sie unter [Default parameters > Destructured parameter with default value assignment](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters#destructured_parameter_with_default_value_assignment).

#### Verschachteltes Objekt und Array-Destructuring

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

#### For of Iteration und Destructuring

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

Berechnete Eigenschaftsnamen, wie bei [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), können mit Destructuring verwendet werden.

```js
const key = "z";
const { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

#### Ungültiger JavaScript-Identifikator als Eigenschaftsname

Destructuring kann mit Eigenschaftsnamen verwendet werden, die keine gültigen JavaScript-{{Glossary("Identifier", "Identifikatoren")}} sind, indem ein alternativer, gültiger Bezeichner bereitgestellt wird.

```js
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;

console.log(fizzBuzz); // true
```

### Destructuring von primitiven Werten

Objekt-Destructuring ist fast gleichbedeutend mit [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das bedeutet, wenn Sie versuchen, einen primitiven Wert zu destructurieren, wird der Wert in das entsprechende Wrapper-Objekt gewickelt und die Eigenschaft wird auf das Wrapper-Objekt zugegriffen.

```js
const { a, toFixed } = 1;
console.log(a, toFixed); // undefined ƒ toFixed() { [native code] }
```

So wie das Zugreifen auf Eigenschaften, ruft das Destructuring von `null` oder `undefined` einen {{jsxref("TypeError")}} hervor.

```js example-bad
const { a } = undefined; // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.
const { b } = null; // TypeError: Cannot destructure property 'b' of 'null' as it is null.
```

Das passiert auch dann, wenn das Muster leer ist.

```js example-bad
const {} = null; // TypeError: Cannot destructure 'null' as it is null.
```

#### Kombiniertes Array- und Objekt-Destructuring

Array- und Objekt-Destructuring können kombiniert werden. Angenommen, Sie möchten das dritte Element im Array `props` unten, und dann möchten Sie die `name`-Eigenschaft im Objekt, dann können Sie folgendes tun:

```js
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```

#### Die Prototypenkette wird aufgeschaut, wenn das Objekt dekonstruiert wird

Beim Dekonstruieren eines Objekts, wenn eine Eigenschaft nicht in sich selbst zugegriffen wird, wird die Suche entlang der Prototypenkette fortgesetzt.

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
- [ES6 in der Tiefe: Destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/) auf hacks.mozilla.org (2015)
