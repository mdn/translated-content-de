---
title: "RTCPeerConnection: remoteDescription Eigenschaft"
short-title: remoteDescription
slug: Web/API/RTCPeerConnection/remoteDescription
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("WebRTC")}}

Die **`remoteDescription`** schreibgeschützte Eigenschaft des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Interfaces gibt eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurück, die die Sitzung (einschließlich Konfigurations- und Medieninformationen) für die entfernte Seite der Verbindung beschreibt. Wenn dies noch nicht gesetzt wurde, ist dies `null`.

Der zurückgegebene Wert spiegelt typischerweise eine entfernte Beschreibung wider, die über den Signalisierungsserver empfangen wurde (entweder als Angebot oder Antwort) und dann durch Ihren Code durch Aufruf von [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) als Reaktion in Kraft gesetzt wurde.

## Wert

Auf fundamentalerer Ebene ist der zurückgegebene Wert der Wert von [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), wenn diese Eigenschaft nicht
`null` ist; andernfalls wird der Wert von [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) zurückgegeben.
Siehe [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite für Details zu diesem Algorithmus und dessen Gebrauch.

## Beispiel

Dieses Beispiel betrachtet die `remoteDescription` und zeigt einen Alarm an, der die Felder `type` und `sdp` des [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) Objekts enthält.

```js
const pc = new RTCPeerConnection();
// ...
const sd = pc.remoteDescription;
if (sd) {
  alert(`Remote session: type='${sd.type}'; sdp description='${sd.sdp}'`);
} else {
  alert("No remote session yet.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription), [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription)
- [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), [`RTCPeerConnection.pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription), [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription), [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
