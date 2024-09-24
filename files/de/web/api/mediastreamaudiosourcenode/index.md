---
title: MediaStreamAudioSourceNode
slug: Web/API/MediaStreamAudioSourceNode
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Audio API")}}

Das **`MediaStreamAudioSourceNode`**-Interface ist ein Typ von {{domxref("AudioNode")}}, das als Audioquelle fungiert, dessen Medien von einem {{domxref("MediaStream")}} stammen, der mithilfe der WebRTC- oder Media Capture and Streams-APIs erhalten wurde.

Diese Medien könnten von einem Mikrofon stammen (über {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}) oder von einem entfernten Teilnehmer in einem WebRTC-Anruf (unter Verwendung der Audiotracks der {{domxref("RTCPeerConnection")}}).

Ein `MediaStreamAudioSourceNode` hat keine Eingänge und genau einen Ausgang und wird mit der Methode {{domxref("AudioContext.createMediaStreamSource()")}} erstellt.

Das `MediaStreamAudioSourceNode` übernimmt das Audio vom _ersten_ {{domxref("MediaStreamTrack")}}, dessen Attributwert {{domxref("MediaStreamTrack.kind", "kind")}} auf `audio` gesetzt ist. Weitere Informationen über die Reihenfolge der Tracks finden Sie unter [Track-Reihenfolge](#track-reihenfolge).

Die Anzahl der vom Knoten ausgegebenen Kanäle entspricht der Anzahl der in dem ausgewählten Audiotrack gefundenen Tracks.

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
        2 (aber beachten Sie, dass {{domxref("AudioNode.channelCount")}} nur für das Up-Mixing und Down-Mixing von {{domxref("AudioNode")}}-Eingängen verwendet wird und <code>MediaStreamAudioSourceNode</code> keinen Eingang hat)
      </td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode", "MediaStreamAudioSourceNode()")}}
  - : Erstellt eine neue Instanz eines `MediaStreamAudioSourceNode`-Objekts mit den angegebenen Optionen.

## Instanz-Eigenschaften

_Zusätzlich zu den folgenden Eigenschaften erbt `MediaStreamAudioSourceNode` die Eigenschaften seines Elternteils, {{domxref("AudioNode")}}._

- {{domxref("MediaStreamAudioSourceNode.mediaStream", "mediaStream")}} {{ReadOnlyInline}}
  - : Der {{domxref("MediaStream")}}, der beim Erstellen dieses `MediaStreamAudioSourceNode` verwendet wurde.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

## Nutzungshinweise

### Track-Reihenfolge

Für Zwecke des `MediaStreamTrackAudioSourceNode`-Interfaces wird die Reihenfolge der Audiotracks im Stream bestimmt, indem die Tracks genommen werden, deren {{domxref("MediaStreamTrack.kind", "kind")}} `audio` ist, und die Tracks dann nach den Werten ihrer {{domxref("MediaStreamTrack.id", "id")}}-Eigenschaften in Unicode-Codepoint-Reihenfolge sortiert werden (im Wesentlichen in alphabetischer oder lexikographischer Reihenfolge für IDs, die einfache alphanumerische Zeichenketten sind).

Der **erste** Track ist dann der Track, dessen `id` an erster Stelle kommt, wenn die IDs der Tracks alle nach Unicode-Codepoints sortiert sind.

Es ist jedoch wichtig zu beachten, dass die Regel, die diese Reihenfolge festlegt, lange nach der Einführung dieses Interfaces in die [Web Audio API](/de/docs/Web/API/Web_Audio_API) hinzugefügt wurde. Daher können Sie nicht einfach auf einen gleichmäßigen Reihenfolgeabgleich zwischen zwei Browsern oder Browserversionen vertrauen.

Das {{domxref("MediaStreamTrackAudioSourceNode")}}-Interface ist dem `MediaStreamAudioSourceNode` ähnlich, vermeidet jedoch dieses Problem, indem es Ihnen ermöglicht, den zu verwendenden Track anzugeben.

## Beispiel

Siehe [`AudioContext.createMediaStreamSource()`](/de/docs/Web/API/AudioContext/createMediaStreamSource#examples) für Beispielcode, der dieses Objekt verwendet.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Media Capture and Streams API (Media Streams)](/de/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaStreamTrackAudioSourceNode")}}
