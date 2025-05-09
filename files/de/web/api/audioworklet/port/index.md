---
title: "AudioWorklet: port"
short-title: port
slug: Web/API/AudioWorklet/port
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`port`** des [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)-Interfaces gibt ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zurück, das verwendet werden kann, um Nachrichten zwischen dem Haupt-Thread und dem zugehörigen [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) zu senden und zu empfangen.

Dies ermöglicht eine benutzerdefinierte, asynchrone Kommunikation zwischen Code im Haupt-Thread und dem globalen Bereich eines Audio-Worklets, wie das Empfangen von Steuerungsdaten oder globalen Einstellungen.

## Wert

Das [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das den `AudioWorklet` und den zugehörigen `AudioWorkletGlobalScope` verbindet.

## Beispiele

Siehe [`AudioWorkletNode.port`](/de/docs/Web/API/AudioWorkletNode/port#examples) für weitere Beispiele.

### Verwendung eines Ports für globale Nachrichten

Im folgenden Beispiel können wir `port.onmessage` verwenden, um Daten zu empfangen, und `port.postMessage`, um Daten zu senden:

```js
const context = new AudioContext();
// Load the module that contains worklet code
await context.audioWorklet.addModule("processor.js");

// Listener for messages from AudioWorkletGlobalScope
context.audioWorklet.port.onmessage = (event) => {
  console.log("Message from global worklet:", event.data);
};

// Set a global config, for example:
context.audioWorklet.port.postMessage({
  volume: 0.8,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) — der globale Ausführungskontext eines `AudioWorklet`
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Verwendung von AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
