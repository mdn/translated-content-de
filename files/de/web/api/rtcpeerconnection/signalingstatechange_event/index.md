---
title: "RTCPeerConnection: signalingstatechange-Ereignis"
short-title: signalingstatechange
slug: Web/API/RTCPeerConnection/signalingstatechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`signalingstatechange`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um sie darüber zu informieren, dass sich ihr Signalisierungszustand, wie durch die [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState)-Eigenschaft angezeigt, geändert hat.

Dieses Ereignis kann nicht abgebrochen werden und bläst nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("signalingstatechange", (event) => {});

onsignalingstatechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Gegeben eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, und eine `updateStatus()`-Funktion, die dem Benutzer Statusinformationen präsentiert, richtet dieser Code einen Ereignishandler ein, um den Benutzer zu informieren, wenn der ICE-Aushandlungsprozess abgeschlossen ist.

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

Mit Verwendung von `onsignalingstatechange` sieht es so aus:

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
