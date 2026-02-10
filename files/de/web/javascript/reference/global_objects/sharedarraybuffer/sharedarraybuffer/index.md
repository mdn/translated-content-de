---
title: SharedArrayBuffer() Konstruktor
short-title: SharedArrayBuffer()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
l10n:
  sourceCommit: 48f29758dbe9036bd04baf519b8e35d1f989e532
---

> [!NOTE]
> Der `SharedArrayBuffer` Konstruktor ist möglicherweise nicht immer global verfügbar, es sei denn, bestimmte [Sicherheitsvoraussetzungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

Der **`SharedArrayBuffer()`** Konstruktor erstellt {{jsxref("SharedArrayBuffer")}} Objekte.

## Syntax

```js-nolint
new SharedArrayBuffer(length)
new SharedArrayBuffer(length, options)
```

> [!NOTE]
> `SharedArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `length`
  - : Die Größe, in Bytes, des zu erstellenden Array-Buffers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe, in Bytes, auf die der Shared Array Buffer vergrößert werden kann.

### Rückgabewert

Ein neues `SharedArrayBuffer`-Objekt der angegebenen Größe, mit der {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaft auf den angegebenen `maxByteLength` gesetzt, falls einer angegeben wurde. Der Inhalt ist auf 0 initialisiert.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt in der Konsole oder auf einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, seine [Sicherheitsvoraussetzungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Grundlegende Nutzung

Erstellen Sie einen Buffer, indem Sie seine Größe in Bytes angeben.

```js
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength); // 8
```

### Verwenden Sie immer den new-Operator, um einen SharedArrayBuffer zu erstellen

`SharedArrayBuffer` Konstruktoren müssen mit einem {{jsxref("Operators/new", "new")}} Operator konstruiert werden. Das Aufrufen eines `SharedArrayBuffer` Konstruktors als Funktion ohne `new` führt zu einem {{jsxref("TypeError")}}.

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

### Wachstum eines vergrößerbaren SharedArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte Buffer, der auf eine maximale Länge von 16 Bytes vergrößert werden kann, und dann vergrößern wir ihn mit {{jsxref("SharedArrayBuffer/grow", "grow()")}} auf 12 Bytes:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> [!NOTE]
> Es wird empfohlen, `maxByteLength` so klein wie möglich für Ihren Anwendungsfall zu setzen. Es sollte niemals `1073741824` (1GB) überschreiten, um das Risiko von Speicherfehlern zu reduzieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
