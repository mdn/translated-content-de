---
title: "BaseAudioContext: statechange Ereignis"
short-title: statechange
slug: Web/API/BaseAudioContext/statechange_event
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Ein `statechange` Ereignis wird auf einem [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) Objekt ausgelöst, wenn sich dessen [`state`](/de/docs/Web/API/BaseAudioContext/state)-Mitglied ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel stammt aus unserer [AudioContext-Zustands-Demo](https://github.com/mdn/webaudio-examples) ([sehen Sie es live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) Der `onstatechange` Handler wird verwendet, um den aktuellen
[`state`](/de/docs/Web/API/BaseAudioContext/state) jedes Mal in die Konsole zu protokollieren, wenn er sich ändert.

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
