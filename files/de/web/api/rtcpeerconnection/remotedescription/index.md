---
title: "RTCPeerConnection: remoteDescription-Eigenschaft"
short-title: remoteDescription
slug: Web/API/RTCPeerConnection/remoteDescription
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`remoteDescription`**-Eigenschaft der Schnittstelle {{domxref("RTCPeerConnection")}} gibt eine {{domxref("RTCSessionDescription")}} zurück, die die Sitzung beschreibt (einschließlich Konfigurations- und Medieninformationen) für das entfernte Ende der Verbindung.
Falls diese noch nicht festgelegt wurde, ist dieser Wert `null`.

Der zurückgegebene Wert entspricht typischerweise einer entfernten Beschreibung, die über den Signalisierungsserver empfangen wurde (entweder als Angebot oder als Antwort) und dann durch Ihren Code in Kraft gesetzt wurde, indem {{domxref("RTCPeerConnection.setRemoteDescription()")}} als Reaktion auf diesen Aufruf verwendet wird.

## Syntax

```js-nolint
const sessionDescription = peerConnection.remoteDescription
```

Auf einer grundsätzlicheren Ebene ist der zurückgegebene Wert der von {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, falls diese Eigenschaft nicht `null` ist; andernfalls wird der Wert von {{domxref("RTCPeerConnection.currentRemoteDescription")}} zurückgegeben. Siehe [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite für Details zu diesem Algorithmus und warum er verwendet wird.

## Beispiel

Dieses Beispiel betrachtet die `remoteDescription` und zeigt einen Alarm mit den Feldern `type` und `sdp` des {{domxref("RTCSessionDescription")}}-Objekts an.

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

- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- {{domxref("RTCPeerConnection.setLocalDescription()")}}, {{domxref("RTCPeerConnection.pendingLocalDescription")}}, {{domxref("RTCPeerConnection.currentLocalDescription")}}, {{domxref("RTCPeerConnection.localDescription")}}
- [WebRTC](/de/docs/Web/API/WebRTC_API)
