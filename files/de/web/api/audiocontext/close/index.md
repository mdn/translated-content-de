---
title: "AudioContext: close()-Methode"
short-title: close()
slug: Web/API/AudioContext/close
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{ APIRef("Web Audio API") }}

Die `close()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle schließt den Audiokontext und gibt alle von ihm genutzten Systemaudioressourcen frei.

Diese Funktion gibt nicht automatisch alle von `AudioContext` erstellten Objekte frei, es sei denn, andere Referenzen wurden ebenfalls freigegeben; sie wird jedoch erzwingen, dass alle Systemaudioressourcen freigegeben werden, die verhindern könnten, dass zusätzliche `AudioContexts` erstellt und verwendet werden, den Fortschritt der Audiowiedergabe im Audiokontext aussetzen und die Verarbeitung von Audiodaten stoppen. Das zurückgegebene {{jsxref("Promise")}} wird gelöst, wenn alle Ressourcen, die die Erstellung des `AudioContext` blockieren, freigegeben wurden. Diese Methode löst eine `INVALID_STATE_ERR`-Ausnahme aus, wenn sie auf einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) aufgerufen wird.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} aufgelöst wird.

## Beispiele

Das folgende Snippet stammt aus unserer [AudioContext-Zustände-Demonstration](https://github.com/mdn/webaudio-examples/blob/main/audiocontext-states/index.html) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Wenn die Stopp-Taste geklickt wird, wird `close()` aufgerufen. Wenn das Promise aufgelöst wird, wird das Beispiel auf seinen Anfangszustand zurückgesetzt.

```js
stopBtn.onclick = () => {
  audioCtx.close().then(() => {
    startBtn.removeAttribute("disabled");
    susresBtn.setAttribute("disabled", "disabled");
    stopBtn.setAttribute("disabled", "disabled");
  });
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
