---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`TypedArray.from()`** statische Methode erstellt ein neues
[TypedArray](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)
aus einem array-ähnlichen oder iterierbaren Objekt. Diese Methode ist nahezu identisch mit
{{jsxref("Array.from()")}}.

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

Wo `TypedArray` eines der folgenden ist:

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
  - : Ein iterierbares oder array-ähnliches Objekt, das in ein TypedArray umgewandelt werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die auf jedes Element des TypedArray angewendet wird. Wenn bereitgestellt, wird jeder Wert, der dem Array hinzugefügt werden soll, zunächst durch diese Funktion geleitet, und der Rückgabewert von `mapFn` wird stattdessen dem TypedArray hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im TypedArray verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im TypedArray verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `mapFn` ausgeführt wird.

### Rückgabewert

Eine neue {{jsxref("TypedArray")}}-Instanz.

## Beschreibung

Siehe {{jsxref("Array.from()")}} für weitere Details.

Es gibt einige subtile Unterschiede zwischen {{jsxref("Array.from()")}} und `TypedArray.from()` (Hinweis: Der unten erwähnte `this`-Wert ist der `this`-Wert, auf den `TypedArray.from()` aufgerufen wurde, nicht das `thisArg`-Argument, das zur Ausführung von `mapFn` verwendet wird):

- Wenn der `this`-Wert von `TypedArray.from()` kein Konstruktor ist, wirft `TypedArray.from()` einen {{jsxref("TypeError")}}, während `Array.from()` standardmäßig ein neues {{jsxref("Array")}} erstellt.
- Das durch `this` konstruierte Objekt muss eine `TypedArray`-Instanz sein, während `Array.from()` erlaubt, dass sein `this`-Wert zu jedem Objekt konstruiert wird.
- Wenn der `source`-Parameter ein Iterator ist, sammelt `TypedArray.from()` zunächst alle Werte aus dem Iterator, erstellt dann eine Instanz von `this` mit der Anzahl und setzt schließlich die Werte auf die Instanz. `Array.from()` setzt jeden Wert, wie er aus dem Iterator empfangen wird, und setzt anschließend seine `length`.
- `TypedArray.from()` verwendet `[[Set]]`, während `Array.from()` `[[DefineOwnProperty]]` verwendet. Daher wird beim Arbeiten mit {{jsxref("Proxy")}} Objekten [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) aufgerufen, um neue Elemente zu erstellen, anstelle von [`handler.defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty).
- Wenn `Array.from()` ein array-ähnliches Objekt erhält, das kein Iterator ist, werden Lücken beibehalten. `TypedArray.from()` stellt sicher, dass das Ergebnis dicht ist.

## Beispiele

### Von einem iterierbaren Objekt (Set)

```js
const s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]
```

### Von einem String

```js
Int16Array.from("123");
// Int16Array [ 1, 2, 3 ]
```

### Verwendung mit Arrow-Funktion und Map

Verwendung einer Arrow-Funktion als Map-Funktion zur Bearbeitung der Elemente

```js
Float32Array.from([1, 2, 3], (x) => x + x);
// Float32Array [ 2, 4, 6 ]
```

### Generieren einer Zahlenfolge

```js
Uint8Array.from({ length: 5 }, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

### Aufruf von from() bei Nicht-TypedArray-Konstruktoren

Der `this`-Wert von `from()` muss ein Konstruktor sein, der eine `TypedArray`-Instanz zurückgibt.

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

- [Polyfill von `TypedArray.from` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Anleitung zu JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.of()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Array.from()")}}
