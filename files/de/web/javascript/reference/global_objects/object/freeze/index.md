---
title: Object.freeze()
short-title: freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
l10n:
  sourceCommit: 7aba7d7cba898fe4d4a88df73183bb05f71a19a2
---

Die statische Methode **`Object.freeze()`** _friert_ ein Objekt ein. Das Einfrieren eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften unveränderlich und nicht konfigurierbar. Ein eingefrorenes Objekt kann nicht mehr geändert werden: Neue Eigenschaften können nicht hinzugefügt, bestehende Eigenschaften nicht entfernt werden, ihre Enumerierbarkeit, Konfigurierbarkeit, Schreibbarkeit oder ihr Wert können nicht verändert werden, und das Prototyp-Objekt kann nicht neu zugewiesen werden. `freeze()` gibt das gleiche Objekt zurück, das übergeben wurde.

Das Einfrieren eines Objekts ist die höchste Integritätsstufe, die JavaScript bietet.

{{InteractiveExample("JavaScript Demo: Object.freeze()")}}

```js interactive-example
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42
```

## Syntax

```js-nolint
Object.freeze(obj)
```

### Parameter

- `obj`
  - : Das einzufrierende Objekt.

### Rückgabewert

Das Objekt, das der Funktion übergeben wurde.

## Beschreibung

Das Einfrieren eines Objekts entspricht dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem Ändern aller bestehenden [Eigenschafts-Deskriptoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) `configurable` auf `false` — und bei Dateneigenschaften auch `writable` auf `false`. Nichts kann zum Eigenschaftssatz eines eingefrorenen Objekts hinzugefügt oder davon entfernt werden. Jeder Versuch, dies zu tun, schlägt fehl, entweder stillschweigend oder durch Auslösen einer {{jsxref("TypeError")}}-Ausnahme (am häufigsten, aber nicht ausschließlich, im {{jsxref("Strict_mode", "strict mode", "", 1)}}).

Für die Dateneigenschaften eines eingefrorenen Objekts können ihre Werte nicht geändert werden, da die Attribute `writable` und `configurable` auf `false` gesetzt sind. Accessor-Eigenschaften (Getter und Setter) funktionieren genauso — der von dem Getter zurückgegebene Eigenschaftswert kann sich dennoch ändern, und der Setter kann weiterhin aufgerufen werden, ohne Fehler beim Setzen der Eigenschaft auszulösen. Beachten Sie, dass Werte, die Objekte sind, weiterhin geändert werden können, es sei denn, sie sind ebenfalls eingefroren. Als Objekt kann ein Array eingefroren werden; nach dem Einfrieren können seine Elemente nicht mehr verändert werden und es können keine Elemente hinzugefügt oder aus dem Array entfernt werden.

[Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sind keine Eigenschaften und haben das Konzept von Eigenschaftsdeskriptoren nicht. Das Einfrieren eines Objekts mit privaten Elementen verhindert nicht, dass sich die Werte dieser privaten Elemente ändern. (Das Einfrieren von Objekten ist normalerweise als Sicherheitsmaßnahme gegen externen Code gedacht, aber externer Code kann ohnehin nicht auf private Elemente zugreifen.) Private Elemente können nicht zu dem Objekt hinzugefügt oder daraus entfernt werden, unabhängig davon, ob das Objekt eingefroren ist oder nicht.

`freeze()` gibt das gleiche Objekt zurück, das in die Funktion eingegeben wurde. Es _erstellt nicht_ eine eingefrorene Kopie.

Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} mit Elementen wird einen {{jsxref("TypeError")}} verursachen, da sie Ansichten über den Speicher sind und definitiv andere mögliche Probleme verursachen werden:

```js
Object.freeze(new Uint8Array(0)); // No elements
// Uint8Array []

Object.freeze(new Uint8Array(1)); // Has elements
// TypeError: Cannot freeze array buffer views with elements

Object.freeze(new DataView(new ArrayBuffer(32))); // No elements
// DataView {}

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 0)); // No elements
// Float64Array []

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)); // Has elements
// TypeError: Cannot freeze array buffer views with elements
```

Beachten Sie, dass, da die standardmäßigen drei Eigenschaften (`buf.byteLength`, `buf.byteOffset` und `buf.buffer`) schreibgeschützt sind (wie bei einem {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}), es keinen Grund gibt, diese Eigenschaften einzufrieren.

Im Gegensatz zu {{jsxref("Object.seal()")}} werden bestehende Eigenschaften in mit `Object.freeze()` eingefrorenen Objekten unveränderlich, und Dateneigenschaften können nicht neu zugewiesen werden.

## Beispiele

### Objekte einfrieren

