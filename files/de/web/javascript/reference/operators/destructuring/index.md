---
title: Destrukturierung
slug: Web/JavaScript/Reference/Operators/Destructuring
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Die **Destrukturierungssyntax** ist eine JavaScript-Syntax, mit der sich Werte aus Arrays oder Eigenschaften aus Objekten in einzelne Variablen entpacken lassen. Sie kann überall dort verwendet werden, wo Daten entgegengenommen werden, etwa auf der linken Seite einer Zuweisung oder an Stellen, an denen neue Bindungen für Bezeichner erstellt werden.

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

Ausdrücke mit Objekt- und Arrayliteralen bieten eine einfache Möglichkeit, _ad hoc_ Datenpakete zu erstellen.

```js
const arr = [a, b, c];
```

Die Destrukturierung verwendet eine ähnliche Syntax, setzt sie jedoch auf der linken Seite der Zuweisung ein. Sie führt die umgekehrte Operation einer Arraydeklaration aus, indem sie jedes Element der Sammlung als separate Variable deklariert.

```js
const arr = [1, 2, 3];
const [a, b, c] = arr;
// a = 1, b = 2, c = 3
```

Vergleichen Sie bei Objekten die beiden folgenden Zeilenpaare. Innerhalb jedes Paars besteht eine direkte Entsprechung.

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

Diese Möglichkeit ähnelt Funktionen, die in Sprachen wie Perl und Python vorhanden sind.

