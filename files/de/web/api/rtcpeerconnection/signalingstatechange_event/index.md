---
title: "RTCPeerConnection: signalingstatechange-Ereignis"
short-title: signalingstatechange
slug: Web/API/RTCPeerConnection/signalingstatechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Ein **`signalingstatechange`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um darauf hinzuweisen, dass sich ihr Signalisierungsstatus, wie durch die [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState)-Eigenschaft angezeigt, geändert hat.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("signalingstatechange", (event) => { })

onsignalingstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Angenommen, es gibt eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, und eine `updateStatus()`-Funktion, die Statusinformationen dem Nutzer präsentiert, zeigt dieser Code, wie ein Ereignishandler eingerichtet wird, um den Nutzer darüber zu informieren, wenn der ICE-Aushandlungsprozess abgeschlossen ist.

```js
pc.addEventListener(
  "signalingstatechange",
  (ev) => {
    switch (pc.signalingState) {
      case "stable":
        updateStatus("ICE negotiation complete");
        break;
    }
  },
  false,
);
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
