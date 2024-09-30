---
title: MediaStreamTrackAudioSourceNode
slug: Web/API/MediaStreamTrackAudioSourceNode
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Audio API")}}

Die **`MediaStreamTrackAudioSourceNode`**-Schnittstelle ist eine Art von [`AudioNode`](/de/docs/Web/API/AudioNode), die eine Quelle für Audiodaten darstellt, die von einem bestimmten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen, der über die [WebRTC](/de/docs/Web/API/WebRTC_API) oder [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) APIs erhalten wurde.

Das Audio selbst kann von einem Mikrofon oder einem anderen Audioaufnahmegerät stammen oder über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen werden, unter anderen möglichen Optionen.

Ein `MediaStreamTrackAudioSourceNode` hat keine Eingänge und genau einen Ausgang und wird mit der Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) erstellt. Diese Schnittstelle ist ähnlich der [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode), außer dass Sie hier explizit den Track angeben können, der verwendet werden soll, anstatt den ersten Audiotrack in einem Stream anzunehmen.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td>
        definiert durch den ersten Audio-<code>MediaStreamTrack</code>
        der an die Methode
        [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource)
        übergeben wurde, die es erstellt hat.
      </td>
    </tr>
  </tbody>
</table>

## Constructor

- [`MediaStreamTrackAudioSourceNode()`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode/MediaStreamTrackAudioSourceNode)
  - : Erstellt eine neue Instanz des `MediaStreamTrackAudioSourceNode` Objekts mit den angegebenen Optionen.

## Instanz-Eigenschaften

_Die `MediaStreamTrackAudioSourceNode`-Schnittstelle hat keine eigenen Eigenschaften; sie erbt jedoch die Eigenschaften ihres Elternteils, [`AudioNode`](/de/docs/Web/API/AudioNode)._

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Sehen Sie sich [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource#examples) für Beispielcode an, der dieses Objekt verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API (Media Streams)](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
