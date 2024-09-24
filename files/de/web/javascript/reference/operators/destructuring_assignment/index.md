---
title: Destrukturierende Zuweisung
slug: Web/JavaScript/Reference/Operators/Destructuring_assignment
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Die Syntax der **destrukturierenden Zuweisung** ist ein JavaScript-Ausdruck, der es ermöglicht, Werte aus Arrays oder Eigenschaften von Objekten in separate Variablen zu entpacken.

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

({ a, b } = obj); // Klammern sind erforderlich
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);
```

## Beschreibung

Die Objekt- und Array-Literale bieten eine einfache Möglichkeit, _ad hoc_ Datenpakete zu erstellen.

```js
const x = [1, 2, 3, 4, 5];
```

Die destrukturierende Zuweisung verwendet eine ähnliche Syntax, jedoch auf der linken Seite der Zuweisung. Sie definiert, welche Werte aus der Quelldatenstruktur entpackt werden sollen.

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Ähnlich können Sie Objekte auf der linken Seite der Zuweisung destrukturieren.

```js
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// entspricht:
// const a = obj.a;
// const b = obj.b;
```

Diese Fähigkeit ist ähnlich wie in Sprachen wie Perl und Python.

Für spezifische Funktionen zur Array- oder Objekt-Destrukturierung siehe die einzelnen [Beispiele](#beispiele) unten.

### Bindung und Zuweisung

Für sowohl Objekt- als auch Array-Destrukturierung gibt es zwei Arten von Destrukturierungsmustern: Bindungsmuster und Zuweisungsmuster, mit leicht unterschiedlichen Syntaxen.

Bei Bindungsmuster beginnt das Muster mit einem Deklarationskürzel (`var`, `let` oder `const`). Dann muss jede einzelne Eigenschaft entweder einer Variablen zugeordnet oder weiter destrukturiert werden.

```js
const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Zwei Variablen werden gebunden: `a` und `d`
```

Alle Variablen teilen dieselbe Deklaration, sodass, wenn Sie einige Variablen neu zuweisbar und andere schreibgeschützt wünschen, Sie möglicherweise zweimal destrukturieren müssen — einmal mit `let`, einmal mit `const`.

```js
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a ist konstant
let {
  b: { c: d },
} = obj; // d ist neu zuweisbar
```

In vielen anderen Syntaxen, in denen die Sprache für Sie eine Variable bindet, können Sie ein Bindungsdestrukturierungsmuster verwenden. Dazu gehören:

- Die Schleifenvariable von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) und [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleifen;
- [Funktion](/de/docs/Web/JavaScript/Reference/Functions) Parameter;
- Die [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Bindungsvariable.

Bei Zuweisungsmustern beginnt das Muster nicht mit einem Stichwort. Jede destrukturierte Eigenschaft wird einem Zuweisungsziel zugewiesen - das entweder vorher mit `var` oder `let` deklariert ist, oder eine Eigenschaft eines anderen Objekts ist - im Allgemeinen alles, was auf der linken Seite eines Zuweisungsausdrucks erscheinen kann.

```js
const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// Die Eigenschafften `a` und `b` werden zu Eigenschaften von `numbers` zugewiesen
```

> [!NOTE]
> Die Klammern `( ... )` um die Zuweisung sind erforderlich, wenn die destrukturierende Zuweisung eines Objekt-Literals ohne Deklaration verwendet wird.
>
> `{ a, b } = { a: 1, b: 2 }` ist keine gültige eigenständige Syntax, da die `{ a, b }` auf der linken Seite als Block und nicht als Objekt-Literal angesehen wird gemäß den Regeln der [Ausdrucks-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement). Jedoch, `({ a, b } = { a: 1, b: 2 })` ist gültig, ebenso wie `const { a, b } = { a: 1, b: 2 }`.
>
> Wenn Ihr Programmierstil keine abschließenden Semikolons beinhaltet, muss der Ausdruck `( ... )` durch ein Semikolon vorhergegangen werden, oder es kann zur Ausführung einer Funktion in der vorherigen Zeile verwendet werden.

Beachten Sie, dass das äquivalente Bindungsmuster des obigen Codes keine gültige Syntax ist:

```js-nolint example-bad
const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;

