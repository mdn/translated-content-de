---
title: AudioDestinationNode
slug: Web/API/AudioDestinationNode
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{APIRef("Web Audio API")}}

Die `AudioDestinationNode`-Schnittstelle repräsentiert das Endziel eines Audiografen in einem bestimmten Kontext – normalerweise die Lautsprecher Ihres Geräts. Sie kann auch der Knoten sein, der die Audiodaten "aufzeichnet", wenn sie mit einem `OfflineAudioContext` verwendet wird.

`AudioDestinationNode` hat keinen Ausgang (da es der _Ausgang_ ist, kann kein weiterer `AudioNode` danach im Audiografen verknüpft werden) und einen Eingang. Die Anzahl der Kanäle im Eingang muss zwischen `0` und dem `maxChannelCount`-Wert liegen, andernfalls wird eine Ausnahme ausgelöst.

Die `AudioDestinationNode` eines bestimmten `AudioContext` kann über die {{domxref("BaseAudioContext/destination", "AudioContext.destination")}}-Eigenschaft abgerufen werden.

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
      <th scope="row">Anzahl der Kanäle</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("AudioNode")}}_.

- {{domxref("AudioDestinationNode.maxChannelCount")}}
  - : Ein `unsigned long`, der die maximale Anzahl von Kanälen definiert, die das physische Gerät verarbeiten kann.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

## Beispiel

Es gibt keine komplexe Einrichtung für die Verwendung eines `AudioDestinationNode` — standardmäßig stellt dies den Ausgang des Systems des Nutzers dar (z.B. seine Lautsprecher), sodass Sie ihn mit nur wenigen Codezeilen in einen Audiografen einfügen können:

```js
const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

Um eine ausführlichere Implementierung zu sehen, probieren Sie eines unserer MDN-Webaudio-Beispiele aus, wie [Voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) oder [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
