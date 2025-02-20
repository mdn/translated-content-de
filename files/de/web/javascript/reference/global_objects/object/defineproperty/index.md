---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Object.defineProperty()`** definiert eine neue Eigenschaft direkt an einem Objekt oder modifiziert eine vorhandene Eigenschaft an einem Objekt und gibt das Objekt zurück.

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
  - : Das Objekt, bei dem die Eigenschaft definiert werden soll.
- `prop`
  - : Ein String oder ein {{jsxref("Symbol")}}, das den Schlüssel der Eigenschaft angibt, die definiert oder geändert werden soll.
- `descriptor`
  - : Der Deskriptor für die Eigenschaft, die definiert oder geändert wird.

### Rückgabewert

Das an die Funktion übergebene Objekt, mit der hinzugefügten oder geänderten Eigenschaft.

## Beschreibung

`Object.defineProperty()` ermöglicht eine präzise Hinzufügung oder Modifikation einer Eigenschaft an einem Objekt. Das normale Hinzufügen von Eigenschaften durch [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment) erzeugt Eigenschaften, die während der Eigenschaftsaufzählung sichtbar sind ({{jsxref("Statements/for...in", "for...in")}}, {{jsxref("Object.keys()")}} usw.), deren Werte geändert werden können und die {{jsxref("Operators/delete", "gelöscht", "", 1)}} werden können. Diese Methode erlaubt, dass diese zusätzlichen Details von ihren Standardwerten geändert werden können. Standardmäßig sind Eigenschaften, die mit `Object.defineProperty()` hinzugefügt werden, nicht schreibbar, nicht aufzählbar und nicht konfigurierbar. Darüber hinaus verwendet `Object.defineProperty()` die interne Methode [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) anstelle von [`[[Set]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set), daher ruft es keine [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) auf, selbst wenn die Eigenschaft bereits vorhanden ist.

Eigenschaftsdeskriptoren in Objekten gibt es in zwei Hauptarten: Datendeskriptoren und Zugriffsbeschreibungen. Ein **Datendeskriptor** ist eine Eigenschaft mit einem Wert, der schreibbar sein kann oder nicht. Ein **Zugriffsdeskriptor** ist eine Eigenschaft, die durch ein Getter-Setter-Paar von Funktionen beschrieben wird. Ein Deskriptor muss einer dieser beiden Typen sein; er kann nicht beides sein.

Sowohl Daten- als auch Zugriffsdeskriptoren sind Objekte. Sie teilen die folgenden optionalen Schlüssel (bitte beachten Sie: Die hier genannten **Standardwerte** gelten, wenn Eigenschaften mit `Object.defineProperty()` definiert werden):

- `configurable`

  - : Wenn auf `false` gesetzt,

    - kann der Typ dieser Eigenschaft nicht zwischen Daten- und Zugriffseigenschaft geändert werden, und
    - die Eigenschaft kann nicht gelöscht werden, und
    - andere Attribute ihres Deskriptors können nicht geändert werden (wenn es sich jedoch um einen Datendeskriptor mit `writable: true` handelt, kann der `value` geändert werden und `writable` kann auf `false` geändert werden).

    **Standardwert ist `false`.**

- `enumerable`
  - : `true`, wenn und nur wenn diese Eigenschaft bei der Aufzählung der Eigenschaften des entsprechenden Objekts angezeigt wird. **Standardwert ist `false`.**

Ein **Datendeskriptor** hat auch die folgenden optionalen Schlüssel:

- `value`
  - : Der Wert, der mit der Eigenschaft assoziiert ist. Kann jeder gültige JavaScript-Wert sein (Zahl, Objekt, Funktion, etc.). **Standardwert ist {{jsxref("undefined")}}.**
- `writable`
  - : `true`, wenn der Wert, der mit der Eigenschaft assoziiert ist, mit einem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators) geändert werden kann. **Standardwert ist `false`.**

