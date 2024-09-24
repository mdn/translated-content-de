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

> **Hinweis:** `SharedArrayBuffer()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Aufruf ohne `new` führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `length`
  - : Die Größe des zu erstellenden Array-Puffers in Bytes.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `maxByteLength` {{optional_inline}}
      - : Die maximale Größe in Bytes, auf die der Shared Array Buffer vergrößert werden kann.

### Rückgabewert

Ein neues `SharedArrayBuffer`-Objekt der angegebenen Größe, mit seiner {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}-Eigenschaft auf den angegebenen `maxByteLength` gesetzt, falls einer angegeben wurde. Seine Inhalte sind auf 0 initialisiert.

## Beispiele

### Immer den new-Operator verwenden, um einen SharedArrayBuffer zu erstellen

`SharedArrayBuffer`-Konstruktoren müssen mit einem {{jsxref("Operators/new", "new")}}-Operator konstruiert werden. Ein Aufruf eines `SharedArrayBuffer`-Konstruktors als Funktion ohne `new` führt zu einem {{jsxref("TypeError")}}.

```js example-bad
const sab = SharedArrayBuffer(1024);
// TypeError: Aufruf eines eingebauten SharedArrayBuffer-Konstruktors
// ohne new ist verboten
```

```js example-good
const sab = new SharedArrayBuffer(1024);
```

### Einen vergrößerbaren SharedArrayBuffer vergrößern

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes erweiterbar ist, und erweitern ihn dann mit {{jsxref("SharedArrayBuffer/grow", "grow()")}} auf 12 Bytes:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

> [!NOTE]
> Es wird empfohlen, `maxByteLength` auf den kleinstmöglichen Wert für Ihren Anwendungsfall zu setzen. Er sollte niemals `1073741824` (1GB) überschreiten, um das Risiko von Speichermangel-Fehlern zu reduzieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [Leitfaden zu JavaScript-Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
