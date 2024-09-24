---
title: "AudioContext: Methode getOutputTimestamp()"
short-title: getOutputTimestamp()
slug: Web/API/AudioContext/getOutputTimestamp
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{APIRef("Web Audio API")}}

Die **`getOutputTimestamp()`**-Methode der {{domxref("AudioContext")}}-Schnittstelle gibt ein neues `AudioTimestamp`-Objekt zurück, das zwei Audiotimestamp-Werte im Zusammenhang mit dem aktuellen Audiokontext enthält.

Die beiden Werte sind wie folgt:

- `AudioTimestamp.contextTime`: Die Zeit des Sample-Frames, der derzeit vom Audioausgabegerät gerendert wird (d. h. Position des Audioausgabestroms), in denselben Einheiten und Ursprüngen wie {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} des Kontexts. Grundsätzlich ist dies die Zeit nach der ersten Erstellung des Audiokontexts.
- `AudioTimestamp.performanceTime`: Eine Schätzung des Moments, in dem der Sample-Frame, der dem gespeicherten `contextTime`-Wert entspricht, vom Audioausgabegerät gerendert wurde, in denselben Einheiten und Ursprüngen wie {{domxref("performance.now()")}}. Dies ist die Zeit nach dem ersten Rendern des Dokuments, das den Audiokontext enthält.

## Syntax

```js-nolint
getOutputTimestamp()
```

### Parameter

Keine.

### Rückgabewert

Ein `AudioTimestamp`-Objekt, das die folgenden Eigenschaften hat.

- `contextTime`: Ein Zeitpunkt im Zeitkoordinatensystem des `BaseAudioContext` {{domxref("BaseAudioContext/currentTime","currentTime")}}; die Zeit nach der ersten Erstellung des Audiokontexts.
- `performanceTime`: Ein Zeitpunkt im Zeitkoordinatensystem einer `Performance`-Schnittstelle; die Zeit nach dem ersten Rendern des Dokuments, das den Audiokontext enthält.

## Beispiele

Im folgenden Code beginnen wir, eine Audiodatei abzuspielen, nachdem eine Wiedergabeschaltfläche geklickt wurde, und starten eine `requestAnimationFrame`-Schleife, die ständig die `contextTime` und `performanceTime` ausgibt.

Sie können den vollständigen Code dieses [Beispiels bei output-timestamp](https://github.com/mdn/webaudio-examples/blob/main/output-timestamp/index.html) sehen ([sehen Sie es auch live](https://mdn.github.io/webaudio-examples/output-timestamp/)).

```js
// Drücken Sie die Wiedergabetaste
playBtn.addEventListener("click", () => {
  // Wir können den audioCtx erstellen, da eine Benutzeraktion erfolgt ist
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

// Drücken Sie die Stopptaste
stopBtn.addEventListener("click", () => {
  source.stop(0);
  playBtn.disabled = false;
  stopBtn.disabled = true;
  cancelAnimationFrame(rAF);
});

// Hilfsfunktion zum Ausgeben von Timestamps
function outputTimestamps() {
  const ts = audioCtx.getOutputTimestamp();
  output.textContent = `Context time: ${ts.contextTime} | Performance time: ${ts.performanceTime}`;
  rAF = requestAnimationFrame(outputTimestamps); // Registriert sich selbst erneut
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
