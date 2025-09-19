---
title: "RTCPeerConnection: signalingstatechange-Ereignis"
short-title: signalingstatechange
slug: Web/API/RTCPeerConnection/signalingstatechange_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Ein **`signalingstatechange`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um sie darüber zu informieren, dass sich ihr Signalisierungsstatus, wie durch die [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState)-Eigenschaft angegeben, geändert hat.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht übergeordnet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("signalingstatechange", (event) => { })

onsignalingstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Gegeben eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, und eine `updateStatus()`-Funktion, die Statusinformationen dem Benutzer präsentiert, richtet dieser Code einen Ereignishandler ein, um den Benutzer darüber zu informieren, wann der ICE-Aushandlungsprozess abgeschlossen ist.

```js
pc.addEventListener("signalingstatechange", (ev) => {
  switch (pc.signalingState) {
    case "stable":
      updateStatus("ICE negotiation complete");
      break;
  }
});
```

Mit `onsignalingstatechange` sieht es so aus:

```js
pc.onsignalingstatechange = (ev) => {
  switch (pc.signalingState) {
    case "stable":
      updateStatus("ICE negotiation complete");
      break;
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState)
