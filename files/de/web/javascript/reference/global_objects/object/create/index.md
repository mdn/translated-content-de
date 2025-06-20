---
title: Object.create()
short-title: create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Object.create()`** erstellt ein neues Objekt, wobei ein bestehendes Objekt als Prototyp des neu erstellten Objekts verwendet wird.

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
  - : Das Objekt, das der Prototyp des neu erstellten Objekts sein soll.
- `propertiesObject` {{optional_inline}}
  - : Falls angegeben und nicht {{jsxref("undefined")}}, ein Objekt, dessen [enumerierbare Eigenattribute](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaftenbeschreibungen spezifizieren, die dem neu erstellten Objekt mit den entsprechenden Eigenschaftsnamen hinzugefügt werden sollen. Diese Eigenschaften entsprechen dem zweiten Argument von {{jsxref("Object.defineProperties()")}}.

### Rückgabewert

Ein neues Objekt mit dem angegebenen Prototyp und Eigenschaften.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `proto` weder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) noch ein {{jsxref("Object")}} ist.

## Beispiele

### Klassische Vererbung mit Object.create()

Unten ist ein Beispiel, wie `Object.create()` verwendet wird, um klassische Vererbung zu erreichen. Dies gilt für eine einfache Vererbung, die JavaScript unterstützt.

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

Beachten Sie, dass es beim Verwenden von `create()` einige Fallstricke gibt, wie z.B. das erneute Hinzufügen der [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft, um die richtige Semantik sicherzustellen. Obwohl angenommen wird, dass `Object.create()` eine bessere Leistung als das Mutieren des Prototyps mit {{jsxref("Object.setPrototypeOf()")}} hat, ist der Unterschied tatsächlich vernachlässigbar, wenn noch keine Instanzen erstellt wurden und Eigenschaftszugriffe noch nicht optimiert wurden. In modernem Code sollte in jedem Fall die [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax bevorzugt werden.

### Verwenden des propertiesObject-Arguments mit Object.create()

`Object.create()` ermöglicht eine fein abgestimmte Kontrolle über den Objekt-Erstellungsprozess. Die [Objekt-Initialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) ist tatsächlich ein Syntaxzucker von `Object.create()`. Mit `Object.create()` können wir Objekte mit einem festgelegten Prototyp und auch einigen Eigenschaften erstellen. Beachten Sie, dass der zweite Parameter Schlüssel zu _Eigenschaftsbeschreibungen_ zuordnet – das bedeutet, Sie können die Enumerierbarkeit, Konfigurierbarkeit usw. jeder Eigenschaft kontrollieren, was in Objekt-Initialisierern nicht möglich ist.

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

Standardmäßig sind Eigenschaften _nicht_ schreibbar, enumerierbar oder konfigurierbar.

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

Um eine Eigenschaft mit denselben Attributen wie in einem Initialisierer zu spezifizieren, geben Sie explizit `writable`, `enumerable` und `configurable` an.

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

Sie können `Object.create()` verwenden, um das Verhalten des [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operators zu imitieren.

```js
function Constructor() {}
o = new Constructor();
// Is equivalent to:
o = Object.create(Constructor.prototype);
```

Selbstverständlich kann die Methode `Object.create()` keinen Initialisierungscode in der `Constructor`-Funktion widerspiegeln.

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
