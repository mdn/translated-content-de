---
title: "AudioContext: sinkchange-Ereignis"
short-title: sinkchange
slug: Web/API/AudioContext/sinkchange_event
l10n:
  sourceCommit: 29d7119ff6b46801a0e5a2ce69b734b668812035
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Das **`sinkchange`**-Ereignis des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces wird ausgelöst, wenn sich das Ausgabe-Audiogerät (und somit die [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)) geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js-nolint
addEventListener("sinkchange", (event) => { })

onsinkchange = (event) => { }
```

## Ereignistyp

[`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("Event")}}

## Beispiele

Ein `sinkchange`-Ereignislistener kann verwendet werden, um eine Änderung des Audioausgabegeräts zu melden. Beachten Sie, dass wenn [`sinkId`](/de/docs/Web/API/AudioContext/sinkId) ein [`AudioSinkInfo`](/de/docs/Web/API/AudioSinkInfo)-Objekt enthält, dies darauf hinweist, dass das Audio geändert wurde, um auf keinem Ausgabegerät abgespielt zu werden.

```js
audioCtx.addEventListener("sinkchange", () => {
  if (typeof audioCtx.sinkId === "object" && audioCtx.sinkId.type === "none") {
    console.log("Audio changed to not play on any device");
  } else {
    console.log(`Audio output device changed to ${audioCtx.sinkId}`);
  }
});
```

Siehe unser [SetSinkId-Testbeispiel](https://mdn.github.io/dom-examples/audiocontext-setsinkid/) für funktionierenden Code (sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/audiocontext-setsinkid) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ändern des Zielausgabegeräts in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
