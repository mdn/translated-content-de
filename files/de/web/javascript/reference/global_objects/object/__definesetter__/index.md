---
title: Object.prototype.__defineSetter__()
short-title: __defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{Deprecated_Header}}

> [!NOTE]
> Diese Funktion ist zugunsten der Definition von [Settern](/de/docs/Web/JavaScript/Reference/Functions/set) mithilfe der [Objekt-Initialisierungs-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) oder der {{jsxref("Object.defineProperty()")}} API veraltet. Das Verhalten dieser Methode ist nur aus Gründen der Web-Kompatibilität spezifiziert und muss auf keiner Plattform implementiert werden. Es kann möglicherweise nicht überall funktionieren.

Die **`__defineSetter__()`** Methode von {{jsxref("Object")}} Instanzen bindet eine Objekteigenschaft an eine Funktion, die aufgerufen wird, wenn versucht wird, diese Eigenschaft zu setzen.

## Syntax

```js-nolint
__defineSetter__(prop, func)
```

### Parameter

- `prop`
  - : Ein String, der den Namen der Eigenschaft enthält, an die der Setter `func` gebunden ist.
- `func`
  - : Eine Funktion, die aufgerufen wird, wenn versucht wird, die angegebene Eigenschaft zu setzen. Diese Funktion empfängt den folgenden Parameter:
    - `val`
      - : Der Wert, der versucht wird, `prop` zuzuweisen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `func` keine Funktion ist.

## Beschreibung

Alle Objekte, die von `Object.prototype` erben (das heißt alle außer [Objekte mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)), erben die `__defineSetter__()` Methode. Diese Methode ermöglicht es, einen [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) auf einem bereits bestehenden Objekt zu definieren. Dies entspricht [`Object.defineProperty(obj, prop, { set: func, configurable: true, enumerable: true })`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), was bedeutet, dass die Eigenschaft aufzählbar und konfigurierbar ist und ein vorhandener Getter, falls vorhanden, erhalten bleibt.

`__defineSetter__()` ist in der Spezifikation als "normatively optional" definiert, was bedeutet, dass keine Implementierung dazu verpflichtet ist, dies zu implementieren. Allerdings implementieren alle großen Browser es, und aufgrund seiner fortdauernden Nutzung ist es unwahrscheinlich, dass es entfernt wird. Wenn ein Browser `__defineSetter__()` implementiert, muss er auch die Methoden [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__), und [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) implementieren.

## Beispiele

### Verwenden von \_\_defineSetter\_\_()

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

Sie können die `set` Syntax verwenden, um einen Setter zu definieren, wenn das Objekt erstmals initialisiert wird.

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

Sie können auch {{jsxref("Object.defineProperty()")}} verwenden, um einen Setter auf einem Objekt zu definieren, nachdem es erstellt wurde. Im Vergleich zu `__defineSetter__()` ermöglicht diese Methode die Kontrolle über die Aufzählbarkeit und Konfigurierbarkeit des Setters sowie die Definition von [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) Eigenschaften. Die `Object.defineProperty()` Methode funktioniert auch mit [Objekten mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), die nicht von `Object.prototype` erben und daher die `__defineSetter__()` Methode nicht haben.

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
- [JS Leitfaden: Definieren von Gettern und Settern](/de/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
- [Firefox Fehler 647423](https://bugzil.la/647423)
