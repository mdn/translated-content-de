---
title: "AudioContext: baseLatency-Eigenschaft"
short-title: baseLatency
slug: Web/API/AudioContext/baseLatency
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die **`baseLatency`** schreibgeschützte Eigenschaft des {{domxref("AudioContext")}}-Interfaces gibt einen Gleitkommawert zurück, der die Anzahl der Sekunden der Verarbeitungsverzögerung darstellt, die durch den Übergang eines Audiopuffers vom `AudioContext` vom {{domxref("AudioDestinationNode")}} — d.h. das Ende des Audiographen — in das Audiosubsystem des Hosts bereit zum Abspielen verursacht wird.

> [!NOTE]
> Sie können eine bestimmte Latenz während der {{domxref("AudioContext.AudioContext()", "Konstruktionszeit", "", "true")}} mit der Option `latencyHint` anfordern, aber der Browser kann die Option ignorieren.

## Wert

Ein Gleitkommawert, der die Basislatenz in Sekunden darstellt.

## Beispiele

```js
// Standardlatenz ("interaktiv")
const audioCtx1 = new AudioContext();
console.log(audioCtx1.baseLatency); // 0.00

// Höhere Latenz ("Wiedergabe")
const audioCtx2 = new AudioContext({ latencyHint: "playback" });
console.log(audioCtx2.baseLatency); // 0.15
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
