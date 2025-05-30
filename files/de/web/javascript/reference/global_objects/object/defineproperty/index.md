---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
l10n:
  sourceCommit: 58fda7e192fc7d82880f310d8f912ba2f50cd0d5
---

{{JSRef}}

Die **`Object.defineProperty()`** statische Methode definiert eine neue Eigenschaft direkt auf einem Objekt oder modifiziert eine vorhandene Eigenschaft auf einem Objekt und gibt das Objekt zurück.

{{InteractiveExample("JavaScript Demo: Object.defineProperty()")}}

```js interactive-example
const object1 = {};

Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});

object1.property1 = 77;
// Throws an error in strict mode

console.log(object1.property1);
// Expected output: 42
```

## Syntax

```js-nolint
Object.defineProperty(obj, prop, descriptor)
```

### Parameter

- `obj`
  - : Das Objekt, auf dem die Eigenschaft definiert werden soll.
- `prop`
  - : Ein String oder {{jsxref("Symbol")}}, der den Schlüssel der Eigenschaft angibt, die definiert oder modifiziert werden soll.
- `descriptor`
  - : Der Descriptor für die Eigenschaft, die definiert oder modifiziert wird.

### Rückgabewert

Das an die Funktion übergebene Objekt, mit der hinzugefügten oder modifizierten Eigenschaft.

## Beschreibung

