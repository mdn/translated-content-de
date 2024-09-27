---
title: "RTCPeerConnection: pendingRemoteDescription-Eigenschaft"
short-title: pendingRemoteDescription
slug: Web/API/RTCPeerConnection/pendingRemoteDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`pendingRemoteDescription`** der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine ausstehende Konfigurationsänderung für das entfernte Ende der Verbindung beschreibt.

Dies beschreibt nicht die Verbindung, wie sie derzeit besteht, sondern wie sie in naher Zukunft existieren könnte.
Verwenden Sie [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) oder [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription), um die aktuelle Sitzungsbeschreibung für den entfernten Endpunkt zu erhalten.
Einzelheiten zu den Unterschieden finden Sie unter [Pending and current descriptions](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite.

## Wert

Wenn eine Änderung der entfernten Beschreibung im Gange ist, handelt es sich um eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription), die die vorgeschlagene Konfiguration beschreibt.
Andernfalls wird `null` zurückgegeben.

## Beispiele

In diesem Beispiel wird `pendingRemoteDescription` untersucht, um festzustellen, ob eine Änderungsbeschreibung verarbeitet wird.

```js
const pc = new RTCPeerConnection();
// ...
const sd = pc.pendingRemoteDescription;
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
> Die Hinzufügung von `pendingRemoteDescription` und [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) zur WebRTC-Spezifikation ist relativ neu.
> In Browsern, die diese nicht unterstützen, ist nur [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) verfügbar.

## Siehe auch

- [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription),
  [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription),
  [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription)
- [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription),
  [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription),
  [`RTCPeerConnection.pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription),
  [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
