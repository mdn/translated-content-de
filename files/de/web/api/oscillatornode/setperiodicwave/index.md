---
title: "OscillatorNode: Methode setPeriodicWave()"
short-title: setPeriodicWave()
slug: Web/API/OscillatorNode/setPeriodicWave
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ APIRef("Web Audio API") }}

Die **`setPeriodicWave()`**-Methode der {{domxref("OscillatorNode")}}-Schnittstelle wird verwendet, um auf eine {{domxref("PeriodicWave")}} zu verweisen, die eine periodische Wellenform definiert, die genutzt werden kann, um die Ausgabe des Oszillators zu formen, wenn {{domxref("OscillatorNode.type", "type")}} auf `custom` gesetzt ist.

## Syntax

```js-nolint
setPeriodicWave(wave)
```

### Parameter

- `wave`
  - : Ein {{domxref("PeriodicWave")}}-Objekt, das die Wellenform repräsentiert, die als Form der Ausgabe des Oszillators verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel zeigt die einfache Verwendung von `createPeriodicWave()`, um eine Sinuswelle aus einer periodischen Welle neu zu erstellen.

```js
const real = new Float32Array(2);
const imag = new Float32Array(2);
const ac = new AudioContext();
const osc = ac.createOscillator();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

const wave = ac.createPeriodicWave(real, imag);

osc.setPeriodicWave(wave);

osc.connect(ac.destination);

osc.start();
osc.stop(2);
```

Dies funktioniert, weil ein Klang, der nur einen Grundton enthält, definitionsgemäß eine Sinuswelle ist.

Hier erstellen wir eine {{domxref("PeriodicWave")}} mit zwei Werten. Der erste Wert ist der DC-Offset, welcher der Wert ist, bei dem der Oszillator startet. 0 ist hier gut, weil wir die Kurve in der Mitte des \[-1.0; 1.0]-Bereichs starten möchten.

Die zweiten und weiteren Werte sind Sinus- und Kosinus-Komponenten. Sie können es sich als das Ergebnis einer Fourier-Transformation vorstellen, bei der Sie Frequenzbereichswerte aus einem Zeitbereichswert erhalten. Hier, mit `createPeriodicWave()`, spezifizieren Sie die Frequenzen, und der Browser führt eine inverse Fourier-Transformation durch, um einen Zeitbereichspuffer für die Frequenz des Oszillators zu erhalten. Hier setzen wir nur eine Komponente mit voller Lautstärke (1.0) auf den Grundton, sodass wir eine Sinuswelle erhalten.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [AudioContext.createPeriodicWave](/de/docs/Web/API/BaseAudioContext/createPeriodicWave)
