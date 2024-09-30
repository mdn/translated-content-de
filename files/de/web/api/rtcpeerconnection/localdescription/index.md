---
title: "RTCPeerConnection: localDescription-Eigenschaft"
short-title: localDescription
slug: Web/API/RTCPeerConnection/localDescription
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`localDescription`** der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gibt eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurück, die die Sitzung für das lokale Ende der Verbindung beschreibt.
Falls sie noch nicht gesetzt wurde, ist dieser Wert `null`.

## Syntax

```js-nolint
const sessionDescription = peerConnection.localDescription
```

Auf einer grundlegenderen Ebene ist der zurückgegebene Wert der Wert von [`RTCPeerConnection.pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription), falls diese Eigenschaft nicht `null` ist;
anderenfalls wird der Wert von [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) zurückgegeben.
Weitere Informationen zu diesem Algorithmus und warum er verwendet wird, finden Sie unter [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite.

## Beispiel

Dieses Beispiel betrachtet die `localDescription` und zeigt eine Warnung an, die die `type`- und `sdp`-Felder des [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekts enthält.

```js
const pc = new RTCPeerConnection();
// ...
const sd = pc.localDescription;
if (sd) {
  alert(`Local session: type='${sd.type}'; sdp description='${sd.sdp}'`);
} else {
  alert("No local session yet.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), [`RTCPeerConnection.pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription), [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription)
- [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription), [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription), [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