Ein **Zugriffsdeskriptor** hat ebenfalls die folgenden optionalen Schlüssel:

- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Getter vorhanden ist. Wenn die Eigenschaft aufgerufen wird, wird diese Funktion ohne Argumente aufgerufen und mit `this` als dem Objekt, durch das die Eigenschaft aufgerufen wird (dies ist möglicherweise nicht das Objekt, an dem die Eigenschaft definiert ist, aufgrund von Vererbung). Der Rückgabewert wird als Wert der Eigenschaft verwendet. **Standardwert ist {{jsxref("undefined")}}.**
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Setter vorhanden ist. Wenn die Eigenschaft zugewiesen wird, wird diese Funktion mit einem Argument aufgerufen (dem Wert, der der Eigenschaft zugewiesen wird) und mit `this` als dem Objekt, durch das die Eigenschaft zugewiesen wird. **Standardwert ist {{jsxref("undefined")}}.**

Wenn ein Deskriptor keine der Schlüssel `value`, `writable`, `get` und `set` enthält, wird er als Datendeskriptor behandelt. Wenn ein Deskriptor sowohl \[`value` oder `writable`] als auch \[`get` oder `set`] Schlüssel hat, wird eine Ausnahme ausgelöst.

Diese Attribute müssen nicht unbedingt die eigenen Eigenschaften des Deskriptors sein. Geerbte Eigenschaften werden ebenfalls berücksichtigt. Um sicherzustellen, dass diese Standardwerte erhalten bleiben, kann es hilfreich sein, vorhandene Objekte in der Prototypkette des Deskriptorobjekts im Voraus einzufrieren, alle Optionen explizit festzulegen oder ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) zu erstellen.

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

Wenn die Eigenschaft bereits existiert, versucht `Object.defineProperty()` die Eigenschaft entsprechend den Werten im Deskriptor und der aktuellen Konfiguration der Eigenschaft zu ändern.

Wenn das alte Deskriptorattribut `configurable` auf `false` gesetzt war, wird die Eigenschaft als _nicht konfigurierbar_ bezeichnet. Es ist nicht möglich, ein Attribut einer nicht konfigurierbaren Zugriffseigenschaft zu ändern, und es ist nicht möglich, zwischen Typen von Daten- und Zugriffseigenschaften zu wechseln. Bei Dateneigenschaften mit `writable: true` ist es möglich, den Wert zu ändern und das Attribut `writable` von `true` auf `false` zu ändern. Es wird ein {{jsxref("TypeError")}} ausgelöst, wenn versucht wird, nicht änderbare Attribute von Eigenschaften zu ändern (außer `value` und `writable`, falls erlaubt), es sei denn, einem Wert, der dem ursprünglichen Wert einer Dateneigenschaft entspricht, wird derselbe Wert zugewiesen.

Wenn die aktuelle Eigenschaft konfigurierbar ist, führt die Definition eines Attributs auf `undefined` zu seiner Löschung. Zum Beispiel, wenn `o.k` eine Zugriffseigenschaft ist, entfernt `Object.defineProperty(o, "k", { set: undefined })` den Setter, so dass `k` nur einen Getter hat und schreibgeschützt wird. Wenn ein Attribut in der neuen Beschreibungsdefinition fehlt, bleibt der Wert des alten Beschreibungsattributs erhalten (er wird nicht implizit auf `undefined` neu definiert). Es ist möglich, zwischen Daten- und Zugriffseigenschaften zu wechseln, indem ein Deskriptor eines anderen "Typs" angegeben wird. Zum Beispiel, wenn der neue Deskriptor ein Datendeskriptor ist (mit `value` oder `writable`), werden die `get`- und `set`-Attribute des ursprünglichen Deskriptors beide entfernt.

## Beispiele

### Eine Eigenschaft erstellen