```js
const obj = {
  prop() {},
  foo: "bar",
};

// Before freezing: new properties may be added,
// and existing properties may be changed or removed
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

// Freeze.
const o = Object.freeze(obj);

// The return value is just the same object we passed in.
o === obj; // true

// The object has become frozen.
Object.isFrozen(obj); // === true

// Now any changes will fail
obj.foo = "quux"; // silently does nothing
// silently doesn't add the property
obj.quaxxor = "the friendly duck";

// In strict mode such attempts will throw TypeErrors
function fail() {
  "use strict";
  obj.foo = "sparky"; // throws a TypeError
  delete obj.foo; // throws a TypeError
  delete obj.quaxxor; // returns true since attribute 'quaxxor' was never added
  obj.sparky = "arf"; // throws a TypeError
}

fail();

// Attempted changes through Object.defineProperty;
// both statements below throw a TypeError.
Object.defineProperty(obj, "ohai", { value: 17 });
Object.defineProperty(obj, "foo", { value: "eit" });

// It's also impossible to change the prototype
// both statements below will throw a TypeError.
Object.setPrototypeOf(obj, { x: 20 });
obj.__proto__ = { x: 20 };
```

### Arrays einfrieren

```js
const a = [0];
Object.freeze(a); // The array cannot be modified now.

a[0] = 1; // fails silently

// In strict mode such attempt will throw a TypeError
function fail() {
  "use strict";
  a[0] = 1;
}

fail();

// Attempted to push
a.push(2); // throws a TypeError
```

Das eingefrorene Objekt ist _unveränderbar_. Es ist jedoch nicht notwendigerweise _konstant_. Das folgende Beispiel zeigt, dass ein eingefrorenes Objekt nicht konstant ist (Einfrieren ist oberflächlich).

```js
const obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "value";

obj1.internal.a; // 'value'
```

Um ein konstantes Objekt zu sein, muss der gesamte Referenzgraph (direkte und indirekte Verweise auf andere Objekte) nur auf unveränderliche eingefrorene Objekte verweisen. Das eingefrorene Objekt wird als unveränderlich bezeichnet, weil der gesamte Objekt-_Zustand_ (Werte und Verweise auf andere Objekte) innerhalb des gesamten Objekts festgelegt ist. Beachten Sie, dass Zeichenketten, Zahlen und Booleans immer unveränderlich sind und dass Funktionen und Arrays Objekte sind.

### Tiefes Einfrieren

Das Ergebnis des Aufrufs von `Object.freeze(object)` gilt nur für die unmittelbaren Eigenschaften von `object` selbst und verhindert zukünftige Hinzufügungen von Eigenschaften, Entfernen oder Rücksetzung von Werten _nur_ auf `object`. Wenn die Werte dieser Eigenschaften selbst Objekte sind, werden diese Objekte nicht eingefroren und können Ziel von Hinzufügungs-, Entfernungs- oder Rücksetzungsvorgängen sein.

```js
const employee = {
  name: "Mayank",
  designation: "Developer",
  address: {
    street: "Rohini",
    city: "Delhi",
  },
};

Object.freeze(employee);

employee.name = "Dummy"; // fails silently in non-strict mode
employee.address.city = "Noida"; // attributes of child object can be modified

console.log(employee.address.city); // "Noida"
```

Um ein Objekt unveränderlich zu machen, frieren Sie jede nicht-primitive Eigenschaft rekursiv ein (tiefes Einfrieren). Verwenden Sie das Muster von Fall zu Fall basierend auf Ihrem Design, wenn Sie wissen, dass das Objekt keine [Zyklen](<https://en.wikipedia.org/wiki/Cycle_(graph_theory)>) im Referenzgraphen enthält, da sonst eine Endlosschleife ausgelöst wird. Zum Beispiel haben mit der [`function`](/de/docs/Web/JavaScript/Reference/Statements/function) Syntax erstellte Funktionen eine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft mit einer `constructor`-Eigenschaft, die auf die Funktion selbst zeigt, sodass sie standardmäßig Zyklen haben. Andere Funktionen, wie z.B. [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), können dennoch eingefroren werden.

Eine Verbesserung von `deepFreeze()` wäre, die Objekte zu speichern, die es bereits besucht hat, so dass Sie den rekursiven Aufruf von `deepFreeze()` unterdrücken können, wenn ein Objekt gerade dabei ist, unveränderlich gemacht zu werden. Für ein Beispiel siehe [Verwendung von `WeakSet` zur Erkennung zirkulärer Referenzen](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet#detecting_circular_references). Sie laufen immer noch Gefahr, ein Objekt einzufrieren, das nicht eingefroren werden sollte, wie z.B. [`window`](/de/docs/Web/API/Window).

```js
function deepFreeze(object) {
  // Retrieve the property names defined on object
  const propNames = Reflect.ownKeys(object);

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = object[name];

    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

const obj2 = {
  internal: {
    a: null,
  },
};

deepFreeze(obj2);

obj2.internal.a = "anotherValue"; // fails silently in non-strict mode
obj2.internal.a; // null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
