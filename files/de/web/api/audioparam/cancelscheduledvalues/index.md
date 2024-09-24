---
title: "AudioParam: cancelScheduledValues()-Methode"
short-title: cancelScheduledValues()
slug: Web/API/AudioParam/cancelScheduledValues
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

Die `cancelScheduledValues()`-Methode der {{ domxref("AudioParam") }}-Schnittstelle storniert alle geplanten zukünftigen Änderungen am `AudioParam`.

## Syntax

```js-nolint
cancelScheduledValues(startTime)
```

### Parameter

- `startTime`
  - : Ein Double, das die Zeit (in Sekunden) repräsentiert, nachdem der {{ domxref("AudioContext") }} zuerst erstellt wurde, ab der alle geplanten Änderungen storniert werden.

### Rückgabewert

Eine Referenz auf dieses `AudioParam`-Objekt. In einigen älteren Implementierungen gibt diese Methode {{jsxref('undefined')}} zurück.

## Beispiele

```js
const gainNode = audioCtx.createGain();
gainNode.gain.setValueCurveAtTime(waveArray, audioCtx.currentTime, 2); //'gain' is the AudioParam
gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
