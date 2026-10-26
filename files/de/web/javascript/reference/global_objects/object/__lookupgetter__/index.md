---
title: Object.prototype.__lookupGetter__()
short-title: __lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> Diese Funktion gilt zugunsten der API {{jsxref("Object.getOwnPropertyDescriptor()")}} als veraltet. Das Verhalten dieser Methode ist nur aus Gründen der Webkompatibilität spezifiziert; keine Plattform ist verpflichtet, sie zu implementieren. Sie funktioniert möglicherweise nicht überall.

Die Methode **`__lookupGetter__()`** von {{jsxref("Object")}}-Instanzen gibt die Funktion zurück, die als Getter an die angegebene Eigenschaft gebunden ist.

## Syntax

```js-nolint
__lookupGetter__(prop)
```

### Parameter

- `prop`
  - : Ein String mit dem Namen der Eigenschaft, deren Getter zurückgegeben werden soll.

### Rückgabewert

Die Funktion, die als Getter an die angegebene Eigenschaft gebunden ist. Gibt `undefined` zurück, wenn keine solche Eigenschaft gefunden wird oder wenn die Eigenschaft eine [Dateneigenschaft](/de/docs/Web/JavaScript/Guide/Data_structures#data_property) ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (also alle außer [Objekten mit `null` als Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die Methode `__lookupGetter__()`. Wenn für eine Eigenschaft eines Objekts ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) definiert wurde, kann über diese Eigenschaft nicht auf die Getter-Funktion zugegriffen werden, da die Eigenschaft auf den Rückgabewert dieser Funktion verweist. Mit `__lookupGetter__()` lässt sich eine Referenz auf die Getter-Funktion abrufen.

`__lookupGetter__()` durchsucht die [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) nach der angegebenen Eigenschaft. Wenn ein Objekt in der Prototypkette die angegebene [eigene Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) besitzt, wird das Attribut `get` des [Eigenschaftsdeskriptors](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) dieser Eigenschaft zurückgegeben. Ist die Eigenschaft eine Dateneigenschaft, wird `undefined` zurückgegeben. Wird die Eigenschaft in der gesamten Prototypkette nicht gefunden, wird ebenfalls `undefined` zurückgegeben.

`__lookupGetter__()` ist in der Spezifikation als „normative optional“ definiert. Das bedeutet, dass keine Implementierung verpflichtet ist, diese Methode bereitzustellen. Allerdings wird sie von allen wichtigen Browsern implementiert, und aufgrund ihrer fortgesetzten Verwendung ist es unwahrscheinlich, dass sie entfernt wird. Wenn ein Browser `__lookupGetter__()` implementiert, muss er auch die Methoden [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__), [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) und [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) implementieren.

## Beispiele

### \_\_lookupGetter\_\_() verwenden

```js
const obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

obj.__lookupGetter__("foo");
// [Function: get foo]
```

### Den Getter einer Eigenschaft auf die übliche Weise ermitteln

Verwenden Sie die API {{jsxref("Object.getOwnPropertyDescriptor()")}}, um den Getter einer Eigenschaft zu ermitteln. Im Gegensatz zu `__lookupGetter__()` lassen sich damit auch [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Eigenschaften ermitteln. Die Methode `Object.getOwnPropertyDescriptor()` funktioniert außerdem mit [Objekten mit `null` als Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Diese erben nicht von `Object.prototype` und verfügen daher nicht über die Methode `__lookupGetter__()`. Falls es wichtig ist, wie `__lookupGetter__()` die Prototypkette durchsucht, können Sie dieses Verhalten mit {{jsxref("Object.getPrototypeOf()")}} selbst implementieren.

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

- [Polyfill für `Object.prototype.__lookupGetter__` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS-Leitfaden: Getter und Setter definieren](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
