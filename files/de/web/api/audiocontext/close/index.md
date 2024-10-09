---
title: "AudioContext: close()-Methode"
short-title: close()
slug: Web/API/AudioContext/close
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{ APIRef("Web Audio API") }}

Die `close()`-Methode der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle schließt den Audio-Kontext und gibt alle von ihm genutzten System-Audio-Ressourcen frei.

Diese Funktion gibt nicht automatisch alle durch `AudioContext` erstellten Objekte frei, es sei denn, andere Referenzen wurden ebenfalls freigegeben; jedoch werden alle System-Audio-Ressourcen zwangsweise freigegeben, die die Erstellung und Verwendung zusätzlicher `AudioContexts` verhindern könnten. Der Fortschritt der Audiozeit im Audio-Kontext wird ausgesetzt und die Audio-Datenverarbeitung gestoppt. Das zurückgegebene {{jsxref("Promise")}} wird aufgelöst, wenn alle Ressourcen, die die Erstellung eines `AudioContext` blockieren, freigegeben wurden. Diese Methode wirft eine `INVALID_STATE_ERR`-Exception, wenn sie auf einem [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) aufgerufen wird.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} aufgelöst wird.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [AudioContext-Zustände-Demo](https://github.com/mdn/webaudio-examples/blob/main/audiocontext-states/index.html) ([live sehen](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Wenn der Stopp-Button geklickt wird, wird `close()` aufgerufen. Wenn das Versprechen aufgelöst wird, wird das Beispiel in den Anfangszustand zurückgesetzt.

```js
stopBtn.onclick = () => {
  audioCtx.close().then(() => {
    startBtn.removeAttribute("disabled");
    susResBtn.setAttribute("disabled", "disabled");
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
