---
title: "BaseAudioContext: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/BaseAudioContext/sampleRate
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft **`sampleRate`** der Schnittstelle [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) gibt eine Fließkommazahl zurück, die die von allen Nodes in diesem Audio-Kontext verwendete Abtastrate in Samples pro Sekunde angibt.
Diese Einschränkung bedeutet, dass Abtastratenkonverter nicht unterstützt werden.

## Wert

Eine Fließkommazahl, die die Abtastrate des Audio-Kontexts in Samples pro Sekunde angibt.

## Beispiele

> [!NOTE]
> Ein vollständiges Implementierungsbeispiel für Web Audio finden Sie in einer unserer
> Web-Audio-Demos im [MDN-GitHub-Repository](https://github.com/mdn/webaudio-examples). Geben Sie
> `audioCtx.sampleRate` in Ihre Browserkonsole ein.

```js
const audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

// …

console.log(audioCtx.sampleRate);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