Wenn die angegebene Eigenschaft nicht im Objekt existiert, erstellt `Object.defineProperty()` eine neue Eigenschaft entsprechend der Beschreibung. Felder können im Deskriptor weggelassen werden, und Standardwerte für diese Felder werden eingefügt.

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

Beim Ändern einer bestehenden Eigenschaft bestimmt die aktuelle Eigentumskonfiguration, ob der Vorgang erfolgreich ist, nichts tut oder einen {{jsxref("TypeError")}} auslöst.

#### Schreibbares Attribut

Wenn das Attribut `writable` der Eigenschaft `false` ist, wird die Eigenschaft als "nicht schreibbar" bezeichnet. Sie kann nicht neu zugewiesen werden. Ein Versuch, einer nicht schreibbaren Eigenschaft zuzuweisen, ändert sie nicht und führt im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) zu einem Fehler.

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

Das Attribut `enumerable` definiert, ob die Eigenschaft von {{jsxref("Object.assign()")}} oder dem [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) berücksichtigt wird. Für Nicht-{{jsxref("Symbol")}}-Eigenschaften definiert es auch, ob sie in einer {{jsxref("Statements/for...in", "for...in")}}-Schleife und {{jsxref("Object.keys()")}} erscheinen. Für weitere Informationen, siehe [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties).

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

Das Attribut `configurable` steuert, ob die Eigenschaft aus dem Objekt gelöscht werden kann und ob ihre Attribute (außer `value` und `writable`) geändert werden können.

Dieses Beispiel illustriert eine nicht konfigurierbare Zugriffseigenschaft.

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

Wäre das `configurable`-Attribut von `o.a` `true` gewesen, wären keine Fehler aufgetreten, und die Eigenschaft wäre am Ende gelöscht worden.

Dieses Beispiel illustriert eine nicht konfigurierbare, aber schreibbare Dateneigenschaft. Der Wert der Eigenschaft kann weiterhin geändert werden, und `writable` kann von `true` auf `false` geändert werden.

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

Dieses Beispiel illustriert eine konfigurierbare, aber nicht schreibbare Dateneigenschaft. Der Wert der Eigenschaft kann weiterhin mit `defineProperty` ersetzt werden (aber nicht mit Zuweisungsoperatoren), und `writable` kann umgeschaltet werden.

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

Dieses Beispiel illustriert eine nicht konfigurierbare und nicht schreibbare Dateneigenschaft. Es gibt keine Möglichkeit, Attribute der Eigenschaft zu aktualisieren, einschließlich ihres Wertes.

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

Es ist wichtig, den Unterschied zwischen den Standardwerten der Attribute zu berücksichtigen. Es gibt oft einen Unterschied dazwischen, [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zu verwenden, um einen Wert zuzuweisen, und `Object.defineProperty()` zu verwenden, wie im folgenden Beispiel dargestellt.

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

Das folgende Beispiel zeigt, wie ein selbstdokumentierendes Objekt implementiert wird. Wenn die Eigenschaft `temperature` gesetzt wird, erhält das `archive`-Array einen Logeintrag.

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

Wenn eine Zugriffseigenschaft vererbt wird, werden ihre `get`- und `set`-Methoden aufgerufen, wenn die Eigenschaft auf abgeleiteten Objekten abgefragt und geändert wird. Wenn diese Methoden eine Variable verwenden, um den Wert zu speichern, wird dieser Wert von allen Objekten gemeinsam genutzt.

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

Dies kann behoben werden, indem der Wert in einer anderen Eigenschaft gespeichert wird. In `get`- und `set`-Methoden verweist `this` auf das Objekt, das die Eigenschaft abfragt oder ändert.

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

Im Gegensatz zu Zugriffseigenschaften werden Daten-Eigenschaften immer am Objekt selbst gesetzt, nicht an einem Prototyp. Wenn jedoch eine nicht schreibbare Dateneigenschaft vererbt wird, kann sie weiterhin nicht am Objekt geändert werden.

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

- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Reflect.defineProperty()")}}
