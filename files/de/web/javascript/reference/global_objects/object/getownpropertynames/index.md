---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyNames()`** gibt ein Array aller Eigenschaften zurück (einschließlich nicht aufzählbarer Eigenschaften, mit Ausnahme derjenigen, die `Symbol` verwenden), die direkt in einem gegebenen Objekt gefunden werden.

{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}

## Syntax

```js-nolint
Object.getOwnPropertyNames(obj)
```

### Parameter

- `obj`
  - : Das Objekt, dessen aufzählbare und nicht aufzählbare Eigenschaften zurückgegeben werden sollen.

### Rückgabewert

Ein Array von Strings, das den direkt im gegebenen Objekt gefundenen Eigenschaften entspricht.

## Beschreibung

`Object.getOwnPropertyNames()` gibt ein Array zurück, dessen Elemente Strings sind, die den aufzählbaren und nicht aufzählbaren Eigenschaften entsprechen, die direkt in einem gegebenen Objekt `obj` gefunden werden. Die Reihenfolge der aufzählbaren Eigenschaften im Array entspricht der Reihenfolge, die durch eine {{jsxref("Statements/for...in", "for...in")}} Schleife (oder durch {{jsxref("Object.keys()")}}) über die Eigenschaften des Objekts offengelegt wird. Die nicht-negativen ganzzahligen Schlüssel des Objekts (sowohl aufzählbar als auch nicht aufzählbar) werden zuerst in aufsteigender Reihenfolge zum Array hinzugefügt, gefolgt von den String-Schlüsseln in der Reihenfolge ihrer Hinzufügung.

In ES5 führt ein Argument, das keine Objekt (ein primitiver Wert) ist, zu einem {{jsxref("TypeError")}}. In ES2015 wird ein nicht-Objekt-Argument in ein Objekt umgewandelt.

```js
Object.getOwnPropertyNames("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames("foo");
// ["0", "1", "2", "length"]  (ES2015 code)
```

## Beispiele

### Verwendung von Object.getOwnPropertyNames()

```js
const arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort());
// ["0", "1", "2", "length"]

// Array-like object
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort());
// ["0", "1", "2"]

Object.getOwnPropertyNames(obj).forEach((val, idx, array) => {
  console.log(`${val} -> ${obj[val]}`);
});
// 0 -> a
// 1 -> b
// 2 -> c

// non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
      enumerable: false,
    },
  },
);
myObj.foo = 1;

console.log(Object.getOwnPropertyNames(myObj).sort()); // ["foo", "getFoo"]
```

Wenn Sie nur die aufzählbaren Eigenschaften wünschen, schauen Sie sich {{jsxref("Object.keys()")}} an oder verwenden Sie eine {{jsxref("Statements/for...in", "for...in")}} Schleife (beachten Sie, dass dies auch aufzählbare Eigenschaften zurückgibt, die entlang der Prototyp-Kette für das Objekt gefunden werden, es sei denn, letztere werden mit {{jsxref("Object.hasOwn()")}} gefiltert).

Elemente in der Prototyp-Kette werden nicht aufgeführt:

```js
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function () {};

function ChildClass() {
  this.prop = 5;
  this.method = function () {};
}
ChildClass.prototype = new ParentClass();
ChildClass.prototype.prototypeMethod = function () {};

console.log(Object.getOwnPropertyNames(new ChildClass()));
// ["prop", "method"]
```

### Nur nicht aufzählbare Eigenschaften erhalten

Dies verwendet die {{jsxref("Array.prototype.filter()")}}-Funktion, um die aufzählbaren Schlüssel (erhalten mit {{jsxref("Object.keys()")}}) aus einer Liste aller Schlüssel (erhalten mit `Object.getOwnPropertyNames()`) zu entfernen, und gibt so nur die nicht aufzählbaren Schlüssel als Ausgabe zurück.

```js
const target = myObject;
const enumAndNonEnum = Object.getOwnPropertyNames(target);
const enumOnly = new Set(Object.keys(target));
const nonEnumOnly = enumAndNonEnum.filter((key) => !enumOnly.has(key));

console.log(nonEnumOnly);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.getOwnPropertyNames` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.prototype.forEach()")}}
