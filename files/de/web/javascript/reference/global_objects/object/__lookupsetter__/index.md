---
title: Object.prototype.__lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Diese Funktion ist zugunsten der {{jsxref("Object.getOwnPropertyDescriptor()")}} API veraltet. Das Verhalten dieser Methode ist nur für die Web-Kompatibilität spezifiziert und muss nicht auf allen Plattformen implementiert werden. Möglicherweise funktioniert sie nicht überall.

Die **`__lookupSetter__()`** Methode von {{jsxref("Object")}} Instanzen gibt die Funktion zurück, die als Setter an die angegebene Eigenschaft gebunden ist.

## Syntax

```js-nolint
__lookupSetter__(prop)
```

### Parameter

- `prop`
  - : Ein String, der den Namen der Eigenschaft enthält, deren Setter zurückgegeben werden soll.

### Rückgabewert

Die Funktion, die als Setter an die angegebene Eigenschaft gebunden ist. Gibt `undefined` zurück, wenn keine solche Eigenschaft gefunden wird oder die Eigenschaft eine [Dateneigenschaft](/de/docs/Web/JavaScript/Data_structures#data_property) ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt alle außer [`null`-Prototyp Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototyp-objekte)), erben die `__lookupSetter__()` Methode. Wenn ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/get) für eine Eigenschaft eines Objekts definiert wurde, ist es nicht möglich, die Setter-Funktion durch diese Eigenschaft zu referenzieren, da diese Eigenschaft die Funktion nur beim Setzen aufruft. `__lookupSetter__()` kann verwendet werden, um eine Referenz auf die Setter-Funktion zu erhalten.

`__lookupSetter__()` durchläuft die [Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), um die angegebene Eigenschaft zu finden. Wenn ein Objekt entlang der Prototyp-Kette die angegebene [eigene Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) hat, wird das `set` Attribut des [Eigenschaftsdeskriptors](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) für diese Eigenschaft zurückgegeben. Wenn diese Eigenschaft eine Dateneigenschaft ist, wird `undefined` zurückgegeben. Wenn die Eigenschaft entlang der gesamten Prototyp-Kette nicht gefunden wird, wird ebenfalls `undefined` zurückgegeben.

`__lookupSetter__()` ist in der Spezifikation als "normativ optional" definiert, was bedeutet, dass keine Implementierung erforderlich ist, um dies zu implementieren. Alle großen Browser implementieren es jedoch, und aufgrund seiner fortgesetzten Nutzung ist es unwahrscheinlich, dass es entfernt wird. Wenn ein Browser `__lookupSetter__()` implementiert, muss er auch die Methoden [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) und [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) implementieren.

## Beispiele

### Verwendung von \_\_lookupSetter\_\_()

```js
const obj = {
  set foo(value) {
    this.bar = value;
  },
};

obj.__lookupSetter__("foo");
// [Function: set foo]
```

### Das Auffinden eines Setters einer Eigenschaft auf die Standardweise

Sie sollten die {{jsxref("Object.getOwnPropertyDescriptor()")}} API verwenden, um den Setter einer Eigenschaft nachzuschlagen. Im Vergleich zu `__lookupSetter__()` ermöglicht diese Methode das Nachschlagen von [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) Eigenschaften. Die Methode `Object.getOwnPropertyDescriptor()` funktioniert auch mit [`null`-Prototyp Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototyp-objekte), die nicht von `Object.prototype` erben und daher die `__lookupSetter__()` Methode nicht haben. Wenn das Verhalten von `__lookupSetter__()` beim Durchlaufen der Prototyp-Kette von Bedeutung ist, können Sie es mit {{jsxref("Object.getPrototypeOf()")}} selbst implementieren.

```js
const obj = {
  set foo(value) {
    this.bar = value;
  },
};

Object.getOwnPropertyDescriptor(obj, "foo").set;
// [Function: set foo]
```

```js
const obj2 = {
  __proto__: {
    set foo(value) {
      this.bar = value;
    },
  },
};

function findSetter(obj, prop) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (desc) {
      return desc.set;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

console.log(findSetter(obj2, "foo")); // [Function: set foo]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.prototype.__lookupSetter__` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS Leitfaden: Definieren von Gettern und Settern](/de/docs/Web/JavaScript/Guide/Working_with_objects#definieren_von_gettern_und_settern)
