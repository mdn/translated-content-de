---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die statische Methode **`Object.defineProperty()`** definiert eine neue Eigenschaft direkt auf einem Objekt oder ändert eine vorhandene Eigenschaft auf einem Objekt und gibt das Objekt zurück.

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
  - : Ein String oder {{jsxref("Symbol")}}, der den Schlüssel der zu definierenden oder zu ändernden Eigenschaft angibt.
- `descriptor`
  - : Der Deskriptor für die zu definierende oder zu ändernde Eigenschaft.

### Rückgabewert

Das Objekt, das an die Funktion übergeben wurde, mit der hinzugefügten oder geänderten Eigenschaft.

## Beschreibung

`Object.defineProperty()` ermöglicht das präzise Hinzufügen oder Ändern einer Eigenschaft auf einem Objekt. Die normale Eigenschaftszuweisung über [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment) erstellt Eigenschaften, die während der Enumerierung von Eigenschaften angezeigt werden ({{jsxref("Statements/for...in", "for...in")}}, {{jsxref("Object.keys()")}} usw.), deren Werte geändert werden können und die möglicherweise {{jsxref("Operators/delete", "gelöscht", "", 1)}} werden können. Diese Methode ermöglicht es, diese zusätzlichen Details von ihren Standardwerten zu ändern. Standardmäßig sind Eigenschaften, die mit `Object.defineProperty()` hinzugefügt werden, nicht beschreibbar, nicht aufzählbar und nicht konfigurierbar. Darüber hinaus verwendet `Object.defineProperty()` die interne Methode [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty), anstelle von [`[[Set]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set), sodass keine [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) aufgerufen werden, selbst wenn die Eigenschaft bereits vorhanden ist.

Eigenschaftsdeskriptoren, die in Objekten vorhanden sind, kommen in zwei Hauptausprägungen: Daten-Deskriptoren und Accessor-Deskriptoren. Ein **Daten-Deskriptor** ist eine Eigenschaft mit einem Wert, der möglicherweise beschreibbar ist oder nicht. Ein **Accessor-Deskriptor** ist eine Eigenschaft, die durch ein Getter-Setter-Paar von Funktionen beschrieben wird. Ein Deskriptor muss eine dieser beiden Ausprägungen sein; er kann nicht beide sein.

Sowohl Daten- als auch Accessor-Deskriptoren sind Objekte. Sie teilen die folgenden optionalen Schlüssel (bitte beachten Sie: Die **Standardwerte**, die hier erwähnt werden, gelten im Falle der Definition von Eigenschaften mit `Object.defineProperty()`):

- `configurable`

  - : Wenn dieser auf `false` gesetzt ist,

    - kann der Typ dieser Eigenschaft nicht zwischen Daten- und Accessor-Eigenschaft geändert werden, und
    - die Eigenschaft kann nicht gelöscht werden, und
    - andere Attribute ihres Deskriptors können nicht geändert werden (wenn es sich jedoch um einen Daten-Deskriptor mit `writable: true` handelt, kann der `value` geändert werden, und `writable` kann auf `false` geändert werden).

    **Standardmäßig `false`.**

- `enumerable`
  - : `true`, wenn und nur wenn diese Eigenschaft während der Enumeration der Eigenschaften des entsprechenden Objekts angezeigt wird. **Standardmäßig `false`.**

Ein **Daten-Deskriptor** hat auch die folgenden optionalen Schlüssel:

- `value`
  - : Der der Eigenschaft zugeordnete Wert. Kann jeder gültige JavaScript-Wert sein (Zahl, Objekt, Funktion usw.). **Standardmäßig {{jsxref("undefined")}}.**
- `writable`
  - : `true`, wenn der der Eigenschaft zugeordnete Wert mit einem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators) geändert werden kann. **Standardmäßig `false`.**

Ein **Accessor-Deskriptor** hat auch die folgenden optionalen Schlüssel:

- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Getter gibt. Wenn auf die Eigenschaft zugegriffen wird, wird diese Funktion ohne Argumente aufgerufen und mit `this` auf das Objekt gesetzt, über das auf die Eigenschaft zugegriffen wird (dies ist möglicherweise nicht das Objekt, auf dem die Eigenschaft definiert ist, aufgrund der Vererbung). Der Rückgabewert wird als Wert der Eigenschaft verwendet. **Standardmäßig {{jsxref("undefined")}}.**
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Setter gibt. Wenn die Eigenschaft zugewiesen wird, wird diese Funktion mit einem Argument (dem der Eigenschaft zugewiesenen Wert) aufgerufen und mit `this` auf das Objekt gesetzt, über das die Eigenschaft zugewiesen wird. **Standardmäßig {{jsxref("undefined")}}.**

Wenn ein Deskriptor keinen der Schlüssel `value`, `writable`, `get` und `set` hat, wird er als Daten-Deskriptor behandelt. Wenn ein Deskriptor sowohl \[`value` oder `writable`] als auch \[`get` oder `set`] Schlüssel hat, wird eine Ausnahme ausgelöst.

Diese Attribute sind nicht unbedingt die eigenen Eigenschaften des Deskriptors. Vererbte Eigenschaften werden ebenfalls in Betracht gezogen. Um sicherzustellen, dass diese Standardwerte erhalten bleiben, sollten Sie vorhandene Objekte in der Prototypen-Kette des Deskriptors im Vorfeld einfrieren, alle Optionen explizit angeben oder ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erstellen.

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

// 3. Recycling same object
function withValue(value) {
  const d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value,
    });

  // avoiding duplicate operation for assigning value
  if (d.value !== value) d.value = value;

  return d;
}
// and
Object.defineProperty(obj, "key", withValue("static"));

// if freeze is available, prevents adding or
// removing the object prototype properties
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);
```

Wenn die Eigenschaft bereits existiert, versucht `Object.defineProperty()`, die Eigenschaft gemäß den Werten im Deskriptor und der aktuellen Konfiguration der Eigenschaft zu ändern.

Wenn das alte Deskriptor sein `configurable`-Attribut auf `false` gesetzt hatte, wird die Eigenschaft als _nicht konfigurierbar_ bezeichnet. Es ist nicht möglich, ein Attribut einer nicht konfigurierbaren Accessor-Eigenschaft zu ändern, und es ist nicht möglich, zwischen Daten- und Accessor-Eigenschaftstypen zu wechseln. Für Dateneigenschaften mit `writable: true` ist es möglich, den Wert zu ändern und das Attribut `writable` von `true` auf `false` zu ändern. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn versucht wird, nicht konfigurierbare Eigenschaftsattribute (außer `value` und `writable`, wenn erlaubt) zu ändern, es sei denn, es wird ein Wert definiert, der dem ursprünglichen Wert für eine Dateneigenschaft entspricht.

Wenn die aktuelle Eigenschaft konfigurierbar ist, führt die Definition eines Attributs auf `undefined` effektiv zu seiner Löschung. Wenn zum Beispiel `o.k` eine Accessor-Eigenschaft ist, wird `Object.defineProperty(o, "k", { set: undefined })` den Setter entfernen, wodurch `k` nur einen Getter hat und schreibgeschützt wird. Wenn ein Attribut im neuen Deskriptor fehlt, bleibt der Wert des alten Deskriptors erhalten (es wird nicht implizit auf `undefined` zurückgesetzt). Es ist möglich, zwischen Daten- und Accessor-Eigenschaft zu wechseln, indem man einen Deskriptor einer anderen "Ausprägung" angibt. Zum Beispiel, wenn der neue Deskriptor ein Daten-Deskriptor ist (mit `value` oder `writable`), werden die `get`- und `set`-Attribute des ursprünglichen Deskriptors beide entfernt.

## Beispiele

### Eine Eigenschaft erstellen

Wenn die angegebene Eigenschaft nicht im Objekt vorhanden ist, erstellt `Object.defineProperty()` eine neue Eigenschaft gemäß der Beschreibung. Felder können im Deskriptor weggelassen werden, und Standardwerte für diese Felder werden eingesetzt.

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

### Eine Eigenschaft ändern

Beim Ändern einer vorhandenen Eigenschaft bestimmt die aktuelle Eigenschaftskonfiguration, ob der Operator erfolgreich ist, nichts tut oder einen {{jsxref("TypeError")}} auslöst.

#### Schreibbares Attribut

Wenn das `writable`-Eigenschaftsmerkmal `false` ist, wird die Eigenschaft als "nicht beschreibbar" bezeichnet. Sie kann nicht neu zugewiesen werden. Der Versuch, eine nicht beschreibbare Eigenschaft zu schreiben, ändert sie nicht und führt in [strengem Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) zu einem Fehler.

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

Das `enumerable`-Eigenschaftsmerkmal definiert, ob die Eigenschaft von {{jsxref("Object.assign()")}} oder dem [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) berücksichtigt wird. Bei Nicht-{{jsxref("Symbol")}}-Eigenschaften definiert es auch, ob sie in einer {{jsxref("Statements/for...in", "for...in")}}-Schleife und {{jsxref("Object.keys()")}} angezeigt wird oder nicht. Für weitere Informationen siehe [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).

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

Das `configurable`-Attribut steuert, ob die Eigenschaft aus dem Objekt gelöscht werden kann und ob ihre Attribute (außer `value` und `writable`) geändert werden können.

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

Wenn das `configurable`-Attribut von `o.a` `true` gewesen wäre, würden keine der Fehler ausgelöst werden und die Eigenschaft würde am Ende gelöscht.

Dieses Beispiel veranschaulicht eine nicht konfigurierbare, aber beschreibbare Dateneigenschaft. Der `value` der Eigenschaft kann immer noch geändert werden, und `writable` kann weiterhin von `true` auf `false` umgeschaltet werden.

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

Dieses Beispiel veranschaulicht eine konfigurierbare, aber nicht beschreibbare Dateneigenschaft. Der `value` der Eigenschaft kann weiterhin mit `defineProperty` ersetzt werden (aber nicht mit Zuweisungsoperatoren), und `writable` kann umgeschaltet werden.

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

Dieses Beispiel veranschaulicht eine nicht konfigurierbare und nicht beschreibbare Dateneigenschaft. Es gibt keine Möglichkeit, irgendein Attribut der Eigenschaft zu aktualisieren, einschließlich ihres `value`.

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

### Eigenschaften hinzufügen und Standardwerte

Es ist wichtig, die Art und Weise zu bedenken, wie Standardwerte von Attributen angewendet werden. Es gibt oft einen Unterschied zwischen der Verwendung von [Eigenschafts-Zugriffsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zur Zuweisung eines Wertes und der Verwendung von `Object.defineProperty()`, wie im folgenden Beispiel gezeigt.

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

Das folgende Beispiel zeigt, wie man ein selbstarchivierendes Objekt implementiert. Wenn die `temperature`-Eigenschaft gesetzt wird, erhält das `archive`-Array einen Logeintrag.

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

In diesem Beispiel gibt ein Getter immer den gleichen Wert zurück.

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

Wenn eine Accessor-Eigenschaft vererbt wird, werden ihre `get`- und `set`-Methoden aufgerufen, wenn die Eigenschaft auf Nachkommenobjekten zugegriffen oder geändert wird. Wenn diese Methoden eine Variable verwenden, um den Wert zu speichern, wird dieser Wert von allen Objekten geteilt.

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

Dies kann behoben werden, indem der Wert in einer anderen Eigenschaft gespeichert wird. In `get`- und `set`-Methoden zeigt `this` auf das Objekt, das zum Zugriff oder zur Änderung der Eigenschaft verwendet wird.

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

Im Gegensatz zu Accessor-Eigenschaften werden Daten-Eigenschaften immer am Objekt selbst gesetzt, nicht an einem Prototyp. Wenn jedoch eine nicht beschreibbare Daten-Eigenschaft vererbt wird, ist es dennoch nicht möglich, sie am Objekt zu ändern.

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
