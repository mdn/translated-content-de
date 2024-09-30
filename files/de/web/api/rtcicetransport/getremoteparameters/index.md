---
title: "RTCIceTransport: getRemoteParameters() Methode"
short-title: getRemoteParameters()
slug: Web/API/RTCIceTransport/getRemoteParameters
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getRemoteParameters()`** Methode der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Schnittstelle gibt ein [`RTCIceParameters`](/de/docs/Web/API/RTCIceParameters)-Objekt zurück, das Informationen bietet, die den entfernten Peer für die Dauer der ICE-Sitzung eindeutig identifizieren.

Die Parameter des entfernten Peers werden während des ICE-Signalisierens empfangen und an das Transportprotokoll übermittelt, wenn der Client [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufruft.

## Syntax

```js-nolint
getRemoteParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein [`RTCIceParameters`](/de/docs/Web/API/RTCIceParameters)-Objekt, das den [`usernameFragment`](/de/docs/Web/API/RTCIceParameters/usernameFragment) und das [`password`](/de/docs/Web/API/RTCIceParameters/password) angibt, die den entfernten Peer für die Dauer der ICE-Sitzung eindeutig identifizieren.

Gibt `null` zurück, wenn die Parameter noch nicht empfangen wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
