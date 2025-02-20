---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Object.freeze()`** _friert_ ein Objekt ein. Das Einfrieren eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften nicht beschreibbar und nicht konfigurierbar. Ein eingefrorenes Objekt kann nicht mehr verändert werden: Neue Eigenschaften können nicht hinzugefügt, bestehende Eigenschaften nicht entfernt und ihre Aufzählbarkeit, Konfigurierbarkeit, Beschreibbarkeit oder Werte nicht geändert werden. Auch der Prototyp des Objekts kann nicht neu zugewiesen werden. `freeze()` gibt das gleiche Objekt zurück, das übergeben wurde.

Das Einfrieren eines Objekts ist das höchste Integritätslevel, das JavaScript bereitstellt.

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

Das Einfrieren eines Objekts entspricht dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem Ändern aller bestehenden [Eigenschaftsbeschreibungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) von `configurable` auf `false` — und für Daten-Eigenschaften auch von `writable` auf `false`. Nichts kann hinzugefügt oder aus dem Eigenschaftensatz eines eingefrorenen Objekts entfernt werden. Jeder Versuch, dies zu tun, wird entweder stillschweigend fehlschlagen oder einen {{jsxref("TypeError")}}-Fehler auslösen (meistens, aber nicht ausschließlich, im {{jsxref("Strict_mode", "Strict-Modus", "", 1)}}).

Für Daten-Eigenschaften eines eingefrorenen Objekts können ihre Werte nicht geändert werden, da die Attribute `writable` und `configurable` auf `false` gesetzt sind. Zugriffs-Eigenschaften (Getter und Setter) funktionieren gleich — der von einem Getter zurückgegebene Wert kann sich noch ändern, und der Setter kann weiterhin aufgerufen werden, ohne Fehler zu werfen, wenn die Eigenschaft gesetzt wird. Beachten Sie, dass Werte, die Objekte sind, weiterhin geändert werden können, es sei denn, sie sind ebenfalls eingefroren. Ein Array als Objekt kann eingefroren werden; nach dem Einfrieren können seine Elemente nicht verändert und es können keine Elemente hinzugefügt oder entfernt werden.

[Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) kennen das Konzept von Eigenschaftsbeschreibungen nicht. Das Einfrieren eines Objekts mit privaten Eigenschaften verhindert nicht, dass die Werte dieser privaten Eigenschaften geändert werden. (Das Einfrieren von Objekten wird normalerweise als Sicherheitsmaßnahme gegen externen Code gedacht, aber externer Code kann sowieso nicht auf private Eigenschaften zugreifen.) Private Eigenschaften können weder hinzugefügt noch aus dem Objekt entfernt werden, unabhängig davon, ob das Objekt eingefroren ist oder nicht.

`freeze()` gibt dasselbe Objekt zurück, das der Funktion übergeben wurde. Es _erstellt keine_ eingefrorene Kopie.

Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} mit Elementen verursacht einen {{jsxref("TypeError")}}, da sie Ansichten über Speicher sind und definitiv andere mögliche Probleme verursachen:

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

Beachten Sie, dass die standardmäßigen drei Eigenschaften (`buf.byteLength`, `buf.byteOffset` und `buf.buffer`) schreibgeschützt sind (wie die von {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}) und es daher keinen Grund gibt, das Einfrieren dieser Eigenschaften zu versuchen.

Im Gegensatz zu {{jsxref("Object.seal()")}} werden bestehende Eigenschaften in Objekten, die mit `Object.freeze()` eingefroren wurden, unveränderlich gemacht, und Daten-Eigenschaften können nicht neu zugewiesen werden.

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

Das eingefrorene Objekt ist _unveränderlich_. Es ist jedoch nicht notwendigerweise _konstant_. Das folgende Beispiel zeigt, dass ein eingefrorenes Objekt nicht konstant ist (Einfrieren ist oberflächlich).

```js
const obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "aValue";

obj1.internal.a; // 'aValue'
```

Um ein konstantes Objekt zu haben, muss der gesamte Referenzgraf (direkte und indirekte Referenzen zu anderen Objekten) nur auf unveränderliche eingefrorene Objekte verweisen. Das eingefrorene Objekt wird als unveränderlich bezeichnet, weil der gesamte Objektzustand (Werte und Verweise auf andere Objekte) innerhalb des gesamten Objekts festgelegt ist. Beachten Sie, dass Zeichenketten, Zahlen und Booleans immer unveränderlich sind und dass Funktionen und Arrays Objekte sind.

### Tiefes Einfrieren

Das Ergebnis des Aufrufs von `Object.freeze(object)` gilt nur für die unmittelbaren Eigenschaften von `object` selbst und verhindert zukünftige Operationen zum Hinzufügen, Entfernen oder Ändern von Werten _nur_ auf `object`. Wenn die Werte dieser Eigenschaften selbst Objekte sind, werden diese Objekte nicht eingefroren und können Gegenstand von Operationen zum Hinzufügen, Entfernen oder Ändern von Werten sein.

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

Um ein Objekt unveränderlich zu machen, frieren Sie rekursiv jede nicht-primitive Eigenschaft ein (tiefes Einfrieren). Verwenden Sie dieses Muster fallweise basierend auf Ihrem Design, wenn Sie wissen, dass das Objekt keine [Zyklen](<https://de.wikipedia.org/wiki/Zyklus_(Graphentheorie)>) im Referenzgraf enthält. Andernfalls wird eine Endlosschleife ausgelöst. Beispielsweise haben Funktionen, die mit der [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Syntax erstellt wurden, eine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft mit einer `constructor`-Eigenschaft, die auf die Funktion selbst zeigt, sodass sie standardmäßig Zyklen haben. Andere Funktionen, wie beispielsweise [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), können weiterhin eingefroren werden.

Eine Verbesserung von `deepFreeze()` wäre das Speichern der bereits besuchten Objekte, sodass Sie das rekursive Aufrufen von `deepFreeze()` unterdrücken können, wenn sich ein Objekt gerade im Prozess des Einfrierens befindet. Ein Beispiel hierfür finden Sie unter [Verwendung von `WeakSet` zur Erkennung zirkularer Referenzen](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet#use_case_detecting_circular_references). Sie laufen dennoch Gefahr, ein Objekt einzufrieren, das nicht eingefroren werden sollte, wie beispielsweise [`window`](/de/docs/Web/API/Window).

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
