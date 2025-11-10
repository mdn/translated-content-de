---
title: "Funktion: name"
short-title: name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`name`** Dateneigenschaft einer {{jsxref("Function")}} Instanz gibt den Namen der Funktion an, wie er beim Erstellen angegeben wurde, oder sie kann entweder `anonymous` oder `''` (ein leerer String) sein, wenn Funktionen anonym erstellt wurden.

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
> In nicht-standardmäßigen, Pre-ES2015 Implementierungen war das `configurable` Attribut ebenfalls `false`.

## Beschreibung

Die `name`-Eigenschaft der Funktion kann verwendet werden, um die Funktion in Debugging-Werkzeugen oder Fehlermeldungen zu identifizieren. Sie hat keine semantische Bedeutung für die Sprache selbst.

Die `name`-Eigenschaft ist schreibgeschützt und kann nicht durch den Zuweisungsoperator geändert werden:

```js
function someFunction() {}

someFunction.name = "otherFunction";
console.log(someFunction.name); // someFunction
```

Um sie zu ändern, verwenden Sie {{jsxref("Object.defineProperty()")}}.

Die `name`-Eigenschaft wird typischerweise basierend darauf abgeleitet, wie die Funktion definiert ist. In den folgenden Abschnitten beschreiben wir die verschiedenen Möglichkeiten, wie sie abgeleitet werden kann.

### Funktionsdeklaration

Die `name`-Eigenschaft gibt den Namen einer Funktionsdeklaration zurück.

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### Standard-exporierte Funktionsdeklaration

Eine [`export default`](/de/docs/Web/JavaScript/Reference/Statements/export) Deklaration exportiert die Funktion als Deklaration anstelle eines Ausdrucks. Wenn die Deklaration anonym ist, ist der Name `"default"`.

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

### Funktionsausdruck

Wenn der Funktionsausdruck benannt ist, wird dieser Name als `name`-Eigenschaft verwendet.

```js
const someFunction = function someFunctionName() {};
someFunction.name; // "someFunctionName"
```

Anonyme Funktionsausdrücke, die entweder mit dem `function`-Schlüsselwort oder der Pfeilfunktionssyntax erstellt wurden, haben standardmäßig `""` (einen leeren String) als Namen.

```js
(function () {}).name; // ""
(() => {}).name; // ""
```

Solche Fälle sind jedoch selten — normalerweise wird, um die Funktion anderswo aufzurufen, der Funktionsausdruck mit einem Bezeichner verknüpft. Der Name eines anonymen Funktionsausdrucks kann innerhalb bestimmter syntaktischer Kontexte abgeleitet werden, einschließlich: [Variablendeklaration, Methode](#variablendeklaration_und_methode), [Initialisierung und Standardwert](#initialisierung_und_standardwert).

Ein praktischer Fall, in dem der Name nicht abgeleitet werden kann, ist eine Funktion, die aus einer anderen Funktion zurückgegeben wird:

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

### Initialisierung und Standardwert

Funktionen in Initialisierungen (Standardwerten) von [Destrukturierungen](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value), [Standardparametern](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) usw. erben den Namen des gebundenen Bezeichners als ihren `name`.

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

### Verkuerzte Methode

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

Wenn Zugriffseigenschaften [`get`](/de/docs/Web/JavaScript/Reference/Functions/get) und [`set`](/de/docs/Web/JavaScript/Reference/Functions/set) verwendet werden, erscheint "get" oder "set" im Funktionsnamen.

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
> JavaScript setzt die `name`-Eigenschaft einer Funktion nur, wenn sie keine eigene Eigenschaft namens `name` hat. Klassen' [statische Mitglieder](/de/docs/Web/JavaScript/Reference/Classes/static) werden jedoch als eigene Eigenschaften der Klassenkonstruktorfunktion festgelegt und verhindern somit, dass der eingebaute `name` angewendet wird. Siehe [ein Beispiel](#den_namen_des_konstruktors_eines_objekts_ermitteln) unten.

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

### Private Felder und Methoden

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

### Den Namen des Konstruktors eines Objekts ermitteln

Sie können `obj.constructor.name` verwenden, um die "Klasse" eines Objekts zu überprüfen.

```js
function Foo() {} // Or: class Foo {}

const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // "Foo"
```

Da jedoch statische Mitglieder zu eigenen Eigenschaften der Klasse werden, können wir den Klassenname für praktisch jede Klasse mit einer statischen Methodeneigenschaft `name()` nicht erhalten:

```js
class Foo {
  constructor() {}
  static name() {}
}
```

Mit einer `static name()` Methode hält `Foo.name` nicht mehr den tatsächlichen Klassennamen, sondern eine Referenz auf das `name()` Funktionsobjekt. Der Versuch, die Klasse von `fooInstance` über `fooInstance.constructor.name` zu erhalten, gibt uns nicht den Klassennamen, sondern eine Referenz auf die statische Klassenmethode. Beispiel:

```js
const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // ƒ name() {}
```

Aufgrund der Existenz statischer Felder könnte `name` ebenfalls keine Funktion sein.

```js
class Foo {
  static name = 123;
}
console.log(new Foo().constructor.name); // 123
```

Wenn eine Klasse eine statische Eigenschaft namens `name` hat, wird sie auch _beschreibbar_. Die eingebaute Definition in der Abwesenheit einer benutzerdefinierten statischen Definition ist _schreibgeschützt_:

```js
Foo.name = "Hello";
console.log(Foo.name); // "Hello" if class Foo has a static "name" property, but "Foo" if not.
```

Daher können Sie sich nicht darauf verlassen, dass die eingebaute `name`-Eigenschaft immer den Namen einer Klasse enthält.

### JavaScript-Komprimierer und -Minifier

> [!WARNING]
> Seien Sie vorsichtig bei der Verwendung der `name`-Eigenschaft mit Quellcode-Transformationen, wie sie von JavaScript-Komprimierern (Minifizierern) oder Obfuskatoren durchgeführt werden. Diese Werkzeuge werden oft im Rahmen einer JavaScript-Build-Pipeline verwendet, um die Größe eines Programms vor der Bereitstellung in der Produktion zu reduzieren. Solche Transformationen ändern oft den Namen einer Funktion zur Build-Zeit.

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

In der unkomprimierten Version läuft das Programm in den truthy-Zweig und protokolliert "'foo' is an instance of 'Foo'" — während es in der komprimierten Version anders reagiert und in den else-Zweig läuft. Wenn Sie sich auf die `name`-Eigenschaft verlassen, wie im obigen Beispiel, stellen Sie sicher, dass Ihre Build-Pipeline die Funktionsnamen nicht ändert, oder verlassen Sie sich nicht darauf, dass eine Funktion einen bestimmten Namen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Function: name` in `core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- [es-shims polyfill von `Function.prototype.name`](https://www.npmjs.com/package/function.prototype.name)
- {{jsxref("Function")}}
