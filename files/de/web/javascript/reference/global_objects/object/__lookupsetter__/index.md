---
title: Object.prototype.__lookupSetter__()
short-title: __lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> Diese Funktion ist zugunsten der API {{jsxref("Object.getOwnPropertyDescriptor()")}} veraltet. Das Verhalten dieser Methode ist nur aus Gründen der Webkompatibilität spezifiziert; keine Plattform ist verpflichtet, sie zu implementieren. Sie funktioniert möglicherweise nicht überall.

Die Methode **`__lookupSetter__()`** von {{jsxref("Object")}}-Instanzen gibt die Funktion zurück, die als Setter an die angegebene Eigenschaft gebunden ist.

## Syntax

```js-nolint
__lookupSetter__(prop)
```

### Parameter

- `prop`
  - : Ein String mit dem Namen der Eigenschaft, deren Setter zurückgegeben werden soll.

### Rückgabewert

Die Funktion, die als Setter an die angegebene Eigenschaft gebunden ist. Gibt `undefined` zurück, wenn keine solche Eigenschaft gefunden wird oder wenn die Eigenschaft eine [Dateneigenschaft](/de/docs/Web/JavaScript/Guide/Data_structures#data_property) ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (also alle außer [Objekten mit `null` als Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die Methode `__lookupSetter__()`. Wenn für eine Eigenschaft eines Objekts ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/get) definiert wurde, kann über diese Eigenschaft nicht auf die Setter-Funktion zugegriffen werden, da die Eigenschaft die Funktion nur aufruft, wenn ihr ein Wert zugewiesen wird. Mit `__lookupSetter__()` lässt sich eine Referenz auf die Setter-Funktion abrufen.

`__lookupSetter__()` durchsucht die [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) nach der angegebenen Eigenschaft. Wenn ein Objekt in der Prototypkette die angegebene [eigene Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) besitzt, wird das Attribut `set` des [Eigenschaftsdeskriptors](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) dieser Eigenschaft zurückgegeben. Handelt es sich um eine Dateneigenschaft, wird `undefined` zurückgegeben. Wird die Eigenschaft in der gesamten Prototypkette nicht gefunden, wird ebenfalls `undefined` zurückgegeben.

`__lookupSetter__()` ist in der Spezifikation als „normative optional“ definiert. Das bedeutet, dass keine Implementierung diese Methode bereitstellen muss. Allerdings implementieren alle großen Browser sie. Da sie weiterhin verwendet wird, ist es unwahrscheinlich, dass sie entfernt wird. Wenn ein Browser `__lookupSetter__()` implementiert, muss er auch die Methoden [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) und [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) implementieren.

## Beispiele

### \_\_lookupSetter\_\_() verwenden

```js
const obj = {
  set foo(value) {
    this.bar = value;
  },
};

obj.__lookupSetter__("foo");
// [Function: set foo]
```

### Den Setter einer Eigenschaft auf die übliche Weise ermitteln

Verwenden Sie die API {{jsxref("Object.getOwnPropertyDescriptor()")}}, um den Setter einer Eigenschaft zu ermitteln. Im Gegensatz zu `__lookupSetter__()` können Sie damit auch Eigenschaften mit einem [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) als Schlüssel ermitteln. Die Methode `Object.getOwnPropertyDescriptor()` funktioniert außerdem mit [Objekten mit `null` als Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Diese erben nicht von `Object.prototype` und besitzen daher keine Methode `__lookupSetter__()`. Falls es wichtig ist, wie bei `__lookupSetter__()` die Prototypkette zu durchsuchen, können Sie dieses Verhalten mit {{jsxref("Object.getPrototypeOf()")}} selbst implementieren.

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

- [Polyfill für `Object.prototype.__lookupSetter__` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS-Leitfaden: Getter und Setter definieren](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
