---
title: Object.prototype.propertyIsEnumerable()
short-title: propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`propertyIsEnumerable()`** Methode von {{jsxref("Object")}} Instanzen gibt einen booleschen Wert zurück, der angibt, ob die angegebene Eigenschaft die [enumerable eigene](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaft dieses Objekts ist.

{{InteractiveExample("JavaScript Demo: Object.prototype.propertyIsEnumerable()", "taller")}}

```js interactive-example
const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable("property1"));
// Expected output: true

console.log(array1.propertyIsEnumerable(0));
// Expected output: true

console.log(array1.propertyIsEnumerable("length"));
// Expected output: false
```

## Syntax

```js-nolint
propertyIsEnumerable(prop)
```

### Parameter

- `prop`
  - : Der Name der zu testenden Eigenschaft. Kann ein String oder ein {{jsxref("Symbol")}} sein.

### Rückgabewert

Ein boolescher Wert, der anzeigt, ob die angegebene Eigenschaft aufzählbar ist und die eigene Eigenschaft des Objekts ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer [`null`-Prototyp Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die Methode `propertyIsEnumerable()`. Diese Methode bestimmt, ob die angegebene Eigenschaft, String oder Symbol, eine aufzählbare eigene Eigenschaft des Objekts ist. Wenn das Objekt die angegebene Eigenschaft nicht besitzt, gibt diese Methode `false` zurück.

Diese Methode ist äquivalent zu [`Object.getOwnPropertyDescriptor(obj, prop)?.enumerable ?? false`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor).

## Beispiele

### Verwendung von propertyIsEnumerable()

Das folgende Beispiel zeigt die Verwendung von `propertyIsEnumerable()` auf Objekten und Arrays.

```js
const o = {};
const a = [];
o.prop = "is enumerable";
a[0] = "is enumerable";

o.propertyIsEnumerable("prop"); // true
a.propertyIsEnumerable(0); // true
```

### Benutzerdefinierte vs. eingebaute Objekte

Die meisten eingebauten Eigenschaften sind standardmäßig nicht aufzählbar, während benutzerdefinierte Objekteigenschaften oft aufzählbar sind, es sei denn, sie werden explizit anders festgelegt.

```js
const a = ["is enumerable"];

a.propertyIsEnumerable(0); // true
a.propertyIsEnumerable("length"); // false

Math.propertyIsEnumerable("random"); // false
globalThis.propertyIsEnumerable("Math"); // false
```

### Direkte vs. geerbte Eigenschaften

Nur aufzählbare eigene Eigenschaften führen dazu, dass `propertyIsEnumerable()` `true` zurückgibt, obwohl alle aufzählbaren Eigenschaften, einschließlich der geerbten, von der [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife besucht werden.

```js
const o1 = {
  enumerableInherited: "is enumerable",
};
Object.defineProperty(o1, "nonEnumerableInherited", {
  value: "is non-enumerable",
  enumerable: false,
});
const o2 = {
  // o1 is the prototype of o2
  __proto__: o1,
  enumerableOwn: "is enumerable",
};
Object.defineProperty(o2, "nonEnumerableOwn", {
  value: "is non-enumerable",
  enumerable: false,
});

o2.propertyIsEnumerable("enumerableInherited"); // false
o2.propertyIsEnumerable("nonEnumerableInherited"); // false
o2.propertyIsEnumerable("enumerableOwn"); // true
o2.propertyIsEnumerable("nonEnumerableOwn"); // false
```

### Testen von Symboleigenschaften

{{jsxref("Symbol")}} Eigenschaften werden auch von `propertyIsEnumerable()` unterstützt. Beachten Sie, dass die meisten Aufzählungsmethoden nur String-Eigenschaften besuchen; die Aufzählbarkeit von Symboleigenschaften ist nur bei der Verwendung von {{jsxref("Object.assign()")}} oder der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) nützlich. Weitere Informationen finden Sie unter [Enumerability and ownership of properties](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).

```js
const sym = Symbol("enumerable");
const sym2 = Symbol("non-enumerable");
const o = {
  [sym]: "is enumerable",
};
Object.defineProperty(o, sym2, {
  value: "is non-enumerable",
  enumerable: false,
});

o.propertyIsEnumerable(sym); // true
o.propertyIsEnumerable(sym2); // false
```

### Verwendung mit null-Prototyp Objekten

Da `null`-Prototyp Objekte nicht von `Object.prototype` erben, erben sie auch die Methode `propertyIsEnumerable()` nicht. Sie müssen `Object.prototype.propertyIsEnumerable` mit dem Objekt als `this` aufrufen.

```js
const o = {
  __proto__: null,
  enumerableOwn: "is enumerable",
};

o.propertyIsEnumerable("enumerableOwn"); // TypeError: o.propertyIsEnumerable is not a function
Object.prototype.propertyIsEnumerable.call(o, "enumerableOwn"); // true
```

Alternativ können Sie {{jsxref("Object.getOwnPropertyDescriptor()")}} verwenden, was auch hilft, zwischen nicht vorhandenen Eigenschaften und tatsächlich nicht aufzählbaren Eigenschaften zu unterscheiden.

```js
const o = {
  __proto__: null,
  enumerableOwn: "is enumerable",
};

Object.getOwnPropertyDescriptor(o, "enumerableOwn")?.enumerable; // true
Object.getOwnPropertyDescriptor(o, "nonExistent")?.enumerable; // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Enumerability and ownership of properties](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.defineProperty()")}}
