---
title: "RTCIceTransport: getRemoteParameters()-Methode"
short-title: getRemoteParameters()
slug: Web/API/RTCIceTransport/getRemoteParameters
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getRemoteParameters()`**-Methode des {{domxref("RTCIceTransport")}}-Interfaces gibt ein {{domxref("RTCIceParameters")}}-Objekt zurück, das Informationen bereitstellt, die den entfernten Peer für die Dauer der ICE-Sitzung eindeutig identifizieren.

Die Parameter des entfernten Peers werden während des ICE-Signalings empfangen und an das Transportmittel übermittelt, wenn der Client {{domxref("RTCPeerConnection.setRemoteDescription()")}} aufruft.

## Syntax

```js-nolint
getRemoteParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("RTCIceParameters")}}-Objekt, das das {{domxref("RTCIceParameters.usernameFragment", "usernameFragment")}} und das {{domxref("RTCIceParameters.password", "password")}} angibt, die den entfernten Peer für die Dauer der ICE-Sitzung eindeutig identifizieren.

Gibt `null` zurück, falls die Parameter noch nicht empfangen wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
