---
title: "WaveShaperNode: oversample-Eigenschaft"
short-title: oversample
slug: Web/API/WaveShaperNode/oversample
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{ APIRef("Web Audio API") }}

Die `oversample`-Eigenschaft der {{ domxref("WaveShaperNode") }}-Schnittstelle ist ein enumerierter Wert, der angibt, ob Oversampling verwendet werden muss. Oversampling ist eine Technik, um mehr Samples (Up-Sampling) zu erstellen, bevor ein Verzerrungseffekt auf das Audiosignal angewendet wird.

Nachdem das Oversampling angewendet wurde, wird die Anzahl der Samples auf die ursprüngliche Anzahl reduziert. Dies führt zu besseren Ergebnissen, indem einige Aliasing-Effekte vermieden werden, geht jedoch auf Kosten einer geringeren Präzision der Kurvengestaltung.

Die möglichen `oversample`-Werte sind:

| Wert     | Effekt                                                                   |
| -------- | ------------------------------------------------------------------------ |
| `'none'` | Kein Oversampling durchführen.                                           |
| `'2x'`   | Verdoppeln Sie die Anzahl der Samples, bevor die Gestaltungskurve angewendet wird. |
| `'4x'`   | Vervierfachen Sie die Anzahl der Samples, bevor die Gestaltungskurve angewendet wird. |

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
