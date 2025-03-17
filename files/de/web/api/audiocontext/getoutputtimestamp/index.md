---
title: "AudioContext: getOutputTimestamp()-Methode"
short-title: getOutputTimestamp()
slug: Web/API/AudioContext/getOutputTimestamp
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{APIRef("Web Audio API")}}

Die **`getOutputTimestamp()`**-Methode des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces gibt ein neues `AudioTimestamp`-Objekt zurück, das zwei Audiotime-Stamp-Werte in Bezug auf den aktuellen audiellen Kontext enthält.

Die beiden Werte sind wie folgt:

- `AudioTimestamp.contextTime`: Die Zeit des Sample-Frames, das derzeit vom Audioausgabegerät wiedergegeben wird (d.h. Position des ausgegebenen Audiostreams), in denselben Einheiten und Ursprung wie die [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) des Kontextes. Grundsätzlich ist dies die Zeit nach der ersten Erstellung des audiellen Kontexts.
- `AudioTimestamp.performanceTime`: Eine Schätzung des Moments, in dem das Sample-Frame, das dem gespeicherten `contextTime`-Wert entspricht, vom Audioausgabegerät wiedergegeben wurde, in denselben Einheiten und Ursprung wie [`performance.now()`](/de/docs/Web/API/Performance/now). Dies ist die Zeit, nachdem das Dokument, das den audiellen Kontext enthält, erstmals gerendert wurde.

## Syntax

```js-nolint
getOutputTimestamp()
```

### Parameter

Keine.

### Rückgabewert

Ein `AudioTimestamp`-Objekt, das die folgenden Eigenschaften besitzt.

- `contextTime`: Ein Punkt im Zeitkoordinatensystem des [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) für den `BaseAudioContext`; die Zeit nach der ersten Erstellung des audiellen Kontexts.
- `performanceTime`: Ein Punkt im Zeitkoordinatensystem eines `Performance`-Interfaces; die Zeit, nachdem das Dokument, das den audiellen Kontext enthält, erstmals gerendert wurde.

## Beispiele

Im folgenden Code beginnen wir, eine Audiodatei abzuspielen, nachdem ein Play-Button geklickt wurde, und starten eine `requestAnimationFrame`-Schleife, die kontinuierlich die `contextTime` und `performanceTime` ausgibt.

Sie können den vollständigen Code dieses [Beispiels unter output-timestamp](https://github.com/mdn/webaudio-examples/blob/main/output-timestamp/index.html) sehen ([auch live sehen](https://mdn.github.io/webaudio-examples/output-timestamp/)).

```js
// Press the play button
playBtn.addEventListener("click", () => {
  // We can create the audioCtx as there has been some user action
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
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
