---
title: "RTCPeerConnectionIceEvent: candidate-Eigenschaft"
short-title: candidate
slug: Web/API/RTCPeerConnectionIceEvent/candidate
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`candidate`**-Eigenschaft
der [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)-Schnittstelle gibt den
[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) zurück, der mit dem Ereignis verknüpft ist.

## Wert

Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt, das den ICE-Kandidaten repräsentiert, der empfangen wurde, oder `null`, um anzuzeigen, dass es keine weiteren Kandidaten für diese Verhandlungssitzung gibt.

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

- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
