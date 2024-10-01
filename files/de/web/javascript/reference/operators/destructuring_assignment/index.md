---
title: Destructuring Assignment
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Die **Destructuring Assignment**-Syntax ist ein JavaScript-Ausdruck, der es ermöglicht, Werte aus Arrays oder Eigenschaften aus Objekten in einzelne Variablen zu entpacken.

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

Die Destructuring-Assignment-Syntax verwendet eine ähnliche Syntax, allerdings steht sie auf der linken Seite der Zuweisung. Sie definiert, welche Werte aus der Quelldatenstruktur entpackt werden sollen.

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Ähnlich können Objekte auf der linken Seite der Zuweisung entpackt werden.

```js
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
```

Diese Fähigkeit ist vergleichbar mit Funktionen in Sprachen wie Perl und Python.

Für spezifische Funktionen zur Array- oder Objekt-Destrukturierung, beachten Sie die einzelnen [Beispiele](#beispiele) unten.

### Bindung und Zuweisung

Für sowohl Objekt- als auch Array-Destrukturierung gibt es zwei Arten von Destrukturierungsmustern: _Bindungsmuster_ und _Zuweismuster_, mit leicht unterschiedlichen Syntaxen.

In Bindungsmustern beginnt das Muster mit einem Deklarationsschlüsselwort (`var`, `let` oder `const`). Dann muss jede einzelne Eigenschaft entweder an eine Variable gebunden oder weiter destrukturiert werden.

```js
const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`
```

Alle Variablen teilen dieselbe Deklaration, so dass, wenn Sie einige Variablen neu zuweisbar und andere schreibgeschützt lassen möchten, Sie zweimal destrukturieren müssen — einmal mit `let`, einmal mit `const`.

```js
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable
```

In vielen anderen Syntaxen, bei denen die Sprache eine Variable für Sie bindet, können Sie ein Bindungsdestrukturierungsmuster verwenden. Diese umfassen:

- Die Schleifenvariable von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) und [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleifen;
- [Funktion](/de/docs/Web/JavaScript/Reference/Functions) Parameter;
- Die [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Bindungsvariable.

Bei Zuweismustern beginnt das Muster nicht mit einem Schlüsselwort. Jede destrukturierte Eigenschaft wird einem Ziel der Zuweisung zugewiesen — dieses kann entweder vorher mit `var` oder `let` deklariert worden sein oder eine Eigenschaft eines anderen Objekts sein — generell kann es alles sein, was auf der linken Seite eines Zuweisungsausdrucks erscheinen kann.

```js
const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`
```

> [!NOTE]
> Die Klammern `( ... )` um den Zuweisungsausdruck sind erforderlich, wenn die Objektliteral-Distrukturierungszuweisung ohne Deklaration verwendet wird.
>
> `{ a, b } = { a: 1, b: 2 }` ist keine gültige eigenständige Syntax, da das `{ a, b }` auf der linken Seite als Block und nicht als Objektliteral nach den Regeln von [Ausdrucks-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) betrachtet wird. `({ a, b } = { a: 1, b: 2 })` ist jedoch gültig, ebenso wie `const { a, b } = { a: 1, b: 2 }`.
>
> Wenn Ihr Codierungsstil keine abschließenden Semikolons einschließt, muss der `( ... )` Ausdrück mit einem Semikolon vorangestellt werden, oder er kann verwendet werden, um eine Funktion in der vorherigen Zeile auszuführen.

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

Sie können nur Zuweismuster auf der linken Seite des [Zuweisungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Assignment) verwenden. Sie können sie nicht mit zusammengesetzten Zuweisungsoperatoren wie `+=` oder `*=` verwenden.

### Standardwert

Jede destrukturierte Eigenschaft kann einen _Standardwert_ haben. Der Standardwert wird verwendet, wenn die Eigenschaft nicht vorhanden ist oder den Wert `undefined` hat. Er wird nicht verwendet, wenn die Eigenschaft den Wert `null` hat.

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

### Rest-Eigenschaft

Sie können ein Destrukturierungsmuster mit einer Rest-Eigenschaft `...rest` abschließen. Dieses Muster wird alle verbleibenden Eigenschaften des Objekts oder Arrays in ein neues Objekt oder Array speichern.

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

### Array-Destrukturierung

#### Grundlegende Variablenzuweisung

```js
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### Destrukturierung mit mehr Elementen als Quelle

Bei einer Array-Destrukturierung von einem Array der Länge _N_, das auf der rechten Seite der Zuweisung angegeben ist, wenn die Anzahl der auf der linken Seite der Zuweisung angegebenen Variablen größer ist als _N_, werden nur die ersten _N_ Variablen Werte zugewiesen. Die Werte der verbleibenden Variablen sind `undefined`.

```js
const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined
```

#### Variablen tauschen

Zwei Variablenwerte können in einem Destrukturierungsausdruck vertauscht werden.

Ohne Destrukturierungszuweisung erfordert das Tauschen von zwei Werten eine temporäre Variable (oder in einigen Low-Level-Sprachen den [XOR-Swap-Trick](https://en.wikipedia.org/wiki/XOR_swap_algorithm)).

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

#### Parsen eines von einer Funktion zurückgegebenen Arrays

Es war schon immer möglich, ein Array von einer Funktion zurückzugeben. Destrukturierung kann das Arbeiten mit einem Array-Rückgabewert prägnanter machen.

In diesem Beispiel gibt `f()` die Werte `[1, 2]` als Ausgabe zurück, die mit Destrukturierung in einer einzigen Zeile geparst werden kann.

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

#### Ein Bindungsmuster als Rest-Eigenschaft verwenden

Die Rest-Eigenschaft der Array-Destrukturierungszuweisung kann ein weiteres Array- oder Objektbindungsmuster sein. Die innere Destrukturierung destrukturiert aus dem Array, das nach dem Sammeln der Rest-Elemente erstellt wurde, so dass Sie auf diese Weise keine Eigenschaften des ursprünglichen Iterables zugreifen können.

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

Auf der anderen Seite kann die Objekt-Destrukturierung nur einen Bezeichner als Rest-Eigenschaft haben.

```js-nolint example-bad
const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: `...` must be followed by an identifier in declaration contexts

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: `...` must be followed by an assignable reference in assignment contexts
```

#### Werte aus einem regulären Ausdrucks-Match entpacken

Wenn die Methode des regulären Ausdrucks [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) einen Treffer findet, gibt sie ein Array zurück, das zuerst den gesamten übereinstimmenden Teil des Strings und dann die Teile des Strings enthält, die mit jeder klammerartigen Gruppe im regulären Ausdruck übereinstimmen. Die Destrukturierungszuweisung ermöglicht es Ihnen, die Teile einfach aus diesem Array zu entpacken, indem der volle Match ignoriert wird, wenn er nicht benötigt wird.

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

#### Array-Destrukturierung bei jedem iterierbaren Objekt verwenden

Array-Destrukturierung ruft das [iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) der rechten Seite auf. Daher können beliebige iterierbare Objekte, nicht unbedingt Arrays, destrukturiert werden.

```js
const [a, b] = new Map([
  [1, 2],
  [3, 4],
]);
console.log(a, b); // [1, 2] [3, 4]
```

Nicht-iterierbare Objekte können nicht als Arrays destrukturiert werden.

```js example-bad
const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable
```

Iterierbare Objekte werden nur bis zur Zuweisung aller Bindungen iteriert.

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

Die Rest-Bindung wird frühzeitig ausgewertet und ein neues Array erstellt, anstatt das alte iterierbare Objekt zu verwenden.

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

### Objekt-Destrukturierung

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

#### Zu neuen Variablennamen zuweisen

Eine Eigenschaft kann aus einem Objekt entpackt und einer Variablen mit einem anderen Namen als dem Objekteigenschaftsnamen zugewiesen werden.

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

Hier, zum Beispiel, nimmt `const { p: foo } = o` aus dem Objekt `o` die Eigenschaft namens `p` und weist sie einer lokalen Variablen namens `foo` zu.

#### Zu neuen Variablennamen zuweisen und Standardwerte bereitstellen

Eine Eigenschaft kann sowohl aus einem Objekt entpackt und einer Variablen mit einem anderen Namen zugewiesen werden, als auch einen Standardwert erhalten, falls der entpackte Wert `undefined` ist.

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### Eigenschaften von als Funktionsparameter übergebenen Objekten entpacken

Objekte, die in Funktionsparameter übergeben werden, können ebenfalls in Variablen entpackt werden, die dann innerhalb des Funktionskörpers verwendet werden können. Ebenso wie bei der Objektzuweisung ermöglicht die Destrukturierungssyntax, dass die neue Variable denselben Namen oder einen anderen Namen als die originale Eigenschaft haben kann, und dass Standardwerte zugewiesen werden, falls das ursprüngliche Objekt die Eigenschaft nicht definiert.

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

Hier zeigen wir, wie man eine Eigenschaft des übergebenen Objekts in eine Variable mit demselben Namen entpackt. Der Parameterwert `{ id }` gibt an, dass die `id`-Eigenschaft des an die Funktion übergebenen Objekts in eine Variable mit demselben Namen entpackt werden soll, die dann innerhalb der Funktion verwendet werden kann.

```js
function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42
```

Sie können den Namen der entpackten Variablen definieren. Hier entpacken wir die Eigenschaft namens `displayName` und benennen sie in `dname` um, um sie innerhalb des Funktionskörpers zu verwenden.

```js
function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // "jdoe"
```

Verschachtelte Objekte können ebenfalls entpackt werden. Das folgende Beispiel zeigt die Eigenschaft `fullname.firstName`, die in eine Variable namens `name` entpackt wird.

```js
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane"
```

#### Standardwert eines Funktionsparameters festlegen

Standardwerte können mit `=` angegeben werden und werden als Variablenwerte verwendet, wenn eine angegebene Eigenschaft im übergebenen Objekt nicht existiert.

Im folgenden zeigen wir eine Funktion, bei der die Standardgröße `'big'` ist, die Standardkoordinaten `x: 0, y: 0` und der Standardradius 25.

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

Sie könnten die Funktion auch ohne diesen Standardwert schreiben. Wenn Sie diesen Standardwert jedoch weglassen, sucht die Funktion nach mindestens einem Argument, das bei der Ausführung übergeben wird. In ihrer aktuellen Form können Sie `drawChart()` jedoch ohne Angabe von Parametern aufrufen. Andernfalls müssen Sie mindestens ein leeres Objektliteral angeben.

Für weitere Informationen siehe [Default parameters > Destructured parameter with default value assignment](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters#destructured_parameter_with_default_value_assignment).

#### Verschachtelte Objekt- und Array-Destrukturierung

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

#### Iteration mit `for of` und Destrukturierung

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

#### Berechnete Objekteigenschaftsnamen und Destrukturierung

Berechnete Eigenschaftsnamen, wie bei [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), können mit Destrukturierung verwendet werden.

```js
const key = "z";
const { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

#### Ungültiger JavaScript-Bezeichner als Eigenschaftsname

Destrukturierung kann mit Eigenschaftsnamen verwendet werden, die keine gültigen JavaScript-{{Glossary("Identifier", "Bezeichner")}} sind, indem ein alternativer, gültiger Bezeichner bereitgestellt wird.

```js
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;

console.log(fizzBuzz); // true
```

### Destrukturierung primärer Werte

Die Objekt-Destrukturierung ist fast gleichbedeutend mit [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das bedeutet, wenn Sie versuchen, einen primitiven Wert zu destrukturieren, wird der Wert in das entsprechende Wrapper-Objekt gewickelt und die Eigenschaft auf dem Wrapper-Objekt zugegriffen.

```js
const { a, toFixed } = 1;
console.log(a, toFixed); // undefined ƒ toFixed() { [native code] }
```

Genauso wie beim Zugriff auf Eigenschaften, wirft das Destrukturieren von `null` oder `undefined` einen {{jsxref("TypeError")}}.

```js example-bad
const { a } = undefined; // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.
const { b } = null; // TypeError: Cannot destructure property 'b' of 'null' as it is null.
```

Dies passiert auch, wenn das Muster leer ist.

```js example-bad
const {} = null; // TypeError: Cannot destructure 'null' as it is null.
```

#### Kombinierte Array- und Objekt-Destrukturierung

Array- und Objekt-Destrukturierung können kombiniert werden. Angenommen, Sie möchten das dritte Element im Array `props` unten und dann die `name`-Eigenschaft im Objekt, Sie können das folgende tun:

```js
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```

#### Die Prototypenkette wird durchsucht, wenn das Objekt destrukturiert wird

Wenn ein Objekt destrukturiert wird, wird, wenn eine Eigenschaft nicht in sich selbst abgerufen wird, entlang der Prototypenkette weitergesucht.

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
