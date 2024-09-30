---
title: "EncodedAudioChunk: EncodedAudioChunk() Konstruktor"
short-title: EncodedAudioChunk()
slug: Web/API/EncodedAudioChunk/EncodedAudioChunk
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`EncodedAudioChunk()`** Konstruktor erstellt ein neues [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk) Objekt, das einen Chunk von kodiertem Audio repräsentiert.

## Syntax

```js-nolint
new EncodedAudioChunk(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `type`
      - : Gibt an, ob der Chunk ein Schlüssel-Chunk ist, der nicht von anderen Frames für die Kodierung abhängt. Einer von:
        - `"key"`
          - : Die Daten sind ein Schlüssel-Chunk.
        - `"delta"`
          - : Die Daten sind kein Schlüssel-Chunk.
    - `timestamp`
      - : Ein ganzzahliger Wert, der den Zeitstempel des Audios in Mikrosekunden darstellt.
    - `duration`
      - : Ein ganzzahliger Wert, der die Länge des Audios in Mikrosekunden darstellt.
    - `data`
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}, das die Audiodaten enthält.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, das `EncodedAudioChunk` ablöst und in Besitz nimmt. Wenn das Array den {{jsxref("ArrayBuffer")}} enthält, der `data` unterstützt, wird `EncodedAudioChunk` diesen Puffer direkt verwenden, anstatt ihn zu kopieren.

## Beispiele

Im folgenden Beispiel wird ein neuer `EncodedAudioChunk` erstellt.

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
  transfer: [audioBuffer],
};
chunk = new EncodedAudioChunk(init);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
