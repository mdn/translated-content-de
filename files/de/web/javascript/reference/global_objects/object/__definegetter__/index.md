---
title: Object.prototype.__defineGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}{{Deprecated_Header}}

> [!NOTE]
> Dieses Feature wird zugunsten der Definition von [Gettern](/de/docs/Web/JavaScript/Reference/Functions/get) mit der [Objektinitialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) oder der {{jsxref("Object.defineProperty()")}}-API als veraltet betrachtet. Das Verhalten dieser Methode ist nur für die Web-Kompatibilität festgelegt und muss auf keiner Plattform implementiert werden. Sie funktioniert möglicherweise nicht überall.

Die **`__defineGetter__()`**-Methode von {{jsxref("Object")}}-Instanzen bindet eine Objekt-Eigenschaft an eine Funktion, die aufgerufen wird, wenn diese Eigenschaft abgerufen wird.

## Syntax

```js-nolint
__defineGetter__(prop, func)
```

### Parameter

- `prop`
  - : Ein String, der den Namen der Eigenschaft enthält, an die der Getter `func` gebunden ist.
- `func`
  - : Eine Funktion, die an einen Abruf der angegebenen Eigenschaft gebunden ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `func` keine Funktion ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (mit Ausnahme der [`null`-Prototyp Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `__defineGetter__()`-Methode. Diese Methode ermöglicht es, einen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) auf einem bereits existierenden Objekt zu definieren. Dies entspricht [`Object.defineProperty(obj, prop, { get: func, configurable: true, enumerable: true })`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), was bedeutet, dass die Eigenschaft aufzählbar und konfigurierbar ist und ein vorhandener Setter, falls vorhanden, beibehalten wird.

`__defineGetter__()` wird in der Spezifikation als „normative optional“ definiert, was bedeutet, dass keine Implementierung erforderlich ist. Alle großen Browser implementieren es jedoch, und aufgrund seiner fortgesetzten Nutzung ist es unwahrscheinlich, dass es entfernt wird. Wenn ein Browser `__defineGetter__()` implementiert, muss er auch die Methoden [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) und [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) implementieren.

## Beispiele

### Verwendung von \_\_defineGetter\_\_()

```js
const o = {};
o.__defineGetter__("gimmeFive", function () {
  return 5;
});
console.log(o.gimmeFive); // 5
```

### Definieren einer Gettereigenschaft auf Standardweisen

Sie können die `get`-Syntax verwenden, um einen Getter zu definieren, wenn das Objekt erstmals initialisiert wird.

```js
const o = {
  get gimmeFive() {
    return 5;
  },
};
console.log(o.gimmeFive); // 5
```

Sie können auch {{jsxref("Object.defineProperty()")}} verwenden, um einen Getter auf einem Objekt zu definieren, nachdem es erstellt wurde. Im Vergleich zu `__defineGetter__()` ermöglicht Ihnen diese Methode, die Aufzählbarkeit und Konfigurierbarkeit des Getters zu steuern sowie [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Eigenschaften zu definieren. Die `Object.defineProperty()`-Methode funktioniert auch mit [`null`-Prototyp Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), die nicht von `Object.prototype` erben und daher nicht über die `__defineGetter__()`-Methode verfügen.

```js
const o = {};
Object.defineProperty(o, "gimmeFive", {
  get() {
    return 5;
  },
  configurable: true,
  enumerable: true,
});
console.log(o.gimmeFive); // 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Object.prototype.__defineGetter__` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JS-Leitfaden: Definieren von Gettern und Settern](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
- [Firefox Fehler 647423](https://bugzil.la/647423)
