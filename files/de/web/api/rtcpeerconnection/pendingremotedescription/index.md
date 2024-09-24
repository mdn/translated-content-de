---
title: "RTCPeerConnection: pendingRemoteDescription-Eigenschaft"
short-title: pendingRemoteDescription
slug: Web/API/RTCPeerConnection/pendingRemoteDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`pendingRemoteDescription`** schreibgeschützte Eigenschaft der {{domxref("RTCPeerConnection")}}-Schnittstelle gibt ein {{domxref("RTCSessionDescription")}}-Objekt zurück, das eine geplante Konfigurationsänderung für das entfernte Ende der Verbindung beschreibt.

Dies beschreibt nicht die Verbindung in ihrem jetzigen Zustand, sondern wie sie in naher Zukunft existieren könnte.
Verwenden Sie {{domxref("RTCPeerConnection.currentRemoteDescription")}} oder {{domxref("RTCPeerConnection.remoteDescription")}}, um die aktuelle Sitzungsbeschreibung für den entfernten Endpunkt zu erhalten.
Einzelheiten zu den Unterschieden finden Sie unter [Pending and current descriptions](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite.

## Wert

Wenn eine Änderung der Remote-Beschreibung in Bearbeitung ist, handelt es sich um eine {{domxref("RTCSessionDescription")}}, die die vorgeschlagene Konfiguration beschreibt.
Andernfalls wird `null` zurückgegeben.

## Beispiele

Dieses Beispiel prüft `pendingRemoteDescription`, um festzustellen, ob eine Beschreibungsänderung verarbeitet wird.

```js
const pc = new RTCPeerConnection();
// ...
const sd = pc.pendingRemoteDescription;
if (sd) {
  // Es gibt eine laufende Beschreibungsänderung!
} else {
  // Keine ausstehende Beschreibungsänderung
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Die Hinzufügung von `pendingRemoteDescription` und {{domxref("RTCPeerConnection.currentRemoteDescription", "currentRemoteDescription")}} zur WebRTC-Spezifikation ist relativ neu.
> In Browsern, die sie nicht unterstützen, ist nur {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} verfügbar.

## Siehe auch

- {{domxref("RTCPeerConnection.setRemoteDescription()")}},
  {{domxref("RTCPeerConnection.currentRemoteDescription")}},
  {{domxref("RTCPeerConnection.remoteDescription")}}
- {{domxref("RTCPeerConnection.setLocalDescription()")}},
  {{domxref("RTCPeerConnection.localDescription")}},
  {{domxref("RTCPeerConnection.pendingLocalDescription")}},
  {{domxref("RTCPeerConnection.currentLocalDescription")}}
- [WebRTC](/de/docs/Web/API/WebRTC_API)
