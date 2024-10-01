---
title: "WaveShaperNode: oversample-Eigenschaft"
short-title: oversample
slug: Web/API/WaveShaperNode/oversample
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{ APIRef("Web Audio API") }}

Die `oversample`-Eigenschaft der [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)-Schnittstelle ist ein enumerierter Wert, der angibt, ob Oversampling verwendet werden muss. Oversampling ist eine Technik, bei der vor der Anwendung eines Verzerrungseffekts auf das Audiosignal mehr Samples (Hochabtastung) erstellt werden.

Nach der Anwendung wird die Anzahl der Samples auf die ursprüngliche Anzahl reduziert. Dies führt zu besseren Ergebnissen, indem einige Aliasing-Effekte vermieden werden, geht jedoch auf Kosten einer geringeren Präzision der Formungskurve.

Die möglichen Werte für `oversample` sind:

| Wert     | Effekt                                                                        |
| -------- | ----------------------------------------------------------------------------- |
| `'none'` | Es wird kein Oversampling durchgeführt.                                       |
| `'2x'`   | Die Anzahl der Samples wird vor der Anwendung der Formungskurve verdoppelt.   |
| `'4x'`   | Die Anzahl der Samples wird vor der Anwendung der Formungskurve vervierfacht. |

## Wert

Einer von `'none'`, `'2x'` oder `'4x'`.

## Beispiele

Siehe [`BaseAudioContext.createWaveShaper()`](/de/docs/Web/API/BaseAudioContext/createWaveShaper#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
