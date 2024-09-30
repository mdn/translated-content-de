---
title: "AudioWorkletProcessor: port-Eigenschaft"
short-title: port
slug: Web/API/AudioWorkletProcessor/port
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`port`**-Eigenschaft des
[`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Interfaces gibt den zugehörigen
[`MessagePort`](/de/docs/Web/API/MessagePort) zurück. Dieser kann verwendet werden, um zwischen dem Processor und
dem zugehörigen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zu kommunizieren.

> [!NOTE]
> Der Port am anderen Ende des Kanals ist über die
> [`port`](/de/docs/Web/API/AudioWorkletNode/port)-Eigenschaft des Knotens verfügbar.

## Wert

Das [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das den `AudioWorkletProcessor` und den zugehörigen `AudioWorkletNode` verbindet.

## Beispiele

Siehe [`AudioWorkletNode.port`](/de/docs/Web/API/AudioWorkletNode/port#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
