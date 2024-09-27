---
title: MediaStreamAudioSourceNode
slug: Web/API/MediaStreamAudioSourceNode
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Audio API")}}

Die **`MediaStreamAudioSourceNode`**-Schnittstelle ist ein Typ von [`AudioNode`](/de/docs/Web/API/AudioNode), der als Audioquelle fungiert, deren Medien von einem [`MediaStream`](/de/docs/Web/API/MediaStream) empfangen werden, der mit den WebRTC- oder Media-Capture-and-Streams-APIs gewonnen wurde.

Diese Medien können von einem Mikrofon stammen (durch [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) oder von einem entfernten Teilnehmer in einem WebRTC-Anruf (unter Verwendung der Audiotracks der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)).

Ein `MediaStreamAudioSourceNode` hat keine Eingänge und genau einen Ausgang und wird mit der Methode [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource) erstellt.

Der `MediaStreamAudioSourceNode` erhält das Audio von dem _ersten_ [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Attributswert `audio` ist. Siehe [Track-Reihenfolge](#track-reihenfolge) für weitere Informationen über die Reihenfolge der Tracks.

Die Anzahl der vom Knoten ausgegebenen Kanäle entspricht der Anzahl der im ausgewählten Audiotrack gefundenen Tracks.

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
        2 (aber beachten Sie, dass [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) nur für das Up-Mixing und Down-Mixing von [`AudioNode`](/de/docs/Web/API/AudioNode)-Eingängen verwendet wird und <code>MediaStreamAudioSourceNode</code> keine Eingänge hat)
      </td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode)
  - : Erstellt eine neue `MediaStreamAudioSourceNode`-Objektinstanz mit den angegebenen Optionen.

## Instanz-Eigenschaften

_Neben den folgenden Eigenschaften erbt `MediaStreamAudioSourceNode` die Eigenschaften seines Elternteils, [`AudioNode`](/de/docs/Web/API/AudioNode)._

- [`mediaStream`](/de/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) {{ReadOnlyInline}}
  - : Der [`MediaStream`](/de/docs/Web/API/MediaStream), der beim Erstellen dieses `MediaStreamAudioSourceNode` verwendet wurde.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Nutzungsnotizen

### Track-Reihenfolge

Für die Zwecke der `MediaStreamTrackAudioSourceNode`-Schnittstelle wird die Reihenfolge der Audiotracks im Stream dadurch bestimmt, dass die Tracks mit [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` genommen und dann nach den Werten ihrer [`id`](/de/docs/Web/API/MediaStreamTrack/id)-Eigenschaft in Unicode-Codepunkt-Reihenfolge sortiert werden (im Wesentlichen in alphabetischer oder lexikographischer Reihenfolge für IDs, die einfache alphanumerische Zeichenfolgen sind).

Der **erste** Track ist dann der, dessen `id` zuerst kommt, wenn die IDs der Tracks alle nach Unicode-Codepunkten sortiert sind.

Es ist jedoch wichtig zu beachten, dass die Regel zur Festlegung dieser Reihenfolge lange nach der Einführung dieser Schnittstelle in die [Web Audio API](/de/docs/Web/API/Web_Audio_API) hinzugefügt wurde. Daher kann man sich nicht leicht darauf verlassen, dass die Reihenfolge zwischen verschiedenen Browsern oder Browserversionen übereinstimmt.

Die [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)-Schnittstelle ist ähnlich wie `MediaStreamAudioSourceNode`, vermeidet jedoch dieses Problem, indem Sie angeben können, welchen Track Sie verwenden möchten.

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
