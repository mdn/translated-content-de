---
title: "Funktion: prototype"
short-title: prototype
slug: Web/JavaScript/Reference/Global_Objects/Function/prototype
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`prototype`** Daten-Eigenschaft einer {{jsxref("Function")}}-Instanz wird verwendet, wenn die Funktion als Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator verwendet wird. Sie wird das Prototyp-Objekt des neuen Objekts.

> [!NOTE]
> Nicht alle {{jsxref("Function")}}-Objekte haben die `prototype`-Eigenschaft — siehe [Beschreibung](#beschreibung).

## Wert

Ein Objekt.

{{js_property_attributes(1, 0, 0)}}

> [!NOTE]
> [Klassen](/de/docs/Web/JavaScript/Reference/Classes) sind eine Art von Funktion, daher gilt das meiste der hier beschriebenen Konzepte auch für die `prototype`-Eigenschaft von Klassen. Der einzige wesentliche Unterschied ist, dass die `prototype`-Eigenschaft einer Klasse nicht beschreibbar ist.

## Beschreibung

Wenn eine Funktion mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen wird, wird die `prototype`-Eigenschaft des Konstruktors das Prototyp-Objekt des resultierenden Objekts.

```js
function Ctor() {}
const inst = new Ctor();
console.log(Object.getPrototypeOf(inst) === Ctor.prototype); // true
```

Sie können [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#constructors) lesen, um mehr über die Interaktionen zwischen der `prototype`-Eigenschaft einer Konstruktorfunktion und dem Prototyp-Objekt des resultierenden Objekts zu erfahren.

Es reicht nicht aus, dass eine Funktion eine `prototype`-Eigenschaft hat, damit sie als Konstruktor in Frage kommt. [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) haben eine `prototype`-Eigenschaft, können aber nicht mit `new` aufgerufen werden:

```js
async function* asyncGeneratorFunction() {}
function* generatorFunction() {}
```

Stattdessen wird die `prototype`-Eigenschaft von Generatorfunktionen verwendet, wenn sie _ohne_ `new` aufgerufen werden. Die `prototype`-Eigenschaft wird das Prototyp-Objekt des zurückgegebenen [`Generator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)-Objekts.

Zusätzlich können einige Funktionen eine `prototype`-Eigenschaft haben, werfen jedoch bedingungslos einen Fehler, wenn sie mit `new` aufgerufen werden. Zum Beispiel werfen die [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol)- und [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktionen einen Fehler, wenn sie mit `new` aufgerufen werden, da `Symbol.prototype` und `BigInt.prototype` nur Methoden für die primitiven Werte bereitstellen sollen, aber die Wrapper-Objekte nicht direkt konstruiert werden sollten.

Folgende Funktionen haben kein `prototype` und sind daher nicht als Konstruktoren geeignet, auch wenn später manuell eine `prototype`-Eigenschaft zugewiesen wird:

```js
const method = { foo() {} }.foo;
const arrowFunction = () => {};
async function asyncFunction() {}
```

Folgende sind gültige Konstruktoren, die `prototype` haben:

```js
class Class {}
function fn() {}
```

Eine [gebundene Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) hat keine `prototype`-Eigenschaft, kann aber dennoch konstruierbar sein. Wenn sie konstruiert wird, wird stattdessen die Ziel-Funktion konstruiert, und wenn die Ziel-Funktion konstruierbar ist, würde sie eine normale Instanz zurückgeben.

```js
const boundFunction = function () {}.bind(null);
```

Die `prototype`-Eigenschaft einer Funktion ist standardmäßig ein einfaches Objekt mit einer Eigenschaft: [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), die ein Verweis auf die Funktion selbst ist. Die `constructor`-Eigenschaft ist beschreibbar, nicht aufzählbar und konfigurierbar.

Wenn das `prototype` einer Funktion mit etwas anderem als einem {{jsxref("Object")}} neu zugewiesen wird, würde bei einem Aufruf der Funktion mit `new` das zurückgegebene Objekt `Object.prototype` als Prototyp haben. (Mit anderen Worten, `new` ignoriert die `prototype`-Eigenschaft und konstruiert ein einfaches Objekt.)

```js
function Ctor() {}
Ctor.prototype = 3;
console.log(Object.getPrototypeOf(new Ctor()) === Object.prototype); // true
```

## Beispiele

### Ändern des Prototyps aller Instanzen durch Mutieren der Prototyp-Eigenschaft

```js
function Ctor() {}
const p1 = new Ctor();
const p2 = new Ctor();
Ctor.prototype.prop = 1;
console.log(p1.prop); // 1
console.log(p2.prop); // 1
```

### Hinzufügen einer Nicht-Methoden-Eigenschaft zur Prototyp-Eigenschaft einer Klasse

[Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) fügen jeder Instanz Eigenschaften hinzu. Klassenmethoden deklarieren _Funktions_-Eigenschaften auf dem Prototyp. Es gibt jedoch keinen Weg, eine Nicht-Funktions-Eigenschaft zum Prototyp hinzuzufügen. Wenn Sie statische Daten zwischen allen Instanzen teilen möchten (zum Beispiel ist [`Error.prototype.name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/name) bei allen Fehlerinstanzen gleich), können Sie sie manuell der `prototype`-Eigenschaft einer Klasse zuweisen.

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.species = "dog";

console.log(new Dog("Jack").species); // "dog"
```

Dies kann ergonomischer gemacht werden durch [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks), die beim Initialisieren der Klasse aufgerufen werden.

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
- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#constructors)
