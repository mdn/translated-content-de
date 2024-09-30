---
title: "RTCPeerConnection: pendingRemoteDescription-Eigenschaft"
short-title: pendingRemoteDescription
slug: Web/API/RTCPeerConnection/pendingRemoteDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`pendingRemoteDescription`** der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine bevorstehende Konfigurationsänderung für das entfernte Ende der Verbindung beschreibt.

Dies beschreibt nicht die aktuelle Verbindung, sondern wie sie in naher Zukunft existieren könnte. Verwenden Sie [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) oder [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription), um die aktuelle Sitzungsbeschreibung für den entfernten Endpunkt zu erhalten.
Weitere Informationen zu den Unterschieden finden Sie unter [Bevorstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite.

## Wert

Wenn eine Änderung der entfernten Beschreibung im Gange ist, handelt es sich um ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription), das die vorgeschlagene Konfiguration beschreibt.
Andernfalls wird `null` zurückgegeben.

## Beispiele

Dieses Beispiel betrachtet die `pendingRemoteDescription`, um festzustellen, ob eine Beschreibungsänderung verarbeitet wird.

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
> Die Ergänzung von `pendingRemoteDescription` und [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) zur WebRTC-Spezifikation ist relativ neu.
> In Browsern, die sie nicht unterstützen, ist nur [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) verfügbar.

## Siehe auch

- [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription),
  [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription),
  [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription)
- [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription),
  [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription),
  [`RTCPeerConnection.pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription),
  [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
