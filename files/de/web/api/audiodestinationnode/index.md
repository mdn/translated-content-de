---
title: AudioDestinationNode
slug: Web/API/AudioDestinationNode
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Audio API")}}

Das `AudioDestinationNode`-Interface stellt das Endziel eines Audiografen in einem bestimmten Kontext dar — normalerweise die Lautsprecher Ihres Geräts. Es kann auch der Knoten sein, der die Audiodaten "aufzeichnet", wenn er mit einem `OfflineAudioContext` verwendet wird.

`AudioDestinationNode` hat keine Ausgabe (da es die _Ausgabe_ ist; es kann kein weiteres `AudioNode` danach im Audiografen verknüpft werden) und einen Eingang. Die Anzahl der Kanäle im Eingang muss zwischen `0` und dem Wert von `maxChannelCount` liegen, ansonsten wird eine Ausnahme ausgelöst.

Das `AudioDestinationNode` eines gegebenen `AudioContext` kann über die [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination)-Eigenschaft abgerufen werden.

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
      <th scope="row">Kanalanzahlmodus</th>
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

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`AudioDestinationNode.maxChannelCount`](/de/docs/Web/API/AudioDestinationNode/maxChannelCount)
  - : Ein `unsigned long`, das die maximale Anzahl der Kanäle definiert, die das physische Gerät verarbeiten kann.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Es gibt keine komplexe Einrichtung zur Verwendung eines `AudioDestinationNode` — standardmäßig stellt dies die Ausgabe des Systems des Benutzers (z.B. deren Lautsprecher) dar, sodass Sie es mit nur wenigen Codezeilen in einen Audiografen einhängen können:

```js
const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

Um eine vollständigere Implementierung zu sehen, werfen Sie einen Blick auf eines unserer MDN Web Audio-Beispiele, wie [Voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) oder [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
