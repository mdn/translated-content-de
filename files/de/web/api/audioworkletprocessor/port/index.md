---
title: "AudioWorkletProcessor: port-Eigenschaft"
short-title: port
slug: Web/API/AudioWorkletProcessor/port
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`port`**-Eigenschaft des {{domxref("AudioWorkletProcessor")}}-Interfaces gibt den zugehörigen {{domxref("MessagePort")}} zurück. Sie kann verwendet werden, um zwischen dem Prozessor und dem {{domxref("AudioWorkletNode")}}, zu dem er gehört, zu kommunizieren.

> [!NOTE]
> Der Port am anderen Ende des Kanals ist unter der {{domxref("AudioWorkletNode.port", "port")}}-Eigenschaft des Knotens verfügbar.

## Wert

Das {{domxref("MessagePort")}}-Objekt, das den `AudioWorkletProcessor` und den zugehörigen `AudioWorkletNode` verbindet.

## Beispiele

Siehe [`AudioWorkletNode.port`](/de/docs/Web/API/AudioWorkletNode/port#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