Funktionen, die speziell für die Destrukturierung von Arrays oder Objekten gelten, finden Sie in den jeweiligen [Beispielen](#beispiele) unten.

### Bindung und Zuweisung

Sowohl bei der Objekt- als auch bei der Arraydestrukturierung gibt es zwei Arten von Destrukturierungsmustern: _{{Glossary("binding", "Bindungsmuster")}}_ und _Zuweisungsmuster_. Ihre Syntax unterscheidet sich leicht.

Bei Bindungsmustern beginnt das Muster mit einem Deklarationsschlüsselwort (`var`, `let` oder `const`). Anschließend muss jede einzelne Eigenschaft entweder an eine Variable gebunden oder weiter destrukturiert werden.

```js
const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`
```

Alle Variablen gehören zur selben Deklaration. Wenn einige Variablen erneut zugewiesen werden können sollen, andere aber schreibgeschützt sein sollen, müssen Sie gegebenenfalls zweimal destrukturieren – einmal mit `let` und einmal mit `const`.

```js
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable
```

Auch in vielen anderen Syntaxkonstrukten, in denen die Sprache eine Variable für Sie bindet, können Sie ein Destrukturierungs-Bindungsmuster verwenden. Dazu gehören:

- die Schleifenvariable von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-, [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)- und [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleifen;
- Parameter von [Funktionen](/de/docs/Web/JavaScript/Reference/Functions);
- die Bindungsvariable von [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch).

Bei Zuweisungsmustern beginnt das Muster nicht mit einem Schlüsselwort. Jede destrukturierte Eigenschaft wird einem Zuweisungsziel zugewiesen. Dieses kann zuvor mit `var` oder `let` deklariert worden sein oder eine Eigenschaft eines anderen Objekts sein. Allgemein kommt alles infrage, was auf der linken Seite eines Zuweisungsausdrucks stehen kann.

```js
const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`
```

> [!NOTE]
> Die Klammern `( ... )` um die Zuweisungsanweisung sind erforderlich, wenn ein Objektliteral ohne Deklaration destrukturiert wird.
>
> `{ a, b } = { a: 1, b: 2 }` ist als eigenständige Syntax ungültig, da `{ a, b }` auf der linken Seite gemäß den Regeln für [Ausdrucksanweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) als Block und nicht als Objektliteral betrachtet wird. Dagegen sind sowohl `({ a, b } = { a: 1, b: 2 })` als auch `const { a, b } = { a: 1, b: 2 }` gültig.
>
> Wenn Ihr Codestil keine abschließenden Semikolons vorsieht, muss vor dem Ausdruck `( ... )` ein Semikolon stehen. Andernfalls kann der Ausdruck dazu führen, dass eine Funktion aus der vorherigen Zeile ausgeführt wird.

Beachten Sie, dass das entsprechende _Bindungsmuster_ für den obigen Code keine gültige Syntax ist:

```js-nolint example-bad
const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;

// This is equivalent to:
//   const numbers[0] = obj.a;
//   const numbers[1] = obj.b;
// Which definitely is not valid.
```

Zuweisungsmuster können Sie nur auf der linken Seite des [Zuweisungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Assignment) verwenden. Mit zusammengesetzten Zuweisungsoperatoren wie `+=` oder `*=` können sie nicht verwendet werden.

### Standardwert

Jede destrukturierte Eigenschaft kann einen _Standardwert_ haben. Der Standardwert wird verwendet, wenn die Eigenschaft nicht vorhanden ist oder den Wert `undefined` hat. Hat die Eigenschaft den Wert `null`, wird er nicht verwendet.

```js
const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null }; // c is null
```

Der Standardwert kann ein beliebiger Ausdruck sein. Er wird nur bei Bedarf ausgewertet.

```js
const { b = console.log("hey") } = { b: 2 };
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.
```

### Rest-Eigenschaften und Rest-Elemente

Sie können ein Destrukturierungsmuster mit einer Rest-Eigenschaft `...rest` abschließen. Bei der Arraydestrukturierung sammelt sie die verbleibenden Elemente des Iterables in einem neuen Array namens `rest` (oder mit einem beliebigen anderen von Ihnen gewählten Namen). Bei der Objektdestrukturierung kopiert sie alle aufzählbaren eigenen Eigenschaften des Objekts, die nicht bereits durch das Destrukturierungsmuster ausgewählt wurden, in ein neues Objekt namens `rest`.

Genauer gesagt heißt die Syntax `...rest` bei der Arraydestrukturierung „Rest-Elemente“ und bei der Objektdestrukturierung „Rest-Eigenschaften“. Häufig werden beide jedoch zusammenfassend als „Rest-Eigenschaft“ bezeichnet.

```js
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]
```

Die Rest-Eigenschaft muss an letzter Stelle im Muster stehen. Auf sie darf kein abschließendes Komma folgen.

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element
```

Wie bei anderen Sprachfunktionen von JavaScript findet auch hier keine implizite tiefe Kopie statt. Die Rest-Eigenschaft erstellt ein neues Objekt (oder Array), aber alle darin enthaltenen Werte, die Objektreferenzen sind, bleiben unverändert.

## Beispiele

### Arraydestrukturierung

#### Einfache Variablenzuweisung

```js
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### Destrukturierung mit mehr Elementen als in der Quelle

Wenn bei der Destrukturierung eines Arrays der Länge _N_ auf der rechten Seite der Zuweisung auf der linken Seite mehr als _N_ Variablen angegeben werden, erhalten nur die ersten _N_ Variablen Werte. Die übrigen Variablen haben den Wert `undefined`.

```js
const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined
```

#### Vertauschen von Variablen

Mit einem einzigen Destrukturierungsausdruck können Sie die Werte zweier Variablen vertauschen.

Ohne Destrukturierung ist zum Vertauschen zweier Werte eine temporäre Variable erforderlich (oder, in manchen hardwarenahen Sprachen, der [XOR-Tauschalgorithmus](https://en.wikipedia.org/wiki/XOR_swap_algorithm)).

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

#### Zerlegen eines von einer Funktion zurückgegebenen Arrays

Es war schon immer möglich, ein Array aus einer Funktion zurückzugeben. Die Destrukturierung kann die Arbeit mit einem als Array zurückgegebenen Wert prägnanter machen.

In diesem Beispiel gibt `f()` die Werte `[1, 2]` zurück. Mit Destrukturierung lassen sie sich in einer einzigen Zeile zerlegen.

```js
function f() {
  return [1, 2];
}

const [a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

#### Ignorieren bestimmter Rückgabewerte

Sie können Rückgabewerte ignorieren, die Sie nicht benötigen:

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

In diesem Fall ist es allerdings wahrscheinlich klarer, die Funktion einfach aufzurufen und ganz auf die Destrukturierung zu verzichten. Sie müssen den Rückgabewert nicht verwenden.

#### Verwenden eines Bindungsmusters als Rest-Eigenschaft

Die Rest-Eigenschaft einer Arraydestrukturierung kann ein weiteres Array- oder Objekt-Bindungsmuster sein. Die innere Destrukturierung erfolgt anhand des Arrays, das nach dem Sammeln der Rest-Elemente erstellt wurde. Auf Eigenschaften des ursprünglichen Iterables können Sie auf diese Weise daher nicht zugreifen.

```js
const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length); // 1 2 1
```

```js
const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4
```

Diese Bindungsmuster können sogar verschachtelt werden, solange jede Rest-Eigenschaft an letzter Stelle der jeweiligen Liste steht.

```js
const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c, d, e, f); // 1 2 3 4 5 6
```

Bei der Objektdestrukturierung hingegen kann als Rest-Eigenschaft nur ein Bezeichner (oder bei Zuweisungsmustern ein Eigenschaftszugriff) verwendet werden.

```js-nolint example-bad
const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: `...` must be followed by an identifier in declaration contexts

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: `...` must be followed by an assignable reference in assignment contexts
```

#### Entpacken von Werten aus einem Treffer eines regulären Ausdrucks

Wenn die Methode [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) eines regulären Ausdrucks einen Treffer findet, gibt sie ein Array zurück. Dieses enthält zuerst den gesamten übereinstimmenden Teil der Zeichenfolge und danach die Teile der Zeichenfolge, die den einzelnen geklammerten Gruppen des regulären Ausdrucks entsprechen. Mithilfe der Destrukturierung können Sie die benötigten Teile dieses Arrays einfach entpacken und dabei den vollständigen Treffer ignorieren, falls Sie ihn nicht benötigen.

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

#### Verwenden der Arraydestrukturierung mit beliebigen Iterables

Die Arraydestrukturierung verwendet das [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) des Werts auf der rechten Seite. Daher lassen sich beliebige Iterables destrukturieren, nicht nur Arrays.

```js
const [a, b] = new Map([
  [1, 2],
  [3, 4],
]);
console.log(a, b); // [1, 2] [3, 4]
```

Nicht iterierbare Werte können nicht als Arrays destrukturiert werden.

```js example-bad
const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable
```

Iterables werden nur so lange durchlaufen, bis allen Bindungen Werte zugewiesen wurden.

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

Die Rest-Bindung wird sofort vollständig ausgewertet und erstellt ein neues Array, statt das ursprüngliche Iterable weiterzuverwenden.

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

### Objektdestrukturierung

#### Einfache Zuweisung

```js
const user = {
  id: 42,
  isVerified: true,
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true
```

#### Zuweisung an Variablen mit neuen Namen

Eine Eigenschaft kann aus einem Objekt entpackt und einer Variablen zugewiesen werden, deren Name sich vom Namen der Objekteigenschaft unterscheidet.

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

Hier entnimmt beispielsweise `const { p: foo } = o` dem Objekt `o` die Eigenschaft namens `p` und weist sie einer lokalen Variablen namens `foo` zu.

#### Zuweisung an Variablen mit neuen Namen und Angabe von Standardwerten

Eine Eigenschaft kann sowohl

- aus einem Objekt entpackt und einer Variablen mit einem anderen Namen zugewiesen werden
- als auch einen Standardwert erhalten, falls der entpackte Wert `undefined` ist.

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### Entpacken von Eigenschaften aus Objekten, die als Funktionsparameter übergeben werden

Objekte, die als Funktionsparameter übergeben werden, können ebenfalls in Variablen entpackt werden, auf die dann innerhalb des Funktionskörpers zugegriffen werden kann.
Wie bei der Zuweisung von Objekten erlaubt die Destrukturierungssyntax, dass die neue Variable denselben oder einen anderen Namen als die ursprüngliche Eigenschaft erhält. Außerdem können Standardwerte für den Fall zugewiesen werden, dass das ursprüngliche Objekt die Eigenschaft nicht definiert.

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

Hier zeigen wir, wie eine Eigenschaft des übergebenen Objekts in eine gleichnamige Variable entpackt wird.
Der Parameterwert `{ id }` gibt an, dass die Eigenschaft `id` des an die Funktion übergebenen Objekts in eine Variable mit demselben Namen entpackt werden soll. Diese kann anschließend innerhalb der Funktion verwendet werden.

```js
function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42
```

Sie können den Namen der entpackten Variablen selbst festlegen.
Hier entpacken wir die Eigenschaft namens `displayName` und benennen sie für die Verwendung innerhalb des Funktionskörpers in `dname` um.

```js
function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // "jdoe"
```

Auch verschachtelte Objekte können entpackt werden.
Das folgende Beispiel zeigt, wie die Eigenschaft `fullName.firstName` in eine Variable namens `name` entpackt wird.

```js
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is Jane"
```

#### Festlegen eines Standardwerts für einen Funktionsparameter

Standardwerte können mit `=` angegeben werden. Sie werden als Variablenwerte verwendet, wenn eine angegebene Eigenschaft im übergebenen Objekt nicht vorhanden ist.

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

In der obigen Funktionssignatur von `drawChart` hat die destrukturierte linke Seite mit `= {}` ein leeres Objekt als Standardwert.

Sie könnten die Funktion auch ohne diesen Standardwert schreiben. Wenn Sie ihn weglassen, muss beim Aufruf der Funktion jedoch mindestens ein Argument übergeben werden. In ihrer aktuellen Form können Sie dagegen `drawChart()` ohne Parameter aufrufen. Ohne den Standardwert müssten Sie zumindest ein leeres Objektliteral übergeben.

Weitere Informationen finden Sie unter [Standardparameter > Destrukturierter Parameter mit Standardwertzuweisung](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters#destructured_parameter_with_default_value_assignment).

#### Destrukturierung verschachtelter Objekte und Arrays

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

#### `for...of`-Iteration und Destrukturierung

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

#### Berechnete Namen von Objekteigenschaften und Destrukturierung

Berechnete Eigenschaftsnamen, wie sie bei [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) verwendet werden, können auch bei der Destrukturierung eingesetzt werden.

```js
const key = "z";
const { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

#### Ungültiger JavaScript-Bezeichner als Eigenschaftsname

Die Destrukturierung kann auch mit Eigenschaftsnamen verwendet werden, die keine gültigen JavaScript-{{Glossary("Identifier", "Bezeichner")}} sind. Dazu wird ein alternativer, gültiger Bezeichner angegeben.

```js
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;

console.log(fizzBuzz); // true
```

### Destrukturierung primitiver Werte

Die Objektdestrukturierung entspricht weitgehend dem [Zugriff auf Eigenschaften](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Wenn Sie versuchen, einen primitiven Wert zu destrukturieren, wird der Wert daher in das entsprechende Wrapper-Objekt umgewandelt und auf die Eigenschaft dieses Wrapper-Objekts zugegriffen.

```js
const { a, toFixed } = 1;
console.log(a, toFixed); // undefined ƒ toFixed() { [native code] }
```

Wie beim Zugriff auf Eigenschaften löst die Destrukturierung von `null` oder `undefined` einen {{jsxref("TypeError")}} aus.

```js example-bad
const { a } = undefined; // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.
const { b } = null; // TypeError: Cannot destructure property 'b' of 'null' as it is null.
```

Dies geschieht auch dann, wenn das Muster leer ist.

```js example-bad
const {} = null; // TypeError: Cannot destructure 'null' as it is null.
```

#### Kombinierte Array- und Objektdestrukturierung

Array- und Objektdestrukturierung können kombiniert werden. Angenommen, Sie möchten aus dem folgenden Array `props` das dritte Element und daraus die Eigenschaft `name` entnehmen. Das können Sie folgendermaßen tun:

```js
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```

#### Bei der Objektdestrukturierung wird die Prototypkette durchsucht

Wird bei der Destrukturierung eines Objekts eine Eigenschaft nicht direkt im Objekt gefunden, wird die Suche entlang der Prototypkette fortgesetzt.

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
- [ES6 im Detail: Destrukturierung](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/) auf hacks.mozilla.org (2015)
