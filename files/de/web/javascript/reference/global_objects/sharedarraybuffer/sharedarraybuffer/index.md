---
title: SharedArrayBuffer()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

> [!NOTE]
> Der `SharedArrayBuffer`-Konstruktor ist möglicherweise nicht immer global verfügbar, es sei denn, bestimmte [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

Der **`SharedArrayBuffer()`**-Konstruktor erstellt {{jsxref("SharedArrayBuffer")}}-Objekte.

{{InteractiveExample("JavaScript Demo: SharedArrayBuffer() constructor", "shorter")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## Syntax

```js-nolint
new SharedArrayBuffer(length)
new SharedArrayBuffer(length, options)
```

> **Hinweis:** `SharedArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `length`
  - : Die Größe des zu erstellenden Array-Puffers in Bytes.
- `options` {{optional_inline}}
  - : Ein Objekt, das folgende Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe in Bytes, auf die der gemeinsame Array-Puffer vergrößert werden kann.

### Rückgabewert

Ein neues `SharedArrayBuffer`-Objekt der angegebenen Größe, dessen {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaft auf den angegebenen `maxByteLength` gesetzt ist, falls dieser angegeben wurde. Der Inhalt ist auf 0 initialisiert.

## Beispiele

### Verwenden Sie immer den new-Operator, um einen SharedArrayBuffer zu erstellen

`SharedArrayBuffer`-Konstruktoren müssen mit einem {{jsxref("Operators/new", "new")}}-Operator konstruiert werden. Das Aufrufen eines `SharedArrayBuffer`-Konstruktors als Funktion ohne `new` löst einen {{jsxref("TypeError")}} aus.

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

### Erweitern eines erweiterbaren SharedArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes erweiterbar ist, und {{jsxref("SharedArrayBuffer/grow", "erhöhen()")}} ihn dann auf 12 Bytes:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> [!NOTE]
> Es wird empfohlen, `maxByteLength` auf den kleinstmöglichen Wert für Ihren Anwendungsfall zu setzen. Es sollte niemals `1073741824` (1GB) überschreiten, um das Risiko von Speicherfehlern zu reduzieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
