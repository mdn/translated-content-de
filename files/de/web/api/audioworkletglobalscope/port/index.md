---
title: "AudioWorkletGlobalScope: port"
short-title: port
slug: Web/API/AudioWorkletGlobalScope/port
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die **`port`** schreibgeschützte Eigenschaft des [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope)-Interfaces gibt ein [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt zurück, das verwendet werden kann, um Nachrichten zwischen dem Hauptthread und dem zugehörigen [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) zu senden und zu empfangen.

Dies ermöglicht eine benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Scope eines Audio-Worklets, wie das Senden von Steuerdaten oder globalen Einstellungen.

## Wert

Das [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt, das den `AudioWorklet` und seinen zugehörigen `AudioWorkletGlobalScope` verbindet.

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
