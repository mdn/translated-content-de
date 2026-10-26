---
title: Object.prototype.__defineGetter__()
short-title: __defineGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> Dieses Feature ist veraltet. Stattdessen sollten Sie [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) mit der [Object-Initializer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) oder der API {{jsxref("Object.defineProperty()")}} definieren. Das Verhalten dieser Methode ist nur aus Gründen der Webkompatibilität spezifiziert; ihre Implementierung ist auf keiner Plattform vorgeschrieben. Sie funktioniert möglicherweise nicht überall.

Die Methode **`__defineGetter__()`** von {{jsxref("Object")}}-Instanzen bindet eine Eigenschaft eines Objekts an eine Funktion, die aufgerufen wird, wenn auf diese Eigenschaft zugegriffen wird.

## Syntax

```js-nolint
__defineGetter__(prop, func)
```

### Parameter

- `prop`
  - : Ein String mit dem Namen der Eigenschaft, an die der Getter `func` gebunden wird.
- `func`
  - : Eine Funktion, die beim Zugriff auf die angegebene Eigenschaft aufgerufen wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `func` keine Funktion ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (also alle außer [Objekten mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die Methode `__defineGetter__()`. Mit dieser Methode lässt sich ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) auf einem bereits vorhandenen Objekt definieren. Dies entspricht [`Object.defineProperty(obj, prop, { get: func, configurable: true, enumerable: true })`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). Die Eigenschaft ist somit aufzählbar und konfigurierbar; ein gegebenenfalls vorhandener Setter bleibt erhalten.

`__defineGetter__()` ist in der Spezifikation als „normative optional“ definiert. Das bedeutet, dass keine Implementierung diese Methode bereitstellen muss. Alle großen Browser implementieren sie jedoch, und aufgrund ihrer anhaltenden Verwendung ist es unwahrscheinlich, dass sie entfernt wird. Wenn ein Browser `__defineGetter__()` implementiert, muss er auch die Methoden [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) und [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) implementieren.

## Beispiele

### \_\_defineGetter\_\_() verwenden

```js
const o = {};
o.__defineGetter__("gimmeFive", function () {
  return 5;
});
console.log(o.gimmeFive); // 5
```

### Eine Getter-Eigenschaft auf standardisierte Weise definieren

Sie können die `get`-Syntax verwenden, um einen Getter bei der Initialisierung eines Objekts zu definieren.

```js
const o = {
  get gimmeFive() {
    return 5;
  },
};
console.log(o.gimmeFive); // 5
```

Sie können auch {{jsxref("Object.defineProperty()")}} verwenden, um nach der Erstellung eines Objekts einen Getter darauf zu definieren. Im Vergleich zu `__defineGetter__()` können Sie mit dieser Methode steuern, ob der Getter aufzählbar und konfigurierbar ist, und außerdem [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Eigenschaften definieren. Die Methode `Object.defineProperty()` funktioniert auch mit [Objekten mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Diese erben nicht von `Object.prototype` und verfügen daher nicht über die Methode `__defineGetter__()`.

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

- [Polyfill für `Object.prototype.__defineGetter__` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JS-Leitfaden: Getter und Setter definieren](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
- [Firefox-Bug 647423](https://bugzil.la/647423)