`Object.defineProperty()` ermöglicht eine genaue Hinzufügung oder Modifikation einer Eigenschaft auf einem Objekt. Normale Eigenschaftszuweisung durch [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment) erzeugt Eigenschaften, die bei der Auflistung von Eigenschaften ({{jsxref("Statements/for...in", "for...in")}}, {{jsxref("Object.keys()")}}, etc.) angezeigt werden, deren Werte geändert werden können und die {{jsxref("Operators/delete", "gelöscht", "", 1)}} werden können. Diese Methode ermöglicht es, diese zusätzlichen Details von ihren Standardeinstellungen zu ändern. Standardmäßig sind Eigenschaften, die mit `Object.defineProperty()` hinzugefügt wurden, nicht schreibbar, nicht enumerierbar und nicht konfigurierbar. Zusätzlich verwendet `Object.defineProperty()` die interne Methode [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty), anstelle von [`[[Set]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set), sodass es keine [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) aufruft, auch wenn die Eigenschaft bereits vorhanden ist.

Eigenschafts-Deskriptoren in Objekten gibt es in zwei Hauptvarianten: Daten-Deskriptoren und Accessor-Deskriptoren. Ein **Daten-Deskriptor** ist eine Eigenschaft mit einem Wert, der eventuell schreibbar ist. Ein **Accessor-Deskriptor** ist eine Eigenschaft, die durch ein Getter-Setter-Pärchen von Funktionen beschrieben wird. Ein Deskriptor muss eine dieser beiden Varianten sein; er kann nicht beides sein.

Sowohl Daten- als auch Accessor-Deskriptoren sind Objekte. Sie teilen folgende optionale Schlüssel (bitte beachten: die **Standardeinstellungen** hier sind im Fall der Definition von Eigenschaften mittels `Object.defineProperty()`):

- `configurable`

  - : Wenn dies auf `false` gesetzt ist,

    - kann der Typ dieser Eigenschaft nicht zwischen Daten- und Accessor-Eigenschaft geändert werden, und
    - die Eigenschaft kann nicht gelöscht werden, und
    - andere Attribute ihres Deskriptors können nicht geändert werden (jedoch, wenn es ein Daten-Deskriptor mit `writable: true` ist, kann der `value` geändert werden und `writable` kann auf `false` geändert werden).

    **Standardmäßig `false`.**

- `enumerable`
  - : `true` wenn und nur wenn diese Eigenschaft bei der Auflistung der Eigenschaften des entsprechenden Objekts erscheint. **Standardmäßig `false`.**

Ein **Daten-Deskriptor** hat auch die folgenden optionalen Schlüssel:

- `value`
  - : Der Wert, der mit der Eigenschaft assoziiert ist. Kann ein beliebiger gültiger JavaScript-Wert sein (Zahl, Objekt, Funktion, etc.). **Standardmäßig {{jsxref("undefined")}}.**
- `writable`
  - : `true`, wenn der mit der Eigenschaft assoziierte Wert mit einem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators) geändert werden kann. **Standardmäßig `false`.**

Ein **Accessor-Deskriptor** hat auch die folgenden optionalen Schlüssel:

- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}} wenn kein Getter existiert. Wenn auf die Eigenschaft zugegriffen wird, wird diese Funktion ohne Argumente aufgerufen und mit `this`, gesetzt auf das Objekt, durch das auf die Eigenschaft zugegriffen wird (dieses Objekt kann aufgrund von Vererbung möglicherweise nicht das Objekt sein, auf dem die Eigenschaft definiert ist). Der Rückgabewert wird als Wert der Eigenschaft verwendet. **Standardmäßig {{jsxref("undefined")}}.**
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}} wenn kein Setter existiert. Wenn der Eigenschaft ein Wert zugewiesen wird, wird diese Funktion mit einem Argument (dem der Eigenschaft zugewiesenen Wert) und mit `this`, gesetzt auf das Objekt, durch das die Eigenschaft zugewiesen wird, aufgerufen. **Standardmäßig {{jsxref("undefined")}}.**

Wenn ein Deskriptor keinen der Schlüssel `value`, `writable`, `get` und `set` hat, wird er als Daten-Deskriptor behandelt. Wenn ein Deskriptor sowohl ein Daten-Deskriptor (da er `value` oder `writable` hat) als auch ein Accessor-Deskriptor (da er `get` oder `set` hat) ist, wird eine Ausnahme ausgelöst.

Diese Attribute sind nicht unbedingt die eigenen Eigenschaften des Deskriptors. Geerbte Eigenschaften werden ebenfalls berücksichtigt. Um sicherzustellen, dass diese Standardeinstellungen erhalten bleiben, könnte man bestehende Objekte in der Prototyp-Kette des Deskriptor-Objekts im Voraus einfrieren, alle Optionen explizit angeben oder ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erstellen.

```js
const obj = {};
// 1. Using a null prototype: no inherited properties
const descriptor = Object.create(null);
descriptor.value = "static";

// not enumerable, not configurable, not writable as defaults
Object.defineProperty(obj, "key", descriptor);

// 2. Being explicit by using a throw-away object literal with all attributes present
Object.defineProperty(obj, "key2", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// 3. Prevents adding or removing the object prototype properties
// (value, get, set, enumerable, writable, configurable)
Object.freeze(Object.prototype);
```

Wenn die Eigenschaft bereits existiert, versucht `Object.defineProperty()`, die Eigenschaft gemäß den Werten im Deskriptor und der aktuellen Konfiguration der Eigenschaft zu ändern.

Wenn der alte Deskriptor seine `configurable`-Eigenschaft auf `false` gesetzt hatte, wird die Eigenschaft als _nicht konfigurierbar_ bezeichnet. Es ist nicht möglich, ein Attribut einer nicht konfigurierbaren Accessor-Eigenschaft zu ändern und es ist nicht möglich, zwischen Daten- und Accessor-Eigenschaften zu wechseln. Für Dateneigenschaften mit `writable: true` ist es möglich, den Wert zu ändern und das `writable`-Attribut von `true` auf `false` zu ändern. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn Versuche unternommen werden, nicht konfigurierbare Eigenschafts-Attribute zu ändern (außer `value` und `writable`, wenn erlaubt), es sei denn, man definiert einen Wert, der dem ursprünglichen Wert auf einer Dateneigenschaft entspricht.

Wenn die aktuelle Eigenschaft konfigurierbar ist, führt die Definition eines Attributs auf `undefined` effektiv zu dessen Löschung. Zum Beispiel, wenn `o.k` eine Accessor-Eigenschaft ist, wird `Object.defineProperty(o, "k", { set: undefined })` den Setter entfernen, sodass `k` nur einen Getter hat und schreibgeschützt wird. Wenn ein Attribut im neuen Deskriptor fehlt, bleibt der Wert des alten Deskriptor-Attributs erhalten (es wird nicht implizit auf `undefined` neu definiert). Es ist möglich, zwischen Daten- und Accessor-Eigenschaften zu wechseln, indem ein Deskriptor eines anderen "Flavors" angegeben wird. Zum Beispiel, wenn der neue Deskriptor ein Daten-Deskriptor ist (mit `value` oder `writable`), werden die ursprünglichen Deskriptor-Attribute `get` und `set` beide entfernt.

## Beispiele

### Erstellen einer Eigenschaft

Wenn die angegebene Eigenschaft nicht im Objekt existiert, erstellt `Object.defineProperty()` eine neue Eigenschaft wie beschrieben. Felder können im Deskriptor ausgelassen werden, und für diese Felder werden Standardwerte verwendet.

```js
const o = {}; // Creates a new object

// Example of an object property added
// with defineProperty with a data property descriptor
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// 'a' property exists in the o object and its value is 37

// Example of an object property added
// with defineProperty with an accessor property descriptor
let bValue = 38;
Object.defineProperty(o, "b", {
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue,
// unless o.b is redefined

// You cannot try to mix both:
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get() {
    return 0xdeadbeef;
  },
});
// throws a TypeError: value appears
// only in data descriptors,
// get appears only in accessor descriptors
```

### Modifikation einer Eigenschaft

Wenn eine existierende Eigenschaft modifiziert wird, bestimmt die aktuelle Eigenschaftskonfiguration, ob der Operator erfolgreich ist, nichts tut oder einen {{jsxref("TypeError")}} auslöst.

#### Schreibbares Attribut

Wenn das `writable`-Eigenschafts-Attribut auf `false` gesetzt ist, wird die Eigenschaft als "nicht schreibbar" bezeichnet. Sie kann nicht erneut zugewiesen werden. Ein Versuch, eine nicht schreibbare Eigenschaft zu ändern, ändert sie nicht und führt zu einem Fehler im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

```js
const o = {}; // Creates a new object

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // 37
o.a = 25; // No error thrown
// (it would throw in strict mode,
// even if the value had been the same)
console.log(o.a); // 37; the assignment didn't work

// strict mode
(() => {
  "use strict";
  const o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  o.b = 3; // throws TypeError: "b" is read-only
  return o.b; // returns 2 without the line above
})();
```

#### Aufzählbares Attribut

Das `enumerable`-Eigenschafts-Attribut definiert, ob die Eigenschaft von {{jsxref("Object.assign()")}} oder dem [spread](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax)-Operator berücksichtigt wird. Bei nicht-{{jsxref("Symbol")}}-Eigenschaften definiert es auch, ob es in einer {{jsxref("Statements/for...in", "for...in")}}-Schleife und {{jsxref("Object.keys()")}} erscheint oder nicht. Für weitere Informationen siehe [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).

```js
const o = {};
Object.defineProperty(o, "a", {
  value: 1,
  enumerable: true,
});
Object.defineProperty(o, "b", {
  value: 2,
  enumerable: false,
});
Object.defineProperty(o, "c", {
  value: 3,
}); // enumerable defaults to false
o.d = 4; // enumerable defaults to true when creating a property by setting it
Object.defineProperty(o, Symbol.for("e"), {
  value: 5,
  enumerable: true,
});
Object.defineProperty(o, Symbol.for("f"), {
  value: 6,
  enumerable: false,
});

for (const i in o) {
  console.log(i);
}
// Logs 'a' and 'd' (always in that order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
o.propertyIsEnumerable("d"); // true
o.propertyIsEnumerable(Symbol.for("e")); // true
o.propertyIsEnumerable(Symbol.for("f")); // false

const p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // undefined
p.d; // 4
p[Symbol.for("e")]; // 5
p[Symbol.for("f")]; // undefined
```

#### Konfigurierbares Attribut

Das `configurable`-Attribut steuert, ob die Eigenschaft vom Objekt gelöscht werden kann und ob ihre Attribute (außer `value` und `writable`) geändert werden können.

Dieses Beispiel veranschaulicht eine nicht konfigurierbare Accessor-Eigenschaft.

```js
const o = {};
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", {
  configurable: true,
}); // throws a TypeError
Object.defineProperty(o, "a", {
  enumerable: true,
}); // throws a TypeError
Object.defineProperty(o, "a", {
  set() {},
}); // throws a TypeError (set was undefined previously)
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
}); // throws a TypeError
// (even though the new get does exactly the same thing)
Object.defineProperty(o, "a", {
  value: 12,
}); // throws a TypeError
// ('value' can be changed when 'configurable' is false, but only when the property is a writable data property)

