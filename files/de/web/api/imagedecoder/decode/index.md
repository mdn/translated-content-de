---
title: "ImageDecoder: Methode decode()"
short-title: decode()
slug: Web/API/ImageDecoder/decode
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`**-Methode des [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Interfaces sendet eine Steuerungsmeldung, um den Frame eines Bildes zu dekodieren.

## Syntax

```js-nolint
decode()
decode(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `frameIndex` {{optional_inline}}
      - : Ein ganzzahliger Wert, der den Index des zu dekodierenden Frames darstellt. Standardmäßig `0` (der erste Frame).
    - `completeFramesOnly` {{optional_inline}}
      - : Ein {{jsxref("boolean")}}, der standardmäßig auf `true` gesetzt ist. Wenn `false`, deutet dies darauf hin, dass der Decoder bei progressiven Bildern ein Bild mit reduzierten Details ausgeben kann. Wenn `false`, wird das von `decode()` zurückgegebene Versprechen genau einmal für jede neue Detailstufe aufgelöst.

### Rückgabewert

Ein {{jsxref("promise")}}, das sich mit einem Objekt auflöst, das die folgenden Mitglieder enthält:

- `image`
  - : Ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), das das dekodierte Bild enthält.
- `complete`
  - : Ein {{jsxref("boolean")}}, wenn `true`, zeigt an, dass `image` die endgültige Ausgabe in voller Detailtiefe enthält.

### Ausnahmen

Wenn ein Fehler auftritt, wird das Versprechen mit der folgenden Ausnahme aufgelöst:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine der folgenden Bedingungen zutrifft:
    - `close` ist wahr, was bedeutet, dass [`close()`](/de/docs/Web/API/ImageDecoder/close) bereits aufgerufen wurde.
    - Der angeforderte Frame existiert nicht.

## Beispiele

### Synchrone Dekodierung eines vollständigen Bild-Frames

Das folgende Beispiel dekodiert den zweiten Frame (bei Index `1`) und gibt das resultierende [`VideoFrame`](/de/docs/Web/API/VideoFrame) in der Konsole aus.

```js
let result = await imageDecoder.decode({ frameIndex: 1 });
console.log(result.image);
```

### Partielle Dekodierung eines progressiven Bild-Frames

Das folgende Beispiel dekodiert den ersten Frame wiederholt, bis er vollständig ist:

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
