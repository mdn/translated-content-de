---
title: "RTCTransportStats: Eigenschaft iceLocalUsernameFragment"
short-title: iceLocalUsernameFragment
slug: Web/API/RTCTransportStats/iceLocalUsernameFragment
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebRTC")}}

Die **`iceLocalUsernameFragment`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String, der das lokale Benutzernamen-Fragment ("ufrag" oder "ice-ufrag") angibt, das die von diesem Transport verwaltete ICE-Interaktionssitzung eindeutig identifiziert.

Das gleiche Benutzernamen-Fragment wird verwendet, um die Sitzung für jede Kommunikation mit dem STUN-Server zu identifizieren.

Diese Eigenschaft hat die gleichen Werte wie die entsprechende lokale [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment)-Eigenschaft.
Sie wird sich ändern, wenn die Verbindung neu verhandelt wird, zum Beispiel bei einem ICE-Neustart oder wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.

## Wert

Ein String, der das Benutzernamen-Fragment enthält, das die laufende ICE-Sitzung auf dem Transport eindeutig identifiziert.

Der String kann bis zu 256 Zeichen lang sein und hat keinen Standardwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
