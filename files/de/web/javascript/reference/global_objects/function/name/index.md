---
title: "Function: name"
slug: Web/JavaScript/Reference/Global_Objects/Function/name
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`name`** Dateneigenschaft einer {{jsxref("Function")}}-Instanz zeigt den Namen der Funktion an, wie er bei der Erstellung spezifiziert wurde. Bei anonym erstellten Funktionen kann sie entweder `anonymous` oder `''` (ein leerer String) sein.

{{EmbedInteractiveExample("pages/js/function-name.html")}}

## Wert

Ein String.

{{js_property_attributes(0, 0, 1)}}

> [!NOTE]
> In nicht-standardisierten Implementierungen vor ES2015 war das Attribut `configurable` ebenfalls `false`.

## Beschreibung

Die `name`-Eigenschaft der Funktion kann genutzt werden, um die Funktion in Debugging-Werkzeugen oder Fehlermeldungen zu identifizieren. Sie hat keine semantische Bedeutung für die Sprache selbst.

Die `name`-Eigenschaft ist schreibgeschützt und kann nicht mit dem Zuweisungsoperator geändert werden:

```js
function someFunction() {}

someFunction.name = "otherFunction";
console.log(someFunction.name); // someFunction
```

Um sie zu ändern, verwenden Sie {{jsxref("Object.defineProperty()")}}.

Die `name`-Eigenschaft wird typischerweise aus der Art und Weise abgeleitet, wie die Funktion definiert wird. In den folgenden Abschnitten werden wir die verschiedenen Möglichkeiten beschreiben, wie sie abgeleitet werden kann.

### Funktionsdeklaration

Die `name`-Eigenschaft gibt den Namen einer Funktionsdeklaration zurück.

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### Standard-exportierte Funktionsdeklaration

Eine [`export default`](/de/docs/Web/JavaScript/Reference/Statements/export)-Deklaration exportiert die Funktion als Deklaration anstelle eines Ausdrucks. Ist die Deklaration anonym, lautet der Name `"default"`.

```js
// -- someModule.js --
export default function () {}

// -- main.js --
import someModule from "./someModule.js";

someModule.name; // "default"
```

### Funktionskonstruktor

Funktionen, die mit dem [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)-Konstruktor erstellt wurden, tragen den Namen "anonymous".

```js
new Function().name; // "anonymous"
```

### Funktionsausdruck

Wenn der Funktionsausdruck benannt ist, wird dieser Name als `name`-Eigenschaft verwendet.

```js
const someFunction = function someFunctionName() {};
someFunction.name; // "someFunctionName"
```

Anonyme Funktionsausdrücke, die mit dem Schlüsselwort `function` oder Pfeilfunktionen erstellt werden, haben `""` (einen leeren String) als Name.

```js
(function () {}).name; // ""
(() => {}).name; // ""
```

Solche Fälle sind jedoch selten - in der Regel wird zur Referenzierung des Ausdrucks an anderer Stelle der Funktionsausdruck beim Erstellen an einen Bezeichner angehängt (z.B. in einer Variablendeklaration). In solchen Fällen kann der Name abgeleitet werden, wie die folgenden Unterabschnitte zeigen.

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

### Initialisierung und Standardwert

Funktionen in Initialisierern (Standardwerten) von [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value), [Standardparametern](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) usw. erben den Namen des gebundenen Bezeichners als ihren `name`.

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

### Kurzschreibweise der Methode

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

Bei der Verwendung von [`get`](/de/docs/Web/JavaScript/Reference/Functions/get) und [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)-Zugriffs Eigenschaften erscheinen "get" oder "set" im Funktionsnamen.

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
> JavaScript setzt die `name`-Eigenschaft einer Funktion nur dann, wenn eine Funktion keine eigene Eigenschaft namens `name` hat. Statische [Mitglieder von Klassen](/de/docs/Web/JavaScript/Reference/Classes/static) werden jedoch als eigene Eigenschaften der Klassenkonstruktorfunktion festgelegt und verhindern somit, dass das eingebaute `name` angewendet wird. Siehe [ein Beispiel](#den_konstruktor-namen_eines_objekts_ermitteln) unten.

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

### Den Konstruktor-Namen eines Objekts ermitteln

Sie können `obj.constructor.name` verwenden, um die "Klasse" eines Objekts zu überprüfen.

```js
function Foo() {} // Oder: class Foo {}

const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // "Foo"
```

Da statische Mitglieder jedoch zu eigenen Eigenschaften der Klasse werden, können wir den Klassennamen praktisch für jede Klasse mit einer statischen Methodeneigenschaft `name()` nicht erhalten:

```js
class Foo {
  constructor() {}
  static name() {}
}
```

Mit einer `static name()`-Methode hält `Foo.name` nicht mehr den tatsächlichen Klassennamen, sondern einen Verweis auf das `name()`-Funktionsobjekt. Der Versuch, die Klasse von `fooInstance` über `fooInstance.constructor.name` zu erhalten, gibt uns überhaupt nicht den Klassennamen, sondern einen Verweis auf die statische Klassenmethode. Beispiel:

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

Wenn eine Klasse eine statische Eigenschaft namens `name` hat, wird sie ebenfalls _beschreibbar_. Die eingebaute Definition in Abwesenheit einer benutzerdefinierten statischen Definition ist _schreibgeschützt_:

```js
Foo.name = "Hello";
console.log(Foo.name); // "Hello", falls die Klasse Foo eine statische "name"-Eigenschaft hat, aber "Foo" falls nicht.
```

Daher sollten Sie sich nicht darauf verlassen, dass die eingebaute `name`-Eigenschaft immer den Namen einer Klasse enthält.

### JavaScript-Komprimierer und Minifizierer

> [!WARNING]
> Seien Sie vorsichtig bei der Verwendung der `name`-Eigenschaft mit Quellcode-Transformationen, wie sie von JavaScript-Komprimierern (Minifizierern) oder Obfuskatoren durchgeführt werden. Diese Werkzeuge werden oft als Teil einer JavaScript-Build-Pipeline verwendet, um die Größe eines Programms vor dem Deployment zu reduzieren. Solche Transformationen ändern oft den Namen einer Funktion zur Build-Zeit.

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

könnte zu:

```js
function a() {}
const b = new a();
if (b.constructor.name === "Foo") {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}
```

komprimiert werden. In der nicht komprimierten Version läuft das Programm in den echten Zweig und gibt "'foo' is an instance of 'Foo'" aus — in der komprimierten Version hingegen verhält es sich anders und läuft in den else-Zweig. Wenn Sie sich auf die `name`-Eigenschaft verlassen, wie im obigen Beispiel, stellen Sie sicher, dass Ihre Build-Pipeline keine Funktionsnamen ändert oder gehen Sie nicht davon aus, dass eine Funktion einen bestimmten Namen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Function: name` in `core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function")}}
