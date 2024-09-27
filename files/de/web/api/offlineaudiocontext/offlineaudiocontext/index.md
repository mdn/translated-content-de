---
title: "OfflineAudioContext: OfflineAudioContext() Konstruktor"
short-title: OfflineAudioContext()
slug: Web/API/OfflineAudioContext/OfflineAudioContext
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Audio API")}}

Der **`OfflineAudioContext()`** Konstruktor—Teil der [Web Audio API](/de/docs/Web/API/Web_Audio_API)—erstellt und gibt eine neue [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Objektinstanz zurück, die dann verwendet werden kann, um Audio in ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu rendern, anstatt es auf ein Audioausgabegerät zu senden.

## Syntax

```js-nolint
new OfflineAudioContext(options)

new OfflineAudioContext(numberOfChannels, length, sampleRate)
```

### Parameter

Sie können die Parameter für den `OfflineAudioContext()`-Konstruktor entweder als die gleiche Menge von Parametern angeben, wie sie Eingaben für die [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer)-Methode sind, oder indem Sie diese Parameter in einem `options`-Objekt übergeben. In beiden Fällen sind die einzelnen Parameter gleich.

- `numberOfChannels`
  - : Eine Ganzzahl, die die Anzahl der Kanäle angibt, die das resultierende [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) haben sollte.
- `length`
  - : Eine Ganzzahl, die die Größe des Puffers angibt, der für den Audio-Kontext erstellt werden soll, in Sample-Frames, wobei ein Sample-Frame eine Einheit ist, die eine einzelne Probe von Audiodaten für jeden Kanal in den Audiodaten enthalten kann. Zum Beispiel hätte ein 5-Sekunden-Puffer mit einer `sampleRate` von 48000Hz eine Länge von `5 * 48000 = 240000` Sample-Frames.
- `sampleRate`
  - : Die Abtastrate der linearen Audiodaten in Sample-Frames pro Sekunde. Alle User Agents müssen einen Bereich von 8000Hz bis 96000Hz unterstützen und können möglicherweise einen größeren Bereich unterstützen. Die am häufigsten verwendete Rate ist 44100Hz, die auch die Abtastrate für CD-Audio ist.

Es ist wichtig zu beachten, dass, während Sie ein neues [`AudioContext`](/de/docs/Web/API/AudioContext) mit dem [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext)-Konstruktor ohne Argumente erstellen können, der `OfflineAudioContext()`-Konstruktor drei Argumente erfordert, da er ein `AudioBuffer` erstellen muss. Dies funktioniert genauso wie beim Erstellen eines neuen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) mit der [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer)-Methode. Für mehr Details lesen Sie [Audio buffers: frames, samples and channels](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels) aus unserem [Grundlagen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)-Leitfaden.

### Rückgabewert

Ein neues [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Objekt, dessen zugehöriges `AudioBuffer` wie gewünscht konfiguriert ist.

Wie ein regulärer `AudioContext` kann ein `OfflineAudioContext` das Ziel von Ereignissen sein, und implementiert daher die [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle.

## Beispiele

```js
const offlineCtx = new OfflineAudioContext({
  numberOfChannels: 2,
  length: 44100 * 40,
  sampleRate: 44100,
});
const source = offlineCtx.createBufferSource();
// …
```

Für ein vollständiges Arbeitsbeispiel, sehen Sie unser [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) GitHub-Repository (siehe auch den [Quellcode](https://github.com/mdn/webaudio-examples/blob/main/offline-audio-context-promise/index.html).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
