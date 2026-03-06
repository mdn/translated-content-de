---
title: "ImageDecoder: decode() Methode"
short-title: decode()
slug: Web/API/ImageDecoder/decode
l10n:
  sourceCommit: 21ece11228b2653049e1c9d7148fb17611738a3b
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`**-Methode der [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Schnittstelle stellt eine Steuerungsnachricht in die Warteschlange, um den Frame eines Bildes zu decodieren.

## Syntax

```js-nolint
decode()
decode(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `frameIndex` {{optional_inline}}
      - : Ein ganzzahliger Wert, der den Index des zu decodierenden Frames darstellt. Standardmäßig `0` (der erste Frame).
    - `completeFramesOnly` {{optional_inline}}
      - : Ein {{jsxref("boolean")}}, der standardmäßig auf `true` gesetzt ist.
        Wenn `true`, wird das von der Methode zurückgegebene `Promise` nur dann aufgelöst, wenn das Bild vollständig decodiert ist.
        Wenn `false`, gibt die Methode ein neues `Promise` zurück, das möglicherweise mit einem teilweise decodierten Bild aufgelöst wird.
        Die Methode kann wiederholt aufgerufen werden, bis `result.complete` wahr ist, wobei jeder Schritt ein Bild mit der nächsten verfügbaren Detailebene bereitstellt.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `image`
  - : Ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), das das decodierte Bild enthält.
- `complete`
  - : Ein {{jsxref("boolean")}}, wenn `true`, zeigt an, dass `image` die finale, voll detaillierte Ausgabe enthält.

### Ausnahmen

Wenn ein Fehler auftritt, wird das Promise mit folgender Ausnahme aufgelöst:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine der folgenden Bedingungen zutrifft:
    - `close` ist wahr, was bedeutet, dass [`close()`](/de/docs/Web/API/ImageDecoder/close) bereits aufgerufen wurde.
    - Der angeforderte Frame existiert nicht.

## Beispiele

### Synchrone Dekodierung eines vollständigen Bildframes

Das folgende Beispiel dekodiert den zweiten Frame (bei Index `1`) und gibt das resultierende [`VideoFrame`](/de/docs/Web/API/VideoFrame) in der Konsole aus.

```js
let result = await imageDecoder.decode({ frameIndex: 1 });
console.log(result.image);
```

### Partielle Dekodierung eines progressiven Bildframes

Das folgende Beispiel dekodiert den ersten Frame wiederholt, bis er vollständig ist:

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
