---
title: Object.create()
short-title: create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Object.create()`** erstellt ein neues Objekt und verwendet dabei ein vorhandenes Objekt als Prototyp des neu erstellten Objekts.

{{InteractiveExample("JavaScript Demo: Object.create()", "taller")}}

```js interactive-example
const person = {
  isHuman: false,
  printIntroduction() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"
```

## Syntax

```js-nolint
Object.create(proto)
Object.create(proto, propertiesObject)
```

### Parameter

- `proto`
  - : Das Objekt, das als Prototyp des neu erstellten Objekts dienen soll.
- `propertiesObject` {{optional_inline}}
  - : Falls angegeben und nicht {{jsxref("undefined")}}, ein Objekt, dessen [aufzählbare eigene Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaftsdeskriptoren festlegen, die dem neu erstellten Objekt unter den entsprechenden Eigenschaftsnamen hinzugefügt werden. Diese Eigenschaften entsprechen dem zweiten Argument von {{jsxref("Object.defineProperties()")}}.

### Rückgabewert

Ein neues Objekt mit dem angegebenen Prototypobjekt und den angegebenen Eigenschaften.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `proto` weder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) noch ein {{jsxref("Object")}} ist.

## Beispiele

### Klassische Vererbung mit Object.create()

Das folgende Beispiel zeigt, wie Sie mit `Object.create()` klassische Vererbung umsetzen. Es handelt sich um einfache Vererbung, die einzige Form der Vererbung, die JavaScript unterstützt.

```js
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype, {
  // If you don't set Rectangle.prototype.constructor to Rectangle,
  // it will take the prototype.constructor of Shape (parent).
  // To avoid that, we set the prototype.constructor to Rectangle (child).
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

const rect = new Rectangle();

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Logs 'Shape moved.'
```

Beachten Sie bei der Verwendung von `create()` einige Besonderheiten: So müssen Sie beispielsweise die Eigenschaft [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) erneut hinzufügen, um die korrekte Semantik sicherzustellen. `Object.create()` gilt zwar als leistungsfähiger als das Ändern des Prototyps mit {{jsxref("Object.setPrototypeOf()")}}, tatsächlich ist der Unterschied jedoch vernachlässigbar, wenn noch keine Instanzen erstellt und Eigenschaftszugriffe noch nicht optimiert wurden. In modernem Code sollten Sie in jedem Fall die [class-Syntax](/de/docs/Web/JavaScript/Reference/Classes) bevorzugen.

### Das Argument propertiesObject mit Object.create() verwenden

`Object.create()` ermöglicht eine präzise Steuerung der Objekterstellung. Die [Syntax für Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) ist im Grunde eine vereinfachte Schreibweise für `Object.create()`. Mit `Object.create()` können Sie Objekte mit einem festgelegten Prototyp und zusätzlichen Eigenschaften erstellen. Beachten Sie, dass der zweite Parameter Schlüsseln _Eigenschaftsdeskriptoren_ zuordnet. Dadurch können Sie auch steuern, ob eine Eigenschaft aufzählbar oder konfigurierbar ist und Ähnliches – was mit Objektinitialisierern nicht möglich ist.

```js
o = {};
// Is equivalent to:
o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {
  // foo is a regular data property
  foo: {
    writable: true,
    configurable: true,
    value: "hello",
  },
  // bar is an accessor property
  bar: {
    configurable: false,
    get() {
      return 10;
    },
    set(value) {
      console.log("Setting `o.bar` to", value);
    },
  },
});

// Create a new object whose prototype is a new, empty
// object and add a single property 'p', with value 42.
o = Object.create({}, { p: { value: 42 } });
```

Mit `Object.create()` können Sie ein Objekt [mit `null` als Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erstellen. Die entsprechende Schreibweise in Objektinitialisierern verwendet den Schlüssel [`__proto__`](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter).

```js
o = Object.create(null);
// Is equivalent to:
o = { __proto__: null };
```

Standardmäßig sind Eigenschaften _nicht_ beschreibbar, aufzählbar oder konfigurierbar.

```js
o.p = 24; // throws in strict mode
o.p; // 42

o.q = 12;
for (const prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false; throws in strict mode
```

Um eine Eigenschaft mit denselben Attributen wie in einem Objektinitialisierer festzulegen, geben Sie `writable`, `enumerable` und `configurable` ausdrücklich an.

```js
o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  },
);
// This is not equivalent to:
// o2 = Object.create({ p: 42 })
// which will create an object with prototype { p: 42 }
```

Mit `Object.create()` können Sie das Verhalten des Operators [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) nachbilden.

```js
function Constructor() {}
o = new Constructor();
// Is equivalent to:
o = Object.create(Constructor.prototype);
```

Wenn die Funktion `Constructor` allerdings Initialisierungscode enthält, kann die Methode `Object.create()` diesen nicht ausführen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Object.create` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Reflect.construct()")}}
- [Object.getPrototypeOf](https://johnresig.com/blog/objectgetprototypeof/) von John Resig (2008)
