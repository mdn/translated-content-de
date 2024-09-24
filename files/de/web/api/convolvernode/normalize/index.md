---
title: "ConvolverNode: normalize-Eigenschaft"
short-title: normalize
slug: Web/API/ConvolverNode/normalize
l10n:
  sourceCommit: ca4eca184b32202ce9fd80b29e1c2a68763b7f92
---

{{ APIRef("Web Audio API") }}

Die `normalize`-Eigenschaft des {{ domxref("ConvolverNode") }}-Interface ist ein boolescher Wert, der kontrolliert, ob die Impulsantwort aus dem Puffer durch eine gleichstarke Normalisierung skaliert wird, wenn das `buffer`-Attribut gesetzt ist, oder nicht.

Ihr Standardwert ist `true`, um einen gleichmäßigeren Ausgangspegel vom Convolver zu erreichen, wenn dieser mit unterschiedlichen Impulsantworten geladen wird. Wenn `normalize` auf `false` gesetzt ist, wird die Faltung ohne Vorverarbeitung/Skalierung der Impulsantwort ausgeführt. Änderungen an diesem Wert treten erst in Kraft, wenn das `buffer`-Attribut das nächste Mal gesetzt wird.

## Wert

Ein boolescher Wert.

## Beispiele

### Normalisierung ausschalten

Das folgende Beispiel erstellt einen Convolver-Knoten und weist ihm einen {{domxref("AudioBuffer")}} zu. Bevor der Audio-Puffer zugewiesen wird, wird `normalize` auf `false` gesetzt.

```js
const audioCtx = new AudioContext();
// ...

const convolver = audioCtx.createConvolver();
// ...

// Audiotrack über fetch() für Convolver-Knoten abrufen
try {
  const response = await fetch(
    "https://mdn.github.io/voice-change-o-matic/audio/concert-crowd.ogg",
  );
  const arrayBuffer = await response.arrayBuffer();
  const decodedAudio = await audioCtx.decodeAudioData(arrayBuffer);
  convolver.normalize = false; // muss vor dem Puffer gesetzt werden, um zu wirken
  convolver.buffer = decodedAudio;
} catch (error) {
  console.error(
    `Unable to fetch the audio file: ${name} Error: ${err.message}`,
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
