---
title: MediaStreamAudioSourceNode
slug: Web/API/MediaStreamAudioSourceNode
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Audio API")}}

Das **`MediaStreamAudioSourceNode`** Interface ist eine Art von [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert, deren Medien von einem [`MediaStream`](/de/docs/Web/API/MediaStream) empfangen werden, der mit den WebRTC- oder Media Capture- und Streams-APIs gewonnen wurde.

Diese Medien könnten von einem Mikrofon (über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) oder von einem entfernten Teilnehmer in einem WebRTC-Gespräch (Verwendung der Audio-Tracks von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)) stammen.

Ein `MediaStreamAudioSourceNode` hat keine Eingänge und genau einen Ausgang und wird mit der [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource) Methode erstellt.

Das `MediaStreamAudioSourceNode` nimmt das Audio vom _ersten_ [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) Attributswert `audio` ist. Siehe [Track-Reihenfolge](#track-reihenfolge) für weitere Informationen über die Reihenfolge der Tracks.

Die Anzahl der Kanäle, die vom Knoten ausgegeben werden, stimmt mit der Anzahl der Tracks überein, die im ausgewählten Audio-Track gefunden werden.

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
        2 (beachten Sie jedoch, dass [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) nur für das Up- und Down-Mixing von [`AudioNode`](/de/docs/Web/API/AudioNode)-Eingängen verwendet wird, und <code>MediaStreamAudioSourceNode</code> hat keine Eingänge)
      </td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode)
  - : Erstellt eine neue `MediaStreamAudioSourceNode` Objektinstanz mit den angegebenen Optionen.

## Instanzeigenschaften

_Zusätzlich zu den folgenden Eigenschaften erbt `MediaStreamAudioSourceNode` die Eigenschaften seines Elternteils, [`AudioNode`](/de/docs/Web/API/AudioNode)._

- [`mediaStream`](/de/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) {{ReadOnlyInline}}
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream), der beim Erstellen dieses `MediaStreamAudioSourceNode` verwendet wurde.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Verwendungshinweise

### Track-Reihenfolge

Für die Zwecke des `MediaStreamTrackAudioSourceNode` Interface wird die Reihenfolge der Audiotracks im Stream dadurch bestimmt, dass die Tracks, deren [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist, genommen und die Tracks dann nach den Werten ihrer [`id`](/de/docs/Web/API/MediaStreamTrack/id) Eigenschaft in Unicode-Codepoint-Reihenfolge sortiert werden (im Wesentlichen in alphabetischer oder lexikographischer Reihenfolge für IDs, die einfache alphanumerische Zeichenketten sind).

Der **erste** Track ist dann der Track, dessen `id` zuerst kommt, wenn die IDs der Tracks alle in Unicode-Codepoint-Reihenfolge sortiert sind.

Es ist jedoch wichtig zu beachten, dass die Regel, die diese Reihenfolge festlegt, lange nach der ersten Einführung dieses Interfaces in die [Web Audio API](/de/docs/Web/API/Web_Audio_API) hinzugefügt wurde. Daher können Sie sich nicht einfach darauf verlassen, dass die Reihenfolge zwischen zwei Browsern oder Browserversionen übereinstimmt.

Das [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) Interface ist ähnlich wie `MediaStreamAudioSourceNode`, vermeidet jedoch dieses Problem, indem es Ihnen erlaubt zu spezifizieren, welcher Track verwendet werden soll.

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
- [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)
