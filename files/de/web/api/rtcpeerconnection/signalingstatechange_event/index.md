---
title: "RTCPeerConnection: signalingstatechange-Ereignis"
short-title: signalingstatechange
slug: Web/API/RTCPeerConnection/signalingstatechange_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Ein **`signalingstatechange`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um sie darüber zu informieren, dass sich ihr Signalisierungszustand geändert hat, wie durch die Eigenschaft [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) angezeigt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("signalingstatechange", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
onsignalingstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Gegeben seien eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `pc` und eine Funktion `updateStatus()`, die Statusinformationen für den Benutzer anzeigt. Der folgende Code richtet einen Event-Handler ein, der den Benutzer benachrichtigt, wenn die ICE-Aushandlung abgeschlossen ist.

```js
pc.addEventListener("signalingstatechange", (ev) => {
  switch (pc.signalingState) {
    case "stable":
      updateStatus("ICE negotiation complete");
      break;
  }
});
```

Mit `onsignalingstatechange` sieht das so aus (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onsignalingstatechange` hinzugefügte Event-Listener ersetzt werden):

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState)
