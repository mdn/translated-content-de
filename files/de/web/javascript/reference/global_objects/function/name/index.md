---
title: "Funktion: name"
short-title: name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{JSRef}}

Die **`name`** Daten-Eigenschaft einer {{jsxref("Function")}} Instanz gibt den beim Erstellen festgelegten Namen der Funktion an. Sie kann auch `anonymous` oder `''` (ein leerer String) sein, wenn die Funktion anonym erstellt wurde.

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
> In nicht standardisierten Vor-ES2015-Implementierungen war das `configurable`-Attribut ebenfalls `false`.

## Beschreibung

Die `name` Eigenschaft der Funktion kann verwendet werden, um die Funktion in Debugging-Werkzeugen oder Fehlermeldungen zu identifizieren. Sie hat keine semantische Bedeutung für die Sprache selbst.

Die `name` Eigenschaft ist schreibgeschützt und kann nicht durch den Zuweisungsoperator geändert werden:

```js
function someFunction() {}

someFunction.name = "otherFunction";
console.log(someFunction.name); // someFunction
```

Um sie zu ändern, verwenden Sie {{jsxref("Object.defineProperty()")}}.

Die `name` Eigenschaft wird typischerweise aus der Art und Weise, wie die Funktion definiert ist, abgeleitet. In den folgenden Abschnitten werden wir die verschiedenen Arten beschreiben, wie sie abgeleitet werden kann.

### Funktionsdeklaration

Die `name` Eigenschaft gibt den Namen einer Funktionsdeklaration zurück.

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### Funktionsdeklaration mit Standard-Export

Eine [`export default`](/de/docs/Web/JavaScript/Reference/Statements/export) Deklaration exportiert die Funktion als Deklaration statt als Ausdruck. Wenn die Deklaration anonym ist, ist der Name `"default"`.

```js
// -- someModule.js --
export default function () {}

// -- main.js --
import someModule from "./someModule.js";

someModule.name; // "default"
```

### Funktionskonstruktor

Funktionen, die mit dem [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) Konstruktor erstellt werden, haben den Namen "anonymous".

```js
new Function().name; // "anonymous"
```

### Funktionsexpression

Wenn die Funktionsexpression benannt ist, wird dieser Name als `name` Eigenschaft verwendet.

```js
const someFunction = function someFunctionName() {};
someFunction.name; // "someFunctionName"
```

Anonyme Funktionsexpressionen, die entweder mit dem `function` Schlüsselwort oder der Syntax der Pfeilfunktion erstellt werden, haben standardmäßig `""` (einen leeren String) als ihren Namen.

```js
(function () {}).name; // ""
(() => {}).name; // ""
```

