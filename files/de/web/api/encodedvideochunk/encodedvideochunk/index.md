---
title: "EncodedVideoChunk: EncodedVideoChunk() Konstruktor"
short-title: EncodedVideoChunk()
slug: Web/API/EncodedVideoChunk/EncodedVideoChunk
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`EncodedVideoChunk()`** Konstruktor erstellt ein neues [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekt, das einen Block kodierten Videos darstellt.

## Syntax

```js-nolint
new EncodedVideoChunk(options)
```

### Parameter

- `options`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `type`
      - : Gibt an, ob der Block ein Schlüsselblock ist, der nicht auf andere Frames zur Kodierung angewiesen ist. Einer von:
        - `"key"`
          - : Die Daten sind ein Schlüsselblock.
        - `"delta"`
          - : Die Daten sind kein Schlüsselblock.
    - `timestamp`
      - : Ein ganzzahliger Wert, der den Zeitstempel des Videos in Mikrosekunden darstellt.
    - `duration`
      - : Ein ganzzahliger Wert, der die Länge des Videos in Mikrosekunden darstellt.
    - `data`
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder eine {{jsxref("DataView")}}, die die Videodaten enthält.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, die `EncodedVideoChunk` abtrennen und in Besitz nehmen wird. Wenn das Array den {{jsxref("ArrayBuffer")}} enthält, der `data` unterstützt, wird `EncodedVideoChunk` diesen Puffer direkt verwenden, anstatt ihn zu kopieren.

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
