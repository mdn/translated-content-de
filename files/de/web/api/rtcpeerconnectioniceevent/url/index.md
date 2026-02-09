---
title: "RTCPeerConnectionIceEvent: url-Eigenschaft"
short-title: url
slug: Web/API/RTCPeerConnectionIceEvent/url
l10n:
  sourceCommit: edfa7accf30f93ad25735fee3bffd118f107bea9
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`url`**-Eigenschaft der Schnittstelle [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent) gibt die URL des {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Servers zurück, der verwendet wurde, um den ICE-Kandidaten zu sammeln, der das Ereignis verursacht hat. Wenn der Kandidat nicht von einem {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server gesammelt wurde, ist der Wert `null`.

> [!NOTE]
> Diese Eigenschaft wird von der Spezifikation zugunsten der `url`-Eigenschaft auf der [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Schnittstelle selbst als veraltet betrachtet.

## Wert

Ein String, der die URL des {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Servers enthält, der verwendet wurde, um diesen Kandidaten zu sammeln, oder `null`, wenn der Kandidat nicht von einem Server gesammelt wurde (zum Beispiel ein lokaler Host-Kandidat).

## Beispiele

### Aufzeichnen der ICE-Server-URL

```js
pc.onicecandidate = (event) => {
  if (event.candidate) {
    console.log(`Candidate gathered from: ${event.url}`);
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
- [`RTCPeerConnectionIceEvent.candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
