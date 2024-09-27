---
title: ArrayBuffer.prototype.resize()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`resize()`**-Methode von {{jsxref("ArrayBuffer")}}-Instanzen ändert die Größe des `ArrayBuffer` auf die angegebene Größe in Bytes.

{{EmbedInteractiveExample("pages/js/arraybuffer-resize.html")}}

## Syntax

```js-nolint
resize(newLength)
```

### Parameter

- `newLength`
  - : Die neue Länge, in Bytes, auf die der `ArrayBuffer` geändert werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `ArrayBuffer` getrennt oder nicht änderbar ist.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `newLength` größer als die {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} des `ArrayBuffer` ist.

## Beschreibung

Die `resize()`-Methode ändert die Größe eines `ArrayBuffer` auf die durch den Parameter `newLength` angegebene Größe, vorausgesetzt, der `ArrayBuffer` ist [änderbar](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable) und die neue Größe ist kleiner oder gleich der {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} des `ArrayBuffer`. Neue Bytes werden mit 0 initialisiert.

Beachten Sie, dass Sie `resize()` sowohl zum Verkleinern als auch zum Vergrößern eines `ArrayBuffer` verwenden können — es ist zulässig, dass `newLength` kleiner als die aktuelle {{jsxref("ArrayBuffer/byteLength", "byteLength")}} des `ArrayBuffer` ist.

## Beispiele

### Verwendung von resize()

In diesem Beispiel erstellen wir einen 8-Byte-Puffer, der auf eine maximale Länge von 16 Bytes änderbar ist, prüfen dann seine `resizable`-Eigenschaft und ändern die Größe, wenn `resizable` `true` zurückgibt:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Buffer is resizable!");
  buffer.resize(12);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.resizable")}}
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
