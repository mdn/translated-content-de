---
title: "AudioContext: sinkchange-Ereignis"
short-title: sinkchange
slug: Web/API/AudioContext/sinkchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Das **`sinkchange`**-Ereignis des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces wird ausgelöst, wenn sich das Ausgabe-Audiogerät (und somit die [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)) geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("sinkchange", (event) => { })

onsinkchange = (event) => { }
```

## Ereignistyp

[`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("Event")}}

## Beispiele

Ein `sinkchange`-Ereignis-Listener kann verwendet werden, um eine Änderung des Audio-Ausgabegeräts zu melden. Beachten Sie, dass wenn [`sinkId`](/de/docs/Web/API/AudioContext/sinkId) ein [`AudioSinkInfo`](/de/docs/Web/API/AudioSinkInfo)-Objekt enthält, dies darauf hinweist, dass das Audio geändert wurde, um auf keinem Ausgabegerät abgespielt zu werden.

```js
audioCtx.addEventListener("sinkchange", () => {
  if (typeof audioCtx.sinkId === "object" && audioCtx.sinkId.type === "none") {
    console.log("Audio changed to not play on any device");
  } else {
    console.log(`Audio output device changed to ${audioCtx.sinkId}`);
  }
});
```

Sehen Sie sich unser [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/) für funktionierenden Code an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/)
- [Wechseln des Ausgabegeräts im Web-Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
