---
title: "AudioContext: getOutputTimestamp()-Methode"
short-title: getOutputTimestamp()
slug: Web/API/AudioContext/getOutputTimestamp
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{APIRef("Web Audio API")}}

Die **`getOutputTimestamp()`**-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle gibt ein neues `AudioTimestamp`-Objekt zurück, das zwei Audiostempelwerte zum aktuellen Audiokontext enthält.

Die beiden Werte sind wie folgt:

- `AudioTimestamp.contextTime`: Die Zeit des momentan vom Audioausgabegerät gerenderten Sample-Frames (d.h. die Position des Audioausgabestreams), in den gleichen Einheiten und dem gleichen Ursprung wie der [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) des Kontextes. Grundsätzlich ist dies die Zeit, nachdem der Audiokontext zuerst erstellt wurde.
- `AudioTimestamp.performanceTime`: Eine Schätzung des Moments, in dem der Sample-Frame, der dem gespeicherten `contextTime`-Wert entspricht, vom Audioausgabegerät gerendert wurde, in den gleichen Einheiten und dem gleichen Ursprung wie [`performance.now()`](/de/docs/Web/API/Performance/now). Dies ist die Zeit, nachdem das Dokument, das den Audiokontext enthält, zuerst gerendert wurde.

## Syntax

```js-nolint
getOutputTimestamp()
```

### Parameter

Keine.

### Rückgabewert

Ein `AudioTimestamp`-Objekt, das die folgenden Eigenschaften besitzt.

- `contextTime`: Ein Punkt im Zeitkoordinatensystem des [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) für den `BaseAudioContext`; die Zeit, nachdem der Audiokontext zuerst erstellt wurde.
- `performanceTime`: Ein Punkt im Zeitkoordinatensystem einer `Performance`-Schnittstelle; die Zeit, nachdem das Dokument, das den Audiokontext enthält, zuerst gerendert wurde.

## Beispiele

Im folgenden Code beginnen wir mit dem Abspielen einer Audiodatei, nachdem eine Wiedergabetaste geklickt wurde, und starten eine `requestAnimationFrame`-Schleife, die konstant `contextTime` und `performanceTime` ausgibt.

Sie können den vollständigen Code dieses [Beispiels bei output-timestamp](https://github.com/mdn/webaudio-examples/blob/main/output-timestamp/index.html) einsehen ([sehen Sie es sich auch live an](https://mdn.github.io/webaudio-examples/output-timestamp/)).

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
