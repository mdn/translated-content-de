---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyNames()`** gibt ein Array aller Eigenschaften (einschließlich nicht aufzählbarer Eigenschaften außer denen, die Symbol verwenden) zurück, die direkt in einem gegebenen Objekt gefunden werden.

{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}

## Syntax

```js-nolint
Object.getOwnPropertyNames(obj)
```

### Parameter

- `obj`
  - : Das Objekt, dessen aufzählbare und nicht aufzählbare Eigenschaften zurückgegeben werden sollen.

### Rückgabewert

Ein Array von Zeichenfolgen, das den direkt im gegebenen Objekt gefundenen Eigenschaften entspricht.

## Beschreibung

`Object.getOwnPropertyNames()` gibt ein Array zurück, dessen Elemente Zeichenfolgen sind, die den aufzählbaren und nicht aufzählbaren Eigenschaften entsprechen, die direkt in einem gegebenen Objekt `obj` gefunden werden. Die Reihenfolge der aufzählbaren Eigenschaften im Array entspricht der Reihenfolge, die von einer {{jsxref("Statements/for...in", "for...in")}} Schleife (oder von {{jsxref("Object.keys()")}}) über die Eigenschaften des Objekts ausgestellt wird. Die nicht-negativen ganzzahligen Schlüssel des Objekts (sowohl aufzählbar als auch nicht aufzählbar) werden zuerst in aufsteigender Reihenfolge zum Array hinzugefügt, gefolgt von den Zeichenfolgen-Schlüsseln in der Reihenfolge ihrer Einfügung.

In ES5 führt das Argument dieser Methode, wenn es kein Objekt (ein primitiver Wert) ist, zu einem {{jsxref("TypeError")}}. In ES2015 wird ein nicht-objektives Argument zu einem Objekt koerziert.

```js
Object.getOwnPropertyNames("foo");
// TypeError: "foo" ist kein Objekt (ES5 Code)

Object.getOwnPropertyNames("foo");
// ["0", "1", "2", "length"]  (ES2015 Code)
```

## Beispiele

### Verwendung von Object.getOwnPropertyNames()

```js
const arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort());
// ["0", "1", "2", "length"]

// Objekt, das einem Array ähnelt
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort());
// ["0", "1", "2"]

Object.getOwnPropertyNames(obj).forEach((val, idx, array) => {
  console.log(`${val} -> ${obj[val]}`);
});
// 0 -> a
// 1 -> b
// 2 -> c

// nicht aufzählbare Eigenschaft
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

Wenn Sie nur die aufzählbaren Eigenschaften wünschen, siehe {{jsxref("Object.keys()")}} oder verwenden Sie eine {{jsxref("Statements/for...in", "for...in")}} Schleife (beachten Sie, dass diese auch aufzählbare Eigenschaften, die entlang der Prototyp-Kette des Objekts gefunden werden, zurückgibt, es sei denn, letzteres wird mit {{jsxref("Object.hasOwn()")}} gefiltert).

Elemente in der Prototyp-Kette werden nicht aufgelistet:

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

Dies verwendet die {{jsxref("Array.prototype.filter()")}} Funktion, um die aufzählbaren Schlüssel (erhalten mit {{jsxref("Object.keys()")}}) aus einer Liste aller Schlüssel (erhalten mit `Object.getOwnPropertyNames()`) zu entfernen, wodurch nur die nicht aufzählbaren Schlüssel als Ausgabe übrig bleiben.

```js
const target = myObject;
const enumAndNonenum = Object.getOwnPropertyNames(target);
const enumOnly = new Set(Object.keys(target));
const nonenumOnly = enumAndNonenum.filter((key) => !enumOnly.has(key));

console.log(nonenumOnly);
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
