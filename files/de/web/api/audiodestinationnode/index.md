---
title: AudioDestinationNode
slug: Web/API/AudioDestinationNode
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{APIRef("Web Audio API")}}

Das `AudioDestinationNode`-Interface repräsentiert das Endziel eines Audiografen in einem bestimmten Kontext – normalerweise die Lautsprecher Ihres Geräts. Es kann auch der Knoten sein, der die Audiodaten "aufzeichnet", wenn er mit einem `OfflineAudioContext` verwendet wird.

`AudioDestinationNode` hat keinen Ausgang (da es der Ausgang ist, kann kein weiteres `AudioNode` danach im Audiograf verbunden werden) und einen Eingang. Die Anzahl der Kanäle im Eingang muss zwischen `0` und dem Wert von `maxChannelCount` liegen, sonst wird eine Ausnahme ausgelöst.

Das `AudioDestinationNode` eines bestimmten `AudioContext` kann über die [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)-Eigenschaft abgerufen werden.

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
      <th scope="row">Channel count mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`AudioDestinationNode.maxChannelCount`](/de/docs/Web/API/AudioDestinationNode/maxChannelCount)
  - : Ein `unsigned long`, das die maximale Anzahl der Kanäle definiert, die das physische Gerät verarbeiten kann.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Es gibt keine komplexe Einrichtung für die Verwendung eines `AudioDestinationNode` — standardmäßig stellt es den Ausgang des Systems des Benutzers dar (z. B. ihre Lautsprecher), daher kann es mit nur wenigen Codezeilen in einen Audiograf eingefügt werden:

```js
const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

Um eine vollständigere Implementierung zu sehen, schauen Sie sich eines unserer MDN Web Audio-Beispiele an, wie [Voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) oder [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
