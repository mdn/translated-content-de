---
title: SharedArrayBuffer()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

> [!NOTE]
> Der `SharedArrayBuffer`-Konstruktor ist möglicherweise nicht immer global verfügbar, es sei denn, bestimmte [Sicherheitsanforderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) werden erfüllt.

Der **`SharedArrayBuffer()`**-Konstruktor erstellt {{jsxref("SharedArrayBuffer")}}-Objekte.

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-constructor.html", "shorter")}}

## Syntax

```js-nolint
new SharedArrayBuffer(length)
new SharedArrayBuffer(length, options)
```

> **Hinweis:** `SharedArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) erstellt werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `length`
  - : Die Größe, in Bytes, des zu erstellenden Array-Buffers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe, in Bytes, auf die der gemeinsam genutzte Array-Buffer vergrößert werden kann.

### Rückgabewert

Ein neues `SharedArrayBuffer`-Objekt der angegebenen Größe, dessen Eigenschaft {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} auf den angegebenen `maxByteLength` gesetzt ist, wenn einer spezifiziert wurde. Der Inhalt ist auf 0 initialisiert.

## Beispiele

### Verwenden Sie immer den new-Operator, um einen SharedArrayBuffer zu erstellen

`SharedArrayBuffer`-Konstruktoren müssen mit einem {{jsxref("Operators/new", "new")}}-Operator erstellt werden. Ein Aufruf eines `SharedArrayBuffer`-Konstruktors als Funktion ohne `new` führt zu einem {{jsxref("TypeError")}}.

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

### Wachstum eines vergrößerbaren SharedArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes vergrößerbar ist, und erweitern ihn dann mit {{jsxref("SharedArrayBuffer/grow", "grow()")}} auf 12 Bytes:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> [!NOTE]
> Es wird empfohlen, dass `maxByteLength` auf den kleinstmöglichen Wert für Ihren Anwendungsfall gesetzt wird. Es sollte niemals `1073741824` (1GB) überschreiten, um das Risiko von Speicherüberlauf-Fehlern zu reduzieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript getypte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
