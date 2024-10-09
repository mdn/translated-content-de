---
title: "AudioContext: suspend()-Methode"
short-title: suspend()
slug: Web/API/AudioContext/suspend
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{ APIRef("Web Audio API") }}

Die `suspend()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle unterbricht den Zeitfortschritt im Audio-Kontext, was vorübergehend den Zugriff auf die Audio-Hardware stoppt und den CPU-/Batterieverbrauch verringert. Dies ist nützlich, wenn eine Anwendung die Audio-Hardware ausschalten möchte, wenn sie den Audio-Kontext eine Weile nicht benötigt.

Diese Methode führt zu einer `INVALID_STATE_ERR`-Ausnahme, wenn sie auf einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) aufgerufen wird.

## Syntax

```js-nolint
suspend()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} aufgelöst wird. Das Versprechen wird abgelehnt, wenn der Kontext bereits geschlossen wurde.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [AudioContext-Zustände-Demo](https://github.com/mdn/webaudio-examples/blob/main/audiocontext-states/index.html) ([sehen Sie es live in Aktion](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Wenn die Suspend-/Resume-Schaltfläche angeklickt wird, wird der [`AudioContext.state`](/de/docs/Web/API/BaseAudioContext/state) abgefragt — wenn er `running` ist, wird `suspend()` aufgerufen; wenn er `suspended` ist, wird [`resume()`](/de/docs/Web/API/AudioContext/resume) aufgerufen. In jedem Fall wird die Textbeschriftung der Schaltfläche entsprechend aktualisiert, sobald das Versprechen aufgelöst ist.

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
