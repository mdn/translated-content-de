---
title: "RTCPeerConnection: localDescription-Eigenschaft"
short-title: localDescription
slug: Web/API/RTCPeerConnection/localDescription
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`localDescription`** schreibgeschützte Eigenschaft der {{domxref("RTCPeerConnection")}}-Schnittstelle gibt eine {{domxref("RTCSessionDescription")}} zurück, die die Sitzung für das lokale Ende der Verbindung beschreibt.
Falls sie noch nicht gesetzt wurde, ist diese `null`.

## Syntax

```js-nolint
const sessionDescription = peerConnection.localDescription
```

Auf einer grundsätzlicheren Ebene ist der zurückgegebene Wert der Wert von {{domxref("RTCPeerConnection.pendingLocalDescription")}}, wenn diese Eigenschaft nicht `null` ist;
andernfalls wird der Wert von {{domxref("RTCPeerConnection.currentLocalDescription")}} zurückgegeben.
Siehe [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Verbindungsseite für Details zu diesem Algorithmus und warum er verwendet wird.

## Beispiel

Dieses Beispiel betrachtet die `localDescription` und zeigt eine Warnung an, die die `type`- und `sdp`-Felder des {{domxref("RTCSessionDescription")}}-Objekts enthält.

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

- {{domxref("RTCPeerConnection.setLocalDescription()")}}, {{domxref("RTCPeerConnection.pendingLocalDescription")}}, {{domxref("RTCPeerConnection.currentLocalDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/de/docs/Web/API/WebRTC_API)
