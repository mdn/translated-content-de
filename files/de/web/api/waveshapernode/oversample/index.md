---
title: "WaveShaperNode: oversample-Eigenschaft"
short-title: oversample
slug: Web/API/WaveShaperNode/oversample
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{ APIRef("Web Audio API") }}

Die `oversample`-Eigenschaft der [`WaveShaperNode`](/de/docs/Web/API/WaveShaperNode)-Schnittstelle ist ein enumerierter Wert, der angibt, ob Oversampling verwendet werden muss. Oversampling ist eine Technik zur Erstellung zusätzlicher Samples (Hochabtastung), bevor ein Verzerrungseffekt auf das Audiosignal angewendet wird.

Nach der Anwendung wird die Anzahl der Samples auf ihre ursprüngliche Anzahl reduziert. Dies führt zu besseren Ergebnissen, da einige Aliasing-Effekte vermieden werden, geht jedoch auf Kosten einer geringeren Präzision der Formungskurve.

Die möglichen Werte für `oversample` sind:

| Wert     | Effekt                                                                        |
| -------- | ----------------------------------------------------------------------------- |
| `'none'` | Kein Oversampling durchführen.                                                |
| `'2x'`   | Verdoppele die Anzahl der Samples, bevor die Formungskurve angewendet wird.   |
| `'4x'`   | Vervierfache die Anzahl der Samples, bevor die Formungskurve angewendet wird. |

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
