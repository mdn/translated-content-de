---
title: Object.freeze()
short-title: freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Object.freeze()`** _friert_ ein Objekt ein. Das Einfrieren eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften nicht beschreibbar und nicht konfigurierbar. Ein eingefrorenes Objekt kann nicht mehr verändert werden: Neue Eigenschaften können nicht hinzugefügt, bestehende Eigenschaften nicht entfernt werden, ihre Enumerierbarkeit, Konfigurierbarkeit, Beschreibbarkeit oder ihr Wert können nicht geändert werden und das Prototyp des Objekts kann nicht neu zugeordnet werden. `freeze()` gibt dasselbe Objekt zurück, das übergeben wurde.

Das Einfrieren eines Objekts ist der höchste Integritätslevel, den JavaScript bietet.

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
  - : Das Objekt, das eingefroren werden soll.

### Rückgabewert

Das Objekt, das der Funktion übergeben wurde.

## Beschreibung

Das Einfrieren eines Objekts entspricht dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem Ändern aller bestehenden [Eigenschaftsdeskriptoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) von `configurable` zu `false` — und für Dateneigenschaften auch `writable` zu `false`. Nichts kann dem Eigenschaften-Set eines eingefrorenen Objekts hinzugefügt oder daraus entfernt werden. Jeder Versuch dies zu tun, wird entweder stillschweigend fehlschlagen oder eine {{jsxref("TypeError")}}-Ausnahme auslösen (meistens, aber nicht ausschließlich im {{jsxref("Strict_mode", "Strict-Modus", "", 1)}}).

Für Dateneigenschaften eines eingefrorenen Objekts können ihre Werte nicht geändert werden, da die Attribute `writable` und `configurable` auf `false` gesetzt sind. Zugriffseigenschaften (Getter und Setter) funktionieren genauso — der von den Gettern zurückgegebene Eigenschaftswert kann sich weiterhin ändern und der Setter kann aufgerufen werden, ohne beim Setzen der Eigenschaft Fehler auszulösen. Beachten Sie, dass Werte, die Objekte sind, weiterhin modifiziert werden können, es sei denn, sie sind ebenfalls eingefroren. Als Objekt kann ein Array eingefroren werden; nach dem Einfrieren können seine Elemente nicht verändert werden und es können keine Elemente hinzugefügt oder daraus entfernt werden.

[Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sind keine Eigenschaften und haben nicht das Konzept von Eigenschaftsdeskriptoren. Das Einfrieren eines Objekts mit privaten Elementen verhindert nicht, dass die Werte dieser privaten Elemente geändert werden. (Das Einfrieren von Objekten soll in der Regel als Sicherheitsmaßnahme gegen externen Code dienen, aber externer Code kann sowieso nicht auf private Elemente zugreifen.) Private Elemente können weder hinzugefügt noch vom Objekt entfernt werden, unabhängig davon, ob das Objekt eingefroren ist oder nicht.

`freeze()` gibt dasselbe Objekt zurück, das der Funktion übergeben wurde. Es _erstellt keine_ eingefrorene Kopie.

Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} mit Elementen wird eine {{jsxref("TypeError")}} verursachen, da sie Ansichten über den Speicher sind und definitiv andere mögliche Probleme verursachen werden:

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

Beachten Sie, dass, da die Standard-Drei-Eigenschaften (`buf.byteLength`, `buf.byteOffset` und `buf.buffer`) schreibgeschützt sind (wie die eines {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}), es keinen Grund gibt, zu versuchen, diese Eigenschaften einzufrieren.

Im Gegensatz zu {{jsxref("Object.seal()")}}, werden bei Objekten, die mit `Object.freeze()` eingefroren werden, bestehende Eigenschaften unveränderlich gemacht und Dateneigenschaften können nicht neu zugewiesen werden.

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

Das eingefrorene Objekt ist _unveränderlich_. Es ist jedoch nicht zwangsläufig _konstant_. Das folgende Beispiel zeigt, dass ein eingefrorenes Objekt nicht konstant ist (das Einfrieren ist oberflächlich).

```js
const obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "aValue";

obj1.internal.a; // 'aValue'
```

Um ein konstantes Objekt zu erhalten, muss der gesamte Referenzgraph (direkte und indirekte Verweise auf andere Objekte) nur unveränderliche eingefrorene Objekte referenzieren. Das zugefrierende Objekt ist deshalb als unveränderlich zu bezeichnen, weil der gesamte Objektzustand (Werte und Verweise auf andere Objekte) innerhalb des gesamten Objekts festgelegt ist. Beachten Sie, dass Strings, Zahlen und Booleans immer unveränderlich sind und dass Funktionen und Arrays Objekte sind.

### Tiefes Einfrieren

Das Ergebnis des Aufrufs von `Object.freeze(object)` gilt nur für die unmittelbaren Eigenschaften des Objekts selbst und verhindert zukünftige Hinzufügungs-, Entfernungs- oder Wertneuheitsoperationen _nur_ auf `object`. Wenn die Werte dieser Eigenschaften selbst Objekte sind, sind diese Objekte nicht eingefroren und können Ziel für Eigenschaftshinzufügungs-, Entfernungs- oder Wertneuheitsoperationen sein.

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

Um ein Objekt unveränderlich zu machen, frieren Sie rekursiv jede nicht primitive Eigenschaft ein (tiefes Einfrieren). Verwenden Sie das Muster fallweise basierend auf Ihrem Design, wenn Sie wissen, dass das Objekt keine [Zyklen](<https://en.wikipedia.org/wiki/Cycle_(graph_theory)>) im Referenzgraphen enthält, da sonst eine Endlosschleife ausgelöst wird. Beispielsweise haben Funktionen, die mit der [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Syntax erstellt wurden, eine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft mit einer `constructor`-Eigenschaft, die auf die Funktion selbst verweist, sodass sie standardmäßig Zyklen haben. Andere Funktionen, wie [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), können dennoch eingefroren werden.

Eine Verbesserung an `deepFreeze()` wäre es, die Objekte zu speichern, die bereits besucht wurden, so dass Sie beim Prozess der Unveränderlichen-Machung eines Objekts den rekursiven Aufruf von `deepFreeze()` unterdrücken können. Für ein Beispiel siehe [Verwendung von `WeakSet` zur Erkennung von zyklischen Referenzen](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet#use_case_detecting_circular_references). Sie laufen immer noch Gefahr, ein Objekt einzufrieren, das nicht eingefroren werden sollte, wie z. B. [`window`](/de/docs/Web/API/Window).

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
