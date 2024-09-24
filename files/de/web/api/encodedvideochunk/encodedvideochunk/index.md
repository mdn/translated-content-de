---
title: "EncodedVideoChunk: EncodedVideoChunk() Konstruktor"
short-title: EncodedVideoChunk()
slug: Web/API/EncodedVideoChunk/EncodedVideoChunk
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`EncodedVideoChunk()`** Konstruktor erstellt ein neues {{domxref("EncodedVideoChunk")}} Objekt, das ein Stück eines kodierten Videos darstellt.

## Syntax

```js-nolint
new EncodedVideoChunk(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `type`
      - : Gibt an, ob das Chunk ein Schlüssel-Chunk ist, das nicht auf andere Frames für die Kodierung angewiesen ist. Eines von:
        - `"key"`
          - : Die Daten sind ein Schlüssel-Chunk.
        - `"delta"`
          - : Die Daten sind kein Schlüssel-Chunk.
    - `timestamp`
      - : Ein Integer, der den Zeitstempel des Videos in Mikrosekunden darstellt.
    - `duration`
      - : Ein Integer, der die Länge des Videos in Mikrosekunden darstellt.
    - `data`
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}} mit den Videodaten.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, das `EncodedVideoChunk` abtrennen und in Besitz nehmen wird. Wenn das Array den {{jsxref("ArrayBuffer")}} enthält, der `data` unterstützt, wird `EncodedVideoChunk` diesen Puffer direkt verwenden, anstatt ihn zu kopieren.

## Beispiele

Im folgenden Beispiel wird ein neues `EncodedVideoChunk` erstellt.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
  transfer: [videoBuffer],
};
chunk = new EncodedVideoChunk(init);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
