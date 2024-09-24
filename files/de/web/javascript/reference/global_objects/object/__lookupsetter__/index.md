---
title: Object.prototype.__lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Dieses Feature wird zugunsten der {{jsxref("Object.getOwnPropertyDescriptor()")}} API als veraltet betrachtet. Das Verhalten dieser Methode ist nur für die Web-Kompatibilität spezifiziert und muss nicht auf jeder Plattform implementiert werden. Es könnte nicht überall funktionieren.

Die **`__lookupSetter__()`** Methode von {{jsxref("Object")}} Instanzen gibt die als Setter an die angegebene Eigenschaft gebundene Funktion zurück.

## Syntax

```js-nolint
__lookupSetter__(prop)
```

### Parameter

- `prop`
  - : Ein String, der den Namen der Eigenschaft enthält, deren Setter zurückgegeben werden soll.

### Rückgabewert

Die Funktion, die als Setter an die angegebene Eigenschaft gebunden ist. Gibt `undefined` zurück, wenn keine solche Eigenschaft gefunden wird oder die Eigenschaft eine [Daten-Eigenschaft](/de/docs/Web/JavaScript/Data_structures#data_property) ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt, alle außer [`null`-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) erben die `__lookupSetter__()` Methode. Wenn ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/get) für eine Objekteigenschaft definiert wurde, ist es nicht möglich, die Setter-Funktion über diese Eigenschaft zu referenzieren, da die Eigenschaft die Funktion nur aufruft, wenn sie gesetzt wird. `__lookupSetter__()` kann verwendet werden, um eine Referenz auf die Setter-Funktion zu erhalten.

`__lookupSetter__()` durchläuft die [Prototypen-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), um die angegebene Eigenschaft zu finden. Wenn ein Objekt entlang der Prototypen-Kette die angegebene [eigene Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) besitzt, wird das `set` Attribut der [Eigenschaftsbeschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) für diese Eigenschaft zurückgegeben. Ist diese Eigenschaft eine Daten-Eigenschaft, wird `undefined` zurückgegeben. Wird die Eigenschaft entlang der gesamten Prototypen-Kette nicht gefunden, wird ebenfalls `undefined` zurückgegeben.

`__lookupSetter__()` ist in der Spezifikation als "normalisiert optional" definiert, was bedeutet, dass keine Implementierung verpflichtet ist, dies zu implementieren. Allerdings implementieren es alle großen Browser, und aufgrund seiner fortgesetzten Nutzung ist es unwahrscheinlich, dass es entfernt wird. Wenn ein Browser `__lookupSetter__()` implementiert, muss er auch die Methoden [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), und [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) implementieren.

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

### Nachschlagen des Setters einer Eigenschaft auf die Standardweise

Sie sollten die {{jsxref("Object.getOwnPropertyDescriptor()")}} API verwenden, um den Setter einer Eigenschaft nachzuschlagen. Im Vergleich zu `__lookupSetter__()` ermöglicht diese Methode das Nachschlagen von [Symbol-](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)Eigenschaften. Die `Object.getOwnPropertyDescriptor()` Methode funktioniert auch mit [`null`-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), die nicht von `Object.prototype` erben und daher die `__lookupSetter__()` Methode nicht haben. Falls das Verhalten von `__lookupSetter__()`, die Prototypen-Kette zu durchlaufen, wichtig ist, können Sie es mit {{jsxref("Object.getPrototypeOf()")}} selbst implementieren.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Polyfill von `Object.prototype.__lookupSetter__` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS-Leitfaden: Definieren von Gettern und Settern](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
