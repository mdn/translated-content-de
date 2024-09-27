---
title: MediaElementAudioSourceNode
slug: Web/API/MediaElementAudioSourceNode
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Audio API")}}

Das `MediaElementAudioSourceNode`-Interface stellt eine Audioquelle dar, die aus einem HTML-{{ htmlelement("audio") }}- oder {{ htmlelement("video") }}-Element besteht. Es ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das als Audioquelle fungiert.

Ein `MediaElementAudioSourceNode` hat keine Eingänge und genau einen Ausgang und wird mit der Methode [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource) erstellt. Die Anzahl der Kanäle im Ausgang entspricht der Anzahl der Kanäle des Audios, das durch das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) referenziert wird, das bei der Erstellung des Knotens verwendet wird, oder beträgt 1, wenn das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) keinen Ton hat.

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
        2 (aber beachten Sie, dass [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) nur zum Hochmischen und Heruntermischen von [`AudioNode`](/de/docs/Web/API/AudioNode)-Eingängen verwendet wird und <code>MediaElementAudioSourceNode</code> keine Eingänge hat)
      </td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`MediaElementAudioSourceNode()`](/de/docs/Web/API/MediaElementAudioSourceNode/MediaElementAudioSourceNode)
  - : Erstellt eine neue `MediaElementAudioSourceNode`-Objektinstanz.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternknoten, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`mediaElement`](/de/docs/Web/API/MediaElementAudioSourceNode/mediaElement) {{ReadOnlyInline}}
  - : Das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), das beim Erstellen dieses `MediaStreamAudioSourceNode` verwendet wurde.

## Instanz-Methoden

_Erbt Methoden von seinem Elternknoten, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`AudioContext.createMediaElementSource()`](/de/docs/Web/API/AudioContext/createMediaElementSource#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
