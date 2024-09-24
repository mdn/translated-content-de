---
title: "PannerNode: orientationX-Eigenschaft"
short-title: orientationX
slug: Web/API/PannerNode/orientationX
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Audio API") }}

Die **`orientationX`**-Eigenschaft der {{domxref("PannerNode")}}-Schnittstelle gibt die X- (horizontale) Komponente der Richtung an, in die sich die Audioquelle in einem 3D-kartesischen Koordinatenraum ausrichtet.

Der vollständige Vektor wird durch die Position der Audioquelle definiert, angegeben als ({{domxref("PannerNode.positionX", "positionX")}}, {{domxref("PannerNode.positionY", "positionY")}}, {{domxref("PannerNode.positionZ", "positionZ")}}), und die Orientierung der Audioquelle (also die Richtung, in die sie zeigt), angegeben als (`orientationX`, {{domxref("PannerNode.orientationY", "orientationY")}}, {{domxref("PannerNode.orientationZ", "orientationZ")}}).

Je nach Richtung des Klangs (wie mit den Attributen {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}}, {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} und {{domxref("PannerNode.coneOuterGain", "coneOuterGain")}} angegeben), kann die Orientierung des Klangs das wahrgenommene Volumen des Klangs beim Abspiel beeinflussen. Wenn der Klang auf den Zuhörer gerichtet ist, wird er lauter sein als wenn er vom Zuhörer weggedreht ist.

Das in dieser Eigenschaft enthaltene {{domxref("AudioParam")}} ist schreibgeschützt; Sie können den Wert des Parameters jedoch ändern, indem Sie der {{domxref("AudioParam.value")}}-Eigenschaft einen neuen Wert zuweisen.

## Wert

Ein {{domxref("AudioParam")}}, dessen `value` die X-Komponente der Richtung ist, in die sich die Audioquelle in einem 3D-kartesischen Koordinatenraum ausrichtet.

## Beispiel

In diesem Beispiel demonstrieren wir, wie das Ändern der Orientierungsparameter eines {{domxref("PannerNode")}} in Kombination mit {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} und {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} das Volumen beeinflusst. Um uns zu veranschaulichen, wie der Orientierungsvektor wirkt, können wir die [Rechte-Hand-Regel](https://en.wikipedia.org/wiki/Right-hand_rule) verwenden:

![Dieses Diagramm visualisiert, wie die Orientierungsvektoren des PannerNode die Richtung des Klangkegels beeinflussen.](pannernode-orientation.png)

Zunächst beginnen wir mit dem Schreiben einer Hilfsfunktion, um unseren _Orientierungsvektor_ zu ermitteln. Die X- und Z-Komponenten stehen immer in einem 90°-Winkel zueinander, sodass wir die Sinus- und Kosinusfunktionen verwenden können, die um denselben Betrag in Bogenmaß versetzt sind. Normalerweise würde das jedoch bedeuten, dass der {{ domxref("PannerNode") }} bei einer Drehung von 0° nach **links** des Zuhörers zeigt – da `x = cos(0) = 1` und `z = sin(0) = 0`. Es ist nützlicher, den Winkel um -90° zu versetzen, was bedeutet, dass der {{domxref("PannerNode")}} bei einer Drehung von 0° **direkt auf den Zuhörer** zeigt.

```js
// Diese Utility-Funktion konvertiert die Rotationsmenge um die Y-Achse
// (d.h. die Rotation in der 'horizontalen Ebene') in einen Orientierungsvektor
const yRotationToVector = (degrees) => {
  // Konvertiert Grad in Bogenmaß und verschiebt den Winkel so, dass 0 auf den Zuhörer zeigt
  const radians = (degrees - 90) * (Math.PI / 180);
  // Die Verwendung von Kosinus und Sinus hier stellt sicher, dass die Ausgabewerte immer normalisiert sind, 
  // d.h. sie liegen im Bereich zwischen -1 und 1
  const x = Math.cos(radians);
  const z = Math.sin(radians);

  // Wir setzen die Y-Komponente hart auf 0, da Y die Rotationsachse ist
  return [x, 0, z];
};
```

Nun können wir unser {{ domxref("AudioContext") }}, einen Oszillator und einen {{domxref("PannerNode")}} erstellen:

```js
const context = new AudioContext();

const osc = new OscillatorNode(context);
osc.type = "sawtooth";

const panner = new PannerNode(context);
panner.panningModel = "HRTF";
```

Als nächstes richten wir den _Kegel_ unseres räumlichen Klangs ein, indem wir den Bereich bestimmen, in dem er zu hören ist:

```js
// Dieser Wert bestimmt die Größe des Bereichs, in dem das Klangvolumen konstant ist
// Wenn coneInnerAngle === 30 ist, bedeutet das, dass, wenn der Klang um maximal 15 (30/2) Grad 
// in beide Richtungen gedreht wird, sich das Volumen nicht ändert
panner.coneInnerAngle = 30;
// Dieser Wert bestimmt die Größe des Bereichs, in dem das Klangvolumen allmählich abnimmt
// Wenn coneOuterAngle === 45 und coneInnerAngle === 30 ist, bedeutet das, dass, wenn der Klang 
// um 15 (30/2) bis 22,5 (45/2) Grad in beide Richtungen gedreht wird,
// das Volumen allmählich abnimmt
panner.coneOuterAngle = 45;
// Dieser Wert bestimmt das Volumen des Klangs außerhalb von Innen- und Außenkegel
// Ein Wert von 0 bedeutet, dass kein Klang vorhanden ist, wodurch wir klar hören können, 
// wenn wir den Kegel verlassen. 0 ist auch der Standardwert.
panner.coneOuterGain = 0;
// Erhöhen Sie die Z-Position, um sicherzustellen, dass der Kegel einen Effekt hat
// (ansonsten befindet sich der Klang an derselben Position wie der Zuhörer)
panner.positionZ.setValueAtTime(1, context.currentTime);
```

Nachdem der {{ domxref("PannerNode") }} eingerichtet ist, können wir nun einige Updates für seine Y-Achsen-Rotation planen:

```js
// Berechnen des Vektors für keine Drehung
// Dies bedeutet, dass der Klang in voller Lautstärke abgespielt wird
const [x1, y1, z1] = yRotationToVector(0);
// Planen Sie den keine-Drehung-Vektor sofort
panner.orientationX.setValueAtTime(x1, context.currentTime);
panner.orientationY.setValueAtTime(y1, context.currentTime);
panner.orientationZ.setValueAtTime(z1, context.currentTime);

// Berechnen des Vektors für -22,4 Grad
// Da unser coneOuterAngle 45 ist, wird der Klang gerade hörbar sein
// Wenn wir ihn auf +/-22,5 setzen, ist das Klangvolumen 0, da die Schwelle exklusiv ist
const [x2, y2, z2] = yRotationToVector(-22.4);
panner.orientationX.setValueAtTime(x2, context.currentTime + 2);
panner.orientationY.setValueAtTime(y2, context.currentTime + 2);
panner.orientationZ.setValueAtTime(z2, context.currentTime + 2);
```

Schließlich verbinden wir alle unsere Knoten und starten den Oszillator!

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
- {{domxref("PannerNode")}}