// Dies entspricht:
//   const numbers[0] = obj.a;
//   const numbers[1] = obj.b;
// Was definitiv nicht gültig ist.
```

Sie können nur Zuweisungsmuster als die linke Seite des [Zuweisungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Assignment) verwenden. Sie können sie nicht mit zusammengesetzten Zuweisungsoperatoren wie `+=` oder `*=` verwenden.

### Standardwert

Jede destrukturierte Eigenschaft kann einen _Standardwert_ haben. Der Standardwert wird verwendet, wenn die Eigenschaft nicht vorhanden ist oder den Wert `undefined` hat. Er wird nicht verwendet, wenn die Eigenschaft den Wert `null` hat.

```js
const [a = 1] = []; // a ist 1
const { b = 2 } = { b: undefined }; // b ist 2
const { c = 2 } = { c: null }; // c ist null
```

Der Standardwert kann jeder Ausdruck sein. Er wird nur dann ausgewertet, wenn er benötigt wird.

```js
const { b = console.log("hey") } = { b: 2 };
// Es wird nichts protokolliert, da `b` definiert ist und es keinen Bedarf
// gibt, den Standardwert auszuwerten.
```

### Rest-Eigenschaft

Sie können ein Destrukturierungsmuster mit einer Rest-Eigenschaft `...rest` abschließen. Dieses Muster speichert alle verbleibenden Eigenschaften des Objekts oder Arrays in einem neuen Objekt oder Array.

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
// Es wird empfohlen, den Rest-Operator immer als letztes Element zu verwenden
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

#### Destrukturierung mit mehr Elementen als die Quelle

In einer Array-Destrukturierung von einem Array der Länge _N_, das auf der rechten Seite der Zuweisung angegeben ist, wenn die Anzahl der Variablen auf der linken Seite der Zuweisung größer als _N_ ist, werden nur die ersten _N_ Variablen zugewiesen. Die Werte der verbleibenden Variablen sind undefined.

```js
const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined
```

#### Variablentausch

Zwei Variablenwerte können in einem Destrukturierungsausdruck vertauscht werden.

Ohne destrukturierende Zuweisung erfordert das Tauschen zweier Werte eine temporäre Variable (oder, in einigen Low-Level-Sprachen, den [XOR-Swap-Trick](https://en.wikipedia.org/wiki/XOR_swap_algorithm)).

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

Es war schon immer möglich, ein Array von einer Funktion zurückzugeben. Destrukturierung kann die Arbeit mit einem Array-Rückgabewert prägnanter machen.

In diesem Beispiel gibt `f()` die Werte `[1, 2]` als Ausgabe zurück, die in einer einzigen Zeile mit Destrukturierung geparst werden können.

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

Die Rest-Eigenschaft der Array-Destrukturierungszuweisung kann ein anderes Array- oder Objekt-Bindungsmuster sein. Die innere Destrukturierung erfolgt nach der Erstellung des Arrays aus den restlichen Elementen, sodass Sie auf diese Weise nicht auf Eigenschaften des ursprünglichen Iterable zugreifen können.

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

Auf der anderen Seite kann Objekt-Destrukturierung nur eine Kennung als Rest-Eigenschaft haben.

```js-nolint example-bad
const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: `...` muss in Deklarationskontexten von einer Kennung gefolgt werden

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: `...` muss in Zuweisungskontexten von einer zuweisbaren Referenz gefolgt werden
```

#### Werte aus einem regulären Ausdrucks-Match entpacken

Wenn die Methode `exec()` eines regulären Ausdrucks ein Match findet, gibt sie ein Array zurück, das zuerst den gesamten übereinstimmenden Teil des Strings und dann die Teile des Strings enthält, die mit jeder geklammerten Gruppe im regulären Ausdruck übereinstimmen. Destrukturierungszuweisung ermöglicht es, die Teile aus diesem Array einfach zu entpacken und das vollständige Match zu ignorieren, wenn es nicht benötigt wird.

```js
function parseProtocol(url) {
  const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/de/docs/Web/JavaScript",
  // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/de/docs/Web/JavaScript"),
);
// "https"
```

#### Verwenden von Array-Destrukturierung für jedes Iterable

Array-Destrukturierung ruft das Iterable-Protokoll der rechten Seite auf. Daher kann jedes Iterable, nicht nur Arrays, destrukturiert werden.

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

Iterables werden nur so weit durchlaufen, bis alle Bindungen zugewiesen sind.

```js
const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      yield v;
    }
  },
};
const [a, b] = obj; // Gibt nur 0 und 1 aus
```

Die Rest-Bindung wird eifrig ausgewertet und erstellt ein neues Array, anstatt das alte Iterable zu verwenden.

```js
const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      yield v;
    }
  },
};
const [a, b, ...rest] = obj; // Gibt 0 1 2 3 aus
console.log(rest); // [2, 3] (ein Array)
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

#### Zuweisen zu neuen Variablennamen

Eine Eigenschaft kann aus einem Objekt entpackt und einer Variablen mit einem anderen Namen als die Objekteigenschaft zugewiesen werden.

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

Hier, zum Beispiel, `const { p: foo } = o` nimmt die Eigenschaft `p` aus dem Objekt `o` und weist sie einer lokalen Variablen mit dem Namen `foo` zu.

#### Zuweisen zu neuen Variablennamen und Bereitstellen von Standardwerten

Eine Eigenschaft kann sowohl

- aus einem Objekt entpackt und einer Variablen mit einem anderen Namen zugewiesen und
- mit einem Standardwert zugewiesen werden, falls der entpackte Wert `undefined` ist.

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### Entpacken von Eigenschaften aus Objekten, die als Funktionsparameter übergeben werden

