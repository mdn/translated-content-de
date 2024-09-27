---
title: ArrayBuffer() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`ArrayBuffer()`** Konstruktor erstellt {{jsxref("ArrayBuffer")}} Objekte.

{{EmbedInteractiveExample("pages/js/arraybuffer-constructor.html", "shorter")}}

## Syntax

```js-nolint
new ArrayBuffer(length)
new ArrayBuffer(length, options)
```

> **Note:** `ArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `length`
  - : Die Größe in Bytes des zu erstellenden Arraybuffers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe in Bytes, auf die der Arraybuffer geändert werden kann.

### Rückgabewert

Ein neues `ArrayBuffer` Objekt mit der angegebenen Größe, wobei die Eigenschaft {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} auf den angegebenen `maxByteLength` gesetzt ist, falls einer angegeben wurde. Der Inhalt wird auf 0 initialisiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - `length` oder `maxByteLength` ist größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} (≥ 2<sup>53</sup>) oder negativ.
    - `length` ist größer als `maxByteLength`.

## Beispiele

### Erstellen eines ArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte-Puffer mit einer {{jsxref("Int32Array")}} Ansicht, die auf den Puffer verweist:

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

### Erstellen eines anpassbaren ArrayBuffer

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes erweiterbar ist und dann mit {{jsxref("ArrayBuffer/resize", "resize()")}} auf 12 Bytes geändert wird:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.resize(12);
```

> [!NOTE]
> Es wird empfohlen, `maxByteLength` auf den kleinsten für Ihren Anwendungsfall möglichen Wert zu setzen. Es sollte niemals `1073741824` (1GB) überschreiten, um das Risiko von Speichermangel-Fehlern zu verringern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `ArrayBuffer` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("SharedArrayBuffer")}}
