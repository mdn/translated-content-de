---
title: "Function: name"
short-title: name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Dateneigenschaft **`name`** einer {{jsxref("Function")}}-Instanz gibt den Namen der Funktion an, der bei ihrer Erstellung festgelegt wurde. Bei anonym erstellten Funktionen kann ihr Wert auch `anonymous` oder `''` (eine leere Zeichenfolge) sein.

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

Eine Zeichenfolge.

{{js_property_attributes(0, 0, 1)}}

> [!NOTE]
> In nicht standardkonformen Implementierungen vor ES2015 war auch das Attribut `configurable` auf `false` gesetzt.

## Beschreibung

Die Eigenschaft `name` einer Funktion kann verwendet werden, um die Funktion in Debugging-Werkzeugen oder Fehlermeldungen zu identifizieren. Für die Sprache selbst hat sie keine semantische Bedeutung.

Die Eigenschaft `name` ist schreibgeschützt und kann nicht mit dem Zuweisungsoperator geändert werden:

```js
function someFunction() {}

someFunction.name = "otherFunction";
console.log(someFunction.name); // someFunction
```

Verwenden Sie stattdessen {{jsxref("Object.defineProperty()")}}, um sie zu ändern.

Die Eigenschaft `name` wird in der Regel aus der Art abgeleitet, wie die Funktion definiert ist. In den folgenden Abschnitten werden die verschiedenen Möglichkeiten beschrieben, wie dies geschehen kann.

### Funktionsdeklaration

Die Eigenschaft `name` gibt den Namen einer Funktionsdeklaration zurück.

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### Als Standard exportierte Funktionsdeklaration

Eine [`export default`](/de/docs/Web/JavaScript/Reference/Statements/export)-Deklaration exportiert die Funktion als Deklaration statt als Ausdruck. Ist die Deklaration anonym, lautet der Name `"default"`.

```js
// -- someModule.js --
export default function () {}

// -- main.js --
import someModule from "./someModule.js";

someModule.name; // "default"
```

### Function-Konstruktor