Solche Fälle sind jedoch selten — in der Regel, um die Funktion anderswo aufzurufen, wird die Funktionsexpression mit einem Bezeichner assoziiert. Der Name einer anonymen Funktionsexpression kann innerhalb bestimmter syntaktischer Kontexte abgeleitet werden, einschließlich: [Variable Deklaration, Methode](#variablendeklaration_und_methode), [Initialisierer und Standardwert](#initialisierer_und_standardwert).

Ein praktisches Beispiel, bei dem der Name nicht abgeleitet werden kann, ist eine Funktion, die von einer anderen Funktion zurückgegeben wird:

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

Das gleiche gilt für Zuweisungen:

```js
let f;
f = () => {};
f.name; // "f"
```

### Initialisierer und Standardwert

Funktionen in Initialisierern (Standardwerten) von [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value), [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) usw. erben den Namen des zugeordneten Bezeichners als ihren `name`.

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

### Kurzschriftmethode

```js
const o = {
  foo() {},
};
o.foo.name; // "foo";
```

### Gebundene Funktion

{{jsxref("Function.prototype.bind()")}} erzeugt eine Funktion, deren Name "bound" plus dem Funktionsnamen ist.

```js
function foo() {}
foo.bind({}).name; // "bound foo"
```

### Getter und Setter

Bei der Verwendung von [`get`](/de/docs/Web/JavaScript/Reference/Functions/get) und [`set`](/de/docs/Web/JavaScript/Reference/Functions/set) Accessor-Eigenschaften erscheinen "get" oder "set" im Funktionsnamen.

```js
const o = {
  get foo() {
    return 1;
  },
  set foo(x) {},
};

const descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```

### Klasse

Der Name einer Klasse folgt dem gleichen Algorithmus wie Funktionsdeklarationen und -ausdrücke.

```js
class Foo {}
Foo.name; // "Foo"
```

> [!WARNING]
> JavaScript setzt die `name` Eigenschaft einer Funktion nur, wenn eine Funktion keine eigene Eigenschaft namens `name` hat. Jedoch werden [statische Mitglieder](/de/docs/Web/JavaScript/Reference/Classes/static) von Klassen als eigene Eigenschaften der Klassenkonstruktorfunktion gesetzt und verhindern somit, dass das eingebaute `name` angewendet wird. Siehe [ein Beispiel](#den_konstruktor-namen_eines_objekts_ermitteln) unten.

### Symbol als Funktionsname

Wenn ein {{jsxref("Symbol")}} als Funktionsname verwendet wird und das Symbol eine Beschreibung hat, ist der Name der Methode die Beschreibung in eckigen Klammern.

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

### Private Felder und Methoden

Private Felder und private Methoden haben das Hash-Zeichen (`#`) als Teil ihres Namens.

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

### Den Konstruktor-Namen eines Objekts ermitteln

Sie können `obj.constructor.name` verwenden, um die "Klasse" eines Objekts zu überprüfen.

```js
function Foo() {} // Or: class Foo {}

const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // "Foo"
```

Da jedoch statische Mitglieder zu eigenen Eigenschaften der Klasse werden, können wir den Klassennamen für praktisch jede Klasse mit einer statischen Methoden-Eigenschaft `name()` nicht erhalten:

```js
class Foo {
  constructor() {}
  static name() {}
}
```

Mit einer `static name()` Methode hält `Foo.name` nicht mehr den tatsächlichen Klassennamen, sondern eine Referenz auf das `name()` Funktionsobjekt. Der Versuch, die Klasse von `fooInstance` über `fooInstance.constructor.name` zu erhalten, gibt uns überhaupt nicht den Klassennamen, sondern eine Referenz auf die statische Klassenmethode. Beispiel:

```js
const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // ƒ name() {}
```

Aufgrund der Existenz von statischen Feldern kann `name` auch keine Funktion sein.

```js
class Foo {
  static name = 123;
}
console.log(new Foo().constructor.name); // 123
```

Wenn eine Klasse eine statische Eigenschaft namens `name` hat, wird sie auch _beschreibbar_. Die eingebaute Definition in Abwesenheit einer benutzerdefinierten statischen Definition ist _schreibgeschützt_:

```js
Foo.name = "Hello";
console.log(Foo.name); // "Hello" if class Foo has a static "name" property, but "Foo" if not.
```

Daher können Sie sich nicht darauf verlassen, dass die eingebaute `name` Eigenschaft immer den Namen einer Klasse hält.

### JavaScript-Kompressoren und -Minifizierer

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie die `name` Eigenschaft mit Quellcode-Transformationen verwenden, wie sie von JavaScript-Kompressoren (Minifizierern) oder Obfuskatoren durchgeführt werden. Diese Werkzeuge werden oft als Teil einer JavaScript-Bilderstellungspipeline verwendet, um die Größe eines Programms zu reduzieren, bevor es in die Produktion überführt wird. Solche Transformationen ändern oft den Namen einer Funktion zur Erstellungszeit.

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

In der unkomprimierten Version geht das Programm in den truthy-Branch und protokolliert "'foo' is an instance of 'Foo'" – während es sich in der komprimierten Version anders verhält und in den else-Branch gelangt. Wenn Sie sich auf die `name` Eigenschaft verlassen, wie im obigen Beispiel, stellen Sie sicher, dass Ihre Erstellungs-Pipeline keine Funktionsnamen ändert, oder gehen Sie nicht davon aus, dass eine Funktion einen bestimmten Namen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Weitere Informationen

- [Polyfill für `Function: name` in `core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- [es-shims Polyfill von `Function.prototype.name`](https://www.npmjs.com/package/function.prototype.name)
- {{jsxref("Function")}}
