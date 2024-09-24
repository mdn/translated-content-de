---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Object.keys()`** gibt ein Array der eigenen aufzählbaren, mit Zeichenfolgen indizierten Eigenschaftenamen eines gegebenen Objekts zurück.

{{EmbedInteractiveExample("pages/js/object-keys.html")}}

## Syntax

```js-nolint
Object.keys(obj)
```

### Parameter

- `obj`
  - : Ein Objekt.

### Rückgabewert

Ein Array von Zeichenfolgen, das die eigenen aufzählbaren, mit Zeichenfolgen indizierten Eigenschaftsschlüssel des gegebenen Objekts darstellt.

## Beschreibung

`Object.keys()` gibt ein Array zurück, dessen Elemente Zeichenfolgen sind, die den aufzählbaren, mit Zeichenfolgen indizierten Eigenschaftenamen entsprechen, die direkt auf dem `object` gefunden werden. Dies ist dasselbe wie das Iterieren mit einer {{jsxref("Statements/for...in", "for...in")}}-Schleife, außer dass eine `for...in`-Schleife auch Eigenschaften in der Prototypenkette auflistet. Die Reihenfolge des von `Object.keys()` zurückgegebenen Arrays entspricht derjenigen, die von einer {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt wird.

Wenn Sie die Eigenschaftswerte benötigen, verwenden Sie stattdessen {{jsxref("Object.values()")}}. Wenn Sie sowohl die Eigenschaftsschlüssel als auch die Werte benötigen, verwenden Sie stattdessen {{jsxref("Object.entries()")}}.

## Beispiele

### Verwendung von Object.keys()

```js
// Einfaches Array
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// Array-ähnliches Objekt
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// Array-ähnliches Objekt mit zufälliger Schlüsselreihenfolge
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo ist eine nicht-auflistbare Eigenschaft
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']
```

Wenn Sie _alle_ mit Zeichenfolgen indizierten eigenen Eigenschaften, einschließlich nicht-auflistbarer, wünschen, siehe {{jsxref("Object.getOwnPropertyNames()")}}.

### Verwendung von Object.keys() mit Primitiven

Nicht-Objekt-Argumente werden [in Objekte umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können nicht in Objekte umgewandelt werden und werfen einen {{jsxref("TypeError")}}. Nur Strings können eigene aufzählbare Eigenschaften haben, während alle anderen Primitiven ein leeres Array zurückgeben.

```js
// Strings haben Indizes als eigene aufzählbare Eigenschaften
console.log(Object.keys("foo")); // ['0', '1', '2']

// Andere Primitive außer undefined und null haben keine eigenen Eigenschaften
console.log(Object.keys(100)); // []
```

> [!NOTE]
> In ES5 führte das Übergeben eines Nicht-Objekts zu `Object.keys()` zu einem {{jsxref("TypeError")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.keys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.keys()")}}
