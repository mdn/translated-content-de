---
title: MediaStreamAudioDestinationNode
slug: Web/API/MediaStreamAudioDestinationNode
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Web Audio API")}}

Das Interface `MediaStreamAudioDestinationNode` repräsentiert ein Audioziel, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API)-[`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzelnen `AudioMediaStreamTrack` besteht. Dieser kann ähnlich wie ein über [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bezogener `MediaStream` verwendet werden.

Es handelt sich um einen [`AudioNode`](/de/docs/Web/API/AudioNode), der als Audioziel dient und mit der Methode [`AudioContext.createMediaStreamDestination()`](/de/docs/Web/API/AudioContext/createMediaStreamDestination) erstellt wird.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahlmodus</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Interpretation der Kanalanzahl</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`MediaStreamAudioDestinationNode()`](/de/docs/Web/API/MediaStreamAudioDestinationNode/MediaStreamAudioDestinationNode)
  - : Erstellt eine neue Instanz des Objekts `MediaStreamAudioDestinationNode`.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten [`AudioNode`](/de/docs/Web/API/AudioNode)._

- [`MediaStreamAudioDestinationNode.stream`](/de/docs/Web/API/MediaStreamAudioDestinationNode/stream) {{ReadOnlyInline}}
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der einen einzelnen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist und der dieselbe Anzahl an Kanälen wie der Node hat. Mit dieser Eigenschaft können Sie einen Stream aus dem Audiographen abrufen und ihn an eine andere Komponente übergeben, beispielsweise an einen [Media Recorder](/de/docs/Web/API/MediaStream_Recording_API).

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten [`AudioNode`](/de/docs/Web/API/AudioNode)._

## Beispiel

Beispielcode, der einen `MediaStreamAudioDestinationNode` erstellt und ihn als Quelle für aufzuzeichnendes Audio verwendet, finden Sie unter [`AudioContext.createMediaStreamDestination()`](/de/docs/Web/API/AudioContext/createMediaStreamDestination#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
