---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die statische Methode **`Object.create()`** erstellt ein neues Objekt, indem ein bestehendes Objekt als Prototyp des neu erstellten Objekts verwendet wird.

{{EmbedInteractiveExample("pages/js/object-create.html", "taller")}}

## Syntax

```js-nolint
Object.create(proto)
Object.create(proto, propertiesObject)
```

### Parameter

- `proto`
  - : Das Objekt, das der Prototyp des neu erstellten Objekts sein soll.
- `propertiesObject` {{optional_inline}}
  - : Wenn angegeben und nicht {{jsxref("undefined")}}, ein Objekt, dessen [enumerierbare eigene Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaftsbeschreibungen angeben, die dem neu erstellten Objekt hinzugefügt werden sollen, mit den entsprechenden Eigenschaftsnamen. Diese Eigenschaften entsprechen dem zweiten Argument von {{jsxref("Object.defineProperties()")}}.

### Rückgabewert

Ein neues Objekt mit dem angegebenen Prototypobjekt und Eigenschaften.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `proto` weder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) noch ein {{jsxref("Object")}} ist.

## Beispiele

### Klassische Vererbung mit Object.create()

Unten ist ein Beispiel, wie `Object.create()` verwendet wird, um klassische Vererbung zu erreichen. Dies ist für eine einfache Vererbung, die das einzige ist, was JavaScript unterstützt.

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

Beachten Sie, dass es Vorsichtsmaßnahmen gibt, die bei der Verwendung von `create()` beachtet werden müssen, wie das erneute Hinzufügen der [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft, um die richtigen Semantiken sicherzustellen. Obwohl `Object.create()` eine bessere Leistung als das Mutieren des Prototyps mit {{jsxref("Object.setPrototypeOf()")}} haben soll, ist der Unterschied tatsächlich vernachlässigbar, wenn keine Instanzen erstellt wurden und der Zugriff auf Eigenschaften noch nicht optimiert wurde. Im modernen Code sollte in jedem Fall die [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax bevorzugt werden.

### Verwendung des propertiesObject-Arguments mit Object.create()

`Object.create()` erlaubt fein abgestimmte Kontrolle über den Objekterstellungsprozess. Die [Objekt-Initialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) ist tatsächlich ein Syntax-Zucker von `Object.create()`. Mit `Object.create()` können wir Objekte mit einem festgelegten Prototyp und auch einigen Eigenschaften erstellen. Beachten Sie, dass der zweite Parameter Schlüssel auf _Eigenschaftsbeschreibungen_ abbildet — dies bedeutet, dass Sie auch die Aufzählbarkeit, Änderbarkeit usw. jeder Eigenschaft steuern können, was Sie bei Objekt-Initialisierern nicht können.

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

Mit `Object.create()` können wir ein Objekt [mit `null` als Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erstellen. Die äquivalente Syntax in Objekt-Initialisierern wäre der [`__proto__`](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter)-Schlüssel.

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

Um eine Eigenschaft mit denselben Attributen wie in einem Initialisierer anzugeben, müssen `writable`, `enumerable` und `configurable` explizit angegeben werden.

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

Sie können `Object.create()` verwenden, um das Verhalten des [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operators nachzuahmen.

```js
function Constructor() {}
o = new Constructor();
// Is equivalent to:
o = Object.create(Constructor.prototype);
```

Natürlich kann die `Object.create()`-Methode den Initialisierungscode nicht widerspiegeln, wenn es in der `Constructor`-Funktion tatsächlich Initialisierungscode gibt.

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
