---
title: "PannerNode: orientationX-Eigenschaft"
short-title: orientationX
slug: Web/API/PannerNode/orientationX
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`orientationX`**-Eigenschaft des [`PannerNode`](/de/docs/Web/API/PannerNode)-Interfaces gibt die X-Komponente (horizontal) der Richtung an, in die die Audioquelle in einem 3D-kartesischen Koordinatensystem zeigt.

Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als
([`positionX`](/de/docs/Web/API/PannerNode/positionX), [`positionY`](/de/docs/Web/API/PannerNode/positionY),
[`positionZ`](/de/docs/Web/API/PannerNode/positionZ)), und die Orientierung
der Audioquelle (d.h. die Richtung, in die sie zeigt), angegeben als
(`orientationX`,
[`orientationY`](/de/docs/Web/API/PannerNode/orientationY),
[`orientationZ`](/de/docs/Web/API/PannerNode/orientationZ)).

Abhängig von der Direktionalität des Klangs (wie durch die Attribute
[`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle),
[`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) und
[`coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain) angegeben), kann die Orientierung des
Klangs die wahrgenommene Lautstärke des Klangs beeinflussen, während er abgespielt wird. Wenn der Klang
in Richtung des Zuhörers zeigt, ist er lauter als wenn er vom Zuhörer weg zeigt.

Der von dieser Eigenschaft enthaltene [`AudioParam`](/de/docs/Web/API/AudioParam) ist schreibgeschützt; Sie können den Parameterwert jedoch trotzdem ändern, indem Sie der [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft einen neuen Wert zuweisen.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam), dessen `value` der X-Komponente der Richtung entspricht, in die die Audioquelle im 3D-kartesischen Koordinatensystem zeigt.

## Beispiel

In diesem Beispiel demonstrieren wir, wie das Ändern der Orientierungsparameter eines
[`PannerNode`](/de/docs/Web/API/PannerNode) in Kombination mit [`coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle) und
[`coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle) die Lautstärke beeinflusst. Um zu visualisieren, wie der Orientierungsvektor
wirkt, können wir die [Rechte-Hand-Regel](https://en.wikipedia.org/wiki/Right-hand_rule) verwenden:

![Dieses Diagramm zeigt, wie die Orientierungsvektoren des PannerNode die Richtung des Klangkegels beeinflussen.](pannernode-orientation.png)

Zuerst schreiben wir eine Hilfsfunktion, um unseren _Orientierungsvektor_ herauszufinden.
Die X- und Z-Komponenten stehen immer im 90°-Winkel zueinander, sodass wir die Sinus- und Kosinusfunktionen verwenden können, die um denselben Betrag in Radianten versetzt sind.
Normalerweise würde dies jedoch bedeuten, dass der [`PannerNode`](/de/docs/Web/API/PannerNode) bei einer Rotation von 0° nach **links** des Zuhörers zeigt – da `x = cos(0) = 1` und `z = sin(0) = 0`.
Es ist nützlicher, den Winkel um -90° zu versetzen, was bedeutet, dass der [`PannerNode`](/de/docs/Web/API/PannerNode) bei einer Rotation von 0° **direkt auf den Zuhörer** zeigt.

```js
// this utility converts amount of rotation around the Y axis
// (i.e. rotation in the 'horizontal plane') to an orientation vector
const yRotationToVector = (degrees) => {
  // convert degrees to radians and offset the angle so 0 points towards the listener
  const radians = (degrees - 90) * (Math.PI / 180);
  // using cosine and sine here ensures the output values are always normalized
  // i.e. they range between -1 and 1
  const x = Math.cos(radians);
  const z = Math.sin(radians);

  // we hard-code the Y component to 0, as Y is the axis of rotation
  return [x, 0, z];
};
```

Nun können wir unseren [`AudioContext`](/de/docs/Web/API/AudioContext), einen Oszillator und einen
[`PannerNode`](/de/docs/Web/API/PannerNode) erstellen:

```js
const context = new AudioContext();

const osc = new OscillatorNode(context);
osc.type = "sawtooth";

const panner = new PannerNode(context);
panner.panningModel = "HRTF";
```

Als nächstes richten wir den _Kegel_ unseres räumlich angepassten Klangs ein und bestimmen den Bereich, in dem er gehört werden kann:

```js
// this value determines the size of the area in which the sound volume is constant
// if coneInnerAngle === 30, it means that when the sound is rotated
// by at most 15 (30/2) degrees either direction, the volume won't change
panner.coneInnerAngle = 30;
// this value determines the size of the area in which the sound volume decreases gradually
// if coneOuterAngle === 45 and coneInnerAngle === 30, it means that when the sound is rotated
// by between 15 (30/2) and 22.5 (45/2) degrees either direction,
// the volume will decrease gradually
panner.coneOuterAngle = 45;
// this value determines the volume of the sound outside of both inner and outer cone
// setting it to 0 means there is no sound, so we can clearly hear when we leave the cone
// 0 is also the default
panner.coneOuterGain = 0;
// increase the Z position to ensure the cone has an effect
// (otherwise the sound is located at the same position as the listener)
panner.positionZ.setValueAtTime(1, context.currentTime);
```

Nachdem wir den [`PannerNode`](/de/docs/Web/API/PannerNode) eingerichtet haben, können wir nun einige Updates für seine
Rotation um die Y-Achse planen:

```js
// calculate the vector for no rotation
// this means the sound will play at full volume
const [x1, y1, z1] = yRotationToVector(0);
// schedule the no-rotation vector immediately
panner.orientationX.setValueAtTime(x1, context.currentTime);
panner.orientationY.setValueAtTime(y1, context.currentTime);
panner.orientationZ.setValueAtTime(z1, context.currentTime);

// calculate the vector for -22.4 degrees
// since our coneOuterAngle is 45, this will just about make the sound audible
// if we set it to +/-22.5, the sound volume will be 0, as the threshold is exclusive
const [x2, y2, z2] = yRotationToVector(-22.4);
panner.orientationX.setValueAtTime(x2, context.currentTime + 2);
panner.orientationY.setValueAtTime(y2, context.currentTime + 2);
panner.orientationZ.setValueAtTime(z2, context.currentTime + 2);
```

Zuletzt verbinden wir alle unsere Nodes und starten den Oszillator!

```js
osc.connect(panner).connect(context.destination);

osc.start(0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Grundlagen der Web Audio-Räumlichkeit](/de/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [`PannerNode`](/de/docs/Web/API/PannerNode)
