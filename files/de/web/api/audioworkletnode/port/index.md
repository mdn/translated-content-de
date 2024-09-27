---
title: "AudioWorkletNode: port-Eigenschaft"
short-title: port
slug: Web/API/AudioWorkletNode/port
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

Die schreibgeschützte **`port`**-Eigenschaft der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Schnittstelle gibt den zugehörigen [`MessagePort`](/de/docs/Web/API/MessagePort) zurück. Sie kann verwendet werden, um zwischen dem Knoten und seinem zugehörigen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) zu kommunizieren.

> [!NOTE]
> Der Port am anderen Ende des Kanals ist
> über die [`port`](/de/docs/Web/API/AudioWorkletProcessor/port)-Eigenschaft des
> Prozessors verfügbar.

## Wert

Das [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das den
`AudioWorkletNode` mit seinem zugehörigen `AudioWorkletProcessor` verbindet.

## Beispiele

Um die bidirektionalen Kommunikationsfähigkeiten zu demonstrieren, erstellen wir einen
`AudioWorkletProcessor`, der Stille ausgibt und auf Ping-Anfragen
von seinem `AudioWorkletNode` antwortet.

Zuerst müssen wir einen benutzerdefinierten `AudioWorkletProcessor` definieren und registrieren.
Beachten Sie, dass dies in einer separaten Datei geschehen sollte.

```js
// ping-pong-processor.js
class PingPongProcessor extends AudioWorkletProcessor {
  constructor(...args) {
    super(...args);
    this.port.onmessage = (e) => {
      console.log(e.data);
      this.port.postMessage("pong");
    };
  }
  process(inputs, outputs, parameters) {
    return true;
  }
}

registerProcessor("ping-pong-processor", PingPongProcessor);
```

Nun laden wir in unserem Hauptskripten-Datei den Prozessor, erstellen eine Instanz von
`AudioWorkletNode`, indem wir den Namen des Prozessors übergeben, und verbinden den Knoten mit
einem Audiographen.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("ping-pong-processor.js");
const pingPongNode = new AudioWorkletNode(audioContext, "ping-pong-processor");
// send the message containing 'ping' string
// to the AudioWorkletProcessor from the AudioWorkletNode every second
setInterval(() => pingPongNode.port.postMessage("ping"), 1000);
pingPongNode.port.onmessage = (e) => console.log(e.data);
pingPongNode.connect(audioContext.destination);
```

Dies wird die Zeichenfolgen `"ping"` und `"pong"` jede Sekunde in die Konsole
ausgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
