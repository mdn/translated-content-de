---
title: "RTCPeerConnection: remoteDescription-Eigenschaft"
short-title: remoteDescription
slug: Web/API/RTCPeerConnection/remoteDescription
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`remoteDescription`**-Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurück, die die Sitzung (einschließlich Konfiguration und Medieninformationen) für das entfernte Ende der Verbindung beschreibt. Falls dies noch nicht gesetzt wurde, ist der Wert `null`.

Der zurückgegebene Wert spiegelt typischerweise eine entfernte Beschreibung wider, die über den Signalisierungsserver empfangen wurde (entweder als Angebot oder als Antwort) und dann durch das Aufrufen von [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) in Ihrem Code wirksam gemacht wurde.

## Syntax

```js-nolint
const sessionDescription = peerConnection.remoteDescription
```

Auf einer grundsätzlicheren Ebene ist der zurückgegebene Wert der Wert von [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), falls diese Eigenschaft nicht `null` ist; andernfalls wird der Wert von [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) zurückgegeben. Weitere Details zu diesem Algorithmus und warum er verwendet wird, finden Sie unter [Anstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite.

## Beispiel

Dieses Beispiel betrachtet die `remoteDescription` und zeigt ein Alert-Fenster an, das die Felder `type` und `sdp` des [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekts enthält.

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
