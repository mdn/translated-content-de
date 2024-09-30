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

> **Hinweis:** `SharedArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Wird versucht, ihn ohne `new` aufzurufen, wird ein {{jsxref("TypeError")}} ausgelöst.

### Parameter

- `length`
  - : Die Größe des zu erstellenden Array-Buffers in Bytes.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe in Bytes, auf die der Shared Array Buffer vergrößert werden kann.

### Rückgabewert

Ein neues `SharedArrayBuffer`-Objekt der angegebenen Größe, dessen {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaft auf das angegebene `maxByteLength` gesetzt ist, falls eines angegeben wurde. Sein Inhalt wird auf 0 initialisiert.

## Beispiele

### Immer den new-Operator verwenden, um einen SharedArrayBuffer zu erstellen

`SharedArrayBuffer`-Konstruktoren müssen mit einem {{jsxref("Operators/new", "new")}}-Operator konstruiert werden. Das Aufrufen eines `SharedArrayBuffer`-Konstruktors als Funktion ohne `new` führt zu einem {{jsxref("TypeError")}}.

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

### Wachsen eines vergrößerbaren SharedArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte-Buffer, der auf eine maximale Länge von 16 Bytes vergrößerbar ist, und vergrößern ihn dann mit {{jsxref("SharedArrayBuffer/grow", "grow()")}} auf 12 Bytes:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> [!NOTE]
> Es wird empfohlen, `maxByteLength` auf den kleinstmöglichen Wert für Ihren Anwendungsfall zu setzen. Es sollte niemals `1073741824` (1GB) überschreiten, um das Risiko von "Out of Memory"-Fehlern zu verringern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
