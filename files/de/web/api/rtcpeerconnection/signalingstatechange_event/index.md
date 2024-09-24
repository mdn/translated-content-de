---
title: "RTCPeerConnection: signalingstatechange-Ereignis"
short-title: signalingstatechange
slug: Web/API/RTCPeerConnection/signalingstatechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`signalingstatechange`**-Ereignis wird an ein {{domxref("RTCPeerConnection")}} gesendet, um es darüber zu informieren, dass sich sein Signalisierungsstatus, wie durch die {{domxref("RTCPeerConnection.signalingState", "signalingState")}}-Eigenschaft angegeben, geändert hat.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Ereignisblase aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("signalingstatechange", (event) => {});

onsignalingstatechange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Gegeben ein {{domxref("RTCPeerConnection")}}, `pc`, und eine `updateStatus()`-Funktion, die dem Benutzer Statusinformationen anzeigt, richtet dieser Code einen Ereignishandler ein, um den Benutzer wissen zu lassen, wann der ICE-Aushandlungsprozess abgeschlossen ist.

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

Unter Verwendung von `onsignalingstatechange` sieht es so aus:

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
- {{domxref("RTCPeerConnection.signalingState")}}
