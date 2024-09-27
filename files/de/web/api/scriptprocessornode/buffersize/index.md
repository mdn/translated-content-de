---
title: "ScriptProcessorNode: bufferSize-Eigenschaft"
short-title: bufferSize
slug: Web/API/ScriptProcessorNode/bufferSize
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

Die `bufferSize`-Eigenschaft des [`ScriptProcessorNode`](/de/docs/Web/API/ScriptProcessorNode)-Interfaces gibt eine Ganzzahl zurück, die sowohl die Eingabe- als auch die Ausgabepuffergröße in Sample-Frames darstellt. Ihr Wert kann eine Zweierpotenz im Bereich von `256` – `16384` sein.

> [!NOTE]
> Diese Funktion wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und das [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Interface ersetzt.

## Wert

Eine Ganzzahl.

## Beispiele

Siehe [`BaseAudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
