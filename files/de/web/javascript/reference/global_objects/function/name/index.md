---
title: "Function: name"
slug: Web/JavaScript/Reference/Global_Objects/Function/name
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`name`** Dateneigenschaft einer {{jsxref("Function")}} Instanz gibt den bei der Erstellung der Funktion angegebenen Namen an, oder sie kann entweder `anonymous` oder `''` (ein leerer String) sein, wenn die Funktion anonym erstellt wurde.

{{InteractiveExample("JavaScript Demo: Function: name")}}

```js interactive-example
const func1 = function () {};

const object = {
  func2: function () {},
};

console.log(func1.name);
// Expected output: "func1"

console.log(object.func2.name);
// Expected output: "func2"
```

## Wert

Ein String.

{{js_property_attributes(0, 0, 1)}}

> [!NOTE]
> In nicht-standardisierten, vor-ES2015 Implementierungen war auch das `configurable` Attribut `false`.

## Beschreibung

Die `name` Eigenschaft einer Funktion kann verwendet werden, um die Funktion in Debugging-Tools oder Fehlermeldungen zu identifizieren. Sie hat keine semantische Bedeutung für die Sprache selbst.

Die `name` Eigenschaft ist schreibgeschützt und kann nicht mit dem Zuweisungsoperator geändert werden:

```js
function someFunction() {}

someFunction.name = "otherFunction";
console.log(someFunction.name); // someFunction
```

Um sie zu ändern, verwenden Sie {{jsxref("Object.defineProperty()")}}.

Die `name` Eigenschaft wird typischerweise davon abgeleitet, wie die Funktion definiert ist. In den folgenden Abschnitten werden wir die verschiedenen Möglichkeiten beschreiben, wie sie abgeleitet werden kann.

### Funktionsdeklaration

Die `name` Eigenschaft gibt den Namen einer Funktionsdeklaration zurück.

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### Default-exportierte Funktionsdeklaration

Eine [`export default`](/de/docs/Web/JavaScript/Reference/Statements/export) Deklaration exportiert die Funktion als Deklaration anstelle eines Ausdrucks. Ist die Deklaration anonym, lautet der Name `"default"`.

```js
// -- someModule.js --
export default function () {}

// -- main.js --
import someModule from "./someModule.js";

someModule.name; // "default"
```

### Funktionskonstruktor

Funktionen, die mit dem [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) Konstruktor erstellt wurden, haben den Namen "anonymous".

```js
new Function().name; // "anonymous"
```

### Funktionsausdruck

Wenn der Funktionsausdruck benannt ist, wird dieser Name als `name` Eigenschaft verwendet.

```js
const someFunction = function someFunctionName() {};
someFunction.name; // "someFunctionName"
```

Anonyme Funktionsausdrücke, die mit dem Schlüsselwort `function` oder Pfeilfunktionen erstellt werden, hätten `""` (einen leeren String) als ihren Namen.

```js
(function () {}).name; // ""
(() => {}).name; // ""
```

Solche Fälle sind jedoch selten — normalerweise ist ein Funktionsausdruck mit einem Bezeichner verbunden, um woanders darauf zu verweisen (wie etwa in einer Variablendeklaration). In solchen Fällen kann der Name abgeleitet werden, wie die folgenden paar Unterabschnitte zeigen.

Ein praktischer Fall, in dem der Name nicht abgeleitet werden kann, ist eine Funktion, die von einer anderen Funktion zurückgegeben wird:

```js
function getFoo() {
  return () => {};
}
getFoo().name; // ""
```

### Variablendeklaration und Methode

Variablen und Methoden können den Namen einer anonymen Funktion aus ihrer syntaktischen Position ableiten.

```js
const f = function () {};
const object = {
  someMethod: function () {},
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

Dasselbe gilt für die Zuweisung:

```js
let f;
f = () => {};
f.name; // "f"
```

### Initialisierer und Standardwert

Funktionen in Initialisierern (Standardwerten) von [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value), [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields), etc., werden den Namen des gebundenen Bezeichners als ihren `name` übernehmen.

```js
const [f = () => {}] = [];
f.name; // "f"

const { someMethod: m = () => {} } = {};
m.name; // "m"

function foo(f = () => {}) {
  console.log(f.name);
}
foo(); // "f"

class Foo {
  static someMethod = () => {};
}
Foo.someMethod.name; // someMethod
```

### Kurzschreibweise Methode

```js
const o = {
  foo() {},
};
o.foo.name; // "foo";
```

### Gebundene Funktion

{{jsxref("Function.prototype.bind()")}} erzeugt eine Funktion, deren Name "bound " plus der Funktionsname ist.

```js
function foo() {}
foo.bind({}).name; // "bound foo"
```

### Getter und Setter

Bei Verwendung von [`get`](/de/docs/Web/JavaScript/Reference/Functions/get) und [`set`](/de/docs/Web/JavaScript/Reference/Functions/set) Accessor-Eigenschaften erscheint "get" oder "set" im Funktionsnamen.

```js
const o = {
  get foo() {},
  set foo(x) {},
};

const descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```

### Klasse

Der Name einer Klasse folgt demselben Algorithmus wie Funktionsdeklarationen und -ausdrücke.

```js
class Foo {}
Foo.name; // "Foo"
```

> [!WARNING]
> JavaScript setzt die `name` Eigenschaft einer Funktion nur, wenn eine Funktion keine eigene Eigenschaft namens `name` hat. Klassen' [statische Mitglieder](/de/docs/Web/JavaScript/Reference/Classes/static) werden jedoch als eigene Eigenschaften der Klassenkonstruktorfunktion festgelegt und verhindern somit, dass das eingebaute `name` angewendet wird. Siehe [ein Beispiel](#den_konstruktorname_eines_objekts_ermitteln) unten.

### Symbol als Funktionsname

Wenn ein {{jsxref("Symbol")}} als Funktionsname verwendet wird und das Symbol über eine Beschreibung verfügt, ist der Methodenname die Beschreibung in eckigen Klammern.

```js
const sym1 = Symbol("foo");
const sym2 = Symbol();

const o = {
  [sym1]() {},
  [sym2]() {},
};

o[sym1].name; // "[foo]"
o[sym2].name; // "[]"
```

### Private Eigenschaft

Private Felder und private Methoden haben das Rautezeichen (`#`) als Teil ihrer Namen.

```js
class Foo {
  #field = () => {};
  #method() {}
  getNames() {
    console.log(this.#field.name);
    console.log(this.#method.name);
  }
}

new Foo().getNames();
// "#field"
// "#method"
```

## Beispiele

### Den Konstruktorname eines Objekts ermitteln

Sie können `obj.constructor.name` verwenden, um die "Klasse" eines Objekts zu überprüfen.

```js
function Foo() {} // Or: class Foo {}

const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // "Foo"
```

Da statische Mitglieder jedoch zu eigenen Eigenschaften der Klasse werden, können wir den Klassennamen für praktisch jede Klasse mit einer statischen Methodeneigenschaft `name()` nicht ermitteln:

```js
class Foo {
  constructor() {}
  static name() {}
}
```

Mit einer `static name()` Methode ist `Foo.name` nicht länger der tatsächliche Klassenname, sondern eine Referenz auf das `name()` Funktionsobjekt. Der Versuch, die Klasse von `fooInstance` über `fooInstance.constructor.name` zu ermitteln, gibt uns nicht den Klassennamen, sondern eine Referenz auf die statische Klassenmethode. Beispiel:

```js
const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // ƒ name() {}
```

Aufgrund der Existenz von statischen Feldern könnte `name` auch keine Funktion sein.

```js
class Foo {
  static name = 123;
}
console.log(new Foo().constructor.name); // 123
```

Hat eine Klasse eine statische Eigenschaft namens `name`, wird sie auch _beschreibbar_. Die eingebaute Definition ist in Abwesenheit einer benutzerdefinierten statischen Definition _schreibgeschützt_:

```js
Foo.name = "Hello";
console.log(Foo.name); // "Hello" if class Foo has a static "name" property, but "Foo" if not.
```

Daher können Sie sich nicht darauf verlassen, dass die eingebaute `name` Eigenschaft immer den Namen einer Klasse enthält.

### JavaScript-Komprimierer und Minifier

> [!WARNING]
> Seien Sie vorsichtig beim Einsatz der `name` Eigenschaft mit Quellcode-Transformationen, wie sie von JavaScript-Komprimierern (Minifiern) oder Obfuskatoren durchgeführt werden. Diese Werkzeuge werden oft als Teil einer JavaScript-Build-Pipeline verwendet, um die Größe eines Programms vor der Bereitstellung in der Produktion zu reduzieren. Solche Transformationen ändern oft den Namen einer Funktion zur Build-Zeit.

Quellcode wie:

```js
function Foo() {}
const foo = new Foo();

if (foo.constructor.name === "Foo") {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}
```

kann komprimiert werden zu:

```js
function a() {}
const b = new a();
if (b.constructor.name === "Foo") {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}
```

In der unkomprimierten Version läuft das Programm in den wahrheitsgemäßen Zweig und protokolliert "'foo' ist eine Instanz von 'Foo'" — während es in der komprimierten Version anders funktioniert und in den anderen Zweig geht. Wenn Sie sich auf die `name` Eigenschaft verlassen, wie im obigen Beispiel, stellen Sie sicher, dass Ihre Build-Pipeline die Funktionsnamen nicht ändert, oder gehen Sie nicht davon aus, dass eine Funktion einen bestimmten Namen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Function: name` in `core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- [es-shims Polyfill von `Function.prototype.name`](https://www.npmjs.com/package/function.prototype.name)
- {{jsxref("Function")}}
