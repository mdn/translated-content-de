---
title: "RTCTransportStats: iceLocalUsernameFragment-Eigenschaft"
short-title: iceLocalUsernameFragment
slug: Web/API/RTCTransportStats/iceLocalUsernameFragment
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`iceLocalUsernameFragment`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String, der das lokale Benutzername-Fragment ("ufrag" oder "ice-ufrag") angibt, das die ICE-Interaktionssitzung, die von diesem Transport verwaltet wird, eindeutig identifiziert.

Dasselbe Benutzername-Fragment wird verwendet, um die Sitzung für jede Kommunikation mit dem STUN-Server zu identifizieren.

Dies hat dieselben Werte wie die entsprechende lokale [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment)-Eigenschaft.
Es wird sich ändern, wenn die Verbindung neu verhandelt wird, beispielsweise bei einem ICE-Neustart oder wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.

## Wert

Ein String, der das Benutzername-Fragment enthält, das die laufende ICE-Sitzung auf dem Transport eindeutig identifiziert.

Der String kann bis zu 256 Zeichen lang sein und hat keinen Standardwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
