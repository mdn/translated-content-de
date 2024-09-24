---
title: StereoPannerNode
slug: Web/API/StereoPannerNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("Web Audio API")}}

Das `StereoPannerNode`-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert einen einfachen Stereo-Panner-Knoten, der verwendet werden kann, um einen Audiostream nach links oder rechts zu schwenken. Es ist ein {{domxref("AudioNode")}} Audioverarbeitungsmodul, das einen eingehenden Audiostream mit einem kostengünstigen gleichmäßigen [Panning-Algorithmus](https://webaudio.github.io/web-audio-api/#panning-algorithm) in einem Stereobild positioniert.

Die {{domxref("StereoPannerNode.pan", "pan")}} Eigenschaft nimmt einen einheitenlosen Wert zwischen `-1` (vollständige Links-Panorama) und `1` (vollständige Rechts-Panorama) an. Dieses Interface wurde eingeführt, um einen einfachen Panning-Effekt wesentlich einfacher anzuwenden, als einen vollständigen {{domxref("PannerNode")}} verwenden zu müssen.

![Der Stereo Panner Node hat die Position des Klangs von der Mitte der beiden Lautsprecher nach links verschoben.](stereopannernode.png)

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
      <th scope="row">Kanalzählungsmodus</th>
      <td><code>"clamped-max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("StereoPannerNode.StereoPannerNode", "StereoPannerNode()")}}
  - : Erstellt eine neue Instanz eines `StereoPannerNode`-Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("AudioNode")}}_.

- {{domxref("StereoPannerNode.pan")}} {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, der den anzuwendenden Panning-Betrag darstellt.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

## Beispiel

Siehe [`BaseAudioContext.createStereoPanner()`](/de/docs/Web/API/BaseAudioContext/createStereoPanner#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
