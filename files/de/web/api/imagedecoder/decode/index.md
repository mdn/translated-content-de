---
title: "ImageDecoder: decode()-Methode"
short-title: decode()
slug: Web/API/ImageDecoder/decode
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`**-Methode des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interfaces stellt eine Steuerungsnachricht in die Warteschlange, um den Rahmen eines Bildes zu decodieren.

## Syntax

```js-nolint
decode()
decode(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `frameIndex` {{optional_inline}}
      - : Eine Ganzzahl, die den Index des zu decodierenden Rahmens darstellt. Standardmäßig `0` (der erste Rahmen).
    - `completeFramesOnly` {{optional_inline}}
      - : Ein {{jsxref("boolean")}}, der standardmäßig auf `true` gesetzt ist. Wenn `false`, bedeutet dies, dass der Decoder bei progressivem Bild möglicherweise ein Bild mit reduzierten Details ausgibt. Wenn `false`, wird das von `decode()` zurückgegebene Versprechen genau einmal für jedes neue Detailniveau erfüllt.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `image`
  - : Ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), das das decodierte Bild enthält.
- `complete`
  - : Ein {{jsxref("boolean")}}, der, wenn `true`, angibt, dass `image` die endgültige Vollauflösungs-Ausgabe enthält.

### Ausnahmen

Wenn ein Fehler auftritt, wird das Versprechen mit der folgenden Ausnahme aufgelöst:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine der folgenden Bedingungen zutrifft:
    - `close` ist true, was bedeutet, dass [`close()`](/de/docs/Web/API/ImageDecoder/close) bereits aufgerufen wurde.
    - Der angeforderte Rahmen existiert nicht.

## Beispiele

### Synchrones Decodieren eines abgeschlossenen Bildrahmens

Das folgende Beispiel decodiert den zweiten Rahmen (an Index `1`) und druckt den resultierenden [`VideoFrame`](/de/docs/Web/API/VideoFrame) in die Konsole.

```js
let result = await imageDecoder.decode({ frameIndex: 1 });
console.log(result.image);
```

### Partielles Decodieren eines progressiven Bildrahmens

Das folgende Beispiel decodiert den ersten Rahmen wiederholt, bis er vollständig ist:

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
