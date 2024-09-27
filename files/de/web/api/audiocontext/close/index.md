---
title: "AudioContext: close()-Methode"
short-title: close()
slug: Web/API/AudioContext/close
l10n:
  sourceCommit: 9b8fba1439f6069a90a16023e89e0f8bf363a957
---

{{ APIRef("Web Audio API") }}

Die `close()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle schließt den Audio-Kontext und gibt alle vom System genutzten Audio-Ressourcen frei.

Diese Funktion gibt nicht automatisch alle durch `AudioContext` erstellten Objekte frei, es sei denn, es wurden auch andere Referenzen freigegeben; sie wird jedoch alle systemseitigen Audio-Ressourcen gewaltsam freigeben, die verhindern könnten, dass zusätzliche `AudioContexts` erstellt und verwendet werden. Sie suspendiert den Fortschritt der Audiozeit im Audio-Kontext und stoppt die Verarbeitung von Audiodaten. Das zurückgegebene {{jsxref("Promise")}} wird aufgelöst, wenn alle `AudioContext`-erstellungsblockierenden Ressourcen freigegeben wurden. Diese Methode wirft eine `INVALID_STATE_ERR`-Ausnahme, wenn sie auf einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) aufgerufen wird.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} aufgelöst wird.

## Beispiele

Der folgende Codeausschnitt stammt aus unserem [AudioContext-Zustands-Demo](https://github.com/mdn/webaudio-examples/blob/main/audiocontext-states/index.html) ([Live-Demo ansehen](https://mdn.github.io/webaudio-examples/audiocontext-states/)). Wenn die Stopptaste geklickt wird, wird `close()` aufgerufen. Wenn das Versprechen aufgelöst wird, wird das Beispiel in seinen Anfangszustand zurückgesetzt.

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
