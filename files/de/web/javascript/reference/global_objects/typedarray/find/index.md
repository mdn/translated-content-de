---
title: TypedArray.prototype.find()
short-title: find()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/find
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`find()`** Methode von {{jsxref("TypedArray")}}-Instanzen gibt das erste Element im angegebenen typisierten Array zurück, das die bereitgestellte Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.find()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.find()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([10, 0, -10, 20, -30, 40, -50]);

console.log(int8.find(isNegative));
// Expected output: -10
```

## Syntax

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}}-Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf das `find()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Weitere Informationen finden Sie unter [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das erste Element im typisierten Array, das die bereitgestellte Testfunktion erfüllt.
Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.find()")}}. Diese Methode ist nicht generisch und kann nur auf typisierte Array-Instanzen aufgerufen werden.

## Beispiele

### Das erste Primzahl im typisierten Array finden

Das folgende Beispiel gibt das erste Element im typisierten Array zurück, das eine Primzahl ist, oder {{jsxref("undefined")}}, wenn es keine Primzahl gibt.

```js
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
}

const uint8 = new Uint8Array([4, 5, 8, 12]);
console.log(uint8.find(isPrime)); // 5
```

> [!NOTE]
> Die `isPrime()`-Implementierung dient nur zur Demonstration. Für eine reale Anwendung sollten Sie einen stark memoisierten Algorithmus wie das [Sieb des Eratosthenes](https://de.wikipedia.org/wiki/Sieb_des_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.find` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
