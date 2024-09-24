---
title: MediaStreamAudioDestinationNode
slug: Web/API/MediaStreamAudioDestinationNode
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("Web Audio API")}}

Die `MediaStreamAudioDestinationNode`-Schnittstelle repräsentiert ein Audioziel, das aus einem [WebRTC](/de/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} mit einem einzelnen `AudioMediaStreamTrack` besteht. Dieses kann ähnlich wie ein `MediaStream` verwendet werden, das von {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} erhalten wird.

Es handelt sich um einen {{domxref("AudioNode")}}, der als Audioziel fungiert und mit der Methode {{domxref("AudioContext.createMediaStreamDestination()")}} erstellt wird.

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
      <th scope="row">Anzahl der Kanäle</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalamodus</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("MediaStreamAudioDestinationNode.MediaStreamAudioDestinationNode", "MediaStreamAudioDestinationNode()")}}
  - : Erstellt eine neue Instanz eines `MediaStreamAudioDestinationNode`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("AudioNode")}}_.

- {{domxref("MediaStreamAudioDestinationNode.stream")}}
  - : Ein {{domxref("MediaStream")}}, das einen einzelnen {{domxref("MediaStreamTrack")}} enthält, dessen {{domxref("MediaStreamTrack.kind", "kind")}} `audio` ist und die gleiche Anzahl von Kanälen wie der Knoten aufweist. Diese Eigenschaft kann verwendet werden, um einen Stream aus dem Audiographen herauszuholen und ihn in eine andere Konstruktion einzuspeisen, wie z.B. einen [Media Recorder](/de/docs/Web/API/MediaStream_Recording_API).

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

## Beispiel

Siehe [`AudioContext.createMediaStreamDestination()`](/de/docs/Web/API/AudioContext/createMediaStreamDestination#examples) für Beispielcode, der einen `MediaStreamAudioDestinationNode` erstellt und diesen als Quelle für aufzuzeichnendes Audio verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
