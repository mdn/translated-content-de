---
title: Object.prototype.__lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> Diese Funktion ist zugunsten der {{jsxref("Object.getOwnPropertyDescriptor()")}} API veraltet. Das Verhalten dieser Methode ist nur zur Web-Kompatibilität spezifiziert und muss nicht auf jeder Plattform implementiert werden. Es kann sein, dass sie nicht überall funktioniert.

Die **`__lookupGetter__()`**-Methode von {{jsxref("Object")}}-Instanzen gibt die Funktion zurück, die als Getter für die angegebene Eigenschaft gebunden ist.

## Syntax

```js-nolint
__lookupGetter__(prop)
```

### Parameter

- `prop`
  - : Eine Zeichenkette mit dem Namen der Eigenschaft, deren Getter zurückgegeben werden soll.

### Rückgabewert

Die Funktion, die als Getter für die angegebene Eigenschaft gebunden ist. Gibt `undefined` zurück, wenn keine solche Eigenschaft gefunden wird oder die Eigenschaft eine [Dateneigenschaft](/de/docs/Web/JavaScript/Data_structures#data_property) ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (also alle außer [null-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `__lookupGetter__()`-Methode. Wenn für eine Eigenschaft eines Objekts ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) definiert wurde, ist es nicht möglich, die Getter-Funktion über diese Eigenschaft zu referenzieren, da diese Eigenschaft auf den Rückgabewert dieser Funktion verweist. `__lookupGetter__()` kann verwendet werden, um eine Referenz auf die Getter-Funktion zu erhalten.

`__lookupGetter__()` durchläuft die [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), um die angegebene Eigenschaft zu finden. Wenn irgendein Objekt in der Prototypkette die angegebene [eigene Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) hat, wird das `get`-Attribut des [Eigenschaftsbeschreibers](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) für diese Eigenschaft zurückgegeben. Wenn die Eigenschaft eine Dateneigenschaft ist, wird `undefined` zurückgegeben. Wird die Eigenschaft entlang der gesamten Prototypkette nicht gefunden, wird ebenfalls `undefined` zurückgegeben.

`__lookupGetter__()` ist in der Spezifikation als "normativ optional" definiert, was bedeutet, dass keine Implementierung dazu verpflichtet ist, dies zu implementieren. Allerdings implementieren alle großen Browser diese Funktion, und aufgrund ihrer fortgesetzten Nutzung ist es unwahrscheinlich, dass sie entfernt wird. Wenn ein Browser `__lookupGetter__()` implementiert, muss er auch die Methoden [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__), [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) und [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) implementieren.

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

### Ein Getter auf die Standardweise nachschlagen

Sie sollten die {{jsxref("Object.getOwnPropertyDescriptor()")}}-API verwenden, um einen Getter einer Eigenschaft nachzuschlagen. Im Vergleich zu `__lookupGetter__()` ermöglicht diese Methode das Nachschlagen von [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Eigenschaften. Die `Object.getOwnPropertyDescriptor()`-Methode funktioniert auch mit [null-Prototyp-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), die nicht von `Object.prototype` erben und daher die `__lookupGetter__()`-Methode nicht besitzen. Wenn das Verhalten von `__lookupGetter__()`, die Prototypkette aufwärts zu durchlaufen, wichtig ist, können Sie es selbst mit {{jsxref("Object.getPrototypeOf()")}} implementieren.

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
- [JS-Leitfaden: Definieren von Gettern und Settern](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
