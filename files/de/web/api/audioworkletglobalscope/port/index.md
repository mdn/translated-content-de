---
title: "AudioWorkletGlobalScope: port"
short-title: port
slug: Web/API/AudioWorkletGlobalScope/port
l10n:
  sourceCommit: d365a618a169aad175463ae028ad33f85b612f89
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte Eigenschaft **`port`** des [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)-Interfaces gibt ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zurück, das verwendet werden kann, um Nachrichten zwischen dem Hauptthread und dem zugehörigen [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) zu senden und zu empfangen.

Dies ermöglicht eine benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Scope eines Audio-Worklets, wie z.B. das Senden von Steuerungsdaten oder globalen Einstellungen.

## Wert

Das [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das das `AudioWorklet` und dessen zugehörigen `AudioWorkletGlobalScope` verbindet.

## Beispiele

Siehe [`AudioWorkletNode.port`](/de/docs/Web/API/AudioWorkletNode/port#examples) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Verwendung von AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
