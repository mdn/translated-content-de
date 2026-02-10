---
title: Atomics.notify()
short-title: notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Die statische Methode **`Atomics.notify()`** benachrichtigt einige Agenten, die in der Wartewarteschlange schlafen.

> [!NOTE]
> Diese Operation funktioniert nur mit einem {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
> Sie wird `0` auf nicht-geteilten `ArrayBuffer`-Objekten zurückgeben.

## Syntax

```js-nolint
Atomics.notify(typedArray, index, count)
```

### Parameter

- `typedArray`
  - : Ein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}}, das einen {{jsxref("SharedArrayBuffer")}} betrachtet.
- `index`
  - : Die Position im `typedArray`, bei der aufgeweckt werden soll.
- `count` {{optional_inline}}
  - : Die Anzahl der zu benachrichtigenden schlafenden Agenten. Standardwert ist {{jsxref("Infinity")}}.

### Rückgabewert

Gibt die Anzahl der aufgeweckten Agenten zurück oder `0`, wenn `typedArray` eine Ansicht auf einem nicht-geteilten {{jsxref("ArrayBuffer")}} ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` kein {{jsxref("Int32Array")}} oder {{jsxref("BigInt64Array")}} ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen im `typedArray` liegt.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt von der Konsole oder einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, seine [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Verwendung von Atomics.notify()

Gegebenenfalls ein geteilter `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Ein lesender Thread schläft und wartet auf Position 0, da der angegebene `Wert` mit dem gespeicherten Wert an dem angegebenen `index` übereinstimmt.
Der lesende Thread wird sich erst weiterbewegen, wenn der schreibende Thread `Atomics.notify()` auf Position 0 des angegebenen `typedArray` aufgerufen hat.
Beachten Sie, dass, wenn nach dem Aufwecken der Wert an Position 0 nicht vom schreibenden Thread geändert wurde, der lesende Thread **nicht** wieder einschlafen wird, sondern fortfahren wird.

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

Ein schreibender Thread speichert einen neuen Wert und benachrichtigt den wartenden Thread, sobald er geschrieben hat:

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.waitAsync()")}}
