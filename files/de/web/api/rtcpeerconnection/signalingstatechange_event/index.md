---
title: "RTCPeerConnection: signalingstatechange-Ereignis"
short-title: signalingstatechange
slug: Web/API/RTCPeerConnection/signalingstatechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`signalingstatechange`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um mitzuteilen, dass sich ihr Signalisierungsstatus, wie durch die [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState)-Eigenschaft angegeben, geändert hat.

Dieses Ereignis ist nicht abbrechbar und wird nicht nach oben weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("signalingstatechange", (event) => {});

onsignalingstatechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Angenommen, wir haben eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, und eine Funktion `updateStatus()`, die dem Benutzer Statusinformationen präsentiert. Dieser Code richtet einen Ereignishandler ein, um den Benutzer zu informieren, wenn der ICE-Verhandlungsprozess abgeschlossen ist.

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
