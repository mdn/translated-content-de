---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

Die statische Methode **`TypedArray.from()`** erstellt ein neues [Typed Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) aus einem array-ähnlichen oder iterierbaren Objekt. Diese Methode ist nahezu identisch mit {{jsxref("Array.from()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-from.html", "shorter")}}

## Syntax

```js-nolint
TypedArray.from(arrayLike, mapFn)
TypedArray.from(arrayLike, mapFn, thisArg)
```

Dabei ist `TypedArray` eines der folgenden:

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
  - : Ein iterierbares oder array-ähnliches Objekt, das in ein Typed Array umgewandelt werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die auf jedes Element des Typed Arrays angewendet wird. Wenn angegeben, wird jeder Wert, der in das Array aufgenommen werden soll, zuerst durch diese Funktion geleitet, und der Rückgabewert von `mapFn` wird anstelle des Originals dem Typed Array hinzugefügt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Typed Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Typed Array verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `mapFn` ausgeführt wird.

### Rückgabewert

Eine neue {{jsxref("TypedArray")}}-Instanz.

## Beschreibung

Siehe {{jsxref("Array.from()")}} für weitere Details.

Es gibt einige subtile Unterschiede zwischen {{jsxref("Array.from()")}} und `TypedArray.from()` (Hinweis: der unten erwähnte `this`-Wert bezieht sich auf den `this`-Wert, mit dem `TypedArray.from()` aufgerufen wurde, nicht auf das `thisArg`-Argument, das verwendet wird, um `mapFn` aufzurufen):

- Wenn der `this`-Wert von `TypedArray.from()` kein Konstruktor ist, wirft `TypedArray.from()` einen {{jsxref("TypeError")}}, während `Array.from()` standardmäßig ein neues {{jsxref("Array")}} erstellt.
- Das durch `this` konstruierte Objekt muss eine `TypedArray`-Instanz sein, während `Array.from()` seinen `this`-Wert zu jedem Objekt konstruieren lassen kann.
- Wenn der `source`-Parameter ein Iterator ist, sammelt `TypedArray.from()` zuerst alle Werte aus dem Iterator, erstellt dann eine Instanz von `this` unter Verwendung der Anzahl und setzt schließlich die Werte in der Instanz. `Array.from()` setzt jeden Wert, während er ihn vom Iterator erhält, und setzt dann am Ende seine `length`.
- `TypedArray.from()` verwendet `[[Set]]`, während `Array.from()` `[[DefineOwnProperty]]` verwendet. Daher ruft es bei der Arbeit mit {{jsxref("Proxy")}}-Objekten [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) auf, um neue Elemente zu erstellen, anstatt [`handler.defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty).
- Wenn `Array.from()` ein array-ähnliches Objekt erhält, das kein Iterator ist, werden Lücken respektiert. `TypedArray.from()` stellt sicher, dass das Ergebnis dicht ist.

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

### Nutzung mit Arrow-Funktion und map

Verwendung einer Arrow-Funktion als Map-Funktion zur Manipulation der Elemente

```js
Float32Array.from([1, 2, 3], (x) => x + x);
// Float32Array [ 2, 4, 6 ]
```

### Erzeugen einer Zahlenfolge

```js
Uint8Array.from({ length: 5 }, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

### Aufruf von from() auf Nicht-TypedArray Konstruktoren

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
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.of()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Array.from()")}}
