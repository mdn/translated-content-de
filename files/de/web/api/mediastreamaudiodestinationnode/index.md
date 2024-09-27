---
title: MediaStreamAudioDestinationNode
slug: Web/API/MediaStreamAudioDestinationNode
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("Web Audio API")}}

Das `MediaStreamAudioDestinationNode`-Interface repräsentiert ein Audioziel, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem einzelnen `AudioMediaStreamTrack` besteht. Dieses kann ähnlich verwendet werden wie ein `MediaStream`, das von [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erhalten wurde.

Es handelt sich um einen [`AudioNode`](/de/docs/Web/API/AudioNode), der als Audioziel fungiert und mit der Methode [`AudioContext.createMediaStreamDestination()`](/de/docs/Web/API/AudioContext/createMediaStreamDestination) erstellt wird.

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
      <th scope="row">Kanalzähldmodus</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalzähleninterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`MediaStreamAudioDestinationNode()`](/de/docs/Web/API/MediaStreamAudioDestinationNode/MediaStreamAudioDestinationNode)
  - : Erstellt eine neue Instanz eines `MediaStreamAudioDestinationNode`-Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`MediaStreamAudioDestinationNode.stream`](/de/docs/Web/API/MediaStreamAudioDestinationNode/stream)
  - : Ein [`MediaStream`](/de/docs/Web/API/MediaStream), der einen einzelnen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist und der die gleiche Anzahl von Kanälen wie der Knoten hat. Diese Eigenschaft kann verwendet werden, um einen Stream aus dem Audiographen zu erhalten und ihn in eine andere Konstruktion einzuspeisen, wie z.B. einen [Media Recorder](/de/docs/Web/API/MediaStream_Recording_API).

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Sehen Sie sich [`AudioContext.createMediaStreamDestination()`](/de/docs/Web/API/AudioContext/createMediaStreamDestination#examples) für einen Beispielcode an, der einen `MediaStreamAudioDestinationNode` erstellt und diesen als Quelle für aufzuzeichnenden Audio verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
