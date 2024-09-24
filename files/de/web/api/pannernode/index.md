---
title: PannerNode
slug: Web/API/PannerNode
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{ APIRef("Web Audio API") }}

Die `PannerNode`-Schnittstelle definiert ein Audiobearbeitungsobjekt, das die Position, Richtung und das Verhalten eines Audiosignals in einem simulierten physischen Raum darstellt. Dieser {{domxref("AudioNode")}} verwendet rechtshändige kartesische Koordinaten, um die _Position_ der Quelle als Vektor und ihre _Ausrichtung_ als 3D-Richtungskegel zu beschreiben.

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

- {{domxref("PannerNode.PannerNode", "PannerNode()")}}
  - : Erstellt eine neue Instanz eines `PannerNode`-Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften von seiner Elternklasse, {{domxref("AudioNode")}}_.

> [!NOTE]
> Die Werte für Ausrichtung und Position werden mit unterschiedlichen Syntaxen gesetzt und abgerufen, da sie als {{domxref("AudioParam")}}-Werte gespeichert sind. Das Abrufen erfolgt durch Zugriff zum Beispiel auf `PannerNode.positionX`. Die Einstellung derselben Eigenschaft erfolgt mit `PannerNode.positionX.value`. Aus diesem Grund sind diese Werte nicht als schreibgeschützt markiert, wie sie im WebIDL erscheinen.

- {{domxref("PannerNode.coneInnerAngle")}}
  - : Ein Doppelwert, der den Winkel in Grad beschreibt, innerhalb dessen keine Lautstärkereduzierung erfolgt.
- {{domxref("PannerNode.coneOuterAngle")}}
  - : Ein Doppelwert, der den Winkel in Grad beschreibt, außerhalb dessen die Lautstärke um einen konstanten Wert, definiert durch die Eigenschaft `coneOuterGain`, reduziert wird.
- {{domxref("PannerNode.coneOuterGain")}}
  - : Ein Doppelwert, der die Lautstärkereduzierung außerhalb des durch das Attribut `coneOuterAngle` definierten Kegels beschreibt. Sein Standardwert ist `0`, was bedeutet, dass kein Ton zu hören ist.
- {{domxref("PannerNode.distanceModel")}}
  - : Ein enumerierter Wert, der bestimmt, welcher Algorithmus zur Reduzierung der Lautstärke der Audioquelle verwendet wird, wenn sich diese vom Zuhörer entfernt. Mögliche Werte sind `"linear"`, `"inverse"` und `"exponential"`. Der Standardwert ist `"inverse"`.
- {{domxref("PannerNode.maxDistance")}}
  - : Ein Doppelwert, der die maximale Entfernung zwischen der Audioquelle und dem Zuhörer darstellt, nach der die Lautstärke nicht weiter reduziert wird.
- {{domxref("PannerNode.orientationX")}}
  - : Repräsentiert die horizontale Position des Vektors der Audioquelle in einem rechtshändigen kartesischen Koordinatensystem. Während dieses {{domxref("AudioParam")}} nicht direkt geändert werden kann, kann sein Wert über seine {{domxref("AudioParam.value", "value")}}-Eigenschaft verändert werden. Der Standardwert ist 1.
- {{domxref("PannerNode.orientationY")}}
  - : Repräsentiert die vertikale Position des Vektors der Audioquelle in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Während dieses {{domxref("AudioParam")}} nicht direkt geändert werden kann, kann sein Wert über seine {{domxref("AudioParam.value", "value")}}-Eigenschaft verändert werden. Der Standardwert ist 0.
- {{domxref("PannerNode.orientationZ")}}
  - : Repräsentiert die longitudinale (vor und zurück) Position des Vektors der Audioquelle in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Während dieses {{domxref("AudioParam")}} nicht direkt geändert werden kann, kann sein Wert über seine {{domxref("AudioParam.value", "value")}}-Eigenschaft verändert werden. Der Standardwert ist 0.
- {{domxref("PannerNode.panningModel")}}
  - : Ein enumerierter Wert, der bestimmt, welcher Spatialisation-Algorithmus verwendet werden soll, um das Audio im 3D-Raum zu positionieren.
- {{domxref("PannerNode.positionX")}}
  - : Repräsentiert die horizontale Position des Audios in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Während dieses {{domxref("AudioParam")}} nicht direkt geändert werden kann, kann sein Wert über seine {{domxref("AudioParam.value", "value")}}-Eigenschaft verändert werden. Der Standardwert ist 0.
- {{domxref("PannerNode.positionY")}}
  - : Repräsentiert die vertikale Position des Audios in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Während dieses {{domxref("AudioParam")}} nicht direkt geändert werden kann, kann sein Wert über seine {{domxref("AudioParam.value", "value")}}-Eigenschaft verändert werden. Der Standardwert ist 0.
- {{domxref("PannerNode.positionZ")}}
  - : Repräsentiert die longitudinale (vor und zurück) Position des Audios in einem rechtshändigen kartesischen Koordinatensystem. Der Standardwert ist 0. Während dieses {{domxref("AudioParam")}} nicht direkt geändert werden kann, kann sein Wert über seine {{domxref("AudioParam.value", "value")}}-Eigenschaft verändert werden. Der Standardwert ist 0.
- {{domxref("PannerNode.refDistance")}}
  - : Ein Doppelwert, der die Referenzentfernung zur Lautstärkereduzierung beschreibt, wenn sich die Audioquelle weiter vom Zuhörer entfernt. Für Entfernungen größer als diesen Wert wird die Lautstärke basierend auf `rolloffFactor` und `distanceModel` reduziert.
- {{domxref("PannerNode.rolloffFactor")}}
  - : Ein Doppelwert, der beschreibt, wie schnell die Lautstärke reduziert wird, wenn sich die Quelle vom Zuhörer entfernt. Dieser Wert wird von allen Distanzmodellen verwendet.

## Instanzmethoden

_Erbt Methoden von seiner Elternklasse, {{domxref("AudioNode")}}_.

- {{domxref("PannerNode.setPosition()")}} {{deprecated_inline}}
  - : Definiert die Position der Audioquelle relativ zum Zuhörer (dargestellt durch ein {{domxref("AudioListener")}}-Objekt, das im {{domxref("BaseAudioContext.listener")}}-Attribut gespeichert ist.)
- {{domxref("PannerNode.setOrientation()")}} {{deprecated_inline}}
  - : Definiert die Richtung, in die die Audioquelle abspielt.

## Beispiele

Siehe [`BaseAudioContext.createPanner()`](/de/docs/Web/API/BaseAudioContext/createPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
