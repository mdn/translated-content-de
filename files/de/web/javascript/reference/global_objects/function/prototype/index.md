---
title: "Funktion: prototype"
short-title: prototype
slug: Web/JavaScript/Reference/Global_Objects/Function/prototype
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Die **`prototype`**-Dateneigenschaft einer {{jsxref("Function")}}-Instanz wird verwendet, wenn die Funktion als Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator verwendet wird. Sie wird zum Prototyp des neuen Objekts.

> [!NOTE]
> Nicht alle {{jsxref("Function")}}-Objekte haben die `prototype`-Eigenschaft — siehe [Beschreibung](#beschreibung).

## Wert

Ein Objekt.

{{js_property_attributes(1, 0, 0)}}

> [!NOTE] > [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind eine Art von Funktion, daher ist der größte Teil der Beschreibung hier auch auf die `prototype`-Eigenschaft von Klassen anwendbar. Der einzige wesentliche Unterschied besteht darin, dass die `prototype`-Eigenschaft einer Klasse nicht beschreibbar ist.

## Beschreibung

Wenn eine Funktion mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen wird, wird die `prototype`-Eigenschaft des Konstruktors zum Prototyp des resultierenden Objekts.

```js
function Ctor() {}
const inst = new Ctor();
console.log(Object.getPrototypeOf(inst) === Ctor.prototype); // true
```

Weitere Informationen über die Interaktionen zwischen der `prototype`-Eigenschaft einer Konstruktorfunktion und dem Prototyp des resultierenden Objekts finden Sie in [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#constructors).

Dass eine Funktion eine `prototype`-Eigenschaft besitzt, reicht nicht aus, um sie als Konstruktor zu qualifizieren. [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) haben eine `prototype`-Eigenschaft, können jedoch nicht mit `new` aufgerufen werden:

```js
async function* asyncGeneratorFunction() {}
function* generatorFunction() {}
```

Stattdessen wird die `prototype`-Eigenschaft von Generator-Funktionen verwendet, wenn sie _ohne_ `new` aufgerufen werden. Die `prototype`-Eigenschaft wird zum Prototyp des zurückgegebenen [`Generator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)-Objekts.

Darüber hinaus können einige Funktionen eine `prototype`-Eigenschaft haben, aber bedingungslos eine Ausnahme auslösen, wenn sie mit `new` aufgerufen werden. Zum Beispiel lösen die [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol)- und [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktionen eine Ausnahme aus, wenn sie mit `new` aufgerufen werden, da `Symbol.prototype` und `BigInt.prototype` nur dazu gedacht sind, Methoden für die primitiven Werte bereitzustellen, aber die Wrapper-Objekte sollten nicht direkt konstruiert werden.

Die folgenden Funktionen haben keine `prototype`-Eigenschaft und sind daher nicht als Konstruktoren geeignet, selbst wenn später manuell eine `prototype`-Eigenschaft zugewiesen wird:

```js
const method = { foo() {} }.foo;
const arrowFunction = () => {};
async function asyncFunction() {}
```

Die folgenden sind gültige Konstruktoren, die eine `prototype`-Eigenschaft haben:

```js
class Class {}
function fn() {}
```

Eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) hat keine `prototype`-Eigenschaft, kann aber konstruierbar sein. Wenn sie konstruiert wird, wird die Zielfunktion konstruiert, und wenn die Zielfunktion konstruierbar ist, würde sie eine normale Instanz zurückgeben.

```js
const boundFunction = function () {}.bind(null);
```

Die `prototype`-Eigenschaft einer Funktion ist standardmäßig ein einfaches Objekt mit einer Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), die eine Referenz auf die Funktion selbst ist. Die `constructor`-Eigenschaft ist beschreibbar, nicht aufzählbar und konfigurierbar.

Wenn der `prototype` einer Funktion mit etwas anderem als einem {{jsxref("Object")}} neu zugewiesen wird, würde der Prototyp des zurückgegebenen Objekts `Object.prototype` sein, wenn die Funktion mit `new` aufgerufen wird. (Mit anderen Worten, `new` ignoriert die `prototype`-Eigenschaft und konstruiert ein einfaches Objekt.)

```js
function Ctor() {}
Ctor.prototype = 3;
console.log(Object.getPrototypeOf(new Ctor()) === Object.prototype); // true
```

## Beispiele

### Den Prototyp aller Instanzen ändern, indem die Prototyp-Eigenschaft verändert wird

```js
function Ctor() {}
const p1 = new Ctor();
const p2 = new Ctor();
Ctor.prototype.prop = 1;
console.log(p1.prop); // 1
console.log(p2.prop); // 1
```

### Eine Nicht-Methoden-Eigenschaft zur Prototyp-Eigenschaft einer Klasse hinzufügen

[Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) fügen jeder Instanz Eigenschaften hinzu. Klassenmethoden deklarieren _Funktions_-eigenschaften am Prototyp. Es gibt jedoch keine Möglichkeit, eine Nicht-Funktions-Eigenschaft zum Prototyp hinzuzufügen. Wenn Sie statische Daten zwischen allen Instanzen teilen möchten (zum Beispiel ist [`Error.prototype.name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/name) bei allen Fehlerinstanzen gleich), können Sie diese manuell dem `prototype` einer Klasse zuweisen.

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.species = "dog";

console.log(new Dog("Jack").species); // "dog"
```

Dies kann durch die Verwendung von [statischen Initialisierungsblöcken](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ergonomischer gemacht werden, die aufgerufen werden, wenn die Klasse initialisiert wird.

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{jsxref("Function")}}
- [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#constructors)
