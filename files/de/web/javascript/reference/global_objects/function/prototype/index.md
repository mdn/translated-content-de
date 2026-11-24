---
title: "Function: prototype"
short-title: prototype
slug: Web/JavaScript/Reference/Global_Objects/Function/prototype
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

Die Dateneigenschaft **`prototype`** einer {{jsxref("Function")}}-Instanz wird verwendet, wenn die Funktion mit dem Operator [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) als Konstruktor aufgerufen wird. Ihr Wert wird zum Prototyp des neuen Objekts.

> [!NOTE]
> Nicht alle {{jsxref("Function")}}-Objekte haben die Eigenschaft `prototype` – siehe [Beschreibung](#beschreibung).

## Wert

Ein Objekt.

{{js_property_attributes(1, 0, 0)}}

> [!NOTE]
> [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind eine Art von Funktion. Daher gilt der Großteil dieser Beschreibung auch für die Eigenschaft `prototype` von Klassen. Der einzige wesentliche Unterschied besteht darin, dass die Eigenschaft `prototype` einer Klasse nicht beschreibbar ist.

## Beschreibung

Wenn eine Funktion mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen wird, wird die Eigenschaft `prototype` des Konstruktors zum Prototyp des erzeugten Objekts.

```js
function Ctor() {}
const inst = new Ctor();
console.log(Object.getPrototypeOf(inst) === Ctor.prototype); // true
```

Weitere Informationen über das Zusammenspiel zwischen der Eigenschaft `prototype` einer Konstruktorfunktion und dem Prototyp des erzeugten Objekts finden Sie unter [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#constructors).

Dass eine Funktion eine Eigenschaft `prototype` besitzt, reicht nicht aus, damit sie als Konstruktor verwendet werden kann. [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) haben eine Eigenschaft `prototype`, können aber nicht mit `new` aufgerufen werden:

```js
async function* asyncGeneratorFunction() {}
function* generatorFunction() {}
```

Stattdessen wird die Eigenschaft `prototype` von Generatorfunktionen verwendet, wenn diese _ohne_ `new` aufgerufen werden. Die Eigenschaft `prototype` wird zum Prototyp des zurückgegebenen [`Generator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)-Objekts.

Einige Funktionen besitzen zudem eine Eigenschaft `prototype`, lösen aber bei einem Aufruf mit `new` immer einen Fehler aus. Beispielsweise lösen die Funktionen [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) und [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) bei einem Aufruf mit `new` einen Fehler aus: `Symbol.prototype` und `BigInt.prototype` sollen lediglich Methoden für die primitiven Werte bereitstellen; Wrapper-Objekte sollen nicht direkt konstruiert werden.

Die folgenden Funktionen haben keine Eigenschaft `prototype` und können daher nicht als Konstruktoren verwendet werden – selbst dann nicht, wenn ihnen später manuell eine Eigenschaft `prototype` zugewiesen wird:

```js
const method = { foo() {} }.foo;
const arrowFunction = () => {};
async function asyncFunction() {}
```

Die folgenden Funktionen sind gültige Konstruktoren mit einer Eigenschaft `prototype`:

```js
class Class {}
function fn() {}
```

Eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) hat keine Eigenschaft `prototype`, kann aber unter Umständen als Konstruktor verwendet werden. Bei ihrer Konstruktion wird stattdessen die Zielfunktion konstruiert. Wenn die Zielfunktion als Konstruktor verwendet werden kann, gibt sie eine normale Instanz zurück.

```js
const boundFunction = function () {}.bind(null);
```

Die Eigenschaft `prototype` einer Funktion ist standardmäßig ein einfaches Objekt mit einer einzigen Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor). Diese verweist auf die Funktion selbst. Die Eigenschaft `constructor` ist beschreibbar, nicht aufzählbar und konfigurierbar. Wenn die Funktion als Klasse mit [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) erstellt wird, ist der Prototyp des `prototype`-Objekts `ParentClass.prototype` statt `Object.prototype`.

Wenn der Eigenschaft `prototype` einer Funktion ein Wert zugewiesen wird, der kein {{jsxref("Object")}} ist, hat das bei einem Aufruf der Funktion mit `new` zurückgegebene Objekt stattdessen `Object.prototype` als Prototyp. Anders ausgedrückt: `new` ignoriert die Eigenschaft `prototype` und erstellt ein einfaches Objekt.

```js
function Ctor() {}
Ctor.prototype = 3;
console.log(Object.getPrototypeOf(new Ctor()) === Object.prototype); // true
```

Bei zwei JavaScript-Konstruktoren haben die Eigenschaften `prototype` eine etwas komplexere Semantik:

- {{jsxref("Object", "Object.prototype")}} bildet für die meisten Objekte die Wurzel der Prototypkette. Sein Prototyp ist `null`, und sein Prototyp lässt sich nicht neu setzen.
- {{jsxref("Proxy")}} ist die einzige integrierte Klasse ohne eine Eigenschaft `prototype`. `Proxy`-Instanzen haben weder eine gemeinsame Prototypkette noch Eigenschaften, die von der Klasse `Proxy` bereitgestellt werden. Stattdessen definieren sie jeweils ihr eigenes Verhalten.

Aus Gründen der Abwärtskompatibilität haben fünf weitere JavaScript-Konstruktoren Eigenschaften `prototype`, die zugleich Instanzen ihrer jeweiligen Klassen sind. Abgesehen davon, dass `instanceof` für sie `false` zurückgibt (weil `instanceof` die Prototypkette prüft), besitzen sie alle privaten Slots und Instanzeigenschaften tatsächlicher Instanzen.

- {{jsxref("Array", "Array.prototype")}} ist ein `Array`-Objekt, das anfangs leer ist. Sie können es an {{jsxref("Array.isArray()")}} übergeben, seinen Indizes Werte zuweisen, seine Eigenschaft {{jsxref("Array/length", "length")}} auslesen und Methoden wie `Array.prototype.push(1)` aufrufen.
- {{jsxref("Function", "Function.prototype")}} ist ein `Function`-Objekt, das bei einem Aufruf mit beliebigen Argumenten `undefined` zurückgibt. Es hat eine Eigenschaft {{jsxref("Function/length", "length")}} mit dem Wert `0` und eine Eigenschaft {{jsxref("Function/name", "name")}} mit dem Wert `""`. Es kann nicht als Konstruktor verwendet werden und hat keine Eigenschaft `prototype`.
- {{jsxref("Number", "Number.prototype")}} ist ein `Number`-Objekt, das den Wert `0` umschließt.
- {{jsxref("Boolean", "Boolean.prototype")}} ist ein `Boolean`-Objekt, das den Wert `false` umschließt.
- {{jsxref("String", "String.prototype")}} ist ein `String`-Objekt, das den Wert `""` umschließt. Es hat eine Eigenschaft {{jsxref("String/length", "length")}} mit dem Wert `0`.

{{jsxref("RegExp", "RegExp.prototype")}} war früher ein `RegExp`-Objekt. Heute ist es ein einfaches Objekt, das von {{jsxref("RegExp/source", "source")}} und den verschiedenen Flag-Accessors wie {{jsxref("RegExp/global", "global")}} gesondert behandelt wird.

## Beispiele

### Den Prototyp aller Instanzen durch Ändern der Eigenschaft `prototype` ändern

```js
function Ctor() {}
const p1 = new Ctor();
const p2 = new Ctor();
Ctor.prototype.prop = 1;
console.log(p1.prop); // 1
console.log(p2.prop); // 1
```

### Der Eigenschaft `prototype` einer Klasse eine Eigenschaft hinzufügen, die keine Methode ist

[Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) fügen jeder Instanz Eigenschaften hinzu. Klassenmethoden deklarieren _Funktions_-Eigenschaften auf dem Prototyp. Es gibt jedoch keine Möglichkeit, dem Prototyp auf diese Weise eine Eigenschaft hinzuzufügen, die keine Funktion ist. Wenn Sie statische Daten zwischen allen Instanzen gemeinsam nutzen möchten – beispielsweise ist [`Error.prototype.name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/name) für alle Fehlerinstanzen gleich –, können Sie diese der Eigenschaft `prototype` einer Klasse manuell zuweisen.

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.species = "dog";

console.log(new Dog("Jack").species); // "dog"
```

Mit [statischen Initialisierungsblöcken](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), die bei der Initialisierung der Klasse ausgeführt werden, lässt sich dies bequemer gestalten.

```js
class Dog {
  static {
    Dog.prototype.species = "dog";
  }
  constructor(name) {
    this.name = name;
  }
}

console.log(new Dog("Jack").species); // "dog"
```

### Das Objekt Function.prototype

Aus Gründen der Abwärtskompatibilität ist `Function.prototype` auch ein `Function`-Objekt, das bei einem Aufruf mit beliebigen Argumenten `undefined` zurückgibt. Es hat eine Eigenschaft {{jsxref("Function/length", "length")}} mit dem Wert `0` und eine Eigenschaft {{jsxref("Function/name", "name")}} mit dem Wert `""`. Es kann nicht als Konstruktor verwendet werden und hat keine Eigenschaft `prototype`.

```js
console.log(Function.prototype()); // undefined
console.log(Function.prototype.toString()); // function () { [native code] }
```

Andere Unterklassen zeigen dieses Verhalten nicht: `GeneratorFunction.prototype` beispielsweise ist lediglich ein einfaches Objekt, das von `Function.prototype` erbt und nicht aufgerufen werden kann. Allerdings erbt es weiterhin `name` und `length` von `Function.prototype`.

```js
const GeneratorFunction = function* () {}.constructor;
GeneratorFunction.prototype(); // TypeError: GeneratorFunction.prototype is not a function
GeneratorFunction.prototype.toString(); // TypeError: Function.prototype.toString requires that 'this' be a Function
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{jsxref("Function")}}
- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#constructors)
