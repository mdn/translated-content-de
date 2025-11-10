---
title: "RTCPeerConnection: pendingLocalDescription-Eigenschaft"
short-title: pendingLocalDescription
slug: Web/API/RTCPeerConnection/pendingLocalDescription
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`pendingLocalDescription`** der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine ausstehende Konfigurationsänderung für das lokale Ende der Verbindung beschreibt.

Dies beschreibt nicht den aktuellen Zustand der Verbindung, sondern wie sie in naher Zukunft existieren könnte.
Verwenden Sie [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) oder [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription), um den aktuellen Zustand des Endpunkts zu erhalten.
Einzelheiten zu den Unterschieden finden Sie unter [Pending and current descriptions](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC Connectivity-Seite.

## Wert

Wenn eine lokale Beschreibung geändert wird, handelt es sich um ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription), das die vorgeschlagene Konfiguration beschreibt.
Andernfalls wird `null` zurückgegeben.

## Beispiele

Dieses Beispiel betrachtet die `pendingLocalDescription`, um zu bestimmen, ob eine Beschreibungsänderung verarbeitet wird.

```js
const pc = new RTCPeerConnection();
// …
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
