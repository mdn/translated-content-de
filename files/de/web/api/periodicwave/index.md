---
title: PeriodicWave
slug: Web/API/PeriodicWave
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{ APIRef("Web Audio API") }}

Die **`PeriodicWave`**-Schnittstelle definiert eine periodische Wellenform, die zur Gestaltung der Ausgabe eines {{domxref("OscillatorNode")}} verwendet werden kann.

`PeriodicWave` hat keine Eingaben oder Ausgaben; es wird verwendet, um benutzerdefinierte Oszillatoren zu definieren, wenn {{domxref("OscillatorNode.setPeriodicWave()")}} aufgerufen wird. Der `PeriodicWave` selbst wird durch {{domxref("BaseAudioContext.createPeriodicWave")}} erstellt oder zurückgegeben.

## Konstruktor

- {{domxref("PeriodicWave.PeriodicWave", "PeriodicWave()")}}
  - : Erstellt eine neue `PeriodicWave`-Objektinstanz unter Verwendung der Standardwerte für alle Eigenschaften. Wenn Sie benutzerdefinierte Eigenschaftswerte von Anfang an festlegen möchten, verwenden Sie stattdessen die {{domxref("BaseAudioContext.createPeriodicWave")}}-Fabrikmethode.

## Instanz-Eigenschaften

Keine; außerdem erbt `PeriodicWave` keine Eigenschaften.

## Instanz-Methoden

Keine; außerdem erbt `PeriodicWave` keine Methoden.

## Beispiel

Siehe {{domxref("BaseAudioContext.createPeriodicWave")}} für einfachen Beispielcode, der zeigt, wie ein `PeriodicWave`-Objekt erstellt wird, das eine einfache Sinuswelle enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
