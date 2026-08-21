---
title: "ScriptProcessorNode: bufferSize-Eigenschaft"
short-title: bufferSize
slug: Web/API/ScriptProcessorNode/bufferSize
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Web Audio API")}}

Die `bufferSize`-Eigenschaft des [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Interfaces gibt eine ganze Zahl zurück, die sowohl die Eingabe- als auch die Ausgabepuffergröße in Sample-Frames darstellt. Ihr Wert kann eine Potenz von 2 im Bereich von `256` bis `16384` sein.

> [!NOTE]
> Diese Funktion wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und das [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Interface ersetzt.

## Wert

Eine ganze Zahl.

## Beispiele

Siehe [`BaseAudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
