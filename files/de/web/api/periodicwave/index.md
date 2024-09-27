---
title: PeriodicWave
slug: Web/API/PeriodicWave
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{ APIRef("Web Audio API") }}

Die **`PeriodicWave`**-Schnittstelle definiert eine periodische Wellenform, die verwendet werden kann, um die Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu formen.

`PeriodicWave` hat keine Eingaben oder Ausgaben; sie wird verwendet, um benutzerdefinierte Oszillatoren zu definieren, wenn [`OscillatorNode.setPeriodicWave()`](/de/docs/Web/API/OscillatorNode/setPeriodicWave) aufgerufen wird. Die `PeriodicWave` selbst wird von [`BaseAudioContext.createPeriodicWave`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) erstellt/zurückgegeben.

## Konstruktor

- [`PeriodicWave()`](/de/docs/Web/API/PeriodicWave/PeriodicWave)
  - : Erstellt eine neue Instanz eines `PeriodicWave`-Objekts mit den Standardwerten für alle Eigenschaften. Wenn Sie benutzerdefinierte Eigenschaftswerte von Anfang an festlegen möchten, verwenden Sie stattdessen die Fabrikmethode [`BaseAudioContext.createPeriodicWave`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave).

## Instanzeigenschaften

Keine; außerdem erbt `PeriodicWave` keine Eigenschaften.

## Instanzmethoden

Keine; außerdem erbt `PeriodicWave` keine Methoden.

## Beispiel

Sehen Sie sich [`BaseAudioContext.createPeriodicWave`](/de/docs/Web/API/BaseAudioContext/createPeriodicWave) für einfaches Beispielcode an, das zeigt, wie ein `PeriodicWave`-Objekt erstellt wird, das eine einfache Sinuswelle enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
