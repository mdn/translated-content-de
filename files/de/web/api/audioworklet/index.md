---
title: AudioWorklet
slug: Web/API/AudioWorklet
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef("Web Audio API")}}{{securecontext_header}}

Das **`AudioWorklet`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) dient zur Bereitstellung benutzerdefinierter Audioverarbeitungsskripte, die in einem separaten Thread ausgeführt werden, um eine sehr niedrige Latenz bei der Audiobearbeitung zu gewährleisten.

Der Code des Worklets wird im globalen Ausführungskontext [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) ausgeführt. Dabei wird ein separater Web-Audio-Thread verwendet, der von dem Worklet und anderen Audio-Knoten gemeinsam genutzt wird.

Der Zugriff auf die Instanz von `AudioWorklet` im Audio-Kontext erfolgt über die Eigenschaft [`BaseAudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet).

{{InheritanceDiagram}}

## Instanz Eigenschaften

_Dieses Interface erbt auch Eigenschaften, die in seinem übergeordneten Interface [`Worklet`](/de/docs/Web/API/Worklet) definiert sind._

- [`port`](/de/docs/Web/API/AudioWorklet/port) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) für die benutzerdefinierte, asynchrone Kommunikation zwischen Code im Hauptthread und dem globalen Gültigkeitsbereich eines Audio-Worklets zurück.
    Dies ermöglicht benutzerdefinierte Nachrichten, wie das Senden und Empfangen von Steuerungsdaten oder globalen Einstellungen.

## Instanzmethoden

_Dieses Interface erbt Methoden von [`Worklet`](/de/docs/Web/API/Worklet). Das `AudioWorklet`-Interface definiert keine eigenen Methoden._

## Ereignisse

_`AudioWorklet` hat keine Ereignisse, auf die es reagiert._

## Beispiele

Sehen Sie sich [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) für vollständige Beispiele zur Erstellung benutzerdefinierter Audioknoten an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) — der globale Ausführungskontext eines `AudioWorklet`
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Verwendung von AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
