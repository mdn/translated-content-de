---
title: Object.prototype.__defineSetter__()
short-title: __defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> Diese Funktion ist veraltet. Stattdessen sollten Sie [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) mit der [Objektinitialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) oder der API {{jsxref("Object.defineProperty()")}} definieren. Das Verhalten dieser Methode ist nur aus Gründen der Webkompatibilität spezifiziert; keine Plattform ist verpflichtet, sie zu implementieren. Sie funktioniert möglicherweise nicht überall.

Die Methode **`__defineSetter__()`** von {{jsxref("Object")}}-Instanzen verknüpft eine Eigenschaft eines Objekts mit einer Funktion, die aufgerufen wird, wenn versucht wird, dieser Eigenschaft einen Wert zuzuweisen.

## Syntax

```js-nolint
__defineSetter__(prop, func)
```

### Parameter

- `prop`
  - : Ein String mit dem Namen der Eigenschaft, an die der Setter `func` gebunden wird.
- `func`
  - : Eine Funktion, die aufgerufen wird, wenn versucht wird, der angegebenen Eigenschaft einen Wert zuzuweisen. Diese Funktion erhält den folgenden Parameter:
    - `val`
      - : Der Wert, der `prop` zugewiesen werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `func` keine Funktion ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (also alle außer [Objekten mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die Methode `__defineSetter__()`. Mit dieser Methode lässt sich ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) für ein bereits vorhandenes Objekt definieren. Dies entspricht [`Object.defineProperty(obj, prop, { set: func, configurable: true, enumerable: true })`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). Die Eigenschaft ist damit aufzählbar und konfigurierbar; ein gegebenenfalls vorhandener Getter bleibt erhalten.

`__defineSetter__()` ist in der Spezifikation als „normativ optional“ definiert. Das bedeutet, dass Implementierungen diese Methode nicht bereitstellen müssen. Alle wichtigen Browser implementieren sie jedoch, und aufgrund ihrer anhaltenden Verwendung ist es unwahrscheinlich, dass sie entfernt wird. Wenn ein Browser `__defineSetter__()` implementiert, muss er auch die Methoden [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) und [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) implementieren.

## Beispiele

### \_\_defineSetter\_\_() verwenden

```js
const o = {};
o.__defineSetter__("value", function (val) {
  this.anotherValue = val;
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

### Eine Setter-Eigenschaft auf standardkonforme Weise definieren

Mit der `set`-Syntax können Sie einen Setter definieren, wenn das Objekt initialisiert wird.

```js
const o = {
  set value(val) {
    this.anotherValue = val;
  },
};
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

Sie können auch {{jsxref("Object.defineProperty()")}} verwenden, um einen Setter für ein bereits erstelltes Objekt zu definieren. Im Gegensatz zu `__defineSetter__()` können Sie mit dieser Methode steuern, ob die Setter-Eigenschaft aufzählbar und konfigurierbar ist. Außerdem können Sie damit [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Eigenschaften definieren. Die Methode `Object.defineProperty()` funktioniert auch mit [Objekten mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), die nicht von `Object.prototype` erben und daher keine Methode `__defineSetter__()` besitzen.

```js
const o = {};
Object.defineProperty(o, "value", {
  set(val) {
    this.anotherValue = val;
  },
  configurable: true,
  enumerable: true,
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Object.prototype.__defineSetter__` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JS-Leitfaden: Getter und Setter definieren](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
- [Firefox-Bug 647423](https://bugzil.la/647423)
