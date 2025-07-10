---
title: Object.defineProperty()
short-title: defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Object.defineProperty()`**-Methode definiert eine neue Eigenschaft direkt auf einem Objekt oder modifiziert eine bestehende Eigenschaft an einem Objekt und gibt das Objekt zurück.

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
  - : Ein String oder {{jsxref("Symbol")}}, der den Schlüssel der zu definierenden oder zu modifizierenden Eigenschaft angibt.
- `descriptor`
  - : Der Deskriptor für die Eigenschaft, die definiert oder modifiziert wird.

### Rückgabewert

Das Objekt, das der Funktion übergeben wurde, mit der hinzugefügten oder modifizierten Eigenschaft.

## Beschreibung

`Object.defineProperty()` ermöglicht eine präzise Hinzufügung oder Modifikation einer Eigenschaft an einem Objekt. Normale Eigenschaftszuweisungen durch [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment) erzeugen Eigenschaften, die bei der Enumeration von Eigenschaften erscheinen ({{jsxref("Statements/for...in", "for...in")}}, {{jsxref("Object.keys()")}}, etc.), deren Werte geändert werden können und die {{jsxref("Operators/delete", "gelöscht", "", 1)}} werden können. Diese Methode ermöglicht es, diese zusätzlichen Details von ihren Standardwerten zu ändern. Standardmäßig sind die mit `Object.defineProperty()` hinzugefügten Eigenschaften nicht schreibbar, nicht aufzählbar und nicht konfigurierbar. Darüber hinaus verwendet `Object.defineProperty()` die interne Methode [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty), anstelle von [`[[Set]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set), sodass es keine [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) aufruft, selbst wenn die Eigenschaft bereits vorhanden ist.

Eigenschaftsdeskriptoren in Objekten sind in zwei Hauptarten erhältlich: Daten-Deskriptoren und Accessor-Deskriptoren. Ein **Daten-Deskriptor** ist eine Eigenschaft mit einem Wert, der möglicherweise schreibbar ist oder nicht. Ein **Accessor-Deskriptor** ist eine Eigenschaft, die durch ein Getter-Setter-Paar von Funktionen beschrieben wird. Ein Deskriptor muss eine dieser beiden Arten sein; er kann nicht beides sein.

Sowohl Daten- als auch Accessor-Deskriptoren sind Objekte. Sie teilen die folgenden optionalen Schlüssel (bitte beachten Sie: die hier erwähnten **Standards** gelten beim Definieren von Eigenschaften mit `Object.defineProperty()`):

- `configurable`
  - : Wenn dies auf `false` gesetzt ist,
    - kann der Typ dieser Eigenschaft nicht zwischen Dateneigenschaft und Accessor-Eigenschaft geändert werden, und
    - die Eigenschaft kann nicht gelöscht werden, und
    - andere Attribute ihres Deskriptors können nicht geändert werden (wenn es jedoch ein Daten-Deskriptor mit `writable: true` ist, kann der `value` geändert werden, und `writable` kann auf `false` geändert werden).

    **Standardmäßig `false`.**

- `enumerable`
  - : `true` wenn und nur wenn diese Eigenschaft bei der Enumeration der Eigenschaften des entsprechenden Objekts erscheint. **Standardmäßig `false`.**

Ein **Daten-Deskriptor** hat auch die folgenden optionalen Schlüssel:

- `value`
  - : Der Wert, der mit der Eigenschaft assoziiert ist. Kann ein beliebiger gültiger JavaScript-Wert sein (Nummer, Objekt, Funktion, etc.). **Standardmäßig {{jsxref("undefined")}}.**
- `writable`
  - : `true` wenn der Wert, der mit der Eigenschaft assoziiert ist, mit einem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators) geändert werden kann. **Standardmäßig `false`.**

Ein **Accessor-Deskriptor** hat auch die folgenden optionalen Schlüssel:

- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Getter vorhanden ist. Wenn die Eigenschaft zugegriffen wird, wird diese Funktion ohne Argumente und mit `this` auf das Objekt gesetzt, durch das die Eigenschaft zugegriffen wird (dies muss nicht das Objekt sein, auf dem die Eigenschaft definiert ist, aufgrund von Vererbung). Der Rückgabewert wird als der Wert der Eigenschaft verwendet. **Standardmäßig {{jsxref("undefined")}}.**
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn kein Setter vorhanden ist. Wenn die Eigenschaft zugewiesen wird, wird diese Funktion mit einem Argument (dem Wert, der der Eigenschaft zugewiesen wird) aufgerufen und mit `this` auf das Objekt gesetzt, durch das die Eigenschaft zugewiesen wird. **Standardmäßig {{jsxref("undefined")}}.**

Wenn ein Deskriptor keinen der `value`, `writable`, `get` und `set` Schlüssel hat, wird er als Daten-Deskriptor behandelt. Wenn ein Deskriptor sowohl ein Daten-Deskriptor ist (weil er `value` oder `writable` hat) als auch ein Accessor-Deskriptor (weil er `get` oder `set` hat), wird eine Ausnahme ausgelöst.

