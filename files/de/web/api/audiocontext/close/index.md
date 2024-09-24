---
title: "AudioContext: close()-Methode"
short-title: close()
slug: Web/API/AudioContext/close
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{ APIRef("Web Audio API") }}

Die `close()`-Methode des Interfaces {{ domxref("AudioContext") }} schließt den Audiokontext und gibt alle System-Audioressourcen frei, die er nutzt.

Diese Funktion gibt nicht automatisch alle durch `AudioContext` erstellten Objekte frei, es sei denn, andere Referenzen wurden ebenfalls freigegeben; sie wird jedoch alle System-Audioressourcen gewaltsam freigeben, die verhindern könnten, dass zusätzliche `AudioContexts` erstellt und genutzt werden, das Fortschreiten der Audiozeit im Audiokontext aussetzen und die Verarbeitung von Audiodaten stoppen. Das zurückgegebene {{jsxref("Promise")}} wird aufgelöst, wenn alle ressourcenblockierenden `AudioContext`-Erstellungen freigegeben wurden. Diese Methode löst eine `INVALID_STATE_ERR`-Ausnahme aus, wenn sie auf einem {{domxref("OfflineAudioContext")}} aufgerufen wird.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} aufgelöst wird.

## Beispiele

Der folgende Code-Ausschnitt stammt aus unserem [AudioContext-Zustände-Demo](https://github.com/mdn/webaudio-examples/blob/main/audiocontext-states/index.html) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Wenn der Stopp-Button geklickt wird, wird `close()` aufgerufen. Wenn das Promise aufgelöst wird, wird das Beispiel auf seinen Anfangszustand zurückgesetzt.

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

- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
