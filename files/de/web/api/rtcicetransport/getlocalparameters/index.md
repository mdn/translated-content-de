---
title: "RTCIceTransport: getLocalParameters()-Methode"
short-title: getLocalParameters()
slug: Web/API/RTCIceTransport/getLocalParameters
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getLocalParameters()`**-Methode der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Schnittstelle gibt ein [`RTCIceParameters`](/de/docs/Web/API/RTCIceParameters)-Objekt zurück, das Informationen enthält, die den lokalen Peer für die Dauer der ICE-Sitzung eindeutig identifizieren.

Die Parameter des lokalen Peers werden während des ICE-Signalings erhalten und dem Transport übergeben, wenn der Client [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufruft.

## Syntax

```js-nolint
getLocalParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein [`RTCIceParameters`](/de/docs/Web/API/RTCIceParameters)-Objekt, das das [`usernameFragment`](/de/docs/Web/API/RTCIceParameters/usernameFragment) und das [`password`](/de/docs/Web/API/RTCIceParameters/password) angibt, welche den lokalen Peer für die Dauer der ICE-Sitzung eindeutig identifizieren.

Gibt `null` zurück, wenn die Parameter noch nicht empfangen wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
