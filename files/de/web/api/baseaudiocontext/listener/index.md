---
title: "BaseAudioContext: listener-Eigenschaft"
short-title: listener
slug: Web/API/BaseAudioContext/listener
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft **`listener`** der Schnittstelle [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) gibt ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt zurück, das zur Implementierung einer räumlichen 3D-Audiowiedergabe verwendet werden kann.

## Wert

Ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt.

## Beispiele

> [!NOTE]
> Ein vollständiges Beispiel für die räumliche Audiowiedergabe mit Web Audio finden Sie in unserer [panner-node-Demo](https://github.com/mdn/webaudio-examples/tree/main/panner-node).

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