Objekte, die in Funktionsparameter übergeben werden, können auch in Variablen entpackt werden, die dann innerhalb des Funktionskörpers verwendet werden können. Wie bei der Objektzuweisung ermöglicht die Destrukturierungssyntax, dass die neue Variable denselben oder einen anderen Namen als die ursprüngliche Eigenschaft hat und Standardwerte festlegen kann, falls das ursprüngliche Objekt die Eigenschaft nicht definiert.

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

Hier zeigen wir, wie eine Eigenschaft des übergebenen Objekts in eine Variable mit demselben Namen entpackt wird. Der Parameterwert `{ id }` zeigt an, dass die Eigenschaft `id` des Objekts, das an die Funktion übergeben wird, in eine Variable mit demselben Namen entpackt werden soll, die dann innerhalb der Funktion verwendet werden kann.

```js
function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42
```

Sie können den Namen der entpackten Variable definieren. Hier entpacken wir die Eigenschaft `displayName` und benennen sie in `dname` für den Gebrauch innerhalb des Funktionskörpers um.

```js
function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // "jdoe"
```

Verschachtelte Objekte können ebenfalls entpackt werden. Das Beispiel unten zeigt, wie die Eigenschaft `fullname.firstName` in eine Variable namens `name` entpackt wird.

```js
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane"
```

#### Festlegen eines Standardwertes für einen Funktionsparameter

Standardwerte können mit `=` angegeben werden und werden als Variablenwerte verwendet, wenn eine angegebene Eigenschaft im übergebenen Objekt nicht vorhanden ist.

Unten zeigen wir eine Funktion, bei der die Standardgröße `'big'` ist, die Standardkoordinaten `x: 0, y: 0` sind und der Standardradius 25 beträgt.

```js
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // Diagramm zeichnen
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});
```

Im Funktionskopf von `drawChart` oben hat die destrukturierte linke Seite einen Standardwert eines leeren Objekts `= {}`.

Sie hätten die Funktion auch ohne diesen Standardwert schreiben können. Wenn Sie jedoch diesen Standardwert weglassen, wird die Funktion zumindest ein Argument erfordern, wenn sie aufgerufen wird, während Sie in der aktuellen Form `drawChart()` ohne Parameter aufrufen können. Ansonsten müssen Sie zumindest ein leeres Objektliteral bereitstellen.

Für mehr Informationen, siehe [Standardparameter > Destrukturierter Parameter mit Standardwertzuweisung](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters#destructured_parameter_with_default_value_assignment).

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
  url: "/de/docs/Tools/Scratchpad",
};

const {
  title: englishTitle, // umbenennen
  translations: [
    {
      title: localeTitle, // umbenennen
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
```

#### For of-Iteration und Destrukturierung

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

Berechnete Eigenschaftsnamen, wie auf [Objekt-Literalen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), können mit Destrukturierung verwendet werden.

```js
const key = "z";
const { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

#### Ungültiger JavaScript-Bezeichner als Eigenschaftsname

Destrukturierung kann mit Eigenschaftsnamen verwendet werden, die keine gültigen JavaScript-Bezeichner sind, indem ein alternativer Bezeichner angegeben wird, der gültig ist.

```js
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;

console.log(fizzBuzz); // true
```

### Destrukturierung von primitiven Werten

Objekt-Destrukturierung ist fast gleichwertig mit [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Das bedeutet, wenn Sie versuchen, einen primitiven Wert zu destrukturieren, wird der Wert in das entsprechende Wrapper-Objekt gewickelt und die Eigenschaft wird auf dem Wrapper-Objekt abgerufen.

```js
const { a, toFixed } = 1;
console.log(a, toFixed); // undefined ƒ toFixed() { [native code] }
```

Genauso wie beim Zugriff auf Eigenschaften wirft das Destrukturieren von `null` oder `undefined` einen {{jsxref("TypeError")}}.

```js example-bad
const { a } = undefined; // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.
const { b } = null; // TypeError: Cannot destructure property 'b' of 'null' as it is null.
```

Dies geschieht auch, wenn das Muster leer ist.

```js example-bad
const {} = null; // TypeError: Cannot destructure 'null' as it is null.
```

#### Kombinierte Array- und Objekt-Destrukturierung

Array- und Objekt-Destrukturierung können kombiniert werden. Angenommen, Sie möchten das dritte Element im folgenden Array `props` und danach die `name`-Eigenschaft im Objekt, dann können Sie Folgendes tun:

```js
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```

#### Die Prototypenkette wird durchsucht, wenn das Objekt dekonstruiert wird

Beim Dekonstruieren eines Objekts, falls eine Eigenschaft nicht in sich selbst zugegriffen wird, wird weiter entlang der Prototypenkette gesucht.

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
