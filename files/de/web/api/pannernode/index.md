---
title: PannerNode
slug: Web/API/PannerNode
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{ APIRef("Web Audio API") }}

Das `PannerNode`-Interface definiert ein Audioverarbeitungsobjekt, das den Standort, die Richtung und das Verhalten eines Audiosignalquellens in einem simulierten physischen Raum darstellt. Dieser [`AudioNode`](/de/docs/Web/API/AudioNode) verwendet rechtshändige kartesische Koordinaten, um die _Position_ der Quelle als Vektor und ihre _Ausrichtung_ als 3D-Richtungskegel zu beschreiben.

Ein `PannerNode` hat immer genau einen Eingang und einen Ausgang: Der Eingang kann _mono_ oder _stereo_ sein, aber der Ausgang ist immer _stereo_ (2 Kanäle); Panning-Effekte sind ohne mindestens zwei Audiokanäle nicht möglich!

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
      <th scope="row">Kanalmode</th>
      <td><code>"clamped-max"</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Kanäle</th>
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
  - : Erstellt eine neue `PannerNode`-Objektinstanz.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

> [!NOTE]
> Die Orientierungs- und Positionswerte werden mit unterschiedlichen Syntaxen gesetzt und abgerufen, da sie als [`AudioParam`](/de/docs/Web/API/AudioParam)-Werte gespeichert werden. Das Abrufen erfolgt durch Zugriff, beispielsweise auf `PannerNode.positionX`. Das Setzen derselben Eigenschaft erfolgt mit `PannerNode.positionX.value`. Aus diesem Grund sind diese Werte nicht als schreibgeschützt markiert, obwohl sie im WebIDL so erscheinen.

- [`PannerNode.coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle)
  - : Ein Doppelwert, der den Winkel in Grad eines Kegels beschreibt, innerhalb dessen es keine Lautstärkereduzierung gibt.
- [`PannerNode.coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle)
  - : Ein Doppelwert, der den Winkel in Grad eines Kegels beschreibt, außerhalb dessen die Lautstärke um einen konstanten Wert reduziert wird, der durch die Eigenschaft `coneOuterGain` definiert ist.
- [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain)
  - : Ein Doppelwert, der die Menge der Lautstärkereduzierung außerhalb des durch das Attribut `coneOuterAngle` definierten Kegels beschreibt. Der Standardwert ist `0`, was bedeutet, dass kein Ton hörbar ist.
- [`PannerNode.distanceModel`](/de/docs/Web/API/PannerNode/distanceModel)
  - : Ein enumerierter Wert, der angibt, welcher Algorithmus verwendet werden soll, um die Lautstärke der Tonquelle zu reduzieren, wenn sie sich vom Zuhörer entfernt. Mögliche Werte sind `"linear"`, `"inverse"` und `"exponential"`. Der Standardwert ist `"inverse"`.
- [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)
  - : Ein Doppelwert, der die maximale Entfernung zwischen der Tonquelle und dem Zuhörer darstellt, nach der die Lautstärke nicht weiter reduziert wird.
- [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX)
  - : Repräsentiert die horizontale Position der Vektor der Tonquelle in einem rechtshändigen kartesischen Koordinatensystem. Obwohl dieses [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, kann sein Wert über seine [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft verändert werden. Der Standardwert ist 1.
- [`PannerNode.orientationY`](/de/docs/Web/API/PannerNode/orientationY)
  - : Repräsentiert die vertikale Position der Vektor der Tonquelle in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Obwohl dieses [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, kann sein Wert über seine [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft verändert werden. Der Standardwert ist 0.
- [`PannerNode.orientationZ`](/de/docs/Web/API/PannerNode/orientationZ)
  - : Repräsentiert die longitudinale (vorwärts und rückwärts) Position der Vektor der Tonquelle in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Obwohl dieses [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, kann sein Wert über seine [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft verändert werden. Der Standardwert ist 0.
- [`PannerNode.panningModel`](/de/docs/Web/API/PannerNode/panningModel)
  - : Ein enumerierter Wert, der angibt, welcher Spatialisation-Algorithmus verwendet werden soll, um den Ton in einem 3D-Raum zu positionieren.
- [`PannerNode.positionX`](/de/docs/Web/API/PannerNode/positionX)
  - : Repräsentiert die horizontale Position des Tons in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Obwohl dieses [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, kann sein Wert über seine [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft verändert werden. Der Standardwert ist 0.
- [`PannerNode.positionY`](/de/docs/Web/API/PannerNode/positionY)
  - : Repräsentiert die vertikale Position des Tons in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Obwohl dieses [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, kann sein Wert über seine [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft verändert werden. Der Standardwert ist 0.
- [`PannerNode.positionZ`](/de/docs/Web/API/PannerNode/positionZ)
  - : Repräsentiert die longitudinale (vorwärts und rückwärts) Position des Tons in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Obwohl dieses [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, kann sein Wert über seine [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft verändert werden. Der Standardwert ist 0.
- [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance)
  - : Ein Doppelwert, der die Referenzdistanz für die Lautstärkereduzierung beschreibt, wenn sich die Tonquelle weiter vom Zuhörer entfernt. Für Distanzen, die größer sind als dieser Wert, wird die Lautstärke basierend auf `rolloffFactor` und `distanceModel` reduziert.
- [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)
  - : Ein Doppelwert, der beschreibt, wie schnell die Lautstärke reduziert wird, wenn sich die Quelle vom Zuhörer entfernt. Dieser Wert wird von allen Distanzmodellen verwendet.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`PannerNode.setPosition()`](/de/docs/Web/API/PannerNode/setPosition) {{deprecated_inline}}
  - : Definiert die Position der Tonquelle relativ zum Zuhörer (repräsentiert durch ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt, das im Attribut [`BaseAudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener) gespeichert ist).
- [`PannerNode.setOrientation()`](/de/docs/Web/API/PannerNode/setOrientation) {{deprecated_inline}}
  - : Definiert die Richtung, in die die Tonquelle spielt.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
