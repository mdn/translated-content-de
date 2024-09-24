---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
l10n:
  sourceCommit: 588a149a835f8a6e24d6ff5ee9b86323296ada5c
---

{{JSRef}}

Die statische Methode **`Object.freeze()`** _friert_ ein Objekt ein. Das Einfrieren eines Objekts [verhindert Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und macht bestehende Eigenschaften nicht beschreibbar und nicht konfigurierbar. Ein eingefrorenes Objekt kann nicht mehr verändert werden: Neue Eigenschaften können nicht hinzugefügt werden, bestehende Eigenschaften können nicht entfernt werden, deren Aufzählbarkeit, Konfigurierbarkeit, Beschreibbarkeit oder Wert können nicht geändert werden, und das Prototyp-Objekt kann nicht neu zugewiesen werden. `freeze()` gibt dasselbe Objekt zurück, das übergeben wurde.

Das Einfrieren eines Objekts ist das höchste Integritätsniveau, das JavaScript bietet.

{{EmbedInteractiveExample("pages/js/object-freeze.html")}}

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

Das Einfrieren eines Objekts entspricht dem [Verhindern von Erweiterungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) und dem anschließenden Ändern aller vorhandenen [Eigenschaftsbeschreibungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) `configurable` auf `false` — und bei Daten-Eigenschaften auch `writable` auf `false`. Nichts kann zum oder vom Eigenschaftensatz eines eingefrorenen Objekts hinzugefügt oder entfernt werden. Jeder Versuch, dies zu tun, wird entweder stillschweigend fehlschlagen oder eine {{jsxref("TypeError")}}-Ausnahme auslösen (meistens, aber nicht ausschließlich, im {{jsxref("Strict_mode", "Strict-Modus", "", 1)}}).

Für Daten-Eigenschaften eines eingefrorenen Objekts können deren Werte nicht geändert werden, da die Attribute `writable` und `configurable` auf `false` gesetzt sind. Accessor-Eigenschaften (Getter und Setter) funktionieren genauso — der vom Getter zurückgegebene Eigenschaftswert kann sich weiterhin ändern, und der Setter kann weiterhin aufgerufen werden, ohne Fehler beim Setzen der Eigenschaft auszulösen. Beachten Sie, dass Werte, die Objekte sind, weiterhin geändert werden können, es sei denn, sie sind ebenfalls eingefroren. Als Objekt kann ein Array eingefroren werden; danach können seine Elemente nicht verändert, und keine Elemente hinzugefügt oder entfernt werden.

[Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) kennen das Konzept von Eigenschaftsbeschreibungen nicht. Das Einfrieren eines Objekts mit privaten Eigenschaften verhindert nicht, dass die Werte dieser privaten Eigenschaften geändert werden. (Das Einfrieren von Objekten ist normalerweise als Sicherheitsmaßnahme gegen externen Code gedacht, aber externer Code kann private Eigenschaften ohnehin nicht zugreifen.) Private Eigenschaften können weder hinzugefügt noch vom Objekt entfernt werden, unabhängig davon, ob das Objekt eingefroren ist oder nicht.

`freeze()` gibt dasselbe Objekt zurück, das der Funktion übergeben wurde. Es _erstellt keinen_ eingefrorenen Kopie.

Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} mit Elementen wird eine {{jsxref("TypeError")}} verursachen, da sie Ansichten über den Speicher sind und definitiv andere mögliche Probleme verursachen werden:

```js
Object.freeze(new Uint8Array(0)); // Keine Elemente
// Uint8Array []

Object.freeze(new Uint8Array(1)); // Hat Elemente
// TypeError: Cannot freeze array buffer views with elements

Object.freeze(new DataView(new ArrayBuffer(32))); // Keine Elemente
// DataView {}

Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)); // Keine Elemente
// Float64Array []

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)); // Hat Elemente
// TypeError: Cannot freeze array buffer views with elements
```

Beachten Sie, dass die Standard-Drei-Eigenschaften (`buf.byteLength`, `buf.byteOffset` und `buf.buffer`) schreibgeschützt sind (genau wie diejenigen eines {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}), weshalb es keinen Grund gibt, diese Eigenschaften einzufrieren.

Im Gegensatz zu {{jsxref("Object.seal()")}} werden bestehende Eigenschaften in Objekten, die mit `Object.freeze()` eingefroren wurden, unveränderbar gemacht und Daten-Eigenschaften können nicht neu zugewiesen werden.

## Beispiele

### Einfrieren von Objekten

