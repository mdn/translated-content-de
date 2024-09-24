---
title: "RTCPeerConnection: pendingLocalDescription-Eigenschaft"
short-title: pendingLocalDescription
slug: Web/API/RTCPeerConnection/pendingLocalDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`pendingLocalDescription`** der Schnittstelle {{domxref("RTCPeerConnection")}} gibt ein {{domxref("RTCSessionDescription")}}-Objekt zurück, das eine ausstehende Konfigurationsänderung für das lokale Ende der Verbindung beschreibt.

Dies beschreibt nicht die Verbindung im aktuellen Zustand, sondern wie sie in naher Zukunft existieren könnte.
Verwenden Sie {{domxref("RTCPeerConnection.currentLocalDescription")}} oder {{domxref("RTCPeerConnection.localDescription")}}, um den aktuellen Zustand des Endpunkts zu erhalten. Einzelheiten zum Unterschied finden Sie unter [Pending and current descriptions](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC Connectivity-Seite.

## Wert

Wenn eine Änderung der lokalen Beschreibung im Gange ist, handelt es sich um eine {{domxref("RTCSessionDescription")}}, die die vorgeschlagene Konfiguration beschreibt.
Andernfalls gibt dies `null` zurück.

## Beispiele

Dieses Beispiel prüft die `pendingLocalDescription`, um festzustellen, ob eine Beschreibung geändert wird.

```js
const pc = new RTCPeerConnection();
// ...
const sd = pc.pendingLocalDescription;
if (sd) {
  // Es wird eine Beschreibung geändert!
} else {
  // Keine ausstehende Beschreibungsänderung
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Die Hinzufügung von `pendingLocalDescription` und {{domxref("RTCPeerConnection.currentLocalDescription", "currentLocalDescription")}} zur WebRTC-Spezifikation ist relativ neu.
> In Browsern, die sie nicht unterstützen, ist nur {{domxref("RTCPeerConnection.localDescription", "localDescription")}} verfügbar.

## Siehe auch

- {{domxref("RTCPeerConnection.setLocalDescription()")}}, {{domxref("RTCPeerConnection.currentLocalDescription")}}, {{domxref("RTCPeerConnection.localDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/de/docs/Web/API/WebRTC_API)
