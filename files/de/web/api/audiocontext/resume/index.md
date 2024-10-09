---
title: "AudioContext: resume() Methode"
short-title: resume()
slug: Web/API/AudioContext/resume
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{ APIRef("Web Audio API") }}

Die **`resume()`**-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle setzt den Zeitverlauf in einem zuvor angehaltenen Audio-Kontext fort.

Diese Methode führt zu einer `INVALID_STATE_ERR`-Ausnahme, wenn sie auf einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) aufgerufen wird.

## Syntax

```js-nolint
resume()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn der Kontext fortgesetzt wurde. Das Versprechen wird abgelehnt, wenn der Kontext bereits geschlossen wurde.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [AudioContext-Zustände-Demo](https://github.com/mdn/webaudio-examples/tree/main/audiocontext-states) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Wenn die Suspendieren/Fortsetzen-Schaltfläche geklickt wird, wird der [`AudioContext.state`](/de/docs/Web/API/BaseAudioContext/state) abgefragt — wenn er `running` ist, wird [`suspend()`](/de/docs/Web/API/AudioContext/suspend) aufgerufen; wenn er `suspended` ist, wird `resume()` aufgerufen. In jedem Fall wird die Textbeschriftung der Schaltfläche entsprechend aktualisiert, sobald das Versprechen aufgelöst wird.

```js
susResBtn.onclick = () => {
  if (audioCtx.state === "running") {
    audioCtx.suspend().then(() => {
      susResBtn.textContent = "Resume context";
    });
  } else if (audioCtx.state === "suspended") {
    audioCtx.resume().then(() => {
      susResBtn.textContent = "Suspend context";
    });
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
