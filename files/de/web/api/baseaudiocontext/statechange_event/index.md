---
title: "BaseAudioContext: statechange-Ereignis"
short-title: statechange
slug: Web/API/BaseAudioContext/statechange_event
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Ein `statechange`-Ereignis wird bei einem {{DOMxRef("BaseAudioContext")}}-Objekt ausgelöst, wenn sich dessen {{domxref("BaseAudioContext.state", "Zustand")}} ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [AudioContext-Zustände-Demo](https://github.com/mdn/webaudio-examples) ([siehe es live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Der `onstatechange`-Handler wird verwendet, um den aktuellen
{{domxref("BaseAudioContext.state", "Zustand")}} jedes Mal in die Konsole zu protokollieren, wenn er sich ändert.

```js
audioCtx.onstatechange = () => {
  console.log(audioCtx.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
