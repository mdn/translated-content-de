---
title: "GainNode: Gain-Eigenschaft"
short-title: Gain
slug: Web/API/GainNode/gain
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{ APIRef("Web Audio API") }}

Die `gain`-Eigenschaft der {{ domxref("GainNode") }}-Schnittstelle ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, das die Menge des anzuwendenden Gains darstellt.

## Wert

Ein {{domxref("AudioParam")}}.

> [!NOTE]
> Obwohl der zurückgegebene `AudioParam` schreibgeschützt ist, ist der dargestellte Wert dies nicht.

## Beispiele

Sehen Sie sich [`BaseAudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain#examples) für Beispielcode an, der zeigt, wie ein `AudioContext` verwendet wird, um einen `GainNode` zu erstellen, der dann verwendet wird, um das Audio stummzuschalten und die Stummschaltung aufzuheben, indem der Gain-Eigenschaftswert geändert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
