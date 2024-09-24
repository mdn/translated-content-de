---
title: "BaseAudioContext: sampleRate-Eigenschaft"
short-title: sampleRate
slug: Web/API/BaseAudioContext/sampleRate
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("Web Audio API") }}

Die `sampleRate`-Eigenschaft des {{domxref("BaseAudioContext")}}-Interfaces gibt eine Fließkommazahl zurück, die die Abtastrate in Abtastungen pro Sekunde darstellt, die von allen Knoten in diesem Audio-Kontext verwendet wird. Diese Einschränkung bedeutet, dass Abtastratenkonverter nicht unterstützt werden.

## Wert

Eine Fließkommazahl, die die Abtastrate des Audio-Kontexts in Abtastungen pro
Sekunde angibt.

## Beispiele

> [!NOTE]
> Für eine vollständige Implementierung des Web Audio-Beispiels sehen Sie sich eines unserer
> Web Audio Demos im [MDN GitHub-Repo](https://github.com/mdn/webaudio-examples) an. Versuchen Sie, `audioCtx.sampleRate` in Ihre Browser-Konsole einzugeben.

```js
const audioCtx = new AudioContext();
// Ältere WebKit/Blink-Browser erfordern ein Präfix

// …

console.log(audioCtx.sampleRate);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
