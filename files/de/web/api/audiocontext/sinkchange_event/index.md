---
title: "AudioContext: sinkchange-Ereignis"
short-title: sinkchange
slug: Web/API/AudioContext/sinkchange_event
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Das **`sinkchange`**-Ereignis der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle wird ausgelöst, wenn sich das Ausgabe-Audiogerät (und damit die [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)) geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("sinkchange", (event) => {});

onsinkchange = (event) => {};
```

## Ereignistyp

[`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("Event")}}

## Beispiele

Ein `sinkchange`-Ereignislistener kann verwendet werden, um eine Änderung des Audioausgabegeräts zu melden. Beachten Sie, dass wenn [`sinkId`](/de/docs/Web/API/AudioContext/sinkId) ein [`AudioSinkInfo`](/de/docs/Web/API/AudioSinkInfo)-Objekt enthält, dies darauf hinweist, dass das Audio so geändert wurde, dass es auf keinem Ausgabegerät abgespielt wird.

```js
audioCtx.addEventListener("sinkchange", () => {
  if (typeof audioCtx.sinkId === "object" && audioCtx.sinkId.type === "none") {
    console.log("Audio changed to not play on any device");
  } else {
    console.log(`Audio output device changed to ${audioCtx.sinkId}`);
  }
});
```

Siehe unser [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/) für funktionierenden Code.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/)
- [Ändern des Zielausgabegeräts in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