Funktionen, die mit dem [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Konstruktor erstellt werden, haben den Namen „anonymous“.

```js
new Function().name; // "anonymous"
```

### Funktionsausdruck

Wenn der Funktionsausdruck einen Namen hat, wird dieser als Wert der Eigenschaft `name` verwendet.

```js
const someFunction = function someFunctionName() {};
someFunction.name; // "someFunctionName"
```

Anonyme Funktionsausdrücke, die mit dem Schlüsselwort `function` oder der Syntax für Pfeilfunktionen erstellt werden, haben standardmäßig `""` (eine leere Zeichenfolge) als Namen.

```js
(function () {}).name; // ""
(() => {}).name; // ""
```

Solche Fälle sind jedoch selten: Um die Funktion an anderer Stelle aufzurufen, wird der Funktionsausdruck üblicherweise einem Bezeichner zugeordnet. Der Name eines anonymen Funktionsausdrucks kann in bestimmten syntaktischen Kontexten abgeleitet werden, darunter [Variablendeklarationen und Methoden](#variablendeklaration_und_methode) sowie [Initialisierer und Standardwerte](#initialisierer_und_standardwert).

Ein praktischer Fall, in dem der Name nicht abgeleitet werden kann, ist eine Funktion, die von einer anderen Funktion zurückgegeben wird:

```js
function getFoo() {
  return () => {};
}
getFoo().name; // ""
```

### Variablendeklaration und Methode

Bei Variablen und Methoden kann der Name einer anonymen Funktion aus ihrer syntaktischen Position abgeleitet werden.

```js
const f = function () {};
const object = {
  someMethod: function () {},
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

Dasselbe gilt für Zuweisungen:

```js
let f;
f = () => {};
f.name; // "f"
```

### Initialisierer und Standardwert

Funktionen in Initialisierern (Standardwerten) bei [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value), [Standardparametern](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) usw. übernehmen den Namen des gebundenen Bezeichners als Wert ihrer Eigenschaft `name`.

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

### Kurzschreibweise für Methoden

```js
const o = {
  foo() {},
};
o.foo.name; // "foo";
```

### Gebundene Funktion

{{jsxref("Function.prototype.bind()")}} erzeugt eine Funktion, deren Name aus „bound “ und dem Funktionsnamen besteht.

```js
function foo() {}
foo.bind({}).name; // "bound foo"
```

### Getter und Setter

Bei Verwendung der Accessor-Eigenschaften [`get`](/de/docs/Web/JavaScript/Reference/Functions/get) und [`set`](/de/docs/Web/JavaScript/Reference/Functions/set) erscheint „get“ beziehungsweise „set“ im Funktionsnamen.

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

Der Name einer Klasse wird nach demselben Verfahren bestimmt wie bei Funktionsdeklarationen und -ausdrücken.

```js
class Foo {}
Foo.name; // "Foo"
```

> [!WARNING]
> JavaScript setzt die Eigenschaft `name` einer Funktion nur dann, wenn die Funktion keine eigene Eigenschaft namens `name` hat. [Statische Mitglieder](/de/docs/Web/JavaScript/Reference/Classes/static) einer Klasse werden jedoch als eigene Eigenschaften der Klassenkonstruktorfunktion angelegt und verhindern dadurch, dass die integrierte Eigenschaft `name` gesetzt wird. Ein [Beispiel](#den_konstruktornamen_eines_objekts_ermitteln) finden Sie weiter unten.

### Symbol als Funktionsname

Wenn ein {{jsxref("Symbol")}} als Funktionsname verwendet wird und das Symbol eine Beschreibung hat, besteht der Name der Methode aus dieser Beschreibung in eckigen Klammern.

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

Bei privaten Feldern und privaten Methoden ist das Rautezeichen (`#`) Teil des Namens.

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

Mit `obj.constructor.name` können Sie die „Klasse“ eines Objekts überprüfen.

```js
function Foo() {} // Or: class Foo {}

const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // "Foo"
```

Da statische Mitglieder jedoch zu eigenen Eigenschaften der Klasse werden, lässt sich bei praktisch keiner Klasse mit einer statischen Methodeneigenschaft `name()` der Klassenname auf diese Weise ermitteln:

```js
class Foo {
  constructor() {}
  static name() {}
}
```

Bei einer Methode `static name()` enthält `Foo.name` nicht mehr den tatsächlichen Klassennamen, sondern eine Referenz auf das Funktionsobjekt `name()`. Wenn Sie versuchen, die Klasse von `fooInstance` über `fooInstance.constructor.name` zu ermitteln, erhalten Sie daher nicht den Klassennamen, sondern eine Referenz auf die statische Klassenmethode. Beispiel:

```js
const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // ƒ name() {}
```

Aufgrund statischer Felder muss `name` nicht einmal eine Funktion sein.

```js
class Foo {
  static name = 123;
}
console.log(new Foo().constructor.name); // 123
```

Wenn eine Klasse eine statische Eigenschaft namens `name` hat, wird diese außerdem _beschreibbar_. Die integrierte Eigenschaft ist ohne eine benutzerdefinierte statische Definition dagegen _schreibgeschützt_:

```js
Foo.name = "Hello";
console.log(Foo.name); // "Hello" if class Foo has a static "name" property, but "Foo" if not.
```

Verlassen Sie sich daher nicht darauf, dass die integrierte Eigenschaft `name` immer den Namen einer Klasse enthält.

### JavaScript-Komprimierungs- und Minifizierungswerkzeuge

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie die Eigenschaft `name` zusammen mit Quellcodetransformationen verwenden, wie sie beispielsweise JavaScript-Komprimierungswerkzeuge (Minifier) oder Obfuskatoren durchführen. Diese Werkzeuge werden häufig im Rahmen einer JavaScript-Build-Pipeline eingesetzt, um ein Programm vor der Bereitstellung in der Produktionsumgebung zu verkleinern. Solche Transformationen ändern oft den Namen einer Funktion während des Builds.

Quellcode wie dieser:

```js
function Foo() {}
const foo = new Foo();

if (foo.constructor.name === "Foo") {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}
```

kann zu Folgendem komprimiert werden:

```js
function a() {}
const b = new a();
if (b.constructor.name === "Foo") {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}
```

In der unkomprimierten Version wird der Zweig für eine truthy-Bedingung ausgeführt und „'foo' is an instance of 'Foo'“ protokolliert. Die komprimierte Version verhält sich dagegen anders und führt den `else`-Zweig aus. Wenn Sie sich wie im obigen Beispiel auf die Eigenschaft `name` verlassen, stellen Sie sicher, dass Ihre Build-Pipeline Funktionsnamen nicht ändert, oder gehen Sie nicht davon aus, dass eine Funktion einen bestimmten Namen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Function: name` in `core-js`](https://core-js.io/docs/features/ecmascript/function)
- [Polyfill von es-shims für `Function.prototype.name`](https://www.npmjs.com/package/function.prototype.name)
- {{jsxref("Function")}}
