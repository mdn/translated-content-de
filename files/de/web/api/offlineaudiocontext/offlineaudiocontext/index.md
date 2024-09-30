---
title: "OfflineAudioContext: OfflineAudioContext() Konstruktor"
short-title: OfflineAudioContext()
slug: Web/API/OfflineAudioContext/OfflineAudioContext
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Audio API")}}

Der **`OfflineAudioContext()`** Konstruktor—Teil der [Web Audio API](/de/docs/Web/API/Web_Audio_API)—erstellt und gibt eine neue Instanz eines [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Objektes zurück, das dann verwendet werden kann, um Audio in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) statt in ein Audio-Ausgabegerät zu rendern.

## Syntax

```js-nolint
new OfflineAudioContext(options)

new OfflineAudioContext(numberOfChannels, length, sampleRate)
```

### Parameter

Sie können die Parameter für den `OfflineAudioContext()` Konstruktor entweder als dasselbe Set von Parametern angeben, die als Eingaben in die Methode [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer) verwendet werden, oder indem Sie diese Parameter in einem `options`-Objekt übergeben. In beiden Fällen sind die einzelnen Parameter dieselben.

- `numberOfChannels`
  - : Ein ganzzahliger Wert, der die Anzahl der Kanäle spezifiziert, die der resultierende [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) haben soll.
- `length`
  - : Ein ganzzahliger Wert, der die Größe des Puffers spezifiziert, der für den Audio-Kontext erstellt werden soll, in Sample-Frames, wobei ein Sample-Frame eine Einheit ist, die eine einzelne Audio-Datenprobe für jeden Kanal in den Audiodaten enthalten kann. Zum Beispiel hätte ein 5-Sekunden-Puffer mit einer `sampleRate` von 48000Hz eine Länge von `5 * 48000 = 240000` Sample-Frames.
- `sampleRate`
  - : Die Abtastrate der linearen Audiodaten in Sample-Frames pro Sekunde. Alle Benutzeragenten müssen einen Bereich von 8000Hz bis 96000Hz unterstützen und können einen breiteren Bereich unterstützen. Die am häufigsten verwendete Rate ist 44100Hz, die Abtastrate, die von CD-Audio verwendet wird.

Es ist wichtig zu beachten, dass, während Sie einen neuen [`AudioContext`](/de/docs/Web/API/AudioContext) mit dem [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext) Konstruktor ohne Argumente erstellen können, der `OfflineAudioContext()` Konstruktor drei Argumente erfordert, da er einen `AudioBuffer` erstellen muss. Dies funktioniert genau so, wie wenn Sie einen neuen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) mit der [`BaseAudioContext.createBuffer`](/de/docs/Web/API/BaseAudioContext/createBuffer) Methode erstellen. Weitere Details finden Sie im Abschnitt [Audiodatenpuffer: Frames, Samples und Kanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels) aus unserem [Grundlegende Konzepte](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) Leitfaden.

### Rückgabewert

Ein neues [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) Objekt, dessen zugehöriger `AudioBuffer` wie gewünscht konfiguriert ist.

Wie ein regulärer `AudioContext` kann ein `OfflineAudioContext` das Ziel von Ereignissen sein, daher implementiert er das [`EventTarget`](/de/docs/Web/API/EventTarget) Interface.

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

Für ein vollständig funktionierendes Beispiel sehen Sie sich unser [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) GitHub Repository an (siehe auch den [Quellcode](https://github.com/mdn/webaudio-examples/blob/main/offline-audio-context-promise/index.html).)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
