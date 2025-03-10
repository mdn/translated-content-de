---
title: "Funktion: name"
slug: Web/JavaScript/Reference/Global_Objects/Function/name
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{JSRef}}

Die **`name`** Daten-Eigenschaft einer {{jsxref("Function")}} Instanz gibt den Funktionsnamen an, wie er bei der Erstellung spezifiziert wurde. Alternativ kann der Wert entweder `anonymous` oder `''` (ein leerer String) sein für anonym erstellte Funktionen.

{{InteractiveExample("JavaScript Demo: Function.name")}}

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
> In nicht-standardisierten Implementierungen vor ES2015 war das Attribut `configurable` ebenfalls `false`.

## Beschreibung

Die `name` Eigenschaft der Funktion kann verwendet werden, um die Funktion in Debugging-Werkzeugen oder Fehlermeldungen zu identifizieren. Sie hat keine semantische Bedeutung für die Sprache selbst.

Die `name` Eigenschaft ist schreibgeschützt und kann nicht durch den Zuweisungsoperator geändert werden:

```js
function someFunction() {}

someFunction.name = "otherFunction";
console.log(someFunction.name); // someFunction
```

Um sie zu ändern, verwenden Sie {{jsxref("Object.defineProperty()")}}.

Die `name` Eigenschaft wird typischerweise von der Art und Weise abgeleitet, wie die Funktion definiert ist. In den folgenden Abschnitten werden wir die verschiedenen Möglichkeiten beschreiben, wie sie abgeleitet werden kann.

### Funktionsdeklaration

Die `name` Eigenschaft gibt den Namen einer Funktionsdeklaration zurück.

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### Funktionsdeklaration mit Standardexport

Eine [`export default`](/de/docs/Web/JavaScript/Reference/Statements/export) Deklaration exportiert die Funktion als Deklaration anstelle eines Ausdrucks. Wenn die Deklaration anonym ist, ist der Name `"default"`.

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

Anonyme Funktionsausdrücke, die mit dem Schlüsselwort `function` oder mit Pfeilfunktionen erstellt wurden, haben `""` (einen leeren String) als ihren Namen.

```js
(function () {}).name; // ""
(() => {}).name; // ""
```

Solche Fälle sind jedoch selten — normalerweise, um auf den Ausdruck anderswo zu verweisen, wird der Funktionsausdruck einem Bezeichner zugewiesen, wenn er erstellt wird (z. B. in einer Variablendeklaration). In solchen Fällen kann der Name abgeleitet werden, wie die folgenden Unterabschnitte zeigen.

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

Gleiches gilt für die Zuweisung:

```js
let f;
f = () => {};
f.name; // "f"
```

### Initialisierer und Standardwert

Funktionen in Initialisierern (Standardwerten) von [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value), [Standardparametern](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) usw. erben den Namen des gebundenen Bezeichners als ihren `name`.

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

### Kurzform-Methode

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

Bei der Verwendung von [`get`](/de/docs/Web/JavaScript/Reference/Functions/get) und [`set`](/de/docs/Web/JavaScript/Reference/Functions/set) Accessor-Eigenschaften erscheint "get" oder "set" im Funktionsnamen.

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

Der Name einer Klasse folgt dem gleichen Algorithmus wie Funktionsdeklarationen und -ausdrücke.

```js
class Foo {}
Foo.name; // "Foo"
```

> [!WARNING]
> JavaScript wird die `name` Eigenschaft einer Funktion nur setzen, wenn eine Funktion keine eigene Eigenschaft namens `name` hat. Klassen jedoch werden mit [statischen Mitgliedern](/de/docs/Web/JavaScript/Reference/Classes/static) als eigene Eigenschaften der Klassenkonstruktorfunktion gesetzt, und verhindern somit die Anwendung des eingebauten `name`. Siehe [ein Beispiel](#den_konstruktornamen_eines_objekts_ermitteln) unten.

### Symbol als Funktionsname

Wenn ein {{jsxref("Symbol")}} als Funktionsname verwendet wird und das Symbol eine Beschreibung hat, ist der Methodenname die Beschreibung in eckigen Klammern.

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

Private Felder und private Methoden haben das Hash-Zeichen (`#`) als Teil ihrer Namen.

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

### Den Konstruktornamen eines Objekts ermitteln

Sie können `obj.constructor.name` verwenden, um die "Klasse" eines Objekts zu überprüfen.

```js
function Foo() {} // Or: class Foo {}

const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // "Foo"
```

Da jedoch statische Mitglieder eigene Eigenschaften der Klasse werden, können wir den Klassennamen für praktisch jede Klasse mit einer statischen Methodeneigenschaft `name()` nicht erhalten:

```js
class Foo {
  constructor() {}
  static name() {}
}
```

Mit einer `static name()` Methode hält `Foo.name` nicht mehr den tatsächlichen Klassennamen, sondern eine Referenz auf das `name()` Funktionsobjekt. Der Versuch, die Klasse von `fooInstance` über `fooInstance.constructor.name` zu ermitteln, liefert uns überhaupt nicht den Klassennamen, sondern eine Referenz auf die statische Klassenmethode. Beispiel:

```js
const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // ƒ name() {}
```

Aufgrund der Existenz von statischen Feldern muss `name` auch keine Funktion sein.

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

### JavaScript Komprimierer und Minifizierer

> [!WARNING]
> Seien Sie vorsichtig bei der Verwendung der `name` Eigenschaft mit Quellcode-Transformationen, wie sie von JavaScript Komprimierern (Minifizierern) oder Verschleiern durchgeführt werden. Diese Werkzeuge werden oft als Teil einer JavaScript Build-Pipeline eingesetzt, um die Größe eines Programms vor der Bereitstellung in der Produktion zu reduzieren. Solche Transformationen ändern häufig den Namen einer Funktion zur Build-Zeit.

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

In der unkomprimierten Version läuft das Programm in den wahrheitswertigen Zweig und protokolliert "'foo' is an instance of 'Foo'" — während es sich in der komprimierten Version anders verhält und in den anderen Zweig läuft. Wenn Sie sich auf die `name` Eigenschaft verlassen, wie im obigen Beispiel, stellen Sie sicher, dass Ihre Build-Pipeline keine Funktionsnamen ändert, oder gehen Sie nicht davon aus, dass eine Funktion einen bestimmten Namen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Function: name` in `core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- [es-shims Polyfill von `Function.prototype.name`](https://www.npmjs.com/package/function.prototype.name)
- {{jsxref("Function")}}
