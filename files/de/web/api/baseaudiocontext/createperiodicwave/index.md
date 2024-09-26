---
title: "BaseAudioContext: Methode createPeriodicWave()"
short-title: createPeriodicWave()
slug: Web/API/BaseAudioContext/createPeriodicWave
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Audio API") }}

Die `createPeriodicWave()`-Methode des {{ domxref("BaseAudioContext") }}-Interfaces wird verwendet, um eine {{domxref("PeriodicWave")}} zu erstellen. Diese Welle wird verwendet, um eine periodische Wellenform zu definieren, die zur Gestaltung der Ausgabe eines {{ domxref("OscillatorNode") }} verwendet werden kann.

## Syntax

```js-nolint
createPeriodicWave(real, imag)
createPeriodicWave(real, imag, constraints)
```

### Parameter

- `real`
  - : Ein Array von Kosinus-Terms (traditionell die A-Terme).
- `imag`
  - : Ein Array von Sinus-Terms (traditionell die B-Terme).

Die Arrays `real` und `imag` müssen die gleiche Länge haben, sonst wird ein Fehler ausgelöst.

- `constraints` {{optional_inline}}

  - : Ein Wörterbuchobjekt, das angibt, ob die Normalisierung deaktiviert werden soll. Wenn nicht angegeben, ist die Normalisierung standardmäßig aktiviert. Es nimmt eine Eigenschaft:

    - `disableNormalization`
      - : Wenn auf `true` gesetzt, wird die Normalisierung für die periodische Welle deaktiviert. Der Standardwert ist `false`.

> [!NOTE]
> Wenn normalisiert, hat die resultierende Welle einen maximalen absoluten Spitzenwert von 1.

### Rückgabewert

Eine {{domxref("PeriodicWave")}}.

## Beispiele

Das folgende Beispiel veranschaulicht die einfache Verwendung von `createPeriodicWave()`, um ein {{domxref("PeriodicWave")}}-Objekt zu erstellen, das eine einfache Sinuswelle enthält.

```js
const real = new Float32Array(2);
const imag = new Float32Array(2);
const ac = new AudioContext();
const osc = ac.createOscillator();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

const wave = ac.createPeriodicWave(real, imag, { disableNormalization: true });

osc.setPeriodicWave(wave);

osc.connect(ac.destination);

osc.start();
osc.stop(2);
```

Dies funktioniert, weil ein Klang, der nur einen Grundton enthält, per Definition eine Sinuswelle ist.

Hier erstellen wir eine `PeriodicWave` mit zwei Werten. Der erste Wert ist der DC-Offset, welcher der Wert ist, bei dem der Oszillator startet. Ein Wert von `0` ist hier gut, da er die Kurve in der Mitte des `[-1.0; 1.0]` Bereichs startet. Die zweiten und nachfolgenden Werte sind Sinus- und Kosinuskomponenten, ähnlich dem Ergebnis einer Fourier-Transformation, die Zeitbereichswerte in Frequenzbereichswerte umwandelt. Hier, mit `createPeriodicWave()`, spezifizieren Sie die Frequenzen, und der Browser führt eine inverse Fourier-Transformation durch, um einen Zeitbereichspuffer für die Frequenz des Oszillators zu erhalten. In diesem Beispiel setzen wir nur eine Komponente mit voller Lautstärke (`1.0`) auf den Grundton, sodass wir eine Sinuswelle erhalten. Bedenken Sie, dass der Grundton der Frequenz des Oszillators entspricht (die standardmäßig `440 Hz` beträgt). Eine Änderung der Frequenz des Oszillators verschiebt daher effektiv die Frequenz dieser periodischen Welle mit.

Die Koeffizienten der Fourier-Transformation sollten in _aufsteigender_ Reihenfolge angegeben werden (d.h. <math><semantics><mrow><mrow><mo>(</mo><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mi>i</mi></msup><mo>,</mo><mrow><mo>(</mo><mrow><mi>c</mi><mo>+</mo><mi>d</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>i</mi></mrow></msup><mo>,</mo><mrow><mo>(</mo><mrow><mi>f</mi><mo>+</mo><mi>g</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mrow><mn>3</mn><mi>i</mi></mrow></msup></mrow><annotation encoding="TeX">\left(a+bi\right)e^{i} , \left(c+di\right)e^{2i} ,\left(f+gi\right)e^{3i} </annotation></semantics></math> usw.) und können positiv oder negativ sein. Eine einfache Möglichkeit, solche Koeffizienten manuell zu erhalten (wenn auch nicht die beste), ist die Verwendung eines graphischen Taschenrechners.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)