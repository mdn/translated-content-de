---
title: AudioWorklet
slug: Web/API/AudioWorklet
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}{{securecontext_header}}

Die **`AudioWorklet`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) wird verwendet, um benutzerdefinierte Audiobearbeitungsskripte bereitzustellen, die in einem separaten Thread ausgeführt werden, um eine sehr niedrige Latenz bei der Audiobearbeitung zu gewährleisten.

Der Code des Worklets wird im globalen Ausführungskontext {{domxref("AudioWorkletGlobalScope")}} in einem separaten Web-Audio-Thread ausgeführt, der vom Worklet und anderen Audio-Knoten gemeinsam genutzt wird.

Zugriff auf die Instanz des `AudioWorklet` im Audiokontext über die {{domxref("BaseAudioContext.audioWorklet")}}-Eigenschaft.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `AudioWorklet`-Schnittstelle definiert keine eigenen Eigenschaften, erbt jedoch Eigenschaften von {{domxref("Worklet")}}._

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von {{domxref('Worklet')}}. Die `AudioWorklet`-Schnittstelle definiert keine eigenen Methoden._

## Ereignisse

_`AudioWorklet` hat keine Ereignisse, auf die es reagiert._

## Beispiele

Siehe {{domxref("AudioWorkletNode")}} für vollständige Beispiele zur Erstellung benutzerdefinierter Audio-Knoten.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("AudioWorkletGlobalScope")}} — der globale Ausführungskontext eines `AudioWorklet`
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Verwendung von AudioWorklet](/de/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
