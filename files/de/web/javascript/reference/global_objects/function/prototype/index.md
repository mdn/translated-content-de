---
title: "Funktion: prototype"
short-title: prototype
slug: Web/JavaScript/Reference/Global_Objects/Function/prototype
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Daten-Eigenschaft **`prototype`** einer {{jsxref("Function")}}-Instanz wird verwendet, wenn die Funktion als Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator verwendet wird. Sie wird zum Prototyp des neuen Objekts.

> [!NOTE]
> Nicht alle {{jsxref("Function")}}-Objekte haben die Eigenschaft `prototype` – siehe [Beschreibung](#beschreibung).

## Wert

Ein Objekt.

{{js_property_attributes(1, 0, 0)}}

> **Hinweis:** [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind eine Art von Funktion, daher trifft die hier gegebene Beschreibung auch auf die `prototype`-Eigenschaft von Klassen zu. Der einzige wesentliche Unterschied ist, dass die `prototype`-Eigenschaft einer Klasse nicht beschreibbar ist.

## Beschreibung

Wenn eine Funktion mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen wird, wird die `prototype`-Eigenschaft des Konstruktors zum Prototyp des resultierenden Objekts.

```js
function Ctor() {}
const inst = new Ctor();
console.log(Object.getPrototypeOf(inst) === Ctor.prototype); // true
```

Sie können [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#constructors) lesen, um mehr über die Interaktionen zwischen der `prototype`-Eigenschaft einer Konstruktorfunktion und dem Prototyp des resultierenden Objekts zu erfahren.

Das Vorhandensein einer `prototype`-Eigenschaft bei einer Funktion reicht nicht aus, damit sie als Konstruktor geeignet ist. [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) haben eine `prototype`-Eigenschaft, können aber nicht mit `new` aufgerufen werden:

```js
async function* asyncGeneratorFunction() {}
function* generatorFunction() {}
```

Stattdessen wird die `prototype`-Eigenschaft von Generator-Funktionen verwendet, wenn sie _ohne_ `new` aufgerufen werden. Die `prototype`-Eigenschaft wird zum Prototyp des zurückgegebenen [`Generator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)-Objekts.

Darüber hinaus können einige Funktionen eine `prototype`-Eigenschaft haben, werfen jedoch bedingungslos, wenn sie mit `new` aufgerufen werden. Zum Beispiel werfen die Funktionen [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol) und [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) eine Ausnahme, wenn sie mit `new` aufgerufen werden, da `Symbol.prototype` und `BigInt.prototype` nur dazu dienen, Methoden für die primitiven Werte bereitzustellen, die Wrapper-Objekte jedoch nicht direkt konstruiert werden sollten.

Die folgenden Funktionen haben kein `prototype` und sind daher nicht als Konstruktoren geeignet, selbst wenn später manuell eine `prototype`-Eigenschaft zugewiesen wird:

```js
const method = { foo() {} }.foo;
const arrowFunction = () => {};
async function asyncFunction() {}
```

Die folgenden sind gültige Konstruktoren, die ein `prototype` haben:

```js
class Class {}
function fn() {}
```

Eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) hat keine `prototype`-Eigenschaft, kann aber konstruierbar sein. Wenn sie konstruiert wird, wird die Zielfunktion stattdessen konstruiert, und wenn die Zielfunktion konstruierbar ist, würde sie eine normale Instanz zurückgeben.

```js
const boundFunction = function () {}.bind(null);
```

Die `prototype`-Eigenschaft einer Funktion ist standardmäßig ein einfaches Objekt mit einer Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), das eine Referenz auf die Funktion selbst ist. Die `constructor`-Eigenschaft ist beschreibbar, nicht aufzählbar und konfigurierbar.

Wenn das `prototype` einer Funktion mit etwas anderem als einem {{jsxref("Object")}} neu zugewiesen wird, wird beim Aufruf der Funktion mit `new` der Prototyp des zurückgegebenen Objekts `Object.prototype` sein. (Mit anderen Worten: `new` ignoriert die `prototype`-Eigenschaft und konstruiert ein einfaches Objekt.)

```js
function Ctor() {}
Ctor.prototype = 3;
console.log(Object.getPrototypeOf(new Ctor()) === Object.prototype); // true
```

## Beispiele

### Ändern des Prototyps aller Instanzen durch Bearbeiten der prototype-Eigenschaft

```js
function Ctor() {}
const p1 = new Ctor();
const p2 = new Ctor();
Ctor.prototype.prop = 1;
console.log(p1.prop); // 1
console.log(p2.prop); // 1
```

### Hinzufügen einer Nicht-Methode-Eigenschaft zur prototype-Eigenschaft einer Klasse

[Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) fügen jedes Instanz Eigenschaften hinzu. Klassenmethoden deklarieren _Funktions_-Eigenschaften auf dem Prototyp. Es gibt jedoch keine Möglichkeit, eine Nicht-Funktions-Eigenschaft zum Prototyp hinzuzufügen. Falls Sie statische Daten zwischen allen Instanzen teilen möchten (zum Beispiel ist [`Error.prototype.name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/name) bei allen Fehlerinstanzen gleich), können Sie es manuell auf dem `prototype` einer Klasse zuweisen.

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.species = "dog";

console.log(new Dog("Jack").species); // "dog"
```

Dies kann mit [statischen Initialisierungsblöcken](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ergonomischer gestaltet werden, die aufgerufen werden, wenn die Klasse initialisiert wird.

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
- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#constructors)
