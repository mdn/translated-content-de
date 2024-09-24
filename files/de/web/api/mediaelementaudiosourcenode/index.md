---
title: MediaElementAudioSourceNode
slug: Web/API/MediaElementAudioSourceNode
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Audio API")}}

Das `MediaElementAudioSourceNode`-Interface repräsentiert eine Audioquelle, die aus einem HTML-{{ htmlelement("audio") }} oder {{ htmlelement("video") }}-Element besteht. Es ist ein {{domxref("AudioNode")}}, das als Audioquelle fungiert.

Ein `MediaElementAudioSourceNode` hat keine Eingänge und genau einen Ausgang und wird mittels der Methode {{domxref("AudioContext.createMediaElementSource()")}} erstellt. Die Anzahl der Kanäle im Ausgang entspricht der Anzahl der Kanäle des Audios, auf das sich das bei der Erstellung des Knotens verwendete {{domxref("HTMLMediaElement")}} bezieht, oder ist 1, wenn das {{domxref("HTMLMediaElement")}} kein Audio hat.

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
        2 (beachten Sie, dass {{domxref("AudioNode.channelCount")}} nur für das Hoch- und Heruntermischen von {{domxref("AudioNode")}}-Eingängen verwendet wird, und <code>MediaElementAudioSourceNode</code> keine Eingänge hat)
      </td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("MediaElementAudioSourceNode.MediaElementAudioSourceNode", "MediaElementAudioSourceNode()")}}
  - : Erstellt eine neue `MediaElementAudioSourceNode`-Objektinstanz.

## Instanz-Eigenschaften

_Übernimmt Eigenschaften von seinem Eltern, {{domxref("AudioNode")}}_.

- {{domxref("MediaElementAudioSourceNode.mediaElement", "mediaElement")}} {{ReadOnlyInline}}
  - : Das {{domxref("HTMLMediaElement")}}, das beim Erstellen dieses `MediaStreamAudioSourceNode` verwendet wurde.

## Instanz-Methoden

_Übernimmt Methoden von seinem Eltern, {{domxref("AudioNode")}}_.

## Beispiel

Siehe [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource#examples) für ein Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
