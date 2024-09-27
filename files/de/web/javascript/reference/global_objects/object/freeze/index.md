---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
l10n:
  sourceCommit: 588a149a835f8a6e24d6ff5ee9b86323296ada5c
---

{{JSRef}}

Die statische Methode **`Object.freeze()`** _friert_ ein Objekt ein. Das Einfrieren eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften nicht beschreibbar und nicht konfigurierbar. Ein eingefrorenes Objekt kann nicht mehr geändert werden: Neue Eigenschaften können nicht hinzugefügt, bestehende Eigenschaften nicht entfernt werden, und ihre Aufzählbarkeit, Konfigurierbarkeit, Beschreibbarkeit oder ihr Wert können nicht geändert werden, und das Prototyp des Objekts kann nicht neu zugewiesen werden. `freeze()` gibt das gleiche Objekt zurück, das übergeben wurde.

Das Einfrieren eines Objekts ist das höchste Integritätsniveau, das JavaScript bietet.

{{EmbedInteractiveExample("pages/js/object-freeze.html")}}

## Syntax

```js-nolint
Object.freeze(obj)
```

### Parameter

- `obj`
  - : Das zu einfrierende Objekt.

### Rückgabewert

Das Objekt, das an die Funktion übergeben wurde.

## Beschreibung

Das Einfrieren eines Objekts entspricht dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem Ändern aller vorhandenen [Eigenschaftsbeschreibungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) `configurable` zu `false` — und für Dateneigenschaften auch `writable` zu `false`. Es kann dem Eigenschaftensatz eines eingefrorenen Objekts nichts hinzugefügt oder entfernt werden. Jeder Versuch, dies zu tun, schlägt fehl, entweder still oder indem eine {{jsxref("TypeError")}}-Ausnahme ausgelöst wird (meistens, aber nicht ausschließlich, wenn im {{jsxref("Strict_mode", "strict mode", "", 1)}}).

Für Dateneigenschaften eines eingefrorenen Objekts können ihre Werte nicht geändert werden, da die Attribute `writable` und `configurable` auf `false` gesetzt sind. Accessor-Eigenschaften (Getter und Setter) funktionieren genauso — der von einem Getter zurückgegebene Eigenschaftswert kann sich weiterhin ändern, und der Setter kann weiterhin ohne Fehler aufgerufen werden, wenn die Eigenschaft gesetzt wird. Beachten Sie, dass Werte, die Objekte sind, weiterhin modifiziert werden können, es sei denn, sie sind ebenfalls eingefroren. Als ein Objekt kann ein Array eingefroren werden; nach dem Einfrieren können seine Elemente nicht mehr verändert werden, und es können keine Elemente hinzugefügt oder entfernt werden.

[Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) haben kein Konzept von Eigenschaftsbeschreibungen. Das Einfrieren eines Objekts mit privaten Eigenschaften verhindert nicht die Änderung der Werte dieser privaten Eigenschaften. (Das Einfrieren von Objekten ist in der Regel als Sicherheitsmaßnahme gegen externen Code gedacht, aber externer Code kann ohnehin nicht auf private Eigenschaften zugreifen.) Private Eigenschaften können nicht hinzugefügt oder entfernt werden, unabhängig davon, ob das Objekt eingefroren ist oder nicht.

`freeze()` gibt das gleiche Objekt zurück, das an die Funktion übergeben wurde. Es erstellt _keine_ eingefrorene Kopie.

Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} mit Elementen verursacht einen {{jsxref("TypeError")}}, da sie Ansichten über Speicher sind und definitiv andere mögliche Probleme verursachen werden:

```js
Object.freeze(new Uint8Array(0)); // No elements
// Uint8Array []

Object.freeze(new Uint8Array(1)); // Has elements
// TypeError: Cannot freeze array buffer views with elements

Object.freeze(new DataView(new ArrayBuffer(32))); // No elements
// DataView {}

Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)); // No elements
// Float64Array []

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)); // Has elements
// TypeError: Cannot freeze array buffer views with elements
```

Beachten Sie, dass die standardmäßigen drei Eigenschaften (`buf.byteLength`, `buf.byteOffset` und `buf.buffer`) schreibgeschützt sind (wie auch die Eigenschaften eines {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}), sodass es keinen Grund gibt, zu versuchen, diese Eigenschaften einzufrieren.

Im Gegensatz zu {{jsxref("Object.seal()")}} werden vorhandene Eigenschaften in mit `Object.freeze()` eingefrorenen Objekten unveränderlich gemacht, und Dateneigenschaften können nicht neu zugewiesen werden.

## Beispiele

### Einfrieren von Objekten

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

### Einfrieren von Arrays

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

Das eingefrorene Objekt ist _unveränderlich_. Es ist jedoch nicht unbedingt _konstant_. Das folgende Beispiel zeigt, dass ein eingefrorenes Objekt nicht konstant ist (freeze ist oberflächlich).

```js
const obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "aValue";

obj1.internal.a; // 'aValue'
```

Um ein konstantes Objekt zu sein, muss der gesamte Referenzgraph (direkte und indirekte Referenzen auf andere Objekte) nur unveränderliche eingefrorene Objekte referenzieren. Das eingefrorene Objekt gilt als unveränderlich, weil der gesamte Objektzustand (Werte und Referenzen auf andere Objekte) innerhalb des gesamten Objekts festgelegt ist. Beachten Sie, dass Strings, Zahlen und Booleans immer unveränderlich sind und dass Funktionen und Arrays Objekte sind.

### Tiefes Einfrieren

Das Ergebnis des Aufrufs von `Object.freeze(object)` gilt nur für die unmittelbaren Eigenschaften von `object` selbst und verhindert zukünftige Eigenschaftsänderungen, Entfernung oder Wert-Neuzuweisungsoperationen _nur_ auf `object`. Wenn der Wert dieser Eigenschaften selbst Objekte sind, sind diese Objekte nicht eingefroren und können Ziel von Eigenschaftsergänzungen, -entfernungen oder -neuzuweisungen werden.

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

Um ein Objekt unveränderlich zu machen, frieren Sie rekursiv jede nicht-primitive Eigenschaft ein (tiefes Einfrieren). Verwenden Sie das Muster fallweise basierend auf Ihrem Design, wenn Sie wissen, dass das Objekt keine [Zyklen](<https://en.wikipedia.org/wiki/Cycle_(graph_theory)>) im Referenzgraphen enthält, da sonst eine Endlosschleife ausgelöst wird. Zum Beispiel haben mit der [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Syntax erstellte Funktionen eine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft mit einer `constructor`-Eigenschaft, die auf die Funktion selbst verweist, sodass sie standardmäßig Zyklen enthalten. Andere Funktionen, wie [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), können immer noch eingefroren werden.

Eine Verbesserung von `deepFreeze()` wäre es, die Objekte zu speichern, die bereits besucht wurden, sodass Sie das rekursive Aufrufen von `deepFreeze()` unterdrücken können, wenn ein Objekt im Prozess der Unveränderlichmachung ist. Ein Beispiel finden Sie unter [Verwendung von `WeakSet` zur Erkennung von zirkulären Referenzen](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet#use_case_detecting_circular_references). Sie laufen dennoch Gefahr, ein Objekt einzufrieren, das nicht eingefroren werden sollte, wie zum Beispiel [`window`](/de/docs/Web/API/Window).

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