Diese Attribute müssen nicht unbedingt die eigenen Eigenschaften des Deskriptors sein. Geerbte Eigenschaften werden ebenfalls berücksichtigt. Um sicherzustellen, dass diese Standardeinstellungen beibehalten werden, können Sie bestehende Objekte in der Prototyp-Kette des Deskriptorobjekts im Voraus einfrieren, alle Optionen explizit angeben oder ein [Objekt mit null-Prototypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erstellen.

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

Wenn das alte Deskriptor das Attribut `configurable` auf `false` gesetzt hatte, wird die Eigenschaft als _nicht konfigurierbar_ bezeichnet. Es ist nicht möglich, ein Attribut einer nicht konfigurierbaren Accessor-Eigenschaft zu ändern, und es ist nicht möglich, zwischen Daten- und Accessor-Eigenschaftstypen zu wechseln. Bei Dateneigenschaften mit `writable: true` ist es möglich, den Wert zu ändern und das `writable`-Attribut von `true` auf `false` zu ändern. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn versucht wird, nicht konfigurierbare Eigenschaftsattribute zu ändern (außer `value` und `writable`, falls zulässig), es sei denn, es wird ein Wert definiert, der dem ursprünglichen Wert einer Dateneigenschaft entspricht.

Wenn die aktuelle Eigenschaft konfigurierbar ist, wird durch die Definition eines Attributs auf `undefined` das Attribut effektiv gelöscht. Wenn `o.k` zum Beispiel eine Accessor-Eigenschaft ist, entfernt `Object.defineProperty(o, "k", { set: undefined })` den Setter, wodurch `k` nur einen Getter hat und schreibgeschützt wird. Wenn ein Attribut im neuen Deskriptor fehlt, bleibt der Wert des alten Deskriptor-Attributs erhalten (es wird nicht implizit auf `undefined` neu definiert). Es ist möglich, zwischen Daten- und Accessor-Eigenschaft zu wechseln, indem man einen Deskriptor eines anderen "Geschmacks" angibt. Wenn der neue Deskriptor beispielsweise ein Daten-Deskriptor (mit `value` oder `writable`) ist, werden die `get`- und `set`-Attribute des ursprünglichen Deskriptors beide entfernt.

## Beispiele

### Erstellen einer Eigenschaft

Wenn die angegebene Eigenschaft nicht im Objekt existiert, erstellt `Object.defineProperty()` eine neue Eigenschaft, wie beschrieben. Felder können im Deskriptor weggelassen werden und Standardwerte für diese Felder werden eingegeben.

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

### Modifizieren einer Eigenschaft

Beim Modifizieren einer bestehenden Eigenschaft bestimmt die aktuelle Eigenschaften-Konfiguration, ob der Operator erfolgreich ist, nichts tut oder einen {{jsxref("TypeError")}} auslöst.

#### Schreibbares Attribut

Wenn das Attribut `writable` der Eigenschaft `false` ist, wird die Eigenschaft als "nicht schreibbar" bezeichnet. Sie kann nicht neu zugewiesen werden. Der Versuch, einer nicht schreibbaren Eigenschaft einen neuen Wert zuzuweisen, ändert sie nicht und führt im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) zu einem Fehler.

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

Das Attribut `enumerable` bestimmt, ob die Eigenschaft von {{jsxref("Object.assign()")}} oder dem [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) berücksichtigt wird. Für nicht-{{jsxref("Symbol")}}-Eigenschaften bestimmt es auch, ob sie in einer {{jsxref("Statements/for...in", "for...in")}}-Schleife und {{jsxref("Object.keys()")}} angezeigt wird oder nicht. Für weitere Informationen siehe [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).

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

Das Attribut `configurable` steuert, ob die Eigenschaft vom Objekt gelöscht und ob ihre Attribute (außer `value` und `writable`) geändert werden können.

Dieses Beispiel illustriert eine nicht konfigurierbare Accessor-Eigenschaft.

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

Wenn das `configurable`-Attribut von `o.a` `true` gewesen wäre, wären keine Fehler aufgetreten und die Eigenschaft wäre am Ende gelöscht worden.

Dieses Beispiel illustriert eine nicht konfigurierbare, aber schreibbare Daten-Eigenschaft. Der `value` der Eigenschaft kann immer noch geändert werden, und `writable` kann immer noch von `true` auf `false` umgeschaltet werden.

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

Dieses Beispiel illustriert eine konfigurierbare, aber nicht schreibbare Daten-Eigenschaft. Der `value` der Eigenschaft kann immer noch mit `defineProperty` ersetzt werden (aber nicht mit Zuweisungsoperatoren), und `writable` kann umgeschaltet werden.

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

Dieses Beispiel illustriert eine nicht konfigurierbare und nicht schreibbare Daten-Eigenschaft. Es gibt keine Möglichkeit, ein Attribut der Eigenschaft einschließlich ihres `value` zu aktualisieren.

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

Es ist wichtig zu beachten, wie Standardwerte von Attributen angewendet werden. Es gibt oft einen Unterschied zwischen der Verwendung von [Eigenschafts-Zugriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zur Wertzuweisung und der Verwendung von `Object.defineProperty()`, wie im folgenden Beispiel gezeigt.

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

Das folgende Beispiel zeigt, wie man ein selbstarchivierendes Objekt implementiert. Wenn die Eigenschaft `temperature` gesetzt wird, erhält das `archive`-Array einen Protokolleintrag.

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

Wenn eine Accessor-Eigenschaft geerbt wird, werden ihre `get`- und `set`-Methoden aufgerufen, wenn die Eigenschaft auf Nachkommen-Objekten zugegriffen oder geändert wird. Wenn diese Methoden eine Variable verwenden, um den Wert zu speichern, wird dieser Wert von allen Objekten geteilt.

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

Dies kann behoben werden, indem der Wert in einer anderen Eigenschaft gespeichert wird. In `get`- und `set`-Methoden zeigt `this` auf das Objekt, das zum Zugriff oder zur Modifikation der Eigenschaft verwendet wird.

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

Im Gegensatz zu Accessor-Eigenschaften werden Daten-Eigenschaften immer auf dem Objekt selbst gesetzt, nicht auf einem Prototyp. Wenn jedoch eine nicht schreibbare Daten-Eigenschaft geerbt wird, bleibt es dennoch verboten, diese auf dem Objekt zu ändern.

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

- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Reflect.defineProperty()")}}
