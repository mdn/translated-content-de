---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Object.getOwnPropertyNames()`** gibt ein Array aller Eigenschaften (einschließlich nicht aufgezählter Eigenschaften mit Ausnahme derjenigen, die `Symbol` verwenden) zurück, die direkt in einem gegebenen Objekt gefunden werden.

{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}

## Syntax

```js-nolint
Object.getOwnPropertyNames(obj)
```

### Parameter

- `obj`
  - : Das Objekt, dessen aufgezählte und nicht aufgezählte Eigenschaften zurückgegeben werden sollen.

### Rückgabewert

Ein Array von Zeichenfolgen, das den direkt im gegebenen Objekt gefundenen Eigenschaften entspricht.

## Beschreibung

`Object.getOwnPropertyNames()` gibt ein Array zurück, dessen Elemente Zeichenfolgen sind, die den aufgezählten und nicht aufgezählten Eigenschaften entsprechen, die direkt in einem gegebenen Objekt `obj` gefunden werden. Die Anordnung der aufgezählten Eigenschaften im Array entspricht der im {{jsxref("Statements/for...in", "for...in")}}-Schleife (oder {{jsxref("Object.keys()")}}) über die Eigenschaften des Objekts. Die nicht-negativen ganzzahligen Schlüssel des Objekts (sowohl aufgezählte als auch nicht aufgezählte) werden zuerst in aufsteigender Reihenfolge dem Array hinzugefügt, gefolgt von den Zeichenfolgenschlüsseln in der Reihenfolge der Einfügung.

In ES5 wird ein {{jsxref("TypeError")}} ausgelöst, wenn das Argument dieser Methode kein Objekt (ein primitiver Wert) ist. In ES2015 wird ein Argument, das kein Objekt ist, in ein Objekt umgewandelt.

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

Wenn Sie nur die aufgezählten Eigenschaften wünschen, verwenden Sie {{jsxref("Object.keys()")}} oder eine {{jsxref("Statements/for...in", "for...in")}}-Schleife (beachten Sie, dass dies auch aufgezählte Eigenschaften entlang der Prototypenkette für das Objekt zurückgibt, es sei denn, letztere werden mit {{jsxref("Object.hasOwn()")}} gefiltert).

Elemente in der Prototypenkette werden nicht aufgelistet:

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

### Nur nicht aufgezählte Eigenschaften abrufen

Dies verwendet die Funktion {{jsxref("Array.prototype.filter()")}}, um die aufgezählten Schlüssel (erhalten mit {{jsxref("Object.keys()")}}) aus einer Liste aller Schlüssel (erhalten mit `Object.getOwnPropertyNames()`) zu entfernen, wodurch nur die nicht aufgezählten Schlüssel als Ausgabe zurückgegeben werden.

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
