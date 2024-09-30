---
title: "GainNode: gain-Eigenschaft"
short-title: gain
slug: Web/API/GainNode/gain
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{ APIRef("Web Audio API") }}

Die `gain`-Eigenschaft des [`GainNode`](/de/docs/Web/API/GainNode)-Interfaces ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Menge des anzuwendenden Verstärkers darstellt.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam).

> [!NOTE]
> Obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der Wert, den es darstellt, dies nicht.

## Beispiele

Siehe [`BaseAudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain#examples) für Beispielcode, der zeigt, wie ein `AudioContext` verwendet wird, um einen `GainNode` zu erstellen, der dann verwendet wird, um das Audio durch Änderung des Werts der gain-Eigenschaft stummzuschalten und die Stummschaltung aufzuheben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
