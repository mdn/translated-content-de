---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
l10n:
  sourceCommit: 588a149a835f8a6e24d6ff5ee9b86323296ada5c
---

{{JSRef}}

Die statische Methode **`Object.freeze()`** _friert_ ein Objekt ein. Das Einfrieren eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht vorhandene Eigenschaften nicht beschreibbar und nicht konfigurierbar. Ein eingefrorenes Objekt kann nicht mehr verändert werden: Neue Eigenschaften können nicht hinzugefügt, vorhandene Eigenschaften können nicht entfernt werden, und ihre Aufzählbarkeit, Konfigurierbarkeit, Beschreibbarkeit oder deren Wert kann nicht verändert werden. Auch das Prototyp des Objekts kann nicht neu zugewiesen werden. `freeze()` gibt dasselbe Objekt zurück, das übergeben wurde.

Das Einfrieren eines Objekts ist das höchste Integritätsniveau, das JavaScript bietet.

{{EmbedInteractiveExample("pages/js/object-freeze.html")}}

## Syntax

```js-nolint
Object.freeze(obj)
```

### Parameter

- `obj`
  - : Das zu frierende Objekt.

### Rückgabewert

Das an die Funktion übergebene Objekt.

## Beschreibung

Das Einfrieren eines Objekts entspricht dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem anschließenden Ändern aller vorhandenen [Eigenschaftenbeschreibungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) `configurable` auf `false` — und für Dateneigenschaften `writable` ebenfalls auf `false`. Es kann nichts hinzugefügt oder aus der Eigenschaftsmenge eines eingefrorenen Objekts entfernt werden. Jeder Versuch, dies zu tun, schlägt fehl, entweder stillschweigend oder durch Auslösen einer {{jsxref("TypeError")}}-Ausnahme (meistens, aber nicht ausschließlich, wenn im {{jsxref("Strict_mode", "Strict-Modus", "", 1)}}).

Für die Dateneigenschaften eines eingefrorenen Objekts können ihre Werte nicht geändert werden, da die Attribute `writable` und `configurable` auf `false` gesetzt sind. Accessor-Eigenschaften (Getter und Setter) funktionieren genauso — der von der Getter zurückgegebene Eigenschaftswert kann sich immer noch ändern, und der Setter kann weiterhin aufgerufen werden, ohne Fehler auszulösen, wenn die Eigenschaft gesetzt wird. Beachten Sie, dass Werte, die Objekte sind, immer noch modifiziert werden können, es sei denn, sie sind ebenfalls eingefroren. Ein Array als Objekt kann eingefroren werden; nachdem dies geschehen ist, können seine Elemente nicht mehr geändert und keine Elemente hinzugefügt oder entfernt werden.

[Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) haben kein Konzept von Eigenschaftsbeschreibungen. Das Einfrieren eines Objekts mit privaten Eigenschaften verhindert nicht, dass die Werte dieser privaten Eigenschaften geändert werden. (Das Einfrieren von Objekten ist normalerweise als Sicherheitsmaßnahme gegen externen Code gedacht, aber externer Code kann sowieso nicht auf private Eigenschaften zugreifen.) Private Eigenschaften können dem Objekt weder hinzugefügt noch entfernt werden, egal ob das Objekt eingefroren ist oder nicht.

`freeze()` gibt dasselbe Objekt zurück, das an die Funktion übergeben wurde. Es _erstellt keine_ eingefrorene Kopie.

Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} mit Elementen führt zu einem {{jsxref("TypeError")}}, da sie Ansichten über den Speicher sind und definitiv andere mögliche Probleme verursachen können:

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

Beachten Sie, dass die Standard-Drei-Eigenschaften (`buf.byteLength`, `buf.byteOffset` und `buf.buffer`) schreibgeschützt sind (wie auch die von einem {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}), es gibt also keinen Grund, zu versuchen, diese Eigenschaften einzufrieren.

Im Gegensatz zu {{jsxref("Object.seal()")}} werden vorhandene Eigenschaften in Objekten, die mit `Object.freeze()` eingefroren wurden, unveränderlich gemacht und Dateneigenschaften können nicht neu zugewiesen werden.

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

Das eingefrorene Objekt ist _unveränderlich_. Es ist jedoch nicht unbedingt _konstant_. Das folgende Beispiel zeigt, dass ein eingefrorenes Objekt nicht konstant ist (Einfrieren ist flach).

```js
const obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "aValue";

obj1.internal.a; // 'aValue'
```

Um ein konstantes Objekt zu sein, muss der gesamte Referenzgraph (direkte und indirekte Verweise auf andere Objekte) nur unveränderliche eingefrorene Objekte referenzieren. Das eingefrorene Objekt wird als unveränderlich angesehen, weil der gesamte Objektzustand (Werte und Verweise auf andere Objekte) innerhalb des ganzen Objekts festgelegt ist. Beachten Sie, dass Zeichenfolgen, Zahlen und Booleans immer unveränderlich sind und dass Funktionen und Arrays Objekte sind.

### Tiefes Einfrieren

Das Ergebnis des Aufrufs von `Object.freeze(object)` gilt nur für die unmittelbaren Eigenschaften von `object` selbst und verhindert zukünftige Eigenschaftshinzufügungs-, Entfernungs- oder Wertneuordnungsoperationen _nur_ auf `object`. Wenn die Werte dieser Eigenschaften Objekte sind, sind diese Objekte nicht eingefroren und können Ziel von Eigenschaftshinzufügungs-, Entfernungs- oder Wertneuordnungsoperationen sein.

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

Um ein Objekt unveränderlich zu machen, frieren Sie jede nicht-primitive Eigenschaft rekursiv ein (tiefes Einfrieren). Verwenden Sie das Muster je nach Entwurfsspezifikationen fallweise, wenn Sie wissen, dass das Objekt keine [Zyklen](<https://en.wikipedia.org/wiki/Cycle_(graph_theory)>) im Referenzgraphen enthält, da sonst eine Endlosschleife ausgelöst wird. Zum Beispiel haben Funktionen, die mit der [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Syntax erstellt wurden, eine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft mit einer `constructor`-Eigenschaft, die auf die Funktion selbst verweist, sodass sie standardmäßig Zyklen haben. Andere Funktionen, wie z.B. [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), können trotzdem eingefroren werden.

Eine Verbesserung von `deepFreeze()` wäre, die Objekte zu speichern, die bereits besucht wurden, damit Sie den rekursiven Aufruf von `deepFreeze()` unterdrücken können, wenn ein Objekt gerade unveränderlich gemacht wird. Für ein Beispiel siehe [Verwendung von `WeakSet`, um zirkuläre Referenzen zu erkennen](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet#use_case_detecting_circular_references). Sie laufen trotzdem Gefahr, ein Objekt einzufrieren, das nicht eingefroren werden sollte, wie z.B. [`window`](/de/docs/Web/API/Window).

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
