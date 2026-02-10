---
title: Atomics.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/add
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Die statische Methode **`Atomics.add()`** addiert einen gegebenen Wert an einer gegebenen Position im Array und gibt den alten Wert an dieser Position zurück. Diese atomare Operation garantiert, dass keine anderen Schreibvorgänge stattfinden, bis der modifizierte Wert zurückgeschrieben wird.

## Syntax

```js-nolint
Atomics.add(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein Integer-Typ-Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der ein `value` hinzugefügt werden soll.
- `value`
  - : Die Zahl, die hinzugefügt werden soll.

### Rückgabewert

Der alte Wert an der angegebenen Position (`typedArray[index]`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Integer-Typen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt aus der Konsole oder auf einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, seine [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Verwendung von Atomics.add()

```js
// Create a SharedArrayBuffer with a size in bytes
const sab = new SharedArrayBuffer(1024);
// Create a view and set the value of the 0 index
const ta = new Uint8Array(sab);
ta[0] = 7;

// 7 + 12 = 19
console.log(Atomics.add(ta, 0, 12)); // 7, the old value
console.log(Atomics.load(ta, 0)); // 19, the new/current value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.sub()")}}
