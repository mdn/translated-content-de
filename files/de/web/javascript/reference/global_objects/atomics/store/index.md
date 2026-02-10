---
title: Atomics.store()
short-title: store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

Die **`Atomics.store()`** statische Methode speichert einen gegebenen Wert an einer gegebenen Position im Array und gibt diesen Wert zurück. Diese atomare Operation garantiert, dass das Schreiben ohne Risse erfolgt und dass alle atomaren Schreiboperationen sequentiell konsistent sind.

Beachten Sie, dass im Gegensatz zu vielen anderen `Atomic`-Methoden `store()` den neuen Wert und nicht den alten Wert zurückgibt. Um den alten Wert zu erhalten, verwenden Sie stattdessen {{jsxref("Atomics.exchange()")}}.

## Syntax

```js-nolint
Atomics.store(typedArray, index, value)
```

### Parameter

- `typedArray`
  - : Ein ganzzahliges typisiertes Array. Eines von {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}} oder {{jsxref("BigUint64Array")}}.
- `index`
  - : Die Position im `typedArray`, an der ein `value` gespeichert werden soll.
- `value`
  - : Die Zahl, die gespeichert werden soll.

### Rückgabewert

Der Wert, der gespeichert wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `typedArray` nicht einer der erlaubten Ganzzahltypen ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `index` außerhalb der Grenzen des `typedArray` liegt.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt von der Konsole oder einer beliebigen Webseite aus ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, die [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Verwendung von Atomics.store()

```js
// Create a SharedArrayBuffer with a size in bytes
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

console.log(Atomics.store(ta, 0, 12)); // 12, the new/current value
console.log(Atomics.load(ta, 0)); // 12, the new/current value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}
- {{jsxref("Atomics.exchange()")}}
