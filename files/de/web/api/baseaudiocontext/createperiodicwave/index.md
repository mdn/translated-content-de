---
title: "BaseAudioContext: createPeriodicWave()-Methode"
short-title: createPeriodicWave()
slug: Web/API/BaseAudioContext/createPeriodicWave
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("Web Audio API") }}

Die `createPeriodicWave()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle wird verwendet, um eine [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) zu erstellen. Diese Welle wird verwendet, um eine periodische Wellenform zu definieren, die verwendet werden kann, um die Ausgabe eines [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) zu formen.

## Syntax

```js-nolint
createPeriodicWave(real, imag)
createPeriodicWave(real, imag, constraints)
```

### Parameter

- `real`
  - : Ein Array von Kosinustermen (traditionell die A-Terme).
- `imag`
  - : Ein Array von Sinustermen (traditionell die B-Terme).

Die `real`- und `imag`-Arrays müssen die gleiche Länge haben, andernfalls wird ein Fehler ausgelöst.

- `constraints` {{optional_inline}}

  - : Ein Wörterbuchobjekt, das angibt, ob die Normalisierung deaktiviert werden soll. Wenn nicht angegeben, ist die Normalisierung standardmäßig aktiviert. Es nimmt eine Eigenschaft:

    - `disableNormalization`
      - : Wenn auf `true` gesetzt, wird die Normalisierung für die periodische Welle deaktiviert. Der Standardwert ist `false`.

> [!NOTE]
> Wenn normalisiert, wird die resultierende Welle einen maximalen absoluten Spitzenwert von 1 haben.

### Rückgabewert

Eine [`PeriodicWave`](/de/docs/Web/API/PeriodicWave).

## Beispiele

Das folgende Beispiel veranschaulicht die einfache Verwendung von `createPeriodicWave()`, um ein [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Objekt zu erstellen, das eine einfache Sinuswelle enthält.

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

Dies funktioniert, weil ein Ton, der nur einen Grundton enthält, definitionsgemäß eine Sinuswelle ist.

Hier erstellen wir eine `PeriodicWave` mit zwei Werten. Der erste Wert ist der DC-Offset, welcher der Wert ist, mit dem der Oszillator beginnt. Ein Wert von `0` ist hier gut, da er die Kurve in der Mitte des `[-1.0; 1.0]`-Bereichs startet. Die zweiten und nachfolgenden Werte sind Sinus- und Kosinuskomponenten, ähnlich dem Ergebnis einer Fourier-Transformation, die Zeitbereichswerte in Frequenzbereichswerte umwandelt. Hier, mit `createPeriodicWave()`, geben Sie die Frequenzen an, und der Browser führt eine inverse Fourier-Transformation durch, um einen Zeitbereichspuffer für die Frequenz des Oszillators zu erhalten. In diesem Beispiel setzen wir nur eine Komponente auf voller Lautstärke (`1.0`) beim Grundton, sodass wir eine Sinuswelle erhalten. Bedenken Sie, dass der Grundton der Frequenz des Oszillators entspricht (der standardmäßig `440 Hz` beträgt). Daher verschiebt sich die Frequenz dieser periodischen Welle effektiv mit, wenn Sie die Frequenz des Oszillators ändern.

Die Koeffizienten der Fourier-Transformation sollten in _aufsteigender_ Reihenfolge angegeben werden (d.h. <math><semantics><mrow><mrow><mo>(</mo><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mi>i</mi></msup><mo>,</mo><mrow><mo>(</mo><mrow><mi>c</mi><mo>+</mo><mi>d</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>i</mi></mrow></msup><mo>,</mo><mrow><mo>(</mo><mrow><mi>f</mi><mo>+</mo><mi>g</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mrow><mn>3</mn><mi>i</mi></mrow></msup></mrow><annotation encoding="TeX">\left(a+bi\right)e^{i} , \left(c+di\right)e^{2i} ,\left(f+gi\right)e^{3i} </annotation></semantics></math> usw.) und können positiv oder negativ sein. Eine einfache Methode, um solche Koeffizienten manuell zu erhalten (obwohl nicht die beste), ist die Verwendung eines grafikfähigen Taschenrechners.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
