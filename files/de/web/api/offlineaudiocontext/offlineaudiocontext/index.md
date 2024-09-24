---
title: "OfflineAudioContext: OfflineAudioContext() Konstruktor"
short-title: OfflineAudioContext()
slug: Web/API/OfflineAudioContext/OfflineAudioContext
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Web Audio API")}}

Der **`OfflineAudioContext()`**-Konstruktor – Teil der [Web Audio API](/de/docs/Web/API/Web_Audio_API) – erstellt und gibt eine neue Instanz eines {{domxref("OfflineAudioContext")}}-Objekts zurück, das dann verwendet werden kann, um Audio in einen {{domxref("AudioBuffer")}} zu rendern, anstatt zu einem Audio-Ausgabegerät.

## Syntax

```js-nolint
new OfflineAudioContext(options)

new OfflineAudioContext(numberOfChannels, length, sampleRate)
```

### Parameter

Sie können die Parameter für den `OfflineAudioContext()`-Konstruktor entweder als die gleiche Menge von Parametern wie die Eingaben in die {{domxref("BaseAudioContext.createBuffer")}}-Methode angeben oder diese Parameter in einem `options`-Objekt übergeben. In beiden Fällen sind die einzelnen Parameter identisch.

- `numberOfChannels`
  - : Ein Integer, der die Anzahl der Kanäle angibt, die der resultierende {{domxref("AudioBuffer")}} haben soll.
- `length`
  - : Ein Integer, der die Größe des Puffers angibt, der für den Audiokontext erstellt werden soll, in Sample-Frames, wobei ein Sample-Frame eine Einheit ist, die eine einzelne Probe von Audiodaten für jeden Kanal in den Audiodaten enthalten kann. Zum Beispiel hätte ein 5-Sekunden-Puffer mit einer `sampleRate` von 48000Hz eine Länge von `5 * 48000 = 240000` Sample-Frames.
- `sampleRate`
  - : Die Abtastrate der linearen Audiodaten in Sample-Frames pro Sekunde. Alle Benutzeragenten müssen einen Bereich von 8000Hz bis 96000Hz unterstützen und können einen breiteren Bereich unterstützen. Die am häufigsten verwendete Rate ist 44100Hz, was die Abtastrate ist, die von CD-Audio verwendet wird.

Es ist wichtig zu beachten, dass, obwohl Sie einen neuen {{domxref("AudioContext")}} mit dem {{domxref("AudioContext.AudioContext()", "AudioContext()")}}-Konstruktor ohne Argumente erstellen können, der `OfflineAudioContext()`-Konstruktor drei Argumente erfordert, da er einen `AudioBuffer` erstellen muss. Dies funktioniert genau auf die gleiche Weise wie bei der Erstellung eines neuen {{domxref("AudioBuffer")}} mit der {{domxref("BaseAudioContext.createBuffer")}}-Methode. Für weitere Details lesen Sie [Audio buffers: frames, samples and channels](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels) aus unserem [Grundkonzepte](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)-Leitfaden.

### Rückgabewert

Ein neues {{domxref("OfflineAudioContext")}}-Objekt, dessen zugehöriger `AudioBuffer` wie gewünscht konfiguriert ist.

Wie ein regulärer `AudioContext` kann ein `OfflineAudioContext` das Ziel von Ereignissen sein, daher implementiert er das {{domxref("EventTarget")}}-Interface.

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

Für ein vollständiges funktionierendes Beispiel sehen Sie unser [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/)
GitHub-Repository (sehen Sie sich auch den [Quellcode](https://github.com/mdn/webaudio-examples/blob/main/offline-audio-context-promise/index.html) an.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
