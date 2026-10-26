---
title: TypedArray.from()
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`TypedArray.from()`** erstellt ein neues [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) aus einem Array-ähnlichen oder iterierbaren Objekt. Diese Methode entspricht weitgehend {{jsxref("Array.from()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.from()", "shorter")}}

```js interactive-example
const uint16 = Int16Array.from("12345");

console.log(uint16);
// Expected output: Int16Array [1, 2, 3, 4, 5]
```

## Syntax

```js-nolint
TypedArray.from(arrayLike, mapFn)
TypedArray.from(arrayLike, mapFn, thisArg)
```

Dabei ist `TypedArray` eines der folgenden Objekte:

- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float16Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}

### Parameter

- `arrayLike`
  - : Ein iterierbares oder Array-ähnliches Objekt, das in ein typisiertes Array umgewandelt werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die für jedes Element des typisierten Arrays aufgerufen wird. Falls angegeben, wird jeder Wert vor dem Hinzufügen zum Array an diese Funktion übergeben. Stattdessen wird der Rückgabewert von `mapFn` zum typisierten Array hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Der Wert, der bei der Ausführung von `mapFn` als `this` verwendet werden soll.

### Rückgabewert

Eine neue Instanz von {{jsxref("TypedArray")}}.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.from()")}}.

Zwischen {{jsxref("Array.from()")}} und `TypedArray.from()` gibt es einige feine Unterschiede (Hinweis: Der im Folgenden erwähnte `this`-Wert ist der Wert, mit dem `TypedArray.from()` aufgerufen wurde, nicht das Argument `thisArg`, das beim Aufruf von `mapFn` verwendet wird):

- Wenn der `this`-Wert von `TypedArray.from()` kein Konstruktor ist, löst `TypedArray.from()` einen {{jsxref("TypeError")}} aus. `Array.from()` erstellt dagegen standardmäßig ein neues {{jsxref("Array")}}.
- Das durch `this` konstruierte Objekt muss eine Instanz von `TypedArray` sein. Bei `Array.from()` darf der `this`-Wert dagegen ein beliebiges Objekt konstruieren.
- Wenn der Parameter `source` ein Iterator ist, sammelt `TypedArray.from()` zunächst alle Werte aus dem Iterator, erstellt dann anhand ihrer Anzahl eine Instanz von `this` und setzt schließlich die Werte in dieser Instanz. `Array.from()` setzt jeden Wert, sobald er vom Iterator empfangen wird, und setzt am Ende die Eigenschaft `length`.
- `TypedArray.from()` verwendet `[[Set]]`, während `Array.from()` `[[DefineOwnProperty]]` verwendet. Bei {{jsxref("Proxy")}}-Objekten wird daher [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) statt [`handler.defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) aufgerufen, um neue Elemente zu erstellen.
- Wenn `Array.from()` ein Array-ähnliches Objekt erhält, das kein Iterator ist, bleiben Lücken erhalten. `TypedArray.from()` stellt dagegen sicher, dass das Ergebnis keine Lücken enthält.

## Beispiele

### Aus einem iterierbaren Objekt (Set)

```js
const s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]
```

### Aus einem String

```js
Int16Array.from("123");
// Int16Array [ 1, 2, 3 ]
```

### Verwendung mit einer Arrow Function und einer Mapping-Funktion

Eine Arrow Function als Mapping-Funktion verwenden, um die Elemente zu verändern

```js
Float32Array.from([1, 2, 3], (x) => x + x);
// Float32Array [ 2, 4, 6 ]
```

### Eine Zahlenfolge erzeugen

```js
Uint8Array.from({ length: 5 }, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

### `from()` auf Konstruktoren aufrufen, die keine `TypedArray`-Konstruktoren sind

Der `this`-Wert von `from()` muss ein Konstruktor sein, der eine Instanz von `TypedArray` zurückgibt.

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

Int8Array.from.call({}, []); // TypeError: #<Object> is not a constructor
Int8Array.from.call(NotArray, []);
// NotArray called with length 0
// TypeError: Method %TypedArray%.from called on incompatible receiver #<NotArray>
```

```js
function NotArray2(len) {
  console.log("NotArray2 called with length", len);
  return new Uint8Array(len);
}
console.log(Int8Array.from.call(NotArray2, [1, 2, 3]));
// NotArray2 called with length 3
// Uint8Array(3) [ 1, 2, 3 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.from` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.of()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Array.from()")}}
