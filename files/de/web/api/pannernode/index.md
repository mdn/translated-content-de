---
title: PannerNode
slug: Web/API/PannerNode
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{ APIRef("Web Audio API") }}

Das Interface `PannerNode` definiert ein Objekt zur Audioverarbeitung, das Position, Richtung und Verhalten eines Audioquellensignals in einem simulierten physischen Raum repräsentiert. Dieser [`AudioNode`](/de/docs/Web/API/AudioNode) verwendet ein rechtshändiges kartesisches Koordinatensystem, um die _Position_ der Quelle als Vektor und ihre _Ausrichtung_ als dreidimensionalen Richtungskegel zu beschreiben.

Ein `PannerNode` hat immer genau einen Eingang und einen Ausgang: Der Eingang kann _mono_ oder _stereo_ sein, der Ausgang ist jedoch immer _stereo_ (2 Kanäle). Für Panning-Effekte sind mindestens zwei Audiokanäle erforderlich!

![Der PannerNode definiert eine räumliche Position und Richtung für ein bestimmtes Signal.](webaudiopannernode.png)

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
      <th scope="row">Kanalanzahlmodus</th>
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
  - : Erstellt eine neue Instanz eines `PannerNode`-Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface [`AudioNode`](/de/docs/Web/API/AudioNode)._

> [!NOTE]
> Die Werte für Ausrichtung und Position werden mit unterschiedlicher Syntax gesetzt und abgerufen, da sie als [`AudioParam`](/de/docs/Web/API/AudioParam)-Werte gespeichert sind. Zum Abrufen greifen Sie beispielsweise auf `PannerNode.positionX` zu. Zum Setzen derselben Eigenschaft verwenden Sie dagegen `PannerNode.positionX.value`.

- [`PannerNode.coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle)
  - : Ein Double-Wert, der den Winkel eines Kegels in Grad beschreibt, innerhalb dessen die Lautstärke nicht reduziert wird.
- [`PannerNode.coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle)
  - : Ein Double-Wert, der den Winkel eines Kegels in Grad beschreibt, außerhalb dessen die Lautstärke um einen konstanten Wert reduziert wird, der durch die Eigenschaft `coneOuterGain` festgelegt ist.
- [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain)
  - : Ein Double-Wert, der angibt, wie stark die Lautstärke außerhalb des durch das Attribut `coneOuterAngle` definierten Kegels reduziert wird. Der Standardwert ist `0`, was bedeutet, dass kein Ton zu hören ist.
- [`PannerNode.distanceModel`](/de/docs/Web/API/PannerNode/distanceModel)
  - : Ein Aufzählungswert, der bestimmt, welcher Algorithmus verwendet wird, um die Lautstärke der Audioquelle zu reduzieren, wenn sie sich von der hörenden Person entfernt. Mögliche Werte sind `"linear"`, `"inverse"` und `"exponential"`. Der Standardwert ist `"inverse"`.
- [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance)
  - : Ein Double-Wert, der den maximalen Abstand zwischen der Audioquelle und der hörenden Person angibt, ab dem die Lautstärke nicht weiter reduziert wird.
- [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX) {{ReadOnlyInline}}
  - : Repräsentiert die horizontale Position des Vektors der Audioquelle in einem rechtshändigen kartesischen Koordinatensystem. Obwohl dieser [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, lässt sich sein Wert über seine Eigenschaft [`value`](/de/docs/Web/API/AudioParam/value) ändern. Der Standardwert ist 1.
- [`PannerNode.orientationY`](/de/docs/Web/API/PannerNode/orientationY) {{ReadOnlyInline}}
  - : Repräsentiert die vertikale Position des Vektors der Audioquelle in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Obwohl dieser [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, lässt sich sein Wert über seine Eigenschaft [`value`](/de/docs/Web/API/AudioParam/value) ändern. Der Standardwert ist 0.
- [`PannerNode.orientationZ`](/de/docs/Web/API/PannerNode/orientationZ) {{ReadOnlyInline}}
  - : Repräsentiert die Position des Vektors der Audioquelle entlang der Längsachse (vor und zurück) in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Obwohl dieser [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, lässt sich sein Wert über seine Eigenschaft [`value`](/de/docs/Web/API/AudioParam/value) ändern. Der Standardwert ist 0.
- [`PannerNode.panningModel`](/de/docs/Web/API/PannerNode/panningModel)
  - : Ein Aufzählungswert, der bestimmt, welcher Algorithmus zur räumlichen Positionierung des Audiosignals im dreidimensionalen Raum verwendet wird.
- [`PannerNode.positionX`](/de/docs/Web/API/PannerNode/positionX) {{ReadOnlyInline}}
  - : Repräsentiert die horizontale Position des Audiosignals in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Obwohl dieser [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, lässt sich sein Wert über seine Eigenschaft [`value`](/de/docs/Web/API/AudioParam/value) ändern. Der Standardwert ist 0.
- [`PannerNode.positionY`](/de/docs/Web/API/PannerNode/positionY) {{ReadOnlyInline}}
  - : Repräsentiert die vertikale Position des Audiosignals in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Obwohl dieser [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, lässt sich sein Wert über seine Eigenschaft [`value`](/de/docs/Web/API/AudioParam/value) ändern. Der Standardwert ist 0.
- [`PannerNode.positionZ`](/de/docs/Web/API/PannerNode/positionZ) {{ReadOnlyInline}}
  - : Repräsentiert die Position des Audiosignals entlang der Längsachse (vor und zurück) in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Obwohl dieser [`AudioParam`](/de/docs/Web/API/AudioParam) nicht direkt geändert werden kann, lässt sich sein Wert über seine Eigenschaft [`value`](/de/docs/Web/API/AudioParam/value) ändern. Der Standardwert ist 0.
- [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance)
  - : Ein Double-Wert, der den Referenzabstand für die Lautstärkereduzierung angibt, wenn sich die Audioquelle von der hörenden Person entfernt. Bei größeren Abständen wird die Lautstärke anhand von `rolloffFactor` und `distanceModel` reduziert.
- [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor)
  - : Ein Double-Wert, der beschreibt, wie schnell die Lautstärke abnimmt, wenn sich die Quelle von der hörenden Person entfernt. Dieser Wert wird von allen Abstandsmodellen verwendet.

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten Interface [`AudioNode`](/de/docs/Web/API/AudioNode)._

- [`PannerNode.setPosition()`](/de/docs/Web/API/PannerNode/setPosition) {{deprecated_inline}}
  - : Definiert die Position der Audioquelle relativ zur hörenden Person (repräsentiert durch ein [`AudioListener`](/de/docs/Web/API/AudioListener)-Objekt, das im Attribut [`BaseAudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener) gespeichert ist).
- [`PannerNode.setOrientation()`](/de/docs/Web/API/PannerNode/setOrientation) {{deprecated_inline}}
  - : Definiert die Richtung, in die die Audioquelle ihren Ton abstrahlt.

## Beispiele

Beispielcode finden Sie unter [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
