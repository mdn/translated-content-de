---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die statische Methode **`Object.create()`** erstellt ein neues Objekt, wobei ein vorhandenes Objekt als Prototyp des neu erstellten Objekts verwendet wird.

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
  - : Wenn angegeben und nicht {{jsxref("undefined")}}, ein Objekt, dessen [enumerierbare eigene Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaftsbeschreibungen spezifizieren, die zum neu erstellten Objekt hinzugefügt werden sollen, mit den entsprechenden Eigenschaftsnamen. Diese Eigenschaften entsprechen dem zweiten Argument von {{jsxref("Object.defineProperties()")}}.

### Rückgabewert

Ein neues Objekt mit dem angegebenen Prototyp-Objekt und den Eigenschaften.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `proto` weder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) noch ein {{jsxref("Object")}} ist.

## Beispiele

### Klassische Vererbung mit Object.create()

Unten finden Sie ein Beispiel, wie Sie mit `Object.create()` eine klassische Vererbung erreichen können. Dies gilt für eine Einzelvererbung, die JavaScript unterstützt.

```js
// Shape - Superklasse
function Shape() {
  this.x = 0;
  this.y = 0;
}

// Superklassenmethode
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - Unterklasse
function Rectangle() {
  Shape.call(this); // Superkonstruktor aufrufen.
}

// Unterklasse erweitert Superklasse
Rectangle.prototype = Object.create(Shape.prototype, {
  // Wenn Sie Rectangle.prototype.constructor nicht auf Rectangle setzen,
  // wird es den prototype.constructor von Shape (Eltern) übernehmen.
  // Um das zu vermeiden, setzen wir prototype.constructor auf Rectangle (Kind).
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
rect.move(1, 1); // Protokolliert 'Shape moved.'
```

Beachten Sie, dass es bei der Verwendung von `create()` einige Vorsichtsmaßnahmen gibt, z. B. das erneute Hinzufügen der [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)-Eigenschaft, um korrekte Semantik sicherzustellen. Obwohl `Object.create()` als leistungsfähiger angesehen wird als das Mutieren des Prototyps mit {{jsxref("Object.setPrototypeOf()")}}, ist der Unterschied tatsächlich vernachlässigbar, wenn noch keine Instanzen erstellt wurden und Eigenschaftszugriffe noch nicht optimiert wurden. Im modernen Code sollte in jedem Fall die [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax bevorzugt werden.

### Verwenden des propertiesObject-Arguments mit Object.create()

`Object.create()` ermöglicht eine fein abgestimmte Kontrolle über den Objekt-Erstellungsprozess. Die [Objekt-Initialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) ist tatsächlich ein Syntax-Zucker von `Object.create()`. Mit `Object.create()` können wir Objekte mit einem bestimmten Prototyp und auch einigen Eigenschaften erstellen. Beachten Sie, dass der zweite Parameter Schlüssel auf _Eigenschaftsbeschreibungen_ abbildet – das bedeutet, dass Sie die Enumerierbarkeit, Konfigurierbarkeit usw. jeder Eigenschaft steuern können, was Sie in Objekt-Initializeren nicht tun können.

```js
o = {};
// Ist gleichwertig mit:
o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {
  // foo ist eine normale Dateneigenschaft
  foo: {
    writable: true,
    configurable: true,
    value: "hello",
  },
  // bar ist eine Zugriffseigenschaft
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

// Erstelle ein neues Objekt, dessen Prototyp ein neues, leeres
// Objekt ist, und füge eine einzelne Eigenschaft 'p' mit dem Wert 42 hinzu.
o = Object.create({}, { p: { value: 42 } });
```

Mit `Object.create()` können wir ein Objekt erstellen [mit `null` als Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Die äquivalente Syntax in Objekt-Initializeren wäre der [`__proto__`](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter)-Schlüssel.

```js
o = Object.create(null);
// Ist gleichwertig mit:
o = { __proto__: null };
```

Standardmäßig sind Eigenschaften _nicht_ schreibbar, enumerierbar oder konfigurierbar.

```js
o.p = 24; // löst im strikten Modus aus
o.p; // 42

o.q = 12;
for (const prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false; löst im strikten Modus aus
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
// Dies ist nicht gleichwertig mit:
// o2 = Object.create({ p: 42 })
// Dies würde ein Objekt mit Prototype { p: 42 } erstellen
```

Sie können `Object.create()` verwenden, um das Verhalten des [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operators zu imitieren.

```js
function Constructor() {}
o = new Constructor();
// Ist gleichwertig mit:
o = Object.create(Constructor.prototype);
```

Natürlich kann die `Object.create()` Methode keinen tatsächlichen Initialisierungscode in der `Constructor`-Funktion widerspiegeln.

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
