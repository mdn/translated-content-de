---
title: "AudioContext: resume()-Methode"
short-title: resume()
slug: Web/API/AudioContext/resume
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{ APIRef("Web Audio API") }}

Die **`resume()`**-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle setzt den Zeitverlauf in einem Audio-Kontext fort, der zuvor ausgesetzt wurde.

Diese Methode löst eine `INVALID_STATE_ERR`-Ausnahme aus, wenn sie auf einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) aufgerufen wird.

## Syntax

```js-nolint
resume()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn der Kontext fortgesetzt wurde. Das Promise wird abgelehnt, wenn der Kontext bereits geschlossen wurde.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [AudioContext-Zustände-Demo](https://github.com/mdn/webaudio-examples/tree/main/audiocontext-states) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Wenn die Suspendieren/Fortsetzen-Schaltfläche geklickt wird, wird der [`AudioContext.state`](/de/docs/Web/API/BaseAudioContext/state) abgefragt — wenn er `running` ist, wird [`suspend()`](/de/docs/Web/API/AudioContext/suspend) aufgerufen; wenn er `suspended` ist, wird `resume()` aufgerufen. In jedem Fall wird das Textlabel der Schaltfläche entsprechend aktualisiert, sobald das Promise aufgelöst wird.

```js
susresBtn.onclick = () => {
  if (audioCtx.state === "running") {
    audioCtx.suspend().then(() => {
      susresBtn.textContent = "Resume context";
    });
  } else if (audioCtx.state === "suspended") {
    audioCtx.resume().then(() => {
      susresBtn.textContent = "Suspend context";
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