```js
const obj = {
  prop() {},
  foo: "bar",
};

// Vor dem Einfrieren: Neue Eigenschaften können hinzugefügt werden,
// und bestehende Eigenschaften können geändert oder entfernt werden
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

// Einfrieren.
const o = Object.freeze(obj);

// Der Rückgabewert ist genau dasselbe Objekt, das wir übergeben haben.
o === obj; // true

// Das Objekt ist eingefroren worden.
Object.isFrozen(obj); // === true

// Jetzt werden alle Änderungen fehlschlagen
obj.foo = "quux"; // tut stillschweigend nichts
// fügt die Eigenschaft stillschweigend nicht hinzu
obj.quaxxor = "the friendly duck";

// Im Strict-Modus werden solche Versuche TypeErrors auslösen
function fail() {
  "use strict";
  obj.foo = "sparky"; // löst einen TypeError aus
  delete obj.foo; // löst einen TypeError aus
  delete obj.quaxxor; // gibt true zurück, da das Attribut 'quaxxor' nie hinzugefügt wurde
  obj.sparky = "arf"; // löst einen TypeError aus
}

fail();

// Versuchte Änderungen durch Object.defineProperty;
// beide Anweisungen unten lösen einen TypeError aus.
Object.defineProperty(obj, "ohai", { value: 17 });
Object.defineProperty(obj, "foo", { value: "eit" });

// Es ist auch unmöglich, das Prototyp-Objekt zu ändern
// beide Anweisungen unten werden einen TypeError auslösen.
Object.setPrototypeOf(obj, { x: 20 });
obj.__proto__ = { x: 20 };
```

### Einfrieren von Arrays

```js
const a = [0];
Object.freeze(a); // Das Array kann jetzt nicht mehr verändert werden.

a[0] = 1; // schlägt stillschweigend fehl

// Im Strict-Modus führt ein solcher Versuch zu einem TypeError
function fail() {
  "use strict";
  a[0] = 1;
}

fail();

// Versuch, etwas hinzuzufügen
a.push(2); // löst einen TypeError aus
```

Das eingefrorene Objekt ist _unveränderlich_. Es ist jedoch nicht notwendigerweise
_konstant_. Das folgende Beispiel zeigt, dass ein eingefrorenes Objekt nicht konstant
ist (freeze ist flach).

```js
const obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "aValue";

obj1.internal.a; // 'aValue'
```

Um ein konstantes Objekt zu sein, muss der gesamte Referenzgraph (direkte und indirekte Referenzen auf
andere Objekte) nur unveränderliche, eingefrorene Objekte referenzieren. Das Objekt, das eingefroren wird,
gilt als unveränderlich, weil der gesamte Objekt _zustand_ (Werte und Referenzen auf
andere Objekte) innerhalb des gesamten Objekts festgelegt ist. Beachten Sie, dass Strings, Zahlen und
Booleans immer unveränderlich sind und dass Funktionen und Arrays Objekte sind.

### Tiefes Einfrieren

Das Ergebnis des Aufrufs von `Object.freeze(object)` gilt nur für die
unmittelbaren Eigenschaften des Objekts selbst und verhindert zukünftige Eigenschaften
Hinzufügens-, Entfernens- oder Wertneuzuordnungsoperationen _nur_ auf
dem Objekt. Wenn die Werte dieser Eigenschaften selbst Objekte sind, sind diese
Objekte nicht eingefroren und können Ziel von Eigenschaftenhinzufügens-, Entfernens- oder Werte
Neuzuordnungsoperationen sein.

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

employee.name = "Dummy"; // schlägt stillschweigend fehl im Nicht-Strict-Modus
employee.address.city = "Noida"; // Attribute des untergeordneten Objekts können geändert werden

console.log(employee.address.city); // "Noida"
```

Um ein Objekt unveränderlich zu machen, frieren Sie rekursiv jede nicht-primitive Eigenschaft ein (tiefes Einfrieren). Verwenden Sie das Muster fallweise basierend auf Ihrem Design, wenn Sie wissen, dass das Objekt keine [Zyklen](<https://en.wikipedia.org/wiki/Cycle_(graph_theory)>) im Referenzgraph enthält, andernfalls wird eine Endlosschleife ausgelöst. Beispielsweise haben mit der [`function`](/de/docs/Web/JavaScript/Reference/Statements/function) Syntax erstellte Funktionen eine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft mit einer `constructor` Eigenschaft, die auf die Funktion selbst verweist, sodass sie standardmäßig Zyklen haben. Andere Funktionen, wie zum Beispiel [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), können dennoch eingefroren werden.

Eine Erweiterung für `deepFreeze()` wäre, die bereits besuchten Objekte zu speichern, sodass Sie den rekursiven Aufruf von `deepFreeze()` unterdrücken können, wenn ein Objekt gerade unveränderlich gemacht wird. Für ein Beispiel siehe [Verwendung von `WeakSet` zum Erkennen von zyklischen Referenzen](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakSet#use_case_detecting_circular_references). Sie riskieren immer noch, ein Objekt einzufrieren, das nicht eingefroren werden sollte, wie z.B. [`window`](/de/docs/Web/API/Window).

```js
function deepFreeze(object) {
  // Ruft die Eigenschaften Namen des Objekts ab, die darauf definiert sind 
  const propNames = Reflect.ownKeys(object);

  // Friert die Eigenschaften ein, bevor es sich selbst einfriert
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

obj2.internal.a = "anotherValue"; // schlägt stillschweigend fehl im Nicht-Strict-Modus
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
