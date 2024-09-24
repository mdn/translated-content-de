---
title: "AudioContext: resume()-Methode"
short-title: resume()
slug: Web/API/AudioContext/resume
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{ APIRef("Web Audio API") }}

Die **`resume()`**-Methode der Schnittstelle {{ domxref("AudioContext") }}
setzt den Fortschritt der Zeit in einem Audiokontext fort, der zuvor
ausgesetzt wurde.

Diese Methode führt zu einer `INVALID_STATE_ERR`-Ausnahme, wenn sie auf einem {{domxref("OfflineAudioContext")}} aufgerufen wird.

## Syntax

```js-nolint
resume()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der aufgelöst wird, wenn der Kontext fortgesetzt wurde. Das Versprechen wird abgelehnt, wenn der Kontext bereits geschlossen wurde.

## Beispiele

Das folgende Snippet stammt aus unserem [AudioContext-Zustände-Demo](https://github.com/mdn/webaudio-examples/tree/main/audiocontext-states) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Wenn der Aussetzen/Fortsetzen-Knopf geklickt wird, wird der
{{domxref("BaseAudioContext/state", "AudioContext.state")}} abgefragt — wenn dieser `running` ist,
wird {{domxref("AudioContext.suspend()", "suspend()")}} aufgerufen; wenn er `suspended` ist, wird `resume()` aufgerufen. In jedem Fall wird das Textlabel des
Knopfes entsprechend aktualisiert, sobald das Versprechen erfüllt ist.

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
