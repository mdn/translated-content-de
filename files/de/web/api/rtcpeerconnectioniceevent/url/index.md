---
title: "RTCPeerConnectionIceEvent: url Eigenschaft"
short-title: url
slug: Web/API/RTCPeerConnectionIceEvent/url
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("WebRTC")}}{{deprecated_header}}

Die schreibgeschützte **`url`**-Eigenschaft der [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)-Schnittstelle gibt die URL des {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Servers zurück, der zur Sammlung des ICE-Kandidaten verwendet wurde, der das Ereignis verursacht hat. Wenn der Kandidat nicht von einem {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Server gesammelt wurde, ist der Wert `null`.

> [!NOTE]
> Diese Eigenschaft wird von der Spezifikation als veraltet angesehen zugunsten der `url`-Eigenschaft in der [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Schnittstelle selbst.

## Wert

Ein String, der die URL des {{Glossary("STUN", "STUN")}}- oder {{Glossary("TURN", "TURN")}}-Servers enthält, der zur Sammlung dieses Kandidaten verwendet wurde, oder `null`, wenn der Kandidat nicht von einem Server gesammelt wurde (zum Beispiel ein lokaler Host-Kandidat).

## Beispiele

### Protokollieren der ICE-Server-URL

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
