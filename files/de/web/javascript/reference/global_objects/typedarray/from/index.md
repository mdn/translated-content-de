---
title: TypedArray.from()
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`TypedArray.from()`** erzeugt ein neues [Typed Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) aus einem array-ähnlichen oder iterierbaren Objekt. Diese Methode ist fast identisch mit {{jsxref("Array.from()")}}.

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

Hierbei ist `TypedArray` eines von:

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
  - : Ein iterierbares oder array-ähnliches Objekt, das in ein Typed Array konvertiert werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die auf jedes Element des Typed Arrays angewendet wird. Wenn angegeben, wird jeder Wert, der dem Array hinzugefügt wird, zuerst durch diese Funktion geleitet, und der Rückgabewert von `mapFn` wird stattdessen dem Typed Array hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Typed Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Typed Array verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `mapFn` ausgeführt wird.

### Rückgabewert

Eine neue {{jsxref("TypedArray")}} Instanz.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.from()")}}.

Es gibt einige subtile Unterschiede zwischen {{jsxref("Array.from()")}} und `TypedArray.from()` (beachten Sie: der unten erwähnte `this`-Wert ist der Wert, mit dem `TypedArray.from()` aufgerufen wurde, nicht das `thisArg`-Argument, das verwendet wird, um `mapFn` aufzurufen):

- Wenn der `this`-Wert von `TypedArray.from()` kein Konstruktor ist, wird `TypedArray.from()` ein {{jsxref("TypeError")}} auslösen, während `Array.from()` standardmäßig ein neues {{jsxref("Array")}} erstellt.
- Das durch `this` konstruierte Objekt muss eine `TypedArray`-Instanz sein, während `Array.from()` erlaubt, dass sein `this`-Wert zu jedem Objekt konstruiert wird.
- Wenn der `source`-Parameter ein Iterator ist, sammelt `TypedArray.from()` zunächst alle Werte vom Iterator, erstellt dann eine Instanz von `this` unter Verwendung der Anzahl und setzt schließlich die Werte auf der Instanz. `Array.from()` setzt jeden Wert, sobald er vom Iterator empfangen wird, und legt dann am Ende seine `length` fest.
- `TypedArray.from()` verwendet `[[Set]]`, während `Array.from()` `[[DefineOwnProperty]]` verwendet. Daher ruft es beim Arbeiten mit {{jsxref("Proxy")}} Objekten [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) auf, um neue Elemente zu erstellen, anstatt [`handler.defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty).
- Wenn `Array.from()` ein array-ähnliches Objekt erhält, das kein Iterator ist, respektiert es Lücken. `TypedArray.from()` sorgt dafür, dass das Ergebnis dicht ist.

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

### Verwendung mit Pfeilfunktion und Map

Verwendung einer Pfeilfunktion als Map-Funktion zur Manipulation der Elemente

```js
Float32Array.from([1, 2, 3], (x) => x + x);
// Float32Array [ 2, 4, 6 ]
```

### Generieren einer Zahlenfolge

```js
Uint8Array.from({ length: 5 }, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

### Aufrufen von from() bei Nicht-TypedArray-Konstruktoren

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
- [Leitfaden zu JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.of()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Array.from()")}}
