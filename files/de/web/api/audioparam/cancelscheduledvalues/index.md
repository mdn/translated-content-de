---
title: "AudioParam: Methode cancelScheduledValues()"
short-title: cancelScheduledValues()
slug: Web/API/AudioParam/cancelScheduledValues
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{ APIRef("Web Audio API") }}

Die `cancelScheduledValues()`-Methode der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle storniert alle geplanten zukünftigen Änderungen am `AudioParam`.

## Syntax

```js-nolint
cancelScheduledValues(startTime)
```

### Parameter

- `startTime`
  - : Ein Double, das die Zeit (in Sekunden) angibt, nachdem der [`AudioContext`](/de/docs/Web/API/AudioContext) erstmals erstellt wurde und nach der alle geplanten Änderungen storniert werden.

### Rückgabewert

Eine Referenz auf dieses `AudioParam`-Objekt. In einigen älteren Implementierungen gibt diese Methode {{jsxref('undefined')}} zurück.

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
