---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Object.create()`** erzeugt ein neues Objekt, wobei ein bestehendes Objekt als Prototyp des neu erstellten Objekts verwendet wird.

{{InteractiveExample("JavaScript Demo: Object.create()", "taller")}}

```js interactive-example
const person = {
  isHuman: false,
  printIntroduction: function () {
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
  - : Falls angegeben und nicht {{jsxref("undefined")}}, ein Objekt, dessen [aufzählbare eigene Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaftsbeschreibungen enthalten, die dem neu erstellten Objekt mit den entsprechenden Eigenschaftsnamen hinzugefügt werden. Diese Eigenschaften entsprechen dem zweiten Argument von {{jsxref("Object.defineProperties()")}}.

### Rückgabewert

Ein neues Objekt mit dem angegebenen Prototyp-Objekt und Eigenschaften.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `proto` weder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) noch ein {{jsxref("Object")}} ist.

## Beispiele

### Klassische Vererbung mit Object.create()

Im Folgenden ein Beispiel, wie `Object.create()` verwendet wird, um klassische Vererbung zu erreichen. Dies gilt für eine einfache Vererbung, da JavaScript nur diese unterstützt.

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

Beachten Sie, dass es Einschränkungen bei der Verwendung von `create()` gibt, z. B. das erneute Hinzufügen der [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft, um die korrekten Semantiken sicherzustellen. Obwohl angenommen wird, dass `Object.create()` eine bessere Leistung bietet als das Ändern des Prototyps mit {{jsxref("Object.setPrototypeOf()")}}, ist der Unterschied tatsächlich vernachlässigbar, wenn keine Instanzen erstellt wurden und der Zugriff auf Eigenschaften noch nicht optimiert wurde. In modernem Code sollte in jedem Fall die [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax bevorzugt werden.

### Verwendung des propertiesObject-Arguments mit Object.create()

`Object.create()` ermöglicht eine fein abgestimmte Kontrolle über den Objekt-Erstellungsprozess. Die [Objekt-Initializer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) ist genau genommen eine Syntaxabkürzung von `Object.create()`. Mit `Object.create()` können wir Objekte mit einem bestimmten Prototyp und auch einigen Eigenschaften erstellen. Beachten Sie, dass der zweite Parameter Schlüssel mit _Eigenschaftsbeschreibungen_ abbildet – das bedeutet, dass Sie beispielsweise die Aufzählbarkeit oder Konfigurierbarkeit jeder Eigenschaft steuern können, was in Objekt-Initializern nicht möglich ist.

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

Mit `Object.create()` können wir ein Objekt [mit `null` als Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erstellen. Die äquivalente Syntax in Objekt-Initializern wäre der Schlüssel [`__proto__`](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter).

```js
o = Object.create(null);
// Is equivalent to:
o = { __proto__: null };
```

Standardmäßig sind Eigenschaften _nicht_ schreibbar, aufzählbar oder konfigurierbar.

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

Um eine Eigenschaft mit denselben Attributen wie in einem Initializer anzugeben, geben Sie explizit `writable`, `enumerable` und `configurable` an.

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

Sie können `Object.create()` nutzen, um das Verhalten des [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operators zu imitieren.

```js
function Constructor() {}
o = new Constructor();
// Is equivalent to:
o = Object.create(Constructor.prototype);
```

Natürlich kann die Methode `Object.create()` keinen Initialisierungscode widerspiegeln, der sich in der `Constructor`-Funktion befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.create` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Reflect.construct()")}}
- [Object.getPrototypeOf](https://johnresig.com/blog/objectgetprototypeof/) von John Resig (2008)
