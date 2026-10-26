---
title: "AudioContext: sinkchange-Ereignis"
short-title: sinkchange
slug: Web/API/AudioContext/sinkchange_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Das **`sinkchange`**-Ereignis der Schnittstelle [`AudioContext`](/de/docs/Web/API/AudioContext) wird ausgelöst, wenn sich das Audioausgabegerät und damit auch [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("sinkchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onsinkchange = (event) => { }
```

## Ereignistyp

[`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("Event")}}

## Beispiele

Mit einem Listener für das `sinkchange`-Ereignis können Sie einen Wechsel des Audioausgabegeräts melden. Beachten Sie: Wenn [`sinkId`](/de/docs/Web/API/AudioContext/sinkId) ein [`AudioSinkInfo`](/de/docs/Web/API/AudioSinkInfo)-Objekt enthält, bedeutet dies, dass die Audioausgabe so geändert wurde, dass sie auf keinem Ausgabegerät wiedergegeben wird.

```js
audioCtx.addEventListener("sinkchange", () => {
  if (typeof audioCtx.sinkId === "object" && audioCtx.sinkId.type === "none") {
    console.log("Audio changed to not play on any device");
  } else {
    console.log(`Audio output device changed to ${audioCtx.sinkId}`);
  }
});
```

Ein funktionierendes Beispiel finden Sie in unserem [SetSinkId-Testbeispiel](https://mdn.github.io/dom-examples/audiocontext-setsinkid/). Sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/audiocontext-setsinkid) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ändern des Zielausgabegeräts in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