console.log(o.a); // 1
delete o.a; // Nothing happens; throws an error in strict mode
console.log(o.a); // 1
```

Wenn das `configurable`-Attribut von `o.a` `true` gewesen wäre, würden keine der Fehler ausgelöst und die Eigenschaft wäre am Ende gelöscht worden.

Dieses Beispiel veranschaulicht eine nicht konfigurierbare, aber schreibbare Dateneigenschaft. Der `value` der Eigenschaft kann immer noch geändert werden, und `writable` kann weiterhin von `true` auf `false` umgeschaltet werden.

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: true,
  configurable: false,
});
console.log(o.b); // undefined
Object.defineProperty(o, "b", {
  value: 1,
}); // Even when configurable is false, because the object is writable, we may still replace the value
console.log(o.b); // 1
o.b = 2; // We can change the value with assignment operators as well
console.log(o.b); // 2
// Toggle the property's writability
Object.defineProperty(o, "b", {
  writable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: because the property is neither writable nor configurable, it cannot be modified
// At this point, there's no way to further modify 'b'
// or restore its writability
```

Dieses Beispiel veranschaulicht eine konfigurierbare, aber nicht schreibbare Dateneigenschaft. Der `value` der Eigenschaft kann immer noch mit `defineProperty` ersetzt werden (aber nicht mit Zuweisungsoperatoren), und `writable` kann umgeschaltet werden.

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: true,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // We can replace the value with defineProperty
console.log(o.b); // 1
o.b = 2; // throws TypeError in strict mode: cannot change a non-writable property's value with assignment
```

Dieses Beispiel veranschaulicht eine nicht konfigurierbare und nicht schreibbare Dateneigenschaft. Es gibt keine Möglichkeit, ein Attribut der Eigenschaft zu aktualisieren, einschließlich ihres `value`.

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: the property cannot be modified because it is neither writable nor configurable.
```

