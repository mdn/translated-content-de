---
title: Object.freeze()
short-title: freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

Die statische Methode **`Object.freeze()`** _friert_ ein Objekt ein. Das Einfrieren eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften nicht beschreibbar und nicht konfigurierbar. Ein eingefrorenes Objekt kann nicht mehr verändert werden: Neue Eigenschaften können nicht hinzugefügt werden, bestehende Eigenschaften können nicht entfernt werden, ihre Aufzählbarkeit, Konfigurierbarkeit, Schreibbarkeit oder Werte können nicht geändert werden, und das Prototyp-Objekt kann nicht neu zugewiesen werden. `freeze()` gibt dasselbe Objekt zurück, das übergeben wurde.

Das Einfrieren eines Objekts ist das höchste Integritätsniveau, das JavaScript bereitstellt.

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

Das Objekt, das an die Funktion übergeben wurde.

## Beschreibung

Das Einfrieren eines Objekts entspricht dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dann dem Ändern aller bestehenden [Eigenschaftsbeschreibungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) `configurable` auf `false` — und für Dateneigenschaften `writable` ebenfalls auf `false`. Nichts kann zur Eigenschaftsmenge eines eingefrorenen Objekts hinzugefügt oder daraus entfernt werden. Jeder Versuch, dies zu tun, wird scheitern, entweder lautlos oder indem eine {{jsxref("TypeError")}}-Ausnahme ausgelöst wird (am häufigsten, aber nicht ausschließlich, im {{jsxref("Strict_mode", "strict mode", "", 1)}}).

Für die Dateneigenschaften eines eingefrorenen Objekts können ihre Werte nicht geändert werden, da die Attribute `writable` und `configurable` auf `false` gesetzt sind. Zugreifende Eigenschaften (Getters und Setters) funktionieren ebenso — der von der Getter-Funktion zurückgegebene Eigenschaftswert kann sich weiterhin ändern, und es können Setzer aufgerufen werden, ohne dass Fehler beim Setzen der Eigenschaft ausgelöst werden. Beachten Sie, dass Werte, die Objekte sind, immer noch geändert werden können, es sei denn, sie sind ebenfalls eingefroren. Als ein Objekt kann auch ein Array eingefroren werden; danach können seine Elemente nicht mehr geändert und keine weiteren Elemente hinzugefügt oder entfernt werden.

[Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) sind keine Eigenschaften und haben kein Konzept von Eigenschaftsbeschreibungen. Das Einfrieren eines Objekts mit privaten Elementen verhindert nicht, dass die Werte dieser privaten Elemente geändert werden. (Objekte einzufrieren, wird normalerweise als Sicherheitsmaßnahme gegen externen Code verwendet, aber externer Code kann private Elemente ohnehin nicht zugreifen.) Private Elemente können nicht hinzugefügt oder entfernt werden, egal ob das Objekt eingefroren ist oder nicht.

`freeze()` gibt dasselbe Objekt zurück, das an die Funktion übergeben wurde. Es _erzeugt keinen_ eingefrorenen Klon.

Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} mit Elementen führt zu einem {{jsxref("TypeError")}}, da sie Ansichten über dem Speicher darstellen und definitiv andere mögliche Probleme verursachen können:

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

Beachten Sie, dass die Standard-Drei-Eigenschaften (`buf.byteLength`, `buf.byteOffset` und `buf.buffer`) schreibgeschützt sind (ebenso wie die von {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}), und es daher keinen Grund gibt, zu versuchen, diese Eigenschaften einzufrieren.

Im Gegensatz zu {{jsxref("Object.seal()")}} werden die bestehenden Eigenschaften in Objekten, die mit `Object.freeze()` eingefroren wurden, unveränderlich gemacht, und Dateneigenschaften können nicht neu zugewiesen werden.

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

Das Objekt, das eingefroren wird, ist _unveränderlich_. Jedoch ist es nicht unbedingt _konstant_. Das folgende Beispiel zeigt, dass ein eingefrorenes Objekt nicht konstant ist (Einfrieren ist oberflächlich).

```js
const obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "value";

obj1.internal.a; // 'value'
```

Um ein konstantes Objekt zu sein, muss der gesamte Referenzgraph (direkte und indirekte Referenzen zu anderen Objekten) ausschließlich auf unveränderliche eingefrorene Objekte verweisen. Das Objekt, das eingefroren wird, gilt als unveränderlich, weil der gesamte Objektzustand (Werte und Referenzen zu anderen Objekten) innerhalb des gesamten Objekts festgelegt ist. Beachten Sie, dass Strings, Zahlen und Booleans immer unveränderlich sind und dass Funktionen und Arrays Objekte sind.

### Tiefes Einfrieren

Das Ergebnis des Aufrufs von `Object.freeze(object)` gilt nur für die unmittelbaren Eigenschaften des `object` selbst und verhindert zukünftige Eigenschaftshinzufügungen, Entfernungen oder Neuzuweisungsoperationen _nur_ auf `object`. Wenn der Wert dieser Eigenschaften selbst Objekte sind, sind diese Objekte nicht eingefroren und können Ziel von Eigenschaftshinzufügungen, Entfernungen oder Neuzuweisungsoperationen sein.

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

Um ein Objekt unveränderlich zu machen, frieren Sie rekursiv jede nicht primitive Eigenschaft ein (tiefes Einfrieren). Verwenden Sie das Muster von Fall zu Fall basierend auf Ihrem Design, wenn Sie wissen, dass das Objekt keine [Zyklen](<https://en.wikipedia.org/wiki/Cycle_(graph_theory)>) im Referenzgraphen enthält, sonst wird eine Endlosschleife ausgelöst. Zum Beispiel haben Funktionen, die mit der [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)-Syntax erstellt wurden, eine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft, deren `constructor`-Eigenschaft auf die Funktion selbst zeigt, sodass sie standardmäßig Zyklen haben. Andere Funktionen, wie [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), können trotzdem eingefroren werden.

Eine Verbesserung für `deepFreeze()` wäre, die Objekte zu speichern, die bereits besucht wurden, damit Sie vermeiden können, `deepFreeze()` rekursiv aufzurufen, wenn ein Objekt gerade unveränderlich gemacht wird. Ein Beispiel hierfür ist [die Verwendung von `WeakSet`, um zirkuläre Referenzen zu erkennen](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet#use_case_detecting_circular_references). Sie laufen dennoch Gefahr, ein Objekt einzufrieren, das nicht eingefroren werden sollte, wie z.B. [`window`](/de/docs/Web/API/Window).

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
