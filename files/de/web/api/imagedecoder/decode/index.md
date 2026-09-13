---
title: "ImageDecoder: decode()-Methode"
short-title: decode()
slug: Web/API/ImageDecoder/decode
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`**-Methode des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interfaces reiht eine Steuerungsnachricht ein, um den Frame eines Bildes zu dekodieren.

## Syntax

```js-nolint
decode()
decode(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `frameIndex` {{optional_inline}}
      - : Ein Integer, der den Index des zu dekodierenden Frames darstellt. Standardmäßig `0` (der erste Frame).
    - `completeFramesOnly` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, standardmäßig `true`.
        Wenn `true`, wird das `Promise`, das von der Methode zurückgegeben wird, nur dann aufgelöst, wenn das Bild vollständig dekodiert ist.
        Wenn `false`, wird die Methode ein neues `Promise` zurückgeben, das möglicherweise mit einem teilweise dekodierten Bild aufgelöst wird.
        Die Methode kann wiederholt aufgerufen werden, bis `result.complete` wahr ist, wobei jeder Schritt ein Bild mit dem nächsten verfügbaren Detaillierungsgrad bereitstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `image`
  - : Ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), das das dekodierte Bild enthält.
- `complete`
  - : Ein {{jsxref("Boolean")}}, das, wenn `true`, anzeigt, dass `image` das endgültige voll detaillierte Ergebnis enthält.

### Ausnahmen

Wenn ein Fehler auftritt, wird das Promise mit folgender Ausnahme aufgelöst:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine der folgenden Bedingungen zutrifft:
    - `close` ist wahr, was bedeutet, dass [`close()`](/de/docs/Web/API/ImageDecoder/close) bereits aufgerufen wurde.
    - Der angeforderte Frame existiert nicht.

## Beispiele

### Synchrones Dekodieren eines abgeschlossenen Bild-Frames

Das folgende Beispiel dekodiert den zweiten Frame (bei Index `1`) und gibt den resultierenden [`VideoFrame`](/de/docs/Web/API/VideoFrame) in der Konsole aus.

```js
let result = await imageDecoder.decode({ frameIndex: 1 });
console.log(result.image);
```

### Teilweise Dekodierung eines progressiven Bild-Frames

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
