---
title: "BaseAudioContext: statechange-Ereignis"
short-title: statechange
slug: Web/API/BaseAudioContext/statechange_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("Web Audio API")}}

Ein `statechange`-Ereignis wird auf einem [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Objekt ausgelöst, wenn sich dessen [`state`](/de/docs/Web/API/BaseAudioContext/state) ändert.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("statechange", (event) => { })
```

Alternativ können Sie den [Event-Handler-Property](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Der folgende Ausschnitt stammt aus unserer [Demo zu AudioContext-Zuständen](https://github.com/mdn/webaudio-examples) ([Live-Demo ansehen](https://mdn.github.io/webaudio-examples/audiocontext-states/)). Der `onstatechange`-Handler protokolliert den aktuellen [`state`](/de/docs/Web/API/BaseAudioContext/state) bei jeder Änderung in der Konsole.

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
