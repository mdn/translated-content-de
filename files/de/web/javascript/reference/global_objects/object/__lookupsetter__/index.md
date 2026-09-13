---
title: Object.prototype.__lookupSetter__()
short-title: __lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Dieses Feature ist zugunsten der {{jsxref("Object.getOwnPropertyDescriptor()")}} API veraltet. Das Verhalten dieser Methode wird nur für die Web-Kompatibilität spezifiziert und muss nicht auf jeder Plattform implementiert werden. Es könnte nicht überall funktionieren.

Die **`__lookupSetter__()`**-Methode von {{jsxref("Object")}}-Instanzen gibt die Funktion zurück, die als Setter an die angegebene Eigenschaft gebunden ist.

## Syntax

```js-nolint
__lookupSetter__(prop)
```

### Parameter

- `prop`
  - : Ein String, der den Namen der Eigenschaft enthält, deren Setter zurückgegeben werden soll.

### Rückgabewert

Die Funktion, die als Setter an die angegebene Eigenschaft gebunden ist. Liefert `undefined` zurück, wenn keine solche Eigenschaft gefunden wird oder die Eigenschaft eine [Dateneigenschaft](/de/docs/Web/JavaScript/Guide/Data_structures#data_property) ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (also alle außer [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die Methode `__lookupSetter__()`. Wenn ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/get) für eine Eigenschaft eines Objekts definiert wurde, ist es nicht möglich, auf die Setter-Funktion über diese Eigenschaft direkt zuzugreifen, da diese Eigenschaft die Funktion nur aufruft, wenn sie gesetzt wird. `__lookupSetter__()` kann verwendet werden, um eine Referenz auf die Setter-Funktion zu erhalten.

`__lookupSetter__()` durchläuft die [Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain), um die angegebene Eigenschaft zu finden. Wenn irgendein Objekt entlang der Prototypen-Kette die angegebene [eigene Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) besitzt, wird das `set`-Attribut des [Eigenschaftsbeschreibers](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) für diese Eigenschaft zurückgegeben. Ist diese Eigenschaft eine Dateneigenschaft, wird `undefined` zurückgegeben. Wird die Eigenschaft entlang der gesamten Prototypen-Kette nicht gefunden, wird ebenfalls `undefined` zurückgegeben.

`__lookupSetter__()` ist in der Spezifikation als "normativ optional" definiert, was bedeutet, dass keine Implementierung erforderlich ist. Allerdings implementieren alle großen Browser diese Methode, und aufgrund ihrer weiteren Nutzung ist es unwahrscheinlich, dass sie entfernt wird. Wenn ein Browser `__lookupSetter__()` implementiert, muss er auch die Methoden [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) und [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) implementieren.

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

### Nachschlagen des Setters einer Eigenschaft auf standardmäßige Weise

Sie sollten die {{jsxref("Object.getOwnPropertyDescriptor()")}} API verwenden, um den Setter einer Eigenschaft nachzuschlagen. Im Vergleich zu `__lookupSetter__()` ermöglicht diese Methode es, [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Eigenschaften nachzuschlagen. Die `Object.getOwnPropertyDescriptor()`-Methode funktioniert auch mit [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), die nicht von `Object.prototype` erben und daher die Methode `__lookupSetter__()` nicht besitzen. Wenn das Verhalten von `__lookupSetter__()`, die Prototypen-Kette zu durchlaufen, wichtig ist, können Sie dies selbst mit {{jsxref("Object.getPrototypeOf()")}} implementieren.

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
- [JS-Leitfaden: Definieren von Gettern und Settern](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
