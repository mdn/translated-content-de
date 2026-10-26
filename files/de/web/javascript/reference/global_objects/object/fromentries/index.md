---
title: Object.fromEntries()
short-title: fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Object.fromEntries()`** wandelt eine Liste von Schlüssel-Wert-Paaren in ein Objekt um.

{{InteractiveExample("JavaScript Demo: Object.fromEntries()")}}

```js interactive-example
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }
```

## Syntax

```js-nolint
Object.fromEntries(iterable)
```

### Parameter

- `iterable`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), beispielsweise ein {{jsxref("Array")}} oder eine {{jsxref("Map")}}, das eine Liste von Objekten enthält. Jedes dieser Objekte sollte zwei Eigenschaften haben:
    - `0`
      - : Ein String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), das den Eigenschaftsschlüssel darstellt.
    - `1`
      - : Der Eigenschaftswert.

    Üblicherweise wird ein solches Objekt als Array mit zwei Elementen dargestellt: Das erste Element ist der Eigenschaftsschlüssel, das zweite der Eigenschaftswert.

### Rückgabewert

Ein neues Objekt, dessen Eigenschaften durch die Einträge des iterierbaren Objekts bestimmt werden.

## Beschreibung

Die Methode `Object.fromEntries()` nimmt eine Liste von Schlüssel-Wert-Paaren entgegen und gibt ein neues Objekt zurück, dessen Eigenschaften durch diese Einträge bestimmt werden. Das Argument `iterable` muss ein Objekt sein, das eine `[Symbol.iterator]()`-Methode implementiert. Diese Methode gibt ein Iterator-Objekt zurück, das Array-ähnliche Objekte mit jeweils zwei Elementen liefert. Das erste Element wird als Eigenschaftsschlüssel verwendet, das zweite ist der zugehörige Eigenschaftswert.

`Object.fromEntries()` bewirkt das Gegenteil von {{jsxref("Object.entries()")}}, mit einem Unterschied: `Object.entries()` gibt nur Eigenschaften mit String-Schlüsseln zurück, während `Object.fromEntries()` auch Eigenschaften mit Symbol-Schlüsseln erstellen kann.

> [!NOTE]
> Anders als {{jsxref("Array.from()")}} verwendet `Object.fromEntries()` den Wert von `this` nicht. Wenn Sie die Methode auf einem anderen Konstruktor aufrufen, werden daher keine Objekte dieses Typs erstellt.

## Beispiele

### Eine Map in ein Objekt umwandeln

Mit `Object.fromEntries` können Sie eine {{jsxref("Map")}} in ein {{jsxref("Object")}} umwandeln:

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Ein Array in ein Objekt umwandeln

Mit `Object.fromEntries` können Sie ein {{jsxref("Array")}} in ein {{jsxref("Object")}} umwandeln:

```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### Objekte umwandeln

Mit `Object.fromEntries`, der umgekehrt arbeitenden Methode {{jsxref("Object.entries()")}} und [Methoden zur Array-Manipulation](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) können Sie Objekte wie folgt umwandeln:

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Object.fromEntries` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [Polyfill für `Object.fromEntries` von es-shims](https://www.npmjs.com/package/object.fromentries)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
