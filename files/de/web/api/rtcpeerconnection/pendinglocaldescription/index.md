---
title: "RTCPeerConnection: pendingLocalDescription-Eigenschaft"
short-title: pendingLocalDescription
slug: Web/API/RTCPeerConnection/pendingLocalDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`pendingLocalDescription`**-Eigenschaft des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine anstehende Konfigurationsänderung für das lokale Ende der Verbindung beschreibt.

Dies beschreibt nicht die Verbindung, wie sie derzeit besteht, sondern wie sie in naher Zukunft existieren könnte. Verwenden Sie [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) oder [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription), um den aktuellen Zustand des Endpunkts zu erhalten. Details zu den Unterschieden finden Sie unter [Anstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Verbindungsseite.

## Wert

Wenn eine lokale Beschreibung in Bearbeitung ist, handelt es sich um eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription), die die vorgeschlagene Konfiguration beschreibt. Andernfalls wird `null` zurückgegeben.

## Beispiele

Dieses Beispiel überprüft die `pendingLocalDescription`, um festzustellen, ob eine Beschreibungsänderung verarbeitet wird.

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
> Die Hinzufügung von `pendingLocalDescription` und [`currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) zur WebRTC-Spezifikation ist relativ neu. In Browsern, die sie nicht unterstützen, ist nur [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) verfügbar.

## Siehe auch

- [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription), [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription)
- [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription), [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription), [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
