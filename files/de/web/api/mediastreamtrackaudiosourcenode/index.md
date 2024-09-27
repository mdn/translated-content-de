---
title: MediaStreamTrackAudioSourceNode
slug: Web/API/MediaStreamTrackAudioSourceNode
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Audio API")}}

Das **`MediaStreamTrackAudioSourceNode`** Interface ist eine Art von [`AudioNode`](/de/docs/Web/API/AudioNode), die eine Quelle für Audiodaten darstellt, die aus einem spezifischen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) stammen, welcher über die [WebRTC](/de/docs/Web/API/WebRTC_API) oder [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) APIs erhalten wurde.

Das Audio kann von einem Mikrofon oder einem anderen Audiosampling-Gerät stammen oder über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen werden, neben anderen möglichen Optionen.

Ein `MediaStreamTrackAudioSourceNode` hat keine Eingänge und genau einen Ausgang und wird mittels der Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) erstellt. Dieses Interface ist ähnlich zum [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode), mit dem Unterschied, dass es Ihnen ermöglicht, explizit den zu verwendenden Track anzugeben, anstatt automatisch den ersten Audiotrack eines Streams anzunehmen.

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
        definiert durch den ersten Audio-`MediaStreamTrack`, der zur
        [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource)
        Methode übergeben wird, die ihn erstellt hat.
      </td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`MediaStreamTrackAudioSourceNode()`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode/MediaStreamTrackAudioSourceNode)
  - : Erstellt eine neue `MediaStreamTrackAudioSourceNode` Objektinstanz mit den angegebenen Optionen.

## Instanz-Eigenschaften

_Das `MediaStreamTrackAudioSourceNode` Interface hat keine eigenen Eigenschaften; es erbt jedoch die Eigenschaften seines Elternteils, [`AudioNode`](/de/docs/Web/API/AudioNode)._

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource#examples) für Beispielcode, der dieses Objekt verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API (Media Streams)](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaStreamAudioSourceNode`](/de/docs/Web/API/MediaStreamAudioSourceNode)
