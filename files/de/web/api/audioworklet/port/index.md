---
title: "AudioWorklet: port"
short-title: port
slug: Web/API/AudioWorklet/port
l10n:
  sourceCommit: d365a618a169aad175463ae028ad33f85b612f89
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte Eigenschaft **`port`** des [`AudioWorklet`](/de/docs/Web/API/AudioWorklet)-Interfaces gibt ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zurück, das verwendet werden kann, um Nachrichten zwischen dem Hauptthread und dem zugehörigen [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) zu senden und zu empfangen.

Dies ermöglicht eine benutzerdefinierte, asynchrone Kommunikation zwischen dem Code im Hauptthread und dem globalen Gültigkeitsbereich eines Audio-Worklets, wie zum Beispiel das Empfangen von Steuerdaten oder globalen Einstellungen.

## Wert

Das [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das den `AudioWorklet` und seinen zugehörigen `AudioWorkletGlobalScope` verbindet.

## Beispiele

Siehe [`AudioWorkletNode.port`](/de/docs/Web/API/AudioWorkletNode/port#examples) für weitere Beispiele.

### Verwendung eines Ports für globale Nachrichten

Im folgenden Beispiel können wir `port.onmessage` verwenden, um Daten zu empfangen und `port.postMessage`, um Daten zu senden:

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
