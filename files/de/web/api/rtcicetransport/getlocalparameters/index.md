---
title: "RTCIceTransport: Methode getLocalParameters()"
short-title: getLocalParameters()
slug: Web/API/RTCIceTransport/getLocalParameters
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getLocalParameters()`** Methode der {{domxref("RTCIceTransport")}} Schnittstelle gibt ein {{domxref("RTCIceParameters")}} Objekt zurück, das Informationen bereitstellt, die den lokalen Peer für die Dauer der ICE-Sitzung eindeutig identifizieren.

Die Parameter des lokalen Peers werden während des ICE-Signalisierens erfasst und an den Transport geliefert, wenn der Client {{domxref("RTCPeerConnection.setLocalDescription()")}} aufruft.

## Syntax

```js-nolint
getLocalParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("RTCIceParameters")}} Objekt, das den {{domxref("RTCIceParameters.usernameFragment", "usernameFragment")}} und das {{domxref("RTCIceParameters.password", "password")}} angibt, die den lokalen Peer für die Dauer der ICE-Sitzung eindeutig identifizieren.

Gibt `null` zurück, wenn die Parameter noch nicht empfangen wurden.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
