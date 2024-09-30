---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyNames()`** gibt ein Array mit allen Eigenschaften (einschließlich nicht-auflistbarer Eigenschaften, außer denen, die ein Symbol verwenden), die direkt in einem gegebenen Objekt gefunden werden, zurück.

{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}

## Syntax

```js-nolint
Object.getOwnPropertyNames(obj)
```

### Parameter

- `obj`
  - : Das Objekt, dessen auflistbare und nicht-auflistbare Eigenschaften zurückgegeben werden sollen.

### Rückgabewert

Ein Array von Strings, das den direkt im gegebenen Objekt gefundenen Eigenschaften entspricht.

## Beschreibung

`Object.getOwnPropertyNames()` gibt ein Array zurück, dessen Elemente Strings sind, die den auflistbaren und nicht-auflistbaren Eigenschaften entsprechen, die direkt in einem gegebenen Objekt `obj` gefunden werden. Die Reihenfolge der auflistbaren Eigenschaften im Array ist mit der Reihenfolge konsistent, die von einer {{jsxref("Statements/for...in", "for...in")}}-Schleife (oder von {{jsxref("Object.keys()")}}) über die Eigenschaften des Objekts offengelegt wird. Die nicht-negativen ganzzahligen Schlüssel des Objekts (sowohl auflistbare als auch nicht-auflistbare) werden zuerst in aufsteigender Reihenfolge zum Array hinzugefügt, gefolgt von den String-Schlüsseln in der Reihenfolge der Einfügung.

In ES5 führt ein nicht-objekthaftes Argument (ein Primitive) zu einem {{jsxref("TypeError")}}. In ES2015 wird ein nicht-objekthaftes Argument in ein Objekt umgewandelt.

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

Wenn Sie nur die auflistbaren Eigenschaften möchten, sehen Sie sich {{jsxref("Object.keys()")}} an oder verwenden Sie eine {{jsxref("Statements/for...in", "for...in")}}-Schleife (beachten Sie, dass dies auch auflistbare Eigenschaften zurückgibt, die entlang der Prototypkette für das Objekt gefunden werden, es sei denn, letztere wird mit {{jsxref("Object.hasOwn()")}} gefiltert).

Elemente in der Prototypkette werden nicht aufgelistet:

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

### Nur nicht-auflistbare Eigenschaften abrufen

Dies verwendet die {{jsxref("Array.prototype.filter()")}}-Funktion, um die auflistbaren Schlüssel (erhalten mit {{jsxref("Object.keys()")}}) aus einer Liste aller Schlüssel (erhalten mit `Object.getOwnPropertyNames()`) zu entfernen, was nur die nicht-auflistbaren Schlüssel als Ausgabe ergibt.

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
- [Auflistbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.hasOwn()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.prototype.forEach()")}}
