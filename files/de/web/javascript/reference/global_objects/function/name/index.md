---
title: "Funktion: name"
slug: Web/JavaScript/Reference/Global_Objects/Function/name
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Daten-Eigenschaft **`name`** einer {{jsxref("Function")}}-Instanz gibt den Namen der Funktion an, wie sie bei der Erstellung festgelegt wurde, oder sie kann entweder `anonymous` oder `''` (ein leerer String) sein, wenn die Funktion anonym erstellt wurde.

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
> In nicht-standardmäßigen Implementierungen vor ES2015 war das `configurable`-Attribut ebenfalls `false`.

## Beschreibung

Die `name`-Eigenschaft einer Funktion kann verwendet werden, um die Funktion in Debugging-Tools oder Fehlermeldungen zu identifizieren. Sie hat selbst keine semantische Bedeutung für die Sprache.

Die `name`-Eigenschaft ist schreibgeschützt und kann nicht durch den Zuweisungsoperator geändert werden:

```js
function someFunction() {}

someFunction.name = "otherFunction";
console.log(someFunction.name); // someFunction
```

Um sie zu ändern, verwenden Sie {{jsxref("Object.defineProperty()")}}.

Die `name`-Eigenschaft wird normalerweise aus der Art, wie die Funktion definiert wurde, abgeleitet. In den folgenden Abschnitten beschreiben wir die verschiedenen Möglichkeiten, wie sie abgeleitet werden kann.

### Funktionsdeklaration

Die `name`-Eigenschaft gibt den Namen einer Funktionsdeklaration zurück.

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### Standard-exportierte Funktionsdeklaration

Eine [`export default`](/de/docs/Web/JavaScript/Reference/Statements/export)-Deklaration exportiert die Funktion als Deklaration anstelle eines Ausdrucks. Wenn die Deklaration anonym ist, lautet der Name `"default"`.

```js
// -- someModule.js --
export default function () {}

// -- main.js --
import someModule from "./someModule.js";

someModule.name; // "default"
```

### Funktionskonstruktor

Funktionen, die mit dem [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Konstruktor erstellt wurden, haben den Namen "anonymous".

```js
new Function().name; // "anonymous"
```

### Funktionsausdruck

Wenn der Funktionsausdruck benannt ist, wird dieser Name als `name`-Eigenschaft verwendet.

```js
const someFunction = function someFunctionName() {};
someFunction.name; // "someFunctionName"
```

Anonyme Funktionsausdrücke, die mit dem Schlüsselwort `function` oder Pfeilfunktionen erstellt wurden, haben `""` (einen leeren String) als Namen.

```js
(function () {}).name; // ""
(() => {}).name; // ""
```

Solche Fälle sind jedoch selten — in der Regel wird der Funktionsausdruck beim Erstellen an einen Bezeichner gebunden (z. B. in einer Variablendeklaration), damit darauf verwiesen werden kann. In solchen Fällen kann der Name abgeleitet werden, wie die folgenden Abschnitte zeigen.

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

Das Gleiche gilt für Zuweisungen:

```js
let f;
f = () => {};
f.name; // "f"
```

### Initialisierer und Standardwert

Funktionen in Initialisierern (Standardwerten) von [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value), [Standardparametern](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) usw. übernehmen den Namen des gebundenen Bezeichners als ihren `name`.

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

### Kurznotation Methode

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

Beim Verwenden von [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)- und [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)-Zugriffsmethoden erscheint "get" oder "set" im Funktionsnamen.

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
> JavaScript setzt die `name`-Eigenschaft einer Funktion nur, wenn eine Funktion keine eigene Eigenschaft mit dem Namen `name` besitzt. Klassen [statische Mitglieder](/de/docs/Web/JavaScript/Reference/Classes/static) werden jedoch als eigene Eigenschaften der Klassenkonstruktorfunktion festgelegt und verhindern so, dass die eingebaute `name`-Eigenschaft angewendet wird. Siehe [ein Beispiel](#den_konstruktor-namen_eines_objekts_angeben) unten.

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

Private Felder und private Methoden enthalten die Raute (`#`) als Teil ihres Namens.

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

### Den Konstruktor-Namen eines Objekts angeben

Sie können `obj.constructor.name` verwenden, um die "Klasse" eines Objekts zu überprüfen.

```js
function Foo() {} // Or: class Foo {}

const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // "Foo"
```

Da statische Mitglieder jedoch zu eigenen Eigenschaften der Klasse werden, können wir den Klassennamen bei einer Klasse mit einer statischen `name()`-Methode praktisch nicht mehr abrufen:

```js
class Foo {
  constructor() {}
  static name() {}
}
```

Wenn eine Klasse über eine `static name()`-Methode verfügt, enthält `Foo.name` nicht mehr den tatsächlichen Klassennamen, sondern einen Verweis auf das `name()`-Funktionsobjekt. Der Versuch, über `fooInstance.constructor.name` die Klasse der Instanz zu erlangen, gibt stattdessen einen Verweis auf die statische Klassenmethode zurück. Beispiel:

```js
const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // ƒ name() {}
```

Aufgrund der Existenz statischer Felder kann `name` auch keine Funktion mehr sein.

```js
class Foo {
  static name = 123;
}
console.log(new Foo().constructor.name); // 123
```

Falls eine Klasse eine statische Eigenschaft namens `name` hat, wird diese ebenfalls _beschreibbar_. Die eingebaute Definition, die bei Fehlen einer eigenen statischen Definition verwendet wird, ist _schreibgeschützt_:

```js
Foo.name = "Hello";
console.log(Foo.name); // "Hello" if class Foo has a static "name" property, but "Foo" if not.
```

Daher sollten Sie sich nicht darauf verlassen, dass die eingebaute `name`-Eigenschaft immer den Namen der Klasse enthält.

### JavaScript-Komprimierer und -Minifizierer

> [!WARNING]
> Seien Sie vorsichtig bei der Verwendung der `name`-Eigenschaft mit Quellcode-Transformationen, wie sie von JavaScript-Komprimierern (Minifizierern) oder Obfuskatoren durchgeführt werden. Diese Tools werden häufig im Rahmen einer JavaScript Build-Pipeline verwendet, um die Größe eines Programms zu reduzieren, bevor es in Produktion geht. Solche Transformationen ändern häufig den Namen einer Funktion zur Build-Zeit.

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

kann zu folgendem komprimiert werden:

```js
function a() {}
const b = new a();
if (b.constructor.name === "Foo") {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}
```

In der unkomprimierten Version führt das Programm zur "truthy"-Verzweigung und gibt aus, "'foo' is an instance of 'Foo'" — in der komprimierten Version hingegen verhält es sich anders und folgt der else-Verzweigung. Wenn Sie sich auf die `name`-Eigenschaft verlassen, wie im obigen Beispiel dargestellt, stellen Sie sicher, dass Ihre Build-Pipeline keine Funktionenamen ändert, oder gehen Sie nicht davon aus, dass eine Funktion einen bestimmten Namen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Function: name` in `core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function")}}
