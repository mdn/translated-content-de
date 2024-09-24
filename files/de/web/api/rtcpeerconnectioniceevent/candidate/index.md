---
title: "RTCPeerConnectionIceEvent: candidate Eigenschaft"
short-title: candidate
slug: Web/API/RTCPeerConnectionIceEvent/candidate
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`candidate`**-Eigenschaft
der Schnittstelle {{domxref("RTCPeerConnectionIceEvent")}} gibt den
{{domxref("RTCIceCandidate")}} zurück, der mit dem Ereignis verknüpft ist.

## Wert

Ein {{domxref("RTCIceCandidate")}}-Objekt, das den ICE-Kandidaten darstellt, der empfangen wurde, oder `null`, um anzuzeigen, dass es keine weiteren Kandidaten für diese Verhandlungssitzung gibt.

## Beispiel

```js
pc.onicecandidate = (ev) => {
  alert(
    `The ICE candidate (transport address: '${ev.candidate.candidate}') has been added to this connection.`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
- {{domxref("RTCPeerConnection")}}
