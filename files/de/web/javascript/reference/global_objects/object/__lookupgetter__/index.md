---
title: Object.prototype.__lookupGetter__()
short-title: __lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> Diese Funktion ist zugunsten der {{jsxref("Object.getOwnPropertyDescriptor()")}} API veraltet. Das Verhalten dieser Methode ist nur zur Browser-Kompatibilität spezifiziert und muss nicht auf jeder Plattform implementiert werden. Es funktioniert möglicherweise nicht überall.

Die **`__lookupGetter__()`** Methode von {{jsxref("Object")}} Instanzen gibt die Funktion zurück, die als Getter an die angegebene Eigenschaft gebunden ist.

## Syntax

```js-nolint
__lookupGetter__(prop)
```

### Parameter

- `prop`
  - : Ein String, der den Namen der Eigenschaft enthält, dessen Getter zurückgegeben werden soll.

### Rückgabewert

Die Funktion, die als Getter an die angegebene Eigenschaft gebunden ist. Gibt `undefined` zurück, wenn keine solche Eigenschaft gefunden wird oder die Eigenschaft eine [Daten-Eigenschaft](/de/docs/Web/JavaScript/Guide/Data_structures#data_property) ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer [`null`-Prototyp Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `__lookupGetter__()` Methode. Wenn ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) für eine Eigenschaft eines Objekts definiert wurde, ist es nicht möglich, die Getter-Funktion über diese Eigenschaft zu referenzieren, da sich diese Eigenschaft auf den Rückgabewert dieser Funktion bezieht. `__lookupGetter__()` kann verwendet werden, um eine Referenz auf die Getter-Funktion zu erhalten.

`__lookupGetter__()` durchläuft die [Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain), um die angegebene Eigenschaft zu finden. Wenn ein beliebiges Objekt auf der Prototypen-Kette die angegebene [eigene Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) hat, wird das `get` Attribut des [Eigenschaftsdeskriptors](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) für diese Eigenschaft zurückgegeben. Wenn diese Eigenschaft eine Daten-Eigenschaft ist, wird `undefined` zurückgegeben. Wenn die Eigenschaft entlang der gesamten Prototypen-Kette nicht gefunden wird, wird ebenfalls `undefined` zurückgegeben.

`__lookupGetter__()` ist in der Spezifikation als "normativ optional" definiert, was bedeutet, dass keine Implementierung erforderlich ist, um dies zu implementieren. Allerdings implementieren alle großen Browser diese Methode, und aufgrund ihrer fortwährenden Nutzung ist eine Entfernung unwahrscheinlich. Wenn ein Browser `__lookupGetter__()` implementiert, muss er auch die Methoden [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__), [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) und [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) implementieren.

## Beispiele

### Verwendung von \_\_lookupGetter\_\_()

```js
const obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

obj.__lookupGetter__("foo");
// [Function: get foo]
```

### Aufrufen eines Eigenschafts-Getters auf standardisierte Weise

Sie sollten die {{jsxref("Object.getOwnPropertyDescriptor()")}} API verwenden, um den Getter einer Eigenschaft aufzurufen. Im Vergleich zu `__lookupGetter__()` ermöglicht diese Methode das Aufrufen von [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) Eigenschaften. Die `Object.getOwnPropertyDescriptor()` Methode funktioniert auch mit [`null`-Prototyp Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), die nicht von `Object.prototype` erben und daher die `__lookupGetter__()` Methode nicht haben. Wenn das Verhalten von `__lookupGetter__()`, die Prototypen-Kette hochzulaufen, wichtig ist, können Sie es selbst mit {{jsxref("Object.getPrototypeOf()")}} implementieren.

```js
const obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

Object.getOwnPropertyDescriptor(obj, "foo").get;
// [Function: get foo]
```

```js
const obj2 = {
  __proto__: {
    get foo() {
      return Math.random() > 0.5 ? "foo" : "bar";
    },
  },
};

function findGetter(obj, prop) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (desc) {
      return desc.get;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

console.log(findGetter(obj2, "foo")); // [Function: get foo]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.prototype.__lookupGetter__` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS Leitfaden: Definieren von Gettern und Settern](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
