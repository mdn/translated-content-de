---
title: "AudioContext: suspend()-Methode"
short-title: suspend()
slug: Web/API/AudioContext/suspend
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{ APIRef("Web Audio API") }}

Die `suspend()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle stoppt die Fortschreitung der Zeit im Audio-Kontext, pausiert vorübergehend den Zugriff auf die Audio-Hardware und reduziert dabei die CPU-/Batterie-Nutzung — das ist nützlich, wenn eine Anwendung die Audio-Hardware abschalten möchte, weil ein Audio-Kontext für eine Weile nicht verwendet wird.

Diese Methode führt zu einer `INVALID_STATE_ERR`-Ausnahme, wenn sie auf einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) aufgerufen wird.

## Syntax

```js-nolint
suspend()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref('undefined')}} auflöst. Das Versprechen wird zurückgewiesen, wenn der Kontext bereits geschlossen wurde.

## Beispiele

Der folgende Ausschnitt stammt aus unserer [AudioContext-Zustandsdemo](https://github.com/mdn/webaudio-examples/blob/main/audiocontext-states/index.html) ([siehe es live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Wenn die Suspendieren/Fortsetzen-Schaltfläche angeklickt wird, wird der [`AudioContext.state`](/de/docs/Web/API/BaseAudioContext/state) abgefragt — wenn er `running` ist, wird `suspend()` aufgerufen; wenn er `suspended` ist, wird [`resume()`](/de/docs/Web/API/AudioContext/resume) aufgerufen. In jedem Fall wird das Textlabel der Schaltfläche entsprechend aktualisiert, sobald das Versprechen erfüllt ist.

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
