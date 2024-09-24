---
title: "AudioWorkletNode: port-Eigenschaft"
short-title: port
slug: Web/API/AudioWorkletNode/port
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}{{SecureContext_Header}}

Die schreibgeschützte **`port`**-Eigenschaft der
Schnittstelle {{domxref("AudioWorkletNode")}} gibt den zugehörigen
{{domxref("MessagePort")}} zurück. Sie kann verwendet werden, um zwischen dem Knoten und seinem
zugehörigen {{domxref("AudioWorkletProcessor")}} zu kommunizieren.

> [!NOTE]
> Der Port am anderen Ende des Kanals ist
> über die {{domxref("AudioWorkletProcessor.port", "port")}}-Eigenschaft des
> Prozessors verfügbar.

## Wert

Das {{domxref("MessagePort")}}-Objekt, das den
`AudioWorkletNode` und seinen zugehörigen `AudioWorkletProcessor` verbindet.

## Beispiele

Um die bidirektionale Kommunikationsfähigkeit zu demonstrieren, erstellen wir einen
`AudioWorkletProcessor`, der Stille ausgibt und auf Ping-Anfragen von seinem
`AudioWorkletNode` antwortet.

Zuerst müssen wir einen benutzerdefinierten `AudioWorkletProcessor` definieren und registrieren.
Beachten Sie, dass dies in einer separaten Datei erfolgen sollte.

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

Nun werden wir in unserer Hauptskriptdatei den Prozessor laden, eine Instanz von
`AudioWorkletNode` erstellen, indem wir den Namen des Prozessors übergeben, und den Knoten mit
einem Audiografen verbinden.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("ping-pong-processor.js");
const pingPongNode = new AudioWorkletNode(audioContext, "ping-pong-processor");
// sendet die Nachricht mit dem String 'ping'
// an den AudioWorkletProcessor vom AudioWorkletNode jede Sekunde
setInterval(() => pingPongNode.port.postMessage("ping"), 1000);
pingPongNode.port.onmessage = (e) => console.log(e.data);
pingPongNode.connect(audioContext.destination);
```

Dies wird jede Sekunde die Zeichenfolgen `"ping"` und `"pong"` in die Konsole ausgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
