---
title: "RTCPeerConnection: pendingLocalDescription-Eigenschaft"
short-title: pendingLocalDescription
slug: Web/API/RTCPeerConnection/pendingLocalDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`pendingLocalDescription`** der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine ausstehende Konfigurationsänderung für die lokale Seite der Verbindung beschreibt.

Dies beschreibt nicht die aktuelle Verbindung, sondern wie sie möglicherweise in naher Zukunft existieren wird.
Verwenden Sie [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) oder [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription), um den aktuellen Status des Endpunkts zu erhalten.
Für Details zu den Unterschieden siehe [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite.

## Wert

Wenn eine Änderung der lokalen Beschreibung im Gange ist, wird eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurückgegeben, die die vorgeschlagene Konfiguration beschreibt.
Andernfalls wird `null` zurückgegeben.

## Beispiele

Dieses Beispiel betrachtet die `pendingLocalDescription`, um festzustellen, ob eine Beschreibung geändert wird.

```js
const pc = new RTCPeerConnection();
// ...
const sd = pc.pendingLocalDescription;
if (sd) {
  // There's a description change underway!
} else {
  // No description change pending
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Die Hinzufügung von `pendingLocalDescription` und [`currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) zur WebRTC-Spezifikation ist relativ neu.
> In Browsern, die diese nicht unterstützen, ist nur [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) verfügbar.

## Siehe auch

- [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription), [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription)
- [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription), [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription), [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
