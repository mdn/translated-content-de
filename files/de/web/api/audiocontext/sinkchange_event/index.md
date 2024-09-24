---
title: "AudioContext: sinkchange-Ereignis"
short-title: sinkchange
slug: Web/API/AudioContext/sinkchange_event
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Das **`sinkchange`**-Ereignis des {{domxref("AudioContext")}}-Interfaces wird ausgelöst, wenn sich das Ausgabe-Audiogerät (und somit die {{domxref("AudioContext.sinkId")}}) geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("sinkchange", (event) => {});

onsinkchange = (event) => {};
```

## Ereignistyp

{{domxref("Event")}}.

{{InheritanceDiagram("Event")}}

## Beispiele

Ein `sinkchange`-Ereignis-Listener kann verwendet werden, um eine Änderung des Audioausgabegeräts zu melden. Beachten Sie, dass, wenn {{domxref("AudioContext.sinkId", "sinkId")}} ein {{domxref("AudioSinkInfo")}}-Objekt enthält, dies darauf hinweist, dass das Audio geändert wurde, um auf keinem Ausgabegerät abgespielt zu werden.

```js
audioCtx.addEventListener("sinkchange", () => {
  if (typeof audioCtx.sinkId === "object" && audioCtx.sinkId.type === "none") {
    console.log("Audio geändert, um auf keinem Gerät abzuspielen");
  } else {
    console.log(`Audioausgabegerät geändert zu ${audioCtx.sinkId}`);
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
- [Ändern des Zielausgabegeräts in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- {{domxref("AudioContext.setSinkId()")}}
- {{domxref("AudioContext.sinkId")}}
