---
title: "ImageDecoder: decode()-Methode"
short-title: decode()
slug: Web/API/ImageDecoder/decode
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`**-Methode der [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Schnittstelle stellt eine Steuerungsnachricht für das Dekodieren des Bildrahmens in die Warteschlange.

## Syntax

```js-nolint
decode()
decode(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `frameIndex` {{optional_inline}}
      - : Ein Integer, der den Index des zu dekodierenden Rahmens darstellt. Standardmäßig `0` (der erste Rahmen).
    - `completeFramesOnly` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, der standardmäßig auf `true` gesetzt ist.
        Wenn `true`, wird das von der Methode zurückgegebene `Promise` nur aufgelöst, wenn das Bild vollständig dekodiert ist.
        Wenn `false`, wird die Methode ein neues `Promise` zurückgeben, das möglicherweise mit einem teilweise dekodierten Bild aufgelöst wird.
        Die Methode kann wiederholt aufgerufen werden, bis `result.complete` wahr ist. Jeder Schritt liefert ein Bild mit dem nächsten verfügbaren Detailgrad.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `image`
  - : Ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), das das dekodierte Bild enthält.
- `complete`
  - : Ein {{jsxref("Boolean")}}, der angibt, ob `true` die endgültige Ausgabe in voller Detailtiefe enthält.

### Ausnahmen

Wenn ein Fehler auftritt, wird das Promise mit folgender Ausnahme aufgelöst:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine der folgenden Bedingungen zutrifft:
    - `close` ist wahr, was bedeutet, dass [`close()`](/de/docs/Web/API/ImageDecoder/close) bereits aufgerufen wurde.
    - Der angeforderte Rahmen existiert nicht.

## Beispiele

### Synchrones Dekodieren eines abgeschlossenen Bildrahmens

Das folgende Beispiel dekodiert den zweiten Rahmen (bei Index `1`) und gibt den resultierenden [`VideoFrame`](/de/docs/Web/API/VideoFrame) in der Konsole aus.

```js
let result = await imageDecoder.decode({ frameIndex: 1 });
console.log(result.image);
```

### Teilweises Dekodieren eines progressiven Bildrahmens

Das folgende Beispiel dekodiert den ersten Rahmen wiederholt, bis er vollständig ist:

```js
let complete = false;
while (!complete) {
  // The promise returned by `decode()` will only resolve when a new
  // level of detail is available or the frame is complete. I.e.,
  // calling `decode()` in a loop like this won't needlessly spin.
  let result = await imageDecoder.decode({ completeFramesOnly: false });

  // Do something with `result.image`.

  complete = result.complete;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
