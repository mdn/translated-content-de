---
title: "BaseAudioContext: listener-Eigenschaft"
short-title: listener
slug: Web/API/BaseAudioContext/listener
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("Web Audio API") }}

Die `listener`-Eigenschaft des {{ domxref("BaseAudioContext") }}-Interfaces
gibt ein {{ domxref("AudioListener") }}-Objekt zurück, das dann zur Implementierung von 3D-Audio-Spatialization verwendet werden kann.

## Wert

Ein {{ domxref("AudioListener") }}-Objekt.

## Beispiele

> [!NOTE]
> Für ein vollständiges Beispiel zur Web Audio-Spacealisierung, siehe unser [panner-node](https://github.com/mdn/webaudio-examples/tree/main/panner-node) Demo.

```js
const audioCtx = new AudioContext();
// Ältere Webkit/Blink-Browser benötigen ein Präfix

// …

const myListener = audioCtx.listener;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
