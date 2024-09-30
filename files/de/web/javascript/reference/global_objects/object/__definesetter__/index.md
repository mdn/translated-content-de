---
title: Object.prototype.__defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}{{Deprecated_Header}}

> [!NOTE]
> Diese Funktion ist zugunsten der Definition von [setters](/de/docs/Web/JavaScript/Reference/Functions/set) mittels der [Object-Initialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) oder der {{jsxref("Object.defineProperty()")}} API veraltet. Das Verhalten dieser Methode ist nur zum Zweck der Web-Kompatibilität spezifiziert und muss auf keiner Plattform implementiert werden. Sie funktioniert möglicherweise nicht überall.

Die **`__defineSetter__()`**-Methode von {{jsxref("Object")}}-Instanzen bindet eine Eigenschaft eines Objekts an eine Funktion, die aufgerufen wird, wenn versucht wird, diese Eigenschaft zu setzen.

## Syntax

```js-nolint
__defineSetter__(prop, func)
```

### Parameter

- `prop`
  - : Ein String, der den Namen der Eigenschaft enthält, an die der Setter `func` gebunden ist.
- `func`
  - : Eine Funktion, die aufgerufen wird, wenn versucht wird, die angegebene Eigenschaft zu setzen. Diese Funktion erhält den folgenden Parameter:
    - `val`
      - : Der Wert, der versucht wird, `prop` zuzuweisen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `func` keine Funktion ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt alle außer [`null`-Prototype-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `__defineSetter__()`-Methode. Diese Methode ermöglicht es, einen [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) auf einem bereits vorhandenen Objekt zu definieren. Dies entspricht [`Object.defineProperty(obj, prop, { set: func, configurable: true, enumerable: true })`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), was bedeutet, dass die Eigenschaft aufzählbar und konfigurierbar ist und jeder vorhandene Getter, falls vorhanden, erhalten bleibt.

`__defineSetter__()` wird in der Spezifikation als "normativ optional" definiert, was bedeutet, dass keine Implementierung verpflichtet ist, dies zu unterstützen. Allerdings implementieren alle großen Browser diese Funktion, und aufgrund ihrer fortgesetzten Verwendung ist es unwahrscheinlich, dass sie entfernt wird. Wenn ein Browser `__defineSetter__()` implementiert, muss er auch die Methoden [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) und [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) implementieren.

## Beispiele

### Verwendung von \_\_defineSetter\_\_()

```js
const o = {};
o.__defineSetter__("value", function (val) {
  this.anotherValue = val;
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

### Definieren einer Setter-Eigenschaft auf standardmäßige Weise

Sie können die `set`-Syntax verwenden, um einen Setter zu definieren, wenn das Objekt zuerst initialisiert wird.

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

Sie können auch {{jsxref("Object.defineProperty()")}} verwenden, um einen Setter auf einem Objekt zu definieren, nachdem es erstellt wurde. Im Vergleich zu `__defineSetter__()` ermöglicht diese Methode, die Aufzählbarkeit und Konfigurierbarkeit des Setters zu steuern, sowie [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Eigenschaften zu definieren. Die `Object.defineProperty()`-Methode funktioniert auch mit [`null`-Prototype-Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), die nicht von `Object.prototype` erben und daher nicht über die `__defineSetter__()`-Methode verfügen.

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

- [Polyfill von `Object.prototype.__defineSetter__` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JS-Leitfaden: Definieren von Gettern und Settern](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
- [Firefox-Bug 647423](https://bugzil.la/647423)
