---
title: "AudioParam: cancelScheduledValues()-Methode"
short-title: cancelScheduledValues()
slug: Web/API/AudioParam/cancelScheduledValues
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{ APIRef("Web Audio API") }}

Die `cancelScheduledValues()`-Methode der [`AudioParam`](/de/docs/Web/API/AudioParam)
Schnittstelle storniert alle geplanten zukünftigen Änderungen am `AudioParam`.

## Syntax

```js-nolint
cancelScheduledValues(startTime)
```

### Parameter

- `startTime`
  - : Ein Doppelwert, der die Zeit (in Sekunden) darstellt, nach der der [`AudioContext`](/de/docs/Web/API/AudioContext)
    zuerst erstellt wurde und nach der alle geplanten Änderungen storniert werden.

### Rückgabewert

Eine Referenz auf dieses `AudioParam`-Objekt. In einigen älteren Implementierungen gibt diese
Methode {{jsxref('undefined')}} zurück.

## Beispiele

```js
const gainNode = audioCtx.createGain();
gainNode.gain.setValueCurveAtTime(waveArray, audioCtx.currentTime, 2); // 'gain' is the AudioParam
gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
