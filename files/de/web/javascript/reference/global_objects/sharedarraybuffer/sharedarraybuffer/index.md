---
title: SharedArrayBuffer()-Konstruktor
short-title: SharedArrayBuffer()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

> [!NOTE]
> Der `SharedArrayBuffer`-Konstruktor ist möglicherweise nicht immer global verfügbar, es sei denn, bestimmte [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

Der **`SharedArrayBuffer()`**-Konstruktor erstellt {{jsxref("SharedArrayBuffer")}}-Objekte.

## Syntax

```js-nolint
new SharedArrayBuffer(length)
new SharedArrayBuffer(length, options)
```

> [!NOTE]
> `SharedArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, ihn ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `length`
  - : Die Größe des zu erstellenden Array-Puffers in Bytes.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe, in Bytes, auf die der gemeinsam genutzte Array-Puffer vergrößert werden kann.

### Rückgabewert

Ein neues `SharedArrayBuffer`-Objekt der angegebenen Größe, mit der {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaft, die auf die angegebene `maxByteLength` gesetzt ist, falls eine angegeben wurde. Sein Inhalt wird mit 0 initialisiert.

## Beispiele

Beachten Sie, dass diese Beispiele nicht direkt über die Konsole oder auf einer beliebigen Webseite ausgeführt werden können, da `SharedArrayBuffer` nicht definiert ist, es sei denn, seine [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) sind erfüllt.

### Grundlegende Nutzung

Erstellen Sie einen Puffer, indem Sie seine Größe in Bytes angeben.

```js
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength); // 8
```

### Verwenden Sie immer den new-Operator, um einen SharedArrayBuffer zu erstellen

`SharedArrayBuffer`-Konstruktoren müssen mit einem {{jsxref("new")}}-Operator konstruiert werden. Wenn ein `SharedArrayBuffer`-Konstruktor als Funktion ohne `new` aufgerufen wird, wird ein {{jsxref("TypeError")}} geworfen.

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

### Wachsen eines vergrößerbaren SharedArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes vergrößert werden kann, und {{jsxref("SharedArrayBuffer/grow", "vergrößern()")}} ihn auf 12 Bytes:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> [!NOTE]
> Es wird empfohlen, dass `maxByteLength` auf den kleinstmöglichen Wert für Ihren Anwendungsfall gesetzt wird. Er sollte niemals `1073741824` (1GB) überschreiten, um das Risiko von Speicherüberlauffehlern zu reduzieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
