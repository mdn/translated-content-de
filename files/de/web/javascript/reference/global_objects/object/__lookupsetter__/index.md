---
title: Object.prototype.__lookupSetter__()
short-title: __lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

> [!NOTE]
> Dieses Feature ist zugunsten der {{jsxref("Object.getOwnPropertyDescriptor()")}} API veraltet. Das Verhalten dieser Methode ist nur für die Web-Kompatibilität spezifiziert und muss auf keiner Plattform implementiert werden. Es funktioniert möglicherweise nicht überall.

Die **`__lookupSetter__()`** Methode von {{jsxref("Object")}} Instanzen gibt die Funktion zurück, die als Setter für die angegebene Eigenschaft gebunden ist.

## Syntax

```js-nolint
__lookupSetter__(prop)
```

### Parameter

- `prop`
  - : Ein String, der den Namen der Eigenschaft enthält, deren Setter zurückgegeben werden soll.

### Rückgabewert

Die Funktion, die als Setter für die angegebene Eigenschaft gebunden ist. Gibt `undefined` zurück, wenn keine solche Eigenschaft gefunden wird oder die Eigenschaft ein [Daten-Property](/de/docs/Web/JavaScript/Guide/Data_structures#data_property) ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (d.h. alle außer [`null`-Prototypen-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `__lookupSetter__()` Methode. Wenn ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/get) für eine Eigenschaft eines Objekts definiert wurde, ist es nicht möglich, die Setter-Funktion über diese Eigenschaft zu referenzieren, da diese Eigenschaft die Funktion nur aufruft, wenn sie gesetzt wird. `__lookupSetter__()` kann verwendet werden, um einen Verweis auf die Setter-Funktion zu erhalten.

`__lookupSetter__()` geht die [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) hoch, um die angegebene Eigenschaft zu finden. Wenn irgendein Objekt entlang der Prototypkette die angegebene [eigene Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) hat, wird das `set` Attribut des [Property Descriptors](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) für diese Eigenschaft zurückgegeben. Wenn diese Eigenschaft ein Daten-Property ist, wird `undefined` zurückgegeben. Wenn die Eigenschaft entlang der gesamten Prototypkette nicht gefunden wird, wird ebenfalls `undefined` zurückgegeben.

`__lookupSetter__()` ist in der Spezifikation als "normativ optional" definiert, was bedeutet, dass keine Implementierung dies implementieren muss. Allerdings implementieren alle großen Browser diese Methode, und aufgrund ihrer fortgesetzten Nutzung ist es unwahrscheinlich, dass sie entfernt wird. Wenn ein Browser `__lookupSetter__()` implementiert, muss er auch die Methoden [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) und [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) implementieren.

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

### Nachschlagen eines Setter einer Eigenschaft auf die standardmäßige Weise

Sie sollten die {{jsxref("Object.getOwnPropertyDescriptor()")}} API verwenden, um den Setter einer Eigenschaft nachzuschlagen. Im Vergleich zu `__lookupSetter__()` ermöglicht diese Methode die Nachschlage von [Symbolen](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) Eigenschaften. Die `Object.getOwnPropertyDescriptor()` Methode funktioniert auch mit [`null`-Prototypen-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), die nicht von `Object.prototype` erben und daher nicht die `__lookupSetter__()` Methode haben. Wenn das Verhalten von `__lookupSetter__()`, die Prototypkette hochzugehen, wichtig ist, können Sie es selbst mit {{jsxref("Object.getPrototypeOf()")}} implementieren.

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
- [JS Leitfaden: Definieren von Gettern und Settern](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
