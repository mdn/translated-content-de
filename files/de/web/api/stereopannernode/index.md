---
title: StereoPannerNode
slug: Web/API/StereoPannerNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("Web Audio API")}}

Das `StereoPannerNode`-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert einen einfachen Stereo-Panner-Knoten, der verwendet werden kann, um einen Audio-Stream nach links oder rechts zu pannen. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das einen eingehenden Audio-Stream mithilfe eines kostengünstigen Equal-Power-[Panorama-Algorithmus](https://webaudio.github.io/web-audio-api/#panning-algorithm) in einem Stereo-Bild positioniert.

Die [`pan`](/de/docs/Web/API/StereoPannerNode/pan)-Eigenschaft nimmt einen einheitslosen Wert zwischen `-1` (volle Links-Panoramierung) und `1` (volle Rechts-Panoramierung) an. Dieses Interface wurde eingeführt, um eine viel einfachere Möglichkeit zu bieten, einen einfachen Panning-Effekt anzuwenden, als einen vollständigen [`PannerNode`](/de/docs/Web/API/PannerNode) zu verwenden.

![Der Stereo-Panner-Knoten verschiebt die Position des Tons von der Mitte zweier Lautsprecher nach links.](stereopannernode.png)

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
      <th scope="row">Channel-Count-Modus</th>
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

- [`StereoPannerNode()`](/de/docs/Web/API/StereoPannerNode/StereoPannerNode)
  - : Erstellt eine neue Instanz eines `StereoPannerNode`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`StereoPannerNode.pan`](/de/docs/Web/API/StereoPannerNode/pan) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), der die anzuwendende Panoramierung darstellt.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`BaseAudioContext.createStereoPanner()`](/de/docs/Web/API/BaseAudioContext/createStereoPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
