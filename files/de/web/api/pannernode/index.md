---
title: PannerNode
slug: Web/API/PannerNode
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{ APIRef("Web Audio API") }}

Das `PannerNode`-Interface definiert ein Audiobearbeitungsobjekt, das den Standort, die Ausrichtung und das Verhalten eines Audiosignalquelle in einem simulierten physikalischen Raum darstellt. Dieser [`AudioNode`](/de/docs/Web/API/AudioNode) verwendet rechtshändige kartesische Koordinaten, um die _Position_ der Quelle als Vektor und ihre _Ausrichtung_ als 3D-Richtungskegel zu beschreiben.

Ein `PannerNode` verfügt immer genau über einen Eingang und einen Ausgang: Der Eingang kann _mono_ oder _stereo_ sein, aber der Ausgang ist immer _stereo_ (2 Kanäle); Pan-Effekte sind nicht möglich ohne mindestens zwei Audiokanäle!

![Der PannerNode definiert eine räumliche Position und Richtung für ein gegebenes Signal.](webaudiopannernode.png)

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl-Modus</th>
      <td><code>"clamped-max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`PannerNode()`](/de/docs/Web/API/PannerNode/PannerNode)
  - : Erzeugt eine neue `PannerNode`-Objektinstanz.

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

> [!NOTE]
> Die Werte für Ausrichtung und Position werden mit unterschiedlichen Syntaxen gesetzt und abgerufen, da sie als [`AudioParam`](/de/docs/Web/API/AudioParam)-Werte gespeichert werden. Der Abruf erfolgt durch den Zugriff auf zum Beispiel `PannerNode.positionX`. Das Setzen derselben Eigenschaft erfolgt mit `PannerNode.positionX.value`. Daher sind diese Werte nicht als schreibgeschützt markiert, was ihrer Erscheinung in der WebIDL entspricht.

- [`PannerNode.coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle)
  - : Ein Doppelwert, der den Winkel in Grad eines Kegels beschreibt, innerhalb dessen keine Lautstärkereduzierung erfolgt.
- [`PannerNode.coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle)
  - : Ein Doppelwert, der den Winkel in Grad eines Kegels beschreibt, außerhalb dessen die Lautstärke um einen konstanten Wert verringert wird, der durch die Eigenschaft `coneOuterGain` definiert ist.
- [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain)
  - : Ein Doppelwert, der die Menge der Lautstärkereduzierung außerhalb des durch das Attribut `coneOuterAngle` definierten Kegels beschreibt. Der Standardwert ist `0`, was bedeutet, dass kein Ton gehört werden kann.
- [`PannerNode.distanceModel`](/de/docs/Web/API/PannerNode/distanceModel)
  - : Ein enumerierter Wert, der bestimmt, welcher Algorithmus verwendet wird, um die Lautstärke der Audioquelle zu verringern, wenn sie sich vom Zuhörer entfernt. Mögliche Werte sind `"linear"`, `"inverse"` und `"exponential"`. Der Standardwert ist `"inverse"`.
- [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)
  - : Ein Doppelwert, der die maximale Entfernung zwischen der Audioquelle und dem Zuhörer darstellt, nach der die Lautstärke nicht weiter verringert wird.
- [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX)
  - : Repräsentiert die horizontale Position des Vektors der Audioquelle in einem rechtshändigen kartesischen Koordinatensystem. Während dieses [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, kann sein Wert mit seiner [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft verändert werden. Der Standardwert ist 1.
- [`PannerNode.orientationY`](/de/docs/Web/API/PannerNode/orientationY)
  - : Repräsentiert die vertikale Position des Vektors der Audioquelle in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Während dieses [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, kann sein Wert mit seiner [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft verändert werden. Der Standardwert ist 0.
- [`PannerNode.orientationZ`](/de/docs/Web/API/PannerNode/orientationZ)
  - : Repräsentiert die längsgerichtete (vor und zurück) Position des Vektors der Audioquelle in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Während dieses [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, kann sein Wert mit seiner [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft verändert werden. Der Standardwert ist 0.
- [`PannerNode.panningModel`](/de/docs/Web/API/PannerNode/panningModel)
  - : Ein enumerierter Wert, der bestimmt, welcher Raumklang-Algorithmus verwendet wird, um die Audioquelle im 3D-Raum zu positionieren.
- [`PannerNode.positionX`](/de/docs/Web/API/PannerNode/positionX)
  - : Repräsentiert die horizontale Position der Audioquelle in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Während dieses [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, kann sein Wert mit seiner [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft verändert werden. Der Standardwert ist 0.
- [`PannerNode.positionY`](/de/docs/Web/API/PannerNode/positionY)
  - : Repräsentiert die vertikale Position der Audioquelle in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Während dieses [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, kann sein Wert mit seiner [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft verändert werden. Der Standardwert ist 0.
- [`PannerNode.positionZ`](/de/docs/Web/API/PannerNode/positionZ)
  - : Repräsentiert die längsgerichtete (vor und zurück) Position der Audioquelle in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Während dieses [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, kann sein Wert mit seiner [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft verändert werden. Der Standardwert ist 0.
- [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance)
  - : Ein Doppelwert, der die Referenzdistanz zur Reduzierung der Lautstärke darstellt, wenn sich die Audioquelle weiter vom Zuhörer entfernt. Für Distanzen, die größer als diese sind, wird die Lautstärke basierend auf `rolloffFactor` und `distanceModel` verringert.
- [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)
  - : Ein Doppelwert, der beschreibt, wie schnell die Lautstärke verringert wird, wenn sich die Quelle vom Zuhörer entfernt. Dieser Wert wird von allen Distanzmodellen verwendet.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`PannerNode.setPosition()`](/de/docs/Web/API/PannerNode/setPosition) {{deprecated_inline}}
  - : Definiert die Position der Audioquelle relativ zum Zuhörer (repräsentiert durch ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt, das im Attribut [`BaseAudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener) gespeichert ist).
- [`PannerNode.setOrientation()`](/de/docs/Web/API/PannerNode/setOrientation) {{deprecated_inline}}
  - : Definiert die Richtung, in die die Audioquelle spielt.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
