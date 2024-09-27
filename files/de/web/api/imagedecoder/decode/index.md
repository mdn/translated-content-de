---
title: "ImageDecoder: decode() Methode"
short-title: decode()
slug: Web/API/ImageDecoder/decode
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

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
      - : Ein Integer, der den Index des zu decodierenden Frames darstellt. Standardwert ist `0` (der erste Frame).
    - `completeFramesOnly` {{optional_inline}}
      - : Ein {{jsxref("boolean")}}, der standardmäßig auf `true` gesetzt ist. Wenn `false`, deutet dies darauf hin, dass der Decoder bei progressiven Bildern ein Bild mit reduzierter Detailgenauigkeit ausgeben kann. Wenn `false`, wird das Promise, das durch `decode()` zurückgegeben wird, genau einmal für jede neue Detailebene aufgelöst.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `image`
  - : Ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), der das decodierte Bild enthält.
- `complete`
  - : Ein {{jsxref("boolean")}}, wenn `true`, zeigt an, dass `image` die endgültige detaillierte Ausgabe enthält.

### Ausnahmen

Wenn ein Fehler auftritt, wird das Promise mit der folgenden Ausnahme aufgelöst:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine der folgenden Bedingungen zutrifft:
    - `close` ist wahr, was bedeutet, dass [`close()`](/de/docs/Web/API/ImageDecoder/close) bereits aufgerufen wurde.
    - Der angeforderte Frame existiert nicht.

## Beispiele

### Synchrones Decodieren eines vollständigen Bildframes

Das folgende Beispiel decodiert den zweiten Frame (am Index `1`) und gibt den resultierenden [`VideoFrame`](/de/docs/Web/API/VideoFrame) in der Konsole aus.

```js
let result = await imageDecoder.decode({ frameIndex: 1 });
console.log(result.image);
```

### Teilweise Decodierung eines progressiven Bildframes

Das folgende Beispiel decodiert den ersten Frame wiederholt, bis er vollständig ist:

```js
let complete = false;
while (!complete) {
  // The promise returned by `decode()` will only resolve when a new
  // level of detail is available or the frame is complete. I.e.,
  // calling `decode()` in a loop like this is won't needlessly spin.
  let result = await imageDecode.decode({ completeFramesOnly: false });

  // Do something with `result.image`.

  complete = result.complete;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
