---
title: MediaStreamTrackAudioSourceNode
slug: Web/API/MediaStreamTrackAudioSourceNode
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Audio API")}}

Die Schnittstelle **`MediaStreamTrackAudioSourceNode`** ist eine Art von {{domxref("AudioNode")}}, die eine Quelle von Audiodaten darstellt, die von einem bestimmten {{domxref("MediaStreamTrack")}} stammen, das durch die [WebRTC](/de/docs/Web/API/WebRTC_API) oder [Media Capture and Streams](/de/docs/Web/API/Media_Capture_and_Streams_API) APIs gewonnen wurde.

Das Audio selbst könnte von einem Mikrofon oder einem anderen Audio-Aufnahmegerät stammen oder durch eine {{domxref("RTCPeerConnection")}} empfangen werden, neben weiteren möglichen Optionen.

Ein `MediaStreamTrackAudioSourceNode` hat keine Eingänge und genau einen Ausgang und wird durch die Methode {{domxref("AudioContext.createMediaStreamTrackSource()")}} erstellt. Diese Schnittstelle ähnelt {{domxref("MediaStreamAudioSourceNode")}}, erlaubt es Ihnen jedoch, ausdrücklich das zu verwendende Track anzugeben, anstatt das erste Audio-Track in einem Stream anzunehmen.

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
      <th scope="row">Anzahl der Kanäle</th>
      <td>
        definiert durch das erste Audio {{domxref("MediaStreamTrack")}}
        das an die
        {{domxref("AudioContext.createMediaStreamTrackSource()")}}
        Methode übergeben wurde, die es erstellt hat.
      </td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("MediaStreamTrackAudioSourceNode.MediaStreamTrackAudioSourceNode", "MediaStreamTrackAudioSourceNode()")}}
  - : Erstellt eine neue Instanz eines `MediaStreamTrackAudioSourceNode`-Objekts mit den angegebenen Optionen.

## Instanz-Eigenschaften

_Die `MediaStreamTrackAudioSourceNode`-Schnittstelle hat keine eigenen Eigenschaften; sie erbt jedoch die Eigenschaften ihres Elternteils, {{domxref("AudioNode")}}._

## Instanz-Methoden

_Erbt Methoden von seinem Eltern, {{domxref("AudioNode")}}_.

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
- {{domxref("MediaStreamAudioSourceNode")}}
