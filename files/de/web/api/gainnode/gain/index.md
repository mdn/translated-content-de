---
title: "GainNode: gain-Eigenschaft"
short-title: gain
slug: Web/API/GainNode/gain
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{ APIRef("Web Audio API") }}

Die `gain`-Eigenschaft der [`GainNode`](/de/docs/Web/API/GainNode)-Schnittstelle ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das den Betrag des anzuwendenden Gain darstellt.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam).

> [!NOTE]
> Obwohl das zurückgegebene `AudioParam` schreibgeschützt ist, ist der Wert, den es darstellt, dies nicht.

## Beispiele

Sehen Sie sich [`BaseAudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain#examples) für ein Beispiel an, wie ein `AudioContext` zum Erstellen eines `GainNode` verwendet wird, der dann verwendet wird, um die Audio-Ausgabe stummzuschalten und die Stummschaltung durch Ändern des gain-Eigenschaftswerts aufzuheben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
