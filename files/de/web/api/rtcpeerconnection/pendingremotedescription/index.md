---
title: "RTCPeerConnection: pendingRemoteDescription Eigenschaft"
short-title: pendingRemoteDescription
slug: Web/API/RTCPeerConnection/pendingRemoteDescription
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebRTC")}}

Die **`pendingRemoteDescription`** schreibgeschützte Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine anstehende Konfigurationsänderung für das entfernte Ende der Verbindung beschreibt.

Dies beschreibt nicht die aktuelle Verbindung, sondern wie sie möglicherweise in naher Zukunft existieren könnte.
Verwenden Sie [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) oder [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription), um die aktuelle Sitzungsbeschreibung für das entfernte Endpunkt zu erhalten.
Für Details zu den Unterschieden siehe [Anstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite.

## Wert

Wenn eine Änderung der Remote-Beschreibung in Bearbeitung ist, handelt es sich um eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription), die die vorgeschlagene Konfiguration beschreibt.
Andernfalls wird `null` zurückgegeben.

## Beispiele

In diesem Beispiel wird `pendingRemoteDescription` betrachtet, um festzustellen, ob eine Beschreibung geändert wird.

```js
const pc = new RTCPeerConnection();
// …
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
> Die Aufnahme von `pendingRemoteDescription` und [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) in die WebRTC-Spezifikation ist relativ neu.
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
