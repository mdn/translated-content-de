---
title: "OfflineAudioContext: Konstruktor OfflineAudioContext()"
short-title: OfflineAudioContext()
slug: Web/API/OfflineAudioContext/OfflineAudioContext
l10n:
  sourceCommit: 64d2a33125b048766fa69bba398e750e29ffa875
---

{{APIRef("Web Audio API")}}

Der Konstruktor **`OfflineAudioContext()`** erstellt eine neue Objektinstanz von [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) und gibt sie zurück. Mit ihr kann Audio in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) statt an ein Audioausgabegerät gerendert werden.

## Syntax

```js-nolint
new OfflineAudioContext(options)
new OfflineAudioContext(numberOfChannels, length, sampleRate)
```

### Parameter

- `numberOfChannels`
  - : Eine Ganzzahl, die angibt, wie viele Kanäle der resultierende [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) haben soll. Der Wert kann zwischen 1 und der maximalen Anzahl von Kanälen liegen, die die Implementierung unterstützt, einschließlich beider Grenzwerte. Bei Chrome und Firefox beträgt dieser Höchstwert 32. Die Spezifikation verlangt, dass Browser mindestens 32 Kanäle unterstützen.
- `length`
  - : Eine Ganzzahl, die die Größe des für den Audiokontext zu erstellenden Puffers in Sample-Frames angibt. Ein Sample-Frame ist eine Einheit, die für jeden Kanal der Audiodaten ein einzelnes Sample enthalten kann. Beispielsweise hätte ein Puffer für 5 Sekunden Audio mit einer `sampleRate` von 48000 Hz eine Länge von `5 * 48000 = 240000` Sample-Frames. `length` muss größer als `0` sein; die Obergrenze wird nur durch den verfügbaren Arbeitsspeicher des Systems bestimmt.
- `renderSizeHint` {{optional_inline}} {{experimental_inline}}
  - : Fordert eine Render-Quantum-Größe für den Audiokontext als Anzahl von Audio-[Sample-Frames](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_graphs:~:text=sample%20frame) an (weitere Informationen finden Sie unter [`BaseAudioContext.renderQuantumSize`](/de/docs/Web/API/BaseAudioContext/renderQuantumSize)). Mögliche Werte sind:
    - `default`
      - : Verwendet den Standardwert `128`.
    - `hardware`
      - : Fordert den Browser auf, eine geeignete Größe für die zugrunde liegende Hardware zu wählen. Ein `OfflineAudioContext` rendert Audio in einen Audiopuffer. Daher spielen Hardware-Timing und Latenz keine Rolle, sodass `hardware` in diesem Fall `default` entspricht.
    - Eine Ganzzahl
      - : Eine bestimmte Anzahl von Frames zwischen `1` und dem Sechsfachen der `sampleRate` des Kontexts (abgerundet, falls das Ergebnis keine Ganzzahl ist), einschließlich beider Grenzwerte. Der angeforderte Wert wird möglicherweise nicht exakt übernommen. Sie können `renderQuantumSize` des Kontexts abfragen, um den tatsächlich ausgewählten Wert zu prüfen.

    Wenn `renderSizeHint` weggelassen wird, ist der Standardwert `128`.
- `sampleRate`
  - : Die Abtastrate der linearen Audiodaten in Sample-Frames pro Sekunde. Sie kann zwischen 3000 und 768000 Hz liegen, einschließlich beider Grenzwerte. Die gebräuchlichste Rate ist 44100 Hz; dies ist die Abtastrate von CD-Audio.

Sie können die Parameter für den Konstruktor `OfflineAudioContext()` als Positionsargumente oder als Eigenschaften eines `options`-Objekts angeben. Beachten Sie, dass Sie `renderSizeHint` nur in einem `options`-Objekt angeben können. Bei Positionsargumenten können Sie nur `numberOfChannels`, `length` und `sampleRate` angeben.

Anders als der Konstruktor [`AudioContext()`](/de/docs/Web/API/AudioContext/AudioContext), der keine erforderlichen Argumente hat, benötigt der Konstruktor `OfflineAudioContext()` ein `options`-Objekt oder drei Positionsargumente, da er einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) erstellen muss. Intern entspricht dies dem Erstellen eines neuen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) mit der Methode [`BaseAudioContext.createBuffer()`](/de/docs/Web/API/BaseAudioContext/createBuffer).

### Rückgabewert

Ein neues [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Objekt, dessen zugehöriger `AudioBuffer` wie angefordert konfiguriert ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument nicht vollständig aktiv ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebenen Werte für [`numberOfChannels`](#numberofchannels), [`length`](#length), [`renderSizeHint`](#rendersizehint) oder [`sampleRate`](#samplerate) außerhalb des zulässigen Bereichs liegen.

## Beispiele

### Grundlegende Verwendung

```js
const offlineCtx = new OfflineAudioContext({
  numberOfChannels: 2,
  length: 44100 * 40,
  sampleRate: 44100,
});
const source = offlineCtx.createBufferSource();
// …
```

Ein vollständiges, funktionsfähiges Beispiel finden Sie in unserem GitHub-Repository [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) (siehe auch den [Quellcode](https://github.com/mdn/webaudio-examples/blob/main/offline-audio-context-promise/index.html)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Audiopuffer: Frames, Samples und Kanäle](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels)