### Hinzufügen von Eigenschaften und Standardwerten

Es ist wichtig, die Art und Weise, wie Standardwerte von Attributen angewendet werden, zu berücksichtigen. Es gibt oft Unterschiede zwischen der Verwendung von [property accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), um einen Wert zuzuweisen, und der Verwendung von `Object.defineProperty()`, wie im folgenden Beispiel gezeigt.

```js
const o = {};

o.a = 1;
// is equivalent to:
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// On the other hand,
Object.defineProperty(o, "a", { value: 1 });
// is equivalent to:
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### Benutzerdefinierte Setter und Getter

Das folgende Beispiel zeigt, wie ein selbstarchivierendes Objekt implementiert werden kann. Wenn die `temperature`-Eigenschaft gesetzt wird, erhält das `archive`-Array einen Log-Eintrag.

```js
function Archiver() {
  let temperature = null;
  const archive = [];

  Object.defineProperty(this, "temperature", {
    get() {
      console.log("get!");
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = () => archive;
}

const arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

In diesem Beispiel gibt ein Getter immer denselben Wert zurück.

```js
const pattern = {
  get() {
    return "I always return this string, whatever you have assigned";
  },
  set() {
    this.myName = "this is my name string";
  },
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, "myProperty", pattern);
}

const instance = new TestDefineSetAndGet();
instance.myProperty = "test";
console.log(instance.myProperty);
// I always return this string, whatever you have assigned

console.log(instance.myName); // this is my name string
```

### Vererbung von Eigenschaften

Wenn eine Accessor-Eigenschaft geerbt wird, werden ihre `get`- und `set`-Methoden aufgerufen, wenn auf die Eigenschaft in nachfolgenden Objekten zugegriffen wird und sie modifiziert wird. Wenn diese Methoden eine Variable verwenden, um den Wert zu speichern, wird dieser Wert von allen Objekten gemeinsam genutzt.

```js
function MyClass() {}

let value;
Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // 1
```

Dies kann durch Speichern des Wertes in einer anderen Eigenschaft behoben werden. In den `get`- und `set`-Methoden zeigt `this` auf das Objekt, das zum Zugreifen oder Modifizieren der Eigenschaft verwendet wird.

```js
function MyClass() {}

Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return this.storedX;
  },
  set(x) {
    this.storedX = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // undefined
```

Im Gegensatz zu Accessor-Eigenschaften werden Dateneigenschaften immer auf dem Objekt selbst, nicht auf einem Prototyp, gesetzt. Wenn jedoch eine nicht schreibbare Dateneigenschaft geerbt wird, wird sie daran gehindert, auf dem Objekt modifiziert zu werden.

```js
function MyClass() {}

MyClass.prototype.x = 1;
Object.defineProperty(MyClass.prototype, "y", {
  writable: false,
  value: 1,
});

const a = new MyClass();
a.x = 2;
console.log(a.x); // 2
console.log(MyClass.prototype.x); // 1
a.y = 2; // Ignored, throws in strict mode
console.log(a.y); // 1
console.log(MyClass.prototype.y); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Reflect.defineProperty()")}}
