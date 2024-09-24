---
title: "AudioContext: suspend()-Methode"
short-title: suspend()
slug: Web/API/AudioContext/suspend
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{ APIRef("Web Audio API") }}

Die `suspend()`-Methode der {{ domxref("AudioContext") }}-Schnittstelle hält den Zeitverlauf im Audio-Kontext an, stoppt vorübergehend den Zugriff auf die Audiohardware und reduziert dadurch die CPU-/Batterienutzung – dies ist nützlich, wenn eine Anwendung die Audiohardware abschalten möchte, wenn sie den Audio-Kontext eine Weile nicht nutzen wird.

Diese Methode löst eine `INVALID_STATE_ERR`-Ausnahme aus, wenn sie auf einem {{domxref("OfflineAudioContext")}} aufgerufen wird.

## Syntax

```js-nolint
suspend()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} aufgelöst wird. Das Versprechen wird abgelehnt, wenn der Kontext bereits geschlossen wurde.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [AudioContext-Zustände-Demo](https://github.com/mdn/webaudio-examples/blob/main/audiocontext-states/index.html) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Wenn die Suspend/Resume-Taste geklickt wird, wird der {{domxref("BaseAudioContext/state", "AudioContext.state")}} abgefragt – wenn er `running` ist, wird `suspend()` aufgerufen; wenn er `suspended` ist, wird {{domxref("AudioContext/resume", "resume()")}} aufgerufen. In jedem Fall wird das Textlabel der Schaltfläche entsprechend aktualisiert, sobald das Versprechen aufgelöst wird.

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
