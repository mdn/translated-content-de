---
title: "BaseAudioContext: listener-Eigenschaft"
short-title: listener
slug: Web/API/BaseAudioContext/listener
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("Web Audio API") }}

Die `listener`-Eigenschaft des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Interfaces
gibt ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt zurück, das dann für die Implementierung der 3D-Audio-Räumlichkeit verwendet werden kann.

## Wert

Ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt.

## Beispiele

> [!NOTE]
> Für ein vollständiges Beispiel zur Web-Audio-Räumlichkeit, sehen Sie sich unser [panner-node](https://github.com/mdn/webaudio-examples/tree/main/panner-node) Demo an.

```js
const audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

// …

const myListener = audioCtx.listener;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
