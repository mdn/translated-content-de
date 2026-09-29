---
title: AudioDestinationNode
slug: Web/API/AudioDestinationNode
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Web Audio API")}}

Das `AudioDestinationNode`-Interface repräsentiert das endgültige Ziel eines Audiographen in einem bestimmten Kontext – normalerweise die Lautsprecher Ihres Geräts. Bei Verwendung mit einem `OfflineAudioContext` kann es auch der Node sein, der die Audiodaten „aufzeichnet“.

`AudioDestinationNode` hat keinen Ausgang (da es selbst der Ausgang ist und im Audiographen kein weiterer `AudioNode` danach verbunden werden kann) und einen Eingang. Die Anzahl der Kanäle am Eingang muss zwischen `0` und dem Wert von `maxChannelCount` liegen, andernfalls wird eine Ausnahme ausgelöst.

Der `AudioDestinationNode` eines bestimmten `AudioContext` kann über die Eigenschaft [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination) abgerufen werden.

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
      <th scope="row">Modus für die Kanalanzahl</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface [`AudioNode`](/de/docs/Web/API/AudioNode)._

- [`AudioDestinationNode.maxChannelCount`](/de/docs/Web/API/AudioDestinationNode/maxChannelCount) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die maximale Anzahl von Kanälen angibt, die das physische Gerät verarbeiten kann.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem übergeordneten Interface [`AudioNode`](/de/docs/Web/API/AudioNode)._

## Beispiel

Für die Verwendung eines `AudioDestinationNode` ist keine aufwendige Einrichtung erforderlich: Standardmäßig repräsentiert er den Ausgang des Systems der Benutzerin oder des Benutzers (z. B. dessen Lautsprecher). Daher können Sie ihn mit nur wenigen Codezeilen in einen Audiographen einbinden:

```js
const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

Eine vollständigere Implementierung finden Sie in einem unserer MDN-Beispiele zur Web Audio API, etwa [Voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) oder [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
