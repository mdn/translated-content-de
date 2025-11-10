---
title: "AudioContext: getOutputTimestamp()-Methode"
short-title: getOutputTimestamp()
slug: Web/API/AudioContext/getOutputTimestamp
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("Web Audio API")}}

Die **`getOutputTimestamp()`**-Methode des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces gibt ein neues `AudioTimestamp`-Objekt zurück, das zwei Audio-Zeitstempelwerte in Bezug auf den aktuellen Audiokontext enthält.

Die beiden Werte sind wie folgt:

- `AudioTimestamp.contextTime`: Die Zeit des aktuell vom Audioausgabegerät gerenderten Sample-Frames (d.h. Position des Ausgangsaudiostreams), in denselben Einheiten und Ursprüngen wie [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) des Kontexts. Im Grunde ist dies die Zeit, nachdem der Audiokontext erstmals erstellt wurde.
- `AudioTimestamp.performanceTime`: Eine Schätzung des Moments, an dem der Sample-Frame, der dem gespeicherten `contextTime`-Wert entspricht, vom Audioausgabegerät gerendert wurde, in denselben Einheiten und Ursprüngen wie [`performance.now()`](/de/docs/Web/API/Performance/now). Dies ist die Zeit, nachdem das Dokument, das den Audiokontext enthält, erstmals gerendert wurde.

## Syntax

```js-nolint
getOutputTimestamp()
```

### Parameter

Keine.

### Rückgabewert

Ein `AudioTimestamp`-Objekt, das die folgenden Eigenschaften hat.

- `contextTime`: Ein Punkt im Zeitkoordinatensystem von [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) für den `BaseAudioContext`; die Zeit, nachdem der Audiokontext erstmals erstellt wurde.
- `performanceTime`: Ein Punkt im Zeitkoordinatensystem eines `Performance`-Interfaces; die Zeit, nachdem das Dokument, das den Audiokontext enthält, erstmals gerendert wurde.

## Beispiele

Im folgenden Code beginnen wir, eine Audiodatei abzuspielen, nachdem eine Abspieltaste geklickt wurde, und starten eine `requestAnimationFrame`-Schleife, die ständig die Werte `contextTime` und `performanceTime` ausgibt.

Sie können den vollständigen Code dieses [Beispiels bei output-timestamp](https://github.com/mdn/webaudio-examples/blob/main/output-timestamp/index.html) sehen ([siehe auch live](https://mdn.github.io/webaudio-examples/output-timestamp/)).

```js
// Press the play button
playBtn.addEventListener("click", () => {
  // We can create the audioCtx as there has been some user action
  audioCtx ??= new AudioContext();
  source = new AudioBufferSourceNode(audioCtx);
  getData();
  source.start(0);
  playBtn.disabled = true;
  stopBtn.disabled = false;
  rAF = requestAnimationFrame(outputTimestamps);
});

// Press the stop button
stopBtn.addEventListener("click", () => {
  source.stop(0);
  playBtn.disabled = false;
  stopBtn.disabled = true;
  cancelAnimationFrame(rAF);
});

// Helper function to output timestamps
function outputTimestamps() {
  const ts = audioCtx.getOutputTimestamp();
  output.textContent = `Context time: ${ts.contextTime} | Performance time: ${ts.performanceTime}`;
  rAF = requestAnimationFrame(outputTimestamps); // Reregister itself
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
