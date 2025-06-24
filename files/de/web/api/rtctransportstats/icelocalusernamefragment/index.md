---
title: "RTCTransportStats: iceLocalUsernameFragment-Eigenschaft"
short-title: iceLocalUsernameFragment
slug: Web/API/RTCTransportStats/iceLocalUsernameFragment
l10n:
  sourceCommit: 185acd0fe4bd6d0f4a5c6d79fa46b1b748d09ea1
---

{{APIRef("WebRTC")}}

Die **`iceLocalUsernameFragment`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String, der das lokale Benutzername-Fragment ("ufrag" oder "ice-ufrag") angibt, das die ICE-Interaktionssitzung, die von diesem Transport verwaltet wird, eindeutig identifiziert.

Das gleiche Benutzername-Fragment wird verwendet, um die Sitzung für jegliche Kommunikation mit dem STUN-Server zu identifizieren.

Es hat die gleichen Werte wie die entsprechende lokale [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment)-Eigenschaft.
Es ändert sich, wenn die Verbindung neu verhandelt wird, zum Beispiel bei einem ICE-Neustart, oder wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.

## Wert

Ein String, der das Benutzername-Fragment enthält, das die laufende ICE-Sitzung auf dem Transport eindeutig identifiziert.

Der String kann bis zu 256 Zeichen lang sein und hat keinen Standardwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
