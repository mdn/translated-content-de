---
title: AudioWorklet
slug: Web/API/AudioWorklet
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}{{securecontext_header}}

Das **`AudioWorklet`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) wird verwendet, um benutzerdefinierte Audiobearbeitungsskripte bereitzustellen, die in einem separaten Thread ausgeführt werden, um eine sehr niedrige Latenz bei der Audiobearbeitung zu gewährleisten.

Der Code des Worklets wird im globalen Ausführungskontext [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) ausgeführt und nutzt einen separaten Web Audio Thread, der von dem Worklet und anderen Audionodes gemeinsam genutzt wird.

Der Zugriff auf die `AudioWorklet`-Instanz des Audiokontexts erfolgt über die Eigenschaft [`BaseAudioContext.audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `AudioWorklet`-Interface definiert keine eigenen Eigenschaften, erbt jedoch Eigenschaften von [`Worklet`](/de/docs/Web/API/Worklet)._

## Instanz-Methoden

_Dieses Interface erbt Methoden von [`Worklet`](/de/docs/Web/API/Worklet). Das `AudioWorklet`-Interface definiert keine eigenen Methoden._

## Ereignisse

_`AudioWorklet` hat keine Ereignisse, auf die es reagiert._

## Beispiele

Siehe [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) für vollständige Beispiele zur Erstellung benutzerdefinierter Audionodes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioWorkletGlobalScope`](/de/docs/Web/API/AudioWorkletGlobalScope) — der globale Ausführungskontext eines `AudioWorklet`
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Using AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
