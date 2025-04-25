---
title: AudioWorklet
slug: Web/API/AudioWorklet
l10n:
  sourceCommit: d365a618a169aad175463ae028ad33f85b612f89
---

{{APIRef("Web Audio API")}}{{securecontext_header}}

Das **`AudioWorklet`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) wird verwendet, um benutzerdefinierte Audiobearbeitungsskripte bereitzustellen, die in einem separaten Thread ausgeführt werden, um eine sehr geringe Audiolatenz zu gewährleisten.

Der Code des Worklets wird im globalen Ausführungskontext [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) ausgeführt, unter Verwendung eines separaten Web-Audio-Threads, der vom Worklet und anderen Audionodes gemeinsam genutzt wird.

Greifen Sie über die Eigenschaft [`BaseAudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) auf die Instanz von `AudioWorklet` des Audiokontexts zu.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften, die in seinem übergeordneten Interface [`Worklet`](/de/docs/Web/API/Worklet) definiert sind._

- [`port`](/de/docs/Web/API/AudioWorklet/port) {{ReadOnlyInline}}
  - : Gibt einen [`MessagePort`](/de/docs/Web/API/MessagePort) für benutzerdefinierte, asynchrone Kommunikation zwischen dem Code im Hauptthread und dem globalen Scope eines Audio-Worklets zurück.
    Dies ermöglicht benutzerdefinierte Nachrichten, wie das Senden und Empfangen von Steuerdaten oder globalen Einstellungen.

## Instanz-Methoden

_Dieses Interface erbt Methoden von [`Worklet`](/de/docs/Web/API/Worklet). Das `AudioWorklet`-Interface definiert keine eigenen Methoden._

## Ereignisse

_`AudioWorklet` hat keine Ereignisse, auf die es reagiert._

## Beispiele

Sehen Sie sich [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) für vollständige Beispiele zur Erstellung benutzerdefinierter Audionodes an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) — der globale Ausführungskontext eines `AudioWorklet`
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Verwendung von AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
